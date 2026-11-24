<!-- Generated file — do not edit; regenerated with the SDK. -->

# QrCodes — operations

Accessor: `client.QrCodes` · Source: `src/Curlec/Api/QrCodes.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CloseQrCode

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CloseQrCode(CloseQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `QrCode`
- **Error**: `ApiException<CloseQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloseQrCodeRequest` | `src/Curlec/Requests/QrCodes/CloseQrCodeRequest.cs` |
| `QrCode` | `src/Curlec/Models/QrCode.cs` |
| `CloseQrCodeError` | `src/Curlec/Errors/CloseQrCodeError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreateQrCode

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateQrCode(CreateQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `QrCode`
- **Error**: `ApiException<CreateQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateQrCodeRequest` | `src/Curlec/Requests/QrCodes/CreateQrCodeRequest.cs` |
| `PaymentsQrCodesRequest` | `src/Curlec/Models/PaymentsQrCodesRequest.cs` |
| `QrCode` | `src/Curlec/Models/QrCode.cs` |
| `CreateQrCodeError` | `src/Curlec/Errors/CreateQrCodeError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchAllQrCodes

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchAllQrCodes(FetchAllQrCodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`, `customer_id` ← `CustomerId`, `payment_id` ← `PaymentId`
- **Returns**: `PaymentsQrCodesResponse`
- **Error**: `ApiException<FetchAllQrCodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllQrCodesRequest` | `src/Curlec/Requests/QrCodes/FetchAllQrCodesRequest.cs` |
| `PaymentsQrCodesResponse` | `src/Curlec/Models/PaymentsQrCodesResponse.cs` |
| `FetchAllQrCodesError` | `src/Curlec/Errors/FetchAllQrCodesError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchQrCode

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchQrCode(FetchQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `QrCode`
- **Error**: `ApiException<FetchQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchQrCodeRequest` | `src/Curlec/Requests/QrCodes/FetchQrCodeRequest.cs` |
| `QrCode` | `src/Curlec/Models/QrCode.cs` |
| `FetchQrCodeError` | `src/Curlec/Errors/FetchQrCodeError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchQrCodePayments

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchQrCodePayments(FetchQrCodePaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `PaymentsQrCodesPaymentsResponse`
- **Error**: `ApiException<FetchQrCodePaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchQrCodePaymentsRequest` | `src/Curlec/Requests/QrCodes/FetchQrCodePaymentsRequest.cs` |
| `PaymentsQrCodesPaymentsResponse` | `src/Curlec/Models/PaymentsQrCodesPaymentsResponse.cs` |
| `FetchQrCodePaymentsError` | `src/Curlec/Errors/FetchQrCodePaymentsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateQrCode

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateQrCode(UpdateQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `QrCode`
- **Error**: `ApiException<UpdateQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateQrCodeRequest` | `src/Curlec/Requests/QrCodes/UpdateQrCodeRequest.cs` |
| `PaymentsQrCodesRequest1` | `src/Curlec/Models/PaymentsQrCodesRequest1.cs` |
| `QrCode` | `src/Curlec/Models/QrCode.cs` |
| `UpdateQrCodeError` | `src/Curlec/Errors/UpdateQrCodeError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

