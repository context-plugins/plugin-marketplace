<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersManagement — operations

Accessor: `client.usersManagement` · Source: `src/resources/users-management.ts` · 7 operations · Request and error types: namespace `UsersManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `one-roster-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createUser

- **Signature**: `createUser(request: UsersManagement.CreateUserRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2UsersResponse1, UsersManagement.CreateUserError>`
- **Wire**: `POST /ims/oneroster/rostering/v1p2/users/`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterRosteringV1P2UsersResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `UsersManagement.CreateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersManagement.CreateUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ImsOnerosterRosteringV1P2UsersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2UsersRequest` | `imsOnerosterRosteringV1P2UsersRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-users-request.ts` |
| `ImsOnerosterRosteringV1P2UsersResponse1` | `imsOnerosterRosteringV1P2UsersResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-users-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### deleteUser

- **Signature**: `deleteUser(request: UsersManagement.DeleteUserRequest, options?: RequestOptions): ApiPromise<undefined, UsersManagement.DeleteUserError>`
- **Wire**: `DELETE /ims/oneroster/rostering/v1p2/users/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `UsersManagement.DeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersManagement.DeleteUserRequest` (1):

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

### getAllUsers

- **Signature**: `getAllUsers(request: UsersManagement.GetAllUsersRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2UsersResponse, UsersManagement.GetAllUsersError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/users/`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2UsersResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `UsersManagement.GetAllUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersManagement.GetAllUsersRequest` (7):

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
| `ImsOnerosterRosteringV1P2UsersResponse` | `imsOnerosterRosteringV1P2UsersResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-users-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getClassesForUser

- **Signature**: `getClassesForUser(request: UsersManagement.GetClassesForUserRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2UsersClassesResponse, UsersManagement.GetClassesForUserError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/users/{userSourcedId}/classes`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2UsersClassesResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `UsersManagement.GetClassesForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersManagement.GetClassesForUserRequest` (8):

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

### getUser

- **Signature**: `getUser(request: UsersManagement.GetUserRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2UsersResponse1, UsersManagement.GetUserError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/users/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2UsersResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `UsersManagement.GetUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersManagement.GetUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2UsersResponse1` | `imsOnerosterRosteringV1P2UsersResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-users-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### getUserWithDemographics

- **Signature**: `getUserWithDemographics(request: UsersManagement.GetUserWithDemographicsRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2UsersDemographicsResponse, UsersManagement.GetUserWithDemographicsError>`
- **Wire**: `GET /ims/oneroster/rostering/v1p2/users/{sourcedId}/demographics`
- **Auth**: `oAuth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImsOnerosterRosteringV1P2UsersDemographicsResponse`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `UsersManagement.GetUserWithDemographicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersManagement.GetUserWithDemographicsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2UsersDemographicsResponse` | `imsOnerosterRosteringV1P2UsersDemographicsResponseSchema` | `src/models/ims-oneroster-rostering-v1-p2-users-demographics-response.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

### updateUser

- **Signature**: `updateUser(request: UsersManagement.UpdateUserRequest, options?: RequestOptions): ApiPromise<ImsOnerosterRosteringV1P2UsersResponse1, UsersManagement.UpdateUserError>`
- **Wire**: `PUT /ims/oneroster/rostering/v1p2/users/{sourcedId}`
- **Auth**: `oAuth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImsOnerosterRosteringV1P2UsersResponse1`
- **Error**: `OneRosterApiError` with `kind: "api"`, an instance of `UsersManagement.UpdateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestResponse"` [400] `BadRequestResponse` · `"unauthorizedRequestResponse"` [401] `UnauthorizedRequestResponse` · `"forbiddenResponse"` [403] `ForbiddenResponse` · `"notFoundResponse"` [404] `NotFoundResponse` · `"unprocessableEntityResponse"` [422] `UnprocessableEntityResponse` · `"tooManyRequestsResponse"` [429] `TooManyRequestsResponse` · `"internalServerErrorResponse"` [500] `InternalServerErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersManagement.UpdateUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourcedId` | `path` | `string` | yes |
| `body` | `body` | `ImsOnerosterRosteringV1P2UsersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImsOnerosterRosteringV1P2UsersRequest` | `imsOnerosterRosteringV1P2UsersRequestSchema` | `src/models/ims-oneroster-rostering-v1-p2-users-request.ts` |
| `ImsOnerosterRosteringV1P2UsersResponse1` | `imsOnerosterRosteringV1P2UsersResponse1Schema` | `src/models/ims-oneroster-rostering-v1-p2-users-response1.ts` |
| `BadRequestResponse` | `badRequestResponseSchema` | `src/models/bad-request-response.ts` |
| `UnauthorizedRequestResponse` | `unauthorizedRequestResponseSchema` | `src/models/unauthorized-request-response.ts` |
| `ForbiddenResponse` | `forbiddenResponseSchema` | `src/models/forbidden-response.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |
| `UnprocessableEntityResponse` | `unprocessableEntityResponseSchema` | `src/models/unprocessable-entity-response.ts` |
| `TooManyRequestsResponse` | `tooManyRequestsResponseSchema` | `src/models/too-many-requests-response.ts` |
| `InternalServerErrorResponse` | `internalServerErrorResponseSchema` | `src/models/internal-server-error-response.ts` |

