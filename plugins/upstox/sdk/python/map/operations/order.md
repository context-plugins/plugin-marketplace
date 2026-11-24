<!-- Generated file — do not edit; regenerated with the SDK. -->

# Order — operations

Accessor: `client.order` · Source: `upstox/apis/order.py` · 18 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.order.cancel_gtt_order

- **Route**: `DELETE /v3/order/gtt/cancel`
- **Auth**: `oauth2`
- **Signature**: `def cancel_gtt_order(body: GttCancelOrderRequest | GttCancelOrderRequestDict, *, origin: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `origin` — header `Origin` · `body` — JSON body
- **Returns (parsed)**: `GttTriggerOrderResponse`
- **Returns (raw)**: `ApiResult[GttTriggerOrderResponse, CancelGttOrderErrorBody]`
- **Error**: `CancelGttOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GttCancelOrderRequest` | `upstox/models/gtt_cancel_order_request.py` |
| `GttCancelOrderRequestDict` | `upstox/models/gtt_cancel_order_request.py` |
| `GttTriggerOrderResponse` | `upstox/models/gtt_trigger_order_response.py` |
| `CancelGttOrderErrorBody` | `upstox/errors/cancel_gtt_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.cancel_multi_order

- **Route**: `DELETE /v2/order/multi/cancel`
- **Auth**: `oauth2`
- **Signature**: `def cancel_multi_order(*, tag: str | None = None, segment: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `tag` — query · `segment` — query
- **Returns (parsed)**: `CancelOrExitMultiOrderResponse`
- **Returns (raw)**: `ApiResult[CancelOrExitMultiOrderResponse, CancelMultiOrderErrorBody]`
- **Error**: `CancelMultiOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelOrExitMultiOrderResponse` | `upstox/models/cancel_or_exit_multi_order_response.py` |
| `CancelMultiOrderErrorBody` | `upstox/errors/cancel_multi_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.cancel_order

- **Route**: `DELETE /v3/order/cancel`
- **Auth**: `oauth2`
- **Signature**: `def cancel_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — query
- **Returns (parsed)**: `CancelOrderV3Response`
- **Returns (raw)**: `ApiResult[CancelOrderV3Response, CancelOrderErrorBody]`
- **Error**: `CancelOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelOrderV3Response` | `upstox/models/cancel_order_v3_response.py` |
| `CancelOrderErrorBody` | `upstox/errors/cancel_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.cancel_order_1

- **Route**: `DELETE /v2/order/cancel`
- **Auth**: `oauth2`
- **Signature**: `def cancel_order_1(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — query
- **Returns (parsed)**: `CancelOrderResponse`
- **Returns (raw)**: `ApiResult[CancelOrderResponse, CancelOrder1ErrorBody]`
- **Error**: `CancelOrder1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelOrderResponse` | `upstox/models/cancel_order_response.py` |
| `CancelOrder1ErrorBody` | `upstox/errors/cancel_order1_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.exit_positions

- **Route**: `POST /v2/order/positions/exit`
- **Auth**: `oauth2`
- **Signature**: `def exit_positions(*, tag: str | None = None, segment: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `tag` — query · `segment` — query
- **Returns (parsed)**: `CancelOrExitMultiOrderResponse`
- **Returns (raw)**: `ApiResult[CancelOrExitMultiOrderResponse, ExitPositionsErrorBody]`
- **Error**: `ExitPositionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelOrExitMultiOrderResponse` | `upstox/models/cancel_or_exit_multi_order_response.py` |
| `ExitPositionsErrorBody` | `upstox/errors/exit_positions_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.get_gtt_order_details

- **Route**: `GET /v3/order/gtt`
- **Auth**: `oauth2`
- **Signature**: `def get_gtt_order_details(*, gtt_order_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `gtt_order_id` — query
- **Returns (parsed)**: `GetGttOrderResponse`
- **Returns (raw)**: `ApiResult[GetGttOrderResponse, GetGttOrderDetailsErrorBody]`
- **Error**: `GetGttOrderDetailsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetGttOrderResponse` | `upstox/models/get_gtt_order_response.py` |
| `GetGttOrderDetailsErrorBody` | `upstox/errors/get_gtt_order_details_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.get_order_book

- **Route**: `GET /v2/order/retrieve-all`
- **Auth**: `oauth2`
- **Signature**: `def get_order_book(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetOrderBookResponse`
- **Returns (raw)**: `ApiResult[GetOrderBookResponse, GetOrderBookErrorBody]`
- **Error**: `GetOrderBookErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetOrderBookResponse` | `upstox/models/get_order_book_response.py` |
| `GetOrderBookErrorBody` | `upstox/errors/get_order_book_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.get_order_details

- **Route**: `GET /v2/order/history`
- **Auth**: `oauth2`
- **Signature**: `def get_order_details(*, order_id: str | None = None, tag: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `order_id` — query · `tag` — query
- **Returns (parsed)**: `GetOrderResponse`
- **Returns (raw)**: `ApiResult[GetOrderResponse, GetOrderDetailsErrorBody]`
- **Error**: `GetOrderDetailsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetOrderResponse` | `upstox/models/get_order_response.py` |
| `GetOrderDetailsErrorBody` | `upstox/errors/get_order_details_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.get_order_status

- **Route**: `GET /v2/order/details`
- **Auth**: `oauth2`
- **Signature**: `def get_order_status(*, order_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `order_id` — query
- **Returns (parsed)**: `GetOrderDetailsResponse`
- **Returns (raw)**: `ApiResult[GetOrderDetailsResponse, GetOrderStatusErrorBody]`
- **Error**: `GetOrderStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetOrderDetailsResponse` | `upstox/models/get_order_details_response.py` |
| `GetOrderStatusErrorBody` | `upstox/errors/get_order_status_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.get_trade_history

- **Route**: `GET /v2/order/trades/get-trades-for-day`
- **Auth**: `oauth2`
- **Signature**: `def get_trade_history(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetTradeResponse`
- **Returns (raw)**: `ApiResult[GetTradeResponse, GetTradeHistoryErrorBody]`
- **Error**: `GetTradeHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetTradeResponse` | `upstox/models/get_trade_response.py` |
| `GetTradeHistoryErrorBody` | `upstox/errors/get_trade_history_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.get_trades_by_order

- **Route**: `GET /v2/order/trades`
- **Auth**: `oauth2`
- **Signature**: `def get_trades_by_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — query
- **Returns (parsed)**: `GetTradeResponse`
- **Returns (raw)**: `ApiResult[GetTradeResponse, GetTradesByOrderErrorBody]`
- **Error**: `GetTradesByOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetTradeResponse` | `upstox/models/get_trade_response.py` |
| `GetTradesByOrderErrorBody` | `upstox/errors/get_trades_by_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.modify_gtt_order

- **Route**: `PUT /v3/order/gtt/modify`
- **Auth**: `oauth2`
- **Signature**: `def modify_gtt_order(body: GttModifyOrderRequest | GttModifyOrderRequestDict, *, origin: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `origin` — header `Origin` · `body` — JSON body
- **Returns (parsed)**: `GttTriggerOrderResponse`
- **Returns (raw)**: `ApiResult[GttTriggerOrderResponse, ModifyGttOrderErrorBody]`
- **Error**: `ModifyGttOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GttModifyOrderRequest` | `upstox/models/gtt_modify_order_request.py` |
| `GttModifyOrderRequestDict` | `upstox/models/gtt_modify_order_request.py` |
| `GttTriggerOrderResponse` | `upstox/models/gtt_trigger_order_response.py` |
| `ModifyGttOrderErrorBody` | `upstox/errors/modify_gtt_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.modify_order

- **Route**: `PUT /v3/order/modify`
- **Auth**: `oauth2`
- **Signature**: `def modify_order(body: ModifyOrderRequest | ModifyOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ModifyOrderV3Response`
- **Returns (raw)**: `ApiResult[ModifyOrderV3Response, ModifyOrderErrorBody]`
- **Error**: `ModifyOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModifyOrderRequest` | `upstox/models/modify_order_request.py` |
| `ModifyOrderRequestDict` | `upstox/models/modify_order_request.py` |
| `ModifyOrderV3Response` | `upstox/models/modify_order_v3_response.py` |
| `ModifyOrderErrorBody` | `upstox/errors/modify_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.modify_order_1

- **Route**: `PUT /v2/order/modify`
- **Auth**: `oauth2`
- **Signature**: `def modify_order_1(body: ModifyOrderRequest | ModifyOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ModifyOrderResponse`
- **Returns (raw)**: `ApiResult[ModifyOrderResponse, ModifyOrder1ErrorBody]`
- **Error**: `ModifyOrder1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModifyOrderRequest` | `upstox/models/modify_order_request.py` |
| `ModifyOrderRequestDict` | `upstox/models/modify_order_request.py` |
| `ModifyOrderResponse` | `upstox/models/modify_order_response.py` |
| `ModifyOrder1ErrorBody` | `upstox/errors/modify_order1_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.place_gtt_order

- **Route**: `POST /v3/order/gtt/place`
- **Auth**: `oauth2`
- **Signature**: `def place_gtt_order(body: GttPlaceOrderRequest | GttPlaceOrderRequestDict, *, origin: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `origin` — header `Origin` · `body` — JSON body
- **Returns (parsed)**: `GttTriggerOrderResponse`
- **Returns (raw)**: `ApiResult[GttTriggerOrderResponse, PlaceGttOrderErrorBody]`
- **Error**: `PlaceGttOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GttPlaceOrderRequest` | `upstox/models/gtt_place_order_request.py` |
| `GttPlaceOrderRequestDict` | `upstox/models/gtt_place_order_request.py` |
| `GttTriggerOrderResponse` | `upstox/models/gtt_trigger_order_response.py` |
| `PlaceGttOrderErrorBody` | `upstox/errors/place_gtt_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.place_multi_order

- **Route**: `POST /v2/order/multi/place`
- **Auth**: `oauth2`
- **Signature**: `def place_multi_order(body: list[MultiOrderRequest | MultiOrderRequestDict], *, origin: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `origin` — header `Origin` · `body` — JSON body
- **Returns (parsed)**: `MultiOrderResponse`
- **Returns (raw)**: `ApiResult[MultiOrderResponse, PlaceMultiOrderErrorBody]`
- **Error**: `PlaceMultiOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MultiOrderRequest` | `upstox/models/multi_order_request.py` |
| `MultiOrderRequestDict` | `upstox/models/multi_order_request.py` |
| `MultiOrderResponse` | `upstox/models/multi_order_response.py` |
| `PlaceMultiOrderErrorBody` | `upstox/errors/place_multi_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.place_order

- **Route**: `POST /v3/order/place`
- **Auth**: `oauth2`
- **Signature**: `def place_order(body: PlaceOrderV3Request | PlaceOrderV3RequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PlaceOrderV3Response`
- **Returns (raw)**: `ApiResult[PlaceOrderV3Response, PlaceOrderErrorBody]`
- **Error**: `PlaceOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlaceOrderV3Request` | `upstox/models/place_order_v3_request.py` |
| `PlaceOrderV3RequestDict` | `upstox/models/place_order_v3_request.py` |
| `PlaceOrderV3Response` | `upstox/models/place_order_v3_response.py` |
| `PlaceOrderErrorBody` | `upstox/errors/place_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.order.place_order_1

- **Route**: `POST /v2/order/place`
- **Auth**: `oauth2`
- **Signature**: `def place_order_1(body: PlaceOrderRequest | PlaceOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PlaceOrderResponse`
- **Returns (raw)**: `ApiResult[PlaceOrderResponse, PlaceOrder1ErrorBody]`
- **Error**: `PlaceOrder1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlaceOrderRequest` | `upstox/models/place_order_request.py` |
| `PlaceOrderRequestDict` | `upstox/models/place_order_request.py` |
| `PlaceOrderResponse` | `upstox/models/place_order_response.py` |
| `PlaceOrder1ErrorBody` | `upstox/errors/place_order1_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

