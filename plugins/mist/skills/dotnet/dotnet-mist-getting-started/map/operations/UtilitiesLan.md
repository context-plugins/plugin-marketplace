# UtilitiesLan — operations

Accessor: `client.UtilitiesLan` · Source: `Api/UtilitiesLan.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CableTestFromSwitch
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/cable_test` (ApiHost (api))
- **Notes**: TDR can be performed from the Switch. The output will be available through websocket. As there can be multiple command issued against the same Switch at the same time and the output all goes through the same websocket stream, session is introduced for demux. Subscribe to Device Command outputs `WS /api-ws/v1/stream` { "subscribe": "/sites/{site_id}/devices/{device_id}/cmd" } ``` Example output from ws stream ```json { "event": "data", "channel": "/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/devices/00000000-0000-0000-1000-5c5b350e0060/cmd", "data": { "session": "session_id", "raw": "Interface TDR detail:\nTest status : Test successfully executed ge-0/0/0\n" } }
- **Signature**: `CableTestFromSwitch(Guid siteId, Guid deviceId, UtilsCableTests? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSession`
- **Error**: `SdkException<CableTestFromSwitchError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClearAllLearnedMacsFromPortOnSwitch
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/clear_macs` (ApiHost (api))
- **Notes**: Clear all learned MAC addresses, including persistent MAC addresses, on a port.
- **Signature**: `ClearAllLearnedMacsFromPortOnSwitch(Guid siteId, Guid deviceId, UtilsClearMacs? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ClearAllLearnedMacsFromPortOnSwitchError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClearBpduErrorsFromPortsOnSwitch
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/clear_bpdu_error` (ApiHost (api))
- **Notes**: Clear bridge protocol data unit (BPDU) error condition caused by the detection of a possible bridging loop from Spanning Tree Protocol (STP) operation that renders the port unoperational.
- **Signature**: `ClearBpduErrorsFromPortsOnSwitch(Guid siteId, Guid deviceId, UtilsClearBpdu? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ClearBpduErrorsFromPortsOnSwitchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteDeviceSnapshot
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/snapshot` (ApiHost (api))
- **Notes**: Create recovery device snapshot (Available on Junos OS EX2300-, EX3400-, EX4400- devices)
- **Signature**: `CreateSiteDeviceSnapshot(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseDeviceSnapshot`
- **Error**: `SdkException<CreateSiteDeviceSnapshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetString(out string)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PollSiteSwitchStats
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/poll_stats` (ApiHost (api))
- **Notes**: This API can be used to poll statistics from the Switch proactively once. After it is called, the statistics will be pushed back to the cloud within the statistics interval.
- **Signature**: `PollSiteSwitchStats(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PollSiteSwitchStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReauthOrgDot1XWiredClient
- **HTTP**: `POST /api/v1/orgs/{org_id}/wired_clients/{client_mac}/coa` (ApiHost (api))
- **Notes**: Trigger a CoA (change of authorization) against a Wired client
- **Signature**: `ReauthOrgDot1XWiredClient(Guid orgId, string clientMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseWiredCoa`
- **Error**: `SdkException<ReauthOrgDot1XWiredClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReauthSiteDot1XWiredClient
- **HTTP**: `POST /api/v1/sites/{site_id}/wired_clients/{client_mac}/coa` (ApiHost (api))
- **Notes**: Trigger a CoA (change of authorization) against a Wired client
- **Signature**: `ReauthSiteDot1XWiredClient(Guid siteId, string clientMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseWiredCoa`
- **Error**: `SdkException<ReauthSiteDot1XWiredClientError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeDeviceBios
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/upgrade_bios` (ApiHost (api))
- **Notes**: Upgrade device bios
- **Signature**: `UpgradeDeviceBios(Guid siteId, Guid deviceId, UpgradeBios? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseDeviceBiosUpgrade`
- **Error**: `SdkException<UpgradeDeviceBiosError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeDeviceFpga
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/upgrade_fpga` (ApiHost (api))
- **Notes**: Upgrade device fpga
- **Signature**: `UpgradeDeviceFpga(Guid siteId, Guid deviceId, UpgradeFpga? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseDeviceBiosUpgrade`
- **Error**: `SdkException<UpgradeDeviceFpgaError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeSiteDevicesBios
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/upgrade_bios` (ApiHost (api))
- **Notes**: Upgrade Bios on Multiple Device
- **Signature**: `UpgradeSiteDevicesBios(Guid siteId, UpgradeBiosMulti? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpgradeSiteDevicesBiosError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeSiteDevicesFpga
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/upgrade_fpga` (ApiHost (api))
- **Notes**: Upgrade Bios on Multiple Device
- **Signature**: `UpgradeSiteDevicesFpga(Guid siteId, UpgradeFpgaMulti? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpgradeSiteDevicesFpgaError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
