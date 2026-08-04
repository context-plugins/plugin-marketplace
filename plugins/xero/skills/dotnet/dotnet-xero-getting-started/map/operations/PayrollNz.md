# PayrollNz — operations

Accessor: `client.PayrollNz` · Source: `Api/PayrollNz.cs` · 71 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ApproveTimesheet2
- **HTTP**: `POST /Timesheets/{TimesheetID}/Approve` (Default8 (api))
- **Signature**: `ApproveTimesheet2(Guid timesheetId, string xeroTenantId, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject2`
- **Error**: `SdkException<ApproveTimesheet2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateDeduction
- **HTTP**: `POST /Deductions` (Default8 (api))
- **Signature**: `CreateDeduction(string xeroTenantId, string? idempotencyKey, Deduction body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DeductionObject`
- **Error**: `SdkException<CreateDeductionError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEarningsRate
- **HTTP**: `POST /EarningsRates` (Default8 (api))
- **Signature**: `CreateEarningsRate(string xeroTenantId, string? idempotencyKey, EarningsRate1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EarningsRateObject`
- **Error**: `SdkException<CreateEarningsRateError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployee2
- **HTTP**: `POST /Employees` (Default8 (api))
- **Signature**: `CreateEmployee2(string xeroTenantId, string? idempotencyKey, Employee2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeObject`
- **Error**: `SdkException<CreateEmployee2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeEarningsTemplate
- **HTTP**: `POST /Employees/{EmployeeID}/PayTemplates/Earnings` (Default8 (api))
- **Signature**: `CreateEmployeeEarningsTemplate(Guid employeeId, string xeroTenantId, string? idempotencyKey, EarningsTemplate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EarningsTemplateObject`
- **Error**: `SdkException<CreateEmployeeEarningsTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeLeave
- **HTTP**: `POST /Employees/{EmployeeID}/Leave` (Default8 (api))
- **Signature**: `CreateEmployeeLeave(Guid employeeId, string xeroTenantId, string? idempotencyKey, EmployeeLeave body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveObject`
- **Error**: `SdkException<CreateEmployeeLeaveError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeLeaveSetup
- **HTTP**: `POST /Employees/{EmployeeID}/LeaveSetup` (Default8 (api))
- **Signature**: `CreateEmployeeLeaveSetup(Guid employeeId, string xeroTenantId, string? idempotencyKey, EmployeeLeaveSetup body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveSetupObject`
- **Error**: `SdkException<CreateEmployeeLeaveSetupError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeLeaveType
- **HTTP**: `POST /Employees/{EmployeeID}/LeaveTypes` (Default8 (api))
- **Signature**: `CreateEmployeeLeaveType(Guid employeeId, string xeroTenantId, string? idempotencyKey, EmployeeLeaveType body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveTypeObject`
- **Error**: `SdkException<CreateEmployeeLeaveTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeOpeningBalances
- **HTTP**: `POST /Employees/{EmployeeID}/OpeningBalances` (Default8 (api))
- **Signature**: `CreateEmployeeOpeningBalances(Guid employeeId, string xeroTenantId, string? idempotencyKey, IReadOnlyList<EmployeeOpeningBalance> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeOpeningBalancesObject`
- **Error**: `SdkException<CreateEmployeeOpeningBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeePaymentMethod
- **HTTP**: `POST /Employees/{EmployeeID}/PaymentMethods` (Default8 (api))
- **Signature**: `CreateEmployeePaymentMethod(Guid employeeId, string xeroTenantId, string? idempotencyKey, PaymentMethod body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentMethodObject`
- **Error**: `SdkException<CreateEmployeePaymentMethodError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeSalaryAndWage
- **HTTP**: `POST /Employees/{EmployeeID}/SalaryAndWages` (Default8 (api))
- **Signature**: `CreateEmployeeSalaryAndWage(Guid employeeId, string xeroTenantId, string? idempotencyKey, SalaryAndWage body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SalaryAndWageObject`
- **Error**: `SdkException<CreateEmployeeSalaryAndWageError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeWorkingPattern
- **HTTP**: `POST /Employees/{EmployeeID}/Working-Patterns` (Default8 (api))
- **Signature**: `CreateEmployeeWorkingPattern(Guid employeeId, string xeroTenantId, string? idempotencyKey, EmployeeWorkingPatternWithWorkingWeeksRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeWorkingPatternWithWorkingWeeksObject`
- **Error**: `SdkException<CreateEmployeeWorkingPatternError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployment
- **HTTP**: `POST /Employees/{EmployeeID}/Employment` (Default8 (api))
- **Signature**: `CreateEmployment(Guid employeeId, string xeroTenantId, string? idempotencyKey, Employment body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmploymentObject`
- **Error**: `SdkException<CreateEmploymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateLeaveType
- **HTTP**: `POST /LeaveTypes` (Default8 (api))
- **Signature**: `CreateLeaveType(string xeroTenantId, string? idempotencyKey, LeaveType1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LeaveTypeObject`
- **Error**: `SdkException<CreateLeaveTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateMultipleEmployeeEarningsTemplate
- **HTTP**: `POST /Employees/{EmployeeID}/PayTemplateEarnings` (Default8 (api))
- **Signature**: `CreateMultipleEmployeeEarningsTemplate(Guid employeeId, string xeroTenantId, string? idempotencyKey, IReadOnlyList<EarningsTemplate> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeEarningsTemplates`
- **Error**: `SdkException<CreateMultipleEmployeeEarningsTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePayRun2
- **HTTP**: `POST /PayRuns` (Default8 (api))
- **Signature**: `CreatePayRun2(string xeroTenantId, string? idempotencyKey, PayRun1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayRunObject`
- **Error**: `SdkException<CreatePayRun2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePayRunCalendar
- **HTTP**: `POST /PayRunCalendars` (Default8 (api))
- **Signature**: `CreatePayRunCalendar(string xeroTenantId, string? idempotencyKey, PayRunCalendar body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayRunCalendarObject`
- **Error**: `SdkException<CreatePayRunCalendarError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateReimbursement
- **HTTP**: `POST /Reimbursements` (Default8 (api))
- **Signature**: `CreateReimbursement(string xeroTenantId, string? idempotencyKey, Reimbursement body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ReimbursementObject`
- **Error**: `SdkException<CreateReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSuperannuation
- **HTTP**: `POST /Superannuations` (Default8 (api))
- **Signature**: `CreateSuperannuation(string xeroTenantId, string? idempotencyKey, Benefit body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SuperannuationObject`
- **Error**: `SdkException<CreateSuperannuationError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTimesheet3
- **HTTP**: `POST /Timesheets` (Default8 (api))
- **Signature**: `CreateTimesheet3(string xeroTenantId, string? idempotencyKey, Timesheet2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject2`
- **Error**: `SdkException<CreateTimesheet3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTimesheetLine2
- **HTTP**: `POST /Timesheets/{TimesheetID}/Lines` (Default8 (api))
- **Signature**: `CreateTimesheetLine2(Guid timesheetId, string xeroTenantId, string? idempotencyKey, TimesheetLine1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLineObject`
- **Error**: `SdkException<CreateTimesheetLine2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEmployeeEarningsTemplate
- **HTTP**: `DELETE /Employees/{EmployeeID}/PayTemplates/Earnings/{PayTemplateEarningID}` (Default8 (api))
- **Signature**: `DeleteEmployeeEarningsTemplate(Guid employeeId, Guid payTemplateEarningId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EarningsTemplateObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEmployeeLeave
- **HTTP**: `DELETE /Employees/{EmployeeID}/Leave/{LeaveID}` (Default8 (api))
- **Signature**: `DeleteEmployeeLeave(Guid employeeId, Guid leaveId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEmployeeSalaryAndWage
- **HTTP**: `DELETE /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}` (Default8 (api))
- **Signature**: `DeleteEmployeeSalaryAndWage(Guid employeeId, Guid salaryAndWagesId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SalaryAndWageObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEmployeeWorkingPattern
- **HTTP**: `DELETE /Employees/{EmployeeID}/Working-Patterns/{EmployeeWorkingPatternID}` (Default8 (api))
- **Signature**: `DeleteEmployeeWorkingPattern(Guid employeeId, Guid employeeWorkingPatternId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveObject`
- **Error**: `SdkException<DeleteEmployeeWorkingPatternError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTimesheet2
- **HTTP**: `DELETE /Timesheets/{TimesheetID}` (Default8 (api))
- **Signature**: `DeleteTimesheet2(Guid timesheetId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLine1`
- **Error**: `SdkException<DeleteTimesheet2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTimesheetLine2
- **HTTP**: `DELETE /Timesheets/{TimesheetID}/Lines/{TimesheetLineID}` (Default8 (api))
- **Signature**: `DeleteTimesheetLine2(Guid timesheetId, Guid timesheetLineId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLine1`
- **Error**: `SdkException<DeleteTimesheetLine2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDeduction
- **HTTP**: `GET /Deductions/{deductionId}` (Default8 (api))
- **Signature**: `GetDeduction(Guid deductionId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeductionObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDeductions
- **HTTP**: `GET /Deductions` (Default8 (api))
- **Signature**: `GetDeductions(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `Deductions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetEarningsRate
- **HTTP**: `GET /EarningsRates/{EarningsRateID}` (Default8 (api))
- **Signature**: `GetEarningsRate(Guid earningsRateId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EarningsRateObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEarningsRates
- **HTTP**: `GET /EarningsRates` (Default8 (api))
- **Signature**: `GetEarningsRates(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `EarningsRates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetEmployee2
- **HTTP**: `GET /Employees/{EmployeeID}` (Default8 (api))
- **Signature**: `GetEmployee2(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeLeaveBalances
- **HTTP**: `GET /Employees/{EmployeeID}/LeaveBalances` (Default8 (api))
- **Signature**: `GetEmployeeLeaveBalances(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveBalances`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeLeavePeriods
- **HTTP**: `GET /Employees/{EmployeeID}/LeavePeriods` (Default8 (api))
- **Signature**: `GetEmployeeLeavePeriods(Guid employeeId, DateTimeOffset? startDate, DateTimeOffset? endDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startDate` — nullable, no default → **must pass explicitly**
  - `endDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startDate` ← `startDate`, `endDate` ← `endDate`
- **Returns**: `LeavePeriods`
- **Error**: `SdkException<GetEmployeeLeavePeriodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeLeaveTypes
- **HTTP**: `GET /Employees/{EmployeeID}/LeaveTypes` (Default8 (api))
- **Signature**: `GetEmployeeLeaveTypes(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveTypes`
- **Error**: `SdkException<GetEmployeeLeaveTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeLeaves
- **HTTP**: `GET /Employees/{EmployeeID}/Leave` (Default8 (api))
- **Signature**: `GetEmployeeLeaves(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaves`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeOpeningBalances
- **HTTP**: `GET /Employees/{EmployeeID}/OpeningBalances` (Default8 (api))
- **Signature**: `GetEmployeeOpeningBalances(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeOpeningBalancesObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeePayTemplates
- **HTTP**: `GET /Employees/{EmployeeID}/PayTemplates` (Default8 (api))
- **Signature**: `GetEmployeePayTemplates(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeePayTemplates`
- **Error**: `SdkException<GetEmployeePayTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeePaymentMethod
- **HTTP**: `GET /Employees/{EmployeeID}/PaymentMethods` (Default8 (api))
- **Signature**: `GetEmployeePaymentMethod(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentMethodObject`
- **Error**: `SdkException<GetEmployeePaymentMethodError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeSalaryAndWage
- **HTTP**: `GET /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}` (Default8 (api))
- **Signature**: `GetEmployeeSalaryAndWage(Guid employeeId, Guid salaryAndWagesId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SalaryAndWages`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeSalaryAndWages
- **HTTP**: `GET /Employees/{EmployeeID}/SalaryAndWages` (Default8 (api))
- **Signature**: `GetEmployeeSalaryAndWages(Guid employeeId, int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `SalaryAndWages`
- **Error**: `SdkException<GetEmployeeSalaryAndWagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetEmployeeTax
- **HTTP**: `GET /Employees/{EmployeeID}/Tax` (Default8 (api))
- **Signature**: `GetEmployeeTax(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeTaxObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeWorkingPattern
- **HTTP**: `GET /Employees/{EmployeeID}/Working-Patterns/{EmployeeWorkingPatternID}` (Default8 (api))
- **Signature**: `GetEmployeeWorkingPattern(Guid employeeId, Guid employeeWorkingPatternId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeWorkingPatternWithWorkingWeeksObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeWorkingPatterns
- **HTTP**: `GET /Employees/{EmployeeID}/Working-Patterns` (Default8 (api))
- **Signature**: `GetEmployeeWorkingPatterns(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeWorkingPatternsObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployees2
- **HTTP**: `GET /Employees` (Default8 (api))
- **Signature**: `GetEmployees2(string? filter, int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `page` ← `page`
- **Returns**: `Employees1`
- **Error**: `SdkException<GetEmployees2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetLeaveType
- **HTTP**: `GET /LeaveTypes/{LeaveTypeID}` (Default8 (api))
- **Signature**: `GetLeaveType(Guid leaveTypeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LeaveTypeObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetLeaveTypes
- **HTTP**: `GET /LeaveTypes` (Default8 (api))
- **Signature**: `GetLeaveTypes(int? page, bool? activeOnly, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `activeOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `ActiveOnly` ← `activeOnly`
- **Returns**: `LeaveTypes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPayRun2
- **HTTP**: `GET /PayRuns/{PayRunID}` (Default8 (api))
- **Signature**: `GetPayRun2(Guid payRunId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayRunObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPayRunCalendar
- **HTTP**: `GET /PayRunCalendars/{PayrollCalendarID}` (Default8 (api))
- **Signature**: `GetPayRunCalendar(Guid payrollCalendarId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayRunCalendarObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPayRunCalendars
- **HTTP**: `GET /PayRunCalendars` (Default8 (api))
- **Signature**: `GetPayRunCalendars(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `PayRunCalendars`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPayRuns2
- **HTTP**: `GET /PayRuns` (Default8 (api))
- **Signature**: `GetPayRuns2(int? page, Status31? status, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `status` ← `status`
- **Returns**: `PayRuns1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPaySlip
- **HTTP**: `GET /PaySlips/{PaySlipID}` (Default8 (api))
- **Signature**: `GetPaySlip(Guid paySlipId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaySlipObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPaySlips
- **HTTP**: `GET /PaySlips` (Default8 (api))
- **Signature**: `GetPaySlips(Guid payRunId, int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PayRunID` ← `payRunId`, `page` ← `page`
- **Returns**: `PaySlips1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetReimbursement
- **HTTP**: `GET /Reimbursements/{ReimbursementID}` (Default8 (api))
- **Signature**: `GetReimbursement(Guid reimbursementId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ReimbursementObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReimbursements
- **HTTP**: `GET /Reimbursements` (Default8 (api))
- **Signature**: `GetReimbursements(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `Reimbursements`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetSettings2
- **HTTP**: `GET /Settings` (Default8 (api))
- **Signature**: `GetSettings2(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Settings1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetStatutoryDeduction
- **HTTP**: `GET /StatutoryDeductions/{id}` (Default8 (api))
- **Signature**: `GetStatutoryDeduction(Guid id, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StatutoryDeductionObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetStatutoryDeductions
- **HTTP**: `GET /StatutoryDeductions` (Default8 (api))
- **Signature**: `GetStatutoryDeductions(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `StatutoryDeductions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetSuperannuation
- **HTTP**: `GET /Superannuations/{SuperannuationID}` (Default8 (api))
- **Signature**: `GetSuperannuation(Guid superannuationId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SuperannuationObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSuperannuations
- **HTTP**: `GET /Superannuations` (Default8 (api))
- **Signature**: `GetSuperannuations(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `Superannuations`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetTimesheet3
- **HTTP**: `GET /Timesheets/{TimesheetID}` (Default8 (api))
- **Signature**: `GetTimesheet3(Guid timesheetId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTimesheets3
- **HTTP**: `GET /Timesheets` (Default8 (api))
- **Signature**: `GetTimesheets3(int? page, string? filter, string? status, string? startDate, string? endDate, string? sort, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`page` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `filter` ← `filter`, `status` ← `status`, `startDate` ← `startDate`, `endDate` ← `endDate`, `sort` ← `sort`
- **Returns**: `Timesheets2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetTrackingCategories2
- **HTTP**: `GET /Settings/TrackingCategories` (Default8 (api))
- **Signature**: `GetTrackingCategories2(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrackingCategories2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RevertTimesheet2
- **HTTP**: `POST /Timesheets/{TimesheetID}/RevertToDraft` (Default8 (api))
- **Signature**: `RevertTimesheet2(Guid timesheetId, string xeroTenantId, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject2`
- **Error**: `SdkException<RevertTimesheet2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployee2
- **HTTP**: `PUT /Employees/{EmployeeID}` (Default8 (api))
- **Signature**: `UpdateEmployee2(Guid employeeId, string xeroTenantId, string? idempotencyKey, Employee2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeObject`
- **Error**: `SdkException<UpdateEmployee2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployeeEarningsTemplate
- **HTTP**: `PUT /Employees/{EmployeeID}/PayTemplates/Earnings/{PayTemplateEarningID}` (Default8 (api))
- **Signature**: `UpdateEmployeeEarningsTemplate(Guid employeeId, Guid payTemplateEarningId, string xeroTenantId, string? idempotencyKey, EarningsTemplate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EarningsTemplateObject`
- **Error**: `SdkException<UpdateEmployeeEarningsTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployeeLeave
- **HTTP**: `PUT /Employees/{EmployeeID}/Leave/{LeaveID}` (Default8 (api))
- **Signature**: `UpdateEmployeeLeave(Guid employeeId, Guid leaveId, string xeroTenantId, string? idempotencyKey, EmployeeLeave body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveObject`
- **Error**: `SdkException<UpdateEmployeeLeaveError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployeeSalaryAndWage
- **HTTP**: `PUT /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}` (Default8 (api))
- **Signature**: `UpdateEmployeeSalaryAndWage(Guid employeeId, Guid salaryAndWagesId, string xeroTenantId, string? idempotencyKey, SalaryAndWage body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SalaryAndWageObject`
- **Error**: `SdkException<UpdateEmployeeSalaryAndWageError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployeeTax
- **HTTP**: `POST /Employees/{EmployeeID}/Tax` (Default8 (api))
- **Signature**: `UpdateEmployeeTax(Guid employeeId, string xeroTenantId, string? idempotencyKey, EmployeeTax body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeTaxObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePaySlipLineItems
- **HTTP**: `PUT /PaySlips/{PaySlipID}` (Default8 (api))
- **Signature**: `UpdatePaySlipLineItems(Guid paySlipId, string xeroTenantId, string? idempotencyKey, PaySlip1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaySlipObject1`
- **Error**: `SdkException<UpdatePaySlipLineItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTimesheetLine2
- **HTTP**: `PUT /Timesheets/{TimesheetID}/Lines/{TimesheetLineID}` (Default8 (api))
- **Signature**: `UpdateTimesheetLine2(Guid timesheetId, Guid timesheetLineId, string xeroTenantId, string? idempotencyKey, TimesheetLine1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLineObject`
- **Error**: `SdkException<UpdateTimesheetLine2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
