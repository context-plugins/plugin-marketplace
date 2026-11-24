<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `browser_use/apis/workspaces.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.workspaces.create_workspace_workspaces_post

- **Route**: `POST /workspaces`
- **Auth**: `api_key_header`
- **Signature**: `def create_workspace_workspaces_post(body: WorkspaceCreateRequest | WorkspaceCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WorkspaceInfo`
- **Returns (raw)**: `ApiResult[WorkspaceInfo, CreateWorkspaceWorkspacesPostErrorBody]`
- **Error**: `CreateWorkspaceWorkspacesPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceCreateRequest` | `browser_use/models/workspace_create_request.py` |
| `WorkspaceCreateRequestDict` | `browser_use/models/workspace_create_request.py` |
| `WorkspaceInfo` | `browser_use/models/workspace_info.py` |
| `CreateWorkspaceWorkspacesPostErrorBody` | `browser_use/errors/create_workspace_workspaces_post_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.workspaces.delete_workspace_file_workspaces_workspace_id_files_delete

- **Route**: `DELETE /workspaces/{workspace_id}/files`
- **Auth**: `api_key_header`
- **Signature**: `def delete_workspace_file_workspaces_workspace_id_files_delete(workspace_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace_id`, `path`
- **Params**: `workspace_id` — path · `path` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody]`
- **Error**: `DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody` | `browser_use/errors/delete_workspace_file_workspaces_workspace_id_files_delete_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.workspaces.delete_workspace_workspaces_workspace_id_delete

- **Route**: `DELETE /workspaces/{workspace_id}`
- **Auth**: `api_key_header`
- **Signature**: `def delete_workspace_workspaces_workspace_id_delete(workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace_id`
- **Params**: `workspace_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspaceWorkspacesWorkspaceIdDeleteErrorBody]`
- **Error**: `DeleteWorkspaceWorkspacesWorkspaceIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspaceWorkspacesWorkspaceIdDeleteErrorBody` | `browser_use/errors/delete_workspace_workspaces_workspace_id_delete_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.workspaces.get_workspace_size_workspaces_workspace_id_size_get

- **Route**: `GET /workspaces/{workspace_id}/size`
- **Auth**: `api_key_header`
- **Signature**: `def get_workspace_size_workspaces_workspace_id_size_get(workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace_id`
- **Params**: `workspace_id` — path
- **Returns (parsed)**: `WorkspaceSizeInfo`
- **Returns (raw)**: `ApiResult[WorkspaceSizeInfo, GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetErrorBody]`
- **Error**: `GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceSizeInfo` | `browser_use/models/workspace_size_info.py` |
| `GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetErrorBody` | `browser_use/errors/get_workspace_size_workspaces_workspace_id_size_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.workspaces.get_workspace_workspaces_workspace_id_get

- **Route**: `GET /workspaces/{workspace_id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_workspace_workspaces_workspace_id_get(workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace_id`
- **Params**: `workspace_id` — path
- **Returns (parsed)**: `WorkspaceInfo`
- **Returns (raw)**: `ApiResult[WorkspaceInfo, GetWorkspaceWorkspacesWorkspaceIdGetErrorBody]`
- **Error**: `GetWorkspaceWorkspacesWorkspaceIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceInfo` | `browser_use/models/workspace_info.py` |
| `GetWorkspaceWorkspacesWorkspaceIdGetErrorBody` | `browser_use/errors/get_workspace_workspaces_workspace_id_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.workspaces.list_workspace_files_workspaces_workspace_id_files_get

- **Route**: `GET /workspaces/{workspace_id}/files`
- **Auth**: `api_key_header`
- **Signature**: `def list_workspace_files_workspaces_workspace_id_files_get(workspace_id: UUID, *, prefix: str | None = "", limit: int | None = 50, cursor: str | None = None, include_urls: bool | None = False, content_disposition: ContentdispositionOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace_id`
- **Params**: `workspace_id` — path · `prefix` — query · `limit` — query · `cursor` — query · `include_urls` — query `includeUrls` · `content_disposition` — query `contentDisposition`
- **Returns (parsed)**: `WorkspaceFileListResponse`
- **Returns (raw)**: `ApiResult[WorkspaceFileListResponse, ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody]`
- **Error**: `ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ContentdispositionOrStr` | `browser_use/models/enums/contentdisposition.py` |
| `WorkspaceFileListResponse` | `browser_use/models/workspace_file_list_response.py` |
| `ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody` | `browser_use/errors/list_workspace_files_workspaces_workspace_id_files_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.workspaces.update_workspace_workspaces_workspace_id_patch

- **Route**: `PATCH /workspaces/{workspace_id}`
- **Auth**: `api_key_header`
- **Signature**: `def update_workspace_workspaces_workspace_id_patch(workspace_id: UUID, body: WorkspaceUpdateRequest | WorkspaceUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace_id`, `body`
- **Params**: `workspace_id` — path · `body` — JSON body
- **Returns (parsed)**: `WorkspaceInfo`
- **Returns (raw)**: `ApiResult[WorkspaceInfo, UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody]`
- **Error**: `UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceUpdateRequest` | `browser_use/models/workspace_update_request.py` |
| `WorkspaceUpdateRequestDict` | `browser_use/models/workspace_update_request.py` |
| `WorkspaceInfo` | `browser_use/models/workspace_info.py` |
| `UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody` | `browser_use/errors/update_workspace_workspaces_workspace_id_patch_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.workspaces.upload_workspace_files_workspaces_workspace_id_files_upload_post

- **Route**: `POST /workspaces/{workspace_id}/files/upload`
- **Auth**: `api_key_header`
- **Signature**: `def upload_workspace_files_workspaces_workspace_id_files_upload_post(workspace_id: UUID, body: WorkspaceFileUploadRequest | WorkspaceFileUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace_id`, `body`
- **Params**: `workspace_id` — path · `body` — JSON body
- **Returns (parsed)**: `WorkspaceFileUploadResponse`
- **Returns (raw)**: `ApiResult[WorkspaceFileUploadResponse, UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody]`
- **Error**: `UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceFileUploadRequest` | `browser_use/models/workspace_file_upload_request.py` |
| `WorkspaceFileUploadRequestDict` | `browser_use/models/workspace_file_upload_request.py` |
| `WorkspaceFileUploadResponse` | `browser_use/models/workspace_file_upload_response.py` |
| `UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody` | `browser_use/errors/upload_workspace_files_workspaces_workspace_id_files_upload_post_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

