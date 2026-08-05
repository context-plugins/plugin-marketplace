# Api20100401IncomingPhoneNumber — operations

Accessor: `client.Api20100401IncomingPhoneNumber` · Source: `Api/Api20100401IncomingPhoneNumber.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateIncomingPhoneNumber
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json` (Default (api))
- **Notes**: Purchase a phone-number for the account.
- **Signature**: `CreateIncomingPhoneNumber(string accountSid, string? apiVersion, string? friendlyName, string? smsApplicationSid, SmsFallbackMethod9? smsFallbackMethod, string? smsFallbackUrl, SmsMethod9? smsMethod, string? smsUrl, string? statusCallback, StatusCallbackMethod10? statusCallbackMethod, string? voiceApplicationSid, bool? voiceCallerIdLookup, VoiceFallbackMethod9? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod9? voiceMethod, string? voiceUrl, IncomingPhoneNumberEnumEmergencyStatus? emergencyStatus, string? emergencyAddressSid, string? trunkSid, string? identitySid, string? addressSid, IncomingPhoneNumberEnumVoiceReceiveMode? voiceReceiveMode, string? bundleSid, string? phoneNumber, string? areaCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 24 params (`apiVersion` … `areaCode`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ApiVersion` ← `apiVersion`, `FriendlyName` ← `friendlyName`, `SmsApplicationSid` ← `smsApplicationSid`, `SmsFallbackMethod` ← `smsFallbackMethod`, `SmsFallbackUrl` ← `smsFallbackUrl`, `SmsMethod` ← `smsMethod`, `SmsUrl` ← `smsUrl`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `VoiceApplicationSid` ← `voiceApplicationSid`, `VoiceCallerIdLookup` ← `voiceCallerIdLookup`, `VoiceFallbackMethod` ← `voiceFallbackMethod`, `VoiceFallbackUrl` ← `voiceFallbackUrl`, `VoiceMethod` ← `voiceMethod`, `VoiceUrl` ← `voiceUrl`, `EmergencyStatus` ← `emergencyStatus`, `EmergencyAddressSid` ← `emergencyAddressSid`, `TrunkSid` ← `trunkSid`, `IdentitySid` ← `identitySid`, `AddressSid` ← `addressSid`, `VoiceReceiveMode` ← `voiceReceiveMode`, `BundleSid` ← `bundleSid`, `PhoneNumber` ← `phoneNumber`, `AreaCode` ← `areaCode`
- **Returns**: `ApiV2010AccountIncomingPhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteIncomingPhoneNumber
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json` (Default (api))
- **Notes**: Delete a phone-numbers belonging to the account used to make the request.
- **Signature**: `DeleteIncomingPhoneNumber(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchIncomingPhoneNumber
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json` (Default (api))
- **Notes**: Fetch an incoming-phone-number belonging to the account used to make the request.
- **Signature**: `FetchIncomingPhoneNumber(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountIncomingPhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListIncomingPhoneNumber
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json` (Default (api))
- **Notes**: Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
- **Signature**: `ListIncomingPhoneNumber(string accountSid, bool? beta, string? friendlyName, string? phoneNumber, string? origin, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`beta` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Beta` ← `beta`, `FriendlyName` ← `friendlyName`, `PhoneNumber` ← `phoneNumber`, `Origin` ← `origin`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateIncomingPhoneNumber
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json` (Default (api))
- **Notes**: Update an incoming-phone-number instance.
- **Signature**: `UpdateIncomingPhoneNumber(string accountSidTemplate, string sid, string? accountSid, string? apiVersion, string? friendlyName, string? smsApplicationSid, SmsFallbackMethod9? smsFallbackMethod, string? smsFallbackUrl, SmsMethod9? smsMethod, string? smsUrl, string? statusCallback, StatusCallbackMethod10? statusCallbackMethod, string? voiceApplicationSid, bool? voiceCallerIdLookup, VoiceFallbackMethod9? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod9? voiceMethod, string? voiceUrl, IncomingPhoneNumberEnumEmergencyStatus? emergencyStatus, string? emergencyAddressSid, string? trunkSid, IncomingPhoneNumberEnumVoiceReceiveMode? voiceReceiveMode, string? identitySid, string? addressSid, string? bundleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 23 params (`accountSid` … `bundleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AccountSid` ← `accountSid`, `ApiVersion` ← `apiVersion`, `FriendlyName` ← `friendlyName`, `SmsApplicationSid` ← `smsApplicationSid`, `SmsFallbackMethod` ← `smsFallbackMethod`, `SmsFallbackUrl` ← `smsFallbackUrl`, `SmsMethod` ← `smsMethod`, `SmsUrl` ← `smsUrl`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `VoiceApplicationSid` ← `voiceApplicationSid`, `VoiceCallerIdLookup` ← `voiceCallerIdLookup`, `VoiceFallbackMethod` ← `voiceFallbackMethod`, `VoiceFallbackUrl` ← `voiceFallbackUrl`, `VoiceMethod` ← `voiceMethod`, `VoiceUrl` ← `voiceUrl`, `EmergencyStatus` ← `emergencyStatus`, `EmergencyAddressSid` ← `emergencyAddressSid`, `TrunkSid` ← `trunkSid`, `VoiceReceiveMode` ← `voiceReceiveMode`, `IdentitySid` ← `identitySid`, `AddressSid` ← `addressSid`, `BundleSid` ← `bundleSid`
- **Returns**: `ApiV2010AccountIncomingPhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
