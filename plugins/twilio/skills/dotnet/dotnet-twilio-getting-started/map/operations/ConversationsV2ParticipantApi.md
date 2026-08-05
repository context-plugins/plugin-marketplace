# ConversationsV2ParticipantApi — operations

Accessor: `client.ConversationsV2ParticipantApi` · Source: `Api/ConversationsV2ParticipantApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateParticipantInConversation
- **HTTP**: `POST /v2/Conversations/{ConversationSid}/Participants` (Default2 (conversations))
- **Notes**: Create a Participant.
- **Signature**: `CreateParticipantInConversation(string conversationSid, V2ConversationsParticipantsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Participant`
- **Error**: `SdkException<CreateParticipantInConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchParticipant2
- **HTTP**: `GET /v2/Conversations/{ConversationSid}/Participants/{Sid}` (Default2 (conversations))
- **Notes**: Retrieve a Participant.
- **Signature**: `FetchParticipant2(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Participant`
- **Error**: `SdkException<FetchParticipant2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListParticipantByConversation
- **HTTP**: `GET /v2/Conversations/{ConversationSid}/Participants` (Default2 (conversations))
- **Notes**: Retrieve a list of Participants in a Conversation.
- **Signature**: `ListParticipantByConversation(string conversationSid, string? pageToken, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `pageSize` ← `pageSize`, `pageToken` ← `pageToken`
- **Returns**: `V2ConversationsParticipantsResponse`
- **Error**: `SdkException<ListParticipantByConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateParticipantInConversation
- **HTTP**: `PUT /v2/Conversations/{ConversationSid}/Participants/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing Participant
- **Signature**: `UpdateParticipantInConversation(string conversationSid, string sid, V2ConversationsParticipantsRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Participant`
- **Error**: `SdkException<UpdateParticipantInConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
