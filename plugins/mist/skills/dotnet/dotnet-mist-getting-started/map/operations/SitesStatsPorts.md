# SitesStatsPorts — operations

Accessor: `client.SitesStatsPorts` · Source: `Api/SitesStatsPorts.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteSwOrGwPorts
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/ports/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Switch/Gateway Ports
- **Signature**: `CountSiteSwOrGwPorts(Guid siteId, SitePortsCountDistinct? distinct, bool? fullDuplex, string? mac, string? neighborMac, string? neighborPortDesc, string? neighborSystemName, bool? poeDisabled, string? poeMode, bool? poeOn, string? portId, string? portMac, double? powerDraw, int? txPkts, int? rxPkts, int? rxBytes, int? txBps, int? rxBps, int? txMcastPkts, int? txBcastPkts, int? rxMcastPkts, int? rxBcastPkts, int? speed, CountPortsStpState? stpState, CountPortsStpRole? stpRole, CountPortsAuthState? authState, bool? up, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 28 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `full_duplex` ← `fullDuplex`, `mac` ← `mac`, `neighbor_mac` ← `neighborMac`, `neighbor_port_desc` ← `neighborPortDesc`, `neighbor_system_name` ← `neighborSystemName`, `poe_disabled` ← `poeDisabled`, `poe_mode` ← `poeMode`, `poe_on` ← `poeOn`, `port_id` ← `portId`, `port_mac` ← `portMac`, `power_draw` ← `powerDraw`, `tx_pkts` ← `txPkts`, `rx_pkts` ← `rxPkts`, `rx_bytes` ← `rxBytes`, `tx_bps` ← `txBps`, `rx_bps` ← `rxBps`, `tx_mcast_pkts` ← `txMcastPkts`, `tx_bcast_pkts` ← `txBcastPkts`, `rx_mcast_pkts` ← `rxMcastPkts`, `rx_bcast_pkts` ← `rxBcastPkts`, `speed` ← `speed`, `stp_state` ← `stpState`, `stp_role` ← `stpRole`, `auth_state` ← `authState`, `up` ← `up`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteSwOrGwPortsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteSwOrGwPorts
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/ports/search` (ApiHost (api))
- **Notes**: Search Switch / Gateway Ports
- **Signature**: `SearchSiteSwOrGwPorts(Guid siteId, bool? fullDuplex, bool? disabled, string? mac, SearchSiteSwOrGwPortsDeviceType? deviceType, string? neighborMac, string? neighborPortDesc, string? neighborSystemName, bool? poeDisabled, string? poeMode, bool? poeOn, string? portId, string? portMac, double? powerDraw, int? txPkts, int? rxPkts, int? rxBytes, int? txBps, int? rxBps, int? txErrors, int? rxErrors, int? txMcastPkts, int? txBcastPkts, int? rxMcastPkts, int? rxBcastPkts, int? speed, int? macLimit, int? macCount, bool? up, bool? active, double? jitter, double? loss, double? latency, SearchSiteSwOrGwPortsStpState? stpState, SearchSiteSwOrGwPortsStpRole? stpRole, string? xcvrPartNumber, SearchSiteSwOrGwPortsAuthState? authState, string? lteImsi, string? lteIccid, string? lteImei, double? opticsBiasCurrent, double? opticsTxPower, double? opticsRxPower, double? opticsModuleTemperature, double? opticsModuleVoltage, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 46 params (`fullDuplex` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `full_duplex` ← `fullDuplex`, `disabled` ← `disabled`, `mac` ← `mac`, `device_type` ← `deviceType`, `neighbor_mac` ← `neighborMac`, `neighbor_port_desc` ← `neighborPortDesc`, `neighbor_system_name` ← `neighborSystemName`, `poe_disabled` ← `poeDisabled`, `poe_mode` ← `poeMode`, `poe_on` ← `poeOn`, `port_id` ← `portId`, `port_mac` ← `portMac`, `power_draw` ← `powerDraw`, `tx_pkts` ← `txPkts`, `rx_pkts` ← `rxPkts`, `rx_bytes` ← `rxBytes`, `tx_bps` ← `txBps`, `rx_bps` ← `rxBps`, `tx_errors` ← `txErrors`, `rx_errors` ← `rxErrors`, `tx_mcast_pkts` ← `txMcastPkts`, `tx_bcast_pkts` ← `txBcastPkts`, `rx_mcast_pkts` ← `rxMcastPkts`, `rx_bcast_pkts` ← `rxBcastPkts`, `speed` ← `speed`, `mac_limit` ← `macLimit`, `mac_count` ← `macCount`, `up` ← `up`, `active` ← `active`, `jitter` ← `jitter`, `loss` ← `loss`, `latency` ← `latency`, `stp_state` ← `stpState`, `stp_role` ← `stpRole`, `xcvr_part_number` ← `xcvrPartNumber`, `auth_state` ← `authState`, `lte_imsi` ← `lteImsi`, `lte_iccid` ← `lteIccid`, `lte_imei` ← `lteImei`, `optics_bias_current` ← `opticsBiasCurrent`, `optics_tx_power` ← `opticsTxPower`, `optics_rx_power` ← `opticsRxPower`, `optics_module_temperature` ← `opticsModuleTemperature`, `optics_module_voltage` ← `opticsModuleVoltage`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseSwitchPortSearch`
- **Error**: `SdkException<SearchSiteSwOrGwPortsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
