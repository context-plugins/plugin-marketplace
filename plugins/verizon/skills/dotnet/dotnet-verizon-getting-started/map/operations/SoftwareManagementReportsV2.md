# SoftwareManagementReportsV2 — operations

Accessor: `client.SoftwareManagementReportsV2` · Source: `Api/SoftwareManagementReportsV2.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCampaignDeviceStatus
- **HTTP**: `GET /reports/{account}/campaigns/{campaignId}/devices` (SoftwareManagementV2 (thingspace))
- **Notes**: The report endpoint allows user to get the full list of device of a campaign.
- **Signature**: `GetCampaignDeviceStatus(string account, string campaignId, string? lastSeenDeviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `lastSeenDeviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `lastSeenDeviceId` ← `lastSeenDeviceId`
- **Returns**: `V2CampaignDevice`
- **Error**: `SdkException<GetCampaignDeviceStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCampaignHistoryByStatus
- **HTTP**: `GET /reports/{account}/campaigns` (SoftwareManagementV2 (thingspace))
- **Notes**: The report endpoint allows user to get campaign history of an account for specified status.
- **Signature**: `GetCampaignHistoryByStatus(string account, string campaignStatus, string? lastSeenCampaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `lastSeenCampaignId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `campaignStatus` ← `campaignStatus`, `lastSeenCampaignId` ← `lastSeenCampaignId`
- **Returns**: `V2CampaignHistory`
- **Error**: `SdkException<GetCampaignHistoryByStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceFirmwareUpgradeHistory2
- **HTTP**: `GET /reports/{account}/devices/{deviceId}` (SoftwareManagementV2 (thingspace))
- **Notes**: The endpoint allows user to get software upgrade history of a device based on device IMEI.
- **Signature**: `GetDeviceFirmwareUpgradeHistory2(string account, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeviceSoftwareUpgrade>`
- **Error**: `SdkException<GetDeviceFirmwareUpgradeHistory2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAccountDevices2
- **HTTP**: `GET /devices/{account}` (SoftwareManagementV2 (thingspace))
- **Notes**: The device endpoint gets devices information of an account.
- **Signature**: `ListAccountDevices2(string account, string? lastSeenDeviceId, string? distributionType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `lastSeenDeviceId` — nullable, no default → **must pass explicitly**
  - `distributionType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `lastSeenDeviceId` ← `lastSeenDeviceId`, `distributionType` ← `distributionType`
- **Returns**: `V2AccountDeviceList`
- **Error**: `SdkException<ListAccountDevices2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAvailableSoftware
- **HTTP**: `GET /software/{account}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to list a certain type of software of an account.
- **Signature**: `ListAvailableSoftware(string account, string? distributionType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distributionType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `distributionType` ← `distributionType`
- **Returns**: `IReadOnlyList<SoftwarePackage>`
- **Error**: `SdkException<ListAvailableSoftwareError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
