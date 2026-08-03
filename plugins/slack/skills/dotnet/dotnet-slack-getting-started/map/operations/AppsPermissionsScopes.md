# AppsPermissionsScopes — operations

Accessor: `client.AppsPermissionsScopes` · Source: `Api/AppsPermissionsScopes.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

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
