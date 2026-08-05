# AppsPermissions — operations

Accessor: `client.AppsPermissions` · Source: `Api/AppsPermissions.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

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

### AppsPermissionsInfo1
- **HTTP**: `GET /apps.permissions.info` (Default (slack))
- **Notes**: Returns list of permissions this app has on a team.
- **Signature**: `AppsPermissionsInfo1(string? token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`
- **Returns**: `AppsPermissionsInfoschema1`
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

### AppsPermissionsRequest1
- **HTTP**: `GET /apps.permissions.request` (Default (slack))
- **Notes**: Allows an app to request additional scopes
- **Signature**: `AppsPermissionsRequest1(string token, string scopes, string triggerId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `scopes` ← `scopes`, `trigger_id` ← `triggerId`
- **Returns**: `AppsPermissionsRequestschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
