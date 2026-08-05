# OrgsDevicesOthers — operations

Accessor: `client.OrgsDevicesOthers` · Source: `Api/OrgsDevicesOthers.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgOtherDeviceEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/otherdevices/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org OtherDevices Events
- **Signature**: `CountOrgOtherDeviceEvents(Guid orgId, OrgOtherdevicesEventsCountDistinct? distinct, string? type, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgOtherDeviceEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgOtherDevice
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/otherdevices/{device_mac}` (ApiHost (api))
- **Notes**: Delete OtherDevice
- **Signature**: `DeleteOrgOtherDevice(Guid orgId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgOtherDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgOtherDevice
- **HTTP**: `GET /api/v1/orgs/{org_id}/otherdevices/{device_mac}` (ApiHost (api))
- **Notes**: Get Org other device (3rd party device)
- **Signature**: `GetOrgOtherDevice(Guid orgId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceOther`
- **Error**: `SdkException<GetOrgOtherDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgOtherDevices
- **HTTP**: `GET /api/v1/orgs/{org_id}/otherdevices` (ApiHost (api))
- **Notes**: Get List of Org other devices (3rd party devices)
- **Signature**: `ListOrgOtherDevices(Guid orgId, string? vendor, string? mac, string? serial, string? model, string? name, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`vendor` … `name`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `vendor` ← `vendor`, `mac` ← `mac`, `serial` ← `serial`, `model` ← `model`, `name` ← `name`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<DeviceOther>`
- **Error**: `SdkException<ListOrgOtherDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RebootOrgOtherDevice
- **HTTP**: `POST /api/v1/orgs/{org_id}/otherdevices/{device_mac}/reboot` (ApiHost (api))
- **Notes**: Reboot OtherDevice
- **Signature**: `RebootOrgOtherDevice(Guid orgId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RebootOrgOtherDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgOtherDeviceEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/otherdevices/events/search` (ApiHost (api))
- **Notes**: Search Org OtherDevices Events
- **Signature**: `SearchOrgOtherDeviceEvents(Guid orgId, string? siteId, string? mac, string? deviceMac, string? model, string? vendor, string? type, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`siteId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `mac` ← `mac`, `device_mac` ← `deviceMac`, `model` ← `model`, `vendor` ← `vendor`, `type` ← `type`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseEventsOtherDevicesSearch`
- **Error**: `SdkException<SearchOrgOtherDeviceEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgOtherDevice
- **HTTP**: `PUT /api/v1/orgs/{org_id}/otherdevices/{device_mac}` (ApiHost (api))
- **Notes**: If the Site / Device cannot be identified, a manual association can be made
- **Signature**: `UpdateOrgOtherDevice(Guid orgId, string deviceMac, OtherDeviceUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgOtherDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgOtherDevices
- **HTTP**: `PUT /api/v1/orgs/{org_id}/otherdevices` (ApiHost (api))
- **Notes**: Assign or unassign OtherDevices to and from a site.
- **Signature**: `UpdateOrgOtherDevices(Guid orgId, OtherDeviceUpdateMulti? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgOtherDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
