# Exclusions — operations

Accessor: `client.Exclusions` · Source: `Api/Exclusions.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DevicesLocationGetConsentAsync
- **HTTP**: `GET /devicelocations/action/consents` (DeviceLocation (thingspace))
- **Notes**: Get the consent settings for the entire account or device list in an account.
- **Signature**: `DevicesLocationGetConsentAsync(string accountName, string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountName` ← `accountName`, `deviceId` ← `deviceId`
- **Returns**: `GetAccountDeviceConsent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DevicesLocationGiveConsentAsync
- **HTTP**: `POST /devicelocations/action/consents` (DeviceLocation (thingspace))
- **Notes**: Create a consent record to use location services as an asynchronous request.
- **Signature**: `DevicesLocationGiveConsentAsync(AccountConsentCreate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConsentTransactionId`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DevicesLocationUpdateConsent
- **HTTP**: `PUT /devicelocations/action/consents` (DeviceLocation (thingspace))
- **Notes**: Update the location services consent record for an entire account.
- **Signature**: `DevicesLocationUpdateConsent(AccountConsentUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConsentTransactionId`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExcludeDevices
- **HTTP**: `POST /consents` (DeviceLocation (thingspace))
- **Notes**: This consents endpoint sets a new exclusion list.
- **Signature**: `ExcludeDevices(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceLocationSuccessResult`
- **Error**: `SdkException<ExcludeDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListExcludedDevices
- **HTTP**: `GET /consents/{accountName}/index/{startIndex}` (DeviceLocation (thingspace))
- **Notes**: This consents endpoint retrieves a list of excluded devices in an account.
- **Signature**: `ListExcludedDevices(string accountName, string startIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DevicesConsentResult`
- **Error**: `SdkException<ListExcludedDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveDevicesFromExclusionList
- **HTTP**: `DELETE /consents` (DeviceLocation (thingspace))
- **Notes**: Removes devices from the exclusion list so that they can be located with Device Location Services requests.
- **Signature**: `RemoveDevicesFromExclusionList(string accountName, string deviceList, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountName` ← `accountName`, `deviceList` ← `deviceList`
- **Returns**: `DeviceLocationSuccessResult`
- **Error**: `SdkException<RemoveDevicesFromExclusionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
