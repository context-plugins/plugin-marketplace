<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesSubdomains — operations

Accessor: `client.DatabasesSubdomains` · Source: `src/WhoisFreaks/Api/DatabasesSubdomains.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DbSubdomainsDaily

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbSubdomainsDaily(DbSubdomainsDailyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbSubdomainsDailyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbSubdomainsDailyRequest` | `src/WhoisFreaks/Requests/DatabasesSubdomains/DbSubdomainsDailyRequest.cs` |
| `DbSubdomainsDailyError` | `src/WhoisFreaks/Errors/DbSubdomainsDailyError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbSubdomainsMonthly

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbSubdomainsMonthly(DbSubdomainsMonthlyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbSubdomainsMonthlyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbSubdomainsMonthlyRequest` | `src/WhoisFreaks/Requests/DatabasesSubdomains/DbSubdomainsMonthlyRequest.cs` |
| `DbSubdomainsMonthlyError` | `src/WhoisFreaks/Errors/DbSubdomainsMonthlyError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbSubdomainsWeekly

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbSubdomainsWeekly(DbSubdomainsWeeklyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbSubdomainsWeeklyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbSubdomainsWeeklyRequest` | `src/WhoisFreaks/Requests/DatabasesSubdomains/DbSubdomainsWeeklyRequest.cs` |
| `DbSubdomainsWeeklyError` | `src/WhoisFreaks/Errors/DbSubdomainsWeeklyError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

