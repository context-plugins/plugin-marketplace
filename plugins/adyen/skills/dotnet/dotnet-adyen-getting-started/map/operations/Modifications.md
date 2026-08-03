# Modifications — operations

Accessor: `client.Modifications` · Source: `Api/Modifications.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostAdjustAuthorisation
- **HTTP**: `POST /adjustAuthorisation` (Default (balanceplatform-api-test))
- **Notes**: Allows you to increase or decrease the authorised amount after the initial authorisation has taken place. This functionality enables for example tipping, improving the chances your authorisation will be valid, or charging the shopper when they have already left the merchant premises. &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/payments/{paymentPspReference}/amountUpdates` /amountUpdates) endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt;The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostAdjustAuthorisation(AdjustAuthorisationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostAdjustAuthorisationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCancel
- **HTTP**: `POST /cancel` (Default (balanceplatform-api-test))
- **Notes**: Cancels the authorisation hold on a payment, returning a unique reference for this request. You can cancel payments after authorisation only for payment methods that support distinct authorisations and captures. For more information, refer to Cancel . &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/payments/{paymentPspReference}/cancels` /cancels) endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt; The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostCancel(CancelRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCancelOrRefund
- **HTTP**: `POST /cancelOrRefund` (Default (balanceplatform-api-test))
- **Notes**: Cancels a payment if it has not been captured yet, or refunds it if it has already been captured. This is useful when it is not certain if the payment has been captured or not (for example, when using auto-capture). Do not use this endpoint for payments that involve: * Multiple partial captures . * Split data either at time of payment or capture for Adyen for Platforms. Instead, check if the payment has been captured and make a corresponding `/refund` or `/cancel` call. For more information, refer to Cancel or refund . &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/payments/{paymentPspReference}/reversals` /reversals) endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt; The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostCancelOrRefund(CancelOrRefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostCancelOrRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCancels
- **HTTP**: `POST /cancels` (Default (balanceplatform-api-test))
- **Notes**: Cancels the authorisation on a payment that has not yet been captured , and returns a unique reference for this request. You get the outcome of the request asynchronously, in a TECHNICAL_CANCEL webhook . If you want to cancel a payment using the `pspReference` , use the `/payments/{paymentPspReference}/cancels` endpoint instead. If you want to cancel a payment but are not sure whether it has been captured, use the `/payments/{paymentPspReference}/reversals` endpoint instead. For more information, refer to Cancel .
- **Signature**: `PostCancels(string? idempotencyKey, StandalonePaymentCancelRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StandalonePaymentCancelResponse`
- **Error**: `SdkException<PostCancelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCapture
- **HTTP**: `POST /capture` (Default (balanceplatform-api-test))
- **Notes**: Captures the authorisation hold on a payment, returning a unique reference for this request. Usually the full authorisation amount is captured, however it's also possible to capture a smaller amount, which results in cancelling the remaining authorisation balance. Payment methods that are captured automatically after authorisation don't need to be captured. However, submitting a capture request on these transactions will not result in double charges. If immediate or delayed auto-capture is enabled, calling the capture method is not necessary. For more information refer to Capture . &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/payments/{paymentPspReference}/captures` /captures) endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt; The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostCapture(CaptureRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDonate
- **HTTP**: `POST /donate` (Default (balanceplatform-api-test))
- **Notes**: Schedules a new payment to be created (including a new authorisation request) for the specified donation using the payment details of the original payment. &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/donations` endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt; The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostDonate(DonationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostDonateError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentsPaymentPspReferenceAmountUpdates
- **HTTP**: `POST /payments/{paymentPspReference}/amountUpdates` (Default (balanceplatform-api-test))
- **Notes**: Increases or decreases the authorised payment amount and returns a unique reference for this request. You get the outcome of the request asynchronously, in an AUTHORISATION_ADJUSTMENT webhook . You can only update authorised amounts that have not yet been captured . The amount you specify in the request is the updated amount, which is larger or smaller than the initial authorised amount. For more information, refer to Authorisation adjustment .
- **Signature**: `PostPaymentsPaymentPspReferenceAmountUpdates(string paymentPspReference, string? idempotencyKey, PaymentAmountUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentAmountUpdateResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceAmountUpdatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentsPaymentPspReferenceCancels
- **HTTP**: `POST /payments/{paymentPspReference}/cancels` (Default (balanceplatform-api-test))
- **Notes**: Cancels the authorisation on a payment that has not yet been captured , and returns a unique reference for this request. You get the outcome of the request asynchronously, in a CANCELLATION webhook . If you want to cancel a payment but don't have the `pspReference` , use the `/cancels` endpoint instead. If you want to cancel a payment but are not sure whether it has been captured, use the `/payments/{paymentPspReference}/reversals` endpoint instead. For more information, refer to Cancel .
- **Signature**: `PostPaymentsPaymentPspReferenceCancels(string paymentPspReference, string? idempotencyKey, PaymentCancelRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentCancelResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceCancelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentsPaymentPspReferenceCaptures
- **HTTP**: `POST /payments/{paymentPspReference}/captures` (Default (balanceplatform-api-test))
- **Notes**: Captures an authorised payment and returns a unique reference for this request. You get the outcome of the request asynchronously, in a CAPTURE webhook . You can capture either the full authorised amount or a part of the authorised amount. By default, any unclaimed amount after a partial capture gets cancelled. This does not apply if you enabled multiple partial captures on your account and the payment method supports multiple partial captures. Automatic capture is the default setting for most payment methods. In these cases, you don't need to make capture requests. However, making capture requests for payments that are captured automatically does not result in double charges. For more information, refer to Capture .
- **Signature**: `PostPaymentsPaymentPspReferenceCaptures(string paymentPspReference, string? idempotencyKey, PaymentCaptureRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentCaptureResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceCapturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentsPaymentPspReferenceRefunds
- **HTTP**: `POST /payments/{paymentPspReference}/refunds` (Default (balanceplatform-api-test))
- **Notes**: Refunds a payment that has been captured , and returns a unique reference for this request. You get the outcome of the request asynchronously, in a REFUND webhook . You can refund either the full captured amount or a part of the captured amount. You can also perform multiple partial refunds, as long as their sum doesn't exceed the captured amount. &gt; Some payment methods do not support partial refunds. To learn if a payment method supports partial refunds, refer to the payment method page such as cards , iDEAL , or Klarna . If you want to refund a payment but are not sure whether it has been captured, use the `/payments/{paymentPspReference}/reversals` endpoint instead. For more information, refer to Refund .
- **Signature**: `PostPaymentsPaymentPspReferenceRefunds(string paymentPspReference, string? idempotencyKey, PaymentRefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentRefundResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceRefundsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentsPaymentPspReferenceReversals
- **HTTP**: `POST /payments/{paymentPspReference}/reversals` (Default (balanceplatform-api-test))
- **Notes**: Refunds a payment if it has already been captured, and cancels a payment if it has not yet been captured. Returns a unique reference for this request. You get the outcome of the request asynchronously, in a CANCEL_OR_REFUND webhook . The reversed amount is always the full payment amount. &gt; Do not use this request for payments that involve multiple partial captures. For more information, refer to Reversal .
- **Signature**: `PostPaymentsPaymentPspReferenceReversals(string paymentPspReference, string? idempotencyKey, PaymentReversalRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentReversalResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceReversalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostRefund
- **HTTP**: `POST /refund` (Default (balanceplatform-api-test))
- **Notes**: Refunds a payment that has previously been captured, returning a unique reference for this request. Refunding can be done on the full captured amount or a partial amount. Multiple (partial) refunds will be accepted as long as their sum doesn't exceed the captured amount. Payments which have been authorised, but not captured, cannot be refunded, use the /cancel method instead. Some payment methods/gateways do not support partial/multiple refunds. A margin above the captured limit can be configured to cover shipping/handling costs. For more information, refer to Refund . &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/payments/{paymentPspReference}/refunds` /refunds) endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt; The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostRefund(RefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTechnicalCancel
- **HTTP**: `POST /technicalCancel` (Default (balanceplatform-api-test))
- **Notes**: This endpoint allows you to cancel a payment if you do not have the PSP reference of the original payment request available. In your call, refer to the original payment by using the `reference` that you specified in your payment request. For more information, see Technical cancel . &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/cancels` endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt; The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostTechnicalCancel(TechnicalCancelRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostTechnicalCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostVoidPendingRefund
- **HTTP**: `POST /voidPendingRefund` (Default (balanceplatform-api-test))
- **Notes**: This endpoint allows you to cancel an unreferenced refund request before it has been completed. In your call, you can refer to the original refund request either by using the `tenderReference`, or the `pspReference`. We recommend implementing based on the `tenderReference`, as this is generated for both offline and online transactions. For more information, refer to Cancel an unreferenced refund .
- **Signature**: `PostVoidPendingRefund(VoidPendingRefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostVoidPendingRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
