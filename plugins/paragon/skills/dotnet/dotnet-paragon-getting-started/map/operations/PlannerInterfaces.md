# PlannerInterfaces — operations

Accessor: `client.PlannerInterfaces` · Source: `Api/PlannerInterfaces.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PlannerInterfaceDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/interfaces/{interfaceIndex}` (Default)
- **Notes**: Deletes a single interface from the specified offline network plan by interface index.
- **Signature**: `PlannerInterfaceDelete(Guid orgId, Guid topologyId, int interfaceIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InterfaceInterface`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlannerInterfacesBulkDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/interfaces/bulk` (Default)
- **Notes**: Deletes multiple interfaces from the specified offline network plan using the request schema.
- **Signature**: `PlannerInterfacesBulkDelete(Guid orgId, Guid topologyId, IReadOnlyList<InterfaceInterfaceListDelete>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlannerInterfacesPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/interfaces` (Default)
- **Notes**: Creates an interface in the specified offline network plan.
- **Signature**: `PlannerInterfacesPost(Guid orgId, Guid topologyId, InterfaceInterface? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<PlannerInterfacesPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TopologyInterfaceGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/interfaces/{interfaceIndex}` (Default)
- **Notes**: Returns details for a single interface.
- **Signature**: `TopologyInterfaceGet(Guid orgId, Guid topologyId, int interfaceIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InterfaceInterface`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyInterfacePut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/interfaces/{interfaceIndex}` (Default)
- **Notes**: Updates a single interface in the specified offline network plan by interface index.
- **Signature**: `TopologyInterfacePut(Guid orgId, Guid topologyId, int interfaceIndex, InterfaceInterface? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TopologyApiV1OrgsPlanningNetworkplanInterfacesInterfaceIndexResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyInterfacesBulkPatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/interfaces/bulk` (Default)
- **Notes**: Applies RFC6902 JSON Patch operations to multiple interfaces in the specified offline network plan using the request schema.
- **Signature**: `TopologyInterfacesBulkPatch(Guid orgId, Guid topologyId, IReadOnlyList<InterfaceInterfaceListPatch>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<InterfaceInterface>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyInterfacesGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/interfaces` (Default)
- **Notes**: Returns interfaces for the specified offline network plan.
- **Signature**: `TopologyInterfacesGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<InterfaceInterface>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
