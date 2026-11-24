<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketQuote — operations

Accessor: `client.market_quote` · Source: `upstox/apis/market_quote.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.market_quote.get_full_market_quote

- **Route**: `GET /v2/market-quote/quotes`
- **Auth**: `oauth2`
- **Signature**: `def get_full_market_quote(*, symbol: str | None = None, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `symbol` — query · `instrument_key` — query
- **Returns (parsed)**: `GetFullMarketQuoteResponse`
- **Returns (raw)**: `ApiResult[GetFullMarketQuoteResponse, GetFullMarketQuoteErrorBody]`
- **Error**: `GetFullMarketQuoteErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetFullMarketQuoteResponse` | `upstox/models/get_full_market_quote_response.py` |
| `GetFullMarketQuoteErrorBody` | `upstox/errors/get_full_market_quote_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_quote.get_market_quote_ohlc

- **Route**: `GET /v2/market-quote/ohlc`
- **Auth**: `oauth2`
- **Signature**: `def get_market_quote_ohlc(interval: str, *, symbol: str | None = None, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `interval`
- **Params**: `interval` — query · `symbol` — query · `instrument_key` — query
- **Returns (parsed)**: `GetMarketQuoteOhlcResponse`
- **Returns (raw)**: `ApiResult[GetMarketQuoteOhlcResponse, GetMarketQuoteOhlcErrorBody]`
- **Error**: `GetMarketQuoteOhlcErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMarketQuoteOhlcResponse` | `upstox/models/get_market_quote_ohlc_response.py` |
| `GetMarketQuoteOhlcErrorBody` | `upstox/errors/get_market_quote_ohlc_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.market_quote.ltp

- **Route**: `GET /v2/market-quote/ltp`
- **Auth**: `oauth2`
- **Signature**: `def ltp(*, symbol: str | None = None, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `symbol` — query · `instrument_key` — query
- **Returns (parsed)**: `GetMarketQuoteLastTradedPriceResponse`
- **Returns (raw)**: `ApiResult[GetMarketQuoteLastTradedPriceResponse, LtpErrorBody]`
- **Error**: `LtpErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMarketQuoteLastTradedPriceResponse` | `upstox/models/get_market_quote_last_traded_price_response.py` |
| `LtpErrorBody` | `upstox/errors/ltp_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

