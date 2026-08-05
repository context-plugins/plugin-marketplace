# IntentsOptimizationProfile — operations

Accessor: `client.IntentsOptimizationProfile` · Source: `Api/IntentsOptimizationProfile.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### OptimizationProfileDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/optimization-profiles/optimization-profile={id}` (Default)
- **Notes**: removes juniper.optimization.profile.optimizationprofiles.OptimizationProfile
- **Signature**: `OptimizationProfileDelete(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OptimizationProfileDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OptimizationProfileGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/optimization-profiles/optimization-profile={id}` (Default)
- **Notes**: returns juniper.optimization.profile.optimizationprofiles.OptimizationProfile
- **Signature**: `OptimizationProfileGet(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OptimizationProfileGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OptimizationProfilePut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/optimization-profiles/optimization-profile={id}` (Default)
- **Notes**: creates or updates juniper.optimization.profile.optimizationprofiles.OptimizationProfile
- **Signature**: `OptimizationProfilePut(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OptimizationProfilePutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OptimizationProfilesGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/optimization-profiles` (Default)
- **Notes**: returns juniper.optimization.profile.OptimizationProfiles
- **Signature**: `OptimizationProfilesGet(string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OptimizationProfilesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
