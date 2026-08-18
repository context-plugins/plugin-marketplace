<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.Payments` · Source: `Api/Payments.cs` · 14 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSessionsSessionId
- **Signature**: `GetSessionsSessionId(string sessionId, string sessionResult, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `sessionResult` ← `sessionResult`
- **Returns**: `SessionResultResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SessionResultResponse` | `Models/SessionResultResponse.cs` |

### PostAuthorise
- **Server group**: `Default1`
- **Signature**: `PostAuthorise(PaymentRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentResult`
- **Error**: `SdkException<PostAuthoriseError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentRequest1` | `Models/PaymentRequest1.cs` |
| `PaymentResult` | `Models/PaymentResult.cs` |
| `PostAuthoriseError` | `Errors/PostAuthoriseError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostAuthorise3D
- **Server group**: `Default1`
- **Signature**: `PostAuthorise3D(PaymentRequest3D? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentResult`
- **Error**: `SdkException<PostAuthorise3DError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentRequest3D` | `Models/PaymentRequest3D.cs` |
| `PaymentResult` | `Models/PaymentResult.cs` |
| `PostAuthorise3DError` | `Errors/PostAuthorise3DError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostAuthorise3Ds2
- **Server group**: `Default1`
- **Signature**: `PostAuthorise3Ds2(PaymentRequest3Ds2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentResult`
- **Error**: `SdkException<PostAuthorise3Ds2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentRequest3Ds2` | `Models/PaymentRequest3Ds2.cs` |
| `PaymentResult` | `Models/PaymentResult.cs` |
| `PostAuthorise3Ds2Error` | `Errors/PostAuthorise3Ds2Error.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostCardDetails
- **Signature**: `PostCardDetails(string? idempotencyKey, CardDetailsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CardDetailsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CardDetailsRequest` | `Models/CardDetailsRequest.cs` |
| `CardDetailsResponse` | `Models/CardDetailsResponse.cs` |

### PostGetAuthenticationResult
- **Server group**: `Default1`
- **Signature**: `PostGetAuthenticationResult(AuthenticationResultRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AuthenticationResultResponse`
- **Error**: `SdkException<PostGetAuthenticationResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AuthenticationResultRequest` | `Models/AuthenticationResultRequest.cs` |
| `AuthenticationResultResponse` | `Models/AuthenticationResultResponse.cs` |
| `PostGetAuthenticationResultError` | `Errors/PostGetAuthenticationResultError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentMethods
- **Signature**: `PostPaymentMethods(string? idempotencyKey, PaymentMethodsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentMethodsResponse`
- **Error**: `SdkException<PostPaymentMethodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentMethodsRequest` | `Models/PaymentMethodsRequest.cs` |
| `PaymentMethodsResponse` | `Models/PaymentMethodsResponse.cs` |
| `PostPaymentMethodsError` | `Errors/PostPaymentMethodsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPayments
- **Signature**: `PostPayments(string? idempotencyKey, PaymentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentResponse`
- **Error**: `SdkException<PostPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentRequest` | `Models/PaymentRequest.cs` |
| `PaymentResponse` | `Models/PaymentResponse.cs` |
| `PostPaymentsError` | `Errors/PostPaymentsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentsCancel
- **Server group**: `Default20`
- **Signature**: `PostPaymentsCancel(CancelPaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CancelPaymentResponse`
- **Error**: `SdkException<PostPaymentsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CancelPaymentRequest` | `Models/CancelPaymentRequest.cs` |
| `CancelPaymentResponse` | `Models/CancelPaymentResponse.cs` |
| `PostPaymentsCancelError` | `Errors/PostPaymentsCancelError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostPaymentsConfirm
- **Server group**: `Default20`
- **Signature**: `PostPaymentsConfirm(string? wwwAuthenticate, ConfirmPaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
- **Returns**: `ConfirmPaymentResponse`
- **Error**: `SdkException<PostPaymentsConfirmError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ConfirmPaymentRequest` | `Models/ConfirmPaymentRequest.cs` |
| `ConfirmPaymentResponse` | `Models/ConfirmPaymentResponse.cs` |
| `PostPaymentsConfirmError` | `Errors/PostPaymentsConfirmError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostPaymentsDetails
- **Signature**: `PostPaymentsDetails(string? idempotencyKey, PaymentDetailsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentDetailsResponse`
- **Error**: `SdkException<PostPaymentsDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentDetailsRequest` | `Models/PaymentDetailsRequest.cs` |
| `PaymentDetailsResponse` | `Models/PaymentDetailsResponse.cs` |
| `PostPaymentsDetailsError` | `Errors/PostPaymentsDetailsError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentsDetails1
- **Server group**: `Default20`
- **Signature**: `PostPaymentsDetails1(IdealPaymentDetailsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `PaymentDetailsResponse1`
- **Error**: `SdkException<PostPaymentsDetails1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `IdealPaymentDetailsRequest` | `Models/AllOf/IdealPaymentDetailsRequest.cs` |
| `PaymentDetailsResponse1` | `Models/PaymentDetailsResponse1.cs` |
| `PostPaymentsDetails1Error` | `Errors/PostPaymentsDetails1Error.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostRetrieve3Ds2Result
- **Server group**: `Default1`
- **Signature**: `PostRetrieve3Ds2Result(ThreeDs2ResultRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ThreeDs2ResultResponse`
- **Error**: `SdkException<PostRetrieve3Ds2ResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ThreeDs2ResultRequest` | `Models/ThreeDs2ResultRequest.cs` |
| `ThreeDs2ResultResponse` | `Models/ThreeDs2ResultResponse.cs` |
| `PostRetrieve3Ds2ResultError` | `Errors/PostRetrieve3Ds2ResultError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostSessions
- **Signature**: `PostSessions(string? idempotencyKey, CreateCheckoutSessionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateCheckoutSessionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateCheckoutSessionRequest` | `Models/CreateCheckoutSessionRequest.cs` |
| `CreateCheckoutSessionResponse` | `Models/CreateCheckoutSessionResponse.cs` |

