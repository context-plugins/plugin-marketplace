# TopologyTeLsps — operations

Accessor: `client.TopologyTeLsps` · Source: `Api/TopologyTeLsps.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyTeLspHistoryGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/{lspIndex}/history` (Default)
- **Notes**: Provide the history of action for the TE-LSP, it can be optionally filtered by start (inclusive) and end (exclusive) timestamp
- **Signature**: `TopologyTeLspHistoryGet(Guid orgId, int topologyId, int lspIndex, string startTimeStamp, string endTimeStamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startTimeStamp` ← `startTimeStamp`, `endTimeStamp` ← `endTimeStamp`
- **Returns**: `IReadOnlyList<LsphistoryserviceLspHistoryEvent>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspDelete2
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/{lspIndex}` (Default)
- **Notes**: Deletes a TE-LSP. This function is supported only on the PCE-initiated LSPs. PCC-controlled and PCC-delegated LSPs cannot be deleted from Paragon PathFinder. They must be deleted in the node.
- **Signature**: `TopologyTeLspDelete2(Guid orgId, int topologyId, int lspIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/{lspIndex}` (Default)
- **Notes**: Returns the details for a TE-LSP.
- **Signature**: `TopologyTeLspGet2(Guid orgId, int topologyId, int lspIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LspLsp1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspPatch2
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/{lspIndex}` (Default)
- **Notes**: Updates a TE-LSP using a RFC6902 patch:
- **Signature**: `TopologyTeLspPatch2(Guid orgId, int topologyId, int lspIndex, IReadOnlyList<JsonPatchOperation>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LspLsp1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspPut2
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/{lspIndex}` (Default)
- **Notes**: Updates a TE-LSP using the JSON schema:
- **Signature**: `TopologyTeLspPut2(Guid orgId, int topologyId, int lspIndex, LspUpdateLsp2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LspLsp1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsBulkDelete2
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/bulk` (Default)
- **Notes**: Deletes a list of TE-LSPs. This function is supported only on the PCE-initiated LSPs. PCC-controlled and PCC-delegated LSPs cannot be deleted from Paragon PathFinder. They must be deleted in the node.b The payload must conform to
- **Signature**: `TopologyTeLspsBulkDelete2(Guid orgId, int topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsBulkPatch2
- **HTTP**: `PATCH /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/bulk` (Default)
- **Notes**: Updates several TE-LSPs using the following JSON schema:
- **Signature**: `TopologyTeLspsBulkPatch2(Guid orgId, int topologyId, IReadOnlyList<LspLspListPatch1>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LspLsp1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsBulkPost2
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/bulk` (Default)
- **Notes**: Creates several TE-LSPs using the following JSON schema:
- **Signature**: `TopologyTeLspsBulkPost2(Guid orgId, int topologyId, IReadOnlyList<LspCreateLsp2>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LspLsp1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsBulkPut2
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/bulk` (Default)
- **Notes**: Updates several TE-LSPs using the following JSON schema:
- **Signature**: `TopologyTeLspsBulkPut2(Guid orgId, int topologyId, IReadOnlyList<LspLsp1>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LspLsp1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsSearchGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/search` (Default)
- **Notes**: Performs a search in the LSP list based on the URI parameters. For example, "search?name=62.101.105" returns one link.
- **Signature**: `TopologyTeLspsSearchGet(Guid orgId, int topologyId, string? name, string? from, string? operStatus, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `from` — nullable, no default → **must pass explicitly**
  - `operStatus` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `from` ← `from`, `operStatus` ← `operStatus`
- **Returns**: `IReadOnlyList<LspLsp1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsForceDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps/force` (Default)
- **Notes**: Force delete TE-LSP(s) regardless of state.
- **Signature**: `TopologyTeLspsForceDelete(Guid orgId, int topologyId, DefineTheResponseContainingAListOfLogObjects? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyTeLspsGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps` (Default)
- **Notes**: Returns a list of interfaces up to 1000 records with pagination info in the headers.
- **Signature**: `TopologyTeLspsGet2(Guid orgId, int topologyId, int? page, int? perPage, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `q` ← `q`
- **Returns**: `IReadOnlyList<LspLsp1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### TopologyTeLspsPost2
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/te-lsps` (Default)
- **Notes**: Creates a TE-LSP using the following JSON schema:
- **Signature**: `TopologyTeLspsPost2(Guid orgId, int topologyId, int? page, int? perPage, string? q, LspCreateLsp2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `q` ← `q`
- **Returns**: `LspLsp1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
