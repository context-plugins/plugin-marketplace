<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.orders` · Source: `instacart/apis/orders.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.orders.get_order_handling

- **Route**: `GET /v2/post_checkout/orders/{order_id}/handling`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_order_handling(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — path
- **Returns (parsed)**: `OrderHandlingResponse`
- **Returns (raw)**: `ApiResult[OrderHandlingResponse, GetOrderHandlingErrorBody]`
- **Error**: `GetOrderHandlingErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrderHandlingResponse` | `instacart/models/order_handling_response.py` |
| `GetOrderHandlingErrorBody` | `instacart/errors/get_order_handling_error.py` |
| `Error` | `instacart/models/error.py` |

### client.orders.get_order_items

- **Route**: `GET /v2/post_checkout/orders/{order_id}/items`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_order_items(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — path
- **Returns (parsed)**: `OrderItemsResponse`
- **Returns (raw)**: `ApiResult[OrderItemsResponse, GetOrderItemsErrorBody]`
- **Error**: `GetOrderItemsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrderItemsResponse` | `instacart/models/order_items_response.py` |
| `GetOrderItemsErrorBody` | `instacart/errors/get_order_items_error.py` |
| `Error` | `instacart/models/error.py` |

