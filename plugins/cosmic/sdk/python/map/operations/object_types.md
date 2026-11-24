<!-- Generated file — do not edit; regenerated with the SDK. -->

# ObjectTypes — operations

Accessor: `client.object_types` · Source: `cosmic/apis/object_types.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.object_types.create_object_type

- **Route**: `POST /buckets/{slug}/object-types`
- **Auth**: `write_key`
- **Signature**: `def create_object_type(slug: str, body: ObjectTypeCreate | ObjectTypeCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `body`
- **Params**: `slug` — path · `body` — JSON body
- **Returns (parsed)**: `ObjectTypeResponse`
- **Returns (raw)**: `ApiResult[ObjectTypeResponse, CreateObjectTypeErrorBody]`
- **Error**: `CreateObjectTypeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ObjectTypeCreate` | `cosmic/models/object_type_create.py` |
| `ObjectTypeCreateDict` | `cosmic/models/object_type_create.py` |
| `ObjectTypeResponse` | `cosmic/models/object_type_response.py` |
| `CreateObjectTypeErrorBody` | `cosmic/errors/create_object_type_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.object_types.delete_object_type

- **Route**: `DELETE /buckets/{slug}/object-types/{type_slug}`
- **Auth**: `write_key`
- **Signature**: `def delete_object_type(slug: str, type_slug: str, *, trigger_webhook: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `type_slug`
- **Params**: `slug` — path · `type_slug` — path · `trigger_webhook` — query
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteObjectTypeErrorBody]`
- **Error**: `DeleteObjectTypeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `cosmic/models/message_response.py` |
| `DeleteObjectTypeErrorBody` | `cosmic/errors/delete_object_type_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.object_types.get_object_type

- **Route**: `GET /buckets/{slug}/object-types/{type_slug}`
- **Auth**: `read_key`
- **Signature**: `def get_object_type(slug: str, type_slug: str, *, read_key: str | None = None, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `type_slug`
- **Params**: `slug` — path · `type_slug` — path · `read_key` — query · `pretty` — query
- **Returns (parsed)**: `ObjectTypeResponse`
- **Returns (raw)**: `ApiResult[ObjectTypeResponse, GetObjectTypeErrorBody]`
- **Error**: `GetObjectTypeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ObjectTypeResponse` | `cosmic/models/object_type_response.py` |
| `GetObjectTypeErrorBody` | `cosmic/errors/get_object_type_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.object_types.list_object_types

- **Route**: `GET /buckets/{slug}/object-types`
- **Auth**: `read_key`
- **Signature**: `def list_object_types(slug: str, *, read_key: str | None = None, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path · `read_key` — query · `pretty` — query
- **Returns (parsed)**: `ObjectTypeListResponse`
- **Returns (raw)**: `ApiResult[ObjectTypeListResponse, ListObjectTypesErrorBody]`
- **Error**: `ListObjectTypesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ObjectTypeListResponse` | `cosmic/models/object_type_list_response.py` |
| `ListObjectTypesErrorBody` | `cosmic/errors/list_object_types_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.object_types.update_object_type

- **Route**: `PATCH /buckets/{slug}/object-types/{type_slug}`
- **Auth**: `write_key`
- **Signature**: `def update_object_type(slug: str, type_slug: str, body: ObjectTypeUpdate | ObjectTypeUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `type_slug`, `body`
- **Params**: `slug` — path · `type_slug` — path · `body` — JSON body
- **Returns (parsed)**: `ObjectTypeResponse`
- **Returns (raw)**: `ApiResult[ObjectTypeResponse, UpdateObjectTypeErrorBody]`
- **Error**: `UpdateObjectTypeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ObjectTypeUpdate` | `cosmic/models/object_type_update.py` |
| `ObjectTypeUpdateDict` | `cosmic/models/object_type_update.py` |
| `ObjectTypeResponse` | `cosmic/models/object_type_response.py` |
| `UpdateObjectTypeErrorBody` | `cosmic/errors/update_object_type_error.py` |
| `Error` | `cosmic/models/error.py` |

