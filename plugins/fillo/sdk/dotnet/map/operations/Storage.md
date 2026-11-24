<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.Storage` · Source: `src/Fillo/Api/Storage.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFormStorage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetFormStorage(GetFormStorageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `FormStorage`
- **Error**: `ApiException<GetFormStorageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFormStorageRequest` | `src/Fillo/Requests/Storage/GetFormStorageRequest.cs` |
| `FormStorage` | `src/Fillo/Models/FormStorage.cs` |
| `GetFormStorageError` | `src/Fillo/Errors/GetFormStorageError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListFormStorageFolders

- **Auth**: `options.BearerAuth`
- **Signature**: `ListFormStorageFolders(ListFormStorageFoldersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Query params (wire ← C#)**: `q` ← `Q`
- **Returns**: `DriveFolderListing`
- **Error**: `ApiException<ListFormStorageFoldersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFormStorageFoldersRequest` | `src/Fillo/Requests/Storage/ListFormStorageFoldersRequest.cs` |
| `DriveFolderListing` | `src/Fillo/Models/DriveFolderListing.cs` |
| `ListFormStorageFoldersError` | `src/Fillo/Errors/ListFormStorageFoldersError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ResetFormStorageFolder

- **Auth**: `options.BearerAuth`
- **Signature**: `ResetFormStorageFolder(ResetFormStorageFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `ApiV1ManageFormsStorageFolderResponse`
- **Error**: `ApiException<ResetFormStorageFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResetFormStorageFolderRequest` | `src/Fillo/Requests/Storage/ResetFormStorageFolderRequest.cs` |
| `ApiV1ManageFormsStorageFolderResponse` | `src/Fillo/Models/ApiV1ManageFormsStorageFolderResponse.cs` |
| `ResetFormStorageFolderError` | `src/Fillo/Errors/ResetFormStorageFolderError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### SetFormStorage

- **Auth**: `options.BearerAuth`
- **Signature**: `SetFormStorage(SetFormStorageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Body`
- **Returns**: `FormStorage`
- **Error**: `ApiException<SetFormStorageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetFormStorageRequest` | `src/Fillo/Requests/Storage/SetFormStorageRequest.cs` |
| `ApiV1ManageFormsStorageRequest` | `src/Fillo/Models/ApiV1ManageFormsStorageRequest.cs` |
| `FormStorage` | `src/Fillo/Models/FormStorage.cs` |
| `SetFormStorageError` | `src/Fillo/Errors/SetFormStorageError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### SetFormStorageFolder

- **Auth**: `options.BearerAuth`
- **Signature**: `SetFormStorageFolder(SetFormStorageFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Body`
- **Returns**: `ApiV1ManageFormsStorageFolderResponse`
- **Error**: `ApiException<SetFormStorageFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetFormStorageFolderRequest` | `src/Fillo/Requests/Storage/SetFormStorageFolderRequest.cs` |
| `ApiV1ManageFormsStorageFolderRequest` | `src/Fillo/Models/ApiV1ManageFormsStorageFolderRequest.cs` |
| `ApiV1ManageFormsStorageFolderResponse` | `src/Fillo/Models/ApiV1ManageFormsStorageFolderResponse.cs` |
| `SetFormStorageFolderError` | `src/Fillo/Errors/SetFormStorageFolderError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

