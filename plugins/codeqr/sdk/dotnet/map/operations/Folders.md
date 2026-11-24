<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.Folders` · Source: `src/CodeQr/Api/Folders.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateFolder

- **Auth**: `options.Token`
- **Signature**: `CreateFolder(CreateFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `FolderSchema`
- **Error**: `ApiException<CreateFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFolderRequest` | `src/CodeQr/Requests/Folders/CreateFolderRequest.cs` |
| `FoldersRequest` | `src/CodeQr/Models/FoldersRequest.cs` |
| `FolderSchema` | `src/CodeQr/Models/FolderSchema.cs` |
| `CreateFolderError` | `src/CodeQr/Errors/CreateFolderError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### DeleteFolder

- **Auth**: `options.Token`
- **Signature**: `DeleteFolder(DeleteFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `FoldersResponse`
- **Error**: `ApiException<DeleteFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFolderRequest` | `src/CodeQr/Requests/Folders/DeleteFolderRequest.cs` |
| `FoldersResponse` | `src/CodeQr/Models/FoldersResponse.cs` |
| `DeleteFolderError` | `src/CodeQr/Errors/DeleteFolderError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### ListFolders

- **Auth**: `options.Token`
- **Signature**: `ListFolders(ListFoldersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `search` ← `Search`, `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `IReadOnlyList<FolderSchema>`
- **Error**: `ApiException<ListFoldersError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFoldersRequest` | `src/CodeQr/Requests/Folders/ListFoldersRequest.cs` |
| `FolderSchema` | `src/CodeQr/Models/FolderSchema.cs` |
| `ListFoldersError` | `src/CodeQr/Errors/ListFoldersError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### UpdateFolder

- **Auth**: `options.Token`
- **Signature**: `UpdateFolder(UpdateFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `FolderSchema`
- **Error**: `ApiException<UpdateFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFolderRequest` | `src/CodeQr/Requests/Folders/UpdateFolderRequest.cs` |
| `FoldersRequest1` | `src/CodeQr/Models/FoldersRequest1.cs` |
| `FolderSchema` | `src/CodeQr/Models/FolderSchema.cs` |
| `UpdateFolderError` | `src/CodeQr/Errors/UpdateFolderError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

