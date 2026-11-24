from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.enrich_jobs_v2_jobs_enrich_post_error import (
    EnrichJobsV2JobsEnrichPostErrorBody,
    enrich_jobs_v2_jobs_enrich_post_error_mapper,
)
from ..errors.finish_imported_job_v2_jobs_import_job_id_finish_post_error import (
    FinishImportedJobV2JobsImportJobIdFinishPostErrorBody,
    finish_imported_job_v2_jobs_import_job_id_finish_post_error_mapper,
)
from ..errors.finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post_error import (
    FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody,
    finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post_error_mapper,
)
from ..errors.get_job_chart_data_v2_jobs_job_id_chart_data_get_error import (
    GetJobChartDataV2JobsJobIdChartDataGetErrorBody,
    get_job_chart_data_v2_jobs_job_id_chart_data_get_error_mapper,
)
from ..errors.get_job_entity_links_v2_jobs_job_id_entity_links_get_error import (
    GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody,
    get_job_entity_links_v2_jobs_job_id_entity_links_get_error_mapper,
)
from ..errors.get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get_error import (
    GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody,
    get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get_error_mapper,
)
from ..errors.get_job_usage_v2_jobs_job_id_usage_get_error import (
    GetJobUsageV2JobsJobIdUsageGetErrorBody,
    get_job_usage_v2_jobs_job_id_usage_get_error_mapper,
)
from ..errors.get_job_v2_jobs_job_id_get_error import (
    GetJobV2JobsJobIdGetErrorBody,
    get_job_v2_jobs_job_id_get_error_mapper,
)
from ..errors.import_job_v2_jobs_import_post_error import (
    ImportJobV2JobsImportPostErrorBody,
    import_job_v2_jobs_import_post_error_mapper,
)
from ..errors.invalidate_job_v2_jobs_job_id_invalidate_post_error import (
    InvalidateJobV2JobsJobIdInvalidatePostErrorBody,
    invalidate_job_v2_jobs_job_id_invalidate_post_error_mapper,
)
from ..errors.job_summary_v2_jobs_job_id_summary_get_error import (
    JobSummaryV2JobsJobIdSummaryGetErrorBody,
    job_summary_v2_jobs_job_id_summary_get_error_mapper,
)
from ..errors.list_active_jobs_v2_jobs_active_get_error import (
    ListActiveJobsV2JobsActiveGetErrorBody,
    list_active_jobs_v2_jobs_active_get_error_mapper,
)
from ..errors.list_enriched_jobs_v2_jobs_enriched_get_error import (
    ListEnrichedJobsV2JobsEnrichedGetErrorBody,
    list_enriched_jobs_v2_jobs_enriched_get_error_mapper,
)
from ..errors.list_job_thumbnails_v2_jobs_job_id_thumbnails_get_error import (
    ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody,
    list_job_thumbnails_v2_jobs_job_id_thumbnails_get_error_mapper,
)
from ..errors.list_job_traces_v2_jobs_job_id_traces_get_error import (
    ListJobTracesV2JobsJobIdTracesGetErrorBody,
    list_job_traces_v2_jobs_job_id_traces_get_error_mapper,
)
from ..errors.list_jobs_v2_jobs_get_error import ListJobsV2JobsGetErrorBody, list_jobs_v2_jobs_get_error_mapper
from ..errors.publish_job_v2_jobs_job_id_publish_post_error import (
    PublishJobV2JobsJobIdPublishPostErrorBody,
    publish_job_v2_jobs_job_id_publish_post_error_mapper,
)
from ..errors.revalidate_job_v2_jobs_job_id_revalidate_post_error import (
    RevalidateJobV2JobsJobIdRevalidatePostErrorBody,
    revalidate_job_v2_jobs_job_id_revalidate_post_error_mapper,
)
from ..errors.unpublish_job_v2_jobs_job_id_publish_delete_error import (
    UnpublishJobV2JobsJobIdPublishDeleteErrorBody,
    unpublish_job_v2_jobs_job_id_publish_delete_error_mapper,
)
from ..errors.update_job_v2_jobs_job_id_patch_error import (
    UpdateJobV2JobsJobIdPatchErrorBody,
    update_job_v2_jobs_job_id_patch_error_mapper,
)
from ..errors.upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post_error import (
    UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody,
    upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post_error_mapper,
)
from ..models.atif_trajectory import AtifTrajectory, AtifTrajectoryDict
from ..models.batch_validate_response import BatchValidateResponse
from ..models.chart_data_response import ChartDataResponse
from ..models.enrich_jobs_response import EnrichJobsResponse
from ..models.enums.trace_status import TraceStatusOrStr
from ..models.job_entity_links_response import JobEntityLinksResponse
from ..models.job_import_finish_response import JobImportFinishResponse
from ..models.job_import_request import JobImportRequest, JobImportRequestDict
from ..models.job_import_response import JobImportResponse
from ..models.job_import_trace_result import JobImportTraceResult, JobImportTraceResultDict
from ..models.job_import_trace_result_response import JobImportTraceResultResponse
from ..models.job_import_trajectory_response import JobImportTrajectoryResponse
from ..models.job_response import JobResponse
from ..models.job_summary import JobSummary
from ..models.job_thumbnails_response import JobThumbnailsResponse
from ..models.job_update_request import JobUpdateRequest, JobUpdateRequestDict
from ..models.job_usage_response import JobUsageResponse
from ..models.paginated_response_job_response import PaginatedResponseJobResponse
from ..models.paginated_response_trace_response import PaginatedResponseTraceResponse
from ..models.publish_job_response import PublishJobResponse
from ..models.status_response import StatusResponse
from ..models.taskset_coverage_response import TasksetCoverageResponse
from ..models.taskset_jobs_enriched_response import TasksetJobsEnrichedResponse
from ..server.server import Server


class Jobs:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = JobsWithRawResponse(client, server)

    def enrich_jobs_v2_jobs_enrich_post(
        self, body: list[UUID], *, request_options: RequestOptionsOrDict | None = None
    ) -> EnrichJobsResponse:
        """Fetch enrichment data (chart points, task coverage, models) for a batch of jobs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.enrich_jobs_v2_jobs_enrich_post(body, request_options=request_options))

    def finish_imported_job_v2_jobs_import_job_id_finish_post(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobImportFinishResponse:
        """Finish an imported job once each of its traces has been finished.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.finish_imported_job_v2_jobs_import_job_id_finish_post(
                job_id, request_options=request_options
            ),
        )

    def finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
        self,
        job_id: UUID,
        trace_id: UUID,
        body: JobImportTraceResult | JobImportTraceResultDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> JobImportTraceResultResponse:
        """Record the outcome of one imported trace after its trajectory is uploaded.

        Args:
            job_id: Value sent with the request.
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
                job_id, trace_id, body, request_options=request_options
            ),
        )

    def get_job_chart_data_v2_jobs_job_id_chart_data_get(
        self, job_id: UUID, *, limit: int | None = 5000, request_options: RequestOptionsOrDict | None = None
    ) -> ChartDataResponse:
        """Get per-trace reward data points for charting a job's results.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_job_chart_data_v2_jobs_job_id_chart_data_get(
                job_id, limit=limit, request_options=request_options
            ),
        )

    def get_job_entity_links_v2_jobs_job_id_entity_links_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobEntityLinksResponse:
        """List tasksets and registries linked to a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_job_entity_links_v2_jobs_job_id_entity_links_get(
                job_id, request_options=request_options
            ),
        )

    def get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TasksetCoverageResponse:
        """Get per-task coverage of the job's taskset, including unattempted tasks.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
                job_id, request_options=request_options
            ),
        )

    def get_job_usage_v2_jobs_job_id_usage_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobUsageResponse:
        """Get per-trace compute and inference usage for a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_job_usage_v2_jobs_job_id_usage_get(job_id, request_options=request_options)
        )

    def get_job_v2_jobs_job_id_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobResponse:
        """Get a job by id.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_job_v2_jobs_job_id_get(job_id, request_options=request_options))

    def import_job_v2_jobs_import_post(
        self, body: JobImportRequest | JobImportRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobImportResponse:
        """Add runs done outside HUD to an imported job, creating the job on first call.

        Each trace is linked to its task by content digest and starts running. A running trace with no span upload for
        an hour is errored, so add traces as they are uploaded rather than all at once. Retried traces are reported as
        already imported.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.import_job_v2_jobs_import_post(body, request_options=request_options))

    def invalidate_job_v2_jobs_job_id_invalidate_post(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BatchValidateResponse:
        """Mark every trace in this job as invalid (excluded from leaderboards).

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.invalidate_job_v2_jobs_job_id_invalidate_post(
                job_id, request_options=request_options
            ),
        )

    def job_summary_v2_jobs_job_id_summary_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobSummary:
        """Get aggregate trace statistics for a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.job_summary_v2_jobs_job_id_summary_get(job_id, request_options=request_options)
        )

    def list_active_jobs_v2_jobs_active_get(
        self, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> list[JobResponse]:
        """List a bounded page of currently running jobs for the caller's team.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_active_jobs_v2_jobs_active_get(
                limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_enriched_jobs_v2_jobs_enriched_get(
        self,
        taskset_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TasksetJobsEnrichedResponse:
        """List enriched taskset jobs; public-only viewers receive public jobs.

        Args:
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_enriched_jobs_v2_jobs_enriched_get(
                taskset_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
        self,
        job_id: UUID,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        status: list[TraceStatusOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> JobThumbnailsResponse:
        """List trace thumbnails for a job with presigned image URLs.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Only traces in these statuses; the category counts cover the same traces.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
                job_id, limit=limit, offset=offset, status=status, request_options=request_options
            ),
        )

    def list_job_traces_v2_jobs_job_id_traces_get(
        self,
        job_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedResponseTraceResponse:
        """List traces belonging to a job.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_job_traces_v2_jobs_job_id_traces_get(
                job_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_jobs_v2_jobs_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        taskset_id: UUID | None = None,
        project_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedResponseJobResponse:
        """List jobs for the caller's team, optionally filtered by taskset or Project.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            taskset_id: Value sent with the request.
            project_id: Only jobs contained by this Project; omitted lists every Project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_jobs_v2_jobs_get(
                limit=limit,
                offset=offset,
                taskset_id=taskset_id,
                project_id=project_id,
                request_options=request_options,
            ),
        )

    def publish_job_v2_jobs_job_id_publish_post(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublishJobResponse:
        """Set ``jobs.public=true`` so the job is visible on the public taskset page.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.publish_job_v2_jobs_job_id_publish_post(job_id, request_options=request_options)
        )

    def revalidate_job_v2_jobs_job_id_revalidate_post(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BatchValidateResponse:
        """Re-include every trace in this job in leaderboard calculations.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.revalidate_job_v2_jobs_job_id_revalidate_post(
                job_id, request_options=request_options
            ),
        )

    def unpublish_job_v2_jobs_job_id_publish_delete(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> StatusResponse:
        """Set ``jobs.public=false``; the job and its traces return to invited-only visibility.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.unpublish_job_v2_jobs_job_id_publish_delete(job_id, request_options=request_options)
        )

    def update_job_v2_jobs_job_id_patch(
        self,
        job_id: UUID,
        body: JobUpdateRequest | JobUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> JobResponse:
        """Update a job's mutable fields, such as its name.

        Args:
            job_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.update_job_v2_jobs_job_id_patch(job_id, body, request_options=request_options)
        )

    def upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
        self,
        job_id: UUID,
        trace_id: UUID,
        body: AtifTrajectory | AtifTrajectoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> JobImportTrajectoryResponse:
        """Store an ATIF agent trajectory as an imported trace's telemetry.

        Upload it before finishing the trace. A trace keeps the first trajectory it receives; a repeated upload reports
        ``ingested: false``.

        Args:
            job_id: Value sent with the request.
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Request exceeds a size limit Validation Error
                Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
                job_id, trace_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> JobsWithRawResponse:
        return self._with_raw_response


class AsyncJobs:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncJobsWithRawResponse(client, server)

    async def enrich_jobs_v2_jobs_enrich_post(
        self, body: list[UUID], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnrichJobsResponse:
        """Fetch enrichment data (chart points, task coverage, models) for a batch of jobs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.enrich_jobs_v2_jobs_enrich_post(body, request_options=request_options)
        )

    async def finish_imported_job_v2_jobs_import_job_id_finish_post(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobImportFinishResponse:
        """Finish an imported job once each of its traces has been finished.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.finish_imported_job_v2_jobs_import_job_id_finish_post(
                job_id, request_options=request_options
            ),
        )

    async def finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
        self,
        job_id: UUID,
        trace_id: UUID,
        body: JobImportTraceResult | JobImportTraceResultDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> JobImportTraceResultResponse:
        """Record the outcome of one imported trace after its trajectory is uploaded.

        Args:
            job_id: Value sent with the request.
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
                job_id, trace_id, body, request_options=request_options
            ),
        )

    async def get_job_chart_data_v2_jobs_job_id_chart_data_get(
        self, job_id: UUID, *, limit: int | None = 5000, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ChartDataResponse:
        """Get per-trace reward data points for charting a job's results.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_job_chart_data_v2_jobs_job_id_chart_data_get(
                job_id, limit=limit, request_options=request_options
            ),
        )

    async def get_job_entity_links_v2_jobs_job_id_entity_links_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobEntityLinksResponse:
        """List tasksets and registries linked to a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_job_entity_links_v2_jobs_job_id_entity_links_get(
                job_id, request_options=request_options
            ),
        )

    async def get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TasksetCoverageResponse:
        """Get per-task coverage of the job's taskset, including unattempted tasks.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
                job_id, request_options=request_options
            ),
        )

    async def get_job_usage_v2_jobs_job_id_usage_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobUsageResponse:
        """Get per-trace compute and inference usage for a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_job_usage_v2_jobs_job_id_usage_get(
                job_id, request_options=request_options
            ),
        )

    async def get_job_v2_jobs_job_id_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobResponse:
        """Get a job by id.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.get_job_v2_jobs_job_id_get(job_id, request_options=request_options))

    async def import_job_v2_jobs_import_post(
        self, body: JobImportRequest | JobImportRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobImportResponse:
        """Add runs done outside HUD to an imported job, creating the job on first call.

        Each trace is linked to its task by content digest and starts running. A running trace with no span upload for
        an hour is errored, so add traces as they are uploaded rather than all at once. Retried traces are reported as
        already imported.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.import_job_v2_jobs_import_post(body, request_options=request_options)
        )

    async def invalidate_job_v2_jobs_job_id_invalidate_post(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BatchValidateResponse:
        """Mark every trace in this job as invalid (excluded from leaderboards).

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.invalidate_job_v2_jobs_job_id_invalidate_post(
                job_id, request_options=request_options
            ),
        )

    async def job_summary_v2_jobs_job_id_summary_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobSummary:
        """Get aggregate trace statistics for a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.job_summary_v2_jobs_job_id_summary_get(
                job_id, request_options=request_options
            ),
        )

    async def list_active_jobs_v2_jobs_active_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[JobResponse]:
        """List a bounded page of currently running jobs for the caller's team.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_active_jobs_v2_jobs_active_get(
                limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_enriched_jobs_v2_jobs_enriched_get(
        self,
        taskset_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TasksetJobsEnrichedResponse:
        """List enriched taskset jobs; public-only viewers receive public jobs.

        Args:
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_enriched_jobs_v2_jobs_enriched_get(
                taskset_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
        self,
        job_id: UUID,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        status: list[TraceStatusOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> JobThumbnailsResponse:
        """List trace thumbnails for a job with presigned image URLs.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Only traces in these statuses; the category counts cover the same traces.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
                job_id, limit=limit, offset=offset, status=status, request_options=request_options
            ),
        )

    async def list_job_traces_v2_jobs_job_id_traces_get(
        self,
        job_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedResponseTraceResponse:
        """List traces belonging to a job.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_job_traces_v2_jobs_job_id_traces_get(
                job_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_jobs_v2_jobs_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        taskset_id: UUID | None = None,
        project_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedResponseJobResponse:
        """List jobs for the caller's team, optionally filtered by taskset or Project.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            taskset_id: Value sent with the request.
            project_id: Only jobs contained by this Project; omitted lists every Project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_jobs_v2_jobs_get(
                limit=limit,
                offset=offset,
                taskset_id=taskset_id,
                project_id=project_id,
                request_options=request_options,
            ),
        )

    async def publish_job_v2_jobs_job_id_publish_post(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublishJobResponse:
        """Set ``jobs.public=true`` so the job is visible on the public taskset page.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.publish_job_v2_jobs_job_id_publish_post(
                job_id, request_options=request_options
            ),
        )

    async def revalidate_job_v2_jobs_job_id_revalidate_post(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BatchValidateResponse:
        """Re-include every trace in this job in leaderboard calculations.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.revalidate_job_v2_jobs_job_id_revalidate_post(
                job_id, request_options=request_options
            ),
        )

    async def unpublish_job_v2_jobs_job_id_publish_delete(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StatusResponse:
        """Set ``jobs.public=false``; the job and its traces return to invited-only visibility.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.unpublish_job_v2_jobs_job_id_publish_delete(
                job_id, request_options=request_options
            ),
        )

    async def update_job_v2_jobs_job_id_patch(
        self,
        job_id: UUID,
        body: JobUpdateRequest | JobUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> JobResponse:
        """Update a job's mutable fields, such as its name.

        Args:
            job_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_job_v2_jobs_job_id_patch(job_id, body, request_options=request_options)
        )

    async def upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
        self,
        job_id: UUID,
        trace_id: UUID,
        body: AtifTrajectory | AtifTrajectoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> JobImportTrajectoryResponse:
        """Store an ATIF agent trajectory as an imported trace's telemetry.

        Upload it before finishing the trace. A trace keeps the first trajectory it receives; a repeated upload reports
        ``ingested: false``.

        Args:
            job_id: Value sent with the request.
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Request exceeds a size limit Validation Error
                Rate limit exceeded; wait at least Retry-After seconds The server is at capacity; retry after
                Retry-After seconds ``error`` is ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
                job_id, trace_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncJobsWithRawResponse:
        return self._with_raw_response


class JobsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def enrich_jobs_v2_jobs_enrich_post(
        self, body: list[UUID], *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnrichJobsResponse, EnrichJobsV2JobsEnrichPostErrorBody]:
        """Fetch enrichment data (chart points, task coverage, models) for a batch of jobs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[UUID]](body),
            decoder=json_decoder[EnrichJobsResponse],
            error_mapper=enrich_jobs_v2_jobs_enrich_post_error_mapper,
            request_options=request_options,
        )

    def finish_imported_job_v2_jobs_import_job_id_finish_post(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobImportFinishResponse, FinishImportedJobV2JobsImportJobIdFinishPostErrorBody]:
        """Finish an imported job once each of its traces has been finished.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/import/{job_id}/finish"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[JobImportFinishResponse],
            error_mapper=finish_imported_job_v2_jobs_import_job_id_finish_post_error_mapper,
            request_options=request_options,
        )

    def finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
        self,
        job_id: UUID,
        trace_id: UUID,
        body: JobImportTraceResult | JobImportTraceResultDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[JobImportTraceResultResponse, FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody]:
        """Record the outcome of one imported trace after its trajectory is uploaded.

        Args:
            job_id: Value sent with the request.
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/import/{job_id}/traces/{trace_id}/finish"),
            path_params=[param[UUID]("job_id", job_id), param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobImportTraceResult | JobImportTraceResultDict](body),
            decoder=json_decoder[JobImportTraceResultResponse],
            error_mapper=finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post_error_mapper,
            request_options=request_options,
        )

    def get_job_chart_data_v2_jobs_job_id_chart_data_get(
        self, job_id: UUID, *, limit: int | None = 5000, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ChartDataResponse, GetJobChartDataV2JobsJobIdChartDataGetErrorBody]:
        """Get per-trace reward data points for charting a job's results.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/chart-data"),
            path_params=[param[UUID]("job_id", job_id)],
            query_params=[param[int | None]("limit", limit)],
            decoder=json_decoder[ChartDataResponse],
            error_mapper=get_job_chart_data_v2_jobs_job_id_chart_data_get_error_mapper,
            request_options=request_options,
        )

    def get_job_entity_links_v2_jobs_job_id_entity_links_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobEntityLinksResponse, GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody]:
        """List tasksets and registries linked to a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/entity-links"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=json_decoder[JobEntityLinksResponse],
            error_mapper=get_job_entity_links_v2_jobs_job_id_entity_links_get_error_mapper,
            request_options=request_options,
        )

    def get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TasksetCoverageResponse, GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody]:
        """Get per-task coverage of the job's taskset, including unattempted tasks.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/taskset-coverage"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=json_decoder[TasksetCoverageResponse],
            error_mapper=get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get_error_mapper,
            request_options=request_options,
        )

    def get_job_usage_v2_jobs_job_id_usage_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobUsageResponse, GetJobUsageV2JobsJobIdUsageGetErrorBody]:
        """Get per-trace compute and inference usage for a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/usage"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=json_decoder[JobUsageResponse],
            error_mapper=get_job_usage_v2_jobs_job_id_usage_get_error_mapper,
            request_options=request_options,
        )

    def get_job_v2_jobs_job_id_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobResponse, GetJobV2JobsJobIdGetErrorBody]:
        """Get a job by id.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=json_decoder[JobResponse],
            error_mapper=get_job_v2_jobs_job_id_get_error_mapper,
            request_options=request_options,
        )

    def import_job_v2_jobs_import_post(
        self, body: JobImportRequest | JobImportRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobImportResponse, ImportJobV2JobsImportPostErrorBody]:
        """Add runs done outside HUD to an imported job, creating the job on first call.

        Each trace is linked to its task by content digest and starts running. A running trace with no span upload for
        an hour is errored, so add traces as they are uploaded rather than all at once. Retried traces are reported as
        already imported.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobImportRequest | JobImportRequestDict](body),
            decoder=json_decoder[JobImportResponse],
            error_mapper=import_job_v2_jobs_import_post_error_mapper,
            request_options=request_options,
        )

    def invalidate_job_v2_jobs_job_id_invalidate_post(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BatchValidateResponse, InvalidateJobV2JobsJobIdInvalidatePostErrorBody]:
        """Mark every trace in this job as invalid (excluded from leaderboards).

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/{job_id}/invalidate"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[BatchValidateResponse],
            error_mapper=invalidate_job_v2_jobs_job_id_invalidate_post_error_mapper,
            request_options=request_options,
        )

    def job_summary_v2_jobs_job_id_summary_get(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobSummary, JobSummaryV2JobsJobIdSummaryGetErrorBody]:
        """Get aggregate trace statistics for a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/summary"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=json_decoder[JobSummary],
            error_mapper=job_summary_v2_jobs_job_id_summary_get_error_mapper,
            request_options=request_options,
        )

    def list_active_jobs_v2_jobs_active_get(
        self, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[JobResponse], ListActiveJobsV2JobsActiveGetErrorBody]:
        """List a bounded page of currently running jobs for the caller's team.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/active"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            decoder=json_decoder[list[JobResponse]],
            error_mapper=list_active_jobs_v2_jobs_active_get_error_mapper,
            request_options=request_options,
        )

    def list_enriched_jobs_v2_jobs_enriched_get(
        self,
        taskset_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksetJobsEnrichedResponse, ListEnrichedJobsV2JobsEnrichedGetErrorBody]:
        """List enriched taskset jobs; public-only viewers receive public jobs.

        Args:
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/enriched"),
            query_params=[
                param[UUID]("taskset_id", taskset_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=json_decoder[TasksetJobsEnrichedResponse],
            error_mapper=list_enriched_jobs_v2_jobs_enriched_get_error_mapper,
            request_options=request_options,
        )

    def list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
        self,
        job_id: UUID,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        status: list[TraceStatusOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[JobThumbnailsResponse, ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody]:
        """List trace thumbnails for a job with presigned image URLs.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Only traces in these statuses; the category counts cover the same traces.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/thumbnails"),
            path_params=[param[UUID]("job_id", job_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[list[TraceStatusOrStr] | None]("status", status),
            ],
            decoder=json_decoder[JobThumbnailsResponse],
            error_mapper=list_job_thumbnails_v2_jobs_job_id_thumbnails_get_error_mapper,
            request_options=request_options,
        )

    def list_job_traces_v2_jobs_job_id_traces_get(
        self,
        job_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseTraceResponse, ListJobTracesV2JobsJobIdTracesGetErrorBody]:
        """List traces belonging to a job.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/traces"),
            path_params=[param[UUID]("job_id", job_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            decoder=json_decoder[PaginatedResponseTraceResponse],
            error_mapper=list_job_traces_v2_jobs_job_id_traces_get_error_mapper,
            request_options=request_options,
        )

    def list_jobs_v2_jobs_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        taskset_id: UUID | None = None,
        project_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseJobResponse, ListJobsV2JobsGetErrorBody]:
        """List jobs for the caller's team, optionally filtered by taskset or Project.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            taskset_id: Value sent with the request.
            project_id: Only jobs contained by this Project; omitted lists every Project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[UUID | None]("taskset_id", taskset_id),
                param[UUID | None]("project_id", project_id),
            ],
            decoder=json_decoder[PaginatedResponseJobResponse],
            error_mapper=list_jobs_v2_jobs_get_error_mapper,
            request_options=request_options,
        )

    def publish_job_v2_jobs_job_id_publish_post(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublishJobResponse, PublishJobV2JobsJobIdPublishPostErrorBody]:
        """Set ``jobs.public=true`` so the job is visible on the public taskset page.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/{job_id}/publish"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[PublishJobResponse],
            error_mapper=publish_job_v2_jobs_job_id_publish_post_error_mapper,
            request_options=request_options,
        )

    def revalidate_job_v2_jobs_job_id_revalidate_post(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BatchValidateResponse, RevalidateJobV2JobsJobIdRevalidatePostErrorBody]:
        """Re-include every trace in this job in leaderboard calculations.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/{job_id}/revalidate"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[BatchValidateResponse],
            error_mapper=revalidate_job_v2_jobs_job_id_revalidate_post_error_mapper,
            request_options=request_options,
        )

    def unpublish_job_v2_jobs_job_id_publish_delete(
        self, job_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StatusResponse, UnpublishJobV2JobsJobIdPublishDeleteErrorBody]:
        """Set ``jobs.public=false``; the job and its traces return to invited-only visibility.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/jobs/{job_id}/publish"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[StatusResponse],
            error_mapper=unpublish_job_v2_jobs_job_id_publish_delete_error_mapper,
            request_options=request_options,
        )

    def update_job_v2_jobs_job_id_patch(
        self,
        job_id: UUID,
        body: JobUpdateRequest | JobUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[JobResponse, UpdateJobV2JobsJobIdPatchErrorBody]:
        """Update a job's mutable fields, such as its name.

        Args:
            job_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/jobs/{job_id}"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobUpdateRequest | JobUpdateRequestDict](body),
            decoder=json_decoder[JobResponse],
            error_mapper=update_job_v2_jobs_job_id_patch_error_mapper,
            request_options=request_options,
        )

    def upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
        self,
        job_id: UUID,
        trace_id: UUID,
        body: AtifTrajectory | AtifTrajectoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        JobImportTrajectoryResponse, UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody
    ]:
        """Store an ATIF agent trajectory as an imported trace's telemetry.

        Upload it before finishing the trace. A trace keeps the first trajectory it receives; a repeated upload reports
        ``ingested: false``.

        Args:
            job_id: Value sent with the request.
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/import/{job_id}/traces/{trace_id}/trajectory"),
            path_params=[param[UUID]("job_id", job_id), param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AtifTrajectory | AtifTrajectoryDict](body),
            decoder=json_decoder[JobImportTrajectoryResponse],
            error_mapper=upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post_error_mapper,
            request_options=request_options,
        )


class AsyncJobsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def enrich_jobs_v2_jobs_enrich_post(
        self, body: list[UUID], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnrichJobsResponse, EnrichJobsV2JobsEnrichPostErrorBody]:
        """Fetch enrichment data (chart points, task coverage, models) for a batch of jobs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[UUID]](body),
            decoder=async_json_decoder[EnrichJobsResponse],
            error_mapper=enrich_jobs_v2_jobs_enrich_post_error_mapper,
            request_options=request_options,
        )

    async def finish_imported_job_v2_jobs_import_job_id_finish_post(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobImportFinishResponse, FinishImportedJobV2JobsImportJobIdFinishPostErrorBody]:
        """Finish an imported job once each of its traces has been finished.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/import/{job_id}/finish"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[JobImportFinishResponse],
            error_mapper=finish_imported_job_v2_jobs_import_job_id_finish_post_error_mapper,
            request_options=request_options,
        )

    async def finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
        self,
        job_id: UUID,
        trace_id: UUID,
        body: JobImportTraceResult | JobImportTraceResultDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[JobImportTraceResultResponse, FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody]:
        """Record the outcome of one imported trace after its trajectory is uploaded.

        Args:
            job_id: Value sent with the request.
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/import/{job_id}/traces/{trace_id}/finish"),
            path_params=[param[UUID]("job_id", job_id), param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobImportTraceResult | JobImportTraceResultDict](body),
            decoder=async_json_decoder[JobImportTraceResultResponse],
            error_mapper=finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post_error_mapper,
            request_options=request_options,
        )

    async def get_job_chart_data_v2_jobs_job_id_chart_data_get(
        self, job_id: UUID, *, limit: int | None = 5000, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ChartDataResponse, GetJobChartDataV2JobsJobIdChartDataGetErrorBody]:
        """Get per-trace reward data points for charting a job's results.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/chart-data"),
            path_params=[param[UUID]("job_id", job_id)],
            query_params=[param[int | None]("limit", limit)],
            decoder=async_json_decoder[ChartDataResponse],
            error_mapper=get_job_chart_data_v2_jobs_job_id_chart_data_get_error_mapper,
            request_options=request_options,
        )

    async def get_job_entity_links_v2_jobs_job_id_entity_links_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobEntityLinksResponse, GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody]:
        """List tasksets and registries linked to a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/entity-links"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=async_json_decoder[JobEntityLinksResponse],
            error_mapper=get_job_entity_links_v2_jobs_job_id_entity_links_get_error_mapper,
            request_options=request_options,
        )

    async def get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TasksetCoverageResponse, GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody]:
        """Get per-task coverage of the job's taskset, including unattempted tasks.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/taskset-coverage"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=async_json_decoder[TasksetCoverageResponse],
            error_mapper=get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get_error_mapper,
            request_options=request_options,
        )

    async def get_job_usage_v2_jobs_job_id_usage_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobUsageResponse, GetJobUsageV2JobsJobIdUsageGetErrorBody]:
        """Get per-trace compute and inference usage for a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/usage"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=async_json_decoder[JobUsageResponse],
            error_mapper=get_job_usage_v2_jobs_job_id_usage_get_error_mapper,
            request_options=request_options,
        )

    async def get_job_v2_jobs_job_id_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobResponse, GetJobV2JobsJobIdGetErrorBody]:
        """Get a job by id.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=async_json_decoder[JobResponse],
            error_mapper=get_job_v2_jobs_job_id_get_error_mapper,
            request_options=request_options,
        )

    async def import_job_v2_jobs_import_post(
        self, body: JobImportRequest | JobImportRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobImportResponse, ImportJobV2JobsImportPostErrorBody]:
        """Add runs done outside HUD to an imported job, creating the job on first call.

        Each trace is linked to its task by content digest and starts running. A running trace with no span upload for
        an hour is errored, so add traces as they are uploaded rather than all at once. Retried traces are reported as
        already imported.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobImportRequest | JobImportRequestDict](body),
            decoder=async_json_decoder[JobImportResponse],
            error_mapper=import_job_v2_jobs_import_post_error_mapper,
            request_options=request_options,
        )

    async def invalidate_job_v2_jobs_job_id_invalidate_post(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BatchValidateResponse, InvalidateJobV2JobsJobIdInvalidatePostErrorBody]:
        """Mark every trace in this job as invalid (excluded from leaderboards).

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/{job_id}/invalidate"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[BatchValidateResponse],
            error_mapper=invalidate_job_v2_jobs_job_id_invalidate_post_error_mapper,
            request_options=request_options,
        )

    async def job_summary_v2_jobs_job_id_summary_get(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobSummary, JobSummaryV2JobsJobIdSummaryGetErrorBody]:
        """Get aggregate trace statistics for a job.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/summary"),
            path_params=[param[UUID]("job_id", job_id)],
            decoder=async_json_decoder[JobSummary],
            error_mapper=job_summary_v2_jobs_job_id_summary_get_error_mapper,
            request_options=request_options,
        )

    async def list_active_jobs_v2_jobs_active_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[JobResponse], ListActiveJobsV2JobsActiveGetErrorBody]:
        """List a bounded page of currently running jobs for the caller's team.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/active"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            decoder=async_json_decoder[list[JobResponse]],
            error_mapper=list_active_jobs_v2_jobs_active_get_error_mapper,
            request_options=request_options,
        )

    async def list_enriched_jobs_v2_jobs_enriched_get(
        self,
        taskset_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TasksetJobsEnrichedResponse, ListEnrichedJobsV2JobsEnrichedGetErrorBody]:
        """List enriched taskset jobs; public-only viewers receive public jobs.

        Args:
            taskset_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/enriched"),
            query_params=[
                param[UUID]("taskset_id", taskset_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=async_json_decoder[TasksetJobsEnrichedResponse],
            error_mapper=list_enriched_jobs_v2_jobs_enriched_get_error_mapper,
            request_options=request_options,
        )

    async def list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
        self,
        job_id: UUID,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        status: list[TraceStatusOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[JobThumbnailsResponse, ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody]:
        """List trace thumbnails for a job with presigned image URLs.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Only traces in these statuses; the category counts cover the same traces.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/thumbnails"),
            path_params=[param[UUID]("job_id", job_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[list[TraceStatusOrStr] | None]("status", status),
            ],
            decoder=async_json_decoder[JobThumbnailsResponse],
            error_mapper=list_job_thumbnails_v2_jobs_job_id_thumbnails_get_error_mapper,
            request_options=request_options,
        )

    async def list_job_traces_v2_jobs_job_id_traces_get(
        self,
        job_id: UUID,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseTraceResponse, ListJobTracesV2JobsJobIdTracesGetErrorBody]:
        """List traces belonging to a job.

        Args:
            job_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs/{job_id}/traces"),
            path_params=[param[UUID]("job_id", job_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            decoder=async_json_decoder[PaginatedResponseTraceResponse],
            error_mapper=list_job_traces_v2_jobs_job_id_traces_get_error_mapper,
            request_options=request_options,
        )

    async def list_jobs_v2_jobs_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        taskset_id: UUID | None = None,
        project_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseJobResponse, ListJobsV2JobsGetErrorBody]:
        """List jobs for the caller's team, optionally filtered by taskset or Project.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            taskset_id: Value sent with the request.
            project_id: Only jobs contained by this Project; omitted lists every Project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/jobs"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[UUID | None]("taskset_id", taskset_id),
                param[UUID | None]("project_id", project_id),
            ],
            decoder=async_json_decoder[PaginatedResponseJobResponse],
            error_mapper=list_jobs_v2_jobs_get_error_mapper,
            request_options=request_options,
        )

    async def publish_job_v2_jobs_job_id_publish_post(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublishJobResponse, PublishJobV2JobsJobIdPublishPostErrorBody]:
        """Set ``jobs.public=true`` so the job is visible on the public taskset page.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/{job_id}/publish"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[PublishJobResponse],
            error_mapper=publish_job_v2_jobs_job_id_publish_post_error_mapper,
            request_options=request_options,
        )

    async def revalidate_job_v2_jobs_job_id_revalidate_post(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BatchValidateResponse, RevalidateJobV2JobsJobIdRevalidatePostErrorBody]:
        """Re-include every trace in this job in leaderboard calculations.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/{job_id}/revalidate"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[BatchValidateResponse],
            error_mapper=revalidate_job_v2_jobs_job_id_revalidate_post_error_mapper,
            request_options=request_options,
        )

    async def unpublish_job_v2_jobs_job_id_publish_delete(
        self, job_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StatusResponse, UnpublishJobV2JobsJobIdPublishDeleteErrorBody]:
        """Set ``jobs.public=false``; the job and its traces return to invited-only visibility.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/jobs/{job_id}/publish"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[StatusResponse],
            error_mapper=unpublish_job_v2_jobs_job_id_publish_delete_error_mapper,
            request_options=request_options,
        )

    async def update_job_v2_jobs_job_id_patch(
        self,
        job_id: UUID,
        body: JobUpdateRequest | JobUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[JobResponse, UpdateJobV2JobsJobIdPatchErrorBody]:
        """Update a job's mutable fields, such as its name.

        Args:
            job_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/jobs/{job_id}"),
            path_params=[param[UUID]("job_id", job_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JobUpdateRequest | JobUpdateRequestDict](body),
            decoder=async_json_decoder[JobResponse],
            error_mapper=update_job_v2_jobs_job_id_patch_error_mapper,
            request_options=request_options,
        )

    async def upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
        self,
        job_id: UUID,
        trace_id: UUID,
        body: AtifTrajectory | AtifTrajectoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        JobImportTrajectoryResponse, UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody
    ]:
        """Store an ATIF agent trajectory as an imported trace's telemetry.

        Upload it before finishing the trace. A trace keeps the first trajectory it receives; a repeated upload reports
        ``ingested: false``.

        Args:
            job_id: Value sent with the request.
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/jobs/import/{job_id}/traces/{trace_id}/trajectory"),
            path_params=[param[UUID]("job_id", job_id), param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AtifTrajectory | AtifTrajectoryDict](body),
            decoder=async_json_decoder[JobImportTrajectoryResponse],
            error_mapper=upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post_error_mapper,
            request_options=request_options,
        )
