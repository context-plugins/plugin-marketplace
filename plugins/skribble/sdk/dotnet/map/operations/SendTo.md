<!-- Generated file — do not edit; regenerated with the SDK. -->

# SendTo — operations

Accessor: `client.SendTo` · Source: `src/Skribble/Api/SendTo.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSendTo

- **Server group**: `DefaultSkribbleSendToApi`
- **Signature**: `CreateSendTo(CreateSendToOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Title`, `Content`
- **Returns**: `CreateSendToResponse`
- **Error**: `ApiException<CreateSendToError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSendToOperationRequest` | `src/Skribble/Requests/SendTo/CreateSendToOperationRequest.cs` |
| `CreateSendToResponse` | `src/Skribble/Models/CreateSendToResponse.cs` |
| `CreateSendToError` | `src/Skribble/Errors/CreateSendToError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### DeleteSendTo

- **Server group**: `DefaultSkribbleSendToApi`
- **Signature**: `DeleteSendTo(DeleteSendToRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SendToId`, `XAccesscode`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSendToError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSendToRequest` | `src/Skribble/Requests/SendTo/DeleteSendToRequest.cs` |
| `DeleteSendToError` | `src/Skribble/Errors/DeleteSendToError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### DownloadSendTo

- **Server group**: `DefaultSkribbleSendToApi`
- **Signature**: `DownloadSendTo(DownloadSendToRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SendToId`, `XAccesscode`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DownloadSendToError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadSendToRequest` | `src/Skribble/Requests/SendTo/DownloadSendToRequest.cs` |
| `DownloadSendToError` | `src/Skribble/Errors/DownloadSendToError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### TrackSendTo

- **Server group**: `DefaultSkribbleSendToApi`
- **Signature**: `TrackSendTo(TrackSendToRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SendToId`, `XAccesscode`
- **Returns**: `TrackSendToResponse`
- **Error**: `ApiException<TrackSendToError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TrackSendToRequest` | `src/Skribble/Requests/SendTo/TrackSendToRequest.cs` |
| `TrackSendToResponse` | `src/Skribble/Models/TrackSendToResponse.cs` |
| `TrackSendToError` | `src/Skribble/Errors/TrackSendToError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

