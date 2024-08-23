import {Component, OnInit} from '@angular/core';
import {EmployeeSummary} from './modules/model/employee-summary.model';
import {EmployeeService} from './modules/service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSource: EmployeeSummary[] = [];

  constructor(private employeeService: EmployeeService) {}

  async ngOnInit(): Promise<void> {
    await this.loadEmployees();
  }

  private async loadEmployees(): Promise<void> {
    try {
      this.dataSource = await this.employeeService.getEmployeeSummaries();
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }
}
