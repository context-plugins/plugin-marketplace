<!-- Generated file — do not edit; regenerated with the SDK. -->

# LinkedFiles — operations

Accessor: `client.linked_files` · Source: `shortcut/apis/linked_files.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.linked_files.create_linked_file

- **Route**: `POST /api/v3/linked-files`
- **Auth**: `api_token`
- **Signature**: `def create_linked_file(body: CreateLinkedFile | CreateLinkedFileDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `LinkedFile`
- **Returns (raw)**: `ApiResult[LinkedFile, CreateLinkedFileErrorBody]`
- **Error**: `CreateLinkedFileErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateLinkedFile` | `shortcut/models/create_linked_file.py` |
| `CreateLinkedFileDict` | `shortcut/models/create_linked_file.py` |
| `LinkedFile` | `shortcut/models/linked_file.py` |
| `CreateLinkedFileErrorBody` | `shortcut/errors/create_linked_file_error.py` |

### client.linked_files.delete_linked_file

- **Route**: `DELETE /api/v3/linked-files/{linked-file-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_linked_file(linked_file_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linked_file_public_id`
- **Params**: `linked_file_public_id` — path `linked-file-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteLinkedFileErrorBody]`
- **Error**: `DeleteLinkedFileErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteLinkedFileErrorBody` | `shortcut/errors/delete_linked_file_error.py` |

### client.linked_files.get_linked_file

- **Route**: `GET /api/v3/linked-files/{linked-file-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_linked_file(linked_file_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linked_file_public_id`
- **Params**: `linked_file_public_id` — path `linked-file-public-id`
- **Returns (parsed)**: `LinkedFile`
- **Returns (raw)**: `ApiResult[LinkedFile, GetLinkedFileErrorBody]`
- **Error**: `GetLinkedFileErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `LinkedFile` | `shortcut/models/linked_file.py` |
| `GetLinkedFileErrorBody` | `shortcut/errors/get_linked_file_error.py` |

### client.linked_files.list_linked_files

- **Route**: `GET /api/v3/linked-files`
- **Auth**: `api_token`
- **Signature**: `def list_linked_files(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[LinkedFile]`
- **Returns (raw)**: `ApiResult[list[LinkedFile], ListLinkedFilesErrorBody]`
- **Error**: `ListLinkedFilesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `LinkedFile` | `shortcut/models/linked_file.py` |
| `ListLinkedFilesErrorBody` | `shortcut/errors/list_linked_files_error.py` |

### client.linked_files.update_linked_file

- **Route**: `PUT /api/v3/linked-files/{linked-file-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_linked_file(linked_file_public_id: int, body: UpdateLinkedFile | UpdateLinkedFileDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `linked_file_public_id`, `body`
- **Params**: `linked_file_public_id` — path `linked-file-public-id` · `body` — JSON body
- **Returns (parsed)**: `LinkedFile`
- **Returns (raw)**: `ApiResult[LinkedFile, UpdateLinkedFileErrorBody]`
- **Error**: `UpdateLinkedFileErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateLinkedFile` | `shortcut/models/update_linked_file.py` |
| `UpdateLinkedFileDict` | `shortcut/models/update_linked_file.py` |
| `LinkedFile` | `shortcut/models/linked_file.py` |
| `UpdateLinkedFileErrorBody` | `shortcut/errors/update_linked_file_error.py` |

