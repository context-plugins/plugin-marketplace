# SitesStatsClientsWireless — operations

Accessor: `client.SitesStatsClientsWireless` · Source: `Api/SitesStatsClientsWireless.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteWirelessClientStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/clients/{client_mac}` (ApiHost (api))
- **Notes**: Get Site Client Stats Details
- **Signature**: `GetSiteWirelessClientStats(Guid siteId, string clientMac, bool? wired = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `wired` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `wired` ← `wired`
- **Returns**: `StatsClient`
- **Error**: `SdkException<GetSiteWirelessClientStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteWirelessClientsStatsByMap
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/maps/{map_id}/clients` (ApiHost (api))
- **Notes**: Get Site Clients Stats By Map
- **Signature**: `GetSiteWirelessClientsStatsByMap(Guid siteId, Guid mapId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<StatsWirelessClient>`
- **Error**: `SdkException<GetSiteWirelessClientsStatsByMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListSiteUnconnectedClientStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/maps/{map_id}/unconnected_clients` (ApiHost (api))
- **Notes**: Get List of Site Unconnected Client Location
- **Signature**: `ListSiteUnconnectedClientStats(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<StatsUnconnectedClient>`
- **Error**: `SdkException<ListSiteUnconnectedClientStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteWirelessClientsStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/clients` (ApiHost (api))
- **Notes**: Get List of Site All Clients Stats Details
- **Signature**: `ListSiteWirelessClientsStats(Guid siteId, int? start, int? end, bool? wired = false, int? limit = 100, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `wired` = false, `limit` = 100, `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `wired` ← `wired`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `IReadOnlyList<StatsClient>`
- **Error**: `SdkException<ListSiteWirelessClientsStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
