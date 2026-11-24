<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.Accounts` · Source: `src/Contentstack/Api/Accounts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAllAccounts

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllAccounts(GetAllAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`
- **Returns**: `AccountList`
- **Error**: `ApiException<GetAllAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllAccountsRequest` | `src/Contentstack/Requests/Accounts/GetAllAccountsRequest.cs` |
| `AccountList` | `src/Contentstack/Models/AccountList.cs` |
| `GetAllAccountsError` | `src/Contentstack/Errors/GetAllAccountsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

