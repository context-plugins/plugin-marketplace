<!-- Generated file — do not edit; regenerated with the SDK. -->

# CodeReferences — operations

Accessor: `client.codeReferences` · Source: `src/resources/code-references.ts` · 13 operations · Request and error types: namespace `CodeReferences`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBranches

- **Signature**: `deleteBranches(request: CodeReferences.DeleteBranchesRequest, options?: RequestOptions): ApiPromise<undefined, CodeReferences.DeleteBranchesError>`
- **Wire**: `POST /api/v2/code-refs/repositories/{repo}/branch-delete-tasks`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.DeleteBranchesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.DeleteBranchesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repo` | `path` | `string` | yes |
| `body` | `body` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteRepository

- **Signature**: `deleteRepository(request: CodeReferences.DeleteRepositoryRequest, options?: RequestOptions): ApiPromise<undefined, CodeReferences.DeleteRepositoryError>`
- **Wire**: `DELETE /api/v2/code-refs/repositories/{repo}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.DeleteRepositoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.DeleteRepositoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repo` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getBranch

- **Signature**: `getBranch(request: CodeReferences.GetBranchRequest, options?: RequestOptions): ApiPromise<BranchRep, CodeReferences.GetBranchError>`
- **Wire**: `GET /api/v2/code-refs/repositories/{repo}/branches/{branch}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BranchRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.GetBranchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.GetBranchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repo` | `path` | `string` | yes |
| `branch` | `path` | `string` | yes |
| `projKey` | `query` | `string` | no |
| `flagKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BranchRep` | `branchRepSchema` | `src/models/branch-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getBranches

- **Signature**: `getBranches(request: CodeReferences.GetBranchesRequest, options?: RequestOptions): ApiPromise<BranchCollectionRep, CodeReferences.GetBranchesError>`
- **Wire**: `GET /api/v2/code-refs/repositories/{repo}/branches`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BranchCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.GetBranchesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.GetBranchesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repo` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BranchCollectionRep` | `branchCollectionRepSchema` | `src/models/branch-collection-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getExtinctions

- **Signature**: `getExtinctions(request: CodeReferences.GetExtinctionsRequest, options?: RequestOptions): ApiPromise<ExtinctionCollectionRep, CodeReferences.GetExtinctionsError>`
- **Wire**: `GET /api/v2/code-refs/extinctions`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExtinctionCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.GetExtinctionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.GetExtinctionsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repoName` | `query` | `string` | no |
| `branchName` | `query` | `string` | no |
| `projKey` | `query` | `string` | no |
| `flagKey` | `query` | `string` | no |
| `from` | `query` | `number` | no |
| `to` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExtinctionCollectionRep` | `extinctionCollectionRepSchema` | `src/models/extinction-collection-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getRepositories

- **Signature**: `getRepositories(request: CodeReferences.GetRepositoriesRequest, options?: RequestOptions): ApiPromise<RepositoryCollectionRep, CodeReferences.GetRepositoriesError>`
- **Wire**: `GET /api/v2/code-refs/repositories`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RepositoryCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.GetRepositoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.GetRepositoriesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `withBranches` | `query` | `string` | no |
| `withReferencesForDefaultBranch` | `query` | `string` | no |
| `projKey` | `query` | `string` | no |
| `flagKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepositoryCollectionRep` | `repositoryCollectionRepSchema` | `src/models/repository-collection-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getRepository

- **Signature**: `getRepository(request: CodeReferences.GetRepositoryRequest, options?: RequestOptions): ApiPromise<RepositoryRep, CodeReferences.GetRepositoryError>`
- **Wire**: `GET /api/v2/code-refs/repositories/{repo}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RepositoryRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.GetRepositoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.GetRepositoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repo` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepositoryRep` | `repositoryRepSchema` | `src/models/repository-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getRootStatistic

- **Signature**: `getRootStatistic(options?: RequestOptions): ApiPromise<StatisticsRoot, CodeReferences.GetRootStatisticError>`
- **Wire**: `GET /api/v2/code-refs/statistics`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatisticsRoot`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.GetRootStatisticError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `StatisticsRoot` | `statisticsRootSchema` | `src/models/statistics-root.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getStatistics

- **Signature**: `getStatistics(request: CodeReferences.GetStatisticsRequest, options?: RequestOptions): ApiPromise<StatisticCollectionRep, CodeReferences.GetStatisticsError>`
- **Wire**: `GET /api/v2/code-refs/statistics/{projectKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatisticCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.GetStatisticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.GetStatisticsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `flagKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatisticCollectionRep` | `statisticCollectionRepSchema` | `src/models/statistic-collection-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchRepository

- **Signature**: `patchRepository(request: CodeReferences.PatchRepositoryRequest, options?: RequestOptions): ApiPromise<RepositoryRep, CodeReferences.PatchRepositoryError>`
- **Wire**: `PATCH /api/v2/code-refs/repositories/{repo}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RepositoryRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.PatchRepositoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.PatchRepositoryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repo` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `RepositoryRep` | `repositoryRepSchema` | `src/models/repository-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postExtinction

- **Signature**: `postExtinction(request: CodeReferences.PostExtinctionRequest, options?: RequestOptions): ApiPromise<undefined, CodeReferences.PostExtinctionError>`
- **Wire**: `POST /api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.PostExtinctionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.PostExtinctionRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repo` | `path` | `string` | yes |
| `branch` | `path` | `string` | yes |
| `body` | `body` | `Extinction[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Extinction` | `extinctionSchema` | `src/models/extinction.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postRepository

- **Signature**: `postRepository(request: CodeReferences.PostRepositoryRequest, options?: RequestOptions): ApiPromise<RepositoryRep, CodeReferences.PostRepositoryError>`
- **Wire**: `POST /api/v2/code-refs/repositories`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RepositoryRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.PostRepositoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.PostRepositoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RepositoryPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RepositoryPost` | `repositoryPostSchema` | `src/models/repository-post.ts` |
| `RepositoryRep` | `repositoryRepSchema` | `src/models/repository-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### putBranch

- **Signature**: `putBranch(request: CodeReferences.PutBranchRequest, options?: RequestOptions): ApiPromise<undefined, CodeReferences.PutBranchError>`
- **Wire**: `PUT /api/v2/code-refs/repositories/{repo}/branches/{branch}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CodeReferences.PutBranchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CodeReferences.PutBranchRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `repo` | `path` | `string` | yes |
| `branch` | `path` | `string` | yes |
| `body` | `body` | `PutBranch` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PutBranch` | `putBranchSchema` | `src/models/put-branch.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

