# SitesClientsNac — operations

Accessor: `client.SitesClientsNac` · Source: `Api/SitesClientsNac.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteNacClientEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/nac_clients/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of NAC Client-Events
- **Signature**: `CountSiteNacClientEvents(Guid siteId, SiteNacClientEventsCountDistinct? distinct, string? type, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteNacClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountSiteNacClients
- **HTTP**: `GET /api/v1/sites/{site_id}/nac_clients/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of NAC Clients
- **Signature**: `CountSiteNacClients(Guid siteId, SiteNacClientsCountDistinct? distinct, string? lastNacruleId, bool? nacruleMatched, string? authType, string? lastVlanId, string? lastNasVendor, string? idpId, string? lastSsid, string? lastUsername, double? timestamp, string? lastAp, string? mac, string? lastStatus, string? type, string? mdmComplianceStatus, string? mdmProvider, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 18 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `last_nacrule_id` ← `lastNacruleId`, `nacrule_matched` ← `nacruleMatched`, `auth_type` ← `authType`, `last_vlan_id` ← `lastVlanId`, `last_nas_vendor` ← `lastNasVendor`, `idp_id` ← `idpId`, `last_ssid` ← `lastSsid`, `last_username` ← `lastUsername`, `timestamp` ← `timestamp`, `last_ap` ← `lastAp`, `mac` ← `mac`, `last_status` ← `lastStatus`, `type` ← `type`, `mdm_compliance_status` ← `mdmComplianceStatus`, `mdm_provider` ← `mdmProvider`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteNacClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteNacClientEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/nac_clients/events/search` (ApiHost (api))
- **Notes**: Search NAC Client Events
- **Signature**: `SearchSiteNacClientEvents(Guid siteId, string? type, Guid? nacruleId, bool? nacruleMatched, string? dryrunNacruleId, bool? dryrunNacruleMatched, string? authType, int? vlan, string? nasVendor, string? bssid, Guid? idpId, string? idpRole, string? idpUsername, IReadOnlyList<string>? respAttrs, string? ssid, string? username, string? ap, bool? randomMac, string? mac, double? timestamp, string? usermacLabel, string? text, string? nasIp, string? ingressVlan, int? start, int? end, string? duration = "1d", int? limit = 100, string? sort = "wxid", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 25 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `sort` = "wxid", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `nacrule_id` ← `nacruleId`, `nacrule_matched` ← `nacruleMatched`, `dryrun_nacrule_id` ← `dryrunNacruleId`, `dryrun_nacrule_matched` ← `dryrunNacruleMatched`, `auth_type` ← `authType`, `vlan` ← `vlan`, `nas_vendor` ← `nasVendor`, `bssid` ← `bssid`, `idp_id` ← `idpId`, `idp_role` ← `idpRole`, `idp_username` ← `idpUsername`, `resp_attrs` ← `respAttrs`, `ssid` ← `ssid`, `username` ← `username`, `ap` ← `ap`, `random_mac` ← `randomMac`, `mac` ← `mac`, `timestamp` ← `timestamp`, `usermac_label` ← `usermacLabel`, `text` ← `text`, `nas_ip` ← `nasIp`, `ingress_vlan` ← `ingressVlan`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `sort` ← `sort`
- **Returns**: `ResponseEventsNacClientSearch`
- **Error**: `SdkException<SearchSiteNacClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteNacClients
- **HTTP**: `GET /api/v1/sites/{site_id}/nac_clients/search` (ApiHost (api))
- **Notes**: Search Site NAC Clients
- **Signature**: `SearchSiteNacClients(Guid siteId, string? nacruleId, bool? nacruleMatched, string? authType, string? vlan, string? nasVendor, string? nasIp, string? idpId, string? ssid, string? username, double? timestamp, string? ap, string? mac, bool? mdmManaged, string? mxedgeId, string? nacruleName, string? status, string? family, string? model, string? os, string? hostname, string? mfg, string? type, string? mdmCompliance, string? mdmProvider, IReadOnlyList<string>? usermacLabel, string? ingressVlan, int? start, int? end, int? limit = 100, int? page = 1, string? duration = "1d", string? sort = "wxid", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 28 params (`nacruleId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `duration` = "1d", `sort` = "wxid", `requestOptions` = null
- **Query params (wire ← C#)**: `nacrule_id` ← `nacruleId`, `nacrule_matched` ← `nacruleMatched`, `auth_type` ← `authType`, `vlan` ← `vlan`, `nas_vendor` ← `nasVendor`, `nas_ip` ← `nasIp`, `idp_id` ← `idpId`, `ssid` ← `ssid`, `username` ← `username`, `timestamp` ← `timestamp`, `ap` ← `ap`, `mac` ← `mac`, `mdm_managed` ← `mdmManaged`, `mxedge_id` ← `mxedgeId`, `nacrule_name` ← `nacruleName`, `status` ← `status`, `family` ← `family`, `model` ← `model`, `os` ← `os`, `hostname` ← `hostname`, `mfg` ← `mfg`, `type` ← `type`, `mdm_compliance` ← `mdmCompliance`, `mdm_provider` ← `mdmProvider`, `usermac_label` ← `usermacLabel`, `ingress_vlan` ← `ingressVlan`, `limit` ← `limit`, `page` ← `page`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseClientNacSearch`
- **Error**: `SdkException<SearchSiteNacClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
