<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.Analytics` · Source: `src/Basiq/Api/Analytics.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetConnectionAnalytics

- **Auth**: `options.ServicesToken`
- **Signature**: `GetConnectionAnalytics(GetConnectionAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Interval`
- **Query params (wire ← C#)**: `interval` ← `Interval`, `fromDate` ← `FromDate`, `toDate` ← `ToDate`
- **Returns**: `ConnectionAnalyticsResponse`
- **Error**: `ApiException<GetConnectionAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorList([NotNullWhen(true)] out ErrorList? value)` [400, 403] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetConnectionAnalyticsRequest` | `src/Basiq/Requests/Analytics/GetConnectionAnalyticsRequest.cs` |
| `Interval` | `src/Basiq/Models/Enums/Interval.cs` |
| `ConnectionAnalyticsResponse` | `src/Basiq/Models/ConnectionAnalyticsResponse.cs` |
| `GetConnectionAnalyticsError` | `src/Basiq/Errors/GetConnectionAnalyticsError.cs` |
| `ErrorList` | `src/Basiq/Models/ErrorList.cs` |

### GetUserAnalytics

- **Auth**: `options.ServicesToken`
- **Signature**: `GetUserAnalytics(GetUserAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Interval`
- **Query params (wire ← C#)**: `interval` ← `Interval`, `fromDate` ← `FromDate`, `toDate` ← `ToDate`, `connectionType` ← `ConnectionType`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetUserAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorList([NotNullWhen(true)] out ErrorList? value)` [400, 403] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserAnalyticsRequest` | `src/Basiq/Requests/Analytics/GetUserAnalyticsRequest.cs` |
| `Interval` | `src/Basiq/Models/Enums/Interval.cs` |
| `AnalyticsResponse` | `src/Basiq/Models/AnalyticsResponse.cs` |
| `GetUserAnalyticsError` | `src/Basiq/Errors/GetUserAnalyticsError.cs` |
| `ErrorList` | `src/Basiq/Models/ErrorList.cs` |

