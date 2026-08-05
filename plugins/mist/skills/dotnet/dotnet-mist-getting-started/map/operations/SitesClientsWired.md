# SitesClientsWired — operations

Accessor: `client.SitesClientsWired` · Source: `Api/SitesClientsWired.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteWiredClients
- **HTTP**: `GET /api/v1/sites/{site_id}/wired_clients/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Clients
- **Signature**: `CountSiteWiredClients(Guid siteId, SiteWiredClientsCountDistinct? distinct, string? mac, string? deviceMac, string? portId, string? vlan, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `mac` ← `mac`, `device_mac` ← `deviceMac`, `port_id` ← `portId`, `vlan` ← `vlan`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteWiredClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteWiredClients
- **HTTP**: `GET /api/v1/sites/{site_id}/wired_clients/search` (ApiHost (api))
- **Notes**: Search Wired Clients
- **Signature**: `SearchSiteWiredClients(Guid siteId, string? deviceMac, string? mac, string? ip, string? portId, ClientInfoSource? source, string? vlan, string? manufacture, string? text, string? nacruleId, string? dhcpHostname, string? dhcpFqdn, string? dhcpClientIdentifier, string? dhcpVendorClassIdentifier, string? dhcpRequestParams, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`deviceMac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `device_mac` ← `deviceMac`, `mac` ← `mac`, `ip` ← `ip`, `port_id` ← `portId`, `source` ← `source`, `vlan` ← `vlan`, `manufacture` ← `manufacture`, `text` ← `text`, `nacrule_id` ← `nacruleId`, `dhcp_hostname` ← `dhcpHostname`, `dhcp_fqdn` ← `dhcpFqdn`, `dhcp_client_identifier` ← `dhcpClientIdentifier`, `dhcp_vendor_class_identifier` ← `dhcpVendorClassIdentifier`, `dhcp_request_params` ← `dhcpRequestParams`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchWiredClient`
- **Error**: `SdkException<SearchSiteWiredClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
