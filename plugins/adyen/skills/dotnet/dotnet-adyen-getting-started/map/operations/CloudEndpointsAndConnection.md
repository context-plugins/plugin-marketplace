# CloudEndpointsAndConnection — operations

Accessor: `client.CloudEndpointsAndConnection` · Source: `Api/CloudEndpointsAndConnection.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantAccountConnectedDevices
- **HTTP**: `GET /merchants/{merchantAccount}/connectedDevices` (Default (balanceplatform-api-test))
- **Notes**: Get a list of payment terminals or SDK installation IDs (in a Mobile solution) belonging to the specified merchant account that have an active cloud connection. The `store` query parameter limits the list of devices to those belonging to a specific store under the specified merchant account. To make this request, your API credential must have the following role : Cloud Device API role
- **Signature**: `GetMerchantsMerchantAccountConnectedDevices(string merchantAccount, string? store, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `store` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `store` ← `store`
- **Returns**: `ConnectedDevicesResponse`
- **Error**: `SdkException<GetMerchantsMerchantAccountConnectedDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMerchantsConnectedDevices401Error1(out MerchantsConnectedDevices401Error1)` [401] · `TryGetMerchantsConnectedDevices403Error1(out MerchantsConnectedDevices403Error1)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantAccountDevicesDeviceIdStatus
- **HTTP**: `GET /merchants/{merchantAccount}/devices/{deviceId}/status` (Default (balanceplatform-api-test))
- **Notes**: Check if the specified payment terminal or SDK installation ID (in an IPP Mobile solution) has an active cloud connection. To make this request, your API credential must have the following role : Cloud Device API role
- **Signature**: `GetMerchantsMerchantAccountDevicesDeviceIdStatus(string merchantAccount, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceStatusResponse`
- **Error**: `SdkException<GetMerchantsMerchantAccountDevicesDeviceIdStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetMerchantsDevicesStatus401Error1(out MerchantsDevicesStatus401Error1)` [401] · `TryGetMerchantsDevicesStatus403Error1(out MerchantsDevicesStatus403Error1)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantAccountDevicesDeviceIdAsync
- **HTTP**: `POST /merchants/{merchantAccount}/devices/{deviceId}/async` (Default (balanceplatform-api-test))
- **Notes**: Sends a Terminal API request and receives the response asynchronously. The request body is a JSON object containing a Terminal API request. For the structure, see the various request types under Terminal API . A HTTP status code of 200 OK is returned when the payment device is online and our backend has sent the request. The actual Terminal API response is returned as an event notification webhook to your event notification endpoint. See Receiving an asynchronous result . To make this request, your API credential must have the following role : Cloud Device API role
- **Signature**: `PostMerchantsMerchantAccountDevicesDeviceIdAsync(string merchantAccount, string deviceId, string? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantAccountDevicesDeviceIdSync
- **HTTP**: `POST /merchants/{merchantAccount}/devices/{deviceId}/sync` (Default (balanceplatform-api-test))
- **Notes**: Sends a Terminal API request and receives the response synchronously. The request body is a JSON object containing a Terminal API request. For the structure, see the various request types under Terminal API . The response returns a Terminal API response. See Receiving a synchronous result . To make this request, your API credential must have the following role : Cloud Device API role
- **Signature**: `PostMerchantsMerchantAccountDevicesDeviceIdSync(string merchantAccount, string deviceId, string? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
