<!-- Generated file — do not edit; regenerated with the SDK. -->

# Actions — operations

Accessor: `client.actions` · Source: `deliverd/apis/actions.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.actions.get_api_v1_actions

- **Route**: `GET /api/v1/actions`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_actions(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1ActionsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ActionsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ActionsResponse1` | `deliverd/models/api_v1_actions_response1.py` |

### client.actions.post_api_v1_actions

- **Route**: `POST /api/v1/actions`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_actions(*, body: ApiV1ActionsRequest | ApiV1ActionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ActionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ActionsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ActionsRequest` | `deliverd/models/api_v1_actions_request.py` |
| `ApiV1ActionsRequestDict` | `deliverd/models/api_v1_actions_request.py` |
| `ApiV1ActionsResponse` | `deliverd/models/api_v1_actions_response.py` |

