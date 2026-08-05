# TopologyLinks — operations

Accessor: `client.TopologyLinks` · Source: `Api/TopologyLinks.cs` · 16 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyLinkDelete2
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}` (Default)
- **Notes**: Deletes a link. Live links reappear on the next update from the Topology server.
- **Signature**: `TopologyLinkDelete2(Guid orgId, int topologyId, int linkIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkForceDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/links/force/{linkIndex}` (Default)
- **Notes**: Force delete a link regardless of live state.
- **Signature**: `TopologyLinkForceDelete(Guid orgId, int topologyId, int linkIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}` (Default)
- **Notes**: Returns the details for a link.
- **Signature**: `TopologyLinkGet2(Guid orgId, int topologyId, int linkIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkGetBgpLs
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}/bgp-ls` (Default)
- **Notes**: Get the live/BGP-LS version of a link.
- **Signature**: `TopologyLinkGetBgpLs(Guid orgId, int topologyId, int linkIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkGetDevice
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}/device` (Default)
- **Notes**: Get the device/configured version of a link.
- **Signature**: `TopologyLinkGetDevice(Guid orgId, int topologyId, int linkIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkGetUser
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}/user` (Default)
- **Notes**: Get the user/persisted version of a link.
- **Signature**: `TopologyLinkGetUser(Guid orgId, int topologyId, int linkIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkPatch2
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}` (Default)
- **Notes**: Updates a link using a RFC6902 patch:
- **Signature**: `TopologyLinkPatch2(Guid orgId, int topologyId, int linkIndex, IReadOnlyList<JsonPatchOperation>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}` (Default)
- **Notes**: Creates a link using the supplied linkIndex path value and the create link request body.
- **Signature**: `TopologyLinkPost(Guid orgId, int topologyId, int linkIndex, LinkCreateLink? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkPut2
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}` (Default)
- **Notes**: Updates a planned link using the optional and required parameters defined in the following schema:
- **Signature**: `TopologyLinkPut2(Guid orgId, int topologyId, int linkIndex, LinkUpdateLink? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkPutDevice
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}/device` (Default)
- **Notes**: Update the device/configured version of a link.
- **Signature**: `TopologyLinkPutDevice(Guid orgId, int topologyId, int linkIndex, LinkUpdateConfigLink? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinkPutUser
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/links/{linkIndex}/user` (Default)
- **Notes**: Update the user/persisted version of a link.
- **Signature**: `TopologyLinkPutUser(Guid orgId, int topologyId, int linkIndex, LinkUpdateLink? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinksBulkDelete2
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/links/bulk` (Default)
- **Notes**: Delete multiple links using the provided schema.
- **Signature**: `TopologyLinksBulkDelete2(Guid orgId, int topologyId, IReadOnlyList<LinkLinkReference>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinksSearchGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/links/search` (Default)
- **Notes**: Searches the link list based on URI parameters. For example, search?name=62.101.105 must return one Link.
- **Signature**: `TopologyLinksSearchGet(Guid orgId, int topologyId, string? name, string? address, string? queryType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `address` — nullable, no default → **must pass explicitly**
  - `queryType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `address` ← `address`, `queryType` ← `queryType`
- **Returns**: `IReadOnlyList<LinkLink1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinksUtilizationGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/links/utilization` (Default)
- **Notes**: Returns a list of links only containing the endA/endZ utilization
- **Signature**: `TopologyLinksUtilizationGet2(Guid orgId, int topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LinkLink1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyLinksGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/links` (Default)
- **Notes**: Returns a list of links up to 1000 records with pagination info in the headers.
- **Signature**: `TopologyLinksGet2(Guid orgId, int topologyId, int? page, int? perPage, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `q` ← `q`
- **Returns**: `IReadOnlyList<LinkLink1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### TopologyLinksPost2
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/links` (Default)
- **Notes**: Creates a link using optional and required parameters defined in the following schema:
- **Signature**: `TopologyLinksPost2(Guid orgId, int topologyId, LinkCreateLink? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LinkLink1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
