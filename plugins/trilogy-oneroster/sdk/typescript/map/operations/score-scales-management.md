<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScoreScalesManagement — operations

Accessor: `client.scoreScalesManagement` · Source: `src/resources/score-scales-management.ts` · 6 operations · Request and error types: namespace `ScoreScalesManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `one-roster-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createScoreScale

- **Signature**: `createScoreScale(request: ScoreScalesManagement.CreateScoreScaleRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ScoreScalesResponse1, ScoreScalesManagement.CreateScoreScaleError>`
- **Wire**: `POST /ims/oneroster/gradebook/v1p2/scoreScales/`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2ScoreScalesResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ScoreScalesManagement.CreateScoreScaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScoreScalesManagement.CreateScoreScaleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImsOnerosterGradebookV1P2ScoreScalesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2ScoreScalesRequest` | `imsOnerosterGradebookV1P2ScoreScalesRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-score-scales-request.ts` |
| `ImsOnerosterGradebookV1P2ScoreScalesResponse1` | `imsOnerosterGradebookV1P2ScoreScalesResponse1Schema` | `src/models/ims-oneroster-gradebook-v1-p2-score-scales-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### deleteScoreScale

- **Signature**: `deleteScoreScale(request: ScoreScalesManagement.DeleteScoreScaleRequest, options?: RequestOptions): ApiPromise<undefined, ScoreScalesManagement.DeleteScoreScaleError>`
- **Wire**: `DELETE /ims/oneroster/gradebook/v1p2/scoreScales/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ScoreScalesManagement.DeleteScoreScaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScoreScalesManagement.DeleteScoreScaleRequest` (1):

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

### getAllScoreScales

- **Signature**: `getAllScoreScales(request: ScoreScalesManagement.GetAllScoreScalesRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ScoreScalesResponse, ScoreScalesManagement.GetAllScoreScalesError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/scoreScales/`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ScoreScalesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ScoreScalesManagement.GetAllScoreScalesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScoreScalesManagement.GetAllScoreScalesRequest` (7):

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
| `ImsOnerosterGradebookV1P2ScoreScalesResponse` | `imsOnerosterGradebookV1P2ScoreScalesResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-score-scales-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getScoreScale

- **Signature**: `getScoreScale(request: ScoreScalesManagement.GetScoreScaleRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ScoreScalesResponse2, ScoreScalesManagement.GetScoreScaleError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/scoreScales/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ScoreScalesResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ScoreScalesManagement.GetScoreScaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScoreScalesManagement.GetScoreScaleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2ScoreScalesResponse2` | `imsOnerosterGradebookV1P2ScoreScalesResponse2Schema` | `src/models/ims-oneroster-gradebook-v1-p2-score-scales-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getScoreScalesForSchool

- **Signature**: `getScoreScalesForSchool(request: ScoreScalesManagement.GetScoreScalesForSchoolRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse, ScoreScalesManagement.GetScoreScalesForSchoolError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/schools/{sourcedId}/scoreScales`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ScoreScalesManagement.GetScoreScalesForSchoolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScoreScalesManagement.GetScoreScalesForSchoolRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse` | `imsOnerosterGradebookV1P2SchoolsScoreScalesResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-schools-score-scales-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### updateScoreScale

- **Signature**: `updateScoreScale(request: ScoreScalesManagement.UpdateScoreScaleRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ScoreScalesResponse2, ScoreScalesManagement.UpdateScoreScaleError>`
- **Wire**: `PUT /ims/oneroster/gradebook/v1p2/scoreScales/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2ScoreScalesResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ScoreScalesManagement.UpdateScoreScaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScoreScalesManagement.UpdateScoreScaleRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterGradebookV1P2ScoreScalesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2ScoreScalesRequest` | `imsOnerosterGradebookV1P2ScoreScalesRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-score-scales-request.ts` |
| `ImsOnerosterGradebookV1P2ScoreScalesResponse2` | `imsOnerosterGradebookV1P2ScoreScalesResponse2Schema` | `src/models/ims-oneroster-gradebook-v1-p2-score-scales-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

