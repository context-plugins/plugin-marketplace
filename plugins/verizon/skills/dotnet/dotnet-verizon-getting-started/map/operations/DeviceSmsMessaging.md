# DeviceSmsMessaging — operations

Accessor: `client.DeviceSmsMessaging` · Source: `Api/DeviceSmsMessaging.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSmsMessages
- **HTTP**: `GET /m2m/v1/sms/{accountName}/history` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieves queued SMS messages sent by all M2M MC devices associated with an account.
- **Signature**: `GetSmsMessages(string accountName, string? next, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `next` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `next` ← `next`
- **Returns**: `SmsMessagesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSmsMessageHistory
- **HTTP**: `POST /m2m/v1/devices/sms/history/actions/list` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns a list of sms history for a given device during a specified time frame.
- **Signature**: `ListSmsMessageHistory(SmseventHistoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SendAnSmsMessage
- **HTTP**: `POST /m2m/v1/sms` (HyperPreciseCredentials (thingspace))
- **Notes**: Sends an SMS message to one device. Messages are queued on the M2M MC Platform and sent as soon as possible, but they may be delayed due to traffic and routing considerations.
- **Signature**: `SendAnSmsMessage(GiosmssendRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StartSmsMessageDelivery
- **HTTP**: `PUT /m2m/v1/sms/{accountName}/startCallbacks` (HyperPreciseCredentials (thingspace))
- **Notes**: Starts delivery of SMS messages for the specified account.
- **Signature**: `StartSmsMessageDelivery(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
