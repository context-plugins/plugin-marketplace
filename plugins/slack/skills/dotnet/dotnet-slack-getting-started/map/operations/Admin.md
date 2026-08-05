# Admin — operations

Accessor: `client.Admin` · Source: `Api/Admin.cs` · 112 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminAppsApprove
- **HTTP**: `POST /admin.apps.approve` (Default (slack))
- **Notes**: Approve an app for installation on a workspace.
- **Signature**: `AdminAppsApprove(string token, ContentType contentType, string? appId, string? requestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `appId` — nullable, no default → **must pass explicitly**
  - `requestId` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `app_id` ← `appId`, `request_id` ← `requestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsApprove1
- **HTTP**: `POST /admin.apps.approve` (Default (slack))
- **Notes**: Approve an app for installation on a workspace.
- **Signature**: `AdminAppsApprove1(string token, ContentType contentType, string? appId, string? requestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `appId` — nullable, no default → **must pass explicitly**
  - `requestId` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `app_id` ← `appId`, `request_id` ← `requestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsApprovedList
- **HTTP**: `GET /admin.apps.approved.list` (Default (slack))
- **Notes**: List approved apps for an org or workspace.
- **Signature**: `AdminAppsApprovedList(string token, int? limit, string? cursor, string? teamId, string? enterpriseId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`limit` … `enterpriseId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `team_id` ← `teamId`, `enterprise_id` ← `enterpriseId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsApprovedList1
- **HTTP**: `GET /admin.apps.approved.list` (Default (slack))
- **Notes**: List approved apps for an org or workspace.
- **Signature**: `AdminAppsApprovedList1(string token, int? limit, string? cursor, string? teamId, string? enterpriseId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`limit` … `enterpriseId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `team_id` ← `teamId`, `enterprise_id` ← `enterpriseId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsRequestsList
- **HTTP**: `GET /admin.apps.requests.list` (Default (slack))
- **Notes**: List app requests for a team/workspace.
- **Signature**: `AdminAppsRequestsList(string token, int? limit, string? cursor, string? teamId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsRequestsList1
- **HTTP**: `GET /admin.apps.requests.list` (Default (slack))
- **Notes**: List app requests for a team/workspace.
- **Signature**: `AdminAppsRequestsList1(string token, int? limit, string? cursor, string? teamId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsRestrict
- **HTTP**: `POST /admin.apps.restrict` (Default (slack))
- **Notes**: Restrict an app for installation on a workspace.
- **Signature**: `AdminAppsRestrict(string token, ContentType contentType, string? appId, string? requestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `appId` — nullable, no default → **must pass explicitly**
  - `requestId` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `app_id` ← `appId`, `request_id` ← `requestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsRestrict1
- **HTTP**: `POST /admin.apps.restrict` (Default (slack))
- **Notes**: Restrict an app for installation on a workspace.
- **Signature**: `AdminAppsRestrict1(string token, ContentType contentType, string? appId, string? requestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `appId` — nullable, no default → **must pass explicitly**
  - `requestId` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `app_id` ← `appId`, `request_id` ← `requestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsRestrictedList
- **HTTP**: `GET /admin.apps.restricted.list` (Default (slack))
- **Notes**: List restricted apps for an org or workspace.
- **Signature**: `AdminAppsRestrictedList(string token, int? limit, string? cursor, string? teamId, string? enterpriseId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`limit` … `enterpriseId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `team_id` ← `teamId`, `enterprise_id` ← `enterpriseId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsRestrictedList1
- **HTTP**: `GET /admin.apps.restricted.list` (Default (slack))
- **Notes**: List restricted apps for an org or workspace.
- **Signature**: `AdminAppsRestrictedList1(string token, int? limit, string? cursor, string? teamId, string? enterpriseId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`limit` … `enterpriseId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `team_id` ← `teamId`, `enterprise_id` ← `enterpriseId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

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

### AdminConversationsArchive1
- **HTTP**: `POST /admin.conversations.archive` (Default (slack))
- **Notes**: Archive a public or private channel.
- **Signature**: `AdminConversationsArchive1(string token, ContentType contentType, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsArchiveschema1`
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

### AdminConversationsConvertToPrivate1
- **HTTP**: `POST /admin.conversations.convertToPrivate` (Default (slack))
- **Notes**: Convert a public channel to a private channel.
- **Signature**: `AdminConversationsConvertToPrivate1(string token, ContentType contentType, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsConvertToPrivateschema1`
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

### AdminConversationsCreate1
- **HTTP**: `POST /admin.conversations.create` (Default (slack))
- **Notes**: Create a public or private channel-based conversation.
- **Signature**: `AdminConversationsCreate1(string token, ContentType contentType, string name, bool isPrivate, string? description, bool? orgWide, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `description` — nullable, no default → **must pass explicitly**
  - `orgWide` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `is_private` ← `isPrivate`, `description` ← `description`, `org_wide` ← `orgWide`, `team_id` ← `teamId`
- **Returns**: `AdminConversationsCreateschema1`
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

### AdminConversationsDelete1
- **HTTP**: `POST /admin.conversations.delete` (Default (slack))
- **Notes**: Delete a public or private channel.
- **Signature**: `AdminConversationsDelete1(string token, ContentType contentType, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsDeleteschema1`
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

### AdminConversationsDisconnectShared1
- **HTTP**: `POST /admin.conversations.disconnectShared` (Default (slack))
- **Notes**: Disconnect a connected channel from one or more workspaces.
- **Signature**: `AdminConversationsDisconnectShared1(string token, ContentType contentType, string channelId, string? leavingTeamIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `leavingTeamIds` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `leaving_team_ids` ← `leavingTeamIds`
- **Returns**: `AdminConversationsRenameschema2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsEkmListOriginalConnectedChannelInfo
- **HTTP**: `GET /admin.conversations.ekm.listOriginalConnectedChannelInfo` (Default (slack))
- **Notes**: List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.
- **Signature**: `AdminConversationsEkmListOriginalConnectedChannelInfo(string token, string? channelIds, string? teamIds, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`channelIds` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel_ids` ← `channelIds`, `team_ids` ← `teamIds`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminConversationsEkmListOriginalConnectedChannelInfo1
- **HTTP**: `GET /admin.conversations.ekm.listOriginalConnectedChannelInfo` (Default (slack))
- **Notes**: List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.
- **Signature**: `AdminConversationsEkmListOriginalConnectedChannelInfo1(string token, string? channelIds, string? teamIds, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`channelIds` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel_ids` ← `channelIds`, `team_ids` ← `teamIds`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate1`
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

### AdminConversationsGetConversationPrefs1
- **HTTP**: `GET /admin.conversations.getConversationPrefs` (Default (slack))
- **Notes**: Get conversation preferences for a public or private channel.
- **Signature**: `AdminConversationsGetConversationPrefs1(string channelId, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsGetConversationPrefsschema1`
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

### AdminConversationsGetTeams1
- **HTTP**: `GET /admin.conversations.getTeams` (Default (slack))
- **Notes**: Get all the workspaces a given public or private channel is connected to within this Enterprise org.
- **Signature**: `AdminConversationsGetTeams1(string channelId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `AdminConversationsGetTeamsschema1`
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

### AdminConversationsInvite1
- **HTTP**: `POST /admin.conversations.invite` (Default (slack))
- **Notes**: Invite a user to a public or private channel.
- **Signature**: `AdminConversationsInvite1(string token, ContentType contentType, string userIds, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user_ids` ← `userIds`, `channel_id` ← `channelId`
- **Returns**: `AdminConversationsInviteschema1`
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

### AdminConversationsRename1
- **HTTP**: `POST /admin.conversations.rename` (Default (slack))
- **Notes**: Rename a public or private channel.
- **Signature**: `AdminConversationsRename1(string token, ContentType contentType, string channelId, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `name` ← `name`
- **Returns**: `AdminConversationsRenameschema11`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

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

### AdminConversationsSearch1
- **HTTP**: `GET /admin.conversations.search` (Default (slack))
- **Notes**: Search for public or private channels in an Enterprise organization.
- **Signature**: `AdminConversationsSearch1(string? teamIds, string? query, int? limit, string? cursor, string? searchChannelTypes, string? sort, string? sortDir, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
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

### AdminConversationsSetConversationPrefs1
- **HTTP**: `POST /admin.conversations.setConversationPrefs` (Default (slack))
- **Notes**: Set the posting permissions for a public or private channel.
- **Signature**: `AdminConversationsSetConversationPrefs1(string token, ContentType contentType, string channelId, string prefs, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `prefs` ← `prefs`
- **Returns**: `AdminConversationsSetConversationPrefsschema1`
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

### AdminConversationsSetTeams1
- **HTTP**: `POST /admin.conversations.setTeams` (Default (slack))
- **Notes**: Set the workspaces in an Enterprise grid org that connect to a public or private channel.
- **Signature**: `AdminConversationsSetTeams1(string token, ContentType contentType, string channelId, string? teamId, string? targetTeamIds, bool? orgChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `targetTeamIds` — nullable, no default → **must pass explicitly**
  - `orgChannel` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`, `team_id` ← `teamId`, `target_team_ids` ← `targetTeamIds`, `org_channel` ← `orgChannel`
- **Returns**: `Defaultsuccesstemplate1`
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

### AdminConversationsUnarchive1
- **HTTP**: `POST /admin.conversations.unarchive` (Default (slack))
- **Notes**: Unarchive a public or private channel.
- **Signature**: `AdminConversationsUnarchive1(string token, ContentType contentType, string channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel_id` ← `channelId`
- **Returns**: `AdminConversationsUnarchiveschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiAdd
- **HTTP**: `POST /admin.emoji.add` (Default (slack))
- **Notes**: Add an emoji.
- **Signature**: `AdminEmojiAdd(ContentType contentType, string token, string name, string url, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `url` ← `url`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiAdd1
- **HTTP**: `POST /admin.emoji.add` (Default (slack))
- **Notes**: Add an emoji.
- **Signature**: `AdminEmojiAdd1(ContentType contentType, string token, string name, string url, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `url` ← `url`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiAddAlias
- **HTTP**: `POST /admin.emoji.addAlias` (Default (slack))
- **Notes**: Add an emoji alias.
- **Signature**: `AdminEmojiAddAlias(ContentType contentType, string token, string name, string aliasFor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `alias_for` ← `aliasFor`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiAddAlias1
- **HTTP**: `POST /admin.emoji.addAlias` (Default (slack))
- **Notes**: Add an emoji alias.
- **Signature**: `AdminEmojiAddAlias1(ContentType contentType, string token, string name, string aliasFor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `alias_for` ← `aliasFor`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiList
- **HTTP**: `GET /admin.emoji.list` (Default (slack))
- **Notes**: List emoji for an Enterprise Grid organization.
- **Signature**: `AdminEmojiList(string token, string? cursor, int? limit, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiList1
- **HTTP**: `GET /admin.emoji.list` (Default (slack))
- **Notes**: List emoji for an Enterprise Grid organization.
- **Signature**: `AdminEmojiList1(string token, string? cursor, int? limit, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiRemove
- **HTTP**: `POST /admin.emoji.remove` (Default (slack))
- **Notes**: Remove an emoji across an Enterprise Grid organization
- **Signature**: `AdminEmojiRemove(ContentType contentType, string token, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiRemove1
- **HTTP**: `POST /admin.emoji.remove` (Default (slack))
- **Notes**: Remove an emoji across an Enterprise Grid organization
- **Signature**: `AdminEmojiRemove1(ContentType contentType, string token, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiRename
- **HTTP**: `POST /admin.emoji.rename` (Default (slack))
- **Notes**: Rename an emoji.
- **Signature**: `AdminEmojiRename(ContentType contentType, string token, string name, string newName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `new_name` ← `newName`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiRename1
- **HTTP**: `POST /admin.emoji.rename` (Default (slack))
- **Notes**: Rename an emoji.
- **Signature**: `AdminEmojiRename1(ContentType contentType, string token, string name, string newName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `new_name` ← `newName`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsApprove
- **HTTP**: `POST /admin.inviteRequests.approve` (Default (slack))
- **Notes**: Approve a workspace invite request.
- **Signature**: `AdminInviteRequestsApprove(string token, ContentType contentType, string inviteRequestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `invite_request_id` ← `inviteRequestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsApprove1
- **HTTP**: `POST /admin.inviteRequests.approve` (Default (slack))
- **Notes**: Approve a workspace invite request.
- **Signature**: `AdminInviteRequestsApprove1(string token, ContentType contentType, string inviteRequestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `invite_request_id` ← `inviteRequestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsApprovedList
- **HTTP**: `GET /admin.inviteRequests.approved.list` (Default (slack))
- **Notes**: List all approved workspace invite requests.
- **Signature**: `AdminInviteRequestsApprovedList(string? teamId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsApprovedList1
- **HTTP**: `GET /admin.inviteRequests.approved.list` (Default (slack))
- **Notes**: List all approved workspace invite requests.
- **Signature**: `AdminInviteRequestsApprovedList1(string? teamId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsDeniedList
- **HTTP**: `GET /admin.inviteRequests.denied.list` (Default (slack))
- **Notes**: List all denied workspace invite requests.
- **Signature**: `AdminInviteRequestsDeniedList(string? teamId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsDeniedList1
- **HTTP**: `GET /admin.inviteRequests.denied.list` (Default (slack))
- **Notes**: List all denied workspace invite requests.
- **Signature**: `AdminInviteRequestsDeniedList1(string? teamId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsDeny
- **HTTP**: `POST /admin.inviteRequests.deny` (Default (slack))
- **Notes**: Deny a workspace invite request.
- **Signature**: `AdminInviteRequestsDeny(string token, ContentType contentType, string inviteRequestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `invite_request_id` ← `inviteRequestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsDeny1
- **HTTP**: `POST /admin.inviteRequests.deny` (Default (slack))
- **Notes**: Deny a workspace invite request.
- **Signature**: `AdminInviteRequestsDeny1(string token, ContentType contentType, string inviteRequestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `invite_request_id` ← `inviteRequestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsList
- **HTTP**: `GET /admin.inviteRequests.list` (Default (slack))
- **Notes**: List all pending workspace invite requests.
- **Signature**: `AdminInviteRequestsList(string? teamId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminInviteRequestsList1
- **HTTP**: `GET /admin.inviteRequests.list` (Default (slack))
- **Notes**: List all pending workspace invite requests.
- **Signature**: `AdminInviteRequestsList1(string? teamId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsAdminsList
- **HTTP**: `GET /admin.teams.admins.list` (Default (slack))
- **Notes**: List all of the admins on a given workspace.
- **Signature**: `AdminTeamsAdminsList(string token, string teamId, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsAdminsList1
- **HTTP**: `GET /admin.teams.admins.list` (Default (slack))
- **Notes**: List all of the admins on a given workspace.
- **Signature**: `AdminTeamsAdminsList1(string token, string teamId, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsCreate
- **HTTP**: `POST /admin.teams.create` (Default (slack))
- **Notes**: Create an Enterprise team.
- **Signature**: `AdminTeamsCreate(string token, ContentType contentType, string teamDomain, string teamName, string? teamDescription, string? teamDiscoverability, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamDescription` — nullable, no default → **must pass explicitly**
  - `teamDiscoverability` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_domain` ← `teamDomain`, `team_name` ← `teamName`, `team_description` ← `teamDescription`, `team_discoverability` ← `teamDiscoverability`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsCreate1
- **HTTP**: `POST /admin.teams.create` (Default (slack))
- **Notes**: Create an Enterprise team.
- **Signature**: `AdminTeamsCreate1(string token, ContentType contentType, string teamDomain, string teamName, string? teamDescription, string? teamDiscoverability, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamDescription` — nullable, no default → **must pass explicitly**
  - `teamDiscoverability` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_domain` ← `teamDomain`, `team_name` ← `teamName`, `team_description` ← `teamDescription`, `team_discoverability` ← `teamDiscoverability`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsList
- **HTTP**: `GET /admin.teams.list` (Default (slack))
- **Notes**: List all teams on an Enterprise organization
- **Signature**: `AdminTeamsList(int? limit, string? cursor, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsList1
- **HTTP**: `GET /admin.teams.list` (Default (slack))
- **Notes**: List all teams on an Enterprise organization
- **Signature**: `AdminTeamsList1(int? limit, string? cursor, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsOwnersList
- **HTTP**: `GET /admin.teams.owners.list` (Default (slack))
- **Notes**: List all of the owners on a given workspace.
- **Signature**: `AdminTeamsOwnersList(string token, string teamId, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsOwnersList1
- **HTTP**: `GET /admin.teams.owners.list` (Default (slack))
- **Notes**: List all of the owners on a given workspace.
- **Signature**: `AdminTeamsOwnersList1(string token, string teamId, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsInfo
- **HTTP**: `GET /admin.teams.settings.info` (Default (slack))
- **Notes**: Fetch information about settings in a workspace
- **Signature**: `AdminTeamsSettingsInfo(string teamId, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsInfo1
- **HTTP**: `GET /admin.teams.settings.info` (Default (slack))
- **Notes**: Fetch information about settings in a workspace
- **Signature**: `AdminTeamsSettingsInfo1(string teamId, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDefaultChannels
- **HTTP**: `POST /admin.teams.settings.setDefaultChannels` (Default (slack))
- **Notes**: Set the default channels of a workspace.
- **Signature**: `AdminTeamsSettingsSetDefaultChannels(ContentType contentType, string token, string teamId, string channelIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `channel_ids` ← `channelIds`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDefaultChannels1
- **HTTP**: `POST /admin.teams.settings.setDefaultChannels` (Default (slack))
- **Notes**: Set the default channels of a workspace.
- **Signature**: `AdminTeamsSettingsSetDefaultChannels1(ContentType contentType, string token, string teamId, string channelIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `channel_ids` ← `channelIds`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDescription
- **HTTP**: `POST /admin.teams.settings.setDescription` (Default (slack))
- **Notes**: Set the description of a given workspace.
- **Signature**: `AdminTeamsSettingsSetDescription(string token, ContentType contentType, string teamId, string description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `description` ← `description`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDescription1
- **HTTP**: `POST /admin.teams.settings.setDescription` (Default (slack))
- **Notes**: Set the description of a given workspace.
- **Signature**: `AdminTeamsSettingsSetDescription1(string token, ContentType contentType, string teamId, string description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `description` ← `description`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDiscoverability
- **HTTP**: `POST /admin.teams.settings.setDiscoverability` (Default (slack))
- **Notes**: An API method that allows admins to set the discoverability of a given workspace
- **Signature**: `AdminTeamsSettingsSetDiscoverability(string token, ContentType contentType, string teamId, string discoverability, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `discoverability` ← `discoverability`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDiscoverability1
- **HTTP**: `POST /admin.teams.settings.setDiscoverability` (Default (slack))
- **Notes**: An API method that allows admins to set the discoverability of a given workspace
- **Signature**: `AdminTeamsSettingsSetDiscoverability1(string token, ContentType contentType, string teamId, string discoverability, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `discoverability` ← `discoverability`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetIcon
- **HTTP**: `POST /admin.teams.settings.setIcon` (Default (slack))
- **Notes**: Sets the icon of a workspace.
- **Signature**: `AdminTeamsSettingsSetIcon(ContentType contentType, string token, string imageUrl, string teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `image_url` ← `imageUrl`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetIcon1
- **HTTP**: `POST /admin.teams.settings.setIcon` (Default (slack))
- **Notes**: Sets the icon of a workspace.
- **Signature**: `AdminTeamsSettingsSetIcon1(ContentType contentType, string token, string imageUrl, string teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `image_url` ← `imageUrl`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetName
- **HTTP**: `POST /admin.teams.settings.setName` (Default (slack))
- **Notes**: Set the name of a given workspace.
- **Signature**: `AdminTeamsSettingsSetName(string token, ContentType contentType, string teamId, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `name` ← `name`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetName1
- **HTTP**: `POST /admin.teams.settings.setName` (Default (slack))
- **Notes**: Set the name of a given workspace.
- **Signature**: `AdminTeamsSettingsSetName1(string token, ContentType contentType, string teamId, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `name` ← `name`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsergroupsAddChannels
- **HTTP**: `POST /admin.usergroups.addChannels` (Default (slack))
- **Notes**: Add one or more default channels to an IDP group.
- **Signature**: `AdminUsergroupsAddChannels(string token, ContentType contentType, string usergroupId, string channelIds, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup_id` ← `usergroupId`, `channel_ids` ← `channelIds`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsergroupsAddChannels1
- **HTTP**: `POST /admin.usergroups.addChannels` (Default (slack))
- **Notes**: Add one or more default channels to an IDP group.
- **Signature**: `AdminUsergroupsAddChannels1(string token, ContentType contentType, string usergroupId, string channelIds, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup_id` ← `usergroupId`, `channel_ids` ← `channelIds`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsergroupsAddTeams
- **HTTP**: `POST /admin.usergroups.addTeams` (Default (slack))
- **Notes**: Associate one or more default workspaces with an organization-wide IDP group.
- **Signature**: `AdminUsergroupsAddTeams(string token, ContentType contentType, string usergroupId, string teamIds, bool? autoProvision, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `autoProvision` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup_id` ← `usergroupId`, `team_ids` ← `teamIds`, `auto_provision` ← `autoProvision`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsergroupsAddTeams1
- **HTTP**: `POST /admin.usergroups.addTeams` (Default (slack))
- **Notes**: Associate one or more default workspaces with an organization-wide IDP group.
- **Signature**: `AdminUsergroupsAddTeams1(string token, ContentType contentType, string usergroupId, string teamIds, bool? autoProvision, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `autoProvision` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup_id` ← `usergroupId`, `team_ids` ← `teamIds`, `auto_provision` ← `autoProvision`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsergroupsListChannels
- **HTTP**: `GET /admin.usergroups.listChannels` (Default (slack))
- **Notes**: List the channels linked to an org-level IDP group (user group).
- **Signature**: `AdminUsergroupsListChannels(string usergroupId, string? teamId, bool? includeNumMembers, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `includeNumMembers` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup_id` ← `usergroupId`, `team_id` ← `teamId`, `include_num_members` ← `includeNumMembers`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsergroupsListChannels1
- **HTTP**: `GET /admin.usergroups.listChannels` (Default (slack))
- **Notes**: List the channels linked to an org-level IDP group (user group).
- **Signature**: `AdminUsergroupsListChannels1(string usergroupId, string? teamId, bool? includeNumMembers, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamId` — nullable, no default → **must pass explicitly**
  - `includeNumMembers` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup_id` ← `usergroupId`, `team_id` ← `teamId`, `include_num_members` ← `includeNumMembers`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsergroupsRemoveChannels
- **HTTP**: `POST /admin.usergroups.removeChannels` (Default (slack))
- **Notes**: Remove one or more default channels from an org-level IDP group (user group).
- **Signature**: `AdminUsergroupsRemoveChannels(string token, ContentType contentType, string usergroupId, string channelIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup_id` ← `usergroupId`, `channel_ids` ← `channelIds`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsergroupsRemoveChannels1
- **HTTP**: `POST /admin.usergroups.removeChannels` (Default (slack))
- **Notes**: Remove one or more default channels from an org-level IDP group (user group).
- **Signature**: `AdminUsergroupsRemoveChannels1(string token, ContentType contentType, string usergroupId, string channelIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup_id` ← `usergroupId`, `channel_ids` ← `channelIds`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersAssign
- **HTTP**: `POST /admin.users.assign` (Default (slack))
- **Notes**: Add an Enterprise user to a workspace.
- **Signature**: `AdminUsersAssign(string token, ContentType contentType, string teamId, string userId, bool? isRestricted, bool? isUltraRestricted, string? channelIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isRestricted` — nullable, no default → **must pass explicitly**
  - `isUltraRestricted` — nullable, no default → **must pass explicitly**
  - `channelIds` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`, `is_restricted` ← `isRestricted`, `is_ultra_restricted` ← `isUltraRestricted`, `channel_ids` ← `channelIds`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersAssign1
- **HTTP**: `POST /admin.users.assign` (Default (slack))
- **Notes**: Add an Enterprise user to a workspace.
- **Signature**: `AdminUsersAssign1(string token, ContentType contentType, string teamId, string userId, bool? isRestricted, bool? isUltraRestricted, string? channelIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isRestricted` — nullable, no default → **must pass explicitly**
  - `isUltraRestricted` — nullable, no default → **must pass explicitly**
  - `channelIds` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`, `is_restricted` ← `isRestricted`, `is_ultra_restricted` ← `isUltraRestricted`, `channel_ids` ← `channelIds`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersInvite
- **HTTP**: `POST /admin.users.invite` (Default (slack))
- **Notes**: Invite a user to a workspace.
- **Signature**: `AdminUsersInvite(string token, ContentType contentType, string teamId, string email, string channelIds, string? customMessage, string? realName, bool? resend, bool? isRestricted, bool? isUltraRestricted, string? guestExpirationTs, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`customMessage` … `guestExpirationTs`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `email` ← `email`, `channel_ids` ← `channelIds`, `custom_message` ← `customMessage`, `real_name` ← `realName`, `resend` ← `resend`, `is_restricted` ← `isRestricted`, `is_ultra_restricted` ← `isUltraRestricted`, `guest_expiration_ts` ← `guestExpirationTs`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersInvite1
- **HTTP**: `POST /admin.users.invite` (Default (slack))
- **Notes**: Invite a user to a workspace.
- **Signature**: `AdminUsersInvite1(string token, ContentType contentType, string teamId, string email, string channelIds, string? customMessage, string? realName, bool? resend, bool? isRestricted, bool? isUltraRestricted, string? guestExpirationTs, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`customMessage` … `guestExpirationTs`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `email` ← `email`, `channel_ids` ← `channelIds`, `custom_message` ← `customMessage`, `real_name` ← `realName`, `resend` ← `resend`, `is_restricted` ← `isRestricted`, `is_ultra_restricted` ← `isUltraRestricted`, `guest_expiration_ts` ← `guestExpirationTs`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersList
- **HTTP**: `GET /admin.users.list` (Default (slack))
- **Notes**: List users on a workspace
- **Signature**: `AdminUsersList(string teamId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersList1
- **HTTP**: `GET /admin.users.list` (Default (slack))
- **Notes**: List users on a workspace
- **Signature**: `AdminUsersList1(string teamId, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersRemove
- **HTTP**: `POST /admin.users.remove` (Default (slack))
- **Notes**: Remove a user from a workspace.
- **Signature**: `AdminUsersRemove(string token, ContentType contentType, string teamId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersRemove1
- **HTTP**: `POST /admin.users.remove` (Default (slack))
- **Notes**: Remove a user from a workspace.
- **Signature**: `AdminUsersRemove1(string token, ContentType contentType, string teamId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSessionInvalidate
- **HTTP**: `POST /admin.users.session.invalidate` (Default (slack))
- **Notes**: Invalidate a single session for a user by session_id
- **Signature**: `AdminUsersSessionInvalidate(string token, ContentType contentType, string teamId, int sessionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `session_id` ← `sessionId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSessionInvalidate1
- **HTTP**: `POST /admin.users.session.invalidate` (Default (slack))
- **Notes**: Invalidate a single session for a user by session_id
- **Signature**: `AdminUsersSessionInvalidate1(string token, ContentType contentType, string teamId, int sessionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `session_id` ← `sessionId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSessionReset
- **HTTP**: `POST /admin.users.session.reset` (Default (slack))
- **Notes**: Wipes all valid sessions on all devices for a given user
- **Signature**: `AdminUsersSessionReset(string token, ContentType contentType, string userId, bool? mobileOnly, bool? webOnly, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mobileOnly` — nullable, no default → **must pass explicitly**
  - `webOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user_id` ← `userId`, `mobile_only` ← `mobileOnly`, `web_only` ← `webOnly`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSessionReset1
- **HTTP**: `POST /admin.users.session.reset` (Default (slack))
- **Notes**: Wipes all valid sessions on all devices for a given user
- **Signature**: `AdminUsersSessionReset1(string token, ContentType contentType, string userId, bool? mobileOnly, bool? webOnly, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mobileOnly` — nullable, no default → **must pass explicitly**
  - `webOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user_id` ← `userId`, `mobile_only` ← `mobileOnly`, `web_only` ← `webOnly`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSetAdmin
- **HTTP**: `POST /admin.users.setAdmin` (Default (slack))
- **Notes**: Set an existing guest, regular user, or owner to be an admin user.
- **Signature**: `AdminUsersSetAdmin(string token, ContentType contentType, string teamId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSetAdmin1
- **HTTP**: `POST /admin.users.setAdmin` (Default (slack))
- **Notes**: Set an existing guest, regular user, or owner to be an admin user.
- **Signature**: `AdminUsersSetAdmin1(string token, ContentType contentType, string teamId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSetExpiration
- **HTTP**: `POST /admin.users.setExpiration` (Default (slack))
- **Notes**: Set an expiration for a guest user
- **Signature**: `AdminUsersSetExpiration(string token, ContentType contentType, string teamId, string userId, int expirationTs, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`, `expiration_ts` ← `expirationTs`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSetExpiration1
- **HTTP**: `POST /admin.users.setExpiration` (Default (slack))
- **Notes**: Set an expiration for a guest user
- **Signature**: `AdminUsersSetExpiration1(string token, ContentType contentType, string teamId, string userId, int expirationTs, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`, `expiration_ts` ← `expirationTs`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSetOwner
- **HTTP**: `POST /admin.users.setOwner` (Default (slack))
- **Notes**: Set an existing guest, regular user, or admin user to be a workspace owner.
- **Signature**: `AdminUsersSetOwner(string token, ContentType contentType, string teamId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSetOwner1
- **HTTP**: `POST /admin.users.setOwner` (Default (slack))
- **Notes**: Set an existing guest, regular user, or admin user to be a workspace owner.
- **Signature**: `AdminUsersSetOwner1(string token, ContentType contentType, string teamId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSetRegular
- **HTTP**: `POST /admin.users.setRegular` (Default (slack))
- **Notes**: Set an existing guest user, admin user, or owner to be a regular user.
- **Signature**: `AdminUsersSetRegular(string token, ContentType contentType, string teamId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminUsersSetRegular1
- **HTTP**: `POST /admin.users.setRegular` (Default (slack))
- **Notes**: Set an existing guest user, admin user, or owner to be a regular user.
- **Signature**: `AdminUsersSetRegular1(string token, ContentType contentType, string teamId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `user_id` ← `userId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
