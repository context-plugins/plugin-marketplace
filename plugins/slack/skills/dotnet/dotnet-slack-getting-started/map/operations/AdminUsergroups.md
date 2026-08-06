# AdminUsergroups — operations

Accessor: `client.AdminUsergroups` · Source: `Api/AdminUsergroups.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

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
