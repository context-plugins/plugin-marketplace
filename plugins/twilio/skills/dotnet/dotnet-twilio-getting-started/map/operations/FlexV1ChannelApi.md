<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1ChannelApi — operations

Accessor: `client.FlexV1ChannelApi` · Source: `Api/FlexV1ChannelApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateChannel

- **Server group**: `Default13`
- **Signature**: `CreateChannel(string flexFlowSid, string identity, string chatUserFriendlyName, string chatFriendlyName, string? target, string? chatUniqueName, string? preEngagementData, string? taskSid, string? taskAttributes, bool? longLived, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`target` … `longLived`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `FlexV1Channel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Channel` | `Models/FlexV1Channel.cs` |

### DeleteChannel

- **Server group**: `Default13`
- **Signature**: `DeleteChannel(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchChannel

- **Server group**: `Default13`
- **Signature**: `FetchChannel(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FlexV1Channel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Channel` | `Models/FlexV1Channel.cs` |

### ListChannel

- **Server group**: `Default13`
- **Signature**: `ListChannel(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListChannelResponse` | `Models/ListChannelResponse.cs` |

