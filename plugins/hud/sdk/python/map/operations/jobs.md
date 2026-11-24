<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `hud/apis/jobs.py` · 21 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jobs.enrich_jobs_v2_jobs_enrich_post

- **Route**: `POST /v2/jobs/enrich`
- **Signature**: `def enrich_jobs_v2_jobs_enrich_post(body: list[UUID], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EnrichJobsResponse`
- **Returns (raw)**: `ApiResult[EnrichJobsResponse, EnrichJobsV2JobsEnrichPostErrorBody]`
- **Error**: `EnrichJobsV2JobsEnrichPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnrichJobsResponse` | `hud/models/enrich_jobs_response.py` |
| `EnrichJobsV2JobsEnrichPostErrorBody` | `hud/errors/enrich_jobs_v2_jobs_enrich_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.finish_imported_job_v2_jobs_import_job_id_finish_post

- **Route**: `POST /v2/jobs/import/{job_id}/finish`
- **Signature**: `def finish_imported_job_v2_jobs_import_job_id_finish_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `JobImportFinishResponse`
- **Returns (raw)**: `ApiResult[JobImportFinishResponse, FinishImportedJobV2JobsImportJobIdFinishPostErrorBody]`
- **Error**: `FinishImportedJobV2JobsImportJobIdFinishPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobImportFinishResponse` | `hud/models/job_import_finish_response.py` |
| `FinishImportedJobV2JobsImportJobIdFinishPostErrorBody` | `hud/errors/finish_imported_job_v2_jobs_import_job_id_finish_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post

- **Route**: `POST /v2/jobs/import/{job_id}/traces/{trace_id}/finish`
- **Signature**: `def finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(job_id: UUID, trace_id: UUID, body: JobImportTraceResult | JobImportTraceResultDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`, `trace_id`, `body`
- **Params**: `job_id` — path · `trace_id` — path · `body` — JSON body
- **Returns (parsed)**: `JobImportTraceResultResponse`
- **Returns (raw)**: `ApiResult[JobImportTraceResultResponse, FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody]`
- **Error**: `FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobImportTraceResult` | `hud/models/job_import_trace_result.py` |
| `JobImportTraceResultDict` | `hud/models/job_import_trace_result.py` |
| `JobImportTraceResultResponse` | `hud/models/job_import_trace_result_response.py` |
| `FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody` | `hud/errors/finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.get_job_chart_data_v2_jobs_job_id_chart_data_get

- **Route**: `GET /v2/jobs/{job_id}/chart-data`
- **Signature**: `def get_job_chart_data_v2_jobs_job_id_chart_data_get(job_id: UUID, *, limit: int | None = 5000, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path · `limit` — query
- **Returns (parsed)**: `ChartDataResponse`
- **Returns (raw)**: `ApiResult[ChartDataResponse, GetJobChartDataV2JobsJobIdChartDataGetErrorBody]`
- **Error**: `GetJobChartDataV2JobsJobIdChartDataGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChartDataResponse` | `hud/models/chart_data_response.py` |
| `GetJobChartDataV2JobsJobIdChartDataGetErrorBody` | `hud/errors/get_job_chart_data_v2_jobs_job_id_chart_data_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.get_job_entity_links_v2_jobs_job_id_entity_links_get

- **Route**: `GET /v2/jobs/{job_id}/entity-links`
- **Signature**: `def get_job_entity_links_v2_jobs_job_id_entity_links_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `JobEntityLinksResponse`
- **Returns (raw)**: `ApiResult[JobEntityLinksResponse, GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody]`
- **Error**: `GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobEntityLinksResponse` | `hud/models/job_entity_links_response.py` |
| `GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody` | `hud/errors/get_job_entity_links_v2_jobs_job_id_entity_links_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get

- **Route**: `GET /v2/jobs/{job_id}/taskset-coverage`
- **Signature**: `def get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `TasksetCoverageResponse`
- **Returns (raw)**: `ApiResult[TasksetCoverageResponse, GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody]`
- **Error**: `GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TasksetCoverageResponse` | `hud/models/taskset_coverage_response.py` |
| `GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody` | `hud/errors/get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.get_job_usage_v2_jobs_job_id_usage_get

- **Route**: `GET /v2/jobs/{job_id}/usage`
- **Signature**: `def get_job_usage_v2_jobs_job_id_usage_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `JobUsageResponse`
- **Returns (raw)**: `ApiResult[JobUsageResponse, GetJobUsageV2JobsJobIdUsageGetErrorBody]`
- **Error**: `GetJobUsageV2JobsJobIdUsageGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobUsageResponse` | `hud/models/job_usage_response.py` |
| `GetJobUsageV2JobsJobIdUsageGetErrorBody` | `hud/errors/get_job_usage_v2_jobs_job_id_usage_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.get_job_v2_jobs_job_id_get

- **Route**: `GET /v2/jobs/{job_id}`
- **Signature**: `def get_job_v2_jobs_job_id_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `JobResponse`
- **Returns (raw)**: `ApiResult[JobResponse, GetJobV2JobsJobIdGetErrorBody]`
- **Error**: `GetJobV2JobsJobIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobResponse` | `hud/models/job_response.py` |
| `GetJobV2JobsJobIdGetErrorBody` | `hud/errors/get_job_v2_jobs_job_id_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.import_job_v2_jobs_import_post

- **Route**: `POST /v2/jobs/import`
- **Signature**: `def import_job_v2_jobs_import_post(body: JobImportRequest | JobImportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `JobImportResponse`
- **Returns (raw)**: `ApiResult[JobImportResponse, ImportJobV2JobsImportPostErrorBody]`
- **Error**: `ImportJobV2JobsImportPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobImportRequest` | `hud/models/job_import_request.py` |
| `JobImportRequestDict` | `hud/models/job_import_request.py` |
| `JobImportResponse` | `hud/models/job_import_response.py` |
| `ImportJobV2JobsImportPostErrorBody` | `hud/errors/import_job_v2_jobs_import_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.invalidate_job_v2_jobs_job_id_invalidate_post

- **Route**: `POST /v2/jobs/{job_id}/invalidate`
- **Signature**: `def invalidate_job_v2_jobs_job_id_invalidate_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `BatchValidateResponse`
- **Returns (raw)**: `ApiResult[BatchValidateResponse, InvalidateJobV2JobsJobIdInvalidatePostErrorBody]`
- **Error**: `InvalidateJobV2JobsJobIdInvalidatePostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchValidateResponse` | `hud/models/batch_validate_response.py` |
| `InvalidateJobV2JobsJobIdInvalidatePostErrorBody` | `hud/errors/invalidate_job_v2_jobs_job_id_invalidate_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.job_summary_v2_jobs_job_id_summary_get

- **Route**: `GET /v2/jobs/{job_id}/summary`
- **Signature**: `def job_summary_v2_jobs_job_id_summary_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `JobSummary`
- **Returns (raw)**: `ApiResult[JobSummary, JobSummaryV2JobsJobIdSummaryGetErrorBody]`
- **Error**: `JobSummaryV2JobsJobIdSummaryGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobSummary` | `hud/models/job_summary.py` |
| `JobSummaryV2JobsJobIdSummaryGetErrorBody` | `hud/errors/job_summary_v2_jobs_job_id_summary_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.list_active_jobs_v2_jobs_active_get

- **Route**: `GET /v2/jobs/active`
- **Signature**: `def list_active_jobs_v2_jobs_active_get(*, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query
- **Returns (parsed)**: `list[JobResponse]`
- **Returns (raw)**: `ApiResult[list[JobResponse], ListActiveJobsV2JobsActiveGetErrorBody]`
- **Error**: `ListActiveJobsV2JobsActiveGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobResponse` | `hud/models/job_response.py` |
| `ListActiveJobsV2JobsActiveGetErrorBody` | `hud/errors/list_active_jobs_v2_jobs_active_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.list_enriched_jobs_v2_jobs_enriched_get

- **Route**: `GET /v2/jobs/enriched`
- **Signature**: `def list_enriched_jobs_v2_jobs_enriched_get(taskset_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taskset_id`
- **Params**: `taskset_id` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `TasksetJobsEnrichedResponse`
- **Returns (raw)**: `ApiResult[TasksetJobsEnrichedResponse, ListEnrichedJobsV2JobsEnrichedGetErrorBody]`
- **Error**: `ListEnrichedJobsV2JobsEnrichedGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TasksetJobsEnrichedResponse` | `hud/models/taskset_jobs_enriched_response.py` |
| `ListEnrichedJobsV2JobsEnrichedGetErrorBody` | `hud/errors/list_enriched_jobs_v2_jobs_enriched_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.list_job_thumbnails_v2_jobs_job_id_thumbnails_get

- **Route**: `GET /v2/jobs/{job_id}/thumbnails`
- **Signature**: `def list_job_thumbnails_v2_jobs_job_id_thumbnails_get(job_id: UUID, *, limit: int | None = 100, offset: int | None = 0, status: list[TraceStatusOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path · `limit` — query · `offset` — query · `status` — query
- **Returns (parsed)**: `JobThumbnailsResponse`
- **Returns (raw)**: `ApiResult[JobThumbnailsResponse, ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody]`
- **Error**: `ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceStatusOrStr` | `hud/models/enums/trace_status.py` |
| `JobThumbnailsResponse` | `hud/models/job_thumbnails_response.py` |
| `ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody` | `hud/errors/list_job_thumbnails_v2_jobs_job_id_thumbnails_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.list_job_traces_v2_jobs_job_id_traces_get

- **Route**: `GET /v2/jobs/{job_id}/traces`
- **Signature**: `def list_job_traces_v2_jobs_job_id_traces_get(job_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path · `limit` — query · `offset` — query
- **Returns (parsed)**: `PaginatedResponseTraceResponse`
- **Returns (raw)**: `ApiResult[PaginatedResponseTraceResponse, ListJobTracesV2JobsJobIdTracesGetErrorBody]`
- **Error**: `ListJobTracesV2JobsJobIdTracesGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedResponseTraceResponse` | `hud/models/paginated_response_trace_response.py` |
| `ListJobTracesV2JobsJobIdTracesGetErrorBody` | `hud/errors/list_job_traces_v2_jobs_job_id_traces_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.list_jobs_v2_jobs_get

- **Route**: `GET /v2/jobs`
- **Signature**: `def list_jobs_v2_jobs_get(*, limit: int | None = 50, offset: int | None = 0, taskset_id: UUID | None = None, project_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `taskset_id` — query · `project_id` — query
- **Returns (parsed)**: `PaginatedResponseJobResponse`
- **Returns (raw)**: `ApiResult[PaginatedResponseJobResponse, ListJobsV2JobsGetErrorBody]`
- **Error**: `ListJobsV2JobsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedResponseJobResponse` | `hud/models/paginated_response_job_response.py` |
| `ListJobsV2JobsGetErrorBody` | `hud/errors/list_jobs_v2_jobs_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.publish_job_v2_jobs_job_id_publish_post

- **Route**: `POST /v2/jobs/{job_id}/publish`
- **Signature**: `def publish_job_v2_jobs_job_id_publish_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `PublishJobResponse`
- **Returns (raw)**: `ApiResult[PublishJobResponse, PublishJobV2JobsJobIdPublishPostErrorBody]`
- **Error**: `PublishJobV2JobsJobIdPublishPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublishJobResponse` | `hud/models/publish_job_response.py` |
| `PublishJobV2JobsJobIdPublishPostErrorBody` | `hud/errors/publish_job_v2_jobs_job_id_publish_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.revalidate_job_v2_jobs_job_id_revalidate_post

- **Route**: `POST /v2/jobs/{job_id}/revalidate`
- **Signature**: `def revalidate_job_v2_jobs_job_id_revalidate_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `BatchValidateResponse`
- **Returns (raw)**: `ApiResult[BatchValidateResponse, RevalidateJobV2JobsJobIdRevalidatePostErrorBody]`
- **Error**: `RevalidateJobV2JobsJobIdRevalidatePostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchValidateResponse` | `hud/models/batch_validate_response.py` |
| `RevalidateJobV2JobsJobIdRevalidatePostErrorBody` | `hud/errors/revalidate_job_v2_jobs_job_id_revalidate_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.unpublish_job_v2_jobs_job_id_publish_delete

- **Route**: `DELETE /v2/jobs/{job_id}/publish`
- **Signature**: `def unpublish_job_v2_jobs_job_id_publish_delete(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path
- **Returns (parsed)**: `StatusResponse`
- **Returns (raw)**: `ApiResult[StatusResponse, UnpublishJobV2JobsJobIdPublishDeleteErrorBody]`
- **Error**: `UnpublishJobV2JobsJobIdPublishDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusResponse` | `hud/models/status_response.py` |
| `UnpublishJobV2JobsJobIdPublishDeleteErrorBody` | `hud/errors/unpublish_job_v2_jobs_job_id_publish_delete_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.update_job_v2_jobs_job_id_patch

- **Route**: `PATCH /v2/jobs/{job_id}`
- **Signature**: `def update_job_v2_jobs_job_id_patch(job_id: UUID, body: JobUpdateRequest | JobUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`, `body`
- **Params**: `job_id` — path · `body` — JSON body
- **Returns (parsed)**: `JobResponse`
- **Returns (raw)**: `ApiResult[JobResponse, UpdateJobV2JobsJobIdPatchErrorBody]`
- **Error**: `UpdateJobV2JobsJobIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobUpdateRequest` | `hud/models/job_update_request.py` |
| `JobUpdateRequestDict` | `hud/models/job_update_request.py` |
| `JobResponse` | `hud/models/job_response.py` |
| `UpdateJobV2JobsJobIdPatchErrorBody` | `hud/errors/update_job_v2_jobs_job_id_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.jobs.upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post

- **Route**: `POST /v2/jobs/import/{job_id}/traces/{trace_id}/trajectory`
- **Signature**: `def upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(job_id: UUID, trace_id: UUID, body: AtifTrajectory | AtifTrajectoryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`, `trace_id`, `body`
- **Params**: `job_id` — path · `trace_id` — path · `body` — JSON body
- **Returns (parsed)**: `JobImportTrajectoryResponse`
- **Returns (raw)**: `ApiResult[JobImportTrajectoryResponse, UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody]`
- **Error**: `UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 413, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AtifTrajectory` | `hud/models/atif_trajectory.py` |
| `AtifTrajectoryDict` | `hud/models/atif_trajectory.py` |
| `JobImportTrajectoryResponse` | `hud/models/job_import_trajectory_response.py` |
| `UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody` | `hud/errors/upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

