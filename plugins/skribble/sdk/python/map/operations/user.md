<!-- Generated file — do not edit; regenerated with the SDK. -->

# User — operations

Accessor: `client.user` · Source: `skribble/apis/user.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.user.get_user_signature_qualities

- **Route**: `GET /user/signature-qualities`
- **Auth**: `bearer`
- **Server**: `default_skribble_user_api`
- **Signature**: `def get_user_signature_qualities(*, username: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `username` — query
- **Returns (parsed)**: `UserSignatureQualitiesResponse`
- **Returns (raw)**: `ApiResult[UserSignatureQualitiesResponse, GetUserSignatureQualitiesErrorBody]`
- **Error**: `GetUserSignatureQualitiesErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserSignatureQualitiesResponse` | `skribble/models/user_signature_qualities_response.py` |
| `GetUserSignatureQualitiesErrorBody` | `skribble/errors/get_user_signature_qualities_error.py` |
| `Problem` | `skribble/models/problem.py` |

