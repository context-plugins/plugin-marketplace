<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorization — operations

Accessor: `client.authorization` · Source: `dope_security/apis/authorization.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.authorization.generate_access_token

- **Route**: `POST /partner/oauth/token`
- **Signature**: `def generate_access_token(body: PartnerOauthTokenRequest | PartnerOauthTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PartnerOauthTokenResponse`
- **Returns (raw)**: `ApiResult[PartnerOauthTokenResponse, GenerateAccessTokenErrorBody]`
- **Error**: `GenerateAccessTokenErrorBody` — **Case A (typed)**
- **Error arms**: `OAuthError` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PartnerOauthTokenRequest` | `dope_security/models/partner_oauth_token_request.py` |
| `PartnerOauthTokenRequestDict` | `dope_security/models/partner_oauth_token_request.py` |
| `PartnerOauthTokenResponse` | `dope_security/models/partner_oauth_token_response.py` |
| `GenerateAccessTokenErrorBody` | `dope_security/errors/generate_access_token_error.py` |
| `OAuthError` | `dope_security/models/o_auth_error.py` |

