# AdminAppsRestricted — operations

Accessor: `client.AdminAppsRestricted` · Source: `Api/AdminAppsRestricted.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminAppsRestrictedList
- **HTTP**: `GET /admin.apps.restricted.list` (Default (slack))
- **Notes**: List restricted apps for an org or workspace.
- **Signature**: `AdminAppsRestrictedList(string token, int? limit, string? cursor, string? teamId, string? enterpriseId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`limit` … `enterpriseId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `team_id` ← `teamId`, `enterprise_id` ← `enterpriseId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminAppsRestrictedList1
- **HTTP**: `GET /admin.apps.restricted.list` (Default (slack))
- **Notes**: List restricted apps for an org or workspace.
- **Signature**: `AdminAppsRestrictedList1(string token, int? limit, string? cursor, string? teamId, string? enterpriseId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`limit` … `enterpriseId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `team_id` ← `teamId`, `enterprise_id` ← `enterpriseId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
