import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../material/material.module";
import { EmployeeTimeTableComponent } from "./employee-time-table/employee-time-table.component";
import { EmployeeTimePieChartComponent } from "./employee-time-pie-chart/employee-time-pie-chart.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    EmployeeTimeTableComponent,
    EmployeeTimePieChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule
  ],
  exports: [
    EmployeeTimeTableComponent,
    EmployeeTimePieChartComponent
  ]
})
export class WidgetsModule {}
