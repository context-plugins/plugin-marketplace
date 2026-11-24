<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/JuriSign/Api/Account.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccountCredits

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAccountCredits(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AccountCreditsResponse`
- **Error**: `ApiException<GetAccountCreditsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AccountCreditsResponse` | `src/JuriSign/Models/AccountCreditsResponse.cs` |
| `GetAccountCreditsError` | `src/JuriSign/Errors/GetAccountCreditsError.cs` |
| `Unauthenticated1` | `src/JuriSign/Models/Unauthenticated1.cs` |

