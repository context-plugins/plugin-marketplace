<!-- Generated file — do not edit; regenerated with the SDK. -->

# LastMileDelivery — operations

Accessor: `client.last_mile_delivery` · Source: `instacart/apis/last_mile_delivery.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.last_mile_delivery.create_last_mile_order

- **Route**: `POST /v2/fulfillment/lastmile/users/{user_id}/orders`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_last_mile_order(user_id: str, body: CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `OrderResponse`
- **Returns (raw)**: `ApiResult[OrderResponse, CreateLastMileOrderErrorBody]`
- **Error**: `CreateLastMileOrderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi` | `instacart/models/create_order_request_instacart_connect_fulfillment_last_mile_delivery_api.py` |
| `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict` | `instacart/models/create_order_request_instacart_connect_fulfillment_last_mile_delivery_api.py` |
| `OrderResponse` | `instacart/models/order_response.py` |
| `CreateLastMileOrderErrorBody` | `instacart/errors/create_last_mile_order_error.py` |
| `Error` | `instacart/models/error.py` |

### client.last_mile_delivery.find_last_mile_stores

- **Route**: `POST /v2/fulfillment/stores/last_mile`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def find_last_mile_stores(body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StoresResponse`
- **Returns (raw)**: `ApiResult[StoresResponse, FindLastMileStoresErrorBody]`
- **Error**: `FindLastMileStoresErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindStoresRequest` | `instacart/models/find_stores_request.py` |
| `FindStoresRequestDict` | `instacart/models/find_stores_request.py` |
| `StoresResponse` | `instacart/models/stores_response.py` |
| `FindLastMileStoresErrorBody` | `instacart/errors/find_last_mile_stores_error.py` |
| `Error` | `instacart/models/error.py` |

### client.last_mile_delivery.preview_last_mile_service_options

- **Route**: `POST /v2/fulfillment/lastmile/users/{user_id}/service_options`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def preview_last_mile_service_options(user_id: str, body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `ServiceOptionsResponse`
- **Returns (raw)**: `ApiResult[ServiceOptionsResponse, PreviewLastMileServiceOptionsErrorBody]`
- **Error**: `PreviewLastMileServiceOptionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PreviewServiceOptionsRequest` | `instacart/models/preview_service_options_request.py` |
| `PreviewServiceOptionsRequestDict` | `instacart/models/preview_service_options_request.py` |
| `ServiceOptionsResponse` | `instacart/models/service_options_response.py` |
| `PreviewLastMileServiceOptionsErrorBody` | `instacart/errors/preview_last_mile_service_options_error.py` |
| `Error` | `instacart/models/error.py` |

### client.last_mile_delivery.stage_last_mile_order

- **Route**: `POST /v2/fulfillment/lastmile/orders/{order_id}/staged`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def stage_last_mile_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — path
- **Returns (parsed)**: `OrderResponse`
- **Returns (raw)**: `ApiResult[OrderResponse, StageLastMileOrderErrorBody]`
- **Error**: `StageLastMileOrderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrderResponse` | `instacart/models/order_response.py` |
| `StageLastMileOrderErrorBody` | `instacart/errors/stage_last_mile_order_error.py` |
| `Error` | `instacart/models/error.py` |

