<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apps — operations

Accessor: `client.apps` · Source: `bitly/apis/apps.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.apps.get_o_auth_app

- **Route**: `GET /apps/{client_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_o_auth_app(client_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `client_id`
- **Params**: `client_id` — path
- **Returns (parsed)**: `OAuthApp`
- **Returns (raw)**: `ApiResult[OAuthApp, GetOAuthAppErrorBody]`
- **Error**: `GetOAuthAppErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OAuthApp` | `bitly/models/o_auth_app.py` |
| `GetOAuthAppErrorBody` | `bitly/errors/get_o_auth_app_error.py` |
| `Error` | `bitly/models/error.py` |

