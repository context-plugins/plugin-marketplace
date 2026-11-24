<!-- Generated file — do not edit; regenerated with the SDK. -->

# VehicleHistory — operations

Accessor: `client.vehicle_history` · Source: `apibara/apis/vehicle_history.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vehicle_history.get_vehicle_history

- **Route**: `GET /vehicles/{slugVin}/history`
- **Auth**: `api_key_auth`
- **Signature**: `def get_vehicle_history(slug_vin: str, *, per_page: int | None = 20, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug_vin`
- **Params**: `slug_vin` — path `slugVin` · `per_page` — query · `cursor` — query
- **Returns (parsed)**: `VehicleHistoryResponse`
- **Returns (raw)**: `ApiResult[VehicleHistoryResponse, GetVehicleHistoryErrorBody]`
- **Error**: `GetVehicleHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `VehicleHistoryResponse` | `apibara/models/vehicle_history_response.py` |
| `GetVehicleHistoryErrorBody` | `apibara/errors/get_vehicle_history_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

