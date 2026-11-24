<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `src/resources/jobs.ts` · 4 operations · Request and error types: namespace `Jobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getJob

- **Signature**: `getJob(request: Jobs.GetJobRequest, options?: RequestOptions): ApiPromise<Job, Jobs.GetJobError>`
- **Wire**: `GET /odata/Jobs({key})`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Job`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Jobs.GetJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetJobRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `key` | `path` | — | `number` | yes |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Job` | `jobSchema` | `src/models/job.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listJobs

- **Signature**: `listJobs(request?: Jobs.ListJobsRequest, options?: RequestOptions): ApiPromise<ODataJobCollection, Jobs.ListJobsError>`
- **Wire**: `GET /odata/Jobs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataJobCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Jobs.ListJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.ListJobsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `select` | `query` | `$select` | `string` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataJobCollection` | `oDataJobCollectionSchema` | `src/models/odata-job-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### startJobs

- **Signature**: `startJobs(request: Jobs.StartJobsRequestParams, options?: RequestOptions): ApiPromise<ODataJobCollection, Jobs.StartJobsError>`
- **Wire**: `POST /odata/Jobs/UiPath.Server.Configuration.OData.StartJobs`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ODataJobCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Jobs.StartJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.StartJobsRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |
| `body` | `body` | — | `StartJobsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartJobsRequest` | `startJobsRequestSchema` | `src/models/start-jobs-request.ts` |
| `ODataJobCollection` | `oDataJobCollectionSchema` | `src/models/odata-job-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### stopJob

- **Signature**: `stopJob(request: Jobs.StopJobRequestParams, options?: RequestOptions): ApiPromise<undefined, Jobs.StopJobError>`
- **Wire**: `POST /odata/Jobs/UiPath.Server.Configuration.OData.StopJob`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Jobs.StopJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.StopJobRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |
| `body` | `body` | — | `StopJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StopJobRequest` | `stopJobRequestSchema` | `src/models/stop-job-request.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

