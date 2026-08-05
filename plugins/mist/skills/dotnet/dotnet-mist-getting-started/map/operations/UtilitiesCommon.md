# UtilitiesCommon — operations

Accessor: `client.UtilitiesCommon` · Source: `Api/UtilitiesCommon.cs` · 25 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ArpFromDevice
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/arp` (ApiHost (api))
- **Notes**: ARP can be performed on the Device. The output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } ``` Example output from ws stream ```json { "event": "data", "channel": "/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/devices/00000000-0000-0000-1000-5c5b350e0060/cmd", "data": { "session": "session_id", "raw": "Output": "\tMAC\t\tDEV\tVLAN\tRx Packets\t\t Rx Bytes\t\tTx Packets\t\t Tx Bytes\tFlows\tIdle sec\n-----------------------------------------------------------------------------------------------------------------------" } }
- **Signature**: `ArpFromDevice(Guid siteId, Guid deviceId, HaClusterNode? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ArpFromDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BounceDevicePort
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/bounce_port` (ApiHost (api))
- **Notes**: Port Bounce can be performed from Switch/Gateway. Note: Ports starting with vme, ae, irb, and HA control ports (for SSR only) are not supported The output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } ``` Example output from ws stream ```json { "event": "data", "channel": "/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/devices/00000000-0000-0000-1000-5c5b350e0060/cmd", "data": { "session": "session_id", "raw": "Port bounce complete." } }
- **Signature**: `BounceDevicePort(Guid siteId, Guid deviceId, UtilsBouncePort? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<BounceDevicePortError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClearSiteDeviceMacTable
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/clear_mac_table` (ApiHost (api))
- **Notes**: Clear MAC Table from the Device. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" }
- **Signature**: `ClearSiteDeviceMacTable(Guid siteId, Guid deviceId, UtilsMacTable? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ClearSiteDeviceMacTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClearSiteDevicePolicyHitCount
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/clear_policy_hit_count` (ApiHost (api))
- **Notes**: Clear application policy hit counts for all the policies
- **Signature**: `ClearSiteDevicePolicyHitCount(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSessionWithUrl`
- **Error**: `SdkException<ClearSiteDevicePolicyHitCountError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteDeviceShellSession
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/shell` (ApiHost (api))
- **Notes**: Create Shell Session
- **Signature**: `CreateSiteDeviceShellSession(Guid siteId, Guid deviceId, ShellNode? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSessionWithUrl`
- **Error**: `SdkException<CreateSiteDeviceShellSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteDeviceConfigCmd
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/{device_id}/config_cmd` (ApiHost (api))
- **Notes**: Get Config CLI Commands For a brown-field switch deployment where we adopted the switch through Adoption Command, we do not wipe out / overwrite the existing config automatically. Instead, we generate CLI commands that we would have generated. The user can inspect, modify, and incorporate this into their existing config manually. Once they feel comfortable about the config we generate, they can enable allow_mist_config where we will take full control of their config like a claimed switch
- **Signature**: `GetSiteDeviceConfigCmd(Guid siteId, Guid deviceId, bool? sort = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `sort` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `sort` ← `sort`
- **Returns**: `ResponseDeviceConfigCli`
- **Error**: `SdkException<GetSiteDeviceConfigCmdError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteDeviceZtpPassword
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/request_ztp_password` (ApiHost (api))
- **Notes**: In the case where something happens during/after ZTP, the root-password is modified (required for ZTP to set up outbound-ssh) but the user-defined password config has not be configured. This API can be used to retrieve the temporary password.
- **Signature**: `GetSiteDeviceZtpPassword(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RootPasswordString`
- **Error**: `SdkException<GetSiteDeviceZtpPasswordError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MonitorSiteDeviceTraffic
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/monitor_traffic` (ApiHost (api))
- **Notes**: Monitor traffic on switches and SRX. * JUNOS uses cmd "monitor interface &lt;port&gt;" to monitor traffic on particular &lt;port&gt; * JUNOS uses cmd "monitor interface traffic" to monitor traffic on all ports
- **Signature**: `MonitorSiteDeviceTraffic(Guid siteId, Guid deviceId, UtilsMonitorTraffic? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSessionWithUrl`
- **Error**: `SdkException<MonitorSiteDeviceTrafficError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PingFromDevice
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/ping` (ApiHost (api))
- **Notes**: Ping from AP, Switch and SSR Ping can be performed from the Device. The output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } ``` Example output from ws stream ```json { "event": "data", "channel": "/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/devices/00000000-0000-0000-1000-5c5b350e0060/cmd", "data": { "session": "session_id", "raw": "64 bytes from 23.211.0.110: seq=8 ttl=58 time=12.323 ms\n" } }
- **Signature**: `PingFromDevice(Guid siteId, Guid deviceId, UtilsPing? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<PingFromDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadoptSiteOctermDevice
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/readopt` (ApiHost (api))
- **Notes**: For the octerm devices, the device ID must come from fpc0. However, for a VC, the users may change the original fpc0 from CLI. To fix the issue, the readopt API could be used to trigger the readopt process so the device would get the correct device ID to connect the cloud.
- **Signature**: `ReadoptSiteOctermDevice(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReadoptSiteOctermDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReleaseSiteDeviceDhcpLease
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/release_dhcp_leases` (ApiHost (api))
- **Notes**: Releases an active DHCP lease.
- **Signature**: `ReleaseSiteDeviceDhcpLease(Guid siteId, Guid deviceId, UtilsReleaseDhcpLeases? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReleaseSiteDeviceDhcpLeaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReprovisionSiteOctermDevice
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/reprovision` (ApiHost (api))
- **Notes**: To force one device to reprovision itself again.
- **Signature**: `ReprovisionSiteOctermDevice(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReprovisionSiteOctermDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RestartSiteDevice
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/restart` (ApiHost (api))
- **Notes**: Restart / Reboot a device
- **Signature**: `RestartSiteDevice(Guid siteId, Guid deviceId, UtilsDevicesRestart? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RestartSiteDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RestartSiteMultipleDevices
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/restart` (ApiHost (api))
- **Notes**: Note that only the devices that are connected will be restarted.
- **Signature**: `RestartSiteMultipleDevices(Guid siteId, UtilsDevicesRestartMulti? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RestartSiteMultipleDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteDeviceArpTable
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_arp` (ApiHost (api))
- **Notes**: Get ARP Table from the Device. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" }
- **Signature**: `ShowSiteDeviceArpTable(Guid siteId, Guid deviceId, UtilsShowArp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteDeviceArpTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteDeviceBgpSummary
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_bgp_rummary` (ApiHost (api))
- **Notes**: Get BGP Summary from SSR, SRX and Switch. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } Example output from ws stream Tue 2024-04-23 16:36:06 UTC Retrieving bgp entries... BGP table version is 354, local router ID is 10.224.8.16, vrf id 0 Default local pref 100, local AS 65000 Status codes: s suppressed, d damped, h history, * valid, &gt; best, = multipath, i internal, r RIB_failure, S Stale, R Removed Nexthop codes: @NNN nexthop's vrf id, &lt; announce-nh-self Origin codes: i - IGP, e - EGP, ? - incomplete RPKI validation codes: V valid, I invalid, N Not found Network Next Hop Metric LocPrf Weight Path *&gt; 161.161.161.0/24
- **Signature**: `ShowSiteDeviceBgpSummary(Guid siteId, Guid deviceId, UtilsShowBgpSummary? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteDeviceBgpSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteDeviceDhcpLeases
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_dhcp_leases` (ApiHost (api))
- **Notes**: Shows DHCP leases
- **Signature**: `ShowSiteDeviceDhcpLeases(Guid siteId, Guid deviceId, UtilsShowDhcpLeases? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteDeviceDhcpLeasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteDeviceDot1XTable
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_dot1x` (ApiHost (api))
- **Notes**: Get Dot1X Table from the Device. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" }
- **Signature**: `ShowSiteDeviceDot1XTable(Guid siteId, Guid deviceId, UtilsShowDot1X? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteDeviceDot1XTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteDeviceEvpnDatabase
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_evpn_database` (ApiHost (api))
- **Notes**: Get EVPN Database from the Device. The output will be available through websocket.
- **Signature**: `ShowSiteDeviceEvpnDatabase(Guid siteId, Guid deviceId, UtilsShowEvpnDatabase? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteDeviceEvpnDatabaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteDeviceForwardingTable
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_forwarding_table` (ApiHost (api))
- **Notes**: Get forwarding table from the Device. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } Example output from ws stream Mon 2024-05-20 16:47:30 UTC Retrieving fib entries… Entry Count: 3268 Capacity: 22668 ==================== ====== ======= ================== ===== ====================== =========== =========== ====== IP Prefix Port Proto Tenant VRF Service Next Hops Vector Cost ==================== ====== ======= ================== ===== ====================== =========== =========== ====== 0.0.0.0/0 0 None Old_Mgmt - internet-wan_and_lte 1-2.0 broadband 1 1-4.0 lte 10 branch1-Kiosk - internet-wan_and_lte 1-2.0 broadband 1 1-4.0 lte 10 branch1-MGT - internet-wan_and_lte 1-2.0 broadband 1 1-4.0 lte 10 3.1.1.0/24 0 None Old_Mgmt - internet-wan_and_lte 1-2.0 broadband 1 1-4.0 lte 10 branch1-Kiosk - internet-wan_and_lte 1-2.0 broadband 1 1-4.0 lte 10 branch1-MGT - internet-wan_and_lte 1-2.0 broadband 1 1-4.0 lte 10
- **Signature**: `ShowSiteDeviceForwardingTable(Guid siteId, Guid deviceId, UtilsShowForwardingTable? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteDeviceForwardingTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteDeviceMacTable
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_mac_table` (ApiHost (api))
- **Notes**: Get MAC Table from the Device. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" }
- **Signature**: `ShowSiteDeviceMacTable(Guid siteId, Guid deviceId, UtilsMacTable? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteDeviceMacTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartSiteLocateDevice
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/locate` (ApiHost (api))
- **Notes**: Access Points Locate an Access Point by blinking it's LED. It is a persisted state that has to be stopped by calling Stop Locating API Switches Locate a Switch by blinking all port LEDs. By default, request is sent to `master` switch and LEDs will keep flashing for 5 minutes. In case of virtual chassis (VC) the desired member mac has to be passed in the request payload. At anypoint, only one VC member can be requested to flash the LED. To stop LED flashing before the duration ends /unlocate API request can be made. If /unlocate API is not called LED will continue to flash on device for the given duration. Default duration is 5 minutes and 120 minutes is the maximum.
- **Signature**: `StartSiteLocateDevice(Guid siteId, Guid deviceId, LocateSwitch? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StartSiteLocateDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StopSiteLocateDevice
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/unlocate` (ApiHost (api))
- **Notes**: Stop Locate a Device
- **Signature**: `StopSiteLocateDevice(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StopSiteLocateDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TracerouteFromDevice
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/traceroute` (ApiHost (api))
- **Notes**: Traceroute can be performed from the Device. The output will be available through websocket. As there can be multiple command issued against the same Device at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" }``` Example output from ws stream { "channel": "/sites/d6fb4f96-xxxx-xxxx-xxxx-xxxxxxxxxxxx/devices/00000000-0000-0000-1000-xxxxxxxxxxxx/cmd", "event": "data", "data": { "session": "9106e908-74dc-4a4f-9050-9c2adcaf44a5", "raw": "Running traceroute...\ntraceroute to 8.8.8.8, 64 hops max\n 0 192.168.1.1 1 ms 192.168.1.1 1 ms 192.168.1.1 1 ms\n 1 80.10.236.81 2 ms 80.10.236.81 4 ms 80.10.236.81 2 ms\n 2 193.253.80.250 3 ms 193.253.80.250 2 ms 193.253.80.250 2 ms\n 3 193.252.159.41 2 ms 193.252.159.41 1 ms 193.252.159.41 3 ms\n" } } "
- **Signature**: `TracerouteFromDevice(Guid siteId, Guid deviceId, UtilsTraceroute? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<TracerouteFromDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadSiteDeviceSupportFile
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/support` (ApiHost (api))
- **Notes**: Support / Upload device support files Info Param | Name | Type | Description | | --- | --- | --- | | process | string | Upload 1 file with output of show system processes extensive | | outbound-ssh | string | Upload 1 file that concatenates all /var/log/outbound-ssh.log* files | | messages | string | Upload 1 to 10 /var/log/messages* files | | core-dumps | string | Upload all core dump files, if any | | full | string | Upload 1 file with output of request support information, 1 file that concatenates all /var/log/outbound-ssh.log files, all core dump files, the 3 most recent /var/log/messages files, and Mist agent logs (for Junos devices running the Mist agent) | | var-logs | string | Upload all non-empty files in the /var/log/ directory | | jma-logs | string | Upload Mist agent logs (for Junos devices running the Mist agent only) | "
- **Signature**: `UploadSiteDeviceSupportFile(Guid siteId, Guid deviceId, UtilsSendSupportLogs? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadSiteDeviceSupportFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
