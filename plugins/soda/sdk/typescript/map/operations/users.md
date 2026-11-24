<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 8 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1UserGroupsUserGroupId

- **Signature**: `deleteApiV1UserGroupsUserGroupId(request: Users.DeleteApiV1UserGroupsUserGroupIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Users.DeleteApiV1UserGroupsUserGroupIdError>`
- **Wire**: `DELETE /api/v1/userGroups/{userGroupId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SodaError` with `kind: "api"`, an instance of `Users.DeleteApiV1UserGroupsUserGroupIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.DeleteApiV1UserGroupsUserGroupIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userGroupId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1UserGroups

- **Signature**: `getApiV1UserGroups(request?: Users.GetApiV1UserGroupsRequest, options?: RequestOptions): ApiPromise<PublicApiUserGroupsResponse, Users.GetApiV1UserGroupsError>`
- **Wire**: `GET /api/v1/userGroups`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiUserGroupsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Users.GetApiV1UserGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetApiV1UserGroupsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `search` | `query` | `string` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUserGroupsResponse` | `publicApiUserGroupsResponseSchema` | `src/models/public-api-user-groups-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1UserGroupsUserGroupId

- **Signature**: `getApiV1UserGroupsUserGroupId(request: Users.GetApiV1UserGroupsUserGroupIdRequest, options?: RequestOptions): ApiPromise<UserGroupContentDto, Users.GetApiV1UserGroupsUserGroupIdError>`
- **Wire**: `GET /api/v1/userGroups/{userGroupId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserGroupContentDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Users.GetApiV1UserGroupsUserGroupIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetApiV1UserGroupsUserGroupIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userGroupId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserGroupContentDto` | `userGroupContentDtoSchema` | `src/models/user-group-content-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1Users

- **Signature**: `getApiV1Users(request?: Users.GetApiV1UsersRequest, options?: RequestOptions): ApiPromise<PublicApiUsersResponse, Users.GetApiV1UsersError>`
- **Wire**: `GET /api/v1/users`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiUsersResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Users.GetApiV1UsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetApiV1UsersRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `search` | `query` | `string` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUsersResponse` | `publicApiUsersResponseSchema` | `src/models/public-api-users-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1UserGroups

- **Signature**: `postApiV1UserGroups(request: Users.PostApiV1UserGroupsRequest, options?: RequestOptions): ApiPromise<undefined, Users.PostApiV1UserGroupsError>`
- **Wire**: `POST /api/v1/userGroups`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `Users.PostApiV1UserGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.PostApiV1UserGroupsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiCreateUserGroupRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateUserGroupRequestDto` | `publicApiCreateUserGroupRequestDtoSchema` | `src/models/public-api-create-user-group-request-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1UserGroupsUserGroupId

- **Signature**: `postApiV1UserGroupsUserGroupId(request: Users.PostApiV1UserGroupsUserGroupIdRequest, options?: RequestOptions): ApiPromise<UserGroupContentDto, Users.PostApiV1UserGroupsUserGroupIdError>`
- **Wire**: `POST /api/v1/userGroups/{userGroupId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserGroupContentDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Users.PostApiV1UserGroupsUserGroupIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.PostApiV1UserGroupsUserGroupIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userGroupId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateUserGroupRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateUserGroupRequestDto` | `publicApiUpdateUserGroupRequestDtoSchema` | `src/models/public-api-update-user-group-request-dto.ts` |
| `UserGroupContentDto` | `userGroupContentDtoSchema` | `src/models/user-group-content-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1Users

- **Signature**: `postApiV1Users(request: Users.PostApiV1UsersRequest, options?: RequestOptions): ApiPromise<PublicApiInviteUserResponse, Users.PostApiV1UsersError>`
- **Wire**: `POST /api/v1/users`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiInviteUserResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Users.PostApiV1UsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.PostApiV1UsersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiInviteUserRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiInviteUserRequestDto` | `publicApiInviteUserRequestDtoSchema` | `src/models/public-api-invite-user-request-dto.ts` |
| `PublicApiInviteUserResponse` | `publicApiInviteUserResponseSchema` | `src/models/public-api-invite-user-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1UsersUserIdDisable

- **Signature**: `postApiV1UsersUserIdDisable(request: Users.PostApiV1UsersUserIdDisableRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Users.PostApiV1UsersUserIdDisableError>`
- **Wire**: `POST /api/v1/users/{userId}/disable`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SodaError` with `kind: "api"`, an instance of `Users.PostApiV1UsersUserIdDisableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.PostApiV1UsersUserIdDisableRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

