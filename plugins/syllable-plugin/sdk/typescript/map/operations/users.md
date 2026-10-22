<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 7 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### usersCreate

- **Signature**: `usersCreate(request: Users.UsersCreateRequest, options?: RequestOptions): ApiPromise<UserResponse, Users.UsersCreateError>`
- **Wire**: `POST /api/v1/users/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Users.UsersCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UsersCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserCreateRequest` | `userCreateRequestSchema` | `src/models/user-create-request.ts` |
| `UserResponse` | `userResponseSchema` | `src/models/user-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### usersDelete

- **Signature**: `usersDelete(request: Users.UsersDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Users.UsersDeleteError>`
- **Wire**: `DELETE /api/v1/users/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Users.UsersDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UsersDeleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserDeleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserDeleteRequest` | `userDeleteRequestSchema` | `src/models/user-delete-request.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### usersDeleteAccount

- **Signature**: `usersDeleteAccount(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /api/v1/users/delete_account`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### usersGetByEmail

- **Signature**: `usersGetByEmail(request: Users.UsersGetByEmailRequest, options?: RequestOptions): ApiPromise<UserResponse, Users.UsersGetByEmailError>`
- **Wire**: `GET /api/v1/users/{user_email}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Users.UsersGetByEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UsersGetByEmailRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userEmail` | `path` | `user_email` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserResponse` | `userResponseSchema` | `src/models/user-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### usersList

- **Signature**: `usersList(request: Users.UsersListRequest, options?: RequestOptions): ApiPromise<ListResponseUserResponse, Users.UsersListError>`
- **Wire**: `GET /api/v1/users/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseUserResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Users.UsersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UsersListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `UserProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy317` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields29` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `UserProperties` | `userPropertiesSchema` | `src/models/user-properties.ts` |
| `OrderBy317` | `orderBy317Schema` | `src/models/unions/order-by317.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields29` | `fields29Schema` | `src/models/unions/fields29.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseUserResponse` | `listResponseUserResponseSchema` | `src/models/list-response-user-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### usersSendEmail

- **Signature**: `usersSendEmail(request: Users.UsersSendEmailRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Users.UsersSendEmailError>`
- **Wire**: `POST /api/v1/users/{user_email}/send_email`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Users.UsersSendEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UsersSendEmailRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `userEmail` | `path` | `user_email` | `string` | yes | — |
| `skipAuth` | `query` | `skip_auth` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### usersUpdate

- **Signature**: `usersUpdate(request: Users.UsersUpdateRequest, options?: RequestOptions): ApiPromise<UserResponse, Users.UsersUpdateError>`
- **Wire**: `PUT /api/v1/users/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Users.UsersUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UsersUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserUpdateRequest` | `userUpdateRequestSchema` | `src/models/user-update-request.ts` |
| `UserResponse` | `userResponseSchema` | `src/models/user-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

