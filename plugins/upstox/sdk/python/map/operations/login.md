<!-- Generated file — do not edit; regenerated with the SDK. -->

# Login — operations

Accessor: `client.login` · Source: `upstox/apis/login.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.login.authorize

- **Route**: `GET /v2/login/authorization/dialog`
- **Signature**: `def authorize(client_id: str, redirect_uri: str, *, state: str | None = None, scope: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `client_id`, `redirect_uri`
- **Params**: `client_id` — query · `redirect_uri` — query · `state` — query · `scope` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AuthorizeErrorBody]`
- **Error**: `AuthorizeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuthorizeErrorBody` | `upstox/errors/authorize_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.login.init_token_request_for_indie_user

- **Route**: `POST /v3/login/auth/token/request/{client_id}`
- **Signature**: `def init_token_request_for_indie_user(client_id: str, body: IndieUserTokenRequest | IndieUserTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `client_id`, `body`
- **Params**: `client_id` — path · `body` — JSON body
- **Returns (parsed)**: `TokenResponse`
- **Returns (raw)**: `ApiResult[TokenResponse, InitTokenRequestForIndieUserErrorBody]`
- **Error**: `InitTokenRequestForIndieUserErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IndieUserTokenRequest` | `upstox/models/indie_user_token_request.py` |
| `IndieUserTokenRequestDict` | `upstox/models/indie_user_token_request.py` |
| `TokenResponse` | `upstox/models/token_response.py` |
| `InitTokenRequestForIndieUserErrorBody` | `upstox/errors/init_token_request_for_indie_user_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.login.logout

- **Route**: `DELETE /v2/logout`
- **Auth**: `oauth2`
- **Signature**: `def logout(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `LogoutResponse`
- **Returns (raw)**: `ApiResult[LogoutResponse, LogoutErrorBody]`
- **Error**: `LogoutErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `OAuthClientException` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LogoutResponse` | `upstox/models/logout_response.py` |
| `LogoutErrorBody` | `upstox/errors/logout_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |
| `OAuthClientException` | `upstox/models/o_auth_client_exception.py` |

### client.login.token

- **Route**: `POST /v2/login/authorization/token`
- **Signature**: `def token(code: str, client_id: str, client_secret: str, redirect_uri: str, grant_type: str, *, refresh_extended_token: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `code`, `client_id`, `client_secret`, `redirect_uri`, `grant_type`
- **Params**: `code` — form field · `client_id` — form field · `client_secret` — form field · `redirect_uri` — form field · `grant_type` — form field · `refresh_extended_token` — form field
- **Returns (parsed)**: `TokenResponse`
- **Returns (raw)**: `ApiResult[TokenResponse, TokenErrorBody]`
- **Error**: `TokenErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TokenResponse` | `upstox/models/token_response.py` |
| `TokenErrorBody` | `upstox/errors/token_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

