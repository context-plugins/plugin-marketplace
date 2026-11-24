<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screen — operations

Accessor: `client.screen` · Source: `deliverd/apis/screen.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.screen.post_api_v1_screen

- **Route**: `POST /api/v1/screen`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_screen(*, body: ApiV1ScreenRequest | ApiV1ScreenRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ScreenResponse`
- **Returns (raw)**: `ApiResult[ApiV1ScreenResponse, PostApiV1ScreenErrorBody]`
- **Error**: `PostApiV1ScreenErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ScreenRequest` | `deliverd/models/api_v1_screen_request.py` |
| `ApiV1ScreenRequestDict` | `deliverd/models/api_v1_screen_request.py` |
| `ApiV1ScreenResponse` | `deliverd/models/api_v1_screen_response.py` |
| `PostApiV1ScreenErrorBody` | `deliverd/errors/post_api_v1_screen_error.py` |

