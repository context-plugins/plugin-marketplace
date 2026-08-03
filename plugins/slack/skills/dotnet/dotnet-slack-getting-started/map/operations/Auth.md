# Auth — operations

Accessor: `client.Auth` · Source: `Api/Auth.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AuthRevoke
- **HTTP**: `GET /auth.revoke` (Default (slack))
- **Notes**: Revokes a token.
- **Signature**: `AuthRevoke(string token, bool? test, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `test` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `test` ← `test`
- **Returns**: `AuthRevokeschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AuthTest
- **HTTP**: `GET /auth.test` (Default (slack))
- **Notes**: Checks authentication &amp; identity.
- **Signature**: `AuthTest(string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AuthTestsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
