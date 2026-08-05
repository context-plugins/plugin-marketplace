# DeviceLocationCallbacks — operations

Accessor: `client.DeviceLocationCallbacks` · Source: `Api/DeviceLocationCallbacks.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelAsyncReport
- **HTTP**: `DELETE /devicelocations/{txid}` (DeviceLocation (thingspace))
- **Notes**: Cancel an asynchronous report request.
- **Signature**: `CancelAsyncReport(string txid, string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountName` ← `accountName`
- **Returns**: `TransactionId`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeregisterCallback2
- **HTTP**: `DELETE /callbacks/{accountName}/name/{service}` (DeviceLocation (thingspace))
- **Notes**: Deregister a URL to stop receiving callback messages.
- **Signature**: `DeregisterCallback2(string accountName, CallbackServiceName service, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceLocationSuccessResult`
- **Error**: `SdkException<DeregisterCallback2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListRegisteredCallbacks2
- **HTTP**: `GET /callbacks/{accountName}` (DeviceLocation (thingspace))
- **Notes**: Returns a list of all registered callback URLs for the account.
- **Signature**: `ListRegisteredCallbacks2(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeviceLocationCallback>`
- **Error**: `SdkException<ListRegisteredCallbacks2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RegisterCallback2
- **HTTP**: `POST /callbacks/{accountName}` (DeviceLocation (thingspace))
- **Notes**: Provide a URL to receive messages from a ThingSpace callback service.
- **Signature**: `RegisterCallback2(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CallbackRegistrationResult`
- **Error**: `SdkException<RegisterCallback2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceLocationResult(out DeviceLocationResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
