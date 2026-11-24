<!-- Generated file — do not edit; regenerated with the SDK. -->

# Keys — operations

Accessor: `client.Keys` · Source: `src/Statable/Api/Keys.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateApiKey

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateApiKey(CreateApiKeyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreatedApiKey`
- **Error**: `ApiException<CreateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateApiKeyOperationRequest` | `src/Statable/Requests/Keys/CreateApiKeyOperationRequest.cs` |
| `CreateApiKeyRequest` | `src/Statable/Models/CreateApiKeyRequest.cs` |
| `CreatedApiKey` | `src/Statable/Models/CreatedApiKey.cs` |
| `CreateApiKeyError` | `src/Statable/Errors/CreateApiKeyError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### ListApiKeyEvents

- **Auth**: `options.BearerAuth`
- **Signature**: `ListApiKeyEvents(ListApiKeyEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiKeyEventList`
- **Error**: `ApiException<ListApiKeyEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListApiKeyEventsRequest` | `src/Statable/Requests/Keys/ListApiKeyEventsRequest.cs` |
| `ApiKeyEventList` | `src/Statable/Models/ApiKeyEventList.cs` |
| `ListApiKeyEventsError` | `src/Statable/Errors/ListApiKeyEventsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### ListApiKeys

- **Auth**: `options.BearerAuth`
- **Signature**: `ListApiKeys(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiKeyList`
- **Error**: `ApiException<ListApiKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiKeyList` | `src/Statable/Models/ApiKeyList.cs` |
| `ListApiKeysError` | `src/Statable/Errors/ListApiKeysError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### RevokeApiKey

- **Auth**: `options.BearerAuth`
- **Signature**: `RevokeApiKey(RevokeApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RevokeApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevokeApiKeyRequest` | `src/Statable/Requests/Keys/RevokeApiKeyRequest.cs` |
| `RevokeApiKeyError` | `src/Statable/Errors/RevokeApiKeyError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### RotateApiKey

- **Auth**: `options.BearerAuth`
- **Signature**: `RotateApiKey(RotateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `CreatedApiKey`
- **Error**: `ApiException<RotateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RotateApiKeyRequest` | `src/Statable/Requests/Keys/RotateApiKeyRequest.cs` |
| `CreatedApiKey` | `src/Statable/Models/CreatedApiKey.cs` |
| `RotateApiKeyError` | `src/Statable/Errors/RotateApiKeyError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

