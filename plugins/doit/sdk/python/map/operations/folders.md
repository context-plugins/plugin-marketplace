<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.folders` · Source: `doi_t/apis/folders.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.folders.create_folder

- **Route**: `POST /analytics/v1/folders`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_folder(body: CreateFolderRequest | CreateFolderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Folder`
- **Returns (raw)**: `ApiResult[Folder, CreateFolderErrorBody]`
- **Error**: `CreateFolderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateFolderRequest` | `doi_t/models/create_folder_request.py` |
| `CreateFolderRequestDict` | `doi_t/models/create_folder_request.py` |
| `Folder` | `doi_t/models/folder.py` |
| `CreateFolderErrorBody` | `doi_t/errors/create_folder_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.folders.delete_folder

- **Route**: `DELETE /analytics/v1/folders/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_folder(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteFolderErrorBody]`
- **Error**: `DeleteFolderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteFolderErrorBody` | `doi_t/errors/delete_folder_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.folders.get_folder

- **Route**: `GET /analytics/v1/folders/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_folder(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Folder`
- **Returns (raw)**: `ApiResult[Folder, GetFolderErrorBody]`
- **Error**: `GetFolderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Folder` | `doi_t/models/folder.py` |
| `GetFolderErrorBody` | `doi_t/errors/get_folder_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.folders.list_folders

- **Route**: `GET /analytics/v1/folders`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_folders(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken`
- **Returns (parsed)**: `AnalyticsV1FoldersResponse`
- **Returns (raw)**: `ApiResult[AnalyticsV1FoldersResponse, ListFoldersErrorBody]`
- **Error**: `ListFoldersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsV1FoldersResponse` | `doi_t/models/analytics_v1_folders_response.py` |
| `ListFoldersErrorBody` | `doi_t/errors/list_folders_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.folders.update_folder

- **Route**: `PATCH /analytics/v1/folders/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_folder(id_: str, body: UpdateFolderRequest | UpdateFolderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Folder`
- **Returns (raw)**: `ApiResult[Folder, UpdateFolderErrorBody]`
- **Error**: `UpdateFolderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateFolderRequest` | `doi_t/models/update_folder_request.py` |
| `UpdateFolderRequestDict` | `doi_t/models/update_folder_request.py` |
| `Folder` | `doi_t/models/folder.py` |
| `UpdateFolderErrorBody` | `doi_t/errors/update_folder_error.py` |
| `Error` | `doi_t/models/error.py` |

