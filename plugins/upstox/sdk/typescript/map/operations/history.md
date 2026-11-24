<!-- Generated file — do not edit; regenerated with the SDK. -->

# History — operations

Accessor: `client.history` · Source: `src/resources/history.ts` · 3 operations · Request and error types: namespace `History`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getHistoricalCandleData2

- **Signature**: `getHistoricalCandleData2(request: History.GetHistoricalCandleData2Request, options?: RequestOptions): ApiPromise<GetHistoricalCandleResponse, History.GetHistoricalCandleData2Error>`
- **Wire**: `GET /v2/historical-candle/{instrumentKey}/{interval}/{to_date}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `History.GetHistoricalCandleData2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `History.GetHistoricalCandleData2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `path` | — | `string` | yes |
| `interval` | `path` | — | `string` | yes |
| `toDate` | `path` | `to_date` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetHistoricalCandleResponse` | `getHistoricalCandleResponseSchema` | `src/models/get-historical-candle-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getHistoricalCandleData3

- **Signature**: `getHistoricalCandleData3(request: History.GetHistoricalCandleData3Request, options?: RequestOptions): ApiPromise<GetHistoricalCandleResponse, History.GetHistoricalCandleData3Error>`
- **Wire**: `GET /v2/historical-candle/{instrumentKey}/{interval}/{to_date}/{from_date}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `History.GetHistoricalCandleData3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `History.GetHistoricalCandleData3Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `path` | — | `string` | yes |
| `interval` | `path` | — | `string` | yes |
| `toDate` | `path` | `to_date` | `string` | yes |
| `fromDate` | `path` | `from_date` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetHistoricalCandleResponse` | `getHistoricalCandleResponseSchema` | `src/models/get-historical-candle-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getIntraDayCandleData1

- **Signature**: `getIntraDayCandleData1(request: History.GetIntraDayCandleData1Request, options?: RequestOptions): ApiPromise<GetIntraDayCandleResponse, History.GetIntraDayCandleData1Error>`
- **Wire**: `GET /v2/historical-candle/intraday/{instrumentKey}/{interval}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetIntraDayCandleResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `History.GetIntraDayCandleData1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `History.GetIntraDayCandleData1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `instrumentKey` | `path` | `string` | yes |
| `interval` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIntraDayCandleResponse` | `getIntraDayCandleResponseSchema` | `src/models/get-intra-day-candle-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

