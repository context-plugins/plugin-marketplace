<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorization — operations

Accessor: `client.authorization` · Source: `leadspace/apis/authorization.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.authorization.create_authorization_token

- **Route**: `POST /oauth/authorize`
- **Signature**: `def create_authorization_token(body: AuthorizationRequest | AuthorizationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AuthorizationResponse`
- **Returns (raw)**: `ApiResult[AuthorizationResponse, CreateAuthorizationTokenErrorBody]`
- **Error**: `CreateAuthorizationTokenErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `AuthorizationRequest` | `leadspace/models/authorization_request.py` |
| `AuthorizationRequestDict` | `leadspace/models/authorization_request.py` |
| `AuthorizationResponse` | `leadspace/models/authorization_response.py` |
| `CreateAuthorizationTokenErrorBody` | `leadspace/errors/create_authorization_token_error.py` |

### client.authorization.refresh_authorization_token

- **Route**: `PUT /oauth/authorize`
- **Signature**: `def refresh_authorization_token(body: RefreshRequest | RefreshRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AuthorizationResponse`
- **Returns (raw)**: `ApiResult[AuthorizationResponse, RefreshAuthorizationTokenErrorBody]`
- **Error**: `RefreshAuthorizationTokenErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `RefreshRequest` | `leadspace/models/refresh_request.py` |
| `RefreshRequestDict` | `leadspace/models/refresh_request.py` |
| `AuthorizationResponse` | `leadspace/models/authorization_response.py` |
| `RefreshAuthorizationTokenErrorBody` | `leadspace/errors/refresh_authorization_token_error.py` |

