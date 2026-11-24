<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.Analytics` · Source: `src/Cubic/Api/Analytics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListPullRequestAnalytics

- **Auth**: `options.AnalyticsApiKey`
- **Signature**: `ListPullRequestAnalytics(ListPullRequestAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Query params (wire ← C#)**: `org` ← `Org`, `repo` ← `Repo`, `startDate` ← `StartDate`, `endDate` ← `EndDate`, `perPage` ← `PerPage`, `cursor` ← `Cursor`
- **Returns**: `AnalyticsPrPage`
- **Error**: `ApiException<ListPullRequestAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnalyticsError([NotNullWhen(true)] out AnalyticsError? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPullRequestAnalyticsRequest` | `src/Cubic/Requests/Analytics/ListPullRequestAnalyticsRequest.cs` |
| `AnalyticsPrPage` | `src/Cubic/Models/AnalyticsPrPage.cs` |
| `ListPullRequestAnalyticsError` | `src/Cubic/Errors/ListPullRequestAnalyticsError.cs` |
| `AnalyticsError` | `src/Cubic/Models/AnalyticsError.cs` |

