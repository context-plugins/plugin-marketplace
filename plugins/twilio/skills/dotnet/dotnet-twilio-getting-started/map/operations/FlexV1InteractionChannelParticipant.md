<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionChannelParticipant — operations

Accessor: `client.FlexV1InteractionChannelParticipant` · Source: `Api/FlexV1InteractionChannelParticipant.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInteractionChannelParticipant

- **Server group**: `Default13`
- **Signature**: `CreateInteractionChannelParticipant(string interactionSid, string channelSid, InteractionChannelParticipantEnumType type, object mediaProperties, object? routingProperties, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `routingProperties` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InteractionInteractionChannelInteractionChannelParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InteractionChannelParticipantEnumType` | `Models/Enums/InteractionChannelParticipantEnumType.cs` |
| `FlexV1InteractionInteractionChannelInteractionChannelParticipant` | `Models/FlexV1InteractionInteractionChannelInteractionChannelParticipant.cs` |

### ListInteractionChannelParticipant

- **Server group**: `Default13`
- **Signature**: `ListInteractionChannelParticipant(string interactionSid, string channelSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInteractionChannelParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInteractionChannelParticipantResponse` | `Models/ListInteractionChannelParticipantResponse.cs` |

### UpdateInteractionChannelParticipant

- **Server group**: `Default13`
- **Signature**: `UpdateInteractionChannelParticipant(string interactionSid, string channelSid, string sid, InteractionChannelParticipantEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FlexV1InteractionInteractionChannelInteractionChannelParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InteractionChannelParticipantEnumStatus` | `Models/Enums/InteractionChannelParticipantEnumStatus.cs` |
| `FlexV1InteractionInteractionChannelInteractionChannelParticipant` | `Models/FlexV1InteractionInteractionChannelInteractionChannelParticipant.cs` |

