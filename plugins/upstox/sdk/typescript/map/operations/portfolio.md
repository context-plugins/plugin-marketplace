<!-- Generated file — do not edit; regenerated with the SDK. -->

# Portfolio — operations

Accessor: `client.portfolio` · Source: `src/resources/portfolio.ts` · 4 operations · Request and error types: namespace `Portfolio`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### convertPositions

- **Signature**: `convertPositions(request: Portfolio.ConvertPositionsRequest, options?: RequestOptions): ApiPromise<ConvertPositionResponse, Portfolio.ConvertPositionsError>`
- **Wire**: `PUT /v2/portfolio/convert-position`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConvertPositionResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Portfolio.ConvertPositionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolio.ConvertPositionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ConvertPositionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConvertPositionRequest` | `convertPositionRequestSchema` | `src/models/convert-position-request.ts` |
| `ConvertPositionResponse` | `convertPositionResponseSchema` | `src/models/convert-position-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getHoldings

- **Signature**: `getHoldings(options?: RequestOptions): ApiPromise<GetHoldingsResponse, Portfolio.GetHoldingsError>`
- **Wire**: `GET /v2/portfolio/long-term-holdings`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetHoldingsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Portfolio.GetHoldingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetHoldingsResponse` | `getHoldingsResponseSchema` | `src/models/get-holdings-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMtfPositions

- **Signature**: `getMtfPositions(options?: RequestOptions): ApiPromise<GetPositionResponse, Portfolio.GetMtfPositionsError>`
- **Wire**: `GET /v3/portfolio/mtf-positions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPositionResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Portfolio.GetMtfPositionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPositionResponse` | `getPositionResponseSchema` | `src/models/get-position-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getPositions

- **Signature**: `getPositions(options?: RequestOptions): ApiPromise<GetPositionResponse, Portfolio.GetPositionsError>`
- **Wire**: `GET /v2/portfolio/short-term-positions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPositionResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Portfolio.GetPositionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPositionResponse` | `getPositionResponseSchema` | `src/models/get-position-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

