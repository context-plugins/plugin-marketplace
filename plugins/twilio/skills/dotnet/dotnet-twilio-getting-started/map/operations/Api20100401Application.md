# Api20100401Application — operations

Accessor: `client.Api20100401Application` · Source: `Api/Api20100401Application.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateApplication
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Applications.json` (Default (api))
- **Notes**: Create a new application within your account
- **Signature**: `CreateApplication(string accountSid, string? apiVersion, string? voiceUrl, VoiceMethod7? voiceMethod, string? voiceFallbackUrl, VoiceFallbackMethod7? voiceFallbackMethod, string? statusCallback, StatusCallbackMethod6? statusCallbackMethod, bool? voiceCallerIdLookup, string? smsUrl, SmsMethod7? smsMethod, string? smsFallbackUrl, SmsFallbackMethod7? smsFallbackMethod, string? smsStatusCallback, string? messageStatusCallback, string? friendlyName, bool? publicApplicationConnectEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`apiVersion` … `publicApplicationConnectEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ApiVersion` ← `apiVersion`, `VoiceUrl` ← `voiceUrl`, `VoiceMethod` ← `voiceMethod`, `VoiceFallbackUrl` ← `voiceFallbackUrl`, `VoiceFallbackMethod` ← `voiceFallbackMethod`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `VoiceCallerIdLookup` ← `voiceCallerIdLookup`, `SmsUrl` ← `smsUrl`, `SmsMethod` ← `smsMethod`, `SmsFallbackUrl` ← `smsFallbackUrl`, `SmsFallbackMethod` ← `smsFallbackMethod`, `SmsStatusCallback` ← `smsStatusCallback`, `MessageStatusCallback` ← `messageStatusCallback`, `FriendlyName` ← `friendlyName`, `PublicApplicationConnectEnabled` ← `publicApplicationConnectEnabled`
- **Returns**: `ApiV2010AccountApplication`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteApplication
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json` (Default (api))
- **Notes**: Delete the application by the specified application sid
- **Signature**: `DeleteApplication(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchApplication
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json` (Default (api))
- **Notes**: Fetch the application specified by the provided sid
- **Signature**: `FetchApplication(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountApplication`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListApplication
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Applications.json` (Default (api))
- **Notes**: Retrieve a list of applications representing an application within the requesting account
- **Signature**: `ListApplication(string accountSid, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListApplicationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateApplication
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json` (Default (api))
- **Notes**: Updates the application's properties
- **Signature**: `UpdateApplication(string accountSid, string sid, string? friendlyName, string? apiVersion, string? voiceUrl, VoiceMethod7? voiceMethod, string? voiceFallbackUrl, VoiceFallbackMethod7? voiceFallbackMethod, string? statusCallback, StatusCallbackMethod6? statusCallbackMethod, bool? voiceCallerIdLookup, string? smsUrl, SmsMethod7? smsMethod, string? smsFallbackUrl, SmsFallbackMethod7? smsFallbackMethod, string? smsStatusCallback, string? messageStatusCallback, bool? publicApplicationConnectEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`friendlyName` … `publicApplicationConnectEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `ApiVersion` ← `apiVersion`, `VoiceUrl` ← `voiceUrl`, `VoiceMethod` ← `voiceMethod`, `VoiceFallbackUrl` ← `voiceFallbackUrl`, `VoiceFallbackMethod` ← `voiceFallbackMethod`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `VoiceCallerIdLookup` ← `voiceCallerIdLookup`, `SmsUrl` ← `smsUrl`, `SmsMethod` ← `smsMethod`, `SmsFallbackUrl` ← `smsFallbackUrl`, `SmsFallbackMethod` ← `smsFallbackMethod`, `SmsStatusCallback` ← `smsStatusCallback`, `MessageStatusCallback` ← `messageStatusCallback`, `PublicApplicationConnectEnabled` ← `publicApplicationConnectEnabled`
- **Returns**: `ApiV2010AccountApplication`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
