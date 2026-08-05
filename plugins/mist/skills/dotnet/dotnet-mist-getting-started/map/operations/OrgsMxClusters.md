# OrgsMxClusters — operations

Accessor: `client.OrgsMxClusters` · Source: `Api/OrgsMxClusters.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgMxEdgeCluster
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxclusters` (ApiHost (api))
- **Notes**: Create MxCluster
- **Signature**: `CreateOrgMxEdgeCluster(Guid orgId, Mxcluster? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Mxcluster`
- **Error**: `SdkException<CreateOrgMxEdgeClusterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgMxEdgeCluster
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/mxclusters/{mxcluster_id}` (ApiHost (api))
- **Notes**: Delete Org MXEdge Cluster
- **Signature**: `DeleteOrgMxEdgeCluster(Guid orgId, Guid mxclusterId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgMxEdgeClusterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgMxEdgeCluster
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxclusters/{mxcluster_id}` (ApiHost (api))
- **Notes**: Get Org MxEdge Cluster Details
- **Signature**: `GetOrgMxEdgeCluster(Guid orgId, Guid mxclusterId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Mxcluster`
- **Error**: `SdkException<GetOrgMxEdgeClusterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgMxEdgeClusters
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxclusters` (ApiHost (api))
- **Notes**: Get List of Org MxEdge Clusters
- **Signature**: `ListOrgMxEdgeClusters(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Mxcluster>`
- **Error**: `SdkException<ListOrgMxEdgeClustersError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgMxEdgeCluster
- **HTTP**: `PUT /api/v1/orgs/{org_id}/mxclusters/{mxcluster_id}` (ApiHost (api))
- **Notes**: Update Org MxEdge Cluster
- **Signature**: `UpdateOrgMxEdgeCluster(Guid orgId, Guid mxclusterId, Mxcluster? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Mxcluster`
- **Error**: `SdkException<UpdateOrgMxEdgeClusterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
