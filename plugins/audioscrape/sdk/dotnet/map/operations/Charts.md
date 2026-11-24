<!-- Generated file — do not edit; regenerated with the SDK. -->

# Charts — operations

Accessor: `client.Charts` · Source: `src/Audioscrape/Api/Charts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetChartPodcasts

- **Auth**: `options.BearerAuth`
- **Signature**: `GetChartPodcasts(GetChartPodcastsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `country` ← `Country`, `platform` ← `Platform`, `limit` ← `Limit`
- **Returns**: `IReadOnlyList<ChartPodcastEntry>`
- **Error**: `ApiException<GetChartPodcastsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetChartPodcastsRequest` | `src/Audioscrape/Requests/Charts/GetChartPodcastsRequest.cs` |
| `ChartPodcastEntry` | `src/Audioscrape/Models/ChartPodcastEntry.cs` |
| `GetChartPodcastsError` | `src/Audioscrape/Errors/GetChartPodcastsError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

