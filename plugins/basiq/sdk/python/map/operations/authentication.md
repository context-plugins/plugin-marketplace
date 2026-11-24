<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `basiq/apis/authentication.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.authentication.post_token

- **Route**: `POST /token`
- **Auth**: `api_key`
- **Signature**: `def post_token(basiq_version: str, *, scope: str | None = None, user_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `basiq_version`
- **Params**: `basiq_version` — header `basiq-version` · `scope` — form field · `user_id` — form field `userId`
- **Returns (parsed)**: `TokenResponse`
- **Returns (raw)**: `ApiResult[TokenResponse, PostTokenErrorBody]`
- **Error**: `PostTokenErrorBody` — **Case A (typed)**
- **Error arms**: `Token400Error1` [400] · `Token404Error1` [404] · `Token500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TokenResponse` | `basiq/models/token_response.py` |
| `PostTokenErrorBody` | `basiq/errors/post_token_error.py` |
| `Token400Error1` | `basiq/models/token400_error1.py` |
| `Token404Error1` | `basiq/models/token404_error1.py` |
| `Token500Error1` | `basiq/models/token500_error1.py` |

