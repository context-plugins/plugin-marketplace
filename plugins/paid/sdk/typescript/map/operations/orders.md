<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.orders` · Source: `src/resources/orders.ts` · 19 operations · Request and error types: namespace `Orders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activate

- **Signature**: `activate(request: Orders.ActivateRequest, options?: RequestOptions): ApiPromise<Order, ApiError>`
- **Wire**: `POST /orders/{orderId}/activate`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.ActivateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order` | `orderSchema` | `src/models/order.ts` |

### activateAndPay

- **Signature**: `activateAndPay(request: Orders.ActivateAndPayRequest, options?: RequestOptions): ApiPromise<Order, Orders.ActivateAndPayError>`
- **Wire**: `POST /orders/{orderId}/activate-and-pay`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.ActivateAndPayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.ActivateAndPayRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `OrdersActivateAndPayRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrdersActivateAndPayRequest` | `ordersActivateAndPayRequestSchema` | `src/models/orders-activate-and-pay-request.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### activateOrderById

- **Signature**: `activateOrderById(request: Orders.ActivateOrderByIdRequest, options?: RequestOptions): ApiPromise<Order1, Orders.ActivateOrderByIdError>`
- **Wire**: `POST /orders/{id}/activate`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.ActivateOrderByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.ActivateOrderByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order1` | `order1Schema` | `src/models/order1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### batchOrderSeatAssignments

- **Signature**: `batchOrderSeatAssignments(request: Orders.BatchOrderSeatAssignmentsRequest, options?: RequestOptions): ApiPromise<BatchSeatAssignmentsResponse, Orders.BatchOrderSeatAssignmentsError>`
- **Wire**: `POST /orders/{id}/seat-assignments`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchSeatAssignmentsResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.BatchOrderSeatAssignmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [409] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.BatchOrderSeatAssignmentsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `BatchSeatAssignmentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchSeatAssignmentsRequest` | `batchSeatAssignmentsRequestSchema` | `src/models/batch-seat-assignments-request.ts` |
| `BatchSeatAssignmentsResponse` | `batchSeatAssignmentsResponseSchema` | `src/models/batch-seat-assignments-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### cancelRenewal

- **Signature**: `cancelRenewal(request: Orders.CancelRenewalRequestParams, options?: RequestOptions): ApiPromise<CancelRenewalResponse, Orders.CancelRenewalError>`
- **Wire**: `POST /orders/{orderId}/cancel`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelRenewalResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.CancelRenewalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.CancelRenewalRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CancelRenewalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelRenewalRequest` | `cancelRenewalRequestSchema` | `src/models/cancel-renewal-request.ts` |
| `CancelRenewalResponse` | `cancelRenewalResponseSchema` | `src/models/cancel-renewal-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createOrder

- **Signature**: `createOrder(request: Orders.CreateOrderRequestParams, options?: RequestOptions): ApiPromise<Order1, Orders.CreateOrderError>`
- **Wire**: `POST /orders/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.CreateOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.CreateOrderRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreateOrderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrderRequest` | `createOrderRequestSchema` | `src/models/create-order-request.ts` |
| `Order1` | `order1Schema` | `src/models/order1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### create4

- **Signature**: `create4(request: Orders.Create4Request, options?: RequestOptions): ApiPromise<Order, ApiError>`
- **Wire**: `POST /orders`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.Create4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `OrderCreate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderCreate` | `orderCreateSchema` | `src/models/order-create.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |

### deleteOrderById

- **Signature**: `deleteOrderById(request: Orders.DeleteOrderByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Orders.DeleteOrderByIdError>`
- **Wire**: `DELETE /orders/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.DeleteOrderByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.DeleteOrderByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### delete4

- **Signature**: `delete4(request: Orders.Delete4Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /orders/{orderId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.Delete4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

### getInvoices

- **Signature**: `getInvoices(request: Orders.GetInvoicesRequest, options?: RequestOptions): ApiPromise<InvoicePaidOrdersApi[], Orders.GetInvoicesError>`
- **Wire**: `GET /orders/{orderId}/invoices`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoicePaidOrdersApi[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.GetInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetInvoicesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoicePaidOrdersApi` | `invoicePaidOrdersApiSchema` | `src/models/invoice-paid-orders-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOrderById

- **Signature**: `getOrderById(request: Orders.GetOrderByIdRequest, options?: RequestOptions): ApiPromise<Order1, Orders.GetOrderByIdError>`
- **Wire**: `GET /orders/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Order1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.GetOrderByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrderByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order1` | `order1Schema` | `src/models/order1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getOrderLines

- **Signature**: `getOrderLines(request: Orders.GetOrderLinesRequest, options?: RequestOptions): ApiPromise<OrderLinesResponse, Orders.GetOrderLinesError>`
- **Wire**: `GET /orders/{id}/lines`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrderLinesResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.GetOrderLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrderLinesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderLinesResponse` | `orderLinesResponseSchema` | `src/models/order-lines-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### get4

- **Signature**: `get4(request: Orders.Get4Request, options?: RequestOptions): ApiPromise<Order, ApiError>`
- **Wire**: `GET /orders/{orderId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Order`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.Get4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order` | `orderSchema` | `src/models/order.ts` |

### listOrderSeats

- **Signature**: `listOrderSeats(request: Orders.ListOrderSeatsRequest, options?: RequestOptions): ApiPromise<OrderSeatListResponse, Orders.ListOrderSeatsError>`
- **Wire**: `GET /orders/{id}/seats`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrderSeatListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.ListOrderSeatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.ListOrderSeatsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `productExternalId` | `query` | — | `string` | no | — |
| `status` | `query` | — | `OrdersIdSeatsGetParametersStatus` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrdersIdSeatsGetParametersStatus` | `ordersIdSeatsGetParametersStatusSchema` | `src/models/orders-id-seats-get-parameters-status.ts` |
| `OrderSeatListResponse` | `orderSeatListResponseSchema` | `src/models/order-seat-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listOrders

- **Signature**: `listOrders(request: Orders.ListOrdersRequest, options?: RequestOptions): ApiPromise<OrderListResponse, Orders.ListOrdersError>`
- **Wire**: `GET /orders/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrderListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.ListOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.ListOrdersRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `customerId` | `query` | — | `string` | no | — |
| `externalCustomerId` | `query` | — | `string` | no | — |
| `externalId` | `query` | — | `string` | no | — |
| `creationState` | `query` | — | `OrdersGetParametersCreationState` | no | — |
| `status` | `query` | — | `OrdersGetParametersStatus` | no | — |
| `startDateFrom` | `query` | — | `string` | no | — |
| `startDateTo` | `query` | — | `string` | no | — |
| `endDateFrom` | `query` | — | `string` | no | — |
| `endDateTo` | `query` | — | `string` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrdersGetParametersCreationState` | `ordersGetParametersCreationStateSchema` | `src/models/orders-get-parameters-creation-state.ts` |
| `OrdersGetParametersStatus` | `ordersGetParametersStatusSchema` | `src/models/orders-get-parameters-status.ts` |
| `OrderListResponse` | `orderListResponseSchema` | `src/models/order-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### list4

- **Signature**: `list4(request: Orders.List4Request, options?: RequestOptions): ApiPromise<Order[], ApiError>`
- **Wire**: `GET /orders`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Order[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.List4Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order` | `orderSchema` | `src/models/order.ts` |

### schedulePlanChange

- **Signature**: `schedulePlanChange(request: Orders.SchedulePlanChangeRequest, options?: RequestOptions): ApiPromise<ProrationUpgradeResponse, Orders.SchedulePlanChangeError>`
- **Wire**: `POST /orders/{orderId}/schedule-plan-change`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProrationUpgradeResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.SchedulePlanChangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.SchedulePlanChangeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `ProrationUpgradeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProrationUpgradeRequest` | `prorationUpgradeRequestSchema` | `src/models/proration-upgrade-request.ts` |
| `ProrationUpgradeResponse` | `prorationUpgradeResponseSchema` | `src/models/proration-upgrade-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateOrderById

- **Signature**: `updateOrderById(request: Orders.UpdateOrderByIdRequest, options?: RequestOptions): ApiPromise<Order1, Orders.UpdateOrderByIdError>`
- **Wire**: `PUT /orders/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.UpdateOrderByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.UpdateOrderByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateOrderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateOrderRequest` | `updateOrderRequestSchema` | `src/models/update-order-request.ts` |
| `Order1` | `order1Schema` | `src/models/order1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateOrderSeatAssignment

- **Signature**: `updateOrderSeatAssignment(request: Orders.UpdateOrderSeatAssignmentRequest, options?: RequestOptions): ApiPromise<OrderSeat, Orders.UpdateOrderSeatAssignmentError>`
- **Wire**: `PUT /orders/{id}/seats/{seatId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrderSeat`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Orders.UpdateOrderSeatAssignmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [409] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.UpdateOrderSeatAssignmentRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `seatId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateSeatAssignmentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSeatAssignmentRequest` | `updateSeatAssignmentRequestSchema` | `src/models/update-seat-assignment-request.ts` |
| `OrderSeat` | `orderSeatSchema` | `src/models/order-seat.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

