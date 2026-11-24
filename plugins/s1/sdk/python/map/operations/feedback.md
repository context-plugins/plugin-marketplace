<!-- Generated file — do not edit; regenerated with the SDK. -->

# Feedback — operations

Accessor: `client.feedback` · Source: `s1/apis/feedback.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.feedback.feedback

- **Route**: `POST /feedback`
- **Auth**: `bearer_auth`
- **Signature**: `def feedback(body: FeedbackRequest | FeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FeedbackResponse`
- **Returns (raw)**: `ApiResult[FeedbackResponse, FeedbackErrorBody]`
- **Error**: `FeedbackErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 403, 413, 415, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FeedbackRequest` | `s1/models/feedback_request.py` |
| `FeedbackRequestDict` | `s1/models/feedback_request.py` |
| `FeedbackResponse` | `s1/models/feedback_response.py` |
| `FeedbackErrorBody` | `s1/errors/feedback_error.py` |
| `ApiErrorModel` | `s1/models/api_error_model.py` |

