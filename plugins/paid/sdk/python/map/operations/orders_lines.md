<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrdersLines — operations

Accessor: `client.orders_lines` · Source: `paid/apis/orders_lines.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.orders_lines.update3

- **Route**: `PUT /orders/{orderId}/lines`
- **Server**: `default`
- **Signature**: `def update3(order_id: str, authorization: str, *, body: OrdersLinesRequest | OrdersLinesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `authorization`
- **Params**: `order_id` — path `orderId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Order`
- **Returns (raw)**: `ApiResult[Order, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `OrdersLinesRequest` | `paid/models/orders_lines_request.py` |
| `OrdersLinesRequestDict` | `paid/models/orders_lines_request.py` |
| `Order` | `paid/models/order.py` |

