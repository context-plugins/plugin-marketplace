<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitoring — operations

Accessor: `client.Monitoring` · Source: `src/Skribble/Api/Monitoring.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSystemHealth

- **Server group**: `DefaultSkribbleMonitoringApi`
- **Signature**: `GetSystemHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SystemHealthResponse`
- **Error**: `ApiException<GetSystemHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SystemHealthResponse` | `src/Skribble/Models/SystemHealthResponse.cs` |
| `GetSystemHealthError` | `src/Skribble/Errors/GetSystemHealthError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

