# PayrollUk — operations

Accessor: `client.PayrollUk` · Source: `Api/PayrollUk.cs` · 69 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ApproveTimesheet3
- **HTTP**: `POST /Timesheets/{TimesheetID}/Approve` (Default8 (api))
- **Signature**: `ApproveTimesheet3(Guid timesheetId, string xeroTenantId, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject1`
- **Error**: `SdkException<ApproveTimesheet3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBenefit
- **HTTP**: `POST /Benefits` (Default8 (api))
- **Signature**: `CreateBenefit(string xeroTenantId, string? idempotencyKey, Benefit1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BenefitObject`
- **Error**: `SdkException<CreateBenefitError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateDeduction2
- **HTTP**: `POST /Deductions` (Default8 (api))
- **Signature**: `CreateDeduction2(string xeroTenantId, string? idempotencyKey, Deduction1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DeductionObject1`
- **Error**: `SdkException<CreateDeduction2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEarningsRate2
- **HTTP**: `POST /EarningsRates` (Default8 (api))
- **Signature**: `CreateEarningsRate2(string xeroTenantId, string? idempotencyKey, EarningsRate2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EarningsRateObject1`
- **Error**: `SdkException<CreateEarningsRate2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployee3
- **HTTP**: `POST /Employees` (Default8 (api))
- **Signature**: `CreateEmployee3(string xeroTenantId, string? idempotencyKey, Employee3 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeObject1`
- **Error**: `SdkException<CreateEmployee3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeEarningsTemplate2
- **HTTP**: `POST /Employees/{EmployeeID}/PayTemplates/earnings` (Default8 (api))
- **Signature**: `CreateEmployeeEarningsTemplate2(Guid employeeId, string xeroTenantId, string? idempotencyKey, EarningsTemplate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EarningsTemplateObject`
- **Error**: `SdkException<CreateEmployeeEarningsTemplate2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeLeave2
- **HTTP**: `POST /Employees/{EmployeeID}/Leave` (Default8 (api))
- **Signature**: `CreateEmployeeLeave2(Guid employeeId, string xeroTenantId, string? idempotencyKey, EmployeeLeave1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveObject1`
- **Error**: `SdkException<CreateEmployeeLeave2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeLeaveType2
- **HTTP**: `POST /Employees/{EmployeeID}/LeaveTypes` (Default8 (api))
- **Signature**: `CreateEmployeeLeaveType2(Guid employeeId, string xeroTenantId, string? idempotencyKey, EmployeeLeaveType1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveTypeObject1`
- **Error**: `SdkException<CreateEmployeeLeaveType2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeOpeningBalances2
- **HTTP**: `POST /Employees/{EmployeeID}/ukopeningbalances` (Default8 (api))
- **Signature**: `CreateEmployeeOpeningBalances2(Guid employeeId, string xeroTenantId, string? idempotencyKey, EmployeeOpeningBalances body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeOpeningBalancesObject1`
- **Error**: `SdkException<CreateEmployeeOpeningBalances2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeePaymentMethod2
- **HTTP**: `POST /Employees/{EmployeeID}/PaymentMethods` (Default8 (api))
- **Signature**: `CreateEmployeePaymentMethod2(Guid employeeId, string xeroTenantId, string? idempotencyKey, PaymentMethod2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentMethodObject1`
- **Error**: `SdkException<CreateEmployeePaymentMethod2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeSalaryAndWage2
- **HTTP**: `POST /Employees/{EmployeeID}/SalaryAndWages` (Default8 (api))
- **Signature**: `CreateEmployeeSalaryAndWage2(Guid employeeId, string xeroTenantId, string? idempotencyKey, SalaryAndWage1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SalaryAndWageObject1`
- **Error**: `SdkException<CreateEmployeeSalaryAndWage2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployeeStatutorySickLeave
- **HTTP**: `POST /StatutoryLeaves/Sick` (Default8 (api))
- **Signature**: `CreateEmployeeStatutorySickLeave(string xeroTenantId, string? idempotencyKey, EmployeeStatutorySickLeave body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeStatutorySickLeaveObject`
- **Error**: `SdkException<CreateEmployeeStatutorySickLeaveError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployment2
- **HTTP**: `POST /Employees/{EmployeeID}/Employment` (Default8 (api))
- **Signature**: `CreateEmployment2(Guid employeeId, string xeroTenantId, string? idempotencyKey, Employment1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmploymentObject1`
- **Error**: `SdkException<CreateEmployment2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateLeaveType2
- **HTTP**: `POST /LeaveTypes` (Default8 (api))
- **Signature**: `CreateLeaveType2(string xeroTenantId, string? idempotencyKey, LeaveType3 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LeaveTypeObject1`
- **Error**: `SdkException<CreateLeaveType2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateMultipleEmployeeEarningsTemplate2
- **HTTP**: `POST /Employees/{EmployeeID}/paytemplateearnings` (Default8 (api))
- **Signature**: `CreateMultipleEmployeeEarningsTemplate2(Guid employeeId, string xeroTenantId, string? idempotencyKey, IReadOnlyList<EarningsTemplate> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeePayTemplates1`
- **Error**: `SdkException<CreateMultipleEmployeeEarningsTemplate2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePayRunCalendar2
- **HTTP**: `POST /PayRunCalendars` (Default8 (api))
- **Signature**: `CreatePayRunCalendar2(string xeroTenantId, string? idempotencyKey, PayRunCalendar1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayRunCalendarObject1`
- **Error**: `SdkException<CreatePayRunCalendar2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateReimbursement2
- **HTTP**: `POST /Reimbursements` (Default8 (api))
- **Signature**: `CreateReimbursement2(string xeroTenantId, string? idempotencyKey, Reimbursement1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ReimbursementObject1`
- **Error**: `SdkException<CreateReimbursement2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTimesheet4
- **HTTP**: `POST /Timesheets` (Default8 (api))
- **Signature**: `CreateTimesheet4(string xeroTenantId, string? idempotencyKey, Timesheet1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject1`
- **Error**: `SdkException<CreateTimesheet4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTimesheetLine3
- **HTTP**: `POST /Timesheets/{TimesheetID}/Lines` (Default8 (api))
- **Signature**: `CreateTimesheetLine3(Guid timesheetId, string xeroTenantId, string? idempotencyKey, TimesheetLine1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLineObject`
- **Error**: `SdkException<CreateTimesheetLine3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEmployeeEarningsTemplate2
- **HTTP**: `DELETE /Employees/{EmployeeID}/PayTemplates/earnings/{PayTemplateEarningID}` (Default8 (api))
- **Signature**: `DeleteEmployeeEarningsTemplate2(Guid employeeId, Guid payTemplateEarningId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEmployeeLeave2
- **HTTP**: `DELETE /Employees/{EmployeeID}/Leave/{LeaveID}` (Default8 (api))
- **Signature**: `DeleteEmployeeLeave2(Guid employeeId, Guid leaveId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEmployeeSalaryAndWage2
- **HTTP**: `DELETE /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}` (Default8 (api))
- **Signature**: `DeleteEmployeeSalaryAndWage2(Guid employeeId, Guid salaryAndWagesId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTimesheet3
- **HTTP**: `DELETE /Timesheets/{TimesheetID}` (Default8 (api))
- **Signature**: `DeleteTimesheet3(Guid timesheetId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLine1`
- **Error**: `SdkException<DeleteTimesheet3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTimesheetLine3
- **HTTP**: `DELETE /Timesheets/{TimesheetID}/Lines/{TimesheetLineID}` (Default8 (api))
- **Signature**: `DeleteTimesheetLine3(Guid timesheetId, Guid timesheetLineId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLine1`
- **Error**: `SdkException<DeleteTimesheetLine3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBenefit
- **HTTP**: `GET /Benefits/{id}` (Default8 (api))
- **Signature**: `GetBenefit(Guid id, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BenefitObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBenefits
- **HTTP**: `GET /Benefits` (Default8 (api))
- **Signature**: `GetBenefits(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `Benefits`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetDeduction2
- **HTTP**: `GET /Deductions/{deductionId}` (Default8 (api))
- **Signature**: `GetDeduction2(Guid deductionId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeductionObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDeductions2
- **HTTP**: `GET /Deductions` (Default8 (api))
- **Signature**: `GetDeductions2(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `Deductions1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetEarningsOrder
- **HTTP**: `GET /EarningsOrders/{id}` (Default8 (api))
- **Signature**: `GetEarningsOrder(Guid id, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EarningsOrderObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEarningsOrders
- **HTTP**: `GET /EarningsOrders` (Default8 (api))
- **Signature**: `GetEarningsOrders(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `EarningsOrders`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetEarningsRate2
- **HTTP**: `GET /EarningsRates/{EarningsRateID}` (Default8 (api))
- **Signature**: `GetEarningsRate2(Guid earningsRateId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EarningsRateObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEarningsRates2
- **HTTP**: `GET /EarningsRates` (Default8 (api))
- **Signature**: `GetEarningsRates2(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `EarningsRates1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetEmployee3
- **HTTP**: `GET /Employees/{EmployeeID}` (Default8 (api))
- **Signature**: `GetEmployee3(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeLeave
- **HTTP**: `GET /Employees/{EmployeeID}/Leave/{LeaveID}` (Default8 (api))
- **Signature**: `GetEmployeeLeave(Guid employeeId, Guid leaveId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeLeaveBalances2
- **HTTP**: `GET /Employees/{EmployeeID}/LeaveBalances` (Default8 (api))
- **Signature**: `GetEmployeeLeaveBalances2(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveBalances`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeLeavePeriods2
- **HTTP**: `GET /Employees/{EmployeeID}/LeavePeriods` (Default8 (api))
- **Signature**: `GetEmployeeLeavePeriods2(Guid employeeId, DateTimeOffset? startDate, DateTimeOffset? endDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startDate` — nullable, no default → **must pass explicitly**
  - `endDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startDate` ← `startDate`, `endDate` ← `endDate`
- **Returns**: `LeavePeriods1`
- **Error**: `SdkException<GetEmployeeLeavePeriods2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeLeaveTypes2
- **HTTP**: `GET /Employees/{EmployeeID}/LeaveTypes` (Default8 (api))
- **Signature**: `GetEmployeeLeaveTypes2(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveTypes1`
- **Error**: `SdkException<GetEmployeeLeaveTypes2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeLeaves2
- **HTTP**: `GET /Employees/{EmployeeID}/Leave` (Default8 (api))
- **Signature**: `GetEmployeeLeaves2(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaves1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeOpeningBalances2
- **HTTP**: `GET /Employees/{EmployeeID}/ukopeningbalances` (Default8 (api))
- **Signature**: `GetEmployeeOpeningBalances2(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeOpeningBalancesObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeePayTemplate
- **HTTP**: `GET /Employees/{EmployeeID}/PayTemplates` (Default8 (api))
- **Signature**: `GetEmployeePayTemplate(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeePayTemplateObject`
- **Error**: `SdkException<GetEmployeePayTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeePaymentMethod2
- **HTTP**: `GET /Employees/{EmployeeID}/PaymentMethods` (Default8 (api))
- **Signature**: `GetEmployeePaymentMethod2(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentMethodObject1`
- **Error**: `SdkException<GetEmployeePaymentMethod2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeSalaryAndWage2
- **HTTP**: `GET /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}` (Default8 (api))
- **Signature**: `GetEmployeeSalaryAndWage2(Guid employeeId, Guid salaryAndWagesId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SalaryAndWages1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeSalaryAndWages2
- **HTTP**: `GET /Employees/{EmployeeID}/SalaryAndWages` (Default8 (api))
- **Signature**: `GetEmployeeSalaryAndWages2(Guid employeeId, int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `SalaryAndWages1`
- **Error**: `SdkException<GetEmployeeSalaryAndWages2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetEmployeeStatutoryLeaveBalances
- **HTTP**: `GET /Employees/{EmployeeID}/StatutoryLeaveBalance` (Default8 (api))
- **Signature**: `GetEmployeeStatutoryLeaveBalances(Guid employeeId, string? leaveType, DateTimeOffset? asOfDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `leaveType` — nullable, no default → **must pass explicitly**
  - `asOfDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `LeaveType` ← `leaveType`, `AsOfDate` ← `asOfDate`
- **Returns**: `EmployeeStatutoryLeaveBalanceObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeStatutorySickLeave
- **HTTP**: `GET /StatutoryLeaves/Sick/{StatutorySickLeaveID}` (Default8 (api))
- **Signature**: `GetEmployeeStatutorySickLeave(Guid statutorySickLeaveId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeStatutorySickLeaveObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployeeTax2
- **HTTP**: `GET /Employees/{EmployeeID}/Tax` (Default8 (api))
- **Signature**: `GetEmployeeTax2(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeTaxObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployees3
- **HTTP**: `GET /Employees` (Default8 (api))
- **Signature**: `GetEmployees3(string? filter, int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `page` ← `page`
- **Returns**: `Employees2`
- **Error**: `SdkException<GetEmployees3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetLeaveType2
- **HTTP**: `GET /LeaveTypes/{LeaveTypeID}` (Default8 (api))
- **Signature**: `GetLeaveType2(Guid leaveTypeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LeaveTypeObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetLeaveTypes2
- **HTTP**: `GET /LeaveTypes` (Default8 (api))
- **Signature**: `GetLeaveTypes2(int? page, bool? activeOnly, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `activeOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `ActiveOnly` ← `activeOnly`
- **Returns**: `LeaveTypes1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPayRun3
- **HTTP**: `GET /PayRuns/{PayRunID}` (Default8 (api))
- **Signature**: `GetPayRun3(Guid payRunId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayRunObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPayRunCalendar2
- **HTTP**: `GET /PayRunCalendars/{PayRunCalendarID}` (Default8 (api))
- **Signature**: `GetPayRunCalendar2(Guid payRunCalendarId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayRunCalendarObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPayRunCalendars2
- **HTTP**: `GET /PayRunCalendars` (Default8 (api))
- **Signature**: `GetPayRunCalendars2(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `PayRunCalendars1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPayRuns3
- **HTTP**: `GET /PayRuns` (Default8 (api))
- **Signature**: `GetPayRuns3(int? page, PayRunStatus1? status, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `status` ← `status`
- **Returns**: `PayRuns2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPaySlip2
- **HTTP**: `GET /Payslips/{PayslipID}` (Default8 (api))
- **Signature**: `GetPaySlip2(Guid payslipId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayslipObject2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPaySlips2
- **HTTP**: `GET /Payslips` (Default8 (api))
- **Signature**: `GetPaySlips2(Guid payRunId, int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PayRunID` ← `payRunId`, `page` ← `page`
- **Returns**: `Payslips2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetReimbursement2
- **HTTP**: `GET /Reimbursements/{ReimbursementID}` (Default8 (api))
- **Signature**: `GetReimbursement2(Guid reimbursementId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ReimbursementObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetReimbursements2
- **HTTP**: `GET /Reimbursements` (Default8 (api))
- **Signature**: `GetReimbursements2(int? page, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `Reimbursements1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetSettings3
- **HTTP**: `GET /Settings` (Default8 (api))
- **Signature**: `GetSettings3(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Settings2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetStatutoryLeaveSummary
- **HTTP**: `GET /StatutoryLeaves/Summary/{EmployeeID}` (Default8 (api))
- **Signature**: `GetStatutoryLeaveSummary(Guid employeeId, bool? activeOnly, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `activeOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `activeOnly` ← `activeOnly`
- **Returns**: `EmployeeStatutoryLeavesSummaries1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTimesheet4
- **HTTP**: `GET /Timesheets/{TimesheetID}` (Default8 (api))
- **Signature**: `GetTimesheet4(Guid timesheetId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTimesheets4
- **HTTP**: `GET /Timesheets` (Default8 (api))
- **Signature**: `GetTimesheets4(int? page, string? filter, string? status, string? startDate, string? endDate, string? sort, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`page` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `filter` ← `filter`, `status` ← `status`, `startDate` ← `startDate`, `endDate` ← `endDate`, `sort` ← `sort`
- **Returns**: `Timesheets1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetTrackingCategories3
- **HTTP**: `GET /Settings/trackingCategories` (Default8 (api))
- **Signature**: `GetTrackingCategories3(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrackingCategories2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RevertTimesheet3
- **HTTP**: `POST /Timesheets/{TimesheetID}/RevertToDraft` (Default8 (api))
- **Signature**: `RevertTimesheet3(Guid timesheetId, string xeroTenantId, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject1`
- **Error**: `SdkException<RevertTimesheet3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployee3
- **HTTP**: `PUT /Employees/{EmployeeID}` (Default8 (api))
- **Signature**: `UpdateEmployee3(Guid employeeId, string xeroTenantId, string? idempotencyKey, Employee3 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeObject1`
- **Error**: `SdkException<UpdateEmployee3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployeeEarningsTemplate2
- **HTTP**: `PUT /Employees/{EmployeeID}/PayTemplates/earnings/{PayTemplateEarningID}` (Default8 (api))
- **Signature**: `UpdateEmployeeEarningsTemplate2(Guid employeeId, Guid payTemplateEarningId, string xeroTenantId, string? idempotencyKey, EarningsTemplate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EarningsTemplateObject`
- **Error**: `SdkException<UpdateEmployeeEarningsTemplate2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployeeLeave2
- **HTTP**: `PUT /Employees/{EmployeeID}/Leave/{LeaveID}` (Default8 (api))
- **Signature**: `UpdateEmployeeLeave2(Guid employeeId, Guid leaveId, string xeroTenantId, string? idempotencyKey, EmployeeLeave1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeLeaveObject1`
- **Error**: `SdkException<UpdateEmployeeLeave2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployeeOpeningBalances
- **HTTP**: `PUT /Employees/{EmployeeID}/ukopeningbalances` (Default8 (api))
- **Signature**: `UpdateEmployeeOpeningBalances(Guid employeeId, string xeroTenantId, string? idempotencyKey, EmployeeOpeningBalances body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EmployeeOpeningBalancesObject1`
- **Error**: `SdkException<UpdateEmployeeOpeningBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployeeSalaryAndWage2
- **HTTP**: `PUT /Employees/{EmployeeID}/SalaryAndWages/{SalaryAndWagesID}` (Default8 (api))
- **Signature**: `UpdateEmployeeSalaryAndWage2(Guid employeeId, Guid salaryAndWagesId, string xeroTenantId, string? idempotencyKey, SalaryAndWage1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SalaryAndWageObject1`
- **Error**: `SdkException<UpdateEmployeeSalaryAndWage2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTimesheetLine3
- **HTTP**: `PUT /Timesheets/{TimesheetID}/Lines/{TimesheetLineID}` (Default8 (api))
- **Signature**: `UpdateTimesheetLine3(Guid timesheetId, Guid timesheetLineId, string xeroTenantId, string? idempotencyKey, TimesheetLine1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLineObject`
- **Error**: `SdkException<UpdateTimesheetLine3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
