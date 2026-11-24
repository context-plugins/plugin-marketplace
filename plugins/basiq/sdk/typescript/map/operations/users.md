<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 4 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createUser

- **Signature**: `createUser(request: Users.CreateUserRequest, options?: RequestOptions): ApiPromise<UserPostResponse, Users.CreateUserError>`
- **Wire**: `POST /users`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserPostResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Users.CreateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"users400Error1"` [400] `Users400Error1` · `"users401Error1"` [401] `Users401Error1` · `"users403Error1"` [403] `Users403Error1` · `"users404Error1"` [404] `Users404Error1` · `"users500Error1"` [500] `Users500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.CreateUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UsersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersRequest` | `usersRequestSchema` | `src/models/users-request.ts` |
| `UserPostResponse` | `userPostResponseSchema` | `src/models/user-post-response.ts` |
| `Users400Error1` | `users400Error1Schema` | `src/models/users400-error1.ts` |
| `Users401Error1` | `users401Error1Schema` | `src/models/users401-error1.ts` |
| `Users403Error1` | `users403Error1Schema` | `src/models/users403-error1.ts` |
| `Users404Error1` | `users404Error1Schema` | `src/models/users404-error1.ts` |
| `Users500Error1` | `users500Error1Schema` | `src/models/users500-error1.ts` |

### deleteUser

- **Signature**: `deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise<undefined, Users.DeleteUserError>`
- **Wire**: `DELETE /users/{userId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Users.DeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"users400Error1"` [400] `Users400Error1` · `"users401Error1"` [401] `Users401Error1` · `"users403Error1"` [403] `Users403Error1` · `"users404Error1"` [404] `Users404Error1` · `"users500Error1"` [500] `Users500Error1` · `"users503Error1"` [503] `Users503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.DeleteUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Users400Error1` | `users400Error1Schema` | `src/models/users400-error1.ts` |
| `Users401Error1` | `users401Error1Schema` | `src/models/users401-error1.ts` |
| `Users403Error1` | `users403Error1Schema` | `src/models/users403-error1.ts` |
| `Users404Error1` | `users404Error1Schema` | `src/models/users404-error1.ts` |
| `Users500Error1` | `users500Error1Schema` | `src/models/users500-error1.ts` |
| `Users503Error1` | `users503Error1Schema` | `src/models/users503-error1.ts` |

### getUser

- **Signature**: `getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<UserGetResponse, Users.GetUserError>`
- **Wire**: `GET /users/{userId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserGetResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Users.GetUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"users400Error1"` [400] `Users400Error1` · `"users401Error1"` [401] `Users401Error1` · `"users403Error1"` [403] `Users403Error1` · `"users404Error1"` [404] `Users404Error1` · `"users500Error1"` [500] `Users500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserGetResponse` | `userGetResponseSchema` | `src/models/user-get-response.ts` |
| `Users400Error1` | `users400Error1Schema` | `src/models/users400-error1.ts` |
| `Users401Error1` | `users401Error1Schema` | `src/models/users401-error1.ts` |
| `Users403Error1` | `users403Error1Schema` | `src/models/users403-error1.ts` |
| `Users404Error1` | `users404Error1Schema` | `src/models/users404-error1.ts` |
| `Users500Error1` | `users500Error1Schema` | `src/models/users500-error1.ts` |

### updateUser

- **Signature**: `updateUser(request: Users.UpdateUserRequest, options?: RequestOptions): ApiPromise<UserPostResponse, Users.UpdateUserError>`
- **Wire**: `POST /users/{userId}`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserPostResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Users.UpdateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"users400Error1"` [400] `Users400Error1` · `"users401Error1"` [401] `Users401Error1` · `"users403Error1"` [403] `Users403Error1` · `"users404Error1"` [404] `Users404Error1` · `"users500Error1"` [500] `Users500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UpdateUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `UsersRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersRequest1` | `usersRequest1Schema` | `src/models/users-request1.ts` |
| `UserPostResponse` | `userPostResponseSchema` | `src/models/user-post-response.ts` |
| `Users400Error1` | `users400Error1Schema` | `src/models/users400-error1.ts` |
| `Users401Error1` | `users401Error1Schema` | `src/models/users401-error1.ts` |
| `Users403Error1` | `users403Error1Schema` | `src/models/users403-error1.ts` |
| `Users404Error1` | `users404Error1Schema` | `src/models/users404-error1.ts` |
| `Users500Error1` | `users500Error1Schema` | `src/models/users500-error1.ts` |

