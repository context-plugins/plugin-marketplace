# PlannerNodes — operations

Accessor: `client.PlannerNodes` · Source: `Api/PlannerNodes.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyNodeDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/nodes/{nodeIndex}` (Default)
- **Notes**: Deletes a single node from the specified offline network plan.
- **Signature**: `TopologyNodeDelete(Guid orgId, Guid topologyId, int nodeIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodeGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/nodes/{nodeIndex}` (Default)
- **Notes**: Returns details for a single node in the specified offline network plan.
- **Signature**: `TopologyNodeGet(Guid orgId, Guid topologyId, int nodeIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NodeNode`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodePut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/nodes/{nodeIndex}` (Default)
- **Notes**: Updates a single node in the specified offline network plan using the request schema.
- **Signature**: `TopologyNodePut(Guid orgId, Guid topologyId, int nodeIndex, NodeUpdateNode? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NodeNode`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesBulkDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/nodes/bulk` (Default)
- **Notes**: Delete multiple nodes using the provided schema.
- **Signature**: `TopologyNodesBulkDelete(Guid orgId, Guid topologyId, IReadOnlyList<NodeNodeReference>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesBulkPatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/nodes/bulk` (Default)
- **Notes**: Applies RFC6902 JSON Patch operations to multiple nodes using the request schema.
- **Signature**: `TopologyNodesBulkPatch(Guid orgId, Guid topologyId, IReadOnlyList<NodeNodeListPatch>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<NodeNode>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesBulkPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/nodes/bulk` (Default)
- **Notes**: Creates multiple nodes in the specified offline network plan using the provided request schema.
- **Signature**: `TopologyNodesBulkPost(Guid orgId, Guid topologyId, IReadOnlyList<NodeCreateNode>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<NodeNode>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesBulkPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/nodes/bulk` (Default)
- **Notes**: Update multiple nodes using the provided schema.
- **Signature**: `TopologyNodesBulkPut(Guid orgId, Guid topologyId, IReadOnlyList<NodeUpdateNode>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<NodeNode>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/nodes` (Default)
- **Notes**: Returns the list of nodes for the specified offline network plan.
- **Signature**: `TopologyNodesGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<NodeNode>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/nodes` (Default)
- **Notes**: Creates a single node in the specified offline network plan.
- **Signature**: `TopologyNodesPost(Guid orgId, Guid topologyId, NodeCreateNode? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NodeNode`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
