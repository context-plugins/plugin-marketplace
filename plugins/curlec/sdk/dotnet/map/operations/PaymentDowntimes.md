<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentDowntimes — operations

Accessor: `client.PaymentDowntimes` · Source: `src/Curlec/Api/PaymentDowntimes.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchPaymentDowntime

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchPaymentDowntime(FetchPaymentDowntimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PaymentDowntime`
- **Error**: `ApiException<FetchPaymentDowntimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPaymentDowntimeRequest` | `src/Curlec/Requests/PaymentDowntimes/FetchPaymentDowntimeRequest.cs` |
| `PaymentDowntime` | `src/Curlec/Models/PaymentDowntime.cs` |
| `FetchPaymentDowntimeError` | `src/Curlec/Errors/FetchPaymentDowntimeError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchPaymentDowntimes

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchPaymentDowntimes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PaymentsDowntimesResponse`
- **Error**: `ApiException<FetchPaymentDowntimesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentsDowntimesResponse` | `src/Curlec/Models/PaymentsDowntimesResponse.cs` |
| `FetchPaymentDowntimesError` | `src/Curlec/Errors/FetchPaymentDowntimesError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

