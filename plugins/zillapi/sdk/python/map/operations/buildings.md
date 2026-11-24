<!-- Generated file — do not edit; regenerated with the SDK. -->

# Buildings — operations

Accessor: `client.buildings` · Source: `zillapi/apis/buildings.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.buildings.get_building_by_url

- **Route**: `GET /v1/buildings/by-url`
- **Auth**: `bearer_auth`
- **Signature**: `def get_building_by_url(url: str, *, include_units: IncludeUnitsOrStr | None = IncludeUnits.ALL, sync: bool | None = True, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `url`
- **Params**: `url` — query · `include_units` — query · `sync` — query
- **Returns (parsed)**: `V1BuildingsByUrlResponse`
- **Returns (raw)**: `ApiResult[V1BuildingsByUrlResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `IncludeUnitsOrStr` | `zillapi/models/enums/include_units.py` |
| `V1BuildingsByUrlResponse` | `zillapi/models/v1_buildings_by_url_response.py` |

