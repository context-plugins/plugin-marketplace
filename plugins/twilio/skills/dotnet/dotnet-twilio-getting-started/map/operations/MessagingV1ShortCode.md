<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1ShortCode — operations

Accessor: `client.MessagingV1ShortCode` · Source: `Api/MessagingV1ShortCode.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateShortCode

- **Server group**: `Default1`
- **Signature**: `CreateShortCode(string serviceSid, string shortCodeSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1ServiceShortCode`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceShortCode` | `Models/MessagingV1ServiceShortCode.cs` |

### DeleteShortCode

- **Server group**: `Default1`
- **Signature**: `DeleteShortCode(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchShortCode2

- **Server group**: `Default1`
- **Signature**: `FetchShortCode2(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1ServiceShortCode`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceShortCode` | `Models/MessagingV1ServiceShortCode.cs` |

### ListShortCode2

- **Server group**: `Default1`
- **Signature**: `ListShortCode2(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListShortCodeResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListShortCodeResponse1` | `Models/ListShortCodeResponse1.cs` |

