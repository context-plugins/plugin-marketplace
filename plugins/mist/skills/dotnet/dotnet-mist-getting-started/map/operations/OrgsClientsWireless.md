# OrgsClientsWireless — operations

Accessor: `client.OrgsClientsWireless` · Source: `Api/OrgsClientsWireless.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgWirelessClientEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/clients/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Client-Events
- **Signature**: `CountOrgWirelessClientEvents(Guid orgId, SiteClientEventsCountDistinct? distinct, string? type, int? reasonCode, string? ssid, string? ap, Dot11Proto? proto, Dot11Band? band, string? wlanId, Guid? siteId, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `reason_code` ← `reasonCode`, `ssid` ← `ssid`, `ap` ← `ap`, `proto` ← `proto`, `band` ← `band`, `wlan_id` ← `wlanId`, `site_id` ← `siteId`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgWirelessClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgWirelessClients
- **HTTP**: `GET /api/v1/orgs/{org_id}/clients/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Wireless Clients
- **Signature**: `CountOrgWirelessClients(Guid orgId, OrgClientsCountDistinct? distinct, string? mac, string? hostname, string? device, string? os, string? model, string? ap, string? vlan, string? ssid, string? ipAddress, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `mac` ← `mac`, `hostname` ← `hostname`, `device` ← `device`, `os` ← `os`, `model` ← `model`, `ap` ← `ap`, `vlan` ← `vlan`, `ssid` ← `ssid`, `ip_address` ← `ipAddress`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgWirelessClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgWirelessClientsSessions
- **HTTP**: `GET /api/v1/orgs/{org_id}/clients/sessions/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Wireless Clients Sessions
- **Signature**: `CountOrgWirelessClientsSessions(Guid orgId, OrgClientSessionsCountDistinct? distinct, string? ap, Dot11Band? band, string? clientFamily, string? clientManufacture, string? clientModel, string? clientOs, string? ssid, Guid? wlanId, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `ap` ← `ap`, `band` ← `band`, `client_family` ← `clientFamily`, `client_manufacture` ← `clientManufacture`, `client_model` ← `clientModel`, `client_os` ← `clientOs`, `ssid` ← `ssid`, `wlan_id` ← `wlanId`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgWirelessClientsSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgWirelessClientEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/clients/events/search` (ApiHost (api))
- **Notes**: Get Org Clients Events
- **Signature**: `SearchOrgWirelessClientEvents(Guid orgId, string? type, int? reasonCode, string? ssid, string? ap, ClientKeyMgmt? keyMgmt, Dot11Proto? proto, Dot11Band? band, Guid? wlanId, Guid? nacruleId, int? start, int? end, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `reason_code` ← `reasonCode`, `ssid` ← `ssid`, `ap` ← `ap`, `key_mgmt` ← `keyMgmt`, `proto` ← `proto`, `band` ← `band`, `wlan_id` ← `wlanId`, `nacrule_id` ← `nacruleId`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseEventsSearch`
- **Error**: `SdkException<SearchOrgWirelessClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgWirelessClientSessions
- **HTTP**: `GET /api/v1/orgs/{org_id}/clients/sessions/search` (ApiHost (api))
- **Notes**: Search Org Wireless Clients Sessions
- **Signature**: `SearchOrgWirelessClientSessions(Guid orgId, string? ap, Dot11Band? band, string? clientFamily, string? clientManufacture, string? clientModel, string? clientUsername, string? clientOs, string? ssid, Guid? wlanId, string? pskId, string? pskName, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`ap` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `ap` ← `ap`, `band` ← `band`, `client_family` ← `clientFamily`, `client_manufacture` ← `clientManufacture`, `client_model` ← `clientModel`, `client_username` ← `clientUsername`, `client_os` ← `clientOs`, `ssid` ← `ssid`, `wlan_id` ← `wlanId`, `psk_id` ← `pskId`, `psk_name` ← `pskName`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchWirelessClientSession`
- **Error**: `SdkException<SearchOrgWirelessClientSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgWirelessClients
- **HTTP**: `GET /api/v1/orgs/{org_id}/clients/search` (ApiHost (api))
- **Notes**: Search Org Wireless Clients
- **Signature**: `SearchOrgWirelessClients(Guid orgId, Guid? siteId, string? mac, string? ipAddress, string? hostname, string? band, string? device, string? os, string? model, string? ap, string? pskId, string? pskName, string? username, string? vlan, string? ssid, string? text, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 17 params (`siteId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `mac` ← `mac`, `ip_address` ← `ipAddress`, `hostname` ← `hostname`, `band` ← `band`, `device` ← `device`, `os` ← `os`, `model` ← `model`, `ap` ← `ap`, `psk_id` ← `pskId`, `psk_name` ← `pskName`, `username` ← `username`, `vlan` ← `vlan`, `ssid` ← `ssid`, `text` ← `text`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseClientSearch`
- **Error**: `SdkException<SearchOrgWirelessClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
