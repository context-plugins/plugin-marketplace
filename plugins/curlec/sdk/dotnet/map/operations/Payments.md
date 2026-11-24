<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.Payments` · Source: `src/Curlec/Api/Payments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CapturePayment

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CapturePayment(CapturePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `PaymentRazorpayPaymentsApi`
- **Error**: `ApiException<CapturePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CapturePaymentRequest` | `src/Curlec/Requests/Payments/CapturePaymentRequest.cs` |
| `PaymentsCaptureRequest` | `src/Curlec/Models/PaymentsCaptureRequest.cs` |
| `PaymentRazorpayPaymentsApi` | `src/Curlec/Models/PaymentRazorpayPaymentsApi.cs` |
| `CapturePaymentError` | `src/Curlec/Errors/CapturePaymentError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchAllPayments

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchAllPayments(FetchAllPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `PaymentsResponse`
- **Error**: `ApiException<FetchAllPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllPaymentsRequest` | `src/Curlec/Requests/Payments/FetchAllPaymentsRequest.cs` |
| `PaymentsResponse` | `src/Curlec/Models/PaymentsResponse.cs` |
| `FetchAllPaymentsError` | `src/Curlec/Errors/FetchAllPaymentsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchPayment

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchPayment(FetchPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PaymentRazorpayPaymentsApi`
- **Error**: `ApiException<FetchPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPaymentRequest` | `src/Curlec/Requests/Payments/FetchPaymentRequest.cs` |
| `PaymentRazorpayPaymentsApi` | `src/Curlec/Models/PaymentRazorpayPaymentsApi.cs` |
| `FetchPaymentError` | `src/Curlec/Errors/FetchPaymentError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdatePayment

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdatePayment(UpdatePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `PaymentRazorpayPaymentsApi`
- **Error**: `ApiException<UpdatePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePaymentRequest` | `src/Curlec/Requests/Payments/UpdatePaymentRequest.cs` |
| `PaymentsRequest` | `src/Curlec/Models/PaymentsRequest.cs` |
| `PaymentRazorpayPaymentsApi` | `src/Curlec/Models/PaymentRazorpayPaymentsApi.cs` |
| `UpdatePaymentError` | `src/Curlec/Errors/UpdatePaymentError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

