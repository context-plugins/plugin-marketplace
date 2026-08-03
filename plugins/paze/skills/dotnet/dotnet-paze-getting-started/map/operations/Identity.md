# Identity — operations

Accessor: `client.Identity` · Source: `Api/Identity.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOauthToken
- **HTTP**: `POST /token` (Default (api))
- **Notes**: Creates an OAuth access token using a JWT client assertion as defined in RFC7523. The token is valid for 30 minutes.
- **Signature**: `CreateOauthToken(GrantType grantType, string clientAssertion, ClientAssertionType clientAssertionType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `grant_type` ← `grantType`, `client_assertion` ← `clientAssertion`, `client_assertion_type` ← `clientAssertionType`
- **Returns**: `OauthTokenResponse`
- **Error**: `SdkException<CreateOauthTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetSimpleError(out SimpleError)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
