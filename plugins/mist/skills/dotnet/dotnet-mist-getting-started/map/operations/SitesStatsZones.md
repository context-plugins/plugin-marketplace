# SitesStatsZones — operations

Accessor: `client.SitesStatsZones` · Source: `Api/SitesStatsZones.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteRssiZoneStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/rssizones/{zone_id}` (ApiHost (api))
- **Notes**: Get Detail RSSI Zone Stats
- **Signature**: `GetSiteRssiZoneStats(Guid siteId, Guid zoneId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StatsZoneDetails`
- **Error**: `SdkException<GetSiteRssiZoneStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteZoneStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/zones/{zone_id}` (ApiHost (api))
- **Notes**: Get Detail Zone Stats
- **Signature**: `GetSiteZoneStats(Guid siteId, Guid zoneId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StatsZoneDetails`
- **Error**: `SdkException<GetSiteZoneStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteRssiZonesStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/rssizones` (ApiHost (api))
- **Notes**: Get List of Site RSSI Zones Stats
- **Signature**: `ListSiteRssiZonesStats(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<StatsRssiZone>`
- **Error**: `SdkException<ListSiteRssiZonesStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteZonesStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/zones` (ApiHost (api))
- **Notes**: Get List of Site Zones Stats
- **Signature**: `ListSiteZonesStats(Guid siteId, string? mapId, int? minDuration, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mapId` — nullable, no default → **must pass explicitly**
  - `minDuration` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `map_id` ← `mapId`, `min_duration` ← `minDuration`
- **Returns**: `IReadOnlyList<StatsZone>`
- **Error**: `SdkException<ListSiteZonesStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
