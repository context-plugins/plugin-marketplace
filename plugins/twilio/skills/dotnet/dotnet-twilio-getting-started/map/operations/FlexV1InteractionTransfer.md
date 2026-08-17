<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionTransfer — operations

Accessor: `client.FlexV1InteractionTransfer` · Source: `Api/FlexV1InteractionTransfer.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInteractionTransfer

- **Server group**: `Default13`
- **Signature**: `CreateInteractionTransfer(string interactionSid, string channelSid, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InteractionInteractionChannelInteractionTransfer`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `Models/FlexV1InteractionInteractionChannelInteractionTransfer.cs` |

### FetchInteractionTransfer

- **Server group**: `Default13`
- **Signature**: `FetchInteractionTransfer(string interactionSid, string channelSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FlexV1InteractionInteractionChannelInteractionTransfer`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `Models/FlexV1InteractionInteractionChannelInteractionTransfer.cs` |

### UpdateInteractionTransfer

- **Server group**: `Default13`
- **Signature**: `UpdateInteractionTransfer(string interactionSid, string channelSid, string sid, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InteractionInteractionChannelInteractionTransfer`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `Models/FlexV1InteractionInteractionChannelInteractionTransfer.cs` |

