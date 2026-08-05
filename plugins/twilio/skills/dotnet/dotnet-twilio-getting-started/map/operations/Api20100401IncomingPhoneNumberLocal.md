# Api20100401IncomingPhoneNumberLocal — operations

Accessor: `client.Api20100401IncomingPhoneNumberLocal` · Source: `Api/Api20100401IncomingPhoneNumberLocal.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateIncomingPhoneNumberLocal
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json` (Default (api))
- **Signature**: `CreateIncomingPhoneNumberLocal(string accountSid, string phoneNumber, string? apiVersion, string? friendlyName, string? smsApplicationSid, SmsFallbackMethod9? smsFallbackMethod, string? smsFallbackUrl, SmsMethod9? smsMethod, string? smsUrl, string? statusCallback, StatusCallbackMethod10? statusCallbackMethod, string? voiceApplicationSid, bool? voiceCallerIdLookup, VoiceFallbackMethod9? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod9? voiceMethod, string? voiceUrl, string? identitySid, string? addressSid, IncomingPhoneNumberLocalEnumEmergencyStatus? emergencyStatus, string? emergencyAddressSid, string? trunkSid, IncomingPhoneNumberLocalEnumVoiceReceiveMode? voiceReceiveMode, string? bundleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 22 params (`apiVersion` … `bundleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PhoneNumber` ← `phoneNumber`, `ApiVersion` ← `apiVersion`, `FriendlyName` ← `friendlyName`, `SmsApplicationSid` ← `smsApplicationSid`, `SmsFallbackMethod` ← `smsFallbackMethod`, `SmsFallbackUrl` ← `smsFallbackUrl`, `SmsMethod` ← `smsMethod`, `SmsUrl` ← `smsUrl`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `VoiceApplicationSid` ← `voiceApplicationSid`, `VoiceCallerIdLookup` ← `voiceCallerIdLookup`, `VoiceFallbackMethod` ← `voiceFallbackMethod`, `VoiceFallbackUrl` ← `voiceFallbackUrl`, `VoiceMethod` ← `voiceMethod`, `VoiceUrl` ← `voiceUrl`, `IdentitySid` ← `identitySid`, `AddressSid` ← `addressSid`, `EmergencyStatus` ← `emergencyStatus`, `EmergencyAddressSid` ← `emergencyAddressSid`, `TrunkSid` ← `trunkSid`, `VoiceReceiveMode` ← `voiceReceiveMode`, `BundleSid` ← `bundleSid`
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListIncomingPhoneNumberLocal
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json` (Default (api))
- **Signature**: `ListIncomingPhoneNumberLocal(string accountSid, bool? beta, string? friendlyName, string? phoneNumber, string? origin, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`beta` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Beta` ← `beta`, `FriendlyName` ← `friendlyName`, `PhoneNumber` ← `phoneNumber`, `Origin` ← `origin`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberLocalResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
