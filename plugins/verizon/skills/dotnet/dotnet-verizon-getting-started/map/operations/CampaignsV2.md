# CampaignsV2 — operations

Accessor: `client.CampaignsV2` · Source: `Api/CampaignsV2.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelCampaign
- **HTTP**: `DELETE /campaigns/{account}/{campaignId}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to cancel software upgrade. A software upgrade already started can not be cancelled.
- **Signature**: `CancelCampaign(string account, string campaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV2SuccessResult`
- **Error**: `SdkException<CancelCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCampaignInformation
- **HTTP**: `GET /campaigns/{account}/{campaignId}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to get information of a software upgrade.
- **Signature**: `GetCampaignInformation(string account, string campaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CampaignSoftware`
- **Error**: `SdkException<GetCampaignInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ScheduleCampaignFirmwareUpgrade
- **HTTP**: `POST /campaigns/{account}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to schedule a software upgrade.
- **Signature**: `ScheduleCampaignFirmwareUpgrade(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CampaignSoftware`
- **Error**: `SdkException<ScheduleCampaignFirmwareUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ScheduleFileUpgrade
- **HTTP**: `POST /campaigns/files/{acc}` (SoftwareManagementV2 (thingspace))
- **Notes**: You can upload configuration files and schedule them in a campaign to devices.
- **Signature**: `ScheduleFileUpgrade(string acc, UploadAndScheduleFileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UploadAndScheduleFileResponse`
- **Error**: `SdkException<ScheduleFileUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ScheduleSwupgradeHttpDevices
- **HTTP**: `POST /campaigns/software/{acc}` (SoftwareManagementV2 (thingspace))
- **Notes**: Campaign time windows for downloading and installing software are available as long as the device OEM supports this.
- **Signature**: `ScheduleSwupgradeHttpDevices(string acc, SchedulesSoftwareUpgradeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UploadAndScheduleFileResponse`
- **Error**: `SdkException<ScheduleSwupgradeHttpDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCampaignDates
- **HTTP**: `PUT /campaigns/{account}/{campaignId}/dates` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to change campaign dates and time windows. Fields which need to remain unchanged should be also provided.
- **Signature**: `UpdateCampaignDates(string account, string campaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CampaignSoftware`
- **Error**: `SdkException<UpdateCampaignDatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCampaignFirmwareDevices
- **HTTP**: `PUT /campaigns/{account}/{campaignId}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to Add or Remove devices to an existing software upgrade.
- **Signature**: `UpdateCampaignFirmwareDevices(string account, string campaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V2AddOrRemoveDeviceResult`
- **Error**: `SdkException<UpdateCampaignFirmwareDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
