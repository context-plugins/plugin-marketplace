<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ServiceApi — operations

Accessor: `client.ConversationsV1ServiceApi` · Source: `Api/ConversationsV1ServiceApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateService3

- **Server group**: `Default7`
- **Signature**: `CreateService3(string friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1Service` | `Models/ConversationsV1Service.cs` |

### DeleteService3

- **Server group**: `Default7`
- **Signature**: `DeleteService3(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchService3

- **Server group**: `Default7`
- **Signature**: `FetchService3(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1Service` | `Models/ConversationsV1Service.cs` |

### ListService3

- **Server group**: `Default7`
- **Signature**: `ListService3(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceResponse2`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceResponse2` | `Models/ListServiceResponse2.cs` |

