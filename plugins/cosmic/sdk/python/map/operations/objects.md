<!-- Generated file — do not edit; regenerated with the SDK. -->

# Objects — operations

Accessor: `client.objects` · Source: `cosmic/apis/objects.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.objects.batch_objects

- **Route**: `POST /buckets/{slug}/objects/batch`
- **Auth**: `write_key`
- **Signature**: `def batch_objects(slug: str, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `body`
- **Params**: `slug` — path · `body` — JSON body
- **Returns (parsed)**: `BatchResponse`
- **Returns (raw)**: `ApiResult[BatchResponse, BatchObjectsErrorBody]`
- **Error**: `BatchObjectsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchRequest` | `cosmic/models/batch_request.py` |
| `BatchRequestDict` | `cosmic/models/batch_request.py` |
| `BatchResponse` | `cosmic/models/batch_response.py` |
| `BatchObjectsErrorBody` | `cosmic/errors/batch_objects_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.objects.create_object

- **Route**: `POST /buckets/{slug}/objects`
- **Auth**: `write_key`
- **Signature**: `def create_object(slug: str, body: ObjectCreate | ObjectCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `body`
- **Params**: `slug` — path · `body` — JSON body
- **Returns (parsed)**: `ObjectResponse`
- **Returns (raw)**: `ApiResult[ObjectResponse, CreateObjectErrorBody]`
- **Error**: `CreateObjectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ObjectCreate` | `cosmic/models/object_create.py` |
| `ObjectCreateDict` | `cosmic/models/object_create.py` |
| `ObjectResponse` | `cosmic/models/object_response.py` |
| `CreateObjectErrorBody` | `cosmic/errors/create_object_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.objects.delete_object

- **Route**: `DELETE /buckets/{slug}/objects/{object_id}`
- **Auth**: `write_key`
- **Signature**: `def delete_object(slug: str, object_id: str, *, trigger_webhook: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `object_id`
- **Params**: `slug` — path · `object_id` — path · `trigger_webhook` — query
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteObjectErrorBody]`
- **Error**: `DeleteObjectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `cosmic/models/message_response.py` |
| `DeleteObjectErrorBody` | `cosmic/errors/delete_object_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.objects.get_object

- **Route**: `GET /buckets/{slug}/objects/{object_id}`
- **Auth**: `read_key`
- **Signature**: `def get_object(slug: str, object_id: str, *, read_key: str | None = None, preview_token: str | None = None, props: str | None = None, status: Status4OrStr | None = Status4.PUBLISHED, depth: int | None = 0, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `object_id`
- **Params**: `slug` — path · `object_id` — path · `read_key` — query · `preview_token` — query · `props` — query · `status` — query · `depth` — query · `use_cache` — query `useCache` · `pretty` — query
- **Returns (parsed)**: `ObjectResponse`
- **Returns (raw)**: `ApiResult[ObjectResponse, GetObjectErrorBody]`
- **Error**: `GetObjectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status4OrStr` | `cosmic/models/enums/status4.py` |
| `ObjectResponse` | `cosmic/models/object_response.py` |
| `GetObjectErrorBody` | `cosmic/errors/get_object_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.objects.list_objects

- **Route**: `GET /buckets/{slug}/objects`
- **Auth**: `read_key`
- **Signature**: `def list_objects(slug: str, *, read_key: str | None = None, preview_token: str | None = None, query: str | None = None, props: str | None = None, status: Status4OrStr | None = Status4.PUBLISHED, sort: str | None = "-order", limit: int | None = 1000, skip: int | None = 0, depth: int | None = 0, after: str | None = None, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path · `read_key` — query · `preview_token` — query · `query` — query · `props` — query · `status` — query · `sort` — query · `limit` — query · `skip` — query · `depth` — query · `after` — query · `use_cache` — query `useCache` · `pretty` — query
- **Returns (parsed)**: `ObjectListResponse`
- **Returns (raw)**: `ApiResult[ObjectListResponse, ListObjectsErrorBody]`
- **Error**: `ListObjectsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 413, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status4OrStr` | `cosmic/models/enums/status4.py` |
| `ObjectListResponse` | `cosmic/models/object_list_response.py` |
| `ListObjectsErrorBody` | `cosmic/errors/list_objects_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.objects.update_object

- **Route**: `PATCH /buckets/{slug}/objects/{object_id}`
- **Auth**: `write_key`
- **Signature**: `def update_object(slug: str, object_id: str, body: ObjectUpdate | ObjectUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `object_id`, `body`
- **Params**: `slug` — path · `object_id` — path · `body` — JSON body
- **Returns (parsed)**: `ObjectResponse`
- **Returns (raw)**: `ApiResult[ObjectResponse, UpdateObjectErrorBody]`
- **Error**: `UpdateObjectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ObjectUpdate` | `cosmic/models/object_update.py` |
| `ObjectUpdateDict` | `cosmic/models/object_update.py` |
| `ObjectResponse` | `cosmic/models/object_response.py` |
| `UpdateObjectErrorBody` | `cosmic/errors/update_object_error.py` |
| `Error` | `cosmic/models/error.py` |

