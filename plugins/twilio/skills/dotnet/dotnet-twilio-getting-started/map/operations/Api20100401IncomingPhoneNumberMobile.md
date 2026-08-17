<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IncomingPhoneNumberMobile — operations

Accessor: `client.Api20100401IncomingPhoneNumberMobile` · Source: `Api/Api20100401IncomingPhoneNumberMobile.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateIncomingPhoneNumberMobile

- **Signature**: `CreateIncomingPhoneNumberMobile(string accountSid, string phoneNumber, string? apiVersion, string? friendlyName, string? smsApplicationSid, SmsFallbackMethod9? smsFallbackMethod, string? smsFallbackUrl, SmsMethod9? smsMethod, string? smsUrl, string? statusCallback, StatusCallbackMethod10? statusCallbackMethod, string? voiceApplicationSid, bool? voiceCallerIdLookup, VoiceFallbackMethod9? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod9? voiceMethod, string? voiceUrl, string? identitySid, string? addressSid, IncomingPhoneNumberMobileEnumEmergencyStatus? emergencyStatus, string? emergencyAddressSid, string? trunkSid, IncomingPhoneNumberMobileEnumVoiceReceiveMode? voiceReceiveMode, string? bundleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 22 params (`apiVersion` … `bundleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SmsFallbackMethod9` | `Models/Enums/SmsFallbackMethod9.cs` |
| `SmsMethod9` | `Models/Enums/SmsMethod9.cs` |
| `StatusCallbackMethod10` | `Models/Enums/StatusCallbackMethod10.cs` |
| `VoiceFallbackMethod9` | `Models/Enums/VoiceFallbackMethod9.cs` |
| `VoiceMethod9` | `Models/Enums/VoiceMethod9.cs` |
| `IncomingPhoneNumberMobileEnumEmergencyStatus` | `Models/Enums/IncomingPhoneNumberMobileEnumEmergencyStatus.cs` |
| `IncomingPhoneNumberMobileEnumVoiceReceiveMode` | `Models/Enums/IncomingPhoneNumberMobileEnumVoiceReceiveMode.cs` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `Models/ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.cs` |

### ListIncomingPhoneNumberMobile

- **Signature**: `ListIncomingPhoneNumberMobile(string accountSid, bool? beta, string? friendlyName, string? phoneNumber, string? origin, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`beta` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Beta` ← `beta`, `FriendlyName` ← `friendlyName`, `PhoneNumber` ← `phoneNumber`, `Origin` ← `origin`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberMobileResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListIncomingPhoneNumberMobileResponse` | `Models/ListIncomingPhoneNumberMobileResponse.cs` |

