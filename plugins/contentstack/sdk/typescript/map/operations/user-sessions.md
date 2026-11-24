<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserSessions — operations

Accessor: `client.userSessions` · Source: `src/resources/user-sessions.ts` · 2 operations · Request and error types: namespace `UserSessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### loginUser

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `loginUser(request: UserSessions.LoginUserRequest, options?: RequestOptions): ApiPromise<LoginResponse, UserSessions.LoginUserError>`
- **Wire**: `POST /user-session`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LoginResponse`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `UserSessions.LoginUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"error22"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserSessions.LoginUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LoginRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginRequest` | `loginRequestSchema` | `src/models/login-request.ts` |
| `LoginResponse` | `loginResponseSchema` | `src/models/login-response.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### logoutUser

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `logoutUser(options?: RequestOptions): ApiPromise<undefined, UserSessions.LogoutUserError>`
- **Wire**: `DELETE /user-session`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `UserSessions.LogoutUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

