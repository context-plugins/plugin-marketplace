<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/Lusha/Api/Account.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccountUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetAccountUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AccountUsageResponse`
- **Error**: `ApiException<GetAccountUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AccountUsageResponse` | `src/Lusha/Models/AccountUsageResponse.cs` |
| `GetAccountUsageError` | `src/Lusha/Errors/GetAccountUsageError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

