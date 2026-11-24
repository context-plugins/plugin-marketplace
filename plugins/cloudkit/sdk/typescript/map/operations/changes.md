<!-- Generated file — do not edit; regenerated with the SDK. -->

# Changes — operations

Accessor: `client.changes` · Source: `src/resources/changes.ts` · 2 operations · Request types: namespace `Changes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloud-kit`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### databaseChanges

- **Signature**: `databaseChanges(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /changes/database`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### zoneRecordChanges

- **Signature**: `zoneRecordChanges(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /changes/zone`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

