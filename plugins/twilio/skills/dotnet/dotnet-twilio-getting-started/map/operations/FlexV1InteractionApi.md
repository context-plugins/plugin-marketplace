<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionApi — operations

Accessor: `client.FlexV1InteractionApi` · Source: `Api/FlexV1InteractionApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInteraction

- **Server group**: `Default13`
- **Signature**: `CreateInteraction(object channel, object? routing, string? interactionContextSid, string? webhookTtid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `routing` — nullable, no default → **must pass explicitly**
  - `interactionContextSid` — nullable, no default → **must pass explicitly**
  - `webhookTtid` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1Interaction`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Interaction` | `Models/FlexV1Interaction.cs` |

### FetchInteraction2

- **Server group**: `Default13`
- **Signature**: `FetchInteraction2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FlexV1Interaction`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Interaction` | `Models/FlexV1Interaction.cs` |

### UpdateInteraction

- **Server group**: `Default13`
- **Signature**: `UpdateInteraction(string sid, string? webhookTtid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `webhookTtid` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1Interaction`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Interaction` | `Models/FlexV1Interaction.cs` |

