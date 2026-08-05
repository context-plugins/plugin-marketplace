# EmsOrgAdmins — operations

Accessor: `client.EmsOrgAdmins` · Source: `Api/EmsOrgAdmins.cs` · 18 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgSso
- **HTTP**: `POST /api/v1/orgs/{org_id}/ssos` (Default)
- **Signature**: `CreateOrgSso(string orgId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgSsorole
- **HTTP**: `POST /api/v1/orgs/{org_id}/ssoroles` (Default)
- **Signature**: `CreateOrgSsorole(string orgId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateUser
- **HTTP**: `POST /api/v1/orgs/{org_id}/create_user` (Default)
- **Notes**: Create a locally-managed user (or update privileges if the user already exists). On creation the response returns a one-time temporary password.
- **Signature**: `CreateUser(string orgId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApiV1OrgsCreateUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgSso
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/ssos/{sso_id}` (Default)
- **Signature**: `DeleteOrgSso(string orgId, string ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgSsorole
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/ssoroles/{ssorole_id}` (Default)
- **Signature**: `DeleteOrgSsorole(string orgId, string ssoroleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUser
- **HTTP**: `POST /api/v1/orgs/{org_id}/delete_user` (Default)
- **Notes**: Drop a locally-managed user's org privilege (deletes the user if it was their only org).
- **Signature**: `DeleteUser(string orgId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApiV1OrgsDeleteUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgAdmins
- **HTTP**: `GET /api/v1/orgs/{org_id}/admins` (Default)
- **Notes**: List active org admins and pending invites with their privileges.
- **Signature**: `GetOrgAdmins(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSsometadata
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssos/{sso_id}/metadata` (Default)
- **Signature**: `GetOrgSsometadata(string orgId, string ssoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InviteOrgAdmin
- **HTTP**: `POST /api/v1/orgs/{org_id}/invites` (Default)
- **Notes**: Invite an admin to the org (or grant access if the user already exists).
- **Signature**: `InviteOrgAdmin(string orgId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSso
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssos` (Default)
- **Signature**: `ListOrgSso(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSsorole
- **HTTP**: `GET /api/v1/orgs/{org_id}/ssoroles` (Default)
- **Signature**: `ListOrgSsorole(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ResetPassword
- **HTTP**: `POST /api/v1/orgs/{org_id}/reset_password` (Default)
- **Notes**: Reset a locally-managed user's password. Returns a one-time temporary password that the user must change on next login.
- **Signature**: `ResetPassword(string orgId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApiV1OrgsResetPasswordResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RevokeOrgAdmin
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/admins/{admin_id}` (Default)
- **Notes**: Revoke all of this admin's privileges against the org.
- **Signature**: `RevokeOrgAdmin(string orgId, string adminId, string? xCsrftoken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UninviteOrgAdmin
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/invites/{invite_id}` (Default)
- **Notes**: Revoke a pending invite.
- **Signature**: `UninviteOrgAdmin(string orgId, string inviteId, string? xCsrftoken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgAdmin
- **HTTP**: `PUT /api/v1/orgs/{org_id}/admins/{admin_id}` (Default)
- **Notes**: Update an existing admin's privileges within the org.
- **Signature**: `UpdateOrgAdmin(string orgId, string adminId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgAdminInvite
- **HTTP**: `PUT /api/v1/orgs/{org_id}/invites/{invite_id}` (Default)
- **Notes**: Update privileges (and validity) of a pending invite and re-send it.
- **Signature**: `UpdateOrgAdminInvite(string orgId, string inviteId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgSso
- **HTTP**: `PUT /api/v1/orgs/{org_id}/ssos/{sso_id}` (Default)
- **Signature**: `UpdateOrgSso(string orgId, string ssoId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgSsorole
- **HTTP**: `PUT /api/v1/orgs/{org_id}/ssoroles/{ssorole_id}` (Default)
- **Signature**: `UpdateOrgSsorole(string orgId, string ssoroleId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
