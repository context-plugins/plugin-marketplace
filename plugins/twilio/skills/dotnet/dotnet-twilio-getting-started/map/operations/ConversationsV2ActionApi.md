# ConversationsV2ActionApi — operations

Accessor: `client.ConversationsV2ActionApi` · Source: `Api/ConversationsV2ActionApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConversationAction
- **HTTP**: `POST /v2/Conversations/{ConversationId}/Actions` (Default2 (conversations))
- **Notes**: Creates an Action within a Conversation. Currently supports SEND_MESSAGE, which sends a message to recipients via the configured channel. Returns 202 Accepted with the Action in PENDING status. Poll `GET /v2/Conversations/{ConversationId}/Actions/{ActionId}` to check completion.
- **Signature**: `CreateConversationAction(string conversationId, ConversationsV2SendMessageActionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Action`
- **Error**: `SdkException<CreateConversationActionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchConversationAction
- **HTTP**: `GET /v2/Conversations/{ConversationId}/Actions/{ActionId}` (Default2 (conversations))
- **Notes**: Retrieve the current status of an Action.
- **Signature**: `FetchConversationAction(string conversationId, string actionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Action`
- **Error**: `SdkException<FetchConversationActionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
