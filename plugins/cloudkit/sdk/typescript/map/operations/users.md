<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 4 operations · Request types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloud-kit`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### callerUser

- **Signature**: `callerUser(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /users/caller`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### discoverUsers

- **Signature**: `discoverUsers(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /users/discover`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### lookupUsersByEmail

- **Signature**: `lookupUsersByEmail(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /users/lookup/email`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### lookupUsersById

- **Signature**: `lookupUsersById(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /users/lookup/id`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

