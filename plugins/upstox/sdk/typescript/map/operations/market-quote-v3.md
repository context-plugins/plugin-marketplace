<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketQuoteV3 — operations

Accessor: `client.marketQuoteV3` · Source: `src/resources/market-quote-v3.ts` · 3 operations · Request and error types: namespace `MarketQuoteV3`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLtp

- **Signature**: `getLtp(request?: MarketQuoteV3.GetLtpRequest, options?: RequestOptions): ApiPromise<GetMarketQuoteLastTradedPriceResponseV3, MarketQuoteV3.GetLtpError>`
- **Wire**: `GET /v3/market-quote/ltp`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMarketQuoteLastTradedPriceResponseV3`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketQuoteV3.GetLtpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketQuoteV3.GetLtpRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMarketQuoteLastTradedPriceResponseV3` | `getMarketQuoteLastTradedPriceResponseV3Schema` | `src/models/get-market-quote-last-traded-price-response-v3.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMarketQuoteOhlcv3

- **Signature**: `getMarketQuoteOhlcv3(request: MarketQuoteV3.GetMarketQuoteOhlcv3Request, options?: RequestOptions): ApiPromise<GetMarketQuoteOhlcResponseV3, MarketQuoteV3.GetMarketQuoteOhlcv3Error>`
- **Wire**: `GET /v3/market-quote/ohlc`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMarketQuoteOhlcResponseV3`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketQuoteV3.GetMarketQuoteOhlcv3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketQuoteV3.GetMarketQuoteOhlcv3Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interval` | `query` | — | `string` | yes |
| `instrumentKey` | `query` | `instrument_key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMarketQuoteOhlcResponseV3` | `getMarketQuoteOhlcResponseV3Schema` | `src/models/get-market-quote-ohlc-response-v3.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMarketQuoteOptionGreek

- **Signature**: `getMarketQuoteOptionGreek(request?: MarketQuoteV3.GetMarketQuoteOptionGreekRequest, options?: RequestOptions): ApiPromise<GetMarketQuoteOptionGreekResponseV3, MarketQuoteV3.GetMarketQuoteOptionGreekError>`
- **Wire**: `GET /v3/market-quote/option-greek`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMarketQuoteOptionGreekResponseV3`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketQuoteV3.GetMarketQuoteOptionGreekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketQuoteV3.GetMarketQuoteOptionGreekRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMarketQuoteOptionGreekResponseV3` | `getMarketQuoteOptionGreekResponseV3Schema` | `src/models/get-market-quote-option-greek-response-v3.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

