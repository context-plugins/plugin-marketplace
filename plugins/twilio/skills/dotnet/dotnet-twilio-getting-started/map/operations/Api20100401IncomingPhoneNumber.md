<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IncomingPhoneNumber — operations

Accessor: `client.Api20100401IncomingPhoneNumber` · Source: `Api/Api20100401IncomingPhoneNumber.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateIncomingPhoneNumber

- **Signature**: `CreateIncomingPhoneNumber(string accountSid, string? apiVersion, string? friendlyName, string? smsApplicationSid, SmsFallbackMethod9? smsFallbackMethod, string? smsFallbackUrl, SmsMethod9? smsMethod, string? smsUrl, string? statusCallback, StatusCallbackMethod10? statusCallbackMethod, string? voiceApplicationSid, bool? voiceCallerIdLookup, VoiceFallbackMethod9? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod9? voiceMethod, string? voiceUrl, IncomingPhoneNumberEnumEmergencyStatus? emergencyStatus, string? emergencyAddressSid, string? trunkSid, string? identitySid, string? addressSid, IncomingPhoneNumberEnumVoiceReceiveMode? voiceReceiveMode, string? bundleSid, string? phoneNumber, string? areaCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 24 params (`apiVersion` … `areaCode`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountIncomingPhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SmsFallbackMethod9` | `Models/Enums/SmsFallbackMethod9.cs` |
| `SmsMethod9` | `Models/Enums/SmsMethod9.cs` |
| `StatusCallbackMethod10` | `Models/Enums/StatusCallbackMethod10.cs` |
| `VoiceFallbackMethod9` | `Models/Enums/VoiceFallbackMethod9.cs` |
| `VoiceMethod9` | `Models/Enums/VoiceMethod9.cs` |
| `IncomingPhoneNumberEnumEmergencyStatus` | `Models/Enums/IncomingPhoneNumberEnumEmergencyStatus.cs` |
| `IncomingPhoneNumberEnumVoiceReceiveMode` | `Models/Enums/IncomingPhoneNumberEnumVoiceReceiveMode.cs` |
| `ApiV2010AccountIncomingPhoneNumber` | `Models/ApiV2010AccountIncomingPhoneNumber.cs` |

### DeleteIncomingPhoneNumber

- **Signature**: `DeleteIncomingPhoneNumber(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchIncomingPhoneNumber

- **Signature**: `FetchIncomingPhoneNumber(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountIncomingPhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountIncomingPhoneNumber` | `Models/ApiV2010AccountIncomingPhoneNumber.cs` |

### ListIncomingPhoneNumber

- **Signature**: `ListIncomingPhoneNumber(string accountSid, bool? beta, string? friendlyName, string? phoneNumber, string? origin, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`beta` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Beta` ← `beta`, `FriendlyName` ← `friendlyName`, `PhoneNumber` ← `phoneNumber`, `Origin` ← `origin`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListIncomingPhoneNumberResponse` | `Models/ListIncomingPhoneNumberResponse.cs` |

### UpdateIncomingPhoneNumber

- **Signature**: `UpdateIncomingPhoneNumber(string accountSidTemplate, string sid, string? accountSid, string? apiVersion, string? friendlyName, string? smsApplicationSid, SmsFallbackMethod9? smsFallbackMethod, string? smsFallbackUrl, SmsMethod9? smsMethod, string? smsUrl, string? statusCallback, StatusCallbackMethod10? statusCallbackMethod, string? voiceApplicationSid, bool? voiceCallerIdLookup, VoiceFallbackMethod9? voiceFallbackMethod, string? voiceFallbackUrl, VoiceMethod9? voiceMethod, string? voiceUrl, IncomingPhoneNumberEnumEmergencyStatus? emergencyStatus, string? emergencyAddressSid, string? trunkSid, IncomingPhoneNumberEnumVoiceReceiveMode? voiceReceiveMode, string? identitySid, string? addressSid, string? bundleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 23 params (`accountSid` … `bundleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountIncomingPhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SmsFallbackMethod9` | `Models/Enums/SmsFallbackMethod9.cs` |
| `SmsMethod9` | `Models/Enums/SmsMethod9.cs` |
| `StatusCallbackMethod10` | `Models/Enums/StatusCallbackMethod10.cs` |
| `VoiceFallbackMethod9` | `Models/Enums/VoiceFallbackMethod9.cs` |
| `VoiceMethod9` | `Models/Enums/VoiceMethod9.cs` |
| `IncomingPhoneNumberEnumEmergencyStatus` | `Models/Enums/IncomingPhoneNumberEnumEmergencyStatus.cs` |
| `IncomingPhoneNumberEnumVoiceReceiveMode` | `Models/Enums/IncomingPhoneNumberEnumVoiceReceiveMode.cs` |
| `ApiV2010AccountIncomingPhoneNumber` | `Models/ApiV2010AccountIncomingPhoneNumber.cs` |

