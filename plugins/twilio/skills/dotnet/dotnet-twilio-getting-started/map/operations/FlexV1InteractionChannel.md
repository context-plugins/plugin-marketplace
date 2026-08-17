<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionChannel — operations

Accessor: `client.FlexV1InteractionChannel` · Source: `Api/FlexV1InteractionChannel.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchInteractionChannel

- **Server group**: `Default13`
- **Signature**: `FetchInteractionChannel(string interactionSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FlexV1InteractionInteractionChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InteractionInteractionChannel` | `Models/FlexV1InteractionInteractionChannel.cs` |

### ListInteractionChannel

- **Server group**: `Default13`
- **Signature**: `ListInteractionChannel(string interactionSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInteractionChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInteractionChannelResponse` | `Models/ListInteractionChannelResponse.cs` |

### UpdateInteractionChannel

- **Server group**: `Default13`
- **Signature**: `UpdateInteractionChannel(string interactionSid, string sid, InteractionChannelEnumUpdateChannelStatus status, object? routing, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `routing` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InteractionInteractionChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InteractionChannelEnumUpdateChannelStatus` | `Models/Enums/InteractionChannelEnumUpdateChannelStatus.cs` |
| `FlexV1InteractionInteractionChannel` | `Models/FlexV1InteractionInteractionChannel.cs` |

