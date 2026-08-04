# GroupsUsers — operations

Accessor: `client.GroupsUsers` · Source: `Api/GroupsUsers.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckIfUserJoinedGroup
- **HTTP**: `GET /users/{user_id}/groups/{group_id}` (Default (api))
- **Notes**: This method determines whether the authenticated user belongs to the specified group.
- **Signature**: `CheckIfUserJoinedGroup(double groupId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfUserJoinedGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckIfUserJoinedGroupAlt1
- **HTTP**: `GET /me/groups/{group_id}` (Default (api))
- **Notes**: This method determines whether the authenticated user belongs to the specified group.
- **Signature**: `CheckIfUserJoinedGroupAlt1(double groupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfUserJoinedGroupAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGroupMembers
- **HTTP**: `GET /groups/{group_id}/users` (Default (api))
- **Notes**: This method returns every user who belongs to the specified group.
- **Signature**: `GetGroupMembers(double groupId, Direction? direction, Filter2? filter, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetGroupMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetUserGroups
- **HTTP**: `GET /users/{user_id}/groups` (Default (api))
- **Notes**: This method returns every group to which the authenticated user belongs.
- **Signature**: `GetUserGroups(double userId, Direction? direction, Filter12? filter, double? page, double? perPage, string? query, Sort5? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetUserGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetUserGroupsAlt1
- **HTTP**: `GET /me/groups` (Default (api))
- **Notes**: This method returns every group to which the authenticated user belongs.
- **Signature**: `GetUserGroupsAlt1(Direction? direction, Filter12? filter, double? page, double? perPage, string? query, Sort5? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetUserGroupsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
