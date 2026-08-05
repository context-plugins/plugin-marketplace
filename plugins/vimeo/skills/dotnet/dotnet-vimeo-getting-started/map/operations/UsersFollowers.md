# UsersFollowers — operations

Accessor: `client.UsersFollowers` · Source: `Api/UsersFollowers.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckIfUserIsFollowing
- **HTTP**: `GET /users/{user_id}/following/{follow_user_id}` (Default (api))
- **Notes**: This method determines whether the authenticated user is a follower of the specified user.
- **Signature**: `CheckIfUserIsFollowing(double followUserId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfUserIsFollowingError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckIfUserIsFollowingAlt1
- **HTTP**: `GET /me/following/{follow_user_id}` (Default (api))
- **Notes**: This method determines whether the authenticated user is a follower of the specified user.
- **Signature**: `CheckIfUserIsFollowingAlt1(double followUserId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfUserIsFollowingAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FollowUser
- **HTTP**: `PUT /users/{user_id}/following/{follow_user_id}` (Default (api))
- **Notes**: This method causes the authenticated user to become the follower of the specified user.
- **Signature**: `FollowUser(double followUserId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<FollowUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FollowUserAlt1
- **HTTP**: `PUT /me/following/{follow_user_id}` (Default (api))
- **Notes**: This method causes the authenticated user to become the follower of the specified user.
- **Signature**: `FollowUserAlt1(double followUserId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<FollowUserAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FollowUsers
- **HTTP**: `POST /users/{user_id}/following` (Default (api))
- **Notes**: This method causes the authenticated user to become a follower of multiple users. In the body of the request, specify the list of users to follow as an array of URIs, where `user01_id`, `user02_id`, `user03_id`, and so on, are the user IDs of the users in question: { [ {"uri" : "/users/{user01_id}"}, {"uri" : "/users/{user02_id}"}, {"uri" : "/users/{user03_id}"} ] }
- **Signature**: `FollowUsers(double userId, UsersFollowingRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<FollowUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FollowUsersAlt1
- **HTTP**: `POST /me/following` (Default (api))
- **Notes**: This method causes the authenticated user to become a follower of multiple users. In the body of the request, specify the list of users to follow as an array of URIs, where `user01_id`, `user02_id`, `user03_id`, and so on, are the user IDs of the users in question: { [ {"uri" : "/users/{user01_id}"}, {"uri" : "/users/{user02_id}"}, {"uri" : "/users/{user03_id}"} ] }
- **Signature**: `FollowUsersAlt1(MeFollowingRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<FollowUsersAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFollowers
- **HTTP**: `GET /users/{user_id}/followers` (Default (api))
- **Notes**: This method returns every follower of the authenticated user.
- **Signature**: `GetFollowers(double userId, Direction? direction, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `UserConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetFollowersAlt1
- **HTTP**: `GET /me/followers` (Default (api))
- **Notes**: This method returns every follower of the authenticated user.
- **Signature**: `GetFollowersAlt1(Direction? direction, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `UserConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetUserFollowing
- **HTTP**: `GET /users/{user_id}/following` (Default (api))
- **Notes**: This method returns every user who is followed by the authenticated user.
- **Signature**: `GetUserFollowing(double userId, Direction? direction, Filter13? filter, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `UserConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetUserFollowingAlt1
- **HTTP**: `GET /me/following` (Default (api))
- **Notes**: This method returns every user who is followed by the authenticated user.
- **Signature**: `GetUserFollowingAlt1(Direction? direction, Filter13? filter, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `UserConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### UnfollowUser
- **HTTP**: `DELETE /users/{user_id}/following/{follow_user_id}` (Default (api))
- **Notes**: This method causes the authenticated user to stop following another user.
- **Signature**: `UnfollowUser(double followUserId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnfollowUserAlt1
- **HTTP**: `DELETE /me/following/{follow_user_id}` (Default (api))
- **Notes**: This method causes the authenticated user to stop following another user.
- **Signature**: `UnfollowUserAlt1(double followUserId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
