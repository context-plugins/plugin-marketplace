# Payments — operations

Accessor: `client.Payments` · Source: `Api/Payments.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSessionsSessionId
- **HTTP**: `GET /sessions/{sessionId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the status of the payment session with the `sessionId` and `sessionResult` specified in the path.
- **Signature**: `GetSessionsSessionId(string sessionId, string sessionResult, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sessionResult` ← `sessionResult`
- **Returns**: `SessionResultResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostAuthorise
- **HTTP**: `POST /authorise` (Default (balanceplatform-api-test))
- **Notes**: Creates a payment with a unique reference (`pspReference`) and attempts to obtain an authorisation hold. For cards, this amount can be captured or cancelled later. Non-card payment methods typically don't support this and will automatically capture as part of the authorisation. &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/payments` endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt;The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostAuthorise(PaymentRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResult`
- **Error**: `SdkException<PostAuthoriseError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostAuthorise3D
- **HTTP**: `POST /authorise3d` (Default (balanceplatform-api-test))
- **Notes**: For an authenticated 3D Secure session, completes the payment authorisation. This endpoint must receive the `md` and `paResponse` parameters that you get from the card issuer after a shopper pays via 3D Secure. &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/payments/details` endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt; The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostAuthorise3D(PaymentRequest3D? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResult`
- **Error**: `SdkException<PostAuthorise3DError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostAuthorise3Ds2
- **HTTP**: `POST /authorise3ds2` (Default (balanceplatform-api-test))
- **Notes**: For an authenticated 3D Secure 2 session, completes the payment authorisation. This endpoint must receive the `threeDS2Token` and `threeDS2Result` parameters. &gt; This endpoint is inactive and is no longer supported for new integrations. &gt; * If you are building a new integration, use the Checkout API `/payments/details` endpoint instead. &gt; * If you have an existing integration using this endpoint, reach out to your Adyen contact and migrate to the Checkout API . &gt;The Checkout API enables your online payments integration to accept all supported payment methods, use the latest features, and access more benefits.
- **Signature**: `PostAuthorise3Ds2(PaymentRequest3Ds2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResult`
- **Error**: `SdkException<PostAuthorise3Ds2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCardDetails
- **HTTP**: `POST /cardDetails` (Default (balanceplatform-api-test))
- **Notes**: Use this endpoint to get information about the card or network token that enables you to decide on the routing of the transaction and the eligibility of the card for the type of transaction. If you include your supported brands in the request, the response also tells you if you support each brand that was identified on the card . If you have an API-only integration and collect card data, use this endpoint to find out if the shopper's card is co-bad. For co-badged cards, you must let the shopper choose the brand to pay with if you support both brands. Server-side API libraries We provide open-source server-side API libraries in several languages: - PHP - Java - Node.js - .NET - Go - Python - Ruby - Apex (beta) See our integration examples for example uses of the libraries. Developer resources BIN Lookup API is available through a Postman collection. Click the button below to create a fork, then set the environment variables at Environments &amp;nbsp;&gt;&amp;nbsp; Adyen&amp;nbsp;APIs . ![Run in Postman ](https://god.gw.postman.com/run-collection/25716737-677c7679-a695-4ebb-91da-68b4e7c9228a?action=collection%2Ffork&amp;source=rip_markdown&amp;collection-url=entityId%3D25716737-677c7679-a695-4ebb-91da-68b4e7c9228a%26entityType%3Dcollection%26workspaceId%3Da8d63f9f-cfc7-4810-90c5-9e0c60030d3e?env%5BAdyen%20APIs%5D=W3sia2V5IjoiWC1BUEktS2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJZT1VSX01FUkNIQU5UX0FDQ09VTlQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJZT1VSX0NPTVBBTllfQUNDT1VOVCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IllPVVJfQkFMQU5DRV9QTEFURk9STSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
- **Signature**: `PostCardDetails(string? idempotencyKey, CardDetailsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CardDetailsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostGetAuthenticationResult
- **HTTP**: `POST /getAuthenticationResult` (Default (balanceplatform-api-test))
- **Notes**: Return the authentication result after doing a 3D Secure authentication only.
- **Signature**: `PostGetAuthenticationResult(AuthenticationResultRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AuthenticationResultResponse`
- **Error**: `SdkException<PostGetAuthenticationResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentMethods
- **HTTP**: `POST /paymentMethods` (Default (balanceplatform-api-test))
- **Notes**: Retrieves the list of available payment methods for the transaction, based on the transaction information like amount, country, and currency.
- **Signature**: `PostPaymentMethods(string? idempotencyKey, PaymentMethodsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentMethodsResponse`
- **Error**: `SdkException<PostPaymentMethodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPayments
- **HTTP**: `POST /payments` (Default (balanceplatform-api-test))
- **Notes**: Sends payment parameters (like amount, country, and currency) together with other required input details collected from the shopper. To know more about required parameters for specific payment methods, refer to our payment method guides . The response depends on the payment flow : * For a direct flow, the response includes a `pspReference` and a `resultCode` with the payment result, for example Authorised or Refused . * For a redirect or additional action, the response contains an `action` object.
- **Signature**: `PostPayments(string? idempotencyKey, PaymentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResponse`
- **Error**: `SdkException<PostPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentsCancel
- **HTTP**: `POST /payments/cancel` (Default (balanceplatform-api-test))
- **Notes**: Cancels the payment. Returns a URL for user redirection.
- **Signature**: `PostPaymentsCancel(CancelPaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelPaymentResponse`
- **Error**: `SdkException<PostPaymentsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetPaymentsCancel400Error1(out PaymentsCancel400Error1)` [400] · `TryGetPaymentsCancel422Error1(out PaymentsCancel422Error1)` [422] · `TryGetPaymentsCancel500Error1(out PaymentsCancel500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentsConfirm
- **HTTP**: `POST /payments/confirm` (Default (balanceplatform-api-test))
- **Notes**: Confirms the payment using Strong Customer Authentication (SCA). To confirm a payment you must make this request two times: 1. Make this request to initiate SCA and receive the WWW-Authenticate header. 2. After the user completes the SCA challenge, make this request again, including the updated WWW-Authenticate header. The second response provides a redirection URL that guides the user to a payment success or failure page. For more information, see our documentation .
- **Signature**: `PostPaymentsConfirm(string? wwwAuthenticate, ConfirmPaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConfirmPaymentResponse`
- **Error**: `SdkException<PostPaymentsConfirmError>` — **Case A (typed)**
- **Error accessors**: `TryGetPaymentsConfirm400Error1(out PaymentsConfirm400Error1)` [400] · `TryGetPaymentsConfirm401Error1(out PaymentsConfirm401Error1)` [401] · `TryGetPaymentsConfirm422Error1(out PaymentsConfirm422Error1)` [422] · `TryGetPaymentsConfirm500Error1(out PaymentsConfirm500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentsDetails
- **HTTP**: `POST /payments/details` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of an open payment, which you must show to the user. Also provides a token required to confirm or cancel the payment.
- **Signature**: `PostPaymentsDetails(IdealPaymentDetailsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentDetailsResponse`
- **Error**: `SdkException<PostPaymentsDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetPaymentsDetails400Error1(out PaymentsDetails400Error1)` [400] · `TryGetPaymentsDetails422Error1(out PaymentsDetails422Error1)` [422] · `TryGetPaymentsDetails500Error1(out PaymentsDetails500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostRetrieve3Ds2Result
- **HTTP**: `POST /retrieve3ds2Result` (Default (balanceplatform-api-test))
- **Notes**: Retrieves the `threeDS2Result` after doing a 3D Secure 2 authentication only.
- **Signature**: `PostRetrieve3Ds2Result(ThreeDs2ResultRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ThreeDs2ResultResponse`
- **Error**: `SdkException<PostRetrieve3Ds2ResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostSessions
- **HTTP**: `POST /sessions` (Default (balanceplatform-api-test))
- **Notes**: Creates a payment session for Drop-in , Components , and Hosted Checkout integrations. The response contains encrypted payment session data. The front end then uses the session data to make any required server-side calls for the payment flow. You get the payment outcome asynchronously, in an AUTHORISATION webhook.
- **Signature**: `PostSessions(string? idempotencyKey, CreateCheckoutSessionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateCheckoutSessionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
