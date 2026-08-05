# ObservabilityMetrics — operations

Accessor: `client.ObservabilityMetrics` · Source: `Api/ObservabilityMetrics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RetrievesVpnServiceMetrics
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/service_instances/{instance_id}/metrics` (Default)
- **Notes**: Retrieves VPN metrics based on VPN/service type and sub metric type
- **Signature**: `RetrievesVpnServiceMetrics(string instanceId, string orgId, string serviceType, string type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `service_type` ← `serviceType`, `type` ← `type`
- **Returns**: `InsightsApiV1OrgsServiceInstancesMetricsResponse`
- **Error**: `SdkException<RetrievesVpnServiceMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
