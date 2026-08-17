<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2ParticipantApi — operations

Accessor: `client.ConversationsV2ParticipantApi` · Source: `Api/ConversationsV2ParticipantApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateParticipantInConversation

- **Server group**: `Default7`
- **Signature**: `CreateParticipantInConversation(string conversationSid, V2ConversationsParticipantsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2Participant`
- **Error**: `SdkException<CreateParticipantInConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ConversationsParticipantsRequest` | `Models/V2ConversationsParticipantsRequest.cs` |
| `ConversationsV2Participant` | `Models/ConversationsV2Participant.cs` |
| `CreateParticipantInConversationError` | `Errors/CreateParticipantInConversationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### FetchParticipant2

- **Server group**: `Default7`
- **Signature**: `FetchParticipant2(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV2Participant`
- **Error**: `SdkException<FetchParticipant2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationsV2Participant` | `Models/ConversationsV2Participant.cs` |
| `FetchParticipant2Error` | `Errors/FetchParticipant2Error.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### ListParticipantByConversation

- **Server group**: `Default7`
- **Signature**: `ListParticipantByConversation(string conversationSid, string? pageToken, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = `50`
- **Query params (wire ← C#)**: `pageSize` ← `pageSize`, `pageToken` ← `pageToken`
- **Returns**: `V2ConversationsParticipantsResponse`
- **Error**: `SdkException<ListParticipantByConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ConversationsParticipantsResponse` | `Models/V2ConversationsParticipantsResponse.cs` |
| `ListParticipantByConversationError` | `Errors/ListParticipantByConversationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### UpdateParticipantInConversation

- **Server group**: `Default7`
- **Signature**: `UpdateParticipantInConversation(string conversationSid, string sid, V2ConversationsParticipantsRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2Participant`
- **Error**: `SdkException<UpdateParticipantInConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ConversationsParticipantsRequest1` | `Models/V2ConversationsParticipantsRequest1.cs` |
| `ConversationsV2Participant` | `Models/ConversationsV2Participant.cs` |
| `UpdateParticipantInConversationError` | `Errors/UpdateParticipantInConversationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

