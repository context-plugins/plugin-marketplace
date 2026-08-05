# RoutingobservabilityReact — operations

Accessor: `client.RoutingobservabilityReact` · Source: `Api/RoutingobservabilityReact.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetReactCorrelationTemporal
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/react/correlation-candidates` (Default)
- **Signature**: `GetReactCorrelationTemporal(string orgId, int startTime, int endTime, string? exceptionCode, string? xFields, bool? historicalView = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `exceptionCode` — nullable, no default → **must pass explicitly**
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `historicalView` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `start_time` ← `startTime`, `end_time` ← `endTime`, `exception_code` ← `exceptionCode`, `historical_view` ← `historicalView`
- **Returns**: `IReadOnlyList<ReactCorrelationData>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
