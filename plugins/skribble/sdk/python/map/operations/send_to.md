<!-- Generated file — do not edit; regenerated with the SDK. -->

# SendTo — operations

Accessor: `client.send_to` · Source: `skribble/apis/send_to.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.send_to.create_send_to

- **Route**: `POST /sendto`
- **Server**: `default_skribble_send_to_api`
- **Signature**: `def create_send_to(title: str, content: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `title`, `content`
- **Params**: `title` — multipart field · `content` — multipart file
- **Returns (parsed)**: `CreateSendToResponse`
- **Returns (raw)**: `ApiResult[CreateSendToResponse, CreateSendToErrorBody]`
- **Error**: `CreateSendToErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSendToResponse` | `skribble/models/create_send_to_response.py` |
| `CreateSendToErrorBody` | `skribble/errors/create_send_to_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.send_to.delete_send_to

- **Route**: `DELETE /sendto/{SEND_TO_ID}`
- **Server**: `default_skribble_send_to_api`
- **Signature**: `def delete_send_to(send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `send_to_id`, `x_accesscode`
- **Params**: `send_to_id` — path `SEND_TO_ID` · `x_accesscode` — header `X-Accesscode`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSendToErrorBody]`
- **Error**: `DeleteSendToErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSendToErrorBody` | `skribble/errors/delete_send_to_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.send_to.download_send_to

- **Route**: `GET /sendto/{SEND_TO_ID}/download`
- **Server**: `default_skribble_send_to_api`
- **Signature**: `def download_send_to(send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `send_to_id`, `x_accesscode`
- **Params**: `send_to_id` — path `SEND_TO_ID` · `x_accesscode` — header `X-Accesscode`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DownloadSendToErrorBody]`
- **Error**: `DownloadSendToErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DownloadSendToErrorBody` | `skribble/errors/download_send_to_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.send_to.track_send_to

- **Route**: `GET /sendto/{SEND_TO_ID}/track`
- **Server**: `default_skribble_send_to_api`
- **Signature**: `def track_send_to(send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `send_to_id`, `x_accesscode`
- **Params**: `send_to_id` — path `SEND_TO_ID` · `x_accesscode` — header `X-Accesscode`
- **Returns (parsed)**: `TrackSendToResponse`
- **Returns (raw)**: `ApiResult[TrackSendToResponse, TrackSendToErrorBody]`
- **Error**: `TrackSendToErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TrackSendToResponse` | `skribble/models/track_send_to_response.py` |
| `TrackSendToErrorBody` | `skribble/errors/track_send_to_error.py` |
| `Problem` | `skribble/models/problem.py` |

