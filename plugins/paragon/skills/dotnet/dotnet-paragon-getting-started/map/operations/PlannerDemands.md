# PlannerDemands — operations

Accessor: `client.PlannerDemands` · Source: `Api/PlannerDemands.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyDemandDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands/{demandIndex}` (Default)
- **Notes**: Deletes a Demand.
- **Signature**: `TopologyDemandDelete(Guid orgId, Guid topologyId, int demandIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDemandGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands/{demandIndex}` (Default)
- **Notes**: Returns the details for a Demand.
- **Signature**: `TopologyDemandGet(Guid orgId, Guid topologyId, int demandIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DemandDemand`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDemandPatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands/{demandIndex}` (Default)
- **Notes**: Updates a Demand using a RFC6902 patch:
- **Signature**: `TopologyDemandPatch(Guid orgId, Guid topologyId, int demandIndex, IReadOnlyList<JsonPostOperation>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DemandDemand`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDemandPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands/{demandIndex}` (Default)
- **Notes**: Updates a Demand using the JSON schema:
- **Signature**: `TopologyDemandPut(Guid orgId, Guid topologyId, int demandIndex, DemandUpdateDemand? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DemandDemand`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDemandsBulkDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands/bulk` (Default)
- **Notes**: Deletes a list of Demands
- **Signature**: `TopologyDemandsBulkDelete(Guid orgId, Guid topologyId, IReadOnlyList<DemandDemandReferenceIndex>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDemandsBulkPatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands/bulk` (Default)
- **Notes**: Updates several Demands using the following JSON schema:
- **Signature**: `TopologyDemandsBulkPatch(Guid orgId, Guid topologyId, IReadOnlyList<DemandDemandListPatch>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DemandDemand>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDemandsBulkPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands/bulk` (Default)
- **Notes**: Creates several Demands using the following JSON schema:
- **Signature**: `TopologyDemandsBulkPost(Guid orgId, Guid topologyId, IReadOnlyList<DemandCreateDemand>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DemandDemand>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDemandsBulkPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands/bulk` (Default)
- **Notes**: Updates several Demands using the following JSON schema:
- **Signature**: `TopologyDemandsBulkPut(Guid orgId, Guid topologyId, IReadOnlyList<DemandUpdateDemand>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DemandDemand>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDemandsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands` (Default)
- **Notes**: Returns a list of demands
- **Signature**: `TopologyDemandsGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DemandDemand>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDemandsPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/demands` (Default)
- **Notes**: Creates a Demand using the following JSON schema:
- **Signature**: `TopologyDemandsPost(Guid orgId, Guid topologyId, DemandCreateDemand? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DemandDemand`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
