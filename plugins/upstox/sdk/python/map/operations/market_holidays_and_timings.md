<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketHolidaysAndTimings — operations

Accessor: `client.market_holidays_and_timings` · Source: `upstox/apis/market_holidays_and_timings.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.market_holidays_and_timings.get_change_oi_data

- **Route**: `GET /v2/market/change-oi`
- **Auth**: `oauth2`
- **Signature**: `def get_change_oi_data(instrument_key: str, expiry: str, date: str, interval: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `expiry`, `date`, `interval`
- **Params**: `instrument_key` — query · `expiry` — query · `date` — query · `interval` — query
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetChangeOiDataErrorBody]`
- **Error**: `GetChangeOiDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsResponse` | `upstox/models/analytics_response.py` |
| `GetChangeOiDataErrorBody` | `upstox/errors/get_change_oi_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_dii_data

- **Route**: `GET /v2/market/dii`
- **Auth**: `oauth2`
- **Signature**: `def get_dii_data(data_type: str, interval: str, *, from_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `data_type`, `interval`
- **Params**: `data_type` — query · `interval` — query · `from_` — query `from`
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetDiiDataErrorBody]`
- **Error**: `GetDiiDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsResponse` | `upstox/models/analytics_response.py` |
| `GetDiiDataErrorBody` | `upstox/errors/get_dii_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_exchange_timings

- **Route**: `GET /v2/market/timings/{date}`
- **Signature**: `def get_exchange_timings(date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `date`
- **Params**: `date` — path
- **Returns (parsed)**: `GetExchangeTimingResponse`
- **Returns (raw)**: `ApiResult[GetExchangeTimingResponse, GetExchangeTimingsErrorBody]`
- **Error**: `GetExchangeTimingsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetExchangeTimingResponse` | `upstox/models/get_exchange_timing_response.py` |
| `GetExchangeTimingsErrorBody` | `upstox/errors/get_exchange_timings_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_fii_data

- **Route**: `GET /v2/market/fii`
- **Auth**: `oauth2`
- **Signature**: `def get_fii_data(data_type: str, interval: str, *, from_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `data_type`, `interval`
- **Params**: `data_type` — query · `interval` — query · `from_` — query `from`
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetFiiDataErrorBody]`
- **Error**: `GetFiiDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsResponse` | `upstox/models/analytics_response.py` |
| `GetFiiDataErrorBody` | `upstox/errors/get_fii_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_holiday

- **Route**: `GET /v2/market/holidays/{date}`
- **Signature**: `def get_holiday(date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `date`
- **Params**: `date` — path
- **Returns (parsed)**: `GetHolidayResponse`
- **Returns (raw)**: `ApiResult[GetHolidayResponse, GetHolidayErrorBody]`
- **Error**: `GetHolidayErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetHolidayResponse` | `upstox/models/get_holiday_response.py` |
| `GetHolidayErrorBody` | `upstox/errors/get_holiday_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_holidays

- **Route**: `GET /v2/market/holidays`
- **Signature**: `def get_holidays(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetHolidayResponse`
- **Returns (raw)**: `ApiResult[GetHolidayResponse, GetHolidaysErrorBody]`
- **Error**: `GetHolidaysErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetHolidayResponse` | `upstox/models/get_holiday_response.py` |
| `GetHolidaysErrorBody` | `upstox/errors/get_holidays_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_market_status

- **Route**: `GET /v2/market/status/{exchange}`
- **Auth**: `oauth2`
- **Signature**: `def get_market_status(exchange: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `exchange`
- **Params**: `exchange` — path
- **Returns (parsed)**: `GetMarketStatusResponse`
- **Returns (raw)**: `ApiResult[GetMarketStatusResponse, GetMarketStatusErrorBody]`
- **Error**: `GetMarketStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMarketStatusResponse` | `upstox/models/get_market_status_response.py` |
| `GetMarketStatusErrorBody` | `upstox/errors/get_market_status_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_max_pain_data

- **Route**: `GET /v2/market/max-pain`
- **Auth**: `oauth2`
- **Signature**: `def get_max_pain_data(instrument_key: str, expiry: str, date: str, bucket_interval: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `expiry`, `date`, `bucket_interval`
- **Params**: `instrument_key` — query · `expiry` — query · `date` — query · `bucket_interval` — query
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetMaxPainDataErrorBody]`
- **Error**: `GetMaxPainDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsResponse` | `upstox/models/analytics_response.py` |
| `GetMaxPainDataErrorBody` | `upstox/errors/get_max_pain_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_oi_data

- **Route**: `GET /v2/market/oi`
- **Auth**: `oauth2`
- **Signature**: `def get_oi_data(instrument_key: str, expiry: str, date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `expiry`, `date`
- **Params**: `instrument_key` — query · `expiry` — query · `date` — query
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetOiDataErrorBody]`
- **Error**: `GetOiDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsResponse` | `upstox/models/analytics_response.py` |
| `GetOiDataErrorBody` | `upstox/errors/get_oi_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_pcr_data

- **Route**: `GET /v2/market/pcr`
- **Auth**: `oauth2`
- **Signature**: `def get_pcr_data(instrument_key: str, expiry: str, date: str, bucket_interval: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `expiry`, `date`, `bucket_interval`
- **Params**: `instrument_key` — query · `expiry` — query · `date` — query · `bucket_interval` — query
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetPcrDataErrorBody]`
- **Error**: `GetPcrDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsResponse` | `upstox/models/analytics_response.py` |
| `GetPcrDataErrorBody` | `upstox/errors/get_pcr_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_smartlist_futures

- **Route**: `GET /v2/market/smartlist/futures`
- **Auth**: `oauth2`
- **Signature**: `def get_smartlist_futures(*, asset_type: str | None = None, category: str | None = None, page_number: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `asset_type` — query · `category` — query · `page_number` — query · `page_size` — query
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetSmartlistFuturesErrorBody]`
- **Error**: `GetSmartlistFuturesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsResponse` | `upstox/models/analytics_response.py` |
| `GetSmartlistFuturesErrorBody` | `upstox/errors/get_smartlist_futures_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_smartlist_mtf

- **Route**: `GET /v2/market/smartlist/mtf`
- **Auth**: `oauth2`
- **Signature**: `def get_smartlist_mtf(*, page_number: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_number` — query · `page_size` — query
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetSmartlistMtfErrorBody]`
- **Error**: `GetSmartlistMtfErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsResponse` | `upstox/models/analytics_response.py` |
| `GetSmartlistMtfErrorBody` | `upstox/errors/get_smartlist_mtf_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_holidays_and_timings.get_smartlist_options

- **Route**: `GET /v2/market/smartlist/options`
- **Auth**: `oauth2`
- **Signature**: `def get_smartlist_options(*, asset_type: str | None = None, category: str | None = None, page_number: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `asset_type` — query · `category` — query · `page_number` — query · `page_size` — query
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetSmartlistOptionsErrorBody]`
- **Error**: `GetSmartlistOptionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsResponse` | `upstox/models/analytics_response.py` |
| `GetSmartlistOptionsErrorBody` | `upstox/errors/get_smartlist_options_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

