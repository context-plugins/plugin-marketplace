# SitesRogues — operations

Accessor: `client.SitesRogues` · Source: `Api/SitesRogues.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteRogueEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/rogues/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Rogue Events
- **Signature**: `CountSiteRogueEvents(Guid siteId, SiteRogueEventsCountDistinct? distinct, RogueType? type, string? ssid, string? bssid, string? apMac, string? channel, bool? seenOnLan, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `ssid` ← `ssid`, `bssid` ← `bssid`, `ap_mac` ← `apMac`, `channel` ← `channel`, `seen_on_lan` ← `seenOnLan`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteRogueEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteRogueAp
- **HTTP**: `GET /api/v1/sites/{site_id}/rogues/{rogue_bssid}` (ApiHost (api))
- **Notes**: Get Rogue AP Details
- **Signature**: `GetSiteRogueAp(Guid siteId, string rogueBssid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RogueDetails`
- **Error**: `SdkException<GetSiteRogueApError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteRogueAps
- **HTTP**: `GET /api/v1/sites/{site_id}/insights/rogues` (ApiHost (api))
- **Notes**: Get List of Site Rogue/Neighbor APs
- **Signature**: `ListSiteRogueAps(Guid siteId, RogueType? type, int? start, int? end, string? interval, int? limit = 100, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`type` … `interval`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `interval` ← `interval`
- **Returns**: `ResponseInsightRogue`
- **Error**: `SdkException<ListSiteRogueApsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteRogueClients
- **HTTP**: `GET /api/v1/sites/{site_id}/insights/rogues/clients` (ApiHost (api))
- **Notes**: Get List of Site Rogue Clients
- **Signature**: `ListSiteRogueClients(Guid siteId, int? start, int? end, string? interval, int? limit = 100, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - `interval` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `interval` ← `interval`
- **Returns**: `ResponseInsightRogueClient`
- **Error**: `SdkException<ListSiteRogueClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteRogueEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/rogues/events/search` (ApiHost (api))
- **Notes**: Search Rogue Events
- **Signature**: `SearchSiteRogueEvents(Guid siteId, RogueType? type, string? ssid, string? bssid, string? apMac, int? channel, bool? seenOnLan, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `ssid` ← `ssid`, `bssid` ← `bssid`, `ap_mac` ← `apMac`, `channel` ← `channel`, `seen_on_lan` ← `seenOnLan`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseEventsRogueSearch`
- **Error**: `SdkException<SearchSiteRogueEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
