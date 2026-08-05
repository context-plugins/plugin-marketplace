# AdminApps — operations

Accessor: `client.AdminApps` · Source: `Api/AdminApps.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminAppsApprove
- **HTTP**: `POST /admin.apps.approve` (Default (slack))
- **Notes**: Approve an app for installation on a workspace.
- **Signature**: `AdminAppsApprove(string token, ContentType contentType, string? appId, string? requestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `appId` — nullable, no default → **must pass explicitly**
  - `requestId` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `app_id` ← `appId`, `request_id` ← `requestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsApprove1
- **HTTP**: `POST /admin.apps.approve` (Default (slack))
- **Notes**: Approve an app for installation on a workspace.
- **Signature**: `AdminAppsApprove1(string token, ContentType contentType, string? appId, string? requestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `appId` — nullable, no default → **must pass explicitly**
  - `requestId` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `app_id` ← `appId`, `request_id` ← `requestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsRestrict
- **HTTP**: `POST /admin.apps.restrict` (Default (slack))
- **Notes**: Restrict an app for installation on a workspace.
- **Signature**: `AdminAppsRestrict(string token, ContentType contentType, string? appId, string? requestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `appId` — nullable, no default → **must pass explicitly**
  - `requestId` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `app_id` ← `appId`, `request_id` ← `requestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsRestrict1
- **HTTP**: `POST /admin.apps.restrict` (Default (slack))
- **Notes**: Restrict an app for installation on a workspace.
- **Signature**: `AdminAppsRestrict1(string token, ContentType contentType, string? appId, string? requestId, string? teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `appId` — nullable, no default → **must pass explicitly**
  - `requestId` — nullable, no default → **must pass explicitly**
  - `teamId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `app_id` ← `appId`, `request_id` ← `requestId`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
