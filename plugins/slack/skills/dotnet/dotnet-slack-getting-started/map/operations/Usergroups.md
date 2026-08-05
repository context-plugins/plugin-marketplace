# Usergroups — operations

Accessor: `client.Usergroups` · Source: `Api/Usergroups.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UsergroupsCreate
- **HTTP**: `POST /usergroups.create` (Default (slack))
- **Notes**: Create a User Group
- **Signature**: `UsergroupsCreate(string token, ContentType contentType, string name, string? channels, string? description, string? handle, bool? includeCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`channels` … `includeCount`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `channels` ← `channels`, `description` ← `description`, `handle` ← `handle`, `include_count` ← `includeCount`
- **Returns**: `UsergroupsCreateschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsCreate1
- **HTTP**: `POST /usergroups.create` (Default (slack))
- **Notes**: Create a User Group
- **Signature**: `UsergroupsCreate1(string token, ContentType contentType, string name, string? channels, string? description, string? handle, bool? includeCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`channels` … `includeCount`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `channels` ← `channels`, `description` ← `description`, `handle` ← `handle`, `include_count` ← `includeCount`
- **Returns**: `UsergroupsCreateschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsDisable
- **HTTP**: `POST /usergroups.disable` (Default (slack))
- **Notes**: Disable an existing User Group
- **Signature**: `UsergroupsDisable(string token, ContentType contentType, string usergroup, bool? includeCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeCount` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup` ← `usergroup`, `include_count` ← `includeCount`
- **Returns**: `UsergroupsDisableschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsDisable1
- **HTTP**: `POST /usergroups.disable` (Default (slack))
- **Notes**: Disable an existing User Group
- **Signature**: `UsergroupsDisable1(string token, ContentType contentType, string usergroup, bool? includeCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeCount` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup` ← `usergroup`, `include_count` ← `includeCount`
- **Returns**: `UsergroupsDisableschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsEnable
- **HTTP**: `POST /usergroups.enable` (Default (slack))
- **Notes**: Enable a User Group
- **Signature**: `UsergroupsEnable(string token, ContentType contentType, string usergroup, bool? includeCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeCount` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup` ← `usergroup`, `include_count` ← `includeCount`
- **Returns**: `UsergroupsEnableschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsEnable1
- **HTTP**: `POST /usergroups.enable` (Default (slack))
- **Notes**: Enable a User Group
- **Signature**: `UsergroupsEnable1(string token, ContentType contentType, string usergroup, bool? includeCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeCount` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup` ← `usergroup`, `include_count` ← `includeCount`
- **Returns**: `UsergroupsEnableschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsList
- **HTTP**: `GET /usergroups.list` (Default (slack))
- **Notes**: List all User Groups for a team
- **Signature**: `UsergroupsList(string token, bool? includeUsers, bool? includeCount, bool? includeDisabled, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeUsers` — nullable, no default → **must pass explicitly**
  - `includeCount` — nullable, no default → **must pass explicitly**
  - `includeDisabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `include_users` ← `includeUsers`, `include_count` ← `includeCount`, `include_disabled` ← `includeDisabled`
- **Returns**: `UsergroupsListschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsList1
- **HTTP**: `GET /usergroups.list` (Default (slack))
- **Notes**: List all User Groups for a team
- **Signature**: `UsergroupsList1(string token, bool? includeUsers, bool? includeCount, bool? includeDisabled, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeUsers` — nullable, no default → **must pass explicitly**
  - `includeCount` — nullable, no default → **must pass explicitly**
  - `includeDisabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `include_users` ← `includeUsers`, `include_count` ← `includeCount`, `include_disabled` ← `includeDisabled`
- **Returns**: `UsergroupsListschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsUpdate
- **HTTP**: `POST /usergroups.update` (Default (slack))
- **Notes**: Update an existing User Group
- **Signature**: `UsergroupsUpdate(string token, ContentType contentType, string usergroup, string? handle, string? description, string? channels, bool? includeCount, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`handle` … `name`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup` ← `usergroup`, `handle` ← `handle`, `description` ← `description`, `channels` ← `channels`, `include_count` ← `includeCount`, `name` ← `name`
- **Returns**: `UsergroupsUpdateschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsUpdate1
- **HTTP**: `POST /usergroups.update` (Default (slack))
- **Notes**: Update an existing User Group
- **Signature**: `UsergroupsUpdate1(string token, ContentType contentType, string usergroup, string? handle, string? description, string? channels, bool? includeCount, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`handle` … `name`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup` ← `usergroup`, `handle` ← `handle`, `description` ← `description`, `channels` ← `channels`, `include_count` ← `includeCount`, `name` ← `name`
- **Returns**: `UsergroupsUpdateschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsUsersList
- **HTTP**: `GET /usergroups.users.list` (Default (slack))
- **Notes**: List all users in a User Group
- **Signature**: `UsergroupsUsersList(string token, string usergroup, bool? includeDisabled, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeDisabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `usergroup` ← `usergroup`, `include_disabled` ← `includeDisabled`
- **Returns**: `UsergroupsUsersListschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsUsersList1
- **HTTP**: `GET /usergroups.users.list` (Default (slack))
- **Notes**: List all users in a User Group
- **Signature**: `UsergroupsUsersList1(string token, string usergroup, bool? includeDisabled, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeDisabled` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `usergroup` ← `usergroup`, `include_disabled` ← `includeDisabled`
- **Returns**: `UsergroupsUsersListschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsUsersUpdate
- **HTTP**: `POST /usergroups.users.update` (Default (slack))
- **Notes**: Update the list of users for a User Group
- **Signature**: `UsergroupsUsersUpdate(string token, ContentType contentType, string usergroup, string users, bool? includeCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeCount` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup` ← `usergroup`, `users` ← `users`, `include_count` ← `includeCount`
- **Returns**: `UsergroupsUsersUpdateschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsergroupsUsersUpdate1
- **HTTP**: `POST /usergroups.users.update` (Default (slack))
- **Notes**: Update the list of users for a User Group
- **Signature**: `UsergroupsUsersUpdate1(string token, ContentType contentType, string usergroup, string users, bool? includeCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeCount` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usergroup` ← `usergroup`, `users` ← `users`, `include_count` ← `includeCount`
- **Returns**: `UsergroupsUsersUpdateschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
