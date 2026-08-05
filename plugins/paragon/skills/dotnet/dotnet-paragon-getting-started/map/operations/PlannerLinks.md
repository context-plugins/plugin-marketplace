# PlannerLinks — operations

Accessor: `client.PlannerLinks` · Source: `Api/PlannerLinks.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyLinkDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/links/{linkIndex}` (Default)
- **Notes**: Deletes a single link from the specified offline network plan.
- **Signature**: `TopologyLinkDelete(Guid orgId, Guid topologyId, int linkIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/links/{linkIndex}` (Default)
- **Notes**: Returns details for a single link in the specified offline network plan.
- **Signature**: `TopologyLinkGet(Guid orgId, Guid topologyId, int linkIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkPatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/links/{linkIndex}` (Default)
- **Notes**: Updates a single link in the specified offline network plan using RFC6902 JSON Patch operations.
- **Signature**: `TopologyLinkPatch(Guid orgId, Guid topologyId, int linkIndex, IReadOnlyList<JsonPostOperation>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/links/{linkIndex}` (Default)
- **Notes**: Updates a single link in the specified offline network plan using the request schema.
- **Signature**: `TopologyLinkPut(Guid orgId, Guid topologyId, int linkIndex, LinkUpdateLink? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinksBulkDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/links/bulk` (Default)
- **Notes**: Delete multiple links using the provided schema.
- **Signature**: `TopologyLinksBulkDelete(Guid orgId, Guid topologyId, IReadOnlyList<LinkLink>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinksUtilizationGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/links/utilization` (Default)
- **Notes**: Returns link utilization for all links in the specified offline network plan (endA and endZ utilization only).
- **Signature**: `TopologyLinksUtilizationGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TopologyApiV1OrgsPlanningNetworkplanLinksUtilizationResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinksGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/links` (Default)
- **Notes**: Returns a list of links for the specified offline network plan.
- **Signature**: `TopologyLinksGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LinkLink>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinksPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/links` (Default)
- **Notes**: Creates a single link in the specified offline network plan using the request schema.
- **Signature**: `TopologyLinksPost(Guid orgId, Guid topologyId, LinkCreateLink? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
