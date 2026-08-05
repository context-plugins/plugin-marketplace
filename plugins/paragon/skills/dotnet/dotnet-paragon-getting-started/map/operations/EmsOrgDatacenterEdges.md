# EmsOrgDatacenterEdges — operations

Accessor: `client.EmsOrgDatacenterEdges` · Source: `Api/EmsOrgDatacenterEdges.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDatacenterEdge
- **HTTP**: `POST /api/v1/orgs/{org_id}/datacenter-edges` (Default)
- **Notes**: Create a datacenter edge. name is required. The server generates registration_code; the response includes is_registered and omits the secret.
- **Signature**: `CreateDatacenterEdge(string orgId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDatacenterEdges
- **HTTP**: `GET /api/v1/orgs/{org_id}/datacenter-edges` (Default)
- **Notes**: List datacenter (WAN) edge definitions in the org.
- **Signature**: `ListDatacenterEdges(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
