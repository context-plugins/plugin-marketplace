# RoutingobservabilityIgp — operations

Accessor: `client.RoutingobservabilityIgp` · Source: `Api/RoutingobservabilityIgp.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAnomaliesByRunningTheRules
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/igp_heatmap` (Default)
- **Signature**: `GetAnomaliesByRunningTheRules(string orgId, string rulesList, string startTime, string endTime, string? spfParams, string? fibParams, string? xFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `spfParams` — nullable, no default → **must pass explicitly**
  - `fibParams` — nullable, no default → **must pass explicitly**
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `rules_list` ← `rulesList`, `start_time` ← `startTime`, `end_time` ← `endTime`, `SPF_params` ← `spfParams`, `FIB_params` ← `fibParams`
- **Returns**: `IgpanomaliesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
