import { Component, Input, OnChanges } from '@angular/core';
import { EmployeeSummary } from '../../model/employee-summary.model';
import {LegendPosition} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-employee-time-pie-chart',
  templateUrl: './employee-time-pie-chart.component.html',
  styleUrls: ['./employee-time-pie-chart.component.css']
})
export class EmployeeTimePieChartComponent implements OnChanges {
  @Input() employees!: EmployeeSummary[];

  public pieChartData: any[] = [];

  ngOnChanges(): void {
    this.updateChartData();
  }

  private updateChartData(): void {
    if (this.employees?.length) {
      const totalHours = this.employees.reduce((sum, employee) => sum + employee.totalTimeWorked(), 0);
      this.pieChartData = this.employees.map(employee => ({
        name: employee.employeeName,
        value: (employee.totalTimeWorked() / totalHours) * 100
      }));
    }
  }

  protected readonly LegendPosition = LegendPosition;
}
