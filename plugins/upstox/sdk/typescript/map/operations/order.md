<!-- Generated file — do not edit; regenerated with the SDK. -->

# Order — operations

Accessor: `client.order` · Source: `src/resources/order.ts` · 18 operations · Request and error types: namespace `Order`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelGttOrder

- **Signature**: `cancelGttOrder(request: Order.CancelGttOrderRequest, options?: RequestOptions): ApiPromise<GttTriggerOrderResponse, Order.CancelGttOrderError>`
- **Wire**: `DELETE /v3/order/gtt/cancel`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GttTriggerOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.CancelGttOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.CancelGttOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `origin` | `header` | `Origin` | `string` | no |
| `body` | `body` | — | `GttCancelOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GttCancelOrderRequest` | `gttCancelOrderRequestSchema` | `src/models/gtt-cancel-order-request.ts` |
| `GttTriggerOrderResponse` | `gttTriggerOrderResponseSchema` | `src/models/gtt-trigger-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### cancelMultiOrder

- **Signature**: `cancelMultiOrder(request?: Order.CancelMultiOrderRequest, options?: RequestOptions): ApiPromise<CancelOrExitMultiOrderResponse, Order.CancelMultiOrderError>`
- **Wire**: `DELETE /v2/order/multi/cancel`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelOrExitMultiOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.CancelMultiOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.CancelMultiOrderRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tag` | `query` | `string` | no |
| `segment` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelOrExitMultiOrderResponse` | `cancelOrExitMultiOrderResponseSchema` | `src/models/cancel-or-exit-multi-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### cancelOrder

- **Signature**: `cancelOrder(request: Order.CancelOrderRequest, options?: RequestOptions): ApiPromise<CancelOrderV3Response, Order.CancelOrderError>`
- **Wire**: `DELETE /v3/order/cancel`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelOrderV3Response`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.CancelOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.CancelOrderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `query` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelOrderV3Response` | `cancelOrderV3ResponseSchema` | `src/models/cancel-order-v3-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### cancelOrder1

- **Signature**: `cancelOrder1(request: Order.CancelOrder1Request, options?: RequestOptions): ApiPromise<CancelOrderResponse, Order.CancelOrder1Error>`
- **Wire**: `DELETE /v2/order/cancel`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.CancelOrder1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.CancelOrder1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `query` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelOrderResponse` | `cancelOrderResponseSchema` | `src/models/cancel-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### exitPositions

- **Signature**: `exitPositions(request?: Order.ExitPositionsRequest, options?: RequestOptions): ApiPromise<CancelOrExitMultiOrderResponse, Order.ExitPositionsError>`
- **Wire**: `POST /v2/order/positions/exit`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelOrExitMultiOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.ExitPositionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.ExitPositionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tag` | `query` | `string` | no |
| `segment` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelOrExitMultiOrderResponse` | `cancelOrExitMultiOrderResponseSchema` | `src/models/cancel-or-exit-multi-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getGttOrderDetails

- **Signature**: `getGttOrderDetails(request?: Order.GetGttOrderDetailsRequest, options?: RequestOptions): ApiPromise<GetGttOrderResponse, Order.GetGttOrderDetailsError>`
- **Wire**: `GET /v3/order/gtt`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetGttOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.GetGttOrderDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.GetGttOrderDetailsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `gttOrderId` | `query` | `gtt_order_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetGttOrderResponse` | `getGttOrderResponseSchema` | `src/models/get-gtt-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getOrderBook

- **Signature**: `getOrderBook(options?: RequestOptions): ApiPromise<GetOrderBookResponse, Order.GetOrderBookError>`
- **Wire**: `GET /v2/order/retrieve-all`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOrderBookResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.GetOrderBookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOrderBookResponse` | `getOrderBookResponseSchema` | `src/models/get-order-book-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getOrderDetails

- **Signature**: `getOrderDetails(request?: Order.GetOrderDetailsRequest, options?: RequestOptions): ApiPromise<GetOrderResponse, Order.GetOrderDetailsError>`
- **Wire**: `GET /v2/order/history`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.GetOrderDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.GetOrderDetailsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `query` | `order_id` | `string` | no |
| `tag` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOrderResponse` | `getOrderResponseSchema` | `src/models/get-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getOrderStatus

- **Signature**: `getOrderStatus(request?: Order.GetOrderStatusRequest, options?: RequestOptions): ApiPromise<GetOrderDetailsResponse, Order.GetOrderStatusError>`
- **Wire**: `GET /v2/order/details`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOrderDetailsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.GetOrderStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.GetOrderStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `query` | `order_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOrderDetailsResponse` | `getOrderDetailsResponseSchema` | `src/models/get-order-details-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getTradeHistory

- **Signature**: `getTradeHistory(options?: RequestOptions): ApiPromise<GetTradeResponse, Order.GetTradeHistoryError>`
- **Wire**: `GET /v2/order/trades/get-trades-for-day`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTradeResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.GetTradeHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTradeResponse` | `getTradeResponseSchema` | `src/models/get-trade-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getTradesByOrder

- **Signature**: `getTradesByOrder(request: Order.GetTradesByOrderRequest, options?: RequestOptions): ApiPromise<GetTradeResponse, Order.GetTradesByOrderError>`
- **Wire**: `GET /v2/order/trades`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTradeResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.GetTradesByOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.GetTradesByOrderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `query` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTradeResponse` | `getTradeResponseSchema` | `src/models/get-trade-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### modifyGttOrder

- **Signature**: `modifyGttOrder(request: Order.ModifyGttOrderRequest, options?: RequestOptions): ApiPromise<GttTriggerOrderResponse, Order.ModifyGttOrderError>`
- **Wire**: `PUT /v3/order/gtt/modify`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GttTriggerOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.ModifyGttOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.ModifyGttOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `origin` | `header` | `Origin` | `string` | no |
| `body` | `body` | — | `GttModifyOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GttModifyOrderRequest` | `gttModifyOrderRequestSchema` | `src/models/gtt-modify-order-request.ts` |
| `GttTriggerOrderResponse` | `gttTriggerOrderResponseSchema` | `src/models/gtt-trigger-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### modifyOrder

- **Signature**: `modifyOrder(request: Order.ModifyOrderRequestParams, options?: RequestOptions): ApiPromise<ModifyOrderV3Response, Order.ModifyOrderError>`
- **Wire**: `PUT /v3/order/modify`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModifyOrderV3Response`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.ModifyOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.ModifyOrderRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ModifyOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModifyOrderRequest` | `modifyOrderRequestSchema` | `src/models/modify-order-request.ts` |
| `ModifyOrderV3Response` | `modifyOrderV3ResponseSchema` | `src/models/modify-order-v3-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### modifyOrder1

- **Signature**: `modifyOrder1(request: Order.ModifyOrder1Request, options?: RequestOptions): ApiPromise<ModifyOrderResponse, Order.ModifyOrder1Error>`
- **Wire**: `PUT /v2/order/modify`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModifyOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.ModifyOrder1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.ModifyOrder1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ModifyOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModifyOrderRequest` | `modifyOrderRequestSchema` | `src/models/modify-order-request.ts` |
| `ModifyOrderResponse` | `modifyOrderResponseSchema` | `src/models/modify-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### placeGttOrder

- **Signature**: `placeGttOrder(request: Order.PlaceGttOrderRequest, options?: RequestOptions): ApiPromise<GttTriggerOrderResponse, Order.PlaceGttOrderError>`
- **Wire**: `POST /v3/order/gtt/place`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GttTriggerOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.PlaceGttOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.PlaceGttOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `origin` | `header` | `Origin` | `string` | no |
| `body` | `body` | — | `GttPlaceOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GttPlaceOrderRequest` | `gttPlaceOrderRequestSchema` | `src/models/gtt-place-order-request.ts` |
| `GttTriggerOrderResponse` | `gttTriggerOrderResponseSchema` | `src/models/gtt-trigger-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### placeMultiOrder

- **Signature**: `placeMultiOrder(request: Order.PlaceMultiOrderRequest, options?: RequestOptions): ApiPromise<MultiOrderResponse, Order.PlaceMultiOrderError>`
- **Wire**: `POST /v2/order/multi/place`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MultiOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.PlaceMultiOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.PlaceMultiOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `origin` | `header` | `Origin` | `string` | no |
| `body` | `body` | — | `MultiOrderRequest[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MultiOrderRequest` | `multiOrderRequestSchema` | `src/models/multi-order-request.ts` |
| `MultiOrderResponse` | `multiOrderResponseSchema` | `src/models/multi-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### placeOrder

- **Signature**: `placeOrder(request: Order.PlaceOrderRequestParams, options?: RequestOptions): ApiPromise<PlaceOrderV3Response, Order.PlaceOrderError>`
- **Wire**: `POST /v3/order/place`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaceOrderV3Response`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.PlaceOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.PlaceOrderRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlaceOrderV3Request` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaceOrderV3Request` | `placeOrderV3RequestSchema` | `src/models/place-order-v3-request.ts` |
| `PlaceOrderV3Response` | `placeOrderV3ResponseSchema` | `src/models/place-order-v3-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### placeOrder1

- **Signature**: `placeOrder1(request: Order.PlaceOrder1Request, options?: RequestOptions): ApiPromise<PlaceOrderResponse, Order.PlaceOrder1Error>`
- **Wire**: `POST /v2/order/place`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaceOrderResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Order.PlaceOrder1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Order.PlaceOrder1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlaceOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaceOrderRequest` | `placeOrderRequestSchema` | `src/models/place-order-request.ts` |
| `PlaceOrderResponse` | `placeOrderResponseSchema` | `src/models/place-order-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

