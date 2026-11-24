<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.orders` · Source: `curlec/apis/orders.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.orders.create_order

- **Route**: `POST /orders`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_order(body: OrdersRequest | OrdersRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Order`
- **Returns (raw)**: `ApiResult[Order, CreateOrderErrorBody]`
- **Error**: `CreateOrderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrdersRequest` | `curlec/models/orders_request.py` |
| `OrdersRequestDict` | `curlec/models/orders_request.py` |
| `Order` | `curlec/models/order.py` |
| `CreateOrderErrorBody` | `curlec/errors/create_order_error.py` |
| `Error` | `curlec/models/error.py` |

### client.orders.fetch_all_orders

- **Route**: `GET /orders`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_all_orders(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, authorized: AuthorizedOrInt | None = None, receipt: str | None = None, expand: list[ExpandRazorpayOrdersApiOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `count` — query · `skip` — query · `authorized` — query · `receipt` — query · `expand` — query `expand[]`
- **Returns (parsed)**: `OrdersResponse`
- **Returns (raw)**: `ApiResult[OrdersResponse, FetchAllOrdersErrorBody]`
- **Error**: `FetchAllOrdersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuthorizedOrInt` | `curlec/models/enums/authorized.py` |
| `ExpandRazorpayOrdersApiOrStr` | `curlec/models/enums/expand_razorpay_orders_api.py` |
| `OrdersResponse` | `curlec/models/orders_response.py` |
| `FetchAllOrdersErrorBody` | `curlec/errors/fetch_all_orders_error.py` |
| `Error` | `curlec/models/error.py` |

### client.orders.fetch_order

- **Route**: `GET /orders/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_order(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Order`
- **Returns (raw)**: `ApiResult[Order, FetchOrderErrorBody]`
- **Error**: `FetchOrderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Order` | `curlec/models/order.py` |
| `FetchOrderErrorBody` | `curlec/errors/fetch_order_error.py` |
| `Error` | `curlec/models/error.py` |

### client.orders.fetch_order_payments

- **Route**: `GET /orders/{id}/payments`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_order_payments(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `OrdersPaymentsResponse`
- **Returns (raw)**: `ApiResult[OrdersPaymentsResponse, FetchOrderPaymentsErrorBody]`
- **Error**: `FetchOrderPaymentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrdersPaymentsResponse` | `curlec/models/orders_payments_response.py` |
| `FetchOrderPaymentsErrorBody` | `curlec/errors/fetch_order_payments_error.py` |
| `Error` | `curlec/models/error.py` |

### client.orders.update_order

- **Route**: `PATCH /orders/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_order(id_: str, body: OrdersRequest1 | OrdersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Order`
- **Returns (raw)**: `ApiResult[Order, UpdateOrderErrorBody]`
- **Error**: `UpdateOrderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrdersRequest1` | `curlec/models/orders_request1.py` |
| `OrdersRequest1Dict` | `curlec/models/orders_request1.py` |
| `Order` | `curlec/models/order.py` |
| `UpdateOrderErrorBody` | `curlec/errors/update_order_error.py` |
| `Error` | `curlec/models/error.py` |

