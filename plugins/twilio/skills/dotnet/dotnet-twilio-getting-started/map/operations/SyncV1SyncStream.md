<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncStream — operations

Accessor: `client.SyncV1SyncStream` · Source: `Api/SyncV1SyncStream.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSyncStream

- **Server group**: `Default12`
- **Signature**: `CreateSyncStream(string serviceSid, string? uniqueName, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `uniqueName` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceSyncStream`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncStream` | `Models/SyncV1ServiceSyncStream.cs` |

### DeleteSyncStream

- **Server group**: `Default12`
- **Signature**: `DeleteSyncStream(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSyncStream

- **Server group**: `Default12`
- **Signature**: `FetchSyncStream(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceSyncStream`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncStream` | `Models/SyncV1ServiceSyncStream.cs` |

### ListSyncStream

- **Server group**: `Default12`
- **Signature**: `ListSyncStream(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncStreamResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSyncStreamResponse` | `Models/ListSyncStreamResponse.cs` |

### UpdateSyncStream

- **Server group**: `Default12`
- **Signature**: `UpdateSyncStream(string serviceSid, string sid, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceSyncStream`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncStream` | `Models/SyncV1ServiceSyncStream.cs` |

