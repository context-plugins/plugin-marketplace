<!-- Generated file — do not edit; regenerated with the SDK. -->

# History — operations

Accessor: `client.history` · Source: `upstox/apis/history.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.history.get_historical_candle_data_2

- **Route**: `GET /v2/historical-candle/{instrumentKey}/{interval}/{to_date}`
- **Signature**: `def get_historical_candle_data_2(instrument_key: str, interval: str, to_date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `interval`, `to_date`
- **Params**: `instrument_key` — path `instrumentKey` · `interval` — path · `to_date` — path
- **Returns (parsed)**: `GetHistoricalCandleResponse`
- **Returns (raw)**: `ApiResult[GetHistoricalCandleResponse, GetHistoricalCandleData2ErrorBody]`
- **Error**: `GetHistoricalCandleData2ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetHistoricalCandleResponse` | `upstox/models/get_historical_candle_response.py` |
| `GetHistoricalCandleData2ErrorBody` | `upstox/errors/get_historical_candle_data2_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.history.get_historical_candle_data_3

- **Route**: `GET /v2/historical-candle/{instrumentKey}/{interval}/{to_date}/{from_date}`
- **Signature**: `def get_historical_candle_data_3(instrument_key: str, interval: str, to_date: str, from_date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `interval`, `to_date`, `from_date`
- **Params**: `instrument_key` — path `instrumentKey` · `interval` — path · `to_date` — path · `from_date` — path
- **Returns (parsed)**: `GetHistoricalCandleResponse`
- **Returns (raw)**: `ApiResult[GetHistoricalCandleResponse, GetHistoricalCandleData3ErrorBody]`
- **Error**: `GetHistoricalCandleData3ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetHistoricalCandleResponse` | `upstox/models/get_historical_candle_response.py` |
| `GetHistoricalCandleData3ErrorBody` | `upstox/errors/get_historical_candle_data3_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.history.get_intra_day_candle_data_1

- **Route**: `GET /v2/historical-candle/intraday/{instrumentKey}/{interval}`
- **Signature**: `def get_intra_day_candle_data_1(instrument_key: str, interval: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `interval`
- **Params**: `instrument_key` — path `instrumentKey` · `interval` — path
- **Returns (parsed)**: `GetIntraDayCandleResponse`
- **Returns (raw)**: `ApiResult[GetIntraDayCandleResponse, GetIntraDayCandleData1ErrorBody]`
- **Error**: `GetIntraDayCandleData1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIntraDayCandleResponse` | `upstox/models/get_intra_day_candle_response.py` |
| `GetIntraDayCandleData1ErrorBody` | `upstox/errors/get_intra_day_candle_data1_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

