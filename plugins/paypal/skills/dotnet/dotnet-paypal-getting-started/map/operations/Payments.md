# Payments — operations

Accessor: `client.Payments` · Source: `Api/Payments.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CaptureAuthorizedPayment
- **HTTP**: `POST /v2/payments/authorizations/{authorization_id}/capture` (Default (api-m))
- **Notes**: Captures an authorized payment, by ID.
- **Signature**: `CaptureAuthorizedPayment(string authorizationId, string? payPalMockResponse, string? payPalRequestId, string? payPalAuthAssertion, CaptureRequest? body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`payPalMockResponse` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `CapturedPayment`
- **Error**: `SdkException<CaptureAuthorizedPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 409, 422] · `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CaptureAuthorizedPayment1
- **HTTP**: `POST /v2/payments/authorizations/{authorization_id}/capture` (Default (api-m))
- **Notes**: Captures an authorized payment, by ID.
- **Signature**: `CaptureAuthorizedPayment1(string authorizationId, string? payPalMockResponse, string? payPalRequestId, string? payPalAuthAssertion, CaptureRequest? body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`payPalMockResponse` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `CapturedPayment`
- **Error**: `SdkException<CaptureAuthorizedPayment1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 409, 422] · `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAuthorizedPayment
- **HTTP**: `GET /v2/payments/authorizations/{authorization_id}` (Default (api-m))
- **Notes**: Shows details for an authorized payment, by ID.
- **Signature**: `GetAuthorizedPayment(string authorizationId, string? payPalMockResponse, string? payPalAuthAssertion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalMockResponse` — nullable, no default → **must pass explicitly**
  - `payPalAuthAssertion` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentAuthorization`
- **Error**: `SdkException<GetAuthorizedPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCapturedPayment
- **HTTP**: `GET /v2/payments/captures/{capture_id}` (Default (api-m))
- **Notes**: Shows details for a captured payment, by ID.
- **Signature**: `GetCapturedPayment(string captureId, string? payPalMockResponse, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalMockResponse` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CapturedPayment`
- **Error**: `SdkException<GetCapturedPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCapturedPayment1
- **HTTP**: `GET /v2/payments/captures/{capture_id}` (Default (api-m))
- **Notes**: Shows details for a captured payment, by ID.
- **Signature**: `GetCapturedPayment1(string captureId, string? payPalMockResponse, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalMockResponse` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CapturedPayment`
- **Error**: `SdkException<GetCapturedPayment1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRefund
- **HTTP**: `GET /v2/payments/refunds/{refund_id}` (Default (api-m))
- **Notes**: Shows details for a refund, by ID.
- **Signature**: `GetRefund(string refundId, string? payPalMockResponse, string? payPalAuthAssertion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalMockResponse` — nullable, no default → **must pass explicitly**
  - `payPalAuthAssertion` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Refund`
- **Error**: `SdkException<GetRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReauthorizePayment
- **HTTP**: `POST /v2/payments/authorizations/{authorization_id}/reauthorize` (Default (api-m))
- **Notes**: Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. Within the 29-day authorization period, you can issue multiple re-authorizations after the honor period expires. If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment. A reauthorized payment itself has a new honor period of three days. You can reauthorize an authorized payment from 4 to 29 days after the 3-day honor period. The allowed amount depends on context and geography, for example in US it is up to 115% of the original authorized amount, not to exceed an increase of $75 USD. Supports only the `amount` request parameter.
- **Signature**: `ReauthorizePayment(string authorizationId, string? payPalRequestId, string? payPalAuthAssertion, ReauthorizeRequest? body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalRequestId` — nullable, no default → **must pass explicitly**
  - `payPalAuthAssertion` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `PaymentAuthorization`
- **Error**: `SdkException<ReauthorizePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 422] · `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RefundCapturedPayment
- **HTTP**: `POST /v2/payments/captures/{capture_id}/refund` (Default (api-m))
- **Notes**: Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an amount object in the JSON request body.
- **Signature**: `RefundCapturedPayment(string captureId, string? payPalMockResponse, string? payPalRequestId, string? payPalAuthAssertion, RefundRequest? body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`payPalMockResponse` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `Refund`
- **Error**: `SdkException<RefundCapturedPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 409, 422] · `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VoidPayment
- **HTTP**: `POST /v2/payments/authorizations/{authorization_id}/void` (Default (api-m))
- **Notes**: Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.
- **Signature**: `VoidPayment(string authorizationId, string? payPalMockResponse, string? payPalAuthAssertion, string? payPalRequestId, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalMockResponse` — nullable, no default → **must pass explicitly**
  - `payPalAuthAssertion` — nullable, no default → **must pass explicitly**
  - `payPalRequestId` — nullable, no default → **must pass explicitly**
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `PaymentAuthorization`
- **Error**: `SdkException<VoidPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404, 409, 422] · `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
