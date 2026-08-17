<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1Session — operations

Accessor: `client.ProxyV1Session` · Source: `Api/ProxyV1Session.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSession

- **Server group**: `Default10`
- **Signature**: `CreateSession(string serviceSid, string? uniqueName, DateTimeOffset? dateExpiry, int? ttl, SessionEnumMode? mode, SessionEnumStatus? status, IReadOnlyList<object>? participants, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`uniqueName` … `participants`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ProxyV1ServiceSession`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SessionEnumMode` | `Models/Enums/SessionEnumMode.cs` |
| `SessionEnumStatus` | `Models/Enums/SessionEnumStatus.cs` |
| `ProxyV1ServiceSession` | `Models/ProxyV1ServiceSession.cs` |

### DeleteSession

- **Server group**: `Default10`
- **Signature**: `DeleteSession(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSession

- **Server group**: `Default10`
- **Signature**: `FetchSession(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ProxyV1ServiceSession`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1ServiceSession` | `Models/ProxyV1ServiceSession.cs` |

### ListSession

- **Server group**: `Default10`
- **Signature**: `ListSession(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSessionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSessionResponse` | `Models/ListSessionResponse.cs` |

### UpdateSession

- **Server group**: `Default10`
- **Signature**: `UpdateSession(string serviceSid, string sid, DateTimeOffset? dateExpiry, int? ttl, SessionEnumStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `dateExpiry` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
- **Returns**: `ProxyV1ServiceSession`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SessionEnumStatus` | `Models/Enums/SessionEnumStatus.cs` |
| `ProxyV1ServiceSession` | `Models/ProxyV1ServiceSession.cs` |

