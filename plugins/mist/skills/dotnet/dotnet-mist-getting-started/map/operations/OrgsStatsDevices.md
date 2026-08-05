# OrgsStatsDevices — operations

Accessor: `client.OrgsStatsDevices` · Source: `Api/OrgsStatsDevices.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListOrgDevicesStats
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/devices` (ApiHost (api))
- **Notes**: Get List of Org Devices stats This API renders some high-level device stats, pagination is assumed and returned in response header (as the response is an array)
- **Signature**: `ListOrgDevicesStats(Guid orgId, DeviceTypeWithAll? type, DeviceStatus? status, string? siteId, string? mac, string? evpntopoId, string? evpnUnused, string? fields, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `status` ← `status`, `site_id` ← `siteId`, `mac` ← `mac`, `evpntopo_id` ← `evpntopoId`, `evpn_unused` ← `evpnUnused`, `fields` ← `fields`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<StatsDevice>`
- **Error**: `SdkException<ListOrgDevicesStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
