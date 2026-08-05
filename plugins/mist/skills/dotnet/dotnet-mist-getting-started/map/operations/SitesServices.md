# SitesServices — operations

Accessor: `client.SitesServices` · Source: `Api/SitesServices.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteServicePathEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/services/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Service Path Events
- **Signature**: `CountSiteServicePathEvents(Guid siteId, SiteServiceEventsCountDistinct? distinct, string? type, string? text, string? vpnName, string? vpnPath, string? policy, string? portId, string? model, string? version, double? timestamp, string? mac, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `text` ← `text`, `vpn_name` ← `vpnName`, `vpn_path` ← `vpnPath`, `policy` ← `policy`, `port_id` ← `portId`, `model` ← `model`, `version` ← `version`, `timestamp` ← `timestamp`, `mac` ← `mac`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteServicePathEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteServicesDerived
- **HTTP**: `GET /api/v1/sites/{site_id}/services/derived` (ApiHost (api))
- **Notes**: Get the list of derived Services for a Site
- **Signature**: `ListSiteServicesDerived(Guid siteId, bool? resolve = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `resolve` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `resolve` ← `resolve`
- **Returns**: `IReadOnlyList<Service>`
- **Error**: `SdkException<ListSiteServicesDerivedError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteServicePathEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/services/events/search` (ApiHost (api))
- **Notes**: Search Service Path Events
- **Signature**: `SearchSiteServicePathEvents(Guid siteId, string? type, string? text, string? peerPortId, string? peerMac, string? vpnName, string? vpnPath, string? policy, string? portId, string? model, string? version, double? timestamp, string? mac, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `text` ← `text`, `peer_port_id` ← `peerPortId`, `peer_mac` ← `peerMac`, `vpn_name` ← `vpnName`, `vpn_path` ← `vpnPath`, `policy` ← `policy`, `port_id` ← `portId`, `model` ← `model`, `version` ← `version`, `timestamp` ← `timestamp`, `mac` ← `mac`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseEventsPathSearch`
- **Error**: `SdkException<SearchSiteServicePathEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
