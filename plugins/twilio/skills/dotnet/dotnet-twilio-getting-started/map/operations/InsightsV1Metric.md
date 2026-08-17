<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Metric — operations

Accessor: `client.InsightsV1Metric` · Source: `Api/InsightsV1Metric.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListMetric

- **Server group**: `Default14`
- **Signature**: `ListMetric(string callSid, MetricEnumTwilioEdge? edge, MetricEnumStreamDirection? direction, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`edge` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Edge` ← `edge`, `Direction` ← `direction`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListMetricResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MetricEnumTwilioEdge` | `Models/Enums/MetricEnumTwilioEdge.cs` |
| `MetricEnumStreamDirection` | `Models/Enums/MetricEnumStreamDirection.cs` |
| `ListMetricResponse` | `Models/ListMetricResponse.cs` |

