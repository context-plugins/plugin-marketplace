# Oauth — operations

Accessor: `client.Oauth` · Source: `Api/Oauth.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### OauthAccess
- **HTTP**: `GET /oauth.access` (Default (slack))
- **Notes**: Exchanges a temporary OAuth verifier code for an access token.
- **Signature**: `OauthAccess(string? clientId, string? clientSecret, string? code, string? redirectUri, bool? singleChannel, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`clientId` … `singleChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `client_id` ← `clientId`, `client_secret` ← `clientSecret`, `code` ← `code`, `redirect_uri` ← `redirectUri`, `single_channel` ← `singleChannel`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### OauthAccess1
- **HTTP**: `GET /oauth.access` (Default (slack))
- **Notes**: Exchanges a temporary OAuth verifier code for an access token.
- **Signature**: `OauthAccess1(string? clientId, string? clientSecret, string? code, string? redirectUri, bool? singleChannel, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`clientId` … `singleChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `client_id` ← `clientId`, `client_secret` ← `clientSecret`, `code` ← `code`, `redirect_uri` ← `redirectUri`, `single_channel` ← `singleChannel`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### OauthToken
- **HTTP**: `GET /oauth.token` (Default (slack))
- **Notes**: Exchanges a temporary OAuth verifier code for a workspace token.
- **Signature**: `OauthToken(string? clientId, string? clientSecret, string? code, string? redirectUri, bool? singleChannel, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`clientId` … `singleChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `client_id` ← `clientId`, `client_secret` ← `clientSecret`, `code` ← `code`, `redirect_uri` ← `redirectUri`, `single_channel` ← `singleChannel`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### OauthToken1
- **HTTP**: `GET /oauth.token` (Default (slack))
- **Notes**: Exchanges a temporary OAuth verifier code for a workspace token.
- **Signature**: `OauthToken1(string? clientId, string? clientSecret, string? code, string? redirectUri, bool? singleChannel, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`clientId` … `singleChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `client_id` ← `clientId`, `client_secret` ← `clientSecret`, `code` ← `code`, `redirect_uri` ← `redirectUri`, `single_channel` ← `singleChannel`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

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

### OauthV2Access1
- **HTTP**: `GET /oauth.v2.access` (Default (slack))
- **Notes**: Exchanges a temporary OAuth verifier code for an access token.
- **Signature**: `OauthV2Access1(string code, string? clientId, string? clientSecret, string? redirectUri, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `clientId` — nullable, no default → **must pass explicitly**
  - `clientSecret` — nullable, no default → **must pass explicitly**
  - `redirectUri` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `code` ← `code`, `client_id` ← `clientId`, `client_secret` ← `clientSecret`, `redirect_uri` ← `redirectUri`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
