<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketHolidaysAndTimings — operations

Accessor: `client.marketHolidaysAndTimings` · Source: `src/resources/market-holidays-and-timings.ts` · 13 operations · Request and error types: namespace `MarketHolidaysAndTimings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getChangeOiData

- **Signature**: `getChangeOiData(request: MarketHolidaysAndTimings.GetChangeOiDataRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetChangeOiDataError>`
- **Wire**: `GET /v2/market/change-oi`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetChangeOiDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetChangeOiDataRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | yes |
| `expiry` | `query` | — | `string` | yes |
| `date` | `query` | — | `string` | yes |
| `interval` | `query` | — | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getDiiData

- **Signature**: `getDiiData(request: MarketHolidaysAndTimings.GetDiiDataRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetDiiDataError>`
- **Wire**: `GET /v2/market/dii`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetDiiDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetDiiDataRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dataType` | `query` | `data_type` | `string` | yes |
| `interval` | `query` | — | `string` | yes |
| `from` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getExchangeTimings

- **Signature**: `getExchangeTimings(request: MarketHolidaysAndTimings.GetExchangeTimingsRequest, options?: RequestOptions): ApiPromise<GetExchangeTimingResponse, MarketHolidaysAndTimings.GetExchangeTimingsError>`
- **Wire**: `GET /v2/market/timings/{date}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetExchangeTimingResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetExchangeTimingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetExchangeTimingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetExchangeTimingResponse` | `getExchangeTimingResponseSchema` | `src/models/get-exchange-timing-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getFiiData

- **Signature**: `getFiiData(request: MarketHolidaysAndTimings.GetFiiDataRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetFiiDataError>`
- **Wire**: `GET /v2/market/fii`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetFiiDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetFiiDataRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dataType` | `query` | `data_type` | `string` | yes |
| `interval` | `query` | — | `string` | yes |
| `from` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getHoliday

- **Signature**: `getHoliday(request: MarketHolidaysAndTimings.GetHolidayRequest, options?: RequestOptions): ApiPromise<GetHolidayResponse, MarketHolidaysAndTimings.GetHolidayError>`
- **Wire**: `GET /v2/market/holidays/{date}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetHolidayResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetHolidayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetHolidayRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetHolidayResponse` | `getHolidayResponseSchema` | `src/models/get-holiday-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getHolidays

- **Signature**: `getHolidays(options?: RequestOptions): ApiPromise<GetHolidayResponse, MarketHolidaysAndTimings.GetHolidaysError>`
- **Wire**: `GET /v2/market/holidays`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetHolidayResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetHolidaysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetHolidayResponse` | `getHolidayResponseSchema` | `src/models/get-holiday-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMarketStatus

- **Signature**: `getMarketStatus(request: MarketHolidaysAndTimings.GetMarketStatusRequest, options?: RequestOptions): ApiPromise<GetMarketStatusResponse, MarketHolidaysAndTimings.GetMarketStatusError>`
- **Wire**: `GET /v2/market/status/{exchange}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMarketStatusResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetMarketStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetMarketStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exchange` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMarketStatusResponse` | `getMarketStatusResponseSchema` | `src/models/get-market-status-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMaxPainData

- **Signature**: `getMaxPainData(request: MarketHolidaysAndTimings.GetMaxPainDataRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetMaxPainDataError>`
- **Wire**: `GET /v2/market/max-pain`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetMaxPainDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetMaxPainDataRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | yes |
| `expiry` | `query` | — | `string` | yes |
| `date` | `query` | — | `string` | yes |
| `bucketInterval` | `query` | `bucket_interval` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getOiData

- **Signature**: `getOiData(request: MarketHolidaysAndTimings.GetOiDataRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetOiDataError>`
- **Wire**: `GET /v2/market/oi`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetOiDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetOiDataRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | yes |
| `expiry` | `query` | — | `string` | yes |
| `date` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getPcrData

- **Signature**: `getPcrData(request: MarketHolidaysAndTimings.GetPcrDataRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetPcrDataError>`
- **Wire**: `GET /v2/market/pcr`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetPcrDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetPcrDataRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | yes |
| `expiry` | `query` | — | `string` | yes |
| `date` | `query` | — | `string` | yes |
| `bucketInterval` | `query` | `bucket_interval` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getSmartlistFutures

- **Signature**: `getSmartlistFutures(request?: MarketHolidaysAndTimings.GetSmartlistFuturesRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistFuturesError>`
- **Wire**: `GET /v2/market/smartlist/futures`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetSmartlistFuturesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetSmartlistFuturesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `assetType` | `query` | `asset_type` | `string` | no |
| `category` | `query` | — | `string` | no |
| `pageNumber` | `query` | `page_number` | `number` | no |
| `pageSize` | `query` | `page_size` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getSmartlistMtf

- **Signature**: `getSmartlistMtf(request?: MarketHolidaysAndTimings.GetSmartlistMtfRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistMtfError>`
- **Wire**: `GET /v2/market/smartlist/mtf`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetSmartlistMtfError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetSmartlistMtfRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page_number` | `number` | no |
| `pageSize` | `query` | `page_size` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getSmartlistOptions

- **Signature**: `getSmartlistOptions(request?: MarketHolidaysAndTimings.GetSmartlistOptionsRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistOptionsError>`
- **Wire**: `GET /v2/market/smartlist/options`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MarketHolidaysAndTimings.GetSmartlistOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHolidaysAndTimings.GetSmartlistOptionsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `assetType` | `query` | `asset_type` | `string` | no |
| `category` | `query` | — | `string` | no |
| `pageNumber` | `query` | `page_number` | `number` | no |
| `pageSize` | `query` | `page_size` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/analytics-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

