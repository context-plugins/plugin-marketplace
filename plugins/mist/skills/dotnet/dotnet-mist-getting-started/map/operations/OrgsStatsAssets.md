# OrgsStatsAssets — operations

Accessor: `client.OrgsStatsAssets` · Source: `Api/OrgsStatsAssets.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgAssetsByDistanceField
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/assets/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Assets
- **Signature**: `CountOrgAssetsByDistanceField(Guid orgId, OrgAssetCountDistinct? distinct, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgAssetsByDistanceFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAssetsStats
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/assets` (ApiHost (api))
- **Notes**: Get List of Org Assets Stats
- **Signature**: `ListOrgAssetsStats(Guid orgId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<StatsAsset>`
- **Error**: `SdkException<ListOrgAssetsStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchOrgAssets
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/assets/search` (ApiHost (api))
- **Notes**: Search for Org Assets
- **Signature**: `SearchOrgAssets(Guid orgId, string? siteId, string? mac, string? deviceName, string? name, string? mapId, string? ibeaconUuid, string? ibeaconMajor, string? ibeaconMinor, string? eddystoneUidNamespace, string? eddystoneUidInstance, string? eddystoneUrl, string? apMac, int? beam, int? rssi, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`siteId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `mac` ← `mac`, `device_name` ← `deviceName`, `name` ← `name`, `map_id` ← `mapId`, `ibeacon_uuid` ← `ibeaconUuid`, `ibeacon_major` ← `ibeaconMajor`, `ibeacon_minor` ← `ibeaconMinor`, `eddystone_uid_namespace` ← `eddystoneUidNamespace`, `eddystone_uid_instance` ← `eddystoneUidInstance`, `eddystone_url` ← `eddystoneUrl`, `ap_mac` ← `apMac`, `beam` ← `beam`, `rssi` ← `rssi`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseStatsAssets`
- **Error**: `SdkException<SearchOrgAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
