<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ipo — operations

Accessor: `client.ipo` · Source: `src/resources/ipo.ts` · 6 operations · Request and error types: namespace `Ipo`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### applyForIpo

- **Signature**: `applyForIpo(request: Ipo.ApplyForIpoRequest, options?: RequestOptions): ApiPromise<IpoApplyResponse, Ipo.ApplyForIpoError>`
- **Wire**: `POST /v2/ipos/orders`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IpoApplyResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Ipo.ApplyForIpoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [404] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse9"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ipo.ApplyForIpoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IpoApplyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IpoApplyRequest` | `ipoApplyRequestSchema` | `src/models/ipo-apply-request.ts` |
| `IpoApplyResponse` | `ipoApplyResponseSchema` | `src/models/ipo-apply-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### cancelIpoOrder

- **Signature**: `cancelIpoOrder(request: Ipo.CancelIpoOrderRequest, options?: RequestOptions): ApiPromise<IpoCancelResponse, Ipo.CancelIpoOrderError>`
- **Wire**: `DELETE /v2/ipos/orders/{order_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IpoCancelResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Ipo.CancelIpoOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [404] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse9"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ipo.CancelIpoOrderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IpoCancelResponse` | `ipoCancelResponseSchema` | `src/models/ipo-cancel-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getIpoDetails

- **Signature**: `getIpoDetails(request: Ipo.GetIpoDetailsRequest, options?: RequestOptions): ApiPromise<IpoDetailsResponse, Ipo.GetIpoDetailsError>`
- **Wire**: `GET /v2/ipos/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IpoDetailsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Ipo.GetIpoDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ipo.GetIpoDetailsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IpoDetailsResponse` | `ipoDetailsResponseSchema` | `src/models/ipo-details-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getIpoListing

- **Signature**: `getIpoListing(request?: Ipo.GetIpoListingRequest, options?: RequestOptions): ApiPromise<IpoListingResponse, Ipo.GetIpoListingError>`
- **Wire**: `GET /v2/ipos`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IpoListingResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Ipo.GetIpoListingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ipo.GetIpoListingRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `status` | `query` | — | `Status9` | no |
| `issueType` | `query` | `issue_type` | `IssueType3` | no |
| `pageNumber` | `query` | `page_number` | `string` | no |
| `records` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status9` | `status9Schema` | `src/models/status9.ts` |
| `IssueType3` | `issueType3Schema` | `src/models/issue-type3.ts` |
| `IpoListingResponse` | `ipoListingResponseSchema` | `src/models/ipo-listing-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getIpoOrderById

- **Signature**: `getIpoOrderById(request: Ipo.GetIpoOrderByIdRequest, options?: RequestOptions): ApiPromise<IpoOrderDetailResponse, Ipo.GetIpoOrderByIdError>`
- **Wire**: `GET /v2/ipos/orders/{order_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IpoOrderDetailResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Ipo.GetIpoOrderByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [404] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse9"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ipo.GetIpoOrderByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IpoOrderDetailResponse` | `ipoOrderDetailResponseSchema` | `src/models/ipo-order-detail-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getIpoOrders

- **Signature**: `getIpoOrders(request?: Ipo.GetIpoOrdersRequest, options?: RequestOptions): ApiPromise<IpoOrderResponse, Ipo.GetIpoOrdersError>`
- **Wire**: `GET /v2/ipos/orders`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IpoOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Ipo.GetIpoOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ipo.GetIpoOrdersRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page_number` | `string` | no |
| `records` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IpoOrderResponse` | `ipoOrderResponseSchema` | `src/models/ipo-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

