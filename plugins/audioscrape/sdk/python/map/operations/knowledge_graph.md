<!-- Generated file — do not edit; regenerated with the SDK. -->

# KnowledgeGraph — operations

Accessor: `client.knowledge_graph` · Source: `audioscrape/apis/knowledge_graph.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.knowledge_graph.get_entity

- **Route**: `GET /api/entities/{entity_slug}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_entity(entity_slug: str, *, dataset_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_slug`
- **Params**: `entity_slug` — path · `dataset_id` — query
- **Returns (parsed)**: `EntityDetail`
- **Returns (raw)**: `ApiResult[EntityDetail, GetEntityErrorBody]`
- **Error**: `GetEntityErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntityDetail` | `audioscrape/models/entity_detail.py` |
| `GetEntityErrorBody` | `audioscrape/errors/get_entity_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.knowledge_graph.get_real_trending

- **Route**: `GET /api/trending`
- **Auth**: `bearer_auth`
- **Signature**: `def get_real_trending(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `TrendingResponse`
- **Returns (raw)**: `ApiResult[TrendingResponse, GetRealTrendingErrorBody]`
- **Error**: `GetRealTrendingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TrendingResponse` | `audioscrape/models/trending_response.py` |
| `GetRealTrendingErrorBody` | `audioscrape/errors/get_real_trending_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.knowledge_graph.search_entities

- **Route**: `GET /api/entities`
- **Auth**: `bearer_auth`
- **Signature**: `def search_entities(*, q: str | None = None, type_: str | None = None, limit: int | None = None, dataset_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `type_` — query `type` · `limit` — query · `dataset_id` — query
- **Returns (parsed)**: `EntitySearchResponse`
- **Returns (raw)**: `ApiResult[EntitySearchResponse, SearchEntitiesErrorBody]`
- **Error**: `SearchEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntitySearchResponse` | `audioscrape/models/entity_search_response.py` |
| `SearchEntitiesErrorBody` | `audioscrape/errors/search_entities_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

