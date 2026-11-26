<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 6 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createUser

- **Signature**: `createUser(request: Users.CreateUserRequest, options?: RequestOptions): ApiPromise<UserResponseDto, Users.CreateUserError>`
- **Wire**: `POST /v3/spend/users`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Users.CreateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.CreateUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `CreateUserRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateUserRequestDto` | `createUserRequestDtoSchema` | `src/models/create-user-request-dto.ts` |
| `UserResponseDto` | `userResponseDtoSchema` | `src/models/user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteUser

- **Signature**: `deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise<undefined, Users.DeleteUserError>`
- **Wire**: `DELETE /v3/spend/users/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `Users.DeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.DeleteUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCurrentUser

- **Signature**: `getCurrentUser(request?: Users.GetCurrentUserRequest, options?: RequestOptions): ApiPromise<UserResponseDto, Users.GetCurrentUserError>`
- **Wire**: `GET /v3/spend/users/current`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Users.GetCurrentUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetCurrentUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserResponseDto` | `userResponseDtoSchema` | `src/models/user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getUser

- **Signature**: `getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<UserResponseDto, Users.GetUserError>`
- **Wire**: `GET /v3/spend/users/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Users.GetUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserResponseDto` | `userResponseDtoSchema` | `src/models/user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listUsers

- **Signature**: `listUsers(request?: Users.ListUsersRequest, options?: RequestOptions): ApiPromise<PaginationResponseDtoUserResponseDto, Users.ListUsersError>`
- **Wire**: `GET /v3/spend/users`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationResponseDtoUserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Users.ListUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.ListUsersRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `nextPage` | `query` | `string` | no |
| `prevPage` | `query` | `string` | no |
| `max` | `query` | `number` | no |
| `filters` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationResponseDtoUserResponseDto` | `paginationResponseDtoUserResponseDtoSchema` | `src/models/pagination-response-dto-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateUser

- **Signature**: `updateUser(request: Users.UpdateUserRequest, options?: RequestOptions): ApiPromise<UserResponseDto, Users.UpdateUserError>`
- **Wire**: `PATCH /v3/spend/users/{userId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Users.UpdateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UpdateUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `UpdateUserRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateUserRequestDto` | `updateUserRequestDtoSchema` | `src/models/update-user-request-dto.ts` |
| `UserResponseDto` | `userResponseDtoSchema` | `src/models/user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

