import {Component, Input} from '@angular/core';
import {EmployeeSummary} from "../../model/employee-summary.model";

@Component({
  selector: 'app-employee-time-table',
  templateUrl: './employee-time-table.component.html',
  styleUrl: './employee-time-table.component.css'
})
export class EmployeeTimeTableComponent {
  displayedColumns: string[] = ['name', 'time', 'actions'];
  @Input() employees!: EmployeeSummary[];
}
