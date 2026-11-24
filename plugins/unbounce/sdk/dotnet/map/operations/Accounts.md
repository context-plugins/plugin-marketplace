<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.Accounts` · Source: `src/Unbounce/Api/Accounts.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccount

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `GetAccount(GetAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `Account`
- **Error**: `ApiException<GetAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAccountRequest` | `src/Unbounce/Requests/Accounts/GetAccountRequest.cs` |
| `Account` | `src/Unbounce/Models/Account.cs` |
| `GetAccountError` | `src/Unbounce/Errors/GetAccountError.cs` |
| `Error` | `src/Unbounce/Models/Error.cs` |

### GetSubAccount

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `GetSubAccount(GetSubAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubAccountId`
- **Returns**: `SubAccount`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSubAccountRequest` | `src/Unbounce/Requests/Accounts/GetSubAccountRequest.cs` |
| `SubAccount` | `src/Unbounce/Models/SubAccount.cs` |

### ListAccounts

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListAccounts(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AccountCollection`
- **Error**: `ApiException<ListAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AccountCollection` | `src/Unbounce/Models/AccountCollection.cs` |
| `ListAccountsError` | `src/Unbounce/Errors/ListAccountsError.cs` |
| `Error` | `src/Unbounce/Models/Error.cs` |

### ListSubAccountsForAccount

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListSubAccountsForAccount(ListSubAccountsForAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `AccountsSubAccountsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSubAccountsForAccountRequest` | `src/Unbounce/Requests/Accounts/ListSubAccountsForAccountRequest.cs` |
| `AccountsSubAccountsResponse` | `src/Unbounce/Models/AccountsSubAccountsResponse.cs` |

