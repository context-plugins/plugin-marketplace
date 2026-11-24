<!-- Generated file — do not edit; regenerated with the SDK. -->

# MediaApi — operations

Accessor: `client.media_api` · Source: `cosmic/apis/media_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.media_api.delete_media

- **Route**: `DELETE /buckets/{slug}/media/{media_id}`
- **Auth**: `write_key`
- **Signature**: `def delete_media(slug: str, media_id: str, *, trigger_webhook: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `media_id`
- **Params**: `slug` — path · `media_id` — path · `trigger_webhook` — query
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteMediaErrorBody]`
- **Error**: `DeleteMediaErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `cosmic/models/message_response.py` |
| `DeleteMediaErrorBody` | `cosmic/errors/delete_media_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.media_api.get_media

- **Route**: `GET /buckets/{slug}/media/{media_id}`
- **Auth**: `read_key`
- **Signature**: `def get_media(slug: str, media_id: str, *, read_key: str | None = None, props: str | None = None, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `media_id`
- **Params**: `slug` — path · `media_id` — path · `read_key` — query · `props` — query · `use_cache` — query `useCache` · `pretty` — query
- **Returns (parsed)**: `MediaResponse`
- **Returns (raw)**: `ApiResult[MediaResponse, GetMediaErrorBody]`
- **Error**: `GetMediaErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MediaResponse` | `cosmic/models/media_response.py` |
| `GetMediaErrorBody` | `cosmic/errors/get_media_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.media_api.list_media

- **Route**: `GET /buckets/{slug}/media`
- **Auth**: `read_key`
- **Signature**: `def list_media(slug: str, *, read_key: str | None = None, query: str | None = None, props: str | None = None, sort: SortOrStr | None = None, limit: int | None = 1000, skip: int | None = 0, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path · `read_key` — query · `query` — query · `props` — query · `sort` — query · `limit` — query · `skip` — query · `use_cache` — query `useCache` · `pretty` — query
- **Returns (parsed)**: `MediaListResponse`
- **Returns (raw)**: `ApiResult[MediaListResponse, ListMediaErrorBody]`
- **Error**: `ListMediaErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 413, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrStr` | `cosmic/models/enums/sort.py` |
| `MediaListResponse` | `cosmic/models/media_list_response.py` |
| `ListMediaErrorBody` | `cosmic/errors/list_media_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.media_api.update_media

- **Route**: `PATCH /buckets/{slug}/media/{media_id}`
- **Auth**: `write_key`
- **Signature**: `def update_media(slug: str, media_id: str, body: MediaUpdate | MediaUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `media_id`, `body`
- **Params**: `slug` — path · `media_id` — path · `body` — JSON body
- **Returns (parsed)**: `MediaResponse`
- **Returns (raw)**: `ApiResult[MediaResponse, UpdateMediaErrorBody]`
- **Error**: `UpdateMediaErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MediaUpdate` | `cosmic/models/media_update.py` |
| `MediaUpdateDict` | `cosmic/models/media_update.py` |
| `MediaResponse` | `cosmic/models/media_response.py` |
| `UpdateMediaErrorBody` | `cosmic/errors/update_media_error.py` |
| `Error` | `cosmic/models/error.py` |

