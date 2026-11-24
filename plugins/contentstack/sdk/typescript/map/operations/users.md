<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 2 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUser

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getUser(options?: RequestOptions): ApiPromise<User, Users.GetUserError>`
- **Wire**: `GET /user`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Users.GetUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### updateUser

- **Server**: `defaultContentstackEnvironmentsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateUser(request: Users.UpdateUserRequestParams, options?: RequestOptions): ApiPromise<User, Users.UpdateUserError>`
- **Wire**: `PUT /user`
- **Auth**: any of `authtokenAuth`, `managementTokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Users.UpdateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"error22"` [401] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UpdateUserRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateUserRequest` | `updateUserRequestSchema` | `src/models/update-user-request.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

