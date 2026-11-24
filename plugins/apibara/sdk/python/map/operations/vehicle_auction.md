<!-- Generated file — do not edit; regenerated with the SDK. -->

# VehicleAuction — operations

Accessor: `client.vehicle_auction` · Source: `apibara/apis/vehicle_auction.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vehicle_auction.get_vehicle_seller_reserve

- **Route**: `GET /vehicles/{slugVin}/reserve`
- **Auth**: `api_key_auth`
- **Signature**: `def get_vehicle_seller_reserve(slug_vin: str, *, include_events: bool | None = False, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug_vin`
- **Params**: `slug_vin` — path `slugVin` · `include_events` — query · `limit` — query
- **Returns (parsed)**: `VehiclesReserveResponse`
- **Returns (raw)**: `ApiResult[VehiclesReserveResponse, GetVehicleSellerReserveErrorBody]`
- **Error**: `GetVehicleSellerReserveErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [404] · `RawError` [401, 429, anything unmapped]

| Type | Source |
| --- | --- |
| `VehiclesReserveResponse` | `apibara/models/vehicles_reserve_response.py` |
| `GetVehicleSellerReserveErrorBody` | `apibara/errors/get_vehicle_seller_reserve_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

