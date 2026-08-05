# SitesInsights — operations

Accessor: `client.SitesInsights` · Source: `Api/SitesInsights.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteInsightMetrics
- **HTTP**: `GET /api/v1/sites/{site_id}/insights/{metric}` (ApiHost (api))
- **Notes**: Get Site Insight Metrics See metrics possibilities at List Insight Metrics
- **Signature**: `GetSiteInsightMetrics(Guid siteId, string metric, int? start, int? end, string? interval, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `interval` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `interval` ← `interval`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `InsightMetrics`
- **Error**: `SdkException<GetSiteInsightMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetSiteInsightMetricsForClient
- **HTTP**: `GET /api/v1/sites/{site_id}/insights/client/{client_mac}/{metric}` (ApiHost (api))
- **Notes**: Get Client Insight Metrics See metrics possibilities at List Insight Metrics
- **Signature**: `GetSiteInsightMetricsForClient(Guid siteId, string clientMac, string metric, int? start, int? end, string? interval, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `interval` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `interval` ← `interval`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `InsightMetrics`
- **Error**: `SdkException<GetSiteInsightMetricsForClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetSiteInsightMetricsForDevice
- **HTTP**: `GET /api/v1/sites/{site_id}/insights/device/{device_mac}/{metric}` (ApiHost (api))
- **Notes**: Get AP Insight Metrics See metrics possibilities at List Insight Metrics
- **Signature**: `GetSiteInsightMetricsForDevice(Guid siteId, string metric, string deviceMac, int? start, int? end, string? interval, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `interval` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `interval` ← `interval`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseDeviceMetrics`
- **Error**: `SdkException<GetSiteInsightMetricsForDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
