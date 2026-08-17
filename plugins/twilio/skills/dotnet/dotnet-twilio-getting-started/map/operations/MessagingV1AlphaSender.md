<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1AlphaSender — operations

Accessor: `client.MessagingV1AlphaSender` · Source: `Api/MessagingV1AlphaSender.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAlphaSender

- **Server group**: `Default1`
- **Signature**: `CreateAlphaSender(string serviceSid, string alphaSender, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1ServiceAlphaSender`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceAlphaSender` | `Models/MessagingV1ServiceAlphaSender.cs` |

### DeleteAlphaSender

- **Server group**: `Default1`
- **Signature**: `DeleteAlphaSender(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchAlphaSender

- **Server group**: `Default1`
- **Signature**: `FetchAlphaSender(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1ServiceAlphaSender`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceAlphaSender` | `Models/MessagingV1ServiceAlphaSender.cs` |

### ListAlphaSender

- **Server group**: `Default1`
- **Signature**: `ListAlphaSender(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAlphaSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListAlphaSenderResponse` | `Models/ListAlphaSenderResponse.cs` |

