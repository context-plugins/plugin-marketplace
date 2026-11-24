<!-- Generated file — do not edit; regenerated with the SDK. -->

# Generation — operations

Accessor: `client.generation` · Source: `src/resources/generation.ts` · 9 operations · Request and error types: namespace `Generation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sapling`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### saplingAcceptCompletion

- **Signature**: `saplingAcceptCompletion(request: Generation.SaplingAcceptCompletionRequest, options?: RequestOptions): ApiPromise<ApiV1CompleteAcceptResponse, Generation.SaplingAcceptCompletionError>`
- **Wire**: `POST /api/v1/complete/{completion_hash}/accept`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CompleteAcceptResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Generation.SaplingAcceptCompletionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1CompleteAcceptResponse11"` [400] `ApiV1CompleteAcceptResponse11` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.SaplingAcceptCompletionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `completionHash` | `path` | `completion_hash` | `string` | yes |
| `body` | `body` | — | `ApiV1CompleteAcceptRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CompleteAcceptRequest` | `apiV1CompleteAcceptRequestSchema` | `src/models/api-v1-complete-accept-request.ts` |
| `ApiV1CompleteAcceptResponse` | `apiV1CompleteAcceptResponseSchema` | `src/models/api-v1-complete-accept-response.ts` |
| `ApiV1CompleteAcceptResponse11` | `apiV1CompleteAcceptResponse11Schema` | `src/models/unions/api-v1-complete-accept-response11.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingAutocomplete

- **Signature**: `saplingAutocomplete(request: Generation.SaplingAutocompleteRequest, options?: RequestOptions): ApiPromise<ApiV1CompleteResponse1, Generation.SaplingAutocompleteError>`
- **Wire**: `POST /api/v1/complete`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CompleteResponse1`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Generation.SaplingAutocompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.SaplingAutocompleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1CompleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CompleteRequest` | `apiV1CompleteRequestSchema` | `src/models/api-v1-complete-request.ts` |
| `ApiV1CompleteResponse1` | `apiV1CompleteResponse1Schema` | `src/models/unions/api-v1-complete-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingParaphrase

- **Signature**: `saplingParaphrase(request: Generation.SaplingParaphraseRequest, options?: RequestOptions): ApiPromise<ApiV1ParaphraseResponse, Generation.SaplingParaphraseError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v1/paraphrase`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ParaphraseResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Generation.SaplingParaphraseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"apiV1Paraphrase429Error1"` [429] `ApiV1Paraphrase429Error1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.SaplingParaphraseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ParaphraseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ParaphraseRequest` | `apiV1ParaphraseRequestSchema` | `src/models/api-v1-paraphrase-request.ts` |
| `ApiV1ParaphraseResponse` | `apiV1ParaphraseResponseSchema` | `src/models/api-v1-paraphrase-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `ApiV1Paraphrase429Error1` | `apiV1Paraphrase429Error1Schema` | `src/models/api-v1-paraphrase429-error1.ts` |

### saplingRephrase

- **Signature**: `saplingRephrase(request: Generation.SaplingRephraseRequest, options?: RequestOptions): ApiPromise<ApiV1RephraseResponse, Generation.SaplingRephraseError>`
- **Wire**: `POST /api/v1/rephrase`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1RephraseResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Generation.SaplingRephraseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"apiV1Rephrase429Error1"` [429] `ApiV1Rephrase429Error1` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.SaplingRephraseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1RephraseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1RephraseRequest` | `apiV1RephraseRequestSchema` | `src/models/api-v1-rephrase-request.ts` |
| `ApiV1RephraseResponse` | `apiV1RephraseResponseSchema` | `src/models/api-v1-rephrase-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `ApiV1Rephrase429Error1` | `apiV1Rephrase429Error1Schema` | `src/models/api-v1-rephrase429-error1.ts` |

### saplingSentenceSplit

- **Signature**: `saplingSentenceSplit(request: Generation.SaplingSentenceSplitRequest, options?: RequestOptions): ApiPromise<ApiV1SentenceSplitResponse, Generation.SaplingSentenceSplitError>`
- **Wire**: `POST /api/v1/sentence_split`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SentenceSplitResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Generation.SaplingSentenceSplitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"apiV1SentenceSplit429Error1"` [429] `ApiV1SentenceSplit429Error1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.SaplingSentenceSplitRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SentenceSplitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SentenceSplitRequest` | `apiV1SentenceSplitRequestSchema` | `src/models/api-v1-sentence-split-request.ts` |
| `ApiV1SentenceSplitResponse` | `apiV1SentenceSplitResponseSchema` | `src/models/api-v1-sentence-split-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `ApiV1SentenceSplit429Error1` | `apiV1SentenceSplit429Error1Schema` | `src/models/api-v1-sentence-split429-error1.ts` |

### saplingSimplify

- **Signature**: `saplingSimplify(request: Generation.SaplingSimplifyRequest, options?: RequestOptions): ApiPromise<ApiV1SimplifyResponse, Generation.SaplingSimplifyError>`
- **Wire**: `POST /api/v1/simplify`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SimplifyResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Generation.SaplingSimplifyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.SaplingSimplifyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SimplifyRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SimplifyRequest2` | `apiV1SimplifyRequest2Schema` | `src/models/unions/api-v1-simplify-request2.ts` |
| `ApiV1SimplifyResponse` | `apiV1SimplifyResponseSchema` | `src/models/api-v1-simplify-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingSummarize

- **Signature**: `saplingSummarize(request: Generation.SaplingSummarizeRequest, options?: RequestOptions): ApiPromise<ApiV1SummarizeResponse, Generation.SaplingSummarizeError>`
- **Wire**: `POST /api/v1/summarize`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SummarizeResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Generation.SaplingSummarizeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"apiV1Summarize429Error1"` [429] `ApiV1Summarize429Error1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.SaplingSummarizeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SummarizeRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SummarizeRequest2` | `apiV1SummarizeRequest2Schema` | `src/models/unions/api-v1-summarize-request2.ts` |
| `ApiV1SummarizeResponse` | `apiV1SummarizeResponseSchema` | `src/models/api-v1-summarize-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `ApiV1Summarize429Error1` | `apiV1Summarize429Error1Schema` | `src/models/api-v1-summarize429-error1.ts` |

### saplingSummarizeFile

- **Signature**: `saplingSummarizeFile(request: Generation.SaplingSummarizeFileRequest, options?: RequestOptions): ApiPromise<ApiV1FileSummarizeResponse, Generation.SaplingSummarizeFileError>`
- **Wire**: `POST /api/v1/file-summarize`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `multipart/form-data` — every field marked `form`. `file` and `jsonParams` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1FileSummarizeResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Generation.SaplingSummarizeFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1FileSummarize400Error1"` [400] `ApiV1FileSummarize400Error1` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"apiV1FileSummarize413Error1"` [413] `ApiV1FileSummarize413Error1` · `"apiV1FileSummarize429Error1"` [429] `ApiV1FileSummarize429Error1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.SaplingSummarizeFileRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsageQuery` | `query` | `return_usage` | `boolean` | no | `false` |
| `key` | `query` | — | `string` | no | — |
| `file` | `form` | — | `FileInput` | yes | — |
| `jsonParams` | `form` | — | `FileInput` | no | — |
| `returnUsage` | `form` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1FileSummarizeResponse` | `apiV1FileSummarizeResponseSchema` | `src/models/api-v1-file-summarize-response.ts` |
| `ApiV1FileSummarize400Error1` | `apiV1FileSummarize400Error1Schema` | `src/models/api-v1-file-summarize400-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `ApiV1FileSummarize413Error1` | `apiV1FileSummarize413Error1Schema` | `src/models/api-v1-file-summarize413-error1.ts` |
| `ApiV1FileSummarize429Error1` | `apiV1FileSummarize429Error1Schema` | `src/models/api-v1-file-summarize429-error1.ts` |

### saplingTranslate

- **Signature**: `saplingTranslate(request: Generation.SaplingTranslateRequest, options?: RequestOptions): ApiPromise<ApiV1TranslateResponse, Generation.SaplingTranslateError>`
- **Wire**: `POST /api/v1/translate`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TranslateResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Generation.SaplingTranslateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Generation.SaplingTranslateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1TranslateRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TranslateRequest2` | `apiV1TranslateRequest2Schema` | `src/models/unions/api-v1-translate-request2.ts` |
| `ApiV1TranslateResponse` | `apiV1TranslateResponseSchema` | `src/models/api-v1-translate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

