# TopologyTopologyApi — operations

Accessor: `client.TopologyTopologyApi` · Source: `Api/TopologyTopologyApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologiesGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}` (Default)
- **Notes**: Returns a list of the topologies that are available.
- **Signature**: `TopologiesGet(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TopologyTopologySummary1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyOrgGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/org` (Default)
- **Notes**: Returns the organization associated with the topology.
- **Signature**: `TopologyOrgGet(Guid orgId, int topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TopologyApiV1OrgsOrgResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologySyncPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/sync` (Default)
- **Notes**: Requests topology synchronization.
- **Signature**: `TopologySyncPost(Guid orgId, int topologyId, TopologyApiV1OrgsSyncRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TopologyApiV1OrgsSyncResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}` (Default)
- **Notes**: Deletes all of the topology planned data. The information acquired through BGP-LS reappears immediately.
- **Signature**: `TopologyDelete(Guid orgId, int topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}` (Default)
- **Notes**: Lists topological elements
- **Signature**: `TopologyGet(Guid orgId, int topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TopologyTopology1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
