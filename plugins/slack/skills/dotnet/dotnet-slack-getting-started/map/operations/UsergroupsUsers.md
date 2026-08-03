# UsergroupsUsers — operations

Accessor: `client.UsergroupsUsers` · Source: `Api/UsergroupsUsers.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

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
