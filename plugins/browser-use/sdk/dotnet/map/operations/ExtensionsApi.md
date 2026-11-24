<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExtensionsApi — operations

Accessor: `client.ExtensionsApi` · Source: `src/BrowserUse/Api/ExtensionsApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteExtensionExtensionsExtensionIdDelete

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DeleteExtensionExtensionsExtensionIdDelete(DeleteExtensionExtensionsExtensionIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExtensionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteExtensionExtensionsExtensionIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteExtensionExtensionsExtensionIdDeleteRequest` | `src/BrowserUse/Requests/ExtensionsApi/DeleteExtensionExtensionsExtensionIdDeleteRequest.cs` |
| `DeleteExtensionExtensionsExtensionIdDeleteError` | `src/BrowserUse/Errors/DeleteExtensionExtensionsExtensionIdDeleteError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetExtensionExtensionsExtensionIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetExtensionExtensionsExtensionIdGet(GetExtensionExtensionsExtensionIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExtensionId`
- **Returns**: `ExtensionView`
- **Error**: `ApiException<GetExtensionExtensionsExtensionIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExtensionExtensionsExtensionIdGetRequest` | `src/BrowserUse/Requests/ExtensionsApi/GetExtensionExtensionsExtensionIdGetRequest.cs` |
| `ExtensionView` | `src/BrowserUse/Models/ExtensionView.cs` |
| `GetExtensionExtensionsExtensionIdGetError` | `src/BrowserUse/Errors/GetExtensionExtensionsExtensionIdGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListExtensionsExtensionsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListExtensionsExtensionsGet(ListExtensionsExtensionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageNumber` ← `PageNumber`
- **Returns**: `ExtensionListResponse`
- **Error**: `ApiException<ListExtensionsExtensionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExtensionsExtensionsGetRequest` | `src/BrowserUse/Requests/ExtensionsApi/ListExtensionsExtensionsGetRequest.cs` |
| `ExtensionListResponse` | `src/BrowserUse/Models/ExtensionListResponse.cs` |
| `ListExtensionsExtensionsGetError` | `src/BrowserUse/Errors/ListExtensionsExtensionsGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### UploadExtensionExtensionsPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `UploadExtensionExtensionsPost(UploadExtensionExtensionsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Returns**: `ExtensionView`
- **Error**: `ApiException<UploadExtensionExtensionsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 413, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadExtensionExtensionsPostRequest` | `src/BrowserUse/Requests/ExtensionsApi/UploadExtensionExtensionsPostRequest.cs` |
| `ExtensionView` | `src/BrowserUse/Models/ExtensionView.cs` |
| `UploadExtensionExtensionsPostError` | `src/BrowserUse/Errors/UploadExtensionExtensionsPostError.cs` |

