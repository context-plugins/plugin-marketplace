<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncMapItem — operations

Accessor: `client.SyncV1SyncMapItem` · Source: `Api/SyncV1SyncMapItem.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSyncMapItem

- **Server group**: `Default12`
- **Signature**: `CreateSyncMapItem(string serviceSid, string mapSid, string key, object data, int? ttl, int? itemTtl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
  - `itemTtl` — nullable, no default → **must pass explicitly**
  - `collectionTtl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceSyncMapSyncMapItem`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncMapSyncMapItem` | `Models/SyncV1ServiceSyncMapSyncMapItem.cs` |

### DeleteSyncMapItem

- **Server group**: `Default12`
- **Signature**: `DeleteSyncMapItem(string serviceSid, string mapSid, string key, string? ifMatch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSyncMapItem

- **Server group**: `Default12`
- **Signature**: `FetchSyncMapItem(string serviceSid, string mapSid, string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceSyncMapSyncMapItem`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncMapSyncMapItem` | `Models/SyncV1ServiceSyncMapSyncMapItem.cs` |

### ListSyncMapItem

- **Server group**: `Default12`
- **Signature**: `ListSyncMapItem(string serviceSid, string mapSid, ChallengeEnumListOrders? order, string? from, SyncMapItemEnumQueryFromBoundType? bounds, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`order` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Order` ← `order`, `From` ← `from`, `Bounds` ← `bounds`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncMapItemResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ChallengeEnumListOrders` | `Models/Enums/ChallengeEnumListOrders.cs` |
| `SyncMapItemEnumQueryFromBoundType` | `Models/Enums/SyncMapItemEnumQueryFromBoundType.cs` |
| `ListSyncMapItemResponse` | `Models/ListSyncMapItemResponse.cs` |

### UpdateSyncMapItem

- **Server group**: `Default12`
- **Signature**: `UpdateSyncMapItem(string serviceSid, string mapSid, string key, string? ifMatch, object? data, int? ttl, int? itemTtl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`ifMatch` … `collectionTtl`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `SyncV1ServiceSyncMapSyncMapItem`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncMapSyncMapItem` | `Models/SyncV1ServiceSyncMapSyncMapItem.cs` |

