<!-- Generated file — do not edit; regenerated with the SDK. -->

# Filters — operations

Accessor: `client.filters` · Source: `apibara/apis/filters.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.filters.get_vehicle_filters

- **Route**: `GET /vehicles/filters`
- **Auth**: `api_key_auth`
- **Signature**: `def get_vehicle_filters(*, make: str | None = None, series: str | None = None, model: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `make` — query · `series` — query · `model` — query
- **Returns (parsed)**: `FiltersResponse`
- **Returns (raw)**: `ApiResult[FiltersResponse, GetVehicleFiltersErrorBody]`
- **Error**: `GetVehicleFiltersErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `FiltersResponse` | `apibara/models/filters_response.py` |
| `GetVehicleFiltersErrorBody` | `apibara/errors/get_vehicle_filters_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

