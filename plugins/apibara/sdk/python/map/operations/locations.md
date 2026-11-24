<!-- Generated file — do not edit; regenerated with the SDK. -->

# Locations — operations

Accessor: `client.locations` · Source: `apibara/apis/locations.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.locations.list_auction_locations

- **Route**: `GET /locations`
- **Auth**: `api_key_auth`
- **Signature**: `def list_auction_locations(*, platform: PlatformOrStr | None = None, state: str | None = None, facility_id: str | None = None, q: str | None = None, zip_: str | None = None, radius: float | None = None, units: UnitsOrStr | None = Units.MI, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `platform` — query · `state` — query · `facility_id` — query · `q` — query · `zip_` — query `zip` · `radius` — query · `units` — query · `per_page` — query
- **Returns (parsed)**: `LocationsResponse`
- **Returns (raw)**: `ApiResult[LocationsResponse, ListAuctionLocationsErrorBody]`
- **Error**: `ListAuctionLocationsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformOrStr` | `apibara/models/enums/platform.py` |
| `UnitsOrStr` | `apibara/models/enums/units.py` |
| `LocationsResponse` | `apibara/models/locations_response.py` |
| `ListAuctionLocationsErrorBody` | `apibara/errors/list_auction_locations_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

