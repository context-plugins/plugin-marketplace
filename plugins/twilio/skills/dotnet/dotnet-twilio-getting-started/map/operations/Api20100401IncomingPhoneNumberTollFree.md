<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IncomingPhoneNumberTollFree — operations

Accessor: `client.Api20100401IncomingPhoneNumberTollFree` · Source: `Api/Api20100401IncomingPhoneNumberTollFree.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateIncomingPhoneNumberTollFree

- **Signature**: `CreateIncomingPhoneNumberTollFree(string accountSid, string phoneNumber, string? apiVersion, string? friendlyName, string? smsApplicationSid, SmsFallbackMethod9? smsFallbackMethod, string? smsFallbackUrl, SmsMethod9? smsMethod, string? smsUrl, string? statusCallback, StatusCallbackMethod10? statusCallbackMethod, string? voiceApplicationSid, bool? voiceCallerIdLookup, VoiceFallbackMethod9? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod9? voiceMethod, string? voiceUrl, string? identitySid, string? addressSid, IncomingPhoneNumberTollFreeEnumEmergencyStatus? emergencyStatus, string? emergencyAddressSid, string? trunkSid, IncomingPhoneNumberTollFreeEnumVoiceReceiveMode? voiceReceiveMode, string? bundleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 22 params (`apiVersion` … `bundleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SmsFallbackMethod9` | `Models/Enums/SmsFallbackMethod9.cs` |
| `SmsMethod9` | `Models/Enums/SmsMethod9.cs` |
| `StatusCallbackMethod10` | `Models/Enums/StatusCallbackMethod10.cs` |
| `VoiceFallbackMethod9` | `Models/Enums/VoiceFallbackMethod9.cs` |
| `VoiceMethod9` | `Models/Enums/VoiceMethod9.cs` |
| `IncomingPhoneNumberTollFreeEnumEmergencyStatus` | `Models/Enums/IncomingPhoneNumberTollFreeEnumEmergencyStatus.cs` |
| `IncomingPhoneNumberTollFreeEnumVoiceReceiveMode` | `Models/Enums/IncomingPhoneNumberTollFreeEnumVoiceReceiveMode.cs` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `Models/ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.cs` |

### ListIncomingPhoneNumberTollFree

- **Signature**: `ListIncomingPhoneNumberTollFree(string accountSid, bool? beta, string? friendlyName, string? phoneNumber, string? origin, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`beta` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Beta` ← `beta`, `FriendlyName` ← `friendlyName`, `PhoneNumber` ← `phoneNumber`, `Origin` ← `origin`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberTollFreeResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListIncomingPhoneNumberTollFreeResponse` | `Models/ListIncomingPhoneNumberTollFreeResponse.cs` |

