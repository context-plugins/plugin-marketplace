<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChatApiBeta — operations

Accessor: `client.chatApiBeta` · Source: `src/resources/chat-api-beta.ts` · 1 operation · Request and error types: namespace `ChatApiBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `parallel`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### chatCompletionsV1BetaChatCompletionsPost

- **Signature**: `chatCompletionsV1BetaChatCompletionsPost(request: ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostRequest, options?: RequestOptions): ApiPromise<ChatCompletion, ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostError>`
- **Wire**: `POST /v1beta/chat/completions`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatCompletion`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChatCompletionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChatCompletionRequest` | `chatCompletionRequestSchema` | `src/models/chat-completion-request.ts` |
| `ChatCompletion` | `chatCompletionSchema` | `src/models/chat-completion.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

