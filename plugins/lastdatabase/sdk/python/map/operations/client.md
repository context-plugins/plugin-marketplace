<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `last_database/client.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search_leads

- **Route**: `GET /api/leads/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_leads(*, type_: TypeOrStr | None = Type.EMAIL, country: str | None = None, city: str | None = None, industry: str | None = None, keyword: str | None = None, limit: int | None = 25, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `country` — query · `city` — query · `industry` — query · `keyword` — query · `limit` — query
- **Returns (parsed)**: `LeadSearchResponse`
- **Returns (raw)**: `ApiResult[LeadSearchResponse, SearchLeadsErrorBody]`
- **Error**: `SearchLeadsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeOrStr` | `last_database/models/enums/type.py` |
| `LeadSearchResponse` | `last_database/models/lead_search_response.py` |
| `SearchLeadsErrorBody` | `last_database/errors/search_leads_error.py` |
| `ErrorResponse` | `last_database/models/error_response.py` |

