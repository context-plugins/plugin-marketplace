<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.folders` · Source: `code_qr/apis/folders.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.folders.create_folder

- **Route**: `POST /folders`
- **Auth**: `token`
- **Signature**: `def create_folder(*, body: FoldersRequest | FoldersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FolderSchema`
- **Returns (raw)**: `ApiResult[FolderSchema, CreateFolderErrorBody]`
- **Error**: `CreateFolderErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FoldersRequest` | `code_qr/models/folders_request.py` |
| `FoldersRequestDict` | `code_qr/models/folders_request.py` |
| `FolderSchema` | `code_qr/models/folder_schema.py` |
| `CreateFolderErrorBody` | `code_qr/errors/create_folder_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.folders.delete_folder

- **Route**: `DELETE /folders/{id}`
- **Auth**: `token`
- **Signature**: `def delete_folder(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `FoldersResponse`
- **Returns (raw)**: `ApiResult[FoldersResponse, DeleteFolderErrorBody]`
- **Error**: `DeleteFolderErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FoldersResponse` | `code_qr/models/folders_response.py` |
| `DeleteFolderErrorBody` | `code_qr/errors/delete_folder_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.folders.list_folders

- **Route**: `GET /folders`
- **Auth**: `token`
- **Signature**: `def list_folders(*, search: str | None = None, page: float | None = 1.0, page_size: float | None = 50.0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `search` — query · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `list[FolderSchema]`
- **Returns (raw)**: `ApiResult[list[FolderSchema], ListFoldersErrorBody]`
- **Error**: `ListFoldersErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FolderSchema` | `code_qr/models/folder_schema.py` |
| `ListFoldersErrorBody` | `code_qr/errors/list_folders_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.folders.update_folder

- **Route**: `PATCH /folders/{id}`
- **Auth**: `token`
- **Signature**: `def update_folder(id_: str, *, body: FoldersRequest1 | FoldersRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `FolderSchema`
- **Returns (raw)**: `ApiResult[FolderSchema, UpdateFolderErrorBody]`
- **Error**: `UpdateFolderErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FoldersRequest1` | `code_qr/models/folders_request1.py` |
| `FoldersRequest1Dict` | `code_qr/models/folders_request1.py` |
| `FolderSchema` | `code_qr/models/folder_schema.py` |
| `UpdateFolderErrorBody` | `code_qr/errors/update_folder_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

