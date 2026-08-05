# ActiveassuranceMetrics — operations

Accessor: `client.ActiveassuranceMetrics` · Source: `Api/ActiveassuranceMetrics.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### StreamServiceAggregateMetrics
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/streams:aggregateMetrics` (Default)
- **Signature**: `StreamServiceAggregateMetrics(string orgId, AggregateRequestInputParamForAggregateMetrics body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AggregateResponseOutputOfAggregateMetrics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamServiceListMetrics
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/streams/{stream_id}/metrics` (Default)
- **Signature**: `StreamServiceListMetrics(string orgId, string streamId, DateTimeOffset? startTime, DateTimeOffset? endTime, Granularity1? granularity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startTime` — nullable, no default → **must pass explicitly**
  - `endTime` — nullable, no default → **must pass explicitly**
  - `granularity` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start_time` ← `startTime`, `end_time` ← `endTime`, `granularity` ← `granularity`
- **Returns**: `ListMetricsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
