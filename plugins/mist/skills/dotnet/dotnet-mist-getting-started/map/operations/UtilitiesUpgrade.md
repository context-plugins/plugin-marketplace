# UtilitiesUpgrade — operations

Accessor: `client.UtilitiesUpgrade` · Source: `Api/UtilitiesUpgrade.cs` · 22 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelOrgDeviceUpgrade
- **HTTP**: `POST /api/v1/orgs/{org_id}/devices/upgrade/{upgrade_id}/cancel` (ApiHost (api))
- **Notes**: Best effort to cancel an upgrade. Devices which are already upgraded wont be touched
- **Signature**: `CancelOrgDeviceUpgrade(Guid orgId, Guid upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CancelOrgDeviceUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelOrgSsrUpgrade
- **HTTP**: `POST /api/v1/orgs/{org_id}/ssr/upgrade/{upgrade_id}/cancel` (ApiHost (api))
- **Notes**: Best effort to cancel an upgrade. Devices which are already upgraded wont be touched↵
- **Signature**: `CancelOrgSsrUpgrade(Guid orgId, Guid upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CancelOrgSsrUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelSiteDeviceUpgrade
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/upgrade/{upgrade_id}/cancel` (ApiHost (api))
- **Notes**: Best effort to cancel an upgrade. Devices which are already upgraded wont be touched
- **Signature**: `CancelSiteDeviceUpgrade(Guid siteId, Guid upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CancelSiteDeviceUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgDeviceUpgrade
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/upgrade/{upgrade_id}` (ApiHost (api))
- **Notes**: Get Multiple Devices Upgrade
- **Signature**: `GetOrgDeviceUpgrade(Guid orgId, Guid upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseUpgradeOrgDevices`
- **Error**: `SdkException<GetOrgDeviceUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgMxEdgeUpgrade
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxedges/upgrade/{upgrade_id}` (ApiHost (api))
- **Notes**: Get Mist Edge Upgrade
- **Signature**: `GetOrgMxEdgeUpgrade(Guid orgId, Guid upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseMxedgeUpgrade`
- **Error**: `SdkException<GetOrgMxEdgeUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSsrUpgrade
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssr/upgrade/{upgrade_id}/cancel` (ApiHost (api))
- **Notes**: Get Specific Org SSR Upgrade
- **Signature**: `GetOrgSsrUpgrade(Guid orgId, Guid upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseSsrUpgradeStatus`
- **Error**: `SdkException<GetOrgSsrUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteDeviceUpgrade
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/upgrade/{upgrade_id}` (ApiHost (api))
- **Notes**: Get Site Device Upgrade
- **Signature**: `GetSiteDeviceUpgrade(Guid siteId, Guid upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseSiteDeviceUpgrade`
- **Error**: `SdkException<GetSiteDeviceUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSsrUpgrade
- **HTTP**: `GET /api/v1/sites/{site_id}/ssr/upgrade/{upgrade_id}` (ApiHost (api))
- **Notes**: Get Specific Site SSR Upgrade
- **Signature**: `GetSiteSsrUpgrade(Guid siteId, Guid upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseSsrUpgradeStatus`
- **Error**: `SdkException<GetSiteSsrUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAvailableDeviceVersions
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/versions` (ApiHost (api))
- **Notes**: Get List of Available Device Versions
- **Signature**: `ListOrgAvailableDeviceVersions(Guid orgId, DeviceTypeDefaultAp? type, string? model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - `model` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `model` ← `model`
- **Returns**: `IReadOnlyList<DeviceVersionItem>`
- **Error**: `SdkException<ListOrgAvailableDeviceVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAvailableSsrVersions
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssr/versions` (ApiHost (api))
- **Notes**: Get available version for SSR
- **Signature**: `ListOrgAvailableSsrVersions(Guid orgId, SsrVersionChannel? channel, string? mac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `channel` — nullable, no default → **must pass explicitly**
  - `mac` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `mac` ← `mac`
- **Returns**: `IReadOnlyList<SsrVersion>`
- **Error**: `SdkException<ListOrgAvailableSsrVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgDeviceUpgrades
- **HTTP**: `GET /api/v1/orgs/{org_id}/devices/upgrade` (ApiHost (api))
- **Notes**: Get List of Org multiple devices upgrades
- **Signature**: `ListOrgDeviceUpgrades(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UpgradeOrgDevicesItem>`
- **Error**: `SdkException<ListOrgDeviceUpgradesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgMxEdgeUpgrades
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxedges/upgrade` (ApiHost (api))
- **Notes**: Get List of Org Mist Edge Upgrades
- **Signature**: `ListOrgMxEdgeUpgrades(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ResponseMxedgeUpgrade>`
- **Error**: `SdkException<ListOrgMxEdgeUpgradesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSsrUpgrades
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssr/upgrade` (ApiHost (api))
- **Notes**: Get List of Org SSR Upgrades
- **Signature**: `ListOrgSsrUpgrades(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ResponseSsrUpgrade>`
- **Error**: `SdkException<ListOrgSsrUpgradesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteAvailableDeviceVersions
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/versions` (ApiHost (api))
- **Notes**: Get List of Available Device Versions
- **Signature**: `ListSiteAvailableDeviceVersions(Guid siteId, DeviceTypeDefaultAp? type, string? model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - `model` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `model` ← `model`
- **Returns**: `IReadOnlyList<DeviceVersionItem>`
- **Error**: `SdkException<ListSiteAvailableDeviceVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteDeviceUpgrades
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/upgrade` (ApiHost (api))
- **Notes**: Get all upgrades for site
- **Signature**: `ListSiteDeviceUpgrades(Guid siteId, UpgradeDeviceStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`
- **Returns**: `IReadOnlyList<ResponseSiteDeviceUpgradesItem>`
- **Error**: `SdkException<ListSiteDeviceUpgradesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeDevice
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/upgrade` (ApiHost (api))
- **Notes**: Device Upgrade
- **Signature**: `UpgradeDevice(Guid siteId, Guid deviceId, DeviceUpgrade? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseDeviceUpgrade`
- **Error**: `SdkException<UpgradeDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeOrgDevices
- **HTTP**: `POST /api/v1/orgs/{org_id}/devices/upgrade` (ApiHost (api))
- **Notes**: Upgrade Multiple Sites (Only supported for Access Points upgrades)
- **Signature**: `UpgradeOrgDevices(Guid orgId, UpgradeOrgDevices? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseUpgradeOrgDevices`
- **Error**: `SdkException<UpgradeOrgDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeOrgJsiDevice
- **HTTP**: `POST /api/v1/orgs/{org_id}/jsi/devices/{device_mac}/upgrade` (ApiHost (api))
- **Notes**: Upgrade
- **Signature**: `UpgradeOrgJsiDevice(Guid orgId, string deviceMac, VersionString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpgradeOrgJsiDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeOrgMxEdges
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/upgrade` (ApiHost (api))
- **Notes**: Upgrade Mist Edges
- **Signature**: `UpgradeOrgMxEdges(Guid orgId, MxedgeUpgradeMulti? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpgradeOrgMxEdgesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeOrgSsrs
- **HTTP**: `POST /api/v1/orgs/{org_id}/ssr/upgrade` (ApiHost (api))
- **Notes**: Upgrade Org SSRs
- **Signature**: `UpgradeOrgSsrs(Guid orgId, SsrUpgradeMulti? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseSsrUpgrade`
- **Error**: `SdkException<UpgradeOrgSsrsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeSiteDevices
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/upgrade` (ApiHost (api))
- **Notes**: Upgrade Site Device Note : this call doesn’t guarantee the devices to be upgraded right away (they may be offline)
- **Signature**: `UpgradeSiteDevices(Guid siteId, UpgradeSiteDevices? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseUpgradeId`
- **Error**: `SdkException<UpgradeSiteDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeSsr
- **HTTP**: `POST /api/v1/sites/{site_id}/ssr/{device_id}/upgrade` (ApiHost (api))
- **Notes**: Upgrade Site SSR device
- **Signature**: `UpgradeSsr(Guid siteId, Guid deviceId, SsrUpgrade? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseSsrUpgrade`
- **Error**: `SdkException<UpgradeSsrError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
