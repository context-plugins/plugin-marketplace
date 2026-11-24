<!-- Generated file — do not edit; regenerated with the SDK. -->

# XPayouts — operations

Accessor: `client.XPayouts` · Source: `src/Curlec/Api/XPayouts.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApprovePayout

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ApprovePayout(ApprovePayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PayoutId`
- **Returns**: `Payout`
- **Error**: `ApiException<ApprovePayoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApprovePayoutRequest` | `src/Curlec/Requests/XPayouts/ApprovePayoutRequest.cs` |
| `PayoutsApproveRequest` | `src/Curlec/Models/PayoutsApproveRequest.cs` |
| `Payout` | `src/Curlec/Models/Payout.cs` |
| `ApprovePayoutError` | `src/Curlec/Errors/ApprovePayoutError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CancelPayout

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CancelPayout(CancelPayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PayoutId`
- **Returns**: `Payout`
- **Error**: `ApiException<CancelPayoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelPayoutRequest` | `src/Curlec/Requests/XPayouts/CancelPayoutRequest.cs` |
| `Payout` | `src/Curlec/Models/Payout.cs` |
| `CancelPayoutError` | `src/Curlec/Errors/CancelPayoutError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreatePayout

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreatePayout(CreatePayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XPayoutIdempotency`, `Body`
- **Returns**: `Payout`
- **Error**: `ApiException<CreatePayoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePayoutRequest` | `src/Curlec/Requests/XPayouts/CreatePayoutRequest.cs` |
| `PayoutsRequest` | `src/Curlec/Models/PayoutsRequest.cs` |
| `Payout` | `src/Curlec/Models/Payout.cs` |
| `CreatePayoutError` | `src/Curlec/Errors/CreatePayoutError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchPayout

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchPayout(FetchPayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PayoutId`
- **Returns**: `Payout`
- **Error**: `ApiException<FetchPayoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPayoutRequest` | `src/Curlec/Requests/XPayouts/FetchPayoutRequest.cs` |
| `Payout` | `src/Curlec/Models/Payout.cs` |
| `FetchPayoutError` | `src/Curlec/Errors/FetchPayoutError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListPayouts

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListPayouts(ListPayoutsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountNumber`
- **Query params (wire ← C#)**: `account_number` ← `AccountNumber`, `contact_id` ← `ContactId`, `fund_account_id` ← `FundAccountId`, `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `PayoutsResponse`
- **Error**: `ApiException<ListPayoutsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPayoutsRequest` | `src/Curlec/Requests/XPayouts/ListPayoutsRequest.cs` |
| `PayoutsResponse` | `src/Curlec/Models/PayoutsResponse.cs` |
| `ListPayoutsError` | `src/Curlec/Errors/ListPayoutsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### RejectPayout

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `RejectPayout(RejectPayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PayoutId`
- **Returns**: `Payout`
- **Error**: `ApiException<RejectPayoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RejectPayoutRequest` | `src/Curlec/Requests/XPayouts/RejectPayoutRequest.cs` |
| `PayoutsRejectRequest` | `src/Curlec/Models/PayoutsRejectRequest.cs` |
| `Payout` | `src/Curlec/Models/Payout.cs` |
| `RejectPayoutError` | `src/Curlec/Errors/RejectPayoutError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

