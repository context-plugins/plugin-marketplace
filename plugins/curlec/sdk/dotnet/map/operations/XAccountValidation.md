<!-- Generated file — do not edit; regenerated with the SDK. -->

# XAccountValidation — operations

Accessor: `client.XAccountValidation` · Source: `src/Curlec/Api/XAccountValidation.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchFundAccountValidation

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchFundAccountValidation(FetchFundAccountValidationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ValidationId`
- **Returns**: `FundAccountValidation`
- **Error**: `ApiException<FetchFundAccountValidationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchFundAccountValidationRequest` | `src/Curlec/Requests/XAccountValidation/FetchFundAccountValidationRequest.cs` |
| `FundAccountValidation` | `src/Curlec/Models/FundAccountValidation.cs` |
| `FetchFundAccountValidationError` | `src/Curlec/Errors/FetchFundAccountValidationError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListFundAccountValidations

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListFundAccountValidations(ListFundAccountValidationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `FundAccountsValidationsResponse`
- **Error**: `ApiException<ListFundAccountValidationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFundAccountValidationsRequest` | `src/Curlec/Requests/XAccountValidation/ListFundAccountValidationsRequest.cs` |
| `FundAccountsValidationsResponse` | `src/Curlec/Models/FundAccountsValidationsResponse.cs` |
| `ListFundAccountValidationsError` | `src/Curlec/Errors/ListFundAccountValidationsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ValidateFundAccount

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ValidateFundAccount(ValidateFundAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `FundAccountValidation`
- **Error**: `ApiException<ValidateFundAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ValidateFundAccountRequest` | `src/Curlec/Requests/XAccountValidation/ValidateFundAccountRequest.cs` |
| `FundAccountsValidationsRequest` | `src/Curlec/Models/FundAccountsValidationsRequest.cs` |
| `FundAccountValidation` | `src/Curlec/Models/FundAccountValidation.cs` |
| `ValidateFundAccountError` | `src/Curlec/Errors/ValidateFundAccountError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

