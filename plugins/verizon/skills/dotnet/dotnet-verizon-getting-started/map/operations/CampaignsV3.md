# CampaignsV3 — operations

Accessor: `client.CampaignsV3` · Source: `Api/CampaignsV3.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelCampaign2
- **HTTP**: `DELETE /campaigns/{accountName}/{campaignId}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows user to cancel a firmware campaign. A firmware campaign already started can not be cancelled.
- **Signature**: `CancelCampaign2(string accountName, string campaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV3SuccessResult`
- **Error**: `SdkException<CancelCampaign2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCampaignInformation2
- **HTTP**: `GET /campaigns/{accountName}/{campaignId}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows the user to retrieve campaign level information for a specified campaign.
- **Signature**: `GetCampaignInformation2(string accountName, string campaignId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Campaign`
- **Error**: `SdkException<GetCampaignInformation2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ScheduleCampaignFirmwareUpgrade2
- **HTTP**: `POST /campaigns/firmware/{accountName}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows a user to schedule a firmware upgrade for a list of devices.
- **Signature**: `ScheduleCampaignFirmwareUpgrade2(string accountName, CampaignFirmwareUpgrade body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FirmwareCampaign`
- **Error**: `SdkException<ScheduleCampaignFirmwareUpgrade2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCampaignDates2
- **HTTP**: `PUT /campaigns/firmware/{acc}/{campaignId}/dates` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows user to change campaign dates and time windows. Fields which need to remain unchanged should be also provided.
- **Signature**: `UpdateCampaignDates2(string acc, string campaignId, V3ChangeCampaignDatesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FirmwareCampaign`
- **Error**: `SdkException<UpdateCampaignDates2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCampaignFirmwareDevices2
- **HTTP**: `PUT /campaigns/firmware/{acc}/{campaignId}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows user to Add or Remove devices to an existing campaign.
- **Signature**: `UpdateCampaignFirmwareDevices2(string acc, string campaignId, V3AddOrRemoveDeviceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V3AddOrRemoveDeviceResult`
- **Error**: `SdkException<UpdateCampaignFirmwareDevices2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
