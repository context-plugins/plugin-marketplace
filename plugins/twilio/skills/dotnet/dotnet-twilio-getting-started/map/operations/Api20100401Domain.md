# Api20100401Domain — operations

Accessor: `client.Api20100401Domain` · Source: `Api/Api20100401Domain.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSipDomain
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains.json` (Default (api))
- **Notes**: Create a new Domain
- **Signature**: `CreateSipDomain(string accountSid, string domainName, string? friendlyName, string? voiceUrl, VoiceMethod7? voiceMethod, string? voiceFallbackUrl, VoiceFallbackMethod7? voiceFallbackMethod, string? voiceStatusCallbackUrl, VoiceStatusCallbackMethod1? voiceStatusCallbackMethod, bool? sipRegistration, bool? emergencyCallingEnabled, bool? secure, string? byocTrunkSid, string? emergencyCallerSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`friendlyName` … `emergencyCallerSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DomainName` ← `domainName`, `FriendlyName` ← `friendlyName`, `VoiceUrl` ← `voiceUrl`, `VoiceMethod` ← `voiceMethod`, `VoiceFallbackUrl` ← `voiceFallbackUrl`, `VoiceFallbackMethod` ← `voiceFallbackMethod`, `VoiceStatusCallbackUrl` ← `voiceStatusCallbackUrl`, `VoiceStatusCallbackMethod` ← `voiceStatusCallbackMethod`, `SipRegistration` ← `sipRegistration`, `EmergencyCallingEnabled` ← `emergencyCallingEnabled`, `Secure` ← `secure`, `ByocTrunkSid` ← `byocTrunkSid`, `EmergencyCallerSid` ← `emergencyCallerSid`
- **Returns**: `ApiV2010AccountSipSipDomain`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSipDomain
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json` (Default (api))
- **Notes**: Delete an instance of a Domain
- **Signature**: `DeleteSipDomain(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSipDomain
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json` (Default (api))
- **Notes**: Fetch an instance of a Domain
- **Signature**: `FetchSipDomain(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountSipSipDomain`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSipDomain
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains.json` (Default (api))
- **Notes**: Retrieve a list of domains belonging to the account used to make the request
- **Signature**: `ListSipDomain(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipDomainResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSipDomain
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json` (Default (api))
- **Notes**: Update the attributes of a domain
- **Signature**: `UpdateSipDomain(string accountSid, string sid, string? friendlyName, VoiceFallbackMethod7? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod15? voiceMethod, VoiceStatusCallbackMethod1? voiceStatusCallbackMethod, string? voiceStatusCallbackUrl, string? voiceUrl, bool? sipRegistration, string? domainName, bool? emergencyCallingEnabled, bool? secure, string? byocTrunkSid, string? emergencyCallerSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`friendlyName` … `emergencyCallerSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `VoiceFallbackMethod` ← `voiceFallbackMethod`, `VoiceFallbackUrl` ← `voiceFallbackUrl`, `VoiceMethod` ← `voiceMethod`, `VoiceStatusCallbackMethod` ← `voiceStatusCallbackMethod`, `VoiceStatusCallbackUrl` ← `voiceStatusCallbackUrl`, `VoiceUrl` ← `voiceUrl`, `SipRegistration` ← `sipRegistration`, `DomainName` ← `domainName`, `EmergencyCallingEnabled` ← `emergencyCallingEnabled`, `Secure` ← `secure`, `ByocTrunkSid` ← `byocTrunkSid`, `EmergencyCallerSid` ← `emergencyCallerSid`
- **Returns**: `ApiV2010AccountSipSipDomain`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
