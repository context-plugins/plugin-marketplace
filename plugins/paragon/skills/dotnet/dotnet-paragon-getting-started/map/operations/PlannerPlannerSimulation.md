# PlannerPlannerSimulation — operations

Accessor: `client.PlannerPlannerSimulation` · Source: `Api/PlannerPlannerSimulation.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PlannerSimulationExhaustivePost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation/{sim_type}/exhaustive` (Default)
- **Notes**: Create an exhaustive failure simulation job.
- **Signature**: `PlannerSimulationExhaustivePost(Guid orgId, Guid topologyId, SimType simType, SimulationExhaustiveRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SimulationResponse`
- **Error**: `SdkException<PlannerSimulationExhaustivePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationReportsFileGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation/{request_id}/reports/{filename}` (Default)
- **Notes**: Get the content of a simulation report file.
- **Signature**: `PlannerSimulationReportsFileGet(Guid orgId, Guid topologyId, string requestId, string filename, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<PlannerSimulationReportsFileGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationReportsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation/{request_id}/reports` (Default)
- **Notes**: Get all the simulation reports for a request Id.
- **Signature**: `PlannerSimulationReportsGet(Guid orgId, Guid topologyId, string requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TopologyApiV1OrgsPlanningNetworkplanSimulationRequestIdReportsResponse>`
- **Error**: `SdkException<PlannerSimulationReportsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationStatusGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation/{request_id}/status` (Default)
- **Notes**: Get the status of a simulation job by request Id.
- **Signature**: `PlannerSimulationStatusGet(Guid orgId, Guid topologyId, string requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SimulationStatus`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationUpdatepathPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation/updatepath` (Default)
- **Notes**: Create update path simulation job.
- **Signature**: `PlannerSimulationUpdatepathPost(Guid orgId, Guid topologyId, SimulationUpdatepath? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SimulationResponse`
- **Error**: `SdkException<PlannerSimulationUpdatepathPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationWhatifPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation/{sim_type}/whatif` (Default)
- **Notes**: Create a whatif simulation job.
- **Signature**: `PlannerSimulationWhatifPost(Guid orgId, Guid topologyId, SimType simType, SimulationWhatifRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SimulationResponse`
- **Error**: `SdkException<PlannerSimulationWhatifPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation/{request_id}` (Default)
- **Notes**: Delete a simulation job by request Id from DB.
- **Signature**: `PlannerSimulationDelete(Guid orgId, Guid topologyId, string requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerSimulationDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation/{request_id}` (Default)
- **Notes**: Get the details of a simulation job by request id.
- **Signature**: `PlannerSimulationGet(Guid orgId, Guid topologyId, string requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SimulationResponse`
- **Error**: `SdkException<PlannerSimulationGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationsPurgeDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/simulation/purge` (Default)
- **Notes**: Delete all the simulation jobs which have passed a specified retention days.
- **Signature**: `PlannerSimulationsPurgeDelete(Guid orgId, PurgeJobsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PlannerSimulationsPurgeDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationsStatusAllGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/simstatus` (Default)
- **Notes**: Returns status of all the simulation jobs in an org
- **Signature**: `PlannerSimulationsStatusAllGet(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SimulationStatusAll>`
- **Error**: `SdkException<PlannerSimulationsStatusAllGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationsStatusGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation/status` (Default)
- **Notes**: Get the status of all the simulation jobs.
- **Signature**: `PlannerSimulationsStatusGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SimulationStatusAll>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlannerSimulationsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/simulation` (Default)
- **Notes**: Get details of all the simulation jobs.
- **Signature**: `PlannerSimulationsGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SimulationResponse>`
- **Error**: `SdkException<PlannerSimulationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
