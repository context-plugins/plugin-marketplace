<!-- Generated file — do not edit; regenerated with the SDK. -->

# Guides — operations

Accessor: `client.guides` · Source: `src/resources/guides.ts` · 5 operations · Request types: namespace `Guides`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBranchesByBranchGuidesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBranchesByBranchGuidesBySlug(request: Guides.DeleteBranchesByBranchGuidesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /branches/{branch}/guides/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Guides.DeleteBranchesByBranchGuidesBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

### getBranchesByBranchGuides

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchGuides(request: Guides.GetBranchesByBranchGuidesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /branches/{branch}/guides`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Guides.GetBranchesByBranchGuidesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |

### getBranchesByBranchGuidesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchGuidesBySlug(request: Guides.GetBranchesByBranchGuidesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /branches/{branch}/guides/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Guides.GetBranchesByBranchGuidesBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

### postBranchesByBranchGuides

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBranchesByBranchGuides(request: Guides.PostBranchesByBranchGuidesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /branches/{branch}/guides`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Guides.PostBranchesByBranchGuidesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |

### putBranchesByBranchGuidesBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putBranchesByBranchGuidesBySlug(request: Guides.PutBranchesByBranchGuidesBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /branches/{branch}/guides/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Guides.PutBranchesByBranchGuidesBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

