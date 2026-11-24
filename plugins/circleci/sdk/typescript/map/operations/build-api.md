<!-- Generated file — do not edit; regenerated with the SDK. -->

# BuildApi — operations

Accessor: `client.buildApi` · Source: `src/resources/build-api.ts` · 7 operations · Request and error types: namespace `BuildApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelBuild

- **Signature**: `cancelBuild(request: BuildApi.CancelBuildRequest, options?: RequestOptions): ApiPromise<BuildSummary, BuildApi.CancelBuildError>`
- **Wire**: `POST /project/{vcs-type}/{username}/{project}/{build_num}/cancel`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildSummary`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `BuildApi.CancelBuildError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuildApi.CancelBuildRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `buildNum` | `path` | `build_num` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `BuildSummary` | `buildSummarySchema` | `src/models/build-summary.ts` |

### getBuild

- **Signature**: `getBuild(request: BuildApi.GetBuildRequest, options?: RequestOptions): ApiPromise<BuildDetail, BuildApi.GetBuildError>`
- **Wire**: `GET /project/{vcs-type}/{username}/{project}/{build_num}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BuildDetail`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `BuildApi.GetBuildError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuildApi.GetBuildRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `buildNum` | `path` | `build_num` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `BuildDetail` | `buildDetailSchema` | `src/models/build-detail.ts` |

### listProjectBuilds

- **Signature**: `listProjectBuilds(request: BuildApi.ListProjectBuildsRequest, options?: RequestOptions): ApiPromise<Build[], BuildApi.ListProjectBuildsError>`
- **Wire**: `GET /project/{vcs-type}/{username}/{project}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Build[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `BuildApi.ListProjectBuildsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuildApi.ListProjectBuildsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes | — |
| `username` | `path` | — | `string` | yes | — |
| `project` | `path` | — | `string` | yes | — |
| `filter` | `query` | — | `FilterCircleCiRestApiV1BuildApi` | no | — |
| `limit` | `query` | — | `number` | no | `30` |
| `offset` | `query` | — | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `FilterCircleCiRestApiV1BuildApi` | `filterCircleCiRestApiV1BuildApiSchema` | `src/models/filter-circle-ci-rest-api-v1-build-api.ts` |
| `Build` | `buildSchema` | `src/models/build.ts` |

### listRecentBuilds

- **Signature**: `listRecentBuilds(request?: BuildApi.ListRecentBuildsRequest, options?: RequestOptions): ApiPromise<Build[], BuildApi.ListRecentBuildsError>`
- **Wire**: `GET /recent-builds`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Build[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `BuildApi.ListRecentBuildsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuildApi.ListRecentBuildsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `30` |
| `offset` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Build` | `buildSchema` | `src/models/build.ts` |

### retryBuild

- **Signature**: `retryBuild(request: BuildApi.RetryBuildRequest, options?: RequestOptions): ApiPromise<BuildSummary, BuildApi.RetryBuildError>`
- **Wire**: `POST /project/{vcs-type}/{username}/{project}/{build_num}/retry`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildSummary`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `BuildApi.RetryBuildError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuildApi.RetryBuildRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `buildNum` | `path` | `build_num` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `BuildSummary` | `buildSummarySchema` | `src/models/build-summary.ts` |

### triggerBranchBuild

- **Signature**: `triggerBranchBuild(request: BuildApi.TriggerBranchBuildRequest, options?: RequestOptions): ApiPromise<BuildSummary, BuildApi.TriggerBranchBuildError>`
- **Wire**: `POST /project/{vcs-type}/{username}/{project}/tree/{branch}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildSummary`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `BuildApi.TriggerBranchBuildError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuildApi.TriggerBranchBuildRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `branch` | `path` | — | `string` | yes |
| `body` | `body` | — | `ProjectProjectTreeBranchRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `ProjectProjectTreeBranchRequest` | `projectProjectTreeBranchRequestSchema` | `src/models/project-project-tree-branch-request.ts` |
| `BuildSummary` | `buildSummarySchema` | `src/models/build-summary.ts` |

### triggerBuild

- **Signature**: `triggerBuild(request: BuildApi.TriggerBuildRequest, options?: RequestOptions): ApiPromise<BuildSummary, BuildApi.TriggerBuildError>`
- **Wire**: `POST /project/{vcs-type}/{username}/{project}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildSummary`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `BuildApi.TriggerBuildError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuildApi.TriggerBuildRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `body` | `body` | — | `ProjectProjectRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `ProjectProjectRequest` | `projectProjectRequestSchema` | `src/models/project-project-request.ts` |
| `BuildSummary` | `buildSummarySchema` | `src/models/build-summary.ts` |

