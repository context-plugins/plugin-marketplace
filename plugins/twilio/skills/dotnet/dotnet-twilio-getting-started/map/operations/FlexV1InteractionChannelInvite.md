<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionChannelInvite — operations

Accessor: `client.FlexV1InteractionChannelInvite` · Source: `Api/FlexV1InteractionChannelInvite.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInteractionChannelInvite

- **Server group**: `Default13`
- **Signature**: `CreateInteractionChannelInvite(string interactionSid, string channelSid, object routing, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FlexV1InteractionInteractionChannelInteractionChannelInvite`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InteractionInteractionChannelInteractionChannelInvite` | `Models/FlexV1InteractionInteractionChannelInteractionChannelInvite.cs` |

### ListInteractionChannelInvite

- **Server group**: `Default13`
- **Signature**: `ListInteractionChannelInvite(string interactionSid, string channelSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInteractionChannelInviteResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInteractionChannelInviteResponse` | `Models/ListInteractionChannelInviteResponse.cs` |

