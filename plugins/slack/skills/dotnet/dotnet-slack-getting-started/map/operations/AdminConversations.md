# AdminConversations — operations

Accessor: `client.AdminConversations` · Source: `Api/AdminConversations.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminConversationsArchive
- **HTTP**: `POST /admin.conversations.archive` (Default (slack))
- **Notes**: Archive a public or private channel.
- **Signature**: `AdminConversationsArchive(string token, ContentType contentType, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsArchiveschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsConvertToPrivate
- **HTTP**: `POST /admin.conversations.convertToPrivate` (Default (slack))
- **Notes**: Convert a public channel to a private channel.
- **Signature**: `AdminConversationsConvertToPrivate(string token, ContentType contentType, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsConvertToPrivateschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsCreate
- **HTTP**: `POST /admin.conversations.create` (Default (slack))
- **Notes**: Create a public or private channel-based conversation.
- **Signature**: `AdminConversationsCreate(string token, ContentType contentType, string name, bool isPrivate, string? description, bool? orgWide, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `description` — nullable, no default → **must pass explicitly**
  - `orgWide` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `is_private` ← `isPrivate`, `description` ← `description`, `org_wide` ← `orgWide`, `team_id` ← `teamId`
- **Returns**: `AdminConversationsCreateschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsDelete
- **HTTP**: `POST /admin.conversations.delete` (Default (slack))
- **Notes**: Delete a public or private channel.
- **Signature**: `AdminConversationsDelete(string token, ContentType contentType, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsDeleteschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsDisconnectShared
- **HTTP**: `POST /admin.conversations.disconnectShared` (Default (slack))
- **Notes**: Disconnect a connected channel from one or more workspaces.
- **Signature**: `AdminConversationsDisconnectShared(string token, ContentType contentType, string channelId, string? leavingTeamIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `leavingTeamIds` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `leaving_team_ids` ← `leavingTeamIds`
- **Returns**: `AdminConversationsRenameschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsGetConversationPrefs
- **HTTP**: `GET /admin.conversations.getConversationPrefs` (Default (slack))
- **Notes**: Get conversation preferences for a public or private channel.
- **Signature**: `AdminConversationsGetConversationPrefs(string channelId, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsGetConversationPrefsschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsGetTeams
- **HTTP**: `GET /admin.conversations.getTeams` (Default (slack))
- **Notes**: Get all the workspaces a given public or private channel is connected to within this Enterprise org.
- **Signature**: `AdminConversationsGetTeams(string channelId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `AdminConversationsGetTeamsschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsInvite
- **HTTP**: `POST /admin.conversations.invite` (Default (slack))
- **Notes**: Invite a user to a public or private channel.
- **Signature**: `AdminConversationsInvite(string token, ContentType contentType, string userIds, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user_ids` ← `userIds`, `channel_id` ← `channelId`
- **Returns**: `AdminConversationsInviteschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsRename
- **HTTP**: `POST /admin.conversations.rename` (Default (slack))
- **Notes**: Rename a public or private channel.
- **Signature**: `AdminConversationsRename(string token, ContentType contentType, string channelId, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `name` ← `name`
- **Returns**: `AdminConversationsRenameschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsSearch
- **HTTP**: `GET /admin.conversations.search` (Default (slack))
- **Notes**: Search for public or private channels in an Enterprise organization.
- **Signature**: `AdminConversationsSearch(string? teamIds, string? query, int? limit, string? cursor, string? searchChannelTypes, string? sort, string? sortDir, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`teamIds` … `sortDir`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_ids` ← `teamIds`, `query` ← `query`, `limit` ← `limit`, `cursor` ← `cursor`, `search_channel_types` ← `searchChannelTypes`, `sort` ← `sort`, `sort_dir` ← `sortDir`
- **Returns**: `AdminConversationsSearchschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsSetConversationPrefs
- **HTTP**: `POST /admin.conversations.setConversationPrefs` (Default (slack))
- **Notes**: Set the posting permissions for a public or private channel.
- **Signature**: `AdminConversationsSetConversationPrefs(string token, ContentType contentType, string channelId, string prefs, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `prefs` ← `prefs`
- **Returns**: `AdminConversationsSetConversationPrefsschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsSetTeams
- **HTTP**: `POST /admin.conversations.setTeams` (Default (slack))
- **Notes**: Set the workspaces in an Enterprise grid org that connect to a public or private channel.
- **Signature**: `AdminConversationsSetTeams(string token, ContentType contentType, string channelId, string? teamId, string? targetTeamIds, bool? orgChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `targetTeamIds` — nullable, no default → **must pass explicitly**
  - `orgChannel` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `team_id` ← `teamId`, `target_team_ids` ← `targetTeamIds`, `org_channel` ← `orgChannel`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsUnarchive
- **HTTP**: `POST /admin.conversations.unarchive` (Default (slack))
- **Notes**: Unarchive a public or private channel.
- **Signature**: `AdminConversationsUnarchive(string token, ContentType contentType, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsUnarchiveschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
