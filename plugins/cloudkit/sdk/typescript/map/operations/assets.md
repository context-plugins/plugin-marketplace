<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.assets` · Source: `src/resources/assets.ts` · 2 operations · Request types: namespace `Assets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloud-kit`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### rereferenceAssets

- **Signature**: `rereferenceAssets(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /assets/rereference`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### uploadAssets

- **Signature**: `uploadAssets(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /assets/upload`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

