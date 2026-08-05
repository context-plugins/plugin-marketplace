# OrgsDevices — operations

Accessor: `client.OrgsDevices` · Source: `Api/OrgsDevices.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgDeviceEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Devices Events
- **Signature**: `CountOrgDeviceEvents(Guid orgId, OrgDevicesEventsCountDistinct? distinct, Guid? siteId, string? ap, string? apfw, string? model, string? text, string? timestamp, string? type, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `site_id` ← `siteId`, `ap` ← `ap`, `apfw` ← `apfw`, `model` ← `model`, `text` ← `text`, `timestamp` ← `timestamp`, `type` ← `type`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgDeviceEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgDeviceLastConfigs
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/last_config/count` (ApiHost (api))
- **Notes**: Counts the number of entries in device config history for distinct field with given filters
- **Signature**: `CountOrgDeviceLastConfigs(Guid orgId, DeviceTypeDefaultAp? type, OrgDevicesLastConfigsCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgDeviceLastConfigsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgDevices
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Devices
- **Signature**: `CountOrgDevices(Guid orgId, OrgDevicesCountDistinct? distinct, string? hostname, Guid? siteId, string? model, string? managed, string? mac, string? version, string? ipAddress, CountOrgDevicesMxtunnelStatus? mxtunnelStatus, Guid? mxedgeId, string? lldpSystemName, string? lldpSystemDesc, string? lldpPortId, string? lldpMgmtAddr, DeviceTypeDefaultAp? type, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 17 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `hostname` ← `hostname`, `site_id` ← `siteId`, `model` ← `model`, `managed` ← `managed`, `mac` ← `mac`, `version` ← `version`, `ip_address` ← `ipAddress`, `mxtunnel_status` ← `mxtunnelStatus`, `mxedge_id` ← `mxedgeId`, `lldp_system_name` ← `lldpSystemName`, `lldp_system_desc` ← `lldpSystemDesc`, `lldp_port_id` ← `lldpPortId`, `lldp_mgmt_addr` ← `lldpMgmtAddr`, `type` ← `type`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgJuniperDevicesCommand
- **HTTP**: `GET /api/v1/orgs/{org_id}/ocdevices/outbound_ssh_cmd` (ApiHost (api))
- **Notes**: Get Org Juniper Devices command Juniper devices can be managed/adopted by Mist. Currently outbound-ssh + netconf is used. A few lines of CLI commands are generated per-Org, allowing the Juniper devices to phone home to Mist.
- **Signature**: `GetOrgJuniperDevicesCommand(Guid orgId, string? siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `siteId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`
- **Returns**: `ResponseDeviceConfigCmd`
- **Error**: `SdkException<GetOrgJuniperDevicesCommandError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgApsMacs
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/radio_macs` (ApiHost (api))
- **Notes**: For some scenarios like E911 or security systems, the BSSIDs are required to identify which AP the client is connecting to. Then the location of the AP can be used as the approximate location of the client. Each radio MAC can have 16 BSSIDs (enumerate the last octet from 0-F)
- **Signature**: `ListOrgApsMacs(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<ApRadioMac>`
- **Error**: `SdkException<ListOrgApsMacsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListOrgDevices
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices` (ApiHost (api))
- **Notes**: Get List of Org Devices
- **Signature**: `ListOrgDevices(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseOrgDevices`
- **Error**: `SdkException<ListOrgDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgDevicesSummary
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/summary` (ApiHost (api))
- **Notes**: Get Org Devices Summary
- **Signature**: `ListOrgDevicesSummary(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseOrgDevicesSummary`
- **Error**: `SdkException<ListOrgDevicesSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgDeviceEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/events/search` (ApiHost (api))
- **Notes**: Search Org Devices Events
- **Signature**: `SearchOrgDeviceEvents(Guid orgId, string? mac, string? model, DeviceTypeWithAll? deviceType, string? text, string? timestamp, string? type, string? lastBy, string? includes, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `model` ← `model`, `device_type` ← `deviceType`, `text` ← `text`, `timestamp` ← `timestamp`, `type` ← `type`, `last_by` ← `lastBy`, `includes` ← `includes`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseDeviceEventsSearch`
- **Error**: `SdkException<SearchOrgDeviceEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgDeviceLastConfigs
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/last_config/search` (ApiHost (api))
- **Notes**: Search Device Last Configs
- **Signature**: `SearchOrgDeviceLastConfigs(Guid orgId, DeviceTypeDefaultAp? type, string? mac, string? name, string? version, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `mac` ← `mac`, `name` ← `name`, `version` ← `version`, `start` ← `start`, `end` ← `end`, `limit` ← `limit`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseConfigHistorySearch`
- **Error**: `SdkException<SearchOrgDeviceLastConfigsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgDevices
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/search` (ApiHost (api))
- **Notes**: Search Org Devices
- **Signature**: `SearchOrgDevices(Guid orgId, int? band24Bandwidth, int? band24Channel, int? band24Power, int? band5Bandwidth, int? band5Channel, int? band5Power, int? band6Bandwidth, int? band6Channel, int? band6Power, string? cpu, string? clustered, int? eth0PortSpeed, string? evpntopoId, string? extIp, string? hostname, string? ipAddress, string? lastConfigStatus, string? lastHostname, string? lldpMgmtAddr, string? lldpPortId, int? lldpPowerAllocated, int? lldpPowerDraw, string? lldpSystemDesc, string? lldpSystemName, string? mac, string? model, string? mxedgeId, string? mxedgeIds, SearchOrgDevicesMxtunnelStatus? mxtunnelStatus, string? node, string? node0Mac, string? node1Mac, bool? powerConstrained, string? siteId, string? t128AgentVersion, string? version, DeviceTypeDefaultAp? type, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 39 params (`band24Bandwidth` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `band_24_bandwidth` ← `band24Bandwidth`, `band_24_channel` ← `band24Channel`, `band_24_power` ← `band24Power`, `band_5_bandwidth` ← `band5Bandwidth`, `band_5_channel` ← `band5Channel`, `band_5_power` ← `band5Power`, `band_6_bandwidth` ← `band6Bandwidth`, `band_6_channel` ← `band6Channel`, `band_6_power` ← `band6Power`, `cpu` ← `cpu`, `clustered` ← `clustered`, `eth0_port_speed` ← `eth0PortSpeed`, `evpntopo_id` ← `evpntopoId`, `ext_ip` ← `extIp`, `hostname` ← `hostname`, `ip_address` ← `ipAddress`, `last_config_status` ← `lastConfigStatus`, `last_hostname` ← `lastHostname`, `lldp_mgmt_addr` ← `lldpMgmtAddr`, `lldp_port_id` ← `lldpPortId`, `lldp_power_allocated` ← `lldpPowerAllocated`, `lldp_power_draw` ← `lldpPowerDraw`, `lldp_system_desc` ← `lldpSystemDesc`, `lldp_system_name` ← `lldpSystemName`, `mac` ← `mac`, `model` ← `model`, `mxedge_id` ← `mxedgeId`, `mxedge_ids` ← `mxedgeIds`, `mxtunnel_status` ← `mxtunnelStatus`, `node` ← `node`, `node0_mac` ← `node0Mac`, `node1_mac` ← `node1Mac`, `power_constrained` ← `powerConstrained`, `site_id` ← `siteId`, `t128agent_version` ← `t128AgentVersion`, `version` ← `version`, `type` ← `type`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseDeviceSearch`
- **Error**: `SdkException<SearchOrgDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
