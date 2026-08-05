# SitesStatsAssets — operations

Accessor: `client.SitesStatsAssets` · Source: `Api/SitesStatsAssets.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteAssets
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/assets/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Site Asset
- **Signature**: `CountSiteAssets(Guid siteId, SiteAssetsCountDistinct? distinct, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteAssetStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/assets/{asset_id}` (ApiHost (api))
- **Notes**: Get Site Asset Details
- **Signature**: `GetSiteAssetStats(Guid siteId, Guid assetId, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `StatsAsset`
- **Error**: `SdkException<GetSiteAssetStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteAssetsOfInterest
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/filtered_assets` (ApiHost (api))
- **Notes**: Get a list of BLE beacons that matches Asset or AssetFilter
- **Signature**: `GetSiteAssetsOfInterest(Guid siteId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `duration` ← `duration`, `start` ← `start`, `end` ← `end`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<AssetOfInterest>`
- **Error**: `SdkException<GetSiteAssetsOfInterestError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetSiteDiscoveredAssetByMap
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/maps/{map_id}/discovered_assets` (ApiHost (api))
- **Notes**: Get a list of BLE beacons that we discovered (whether they’ re defined as assets or not)
- **Signature**: `GetSiteDiscoveredAssetByMap(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<StatsAsset>`
- **Error**: `SdkException<GetSiteDiscoveredAssetByMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteAssetsStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/assets` (ApiHost (api))
- **Notes**: Get List of Site Assets Stats
- **Signature**: `ListSiteAssetsStats(Guid siteId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<StatsAsset>`
- **Error**: `SdkException<ListSiteAssetsStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListSiteDiscoveredAssets
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/discovered_assets` (ApiHost (api))
- **Notes**: Get List of Site Discovered BLE Assets that doesn’t match any of the Asset / Assetfilters
- **Signature**: `ListSiteDiscoveredAssets(Guid siteId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Asset>`
- **Error**: `SdkException<ListSiteDiscoveredAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchSiteAssets
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/assets/search` (ApiHost (api))
- **Notes**: Assets Search
- **Signature**: `SearchSiteAssets(Guid siteId, string? mac, string? mapId, string? ibeaconUuid, int? ibeaconMajor, int? ibeaconMinor, string? eddystoneUidNamespace, string? eddystoneUidInstance, string? eddystoneUrl, string? deviceName, string? by, string? name, string? apMac, string? beam, string? rssi, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `map_id` ← `mapId`, `ibeacon_uuid` ← `ibeaconUuid`, `ibeacon_major` ← `ibeaconMajor`, `ibeacon_minor` ← `ibeaconMinor`, `eddystone_uid_namespace` ← `eddystoneUidNamespace`, `eddystone_uid_instance` ← `eddystoneUidInstance`, `eddystone_url` ← `eddystoneUrl`, `device_name` ← `deviceName`, `by` ← `by`, `name` ← `name`, `ap_mac` ← `apMac`, `beam` ← `beam`, `rssi` ← `rssi`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseStatsAssets`
- **Error**: `SdkException<SearchSiteAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
