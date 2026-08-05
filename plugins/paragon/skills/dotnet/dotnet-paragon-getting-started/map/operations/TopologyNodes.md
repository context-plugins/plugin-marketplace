# TopologyNodes — operations

Accessor: `client.TopologyNodes` · Source: `Api/TopologyNodes.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyNodeDelete2
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/{nodeIndex}` (Default)
- **Notes**: Deletes a node. (You cannot delete a live node; it reappears on the next update from Topology server.)
- **Signature**: `TopologyNodeDelete2(Guid orgId, int topologyId, int nodeIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodeForceDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/force/{nodeIndex}` (Default)
- **Notes**: Force-deletes a node regardless of its operational state. Unlike a regular delete, this removes the node even if it is live.
- **Signature**: `TopologyNodeForceDelete(Guid orgId, int topologyId, int nodeIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodeGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/{nodeIndex}` (Default)
- **Notes**: Returns details for a node.
- **Signature**: `TopologyNodeGet2(Guid orgId, int topologyId, int nodeIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Node`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodePatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/{nodeIndex}` (Default)
- **Notes**: Updates a node using a RFC6902 patch:
- **Signature**: `TopologyNodePatch(Guid orgId, int topologyId, int nodeIndex, IReadOnlyList<JsonPatchOperation>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Node`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodePut2
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/{nodeIndex}` (Default)
- **Notes**: Updates a node using the following schema:
- **Signature**: `TopologyNodePut2(Guid orgId, int topologyId, int nodeIndex, NodeUpdateNode1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Node`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesBulkDelete2
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/bulk` (Default)
- **Notes**: Delete multiple nodes using the provided schema.
- **Signature**: `TopologyNodesBulkDelete2(Guid orgId, int topologyId, IReadOnlyList<NodeNodeReference>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesBulkPatch2
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/bulk` (Default)
- **Notes**: Updates several Nodes using the following JSON schema:
- **Signature**: `TopologyNodesBulkPatch2(Guid orgId, int topologyId, IReadOnlyList<NodeNodeListPatch1>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Node>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesBulkPost2
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/bulk` (Default)
- **Notes**: Create multiple nodes using the provided schema.
- **Signature**: `TopologyNodesBulkPost2(Guid orgId, int topologyId, IReadOnlyList<NodeCreateNode1>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Node>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesBulkPut2
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/bulk` (Default)
- **Notes**: Update multiple nodes using the provided schema.
- **Signature**: `TopologyNodesBulkPut2(Guid orgId, int topologyId, IReadOnlyList<NodeUpdateNode1>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Node>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesSearchGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/search` (Default)
- **Notes**: Searches the list of nodes for specific URI parameters. For example, search?hostname=vmx101 must return one node.
- **Signature**: `TopologyNodesSearchGet(Guid orgId, int topologyId, string? hostname, string? @as, string? queryType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `hostname` — nullable, no default → **must pass explicitly**
  - `@as` — nullable, no default → **must pass explicitly**
  - `queryType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `hostname` ← `hostname`, `queryType` ← `queryType`
- **Returns**: `IReadOnlyList<Node>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesCollectionPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/nodes/collection` (Default)
- **Notes**: Trigger a manual device collection for the topology
- **Signature**: `TopologyNodesCollectionPost(Guid orgId, int topologyId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyNodesGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/nodes` (Default)
- **Notes**: Returns a list of nodes up to 1000 records with pagination info in the headers.
- **Signature**: `TopologyNodesGet2(Guid orgId, int topologyId, int? page, int? perPage, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `q` ← `q`
- **Returns**: `IReadOnlyList<Node>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### TopologyNodesPost2
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/nodes` (Default)
- **Notes**: Create a new node (single).
- **Signature**: `TopologyNodesPost2(Guid orgId, int topologyId, NodeCreateNode1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Node`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
