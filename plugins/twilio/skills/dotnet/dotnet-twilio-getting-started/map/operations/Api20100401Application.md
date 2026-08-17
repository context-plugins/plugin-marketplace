<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Application — operations

Accessor: `client.Api20100401Application` · Source: `Api/Api20100401Application.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateApplication

- **Signature**: `CreateApplication(string accountSid, string? apiVersion, string? voiceUrl, VoiceMethod7? voiceMethod, string? voiceFallbackUrl, VoiceFallbackMethod7? voiceFallbackMethod, string? statusCallback, StatusCallbackMethod6? statusCallbackMethod, bool? voiceCallerIdLookup, string? smsUrl, SmsMethod7? smsMethod, string? smsFallbackUrl, SmsFallbackMethod7? smsFallbackMethod, string? smsStatusCallback, string? messageStatusCallback, string? friendlyName, bool? publicApplicationConnectEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`apiVersion` … `publicApplicationConnectEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountApplication`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VoiceMethod7` | `Models/Enums/VoiceMethod7.cs` |
| `VoiceFallbackMethod7` | `Models/Enums/VoiceFallbackMethod7.cs` |
| `StatusCallbackMethod6` | `Models/Enums/StatusCallbackMethod6.cs` |
| `SmsMethod7` | `Models/Enums/SmsMethod7.cs` |
| `SmsFallbackMethod7` | `Models/Enums/SmsFallbackMethod7.cs` |
| `ApiV2010AccountApplication` | `Models/ApiV2010AccountApplication.cs` |

### DeleteApplication

- **Signature**: `DeleteApplication(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchApplication

- **Signature**: `FetchApplication(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountApplication`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountApplication` | `Models/ApiV2010AccountApplication.cs` |

### ListApplication

- **Signature**: `ListApplication(string accountSid, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListApplicationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListApplicationResponse` | `Models/ListApplicationResponse.cs` |

### UpdateApplication

- **Signature**: `UpdateApplication(string accountSid, string sid, string? friendlyName, string? apiVersion, string? voiceUrl, VoiceMethod7? voiceMethod, string? voiceFallbackUrl, VoiceFallbackMethod7? voiceFallbackMethod, string? statusCallback, StatusCallbackMethod6? statusCallbackMethod, bool? voiceCallerIdLookup, string? smsUrl, SmsMethod7? smsMethod, string? smsFallbackUrl, SmsFallbackMethod7? smsFallbackMethod, string? smsStatusCallback, string? messageStatusCallback, bool? publicApplicationConnectEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`friendlyName` … `publicApplicationConnectEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountApplication`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VoiceMethod7` | `Models/Enums/VoiceMethod7.cs` |
| `VoiceFallbackMethod7` | `Models/Enums/VoiceFallbackMethod7.cs` |
| `StatusCallbackMethod6` | `Models/Enums/StatusCallbackMethod6.cs` |
| `SmsMethod7` | `Models/Enums/SmsMethod7.cs` |
| `SmsFallbackMethod7` | `Models/Enums/SmsFallbackMethod7.cs` |
| `ApiV2010AccountApplication` | `Models/ApiV2010AccountApplication.cs` |

