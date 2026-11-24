<!-- Generated file — do not edit; regenerated with the SDK. -->

# Categories — operations

Accessor: `client.categories` · Source: `src/resources/categories.ts` · 5 operations · Request types: namespace `Categories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBranchesByBranchCategoriesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBranchesByBranchCategoriesBySlug(request: Categories.DeleteBranchesByBranchCategoriesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /branches/{branch}/categories/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.DeleteBranchesByBranchCategoriesBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

### getBranchesByBranchCategories

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchCategories(request: Categories.GetBranchesByBranchCategoriesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /branches/{branch}/categories`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.GetBranchesByBranchCategoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |

### getBranchesByBranchCategoriesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchCategoriesBySlug(request: Categories.GetBranchesByBranchCategoriesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /branches/{branch}/categories/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.GetBranchesByBranchCategoriesBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

### postBranchesByBranchCategories

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBranchesByBranchCategories(request: Categories.PostBranchesByBranchCategoriesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /branches/{branch}/categories`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.PostBranchesByBranchCategoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |

### putBranchesByBranchCategoriesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putBranchesByBranchCategoriesBySlug(request: Categories.PutBranchesByBranchCategoriesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /branches/{branch}/categories/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.PutBranchesByBranchCategoriesBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

