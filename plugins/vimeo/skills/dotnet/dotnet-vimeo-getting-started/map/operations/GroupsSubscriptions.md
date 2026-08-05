# GroupsSubscriptions — operations

Accessor: `client.GroupsSubscriptions` · Source: `Api/GroupsSubscriptions.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### JoinGroup
- **HTTP**: `PUT /users/{user_id}/groups/{group_id}` (Default (api))
- **Notes**: This method adds the authenticated user to the specified group.
- **Signature**: `JoinGroup(double groupId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<JoinGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### JoinGroupAlt1
- **HTTP**: `PUT /me/groups/{group_id}` (Default (api))
- **Notes**: This method adds the authenticated user to the specified group.
- **Signature**: `JoinGroupAlt1(double groupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<JoinGroupAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LeaveGroup
- **HTTP**: `DELETE /users/{user_id}/groups/{group_id}` (Default (api))
- **Notes**: This method removes the authenticated user from the specified group. The authenticated user can't be the owner of the group; assign a new owner through a PATCH request first.
- **Signature**: `LeaveGroup(double groupId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<LeaveGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LeaveGroupAlt1
- **HTTP**: `DELETE /me/groups/{group_id}` (Default (api))
- **Notes**: This method removes the authenticated user from the specified group. The authenticated user can't be the owner of the group; assign a new owner through a PATCH request first.
- **Signature**: `LeaveGroupAlt1(double groupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<LeaveGroupAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
