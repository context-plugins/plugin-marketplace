<!-- Generated file — do not edit; regenerated with the SDK. -->

# LocationsApi — operations

Accessor: `client.locations_api` · Source: `prisma_reviews/apis/locations_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.locations_api.get_location

- **Route**: `GET /v1/locations/{id}`
- **Auth**: `api_key`
- **Signature**: `def get_location(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Location`
- **Returns (raw)**: `ApiResult[Location, GetLocationErrorBody]`
- **Error**: `GetLocationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Location` | `prisma_reviews/models/location.py` |
| `GetLocationErrorBody` | `prisma_reviews/errors/get_location_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.locations_api.list_locations

- **Route**: `GET /v1/locations`
- **Auth**: `api_key`
- **Signature**: `def list_locations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `LocationList`
- **Returns (raw)**: `ApiResult[LocationList, ListLocationsErrorBody]`
- **Error**: `ListLocationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LocationList` | `prisma_reviews/models/location_list.py` |
| `ListLocationsErrorBody` | `prisma_reviews/errors/list_locations_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.locations_api.refresh_location

- **Route**: `POST /v1/locations/{id}/refresh`
- **Auth**: `api_key`
- **Signature**: `def refresh_location(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `LocationRefresh`
- **Returns (raw)**: `ApiResult[LocationRefresh, RefreshLocationErrorBody]`
- **Error**: `RefreshLocationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LocationRefresh` | `prisma_reviews/models/location_refresh.py` |
| `RefreshLocationErrorBody` | `prisma_reviews/errors/refresh_location_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

