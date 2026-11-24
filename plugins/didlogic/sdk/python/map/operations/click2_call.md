<!-- Generated file — do not edit; regenerated with the SDK. -->

# Click2Call — operations

Accessor: `client.click2_call` · Source: `did_logic/apis/click2_call.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.click2_call.click2call_create

- **Route**: `POST /api/v1/click2call`
- **Auth**: `bearer_auth`
- **Signature**: `def click2call_create(*, body: ApiV1Click2CallRequest | ApiV1Click2CallRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1Click2CallResponse`
- **Returns (raw)**: `ApiResult[ApiV1Click2CallResponse, Click2CallCreateErrorBody]`
- **Error**: `Click2CallCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Click2Call401Error1` [401] · `ApiV1Click2Call402Error1` [402] · `ApiV1Click2Call403Error1` [403] · `ApiV1Click2Call409Error1` [409] · `ApiV1Click2Call422Error1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1Click2CallRequest` | `did_logic/models/api_v1_click2_call_request.py` |
| `ApiV1Click2CallRequestDict` | `did_logic/models/api_v1_click2_call_request.py` |
| `ApiV1Click2CallResponse` | `did_logic/models/api_v1_click2_call_response.py` |
| `Click2CallCreateErrorBody` | `did_logic/errors/click2_call_create_error.py` |
| `ApiV1Click2Call401Error1` | `did_logic/models/api_v1_click2_call401_error1.py` |
| `ApiV1Click2Call402Error1` | `did_logic/models/api_v1_click2_call402_error1.py` |
| `ApiV1Click2Call403Error1` | `did_logic/models/api_v1_click2_call403_error1.py` |
| `ApiV1Click2Call409Error1` | `did_logic/models/api_v1_click2_call409_error1.py` |
| `ApiV1Click2Call422Error1` | `did_logic/models/api_v1_click2_call422_error1.py` |

### client.click2_call.click2call_destroy

- **Route**: `DELETE /api/v1/click2call/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def click2call_destroy(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, Click2CallDestroyErrorBody]`
- **Error**: `Click2CallDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Click2Call401Error1` [401] · `ApiV1Click2Call403Error1` [403] · `ApiV1Click2Call404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Click2CallDestroyErrorBody` | `did_logic/errors/click2_call_destroy_error.py` |
| `ApiV1Click2Call401Error1` | `did_logic/models/api_v1_click2_call401_error1.py` |
| `ApiV1Click2Call403Error1` | `did_logic/models/api_v1_click2_call403_error1.py` |
| `ApiV1Click2Call404Error1` | `did_logic/models/api_v1_click2_call404_error1.py` |

### client.click2_call.click2call_show

- **Route**: `GET /api/v1/click2call/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def click2call_show(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1Click2CallResponse1`
- **Returns (raw)**: `ApiResult[ApiV1Click2CallResponse1, Click2CallShowErrorBody]`
- **Error**: `Click2CallShowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Click2Call401Error1` [401] · `ApiV1Click2Call403Error1` [403] · `ApiV1Click2Call404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1Click2CallResponse1` | `did_logic/models/api_v1_click2_call_response1.py` |
| `Click2CallShowErrorBody` | `did_logic/errors/click2_call_show_error.py` |
| `ApiV1Click2Call401Error1` | `did_logic/models/api_v1_click2_call401_error1.py` |
| `ApiV1Click2Call403Error1` | `did_logic/models/api_v1_click2_call403_error1.py` |
| `ApiV1Click2Call404Error1` | `did_logic/models/api_v1_click2_call404_error1.py` |

### client.click2_call.recordings_show

- **Route**: `GET /api/v1/recordings/{user_id}/{token}`
- **Signature**: `def recordings_show(user_id: int, token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `token`
- **Params**: `user_id` — path · `token` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RecordingsShowErrorBody]`
- **Error**: `RecordingsShowErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecordingsShowErrorBody` | `did_logic/errors/recordings_show_error.py` |
| `Error` | `did_logic/models/error.py` |

