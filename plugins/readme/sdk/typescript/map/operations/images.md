<!-- Generated file — do not edit; regenerated with the SDK. -->

# Images — operations

Accessor: `client.images` · Source: `src/resources/images.ts` · 1 operation · Request types: namespace `Images`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postImages

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postImages(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /images`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

