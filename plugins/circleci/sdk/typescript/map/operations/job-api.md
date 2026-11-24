<!-- Generated file — do not edit; regenerated with the SDK. -->

# JobApi — operations

Accessor: `client.jobApi` · Source: `src/resources/job-api.ts` · 4 operations · Request and error types: namespace `JobApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelJob

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelJob(request: JobApi.CancelJobRequest, options?: RequestOptions): ApiPromise<MessageResponse, JobApi.CancelJobError>`
- **Wire**: `POST /project/{project-slug}/job/{job-number}/cancel`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `JobApi.CancelJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `JobApi.CancelJobRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `jobNumber` | `path` | `job-number` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getJob

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getJob(request: JobApi.GetJobRequest, options?: RequestOptions): ApiPromise<Job, JobApi.GetJobError>`
- **Wire**: `GET /project/{project-slug}/job/{job-number}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Job`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `JobApi.GetJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `JobApi.GetJobRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `jobNumber` | `path` | `job-number` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Job` | `jobSchema` | `src/models/job.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listJobArtifacts

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listJobArtifacts(request: JobApi.ListJobArtifactsRequest, options?: RequestOptions): ApiPromise<ArtifactList, JobApi.ListJobArtifactsError>`
- **Wire**: `GET /project/{project-slug}/{job-number}/artifacts`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ArtifactList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `JobApi.ListJobArtifactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `JobApi.ListJobArtifactsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `jobNumber` | `path` | `job-number` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ArtifactList` | `artifactListSchema` | `src/models/artifact-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listJobTests

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listJobTests(request: JobApi.ListJobTestsRequest, options?: RequestOptions): ApiPromise<TestList, JobApi.ListJobTestsError>`
- **Wire**: `GET /project/{project-slug}/{job-number}/tests`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TestList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `JobApi.ListJobTestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `JobApi.ListJobTestsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `jobNumber` | `path` | `job-number` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestList` | `testListSchema` | `src/models/test-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

