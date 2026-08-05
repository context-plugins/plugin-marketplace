# PlannerPlannerTopology — operations

Accessor: `client.PlannerPlannerTopology` · Source: `Api/PlannerPlannerTopology.cs` · 19 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PlannerTopologiesGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan` (Default)
- **Notes**: Returns a list of the offline topologies that are available.
- **Signature**: `PlannerTopologiesGet(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TopologyTopologySummary>`
- **Error**: `SdkException<PlannerTopologiesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyClosePost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/close` (Default)
- **Notes**: Close the session and remove the data from draft database and store it in GIT.
- **Signature**: `PlannerTopologyClosePost(Guid orgId, Guid topologyId, TopologyApiV1OrgsPlanningNetworkplanCloseRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GitSuccessResponse`
- **Error**: `SdkException<PlannerTopologyClosePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyImportlivePost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/importlive` (Default)
- **Notes**: Import a copy of live topology as an offline topology.
- **Signature**: `PlannerTopologyImportlivePost(Guid orgId, ImportLiveRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<PlannerTopologyImportlivePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyLoadPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/load` (Default)
- **Notes**: Load the offline topology data to draft database from GIT. This will remove the current topology data before loading the new data.
- **Signature**: `PlannerTopologyLoadPost(Guid orgId, Guid topologyId, LoadRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerTopologyLoadPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyReloadPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/reload` (Default)
- **Notes**: Load the last saved data back to draft database from GIT before the network can be shown in the UI for further processing. This API should be used after /close API
- **Signature**: `PlannerTopologyReloadPost(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<PlannerTopologyReloadPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologySavePost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/save` (Default)
- **Notes**: Save the offline topology data to GIT
- **Signature**: `PlannerTopologySavePost(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GitSuccessResponse`
- **Error**: `SdkException<PlannerTopologySavePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyUploadDonePost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/upload/{upload_id}/done` (Default)
- **Notes**: Mark upload as completed, sent after last chunk of payload.
- **Signature**: `PlannerTopologyUploadDonePost(Guid orgId, Guid uploadId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UploadSuccessResponse`
- **Error**: `SdkException<PlannerTopologyUploadDonePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyUploadIdDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/upload/{upload_id}` (Default)
- **Notes**: Delete uploaded data for an upload Id before if any error during uplad process. This is an option to delete any unusable uploaded data.
- **Signature**: `PlannerTopologyUploadIdDelete(Guid orgId, Guid uploadId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyUploadIdPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/upload/{upload_id}` (Default)
- **Notes**: Upload offline topology data in chunks for an upload Id.
- **Signature**: `PlannerTopologyUploadIdPut(Guid orgId, Guid uploadId, TopologyApiV1OrgsPlanningNetworkplanUploadRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerTopologyUploadIdPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyUploadPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/upload` (Default)
- **Notes**: Start an upload to get upload Id, which should be used further while sending data payload in chunks.
- **Signature**: `PlannerTopologyUploadPost(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TopologyApiV1OrgsPlanningNetworkplanUploadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}` (Default)
- **Notes**: Delete the offline topology
- **Signature**: `PlannerTopologyDelete(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerTopologyDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}` (Default)
- **Notes**: Returns the details of a specific offline topology
- **Signature**: `PlannerTopologyGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TopologyTopology`
- **Error**: `SdkException<PlannerTopologyGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan` (Default)
- **Notes**: Create an offline topology with or without any network data
- **Signature**: `PlannerTopologyPost(Guid orgId, TopologyTopology? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<PlannerTopologyPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerTopologyPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}` (Default)
- **Notes**: Modify the offline topology to add the network data
- **Signature**: `PlannerTopologyPut(Guid orgId, Guid topologyId, TopologyTopology? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<PlannerTopologyPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerMapviewDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/plannermapview/{mapview_id}` (Default)
- **Notes**: Delete a mapview topology Id &amp; mapview index.
- **Signature**: `PlannerMapviewDelete(Guid orgId, Guid topologyId, Guid mapviewId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerMapviewDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerMapviewGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/plannermapview/{mapview_id}` (Default)
- **Notes**: Returns the details of a mapview
- **Signature**: `PlannerMapviewGet(Guid orgId, Guid topologyId, Guid mapviewId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TopologyApiV1OrgsPlanningNetworkplanPlannermapviewMapviewIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlannerMapviewPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/plannermapview/{mapview_id}` (Default)
- **Notes**: Update mapview by index.
- **Signature**: `PlannerMapviewPut(Guid orgId, Guid topologyId, Guid mapviewId, TopologyApiV1OrgsPlanningNetworkplanPlannermapviewMapviewIdRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlannerMapviewsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/plannermapview` (Default)
- **Notes**: Returns a list of topology mapviews
- **Signature**: `PlannerMapviewsGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TopologyApiV1OrgsPlanningNetworkplanPlannermapviewResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlannerMapviewsPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/plannermapview` (Default)
- **Notes**: Add a planner topology mapview
- **Signature**: `PlannerMapviewsPost(Guid orgId, Guid topologyId, TopologyApiV1OrgsPlanningNetworkplanPlannermapviewRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TopologyApiV1OrgsPlanningNetworkplanPlannermapviewResponse`
- **Error**: `SdkException<PlannerMapviewsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
