# TopologyInterfaces — operations

Accessor: `client.TopologyInterfaces` · Source: `Api/TopologyInterfaces.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyInterfaceGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/interfaces/{interfaceIndex}` (Default)
- **Notes**: Returns the details for a interface.
- **Signature**: `TopologyInterfaceGet2(Guid orgId, int topologyId, int interfaceIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InterfaceInterface1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyInterfacePut2
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/interfaces/{interfaceIndex}` (Default)
- **Notes**: Update interface details by index.
- **Signature**: `TopologyInterfacePut2(Guid orgId, int topologyId, int interfaceIndex, InterfaceUpdateConfigInterface1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyInterfacesBulkPatch2
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/{topology_id}/interfaces/bulk` (Default)
- **Notes**: Updates several interfaces using the following JSON schema:
- **Signature**: `TopologyInterfacesBulkPatch2(Guid orgId, int topologyId, IReadOnlyList<InterfaceInterfaceListPatch1>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<InterfaceInterface1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyInterfacesGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/interfaces` (Default)
- **Notes**: Returns a list of interfaces up to 1000 records with pagination info in the headers.
- **Signature**: `TopologyInterfacesGet2(Guid orgId, int topologyId, int? page, int? perPage, string? q, string? filter, string? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`page` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `q` ← `q`, `filter` ← `filter`, `sort` ← `sort`
- **Returns**: `IReadOnlyList<InterfaceInterface1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
