# SitesSkyatp — operations

Accessor: `client.SitesSkyatp` · Source: `Api/SitesSkyatp.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteSkyatpEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/skyatp/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Skyatp Events (WIP)
- **Signature**: `CountSiteSkyatpEvents(Guid siteId, SiteSkyAtpEventsCountDistinct? distinct, string? type, string? mac, string? deviceMac, int? threatLevel, string? ipAddress, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `mac` ← `mac`, `device_mac` ← `deviceMac`, `threat_level` ← `threatLevel`, `ip_address` ← `ipAddress`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteSkyatpEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteSkyatpEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/skyatp/events/search` (ApiHost (api))
- **Notes**: Search Skyatp Events (WIP)
- **Signature**: `SearchSiteSkyatpEvents(Guid siteId, string? type, string? mac, string? deviceMac, int? threatLevel, string? ipAddress, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `mac` ← `mac`, `device_mac` ← `deviceMac`, `threat_level` ← `threatLevel`, `ip_address` ← `ipAddress`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseEventsSkyAtpSearch`
- **Error**: `SdkException<SearchSiteSkyatpEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
