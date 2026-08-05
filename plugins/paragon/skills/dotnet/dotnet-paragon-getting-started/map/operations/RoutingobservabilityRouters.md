# RoutingobservabilityRouters — operations

Accessor: `client.RoutingobservabilityRouters` · Source: `Api/RoutingobservabilityRouters.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCountPerDevices
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/routers/stats` (Default)
- **Signature**: `GetCountPerDevices(string orgId, Status6? status, Sort4? sort, string? routerName = "%", string? siteId = "%", int? pageNo = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `routerName` = "%", `siteId` = "%", `pageNo` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `router_name` ← `routerName`, `status` ← `status`, `site_id` ← `siteId`, `sort` ← `sort`, `page_no` ← `pageNo`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRouterList
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/routers/terse` (Default)
- **Signature**: `GetRouterList(string orgId, string? routerName = "*", int? pageNo = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `routerName` = "*", `pageNo` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `router_name` ← `routerName`, `page_no` ← `pageNo`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRouters
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/routers` (Default)
- **Signature**: `GetRouters(string orgId, Status6? status, string? startTime, string? xFields, string time = "now()", string? routerName = "%", string? mrtCollectorId = "%", string? siteId = "%", int? pageNo = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `startTime` — nullable, no default → **must pass explicitly**
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `time` = "now()", `routerName` = "%", `mrtCollectorId` = "%", `siteId` = "%", `pageNo` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `time` ← `time`, `router_name` ← `routerName`, `status` ← `status`, `mrt_collector_id` ← `mrtCollectorId`, `site_id` ← `siteId`, `start_time` ← `startTime`, `page_no` ← `pageNo`, `per_page` ← `perPage`
- **Returns**: `IReadOnlyList<Routers>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
