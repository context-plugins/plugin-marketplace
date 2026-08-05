# PlannerTeLsps — operations

Accessor: `client.PlannerTeLsps` · Source: `Api/PlannerTeLsps.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyTeLspDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps/{lspIndex}` (Default)
- **Notes**: Deletes a TE-LSP.
- **Signature**: `TopologyTeLspDelete(Guid orgId, Guid topologyId, int lspIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps/{lspIndex}` (Default)
- **Notes**: Returns the details for a TE-LSP.
- **Signature**: `TopologyTeLspGet(Guid orgId, Guid topologyId, int lspIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LspLsp`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspPatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps/{lspIndex}` (Default)
- **Notes**: Updates a TE-LSP using a RFC6902 patch:
- **Signature**: `TopologyTeLspPatch(Guid orgId, Guid topologyId, int lspIndex, IReadOnlyList<JsonPostOperation>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LspLsp`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps/{lspIndex}` (Default)
- **Notes**: Updates a TE-LSP using the JSON schema:
- **Signature**: `TopologyTeLspPut(Guid orgId, Guid topologyId, int lspIndex, LspUpdateLsp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LspLsp`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsBulkDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps/bulk` (Default)
- **Notes**: Deletes a list of TE-LSPs
- **Signature**: `TopologyTeLspsBulkDelete(Guid orgId, Guid topologyId, IReadOnlyList<LspLspReferenceIndex>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsBulkPatch
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps/bulk` (Default)
- **Notes**: Updates several TE-LSPs using the following JSON schema:
- **Signature**: `TopologyTeLspsBulkPatch(Guid orgId, Guid topologyId, IReadOnlyList<LspLspListPatch>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LspLsp>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsBulkPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps/bulk` (Default)
- **Notes**: Creates several TE-LSPs using the following JSON schema:
- **Signature**: `TopologyTeLspsBulkPost(Guid orgId, Guid topologyId, IReadOnlyList<LspCreateLsp>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LspLsp>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsBulkPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps/bulk` (Default)
- **Notes**: Updates several TE-LSPs using the following JSON schema:
- **Signature**: `TopologyTeLspsBulkPut(Guid orgId, Guid topologyId, IReadOnlyList<LspLsp>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LspLsp>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps` (Default)
- **Notes**: Returns a list of lsps
- **Signature**: `TopologyTeLspsGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LspLsp>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/te-lsps` (Default)
- **Notes**: Creates a TE-LSP using the following JSON schema:
- **Signature**: `TopologyTeLspsPost(Guid orgId, Guid topologyId, LspCreateLsp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LspLsp`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
