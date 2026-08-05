# SitesStatsDevices — operations

Accessor: `client.SitesStatsDevices` · Source: `Api/SitesStatsDevices.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteAllClientsStatsByDevice
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/devices/{device_id}/clients` (ApiHost (api))
- **Notes**: Get wireless client stat by Device
- **Signature**: `GetSiteAllClientsStatsByDevice(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<StatsWirelessClient>`
- **Error**: `SdkException<GetSiteAllClientsStatsByDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteDeviceStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/devices/{device_id}` (ApiHost (api))
- **Notes**: Get Site Device Stats Details
- **Signature**: `GetSiteDeviceStats(Guid siteId, Guid deviceId, string? fields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fields` ← `fields`
- **Returns**: `StatsDevice`
- **Error**: `SdkException<GetSiteDeviceStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteGatewayMetrics
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/gateways/metrics` (ApiHost (api))
- **Notes**: Get Site Gateway Metrics
- **Signature**: `GetSiteGatewayMetrics(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GatewayMetrics`
- **Error**: `SdkException<GetSiteGatewayMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSwitchesMetrics
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/switches/metrics` (ApiHost (api))
- **Notes**: Get version compliance metrics for managed or monitored switches
- **Signature**: `GetSiteSwitchesMetrics(Guid siteId, SwitchMetricType? type, SwitchMetricScope? scope, string? switchMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - `scope` — nullable, no default → **must pass explicitly**
  - `switchMac` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `scope` ← `scope`, `switch_mac` ← `switchMac`
- **Returns**: `ResponseSwitchMetrics`
- **Error**: `SdkException<GetSiteSwitchesMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteDevicesStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/devices` (ApiHost (api))
- **Notes**: Get List of Site Devices Stats
- **Signature**: `ListSiteDevicesStats(Guid siteId, DeviceTypeWithAll? type, StatDeviceStatusFilter? status, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `status` ← `status`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<StatsDevice>`
- **Error**: `SdkException<ListSiteDevicesStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
