<!-- Generated file — do not edit; regenerated with the SDK. -->

# Completions — operations

Accessor: `client.completions` · Source: `src/resources/completions.ts` · 1 operation · Request and error types: namespace `Completions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postCompletionV2CompletionsPost

- **Signature**: `postCompletionV2CompletionsPost(request: Completions.PostCompletionV2CompletionsPostRequest, options?: RequestOptions): ApiPromise<CompletionResponse, Completions.PostCompletionV2CompletionsPostError>`
- **Wire**: `POST /v2/completions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompletionResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Completions.PostCompletionV2CompletionsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Completions.PostCompletionV2CompletionsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompletionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompletionRequest` | `completionRequestSchema` | `src/models/completion-request.ts` |
| `CompletionResponse` | `completionResponseSchema` | `src/models/completion-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

