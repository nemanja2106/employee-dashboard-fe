import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {EmployeeSummary} from '../model/employee-summary.model';
import {EmployeeActivity} from "../model/employee-activity.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {
  }

  async getEmployeeSummaries(): Promise<EmployeeSummary[]> {
    const employeeSummaries$ = this.http.get<EmployeeActivity[]>(environment.employeeActivitiesUrl).pipe(
      map(this.convertToEmployeeSummaries),
      map(this.sortByTotalHours)
    );
    return firstValueFrom(employeeSummaries$);
  }

  private convertToEmployeeSummaries = (activities: EmployeeActivity[]): EmployeeSummary[] => {
    const employeeMap: { [key: string]: EmployeeSummary } = {};

    activities.forEach(activity => {
      if (this.isValidActivity(activity)) {
        const hoursWorked = this.calculateHoursWorked(activity);
        this.addOrUpdateEmployeeSummary(employeeMap, activity.EmployeeName, hoursWorked);
      }
    });

    return Object.values(employeeMap);
  };

  private sortByTotalHours = (employeeSummaries: EmployeeSummary[]): EmployeeSummary[] => {
    return employeeSummaries.sort((a, b) => b.totalTimeWorked() - a.totalTimeWorked());
  };

  private isValidActivity(activity: EmployeeActivity): boolean {
    return activity.DeletedOn === null &&
      activity.EmployeeName != null &&
      new Date(activity.EndTimeUtc).getTime() > new Date(activity.StarTimeUtc).getTime();
  }

  private calculateHoursWorked(activity: EmployeeActivity): number {
    return (new Date(activity.EndTimeUtc).getTime() - new Date(activity.StarTimeUtc).getTime()) / (1000 * 60 * 60);
  }

  private addOrUpdateEmployeeSummary(
    employeeMap: { [key: string]: EmployeeSummary },
    employeeName: string | null,
    hoursWorked: number
  ): void {
    if (!employeeName) {
      return;
    }

    if (!employeeMap[employeeName]) {
      employeeMap[employeeName] = new EmployeeSummary(employeeName, hoursWorked);
    } else {
      employeeMap[employeeName].addTimeWorked(hoursWorked);
    }
  }

}
