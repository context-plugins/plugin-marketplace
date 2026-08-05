# SelfOauth2 — operations

Accessor: `client.SelfOauth2` · Source: `Api/SelfOauth2.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOauth2UrlForLinking
- **HTTP**: `GET /api/v1/self/oauth/{provider}` (ApiHost (api))
- **Notes**: Obtain Authorization URL for Linking
- **Signature**: `GetOauth2UrlForLinking(string provider, string? forward, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `forward` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `forward` ← `forward`
- **Returns**: `ResponseSelfOauthUrl`
- **Error**: `SdkException<GetOauth2UrlForLinkingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LinkOauth2MistAccount
- **HTTP**: `POST /api/v1/self/oauth/{provider}` (ApiHost (api))
- **Notes**: Link Mist account with an OAuth2 Provider
- **Signature**: `LinkOauth2MistAccount(string provider, CodeString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseSelfOauthLinkSuccess`
- **Error**: `SdkException<LinkOauth2MistAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseSelfOauthLinkFailure(out ResponseSelfOauthLinkFailure)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
