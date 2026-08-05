# Installer — operations

Accessor: `client.Installer` · Source: `Api/Installer.cs` · 23 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddInstallerDeviceImage
- **HTTP**: `POST /api/v1/installer/orgs/{org_id}/devices/{device_mac}/{image_name}` (ApiHost (api))
- **Notes**: Add image
- **Signature**: `AddInstallerDeviceImage(Guid orgId, string imageName, string deviceMac, bool? autoDeviceprofileAssignment, BinaryContent? csv, BinaryContent? file, MapImportJson? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`autoDeviceprofileAssignment` … `json`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddInstallerDeviceImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClaimInstallerDevices
- **HTTP**: `POST /api/v1/installer/orgs/{org_id}/devices` (ApiHost (api))
- **Notes**: This mirrors `POST /api/v1/orgs/{org_id}/inventory` (see Inventory API)
- **Signature**: `ClaimInstallerDevices(Guid orgId, IReadOnlyList<string>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseInventory`
- **Error**: `SdkException<ClaimInstallerDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseInventory(out ResponseInventory)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateInstallerMap
- **HTTP**: `POST /api/v1/installer/orgs/{org_id}/sites/{site_name}/maps/{map_id}` (ApiHost (api))
- **Notes**: Create a MAP
- **Signature**: `CreateInstallerMap(Guid orgId, string siteName, Guid mapId, Map? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Map`
- **Error**: `SdkException<CreateInstallerMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateInstallerVirtualChassis
- **HTTP**: `POST /api/v1/installer/orgs/{org_id}/devices/{fpc0_mac}/vc` (ApiHost (api))
- **Notes**: For models (e.g. EX3400 and up) having dedicated VC ports, it is easier to form a VC by just connecting cables with the dedicated VC ports. Cloud will detect the new VC and update the inventory. In case that the user would like to choose the dedicated switch as a VC master or for EX2300-C-12P and EX2300-C-12T which doesn't have dedicated VC ports, below are procedures to automate the VC creation: Power on the switch that is chosen as the VC master first. And then powering on the other member switches. Claim or adopt all these switches under the same organization’s Inventory Assign these switches into the same Site Invoke vc command on the switch chosen to be the VC master. For EX2300-C-12P, VC ports will be created automatically. Connect the cables to the VC ports for these switches Wait for the VC to be formed. The Org’s inventory will be updated for the new VC.
- **Signature**: `CreateInstallerVirtualChassis(Guid orgId, string fpc0Mac, VirtualChassisConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseVirtualChassisConfig`
- **Error**: `SdkException<CreateInstallerVirtualChassisError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrUpdateInstallerSites
- **HTTP**: `PUT /api/v1/installer/orgs/{org_id}/sites/{site_name}` (ApiHost (api))
- **Notes**: Often the Installers are asked to assign Devices to Sites. The Sites can either be pre-created or created/modified by the Installer. If this is an update, the same grace period also applies.
- **Signature**: `CreateOrUpdateInstallerSites(Guid orgId, string siteName, InstallerSite? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateOrUpdateInstallerSitesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInstallerDeviceImage
- **HTTP**: `DELETE /api/v1/installer/orgs/{org_id}/devices/{device_mac}/{image_name}` (ApiHost (api))
- **Notes**: Delete image
- **Signature**: `DeleteInstallerDeviceImage(Guid orgId, string imageName, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteInstallerDeviceImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInstallerMap
- **HTTP**: `DELETE /api/v1/installer/orgs/{org_id}/sites/{site_name}/maps/{map_id}` (ApiHost (api))
- **Notes**: Delete Map
- **Signature**: `DeleteInstallerMap(Guid orgId, string siteName, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteInstallerMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetInstallerDeviceVirtualChassis
- **HTTP**: `GET /api/v1/installer/orgs/{org_id}/devices/{fpc0_mac}/vc` (ApiHost (api))
- **Notes**: Get VC Status The API returns a combined view of the VC status which includes topology and stats
- **Signature**: `GetInstallerDeviceVirtualChassis(Guid orgId, string fpc0Mac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseVirtualChassisConfig`
- **Error**: `SdkException<GetInstallerDeviceVirtualChassisError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportInstallerMap
- **HTTP**: `POST /api/v1/installer/orgs/{org_id}/sites/{site_name}/maps/import` (ApiHost (api))
- **Notes**: Import data from files is a multipart POST which has an file, an optional json, and an optional csv, to create floorplan, assign &amp; place ap if name or mac matches
- **Signature**: `ImportInstallerMap(Guid orgId, string siteName, bool? autoDeviceprofileAssignment, BinaryContent? csv, BinaryContent? file, MapImportJson? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`autoDeviceprofileAssignment` … `json`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Returns**: `ResponseMapImport`
- **Error**: `SdkException<ImportInstallerMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListInstallerAlarmTemplates
- **HTTP**: `GET /api/v1/installer/orgs/{org_id}/alarmtemplates` (ApiHost (api))
- **Notes**: Get List of alarm templates
- **Signature**: `ListInstallerAlarmTemplates(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<InstallersItem>`
- **Error**: `SdkException<ListInstallerAlarmTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListInstallerDeviceProfiles
- **HTTP**: `GET /api/v1/installer/orgs/{org_id}/deviceprofiles` (ApiHost (api))
- **Notes**: Get List of Device Profiles
- **Signature**: `ListInstallerDeviceProfiles(Guid orgId, DeviceTypeDefaultAp? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`
- **Returns**: `IReadOnlyList<InstallersItem>`
- **Error**: `SdkException<ListInstallerDeviceProfilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListInstallerListOfRecentlyClaimedDevices
- **HTTP**: `GET /api/v1/installer/orgs/{org_id}/devices` (ApiHost (api))
- **Notes**: Get List of recently claimed devices
- **Signature**: `ListInstallerListOfRecentlyClaimedDevices(Guid orgId, string? model, string? siteName, Guid? siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `model` — nullable, no default → **must pass explicitly**
  - `siteName` — nullable, no default → **must pass explicitly**
  - `siteId` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`, `site_name` ← `siteName`, `site_id` ← `siteId`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<InstallerDevice>`
- **Error**: `SdkException<ListInstallerListOfRecentlyClaimedDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListInstallerMaps
- **HTTP**: `GET /api/v1/installer/orgs/{org_id}/sites/{site_name}/maps` (ApiHost (api))
- **Notes**: Get List of Maps
- **Signature**: `ListInstallerMaps(Guid orgId, string siteName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Map>`
- **Error**: `SdkException<ListInstallerMapsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListInstallerRfTemplatesNames
- **HTTP**: `GET /api/v1/installer/orgs/{org_id}/rftemplates` (ApiHost (api))
- **Notes**: Get List of RF Templates
- **Signature**: `ListInstallerRfTemplatesNames(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<InstallersItem>`
- **Error**: `SdkException<ListInstallerRfTemplatesNamesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListInstallerSiteGroups
- **HTTP**: `GET /api/v1/installer/orgs/{org_id}/sitegroups` (ApiHost (api))
- **Notes**: Get List of Site Groups
- **Signature**: `ListInstallerSiteGroups(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<InstallersItem>`
- **Error**: `SdkException<ListInstallerSiteGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListInstallerSites
- **HTTP**: `GET /api/v1/installer/orgs/{org_id}/sites` (ApiHost (api))
- **Notes**: Get List of Sites
- **Signature**: `ListInstallerSites(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<InstallerSite>`
- **Error**: `SdkException<ListInstallerSitesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OptimizeInstallerRrm
- **HTTP**: `GET /api/v1/installer/sites/{site_name}/optimize` (ApiHost (api))
- **Notes**: After installation is considered complete (APs are placed on maps, all powered up), you can trigger an optimize operation where RRM will kick in (and maybe other things in the future) before it’s automatically scheduled.
- **Signature**: `OptimizeInstallerRrm(string siteName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<OptimizeInstallerRrmError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ProvisionInstallerDevices
- **HTTP**: `PUT /api/v1/installer/orgs/{org_id}/devices/{device_mac}` (ApiHost (api))
- **Notes**: Provision or Replace a device If replacing_mac is in the request payload, other attributes are ignored, we attempt to replace existing device (with mac replacing_mac) with the inventory device being configured. The replacement device must be in the inventory but not assigned, and the replacing_mac device must be assigned to a site, and satisfy grace period requirements. The Device replaced will become unassigned.
- **Signature**: `ProvisionInstallerDevices(Guid orgId, string deviceMac, InstallerProvisionDevice? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ProvisionInstallerDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseDetailString(out ResponseDetailString)` [400, 404] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartInstallerLocateDevice
- **HTTP**: `POST /api/v1/installer/orgs/{org_id}/devices/{device_mac}/locate` (ApiHost (api))
- **Notes**: Locate a Device by blinking it’s LED, it’s a persisted state that has to be stopped by calling Stop Locating API
- **Signature**: `StartInstallerLocateDevice(Guid orgId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StartInstallerLocateDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StopInstallerLocateDevice
- **HTTP**: `POST /api/v1/installer/orgs/{org_id}/devices/{device_mac}/unlocate` (ApiHost (api))
- **Notes**: Stop it
- **Signature**: `StopInstallerLocateDevice(Guid orgId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StopInstallerLocateDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnassignInstallerRecentlyClaimedDevice
- **HTTP**: `DELETE /api/v1/installer/orgs/{org_id}/devices/{device_mac}` (ApiHost (api))
- **Notes**: Unassign recently claimed devices
- **Signature**: `UnassignInstallerRecentlyClaimedDevice(Guid orgId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnassignInstallerRecentlyClaimedDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInstallerMap
- **HTTP**: `PUT /api/v1/installer/orgs/{org_id}/sites/{site_name}/maps/{map_id}` (ApiHost (api))
- **Notes**: Update map
- **Signature**: `UpdateInstallerMap(Guid orgId, string siteName, Guid mapId, Map? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Map`
- **Error**: `SdkException<UpdateInstallerMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInstallerVirtualChassisMember
- **HTTP**: `PUT /api/v1/installer/orgs/{org_id}/devices/{fpc0_mac}/vc` (ApiHost (api))
- **Notes**: The VC creation and adding member switch API will update the device’ s virtual chassis config which is applied after VC is formed to create JUNOS pre-provisioned virtual chassis configuration. Change to use preprovisioned VC To switch the VC to use preprovisioned VC, enable preprovisioned in virtual_chassis config. Both vc_role master and backup will be matched to routing-engine role in Junos preprovisioned VC config. In this config, fpc0 has to be the same as the mac of device_id. Use renumber if you want to replace fpc0 which involves device_id change. Notice: to configure preprovisioned VC, every member of the VC must be in the inventory. Add new members For models (e.g. EX4300 and up) having dedicated VC ports, it is easier to add new member switches into a VC by just connecting cables with the dedicated VC ports. Cloud will detect the new members and update the inventory. For EX2300 VC, adding new members requires to follow the procedures below: 1. Powering on the new member switches and ensuring cables are not connected to any VC ports. 2. Claim or adopt all new member switches under the VC’s organization Inventory 3. Assign all new member switches to the same Site as the VC 4. Invoke vc command to add switches to the VC. 5. Connect the cables to the VC ports for these switches 6. After a while, the Org’s Inventory shows this new switches has been added into the VC. Removing member switch To remove a member switch from the VC, following the procedures below: Ensuring the VC is connected to the cloud first Unplug the cable from the VC port of the switch Waiting for the VC state (vc_state) of this switch is changed to not-present Invoke update_vc with remove to remove this switch from the VC The Org’s Inventory shows the switch is removed. Please notice that member ID 0 (fpc0) cannot be removed. When a VC has two switches left, unplugging the cable may result in the situation that fpc0 becomes a line card (LC). When this situation is happening, please re-plug in the cable, wait for both switches becoming present (show virtual-chassis) and then removing the cable again. Renumber a member switch When a member switch doesn't' work properly and needed to be replaced, the renumber API could be used. The following two types of renumber are supported: Replace a non-fpc0 member switch Replace fpc0. When fpc0 is replaced, PAPI device config and JUNOS config will be both updated. For renumber to work, the following procedures are needed: 1. Ensuring the VC is connected to the cloud and the state of the member switch to be replaced must be non present. 2. Adding the new member switch to the VC 3. Waiting for the VC state (vc_state) of this VC to be updated to API server 4. Invoke vc with renumber to replace the new member switch from fpc X to Perprovision VC members By specifying "preprovision" op, you can convert the current VC to pre-provisioned mode, update VC members as well as specify vc_ports when adding new members for device models without dedicated vc ports. Use renumber for fpc0 replacement which involves device_id change. Note: 1. vc_ports is used for adding new members and not needed if * the device model has dedicated vc ports, or * no new member is added 2. New VC members to be added should exist in the same Site as the VC Update Device’s VC config can achieve similar purpose by directly modifying current virtual_chassis config. However, it cannot fulfill requests to enabling vc_ports on new members that are yet to belong to current VC.
- **Signature**: `UpdateInstallerVirtualChassisMember(Guid orgId, string fpc0Mac, VirtualChassisUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseVirtualChassisConfig`
- **Error**: `SdkException<UpdateInstallerVirtualChassisMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
