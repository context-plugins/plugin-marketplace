<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.orders` · Source: `src/resources/orders.ts` · 2 operations · Request and error types: namespace `Orders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOrderHandling

- **Signature**: `getOrderHandling(request: Orders.GetOrderHandlingRequest, options?: RequestOptions): ApiPromise<OrderHandlingResponse, Orders.GetOrderHandlingError>`
- **Wire**: `GET /v2/post_checkout/orders/{order_id}/handling`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrderHandlingResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Orders.GetOrderHandlingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrderHandlingRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderHandlingResponse` | `orderHandlingResponseSchema` | `src/models/order-handling-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOrderItems

- **Signature**: `getOrderItems(request: Orders.GetOrderItemsRequest, options?: RequestOptions): ApiPromise<OrderItemsResponse, Orders.GetOrderItemsError>`
- **Wire**: `GET /v2/post_checkout/orders/{order_id}/items`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrderItemsResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Orders.GetOrderItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrderItemsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderItemsResponse` | `orderItemsResponseSchema` | `src/models/order-items-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

