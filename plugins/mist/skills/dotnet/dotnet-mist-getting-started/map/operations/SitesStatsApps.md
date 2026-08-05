# SitesStatsApps — operations

Accessor: `client.SitesStatsApps` · Source: `Api/SitesStatsApps.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteApps
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/apps/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Applications
- **Signature**: `CountSiteApps(Guid siteId, SiteAppsCountDistinct? distinct, string? deviceMac, string? app, string? wired, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`distinct` … `wired`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `device_mac` ← `deviceMac`, `app` ← `app`, `wired` ← `wired`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
