<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pickup — operations

Accessor: `client.pickup` · Source: `instacart/apis/pickup.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.pickup.create_pickup_order

- **Route**: `POST /v2/fulfillment/users/{user_id}/orders/pickup`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_pickup_order(user_id: str, body: CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `OrderResponse`
- **Returns (raw)**: `ApiResult[OrderResponse, CreatePickupOrderErrorBody]`
- **Error**: `CreatePickupOrderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi` | `instacart/models/create_order_request_instacart_connect_fulfillment_last_mile_delivery_api.py` |
| `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict` | `instacart/models/create_order_request_instacart_connect_fulfillment_last_mile_delivery_api.py` |
| `OrderResponse` | `instacart/models/order_response.py` |
| `CreatePickupOrderErrorBody` | `instacart/errors/create_pickup_order_error.py` |
| `Error` | `instacart/models/error.py` |

### client.pickup.find_pickup_stores

- **Route**: `POST /v2/fulfillment/stores/pickup`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def find_pickup_stores(body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StoresResponse`
- **Returns (raw)**: `ApiResult[StoresResponse, FindPickupStoresErrorBody]`
- **Error**: `FindPickupStoresErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindStoresRequest` | `instacart/models/find_stores_request.py` |
| `FindStoresRequestDict` | `instacart/models/find_stores_request.py` |
| `StoresResponse` | `instacart/models/stores_response.py` |
| `FindPickupStoresErrorBody` | `instacart/errors/find_pickup_stores_error.py` |
| `Error` | `instacart/models/error.py` |

### client.pickup.preview_pickup_time_slots

- **Route**: `POST /v2/fulfillment/users/{user_id}/service_options/pickup`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def preview_pickup_time_slots(user_id: str, body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `ServiceOptionsResponse`
- **Returns (raw)**: `ApiResult[ServiceOptionsResponse, PreviewPickupTimeSlotsErrorBody]`
- **Error**: `PreviewPickupTimeSlotsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PreviewServiceOptionsRequest` | `instacart/models/preview_service_options_request.py` |
| `PreviewServiceOptionsRequestDict` | `instacart/models/preview_service_options_request.py` |
| `ServiceOptionsResponse` | `instacart/models/service_options_response.py` |
| `PreviewPickupTimeSlotsErrorBody` | `instacart/errors/preview_pickup_time_slots_error.py` |
| `Error` | `instacart/models/error.py` |

