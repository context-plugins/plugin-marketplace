<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExpiredInstrument — operations

Accessor: `client.expired_instrument` · Source: `upstox/apis/expired_instrument.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.expired_instrument.get_expired_future_contracts

- **Route**: `GET /v2/expired-instruments/future/contract`
- **Auth**: `oauth2`
- **Signature**: `def get_expired_future_contracts(instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `expiry_date`
- **Params**: `instrument_key` — query · `expiry_date` — query
- **Returns (parsed)**: `GetExpiredFuturesContractResponse`
- **Returns (raw)**: `ApiResult[GetExpiredFuturesContractResponse, GetExpiredFutureContractsErrorBody]`
- **Error**: `GetExpiredFutureContractsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetExpiredFuturesContractResponse` | `upstox/models/get_expired_futures_contract_response.py` |
| `GetExpiredFutureContractsErrorBody` | `upstox/errors/get_expired_future_contracts_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.expired_instrument.get_expired_historical_candle_data

- **Route**: `GET /v2/expired-instruments/historical-candle/{expired_instrument_key}/{interval}/{to_date}/{from_date}`
- **Auth**: `oauth2`
- **Signature**: `def get_expired_historical_candle_data(expired_instrument_key: str, interval: str, to_date: str, from_date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `expired_instrument_key`, `interval`, `to_date`, `from_date`
- **Params**: `expired_instrument_key` — path · `interval` — path · `to_date` — path · `from_date` — path
- **Returns (parsed)**: `GetHistoricalCandleResponse`
- **Returns (raw)**: `ApiResult[GetHistoricalCandleResponse, GetExpiredHistoricalCandleDataErrorBody]`
- **Error**: `GetExpiredHistoricalCandleDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetHistoricalCandleResponse` | `upstox/models/get_historical_candle_response.py` |
| `GetExpiredHistoricalCandleDataErrorBody` | `upstox/errors/get_expired_historical_candle_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.expired_instrument.get_expired_option_contracts

- **Route**: `GET /v2/expired-instruments/option/contract`
- **Auth**: `oauth2`
- **Signature**: `def get_expired_option_contracts(instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `expiry_date`
- **Params**: `instrument_key` — query · `expiry_date` — query
- **Returns (parsed)**: `GetOptionContractResponse`
- **Returns (raw)**: `ApiResult[GetOptionContractResponse, GetExpiredOptionContractsErrorBody]`
- **Error**: `GetExpiredOptionContractsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetOptionContractResponse` | `upstox/models/get_option_contract_response.py` |
| `GetExpiredOptionContractsErrorBody` | `upstox/errors/get_expired_option_contracts_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.expired_instrument.get_expiries_response

- **Route**: `GET /v2/expired-instruments/expiries`
- **Auth**: `oauth2`
- **Signature**: `def get_expiries_response(instrument_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`
- **Params**: `instrument_key` — query
- **Returns (parsed)**: `GetExpiriesResponse`
- **Returns (raw)**: `ApiResult[GetExpiriesResponse, GetExpiriesResponseErrorBody]`
- **Error**: `GetExpiriesResponseErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetExpiriesResponse` | `upstox/models/get_expiries_response.py` |
| `GetExpiriesResponseErrorBody` | `upstox/errors/get_expiries_response_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

