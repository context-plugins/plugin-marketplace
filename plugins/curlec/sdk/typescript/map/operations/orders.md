<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.orders` · Source: `src/resources/orders.ts` · 5 operations · Request and error types: namespace `Orders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createOrder

- **Signature**: `createOrder(request: Orders.CreateOrderRequest, options?: RequestOptions): ApiPromise<Order, Orders.CreateOrderError>`
- **Wire**: `POST /orders`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Orders.CreateOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.CreateOrderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrdersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrdersRequest` | `ordersRequestSchema` | `src/models/orders-request.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchAllOrders

- **Signature**: `fetchAllOrders(request?: Orders.FetchAllOrdersRequest, options?: RequestOptions): ApiPromise<OrdersResponse, Orders.FetchAllOrdersError>`
- **Wire**: `GET /orders`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrdersResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Orders.FetchAllOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.FetchAllOrdersRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |
| `authorized` | `query` | — | `Authorized` | no | — |
| `receipt` | `query` | — | `string` | no | — |
| `expand` | `query` | `expand[]` | `ExpandRazorpayOrdersApi[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Authorized` | `authorizedSchema` | `src/models/authorized.ts` |
| `ExpandRazorpayOrdersApi` | `expandRazorpayOrdersApiSchema` | `src/models/expand-razorpay-orders-api.ts` |
| `OrdersResponse` | `ordersResponseSchema` | `src/models/orders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchOrder

- **Signature**: `fetchOrder(request: Orders.FetchOrderRequest, options?: RequestOptions): ApiPromise<Order, Orders.FetchOrderError>`
- **Wire**: `GET /orders/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Order`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Orders.FetchOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.FetchOrderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchOrderPayments

- **Signature**: `fetchOrderPayments(request: Orders.FetchOrderPaymentsRequest, options?: RequestOptions): ApiPromise<OrdersPaymentsResponse, Orders.FetchOrderPaymentsError>`
- **Wire**: `GET /orders/{id}/payments`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrdersPaymentsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Orders.FetchOrderPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.FetchOrderPaymentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrdersPaymentsResponse` | `ordersPaymentsResponseSchema` | `src/models/orders-payments-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateOrder

- **Signature**: `updateOrder(request: Orders.UpdateOrderRequest, options?: RequestOptions): ApiPromise<Order, Orders.UpdateOrderError>`
- **Wire**: `PATCH /orders/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Order`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Orders.UpdateOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.UpdateOrderRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `OrdersRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrdersRequest1` | `ordersRequest1Schema` | `src/models/orders-request1.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

