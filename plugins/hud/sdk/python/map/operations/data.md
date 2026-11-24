<!-- Generated file — do not edit; regenerated with the SDK. -->

# Data — operations

Accessor: `client.data` · Source: `hud/apis/data.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data.complete_data_file_v2_data_file_id_complete_post

- **Route**: `POST /v2/data/{file_id}/complete`
- **Signature**: `def complete_data_file_v2_data_file_id_complete_post(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file_id`
- **Params**: `file_id` — path
- **Returns (parsed)**: `DataFileResponse`
- **Returns (raw)**: `ApiResult[DataFileResponse, CompleteDataFileV2DataFileIdCompletePostErrorBody]`
- **Error**: `CompleteDataFileV2DataFileIdCompletePostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataFileResponse` | `hud/models/data_file_response.py` |
| `CompleteDataFileV2DataFileIdCompletePostErrorBody` | `hud/errors/complete_data_file_v2_data_file_id_complete_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.data.create_data_file_v2_data_post

- **Route**: `POST /v2/data`
- **Signature**: `def create_data_file_v2_data_post(body: DataFileCreateRequest | DataFileCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DataFileUploadResponse`
- **Returns (raw)**: `ApiResult[DataFileUploadResponse, CreateDataFileV2DataPostErrorBody]`
- **Error**: `CreateDataFileV2DataPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataFileCreateRequest` | `hud/models/data_file_create_request.py` |
| `DataFileCreateRequestDict` | `hud/models/data_file_create_request.py` |
| `DataFileUploadResponse` | `hud/models/data_file_upload_response.py` |
| `CreateDataFileV2DataPostErrorBody` | `hud/errors/create_data_file_v2_data_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.data.delete_data_file_v2_data_file_id_delete

- **Route**: `DELETE /v2/data/{file_id}`
- **Signature**: `def delete_data_file_v2_data_file_id_delete(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file_id`
- **Params**: `file_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDataFileV2DataFileIdDeleteErrorBody]`
- **Error**: `DeleteDataFileV2DataFileIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteDataFileV2DataFileIdDeleteErrorBody` | `hud/errors/delete_data_file_v2_data_file_id_delete_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.data.delete_data_files_v2_data_delete_post

- **Route**: `POST /v2/data/delete`
- **Signature**: `def delete_data_files_v2_data_delete_post(body: DataFileIdsRequest | DataFileIdsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDataFilesV2DataDeletePostErrorBody]`
- **Error**: `DeleteDataFilesV2DataDeletePostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataFileIdsRequest` | `hud/models/data_file_ids_request.py` |
| `DataFileIdsRequestDict` | `hud/models/data_file_ids_request.py` |
| `DeleteDataFilesV2DataDeletePostErrorBody` | `hud/errors/delete_data_files_v2_data_delete_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.data.download_data_file_v2_data_file_id_download_get

- **Route**: `GET /v2/data/{file_id}/download`
- **Signature**: `def download_data_file_v2_data_file_id_download_get(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file_id`
- **Params**: `file_id` — path
- **Returns (parsed)**: `DataFileDownloadResponse`
- **Returns (raw)**: `ApiResult[DataFileDownloadResponse, DownloadDataFileV2DataFileIdDownloadGetErrorBody]`
- **Error**: `DownloadDataFileV2DataFileIdDownloadGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataFileDownloadResponse` | `hud/models/data_file_download_response.py` |
| `DownloadDataFileV2DataFileIdDownloadGetErrorBody` | `hud/errors/download_data_file_v2_data_file_id_download_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.data.get_data_file_storage_usage_v2_data_usage_get

- **Route**: `GET /v2/data/usage`
- **Signature**: `def get_data_file_storage_usage_v2_data_usage_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DataFileStorageUsageResponse`
- **Returns (raw)**: `ApiResult[DataFileStorageUsageResponse, GetDataFileStorageUsageV2DataUsageGetErrorBody]`
- **Error**: `GetDataFileStorageUsageV2DataUsageGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataFileStorageUsageResponse` | `hud/models/data_file_storage_usage_response.py` |
| `GetDataFileStorageUsageV2DataUsageGetErrorBody` | `hud/errors/get_data_file_storage_usage_v2_data_usage_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.data.get_data_file_v2_data_file_id_get

- **Route**: `GET /v2/data/{file_id}`
- **Signature**: `def get_data_file_v2_data_file_id_get(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file_id`
- **Params**: `file_id` — path
- **Returns (parsed)**: `DataFileResponse`
- **Returns (raw)**: `ApiResult[DataFileResponse, GetDataFileV2DataFileIdGetErrorBody]`
- **Error**: `GetDataFileV2DataFileIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataFileResponse` | `hud/models/data_file_response.py` |
| `GetDataFileV2DataFileIdGetErrorBody` | `hud/errors/get_data_file_v2_data_file_id_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.data.list_data_file_groups_v2_data_groups_get

- **Route**: `GET /v2/data/groups`
- **Signature**: `def list_data_file_groups_v2_data_groups_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DataFileGroupListResponse`
- **Returns (raw)**: `ApiResult[DataFileGroupListResponse, ListDataFileGroupsV2DataGroupsGetErrorBody]`
- **Error**: `ListDataFileGroupsV2DataGroupsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataFileGroupListResponse` | `hud/models/data_file_group_list_response.py` |
| `ListDataFileGroupsV2DataGroupsGetErrorBody` | `hud/errors/list_data_file_groups_v2_data_groups_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.data.list_data_files_v2_data_get

- **Route**: `GET /v2/data`
- **Signature**: `def list_data_files_v2_data_get(*, scope: Scope3OrStr | None = Scope3.ALL, membership_id: int | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `scope` — query · `membership_id` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `DataFileListResponse`
- **Returns (raw)**: `ApiResult[DataFileListResponse, ListDataFilesV2DataGetErrorBody]`
- **Error**: `ListDataFilesV2DataGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Scope3OrStr` | `hud/models/enums/scope3.py` |
| `DataFileListResponse` | `hud/models/data_file_list_response.py` |
| `ListDataFilesV2DataGetErrorBody` | `hud/errors/list_data_files_v2_data_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.data.update_data_file_v2_data_file_id_patch

- **Route**: `PATCH /v2/data/{file_id}`
- **Signature**: `def update_data_file_v2_data_file_id_patch(file_id: UUID, body: DataFileUpdateRequest | DataFileUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file_id`, `body`
- **Params**: `file_id` — path · `body` — JSON body
- **Returns (parsed)**: `DataFileResponse`
- **Returns (raw)**: `ApiResult[DataFileResponse, UpdateDataFileV2DataFileIdPatchErrorBody]`
- **Error**: `UpdateDataFileV2DataFileIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataFileUpdateRequest` | `hud/models/data_file_update_request.py` |
| `DataFileUpdateRequestDict` | `hud/models/data_file_update_request.py` |
| `DataFileResponse` | `hud/models/data_file_response.py` |
| `UpdateDataFileV2DataFileIdPatchErrorBody` | `hud/errors/update_data_file_v2_data_file_id_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

