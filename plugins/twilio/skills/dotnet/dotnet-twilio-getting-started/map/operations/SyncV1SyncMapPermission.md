<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncMapPermission — operations

Accessor: `client.SyncV1SyncMapPermission` · Source: `Api/SyncV1SyncMapPermission.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteSyncMapPermission

- **Server group**: `Default12`
- **Signature**: `DeleteSyncMapPermission(string serviceSid, string mapSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSyncMapPermission

- **Server group**: `Default12`
- **Signature**: `FetchSyncMapPermission(string serviceSid, string mapSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceSyncMapSyncMapPermission`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncMapSyncMapPermission` | `Models/SyncV1ServiceSyncMapSyncMapPermission.cs` |

### ListSyncMapPermission

- **Server group**: `Default12`
- **Signature**: `ListSyncMapPermission(string serviceSid, string mapSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncMapPermissionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSyncMapPermissionResponse` | `Models/ListSyncMapPermissionResponse.cs` |

### UpdateSyncMapPermission

- **Server group**: `Default12`
- **Signature**: `UpdateSyncMapPermission(string serviceSid, string mapSid, string identity, bool read, bool write, bool manage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceSyncMapSyncMapPermission`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceSyncMapSyncMapPermission` | `Models/SyncV1ServiceSyncMapSyncMapPermission.cs` |

