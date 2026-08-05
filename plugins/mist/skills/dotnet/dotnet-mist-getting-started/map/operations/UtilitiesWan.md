# UtilitiesWan — operations

Accessor: `client.UtilitiesWan` · Source: `Api/UtilitiesWan.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ClearSiteDeviceSession
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/clear_session` (ApiHost (api))
- **Notes**: Clear session
- **Signature**: `ClearSiteDeviceSession(Guid siteId, Guid deviceId, UtilsClearSession? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ClearSiteDeviceSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClearSiteSsrArpCache
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/clear_arp` (ApiHost (api))
- **Notes**: Clear ARP cache for SSR, SRX and Switch Clear the entire ARP cache or a subset if arguments are provided. *Note*: port_id is optional if neither vlan nor ip is specified
- **Signature**: `ClearSiteSsrArpCache(Guid siteId, Guid deviceId, UtilsClearArp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ClearSiteSsrArpCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClearSiteSsrBgpRoutes
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/clear_bgp` (ApiHost (api))
- **Notes**: Clear routes associated with one or all BGP neighbors
- **Signature**: `ClearSiteSsrBgpRoutes(Guid siteId, Guid deviceId, UtilsClearBgp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ClearSiteSsrBgpRoutesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReleaseSiteSsrDhcpLease
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/release_dhcp` (ApiHost (api))
- **Notes**: Releases an active DHCP lease. The output will be available through websocket. As there can be multiple command issued against the same Device at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" }``` Example output from ws stream { "channel": "/sites/d6fb4f96-xxxx-xxxx-xxxx-xxxxxxxxxxxx/devices/00000000-0000-0000-1000-xxxxxxxxxxxx/cmd", "event": "data", "data": { "session": "9106e908-74dc-4a4f-9050-9c2adcaf44a5", "raw": "Running traceroute...\ntraceroute to 8.8.8.8, 64 hops max\n 0 192.168.1.1 1 ms 192.168.1.1 1 ms 192.168.1.1 1 ms\n 1 80.10.236.81 2 ms 80.10.236.81 4 ms 80.10.236.81 2 ms\n 2 193.253.80.250 3 ms 193.253.80.250 2 ms 193.253.80.250 2 ms\n 3 193.252.159.41 2 ms 193.252.159.41 1 ms 193.252.159.41 3 ms\n" } } "
- **Signature**: `ReleaseSiteSsrDhcpLease(Guid siteId, Guid deviceId, UtilsReleaseDhcp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ReleaseSiteSsrDhcpLeaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RunSiteSrxTopCommand
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/run_top` (ApiHost (api))
- **Notes**: Run top command on switches and SRX. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" }
- **Signature**: `RunSiteSrxTopCommand(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSessionWithUrl`
- **Error**: `SdkException<RunSiteSrxTopCommandError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ServicePingFromSsr
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/service_ping` (ApiHost (api))
- **Notes**: Ping from SSR Service Ping can be performed from the Device. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } ``` Example output from ws stream ```json { "event": "data", "channel": "/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/devices/00000000-0000-0000-1000-5c5b350e0060/cmd", "data": { "session": "session_id", "raw": "64 bytes from 23.211.0.110: seq=8 ttl=58 time=12.323 ms\n" } }
- **Signature**: `ServicePingFromSsr(Guid siteId, Guid deviceId, UtilsServicePing? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ServicePingFromSsrError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteGatewayOspfDatabase
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_ospf_database` (ApiHost (api))
- **Notes**: Get OSPF Database from SSR and SRX. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } Example output from ws stream ===== ==================== ========== ======= ======== ================ =================== ================= Vrf Neighbor Router ID Priority State Uptime Dead Timer Due Interface Address Interface State ===== ==================== ========== ======= ======== ================ =================== ================= 1.0.0.3 1 Full 852 38 172.16.3.2 Backup 1.0.0.4 1 Full 811 33 172.16.3.2 DROther 1.0.0.3 1 Full 852 38 172.16.4.2 Backup 1.0.0.4 1 Full 811 34 172.16.4.2 DROther
- **Signature**: `ShowSiteGatewayOspfDatabase(Guid siteId, Guid deviceId, UtilsShowOspfDatabase? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteGatewayOspfDatabaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteGatewayOspfInterfaces
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_ospf_interfaces` (ApiHost (api))
- **Notes**: Get OSPF interfaces from SSR and SRX. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } Example output from ws stream ===== ================== =================== ============== =============== =========== ========= =========== Vrf Device Interface Network Interface Interface Up IP Address OSPF Type Area ID Area Type ===== ================== =================== ============== =============== =========== ========= =========== net1 g1 True 172.16.1.2/24 Broadcast 0.0.0.0 default net3 g3 True 172.16.3.2/24 Broadcast 0.0.0.0 default net4 g4 True 172.16.4.2/24 Broadcast 0.0.0.4 default
- **Signature**: `ShowSiteGatewayOspfInterfaces(Guid siteId, Guid deviceId, UtilsShowOspfInterfaces? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteGatewayOspfInterfacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteGatewayOspfNeighbors
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_ospf_neighbors` (ApiHost (api))
- **Notes**: Get OSPF Neighbors from SSR and SRX. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } Example output from ws stream ===== ==================== ========== ======= ======== ================ =================== ================= Vrf Neighbor Router ID Priority State Uptime Dead Timer Due Interface Address Interface State ===== ==================== ========== ======= ======== ================ =================== ================= 1.0.0.3 1 Full 852 38 172.16.3.2 Backup 1.0.0.4 1 Full 811 33 172.16.3.2 DROther 1.0.0.3 1 Full 852 38 172.16.4.2 Backup 1.0.0.4 1 Full 811 34 172.16.4.2 DROther
- **Signature**: `ShowSiteGatewayOspfNeighbors(Guid siteId, Guid deviceId, UtilsShowOspfNeighbors? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteGatewayOspfNeighborsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteGatewayOspfSummary
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_ospf_summary` (ApiHost (api))
- **Notes**: Get OSPF summary from SSR and SRX. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } Example output from ws stream ===== =========== ========== ============= ==================== ========= =========== ============= Vrf Router ID ABR Type ASBR Router External LSA Count Area ID Area Type Area Border Router ===== =========== ========== ============= ==================== ========= =========== ============= 1.0.0.2 cisco False 0 0.0.0.0 1.0.0.2 cisco False 0 0.0.0.4 default
- **Signature**: `ShowSiteGatewayOspfSummary(Guid siteId, Guid deviceId, UtilsShowOspfSummary? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteGatewayOspfSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteSsrAndSrxRoutes
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_route` (ApiHost (api))
- **Notes**: Get routes from SSR, SRX and Switch. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, `session` is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } ``` Example output from ws stream ``` admin@labsystem1.fiedlershow bgp neighbors BGP neighbor is 192.168.4.1, remote AS 4200000001, local AS 4200000128, external link BGP version 4, remote router ID 1.1.1.1 BGP state = Established, up for 00:27:25 Last read 00:00:25, hold time is 90, keepalive interval is 30 seconds Configured hold time is 90, keepalive interval is 30 seconds Neighbor capabilities: 4 Byte AS: advertised and received Route refresh: advertised and received(old &amp;amp; new) Address family IPv4 Unicast: advertised and received Graceful Restart Capability: advertised and received Remote Restart timer is 120 seconds Address families by peer: none ...
- **Signature**: `ShowSiteSsrAndSrxRoutes(Guid siteId, Guid deviceId, UtilsShowRoute? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteSsrAndSrxRoutesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteSsrAndSrxSessions
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_session` (ApiHost (api))
- **Notes**: Get active sessions passing through the Device. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` Example output from ws stream
- **Signature**: `ShowSiteSsrAndSrxSessions(Guid siteId, Guid deviceId, UtilsShowSession? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteSsrAndSrxSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ShowSiteSsrServicePath
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/show_service_path` (ApiHost (api))
- **Notes**: Get service path information of the Device. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` Example output from ws stream
- **Signature**: `ShowSiteSsrServicePath(Guid siteId, Guid deviceId, UtilsShowServicePath? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<ShowSiteSsrServicePathError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TestSiteSsrDnsResolution
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/resolve_dns` (ApiHost (api))
- **Notes**: DNS resolutions are performed on the Device. The output will be available through websocket. As there can be multiple command issued against the same SSR at the same time and the output all goes through the same websocket stream, `session` is used for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } ``` Example output from ws stream ``` Router | Hostname | Resolved | Last Resolved | Expiration -------------|------------------------|----------|----------------------|--------------------- test-device | xxx.yyy.net | Y | 2022-03-28T03:56:49Z | 2022-03-28T03:57:49Z
- **Signature**: `TestSiteSsrDnsResolution(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<TestSiteSsrDnsResolutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
