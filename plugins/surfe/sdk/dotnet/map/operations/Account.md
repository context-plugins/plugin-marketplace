<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/Surfe/Api/Account.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCredits

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCredits(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreditBalance`
- **Error**: `ApiException<GetCreditsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreditBalance` | `src/Surfe/Models/CreditBalance.cs` |
| `GetCreditsError` | `src/Surfe/Errors/GetCreditsError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

