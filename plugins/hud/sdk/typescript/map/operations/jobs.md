<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `src/resources/jobs.ts` · 21 operations · Request and error types: namespace `Jobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### enrichJobsV2JobsEnrichPost

- **Signature**: `enrichJobsV2JobsEnrichPost(request: Jobs.EnrichJobsV2JobsEnrichPostRequest, options?: RequestOptions): ApiPromise<EnrichJobsResponse, Jobs.EnrichJobsV2JobsEnrichPostError>`
- **Wire**: `POST /v2/jobs/enrich`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnrichJobsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.EnrichJobsV2JobsEnrichPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.EnrichJobsV2JobsEnrichPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnrichJobsResponse` | `enrichJobsResponseSchema` | `src/models/enrich-jobs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### finishImportedJobV2JobsImportJobIdFinishPost

- **Signature**: `finishImportedJobV2JobsImportJobIdFinishPost(request: Jobs.FinishImportedJobV2JobsImportJobIdFinishPostRequest, options?: RequestOptions): ApiPromise<JobImportFinishResponse, Jobs.FinishImportedJobV2JobsImportJobIdFinishPostError>`
- **Wire**: `POST /v2/jobs/import/{job_id}/finish`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JobImportFinishResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.FinishImportedJobV2JobsImportJobIdFinishPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.FinishImportedJobV2JobsImportJobIdFinishPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobImportFinishResponse` | `jobImportFinishResponseSchema` | `src/models/job-import-finish-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### finishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost

- **Signature**: `finishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost(request: Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest, options?: RequestOptions): ApiPromise<JobImportTraceResultResponse, Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError>`
- **Wire**: `POST /v2/jobs/import/{job_id}/traces/{trace_id}/finish`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JobImportTraceResultResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |
| `traceId` | `path` | `trace_id` | `string` | yes |
| `body` | `body` | — | `JobImportTraceResult` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobImportTraceResult` | `jobImportTraceResultSchema` | `src/models/job-import-trace-result.ts` |
| `JobImportTraceResultResponse` | `jobImportTraceResultResponseSchema` | `src/models/job-import-trace-result-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getJobChartDataV2JobsJobIdChartDataGet

- **Signature**: `getJobChartDataV2JobsJobIdChartDataGet(request: Jobs.GetJobChartDataV2JobsJobIdChartDataGetRequest, options?: RequestOptions): ApiPromise<ChartDataResponse, Jobs.GetJobChartDataV2JobsJobIdChartDataGetError>`
- **Wire**: `GET /v2/jobs/{job_id}/chart-data`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChartDataResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.GetJobChartDataV2JobsJobIdChartDataGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetJobChartDataV2JobsJobIdChartDataGetRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `5000` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChartDataResponse` | `chartDataResponseSchema` | `src/models/chart-data-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getJobEntityLinksV2JobsJobIdEntityLinksGet

- **Signature**: `getJobEntityLinksV2JobsJobIdEntityLinksGet(request: Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest, options?: RequestOptions): ApiPromise<JobEntityLinksResponse, Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetError>`
- **Wire**: `GET /v2/jobs/{job_id}/entity-links`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobEntityLinksResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobEntityLinksResponse` | `jobEntityLinksResponseSchema` | `src/models/job-entity-links-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getJobTasksetCoverageV2JobsJobIdTasksetCoverageGet

- **Signature**: `getJobTasksetCoverageV2JobsJobIdTasksetCoverageGet(request: Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest, options?: RequestOptions): ApiPromise<TasksetCoverageResponse, Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError>`
- **Wire**: `GET /v2/jobs/{job_id}/taskset-coverage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksetCoverageResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksetCoverageResponse` | `tasksetCoverageResponseSchema` | `src/models/taskset-coverage-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getJobUsageV2JobsJobIdUsageGet

- **Signature**: `getJobUsageV2JobsJobIdUsageGet(request: Jobs.GetJobUsageV2JobsJobIdUsageGetRequest, options?: RequestOptions): ApiPromise<JobUsageResponse, Jobs.GetJobUsageV2JobsJobIdUsageGetError>`
- **Wire**: `GET /v2/jobs/{job_id}/usage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobUsageResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.GetJobUsageV2JobsJobIdUsageGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetJobUsageV2JobsJobIdUsageGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobUsageResponse` | `jobUsageResponseSchema` | `src/models/job-usage-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getJobV2JobsJobIdGet

- **Signature**: `getJobV2JobsJobIdGet(request: Jobs.GetJobV2JobsJobIdGetRequest, options?: RequestOptions): ApiPromise<JobResponse, Jobs.GetJobV2JobsJobIdGetError>`
- **Wire**: `GET /v2/jobs/{job_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.GetJobV2JobsJobIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetJobV2JobsJobIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobResponse` | `jobResponseSchema` | `src/models/job-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### importJobV2JobsImportPost

- **Signature**: `importJobV2JobsImportPost(request: Jobs.ImportJobV2JobsImportPostRequest, options?: RequestOptions): ApiPromise<JobImportResponse, Jobs.ImportJobV2JobsImportPostError>`
- **Wire**: `POST /v2/jobs/import`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JobImportResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.ImportJobV2JobsImportPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.ImportJobV2JobsImportPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JobImportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobImportRequest` | `jobImportRequestSchema` | `src/models/job-import-request.ts` |
| `JobImportResponse` | `jobImportResponseSchema` | `src/models/job-import-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### invalidateJobV2JobsJobIdInvalidatePost

- **Signature**: `invalidateJobV2JobsJobIdInvalidatePost(request: Jobs.InvalidateJobV2JobsJobIdInvalidatePostRequest, options?: RequestOptions): ApiPromise<BatchValidateResponse, Jobs.InvalidateJobV2JobsJobIdInvalidatePostError>`
- **Wire**: `POST /v2/jobs/{job_id}/invalidate`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchValidateResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.InvalidateJobV2JobsJobIdInvalidatePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.InvalidateJobV2JobsJobIdInvalidatePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchValidateResponse` | `batchValidateResponseSchema` | `src/models/batch-validate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### jobSummaryV2JobsJobIdSummaryGet

- **Signature**: `jobSummaryV2JobsJobIdSummaryGet(request: Jobs.JobSummaryV2JobsJobIdSummaryGetRequest, options?: RequestOptions): ApiPromise<JobSummary, Jobs.JobSummaryV2JobsJobIdSummaryGetError>`
- **Wire**: `GET /v2/jobs/{job_id}/summary`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobSummary`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.JobSummaryV2JobsJobIdSummaryGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.JobSummaryV2JobsJobIdSummaryGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobSummary` | `jobSummarySchema` | `src/models/job-summary.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listActiveJobsV2JobsActiveGet

- **Signature**: `listActiveJobsV2JobsActiveGet(request?: Jobs.ListActiveJobsV2JobsActiveGetRequest, options?: RequestOptions): ApiPromise<JobResponse[], Jobs.ListActiveJobsV2JobsActiveGetError>`
- **Wire**: `GET /v2/jobs/active`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.ListActiveJobsV2JobsActiveGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.ListActiveJobsV2JobsActiveGetRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `50` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobResponse` | `jobResponseSchema` | `src/models/job-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listEnrichedJobsV2JobsEnrichedGet

- **Signature**: `listEnrichedJobsV2JobsEnrichedGet(request: Jobs.ListEnrichedJobsV2JobsEnrichedGetRequest, options?: RequestOptions): ApiPromise<TasksetJobsEnrichedResponse, Jobs.ListEnrichedJobsV2JobsEnrichedGetError>`
- **Wire**: `GET /v2/jobs/enriched`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksetJobsEnrichedResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.ListEnrichedJobsV2JobsEnrichedGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.ListEnrichedJobsV2JobsEnrichedGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `tasksetId` | `query` | `taskset_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksetJobsEnrichedResponse` | `tasksetJobsEnrichedResponseSchema` | `src/models/taskset-jobs-enriched-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listJobThumbnailsV2JobsJobIdThumbnailsGet

- **Signature**: `listJobThumbnailsV2JobsJobIdThumbnailsGet(request: Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest, options?: RequestOptions): ApiPromise<JobThumbnailsResponse, Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetError>`
- **Wire**: `GET /v2/jobs/{job_id}/thumbnails`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobThumbnailsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `100` |
| `offset` | `query` | — | `number` | no | `0` |
| `status` | `query` | — | `Status11` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status11` | `status11Schema` | `src/models/unions/status11.ts` |
| `JobThumbnailsResponse` | `jobThumbnailsResponseSchema` | `src/models/job-thumbnails-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listJobTracesV2JobsJobIdTracesGet

- **Signature**: `listJobTracesV2JobsJobIdTracesGet(request: Jobs.ListJobTracesV2JobsJobIdTracesGetRequest, options?: RequestOptions): ApiPromise<PaginatedResponseTraceResponse, Jobs.ListJobTracesV2JobsJobIdTracesGetError>`
- **Wire**: `GET /v2/jobs/{job_id}/traces`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedResponseTraceResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.ListJobTracesV2JobsJobIdTracesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.ListJobTracesV2JobsJobIdTracesGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedResponseTraceResponse` | `paginatedResponseTraceResponseSchema` | `src/models/paginated-response-trace-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listJobsV2JobsGet

- **Signature**: `listJobsV2JobsGet(request?: Jobs.ListJobsV2JobsGetRequest, options?: RequestOptions): ApiPromise<PaginatedResponseJobResponse, Jobs.ListJobsV2JobsGetError>`
- **Wire**: `GET /v2/jobs`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedResponseJobResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.ListJobsV2JobsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.ListJobsV2JobsGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |
| `tasksetId` | `query` | `taskset_id` | `TasksetId` | no | — |
| `projectId` | `query` | `project_id` | `ProjectId1` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksetId` | `tasksetIdSchema` | `src/models/unions/taskset-id.ts` |
| `ProjectId1` | `projectId1Schema` | `src/models/unions/project-id1.ts` |
| `PaginatedResponseJobResponse` | `paginatedResponseJobResponseSchema` | `src/models/paginated-response-job-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### publishJobV2JobsJobIdPublishPost

- **Signature**: `publishJobV2JobsJobIdPublishPost(request: Jobs.PublishJobV2JobsJobIdPublishPostRequest, options?: RequestOptions): ApiPromise<PublishJobResponse, Jobs.PublishJobV2JobsJobIdPublishPostError>`
- **Wire**: `POST /v2/jobs/{job_id}/publish`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublishJobResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.PublishJobV2JobsJobIdPublishPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.PublishJobV2JobsJobIdPublishPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublishJobResponse` | `publishJobResponseSchema` | `src/models/publish-job-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### revalidateJobV2JobsJobIdRevalidatePost

- **Signature**: `revalidateJobV2JobsJobIdRevalidatePost(request: Jobs.RevalidateJobV2JobsJobIdRevalidatePostRequest, options?: RequestOptions): ApiPromise<BatchValidateResponse, Jobs.RevalidateJobV2JobsJobIdRevalidatePostError>`
- **Wire**: `POST /v2/jobs/{job_id}/revalidate`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchValidateResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.RevalidateJobV2JobsJobIdRevalidatePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.RevalidateJobV2JobsJobIdRevalidatePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchValidateResponse` | `batchValidateResponseSchema` | `src/models/batch-validate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### unpublishJobV2JobsJobIdPublishDelete

- **Signature**: `unpublishJobV2JobsJobIdPublishDelete(request: Jobs.UnpublishJobV2JobsJobIdPublishDeleteRequest, options?: RequestOptions): ApiPromise<StatusResponse, Jobs.UnpublishJobV2JobsJobIdPublishDeleteError>`
- **Wire**: `DELETE /v2/jobs/{job_id}/publish`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.UnpublishJobV2JobsJobIdPublishDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.UnpublishJobV2JobsJobIdPublishDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusResponse` | `statusResponseSchema` | `src/models/status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateJobV2JobsJobIdPatch

- **Signature**: `updateJobV2JobsJobIdPatch(request: Jobs.UpdateJobV2JobsJobIdPatchRequest, options?: RequestOptions): ApiPromise<JobResponse, Jobs.UpdateJobV2JobsJobIdPatchError>`
- **Wire**: `PATCH /v2/jobs/{job_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JobResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.UpdateJobV2JobsJobIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.UpdateJobV2JobsJobIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |
| `body` | `body` | — | `JobUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobUpdateRequest` | `jobUpdateRequestSchema` | `src/models/job-update-request.ts` |
| `JobResponse` | `jobResponseSchema` | `src/models/job-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### uploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost

- **Signature**: `uploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost(request: Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest, options?: RequestOptions): ApiPromise<JobImportTrajectoryResponse, Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError>`
- **Wire**: `POST /v2/jobs/import/{job_id}/traces/{trace_id}/trajectory`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JobImportTrajectoryResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [413] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse7"` [429] `ErrorResponse` · `"errorResponse8"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |
| `traceId` | `path` | `trace_id` | `string` | yes |
| `body` | `body` | — | `AtifTrajectory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AtifTrajectory` | `atifTrajectorySchema` | `src/models/atif-trajectory.ts` |
| `JobImportTrajectoryResponse` | `jobImportTrajectoryResponseSchema` | `src/models/job-import-trajectory-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

