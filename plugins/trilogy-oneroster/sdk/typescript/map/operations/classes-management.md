<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClassesManagement — operations

Accessor: `client.classesManagement` · Source: `src/resources/classes-management.ts` · 22 operations · Request and error types: namespace `ClassesManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `one-roster-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addStudentToClass

- **Signature**: `addStudentToClass(request: ClassesManagement.AddStudentToClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2ClassesStudentsResponse1, ClassesManagement.AddStudentToClassError>`
- **Wire**: `POST /ims/oneroster/rostering/v1p2/classes/{classSourcedId}/students`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterRosteringV1P2ClassesStudentsResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.AddStudentToClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.AddStudentToClassRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `classSourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterRosteringV1P2ClassesStudentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2ClassesStudentsRequest` | `imsOnerosterRosteringV1P2ClassesStudentsRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-classes-students-request.ts` |
| `ImsOnerosterRosteringV1P2ClassesStudentsResponse1` | `imsOnerosterRosteringV1P2ClassesStudentsResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-classes-students-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### addTeacherToClass

- **Signature**: `addTeacherToClass(request: ClassesManagement.AddTeacherToClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2ClassesTeachersResponse1, ClassesManagement.AddTeacherToClassError>`
- **Wire**: `POST /ims/oneroster/rostering/v1p2/classes/{classSourcedId}/teachers`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterRosteringV1P2ClassesTeachersResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.AddTeacherToClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.AddTeacherToClassRequest` (2):

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

### createClass

- **Signature**: `createClass(request: ClassesManagement.CreateClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2ClassesResponse1, ClassesManagement.CreateClassError>`
- **Wire**: `POST /ims/oneroster/rostering/v1p2/classes/`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterRosteringV1P2ClassesResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.CreateClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.CreateClassRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImsOnerosterRosteringV1P2ClassesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2ClassesRequest` | `imsOnerosterRosteringV1P2ClassesRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-classes-request.ts` |
| `ImsOnerosterRosteringV1P2ClassesResponse1` | `imsOnerosterRosteringV1P2ClassesResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-classes-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### deleteClass

- **Signature**: `deleteClass(request: ClassesManagement.DeleteClassRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ClassesManagement.DeleteClassError>`
- **Wire**: `DELETE /ims/oneroster/rostering/v1p2/classes/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.DeleteClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.DeleteClassRequest` (1):

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

### getAllClasses

- **Signature**: `getAllClasses(request: ClassesManagement.GetAllClassesRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2ClassesResponse, ClassesManagement.GetAllClassesError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/classes/`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2ClassesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetAllClassesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetAllClassesRequest` (7):

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
| `ImsOnerosterRosteringV1P2ClassesResponse` | `imsOnerosterRosteringV1P2ClassesResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-classes-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getCategoriesForClass

- **Signature**: `getCategoriesForClass(request: ClassesManagement.GetCategoriesForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ClassesCategoriesResponse, ClassesManagement.GetCategoriesForClassError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/classes/{sourcedId}/categories`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ClassesCategoriesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetCategoriesForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetCategoriesForClassRequest` (8):

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
| `ImsOnerosterGradebookV1P2ClassesCategoriesResponse` | `imsOnerosterGradebookV1P2ClassesCategoriesResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-categories-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getClass

- **Signature**: `getClass(request: ClassesManagement.GetClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2ClassesResponse2, ClassesManagement.GetClassError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/classes/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2ClassesResponse2`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetClassRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2ClassesResponse2` | `imsOnerosterRosteringV1P2ClassesResponse2Schema` | `src/models/ims-oneroster-rostering-v1-p2-classes-response2.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getClassesForSchool

- **Signature**: `getClassesForSchool(request: ClassesManagement.GetClassesForSchoolRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2SchoolsClassesResponse, ClassesManagement.GetClassesForSchoolError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/schools/{schoolSourcedId}/classes`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2SchoolsClassesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetClassesForSchoolError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetClassesForSchoolRequest` (8):

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
| `ImsOnerosterRosteringV1P2SchoolsClassesResponse` | `imsOnerosterRosteringV1P2SchoolsClassesResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-schools-classes-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getClassesForStudent

- **Signature**: `getClassesForStudent(request: ClassesManagement.GetClassesForStudentRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2StudentsClassesResponse, ClassesManagement.GetClassesForStudentError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/students/{studentSourcedId}/classes`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2StudentsClassesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetClassesForStudentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetClassesForStudentRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `studentSourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterRosteringV1P2StudentsClassesResponse` | `imsOnerosterRosteringV1P2StudentsClassesResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-students-classes-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getClassesForTeacher

- **Signature**: `getClassesForTeacher(request: ClassesManagement.GetClassesForTeacherRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2TeachersClassesResponse, ClassesManagement.GetClassesForTeacherError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/teachers/{teacherSourcedId}/classes`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2TeachersClassesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetClassesForTeacherError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetClassesForTeacherRequest` (8):

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

### getClassesForTerm

- **Signature**: `getClassesForTerm(request: ClassesManagement.GetClassesForTermRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2TermsClassesResponse, ClassesManagement.GetClassesForTermError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/terms/{termSourcedId}/classes`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2TermsClassesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetClassesForTermError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetClassesForTermRequest` (8):

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
| `ImsOnerosterRosteringV1P2TermsClassesResponse` | `imsOnerosterRosteringV1P2TermsClassesResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-terms-classes-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getClassesForUser

- **Signature**: `getClassesForUser(request: ClassesManagement.GetClassesForUserRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2UsersClassesResponse, ClassesManagement.GetClassesForUserError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/users/{userSourcedId}/classes`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2UsersClassesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetClassesForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetClassesForUserRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `userSourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterRosteringV1P2UsersClassesResponse` | `imsOnerosterRosteringV1P2UsersClassesResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-users-classes-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getLineItemsForClass

- **Signature**: `getLineItemsForClass(request: ClassesManagement.GetLineItemsForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ClassesLineItemsResponse1, ClassesManagement.GetLineItemsForClassError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/classes/{sourcedId}/lineItems`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ClassesLineItemsResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetLineItemsForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetLineItemsForClassRequest` (8):

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
| `ImsOnerosterGradebookV1P2ClassesLineItemsResponse1` | `imsOnerosterGradebookV1P2ClassesLineItemsResponse1Schema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getResultsForClass

- **Signature**: `getResultsForClass(request: ClassesManagement.GetResultsForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ClassesResultsResponse, ClassesManagement.GetResultsForClassError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/classes/{sourcedId}/results`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ClassesResultsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetResultsForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetResultsForClassRequest` (8):

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
| `ImsOnerosterGradebookV1P2ClassesResultsResponse` | `imsOnerosterGradebookV1P2ClassesResultsResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-results-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getResultsForLineItemForClass

- **Signature**: `getResultsForLineItemForClass(request: ClassesManagement.GetResultsForLineItemForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse, ClassesManagement.GetResultsForLineItemForClassError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/classes/{classSourcedId}/lineItems/{lineItemSourcedId}/results`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetResultsForLineItemForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetResultsForLineItemForClassRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `classSourcedId` | `path` | `string` | yes | — |
| `lineItemSourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse` | `imsOnerosterGradebookV1P2ClassesLineItemsResultsResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-results-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getResultsForStudentForClass

- **Signature**: `getResultsForStudentForClass(request: ClassesManagement.GetResultsForStudentForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse, ClassesManagement.GetResultsForStudentForClassError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/classes/{classSourcedId}/students/{studentSourcedId}/results`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetResultsForStudentForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetResultsForStudentForClassRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `classSourcedId` | `path` | `string` | yes | — |
| `studentSourcedId` | `path` | `string` | yes | — |
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
| `ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse` | `imsOnerosterGradebookV1P2ClassesStudentsResultsResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-students-results-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getScoreScalesForClass

- **Signature**: `getScoreScalesForClass(request: ClassesManagement.GetScoreScalesForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ClassesScoreScalesResponse, ClassesManagement.GetScoreScalesForClassError>`
- **Wire**: `GET /ims/oneroster/gradebook/v1p2/classes/{sourcedId}/scoreScales`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterGradebookV1P2ClassesScoreScalesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetScoreScalesForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetScoreScalesForClassRequest` (8):

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
| `ImsOnerosterGradebookV1P2ClassesScoreScalesResponse` | `imsOnerosterGradebookV1P2ClassesScoreScalesResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-score-scales-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getStudentsForClass

- **Signature**: `getStudentsForClass(request: ClassesManagement.GetStudentsForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2ClassesStudentsResponse, ClassesManagement.GetStudentsForClassError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/classes/{classSourcedId}/students`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2ClassesStudentsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetStudentsForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetStudentsForClassRequest` (8):

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
| `ImsOnerosterRosteringV1P2ClassesStudentsResponse` | `imsOnerosterRosteringV1P2ClassesStudentsResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-classes-students-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getTeachersForClass

- **Signature**: `getTeachersForClass(request: ClassesManagement.GetTeachersForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2ClassesTeachersResponse, ClassesManagement.GetTeachersForClassError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/classes/{classSourcedId}/teachers`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2ClassesTeachersResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.GetTeachersForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.GetTeachersForClassRequest` (8):

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

### postLineItemsForClass

- **Signature**: `postLineItemsForClass(request: ClassesManagement.PostLineItemsForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ClassesLineItemsResponse, ClassesManagement.PostLineItemsForClassError>`
- **Wire**: `POST /ims/oneroster/gradebook/v1p2/classes/{classSourcedId}/lineItems`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2ClassesLineItemsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.PostLineItemsForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.PostLineItemsForClassRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `classSourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterGradebookV1P2ClassesLineItemsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2ClassesLineItemsRequest` | `imsOnerosterGradebookV1P2ClassesLineItemsRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-request.ts` |
| `ImsOnerosterGradebookV1P2ClassesLineItemsResponse` | `imsOnerosterGradebookV1P2ClassesLineItemsResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### postResultsForAcademicSessionForClass

- **Signature**: `postResultsForAcademicSessionForClass(request: ClassesManagement.PostResultsForAcademicSessionForClassRequest, options?: RequestOptions): ApiPromise<ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse, ClassesManagement.PostResultsForAcademicSessionForClassError>`
- **Wire**: `POST /ims/oneroster/gradebook/v1p2/classes/{classSourcedId}/academicSessions/{academicSessionSourcedId}/results`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.PostResultsForAcademicSessionForClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.PostResultsForAcademicSessionForClassRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `classSourcedId` | `path` | `string` | yes |
| `academicSessionSourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequest` | `imsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequestSchema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-academic-sessions-results-request.ts` |
| `ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse` | `imsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponseSchema` | `src/models/ims-oneroster-gradebook-v1-p2-classes-academic-sessions-results-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### updateClass

- **Signature**: `updateClass(request: ClassesManagement.UpdateClassRequest, options?: RequestOptions): ApiPromise<Class, ClassesManagement.UpdateClassError>`
- **Wire**: `PUT /ims/oneroster/rostering/v1p2/classes/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Class`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `ClassesManagement.UpdateClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassesManagement.UpdateClassRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterRosteringV1P2ClassesRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2ClassesRequest1` | `imsOnerosterRosteringV1P2ClassesRequest1Schema` | `src/models/ims-oneroster-rostering-v1-p2-classes-request1.ts` |
| `Class` | `classSchema` | `src/models/class.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

