# LlmconnectorConversations — operations

Accessor: `client.LlmconnectorConversations` · Source: `Api/LlmconnectorConversations.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteAConversationChatSession
- **HTTP**: `DELETE /llm-connector/api/v1/orgs/{org_id}/chat/{chat_id}` (Default)
- **Notes**: Delete a llm connector conversation and all chat history associated with it
- **Signature**: `DeleteAConversationChatSession(string orgId, string chatId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `JsonElement`
- **Error**: `SdkException<DeleteAConversationChatSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveAllChatHistoryOfASpecificConversationChatSession
- **HTTP**: `GET /llm-connector/api/v1/orgs/{org_id}/chat/{chat_id}/chats` (Default)
- **Notes**: Retrieve all chat history of a specific conversation (chat session), return a list of messages (query and response) along with their details. Sorted by message time in reverse order.
- **Signature**: `RetrieveAllChatHistoryOfASpecificConversationChatSession(string orgId, string chatId, int? offset = 0, int? limit = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `offset` = 0, `limit` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `ChatHistoryResponseSchema`
- **Error**: `SdkException<RetrieveAllChatHistoryOfASpecificConversationChatSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveAllConversationsTheCurrentUserInitiated
- **HTTP**: `GET /llm-connector/api/v1/orgs/{org_id}/chats` (Default)
- **Notes**: Retrieve all conversations of the current user, return a list of chat sessions along with their details. Sorted by latest activity.
- **Signature**: `RetrieveAllConversationsTheCurrentUserInitiated(string orgId, string? searchTitle, int? offset = 0, int? limit = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `searchTitle` — nullable, no default → **must pass explicitly**
  - defaults: `offset` = 0, `limit` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`, `search_title` ← `searchTitle`
- **Returns**: `LlmConnectorApiV1OrgsChatsResponse`
- **Error**: `SdkException<RetrieveAllConversationsTheCurrentUserInitiatedError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiChatRating
- **HTTP**: `POST /llm-connector/api/v1/orgs/{org_id}/chats/{chat_id}/id/{id}/rating` (Default)
- **Signature**: `LlmApiChatRating(Guid orgId, Guid chatId, string id, LlmConnectorApiV1OrgsChatsIdIdRatingRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ChatRatingResponseSchema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiCreateChatSession
- **HTTP**: `POST /llm-connector/api/v1/orgs/{org_id}/chat` (Default)
- **Signature**: `LlmApiCreateChatSession(Guid orgId, ChatSessionCreateSchema body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChatSessionCreateResponseSchema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
