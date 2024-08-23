export class EmployeeSummary {
  constructor(public employeeName: string | null, private totalHours: number = 0) {
  }

  totalTimeWorked(): number {
    return this.totalHours;
  }

  addTimeWorked(hours: number): void {
    this.totalHours += hours;
  }
}
