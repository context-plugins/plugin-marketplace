<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1WebChannelApi — operations

Accessor: `client.FlexV1WebChannelApi` · Source: `Api/FlexV1WebChannelApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebChannel

- **Server group**: `Default13`
- **Signature**: `CreateWebChannel(string flexFlowSid, string identity, string customerFriendlyName, string chatFriendlyName, string? chatUniqueName, string? preEngagementData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `chatUniqueName` — nullable, no default → **must pass explicitly**
  - `preEngagementData` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1WebChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1WebChannel` | `Models/FlexV1WebChannel.cs` |

### DeleteWebChannel

- **Server group**: `Default13`
- **Signature**: `DeleteWebChannel(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchWebChannel

- **Server group**: `Default13`
- **Signature**: `FetchWebChannel(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FlexV1WebChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1WebChannel` | `Models/FlexV1WebChannel.cs` |

### ListWebChannel

- **Server group**: `Default13`
- **Signature**: `ListWebChannel(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWebChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListWebChannelResponse` | `Models/ListWebChannelResponse.cs` |

### UpdateWebChannel

- **Server group**: `Default13`
- **Signature**: `UpdateWebChannel(string sid, WebChannelEnumChatStatus? chatStatus, string? postEngagementData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `chatStatus` — nullable, no default → **must pass explicitly**
  - `postEngagementData` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1WebChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `WebChannelEnumChatStatus` | `Models/Enums/WebChannelEnumChatStatus.cs` |
| `FlexV1WebChannel` | `Models/FlexV1WebChannel.cs` |

