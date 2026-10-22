<!-- Generated file — do not edit; regenerated with the SDK. -->

# GradingPeriodsManagement — operations

Accessor: `client.gradingPeriodsManagement` · Source: `src/resources/grading-periods-management.ts` · 7 operations · Request and error types: namespace `GradingPeriodsManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `one-roster-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createGradingPeriod

- **Signature**: `createGradingPeriod(request: GradingPeriodsManagement.CreateGradingPeriodRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2GradingPeriodsResponse1, GradingPeriodsManagement.CreateGradingPeriodError>`
- **Wire**: `POST /ims/oneroster/rostering/v1p2/gradingPeriods/`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterRosteringV1P2GradingPeriodsResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `GradingPeriodsManagement.CreateGradingPeriodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GradingPeriodsManagement.CreateGradingPeriodRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImsOnerosterRosteringV1P2GradingPeriodsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2GradingPeriodsRequest` | `imsOnerosterRosteringV1P2GradingPeriodsRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-grading-periods-request.ts` |
| `ImsOnerosterRosteringV1P2GradingPeriodsResponse1` | `imsOnerosterRosteringV1P2GradingPeriodsResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-grading-periods-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### createGradingPeriodForTerm

- **Signature**: `createGradingPeriodForTerm(request: GradingPeriodsManagement.CreateGradingPeriodForTermRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1, GradingPeriodsManagement.CreateGradingPeriodForTermError>`
- **Wire**: `POST /ims/oneroster/rostering/v1p2/terms/{termSourcedId}/gradingPeriods`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `GradingPeriodsManagement.CreateGradingPeriodForTermError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GradingPeriodsManagement.CreateGradingPeriodForTermRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `termSourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest` | `imsOnerosterRosteringV1P2TermsGradingPeriodsRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-request.ts` |
| `ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1` | `imsOnerosterRosteringV1P2TermsGradingPeriodsResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### deleteGradingPeriod

- **Signature**: `deleteGradingPeriod(request: GradingPeriodsManagement.DeleteGradingPeriodRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GradingPeriodsManagement.DeleteGradingPeriodError>`
- **Wire**: `DELETE /ims/oneroster/rostering/v1p2/gradingPeriods/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `GradingPeriodsManagement.DeleteGradingPeriodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GradingPeriodsManagement.DeleteGradingPeriodRequest` (1):

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

### getAllGradingPeriods

- **Signature**: `getAllGradingPeriods(request: GradingPeriodsManagement.GetAllGradingPeriodsRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2GradingPeriodsResponse, GradingPeriodsManagement.GetAllGradingPeriodsError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/gradingPeriods/`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2GradingPeriodsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `GradingPeriodsManagement.GetAllGradingPeriodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GradingPeriodsManagement.GetAllGradingPeriodsRequest` (7):

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
| `ImsOnerosterRosteringV1P2GradingPeriodsResponse` | `imsOnerosterRosteringV1P2GradingPeriodsResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-grading-periods-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getGradingPeriod

- **Signature**: `getGradingPeriod(request: GradingPeriodsManagement.GetGradingPeriodRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2GradingPeriodsResponse2, GradingPeriodsManagement.GetGradingPeriodError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/gradingPeriods/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2GradingPeriodsResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `GradingPeriodsManagement.GetGradingPeriodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GradingPeriodsManagement.GetGradingPeriodRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2GradingPeriodsResponse2` | `imsOnerosterRosteringV1P2GradingPeriodsResponse2Schema` | `src/models/ims-oneroster-rostering-v1-p2-grading-periods-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getGradingPeriodsForTerm

- **Signature**: `getGradingPeriodsForTerm(request: GradingPeriodsManagement.GetGradingPeriodsForTermRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse, GradingPeriodsManagement.GetGradingPeriodsForTermError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/terms/{termSourcedId}/gradingPeriods`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `GradingPeriodsManagement.GetGradingPeriodsForTermError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GradingPeriodsManagement.GetGradingPeriodsForTermRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `termSourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse` | `imsOnerosterRosteringV1P2TermsGradingPeriodsResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### updateGradingPeriod

- **Signature**: `updateGradingPeriod(request: GradingPeriodsManagement.UpdateGradingPeriodRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GradingPeriodsManagement.UpdateGradingPeriodError>`
- **Wire**: `PUT /ims/oneroster/rostering/v1p2/gradingPeriods/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `GradingPeriodsManagement.UpdateGradingPeriodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GradingPeriodsManagement.UpdateGradingPeriodRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterRosteringV1P2GradingPeriodsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2GradingPeriodsRequest` | `imsOnerosterRosteringV1P2GradingPeriodsRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-grading-periods-request.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

