<!-- Generated file — do not edit; regenerated with the SDK. -->

# Shortcuts — operations

Accessor: `client.shortcuts` · Source: `src/resources/shortcuts.ts` · 2 operations · Request and error types: namespace `Shortcuts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-indexing-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkIndexExternalShortcuts

- **Signature**: `bulkIndexExternalShortcuts(options?: RequestOptions): ApiPromise<undefined, Shortcuts.BulkIndexExternalShortcutsError>`
- **Wire**: `POST /api/index/v1/bulkindexshortcuts`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Shortcuts.BulkIndexExternalShortcutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### uploadShortcuts

- **Signature**: `uploadShortcuts(options?: RequestOptions): ApiPromise<undefined, Shortcuts.UploadShortcutsError>`
- **Wire**: `POST /api/index/v1/uploadshortcuts`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Shortcuts.UploadShortcutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

