import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../material/material.module";
import { EmployeeTimeTableComponent } from "./employee-time-table/employee-time-table.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    EmployeeTimeTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule
  ],
  exports: [
    EmployeeTimeTableComponent
  ]
})
export class WidgetsModule {}
