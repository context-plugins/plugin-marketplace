# AuthenticationApi — operations

Accessor: `client.AuthenticationApi` · Source: `Api/AuthenticationApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccessToken
- **HTTP**: `POST /oauth2/token` (Default (payments))
- **Notes**: Retrieve an Access Token for desired scope using Private Key JWT Flow. Prerequisites for Private Key JWT Flow: CellPoint must be configured to use merchant's `jwks` (JSON Web Key Set) endpoint to validate Private JWT. *Flow Diagram * ! diagram_001 For more details, see Authorizations for this endpoint below:
- **Signature**: `GetAccessToken(string? grantType, string? clientAssertionType, string? clientId, Audience? audience, string? scope, string? clientAssertion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`grantType` … `clientAssertion`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `grant_type` ← `grantType`, `client_assertion_type` ← `clientAssertionType`, `client_id` ← `clientId`, `audience` ← `audience`, `scope` ← `scope`, `client_assertion` ← `clientAssertion`
- **Returns**: `TokenPost200Response`
- **Error**: `SdkException<GetAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
