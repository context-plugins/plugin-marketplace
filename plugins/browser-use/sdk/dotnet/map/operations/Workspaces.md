<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.Workspaces` · Source: `src/BrowserUse/Api/Workspaces.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWorkspaceWorkspacesPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `CreateWorkspaceWorkspacesPost(CreateWorkspaceWorkspacesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WorkspaceInfo`
- **Error**: `ApiException<CreateWorkspaceWorkspacesPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWorkspaceWorkspacesPostRequest` | `src/BrowserUse/Requests/Workspaces/CreateWorkspaceWorkspacesPostRequest.cs` |
| `WorkspaceCreateRequest` | `src/BrowserUse/Models/WorkspaceCreateRequest.cs` |
| `WorkspaceInfo` | `src/BrowserUse/Models/WorkspaceInfo.cs` |
| `CreateWorkspaceWorkspacesPostError` | `src/BrowserUse/Errors/CreateWorkspaceWorkspacesPostError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete(DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceId`, `Path`
- **Query params (wire ← C#)**: `path` ← `Path`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest` | `src/BrowserUse/Requests/Workspaces/DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest.cs` |
| `DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError` | `src/BrowserUse/Errors/DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### DeleteWorkspaceWorkspacesWorkspaceIdDelete

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DeleteWorkspaceWorkspacesWorkspaceIdDelete(DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspaceWorkspacesWorkspaceIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest` | `src/BrowserUse/Requests/Workspaces/DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest.cs` |
| `DeleteWorkspaceWorkspacesWorkspaceIdDeleteError` | `src/BrowserUse/Errors/DeleteWorkspaceWorkspacesWorkspaceIdDeleteError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetWorkspaceSizeWorkspacesWorkspaceIdSizeGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetWorkspaceSizeWorkspacesWorkspaceIdSizeGet(GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceId`
- **Returns**: `WorkspaceSizeInfo`
- **Error**: `ApiException<GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest` | `src/BrowserUse/Requests/Workspaces/GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest.cs` |
| `WorkspaceSizeInfo` | `src/BrowserUse/Models/WorkspaceSizeInfo.cs` |
| `GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError` | `src/BrowserUse/Errors/GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### GetWorkspaceWorkspacesWorkspaceIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetWorkspaceWorkspacesWorkspaceIdGet(GetWorkspaceWorkspacesWorkspaceIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceId`
- **Returns**: `WorkspaceInfo`
- **Error**: `ApiException<GetWorkspaceWorkspacesWorkspaceIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspaceWorkspacesWorkspaceIdGetRequest` | `src/BrowserUse/Requests/Workspaces/GetWorkspaceWorkspacesWorkspaceIdGetRequest.cs` |
| `WorkspaceInfo` | `src/BrowserUse/Models/WorkspaceInfo.cs` |
| `GetWorkspaceWorkspacesWorkspaceIdGetError` | `src/BrowserUse/Errors/GetWorkspaceWorkspacesWorkspaceIdGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### ListWorkspaceFilesWorkspacesWorkspaceIdFilesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `ListWorkspaceFilesWorkspacesWorkspaceIdFilesGet(ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceId`
- **Query params (wire ← C#)**: `prefix` ← `Prefix`, `limit` ← `Limit`, `cursor` ← `Cursor`, `includeUrls` ← `IncludeUrls`, `contentDisposition` ← `ContentDisposition`
- **Returns**: `WorkspaceFileListResponse`
- **Error**: `ApiException<ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest` | `src/BrowserUse/Requests/Workspaces/ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest.cs` |
| `Cursor` | `src/BrowserUse/Models/AnyOf/Cursor.cs` |
| `Contentdisposition1` | `src/BrowserUse/Models/AnyOf/Contentdisposition1.cs` |
| `WorkspaceFileListResponse` | `src/BrowserUse/Models/WorkspaceFileListResponse.cs` |
| `ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError` | `src/BrowserUse/Errors/ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### UpdateWorkspaceWorkspacesWorkspaceIdPatch

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `UpdateWorkspaceWorkspacesWorkspaceIdPatch(UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceId`, `Body`
- **Returns**: `WorkspaceInfo`
- **Error**: `ApiException<UpdateWorkspaceWorkspacesWorkspaceIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest` | `src/BrowserUse/Requests/Workspaces/UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest.cs` |
| `WorkspaceUpdateRequest` | `src/BrowserUse/Models/WorkspaceUpdateRequest.cs` |
| `WorkspaceInfo` | `src/BrowserUse/Models/WorkspaceInfo.cs` |
| `UpdateWorkspaceWorkspacesWorkspaceIdPatchError` | `src/BrowserUse/Errors/UpdateWorkspaceWorkspacesWorkspaceIdPatchError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

### UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost(UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceId`, `Body`
- **Returns**: `WorkspaceFileUploadResponse`
- **Error**: `ApiException<UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest` | `src/BrowserUse/Requests/Workspaces/UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest.cs` |
| `WorkspaceFileUploadRequest` | `src/BrowserUse/Models/WorkspaceFileUploadRequest.cs` |
| `WorkspaceFileUploadResponse` | `src/BrowserUse/Models/WorkspaceFileUploadResponse.cs` |
| `UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError` | `src/BrowserUse/Errors/UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError.cs` |
| `HttpValidationError` | `src/BrowserUse/Models/HttpValidationError.cs` |

