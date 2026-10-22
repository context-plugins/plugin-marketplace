<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReleasePipelinesBeta — operations

Accessor: `client.releasePipelinesBeta` · Source: `src/resources/release-pipelines-beta.ts` · 6 operations · Request and error types: namespace `ReleasePipelinesBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteReleasePipeline

- **Signature**: `deleteReleasePipeline(request: ReleasePipelinesBeta.DeleteReleasePipelineRequest, options?: RequestOptions): ApiPromise<undefined, ReleasePipelinesBeta.DeleteReleasePipelineError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePipelinesBeta.DeleteReleasePipelineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePipelinesBeta.DeleteReleasePipelineRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `pipelineKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### getAllReleasePipelines

- **Signature**: `getAllReleasePipelines(request: ReleasePipelinesBeta.GetAllReleasePipelinesRequest, options?: RequestOptions): ApiPromise<ReleasePipelineCollection, ReleasePipelinesBeta.GetAllReleasePipelinesError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/release-pipelines`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReleasePipelineCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePipelinesBeta.GetAllReleasePipelinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePipelinesBeta.GetAllReleasePipelinesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReleasePipelineCollection` | `releasePipelineCollectionSchema` | `src/models/release-pipeline-collection.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### getAllReleaseProgressionsForReleasePipeline

- **Signature**: `getAllReleaseProgressionsForReleasePipeline(request: ReleasePipelinesBeta.GetAllReleaseProgressionsForReleasePipelineRequest, options?: RequestOptions): ApiPromise<ReleaseProgressionCollection, ReleasePipelinesBeta.GetAllReleaseProgressionsForReleasePipelineError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}/releases`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReleaseProgressionCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePipelinesBeta.GetAllReleaseProgressionsForReleasePipelineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePipelinesBeta.GetAllReleaseProgressionsForReleasePipelineRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `pipelineKey` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReleaseProgressionCollection` | `releaseProgressionCollectionSchema` | `src/models/release-progression-collection.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### getReleasePipelineByKey

- **Signature**: `getReleasePipelineByKey(request: ReleasePipelinesBeta.GetReleasePipelineByKeyRequest, options?: RequestOptions): ApiPromise<ReleasePipeline, ReleasePipelinesBeta.GetReleasePipelineByKeyError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReleasePipeline`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePipelinesBeta.GetReleasePipelineByKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePipelinesBeta.GetReleasePipelineByKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `pipelineKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReleasePipeline` | `releasePipelineSchema` | `src/models/release-pipeline.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### postReleasePipeline

- **Signature**: `postReleasePipeline(request: ReleasePipelinesBeta.PostReleasePipelineRequest, options?: RequestOptions): ApiPromise<ReleasePipeline, ReleasePipelinesBeta.PostReleasePipelineError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/release-pipelines`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReleasePipeline`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePipelinesBeta.PostReleasePipelineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePipelinesBeta.PostReleasePipelineRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `body` | `body` | `CreateReleasePipelineInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateReleasePipelineInput` | `createReleasePipelineInputSchema` | `src/models/create-release-pipeline-input.ts` |
| `ReleasePipeline` | `releasePipelineSchema` | `src/models/release-pipeline.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |

### putReleasePipeline

- **Signature**: `putReleasePipeline(request: ReleasePipelinesBeta.PutReleasePipelineRequest, options?: RequestOptions): ApiPromise<ReleasePipeline, ReleasePipelinesBeta.PutReleasePipelineError>`
- **Wire**: `PUT /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReleasePipeline`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasePipelinesBeta.PutReleasePipelineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasePipelinesBeta.PutReleasePipelineRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `pipelineKey` | `path` | `string` | yes |
| `body` | `body` | `UpdateReleasePipelineInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateReleasePipelineInput` | `updateReleasePipelineInputSchema` | `src/models/update-release-pipeline-input.ts` |
| `ReleasePipeline` | `releasePipelineSchema` | `src/models/release-pipeline.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

