<!-- Generated file — do not edit; regenerated with the SDK. -->

# Files — operations

Accessor: `client.files` · Source: `shortcut/apis/files.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.files.delete_file

- **Route**: `DELETE /api/v3/files/{file-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_file(file_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file_public_id`
- **Params**: `file_public_id` — path `file-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteFileErrorBody]`
- **Error**: `DeleteFileErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteFileErrorBody` | `shortcut/errors/delete_file_error.py` |

### client.files.get_file

- **Route**: `GET /api/v3/files/{file-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_file(file_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file_public_id`
- **Params**: `file_public_id` — path `file-public-id`
- **Returns (parsed)**: `UploadedFile`
- **Returns (raw)**: `ApiResult[UploadedFile, GetFileErrorBody]`
- **Error**: `GetFileErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UploadedFile` | `shortcut/models/uploaded_file.py` |
| `GetFileErrorBody` | `shortcut/errors/get_file_error.py` |

### client.files.list_files

- **Route**: `GET /api/v3/files`
- **Auth**: `api_token`
- **Signature**: `def list_files(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[UploadedFile]`
- **Returns (raw)**: `ApiResult[list[UploadedFile], ListFilesErrorBody]`
- **Error**: `ListFilesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UploadedFile` | `shortcut/models/uploaded_file.py` |
| `ListFilesErrorBody` | `shortcut/errors/list_files_error.py` |

### client.files.update_file

- **Route**: `PUT /api/v3/files/{file-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_file(file_public_id: int, body: UpdateFile | UpdateFileDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file_public_id`, `body`
- **Params**: `file_public_id` — path `file-public-id` · `body` — JSON body
- **Returns (parsed)**: `UploadedFile`
- **Returns (raw)**: `ApiResult[UploadedFile, UpdateFileErrorBody]`
- **Error**: `UpdateFileErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateFile` | `shortcut/models/update_file.py` |
| `UpdateFileDict` | `shortcut/models/update_file.py` |
| `UploadedFile` | `shortcut/models/uploaded_file.py` |
| `UpdateFileErrorBody` | `shortcut/errors/update_file_error.py` |

### client.files.upload_files

- **Route**: `POST /api/v3/files`
- **Auth**: `api_token`
- **Signature**: `def upload_files(file0: FileInput, *, story_id: int | None = None, file1: FileInput | None = None, file2: FileInput | None = None, file3: FileInput | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file0`
- **Params**: `file0` — multipart file · `story_id` — multipart field · `file1` — multipart file · `file2` — multipart file · `file3` — multipart file
- **Returns (parsed)**: `list[UploadedFile]`
- **Returns (raw)**: `ApiResult[list[UploadedFile], UploadFilesErrorBody]`
- **Error**: `UploadFilesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UploadedFile` | `shortcut/models/uploaded_file.py` |
| `UploadFilesErrorBody` | `shortcut/errors/upload_files_error.py` |

