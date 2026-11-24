<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `instacart/apis/authentication.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.authentication.generate_access_token

- **Route**: `POST /v2/oauth/token`
- **Server**: `default`
- **Signature**: `def generate_access_token(body: TokenRequest | TokenRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TokenResponse`
- **Returns (raw)**: `ApiResult[TokenResponse, GenerateAccessTokenErrorBody]`
- **Error**: `GenerateAccessTokenErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TokenRequest` | `instacart/models/token_request.py` |
| `TokenRequestDict` | `instacart/models/token_request.py` |
| `TokenResponse` | `instacart/models/token_response.py` |
| `GenerateAccessTokenErrorBody` | `instacart/errors/generate_access_token_error.py` |
| `Error` | `instacart/models/error.py` |

