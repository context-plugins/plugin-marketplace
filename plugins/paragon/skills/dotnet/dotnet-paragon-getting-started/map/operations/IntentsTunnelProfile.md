# IntentsTunnelProfile — operations

Accessor: `client.IntentsTunnelProfile` · Source: `Api/IntentsTunnelProfile.cs` · 17 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TunnelProfileDesignDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/design` (Default)
- **Notes**: Backward-compailiby model for PathFinder
- **Signature**: `TunnelProfileDesignDelete(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileDesignDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileDesignGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/design` (Default)
- **Notes**: Backward-compailiby model for PathFinder
- **Signature**: `TunnelProfileDesignGet(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileDesignGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileDesignPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/design` (Default)
- **Notes**: Backward-compailiby model for PathFinder
- **Signature**: `TunnelProfileDesignPut(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileDesignPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfilePathMetricBoundDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/path-metric-bounds/path-metric-bound={metric-type}` (Default)
- **Notes**: List of TE path metric bounds.
- **Signature**: `TunnelProfilePathMetricBoundDelete(string id, string metricType, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfilePathMetricBoundDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfilePathMetricBoundGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/path-metric-bounds/path-metric-bound={metric-type}` (Default)
- **Notes**: List of TE path metric bounds.
- **Signature**: `TunnelProfilePathMetricBoundGet(string id, string metricType, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfilePathMetricBoundGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfilePathMetricBoundPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/path-metric-bounds/path-metric-bound={metric-type}` (Default)
- **Notes**: List of TE path metric bounds.
- **Signature**: `TunnelProfilePathMetricBoundPut(string id, string metricType, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfilePathMetricBoundPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfilePathMetricBoundsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/path-metric-bounds` (Default)
- **Notes**: TE path metric bounds container.
- **Signature**: `TunnelProfilePathMetricBoundsGet(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfilePathMetricBoundsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileSrPolicyDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/sr-policy` (Default)
- **Notes**: removes juniper.pathfinder.profile.pathfinderpathconstraints.SrPolicy
- **Signature**: `TunnelProfileSrPolicyDelete(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileSrPolicyDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileSrPolicyGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/sr-policy` (Default)
- **Notes**: returns juniper.pathfinder.profile.pathfinderpathconstraints.SrPolicy
- **Signature**: `TunnelProfileSrPolicyGet(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileSrPolicyGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileSrPolicyPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/sr-policy` (Default)
- **Notes**: creates or updates juniper.pathfinder.profile.pathfinderpathconstraints.SrPolicy
- **Signature**: `TunnelProfileSrPolicyPut(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileSrPolicyPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileTeBandwidthDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/te-bandwidth` (Default)
- **Notes**: Container that specifies TE bandwidth. The choices can be augmented for specific data-plane technologies.
- **Signature**: `TunnelProfileTeBandwidthDelete(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileTeBandwidthDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileTeBandwidthGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/te-bandwidth` (Default)
- **Notes**: Container that specifies TE bandwidth. The choices can be augmented for specific data-plane technologies.
- **Signature**: `TunnelProfileTeBandwidthGet(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileTeBandwidthGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileTeBandwidthPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}/te-bandwidth` (Default)
- **Notes**: Container that specifies TE bandwidth. The choices can be augmented for specific data-plane technologies.
- **Signature**: `TunnelProfileTeBandwidthPut(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileTeBandwidthPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}` (Default)
- **Notes**: removes juniper.tunnel.profile.tunnelprofiles.TunnelProfile
- **Signature**: `TunnelProfileDelete(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfileGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}` (Default)
- **Notes**: returns juniper.tunnel.profile.tunnelprofiles.TunnelProfile
- **Signature**: `TunnelProfileGet(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfileGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfilePut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles/tunnel-profile={id}` (Default)
- **Notes**: creates or updates juniper.tunnel.profile.tunnelprofiles.TunnelProfile
- **Signature**: `TunnelProfilePut(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfilePutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TunnelProfilesGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/tunnel-profiles` (Default)
- **Notes**: returns juniper.tunnel.profile.TunnelProfiles
- **Signature**: `TunnelProfilesGet(string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TunnelProfilesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
