# Captures — operations

Accessor: `client.Captures` · Source: `Api/Captures.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AppendShippingInfo
- **HTTP**: `POST /ordermanagement/v1/orders/{order_id}/captures/{capture_id}/shipping-info` (Default (api))
- **Notes**: Add shipping info to a capture. Read more on Adding shipping info
- **Signature**: `AppendShippingInfo(string orderId, string captureId, string? klarnaIdempotencyKey, UpdateShippingInfo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AppendShippingInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotAllowedErrorMessage(out NotAllowedErrorMessage)` [403] · `TryGetNoSuchOrderErrorMessage(out NoSuchOrderErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CaptureOrder
- **HTTP**: `POST /ordermanagement/v1/orders/{order_id}/captures` (Default (api))
- **Notes**: Create capture. Read more on Capturing an order
- **Signature**: `CaptureOrder(string orderId, string? klarnaIdempotencyKey, CaptureObject body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CaptureOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetCaptureNotAllowedErrorMessage(out CaptureNotAllowedErrorMessage)` [403] · `TryGetNoSuchOrderErrorMessage(out NoSuchOrderErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ExtendDueDate
- **HTTP**: `PATCH /ordermanagement/v1/orders/{order_id}/captures/{capture_id}/extend-due-date` (Default (api))
- **Notes**: Extend the customer's payment due date. Read more on Extending customer due dates
- **Signature**: `ExtendDueDate(string orderId, string captureId, string? klarnaIdempotencyKey, ExtendDueDateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ExtendDueDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorMessageDto(out ErrorMessageDto)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCapture
- **HTTP**: `GET /ordermanagement/v1/orders/{order_id}/captures/{capture_id}` (Default (api))
- **Notes**: Retrieve the details of a capture. To learn more, refer to the Retrieving capture details article.
- **Signature**: `GetCapture(string orderId, string captureId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Capture`
- **Error**: `SdkException<GetCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoSuchOrderErrorMessage(out NoSuchOrderErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCaptures
- **HTTP**: `GET /ordermanagement/v1/orders/{order_id}/captures` (Default (api))
- **Notes**: List all order captures
- **Signature**: `GetCaptures(string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Capture>`
- **Error**: `SdkException<GetCapturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoSuchOrderErrorMessage(out NoSuchOrderErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOptionsForExtendDueDate
- **HTTP**: `GET /ordermanagement/v1/orders/{order_id}/captures/{capture_id}/extend-due-date-options` (Default (api))
- **Notes**: Get merchant fees for extension of due date due date
- **Signature**: `GetOptionsForExtendDueDate(string orderId, string captureId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExtendDueDateOptions`
- **Error**: `SdkException<GetOptionsForExtendDueDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorMessageDto(out ErrorMessageDto)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TriggerSendOut
- **HTTP**: `POST /ordermanagement/v1/orders/{order_id}/captures/{capture_id}/trigger-send-out` (Default (api))
- **Notes**: Trigger resend of customer communication. Read more on Resending customer communication
- **Signature**: `TriggerSendOut(string orderId, string captureId, string? klarnaIdempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TriggerSendOutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotAllowedErrorMessage(out NotAllowedErrorMessage)` [403] · `TryGetNoSuchCaptureErrorMessage(out NoSuchCaptureErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
