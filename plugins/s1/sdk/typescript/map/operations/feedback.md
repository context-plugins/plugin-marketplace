<!-- Generated file — do not edit; regenerated with the SDK. -->

# Feedback — operations

Accessor: `client.feedback` · Source: `src/resources/feedback.ts` · 1 operation · Request and error types: namespace `Feedback`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `s1`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### feedback

- **Signature**: `feedback(request: Feedback.FeedbackRequestParams, options?: RequestOptions): ApiPromise<FeedbackResponse, Feedback.FeedbackError>`
- **Wire**: `POST /feedback`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedbackResponse`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Feedback.FeedbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [413] `ApiErrorModel` · `"apiErrorModel5"` [415] `ApiErrorModel` · `"apiErrorModel6"` [429] `ApiErrorModel` · `"apiErrorModel7"` [500] `ApiErrorModel` · `"apiErrorModel8"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Feedback.FeedbackRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FeedbackRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedbackRequest` | `feedbackRequestSchema` | `src/models/feedback-request.ts` |
| `FeedbackResponse` | `feedbackResponseSchema` | `src/models/feedback-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

