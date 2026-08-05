# SitesClientsWan — operations

Accessor: `client.SitesClientsWan` · Source: `Api/SitesClientsWan.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteWanClientEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/wan_client/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Site WAN Client-Events
- **Signature**: `CountSiteWanClientEvents(Guid siteId, SiteWanClientEventsDistinct? distinct, string? type, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteWanClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountSiteWanClients
- **HTTP**: `GET /api/v1/sites/{site_id}/wan_clients/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Site WAN Clients
- **Signature**: `CountSiteWanClients(Guid siteId, SiteWanClientsCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteWanClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteWanClientEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/wan_clients/events/search` (ApiHost (api))
- **Notes**: Search Site WAN Client Events
- **Signature**: `SearchSiteWanClientEvents(Guid siteId, string? type, string? mac, string? hostname, string? ip, string? mfg, string? nacruleId, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `mac` ← `mac`, `hostname` ← `hostname`, `ip` ← `ip`, `mfg` ← `mfg`, `nacrule_id` ← `nacruleId`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchEventsWanClient`
- **Error**: `SdkException<SearchSiteWanClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteWanClients
- **HTTP**: `GET /api/v1/sites/{site_id}/wan_clients/search` (ApiHost (api))
- **Notes**: Search Site WAN Clients
- **Signature**: `SearchSiteWanClients(Guid siteId, string? mac, string? hostname, string? ip, string? mfg, int? start, int? end, int? limit = 100, int? page = 1, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `hostname` ← `hostname`, `ip` ← `ip`, `mfg` ← `mfg`, `limit` ← `limit`, `page` ← `page`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchWanClient`
- **Error**: `SdkException<SearchSiteWanClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
