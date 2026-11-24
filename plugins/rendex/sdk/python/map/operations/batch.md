<!-- Generated file — do not edit; regenerated with the SDK. -->

# Batch — operations

Accessor: `client.batch` · Source: `rendex/apis/batch.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.batch.post_screenshot_batch

- **Route**: `POST /v1/screenshot/batch`
- **Auth**: `bearer_auth`
- **Signature**: `def post_screenshot_batch(body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BatchResponse`
- **Returns (raw)**: `ApiResult[BatchResponse, PostScreenshotBatchErrorBody]`
- **Error**: `PostScreenshotBatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchRequest` | `rendex/models/batch_request.py` |
| `BatchRequestDict` | `rendex/models/batch_request.py` |
| `BatchResponse` | `rendex/models/batch_response.py` |
| `PostScreenshotBatchErrorBody` | `rendex/errors/post_screenshot_batch_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

