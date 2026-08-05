# RoutingobservabilityBgpPeers — operations

Accessor: `client.RoutingobservabilityBgpPeers` · Source: `Api/RoutingobservabilityBgpPeers.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetBgpPeers
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/bgp-peers` (Default)
- **Signature**: `GetBgpPeers(string orgId, Sort1? sort, string? xFields, string time = "now()", string? siteId = "%", string? routerName = "%", string? peerIp = "%", string? peerRd = "%", int? pageNo = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `time` = "now()", `siteId` = "%", `routerName` = "%", `peerIp` = "%", `peerRd` = "%", `pageNo` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `time` ← `time`, `site_id` ← `siteId`, `router_name` ← `routerName`, `peer_ip` ← `peerIp`, `peer_rd` ← `peerRd`, `sort` ← `sort`, `page_no` ← `pageNo`, `per_page` ← `perPage`
- **Returns**: `IReadOnlyList<BgpPeers>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPeerStatus
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/peer-status` (Default)
- **Signature**: `GetPeerStatus(string orgId, Status6? status, Sort1? sort, string? siteId = "%", string? routerName = "*", string? peerRd = "*", string? peerIp = "*", bool? peerCount = false, bool? peerDetails = false, string? startTime = "-2h", string? endTime = "now()", int? pageNo = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `siteId` = "%", `routerName` = "*", `peerRd` = "*", `peerIp` = "*", `peerCount` = false, `peerDetails` = false, `startTime` = "-2h", `endTime` = "now()", `pageNo` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `router_name` ← `routerName`, `peer_rd` ← `peerRd`, `peer_ip` ← `peerIp`, `peer_count` ← `peerCount`, `status` ← `status`, `peer_details` ← `peerDetails`, `start_time` ← `startTime`, `end_time` ← `endTime`, `sort` ← `sort`, `page_no` ← `pageNo`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
