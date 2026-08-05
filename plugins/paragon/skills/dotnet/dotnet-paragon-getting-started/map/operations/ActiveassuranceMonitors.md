# ActiveassuranceMonitors — operations

Accessor: `client.ActiveassuranceMonitors` · Source: `Api/ActiveassuranceMonitors.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MonitorServiceCreateMonitor
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/monitors` (Default)
- **Signature**: `MonitorServiceCreateMonitor(string orgId, bool? validateOnly, MonitorModel monitor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`
- **Returns**: `MonitorModel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MonitorServiceDeleteMonitor
- **HTTP**: `DELETE /active-assurance/api/v2/orgs/{org_id}/monitors/{monitor_id}` (Default)
- **Signature**: `MonitorServiceDeleteMonitor(string orgId, string monitorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MonitorServiceGetMonitor
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/monitors/{monitor_id}` (Default)
- **Signature**: `MonitorServiceGetMonitor(string orgId, string monitorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MonitorModel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MonitorServiceListMonitors
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/monitors` (Default)
- **Signature**: `MonitorServiceListMonitors(string orgId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListMonitorsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### MonitorServiceUpdateMonitor
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/monitors/{monitor_id}` (Default)
- **Signature**: `MonitorServiceUpdateMonitor(string orgId, string monitorId, string? updateMask, bool? validateOnly, MonitorModel monitor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `MonitorModel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
