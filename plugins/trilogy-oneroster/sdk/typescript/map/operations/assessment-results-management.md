<!-- Generated file — do not edit; regenerated with the SDK. -->

# AssessmentResultsManagement — operations

Accessor: `client.assessmentResultsManagement` · Source: `src/resources/assessment-results-management.ts` · 5 operations · Request and error types: namespace `AssessmentResultsManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `one-roster-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAssessmentResult

- **Signature**: `createAssessmentResult(request: AssessmentResultsManagement.CreateAssessmentResultRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2AssessmentResultsResponse1, AssessmentResultsManagement.CreateAssessmentResultError>`
- **Wire**: `POST /ims/oneroster/gradebook/v1p2/assessmentResults/`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2AssessmentResultsResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentResultsManagement.CreateAssessmentResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentResultsManagement.CreateAssessmentResultRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImsOnerosterGradebookV1P2AssessmentResultsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2AssessmentResultsRequest` | `imsOnerosterGradebookV1P2AssessmentResultsRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-results-request.ts` |
| `ImsOnerosterGradebookV1P2AssessmentResultsResponse1` | `imsOnerosterGradebookV1P2AssessmentResultsResponse1Schema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### deleteAssessmentResult

- **Signature**: `deleteAssessmentResult(request: AssessmentResultsManagement.DeleteAssessmentResultRequest, options?: RequestOptions): ApiPromise<undefined, AssessmentResultsManagement.DeleteAssessmentResultError>`
- **Wire**: `DELETE /ims/oneroster/gradebook/v1p2/assessmentResults/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentResultsManagement.DeleteAssessmentResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentResultsManagement.DeleteAssessmentResultRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getAllAssessmentResults

- **Signature**: `getAllAssessmentResults(request: AssessmentResultsManagement.GetAllAssessmentResultsRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2AssessmentResultsResponse, AssessmentResultsManagement.GetAllAssessmentResultsError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/assessmentResults/`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2AssessmentResultsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentResultsManagement.GetAllAssessmentResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentResultsManagement.GetAllAssessmentResultsRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `fields` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `100` |
| `offset` | `query` | `number` | no | `0` |
| `sort` | `query` | `string` | no | — |
| `orderBy` | `query` | `OrderBy` | no | — |
| `filter` | `query` | `string` | no | — |
| `search` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderBy` | `orderBySchema` | `src/models/order-by.ts` |
| `ImsOnerosterGradebookV1P2AssessmentResultsResponse` | `imsOnerosterGradebookV1P2AssessmentResultsResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getAssessmentResult

- **Signature**: `getAssessmentResult(request: AssessmentResultsManagement.GetAssessmentResultRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2AssessmentResultsResponse2, AssessmentResultsManagement.GetAssessmentResultError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/assessmentResults/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2AssessmentResultsResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentResultsManagement.GetAssessmentResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentResultsManagement.GetAssessmentResultRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2AssessmentResultsResponse2` | `imsOnerosterGradebookV1P2AssessmentResultsResponse2Schema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### updateAssessmentResult

- **Signature**: `updateAssessmentResult(request: AssessmentResultsManagement.UpdateAssessmentResultRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2AssessmentResultsResponse2, AssessmentResultsManagement.UpdateAssessmentResultError>`
- **Wire**: `PUT /ims/oneroster/gradebook/v1p2/assessmentResults/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2AssessmentResultsResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentResultsManagement.UpdateAssessmentResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentResultsManagement.UpdateAssessmentResultRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterGradebookV1P2AssessmentResultsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2AssessmentResultsRequest` | `imsOnerosterGradebookV1P2AssessmentResultsRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-results-request.ts` |
| `ImsOnerosterGradebookV1P2AssessmentResultsResponse2` | `imsOnerosterGradebookV1P2AssessmentResultsResponse2Schema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

