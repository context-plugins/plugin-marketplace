<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sources — operations

Accessor: `client.sources` · Source: `hightouch/apis/sources.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sources.create_source

- **Route**: `POST /sources`
- **Auth**: `bearer_auth`
- **Signature**: `def create_source(body: SourceCreate | SourceCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SourcesResponse1`
- **Returns (raw)**: `ApiResult[SourcesResponse1, CreateSourceErrorBody]`
- **Error**: `CreateSourceErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [409, 422] · `InternalServerErrorOrStr` [500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `SourceCreate` | `hightouch/models/source_create.py` |
| `SourceCreateDict` | `hightouch/models/source_create.py` |
| `SourcesResponse1` | `hightouch/models/unions/sources_response1.py` |
| `CreateSourceErrorBody` | `hightouch/errors/create_source_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.sources.get_source

- **Route**: `GET /sources/{sourceId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_source(source_id: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_id`
- **Params**: `source_id` — path `sourceId`
- **Returns (parsed)**: `Source`
- **Returns (raw)**: `ApiResult[Source, GetSourceErrorBody]`
- **Error**: `GetSourceErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Source` | `hightouch/models/source.py` |
| `GetSourceErrorBody` | `hightouch/errors/get_source_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.sources.list_source

- **Route**: `GET /sources`
- **Auth**: `bearer_auth`
- **Signature**: `def list_source(*, name: str | None = None, slug: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `slug` — query · `offset` — query · `limit` — query · `order_by` — query `orderBy`
- **Returns (parsed)**: `SourcesResponse`
- **Returns (raw)**: `ApiResult[SourcesResponse, ListSourceErrorBody]`
- **Error**: `ListSourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderByHightouchDestinationsApiOrStr` | `hightouch/models/enums/order_by_hightouch_destinations_api.py` |
| `SourcesResponse` | `hightouch/models/sources_response.py` |
| `ListSourceErrorBody` | `hightouch/errors/list_source_error.py` |

### client.sources.update_source

- **Route**: `PATCH /sources/{sourceId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_source(source_id: float, body: SourceUpdate | SourceUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_id`, `body`
- **Params**: `source_id` — path `sourceId` · `body` — JSON body
- **Returns (parsed)**: `SourcesResponse1`
- **Returns (raw)**: `ApiResult[SourcesResponse1, UpdateSourceErrorBody]`
- **Error**: `UpdateSourceErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SourceUpdate` | `hightouch/models/source_update.py` |
| `SourceUpdateDict` | `hightouch/models/source_update.py` |
| `SourcesResponse1` | `hightouch/models/unions/sources_response1.py` |
| `UpdateSourceErrorBody` | `hightouch/errors/update_source_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

