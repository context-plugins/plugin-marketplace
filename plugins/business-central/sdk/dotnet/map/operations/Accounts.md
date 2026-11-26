<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.Accounts` · Source: `src/Dynamics365BusinessCentral/Api/Accounts.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccount

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetAccount(GetAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `AccountId`
- **Returns**: `Account`
- **Error**: `ApiException<GetAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAccountRequest` | `src/Dynamics365BusinessCentral/Requests/Accounts/GetAccountRequest.cs` |
| `Account` | `src/Dynamics365BusinessCentral/Models/Account.cs` |
| `GetAccountError` | `src/Dynamics365BusinessCentral/Errors/GetAccountError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListAccounts

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListAccounts(ListAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$select` ← `Select`
- **Returns**: `CompaniesApiAccountsResponse`
- **Error**: `ApiException<ListAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAccountsRequest` | `src/Dynamics365BusinessCentral/Requests/Accounts/ListAccountsRequest.cs` |
| `CompaniesApiAccountsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiAccountsResponse.cs` |
| `ListAccountsError` | `src/Dynamics365BusinessCentral/Errors/ListAccountsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListGeneralLedgerEntries

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListGeneralLedgerEntries(ListGeneralLedgerEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$select` ← `Select`
- **Returns**: `CompaniesApiGeneralLedgerEntriesResponse`
- **Error**: `ApiException<ListGeneralLedgerEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGeneralLedgerEntriesRequest` | `src/Dynamics365BusinessCentral/Requests/Accounts/ListGeneralLedgerEntriesRequest.cs` |
| `CompaniesApiGeneralLedgerEntriesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiGeneralLedgerEntriesResponse.cs` |
| `ListGeneralLedgerEntriesError` | `src/Dynamics365BusinessCentral/Errors/ListGeneralLedgerEntriesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

