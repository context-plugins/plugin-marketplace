# OrgsClientsWired — operations

Accessor: `client.OrgsClientsWired` · Source: `Api/OrgsClientsWired.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgWiredClients
- **HTTP**: `GET /api/v1/orgs/{org_id}/wired_clients/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Clients Note: For list of available `type` values, please refer to List Client Events Definitions
- **Signature**: `CountOrgWiredClients(Guid orgId, OrgWiredClientsCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgWiredClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgWiredClients
- **HTTP**: `GET /api/v1/orgs/{org_id}/wired_clients/search` (ApiHost (api))
- **Notes**: Search for Wired Clients in org Note: For list of available `type` values, please refer to List Client Events Definitions
- **Signature**: `SearchOrgWiredClients(Guid orgId, string? authState, string? authMethod, ClientInfoSource? source, string? siteId, string? deviceMac, string? mac, string? portId, int? vlan, string? ipAddress, string? manufacture, string? text, string? nacruleId, string? dhcpHostname, string? dhcpFqdn, string? dhcpClientIdentifier, string? dhcpVendorClassIdentifier, string? dhcpRequestParams, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 19 params (`authState` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `auth_state` ← `authState`, `auth_method` ← `authMethod`, `source` ← `source`, `site_id` ← `siteId`, `device_mac` ← `deviceMac`, `mac` ← `mac`, `port_id` ← `portId`, `vlan` ← `vlan`, `ip_address` ← `ipAddress`, `manufacture` ← `manufacture`, `text` ← `text`, `nacrule_id` ← `nacruleId`, `dhcp_hostname` ← `dhcpHostname`, `dhcp_fqdn` ← `dhcpFqdn`, `dhcp_client_identifier` ← `dhcpClientIdentifier`, `dhcp_vendor_class_identifier` ← `dhcpVendorClassIdentifier`, `dhcp_request_params` ← `dhcpRequestParams`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchWiredClient`
- **Error**: `SdkException<SearchOrgWiredClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
