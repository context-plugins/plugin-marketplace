<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncListPermission — operations

Accessor: `client.SyncV1SyncListPermission` · Source: `Api/SyncV1SyncListPermission.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteSyncListPermission

- **Server group**: `Default12`
- **Signature**: `DeleteSyncListPermission(string serviceSid, string listSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSyncListPermission

- **Server group**: `Default12`
- **Signature**: `FetchSyncListPermission(string serviceSid, string listSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceSyncListSyncListPermission`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncListSyncListPermission` | `Models/SyncV1ServiceSyncListSyncListPermission.cs` |

### ListSyncListPermission

- **Server group**: `Default12`
- **Signature**: `ListSyncListPermission(string serviceSid, string listSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncListPermissionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSyncListPermissionResponse` | `Models/ListSyncListPermissionResponse.cs` |

### UpdateSyncListPermission

- **Server group**: `Default12`
- **Signature**: `UpdateSyncListPermission(string serviceSid, string listSid, string identity, bool read, bool write, bool manage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceSyncListSyncListPermission`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncListSyncListPermission` | `Models/SyncV1ServiceSyncListSyncListPermission.cs` |

