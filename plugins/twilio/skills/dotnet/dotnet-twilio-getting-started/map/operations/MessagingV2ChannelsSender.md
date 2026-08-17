<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV2ChannelsSender — operations

Accessor: `client.MessagingV2ChannelsSender` · Source: `Api/MessagingV2ChannelsSender.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateChannelsSender

- **Server group**: `Default1`
- **Signature**: `CreateChannelsSender(MessagingV2ChannelsSenderRequestsCreate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV2ChannelsSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV2ChannelsSenderRequestsCreate` | `Models/MessagingV2ChannelsSenderRequestsCreate.cs` |
| `MessagingV2ChannelsSenderResponse` | `Models/MessagingV2ChannelsSenderResponse.cs` |

### DeleteChannelsSender

- **Server group**: `Default1`
- **Signature**: `DeleteChannelsSender(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchChannelsSender

- **Server group**: `Default1`
- **Signature**: `FetchChannelsSender(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV2ChannelsSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV2ChannelsSenderResponse` | `Models/MessagingV2ChannelsSenderResponse.cs` |

### ListChannelsSender

- **Server group**: `Default1`
- **Signature**: `ListChannelsSender(string channel, int? page, string? pageToken, long? pageSize = 50L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = `50L`
- **Query params (wire ← C#)**: `Channel` ← `channel`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListChannelsSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListChannelsSenderResponse` | `Models/ListChannelsSenderResponse.cs` |

### UpdateChannelsSender

- **Server group**: `Default1`
- **Signature**: `UpdateChannelsSender(string sid, MessagingV2ChannelsSenderRequestsUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `MessagingV2ChannelsSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV2ChannelsSenderRequestsUpdate` | `Models/MessagingV2ChannelsSenderRequestsUpdate.cs` |
| `MessagingV2ChannelsSenderResponse` | `Models/MessagingV2ChannelsSenderResponse.cs` |

