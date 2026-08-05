# AdminConversationsRestrictAccess — operations

Accessor: `client.AdminConversationsRestrictAccess` · Source: `Api/AdminConversationsRestrictAccess.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminConversationsRestrictAccessAddGroup
- **HTTP**: `POST /admin.conversations.restrictAccess.addGroup` (Default (slack))
- **Notes**: Add an allowlist of IDP groups for accessing a channel
- **Signature**: `AdminConversationsRestrictAccessAddGroup(ContentType contentType, string token, string groupId, string channelId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `group_id` ← `groupId`, `channel_id` ← `channelId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsRestrictAccessAddGroup1
- **HTTP**: `POST /admin.conversations.restrictAccess.addGroup` (Default (slack))
- **Notes**: Add an allowlist of IDP groups for accessing a channel
- **Signature**: `AdminConversationsRestrictAccessAddGroup1(ContentType contentType, string token, string groupId, string channelId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `group_id` ← `groupId`, `channel_id` ← `channelId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsRestrictAccessListGroups
- **HTTP**: `GET /admin.conversations.restrictAccess.listGroups` (Default (slack))
- **Notes**: List all IDP Groups linked to a channel
- **Signature**: `AdminConversationsRestrictAccessListGroups(string token, string channelId, string? teamId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel_id` ← `channelId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsRestrictAccessListGroups1
- **HTTP**: `GET /admin.conversations.restrictAccess.listGroups` (Default (slack))
- **Notes**: List all IDP Groups linked to a channel
- **Signature**: `AdminConversationsRestrictAccessListGroups1(string token, string channelId, string? teamId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel_id` ← `channelId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsRestrictAccessRemoveGroup
- **HTTP**: `POST /admin.conversations.restrictAccess.removeGroup` (Default (slack))
- **Notes**: Remove a linked IDP group linked from a private channel
- **Signature**: `AdminConversationsRestrictAccessRemoveGroup(ContentType contentType, string token, string teamId, string groupId, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `group_id` ← `groupId`, `channel_id` ← `channelId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsRestrictAccessRemoveGroup1
- **HTTP**: `POST /admin.conversations.restrictAccess.removeGroup` (Default (slack))
- **Notes**: Remove a linked IDP group linked from a private channel
- **Signature**: `AdminConversationsRestrictAccessRemoveGroup1(ContentType contentType, string token, string teamId, string groupId, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `group_id` ← `groupId`, `channel_id` ← `channelId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
