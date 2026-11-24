<!-- Generated file — do not edit; regenerated with the SDK. -->

# Completions — operations

Accessor: `client.completions` · Source: `hud/apis/completions.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.completions.post_completion_v2_completions_post

- **Route**: `POST /v2/completions`
- **Signature**: `def post_completion_v2_completions_post(body: CompletionRequest | CompletionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CompletionResponse`
- **Returns (raw)**: `ApiResult[CompletionResponse, PostCompletionV2CompletionsPostErrorBody]`
- **Error**: `PostCompletionV2CompletionsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompletionRequest` | `hud/models/completion_request.py` |
| `CompletionRequestDict` | `hud/models/completion_request.py` |
| `CompletionResponse` | `hud/models/completion_response.py` |
| `PostCompletionV2CompletionsPostErrorBody` | `hud/errors/post_completion_v2_completions_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

