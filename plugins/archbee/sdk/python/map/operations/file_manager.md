<!-- Generated file — do not edit; regenerated with the SDK. -->

# FileManager — operations

Accessor: `client.file_manager` · Source: `archbee/apis/file_manager.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.file_manager.delete_a_file_manager_file

- **Route**: `DELETE /file-manager/file`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_a_file_manager_file(body: FileManagerFileRequest | FileManagerFileRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAFileManagerFileErrorBody]`
- **Error**: `DeleteAFileManagerFileErrorBody` — **Case A (typed)**
- **Error arms**: `FileManagerFile400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FileManagerFileRequest` | `archbee/models/file_manager_file_request.py` |
| `FileManagerFileRequestDict` | `archbee/models/file_manager_file_request.py` |
| `DeleteAFileManagerFileErrorBody` | `archbee/errors/delete_a_file_manager_file_error.py` |
| `FileManagerFile400Error1` | `archbee/models/file_manager_file400_error1.py` |

### client.file_manager.list_file_manager_files

- **Route**: `GET /file-manager/files`
- **Auth**: `bearer_auth`
- **Signature**: `def list_file_manager_files(*, parent_id: str | None = None, item_type: ItemTypeOrStr | None = None, search_query: str | None = None, page_index: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `parent_id` — query `parentId` · `item_type` — query `itemType` · `search_query` — query `searchQuery` · `page_index` — query `pageIndex` · `page_size` — query `pageSize`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListFileManagerFilesErrorBody]`
- **Error**: `ListFileManagerFilesErrorBody` — **Case A (typed)**
- **Error arms**: `FileManagerFiles400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ItemTypeOrStr` | `archbee/models/enums/item_type.py` |
| `ListFileManagerFilesErrorBody` | `archbee/errors/list_file_manager_files_error.py` |
| `FileManagerFiles400Error1` | `archbee/models/file_manager_files400_error1.py` |

### client.file_manager.move_a_file_manager_file

- **Route**: `POST /file-manager/move`
- **Auth**: `bearer_auth`
- **Signature**: `def move_a_file_manager_file(body: FileManagerMoveRequest | FileManagerMoveRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, MoveAFileManagerFileErrorBody]`
- **Error**: `MoveAFileManagerFileErrorBody` — **Case A (typed)**
- **Error arms**: `FileManagerMove400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FileManagerMoveRequest` | `archbee/models/file_manager_move_request.py` |
| `FileManagerMoveRequestDict` | `archbee/models/file_manager_move_request.py` |
| `MoveAFileManagerFileErrorBody` | `archbee/errors/move_a_file_manager_file_error.py` |
| `FileManagerMove400Error1` | `archbee/models/file_manager_move400_error1.py` |

### client.file_manager.overwrite_a_file_manager_file

- **Route**: `POST /file-manager/replace`
- **Auth**: `bearer_auth`
- **Signature**: `def overwrite_a_file_manager_file(file_id: str, file: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file_id`, `file`
- **Params**: `file_id` — multipart field `fileId` · `file` — multipart file
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, OverwriteAFileManagerFileErrorBody]`
- **Error**: `OverwriteAFileManagerFileErrorBody` — **Case A (typed)**
- **Error arms**: `FileManagerReplace400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OverwriteAFileManagerFileErrorBody` | `archbee/errors/overwrite_a_file_manager_file_error.py` |
| `FileManagerReplace400Error1` | `archbee/models/file_manager_replace400_error1.py` |

### client.file_manager.upload_single_file

- **Route**: `POST /upload/file`
- **Auth**: `bearer_auth`
- **Signature**: `def upload_single_file(file: FileInput, *, is_public: IsPublicOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `file` — multipart file · `is_public` — multipart field `isPublic`
- **Returns (parsed)**: `UploadFileResponse`
- **Returns (raw)**: `ApiResult[UploadFileResponse, UploadSingleFileErrorBody]`
- **Error**: `UploadSingleFileErrorBody` — **Case A (typed)**
- **Error arms**: `UploadFile400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IsPublicOrStr` | `archbee/models/enums/is_public.py` |
| `UploadFileResponse` | `archbee/models/upload_file_response.py` |
| `UploadSingleFileErrorBody` | `archbee/errors/upload_single_file_error.py` |
| `UploadFile400Error1` | `archbee/models/upload_file400_error1.py` |

