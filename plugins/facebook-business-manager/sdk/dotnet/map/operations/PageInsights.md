<!-- Generated file — do not edit; regenerated with the SDK. -->

# PageInsights — operations

Accessor: `client.PageInsights` · Source: `src/FacebookBusinessManager/Api/PageInsights.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPageInsights

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPageInsights(GetPageInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`, `Metric`
- **Query params (wire ← C#)**: `metric` ← `Metric`, `period` ← `Period`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `PageInsightsResponse`
- **Error**: `ApiException<GetPageInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPageInsightsRequest` | `src/FacebookBusinessManager/Requests/PageInsights/GetPageInsightsRequest.cs` |
| `Period` | `src/FacebookBusinessManager/Models/Enums/Period.cs` |
| `PageInsightsResponse` | `src/FacebookBusinessManager/Models/PageInsightsResponse.cs` |
| `GetPageInsightsError` | `src/FacebookBusinessManager/Errors/GetPageInsightsError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

