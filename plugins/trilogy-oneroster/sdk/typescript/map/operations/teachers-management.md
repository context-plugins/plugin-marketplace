<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeachersManagement — operations

Accessor: `client.teachersManagement` · Source: `src/resources/teachers-management.ts` · 7 operations · Request and error types: namespace `TeachersManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `one-roster-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addTeacherToClass

- **Signature**: `addTeacherToClass(request: TeachersManagement.AddTeacherToClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2ClassesTeachersResponse1, TeachersManagement.AddTeacherToClassError>`
- **Wire**: `POST /ims/oneroster/rostering/v1p2/classes/{classSourcedId}/teachers`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterRosteringV1P2ClassesTeachersResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `TeachersManagement.AddTeacherToClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeachersManagement.AddTeacherToClassRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `classSourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterRosteringV1P2ClassesTeachersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2ClassesTeachersRequest` | `imsOnerosterRosteringV1P2ClassesTeachersRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-classes-teachers-request.ts` |
| `ImsOnerosterRosteringV1P2ClassesTeachersResponse1` | `imsOnerosterRosteringV1P2ClassesTeachersResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getAllTeachers

- **Signature**: `getAllTeachers(request: TeachersManagement.GetAllTeachersRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2TeachersResponse, TeachersManagement.GetAllTeachersError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/teachers/`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2TeachersResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `TeachersManagement.GetAllTeachersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeachersManagement.GetAllTeachersRequest` (7):

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
| `ImsOnerosterRosteringV1P2TeachersResponse` | `imsOnerosterRosteringV1P2TeachersResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-teachers-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getClassesForTeacher

- **Signature**: `getClassesForTeacher(request: TeachersManagement.GetClassesForTeacherRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2TeachersClassesResponse, TeachersManagement.GetClassesForTeacherError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/teachers/{teacherSourcedId}/classes`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2TeachersClassesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `TeachersManagement.GetClassesForTeacherError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeachersManagement.GetClassesForTeacherRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teacherSourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterRosteringV1P2TeachersClassesResponse` | `imsOnerosterRosteringV1P2TeachersClassesResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-teachers-classes-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getTeacher

- **Signature**: `getTeacher(request: TeachersManagement.GetTeacherRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2TeachersResponse1, TeachersManagement.GetTeacherError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/teachers/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2TeachersResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `TeachersManagement.GetTeacherError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeachersManagement.GetTeacherRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2TeachersResponse1` | `imsOnerosterRosteringV1P2TeachersResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-teachers-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getTeachersForClass

- **Signature**: `getTeachersForClass(request: TeachersManagement.GetTeachersForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2ClassesTeachersResponse, TeachersManagement.GetTeachersForClassError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/classes/{classSourcedId}/teachers`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2ClassesTeachersResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `TeachersManagement.GetTeachersForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeachersManagement.GetTeachersForClassRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `classSourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterRosteringV1P2ClassesTeachersResponse` | `imsOnerosterRosteringV1P2ClassesTeachersResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getTeachersForClassInSchool

- **Signature**: `getTeachersForClassInSchool(request: TeachersManagement.GetTeachersForClassInSchoolRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse, TeachersManagement.GetTeachersForClassInSchoolError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/schools/{schoolSourcedId}/classes/{classSourcedId}/teachers`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `TeachersManagement.GetTeachersForClassInSchoolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeachersManagement.GetTeachersForClassInSchoolRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `schoolSourcedId` | `path` | `string` | yes | — |
| `classSourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse` | `imsOnerosterRosteringV1P2SchoolsClassesTeachersResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-schools-classes-teachers-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getTeachersForSchool

- **Signature**: `getTeachersForSchool(request: TeachersManagement.GetTeachersForSchoolRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2SchoolsTeachersResponse, TeachersManagement.GetTeachersForSchoolError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/schools/{schoolSourcedId}/teachers`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2SchoolsTeachersResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `TeachersManagement.GetTeachersForSchoolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeachersManagement.GetTeachersForSchoolRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `schoolSourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterRosteringV1P2SchoolsTeachersResponse` | `imsOnerosterRosteringV1P2SchoolsTeachersResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-schools-teachers-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

