<!-- Generated file — do not edit; regenerated with the SDK. -->

# History — operations

Accessor: `client.history` · Source: `cars_xe/apis/history.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.history.get_vehicle_history

- **Route**: `GET /history`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_vehicle_history(vin: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vin`
- **Params**: `vin` — query · `format_` — query `format`
- **Returns (parsed)**: `HistoryResponse`
- **Returns (raw)**: `ApiResult[HistoryResponse, GetVehicleHistoryErrorBody]`
- **Error**: `GetVehicleHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `cars_xe/models/enums/format.py` |
| `HistoryResponse` | `cars_xe/models/history_response.py` |
| `GetVehicleHistoryErrorBody` | `cars_xe/errors/get_vehicle_history_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

