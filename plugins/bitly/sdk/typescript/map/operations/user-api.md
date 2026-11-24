<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.userApi` · Source: `src/resources/user-api.ts` · 3 operations · Request and error types: namespace `UserApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPlatformLimits

- **Signature**: `getPlatformLimits(request?: UserApi.GetPlatformLimitsRequest, options?: RequestOptions): ApiPromise<PlatformLimits, UserApi.GetPlatformLimitsError>`
- **Wire**: `GET /user/platform_limits`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformLimits`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `UserApi.GetPlatformLimitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserApi.GetPlatformLimitsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `path` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformLimits` | `platformLimitsSchema` | `src/models/platform-limits.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getUser

- **Signature**: `getUser(options?: RequestOptions): ApiPromise<User, UserApi.GetUserError>`
- **Wire**: `GET /user`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `UserApi.GetUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateUser

- **Signature**: `updateUser(request: UserApi.UpdateUserRequest, options?: RequestOptions): ApiPromise<User, UserApi.UpdateUserError>`
- **Wire**: `PATCH /user`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `UserApi.UpdateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserApi.UpdateUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserUpdate` | `userUpdateSchema` | `src/models/user-update.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

