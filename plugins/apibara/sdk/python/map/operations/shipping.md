<!-- Generated file — do not edit; regenerated with the SDK. -->

# Shipping — operations

Accessor: `client.shipping` · Source: `apibara/apis/shipping.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.shipping.get_auction_to_port_shipping

- **Route**: `GET /shipping/auction-to-port`
- **Auth**: `api_key_auth`
- **Signature**: `def get_auction_to_port_shipping(*, vin: str | None = None, lot_number: str | None = None, ports: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `vin` — query · `lot_number` — query · `ports` — query
- **Returns (parsed)**: `ShippingResponse`
- **Returns (raw)**: `ApiResult[ShippingResponse, GetAuctionToPortShippingErrorBody]`
- **Error**: `GetAuctionToPortShippingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `ShippingResponse` | `apibara/models/shipping_response.py` |
| `GetAuctionToPortShippingErrorBody` | `apibara/errors/get_auction_to_port_shipping_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

### client.shipping.get_vehicle_shipping

- **Route**: `GET /vehicles/{slugVin}/shipping`
- **Auth**: `api_key_auth`
- **Signature**: `def get_vehicle_shipping(slug_vin: str, *, ports: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug_vin`
- **Params**: `slug_vin` — path `slugVin` · `ports` — query
- **Returns (parsed)**: `ShippingResponse`
- **Returns (raw)**: `ApiResult[ShippingResponse, GetVehicleShippingErrorBody]`
- **Error**: `GetVehicleShippingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `ShippingResponse` | `apibara/models/shipping_response.py` |
| `GetVehicleShippingErrorBody` | `apibara/errors/get_vehicle_shipping_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

