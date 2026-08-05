# PlannerPlannerTrafficstats — operations

Accessor: `client.PlannerPlannerTrafficstats` · Source: `Api/PlannerPlannerTrafficstats.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PlannerTopologyGenerateDemandPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/generatedemands` (Default)
- **Notes**: Generate demands from historical tunnel traffic stats data(only tunnelte fils is supported)
- **Signature**: `PlannerTopologyGenerateDemandPost(Guid orgId, Guid topologyId, GenDemandsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerTopologyGenerateDemandPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyImportTrafficStatsPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/importstats` (Default)
- **Notes**: Import traffic stats from live topology
- **Signature**: `PlannerTopologyImportTrafficStatsPost(Guid orgId, Guid topologyId, ImportTrafficStats? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ImportTrafficstatsResponse`
- **Error**: `SdkException<PlannerTopologyImportTrafficStatsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyLinkUtilizationLoadPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/linkutilization/load` (Default)
- **Notes**: Load link utilization data from imported traffic stats file(only interface file is supported)
- **Signature**: `PlannerTopologyLinkUtilizationLoadPost(Guid orgId, Guid topologyId, LinkutilizationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerTopologyLinkUtilizationLoadPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyOndemandLinkUtilPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/linkutilization/ondemand` (Default)
- **Notes**: Return links with updated link utilization calculated from historical stats data
- **Signature**: `PlannerTopologyOndemandLinkUtilPost(Guid orgId, Guid topologyId, OndemandLinkutilRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TopologyApiV1OrgsPlanningNetworkplanLinkutilizationOndemandResponse>`
- **Error**: `SdkException<PlannerTopologyOndemandLinkUtilPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyTrafficStatsUploadPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/trafficstats/upload` (Default)
- **Notes**: Upload interface and/or tunnel-TE traffic statistics for a planner topology in a single request. Supports optional gzip-compressed body via Content-Encoding header.
- **Signature**: `PlannerTopologyTrafficStatsUploadPost(Guid orgId, Guid topologyId, ContentEncoding? contentEncoding, TopologyApiV1OrgsPlanningNetworkplanTrafficstatsUploadRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `contentEncoding` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TopologyApiV1OrgsPlanningNetworkplanTrafficstatsUploadResponse`
- **Error**: `SdkException<PlannerTopologyTrafficStatsUploadPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTrafficstatsListDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/trafficstats` (Default)
- **Notes**: Delete all the traffic stats files for an offline topology
- **Signature**: `PlannerTrafficstatsListDelete(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerTrafficstatsListDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTrafficstatsListGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/trafficstats` (Default)
- **Notes**: Returns a list of traffic stats files that are already imported.
- **Signature**: `PlannerTrafficstatsListGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Trafficstats>`
- **Error**: `SdkException<PlannerTrafficstatsListGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTrafficstatsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/trafficstats/{filename}` (Default)
- **Notes**: Get the content of a traffic stats file
- **Signature**: `PlannerTrafficstatsGet(Guid orgId, Guid topologyId, string filename, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TopologyApiV1OrgsPlanningNetworkplanTrafficstatsFilenameResponse`
- **Error**: `SdkException<PlannerTrafficstatsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTrafficstatsBulkDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/trafficstats/bulk` (Default)
- **Notes**: Delete multiple traffic stats files
- **Signature**: `PlannerTrafficstatsBulkDelete(Guid orgId, Guid topologyId, TrafficstatsBulkDelete? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerTrafficstatsBulkDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTrafficstatsFileDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/trafficstats/{filename}` (Default)
- **Notes**: Delete the traffic stats file
- **Signature**: `PlannerTrafficstatsFileDelete(Guid orgId, Guid topologyId, string filename, TrafficstatsFileDelete? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerTrafficstatsFileDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
