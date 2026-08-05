# SitesStatsDiscoveredSwitches — operations

Accessor: `client.SitesStatsDiscoveredSwitches` · Source: `Api/SitesStatsDiscoveredSwitches.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteDiscoveredSwitches
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/discovered_switches/count` (ApiHost (api))
- **Notes**: Count Discovered Switches
- **Signature**: `CountSiteDiscoveredSwitches(Guid siteId, SiteDiscoveredSwitchesCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteDiscoveredSwitchesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteDiscoveredSwitchesMetrics
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/discovered_switches/metrics` (ApiHost (api))
- **Notes**: Discovered switches related metrics, lists related switch system names &amp; details if not compliant
- **Signature**: `ListSiteDiscoveredSwitchesMetrics(Guid siteId, string? threshold, string? systemName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `threshold` — nullable, no default → **must pass explicitly**
  - `systemName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `threshold` ← `threshold`, `system_name` ← `systemName`
- **Returns**: `ResponseDswitchesMetrics`
- **Error**: `SdkException<ListSiteDiscoveredSwitchesMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteDiscoveredSwitches
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/discovered_switches/search` (ApiHost (api))
- **Notes**: Search Discovered Switches
- **Signature**: `SearchSiteDiscoveredSwitches(Guid siteId, bool? adopted, string? systemName, string? hostname, string? vendor, string? model, string? version, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`adopted` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `adopted` ← `adopted`, `system_name` ← `systemName`, `hostname` ← `hostname`, `vendor` ← `vendor`, `model` ← `model`, `version` ← `version`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseDiscoveredSwitches`
- **Error**: `SdkException<SearchSiteDiscoveredSwitchesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteDiscoveredSwitchesMetrics
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/discovered_switch_metrics/search` (ApiHost (api))
- **Notes**: Search Discovered Switch Metrics
- **Signature**: `SearchSiteDiscoveredSwitchesMetrics(Guid siteId, DiscoveredSwitchesMetricScope? scope, DiscoveredSwitchMetricType? type, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`scope` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `scope` ← `scope`, `type` ← `type`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseDiscoveredSwitchMetrics`
- **Error**: `SdkException<SearchSiteDiscoveredSwitchesMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
