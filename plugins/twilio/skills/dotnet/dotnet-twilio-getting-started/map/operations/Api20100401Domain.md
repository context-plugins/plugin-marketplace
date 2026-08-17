<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Domain — operations

Accessor: `client.Api20100401Domain` · Source: `Api/Api20100401Domain.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipDomain

- **Signature**: `CreateSipDomain(string accountSid, string domainName, string? friendlyName, string? voiceUrl, VoiceMethod7? voiceMethod, string? voiceFallbackUrl, VoiceFallbackMethod7? voiceFallbackMethod, string? voiceStatusCallbackUrl, VoiceStatusCallbackMethod1? voiceStatusCallbackMethod, bool? sipRegistration, bool? emergencyCallingEnabled, bool? secure, string? byocTrunkSid, string? emergencyCallerSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`friendlyName` … `emergencyCallerSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountSipSipDomain`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VoiceMethod7` | `Models/Enums/VoiceMethod7.cs` |
| `VoiceFallbackMethod7` | `Models/Enums/VoiceFallbackMethod7.cs` |
| `VoiceStatusCallbackMethod1` | `Models/Enums/VoiceStatusCallbackMethod1.cs` |
| `ApiV2010AccountSipSipDomain` | `Models/ApiV2010AccountSipSipDomain.cs` |

### DeleteSipDomain

- **Signature**: `DeleteSipDomain(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipDomain

- **Signature**: `FetchSipDomain(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipDomain`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipDomain` | `Models/ApiV2010AccountSipSipDomain.cs` |

### ListSipDomain

- **Signature**: `ListSipDomain(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipDomainResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipDomainResponse` | `Models/ListSipDomainResponse.cs` |

### UpdateSipDomain

- **Signature**: `UpdateSipDomain(string accountSid, string sid, string? friendlyName, VoiceFallbackMethod7? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod15? voiceMethod, VoiceStatusCallbackMethod1? voiceStatusCallbackMethod, string? voiceStatusCallbackUrl, string? voiceUrl, bool? sipRegistration, string? domainName, bool? emergencyCallingEnabled, bool? secure, string? byocTrunkSid, string? emergencyCallerSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`friendlyName` … `emergencyCallerSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountSipSipDomain`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VoiceFallbackMethod7` | `Models/Enums/VoiceFallbackMethod7.cs` |
| `VoiceMethod15` | `Models/Enums/VoiceMethod15.cs` |
| `VoiceStatusCallbackMethod1` | `Models/Enums/VoiceStatusCallbackMethod1.cs` |
| `ApiV2010AccountSipSipDomain` | `Models/ApiV2010AccountSipSipDomain.cs` |

