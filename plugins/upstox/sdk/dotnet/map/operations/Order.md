<!-- Generated file — do not edit; regenerated with the SDK. -->

# Order — operations

Accessor: `client.Order` · Source: `src/Upstox/Api/Order.cs` · 18 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelGttOrder

- **Auth**: `options.Oauth2`
- **Signature**: `CancelGttOrder(CancelGttOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GttTriggerOrderResponse`
- **Error**: `ApiException<CancelGttOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelGttOrderRequest` | `src/Upstox/Requests/Order/CancelGttOrderRequest.cs` |
| `GttCancelOrderRequest` | `src/Upstox/Models/GttCancelOrderRequest.cs` |
| `GttTriggerOrderResponse` | `src/Upstox/Models/GttTriggerOrderResponse.cs` |
| `CancelGttOrderError` | `src/Upstox/Errors/CancelGttOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### CancelMultiOrder

- **Auth**: `options.Oauth2`
- **Signature**: `CancelMultiOrder(CancelMultiOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `tag` ← `Tag`, `segment` ← `Segment`
- **Returns**: `CancelOrExitMultiOrderResponse`
- **Error**: `ApiException<CancelMultiOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelMultiOrderRequest` | `src/Upstox/Requests/Order/CancelMultiOrderRequest.cs` |
| `CancelOrExitMultiOrderResponse` | `src/Upstox/Models/CancelOrExitMultiOrderResponse.cs` |
| `CancelMultiOrderError` | `src/Upstox/Errors/CancelMultiOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### CancelOrder

- **Auth**: `options.Oauth2`
- **Signature**: `CancelOrder(CancelOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Query params (wire ← C#)**: `order_id` ← `OrderId`
- **Returns**: `CancelOrderV3Response`
- **Error**: `ApiException<CancelOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelOrderRequest` | `src/Upstox/Requests/Order/CancelOrderRequest.cs` |
| `CancelOrderV3Response` | `src/Upstox/Models/CancelOrderV3Response.cs` |
| `CancelOrderError` | `src/Upstox/Errors/CancelOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### CancelOrder1

- **Auth**: `options.Oauth2`
- **Signature**: `CancelOrder1(CancelOrder1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Query params (wire ← C#)**: `order_id` ← `OrderId`
- **Returns**: `CancelOrderResponse`
- **Error**: `ApiException<CancelOrder1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelOrder1Request` | `src/Upstox/Requests/Order/CancelOrder1Request.cs` |
| `CancelOrderResponse` | `src/Upstox/Models/CancelOrderResponse.cs` |
| `CancelOrder1Error` | `src/Upstox/Errors/CancelOrder1Error.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### ExitPositions

- **Auth**: `options.Oauth2`
- **Signature**: `ExitPositions(ExitPositionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `tag` ← `Tag`, `segment` ← `Segment`
- **Returns**: `CancelOrExitMultiOrderResponse`
- **Error**: `ApiException<ExitPositionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExitPositionsRequest` | `src/Upstox/Requests/Order/ExitPositionsRequest.cs` |
| `CancelOrExitMultiOrderResponse` | `src/Upstox/Models/CancelOrExitMultiOrderResponse.cs` |
| `ExitPositionsError` | `src/Upstox/Errors/ExitPositionsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetGttOrderDetails

- **Auth**: `options.Oauth2`
- **Signature**: `GetGttOrderDetails(GetGttOrderDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `gtt_order_id` ← `GttOrderId`
- **Returns**: `GetGttOrderResponse`
- **Error**: `ApiException<GetGttOrderDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGttOrderDetailsRequest` | `src/Upstox/Requests/Order/GetGttOrderDetailsRequest.cs` |
| `GetGttOrderResponse` | `src/Upstox/Models/GetGttOrderResponse.cs` |
| `GetGttOrderDetailsError` | `src/Upstox/Errors/GetGttOrderDetailsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetOrderBook

- **Auth**: `options.Oauth2`
- **Signature**: `GetOrderBook(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetOrderBookResponse`
- **Error**: `ApiException<GetOrderBookError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrderBookResponse` | `src/Upstox/Models/GetOrderBookResponse.cs` |
| `GetOrderBookError` | `src/Upstox/Errors/GetOrderBookError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetOrderDetails

- **Auth**: `options.Oauth2`
- **Signature**: `GetOrderDetails(GetOrderDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `order_id` ← `OrderId`, `tag` ← `Tag`
- **Returns**: `GetOrderResponse`
- **Error**: `ApiException<GetOrderDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrderDetailsRequest` | `src/Upstox/Requests/Order/GetOrderDetailsRequest.cs` |
| `GetOrderResponse` | `src/Upstox/Models/GetOrderResponse.cs` |
| `GetOrderDetailsError` | `src/Upstox/Errors/GetOrderDetailsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetOrderStatus

- **Auth**: `options.Oauth2`
- **Signature**: `GetOrderStatus(GetOrderStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `order_id` ← `OrderId`
- **Returns**: `GetOrderDetailsResponse`
- **Error**: `ApiException<GetOrderStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrderStatusRequest` | `src/Upstox/Requests/Order/GetOrderStatusRequest.cs` |
| `GetOrderDetailsResponse` | `src/Upstox/Models/GetOrderDetailsResponse.cs` |
| `GetOrderStatusError` | `src/Upstox/Errors/GetOrderStatusError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetTradeHistory

- **Auth**: `options.Oauth2`
- **Signature**: `GetTradeHistory(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetTradeResponse`
- **Error**: `ApiException<GetTradeHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTradeResponse` | `src/Upstox/Models/GetTradeResponse.cs` |
| `GetTradeHistoryError` | `src/Upstox/Errors/GetTradeHistoryError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetTradesByOrder

- **Auth**: `options.Oauth2`
- **Signature**: `GetTradesByOrder(GetTradesByOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Query params (wire ← C#)**: `order_id` ← `OrderId`
- **Returns**: `GetTradeResponse`
- **Error**: `ApiException<GetTradesByOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTradesByOrderRequest` | `src/Upstox/Requests/Order/GetTradesByOrderRequest.cs` |
| `GetTradeResponse` | `src/Upstox/Models/GetTradeResponse.cs` |
| `GetTradesByOrderError` | `src/Upstox/Errors/GetTradesByOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### ModifyGttOrder

- **Auth**: `options.Oauth2`
- **Signature**: `ModifyGttOrder(ModifyGttOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GttTriggerOrderResponse`
- **Error**: `ApiException<ModifyGttOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModifyGttOrderRequest` | `src/Upstox/Requests/Order/ModifyGttOrderRequest.cs` |
| `GttModifyOrderRequest` | `src/Upstox/Models/GttModifyOrderRequest.cs` |
| `GttTriggerOrderResponse` | `src/Upstox/Models/GttTriggerOrderResponse.cs` |
| `ModifyGttOrderError` | `src/Upstox/Errors/ModifyGttOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### ModifyOrder

- **Auth**: `options.Oauth2`
- **Signature**: `ModifyOrder(ModifyOrderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ModifyOrderV3Response`
- **Error**: `ApiException<ModifyOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModifyOrderOperationRequest` | `src/Upstox/Requests/Order/ModifyOrderOperationRequest.cs` |
| `ModifyOrderRequest` | `src/Upstox/Models/ModifyOrderRequest.cs` |
| `ModifyOrderV3Response` | `src/Upstox/Models/ModifyOrderV3Response.cs` |
| `ModifyOrderError` | `src/Upstox/Errors/ModifyOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### ModifyOrder1

- **Auth**: `options.Oauth2`
- **Signature**: `ModifyOrder1(ModifyOrder1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ModifyOrderResponse`
- **Error**: `ApiException<ModifyOrder1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModifyOrder1Request` | `src/Upstox/Requests/Order/ModifyOrder1Request.cs` |
| `ModifyOrderRequest` | `src/Upstox/Models/ModifyOrderRequest.cs` |
| `ModifyOrderResponse` | `src/Upstox/Models/ModifyOrderResponse.cs` |
| `ModifyOrder1Error` | `src/Upstox/Errors/ModifyOrder1Error.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### PlaceGttOrder

- **Auth**: `options.Oauth2`
- **Signature**: `PlaceGttOrder(PlaceGttOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GttTriggerOrderResponse`
- **Error**: `ApiException<PlaceGttOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlaceGttOrderRequest` | `src/Upstox/Requests/Order/PlaceGttOrderRequest.cs` |
| `GttPlaceOrderRequest` | `src/Upstox/Models/GttPlaceOrderRequest.cs` |
| `GttTriggerOrderResponse` | `src/Upstox/Models/GttTriggerOrderResponse.cs` |
| `PlaceGttOrderError` | `src/Upstox/Errors/PlaceGttOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### PlaceMultiOrder

- **Auth**: `options.Oauth2`
- **Signature**: `PlaceMultiOrder(PlaceMultiOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MultiOrderResponse`
- **Error**: `ApiException<PlaceMultiOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlaceMultiOrderRequest` | `src/Upstox/Requests/Order/PlaceMultiOrderRequest.cs` |
| `MultiOrderRequest` | `src/Upstox/Models/MultiOrderRequest.cs` |
| `MultiOrderResponse` | `src/Upstox/Models/MultiOrderResponse.cs` |
| `PlaceMultiOrderError` | `src/Upstox/Errors/PlaceMultiOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### PlaceOrder

- **Auth**: `options.Oauth2`
- **Signature**: `PlaceOrder(PlaceOrderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PlaceOrderV3Response`
- **Error**: `ApiException<PlaceOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlaceOrderOperationRequest` | `src/Upstox/Requests/Order/PlaceOrderOperationRequest.cs` |
| `PlaceOrderV3Request` | `src/Upstox/Models/PlaceOrderV3Request.cs` |
| `PlaceOrderV3Response` | `src/Upstox/Models/PlaceOrderV3Response.cs` |
| `PlaceOrderError` | `src/Upstox/Errors/PlaceOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### PlaceOrder1

- **Auth**: `options.Oauth2`
- **Signature**: `PlaceOrder1(PlaceOrder1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PlaceOrderResponse`
- **Error**: `ApiException<PlaceOrder1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlaceOrder1Request` | `src/Upstox/Requests/Order/PlaceOrder1Request.cs` |
| `PlaceOrderRequest` | `src/Upstox/Models/PlaceOrderRequest.cs` |
| `PlaceOrderResponse` | `src/Upstox/Models/PlaceOrderResponse.cs` |
| `PlaceOrder1Error` | `src/Upstox/Errors/PlaceOrder1Error.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

