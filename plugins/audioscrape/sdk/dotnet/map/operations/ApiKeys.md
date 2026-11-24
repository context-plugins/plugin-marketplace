<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeys — operations

Accessor: `client.ApiKeys` · Source: `src/Audioscrape/Api/ApiKeys.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApiKeyUsage

- **Auth**: `options.BearerAuth`
- **Signature**: `ApiKeyUsage(ApiKeyUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiKeyUsage`
- **Error**: `ApiException<ApiKeyUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiKeyUsageRequest` | `src/Audioscrape/Requests/ApiKeys/ApiKeyUsageRequest.cs` |
| `ApiKeyUsage` | `src/Audioscrape/Models/ApiKeyUsage.cs` |
| `ApiKeyUsageError` | `src/Audioscrape/Errors/ApiKeyUsageError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### CreateApiKey

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateApiKey(CreateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiKeyModel`
- **Error**: `ApiException<CreateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateApiKeyRequest` | `src/Audioscrape/Requests/ApiKeys/CreateApiKeyRequest.cs` |
| `CreateApiKey` | `src/Audioscrape/Models/CreateApiKey.cs` |
| `ApiKeyModel` | `src/Audioscrape/Models/ApiKeyModel.cs` |
| `CreateApiKeyError` | `src/Audioscrape/Errors/CreateApiKeyError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### DeleteApiKey

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteApiKey(DeleteApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiKeyRequest` | `src/Audioscrape/Requests/ApiKeys/DeleteApiKeyRequest.cs` |
| `DeleteApiKeyError` | `src/Audioscrape/Errors/DeleteApiKeyError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### ListApiKeys

- **Auth**: `options.BearerAuth`
- **Signature**: `ListApiKeys(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<ApiKeyModel>`
- **Error**: `ApiException<ListApiKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiKeyModel` | `src/Audioscrape/Models/ApiKeyModel.cs` |
| `ListApiKeysError` | `src/Audioscrape/Errors/ListApiKeysError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### RotateApiKey

- **Auth**: `options.BearerAuth`
- **Signature**: `RotateApiKey(RotateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiKeyModel`
- **Error**: `ApiException<RotateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RotateApiKeyRequest` | `src/Audioscrape/Requests/ApiKeys/RotateApiKeyRequest.cs` |
| `ApiKeyModel` | `src/Audioscrape/Models/ApiKeyModel.cs` |
| `RotateApiKeyError` | `src/Audioscrape/Errors/RotateApiKeyError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

