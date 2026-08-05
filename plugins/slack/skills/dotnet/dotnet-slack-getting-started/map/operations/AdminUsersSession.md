# AdminUsersSession — operations

Accessor: `client.AdminUsersSession` · Source: `Api/AdminUsersSession.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

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
