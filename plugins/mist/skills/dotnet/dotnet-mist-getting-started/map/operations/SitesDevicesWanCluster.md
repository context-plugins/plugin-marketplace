# SitesDevicesWanCluster — operations

Accessor: `client.SitesDevicesWanCluster` · Source: `Api/SitesDevicesWanCluster.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteDeviceHaClusterNode
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/{device_id}/ha` (ApiHost (api))
- **Notes**: Delete HA Cluster
- **Signature**: `GetSiteDeviceHaClusterNode(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GatewayCluster`
- **Error**: `SdkException<GetSiteDeviceHaClusterNodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteDeviceHaCluster
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/ha` (ApiHost (api))
- **Notes**: Create HA Cluster Both nodes has to be in the same site. We expect the user to configure ha_sync / ha_data port in port_configs already SRX cabling see Chassis Cluster User Guide for SRX Series Devices Here’s the recommended cabling. SRX300 From ZTP / default state, ge-0/0/0 and ge-0/0/7 (SFP) are default WAN ports and will get DHCP IP. However, ge-0/0/0 becomes OOB/fxp0 after cluster is enabled (i.e. using it for reach Mist is not recommended) form cluster in UI configure ge-0/0/7,ge-1/0/7 for WAN (reth0) configure ge-0/0/2,ge-1/0/2 for ha_data configure ge-0/0/3- for LAN or additional WAN e.g. { "port_config": { "ge-0/0/2,ge-1/0/2": { "usage": "ha_data" }, "ge-0/0/7,ge-1/0/7": { "usage": "wan", "redundant": true, "reth_idx": 0, "ip_config": {"type": "dhcp"} }, } } connect ge-0/0/1 back to back for ha_control connect ge-0/0/2 back to back for ha_data connect both ge-0/0/7 to uplink switch to WAN and to reach Mist power up both devices it takes about 30 minutes for the cluster to form SRX320 From ZTP / default state, ge-0/0/0, ge-0/0/7 (SFP) and cl-1/0/0 (LTE) are default WAN ports and will get DHCP IP. However, ge-0/0/0 becomes OOB/fxp0 after cluster is enabled (i.e. using it for reach Mist is not recommended) ZTP via ge-0/0/7 Similar to SRX300 ZTP via cl-1/0/0 (LTE) form cluster in UI configure cl-1/0/0, cl-3/0/0 as WAN (reth0) configure ge-0/0/2,ge-3/0/2 for ha_data same as above SRX340 / SRX345 / SRX380 SRX340/SRX345 has dedicated OOB/fxp0 ports form cluster in UI configure ge-0/0/0,ge-5/0/0 for WAN (reth0) configure ge-0/0/2,ge-5/0/2 for ha_data configure ge-0/0/3- for LAN or additional WAN connect ge-0/0/0 to uplink switch to WAN and to reach Mist connect ge-0/0/1 back-to-back for ha_control connect ge-0/0/2 back-to-back for ha_data (fabric); or for SRX380, xe-0/0/16 if 10G SFP+ is used connect ge-0/0/3- to LAN or additional WANs SRX550 ge-0/0/0 becomes OOB/fxp0 after cluster is enabled, make enable oob_ip_config as dhcp to maintain cloud connectivity connect ge-0/0/0 to reach Mist (after cluster is fully up, this port becomes OOB/fxp0) connect ge-0/0/1 back-to-back for ha_control connect ge-0/0/2 back-to-back for ha_data (fabric) connect ge-0/0/3 to WAN (after cluster is up, intended to be used for reth0) connect ge-0/0/4- to LAN or additional WANs SRX1500 SRX1500 has, additionally, dedicated HA Control port form cluster in UI configure ge-0/0/0,ge-5/0/0 for WAN (reth0) configure ge-0/0/1,ge-5/0/1 for ha_data configure ge-0/0/2- for LAN or additional WAN connect dedicated ha_control back-to-back connect ge-0/0/0 to uplink switch to WAN and to reach Mist connect ge-0/0/1 back-to-back for ha_data connect ge-0/0/2- to LAN or additional WANs SRX4100 SRX4100 has dedicated ha_control and ha_data (fabric) ports connect dedicated ha_control back-to-back connect dedicated ha_data back-to-back connect xe-0/0/0 to WAN to reach Mist connect xe-0/0/1- to LAN or additional WANs VSRX When standalone, VSRX has fxp0 as first Network Adapter, then ge-0/0/0-N When clustered, VSRX has fxp0, em0, then ge-0/0/0-N connect net0 (fxp0) to WAN to reach Mist connect net1 back-to-back for ha_control connect net2 (ge-0/0/0) back-to-back for ha_data (fab0/fab1) connect net3 (ge-0/0/1) to WAN, intended to be used for reth0 connect net4 (ge-0/0/2) to LAN SRX340/SRX345 has dedicated OOB/fxp0 ports VSRX has fxp0 as first Network Adapter, then ge-0/0/0-N connect ge-0/0/0 to WAN to reach Mist connect ge-0/0/1 back-to-back for ha_control connect ge-0/0/2 back-to-back for ha_data (fabric); or for SRX380, xe-0/0/16 if 10G SFP+ is used connect ge-0/0/3- to LAN or additional WANs SRX550 ge-0/0/0 becomes OOB/fxp0 after cluster is enabled, make enable oob_ip_config as dhcp to maintain cloud connectivity connect ge-0/0/0 to reach Mist (after cluster is fully up, this port becomes OOB/fxp0) connect ge-0/0/1 back-to-back for ha_control connect ge-0/0/2 back-to-back for ha_data (fabric) connect ge-0/0/3 to WAN (after cluster is up, intended to be used for reth0) connect ge-0/0/4- to LAN or additional WANs SRX1500 SRX1500 has, additionally, dedicated HA Control port form cluster in UI configure ge-0/0/0,ge-7/0/0 for WAN (reth0) configure ge-0/0/1,ge-7/0/1 for ha_data configure ge-0/0/2- for LAN or additional WAN connect dedicated ha_control back-to-back connect ge-0/0/0 to uplink switch to WAN and to reach Mist connect ge-0/0/1 back-to-back for ha_data connect ge-0/0/2- to LAN or additional WANs SRX1600 SRX1600 has, additionally, two dedicated HA Control port form cluster in UI configure ge-0/0/0,ge-7/0/0 for WAN (reth0) configure ge-0/0/1,ge-7/0/1 for ha_data configure ge-0/0/2- for LAN or additional WAN connect dedicated both ha_control back-to-back connect ge-0/0/0 to uplink switch to WAN and to reach Mist connect ge-0/0/1 back-to-back for ha_data connect ge-0/0/2- to LAN or additional WANs SRX4100 SRX4100 has dedicated ha_control and ha_data (fabric) ports connect dedicated ha_control back-to-back connect dedicated ha_data back-to-back connect xe-0/0/0 to WAN to reach Mist connect xe-0/0/1- to LAN or additional WANs Replace a Node in a HA Cluster Usually Device Replacement is done by Device Replacement API. For a HA cluster, you can also replace a node by another device in the same site.
- **Signature**: `CreateSiteDeviceHaCluster(Guid siteId, Guid deviceId, GatewayCluster? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GatewayCluster`
- **Error**: `SdkException<CreateSiteDeviceHaClusterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteDeviceHaCluster
- **HTTP**: `DELETE /api/v1/sites/{site_id}/devices/{device_id}/ha` (ApiHost (api))
- **Notes**: Delete HA Cluster
- **Signature**: `DeleteSiteDeviceHaCluster(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteDeviceHaClusterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
