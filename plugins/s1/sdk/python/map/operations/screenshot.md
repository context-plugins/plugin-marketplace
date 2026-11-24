<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screenshot — operations

Accessor: `client.screenshot` · Source: `s1/apis/screenshot.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.screenshot.screenshot

- **Route**: `POST /screenshot`
- **Auth**: `bearer_auth`
- **Signature**: `def screenshot(body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, ScreenshotErrorBody]`
- **Error**: `ScreenshotErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402, 403, 422, 429, 500, 502, 503, 504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScreenshotRequest` | `s1/models/screenshot_request.py` |
| `ScreenshotRequestDict` | `s1/models/screenshot_request.py` |
| `ScreenshotErrorBody` | `s1/errors/screenshot_error.py` |
| `ApiErrorModel` | `s1/models/api_error_model.py` |

