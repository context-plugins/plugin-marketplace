<!-- Generated file — do not edit; regenerated with the SDK. -->

# Versioning — operations

Accessor: `client.versioning` · Source: `src/resources/versioning.ts` · 13 operations · Request and error types: namespace `Versioning`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createVersionCommit

- **Signature**: `createVersionCommit(request: Versioning.CreateVersionCommitRequest, options?: RequestOptions): ApiPromise<CountedGitCommitSummary, Versioning.CreateVersionCommitError>`
- **Wire**: `POST /version/commit`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedGitCommitSummary`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.CreateVersionCommitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restApiJsonError"` [400] `RestApiJsonError` · `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versioning.CreateVersionCommitRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GitCommitBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GitCommitBody` | `gitCommitBodySchema` | `src/models/git-commit-body.ts` |
| `CountedGitCommitSummary` | `countedGitCommitSummarySchema` | `src/models/counted-git-commit-summary.ts` |
| `RestApiJsonError` | `restApiJsonErrorSchema` | `src/models/rest-api-json-error.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createVersionPush

- **Signature**: `createVersionPush(options?: RequestOptions): ApiPromise<CountedString, Versioning.CreateVersionPushError>`
- **Wire**: `POST /version/push`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedString`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.CreateVersionPushError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedString` | `countedStringSchema` | `src/models/counted-string.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createVersionRevert

- **Signature**: `createVersionRevert(request: Versioning.CreateVersionRevertRequest, options?: RequestOptions): ApiPromise<CountedGitRevertResult, Versioning.CreateVersionRevertError>`
- **Wire**: `POST /version/revert`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedGitRevertResult`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.CreateVersionRevertError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versioning.CreateVersionRevertRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GitRevertParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GitRevertParams` | `gitRevertParamsSchema` | `src/models/git-revert-params.ts` |
| `CountedGitRevertResult` | `countedGitRevertResultSchema` | `src/models/counted-git-revert-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createVersionUndo

- **Signature**: `createVersionUndo(options?: RequestOptions): ApiPromise<CountedBoolean, Versioning.CreateVersionUndoError>`
- **Wire**: `POST /version/undo`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedBoolean`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.CreateVersionUndoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedBoolean` | `countedBooleanSchema` | `src/models/counted-boolean.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVersion

- **Signature**: `getVersion(request: Versioning.GetVersionRequest, options?: RequestOptions): ApiPromise<PaginatedGitLogResult, Versioning.GetVersionError>`
- **Wire**: `GET /version`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedGitLogResult`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.GetVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versioning.GetVersionRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedGitLogResult` | `paginatedGitLogResultSchema` | `src/models/paginated-git-log-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVersionBranch

- **Signature**: `getVersionBranch(options?: RequestOptions): ApiPromise<CountedBranchInfo, Versioning.GetVersionBranchError>`
- **Wire**: `GET /version/branch`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedBranchInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.GetVersionBranchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedBranchInfo` | `countedBranchInfoSchema` | `src/models/counted-branch-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVersionCount

- **Signature**: `getVersionCount(request: Versioning.GetVersionCountRequest, options?: RequestOptions): ApiPromise<CountedGitCountResult, Versioning.GetVersionCountError>`
- **Wire**: `GET /version/count`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedGitCountResult`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.GetVersionCountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versioning.GetVersionCountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `commit` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedGitCountResult` | `countedGitCountResultSchema` | `src/models/counted-git-count-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVersionCurrentBranch

- **Signature**: `getVersionCurrentBranch(options?: RequestOptions): ApiPromise<CurrentBranchResult, Versioning.GetVersionCurrentBranchError>`
- **Wire**: `GET /version/current-branch`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CurrentBranchResult`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.GetVersionCurrentBranchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CurrentBranchResult` | `currentBranchResultSchema` | `src/models/current-branch-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVersionDiff

- **Signature**: `getVersionDiff(request: Versioning.GetVersionDiffRequest, options?: RequestOptions): ApiPromise<CountedGitDiffResult, Versioning.GetVersionDiffError>`
- **Wire**: `GET /version/diff`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedGitDiffResult`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.GetVersionDiffError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versioning.GetVersionDiffRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `commit` | `query` | `string` | no |
| `filename` | `query` | `string` | no |
| `diffLineLimit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedGitDiffResult` | `countedGitDiffResultSchema` | `src/models/counted-git-diff-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVersionFiles

- **Signature**: `getVersionFiles(request: Versioning.GetVersionFilesRequest, options?: RequestOptions): ApiPromise<CountedGitFilesResponse, Versioning.GetVersionFilesError>`
- **Wire**: `GET /version/files`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedGitFilesResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.GetVersionFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versioning.GetVersionFilesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `commit` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedGitFilesResponse` | `countedGitFilesResponseSchema` | `src/models/counted-git-files-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVersionInfo

- **Signature**: `getVersionInfo(options?: RequestOptions): ApiPromise<CountedGitInfo, Versioning.GetVersionInfoError>`
- **Wire**: `GET /version/info`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedGitInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.GetVersionInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedGitInfo` | `countedGitInfoSchema` | `src/models/counted-git-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVersionShow

- **Signature**: `getVersionShow(request: Versioning.GetVersionShowRequest, options?: RequestOptions): ApiPromise<CountedGitShowResult, Versioning.GetVersionShowError>`
- **Wire**: `GET /version/show`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedGitShowResult`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.GetVersionShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Versioning.GetVersionShowRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `commit` | `query` | `string` | no |
| `filename` | `query` | `string` | no |
| `diffLineLimit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedGitShowResult` | `countedGitShowResultSchema` | `src/models/counted-git-show-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVersionStatus

- **Signature**: `getVersionStatus(options?: RequestOptions): ApiPromise<CountedGitStatusResult, Versioning.GetVersionStatusError>`
- **Wire**: `GET /version/status`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedGitStatusResult`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Versioning.GetVersionStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedGitStatusResult` | `countedGitStatusResultSchema` | `src/models/counted-git-status-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

