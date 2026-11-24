<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesWhois — operations

Accessor: `client.DatabasesWhois` · Source: `src/WhoisFreaks/Api/DatabasesWhois.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DbWhoisDaily

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbWhoisDaily(DbWhoisDailyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbWhoisDailyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbWhoisDailyRequest` | `src/WhoisFreaks/Requests/DatabasesWhois/DbWhoisDailyRequest.cs` |
| `DbWhoisDailyError` | `src/WhoisFreaks/Errors/DbWhoisDailyError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbWhoisMonthly

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbWhoisMonthly(DbWhoisMonthlyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbWhoisMonthlyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbWhoisMonthlyRequest` | `src/WhoisFreaks/Requests/DatabasesWhois/DbWhoisMonthlyRequest.cs` |
| `DbWhoisMonthlyError` | `src/WhoisFreaks/Errors/DbWhoisMonthlyError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbWhoisWeekly

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbWhoisWeekly(DbWhoisWeeklyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbWhoisWeeklyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbWhoisWeeklyRequest` | `src/WhoisFreaks/Requests/DatabasesWhois/DbWhoisWeeklyRequest.cs` |
| `DbWhoisWeeklyError` | `src/WhoisFreaks/Errors/DbWhoisWeeklyError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

