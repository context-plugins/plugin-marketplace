<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1Document — operations

Accessor: `client.SyncV1Document` · Source: `Api/SyncV1Document.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDocument

- **Server group**: `Default12`
- **Signature**: `CreateDocument(string serviceSid, string? uniqueName, object? data, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `uniqueName` — nullable, no default → **must pass explicitly**
  - `data` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceDocument` | `Models/SyncV1ServiceDocument.cs` |

### DeleteDocument

- **Server group**: `Default12`
- **Signature**: `DeleteDocument(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchDocument

- **Server group**: `Default12`
- **Signature**: `FetchDocument(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1ServiceDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceDocument` | `Models/SyncV1ServiceDocument.cs` |

### ListDocument

- **Server group**: `Default12`
- **Signature**: `ListDocument(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListDocumentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListDocumentResponse` | `Models/ListDocumentResponse.cs` |

### UpdateDocument

- **Server group**: `Default12`
- **Signature**: `UpdateDocument(string serviceSid, string sid, string? ifMatch, object? data, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
  - `data` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
- **Returns**: `SyncV1ServiceDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1ServiceDocument` | `Models/SyncV1ServiceDocument.cs` |

