# RoutingobservabilityBgpPrefixes — operations

Accessor: `client.RoutingobservabilityBgpPrefixes` · Source: `Api/RoutingobservabilityBgpPrefixes.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetBgpPrefixes
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/bgp-prefixes` (Default)
- **Signature**: `GetBgpPrefixes(string orgId, string? startTime, Operator? @operator, LabelOption? labelOption, Sort11? sort, ViewType? viewType, string endTime = "now()", string? routerName = "%", string? siteId = "%", string? peerHashId = "%", string? mrtCollectorId = "%", string? peerIp = "%", string? prefixRd = "%", string? peerRd = "%", string? updateType = "%", string? monType = "%", string? prefixAddr = "%", string? prefixLen = "%", string? afPayload = "%", string? labelStack = "%", string? afType = "%", bool? prefixHstOnlyFilter = true, string? nextHop = "%", string? med = "%", string? localPref = "%", string? origin = "%", string? aspath = "%", string? community = "%", string? originAs = "%", string? cluster = "%", int? pageNo = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `viewType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `endTime` = "now()", `routerName` = "%", `siteId` = "%", `peerHashId` = "%", `mrtCollectorId` = "%", `peerIp` = "%", `prefixRd` = "%", `peerRd` = "%", `updateType` = "%", `monType` = "%", `prefixAddr` = "%", `prefixLen` = "%", `afPayload` = "%", `labelStack` = "%", `afType` = "%", `prefixHstOnlyFilter` = true, `nextHop` = "%", `med` = "%", `localPref` = "%", `origin` = "%", `aspath` = "%", `community` = "%", `originAs` = "%", `cluster` = "%", `pageNo` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `end_time` ← `endTime`, `router_name` ← `routerName`, `site_id` ← `siteId`, `peer_hash_id` ← `peerHashId`, `mrt_collector_id` ← `mrtCollectorId`, `peer_ip` ← `peerIp`, `prefix_rd` ← `prefixRd`, `peer_rd` ← `peerRd`, `start_time` ← `startTime`, `update_type` ← `updateType`, `mon_type` ← `monType`, `prefix_addr` ← `prefixAddr`, `prefix_len` ← `prefixLen`, `af_payload` ← `afPayload`, `label_option` ← `labelOption`, `label_stack` ← `labelStack`, `af_type` ← `afType`, `prefix_hst_only_filter` ← `prefixHstOnlyFilter`, `next_hop` ← `nextHop`, `med` ← `med`, `local_pref` ← `localPref`, `origin` ← `origin`, `aspath` ← `aspath`, `community` ← `community`, `origin_as` ← `originAs`, `cluster` ← `cluster`, `sort` ← `sort`, `view_type` ← `viewType`, `page_no` ← `pageNo`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCountUniquePrefixes
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/bgp-prefixes/unique-prefixes` (Default)
- **Signature**: `GetCountUniquePrefixes(string orgId, Sort2? sort, string? prefixAddr = "%", string? prefixRd = "%", string? prefixLen = "%", string? afType = "%", string? startTime = "min()", string? endTime = "now()", int? pageNo = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `prefixAddr` = "%", `prefixRd` = "%", `prefixLen` = "%", `afType` = "%", `startTime` = "min()", `endTime` = "now()", `pageNo` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `prefix_addr` ← `prefixAddr`, `prefix_rd` ← `prefixRd`, `prefix_len` ← `prefixLen`, `af_type` ← `afType`, `start_time` ← `startTime`, `end_time` ← `endTime`, `sort` ← `sort`, `page_no` ← `pageNo`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCountUpdates
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/bgp-prefixes/updates-count` (Default)
- **Signature**: `GetCountUpdates(string orgId, RouteMonitorType? routeMonitorType, string? xFields, string? siteId = "%", string? routerName = "%", string? peerIp = "%", string? prefixAddr = "%", string? prefixLen = "%", string? timeWindow = "5", string? startTime = "-2h", string? endTime = "now()", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `routeMonitorType` — nullable, no default → **must pass explicitly**
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `siteId` = "%", `routerName` = "%", `peerIp` = "%", `prefixAddr` = "%", `prefixLen` = "%", `timeWindow` = "5", `startTime` = "-2h", `endTime` = "now()", `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `router_name` ← `routerName`, `peer_ip` ← `peerIp`, `prefix_addr` ← `prefixAddr`, `prefix_len` ← `prefixLen`, `route_monitor_type` ← `routeMonitorType`, `time_window` ← `timeWindow`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `IReadOnlyList<Awdist>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
