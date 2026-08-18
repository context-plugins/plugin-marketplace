<!-- Generated file — do not edit; regenerated with the SDK. -->

# Modifications — operations

Accessor: `client.Modifications` · Source: `Api/Modifications.cs` · 14 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostAdjustAuthorisation
- **Server group**: `Default1`
- **Signature**: `PostAdjustAuthorisation(AdjustAuthorisationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostAdjustAuthorisationError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AdjustAuthorisationRequest` | `Models/AdjustAuthorisationRequest.cs` |
| `ModificationResult` | `Models/ModificationResult.cs` |
| `PostAdjustAuthorisationError` | `Errors/PostAdjustAuthorisationError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostCancel
- **Server group**: `Default1`
- **Signature**: `PostCancel(CancelRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CancelRequest` | `Models/CancelRequest.cs` |
| `ModificationResult` | `Models/ModificationResult.cs` |
| `PostCancelError` | `Errors/PostCancelError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostCancelOrRefund
- **Server group**: `Default1`
- **Signature**: `PostCancelOrRefund(CancelOrRefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostCancelOrRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CancelOrRefundRequest` | `Models/CancelOrRefundRequest.cs` |
| `ModificationResult` | `Models/ModificationResult.cs` |
| `PostCancelOrRefundError` | `Errors/PostCancelOrRefundError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostCancels
- **Signature**: `PostCancels(string? idempotencyKey, StandalonePaymentCancelRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StandalonePaymentCancelResponse`
- **Error**: `SdkException<PostCancelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StandalonePaymentCancelRequest` | `Models/StandalonePaymentCancelRequest.cs` |
| `StandalonePaymentCancelResponse` | `Models/StandalonePaymentCancelResponse.cs` |
| `PostCancelsError` | `Errors/PostCancelsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostCapture
- **Server group**: `Default1`
- **Signature**: `PostCapture(CaptureRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CaptureRequest` | `Models/CaptureRequest.cs` |
| `ModificationResult` | `Models/ModificationResult.cs` |
| `PostCaptureError` | `Errors/PostCaptureError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostDonate
- **Server group**: `Default1`
- **Signature**: `PostDonate(DonationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostDonateError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DonationRequest` | `Models/DonationRequest.cs` |
| `ModificationResult` | `Models/ModificationResult.cs` |
| `PostDonateError` | `Errors/PostDonateError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentsPaymentPspReferenceAmountUpdates
- **Signature**: `PostPaymentsPaymentPspReferenceAmountUpdates(string paymentPspReference, string? idempotencyKey, PaymentAmountUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentAmountUpdateResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceAmountUpdatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentAmountUpdateRequest` | `Models/PaymentAmountUpdateRequest.cs` |
| `PaymentAmountUpdateResponse` | `Models/PaymentAmountUpdateResponse.cs` |
| `PostPaymentsPaymentPspReferenceAmountUpdatesError` | `Errors/PostPaymentsPaymentPspReferenceAmountUpdatesError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentsPaymentPspReferenceCancels
- **Signature**: `PostPaymentsPaymentPspReferenceCancels(string paymentPspReference, string? idempotencyKey, PaymentCancelRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentCancelResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceCancelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentCancelRequest` | `Models/PaymentCancelRequest.cs` |
| `PaymentCancelResponse` | `Models/PaymentCancelResponse.cs` |
| `PostPaymentsPaymentPspReferenceCancelsError` | `Errors/PostPaymentsPaymentPspReferenceCancelsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentsPaymentPspReferenceCaptures
- **Signature**: `PostPaymentsPaymentPspReferenceCaptures(string paymentPspReference, string? idempotencyKey, PaymentCaptureRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentCaptureResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceCapturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentCaptureRequest` | `Models/PaymentCaptureRequest.cs` |
| `PaymentCaptureResponse` | `Models/PaymentCaptureResponse.cs` |
| `PostPaymentsPaymentPspReferenceCapturesError` | `Errors/PostPaymentsPaymentPspReferenceCapturesError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentsPaymentPspReferenceRefunds
- **Signature**: `PostPaymentsPaymentPspReferenceRefunds(string paymentPspReference, string? idempotencyKey, PaymentRefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentRefundResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceRefundsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentRefundRequest` | `Models/PaymentRefundRequest.cs` |
| `PaymentRefundResponse` | `Models/PaymentRefundResponse.cs` |
| `PostPaymentsPaymentPspReferenceRefundsError` | `Errors/PostPaymentsPaymentPspReferenceRefundsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentsPaymentPspReferenceReversals
- **Signature**: `PostPaymentsPaymentPspReferenceReversals(string paymentPspReference, string? idempotencyKey, PaymentReversalRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentReversalResponse`
- **Error**: `SdkException<PostPaymentsPaymentPspReferenceReversalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentReversalRequest` | `Models/PaymentReversalRequest.cs` |
| `PaymentReversalResponse` | `Models/PaymentReversalResponse.cs` |
| `PostPaymentsPaymentPspReferenceReversalsError` | `Errors/PostPaymentsPaymentPspReferenceReversalsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostRefund
- **Server group**: `Default1`
- **Signature**: `PostRefund(RefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RefundRequest` | `Models/RefundRequest.cs` |
| `ModificationResult` | `Models/ModificationResult.cs` |
| `PostRefundError` | `Errors/PostRefundError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostTechnicalCancel
- **Server group**: `Default1`
- **Signature**: `PostTechnicalCancel(TechnicalCancelRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostTechnicalCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TechnicalCancelRequest` | `Models/TechnicalCancelRequest.cs` |
| `ModificationResult` | `Models/ModificationResult.cs` |
| `PostTechnicalCancelError` | `Errors/PostTechnicalCancelError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostVoidPendingRefund
- **Server group**: `Default1`
- **Signature**: `PostVoidPendingRefund(VoidPendingRefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModificationResult`
- **Error**: `SdkException<PostVoidPendingRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `VoidPendingRefundRequest` | `Models/VoidPendingRefundRequest.cs` |
| `ModificationResult` | `Models/ModificationResult.cs` |
| `PostVoidPendingRefundError` | `Errors/PostVoidPendingRefundError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

