# Orders — operations

Accessor: `client.Orders` · Source: `Api/Orders.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AcknowledgeOrder
- **HTTP**: `POST /ordermanagement/v1/orders/{order_id}/acknowledge` (Default (api))
- **Notes**: Acknowledge order. Read more on Acknowledging orders
- **Signature**: `AcknowledgeOrder(string orderId, string? klarnaIdempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AcknowledgeOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotAllowedErrorMessage(out NotAllowedErrorMessage)` [403] · `TryGetNoSuchOrderErrorMessage(out NoSuchOrderErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AppendOrderShippingInfo
- **HTTP**: `POST /ordermanagement/v1/orders/{order_id}/shipping-info` (Default (api))
- **Notes**: Add shipping info to an order. Read more on Adding shipping info
- **Signature**: `AppendOrderShippingInfo(string orderId, string? klarnaIdempotencyKey, UpdateShippingInfo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AppendOrderShippingInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoSuchOrderErrorMessage(out NoSuchOrderErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelOrder
- **HTTP**: `POST /ordermanagement/v1/orders/{order_id}/cancel` (Default (api))
- **Notes**: Cancel order. Read more on Cancelling an order
- **Signature**: `CancelOrder(string orderId, string? klarnaIdempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CancelOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetCancelNotAllowedErrorMessage(out CancelNotAllowedErrorMessage)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ExtendAuthorizationTime
- **HTTP**: `POST /ordermanagement/v1/orders/{order_id}/extend-authorization-time` (Default (api))
- **Notes**: Extend authorization time endpoints provide flexibility when unexpected delays occur, however if long fulfillment periods are standard business model, then the extension of authorizations should be defined as part of the onboarding. Read more on Extending order authorization time
- **Signature**: `ExtendAuthorizationTime(string orderId, string? klarnaIdempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ExtendAuthorizationTimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotAllowedErrorMessage(out NotAllowedErrorMessage)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrder
- **HTTP**: `GET /ordermanagement/v1/orders/{order_id}` (Default (api))
- **Notes**: An order that has the given order id. Read more on Retrieving order details
- **Signature**: `GetOrder(string orderId, string? klarnaIntegrator, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIntegrator` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MerchantOrderDto`
- **Error**: `SdkException<GetOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoSuchOrderErrorMessage(out NoSuchOrderErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReleaseRemainingAuthorization
- **HTTP**: `POST /ordermanagement/v1/orders/{order_id}/release-remaining-authorization` (Default (api))
- **Notes**: Release remaining authorization. Read more on Releasing remaining authorization
- **Signature**: `ReleaseRemainingAuthorization(string orderId, string? klarnaIdempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<ReleaseRemainingAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotAllowedErrorMessage(out NotAllowedErrorMessage)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAuthorization
- **HTTP**: `PATCH /ordermanagement/v1/orders/{order_id}/authorization` (Default (api))
- **Notes**: Set new order amount and order lines. Read more on Updating orders
- **Signature**: `UpdateAuthorization(string orderId, string? klarnaIdempotencyKey, UpdateAuthorization body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<UpdateAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotAllowedErrorMessage(out NotAllowedErrorMessage)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateConsumerDetails
- **HTTP**: `PATCH /ordermanagement/v1/orders/{order_id}/customer-details` (Default (api))
- **Notes**: Update shipping address. Read more on Updating customer addresses
- **Signature**: `UpdateConsumerDetails(string orderId, string? klarnaIdempotencyKey, UpdateConsumer body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<UpdateConsumerDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotAllowedErrorMessage(out NotAllowedErrorMessage)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMerchantReferences
- **HTTP**: `PATCH /ordermanagement/v1/orders/{order_id}/merchant-references` (Default (api))
- **Notes**: Update merchant references. Read more on Updating merchant references
- **Signature**: `UpdateMerchantReferences(string orderId, string? klarnaIdempotencyKey, UpdateMerchantReferences body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateMerchantReferencesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotAllowedErrorMessage(out NotAllowedErrorMessage)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
