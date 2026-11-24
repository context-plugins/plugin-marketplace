<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorizations — operations

Accessor: `client.authorizations` · Source: `beehiiv/apis/authorizations.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.authorizations.authorize

- **Route**: `GET /oauth/authorize`
- **Server**: `default_o_auth2_authorizations_api`
- **Signature**: `def authorize(client_id: str, redirect_uri: str, response_type: str, *, scope: str | None = None, state: str | None = None, code_challenge: str | None = None, code_challenge_method: CodeChallengeMethodOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `client_id`, `redirect_uri`, `response_type`
- **Params**: `client_id` — query · `redirect_uri` — query · `response_type` — query · `scope` — query · `state` — query · `code_challenge` — query · `code_challenge_method` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AuthorizeErrorBody]`
- **Error**: `AuthorizeErrorBody` — **Case A (typed)**
- **Error arms**: `OAuthError` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CodeChallengeMethodOrStr` | `beehiiv/models/enums/code_challenge_method.py` |
| `AuthorizeErrorBody` | `beehiiv/errors/authorize_error.py` |
| `OAuthError` | `beehiiv/models/o_auth_error.py` |

