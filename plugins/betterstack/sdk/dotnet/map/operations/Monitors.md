<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitors — operations

Accessor: `client.Monitors` · Source: `src/BetterStack/Api/Monitors.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMonitor

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateMonitor(CreateMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MonitorResource`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateMonitorRequest` | `src/BetterStack/Requests/Monitors/CreateMonitorRequest.cs` |
| `MonitorCreate` | `src/BetterStack/Models/MonitorCreate.cs` |
| `MonitorResource` | `src/BetterStack/Models/MonitorResource.cs` |

### DeleteMonitor

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteMonitor(DeleteMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteMonitorRequest` | `src/BetterStack/Requests/Monitors/DeleteMonitorRequest.cs` |

### GetMonitor

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMonitor(GetMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `MonitorResource`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetMonitorRequest` | `src/BetterStack/Requests/Monitors/GetMonitorRequest.cs` |
| `MonitorResource` | `src/BetterStack/Models/MonitorResource.cs` |

### GetMonitorAvailability

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMonitorAvailability(GetMonitorAvailabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetMonitorAvailabilityRequest` | `src/BetterStack/Requests/Monitors/GetMonitorAvailabilityRequest.cs` |

### GetMonitorResponseTimes

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMonitorResponseTimes(GetMonitorResponseTimesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetMonitorResponseTimesRequest` | `src/BetterStack/Requests/Monitors/GetMonitorResponseTimesRequest.cs` |

### ListMonitors

- **Auth**: `options.BearerAuth`
- **Signature**: `ListMonitors(ListMonitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `per_page` ← `PerPage`, `page` ← `Page`, `url` ← `Url`, `pronounceable_name` ← `PronounceableName`
- **Returns**: `MonitorList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListMonitorsRequest` | `src/BetterStack/Requests/Monitors/ListMonitorsRequest.cs` |
| `MonitorList` | `src/BetterStack/Models/MonitorList.cs` |

### UpdateMonitor

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateMonitor(UpdateMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `MonitorResource`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateMonitorRequest` | `src/BetterStack/Requests/Monitors/UpdateMonitorRequest.cs` |
| `MonitorCreate` | `src/BetterStack/Models/MonitorCreate.cs` |
| `MonitorResource` | `src/BetterStack/Models/MonitorResource.cs` |

