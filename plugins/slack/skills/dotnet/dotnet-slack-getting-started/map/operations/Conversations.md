# Conversations — operations

Accessor: `client.Conversations` · Source: `Api/Conversations.cs` · 18 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ConversationsArchive
- **HTTP**: `POST /conversations.archive` (Default (slack))
- **Notes**: Archives a conversation.
- **Signature**: `ConversationsArchive(ContentType contentType, string? token, string? channel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`
- **Returns**: `ConversationsArchivesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsClose
- **HTTP**: `POST /conversations.close` (Default (slack))
- **Notes**: Closes a direct message or multi-person direct message.
- **Signature**: `ConversationsClose(ContentType contentType, string? token, string? channel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`
- **Returns**: `ConversationsClosesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsCreate
- **HTTP**: `POST /conversations.create` (Default (slack))
- **Notes**: Initiates a public or private channel-based conversation
- **Signature**: `ConversationsCreate(ContentType contentType, string? token, string? name, bool? isPrivate, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `name` — nullable, no default → **must pass explicitly**
  - `isPrivate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `is_private` ← `isPrivate`
- **Returns**: `ConversationsCreatesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsHistory
- **HTTP**: `GET /conversations.history` (Default (slack))
- **Notes**: Fetches a conversation's history of messages and events.
- **Signature**: `ConversationsHistory(string? token, string? channel, double? latest, double? oldest, bool? inclusive, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`token` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel` ← `channel`, `latest` ← `latest`, `oldest` ← `oldest`, `inclusive` ← `inclusive`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ConversationsHistorysuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsInfo
- **HTTP**: `GET /conversations.info` (Default (slack))
- **Notes**: Retrieve information about a conversation.
- **Signature**: `ConversationsInfo(string? token, string? channel, bool? includeLocale, bool? includeNumMembers, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`token` … `includeNumMembers`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel` ← `channel`, `include_locale` ← `includeLocale`, `include_num_members` ← `includeNumMembers`
- **Returns**: `ConversationsInfosuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsInvite
- **HTTP**: `POST /conversations.invite` (Default (slack))
- **Notes**: Invites users to a channel.
- **Signature**: `ConversationsInvite(ContentType contentType, string? token, string? channel, string? users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - `users` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `users` ← `users`
- **Returns**: `ConversationsInviteerrorschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsJoin
- **HTTP**: `POST /conversations.join` (Default (slack))
- **Notes**: Joins an existing conversation.
- **Signature**: `ConversationsJoin(ContentType contentType, string? token, string? channel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`
- **Returns**: `ConversationsJoinsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsKick
- **HTTP**: `POST /conversations.kick` (Default (slack))
- **Notes**: Removes a user from a conversation.
- **Signature**: `ConversationsKick(ContentType contentType, string? token, string? channel, string? user, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `user` ← `user`
- **Returns**: `ConversationsKicksuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsLeave
- **HTTP**: `POST /conversations.leave` (Default (slack))
- **Notes**: Leaves a conversation.
- **Signature**: `ConversationsLeave(ContentType contentType, string? token, string? channel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`
- **Returns**: `ConversationsLeavesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsList
- **HTTP**: `GET /conversations.list` (Default (slack))
- **Notes**: Lists all channels in a Slack team.
- **Signature**: `ConversationsList(string? token, bool? excludeArchived, string? types, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`token` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `exclude_archived` ← `excludeArchived`, `types` ← `types`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ConversationsListsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsMark
- **HTTP**: `POST /conversations.mark` (Default (slack))
- **Notes**: Sets the read cursor in a channel.
- **Signature**: `ConversationsMark(ContentType contentType, string? token, string? channel, double? ts, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - `ts` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `ts` ← `ts`
- **Returns**: `ConversationsMarksuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsMembers
- **HTTP**: `GET /conversations.members` (Default (slack))
- **Notes**: Retrieve members of a conversation.
- **Signature**: `ConversationsMembers(string? token, string? channel, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`token` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel` ← `channel`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ConversationsMemberssuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsOpen
- **HTTP**: `POST /conversations.open` (Default (slack))
- **Notes**: Opens or resumes a direct message or multi-person direct message.
- **Signature**: `ConversationsOpen(ContentType contentType, string? token, string? channel, string? users, bool? returnIm, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`token` … `returnIm`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `users` ← `users`, `return_im` ← `returnIm`
- **Returns**: `ConversationsOpensuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsRename
- **HTTP**: `POST /conversations.rename` (Default (slack))
- **Notes**: Renames a conversation.
- **Signature**: `ConversationsRename(ContentType contentType, string? token, string? channel, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `name` ← `name`
- **Returns**: `ConversationsRenamesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsReplies
- **HTTP**: `GET /conversations.replies` (Default (slack))
- **Notes**: Retrieve a thread of messages posted to a conversation
- **Signature**: `ConversationsReplies(string? token, string? channel, double? ts, double? latest, double? oldest, bool? inclusive, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`token` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel` ← `channel`, `ts` ← `ts`, `latest` ← `latest`, `oldest` ← `oldest`, `inclusive` ← `inclusive`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ConversationsRepliessuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsSetPurpose
- **HTTP**: `POST /conversations.setPurpose` (Default (slack))
- **Notes**: Sets the purpose for a conversation.
- **Signature**: `ConversationsSetPurpose(ContentType contentType, string? token, string? channel, string? purpose, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - `purpose` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `purpose` ← `purpose`
- **Returns**: `ConversationsSetPurposesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsSetTopic
- **HTTP**: `POST /conversations.setTopic` (Default (slack))
- **Notes**: Sets the topic for a conversation.
- **Signature**: `ConversationsSetTopic(ContentType contentType, string? token, string? channel, string? topic, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - `topic` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `topic` ← `topic`
- **Returns**: `ConversationsSetTopicsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConversationsUnarchive
- **HTTP**: `POST /conversations.unarchive` (Default (slack))
- **Notes**: Reverses conversation archival.
- **Signature**: `ConversationsUnarchive(ContentType contentType, string? token, string? channel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `channel` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`
- **Returns**: `ConversationsUnarchivesuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
