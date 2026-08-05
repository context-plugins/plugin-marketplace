# EmsOrgDynamicTopology — operations

Accessor: `client.EmsOrgDynamicTopology` · Source: `Api/EmsOrgDynamicTopology.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDynamicTopologyConfig
- **HTTP**: `GET /api/v1/orgs/{org_id}/dyntopo` (Default)
- **Notes**: Retrieve the dynamic topology configuration for the org. Feature-gated by net.juniper.eop.pathfinder.dynamictopology and proxied to the Pathfinder configuration service; returns 404 when the feature is disabled.
- **Signature**: `GetDynamicTopologyConfig(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<GetDynamicTopologyConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFound1(out NotFound1)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
