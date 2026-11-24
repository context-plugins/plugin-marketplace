<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountsApi — operations

Accessor: `client.AccountsApi` · Source: `src/Basiq/Api/AccountsApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccount

- **Auth**: `options.ServicesToken`
- **Signature**: `GetAccount(GetAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `AccountId`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `AccountResponseResource1`
- **Error**: `ApiException<GetAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersAccounts400Error1([NotNullWhen(true)] out UsersAccounts400Error1? value)` [400] · `TryGetUsersAccounts403Error1([NotNullWhen(true)] out UsersAccounts403Error1? value)` [403] · `TryGetUsersAccounts404Error1([NotNullWhen(true)] out UsersAccounts404Error1? value)` [404] · `TryGetUsersAccounts500Error1([NotNullWhen(true)] out UsersAccounts500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAccountRequest` | `src/Basiq/Requests/AccountsApi/GetAccountRequest.cs` |
| `AccountResponseResource1` | `src/Basiq/Models/AccountResponseResource1.cs` |
| `GetAccountError` | `src/Basiq/Errors/GetAccountError.cs` |
| `UsersAccounts400Error1` | `src/Basiq/Models/UsersAccounts400Error1.cs` |
| `UsersAccounts403Error1` | `src/Basiq/Models/UsersAccounts403Error1.cs` |
| `UsersAccounts404Error1` | `src/Basiq/Models/UsersAccounts404Error1.cs` |
| `UsersAccounts500Error1` | `src/Basiq/Models/UsersAccounts500Error1.cs` |

### GetAccounts

- **Auth**: `options.ServicesToken`
- **Signature**: `GetAccounts(GetAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `UsersAccountsResponse`
- **Error**: `ApiException<GetAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersAccounts400Error1([NotNullWhen(true)] out UsersAccounts400Error1? value)` [400] · `TryGetUsersAccounts403Error1([NotNullWhen(true)] out UsersAccounts403Error1? value)` [403] · `TryGetUsersAccounts404Error1([NotNullWhen(true)] out UsersAccounts404Error1? value)` [404] · `TryGetUsersAccounts500Error1([NotNullWhen(true)] out UsersAccounts500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAccountsRequest` | `src/Basiq/Requests/AccountsApi/GetAccountsRequest.cs` |
| `UsersAccountsResponse` | `src/Basiq/Models/UsersAccountsResponse.cs` |
| `GetAccountsError` | `src/Basiq/Errors/GetAccountsError.cs` |
| `UsersAccounts400Error1` | `src/Basiq/Models/UsersAccounts400Error1.cs` |
| `UsersAccounts403Error1` | `src/Basiq/Models/UsersAccounts403Error1.cs` |
| `UsersAccounts404Error1` | `src/Basiq/Models/UsersAccounts404Error1.cs` |
| `UsersAccounts500Error1` | `src/Basiq/Models/UsersAccounts500Error1.cs` |

