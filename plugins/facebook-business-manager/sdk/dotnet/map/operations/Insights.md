<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.Insights` · Source: `src/FacebookBusinessManager/Api/Insights.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAdAccountInsights

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAdAccountInsights(GetAdAccountInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `time_range` ← `TimeRange`, `breakdowns` ← `Breakdowns`, `level` ← `Level`, `time_increment` ← `TimeIncrement`
- **Returns**: `InsightsResponse`
- **Error**: `ApiException<GetAdAccountInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAdAccountInsightsRequest` | `src/FacebookBusinessManager/Requests/Insights/GetAdAccountInsightsRequest.cs` |
| `Level` | `src/FacebookBusinessManager/Models/Enums/Level.cs` |
| `InsightsResponse` | `src/FacebookBusinessManager/Models/InsightsResponse.cs` |
| `GetAdAccountInsightsError` | `src/FacebookBusinessManager/Errors/GetAdAccountInsightsError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### GetCampaignInsights

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCampaignInsights(GetCampaignInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CampaignId`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `time_range` ← `TimeRange`
- **Returns**: `InsightsResponse`
- **Error**: `ApiException<GetCampaignInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCampaignInsightsRequest` | `src/FacebookBusinessManager/Requests/Insights/GetCampaignInsightsRequest.cs` |
| `InsightsResponse` | `src/FacebookBusinessManager/Models/InsightsResponse.cs` |
| `GetCampaignInsightsError` | `src/FacebookBusinessManager/Errors/GetCampaignInsightsError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

