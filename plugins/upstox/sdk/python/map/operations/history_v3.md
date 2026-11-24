<!-- Generated file — do not edit; regenerated with the SDK. -->

# HistoryV3 — operations

Accessor: `client.history_v3` · Source: `upstox/apis/history_v3.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.history_v3.get_historical_candle_data

- **Route**: `GET /v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date}`
- **Signature**: `def get_historical_candle_data(instrument_key: str, unit: str, interval: int, to_date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `unit`, `interval`, `to_date`
- **Params**: `instrument_key` — path `instrumentKey` · `unit` — path · `interval` — path · `to_date` — path
- **Returns (parsed)**: `GetHistoricalCandleResponse`
- **Returns (raw)**: `ApiResult[GetHistoricalCandleResponse, GetHistoricalCandleDataErrorBody]`
- **Error**: `GetHistoricalCandleDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetHistoricalCandleResponse` | `upstox/models/get_historical_candle_response.py` |
| `GetHistoricalCandleDataErrorBody` | `upstox/errors/get_historical_candle_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.history_v3.get_historical_candle_data_1

- **Route**: `GET /v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date}/{from_date}`
- **Signature**: `def get_historical_candle_data_1(instrument_key: str, unit: str, interval: int, to_date: str, from_date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `unit`, `interval`, `to_date`, `from_date`
- **Params**: `instrument_key` — path `instrumentKey` · `unit` — path · `interval` — path · `to_date` — path · `from_date` — path
- **Returns (parsed)**: `GetHistoricalCandleResponse`
- **Returns (raw)**: `ApiResult[GetHistoricalCandleResponse, GetHistoricalCandleData1ErrorBody]`
- **Error**: `GetHistoricalCandleData1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetHistoricalCandleResponse` | `upstox/models/get_historical_candle_response.py` |
| `GetHistoricalCandleData1ErrorBody` | `upstox/errors/get_historical_candle_data1_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.history_v3.get_intra_day_candle_data

- **Route**: `GET /v3/historical-candle/intraday/{instrumentKey}/{unit}/{interval}`
- **Signature**: `def get_intra_day_candle_data(instrument_key: str, unit: str, interval: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `unit`, `interval`
- **Params**: `instrument_key` — path `instrumentKey` · `unit` — path · `interval` — path
- **Returns (parsed)**: `GetIntraDayCandleResponse`
- **Returns (raw)**: `ApiResult[GetIntraDayCandleResponse, GetIntraDayCandleDataErrorBody]`
- **Error**: `GetIntraDayCandleDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIntraDayCandleResponse` | `upstox/models/get_intra_day_candle_response.py` |
| `GetIntraDayCandleDataErrorBody` | `upstox/errors/get_intra_day_candle_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

