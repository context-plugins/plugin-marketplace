# TopologyPathComputation — operations

Accessor: `client.TopologyPathComputation` · Source: `Api/TopologyPathComputation.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyPathComputationPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/pathComputation` (Default)
- **Notes**: Request Path Computation using optional and required parameters defined in the following schema:
- **Signature**: `TopologyPathComputationPost(Guid orgId, int topologyId, PathComputationRequests? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PathComputationResponses`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
