# RoutingobservabilityDevices — operations

Accessor: `client.RoutingobservabilityDevices` · Source: `Api/RoutingobservabilityDevices.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDevices
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/devices` (Default)
- **Signature**: `GetDevices(string orgId, string? siteId = "%", string? devId = "%", int? pageNo = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `siteId` = "%", `devId` = "%", `pageNo` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `dev_id` ← `devId`, `page_no` ← `pageNo`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
