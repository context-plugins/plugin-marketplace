# ConversationsV2ConversationApi — operations

Accessor: `client.ConversationsV2ConversationApi` · Source: `Api/ConversationsV2ConversationApi.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateConversationWithConfig
- **HTTP**: `POST /v2/Conversations` (Default2 (conversations))
- **Notes**: Create a new conversation
- **Signature**: `CreateConversationWithConfig(V2ConversationsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Conversation`
- **Error**: `SdkException<CreateConversationWithConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteConversationAsync
- **HTTP**: `DELETE /v2/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Asynchronously delete a conversation and all associated data. Returns 202 Accepted with an Operation-Id for status tracking via GET /v2/ControlPlane/Operations/{operationId}.
- **Signature**: `DeleteConversationAsync(string sid, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `SdkException<DeleteConversationAsyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchConversation2
- **HTTP**: `GET /v2/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Retrieve a Conversation.
- **Signature**: `FetchConversation2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Conversation`
- **Error**: `SdkException<FetchConversation2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListConversationByAccount
- **HTTP**: `GET /v2/Conversations` (Default2 (conversations))
- **Notes**: Retrieve a list of Conversations.
- **Signature**: `ListConversationByAccount(IReadOnlyList<Status3>? status, string? channelId, string? pageToken, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `channelId` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `channelId` ← `channelId`, `pageSize` ← `pageSize`, `pageToken` ← `pageToken`
- **Returns**: `V2ConversationsResponse`
- **Error**: `SdkException<ListConversationByAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchConversationById
- **HTTP**: `PATCH /v2/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Partially update the details of an existing Conversation.
- **Signature**: `PatchConversationById(string sid, V2ConversationsRequest2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Conversation`
- **Error**: `SdkException<PatchConversationByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateConversationById
- **HTTP**: `PUT /v2/Conversations/{Sid}` (Default2 (conversations))
- **Notes**: Update an existing conversation
- **Signature**: `UpdateConversationById(string sid, V2ConversationsRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV2Conversation`
- **Error**: `SdkException<UpdateConversationByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
