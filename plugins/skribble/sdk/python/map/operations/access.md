<!-- Generated file — do not edit; regenerated with the SDK. -->

# Access — operations

Accessor: `client.access` · Source: `skribble/apis/access.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.access.access_login

- **Route**: `POST /access/login`
- **Server**: `default`
- **Signature**: `def access_login(username: str, api_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `username`, `api_key`
- **Params**: `username` — form field · `api_key` — form field `api-key`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, AccessLoginErrorBody]`
- **Error**: `AccessLoginErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 403, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessLoginErrorBody` | `skribble/errors/access_login_error.py` |
| `Problem` | `skribble/models/problem.py` |

