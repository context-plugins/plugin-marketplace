<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IncomingPhoneNumberLocal — operations

Accessor: `client.Api20100401IncomingPhoneNumberLocal` · Source: `Api/Api20100401IncomingPhoneNumberLocal.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateIncomingPhoneNumberLocal

- **Signature**: `CreateIncomingPhoneNumberLocal(string accountSid, string phoneNumber, string? apiVersion, string? friendlyName, string? smsApplicationSid, SmsFallbackMethod9? smsFallbackMethod, string? smsFallbackUrl, SmsMethod9? smsMethod, string? smsUrl, string? statusCallback, StatusCallbackMethod10? statusCallbackMethod, string? voiceApplicationSid, bool? voiceCallerIdLookup, VoiceFallbackMethod9? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod9? voiceMethod, string? voiceUrl, string? identitySid, string? addressSid, IncomingPhoneNumberLocalEnumEmergencyStatus? emergencyStatus, string? emergencyAddressSid, string? trunkSid, IncomingPhoneNumberLocalEnumVoiceReceiveMode? voiceReceiveMode, string? bundleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 22 params (`apiVersion` … `bundleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SmsFallbackMethod9` | `Models/Enums/SmsFallbackMethod9.cs` |
| `SmsMethod9` | `Models/Enums/SmsMethod9.cs` |
| `StatusCallbackMethod10` | `Models/Enums/StatusCallbackMethod10.cs` |
| `VoiceFallbackMethod9` | `Models/Enums/VoiceFallbackMethod9.cs` |
| `VoiceMethod9` | `Models/Enums/VoiceMethod9.cs` |
| `IncomingPhoneNumberLocalEnumEmergencyStatus` | `Models/Enums/IncomingPhoneNumberLocalEnumEmergencyStatus.cs` |
| `IncomingPhoneNumberLocalEnumVoiceReceiveMode` | `Models/Enums/IncomingPhoneNumberLocalEnumVoiceReceiveMode.cs` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal` | `Models/ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.cs` |

### ListIncomingPhoneNumberLocal

- **Signature**: `ListIncomingPhoneNumberLocal(string accountSid, bool? beta, string? friendlyName, string? phoneNumber, string? origin, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`beta` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Beta` ← `beta`, `FriendlyName` ← `friendlyName`, `PhoneNumber` ← `phoneNumber`, `Origin` ← `origin`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberLocalResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListIncomingPhoneNumberLocalResponse` | `Models/ListIncomingPhoneNumberLocalResponse.cs` |

