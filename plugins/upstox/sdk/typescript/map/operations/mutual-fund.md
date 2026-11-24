<!-- Generated file — do not edit; regenerated with the SDK. -->

# MutualFund — operations

Accessor: `client.mutualFund` · Source: `src/resources/mutual-fund.ts` · 4 operations · Request and error types: namespace `MutualFund`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMutualFundHoldings

- **Signature**: `getMutualFundHoldings(options?: RequestOptions): ApiPromise<GetMutualFundHoldingsResponse, MutualFund.GetMutualFundHoldingsError>`
- **Wire**: `GET /v2/mf/holdings`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMutualFundHoldingsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MutualFund.GetMutualFundHoldingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMutualFundHoldingsResponse` | `getMutualFundHoldingsResponseSchema` | `src/models/get-mutual-fund-holdings-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMutualFundOrder

- **Signature**: `getMutualFundOrder(request: MutualFund.GetMutualFundOrderRequest, options?: RequestOptions): ApiPromise<GetMutualFundOrderDetailsResponse, MutualFund.GetMutualFundOrderError>`
- **Wire**: `GET /v2/mf/orders/{order_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMutualFundOrderDetailsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MutualFund.GetMutualFundOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MutualFund.GetMutualFundOrderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMutualFundOrderDetailsResponse` | `getMutualFundOrderDetailsResponseSchema` | `src/models/get-mutual-fund-order-details-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMutualFundOrders

- **Signature**: `getMutualFundOrders(request?: MutualFund.GetMutualFundOrdersRequest, options?: RequestOptions): ApiPromise<GetMutualFundOrdersResponse, MutualFund.GetMutualFundOrdersError>`
- **Wire**: `GET /v2/mf/orders`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMutualFundOrdersResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MutualFund.GetMutualFundOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MutualFund.GetMutualFundOrdersRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `status` | `query` | — | `string` | no | `"ALL"` |
| `transactionType` | `query` | `transaction_type` | `string` | no | `"ALL"` |
| `pageNumber` | `query` | `page_number` | `number` | no | `1` |
| `records` | `query` | — | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMutualFundOrdersResponse` | `getMutualFundOrdersResponseSchema` | `src/models/get-mutual-fund-orders-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMutualFundSips

- **Signature**: `getMutualFundSips(request?: MutualFund.GetMutualFundSipsRequest, options?: RequestOptions): ApiPromise<GetMutualFundSipsResponse, MutualFund.GetMutualFundSipsError>`
- **Wire**: `GET /v2/mf/sips`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMutualFundSipsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `MutualFund.GetMutualFundSipsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MutualFund.GetMutualFundSipsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page_number` | `number` | no | `1` |
| `records` | `query` | — | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMutualFundSipsResponse` | `getMutualFundSipsResponseSchema` | `src/models/get-mutual-fund-sips-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

