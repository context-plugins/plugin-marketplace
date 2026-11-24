<!-- Generated file — do not edit; regenerated with the SDK. -->

# Changelog — operations

Accessor: `client.changelog` · Source: `src/resources/changelog.ts` · 5 operations · Request types: namespace `Changelog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBranchesByBranchChangelogsBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBranchesByBranchChangelogsBySlug(request: Changelog.DeleteBranchesByBranchChangelogsBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /branches/{branch}/changelogs/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Changelog.DeleteBranchesByBranchChangelogsBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

### getBranchesByBranchChangelogs

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchChangelogs(request: Changelog.GetBranchesByBranchChangelogsRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /branches/{branch}/changelogs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Changelog.GetBranchesByBranchChangelogsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |

### getBranchesByBranchChangelogsBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchChangelogsBySlug(request: Changelog.GetBranchesByBranchChangelogsBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /branches/{branch}/changelogs/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Changelog.GetBranchesByBranchChangelogsBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

### postBranchesByBranchChangelogs

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBranchesByBranchChangelogs(request: Changelog.PostBranchesByBranchChangelogsRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /branches/{branch}/changelogs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Changelog.PostBranchesByBranchChangelogsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |

### putBranchesByBranchChangelogsBySlug

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putBranchesByBranchChangelogsBySlug(request: Changelog.PutBranchesByBranchChangelogsBySlugRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /branches/{branch}/changelogs/{slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Changelog.PutBranchesByBranchChangelogsBySlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `slug` | `path` | `string` | yes |

