# SitesWanUsages — operations

Accessor: `client.SitesWanUsages` · Source: `Api/SitesWanUsages.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteWanUsage
- **HTTP**: `GET /api/v1/sites/{site_id}/wan_usages/count` (ApiHost (api))
- **Notes**: Count Site WAN Usages
- **Signature**: `CountSiteWanUsage(Guid siteId, string? mac, string? peerMac, string? portId, string? peerPortId, string? policy, string? tenant, string? pathType, WanUsagesCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `peer_mac` ← `peerMac`, `port_id` ← `portId`, `peer_port_id` ← `peerPortId`, `policy` ← `policy`, `tenant` ← `tenant`, `path_type` ← `pathType`, `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteWanUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteWanUsage
- **HTTP**: `GET /api/v1/sites/{site_id}/wan_usages/search` (ApiHost (api))
- **Notes**: Search Site WAN Usages
- **Signature**: `SearchSiteWanUsage(Guid siteId, string? mac, string? peerMac, string? portId, string? peerPortId, string? policy, string? tenant, string? pathType, int? start, int? end, int? limit = 100, int? page = 1, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `peer_mac` ← `peerMac`, `port_id` ← `portId`, `peer_port_id` ← `peerPortId`, `policy` ← `policy`, `tenant` ← `tenant`, `path_type` ← `pathType`, `limit` ← `limit`, `page` ← `page`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchWanUsage`
- **Error**: `SdkException<SearchSiteWanUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
