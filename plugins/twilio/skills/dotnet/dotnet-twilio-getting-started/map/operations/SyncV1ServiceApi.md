<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1ServiceApi — operations

Accessor: `client.SyncV1ServiceApi` · Source: `Api/SyncV1ServiceApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateService5

- **Server group**: `Default12`
- **Signature**: `CreateService5(string? friendlyName, string? webhookUrl, bool? reachabilityWebhooksEnabled, bool? aclEnabled, bool? reachabilityDebouncingEnabled, int? reachabilityDebouncingWindow, bool? webhooksFromRestEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`friendlyName` … `webhooksFromRestEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `SyncV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1Service` | `Models/SyncV1Service.cs` |

### DeleteService5

- **Server group**: `Default12`
- **Signature**: `DeleteService5(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchService5

- **Server group**: `Default12`
- **Signature**: `FetchService5(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SyncV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1Service` | `Models/SyncV1Service.cs` |

### ListService5

- **Server group**: `Default12`
- **Signature**: `ListService5(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceResponse4`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceResponse4` | `Models/ListServiceResponse4.cs` |

### UpdateService4

- **Server group**: `Default12`
- **Signature**: `UpdateService4(string sid, string? webhookUrl, string? friendlyName, bool? reachabilityWebhooksEnabled, bool? aclEnabled, bool? reachabilityDebouncingEnabled, int? reachabilityDebouncingWindow, bool? webhooksFromRestEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`webhookUrl` … `webhooksFromRestEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `SyncV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SyncV1Service` | `Models/SyncV1Service.cs` |

