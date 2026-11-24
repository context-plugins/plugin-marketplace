<!-- Generated file — do not edit; regenerated with the SDK. -->

# Resolve — operations

Accessor: `client.resolve` · Source: `plinth_us_grants_data/apis/resolve.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.resolve.get_api_v1_search

- **Route**: `GET /api/v1/search`
- **Signature**: `def get_api_v1_search(q: str, *, jurisdiction: JurisdictionModelOrStr | None = JurisdictionModel.US, state: str | None = None, limit: int | None = 20, min_: int | None = None, max_: int | None = None, strict: str | None = None, example: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `jurisdiction` — query · `state` — query · `limit` — query · `min_` — query `min` · `max_` — query `max` · `strict` — query · `example` — query
- **Returns (parsed)**: `ApiV1SearchResponse`
- **Returns (raw)**: `ApiResult[ApiV1SearchResponse, GetApiV1SearchErrorBody]`
- **Error**: `GetApiV1SearchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JurisdictionModelOrStr` | `plinth_us_grants_data/models/enums/jurisdiction_model.py` |
| `ApiV1SearchResponse` | `plinth_us_grants_data/models/api_v1_search_response.py` |
| `GetApiV1SearchErrorBody` | `plinth_us_grants_data/errors/get_api_v1_search_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |

### client.resolve.search_organizations

- **Route**: `GET /api/search`
- **Signature**: `def search_organizations(q: str, *, state: str | None = None, mode: ModeModelOrStr | None = ModeModel.TEXT, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `state` — query · `mode` — query
- **Returns (parsed)**: `ApiSearchResponse`
- **Returns (raw)**: `ApiResult[ApiSearchResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ModeModelOrStr` | `plinth_us_grants_data/models/enums/mode_model.py` |
| `ApiSearchResponse` | `plinth_us_grants_data/models/api_search_response.py` |

