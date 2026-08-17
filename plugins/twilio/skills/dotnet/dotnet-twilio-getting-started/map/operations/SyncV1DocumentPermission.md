<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1DocumentPermission — operations

Accessor: `client.SyncV1DocumentPermission` · Source: `Api/SyncV1DocumentPermission.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteDocumentPermission

- **Server group**: `Default12`
- **Signature**: `DeleteDocumentPermission(string serviceSid, string documentSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchDocumentPermission

- **Server group**: `Default12`
- **Signature**: `FetchDocumentPermission(string serviceSid, string documentSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceDocumentDocumentPermission`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceDocumentDocumentPermission` | `Models/SyncV1ServiceDocumentDocumentPermission.cs` |

### ListDocumentPermission

- **Server group**: `Default12`
- **Signature**: `ListDocumentPermission(string serviceSid, string documentSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListDocumentPermissionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListDocumentPermissionResponse` | `Models/ListDocumentPermissionResponse.cs` |

### UpdateDocumentPermission

- **Server group**: `Default12`
- **Signature**: `UpdateDocumentPermission(string serviceSid, string documentSid, string identity, bool read, bool write, bool manage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceDocumentDocumentPermission`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceDocumentDocumentPermission` | `Models/SyncV1ServiceDocumentDocumentPermission.cs` |

