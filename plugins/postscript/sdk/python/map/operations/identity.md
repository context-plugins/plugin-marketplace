<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identity — operations

Accessor: `client.identity` · Source: `postscript/apis/identity.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.identity.verify_identity

- **Route**: `GET /api/v2/me`
- **Auth**: `sec0`
- **Signature**: `def verify_identity(*, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `ApiV2MeResponse`
- **Returns (raw)**: `ApiResult[ApiV2MeResponse, VerifyIdentityErrorBody]`
- **Error**: `VerifyIdentityErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Me400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2MeResponse` | `postscript/models/api_v2_me_response.py` |
| `VerifyIdentityErrorBody` | `postscript/errors/verify_identity_error.py` |
| `ApiV2Me400Error1` | `postscript/models/api_v2_me400_error1.py` |

