export class EmployeeActivity {
  constructor(
    public DeletedOn: Date | null,
    public EmployeeName: string | null,
    public StarTimeUtc: string,
    public EndTimeUtc: string
  ) {}
}
