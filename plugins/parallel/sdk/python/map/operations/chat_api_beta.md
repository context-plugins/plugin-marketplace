<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChatApiBeta — operations

Accessor: `client.chat_api_beta` · Source: `parallel/apis/chat_api_beta.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.chat_api_beta.chat_completions_v1beta_chat_completions_post

- **Route**: `POST /v1beta/chat/completions`
- **Auth**: `api_key_auth`
- **Signature**: `def chat_completions_v1beta_chat_completions_post(body: ChatCompletionRequest | ChatCompletionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ChatCompletion`
- **Returns (raw)**: `ApiResult[ChatCompletion, ChatCompletionsV1BetaChatCompletionsPostErrorBody]`
- **Error**: `ChatCompletionsV1BetaChatCompletionsPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChatCompletionRequest` | `parallel/models/chat_completion_request.py` |
| `ChatCompletionRequestDict` | `parallel/models/chat_completion_request.py` |
| `ChatCompletion` | `parallel/models/chat_completion.py` |
| `ChatCompletionsV1BetaChatCompletionsPostErrorBody` | `parallel/errors/chat_completions_v1_beta_chat_completions_post_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

