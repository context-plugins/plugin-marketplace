<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentLinks — operations

Accessor: `client.PaymentLinks` · Source: `src/Curlec/Api/PaymentLinks.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelPaymentLink

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CancelPaymentLink(CancelPaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PaymentLink`
- **Error**: `ApiException<CancelPaymentLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelPaymentLinkRequest` | `src/Curlec/Requests/PaymentLinks/CancelPaymentLinkRequest.cs` |
| `PaymentLink` | `src/Curlec/Models/PaymentLink.cs` |
| `CancelPaymentLinkError` | `src/Curlec/Errors/CancelPaymentLinkError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreatePaymentLink

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreatePaymentLink(CreatePaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PaymentLink`
- **Error**: `ApiException<CreatePaymentLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentLinkRequest` | `src/Curlec/Requests/PaymentLinks/CreatePaymentLinkRequest.cs` |
| `PaymentLinksRequest` | `src/Curlec/Models/PaymentLinksRequest.cs` |
| `PaymentLink` | `src/Curlec/Models/PaymentLink.cs` |
| `CreatePaymentLinkError` | `src/Curlec/Errors/CreatePaymentLinkError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchAllPaymentLinks

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchAllPaymentLinks(FetchAllPaymentLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `payment_id` ← `PaymentId`, `reference_id` ← `ReferenceId`
- **Returns**: `PaymentLinksResponse`
- **Error**: `ApiException<FetchAllPaymentLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllPaymentLinksRequest` | `src/Curlec/Requests/PaymentLinks/FetchAllPaymentLinksRequest.cs` |
| `PaymentLinksResponse` | `src/Curlec/Models/PaymentLinksResponse.cs` |
| `FetchAllPaymentLinksError` | `src/Curlec/Errors/FetchAllPaymentLinksError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchPaymentLink

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchPaymentLink(FetchPaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PaymentLink`
- **Error**: `ApiException<FetchPaymentLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPaymentLinkRequest` | `src/Curlec/Requests/PaymentLinks/FetchPaymentLinkRequest.cs` |
| `PaymentLink` | `src/Curlec/Models/PaymentLink.cs` |
| `FetchPaymentLinkError` | `src/Curlec/Errors/FetchPaymentLinkError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ResendPaymentLinkNotification

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ResendPaymentLinkNotification(ResendPaymentLinkNotificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Medium`
- **Returns**: `PaymentLinksNotifyByResponse`
- **Error**: `ApiException<ResendPaymentLinkNotificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResendPaymentLinkNotificationRequest` | `src/Curlec/Requests/PaymentLinks/ResendPaymentLinkNotificationRequest.cs` |
| `Medium` | `src/Curlec/Models/Enums/Medium.cs` |
| `PaymentLinksNotifyByResponse` | `src/Curlec/Models/PaymentLinksNotifyByResponse.cs` |
| `ResendPaymentLinkNotificationError` | `src/Curlec/Errors/ResendPaymentLinkNotificationError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdatePaymentLink

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdatePaymentLink(UpdatePaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `PaymentLink`
- **Error**: `ApiException<UpdatePaymentLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePaymentLinkRequest` | `src/Curlec/Requests/PaymentLinks/UpdatePaymentLinkRequest.cs` |
| `PaymentLinksRequest1` | `src/Curlec/Models/PaymentLinksRequest1.cs` |
| `PaymentLink` | `src/Curlec/Models/PaymentLink.cs` |
| `UpdatePaymentLinkError` | `src/Curlec/Errors/UpdatePaymentLinkError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

