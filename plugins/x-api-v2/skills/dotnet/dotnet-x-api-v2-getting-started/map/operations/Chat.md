# Chat — operations

Accessor: `client.Chat` · Source: `Api/Chat.cs` · 16 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddChatGroupMembers
- **HTTP**: `POST /2/chat/conversations/{id}/members` (Default (api))
- **Notes**: Adds one or more members to an existing encrypted Chat group conversation, rotating the conversation key.
- **Signature**: `AddChatGroupMembers(string id, AddChatGroupMembersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AddChatGroupMembersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AddConversationKeys
- **HTTP**: `POST /2/chat/conversations/{id}/keys` (Default (api))
- **Notes**: Adds (initializes or rotates) the encryption keys for a Chat conversation. Call this before sending messages in a new 1:1 conversation, and again with a newer key version to rotate the conversation key. For 1:1 conversations, provide the recipient's user ID as the conversation id; the server constructs the canonical conversation ID from the authenticated user and recipient. The request body must contain the conversation key version and participant keys (the conversation key encrypted for each participant using their public key).
- **Signature**: `AddConversationKeys(string id, AddConversationKeysRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AddConversationKeysResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AddUserPublicKey
- **HTTP**: `POST /2/users/{id}/public_keys` (Default (api))
- **Notes**: Registers a user's public key for X Chat encryption.
- **Signature**: `AddUserPublicKey(string id, AddUserPublicKeyRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AddUserPublicKeyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatMediaDownload
- **HTTP**: `GET /2/chat/media/{id}/{media_hash_key}` (Default (api))
- **Notes**: Downloads encrypted media bytes from an XChat conversation. The response body contains raw binary bytes.
- **Signature**: `ChatMediaDownload(string id, string mediaHashKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatMediaUploadAppend
- **HTTP**: `POST /2/chat/media/upload/{id}/append` (Default (api))
- **Notes**: Appends media data to an XChat upload session.
- **Signature**: `ChatMediaUploadAppend(string id, string conversationId, Media11 media, string mediaHashKey, int segmentIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChatMediaUploadAppendResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatMediaUploadFinalize
- **HTTP**: `POST /2/chat/media/upload/{id}/finalize` (Default (api))
- **Notes**: Finalizes an XChat media upload session.
- **Signature**: `ChatMediaUploadFinalize(string id, ChatMediaUploadFinalizeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChatMediaUploadFinalizeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatMediaUploadInitialize
- **HTTP**: `POST /2/chat/media/upload/initialize` (Default (api))
- **Notes**: Initializes an XChat media upload session.
- **Signature**: `ChatMediaUploadInitialize(ChatMediaUploadInitializeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChatMediaUploadInitializeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateChatConversation
- **HTTP**: `POST /2/chat/conversations/group` (Default (api))
- **Notes**: Creates a new encrypted Chat group conversation on behalf of the authenticated user.
- **Signature**: `CreateChatConversation(CreateChatConversationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateChatConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteChatMessages
- **HTTP**: `POST /2/chat/conversations/{id}/messages/delete` (Default (api))
- **Notes**: Deletes one or more messages from a Chat conversation. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient. Delete for all removes a message you sent (or, in groups you administer, any message) for every participant; delete for self removes any message only from your own view.
- **Signature**: `DeleteChatMessages(string id, DeleteChatMessagesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteChatMessagesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetChatConversation
- **HTTP**: `GET /2/chat/conversations/{id}` (Default (api))
- **Notes**: Returns metadata for a Chat conversation including type, muted status, and group details. Use chat_conversation.fields to select which fields are returned. Use expansions to hydrate member, admin, or participant user objects. Use user.fields to control which profile fields are returned for expanded users.
- **Signature**: `GetChatConversation(string id, IReadOnlyList<ChatConversationField>? chatConversationFields, IReadOnlyList<Expansions1>? expansions, IReadOnlyList<UserField>? userFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `chatConversationFields` — nullable, no default → **must pass explicitly**
  - `expansions` — nullable, no default → **must pass explicitly**
  - `userFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `chat_conversation.fields` ← `chatConversationFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`
- **Returns**: `GetChatConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetChatConversationEvents
- **HTTP**: `GET /2/chat/conversations/{id}/events` (Default (api))
- **Notes**: Retrieves messages and key change events for a specific Chat conversation with pagination support. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient.
- **Signature**: `GetChatConversationEvents(string id, string? paginationToken, IReadOnlyList<ChatMessageEventField>? chatMessageEventFields, int? maxResults = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `paginationToken` — nullable, no default → **must pass explicitly**
  - `chatMessageEventFields` — nullable, no default → **must pass explicitly**
  - defaults: `maxResults` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `chat_message_event.fields` ← `chatMessageEventFields`
- **Returns**: `GetChatConversationEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetChatConversations
- **HTTP**: `GET /2/chat/conversations` (Default (api))
- **Notes**: Retrieves a list of Chat conversations for the authenticated user's inbox.
- **Signature**: `GetChatConversations(string? paginationToken, IReadOnlyList<ChatConversationField>? chatConversationFields, IReadOnlyList<Expansions1>? expansions, IReadOnlyList<UserField>? userFields, int? maxResults = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `userFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `chat_conversation.fields` ← `chatConversationFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`
- **Returns**: `GetChatConversationsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InitializeChatGroup
- **HTTP**: `POST /2/chat/conversations/group/initialize` (Default (api))
- **Notes**: Initializes a new Chat group conversation and returns a unique conversation ID. Use the returned conversation_id in a subsequent POST /chat/conversations/group call to fully create and configure the group.
- **Signature**: `InitializeChatGroup(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InitializeChatGroupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MarkChatConversationRead
- **HTTP**: `POST /2/chat/conversations/{id}/read` (Default (api))
- **Notes**: Marks a specific Chat conversation as read on behalf of the authenticated user. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient.
- **Signature**: `MarkChatConversationRead(string id, MarkChatConversationReadRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MarkChatConversationReadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SendChatMessage
- **HTTP**: `POST /2/chat/conversations/{id}/messages` (Default (api))
- **Notes**: Sends an encrypted message to a specific Chat conversation. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient.
- **Signature**: `SendChatMessage(string id, SendChatMessageRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SendChatMessageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SendChatTypingIndicator
- **HTTP**: `POST /2/chat/conversations/{id}/typing` (Default (api))
- **Notes**: Sends a typing indicator to a specific Chat conversation on behalf of the authenticated user. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient.
- **Signature**: `SendChatTypingIndicator(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SendChatTypingIndicatorResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
