# AuthenticationExtrasEssentials — operations

Accessor: `client.AuthenticationExtrasEssentials` · Source: `Api/AuthenticationExtrasEssentials.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteToken
- **HTTP**: `DELETE /tokens` (Default (api))
- **Notes**: This method revokes the access token that the requesting app is currently using. The token must be of the OAuth 2 type.
- **Signature**: `DeleteToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VerifyToken
- **HTTP**: `GET /oauth/verify` (Default (api))
- **Notes**: This method verifies that an OAuth 2 access token exists.
- **Signature**: `VerifyToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Auth`
- **Error**: `SdkException<VerifyTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
