# SitesClientsWireless — operations

Accessor: `client.SitesClientsWireless` · Source: `Api/SitesClientsWireless.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteWirelessClientEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/clients/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Client-Events
- **Signature**: `CountSiteWirelessClientEvents(Guid siteId, SiteClientEventsCountDistinct? distinct, string? type, int? reasonCode, string? ssid, string? ap, Dot11Proto? proto, Dot11Band? band, string? wlanId, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `reason_code` ← `reasonCode`, `ssid` ← `ssid`, `ap` ← `ap`, `proto` ← `proto`, `band` ← `band`, `wlan_id` ← `wlanId`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteWirelessClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountSiteWirelessClientSessions
- **HTTP**: `GET /api/v1/sites/{site_id}/clients/sessions/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Client Sessions
- **Signature**: `CountSiteWirelessClientSessions(Guid siteId, SiteClientSessionsCountDistinct? distinct, string? ap, Dot11Band? band, string? clientFamily, string? clientManufacture, string? clientModel, string? clientOs, string? ssid, string? wlanId, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `ap` ← `ap`, `band` ← `band`, `client_family` ← `clientFamily`, `client_manufacture` ← `clientManufacture`, `client_model` ← `clientModel`, `client_os` ← `clientOs`, `ssid` ← `ssid`, `wlan_id` ← `wlanId`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteWirelessClientSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountSiteWirelessClients
- **HTTP**: `GET /api/v1/sites/{site_id}/clients/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Clients
- **Signature**: `CountSiteWirelessClients(Guid siteId, SiteClientsCountDistinct? distinct, string? ssid, string? ap, string? ipAddress, string? vlan, string? hostname, string? os, string? model, string? device, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `ssid` ← `ssid`, `ap` ← `ap`, `ip_address` ← `ipAddress`, `vlan` ← `vlan`, `hostname` ← `hostname`, `os` ← `os`, `model` ← `model`, `device` ← `device`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteWirelessClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteEventsForClient
- **HTTP**: `GET /api/v1/sites/{site_id}/clients/{client_mac}/events` (ApiHost (api))
- **Notes**: Get the list of events for a specific client
- **Signature**: `GetSiteEventsForClient(Guid siteId, string clientMac, string? type, Dot11Proto? proto, Dot11Band? band, string? channel, string? wlanId, string? ssid, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `proto` ← `proto`, `band` ← `band`, `channel` ← `channel`, `wlan_id` ← `wlanId`, `ssid` ← `ssid`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseClientEventsSearch`
- **Error**: `SdkException<GetSiteEventsForClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchSiteWirelessClientEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/clients/events/search` (ApiHost (api))
- **Notes**: Get Site Clients Events
- **Signature**: `SearchSiteWirelessClientEvents(Guid siteId, string? type, int? reasonCode, string? ssid, string? ap, Dot11Proto? proto, Dot11Band? band, string? wlanId, string? nacruleId, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `reason_code` ← `reasonCode`, `ssid` ← `ssid`, `ap` ← `ap`, `proto` ← `proto`, `band` ← `band`, `wlan_id` ← `wlanId`, `nacrule_id` ← `nacruleId`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseEventsSearch`
- **Error**: `SdkException<SearchSiteWirelessClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteWirelessClientSessions
- **HTTP**: `GET /api/v1/sites/{site_id}/clients/sessions/search` (ApiHost (api))
- **Notes**: Search Client Sessions
- **Signature**: `SearchSiteWirelessClientSessions(Guid siteId, string? ap, Dot11Band? band, string? clientFamily, string? clientManufacture, string? clientModel, string? clientUsername, string? clientOs, string? ssid, string? wlanId, string? pskId, string? pskName, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`ap` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `ap` ← `ap`, `band` ← `band`, `client_family` ← `clientFamily`, `client_manufacture` ← `clientManufacture`, `client_model` ← `clientModel`, `client_username` ← `clientUsername`, `client_os` ← `clientOs`, `ssid` ← `ssid`, `wlan_id` ← `wlanId`, `psk_id` ← `pskId`, `psk_name` ← `pskName`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseClientSessionsSearch`
- **Error**: `SdkException<SearchSiteWirelessClientSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteWirelessClients
- **HTTP**: `GET /api/v1/sites/{site_id}/clients/search` (ApiHost (api))
- **Notes**: Search Wireless Clients NOTE : fuzzy logic can be used with ‘*’, supported filters: mac, hostname, device, os, model. E.g. /clients/search?device=Mac*&amp;hostname=jerry
- **Signature**: `SearchSiteWirelessClients(Guid siteId, string? mac, string? ipAddress, string? hostname, string? device, string? os, string? model, string? ap, string? ssid, string? text, string? nacruleId, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `ip_address` ← `ipAddress`, `hostname` ← `hostname`, `device` ← `device`, `os` ← `os`, `model` ← `model`, `ap` ← `ap`, `ssid` ← `ssid`, `text` ← `text`, `nacrule_id` ← `nacruleId`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseClientSearch`
- **Error**: `SdkException<SearchSiteWirelessClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
