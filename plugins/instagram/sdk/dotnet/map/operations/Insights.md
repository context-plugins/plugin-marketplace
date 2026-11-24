<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.Insights` · Source: `src/Instagram/Api/Insights.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMediaInsights

- **Signature**: `GetMediaInsights(GetMediaInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MediaId`, `Metric`, `AccessToken`
- **Query params (wire ← C#)**: `metric` ← `Metric`, `access_token` ← `AccessToken`
- **Returns**: `InsightsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetMediaInsightsRequest` | `src/Instagram/Requests/Insights/GetMediaInsightsRequest.cs` |
| `InsightsResponse` | `src/Instagram/Models/InsightsResponse.cs` |

### GetUserInsights

- **Signature**: `GetUserInsights(GetUserInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Metric`, `Period`, `AccessToken`
- **Query params (wire ← C#)**: `metric` ← `Metric`, `period` ← `Period`, `access_token` ← `AccessToken`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `InsightsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetUserInsightsRequest` | `src/Instagram/Requests/Insights/GetUserInsightsRequest.cs` |
| `Period` | `src/Instagram/Models/Enums/Period.cs` |
| `InsightsResponse` | `src/Instagram/Models/InsightsResponse.cs` |

