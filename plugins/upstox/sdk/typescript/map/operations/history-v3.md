<!-- Generated file — do not edit; regenerated with the SDK. -->

# HistoryV3 — operations

Accessor: `client.historyV3` · Source: `src/resources/history-v3.ts` · 3 operations · Request and error types: namespace `HistoryV3`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getHistoricalCandleData

- **Signature**: `getHistoricalCandleData(request: HistoryV3.GetHistoricalCandleDataRequest, options?: RequestOptions): ApiPromise<GetHistoricalCandleResponse, HistoryV3.GetHistoricalCandleDataError>`
- **Wire**: `GET /v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `HistoryV3.GetHistoricalCandleDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HistoryV3.GetHistoricalCandleDataRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `path` | — | `string` | yes |
| `unit` | `path` | — | `string` | yes |
| `interval` | `path` | — | `number` | yes |
| `toDate` | `path` | `to_date` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetHistoricalCandleResponse` | `getHistoricalCandleResponseSchema` | `src/models/get-historical-candle-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getHistoricalCandleData1

- **Signature**: `getHistoricalCandleData1(request: HistoryV3.GetHistoricalCandleData1Request, options?: RequestOptions): ApiPromise<GetHistoricalCandleResponse, HistoryV3.GetHistoricalCandleData1Error>`
- **Wire**: `GET /v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date}/{from_date}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `HistoryV3.GetHistoricalCandleData1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HistoryV3.GetHistoricalCandleData1Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `path` | — | `string` | yes |
| `unit` | `path` | — | `string` | yes |
| `interval` | `path` | — | `number` | yes |
| `toDate` | `path` | `to_date` | `string` | yes |
| `fromDate` | `path` | `from_date` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetHistoricalCandleResponse` | `getHistoricalCandleResponseSchema` | `src/models/get-historical-candle-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getIntraDayCandleData

- **Signature**: `getIntraDayCandleData(request: HistoryV3.GetIntraDayCandleDataRequest, options?: RequestOptions): ApiPromise<GetIntraDayCandleResponse, HistoryV3.GetIntraDayCandleDataError>`
- **Wire**: `GET /v3/historical-candle/intraday/{instrumentKey}/{unit}/{interval}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetIntraDayCandleResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `HistoryV3.GetIntraDayCandleDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HistoryV3.GetIntraDayCandleDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `instrumentKey` | `path` | `string` | yes |
| `unit` | `path` | `string` | yes |
| `interval` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIntraDayCandleResponse` | `getIntraDayCandleResponseSchema` | `src/models/get-intra-day-candle-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

