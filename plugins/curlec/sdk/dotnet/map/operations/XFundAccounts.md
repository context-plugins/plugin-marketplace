<!-- Generated file — do not edit; regenerated with the SDK. -->

# XFundAccounts — operations

Accessor: `client.XFundAccounts` · Source: `src/Curlec/Api/XFundAccounts.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ActivateDeactivateFundAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ActivateDeactivateFundAccount(ActivateDeactivateFundAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FundAccountId`, `Body`
- **Returns**: `FundAccountRazorpayXFundAccountsApi`
- **Error**: `ApiException<ActivateDeactivateFundAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateDeactivateFundAccountRequest` | `src/Curlec/Requests/XFundAccounts/ActivateDeactivateFundAccountRequest.cs` |
| `FundAccountsRequest1` | `src/Curlec/Models/FundAccountsRequest1.cs` |
| `FundAccountRazorpayXFundAccountsApi` | `src/Curlec/Models/FundAccountRazorpayXFundAccountsApi.cs` |
| `ActivateDeactivateFundAccountError` | `src/Curlec/Errors/ActivateDeactivateFundAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreateFundAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateFundAccount(CreateFundAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `FundAccountRazorpayXFundAccountsApi`
- **Error**: `ApiException<CreateFundAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFundAccountRequest` | `src/Curlec/Requests/XFundAccounts/CreateFundAccountRequest.cs` |
| `FundAccountsRequest` | `src/Curlec/Models/FundAccountsRequest.cs` |
| `FundAccountRazorpayXFundAccountsApi` | `src/Curlec/Models/FundAccountRazorpayXFundAccountsApi.cs` |
| `CreateFundAccountError` | `src/Curlec/Errors/CreateFundAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchFundAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchFundAccount(FetchFundAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FundAccountId`
- **Returns**: `FundAccountRazorpayXFundAccountsApi`
- **Error**: `ApiException<FetchFundAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchFundAccountRequest` | `src/Curlec/Requests/XFundAccounts/FetchFundAccountRequest.cs` |
| `FundAccountRazorpayXFundAccountsApi` | `src/Curlec/Models/FundAccountRazorpayXFundAccountsApi.cs` |
| `FetchFundAccountError` | `src/Curlec/Errors/FetchFundAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListFundAccounts

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListFundAccounts(ListFundAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `contact_id` ← `ContactId`, `account_type` ← `AccountType`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `FundAccountsResponse`
- **Error**: `ApiException<ListFundAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFundAccountsRequest` | `src/Curlec/Requests/XFundAccounts/ListFundAccountsRequest.cs` |
| `FundAccountsResponse` | `src/Curlec/Models/FundAccountsResponse.cs` |
| `ListFundAccountsError` | `src/Curlec/Errors/ListFundAccountsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

