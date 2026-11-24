<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tokens — operations

Accessor: `client.tokens` · Source: `beehiiv/apis/tokens.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tokens.introspect

- **Route**: `POST /oauth/introspect`
- **Server**: `default_o_auth2_authorizations_api`
- **Signature**: `def introspect(*, body: OauthIntrospectRequest | OauthIntrospectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IntrospectionResponse`
- **Returns (raw)**: `ApiResult[IntrospectionResponse, IntrospectErrorBody]`
- **Error**: `IntrospectErrorBody` — **Case A (typed)**
- **Error arms**: `OAuthError` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OauthIntrospectRequest` | `beehiiv/models/oauth_introspect_request.py` |
| `OauthIntrospectRequestDict` | `beehiiv/models/oauth_introspect_request.py` |
| `IntrospectionResponse` | `beehiiv/models/introspection_response.py` |
| `IntrospectErrorBody` | `beehiiv/errors/introspect_error.py` |
| `OAuthError` | `beehiiv/models/o_auth_error.py` |

### client.tokens.revoke

- **Route**: `POST /oauth/revoke`
- **Server**: `default_o_auth2_authorizations_api`
- **Signature**: `def revoke(*, body: OauthRevokeRequest | OauthRevokeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RevokeErrorBody]`
- **Error**: `RevokeErrorBody` — **Case A (typed)**
- **Error arms**: `OAuthError` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OauthRevokeRequest` | `beehiiv/models/oauth_revoke_request.py` |
| `OauthRevokeRequestDict` | `beehiiv/models/oauth_revoke_request.py` |
| `RevokeErrorBody` | `beehiiv/errors/revoke_error.py` |
| `OAuthError` | `beehiiv/models/o_auth_error.py` |

### client.tokens.token

- **Route**: `POST /oauth/token`
- **Server**: `default_o_auth2_authorizations_api`
- **Signature**: `def token(*, body: OauthTokenRequest | OauthTokenRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TokenResponse`
- **Returns (raw)**: `ApiResult[TokenResponse, TokenErrorBody]`
- **Error**: `TokenErrorBody` — **Case A (typed)**
- **Error arms**: `OAuthError` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OauthTokenRequest` | `beehiiv/models/oauth_token_request.py` |
| `OauthTokenRequestDict` | `beehiiv/models/oauth_token_request.py` |
| `TokenResponse` | `beehiiv/models/token_response.py` |
| `TokenErrorBody` | `beehiiv/errors/token_error.py` |
| `OAuthError` | `beehiiv/models/o_auth_error.py` |

### client.tokens.token_info

- **Route**: `GET /oauth/token/info`
- **Server**: `default_o_auth2_authorizations_api`
- **Signature**: `def token_info(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `TokenInfoResponse`
- **Returns (raw)**: `ApiResult[TokenInfoResponse, TokenInfoErrorBody]`
- **Error**: `TokenInfoErrorBody` — **Case A (typed)**
- **Error arms**: `OAuthError` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TokenInfoResponse` | `beehiiv/models/token_info_response.py` |
| `TokenInfoErrorBody` | `beehiiv/errors/token_info_error.py` |
| `OAuthError` | `beehiiv/models/o_auth_error.py` |

