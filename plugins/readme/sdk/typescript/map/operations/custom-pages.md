<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomPages — operations

Accessor: `client.customPages` · Source: `src/resources/custom-pages.ts` · 5 operations · Request types: namespace `CustomPages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBranchesByBranchCustomPagesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBranchesByBranchCustomPagesBySlug(request: CustomPages.DeleteBranchesByBranchCustomPagesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /branches/{branch}/custom_pages/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomPages.DeleteBranchesByBranchCustomPagesBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

### getBranchesByBranchCustomPages

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchCustomPages(request: CustomPages.GetBranchesByBranchCustomPagesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /branches/{branch}/custom_pages`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomPages.GetBranchesByBranchCustomPagesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |

### getBranchesByBranchCustomPagesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchCustomPagesBySlug(request: CustomPages.GetBranchesByBranchCustomPagesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /branches/{branch}/custom_pages/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomPages.GetBranchesByBranchCustomPagesBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

### postBranchesByBranchCustomPages

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBranchesByBranchCustomPages(request: CustomPages.PostBranchesByBranchCustomPagesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /branches/{branch}/custom_pages`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomPages.PostBranchesByBranchCustomPagesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |

### putBranchesByBranchCustomPagesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putBranchesByBranchCustomPagesBySlug(request: CustomPages.PutBranchesByBranchCustomPagesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /branches/{branch}/custom_pages/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomPages.PutBranchesByBranchCustomPagesBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

