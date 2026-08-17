<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncMap — operations

Accessor: `client.SyncV1SyncMap` · Source: `Api/SyncV1SyncMap.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSyncMap

- **Server group**: `Default12`
- **Signature**: `CreateSyncMap(string serviceSid, string? uniqueName, int? ttl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `uniqueName` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - `collectionTtl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceSyncMap`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncMap` | `Models/SyncV1ServiceSyncMap.cs` |

### DeleteSyncMap

- **Server group**: `Default12`
- **Signature**: `DeleteSyncMap(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSyncMap

- **Server group**: `Default12`
- **Signature**: `FetchSyncMap(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceSyncMap`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncMap` | `Models/SyncV1ServiceSyncMap.cs` |

### ListSyncMap

- **Server group**: `Default12`
- **Signature**: `ListSyncMap(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncMapResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSyncMapResponse` | `Models/ListSyncMapResponse.cs` |

### UpdateSyncMap

- **Server group**: `Default12`
- **Signature**: `UpdateSyncMap(string serviceSid, string sid, int? ttl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
  - `collectionTtl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceSyncMap`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncMap` | `Models/SyncV1ServiceSyncMap.cs` |

