<!-- Generated file — do not edit; regenerated with the SDK. -->

# Statutes — operations

Accessor: `client.statutes` · Source: `common_elements/apis/statutes.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.statutes.statutes_by_state

- **Route**: `GET /api/v1/statutes/by-state`
- **Auth**: `bearer_auth`
- **Signature**: `def statutes_by_state(state: str, *, chapter: str | None = None, topic: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `state`
- **Params**: `state` — query · `chapter` — query · `topic` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1StatutesByStateResponse`
- **Returns (raw)**: `ApiResult[ApiV1StatutesByStateResponse, StatutesByStateErrorBody]`
- **Error**: `StatutesByStateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1StatutesByStateResponse` | `common_elements/models/api_v1_statutes_by_state_response.py` |
| `StatutesByStateErrorBody` | `common_elements/errors/statutes_by_state_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.statutes.statutes_search

- **Route**: `GET /api/v1/statutes/search`
- **Auth**: `bearer_auth`
- **Signature**: `def statutes_search(q: str, *, state: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `state` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1StatutesSearchResponse`
- **Returns (raw)**: `ApiResult[ApiV1StatutesSearchResponse, StatutesSearchErrorBody]`
- **Error**: `StatutesSearchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1StatutesSearchResponse` | `common_elements/models/api_v1_statutes_search_response.py` |
| `StatutesSearchErrorBody` | `common_elements/errors/statutes_search_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.statutes.statutes_section_detail

- **Route**: `GET /api/v1/statutes/sections/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def statutes_section_detail(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1StatutesSectionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1StatutesSectionsResponse, StatutesSectionDetailErrorBody]`
- **Error**: `StatutesSectionDetailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1StatutesSectionsResponse` | `common_elements/models/api_v1_statutes_sections_response.py` |
| `StatutesSectionDetailErrorBody` | `common_elements/errors/statutes_section_detail_error.py` |
| `Error` | `common_elements/models/error.py` |

