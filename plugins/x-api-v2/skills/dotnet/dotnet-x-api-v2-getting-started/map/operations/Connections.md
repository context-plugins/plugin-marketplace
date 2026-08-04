# Connections — operations

Accessor: `client.Connections` · Source: `Api/Connections.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteAllConnections
- **HTTP**: `DELETE /2/connections/all` (Default (api))
- **Notes**: Terminates all active streaming connections for the authenticated application.
- **Signature**: `DeleteAllConnections(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteAllConnectionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConnectionsByEndpoint
- **HTTP**: `DELETE /2/connections/{endpoint_id}` (Default (api))
- **Notes**: Terminates all streaming connections for a specific endpoint ID for the authenticated application.
- **Signature**: `DeleteConnectionsByEndpoint(EndpointId endpointId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteConnectionsByEndpointResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConnectionsByUuids
- **HTTP**: `DELETE /2/connections` (Default (api))
- **Notes**: Terminates multiple streaming connections by their UUIDs for the authenticated application.
- **Signature**: `DeleteConnectionsByUuids(DeleteConnectionsByUuidsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteConnectionsByUuidsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetConnectionHistory
- **HTTP**: `GET /2/connections` (Default (api))
- **Notes**: Returns active and historical streaming connections with disconnect reasons for the authenticated application.
- **Signature**: `GetConnectionHistory(Status1? status, IReadOnlyList<Endpoint>? endpoints, string? paginationToken, IReadOnlyList<ConnectionField>? connectionFields, int? maxResults = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`status` … `connectionFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `endpoints` ← `endpoints`, `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `connection.fields` ← `connectionFields`
- **Returns**: `GetConnectionHistoryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
