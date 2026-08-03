# OauthV2 — operations

Accessor: `client.OauthV2` · Source: `Api/OauthV2.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### OauthV2Access
- **HTTP**: `GET /oauth.v2.access` (Default (slack))
- **Notes**: Exchanges a temporary OAuth verifier code for an access token.
- **Signature**: `OauthV2Access(string code, string? clientId, string? clientSecret, string? redirectUri, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `clientId` — nullable, no default → **must pass explicitly**
  - `clientSecret` — nullable, no default → **must pass explicitly**
  - `redirectUri` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `code` ← `code`, `client_id` ← `clientId`, `client_secret` ← `clientSecret`, `redirect_uri` ← `redirectUri`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
