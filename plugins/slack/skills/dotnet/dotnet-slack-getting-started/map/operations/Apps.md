# Apps — operations

Accessor: `client.Apps` · Source: `Api/Apps.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AppsEventAuthorizationsList
- **HTTP**: `GET /apps.event.authorizations.list` (Default (slack))
- **Notes**: Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.
- **Signature**: `AppsEventAuthorizationsList(string eventContext, string? cursor, int? limit, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `event_context` ← `eventContext`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AppsPermissionsInfo
- **HTTP**: `GET /apps.permissions.info` (Default (slack))
- **Notes**: Returns list of permissions this app has on a team.
- **Signature**: `AppsPermissionsInfo(string? token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`
- **Returns**: `AppsPermissionsInfoschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AppsPermissionsRequest
- **HTTP**: `GET /apps.permissions.request` (Default (slack))
- **Notes**: Allows an app to request additional scopes
- **Signature**: `AppsPermissionsRequest(string token, string scopes, string triggerId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `scopes` ← `scopes`, `trigger_id` ← `triggerId`
- **Returns**: `AppsPermissionsRequestschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AppsPermissionsResourcesList
- **HTTP**: `GET /apps.permissions.resources.list` (Default (slack))
- **Notes**: Returns list of resource grants this app has on a team.
- **Signature**: `AppsPermissionsResourcesList(string token, string? cursor, int? limit, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `AppsPermissionsResourcesListsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AppsPermissionsScopesList
- **HTTP**: `GET /apps.permissions.scopes.list` (Default (slack))
- **Notes**: Returns list of scopes this app has on a team.
- **Signature**: `AppsPermissionsScopesList(string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`
- **Returns**: `ApiPermissionsScopesListsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AppsPermissionsUsersList
- **HTTP**: `GET /apps.permissions.users.list` (Default (slack))
- **Notes**: Returns list of user grants and corresponding scopes this app has on a team.
- **Signature**: `AppsPermissionsUsersList(string token, string? cursor, int? limit, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AppsPermissionsUsersRequest
- **HTTP**: `GET /apps.permissions.users.request` (Default (slack))
- **Notes**: Enables an app to trigger a permissions modal to grant an app access to a user access scope.
- **Signature**: `AppsPermissionsUsersRequest(string token, string scopes, string triggerId, string user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `scopes` ← `scopes`, `trigger_id` ← `triggerId`, `user` ← `user`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AppsUninstall
- **HTTP**: `GET /apps.uninstall` (Default (slack))
- **Notes**: Uninstalls your app from a workspace.
- **Signature**: `AppsUninstall(string? token, string? clientId, string? clientSecret, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `clientId` — nullable, no default → **must pass explicitly**
  - `clientSecret` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `client_id` ← `clientId`, `client_secret` ← `clientSecret`
- **Returns**: `AppsUninstallschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
