<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersApi — operations

Accessor: `client.usersApi` · Source: `src/resources/users-api.ts` · 3 operations · Request and error types: namespace `UsersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteUser

- **Signature**: `deleteUser(request: UsersApi.DeleteUserRequest, options?: RequestOptions): ApiPromise<UsersResponse, UsersApi.DeleteUserError>`
- **Wire**: `DELETE /users/{userId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `UsersApi.DeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [400] `GristError` · `"gristError2"` [403] `GristError` · `"gristError3"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersApi.DeleteUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `number` | yes |
| `body` | `body` | `UsersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersRequest` | `usersRequestSchema` | `src/models/users-request.ts` |
| `UsersResponse` | `usersResponseSchema` | `src/models/unions/users-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### disableUser

- **Signature**: `disableUser(request: UsersApi.DisableUserRequest, options?: RequestOptions): ApiPromise<UsersDisableResponse, UsersApi.DisableUserError>`
- **Wire**: `POST /users/{userId}/disable`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersDisableResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `UsersApi.DisableUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersApi.DisableUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersDisableResponse` | `usersDisableResponseSchema` | `src/models/unions/users-disable-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### enableUser

- **Signature**: `enableUser(request: UsersApi.EnableUserRequest, options?: RequestOptions): ApiPromise<UsersEnableResponse, UsersApi.EnableUserError>`
- **Wire**: `POST /users/{userId}/enable`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersEnableResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `UsersApi.EnableUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersApi.EnableUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersEnableResponse` | `usersEnableResponseSchema` | `src/models/unions/users-enable-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

