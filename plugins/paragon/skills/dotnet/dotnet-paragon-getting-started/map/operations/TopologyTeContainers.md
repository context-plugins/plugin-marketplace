# TopologyTeContainers — operations

Accessor: `client.TopologyTeContainers` · Source: `Api/TopologyTeContainers.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyTeContainerDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers/{containerIndex}` (Default)
- **Notes**: Deletes a TE container.
- **Signature**: `TopologyTeContainerDelete(Guid orgId, int topologyId, int containerIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeContainerGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers/{containerIndex}` (Default)
- **Notes**: Returns a single TE container by its index.
- **Signature**: `TopologyTeContainerGet(Guid orgId, int topologyId, int containerIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TecontainerContainer`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeContainerPatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers/{containerIndex}` (Default)
- **Notes**: Patches an existing TE container using JSON Patch operations.
- **Signature**: `TopologyTeContainerPatch(Guid orgId, int topologyId, int containerIndex, IReadOnlyList<JsonPatchOperation> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TecontainerContainer`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeContainerPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers` (Default)
- **Notes**: Creates a new TE container.
- **Signature**: `TopologyTeContainerPost(Guid orgId, int topologyId, int? page, int? perPage, string? q, TecontainerCreateContainer body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `q` ← `q`
- **Returns**: `TecontainerContainer`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### TopologyTeContainerPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers/{containerIndex}` (Default)
- **Notes**: Updates an existing TE container.
- **Signature**: `TopologyTeContainerPut(Guid orgId, int topologyId, int containerIndex, TecontainerUpdateContainer body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TecontainerContainer`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeContainersBulkDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers/bulk` (Default)
- **Notes**: Deletes multiple TE containers in bulk.
- **Signature**: `TopologyTeContainersBulkDelete(Guid orgId, int topologyId, IReadOnlyList<LspContainersContainerReferenceIndex> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeContainersBulkPatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers/bulk` (Default)
- **Notes**: Patches multiple TE containers in bulk using JSON Patch operations.
- **Signature**: `TopologyTeContainersBulkPatch(Guid orgId, int topologyId, IReadOnlyList<TecontainerContainerListPatch> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TecontainerContainer>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeContainersBulkPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers/bulk` (Default)
- **Notes**: Creates multiple TE containers in bulk.
- **Signature**: `TopologyTeContainersBulkPost(Guid orgId, int topologyId, IReadOnlyList<TecontainerCreateContainer> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TecontainerContainer>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeContainersBulkPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers/bulk` (Default)
- **Notes**: Updates multiple TE containers in bulk.
- **Signature**: `TopologyTeContainersBulkPut(Guid orgId, int topologyId, IReadOnlyList<TecontainerUpdateContainer> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TecontainerContainer>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeContainersGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/te-containers` (Default)
- **Notes**: Returns a list of TE containers with pagination info in the headers.
- **Signature**: `TopologyTeContainersGet(Guid orgId, int topologyId, int? page, int? perPage, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `q` ← `q`
- **Returns**: `IReadOnlyList<TecontainerContainer>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
