<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `juri_sign/apis/authentication.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.authentication.create_sandbox_token

- **Route**: `POST /auth/sandbox-token`
- **Signature**: `def create_sandbox_token(body: AuthSandboxTokenRequest | AuthSandboxTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AuthSandboxTokenResponse`
- **Returns (raw)**: `ApiResult[AuthSandboxTokenResponse, CreateSandboxTokenErrorBody]`
- **Error**: `CreateSandboxTokenErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [403, 429] · `ValidationError1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuthSandboxTokenRequest` | `juri_sign/models/auth_sandbox_token_request.py` |
| `AuthSandboxTokenRequestDict` | `juri_sign/models/auth_sandbox_token_request.py` |
| `AuthSandboxTokenResponse` | `juri_sign/models/auth_sandbox_token_response.py` |
| `CreateSandboxTokenErrorBody` | `juri_sign/errors/create_sandbox_token_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `ValidationError1` | `juri_sign/models/validation_error1.py` |

### client.authentication.create_token

- **Route**: `POST /auth/token`
- **Signature**: `def create_token(body: AuthTokenRequest | AuthTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AuthTokenResponse`
- **Returns (raw)**: `ApiResult[AuthTokenResponse, CreateTokenErrorBody]`
- **Error**: `CreateTokenErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [403, 429] · `ValidationError1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuthTokenRequest` | `juri_sign/models/auth_token_request.py` |
| `AuthTokenRequestDict` | `juri_sign/models/auth_token_request.py` |
| `AuthTokenResponse` | `juri_sign/models/auth_token_response.py` |
| `CreateTokenErrorBody` | `juri_sign/errors/create_token_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `ValidationError1` | `juri_sign/models/validation_error1.py` |

### client.authentication.get_status

- **Route**: `GET /`
- **Signature**: `def get_status(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Response`
- **Returns (raw)**: `ApiResult[Response, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Response` | `juri_sign/models/response.py` |

### client.authentication.revoke_token

- **Route**: `DELETE /auth/token`
- **Auth**: `bearer_auth`
- **Signature**: `def revoke_token(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, RevokeTokenErrorBody]`
- **Error**: `RevokeTokenErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `RevokeTokenErrorBody` | `juri_sign/errors/revoke_token_error.py` |

