<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerAccounts — operations

Accessor: `client.PartnerAccounts` · Source: `src/Curlec/Api/PartnerAccounts.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeletePartnerAccount

- **Auth**: `options.BasicAuth`
- **Signature**: `DeletePartnerAccount(DeletePartnerAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `V2AccountsResponse`
- **Error**: `ApiException<DeletePartnerAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePartnerAccountRequest` | `src/Curlec/Requests/PartnerAccounts/DeletePartnerAccountRequest.cs` |
| `V2AccountsResponse` | `src/Curlec/Models/V2AccountsResponse.cs` |
| `DeletePartnerAccountError` | `src/Curlec/Errors/DeletePartnerAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchLinkedAccount2

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchLinkedAccount2(FetchLinkedAccount2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `LinkedAccount`
- **Error**: `ApiException<FetchLinkedAccount2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchLinkedAccount2Request` | `src/Curlec/Requests/PartnerAccounts/FetchLinkedAccount2Request.cs` |
| `LinkedAccount` | `src/Curlec/Models/LinkedAccount.cs` |
| `FetchLinkedAccount2Error` | `src/Curlec/Errors/FetchLinkedAccount2Error.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateLinkedAccount2

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateLinkedAccount2(UpdateLinkedAccount2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`, `Body`
- **Returns**: `LinkedAccount`
- **Error**: `ApiException<UpdateLinkedAccount2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateLinkedAccount2Request` | `src/Curlec/Requests/PartnerAccounts/UpdateLinkedAccount2Request.cs` |
| `V2AccountsRequestRazorpayPartnerAccountsApi` | `src/Curlec/Models/V2AccountsRequestRazorpayPartnerAccountsApi.cs` |
| `LinkedAccount` | `src/Curlec/Models/LinkedAccount.cs` |
| `UpdateLinkedAccount2Error` | `src/Curlec/Errors/UpdateLinkedAccount2Error.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

