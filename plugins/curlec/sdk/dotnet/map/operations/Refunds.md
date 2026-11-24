<!-- Generated file — do not edit; regenerated with the SDK. -->

# Refunds — operations

Accessor: `client.Refunds` · Source: `src/Curlec/Api/Refunds.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRefund

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateRefund(CreateRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `RefundRazorpayRefundsApi`
- **Error**: `ApiException<CreateRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRefundRequest` | `src/Curlec/Requests/Refunds/CreateRefundRequest.cs` |
| `PaymentsRefundRequest` | `src/Curlec/Models/PaymentsRefundRequest.cs` |
| `RefundRazorpayRefundsApi` | `src/Curlec/Models/RefundRazorpayRefundsApi.cs` |
| `CreateRefundError` | `src/Curlec/Errors/CreateRefundError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchAllRefunds

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchAllRefunds(FetchAllRefundsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `RefundsResponse`
- **Error**: `ApiException<FetchAllRefundsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllRefundsRequest` | `src/Curlec/Requests/Refunds/FetchAllRefundsRequest.cs` |
| `RefundsResponse` | `src/Curlec/Models/RefundsResponse.cs` |
| `FetchAllRefundsError` | `src/Curlec/Errors/FetchAllRefundsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchPaymentRefund

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchPaymentRefund(FetchPaymentRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`, `RefundId`
- **Returns**: `RefundRazorpayRefundsApi`
- **Error**: `ApiException<FetchPaymentRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPaymentRefundRequest` | `src/Curlec/Requests/Refunds/FetchPaymentRefundRequest.cs` |
| `RefundRazorpayRefundsApi` | `src/Curlec/Models/RefundRazorpayRefundsApi.cs` |
| `FetchPaymentRefundError` | `src/Curlec/Errors/FetchPaymentRefundError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchPaymentRefunds

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchPaymentRefunds(FetchPaymentRefundsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `PaymentsRefundsResponse`
- **Error**: `ApiException<FetchPaymentRefundsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPaymentRefundsRequest` | `src/Curlec/Requests/Refunds/FetchPaymentRefundsRequest.cs` |
| `PaymentsRefundsResponse` | `src/Curlec/Models/PaymentsRefundsResponse.cs` |
| `FetchPaymentRefundsError` | `src/Curlec/Errors/FetchPaymentRefundsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchRefund

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchRefund(FetchRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `RefundRazorpayRefundsApi`
- **Error**: `ApiException<FetchRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchRefundRequest` | `src/Curlec/Requests/Refunds/FetchRefundRequest.cs` |
| `RefundRazorpayRefundsApi` | `src/Curlec/Models/RefundRazorpayRefundsApi.cs` |
| `FetchRefundError` | `src/Curlec/Errors/FetchRefundError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateRefund

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateRefund(UpdateRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `RefundRazorpayRefundsApi`
- **Error**: `ApiException<UpdateRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRefundRequest` | `src/Curlec/Requests/Refunds/UpdateRefundRequest.cs` |
| `RefundsRequest` | `src/Curlec/Models/RefundsRequest.cs` |
| `RefundRazorpayRefundsApi` | `src/Curlec/Models/RefundRazorpayRefundsApi.cs` |
| `UpdateRefundError` | `src/Curlec/Errors/UpdateRefundError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

