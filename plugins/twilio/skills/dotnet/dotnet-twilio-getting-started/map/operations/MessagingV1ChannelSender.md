<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1ChannelSender — operations

Accessor: `client.MessagingV1ChannelSender` · Source: `Api/MessagingV1ChannelSender.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateChannelSender

- **Server group**: `Default1`
- **Signature**: `CreateChannelSender(string messagingServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1ServiceChannelSender`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceChannelSender` | `Models/MessagingV1ServiceChannelSender.cs` |

### DeleteChannelSender

- **Server group**: `Default1`
- **Signature**: `DeleteChannelSender(string messagingServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchChannelSender

- **Server group**: `Default1`
- **Signature**: `FetchChannelSender(string messagingServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1ServiceChannelSender`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceChannelSender` | `Models/MessagingV1ServiceChannelSender.cs` |

### ListChannelSender

- **Server group**: `Default1`
- **Signature**: `ListChannelSender(string messagingServiceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListChannelSenderResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListChannelSenderResponse` | `Models/ListChannelSenderResponse.cs` |

