<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 6 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelInvite

- **Signature**: `cancelInvite(request: Users.CancelInviteRequest, options?: RequestOptions): ApiPromise<CancelInviteResponse, Users.CancelInviteError>`
- **Wire**: `POST /iam/v1/users/{id}/actions/cancel`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `CancelInviteResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Users.CancelInviteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.CancelInviteRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |
| `body` | `body` | — | `Record<string, unknown>` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelInviteResponse` | `cancelInviteResponseSchema` | `src/models/cancel-invite-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteUser

- **Signature**: `deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise<DeleteUserResponse, Users.DeleteUserError>`
- **Wire**: `DELETE /iam/v1/users/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteUserResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Users.DeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.DeleteUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteUserResponse` | `deleteUserResponseSchema` | `src/models/delete-user-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### inviteUser

- **Signature**: `inviteUser(request: Users.InviteUserRequestParams, options?: RequestOptions): ApiPromise<InviteResponse, Users.InviteUserError>`
- **Wire**: `POST /iam/v1/users/invite`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InviteResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Users.InviteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.InviteUserRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InviteUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InviteUserRequest` | `inviteUserRequestSchema` | `src/models/invite-user-request.ts` |
| `InviteResponse` | `inviteResponseSchema` | `src/models/invite-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listUsers

- **Signature**: `listUsers(request?: Users.ListUsersRequest, options?: RequestOptions): ApiPromise<ListUsersResponseBody, Users.ListUsersError>`
- **Wire**: `GET /iam/v1/users`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListUsersResponseBody`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Users.ListUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.ListUsersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListUsersResponseBody` | `listUsersResponseBodySchema` | `src/models/list-users-response-body.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resendInvite

- **Signature**: `resendInvite(request: Users.ResendInviteRequest, options?: RequestOptions): ApiPromise<ResendInviteResponse, Users.ResendInviteError>`
- **Wire**: `POST /iam/v1/users/{id}/actions/resend`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `ResendInviteResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Users.ResendInviteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.ResendInviteRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |
| `body` | `body` | — | `Record<string, unknown>` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResendInviteResponse` | `resendInviteResponseSchema` | `src/models/resend-invite-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateUser

- **Signature**: `updateUser(request: Users.UpdateUserRequestParams, options?: RequestOptions): ApiPromise<UpdateUserResponse, Users.UpdateUserError>`
- **Wire**: `PATCH /iam/v1/users/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateUserResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Users.UpdateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UpdateUserRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateUserRequest` | `updateUserRequestSchema` | `src/models/update-user-request.ts` |
| `UpdateUserResponse` | `updateUserResponseSchema` | `src/models/update-user-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

