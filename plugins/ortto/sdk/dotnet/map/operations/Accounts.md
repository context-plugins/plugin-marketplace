<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.Accounts` · Source: `src/Ortto/Api/Accounts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MergeAccounts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MergeAccounts(MergeAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<MergeAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MergeAccountsRequest` | `src/Ortto/Requests/Accounts/MergeAccountsRequest.cs` |
| `AccountsMergeRequest` | `src/Ortto/Models/AccountsMergeRequest.cs` |
| `MergeAccountsError` | `src/Ortto/Errors/MergeAccountsError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

