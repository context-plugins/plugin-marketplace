# SitesStatsCalls — operations

Accessor: `client.SitesStatsCalls` · Source: `Api/SitesStatsCalls.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteCalls
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/calls/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Calls
- **Signature**: `CountSiteCalls(Guid siteId, CountSiteCallsDistinct? distinct, int? rating, string? app, int? start, int? end, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `rating` ← `rating`, `app` ← `app`, `start` ← `start`, `end` ← `end`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteCallsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteCallsSummary
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/calls/summary` (ApiHost (api))
- **Notes**: Summarized, aggregated stats for the site calls
- **Signature**: `GetSiteCallsSummary(Guid siteId, string? apMac, string? app, int? start, int? end, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`apMac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ap_mac` ← `apMac`, `app` ← `app`, `start` ← `start`, `end` ← `end`
- **Returns**: `ResponseStatsCallsSummary`
- **Error**: `SdkException<GetSiteCallsSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteTroubleshootCalls
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/calls/troubleshoot` (ApiHost (api))
- **Notes**: Summary of calls troubleshoot by site
- **Signature**: `ListSiteTroubleshootCalls(Guid siteId, string? ap, string? meetingId, string? mac, string? app, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`ap` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `ap` ← `ap`, `meeting_id` ← `meetingId`, `mac` ← `mac`, `app` ← `app`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseCallTroubleshootSummary`
- **Error**: `SdkException<ListSiteTroubleshootCallsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchSiteCalls
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/calls/search` (ApiHost (api))
- **Notes**: Search Calls
- **Signature**: `SearchSiteCalls(Guid siteId, string? mac, string? app, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `app` ← `app`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseStatsCalls`
- **Error**: `SdkException<SearchSiteCallsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TroubleshootSiteCall
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/calls/client/{client_mac}/troubleshoot` (ApiHost (api))
- **Notes**: Troubleshoot a call
- **Signature**: `TroubleshootSiteCall(Guid siteId, string clientMac, string meetingId, string? mac, string? app, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `meeting_id` ← `meetingId`, `mac` ← `mac`, `app` ← `app`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `CallTroubleshoot`
- **Error**: `SdkException<TroubleshootSiteCallError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
