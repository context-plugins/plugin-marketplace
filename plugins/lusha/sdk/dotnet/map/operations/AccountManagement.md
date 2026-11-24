<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountManagement — operations

Accessor: `client.AccountManagement` · Source: `src/Lusha/Api/AccountManagement.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccountUsageStats

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetAccountUsageStats(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AccountUsageStatsResponse`
- **Error**: `ApiException<GetAccountUsageStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AccountUsageStatsResponse` | `src/Lusha/Models/AccountUsageStatsResponse.cs` |
| `GetAccountUsageStatsError` | `src/Lusha/Errors/GetAccountUsageStatsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

