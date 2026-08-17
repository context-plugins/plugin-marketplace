<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401ShortCode — operations

Accessor: `client.Api20100401ShortCode` · Source: `Api/Api20100401ShortCode.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchShortCode

- **Signature**: `FetchShortCode(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountShortCode`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountShortCode` | `Models/ApiV2010AccountShortCode.cs` |

### ListShortCode

- **Signature**: `ListShortCode(string accountSid, string? friendlyName, string? shortCode, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `ShortCode` ← `shortCode`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListShortCodeResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListShortCodeResponse` | `Models/ListShortCodeResponse.cs` |

### UpdateShortCode

- **Signature**: `UpdateShortCode(string accountSid, string sid, string? friendlyName, string? apiVersion, string? smsUrl, SmsMethod14? smsMethod, string? smsFallbackUrl, SmsFallbackMethod14? smsFallbackMethod, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`friendlyName` … `smsFallbackMethod`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountShortCode`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SmsMethod14` | `Models/Enums/SmsMethod14.cs` |
| `SmsFallbackMethod14` | `Models/Enums/SmsFallbackMethod14.cs` |
| `ApiV2010AccountShortCode` | `Models/ApiV2010AccountShortCode.cs` |

