<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitoring — operations

Accessor: `client.Monitoring` · Source: `Api/Monitoring.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMonitor

- **Signature**: `CreateMonitor(MonitorCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MonitorResponse`
- **Error**: `SdkException<CreateMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorCreateRequest` | `Models/MonitorCreateRequest.cs` |
| `MonitorResponse` | `Models/MonitorResponse.cs` |
| `CreateMonitorError` | `Errors/CreateMonitorError.cs` |

### DeleteMonitor

- **Signature**: `DeleteMonitor(Guid monitorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<DeleteMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SuccessResponse` | `Models/SuccessResponse.cs` |
| `DeleteMonitorError` | `Errors/DeleteMonitorError.cs` |

### GetMonitor

- **Signature**: `GetMonitor(Guid monitorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MonitorResponse`
- **Error**: `SdkException<GetMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorResponse` | `Models/MonitorResponse.cs` |
| `GetMonitorError` | `Errors/GetMonitorError.cs` |

### GetMonitorCheck

- **Signature**: `GetMonitorCheck(Guid monitorId, Guid checkId, Status3? status, int? limit = 25, int? skip = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = `25`, `skip` = `0`
- **Query params (wire ← C#)**: `limit` ← `limit`, `skip` ← `skip`, `status` ← `status`
- **Returns**: `MonitorCheckDetailResponse`
- **Error**: `SdkException<GetMonitorCheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Status3` | `Models/Enums/Status3.cs` |
| `MonitorCheckDetailResponse` | `Models/MonitorCheckDetailResponse.cs` |
| `GetMonitorCheckError` | `Errors/GetMonitorCheckError.cs` |

### ListMonitorChecks

- **Signature**: `ListMonitorChecks(Guid monitorId, Status2? status, int? limit = 25, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = `25`, `offset` = `0`
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `status` ← `status`
- **Returns**: `MonitorCheckListResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Status2` | `Models/Enums/Status2.cs` |
| `MonitorCheckListResponse` | `Models/MonitorCheckListResponse.cs` |

### ListMonitors

- **Signature**: `ListMonitors(int? limit = 25, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = `25`, `offset` = `0`
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `MonitorListResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MonitorListResponse` | `Models/MonitorListResponse.cs` |

### RunMonitor

- **Signature**: `RunMonitor(Guid monitorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MonitorRunResponse`
- **Error**: `SdkException<RunMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [409] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorRunResponse` | `Models/MonitorRunResponse.cs` |
| `RunMonitorError` | `Errors/RunMonitorError.cs` |

### UpdateMonitor

- **Signature**: `UpdateMonitor(Guid monitorId, MonitorUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MonitorResponse`
- **Error**: `SdkException<UpdateMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `MonitorUpdateRequest` | `Models/MonitorUpdateRequest.cs` |
| `MonitorResponse` | `Models/MonitorResponse.cs` |
| `UpdateMonitorError` | `Errors/UpdateMonitorError.cs` |

