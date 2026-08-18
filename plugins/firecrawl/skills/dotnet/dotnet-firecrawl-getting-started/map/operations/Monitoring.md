# Monitoring — operations

Accessor: `client.Monitoring` · Source: `Api/Monitoring.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMonitor
- **HTTP**: `POST /monitor` (Default (api))
- **Signature**: `CreateMonitor(MonitorCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MonitorResponse`
- **Error**: `SdkException<CreateMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMonitor
- **HTTP**: `DELETE /monitor/{monitorId}` (Default (api))
- **Signature**: `DeleteMonitor(Guid monitorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<DeleteMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMonitor
- **HTTP**: `GET /monitor/{monitorId}` (Default (api))
- **Signature**: `GetMonitor(Guid monitorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MonitorResponse`
- **Error**: `SdkException<GetMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMonitorCheck
- **HTTP**: `GET /monitor/{monitorId}/checks/{checkId}` (Default (api))
- **Signature**: `GetMonitorCheck(Guid monitorId, Guid checkId, Status3? status, int? limit = 25, int? skip = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 25, `skip` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `skip` ← `skip`, `status` ← `status`
- **Returns**: `MonitorCheckDetailResponse`
- **Error**: `SdkException<GetMonitorCheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMonitorChecks
- **HTTP**: `GET /monitor/{monitorId}/checks` (Default (api))
- **Signature**: `ListMonitorChecks(Guid monitorId, Status2? status, int? limit = 25, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 25, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `status` ← `status`
- **Returns**: `MonitorCheckListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListMonitors
- **HTTP**: `GET /monitor` (Default (api))
- **Signature**: `ListMonitors(int? limit = 25, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 25, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `MonitorListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RunMonitor
- **HTTP**: `POST /monitor/{monitorId}/run` (Default (api))
- **Signature**: `RunMonitor(Guid monitorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MonitorRunResponse`
- **Error**: `SdkException<RunMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMonitor
- **HTTP**: `PATCH /monitor/{monitorId}` (Default (api))
- **Signature**: `UpdateMonitor(Guid monitorId, MonitorUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MonitorResponse`
- **Error**: `SdkException<UpdateMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
