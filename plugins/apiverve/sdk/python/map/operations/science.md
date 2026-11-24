<!-- Generated file — do not edit; regenerated with the SDK. -->

# Science — operations

Accessor: `client.science` · Source: `api_verve/apis/science.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.science.julianday

- **Route**: `GET /v1/julianday`
- **Auth**: `api_key`
- **Signature**: `def julianday(date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `date`
- **Params**: `date` — query
- **Returns (parsed)**: `V1JuliandayResponse`
- **Returns (raw)**: `ApiResult[V1JuliandayResponse, JuliandayErrorBody]`
- **Error**: `JuliandayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1JuliandayResponse` | `api_verve/models/v1_julianday_response.py` |
| `JuliandayErrorBody` | `api_verve/errors/julianday_error.py` |

### client.science.meteorites

- **Route**: `GET /v1/meteorites`
- **Auth**: `api_key`
- **Signature**: `def meteorites(name: str, *, mass: float | None = None, year: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query · `mass` — query · `year` — query
- **Returns (parsed)**: `V1MeteoritesResponse`
- **Returns (raw)**: `ApiResult[V1MeteoritesResponse, MeteoritesErrorBody]`
- **Error**: `MeteoritesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MeteoritesResponse` | `api_verve/models/v1_meteorites_response.py` |
| `MeteoritesErrorBody` | `api_verve/errors/meteorites_error.py` |

### client.science.periodictable

- **Route**: `GET /v1/periodictable`
- **Auth**: `api_key`
- **Signature**: `def periodictable(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query
- **Returns (parsed)**: `V1PeriodictableResponse`
- **Returns (raw)**: `ApiResult[V1PeriodictableResponse, PeriodictableErrorBody]`
- **Error**: `PeriodictableErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PeriodictableResponse` | `api_verve/models/v1_periodictable_response.py` |
| `PeriodictableErrorBody` | `api_verve/errors/periodictable_error.py` |

### client.science.starslookup

- **Route**: `GET /v1/starslookup`
- **Auth**: `api_key`
- **Signature**: `def starslookup(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query
- **Returns (parsed)**: `V1StarslookupResponse`
- **Returns (raw)**: `ApiResult[V1StarslookupResponse, StarslookupErrorBody]`
- **Error**: `StarslookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1StarslookupResponse` | `api_verve/models/v1_starslookup_response.py` |
| `StarslookupErrorBody` | `api_verve/errors/starslookup_error.py` |

