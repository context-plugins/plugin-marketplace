<!-- Generated file — do not edit; regenerated with the SDK. -->

# AssessmentLineItemsManagement — operations

Accessor: `client.assessmentLineItemsManagement` · Source: `src/resources/assessment-line-items-management.ts` · 5 operations · Request and error types: namespace `AssessmentLineItemsManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `one-roster-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAssessmentLineItem

- **Signature**: `createAssessmentLineItem(request: AssessmentLineItemsManagement.CreateAssessmentLineItemRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1, AssessmentLineItemsManagement.CreateAssessmentLineItemError>`
- **Wire**: `POST /ims/oneroster/gradebook/v1p2/assessmentLineItems/`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentLineItemsManagement.CreateAssessmentLineItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentLineItemsManagement.CreateAssessmentLineItemRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImsOnerosterGradebookV1P2AssessmentLineItemsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2AssessmentLineItemsRequest` | `imsOnerosterGradebookV1P2AssessmentLineItemsRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-request.ts` |
| `ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1` | `imsOnerosterGradebookV1P2AssessmentLineItemsResponse1Schema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### deleteAssessmentLineItem

- **Signature**: `deleteAssessmentLineItem(request: AssessmentLineItemsManagement.DeleteAssessmentLineItemRequest, options?: RequestOptions): ApiPromise<undefined, AssessmentLineItemsManagement.DeleteAssessmentLineItemError>`
- **Wire**: `DELETE /ims/oneroster/gradebook/v1p2/assessmentLineItems/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentLineItemsManagement.DeleteAssessmentLineItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentLineItemsManagement.DeleteAssessmentLineItemRequest` (1):

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

### getAllAssessmentLineItems

- **Signature**: `getAllAssessmentLineItems(request: AssessmentLineItemsManagement.GetAllAssessmentLineItemsRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2AssessmentLineItemsResponse, AssessmentLineItemsManagement.GetAllAssessmentLineItemsError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/assessmentLineItems/`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2AssessmentLineItemsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentLineItemsManagement.GetAllAssessmentLineItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentLineItemsManagement.GetAllAssessmentLineItemsRequest` (7):

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
| `ImsOnerosterGradebookV1P2AssessmentLineItemsResponse` | `imsOnerosterGradebookV1P2AssessmentLineItemsResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getAssessmentLineItem

- **Signature**: `getAssessmentLineItem(request: AssessmentLineItemsManagement.GetAssessmentLineItemRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2, AssessmentLineItemsManagement.GetAssessmentLineItemError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/assessmentLineItems/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentLineItemsManagement.GetAssessmentLineItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentLineItemsManagement.GetAssessmentLineItemRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2` | `imsOnerosterGradebookV1P2AssessmentLineItemsResponse2Schema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### updateAssessmentLineItem

- **Signature**: `updateAssessmentLineItem(request: AssessmentLineItemsManagement.UpdateAssessmentLineItemRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2, AssessmentLineItemsManagement.UpdateAssessmentLineItemError>`
- **Wire**: `PUT /ims/oneroster/gradebook/v1p2/assessmentLineItems/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `AssessmentLineItemsManagement.UpdateAssessmentLineItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssessmentLineItemsManagement.UpdateAssessmentLineItemRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterGradebookV1P2AssessmentLineItemsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2AssessmentLineItemsRequest` | `imsOnerosterGradebookV1P2AssessmentLineItemsRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-request.ts` |
| `ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2` | `imsOnerosterGradebookV1P2AssessmentLineItemsResponse2Schema` | `src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

