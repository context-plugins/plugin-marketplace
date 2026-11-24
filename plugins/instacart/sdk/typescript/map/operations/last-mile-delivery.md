<!-- Generated file — do not edit; regenerated with the SDK. -->

# LastMileDelivery — operations

Accessor: `client.lastMileDelivery` · Source: `src/resources/last-mile-delivery.ts` · 4 operations · Request and error types: namespace `LastMileDelivery`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLastMileOrder

- **Signature**: `createLastMileOrder(request: LastMileDelivery.CreateLastMileOrderRequest, options?: RequestOptions): ApiPromise<OrderResponse, LastMileDelivery.CreateLastMileOrderError>`
- **Wire**: `POST /v2/fulfillment/lastmile/users/{user_id}/orders`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrderResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `LastMileDelivery.CreateLastMileOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LastMileDelivery.CreateLastMileOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi` | `createOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiSchema` | `src/models/create-order-request-instacart-connect-fulfillment-last-mile-delivery-api.ts` |
| `OrderResponse` | `orderResponseSchema` | `src/models/order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### findLastMileStores

- **Signature**: `findLastMileStores(request: LastMileDelivery.FindLastMileStoresRequest, options?: RequestOptions): ApiPromise<StoresResponse, LastMileDelivery.FindLastMileStoresError>`
- **Wire**: `POST /v2/fulfillment/stores/last_mile`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoresResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `LastMileDelivery.FindLastMileStoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LastMileDelivery.FindLastMileStoresRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FindStoresRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FindStoresRequest` | `findStoresRequestSchema` | `src/models/find-stores-request.ts` |
| `StoresResponse` | `storesResponseSchema` | `src/models/stores-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### previewLastMileServiceOptions

- **Signature**: `previewLastMileServiceOptions(request: LastMileDelivery.PreviewLastMileServiceOptionsRequest, options?: RequestOptions): ApiPromise<ServiceOptionsResponse, LastMileDelivery.PreviewLastMileServiceOptionsError>`
- **Wire**: `POST /v2/fulfillment/lastmile/users/{user_id}/service_options`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceOptionsResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `LastMileDelivery.PreviewLastMileServiceOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LastMileDelivery.PreviewLastMileServiceOptionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `PreviewServiceOptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PreviewServiceOptionsRequest` | `previewServiceOptionsRequestSchema` | `src/models/preview-service-options-request.ts` |
| `ServiceOptionsResponse` | `serviceOptionsResponseSchema` | `src/models/service-options-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### stageLastMileOrder

- **Signature**: `stageLastMileOrder(request: LastMileDelivery.StageLastMileOrderRequest, options?: RequestOptions): ApiPromise<OrderResponse, LastMileDelivery.StageLastMileOrderError>`
- **Wire**: `POST /v2/fulfillment/lastmile/orders/{order_id}/staged`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrderResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `LastMileDelivery.StageLastMileOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LastMileDelivery.StageLastMileOrderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderResponse` | `orderResponseSchema` | `src/models/order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

