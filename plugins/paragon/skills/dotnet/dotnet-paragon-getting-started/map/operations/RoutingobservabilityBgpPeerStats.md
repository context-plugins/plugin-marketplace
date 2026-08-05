# RoutingobservabilityBgpPeerStats — operations

Accessor: `client.RoutingobservabilityBgpPeerStats` · Source: `Api/RoutingobservabilityBgpPeerStats.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetBgpPeerStats
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/bgp-peer-stats` (Default)
- **Signature**: `GetBgpPeerStats(string orgId, string time = "now()", string? routerName = "*", string? routerHashId = "*", string? peerIp = "*", string? peerRd = "*", string? siteId = "0", string? vmMetricsName = "*", int? pageNo = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `time` = "now()", `routerName` = "*", `routerHashId` = "*", `peerIp` = "*", `peerRd` = "*", `siteId` = "0", `vmMetricsName` = "*", `pageNo` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `time` ← `time`, `router_name` ← `routerName`, `router_hash_id` ← `routerHashId`, `peer_ip` ← `peerIp`, `peer_rd` ← `peerRd`, `site_id` ← `siteId`, `vm_metrics_name` ← `vmMetricsName`, `page_no` ← `pageNo`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBgpPeerStatsBetween
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/bgp-peer-stats/between` (Default)
- **Signature**: `GetBgpPeerStatsBetween(string orgId, Mtype? mtype, string? xFields, string? routerName = "*", string? routerHashId = "*", string? peerIp = "*", string? peerRd = "*", string? startTime = "-2h", string? endTime = "now()", string? siteId = "0", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mtype` — nullable, no default → **must pass explicitly**
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `routerName` = "*", `routerHashId` = "*", `peerIp` = "*", `peerRd` = "*", `startTime` = "-2h", `endTime` = "now()", `siteId` = "0", `requestOptions` = null
- **Query params (wire ← C#)**: `router_name` ← `routerName`, `router_hash_id` ← `routerHashId`, `peer_ip` ← `peerIp`, `peer_rd` ← `peerRd`, `mtype` ← `mtype`, `start_time` ← `startTime`, `end_time` ← `endTime`, `site_id` ← `siteId`
- **Returns**: `IReadOnlyList<BgpPeerStatsTs>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
