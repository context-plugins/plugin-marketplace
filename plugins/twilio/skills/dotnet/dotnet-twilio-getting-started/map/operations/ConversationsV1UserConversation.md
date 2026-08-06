# ConversationsV1UserConversation — operations

Accessor: `client.ConversationsV1UserConversation` · Source: `Api/ConversationsV1UserConversation.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteServiceUserConversation
- **HTTP**: `DELETE /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}` (Default7 (conversations))
- **Notes**: Delete a specific User Conversation.
- **Signature**: `DeleteServiceUserConversation(string chatServiceSid, string userSid, string conversationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUserConversation
- **HTTP**: `DELETE /v1/Users/{UserSid}/Conversations/{ConversationSid}` (Default7 (conversations))
- **Notes**: Delete a specific User Conversation.
- **Signature**: `DeleteUserConversation(string userSid, string conversationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceUserConversation
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}` (Default7 (conversations))
- **Notes**: Fetch a specific User Conversation.
- **Signature**: `FetchServiceUserConversation(string chatServiceSid, string userSid, string conversationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceUserServiceUserConversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchUserConversation
- **HTTP**: `GET /v1/Users/{UserSid}/Conversations/{ConversationSid}` (Default7 (conversations))
- **Notes**: Fetch a specific User Conversation.
- **Signature**: `FetchUserConversation(string userSid, string conversationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1UserUserConversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListServiceUserConversation
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations` (Default7 (conversations))
- **Notes**: Retrieve a list of all User Conversations for the User.
- **Signature**: `ListServiceUserConversation(string chatServiceSid, string userSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceUserConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListUserConversation
- **HTTP**: `GET /v1/Users/{UserSid}/Conversations` (Default7 (conversations))
- **Notes**: Retrieve a list of all User Conversations for the User.
- **Signature**: `ListUserConversation(string userSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUserConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateServiceUserConversation
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}` (Default7 (conversations))
- **Notes**: Update a specific User Conversation.
- **Signature**: `UpdateServiceUserConversation(string chatServiceSid, string userSid, string conversationSid, ServiceUserConversationEnumNotificationLevel? notificationLevel, DateTimeOffset? lastReadTimestamp, int? lastReadMessageIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `notificationLevel` — nullable, no default → **must pass explicitly**
  - `lastReadTimestamp` — nullable, no default → **must pass explicitly**
  - `lastReadMessageIndex` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `NotificationLevel` ← `notificationLevel`, `LastReadTimestamp` ← `lastReadTimestamp`, `LastReadMessageIndex` ← `lastReadMessageIndex`
- **Returns**: `ConversationsV1ServiceServiceUserServiceUserConversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateUserConversation
- **HTTP**: `POST /v1/Users/{UserSid}/Conversations/{ConversationSid}` (Default7 (conversations))
- **Notes**: Update a specific User Conversation.
- **Signature**: `UpdateUserConversation(string userSid, string conversationSid, UserConversationEnumNotificationLevel? notificationLevel, DateTimeOffset? lastReadTimestamp, int? lastReadMessageIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `notificationLevel` — nullable, no default → **must pass explicitly**
  - `lastReadTimestamp` — nullable, no default → **must pass explicitly**
  - `lastReadMessageIndex` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `NotificationLevel` ← `notificationLevel`, `LastReadTimestamp` ← `lastReadTimestamp`, `LastReadMessageIndex` ← `lastReadMessageIndex`
- **Returns**: `ConversationsV1UserUserConversation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
