# Employees — operations

Accessor: `client.Employees` · Source: `Api/Employees.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListEmployees
- **HTTP**: `GET /v2/employees` (Default (connect))
- **Signature**: `ListEmployees(string? locationId, EmployeeStatus? status, int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`locationId` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location_id` ← `locationId`, `status` ← `status`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListEmployeesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveEmployee
- **HTTP**: `GET /v2/employees/{id}` (Default (connect))
- **Signature**: `RetrieveEmployee(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveEmployeeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
