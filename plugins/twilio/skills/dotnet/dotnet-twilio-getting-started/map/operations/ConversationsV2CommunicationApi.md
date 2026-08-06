# ConversationsV2CommunicationApi — operations

Accessor: `client.ConversationsV2CommunicationApi` · Source: `Api/ConversationsV2CommunicationApi.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCommunicationInConversation
- **HTTP**: `POST /v2/Conversations/{ConversationSid}/Communications` (Default7 (conversations))
- **Notes**: Create a Communication.
- **Signature**: `CreateCommunicationInConversation(string conversationSid, V2ConversationsCommunicationsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Communication`
- **Error**: `SdkException<CreateCommunicationInConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchCommunication
- **HTTP**: `GET /v2/Conversations/{ConversationSid}/Communications/{Sid}` (Default7 (conversations))
- **Notes**: Retrieve a Communication.
- **Signature**: `FetchCommunication(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Communication`
- **Error**: `SdkException<FetchCommunicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListCommunicationByConversation
- **HTTP**: `GET /v2/Conversations/{ConversationSid}/Communications` (Default7 (conversations))
- **Notes**: Retrieve a list of Communications in a Conversation.
- **Signature**: `ListCommunicationByConversation(string conversationSid, string? channelId, string? pageToken, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `channelId` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `channelId` ← `channelId`, `pageSize` ← `pageSize`, `pageToken` ← `pageToken`
- **Returns**: `V2ConversationsCommunicationsResponse`
- **Error**: `SdkException<ListCommunicationByConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
