<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncListItem — operations

Accessor: `client.SyncV1SyncListItem` · Source: `Api/SyncV1SyncListItem.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSyncListItem

- **Server group**: `Default12`
- **Signature**: `CreateSyncListItem(string serviceSid, string listSid, object data, int? ttl, int? itemTtl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
  - `itemTtl` — nullable, no default → **must pass explicitly**
  - `collectionTtl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceSyncListSyncListItem`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncListSyncListItem` | `Models/SyncV1ServiceSyncListSyncListItem.cs` |

### DeleteSyncListItem

- **Server group**: `Default12`
- **Signature**: `DeleteSyncListItem(string serviceSid, string listSid, int index, string? ifMatch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSyncListItem

- **Server group**: `Default12`
- **Signature**: `FetchSyncListItem(string serviceSid, string listSid, int index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceSyncListSyncListItem`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncListSyncListItem` | `Models/SyncV1ServiceSyncListSyncListItem.cs` |

### ListSyncListItem

- **Server group**: `Default12`
- **Signature**: `ListSyncListItem(string serviceSid, string listSid, ChallengeEnumListOrders? order, string? from, SyncListItemEnumQueryFromBoundType? bounds, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`order` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Order` ← `order`, `From` ← `from`, `Bounds` ← `bounds`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncListItemResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ChallengeEnumListOrders` | `Models/Enums/ChallengeEnumListOrders.cs` |
| `SyncListItemEnumQueryFromBoundType` | `Models/Enums/SyncListItemEnumQueryFromBoundType.cs` |
| `ListSyncListItemResponse` | `Models/ListSyncListItemResponse.cs` |

### UpdateSyncListItem

- **Server group**: `Default12`
- **Signature**: `UpdateSyncListItem(string serviceSid, string listSid, int index, string? ifMatch, object? data, int? ttl, int? itemTtl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`ifMatch` … `collectionTtl`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `SyncV1ServiceSyncListSyncListItem`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncListSyncListItem` | `Models/SyncV1ServiceSyncListSyncListItem.cs` |

