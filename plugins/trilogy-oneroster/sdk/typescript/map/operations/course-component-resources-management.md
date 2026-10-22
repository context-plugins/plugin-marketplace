<!-- Generated file — do not edit; regenerated with the SDK. -->

# CourseComponentResourcesManagement — operations

Accessor: `client.courseComponentResourcesManagement` · Source: `src/resources/course-component-resources-management.ts` · 5 operations · Request and error types: namespace `CourseComponentResourcesManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `one-roster-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createComponentResource

- **Signature**: `createComponentResource(request: CourseComponentResourcesManagement.CreateComponentResourceRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse, CourseComponentResourcesManagement.CreateComponentResourceError>`
- **Wire**: `POST /ims/oneroster/rostering/v1p2/courses/component-resources`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `CourseComponentResourcesManagement.CreateComponentResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CourseComponentResourcesManagement.CreateComponentResourceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest` | `imsOnerosterRosteringV1P2CoursesComponentResourcesRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-request.ts` |
| `ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse` | `imsOnerosterRosteringV1P2CoursesComponentResourcesResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### deleteComponentResource

- **Signature**: `deleteComponentResource(request: CourseComponentResourcesManagement.DeleteComponentResourceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, CourseComponentResourcesManagement.DeleteComponentResourceError>`
- **Wire**: `DELETE /ims/oneroster/rostering/v1p2/courses/component-resources/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `CourseComponentResourcesManagement.DeleteComponentResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CourseComponentResourcesManagement.DeleteComponentResourceRequest` (1):

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

### getAllComponentResources

- **Signature**: `getAllComponentResources(request: CourseComponentResourcesManagement.GetAllComponentResourcesRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1, CourseComponentResourcesManagement.GetAllComponentResourcesError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/courses/component-resources`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `CourseComponentResourcesManagement.GetAllComponentResourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CourseComponentResourcesManagement.GetAllComponentResourcesRequest` (7):

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
| `ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1` | `imsOnerosterRosteringV1P2CoursesComponentResourcesResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getComponentResource

- **Signature**: `getComponentResource(request: CourseComponentResourcesManagement.GetComponentResourceRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2, CourseComponentResourcesManagement.GetComponentResourceError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/courses/component-resources/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `CourseComponentResourcesManagement.GetComponentResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CourseComponentResourcesManagement.GetComponentResourceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2` | `imsOnerosterRosteringV1P2CoursesComponentResourcesResponse2Schema` | `src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### putComponentResource

- **Signature**: `putComponentResource(request: CourseComponentResourcesManagement.PutComponentResourceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, CourseComponentResourcesManagement.PutComponentResourceError>`
- **Wire**: `PUT /ims/oneroster/rostering/v1p2/courses/component-resources/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `CourseComponentResourcesManagement.PutComponentResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CourseComponentResourcesManagement.PutComponentResourceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest` | `imsOnerosterRosteringV1P2CoursesComponentResourcesRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-request.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

