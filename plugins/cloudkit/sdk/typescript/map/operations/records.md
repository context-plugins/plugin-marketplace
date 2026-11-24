<!-- Generated file — do not edit; regenerated with the SDK. -->

# Records — operations

Accessor: `client.records` · Source: `src/resources/records.ts` · 6 operations · Request types: namespace `Records`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloud-kit`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acceptShare

- **Signature**: `acceptShare(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /records/accept`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### lookupRecords

- **Signature**: `lookupRecords(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /records/lookup`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### modifyRecords

- **Signature**: `modifyRecords(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /records/modify`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### queryRecords

- **Signature**: `queryRecords(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /records/query`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### recordChanges

- **Signature**: `recordChanges(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /records/changes`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### resolveRecords

- **Signature**: `resolveRecords(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /records/resolve`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

