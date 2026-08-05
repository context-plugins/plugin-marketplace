# AuthenticationExtrasConvert — operations

Accessor: `client.AuthenticationExtrasConvert` · Source: `Api/AuthenticationExtrasConvert.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ConvertAccessToken
- **HTTP**: `POST /oauth/authorize/vimeo_oauth1` (Default (api))
- **Notes**: This method exchanges a legacy Advanced API OAuth 1 token for an API v3 OAuth 2 token.
- **Signature**: `ConvertAccessToken(OauthAuthorizeVimeoOauth1Request body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Auth`
- **Error**: `SdkException<ConvertAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthError(out AuthError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
