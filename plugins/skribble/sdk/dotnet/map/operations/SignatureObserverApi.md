<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureObserverApi — operations

Accessor: `client.SignatureObserverApi` · Source: `src/Skribble/Api/SignatureObserverApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddSignatureObserver

- **Auth**: `options.Bearer`
- **Signature**: `AddSignatureObserver(AddSignatureObserverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `Body`
- **Returns**: `SignatureObserverResponse`
- **Error**: `ApiException<AddSignatureObserverError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddSignatureObserverRequest` | `src/Skribble/Requests/SignatureObserverApi/AddSignatureObserverRequest.cs` |
| `SignatureObserver` | `src/Skribble/Models/AnyOf/SignatureObserver.cs` |
| `SignatureObserverResponse` | `src/Skribble/Models/OneOf/SignatureObserverResponse.cs` |
| `AddSignatureObserverError` | `src/Skribble/Errors/AddSignatureObserverError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### DeleteSignatureObserver

- **Auth**: `options.Bearer`
- **Signature**: `DeleteSignatureObserver(DeleteSignatureObserverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `ObserverId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSignatureObserverError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSignatureObserverRequest` | `src/Skribble/Requests/SignatureObserverApi/DeleteSignatureObserverRequest.cs` |
| `DeleteSignatureObserverError` | `src/Skribble/Errors/DeleteSignatureObserverError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetSignatureObserver

- **Auth**: `options.Bearer`
- **Signature**: `GetSignatureObserver(GetSignatureObserverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `ObserverId`
- **Returns**: `SignatureObserverResponse`
- **Error**: `ApiException<GetSignatureObserverError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignatureObserverRequest` | `src/Skribble/Requests/SignatureObserverApi/GetSignatureObserverRequest.cs` |
| `SignatureObserverResponse` | `src/Skribble/Models/OneOf/SignatureObserverResponse.cs` |
| `GetSignatureObserverError` | `src/Skribble/Errors/GetSignatureObserverError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### ListSignatureObservers

- **Auth**: `options.Bearer`
- **Signature**: `ListSignatureObservers(ListSignatureObserversRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Returns**: `IReadOnlyList<SignatureObserverResponse>`
- **Error**: `ApiException<ListSignatureObserversError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSignatureObserversRequest` | `src/Skribble/Requests/SignatureObserverApi/ListSignatureObserversRequest.cs` |
| `SignatureObserverResponse` | `src/Skribble/Models/OneOf/SignatureObserverResponse.cs` |
| `ListSignatureObserversError` | `src/Skribble/Errors/ListSignatureObserversError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

