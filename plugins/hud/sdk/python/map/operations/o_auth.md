<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuth — operations

Accessor: `client.o_auth` · Source: `hud/apis/o_auth.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.o_auth.join_oauth_app_team_v2_oauth_join_post

- **Route**: `POST /v2/oauth/join`
- **Signature**: `def join_oauth_app_team_v2_oauth_join_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `OAuthJoinResponse`
- **Returns (raw)**: `ApiResult[OAuthJoinResponse, JoinOauthAppTeamV2OauthJoinPostErrorBody]`
- **Error**: `JoinOauthAppTeamV2OauthJoinPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OAuthJoinResponse` | `hud/models/o_auth_join_response.py` |
| `JoinOauthAppTeamV2OauthJoinPostErrorBody` | `hud/errors/join_oauth_app_team_v2_oauth_join_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

