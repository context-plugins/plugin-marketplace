<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.Folders` · Source: `src/DoiT/Api/Folders.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateFolder

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateFolder(CreateFolderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Folder`
- **Error**: `ApiException<CreateFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFolderOperationRequest` | `src/DoiT/Requests/Folders/CreateFolderOperationRequest.cs` |
| `CreateFolderRequest` | `src/DoiT/Models/CreateFolderRequest.cs` |
| `Folder` | `src/DoiT/Models/Folder.cs` |
| `CreateFolderError` | `src/DoiT/Errors/CreateFolderError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteFolder

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteFolder(DeleteFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFolderRequest` | `src/DoiT/Requests/Folders/DeleteFolderRequest.cs` |
| `DeleteFolderError` | `src/DoiT/Errors/DeleteFolderError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetFolder

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetFolder(GetFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Folder`
- **Error**: `ApiException<GetFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFolderRequest` | `src/DoiT/Requests/Folders/GetFolderRequest.cs` |
| `Folder` | `src/DoiT/Models/Folder.cs` |
| `GetFolderError` | `src/DoiT/Errors/GetFolderError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListFolders

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListFolders(ListFoldersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`
- **Returns**: `AnalyticsV1FoldersResponse`
- **Error**: `ApiException<ListFoldersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFoldersRequest` | `src/DoiT/Requests/Folders/ListFoldersRequest.cs` |
| `AnalyticsV1FoldersResponse` | `src/DoiT/Models/AnalyticsV1FoldersResponse.cs` |
| `ListFoldersError` | `src/DoiT/Errors/ListFoldersError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateFolder

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateFolder(UpdateFolderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Folder`
- **Error**: `ApiException<UpdateFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFolderOperationRequest` | `src/DoiT/Requests/Folders/UpdateFolderOperationRequest.cs` |
| `UpdateFolderRequest` | `src/DoiT/Models/UpdateFolderRequest.cs` |
| `Folder` | `src/DoiT/Models/Folder.cs` |
| `UpdateFolderError` | `src/DoiT/Errors/UpdateFolderError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

