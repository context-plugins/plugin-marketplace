<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeedbackApi — operations

Accessor: `client.feedbackApi` · Source: `src/resources/feedback-api.ts` · 2 operations · Request and error types: namespace `FeedbackApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeFeedback

- **Signature**: `describeFeedback(request?: FeedbackApi.DescribeFeedbackRequest, options?: RequestOptions): ApiPromise<DescribeFeedbackResponse, FeedbackApi.DescribeFeedbackError>`
- **Wire**: `POST /feedback`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DescribeFeedbackResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `FeedbackApi.DescribeFeedbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeedbackApi.DescribeFeedbackRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FeedbackRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedbackRequest` | `feedbackRequestSchema` | `src/models/feedback-request.ts` |
| `DescribeFeedbackResponse` | `describeFeedbackResponseSchema` | `src/models/describe-feedback-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### putFeedback

- **Signature**: `putFeedback(request?: FeedbackApi.PutFeedbackRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, FeedbackApi.PutFeedbackError>`
- **Wire**: `PUT /feedback`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `FeedbackApi.PutFeedbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeedbackApi.PutFeedbackRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DescribeFeedbackResponse` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DescribeFeedbackResponse` | `describeFeedbackResponseSchema` | `src/models/describe-feedback-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

