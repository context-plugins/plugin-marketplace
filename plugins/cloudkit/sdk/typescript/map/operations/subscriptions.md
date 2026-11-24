<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `src/resources/subscriptions.ts` · 3 operations · Request types: namespace `Subscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloud-kit`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listSubscriptions

- **Signature**: `listSubscriptions(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /subscriptions/list`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### lookupSubscriptions

- **Signature**: `lookupSubscriptions(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /subscriptions/lookup`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### modifySubscriptions

- **Signature**: `modifySubscriptions(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /subscriptions/modify`
- **Auth**: any of `cloudKitApiToken`, `serverToServer` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CloudKitError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

