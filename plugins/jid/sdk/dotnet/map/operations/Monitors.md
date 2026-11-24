<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitors — operations

Accessor: `client.Monitors` · Source: `src/Jid/Api/Monitors.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMonitor

- **Auth**: `options.Bearer`
- **Signature**: `CreateMonitor(CreateMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<CreateMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMonitorRequest` | `src/Jid/Requests/Monitors/CreateMonitorRequest.cs` |
| `V1MonitorsRequest` | `src/Jid/Models/V1MonitorsRequest.cs` |
| `CreateMonitorError` | `src/Jid/Errors/CreateMonitorError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

### DeleteMonitor

- **Auth**: `options.Bearer`
- **Signature**: `DeleteMonitor(DeleteMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `id` ← `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMonitorRequest` | `src/Jid/Requests/Monitors/DeleteMonitorRequest.cs` |
| `DeleteMonitorError` | `src/Jid/Errors/DeleteMonitorError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

### ListMonitors

- **Auth**: `options.Bearer`
- **Signature**: `ListMonitors(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<ListMonitorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitorsError` | `src/Jid/Errors/ListMonitorsError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

