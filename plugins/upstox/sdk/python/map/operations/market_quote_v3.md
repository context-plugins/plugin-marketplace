<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketQuoteV3 — operations

Accessor: `client.market_quote_v3` · Source: `upstox/apis/market_quote_v3.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.market_quote_v3.get_ltp

- **Route**: `GET /v3/market-quote/ltp`
- **Auth**: `oauth2`
- **Signature**: `def get_ltp(*, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `instrument_key` — query
- **Returns (parsed)**: `GetMarketQuoteLastTradedPriceResponseV3`
- **Returns (raw)**: `ApiResult[GetMarketQuoteLastTradedPriceResponseV3, GetLtpErrorBody]`
- **Error**: `GetLtpErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMarketQuoteLastTradedPriceResponseV3` | `upstox/models/get_market_quote_last_traded_price_response_v3.py` |
| `GetLtpErrorBody` | `upstox/errors/get_ltp_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_quote_v3.get_market_quote_ohlcv3

- **Route**: `GET /v3/market-quote/ohlc`
- **Auth**: `oauth2`
- **Signature**: `def get_market_quote_ohlcv3(interval: str, *, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `interval`
- **Params**: `interval` — query · `instrument_key` — query
- **Returns (parsed)**: `GetMarketQuoteOhlcResponseV3`
- **Returns (raw)**: `ApiResult[GetMarketQuoteOhlcResponseV3, GetMarketQuoteOhlcv3ErrorBody]`
- **Error**: `GetMarketQuoteOhlcv3ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMarketQuoteOhlcResponseV3` | `upstox/models/get_market_quote_ohlc_response_v3.py` |
| `GetMarketQuoteOhlcv3ErrorBody` | `upstox/errors/get_market_quote_ohlcv3_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_quote_v3.get_market_quote_option_greek

- **Route**: `GET /v3/market-quote/option-greek`
- **Auth**: `oauth2`
- **Signature**: `def get_market_quote_option_greek(*, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `instrument_key` — query
- **Returns (parsed)**: `GetMarketQuoteOptionGreekResponseV3`
- **Returns (raw)**: `ApiResult[GetMarketQuoteOptionGreekResponseV3, GetMarketQuoteOptionGreekErrorBody]`
- **Error**: `GetMarketQuoteOptionGreekErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMarketQuoteOptionGreekResponseV3` | `upstox/models/get_market_quote_option_greek_response_v3.py` |
| `GetMarketQuoteOptionGreekErrorBody` | `upstox/errors/get_market_quote_option_greek_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

