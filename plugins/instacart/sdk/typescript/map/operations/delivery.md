<!-- Generated file — do not edit; regenerated with the SDK. -->

# Delivery — operations

Accessor: `client.delivery` · Source: `src/resources/delivery.ts` · 6 operations · Request and error types: namespace `Delivery`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelOrder

- **Signature**: `cancelOrder(request: Delivery.CancelOrderRequest, options?: RequestOptions): ApiPromise<OrderResponse, Delivery.CancelOrderError>`
- **Wire**: `POST /v2/fulfillment/users/{user_id}/orders/{order_id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrderResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Delivery.CancelOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Delivery.CancelOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderResponse` | `orderResponseSchema` | `src/models/order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createDeliveryOrder

- **Signature**: `createDeliveryOrder(request: Delivery.CreateDeliveryOrderRequest, options?: RequestOptions): ApiPromise<OrderResponse, Delivery.CreateDeliveryOrderError>`
- **Wire**: `POST /v2/fulfillment/users/{user_id}/orders/delivery`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrderResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Delivery.CreateDeliveryOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Delivery.CreateDeliveryOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `CreateOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrderRequest` | `createOrderRequestSchema` | `src/models/create-order-request.ts` |
| `OrderResponse` | `orderResponseSchema` | `src/models/order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### findDeliveryStores

- **Signature**: `findDeliveryStores(request: Delivery.FindDeliveryStoresRequest, options?: RequestOptions): ApiPromise<StoresResponse, Delivery.FindDeliveryStoresError>`
- **Wire**: `POST /v2/fulfillment/stores/delivery`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoresResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Delivery.FindDeliveryStoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Delivery.FindDeliveryStoresRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FindStoresRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FindStoresRequest` | `findStoresRequestSchema` | `src/models/find-stores-request.ts` |
| `StoresResponse` | `storesResponseSchema` | `src/models/stores-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOrder

- **Signature**: `getOrder(request: Delivery.GetOrderRequest, options?: RequestOptions): ApiPromise<OrderResponse, Delivery.GetOrderError>`
- **Wire**: `GET /v2/fulfillment/users/{user_id}/orders/{order_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrderResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Delivery.GetOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Delivery.GetOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderResponse` | `orderResponseSchema` | `src/models/order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### previewDeliveryTimeSlots

- **Signature**: `previewDeliveryTimeSlots(request: Delivery.PreviewDeliveryTimeSlotsRequest, options?: RequestOptions): ApiPromise<ServiceOptionsResponse, Delivery.PreviewDeliveryTimeSlotsError>`
- **Wire**: `POST /v2/fulfillment/users/{user_id}/service_options/delivery`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceOptionsResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Delivery.PreviewDeliveryTimeSlotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Delivery.PreviewDeliveryTimeSlotsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `PreviewServiceOptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PreviewServiceOptionsRequest` | `previewServiceOptionsRequestSchema` | `src/models/preview-service-options-request.ts` |
| `ServiceOptionsResponse` | `serviceOptionsResponseSchema` | `src/models/service-options-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### reserveDeliveryTimeSlot

- **Signature**: `reserveDeliveryTimeSlot(request: Delivery.ReserveDeliveryTimeSlotRequest, options?: RequestOptions): ApiPromise<ServiceOptionHoldResponse, Delivery.ReserveDeliveryTimeSlotError>`
- **Wire**: `POST /v2/fulfillment/users/{user_id}/service_options/delivery/hold`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceOptionHoldResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Delivery.ReserveDeliveryTimeSlotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Delivery.ReserveDeliveryTimeSlotRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `ReserveTimeSlotRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReserveTimeSlotRequest` | `reserveTimeSlotRequestSchema` | `src/models/reserve-time-slot-request.ts` |
| `ServiceOptionHoldResponse` | `serviceOptionHoldResponseSchema` | `src/models/service-option-hold-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

