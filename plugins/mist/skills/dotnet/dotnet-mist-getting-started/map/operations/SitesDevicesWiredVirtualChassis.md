# SitesDevicesWiredVirtualChassis — operations

Accessor: `client.SitesDevicesWiredVirtualChassis` · Source: `Api/SitesDevicesWiredVirtualChassis.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ConvertSiteVirtualChassisToVirtualMac
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/vc/convert_to_virtualmac` (ApiHost (api))
- **Notes**: Converts an FPC0-based VC to a Virtualmac VC, removing the limitation where the device ID must change whenever FPC0 is renumbered or removed. HTTP400 Error possible reasons: - The device is not an OC device - Virtualmac VC is disabled in the Org Knob settings - The VC is already a Virtualmac VC - The VC is currently disconnected - The device is standalone - A new FPC0 exists with its own device config, causing ambiguity.
- **Signature**: `ConvertSiteVirtualChassisToVirtualMac(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ConvertSiteVirtualChassisToVirtualMacError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteVirtualChassis
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/vc` (ApiHost (api))
- **Notes**: For models (e.g. EX3400 and up) having dedicated VC ports, it is easier to form a VC by just connecting cables with the dedicated VC ports. Cloud will detect the new VC and update the inventory. In case that the user would like to choose the dedicated switch as a VC master or for EX2300-C-12P and EX2300-C-12T which doesn't have dedicated VC ports, below are procedures to automate the VC creation: 1. Power on the switch that is chosen as the VC master first, and then powering on the other member switches. 2. Claim or adopt all these switches under the same organization's Inventory 3. Assign these switches into the same Site 4. Wait for all the switches to be connected to Mist 5. Invoke vc command on the switch chosen to be the VC master. For EX2300-C-12P, VC ports will be created automatically. 6. Connect the cables to the VC ports for these switches 7. Wait for the VC to be formed. The Org's inventory will be updated for the new VC.
- **Signature**: `CreateSiteVirtualChassis(Guid siteId, Guid deviceId, VirtualChassisConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateSiteVirtualChassisError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteVirtualChassis
- **HTTP**: `DELETE /api/v1/sites/{site_id}/devices/{device_id}/vc` (ApiHost (api))
- **Notes**: When all the member switches of VC are removed and only member ID 0 is left, the cloud would detect this situation and automatically changes the single switch to non-VC role. For some unexpected cases that the VC is gone and disconnected, the API below could be used to change the state of VC’s switches to be standalone. After it is executed, all the switches will be shown as standalone switches under Inventory.
- **Signature**: `DeleteSiteVirtualChassis(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteVirtualChassisError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteDeviceVirtualChassis
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/{device_id}/vc` (ApiHost (api))
- **Notes**: Get VC Status The API returns a combined view of the VC status which includes topology and stats_
- **Signature**: `GetSiteDeviceVirtualChassis(Guid siteId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseVirtualChassisConfig`
- **Error**: `SdkException<GetSiteDeviceVirtualChassisError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetSiteVcPort
- **HTTP**: `POST /api/v1/sites/{site_id}/devices/{device_id}/vc/vc_port` (ApiHost (api))
- **Notes**: Set VC port
- **Signature**: `SetSiteVcPort(Guid siteId, Guid deviceId, VirtualChassisPort? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetSiteVcPortError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteVirtualChassisMember
- **HTTP**: `PUT /api/v1/sites/{site_id}/devices/{device_id}/vc` (ApiHost (api))
- **Notes**: The VC creation and adding member switch API will update the device' s virtual chassis config which is applied after VC is formed to create JUNOS pre-provisioned virtual chassis configuration. Note: Update Device's VC config can achieve similar purpose by directly modifying current virtual_chassis config. However, it cannot fulfill requests to enabling vc_ports on new members that are yet to belong to current VC. Change to use preprovisioned VC To switch the VC to use preprovisioned VC, enable preprovisioned in virtual_chassis config. Both vc_role master and backup will be matched to routing-engine role in Junos preprovisioned VC config. In this config, fpc0 has to be the same as the mac of device_id. Use renumber if you want to replace fpc0 which involves device_id change. Notice: to configure preprovisioned VC, every member of the VC must be in the inventory. Add new members For models (e.g. EX4300 and up) having dedicated VC ports, it is easier to add new member switches into a VC by just connecting cables with the dedicated VC ports. Cloud will detect the new members and update the inventory. For EX2300 VC, adding new members requires to follow the procedures below: 1. Powering on the new member switches and ensuring cables are not connected to any VC ports. 2. Claim or adopt all new member switches under the VC's organization Inventory 3. Assign all new member switches to the same Site as the VC 4. Invoke vc command to add switches to the VC. 5. Connect the cables to the VC ports for these switches 6. After a while, the Org's Inventory shows that new switches has been added into the VC. Removing member switch To remove a member switch from the VC, following the procedures below: Ensuring the VC is connected to the cloud first Unplug the cable from the VC port of the switch Waiting for the VC state (vc_state) of this switch is changed to not-present Invoke update_vc with remove to remove this switch from the VC The Org's Inventory shows the switch is removed. Please notice that member ID 0 (fpc0) cannot be removed. When a VC has two switches left, unplugging the cable may result in the situation that fpc0 becomes a line card (LC). When this situation is happening, please re-plug in the cable, wait for both switches becoming present (show virtual-chassis) and then removing the cable again. Renumber a member switch When a member switch doesn' t work properly and needed to be replaced, the renumber API could be used. The following two types of renumber are supported: Replace a non-fpc0 member switch Replace fpc0. When fpc0 is replaced, PAPI device config and JUNOS config will be both updated. For renumber to work, the following procedures are needed: 1. Ensuring the VC is connected to the cloud and the state of the member switch to be replaced must be non present. 2. Adding the new member switch to the VC 3. Waiting for the VC state (vc_state) of this VC to be updated to API server 4. Invoke vc with renumber to replace\ the new member switch from fpc X to Perprovision VC members By specifying "preprovision" op, you can convert the current VC to pre-provisioned mode, update VC members as well as specify vc_ports when adding new members for device models without dedicated vc ports. Use renumber for fpc0 replacement which involves device_id change. Note: 1. vc_ports is used for adding new members and not needed if * the device model has dedicated vc ports, or * no new member is added 2. New VC members to be added should exist in the same Site as the VC
- **Signature**: `UpdateSiteVirtualChassisMember(Guid siteId, Guid deviceId, VirtualChassisUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateSiteVirtualChassisMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
