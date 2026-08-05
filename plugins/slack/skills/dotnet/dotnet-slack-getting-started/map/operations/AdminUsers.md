# AdminUsers — operations

Accessor: `client.AdminUsers` · Source: `Api/AdminUsers.cs` · 16 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

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
