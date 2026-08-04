# PayrollAu — operations

Accessor: `client.PayrollAu` · Source: `Api/PayrollAu.cs` · 32 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ApproveLeaveApplication
- **HTTP**: `POST /LeaveApplications/{LeaveApplicationID}/approve` (Default7 (api))
- **Signature**: `ApproveLeaveApplication(Guid leaveApplicationId, string xeroTenantId, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LeaveApplications`
- **Error**: `SdkException<ApproveLeaveApplicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmployee
- **HTTP**: `POST /Employees` (Default7 (api))
- **Signature**: `CreateEmployee(string xeroTenantId, string? idempotencyKey, IReadOnlyList<Employee1> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Employees`
- **Error**: `SdkException<CreateEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateLeaveApplication
- **HTTP**: `POST /LeaveApplications` (Default7 (api))
- **Signature**: `CreateLeaveApplication(string xeroTenantId, string? idempotencyKey, IReadOnlyList<LeaveApplication> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LeaveApplications`
- **Error**: `SdkException<CreateLeaveApplicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePayItem
- **HTTP**: `POST /PayItems` (Default7 (api))
- **Signature**: `CreatePayItem(string xeroTenantId, string? idempotencyKey, PayItem body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayItems`
- **Error**: `SdkException<CreatePayItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePayRun
- **HTTP**: `POST /PayRuns` (Default7 (api))
- **Signature**: `CreatePayRun(string xeroTenantId, string? idempotencyKey, IReadOnlyList<PayRun> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayRuns`
- **Error**: `SdkException<CreatePayRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePayrollCalendar
- **HTTP**: `POST /PayrollCalendars` (Default7 (api))
- **Signature**: `CreatePayrollCalendar(string xeroTenantId, string? idempotencyKey, IReadOnlyList<PayrollCalendar> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayrollCalendars`
- **Error**: `SdkException<CreatePayrollCalendarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSuperfund
- **HTTP**: `POST /Superfunds` (Default7 (api))
- **Signature**: `CreateSuperfund(string xeroTenantId, string? idempotencyKey, IReadOnlyList<SuperFund> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SuperFunds`
- **Error**: `SdkException<CreateSuperfundError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTimesheet
- **HTTP**: `POST /Timesheets` (Default7 (api))
- **Signature**: `CreateTimesheet(string xeroTenantId, string? idempotencyKey, IReadOnlyList<Timesheet> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Timesheets`
- **Error**: `SdkException<CreateTimesheetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployee
- **HTTP**: `GET /Employees/{EmployeeID}` (Default7 (api))
- **Signature**: `GetEmployee(Guid employeeId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Employees`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmployees
- **HTTP**: `GET /Employees` (Default7 (api))
- **Signature**: `GetEmployees(string? where, string? order, int? page, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`
- **Returns**: `Employees`
- **Error**: `SdkException<GetEmployeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetLeaveApplication
- **HTTP**: `GET /LeaveApplications/{LeaveApplicationID}` (Default7 (api))
- **Signature**: `GetLeaveApplication(Guid leaveApplicationId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LeaveApplications`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetLeaveApplications
- **HTTP**: `GET /LeaveApplications` (Default7 (api))
- **Signature**: `GetLeaveApplications(string? where, string? order, int? page, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`
- **Returns**: `LeaveApplications`
- **Error**: `SdkException<GetLeaveApplicationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetLeaveApplicationsV2
- **HTTP**: `GET /LeaveApplications/v2` (Default7 (api))
- **Signature**: `GetLeaveApplicationsV2(string? where, string? order, int? page, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`
- **Returns**: `LeaveApplications`
- **Error**: `SdkException<GetLeaveApplicationsV2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPayItems
- **HTTP**: `GET /PayItems` (Default7 (api))
- **Signature**: `GetPayItems(string? where, string? order, int? page, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`
- **Returns**: `PayItems`
- **Error**: `SdkException<GetPayItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPayRun
- **HTTP**: `GET /PayRuns/{PayRunID}` (Default7 (api))
- **Signature**: `GetPayRun(Guid payRunId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayRuns`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPayRuns
- **HTTP**: `GET /PayRuns` (Default7 (api))
- **Signature**: `GetPayRuns(string? where, string? order, int? page, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`
- **Returns**: `PayRuns`
- **Error**: `SdkException<GetPayRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPayrollCalendar
- **HTTP**: `GET /PayrollCalendars/{PayrollCalendarID}` (Default7 (api))
- **Signature**: `GetPayrollCalendar(Guid payrollCalendarId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayrollCalendars`
- **Error**: `SdkException<GetPayrollCalendarError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPayrollCalendars
- **HTTP**: `GET /PayrollCalendars` (Default7 (api))
- **Signature**: `GetPayrollCalendars(string? where, string? order, int? page, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`
- **Returns**: `PayrollCalendars`
- **Error**: `SdkException<GetPayrollCalendarsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetPayslip
- **HTTP**: `GET /Payslip/{PayslipID}` (Default7 (api))
- **Signature**: `GetPayslip(Guid payslipId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayslipObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSettings
- **HTTP**: `GET /Settings` (Default7 (api))
- **Signature**: `GetSettings(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SettingsObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSuperfund
- **HTTP**: `GET /Superfunds/{SuperFundID}` (Default7 (api))
- **Signature**: `GetSuperfund(Guid superFundId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SuperFunds`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSuperfundProducts
- **HTTP**: `GET /SuperfundProducts` (Default7 (api))
- **Signature**: `GetSuperfundProducts(string? abn, string? usi, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `abn` — nullable, no default → **must pass explicitly**
  - `usi` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ABN` ← `abn`, `USI` ← `usi`
- **Returns**: `SuperFundProducts`
- **Error**: `SdkException<GetSuperfundProductsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSuperfunds
- **HTTP**: `GET /Superfunds` (Default7 (api))
- **Signature**: `GetSuperfunds(string? where, string? order, int? page, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`
- **Returns**: `SuperFunds`
- **Error**: `SdkException<GetSuperfundsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetTimesheet
- **HTTP**: `GET /Timesheets/{TimesheetID}` (Default7 (api))
- **Signature**: `GetTimesheet(Guid timesheetId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTimesheets
- **HTTP**: `GET /Timesheets` (Default7 (api))
- **Signature**: `GetTimesheets(string? where, string? order, int? page, string xeroTenantId, DateTimeOffset? ifModifiedSince, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`where` … `ifModifiedSince`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `where` ← `where`, `order` ← `order`, `page` ← `page`
- **Returns**: `Timesheets`
- **Error**: `SdkException<GetTimesheetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RejectLeaveApplication
- **HTTP**: `POST /LeaveApplications/{LeaveApplicationID}/reject` (Default7 (api))
- **Signature**: `RejectLeaveApplication(Guid leaveApplicationId, string xeroTenantId, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LeaveApplications`
- **Error**: `SdkException<RejectLeaveApplicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiexception(out Apiexception)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEmployee
- **HTTP**: `POST /Employees/{EmployeeID}` (Default7 (api))
- **Notes**: Update properties on a single employee
- **Signature**: `UpdateEmployee(Guid employeeId, string xeroTenantId, string? idempotencyKey, IReadOnlyList<Employee1> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Employees`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateLeaveApplication
- **HTTP**: `POST /LeaveApplications/{LeaveApplicationID}` (Default7 (api))
- **Signature**: `UpdateLeaveApplication(Guid leaveApplicationId, string xeroTenantId, string? idempotencyKey, IReadOnlyList<LeaveApplication> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LeaveApplications`
- **Error**: `SdkException<UpdateLeaveApplicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePayRun
- **HTTP**: `POST /PayRuns/{PayRunID}` (Default7 (api))
- **Notes**: Update properties on a single PayRun
- **Signature**: `UpdatePayRun(Guid payRunId, string xeroTenantId, string? idempotencyKey, IReadOnlyList<PayRun> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayRuns`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePayslip
- **HTTP**: `POST /Payslip/{PayslipID}` (Default7 (api))
- **Notes**: Update lines on a single payslips
- **Signature**: `UpdatePayslip(Guid payslipId, string xeroTenantId, string? idempotencyKey, IReadOnlyList<PayslipLines> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Payslips`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSuperfund
- **HTTP**: `POST /Superfunds/{SuperFundID}` (Default7 (api))
- **Notes**: Update properties on a single Superfund
- **Signature**: `UpdateSuperfund(Guid superFundId, string xeroTenantId, string? idempotencyKey, IReadOnlyList<SuperFund> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SuperFunds`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTimesheet
- **HTTP**: `POST /Timesheets/{TimesheetID}` (Default7 (api))
- **Notes**: Update properties on a single timesheet
- **Signature**: `UpdateTimesheet(Guid timesheetId, string xeroTenantId, string? idempotencyKey, IReadOnlyList<Timesheet> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Timesheets`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
