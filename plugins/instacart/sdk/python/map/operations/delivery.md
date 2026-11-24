<!-- Generated file — do not edit; regenerated with the SDK. -->

# Delivery — operations

Accessor: `client.delivery` · Source: `instacart/apis/delivery.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.delivery.cancel_order

- **Route**: `POST /v2/fulfillment/users/{user_id}/orders/{order_id}/cancel`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def cancel_order(user_id: str, order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `order_id`
- **Params**: `user_id` — path · `order_id` — path
- **Returns (parsed)**: `OrderResponse`
- **Returns (raw)**: `ApiResult[OrderResponse, CancelOrderErrorBody]`
- **Error**: `CancelOrderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrderResponse` | `instacart/models/order_response.py` |
| `CancelOrderErrorBody` | `instacart/errors/cancel_order_error.py` |
| `Error` | `instacart/models/error.py` |

### client.delivery.create_delivery_order

- **Route**: `POST /v2/fulfillment/users/{user_id}/orders/delivery`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_delivery_order(user_id: str, body: CreateOrderRequest | CreateOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `OrderResponse`
- **Returns (raw)**: `ApiResult[OrderResponse, CreateDeliveryOrderErrorBody]`
- **Error**: `CreateDeliveryOrderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateOrderRequest` | `instacart/models/create_order_request.py` |
| `CreateOrderRequestDict` | `instacart/models/create_order_request.py` |
| `OrderResponse` | `instacart/models/order_response.py` |
| `CreateDeliveryOrderErrorBody` | `instacart/errors/create_delivery_order_error.py` |
| `Error` | `instacart/models/error.py` |

### client.delivery.find_delivery_stores

- **Route**: `POST /v2/fulfillment/stores/delivery`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def find_delivery_stores(body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StoresResponse`
- **Returns (raw)**: `ApiResult[StoresResponse, FindDeliveryStoresErrorBody]`
- **Error**: `FindDeliveryStoresErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindStoresRequest` | `instacart/models/find_stores_request.py` |
| `FindStoresRequestDict` | `instacart/models/find_stores_request.py` |
| `StoresResponse` | `instacart/models/stores_response.py` |
| `FindDeliveryStoresErrorBody` | `instacart/errors/find_delivery_stores_error.py` |
| `Error` | `instacart/models/error.py` |

### client.delivery.get_order

- **Route**: `GET /v2/fulfillment/users/{user_id}/orders/{order_id}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_order(user_id: str, order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `order_id`
- **Params**: `user_id` — path · `order_id` — path
- **Returns (parsed)**: `OrderResponse`
- **Returns (raw)**: `ApiResult[OrderResponse, GetOrderErrorBody]`
- **Error**: `GetOrderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrderResponse` | `instacart/models/order_response.py` |
| `GetOrderErrorBody` | `instacart/errors/get_order_error.py` |
| `Error` | `instacart/models/error.py` |

### client.delivery.preview_delivery_time_slots

- **Route**: `POST /v2/fulfillment/users/{user_id}/service_options/delivery`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def preview_delivery_time_slots(user_id: str, body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `ServiceOptionsResponse`
- **Returns (raw)**: `ApiResult[ServiceOptionsResponse, PreviewDeliveryTimeSlotsErrorBody]`
- **Error**: `PreviewDeliveryTimeSlotsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PreviewServiceOptionsRequest` | `instacart/models/preview_service_options_request.py` |
| `PreviewServiceOptionsRequestDict` | `instacart/models/preview_service_options_request.py` |
| `ServiceOptionsResponse` | `instacart/models/service_options_response.py` |
| `PreviewDeliveryTimeSlotsErrorBody` | `instacart/errors/preview_delivery_time_slots_error.py` |
| `Error` | `instacart/models/error.py` |

### client.delivery.reserve_delivery_time_slot

- **Route**: `POST /v2/fulfillment/users/{user_id}/service_options/delivery/hold`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def reserve_delivery_time_slot(user_id: str, body: ReserveTimeSlotRequest | ReserveTimeSlotRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `ServiceOptionHoldResponse`
- **Returns (raw)**: `ApiResult[ServiceOptionHoldResponse, ReserveDeliveryTimeSlotErrorBody]`
- **Error**: `ReserveDeliveryTimeSlotErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReserveTimeSlotRequest` | `instacart/models/reserve_time_slot_request.py` |
| `ReserveTimeSlotRequestDict` | `instacart/models/reserve_time_slot_request.py` |
| `ServiceOptionHoldResponse` | `instacart/models/service_option_hold_response.py` |
| `ReserveDeliveryTimeSlotErrorBody` | `instacart/errors/reserve_delivery_time_slot_error.py` |
| `Error` | `instacart/models/error.py` |

