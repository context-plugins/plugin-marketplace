<!-- Generated file — do not edit; regenerated with the SDK. -->

# OauthUsers — operations

Accessor: `client.oauth_users` · Source: `beehiiv/apis/oauth_users.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.oauth_users.identify

- **Route**: `GET /users/identify`
- **Server**: `default`
- **Signature**: `def identify(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `UserIdentifyResponse`
- **Returns (raw)**: `ApiResult[UserIdentifyResponse, IdentifyErrorBody]`
- **Error**: `IdentifyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserIdentifyResponse` | `beehiiv/models/user_identify_response.py` |
| `IdentifyErrorBody` | `beehiiv/errors/identify_error.py` |
| `Error` | `beehiiv/models/error.py` |

