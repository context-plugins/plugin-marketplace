<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChangeStream — operations

Accessor: `client.change_stream` · Source: `apibara/apis/change_stream.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.change_stream.list_vehicle_changes

- **Route**: `GET /changes`
- **Auth**: `api_key_auth`
- **Signature**: `def list_vehicle_changes(*, after: int | None = 0, limit: int | None = 100, platform: PlatformOrStr | None = None, event_type: EventTypeOrStr | None = None, terminal: bool | None = None, lot_number: str | None = None, vin: str | None = None, include_record: IncludeRecord1 | IncludeRecord1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `after` — query · `limit` — query · `platform` — query · `event_type` — query · `terminal` — query · `lot_number` — query · `vin` — query · `include_record` — query
- **Returns (parsed)**: `VehicleChangesResponse`
- **Returns (raw)**: `ApiResult[VehicleChangesResponse, ListVehicleChangesErrorBody]`
- **Error**: `ListVehicleChangesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 422] · `ChangeCursorExpiredResponse` [410] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformOrStr` | `apibara/models/enums/platform.py` |
| `EventTypeOrStr` | `apibara/models/enums/event_type.py` |
| `IncludeRecord1` | `apibara/models/unions/include_record1.py` |
| `IncludeRecord1Dict` | `apibara/models/unions/include_record1.py` |
| `VehicleChangesResponse` | `apibara/models/vehicle_changes_response.py` |
| `ListVehicleChangesErrorBody` | `apibara/errors/list_vehicle_changes_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |
| `ChangeCursorExpiredResponse` | `apibara/models/change_cursor_expired_response.py` |

