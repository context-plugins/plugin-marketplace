<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResultsManagement — operations

Accessor: `client.resultsManagement` · Source: `src/resources/results-management.ts` · 5 operations · Request and error types: namespace `ResultsManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `one-roster-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createResult

- **Signature**: `createResult(request: ResultsManagement.CreateResultRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ResultsResponse1, ResultsManagement.CreateResultError>`
- **Wire**: `POST /ims/oneroster/gradebook/v1p2/results/`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2ResultsResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ResultsManagement.CreateResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResultsManagement.CreateResultRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImsOnerosterGradebookV1P2ResultsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2ResultsRequest` | `imsOnerosterGradebookV1P2ResultsRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-results-request.ts` |
| `ImsOnerosterGradebookV1P2ResultsResponse1` | `imsOnerosterGradebookV1P2ResultsResponse1Schema` | `src/models/ims-oneroster-gradebook-v1-p2-results-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### deleteResult

- **Signature**: `deleteResult(request: ResultsManagement.DeleteResultRequest, options?: RequestOptions): ApiPromise<undefined, ResultsManagement.DeleteResultError>`
- **Wire**: `DELETE /ims/oneroster/gradebook/v1p2/results/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ResultsManagement.DeleteResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResultsManagement.DeleteResultRequest` (1):

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

### getAllResults

- **Signature**: `getAllResults(request: ResultsManagement.GetAllResultsRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ResultsResponse, ResultsManagement.GetAllResultsError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/results/`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ResultsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ResultsManagement.GetAllResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResultsManagement.GetAllResultsRequest` (7):

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
| `ImsOnerosterGradebookV1P2ResultsResponse` | `imsOnerosterGradebookV1P2ResultsResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-results-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getResult

- **Signature**: `getResult(request: ResultsManagement.GetResultRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ResultsResponse2, ResultsManagement.GetResultError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/results/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ResultsResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ResultsManagement.GetResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResultsManagement.GetResultRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2ResultsResponse2` | `imsOnerosterGradebookV1P2ResultsResponse2Schema` | `src/models/ims-oneroster-gradebook-v1-p2-results-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### updateResult

- **Signature**: `updateResult(request: ResultsManagement.UpdateResultRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ResultsResponse2, ResultsManagement.UpdateResultError>`
- **Wire**: `PUT /ims/oneroster/gradebook/v1p2/results/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2ResultsResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ResultsManagement.UpdateResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResultsManagement.UpdateResultRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterGradebookV1P2ResultsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2ResultsRequest` | `imsOnerosterGradebookV1P2ResultsRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-results-request.ts` |
| `ImsOnerosterGradebookV1P2ResultsResponse2` | `imsOnerosterGradebookV1P2ResultsResponse2Schema` | `src/models/ims-oneroster-gradebook-v1-p2-results-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

