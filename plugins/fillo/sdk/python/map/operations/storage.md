<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.storage` · Source: `fillo/apis/storage.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.storage.get_form_storage

- **Route**: `GET /api/v1/manage/forms/{form}/storage`
- **Auth**: `bearer_auth`
- **Signature**: `def get_form_storage(form: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path
- **Returns (parsed)**: `FormStorage`
- **Returns (raw)**: `ApiResult[FormStorage, GetFormStorageErrorBody]`
- **Error**: `GetFormStorageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormStorage` | `fillo/models/form_storage.py` |
| `GetFormStorageErrorBody` | `fillo/errors/get_form_storage_error.py` |
| `Error` | `fillo/models/error.py` |

### client.storage.list_form_storage_folders

- **Route**: `GET /api/v1/manage/forms/{form}/storage/folder`
- **Auth**: `bearer_auth`
- **Signature**: `def list_form_storage_folders(form: str, *, q: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path · `q` — query
- **Returns (parsed)**: `DriveFolderListing`
- **Returns (raw)**: `ApiResult[DriveFolderListing, ListFormStorageFoldersErrorBody]`
- **Error**: `ListFormStorageFoldersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DriveFolderListing` | `fillo/models/drive_folder_listing.py` |
| `ListFormStorageFoldersErrorBody` | `fillo/errors/list_form_storage_folders_error.py` |
| `Error` | `fillo/models/error.py` |

### client.storage.reset_form_storage_folder

- **Route**: `DELETE /api/v1/manage/forms/{form}/storage/folder`
- **Auth**: `bearer_auth`
- **Signature**: `def reset_form_storage_folder(form: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path
- **Returns (parsed)**: `ApiV1ManageFormsStorageFolderResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsStorageFolderResponse, ResetFormStorageFolderErrorBody]`
- **Error**: `ResetFormStorageFolderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsStorageFolderResponse` | `fillo/models/api_v1_manage_forms_storage_folder_response.py` |
| `ResetFormStorageFolderErrorBody` | `fillo/errors/reset_form_storage_folder_error.py` |
| `Error` | `fillo/models/error.py` |

### client.storage.set_form_storage

- **Route**: `PUT /api/v1/manage/forms/{form}/storage`
- **Auth**: `bearer_auth`
- **Signature**: `def set_form_storage(form: str, body: ApiV1ManageFormsStorageRequest | ApiV1ManageFormsStorageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `body`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `FormStorage`
- **Returns (raw)**: `ApiResult[FormStorage, SetFormStorageErrorBody]`
- **Error**: `SetFormStorageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsStorageRequest` | `fillo/models/api_v1_manage_forms_storage_request.py` |
| `ApiV1ManageFormsStorageRequestDict` | `fillo/models/api_v1_manage_forms_storage_request.py` |
| `FormStorage` | `fillo/models/form_storage.py` |
| `SetFormStorageErrorBody` | `fillo/errors/set_form_storage_error.py` |
| `Error` | `fillo/models/error.py` |

### client.storage.set_form_storage_folder

- **Route**: `PUT /api/v1/manage/forms/{form}/storage/folder`
- **Auth**: `bearer_auth`
- **Signature**: `def set_form_storage_folder(form: str, body: ApiV1ManageFormsStorageFolderRequest | ApiV1ManageFormsStorageFolderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `body`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageFormsStorageFolderResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsStorageFolderResponse, SetFormStorageFolderErrorBody]`
- **Error**: `SetFormStorageFolderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsStorageFolderRequest` | `fillo/models/api_v1_manage_forms_storage_folder_request.py` |
| `ApiV1ManageFormsStorageFolderRequestDict` | `fillo/models/api_v1_manage_forms_storage_folder_request.py` |
| `ApiV1ManageFormsStorageFolderResponse` | `fillo/models/api_v1_manage_forms_storage_folder_response.py` |
| `SetFormStorageFolderErrorBody` | `fillo/errors/set_form_storage_folder_error.py` |
| `Error` | `fillo/models/error.py` |

