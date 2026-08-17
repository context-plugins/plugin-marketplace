<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ConversationWithParticipantsApi — operations

Accessor: `client.ConversationsV1ConversationWithParticipantsApi` · Source: `Api/ConversationsV1ConversationWithParticipantsApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConversationWithParticipants

- **Server group**: `Default7`
- **Signature**: `CreateConversationWithParticipants(Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? messagingServiceSid, string? attributes, ConversationWithParticipantsEnumState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, IReadOnlyList<string>? participant, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`xTwilioWebhookEnabled` … `participant`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConversationWithParticipants`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationWithParticipantsEnumState` | `Models/Enums/ConversationWithParticipantsEnumState.cs` |
| `ConversationsV1ConversationWithParticipants` | `Models/ConversationsV1ConversationWithParticipants.cs` |

### CreateServiceConversationWithParticipants

- **Server group**: `Default7`
- **Signature**: `CreateServiceConversationWithParticipants(string chatServiceSid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? uniqueName, DateTimeOffset? dateCreated, DateTimeOffset? dateUpdated, string? messagingServiceSid, string? attributes, ServiceConversationWithParticipantsEnumState? state, string? timersInactive, string? timersClosed, string? bindingsEmailAddress, string? bindingsEmailName, IReadOnlyList<string>? participant, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`xTwilioWebhookEnabled` … `participant`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConversationWithParticipants`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ServiceConversationWithParticipantsEnumState` | `Models/Enums/ServiceConversationWithParticipantsEnumState.cs` |
| `ConversationsV1ServiceServiceConversationWithParticipants` | `Models/ConversationsV1ServiceServiceConversationWithParticipants.cs` |

