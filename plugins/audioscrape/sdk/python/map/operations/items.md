<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.items` · Source: `audioscrape/apis/items.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.items.get_item

- **Route**: `GET /api/items/{item_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_item(item_id: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `item_id`
- **Params**: `item_id` — path · `include` — query
- **Returns (parsed)**: `EpisodeDetail`
- **Returns (raw)**: `ApiResult[EpisodeDetail, GetItemErrorBody]`
- **Error**: `GetItemErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EpisodeDetail` | `audioscrape/models/episode_detail.py` |
| `GetItemErrorBody` | `audioscrape/errors/get_item_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.items.get_item_transcript

- **Route**: `GET /api/items/{item_id}/transcript`
- **Auth**: `bearer_auth`
- **Signature**: `def get_item_transcript(item_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `item_id`
- **Params**: `item_id` — path
- **Returns (parsed)**: `Transcript`
- **Returns (raw)**: `ApiResult[Transcript, GetItemTranscriptErrorBody]`
- **Error**: `GetItemTranscriptErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Transcript` | `audioscrape/models/transcript.py` |
| `GetItemTranscriptErrorBody` | `audioscrape/errors/get_item_transcript_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.items.list_items

- **Route**: `GET /api/items`
- **Auth**: `bearer_auth`
- **Signature**: `def list_items(*, source_type: str | None = None, dataset_id: int | None = None, library: str | None = None, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `source_type` — query · `dataset_id` — query · `library` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ItemList`
- **Returns (raw)**: `ApiResult[ItemList, ListItemsErrorBody]`
- **Error**: `ListItemsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ItemList` | `audioscrape/models/item_list.py` |
| `ListItemsErrorBody` | `audioscrape/errors/list_items_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.items.upload_item_external

- **Route**: `POST /api/datasets/{id}/items`
- **Auth**: `bearer_auth`
- **Signature**: `def upload_item_external(id_: int, body: UploadFromUrl | UploadFromUrlDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `UploadResponse`
- **Returns (raw)**: `ApiResult[UploadResponse, UploadItemExternalErrorBody]`
- **Error**: `UploadItemExternalErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [400, 401, 404, 409, 413, 415, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UploadFromUrl` | `audioscrape/models/upload_from_url.py` |
| `UploadFromUrlDict` | `audioscrape/models/upload_from_url.py` |
| `UploadResponse` | `audioscrape/models/upload_response.py` |
| `UploadItemExternalErrorBody` | `audioscrape/errors/upload_item_external_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

