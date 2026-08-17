<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncList — operations

Accessor: `client.SyncV1SyncList` · Source: `Api/SyncV1SyncList.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSyncList

- **Server group**: `Default12`
- **Signature**: `CreateSyncList(string serviceSid, string? uniqueName, int? ttl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `uniqueName` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - `collectionTtl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceSyncList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncList` | `Models/SyncV1ServiceSyncList.cs` |

### DeleteSyncList

- **Server group**: `Default12`
- **Signature**: `DeleteSyncList(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSyncList

- **Server group**: `Default12`
- **Signature**: `FetchSyncList(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceSyncList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncList` | `Models/SyncV1ServiceSyncList.cs` |

### ListSyncList

- **Server group**: `Default12`
- **Signature**: `ListSyncList(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncListResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSyncListResponse` | `Models/ListSyncListResponse.cs` |

### UpdateSyncList

- **Server group**: `Default12`
- **Signature**: `UpdateSyncList(string serviceSid, string sid, int? ttl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
  - `collectionTtl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceSyncList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncList` | `Models/SyncV1ServiceSyncList.cs` |

