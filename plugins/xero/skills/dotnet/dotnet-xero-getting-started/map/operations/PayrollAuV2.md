# PayrollAuV2 — operations

Accessor: `client.PayrollAuV2` · Source: `Api/PayrollAuV2.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ApproveTimesheet
- **HTTP**: `POST /Timesheets/{TimesheetID}/Approve` (Default8 (api))
- **Signature**: `ApproveTimesheet(Guid timesheetId, string xeroTenantId, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject1`
- **Error**: `SdkException<ApproveTimesheetError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTimesheet2
- **HTTP**: `POST /Timesheets` (Default8 (api))
- **Signature**: `CreateTimesheet2(string xeroTenantId, string? idempotencyKey, Timesheet1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject1`
- **Error**: `SdkException<CreateTimesheet2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTimesheetLine
- **HTTP**: `POST /Timesheets/{TimesheetID}/Lines` (Default8 (api))
- **Signature**: `CreateTimesheetLine(Guid timesheetId, string xeroTenantId, string? idempotencyKey, TimesheetLine1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLineObject`
- **Error**: `SdkException<CreateTimesheetLineError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTimesheet
- **HTTP**: `DELETE /Timesheets/{TimesheetID}` (Default8 (api))
- **Signature**: `DeleteTimesheet(Guid timesheetId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLine1`
- **Error**: `SdkException<DeleteTimesheetError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTimesheetLine
- **HTTP**: `DELETE /Timesheets/{TimesheetID}/Lines/{TimesheetLineID}` (Default8 (api))
- **Signature**: `DeleteTimesheetLine(Guid timesheetId, Guid timesheetLineId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLine1`
- **Error**: `SdkException<DeleteTimesheetLineError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTimesheet2
- **HTTP**: `GET /Timesheets/{TimesheetID}` (Default8 (api))
- **Signature**: `GetTimesheet2(Guid timesheetId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTimesheets2
- **HTTP**: `GET /Timesheets` (Default8 (api))
- **Signature**: `GetTimesheets2(int? page, string? filter, string? status, string? startDate, string? endDate, string? sort, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`page` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `filter` ← `filter`, `status` ← `status`, `startDate` ← `startDate`, `endDate` ← `endDate`, `sort` ← `sort`
- **Returns**: `Timesheets1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RevertTimesheet
- **HTTP**: `POST /Timesheets/{TimesheetID}/RevertToDraft` (Default8 (api))
- **Signature**: `RevertTimesheet(Guid timesheetId, string xeroTenantId, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetObject1`
- **Error**: `SdkException<RevertTimesheetError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTimesheetLine
- **HTTP**: `PUT /Timesheets/{TimesheetID}/Lines/{TimesheetLineID}` (Default8 (api))
- **Signature**: `UpdateTimesheetLine(Guid timesheetId, Guid timesheetLineId, string xeroTenantId, string? idempotencyKey, TimesheetLine1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimesheetLineObject`
- **Error**: `SdkException<UpdateTimesheetLineError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem1(out Problem1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
