# RoutingobservabilityFilters — operations

Accessor: `client.RoutingobservabilityFilters` · Source: `Api/RoutingobservabilityFilters.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteFilters
- **HTTP**: `DELETE /routingbot/api/v1/orgs/{org_id}/filters` (Default)
- **Signature**: `DeleteFilters(string orgId, Payload payload, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFilters
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/filters` (Default)
- **Signature**: `GetFilters(string orgId, string tableProp, string username = "admin", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `username` = "admin", `requestOptions` = null
- **Query params (wire ← C#)**: `username` ← `username`, `table_prop` ← `tableProp`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostFilters
- **HTTP**: `POST /routingbot/api/v1/orgs/{org_id}/filters` (Default)
- **Signature**: `PostFilters(string orgId, string tableProp, string filter, string username = "admin", int? recordId = -1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `username` = "admin", `recordId` = -1, `requestOptions` = null
- **Query params (wire ← C#)**: `username` ← `username`, `table_prop` ← `tableProp`, `filter` ← `filter`, `record_id` ← `recordId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
