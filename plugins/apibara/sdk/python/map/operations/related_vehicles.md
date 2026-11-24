<!-- Generated file — do not edit; regenerated with the SDK. -->

# RelatedVehicles — operations

Accessor: `client.related_vehicles` · Source: `apibara/apis/related_vehicles.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.related_vehicles.get_related_vehicles

- **Route**: `GET /vehicles/{slugVin}/related`
- **Auth**: `api_key_auth`
- **Signature**: `def get_related_vehicles(slug_vin: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug_vin`
- **Params**: `slug_vin` — path `slugVin`
- **Returns (parsed)**: `VehicleListResponse`
- **Returns (raw)**: `ApiResult[VehicleListResponse, GetRelatedVehiclesErrorBody]`
- **Error**: `GetRelatedVehiclesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `VehicleListResponse` | `apibara/models/vehicle_list_response.py` |
| `GetRelatedVehiclesErrorBody` | `apibara/errors/get_related_vehicles_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

