# VerifyV2AccessToken — operations

Accessor: `client.VerifyV2AccessToken` · Source: `Api/VerifyV2AccessToken.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAccessToken
- **HTTP**: `POST /v2/Services/{ServiceSid}/AccessTokens` (Default3 (verify))
- **Notes**: Create a new enrollment Access Token for the Entity
- **Signature**: `CreateAccessToken(string serviceSid, string identity, AccessTokenEnumFactorTypes factorType, string? factorFriendlyName, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `factorFriendlyName` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Identity` ← `identity`, `FactorType` ← `factorType`, `FactorFriendlyName` ← `factorFriendlyName`, `Ttl` ← `ttl`
- **Returns**: `VerifyV2ServiceAccessToken`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchAccessToken
- **HTTP**: `GET /v2/Services/{ServiceSid}/AccessTokens/{Sid}` (Default3 (verify))
- **Notes**: Fetch an Access Token for the Entity
- **Signature**: `FetchAccessToken(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2ServiceAccessToken`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
