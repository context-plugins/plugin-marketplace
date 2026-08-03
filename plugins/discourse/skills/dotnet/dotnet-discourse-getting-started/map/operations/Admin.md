# Admin — operations

Accessor: `client.Admin` · Source: `Api/Admin.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivateUser
- **HTTP**: `PUT /admin/users/{id}/activate.json` (Default)
- **Signature**: `ActivateUser(int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AdminUsersActivateJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminGetUser
- **HTTP**: `GET /admin/users/{id}.json` (Default)
- **Signature**: `AdminGetUser(int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AdminUsersJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminListUsers
- **HTTP**: `GET /admin/users.json` (Default)
- **Signature**: `AdminListUsers(Order3? order, Asc? asc, int? page, bool? showEmails, bool? stats, string? email, string? ip, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`order` … `ip`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `order` ← `order`, `asc` ← `asc`, `page` ← `page`, `show_emails` ← `showEmails`, `stats` ← `stats`, `email` ← `email`, `ip` ← `ip`
- **Returns**: `IReadOnlyList<AdminUsersJsonResponse2>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AdminListUsersFlag
- **HTTP**: `GET /admin/users/list/{flag}.json` (Default)
- **Signature**: `AdminListUsersFlag(Flag flag, Order3? order, Asc? asc, int? page, bool? showEmails, bool? stats, string? email, string? ip, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`order` … `ip`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `order` ← `order`, `asc` ← `asc`, `page` ← `page`, `show_emails` ← `showEmails`, `stats` ← `stats`, `email` ← `email`, `ip` ← `ip`
- **Returns**: `IReadOnlyList<AdminUsersListJsonResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### AnonymizeUser
- **HTTP**: `PUT /admin/users/{id}/anonymize.json` (Default)
- **Signature**: `AnonymizeUser(int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AdminUsersAnonymizeJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeactivateUser
- **HTTP**: `PUT /admin/users/{id}/deactivate.json` (Default)
- **Signature**: `DeactivateUser(int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AdminUsersDeactivateJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUser
- **HTTP**: `DELETE /admin/users/{id}.json` (Default)
- **Signature**: `DeleteUser(int id, AdminUsersJsonRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AdminUsersJsonResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LogOutUser
- **HTTP**: `POST /admin/users/{id}/log_out.json` (Default)
- **Signature**: `LogOutUser(int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AdminUsersLogOutJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RefreshGravatar
- **HTTP**: `POST /user_avatar/{username}/refresh_gravatar.json` (Default)
- **Signature**: `RefreshGravatar(string username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UserAvatarRefreshGravatarJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SilenceUser
- **HTTP**: `PUT /admin/users/{id}/silence.json` (Default)
- **Signature**: `SilenceUser(int id, AdminUsersSilenceJsonRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AdminUsersSilenceJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SuspendUser
- **HTTP**: `PUT /admin/users/{id}/suspend.json` (Default)
- **Signature**: `SuspendUser(int id, AdminUsersSuspendJsonRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AdminUsersSuspendJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
