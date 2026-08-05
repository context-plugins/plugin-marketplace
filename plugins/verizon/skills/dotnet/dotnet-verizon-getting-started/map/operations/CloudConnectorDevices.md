# CloudConnectorDevices — operations

Accessor: `client.CloudConnectorDevices` · Source: `Api/CloudConnectorDevices.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteDeviceFromAccount
- **HTTP**: `POST /devices/actions/delete` (CloudConnector (thingspace))
- **Signature**: `DeleteDeviceFromAccount(RemoveDeviceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FindDeviceByPropertyValues
- **HTTP**: `POST /devices/actions/query` (CloudConnector (thingspace))
- **Signature**: `FindDeviceByPropertyValues(QuerySubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FindDeviceByPropertyResponseList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchDeviceEventHistory
- **HTTP**: `POST /devices/fields/actions/history/search` (CloudConnector (thingspace))
- **Signature**: `SearchDeviceEventHistory(SearchDeviceEventHistoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchDeviceEventHistoryResponseList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchDevicesResourcesByPropertyValues
- **HTTP**: `POST /devices/actions/search` (CloudConnector (thingspace))
- **Signature**: `SearchDevicesResourcesByPropertyValues(QuerySubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchDeviceByPropertyResponseList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchSensorReadings
- **HTTP**: `POST /devices/fields/{fieldname}/actions/history` (CloudConnector (thingspace))
- **Signature**: `SearchSensorReadings(string fieldname, SearchSensorHistoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchSensorHistoryResponseList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDevicesConfigurationValue
- **HTTP**: `POST /devices/configuration/actions/set` (CloudConnector (thingspace))
- **Signature**: `UpdateDevicesConfigurationValue(ChangeConfigurationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChangeConfigurationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
