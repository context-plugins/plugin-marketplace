# OrgsJsi — operations

Accessor: `client.OrgsJsi` · Source: `Api/OrgsJsi.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdoptOrgJsiDevice
- **HTTP**: `GET /api/v1/orgs/{org_id}/jsi/devices/outbound_ssh_cmd` (ApiHost (api))
- **Notes**: Adopt JSI devices
- **Signature**: `AdoptOrgJsiDevice(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseDeviceConfigCmd`
- **Error**: `SdkException<AdoptOrgJsiDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgJsiAssetsAndContracts
- **HTTP**: `GET /api/v1/orgs/{org_id}/jsi/inventory/count` (ApiHost (api))
- **Notes**: Count devices purchased from the accounts associated with the Org
- **Signature**: `CountOrgJsiAssetsAndContracts(Guid orgId, JsiInventoryCountDistinct? distinct, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgJsiAssetsAndContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseDetailString(out ResponseDetailString)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgJsiDeviceShellSession
- **HTTP**: `POST /api/v1/orgs/{org_id}/jsi/devices/{device_mac}/shell` (ApiHost (api))
- **Notes**: Create Shell Session
- **Signature**: `CreateOrgJsiDeviceShellSession(Guid orgId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WebsocketSessionWithUrl`
- **Error**: `SdkException<CreateOrgJsiDeviceShellSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgJsiDevices
- **HTTP**: `GET /api/v1/orgs/{org_id}/jsi/devices` (ApiHost (api))
- **Notes**: Get List of Org devices that connected to JSI
- **Signature**: `ListOrgJsiDevices(Guid orgId, string? model, string? serial, string? mac, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `model` — nullable, no default → **must pass explicitly**
  - `serial` — nullable, no default → **must pass explicitly**
  - `mac` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`, `model` ← `model`, `serial` ← `serial`, `mac` ← `mac`
- **Returns**: `IReadOnlyList<JseDevice>`
- **Error**: `SdkException<ListOrgJsiDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListOrgJsiPastPurchases
- **HTTP**: `GET /api/v1/orgs/{org_id}/jsi/inventory` (ApiHost (api))
- **Notes**: This gets all devices purchased from the accounts associated with the Org * Fetch Install base devices for all linked accounts and associated account of the linked accounts. * The primary and the associated account ids will be queries from SFDC by passing the linked account * Returns only the device centric details of the Install base device. No customer specific information will be returned.
- **Signature**: `ListOrgJsiPastPurchases(Guid orgId, string? model, string? serial, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `model` — nullable, no default → **must pass explicitly**
  - `serial` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`, `model` ← `model`, `serial` ← `serial`
- **Returns**: `IReadOnlyList<JsInventoryItem>`
- **Error**: `SdkException<ListOrgJsiPastPurchasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseDetailString(out ResponseDetailString)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchOrgJsiAssetsAndContracts
- **HTTP**: `GET /api/v1/orgs/{org_id}/jsi/inventory/search` (ApiHost (api))
- **Notes**: This gets all devices purchased from the accounts associated with the Org * Fetch Install base devices for all linked accounts and associated account of the linked accounts. * The primary and the associated account ids will be queries from SFDC by passing the linked account * Returns only the device centric details of the Install base device. No customer specific information will be returned.
- **Signature**: `SearchOrgJsiAssetsAndContracts(Guid orgId, string? model, string? serial, DeviceStatus? status, JsiWarrantyType? warrantyType, string? eolDuration, string? eosDuration, string? text, int? limit = 100, int? page = 1, string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`model` … `text`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`, `serial` ← `serial`, `status` ← `status`, `warranty_type` ← `warrantyType`, `eol_duration` ← `eolDuration`, `eos_duration` ← `eosDuration`, `text` ← `text`, `limit` ← `limit`, `page` ← `page`, `sort` ← `sort`
- **Returns**: `JsInventorySearch`
- **Error**: `SdkException<SearchOrgJsiAssetsAndContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseDetailString(out ResponseDetailString)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
