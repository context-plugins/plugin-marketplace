# OrgsInventory — operations

Accessor: `client.OrgsInventory` · Source: `Api/OrgsInventory.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddOrgInventory
- **HTTP**: `POST /api/v1/orgs/{org_id}/inventory` (ApiHost (api))
- **Notes**: Add Device to Org Inventory with the device claim codes
- **Signature**: `AddOrgInventory(Guid orgId, IReadOnlyList<string>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseInventory`
- **Error**: `SdkException<AddOrgInventoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseInventory(out ResponseInventory)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgInventory
- **HTTP**: `GET /api/v1/orgs/{org_id}/inventory/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of in the Org Inventory
- **Signature**: `CountOrgInventory(Guid orgId, DeviceTypeDefaultAp? type, InventoryCountDistinct? distinct, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - `distinct` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `distinct` ← `distinct`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgInventoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgGatewayHaCluster
- **HTTP**: `POST /api/v1/orgs/{org_id}/inventory/create_ha_cluster` (ApiHost (api))
- **Notes**: Create HA Cluster from unassigned Gateways
- **Signature**: `CreateOrgGatewayHaCluster(Guid orgId, HaClusterConfig? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateOrgGatewayHaClusterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgGatewayHaCluster
- **HTTP**: `POST /api/v1/orgs/{org_id}/inventory/delete_ha_cluster` (ApiHost (api))
- **Notes**: Delete HA Cluster After HA cluster deleted, both of the nodes will be unassigned.
- **Signature**: `DeleteOrgGatewayHaCluster(Guid orgId, HaClusterDelete? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgGatewayHaClusterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgInventory
- **HTTP**: `GET /api/v1/orgs/{org_id}/inventory` (ApiHost (api))
- **Notes**: Get Org Inventory VC (Virtual-Chassis) Management Starting with the April release, Virtual Chassis devices in Mist will now use a cloud-assigned virtual MAC address as the device ID, instead of the physical MAC address of the FPC0 member. Retrieving the device ID or Site ID of a Virtual Chassis: Use this API call with the query parameters `vc=true` and `mac` set to the MAC address of the VC member. In the response, check the `vc_mac` and `mac` fields: - If `vc_mac` is empty or not present, the device is not part of a Virtual Chassis. The `device_id` and `site_id` will be available in the device information. - If `vc_mac` differs from the `mac` field, the device is part of a Virtual Chassis but is not the device used to generate the Virtual Chassis ID. Use the `vc_mac` value with the Get Org Inventory API call to retrieve the `device_id` and `site_id`. - If `vc_mac` matches the `mac` field, the device is the device used to generate the Virtual Chassis ID and he `device_id` and `site_id` will be available in the device information. This is the case if the device is the Virtual Chassis "virtual device" (MAC starting with `020003`) or if the device is the Virtual Chassis FPC0 and the Virtual Chassis is still using the FPC0 MAC address to generate the device ID.
- **Signature**: `GetOrgInventory(Guid orgId, string? serial, string? model, DeviceType? type, string? mac, Guid? siteId, string? vcMac, int? modifiedAfter, bool? vc = false, bool? unassigned = true, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`serial` … `modifiedAfter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `vc` = false, `unassigned` = true, `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `serial` ← `serial`, `model` ← `model`, `type` ← `type`, `mac` ← `mac`, `site_id` ← `siteId`, `vc_mac` ← `vcMac`, `vc` ← `vc`, `unassigned` ← `unassigned`, `modified_after` ← `modifiedAfter`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Inventory>`
- **Error**: `SdkException<GetOrgInventoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ReevaluateOrgAutoAssignment
- **HTTP**: `POST /api/v1/orgs/{org_id}/inventory/reevaluate_auto_assignment` (ApiHost (api))
- **Notes**: Reevaluate Auto Assignment
- **Signature**: `ReevaluateOrgAutoAssignment(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReevaluateOrgAutoAssignmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceOrgDevices
- **HTTP**: `POST /api/v1/orgs/{org_id}/inventory/replace` (ApiHost (api))
- **Notes**: It’s a common request we get from the customers. When a AP HW has problem and need a replacement, they would want to copy the existing attributes (Device Config) of this old AP to the new one. It can be done by providing the MAC of a device that’s currently in the inventory but not assigned. The Device replaced will become unassigned. This API also supports replacement of Mist Edges. This API copies device agnostic attributes from old Mist edge to new one. Mist manufactured Mist Edges will be reset to factory settings but will still be in Inventory.Brownfield or VM’s will be deleted from Inventory Note: For Gateway devices only like-for-like replacements (can only replace a SRX320 with a SRX320 and not some other model) are allowed.
- **Signature**: `ReplaceOrgDevices(Guid orgId, ReplaceDevice? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseOrgInventoryChange`
- **Error**: `SdkException<ReplaceOrgDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgInventory
- **HTTP**: `GET /api/v1/orgs/{org_id}/inventory/search` (ApiHost (api))
- **Notes**: Search in the Org Inventory
- **Signature**: `SearchOrgInventory(Guid orgId, DeviceTypeDefaultAp? type, string? mac, string? vcMac, string? masterMac, Guid? siteId, string? serial, string? master, string? sku, string? version, string? status, string? text, int? limit = 100, int? page = 1, string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`type` … `text`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `mac` ← `mac`, `vc_mac` ← `vcMac`, `master_mac` ← `masterMac`, `site_id` ← `siteId`, `serial` ← `serial`, `master` ← `master`, `sku` ← `sku`, `version` ← `version`, `status` ← `status`, `text` ← `text`, `limit` ← `limit`, `page` ← `page`, `sort` ← `sort`
- **Returns**: `InventorySearch`
- **Error**: `SdkException<SearchOrgInventoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgInventoryAssignment
- **HTTP**: `PUT /api/v1/orgs/{org_id}/inventory` (ApiHost (api))
- **Notes**: Update Org Inventory
- **Signature**: `UpdateOrgInventoryAssignment(Guid orgId, InventoryUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseOrgInventoryChange`
- **Error**: `SdkException<UpdateOrgInventoryAssignmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
