<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/CompSniper/Api/Account.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccountUsage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAccountUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AccountUsageResponse`
- **Error**: `ApiException<GetAccountUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AccountUsageResponse` | `src/CompSniper/Models/AccountUsageResponse.cs` |
| `GetAccountUsageError` | `src/CompSniper/Errors/GetAccountUsageError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

