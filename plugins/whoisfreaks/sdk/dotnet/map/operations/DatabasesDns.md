<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesDns — operations

Accessor: `client.DatabasesDns` · Source: `src/WhoisFreaks/Api/DatabasesDns.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DbDnsDaily

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbDnsDaily(DbDnsDailyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbDnsDailyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbDnsDailyRequest` | `src/WhoisFreaks/Requests/DatabasesDns/DbDnsDailyRequest.cs` |
| `DbDnsDailyError` | `src/WhoisFreaks/Errors/DbDnsDailyError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbDnsMonthly

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbDnsMonthly(DbDnsMonthlyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbDnsMonthlyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbDnsMonthlyRequest` | `src/WhoisFreaks/Requests/DatabasesDns/DbDnsMonthlyRequest.cs` |
| `DbDnsMonthlyError` | `src/WhoisFreaks/Errors/DbDnsMonthlyError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbDnsWeekly

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbDnsWeekly(DbDnsWeeklyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbDnsWeeklyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbDnsWeeklyRequest` | `src/WhoisFreaks/Requests/DatabasesDns/DbDnsWeeklyRequest.cs` |
| `DbDnsWeeklyError` | `src/WhoisFreaks/Errors/DbDnsWeeklyError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

