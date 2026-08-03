# CheckoutSession — operations

Accessor: `client.CheckoutSession` · Source: `Api/CheckoutSession.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CompleteCheckoutSession
- **HTTP**: `POST /v1/checkout/sessions/complete` (Default (api))
- **Notes**: Closes the merchant and consumer session and returns a payload identifier and optionally a secure payload used for payment processing.
- **Signature**: `CompleteCheckoutSession(CheckoutSessionCompleteRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionCompleteResponse`
- **Error**: `SdkException<CompleteCheckoutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResponse(out ApiErrorResponse)` [400, 422, 500] · `TryGetSimpleError(out SimpleError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCheckoutSession
- **HTTP**: `POST /v1/checkout/sessions/create` (Default (api))
- **Notes**: Creates the checkout session required to launch the Paze checkout UX inside a merchant mobile application.
- **Signature**: `CreateCheckoutSession(CheckoutSessionCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionCreateResponse`
- **Error**: `SdkException<CreateCheckoutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResponse(out ApiErrorResponse)` [400, 422, 500] · `TryGetSimpleError(out SimpleError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReviewCheckoutSession
- **HTTP**: `POST /v1/checkout/sessions/review` (Default (api))
- **Notes**: Retrieves information about the card and consumer selected in the Paze checkout experience.
- **Signature**: `ReviewCheckoutSession(CheckoutSessionReviewRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionReviewResponse`
- **Error**: `SdkException<ReviewCheckoutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResponse(out ApiErrorResponse)` [400, 422, 500] · `TryGetSimpleError(out SimpleError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
