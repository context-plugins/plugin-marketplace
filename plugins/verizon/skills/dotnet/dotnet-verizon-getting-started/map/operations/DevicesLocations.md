# DevicesLocations — operations

Accessor: `client.DevicesLocations` · Source: `Api/DevicesLocations.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelQueuedLocationReportGeneration
- **HTTP**: `DELETE /locationreports/{accountName}/report/{txid}` (DeviceLocation (thingspace))
- **Notes**: Cancel a queued device location report.
- **Signature**: `CancelQueuedLocationReportGeneration(string accountName, string txid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransactionId`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateLocationReport
- **HTTP**: `POST /locationreports` (DeviceLocation (thingspace))
- **Notes**: Request an asynchronous device location report.
- **Signature**: `CreateLocationReport(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AsynchronousLocationRequestResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetLocationReportStatus
- **HTTP**: `GET /locationreports/{accountName}/report/{txid}/status` (DeviceLocation (thingspace))
- **Notes**: Returns the current status of a requested device location report.
- **Signature**: `GetLocationReportStatus(string accountName, string txid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LocationReportStatus`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDevicesLocationsAsynchronous
- **HTTP**: `POST /devicelocations` (DeviceLocation (thingspace))
- **Notes**: Requests the current or cached location of up to 10,000 IoT or consumer devices (phones, tablets. etc.). This request returns a synchronous transaction ID, and the location information for each device is returned asynchronously as a DeviceLocation callback message.
- **Signature**: `ListDevicesLocationsAsynchronous(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SynchronousLocationRequestResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDevicesLocationsSynchronous
- **HTTP**: `POST /locations` (DeviceLocation (thingspace))
- **Notes**: This locations endpoint retrieves the locations for a list of devices.
- **Signature**: `ListDevicesLocationsSynchronous(LocationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Location>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLocationReport
- **HTTP**: `GET /locationreports/{accountName}/report/{txid}/index/{startindex}` (DeviceLocation (thingspace))
- **Notes**: Download a completed asynchronous device location report.
- **Signature**: `RetrieveLocationReport(string accountName, string txid, int startindex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LocationReport`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
