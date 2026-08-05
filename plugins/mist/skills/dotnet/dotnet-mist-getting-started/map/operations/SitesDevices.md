# SitesDevices — operations

Accessor: `client.SitesDevices` · Source: `Api/SitesDevices.cs` · 17 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddSiteDeviceImage
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/image{image_number}` (ApiHost (api))
- **Notes**: Attach up to 3 images to a device
- **Signature**: `AddSiteDeviceImage(Guid siteId, Guid deviceId, int imageNumber, BinaryContent file, string? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `json` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddSiteDeviceImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ChangeSiteSwitchVcPortMode
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/set_vc_port_mode` (ApiHost (api))
- **Notes**: Change VCP port mode Some switch model allows changing VCP port behaviors, e.g. - use them as regular network ports - change vcp protocol Note, this command will reboot the switch
- **Signature**: `ChangeSiteSwitchVcPortMode(Guid siteId, Guid deviceId, VcPort? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ChangeSiteSwitchVcPortModeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountSiteDeviceConfigHistory
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/config_history/count` (ApiHost (api))
- **Notes**: Counts the number of entries in device config history for distinct field with given filters
- **Signature**: `CountSiteDeviceConfigHistory(Guid siteId, string? distinct, string? mac, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `mac` ← `mac`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteDeviceConfigHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountSiteDeviceEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/events/count` (ApiHost (api))
- **Notes**: Counts the number of entries in ap events history for distinct field with given filters
- **Signature**: `CountSiteDeviceEvents(Guid siteId, SiteDeviceEventsCountDistinct? distinct, string? model, string? type, string? typeCode, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `model` ← `model`, `type` ← `type`, `type_code` ← `typeCode`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteDeviceEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountSiteDeviceLastConfig
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/last_config/count` (ApiHost (api))
- **Notes**: Counts the number of entries in device config history for distinct field with given filters
- **Signature**: `CountSiteDeviceLastConfig(Guid siteId, SiteDeviceLastConfigCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteDeviceLastConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountSiteDevices
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/count` (ApiHost (api))
- **Notes**: Counts the number of entries in ap events history for distinct field with given filters
- **Signature**: `CountSiteDevices(Guid siteId, SiteDevicesCountDistinct? distinct, string? hostname, string? model, string? mac, string? version, string? mxtunnelStatus, string? mxedgeId, string? lldpSystemName, string? lldpSystemDesc, string? lldpPortId, string? lldpMgmtAddr, string? mapId, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `hostname` ← `hostname`, `model` ← `model`, `mac` ← `mac`, `version` ← `version`, `mxtunnel_status` ← `mxtunnelStatus`, `mxedge_id` ← `mxedgeId`, `lldp_system_name` ← `lldpSystemName`, `lldp_system_desc` ← `lldpSystemDesc`, `lldp_port_id` ← `lldpPortId`, `lldp_mgmt_addr` ← `lldpMgmtAddr`, `map_id` ← `mapId`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteDeviceImage
- **HTTP**: `DELETE /api/v1/sites/{site_id}/devices/{device_id}/image{image_number}` (ApiHost (api))
- **Notes**: Delete image from a device
- **Signature**: `DeleteSiteDeviceImage(Guid siteId, Guid deviceId, int imageNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteDeviceImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ExportSiteDevices
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/export` (ApiHost (api))
- **Notes**: To download the exported device information
- **Signature**: `ExportSiteDevices(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<ExportSiteDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteDevice
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/{device_id}` (ApiHost (api))
- **Notes**: Get Device Configuration
- **Signature**: `GetSiteDevice(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MistDevice`
- **Error**: `SdkException<GetSiteDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportSiteDevices
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/import` (ApiHost (api))
- **Notes**: Import Information for Multiple Devices CSV format: mac,name,map_id,x,y,height,orientation,labels,band_24.power,band_24.bandwidth,band_24.channel,band_24.disabled,band_5.power,band_5.bandwidth,band_5.channel,band_5.disabled,band_6.power,band_6.bandwidth,band_6.channel,band_6.disabled 5c5b53010101,"AP 1",845a23bf-bed9-e43c-4c86-6fa474be7ae5,30,10,2.3,45,"guest, campus, vip",1,20,0,false,0,40,0,false,17,80,0,false
- **Signature**: `ImportSiteDevices(Guid siteId, BinaryContent file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ConfigDevice>`
- **Error**: `SdkException<ImportSiteDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteDevices
- **HTTP**: `GET /api/v1/sites/{site_id}/devices` (ApiHost (api))
- **Notes**: Get list of devices on the site.
- **Signature**: `ListSiteDevices(Guid siteId, DeviceTypeWithAll? type, string? name, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `name` ← `name`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<ConfigDevice>`
- **Error**: `SdkException<ListSiteDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchSiteDeviceConfigHistory
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/config_history/search` (ApiHost (api))
- **Notes**: Search for entries in device config history
- **Signature**: `SearchSiteDeviceConfigHistory(Guid siteId, DeviceTypeDefaultAp? type, string? mac, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `mac` ← `mac`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseConfigHistorySearch`
- **Error**: `SdkException<SearchSiteDeviceConfigHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteDeviceEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/events/search` (ApiHost (api))
- **Notes**: Search Devices Events
- **Signature**: `SearchSiteDeviceEvents(Guid siteId, string? mac, string? model, string? text, string? timestamp, string? type, string? lastBy, string? includes, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `model` ← `model`, `text` ← `text`, `timestamp` ← `timestamp`, `type` ← `type`, `last_by` ← `lastBy`, `includes` ← `includes`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseEventsDevices`
- **Error**: `SdkException<SearchSiteDeviceEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteDeviceLastConfigs
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/last_config/search` (ApiHost (api))
- **Notes**: Search Device Last Configs
- **Signature**: `SearchSiteDeviceLastConfigs(Guid siteId, DeviceTypeDefaultAp? type, string? mac, string? version, string? name, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `mac` ← `mac`, `version` ← `version`, `name` ← `name`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseConfigHistorySearch`
- **Error**: `SdkException<SearchSiteDeviceLastConfigsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteDevices
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/search` (ApiHost (api))
- **Notes**: Search Device
- **Signature**: `SearchSiteDevices(Guid siteId, string? hostname, DeviceTypeDefaultAp? type, string? model, string? ip, string? mac, string? extIp, string? version, bool? powerConstrained, string? ipAddress, SearchSiteDevicesMxtunnelStatus? mxtunnelStatus, Guid? mxedgeId, IReadOnlyList<Guid>? mxedgeIds, string? lastHostname, string? lastConfigStatus, string? radiusStats, string? cpu, string? node0Mac, bool? clustered, string? t128AgentVersion, string? node1Mac, HaClusterNodeEnum? node, string? evpntopoId, string? lldpSystemName, string? lldpSystemDesc, string? lldpPortId, string? lldpMgmtAddr, int? band24Channel, int? band5Channel, int? band6Channel, int? band24Bandwidth, int? band5Bandwidth, int? band6Bandwidth, int? eth0PortSpeed, int? start, int? end, SearchSiteDevicesSort? sort, SearchSiteDevicesDescSort? descSort, bool? stats = false, int? limit = 100, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 37 params (`hostname` … `descSort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `stats` = false, `limit` = 100, `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `hostname` ← `hostname`, `type` ← `type`, `model` ← `model`, `ip` ← `ip`, `mac` ← `mac`, `ext_ip` ← `extIp`, `version` ← `version`, `power_constrained` ← `powerConstrained`, `ip_address` ← `ipAddress`, `mxtunnel_status` ← `mxtunnelStatus`, `mxedge_id` ← `mxedgeId`, `mxedge_ids` ← `mxedgeIds`, `last_hostname` ← `lastHostname`, `last_config_status` ← `lastConfigStatus`, `radius_stats` ← `radiusStats`, `cpu` ← `cpu`, `node0_mac` ← `node0Mac`, `clustered` ← `clustered`, `t128agent_version` ← `t128AgentVersion`, `node1_mac` ← `node1Mac`, `node` ← `node`, `evpntopo_id` ← `evpntopoId`, `lldp_system_name` ← `lldpSystemName`, `lldp_system_desc` ← `lldpSystemDesc`, `lldp_port_id` ← `lldpPortId`, `lldp_mgmt_addr` ← `lldpMgmtAddr`, `band_24_channel` ← `band24Channel`, `band_5_channel` ← `band5Channel`, `band_6_channel` ← `band6Channel`, `band_24_bandwidth` ← `band24Bandwidth`, `band_5_bandwidth` ← `band5Bandwidth`, `band_6_bandwidth` ← `band6Bandwidth`, `eth0_port_speed` ← `eth0PortSpeed`, `stats` ← `stats`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`, `desc_sort` ← `descSort`
- **Returns**: `ResponseDeviceSearch`
- **Error**: `SdkException<SearchSiteDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetSiteApAntennaMode
- **HTTP**: `PUT /api/v1/sites/{site_id}/devices/{device_id}/set_ant_mode` (ApiHost (api))
- **Notes**: Set AP Antenna Mode
- **Signature**: `SetSiteApAntennaMode(Guid siteId, Guid deviceId, ApAntennaMode? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetSiteApAntennaModeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteDevice
- **HTTP**: `PUT /api/v1/sites/{site_id}/devices/{device_id}` (ApiHost (api))
- **Notes**: Update Device Configuration
- **Signature**: `UpdateSiteDevice(Guid siteId, Guid deviceId, MistDevice? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MistDevice`
- **Error**: `SdkException<UpdateSiteDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
