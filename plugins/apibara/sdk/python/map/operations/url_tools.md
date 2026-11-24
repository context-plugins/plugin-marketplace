<!-- Generated file — do not edit; regenerated with the SDK. -->

# UrlTools — operations

Accessor: `client.url_tools` · Source: `apibara/apis/url_tools.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.url_tools.get_vehicle_details_from_url

- **Route**: `GET /vehicles/urltodetails`
- **Auth**: `api_key_auth`
- **Signature**: `def get_vehicle_details_from_url(url: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `url`
- **Params**: `url` — query
- **Returns (parsed)**: `VehicleDetailsResponse`
- **Returns (raw)**: `ApiResult[VehicleDetailsResponse, GetVehicleDetailsFromUrlErrorBody]`
- **Error**: `GetVehicleDetailsFromUrlErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `VehicleDetailsResponse` | `apibara/models/vehicle_details_response.py` |
| `GetVehicleDetailsFromUrlErrorBody` | `apibara/errors/get_vehicle_details_from_url_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

