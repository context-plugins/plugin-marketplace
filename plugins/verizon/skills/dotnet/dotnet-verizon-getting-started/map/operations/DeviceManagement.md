# DeviceManagement — operations

Accessor: `client.DeviceManagement` · Source: `Api/DeviceManagement.cs` · 29 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivateServiceForDevices
- **HTTP**: `POST /m2m/v1/devices/actions/activate` (HyperPreciseCredentials (thingspace))
- **Notes**: If the devices do not already exist in the account, this API resource adds them before activation.
- **Signature**: `ActivateServiceForDevices(CarrierActivateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<ActivateServiceForDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddDevices
- **HTTP**: `POST /m2m/v1/devices/actions/add` (HyperPreciseCredentials (thingspace))
- **Notes**: Use this API if you want to manage some device settings before you are ready to activate service for the devices.
- **Signature**: `AddDevices(AddDevicesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<AddDevicesResult>`
- **Error**: `SdkException<AddDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BilledUsageInfo
- **HTTP**: `POST /m2m/v1/devices/usage/actions/billedusage/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Gets billed usage for for either multiple devices or an entire billing account.
- **Signature**: `BilledUsageInfo(BilledusageListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<BilledUsageInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ChangeDevicesServicePlan
- **HTTP**: `PUT /m2m/v1/devices/actions/plan` (HyperPreciseCredentials (thingspace))
- **Notes**: Changes the service plan for one or more devices.
- **Signature**: `ChangeDevicesServicePlan(ServicePlanUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<ChangeDevicesServicePlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckDevicesAvailabilityForActivation
- **HTTP**: `POST /m2m/v1/devices/availability/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Checks whether specified devices are registered by the manufacturer with the Verizon network and are available to be activated.
- **Signature**: `CheckDevicesAvailabilityForActivation(DeviceActivationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<CheckDevicesAvailabilityForActivationError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeactivateServiceForDevices
- **HTTP**: `POST /m2m/v1/devices/actions/deactivate` (HyperPreciseCredentials (thingspace))
- **Notes**: Deactivating service for a device may result in an early termination fee (ETF) being charged to the account, depending on the terms of the contract with Verizon. If your contract allows ETF waivers and if you want to use one for a particular deactivation, set the etfWaiver value to True.
- **Signature**: `DeactivateServiceForDevices(CarrierDeactivateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<DeactivateServiceForDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteDeactivatedDevices
- **HTTP**: `POST /m2m/v1/devices/actions/delete` (HyperPreciseCredentials (thingspace))
- **Notes**: Use this API to remove unneeded devices from an account.
- **Signature**: `DeleteDeactivatedDevices(DeleteDevicesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeleteDevicesResult>`
- **Error**: `SdkException<DeleteDeactivatedDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeviceUpload
- **HTTP**: `POST /m2m/v1/devices/actions/upload` (HyperPreciseCredentials (thingspace))
- **Notes**: Upload a device record
- **Signature**: `DeviceUpload(DeviceUploadRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestResponse`
- **Error**: `SdkException<DeviceUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeviceUploadStatus
- **HTTP**: `POST /m2m/v1/devices/requests/status` (HyperPreciseCredentials (thingspace))
- **Notes**: Checks the status of an activation order and lists where the order is in the provisioning process.
- **Signature**: `DeviceUploadStatus(CheckOrderStatusRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<DeviceUploadStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceExtendedDiagnosticInformation
- **HTTP**: `POST /m2m/v1/devices/extendeddiagnostics/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns extended diagnostic information about a specified device, including connectivity, provisioning, billing and location status.
- **Signature**: `GetDeviceExtendedDiagnosticInformation(DeviceExtendedDiagnosticsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceExtendedDiagnosticsResult`
- **Error**: `SdkException<GetDeviceExtendedDiagnosticInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceServiceSuspensionStatus
- **HTTP**: `POST /m2m/v1/devices/suspension/status` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns DeviceSuspensionStatus callback messages containing the current device state and information on how many days a device has been suspended and can continue to be suspended.
- **Signature**: `GetDeviceServiceSuspensionStatus(DeviceSuspensionStatusRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<GetDeviceServiceSuspensionStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListCurrentDevicesPrlversion
- **HTTP**: `POST /m2m/v1/devices/prl/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: 4G and GSM devices do not have a PRL.
- **Signature**: `ListCurrentDevicesPrlversion(DevicePrlListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<ListCurrentDevicesPrlversionError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDevicesInformation
- **HTTP**: `POST /m2m/v1/devices/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns information about a single device or information about all devices that match the given parameters. Returned information includes device provisioning state, service plan, MDN, MIN, and IP address.
- **Signature**: `ListDevicesInformation(AccountDeviceListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountDeviceListResult`
- **Error**: `SdkException<ListDevicesInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDevicesProvisioningHistory
- **HTTP**: `POST /m2m/v1/devices/history/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns the provisioning history of a specified device during a specified time period.
- **Signature**: `ListDevicesProvisioningHistory(DeviceProvisioningHistoryListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeviceProvisioningHistoryListResult>`
- **Error**: `SdkException<ListDevicesProvisioningHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDevicesUsageHistory
- **HTTP**: `POST /m2m/v1/devices/usage/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns the network data usage history of a device during a specified time period.
- **Signature**: `ListDevicesUsageHistory(DeviceUsageListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceUsageListResult`
- **Error**: `SdkException<ListDevicesUsageHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDevicesWithImeiIccidMismatch
- **HTTP**: `POST /m2m/v1/devices/actions/list/imeiiccidmismatch` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns a list of all 4G devices with an ICCID (SIM) that was not activated with the expected IMEI (hardware) during a specified time frame.
- **Signature**: `ListDevicesWithImeiIccidMismatch(DeviceMismatchListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceMismatchListResult`
- **Error**: `SdkException<ListDevicesWithImeiIccidMismatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MoveDevicesWithinAccountsOfProfile
- **HTTP**: `PUT /m2m/v1/devices/actions/move` (HyperPreciseCredentials (thingspace))
- **Notes**: Move active devices from one billing account to another within a customer profile.
- **Signature**: `MoveDevicesWithinAccountsOfProfile(MoveDeviceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<MoveDevicesWithinAccountsOfProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RestoreServiceForSuspendedDevices
- **HTTP**: `POST /m2m/v1/devices/actions/restore` (HyperPreciseCredentials (thingspace))
- **Notes**: Restores service to one or more suspended devices.
- **Signature**: `RestoreServiceForSuspendedDevices(CarrierActionsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<RestoreServiceForSuspendedDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveAggregateDeviceUsageHistory
- **HTTP**: `POST /m2m/v1/devices/usage/actions/list/aggregate` (HyperPreciseCredentials (thingspace))
- **Notes**: The information is returned in a callback response, so you must register a URL for DeviceUsage callback messages using the POST /callbacks API.
- **Signature**: `RetrieveAggregateDeviceUsageHistory(DeviceAggregateUsageListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<RetrieveAggregateDeviceUsageHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveDeviceConnectionHistory
- **HTTP**: `POST /m2m/v1/devices/connections/actions/listHistory` (HyperPreciseCredentials (thingspace))
- **Notes**: Each response includes a maximum of 500 records. To obtain more records, you can call the API multiple times, adjusting the earliest value each time to start where the previous request finished.
- **Signature**: `RetrieveDeviceConnectionHistory(DeviceConnectionListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConnectionHistoryResult`
- **Error**: `SdkException<RetrieveDeviceConnectionHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SuspendServiceForDevices
- **HTTP**: `POST /m2m/v1/devices/actions/suspend` (HyperPreciseCredentials (thingspace))
- **Notes**: Suspends service for one or more devices.
- **Signature**: `SuspendServiceForDevices(CarrierActionsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<SuspendServiceForDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDeviceId
- **HTTP**: `PUT /m2m/v1/devices/{serviceType}/actions/deviceId` (HyperPreciseCredentials (thingspace))
- **Notes**: Changes the identifier of a 3G or 4G device to match hardware changes made for a line of service. Use this request to transfer the line of service and the MDN to new hardware, or to change the MDN.
- **Signature**: `UpdateDeviceId(string serviceType, ChangeDeviceIdRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<UpdateDeviceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDevicesContactInformation
- **HTTP**: `PUT /m2m/v1/devices/actions/contactInfo` (HyperPreciseCredentials (thingspace))
- **Notes**: Sends a CarrierService callback message for each device in the request when the contact information has been changed, or if there was a problem and the change could not be completed.
- **Signature**: `UpdateDevicesContactInformation(ContactInfoUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<UpdateDevicesContactInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDevicesCostCenterCode
- **HTTP**: `PUT /m2m/v1/devices/costCenter` (HyperPreciseCredentials (thingspace))
- **Notes**: Changes or removes the CostCenterCode value or customer name and address (Primary Place of Use) for one or more devices.
- **Signature**: `UpdateDevicesCostCenterCode(DeviceCostCenterRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<UpdateDevicesCostCenterCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDevicesCustomFields
- **HTTP**: `PUT /m2m/v1/devices/actions/customFields` (HyperPreciseCredentials (thingspace))
- **Notes**: Sends a CarrierService callback message for each device in the request when the custom fields have been changed, or if there was a problem and the change could not be completed.
- **Signature**: `UpdateDevicesCustomFields(CustomFieldsUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<UpdateDevicesCustomFieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDevicesState
- **HTTP**: `PUT /m2m/v1/devices/actions/gotostate` (HyperPreciseCredentials (thingspace))
- **Notes**: Changes the provisioning state of one or more devices to a specified customer-defined service and state.
- **Signature**: `UpdateDevicesState(GoToStateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<UpdateDevicesStateError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadActivateDevice
- **HTTP**: `POST /m2m/v1/devices/actions/uploadactivate` (HyperPreciseCredentials (thingspace))
- **Notes**: Uploads and activates device identifiers and SKUs for new devices from OEMs to Verizon.
- **Signature**: `UploadActivateDevice(UploadsActivatesDeviceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<UploadActivateDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UsageSegmentationLabelAssociation
- **HTTP**: `POST /m2m/v1/devices/actions/usagesegmentationlabels` (HyperPreciseCredentials (thingspace))
- **Notes**: Allows you to associate your own usage segmentation label with a device.
- **Signature**: `UsageSegmentationLabelAssociation(AssociateLabelRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<UsageSegmentationLabelAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UsageSegmentationLabelDeletion
- **HTTP**: `DELETE /m2m/v1/devices/actions/usagesegmentationlabels` (HyperPreciseCredentials (thingspace))
- **Notes**: Allow customers to remove the associated label from a device.
- **Signature**: `UsageSegmentationLabelDeletion(string accountName, LabelsList labelList, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountName` ← `accountName`, `LabelList` ← `labelList`
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<UsageSegmentationLabelDeletionError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
