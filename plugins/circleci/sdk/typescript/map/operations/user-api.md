<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.userApi` · Source: `src/resources/user-api.ts` · 2 operations · Request and error types: namespace `UserApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCollaborations

- **Signature**: `getCollaborations(options?: RequestOptions): ApiPromise<Collaboration[], UserApi.GetCollaborationsError>`
- **Wire**: `GET /me/collaborations`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Collaboration[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `UserApi.GetCollaborationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Collaboration` | `collaborationSchema` | `src/models/collaboration.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCurrentUser

- **Signature**: `getCurrentUser(options?: RequestOptions): ApiPromise<User, UserApi.GetCurrentUserError>`
- **Wire**: `GET /me`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `UserApi.GetCurrentUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |

