<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkerChannel — operations

Accessor: `client.TaskrouterV1WorkerChannel` · Source: `Api/TaskrouterV1WorkerChannel.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkerChannel

- **Server group**: `Default8`
- **Signature**: `FetchWorkerChannel(string workspaceSid, string workerSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `Models/TaskrouterV1WorkspaceWorkerWorkerChannel.cs` |

### ListWorkerChannel

- **Server group**: `Default8`
- **Signature**: `ListWorkerChannel(string workspaceSid, string workerSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkerChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListWorkerChannelResponse` | `Models/ListWorkerChannelResponse.cs` |

### UpdateWorkerChannel

- **Server group**: `Default8`
- **Signature**: `UpdateWorkerChannel(string workspaceSid, string workerSid, string sid, int? capacity, bool? available, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `capacity` — nullable, no default → **must pass explicitly**
  - `available` — nullable, no default → **must pass explicitly**
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `Models/TaskrouterV1WorkspaceWorkerWorkerChannel.cs` |

