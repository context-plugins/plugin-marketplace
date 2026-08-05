# OrgsStatsBgpPeers — operations

Accessor: `client.OrgsStatsBgpPeers` · Source: `Api/OrgsStatsBgpPeers.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgBgpStats
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/bgp_peers/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org BGP Stats
- **Signature**: `CountOrgBgpStats(Guid orgId, string? state, string? distinct, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `state` — nullable, no default → **must pass explicitly**
  - `distinct` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `state` ← `state`, `distinct` ← `distinct`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgBgpStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgBgpStats
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/bgp_peers/search` (ApiHost (api))
- **Notes**: Search Org BGP Stats
- **Signature**: `SearchOrgBgpStats(Guid orgId, string? mac, string? neighborMac, string? siteId, string? vrfName, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `neighbor_mac` ← `neighborMac`, `site_id` ← `siteId`, `vrf_name` ← `vrfName`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseSearchBgps`
- **Error**: `SdkException<SearchOrgBgpStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
