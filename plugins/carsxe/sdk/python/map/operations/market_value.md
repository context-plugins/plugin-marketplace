<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketValue — operations

Accessor: `client.market_value` · Source: `cars_xe/apis/market_value.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.market_value.get_market_value

- **Route**: `GET /marketvalue`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_market_value(vin: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vin`
- **Params**: `vin` — query · `format_` — query `format`
- **Returns (parsed)**: `MarketvalueResponse`
- **Returns (raw)**: `ApiResult[MarketvalueResponse, GetMarketValueErrorBody]`
- **Error**: `GetMarketValueErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `cars_xe/models/enums/format.py` |
| `MarketvalueResponse` | `cars_xe/models/marketvalue_response.py` |
| `GetMarketValueErrorBody` | `cars_xe/errors/get_market_value_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

### client.market_value.get_market_value_v2

- **Route**: `GET /v2/marketvalue`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_market_value_v2(vin: str, *, state: str | None = None, mileage: float | None = None, condition: ConditionOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vin`
- **Params**: `vin` — query · `state` — query · `mileage` — query · `condition` — query
- **Returns (parsed)**: `V2MarketvalueResponse`
- **Returns (raw)**: `ApiResult[V2MarketvalueResponse, GetMarketValueV2ErrorBody]`
- **Error**: `GetMarketValueV2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500, 503] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConditionOrStr` | `cars_xe/models/enums/condition.py` |
| `V2MarketvalueResponse` | `cars_xe/models/v2_marketvalue_response.py` |
| `GetMarketValueV2ErrorBody` | `cars_xe/errors/get_market_value_v2_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

