<!-- Generated file — do not edit; regenerated with the SDK. -->

# Charge — operations

Accessor: `client.charge` · Source: `src/resources/charge.ts` · 2 operations · Request and error types: namespace `Charge`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBrokerage

- **Signature**: `getBrokerage(request: Charge.GetBrokerageRequest, options?: RequestOptions): ApiPromise<GetBrokerageResponse, Charge.GetBrokerageError>`
- **Wire**: `GET /v2/charges/brokerage`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBrokerageResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Charge.GetBrokerageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Charge.GetBrokerageRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentToken` | `query` | `instrument_token` | `string` | yes |
| `quantity` | `query` | — | `number` | yes |
| `product` | `query` | — | `string` | yes |
| `transactionType` | `query` | `transaction_type` | `string` | yes |
| `price` | `query` | — | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBrokerageResponse` | `getBrokerageResponseSchema` | `src/models/get-brokerage-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### postMargin

- **Signature**: `postMargin(request: Charge.PostMarginRequest, options?: RequestOptions): ApiPromise<PostMarginResponse, Charge.PostMarginError>`
- **Wire**: `POST /v2/charges/margin`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostMarginResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Charge.PostMarginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Charge.PostMarginRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MarginRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MarginRequest` | `marginRequestSchema` | `src/models/margin-request.ts` |
| `PostMarginResponse` | `postMarginResponseSchema` | `src/models/post-margin-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

