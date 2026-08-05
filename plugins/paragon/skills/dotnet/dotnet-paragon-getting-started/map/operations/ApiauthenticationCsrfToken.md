# ApiauthenticationCsrfToken — operations

Accessor: `client.ApiauthenticationCsrfToken` · Source: `Api/ApiauthenticationCsrfToken.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Authorizeusingcsrf
- **HTTP**: `GET /mems/api/v1.1alpha/{org_id}/devices` (Default)
- **Notes**: Generate a CSRF token by validating user credentials. Once the CSRF token is obtained from response, it must be included in the request headers to authorize API token creation securely.
- **Signature**: `Authorizeusingcsrf(string orgId, string? xCsrftoken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
