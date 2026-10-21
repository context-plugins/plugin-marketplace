<!-- Generated file — do not edit; regenerated with the SDK. -->

# Answers — operations

Accessor: `client.answers` · Source: `src/resources/answers.ts` · 5 operations · Request and error types: namespace `Answers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createanswer

- **Signature**: `createanswer(request: Answers.CreateanswerRequest, options?: RequestOptions): ApiPromise<Answer, Answers.CreateanswerError>`
- **Wire**: `POST /rest/api/v1/createanswer`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Answer`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Answers.CreateanswerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Answers.CreateanswerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `CreateAnswerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAnswerRequest` | `createAnswerRequestSchema` | `src/models/create-answer-request.ts` |
| `Answer` | `answerSchema` | `src/models/answer.ts` |

### deleteanswer

- **Signature**: `deleteanswer(request: Answers.DeleteanswerRequest, options?: RequestOptions): ApiPromise<undefined, Answers.DeleteanswerError>`
- **Wire**: `POST /rest/api/v1/deleteanswer`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Answers.DeleteanswerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Answers.DeleteanswerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `DeleteAnswerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteAnswerRequest` | `deleteAnswerRequestSchema` | `src/models/delete-answer-request.ts` |

### editanswer

- **Signature**: `editanswer(request: Answers.EditanswerRequest, options?: RequestOptions): ApiPromise<Answer, Answers.EditanswerError>`
- **Wire**: `POST /rest/api/v1/editanswer`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Answer`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Answers.EditanswerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Answers.EditanswerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `EditAnswerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EditAnswerRequest` | `editAnswerRequestSchema` | `src/models/edit-answer-request.ts` |
| `Answer` | `answerSchema` | `src/models/answer.ts` |

### getanswer

- **Signature**: `getanswer(request: Answers.GetanswerRequest, options?: RequestOptions): ApiPromise<GetAnswerResponse, Answers.GetanswerError>`
- **Wire**: `POST /rest/api/v1/getanswer`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetAnswerResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Answers.GetanswerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Answers.GetanswerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetAnswerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetAnswerRequest` | `getAnswerRequestSchema` | `src/models/get-answer-request.ts` |
| `GetAnswerResponse` | `getAnswerResponseSchema` | `src/models/get-answer-response.ts` |

### listanswers

- **Signature**: `listanswers(request: Answers.ListanswersRequest, options?: RequestOptions): ApiPromise<ListAnswersResponse, Answers.ListanswersError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /rest/api/v1/listanswers`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListAnswersResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Answers.ListanswersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Answers.ListanswersRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `ListAnswersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAnswersRequest` | `listAnswersRequestSchema` | `src/models/list-answers-request.ts` |
| `ListAnswersResponse` | `listAnswersResponseSchema` | `src/models/list-answers-response.ts` |

