# AuthenticationExtrasAuthenticate — operations

Accessor: `client.AuthenticationExtrasAuthenticate` · Source: `Api/AuthenticationExtrasAuthenticate.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ClientAuth
- **HTTP**: `POST /oauth/authorize/client` (Default (api))
- **Notes**: This method uses the OAuth protocol to authorize a client. For details on OAuth client authorization, see our Working with Authentication guide or the OAuth spec .
- **Signature**: `ClientAuth(OauthAuthorizeClientRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Auth`
- **Error**: `SdkException<ClientAuthError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
