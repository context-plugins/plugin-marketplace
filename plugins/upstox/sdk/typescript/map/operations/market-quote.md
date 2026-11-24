<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketQuote — operations

Accessor: `client.marketQuote` · Source: `src/resources/market-quote.ts` · 3 operations · Request and error types: namespace `MarketQuote`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFullMarketQuote

- **Signature**: `getFullMarketQuote(request?: MarketQuote.GetFullMarketQuoteRequest, options?: RequestOptions): ApiPromise<GetFullMarketQuoteResponse, MarketQuote.GetFullMarketQuoteError>`
- **Wire**: `GET /v2/market-quote/quotes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetFullMarketQuoteResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketQuote.GetFullMarketQuoteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketQuote.GetFullMarketQuoteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `symbol` | `query` | — | `string` | no |
| `instrumentKey` | `query` | `instrument_key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetFullMarketQuoteResponse` | `getFullMarketQuoteResponseSchema` | `src/models/get-full-market-quote-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMarketQuoteOhlc

- **Signature**: `getMarketQuoteOhlc(request: MarketQuote.GetMarketQuoteOhlcRequest, options?: RequestOptions): ApiPromise<GetMarketQuoteOhlcResponse, MarketQuote.GetMarketQuoteOhlcError>`
- **Wire**: `GET /v2/market-quote/ohlc`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMarketQuoteOhlcResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketQuote.GetMarketQuoteOhlcError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketQuote.GetMarketQuoteOhlcRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interval` | `query` | — | `string` | yes |
| `symbol` | `query` | — | `string` | no |
| `instrumentKey` | `query` | `instrument_key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMarketQuoteOhlcResponse` | `getMarketQuoteOhlcResponseSchema` | `src/models/get-market-quote-ohlc-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### ltp

- **Signature**: `ltp(request?: MarketQuote.LtpRequest, options?: RequestOptions): ApiPromise<GetMarketQuoteLastTradedPriceResponse, MarketQuote.LtpError>`
- **Wire**: `GET /v2/market-quote/ltp`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMarketQuoteLastTradedPriceResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketQuote.LtpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketQuote.LtpRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `symbol` | `query` | — | `string` | no |
| `instrumentKey` | `query` | `instrument_key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMarketQuoteLastTradedPriceResponse` | `getMarketQuoteLastTradedPriceResponseSchema` | `src/models/get-market-quote-last-traded-price-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

