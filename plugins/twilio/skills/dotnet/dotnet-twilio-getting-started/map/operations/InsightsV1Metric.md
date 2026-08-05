# InsightsV1Metric — operations

Accessor: `client.InsightsV1Metric` · Source: `Api/InsightsV1Metric.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListMetric
- **HTTP**: `GET /v1/Voice/{CallSid}/Metrics` (Default4 (insights))
- **Notes**: Get a list of Call Metrics for a Call.
- **Signature**: `ListMetric(string callSid, MetricEnumTwilioEdge? edge, MetricEnumStreamDirection? direction, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`edge` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Edge` ← `edge`, `Direction` ← `direction`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListMetricResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
