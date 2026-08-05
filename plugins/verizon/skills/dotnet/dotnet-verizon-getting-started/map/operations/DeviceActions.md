# DeviceActions — operations

Accessor: `client.DeviceActions` · Source: `Api/DeviceActions.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AccountInformation
- **HTTP**: `GET /v1/accounts/{accountName}` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieve all of the service plans, features and carriers associated with the account specified.
- **Signature**: `AccountInformation(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountDetails`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AggregateUsage
- **HTTP**: `POST /v1/devices/usage/actions/list/aggregate` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieve the aggregate usage for a device or a number of devices.
- **Signature**: `AggregateUsage(AggregateUsage body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DailyUsage
- **HTTP**: `POST /v1/devices/usage/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieve the daily usage for a device, for a specified period of time, segmented by day
- **Signature**: `DailyUsage(DailyUsage body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DailyUsageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAsynchronousRequestStatus
- **HTTP**: `GET /m2m/v2/accounts/{accountName}/requests/{requestID}/status` (HyperPreciseCredentials (thingspace))
- **Notes**: Get the status of an asynchronous request made with the Device Actions.
- **Signature**: `GetAsynchronousRequestStatus(string accountName, string requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StatusResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveDeviceProvisioningHistory
- **HTTP**: `POST /m2m/v2/devices/history/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieve the provisioning history of a specific device or devices.
- **Signature**: `RetrieveDeviceProvisioningHistory(ProvhistoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveTheGlobalDeviceList
- **HTTP**: `POST /m2m/v2/devices/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Allows the profile to fetch the complete device list. This works with Verizon US and Global profiles.
- **Signature**: `RetrieveTheGlobalDeviceList(GetDeviceListWithProfilesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ServicePlanList
- **HTTP**: `GET /v1/plans/{accountName}` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieve all of the service plans, features and carriers associated with the account specified.
- **Signature**: `ServicePlanList(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountDetails`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
