# SoftwareManagementReportsV3 — operations

Accessor: `client.SoftwareManagementReportsV3` · Source: `Api/SoftwareManagementReportsV3.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCampaignDeviceStatus2
- **HTTP**: `GET /reports/{acc}/campaigns/{campaignId}/devices` (SoftwareManagementV3 (thingspace))
- **Notes**: Retrieve a list of all devices in a campaign and the status of each device.
- **Signature**: `GetCampaignDeviceStatus2(string acc, string campaignId, string? lastSeenDeviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `lastSeenDeviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `lastSeenDeviceId` ← `lastSeenDeviceId`
- **Returns**: `V3CampaignDevice`
- **Error**: `SdkException<GetCampaignDeviceStatus2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCampaignHistoryByStatus2
- **HTTP**: `GET /reports/{acc}/firmware/campaigns` (SoftwareManagementV3 (thingspace))
- **Notes**: Retrieve a list of campaigns for an account that have a specified campaign status.
- **Signature**: `GetCampaignHistoryByStatus2(string acc, CampaignStatus campaignStatus, string? lastSeenCampaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `lastSeenCampaignId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `campaignStatus` ← `campaignStatus`, `lastSeenCampaignId` ← `lastSeenCampaignId`
- **Returns**: `V3CampaignHistory`
- **Error**: `SdkException<GetCampaignHistoryByStatus2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceFirmwareUpgradeHistory3
- **HTTP**: `GET /reports/{acc}/devices/{deviceId}` (SoftwareManagementV3 (thingspace))
- **Notes**: Retrieve campaign history for a specific device.
- **Signature**: `GetDeviceFirmwareUpgradeHistory3(string acc, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeviceFirmwareUpgrade>`
- **Error**: `SdkException<GetDeviceFirmwareUpgradeHistory3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
