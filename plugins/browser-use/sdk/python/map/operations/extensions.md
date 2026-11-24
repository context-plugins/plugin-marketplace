<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extensions — operations

Accessor: `client.extensions` · Source: `browser_use/apis/extensions.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.extensions.delete_extension_extensions_extension_id_delete

- **Route**: `DELETE /extensions/{extension_id}`
- **Auth**: `api_key_header`
- **Signature**: `def delete_extension_extensions_extension_id_delete(extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `extension_id`
- **Params**: `extension_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteExtensionExtensionsExtensionIdDeleteErrorBody]`
- **Error**: `DeleteExtensionExtensionsExtensionIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [404, 503, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteExtensionExtensionsExtensionIdDeleteErrorBody` | `browser_use/errors/delete_extension_extensions_extension_id_delete_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.extensions.get_extension_extensions_extension_id_get

- **Route**: `GET /extensions/{extension_id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_extension_extensions_extension_id_get(extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `extension_id`
- **Params**: `extension_id` — path
- **Returns (parsed)**: `ExtensionView`
- **Returns (raw)**: `ApiResult[ExtensionView, GetExtensionExtensionsExtensionIdGetErrorBody]`
- **Error**: `GetExtensionExtensionsExtensionIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ExtensionView` | `browser_use/models/extension_view.py` |
| `GetExtensionExtensionsExtensionIdGetErrorBody` | `browser_use/errors/get_extension_extensions_extension_id_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.extensions.list_extensions_extensions_get

- **Route**: `GET /extensions`
- **Auth**: `api_key_header`
- **Signature**: `def list_extensions_extensions_get(*, page_size: int | None = 10, page_number: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_size` — query `pageSize` · `page_number` — query `pageNumber`
- **Returns (parsed)**: `ExtensionListResponse`
- **Returns (raw)**: `ApiResult[ExtensionListResponse, ListExtensionsExtensionsGetErrorBody]`
- **Error**: `ListExtensionsExtensionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExtensionListResponse` | `browser_use/models/extension_list_response.py` |
| `ListExtensionsExtensionsGetErrorBody` | `browser_use/errors/list_extensions_extensions_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.extensions.upload_extension_extensions_post

- **Route**: `POST /extensions`
- **Auth**: `api_key_header`
- **Signature**: `def upload_extension_extensions_post(file: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `file` — multipart file
- **Returns (parsed)**: `ExtensionView`
- **Returns (raw)**: `ApiResult[ExtensionView, UploadExtensionExtensionsPostErrorBody]`
- **Error**: `UploadExtensionExtensionsPostErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 413, 422, 503, anything unmapped]

| Type | Source |
| --- | --- |
| `ExtensionView` | `browser_use/models/extension_view.py` |
| `UploadExtensionExtensionsPostErrorBody` | `browser_use/errors/upload_extension_extensions_post_error.py` |

