# Users — operations

Accessor: `client.Users` · Source: `Api/Users.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListUsers
- **HTTP**: `GET /users` (Default (api))
- **Notes**: Returns a paginated list of Users for the workspace. Guest users are not included. The response may include person users and bot users. Results are paginated with a maximum of 100 users per request.
- **Signature**: `ListUsers(string? startCursor, int? pageSize, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startCursor` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Query params (wire ← C#)**: `start_cursor` ← `startCursor`, `page_size` ← `pageSize`
- **Returns**: `PaginatedList`
- **Error**: `SdkException<ListUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveBotUser
- **HTTP**: `GET /users/me` (Default (api))
- **Notes**: Retrieves the bot User associated with the current API token. Returns information about the integration including its name, owner, and the workspace it belongs to.
- **Signature**: `RetrieveBotUser(string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<RetrieveBotUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveUser
- **HTTP**: `GET /users/{user_id}` (Default (api))
- **Notes**: Retrieves a User object using the ID specified in the path. Returns user details including name, avatar, and type (person or bot).
- **Signature**: `RetrieveUser(Guid userId, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<RetrieveUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
