# Sms — operations

Accessor: `client.Sms` · Source: `Api/Sms.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListDevicesSmsmessages
- **HTTP**: `GET /m2m/v1/sms/{aname}/history` (HyperPreciseCredentials (thingspace))
- **Notes**: When HTTP status is 202, a URL will be returned in the Location header of the form /sms/{aname}/history?next={token}. This URL can be used to request the next set of messages.
- **Signature**: `ListDevicesSmsmessages(string aname, long? next, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `next` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `next` ← `next`
- **Returns**: `SmsmessagesQueryResult`
- **Error**: `SdkException<ListDevicesSmsmessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SendSmstoDevice
- **HTTP**: `POST /m2m/v1/sms` (HyperPreciseCredentials (thingspace))
- **Notes**: The messages are queued on the ThingSpace Platform and sent as soon as possible, but they may be delayed due to traffic and routing considerations.
- **Signature**: `SendSmstoDevice(SmssendRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<SendSmstoDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartQueuedSmsdelivery
- **HTTP**: `PUT /m2m/v1/sms/{aname}/startCallbacks` (HyperPreciseCredentials (thingspace))
- **Notes**: Tells the ThingSpace Platform to start sending mobile-originated SMS messages through the EnhancedConnectivityService callback service. SMS messages from devices are queued until they are retrieved by your application, either by callback or synchronously with GET /sms/{accountName}/history.
- **Signature**: `StartQueuedSmsdelivery(string aname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConnectivityManagementSuccessResult`
- **Error**: `SdkException<StartQueuedSmsdeliveryError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
