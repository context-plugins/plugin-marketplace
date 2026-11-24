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
from ..errors.batch_validate_traces_v2_trace_batch_validate_post_error import (
    BatchValidateTracesV2TraceBatchValidatePostErrorBody,
    batch_validate_traces_v2_trace_batch_validate_post_error_mapper,
)
from ..errors.get_trace_analysis_context_v2_trace_trace_id_analysis_context_get_error import (
    GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody,
    get_trace_analysis_context_v2_trace_trace_id_analysis_context_get_error_mapper,
)
from ..errors.get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get_error import (
    GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody,
    get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get_error_mapper,
)
from ..errors.get_trace_env_logs_v2_trace_trace_id_env_logs_get_error import (
    GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody,
    get_trace_env_logs_v2_trace_trace_id_env_logs_get_error_mapper,
)
from ..errors.get_trace_events_v2_trace_trace_id_events_get_error import (
    GetTraceEventsV2TraceTraceIdEventsGetErrorBody,
    get_trace_events_v2_trace_trace_id_events_get_error_mapper,
)
from ..errors.get_trace_info_v2_trace_trace_id_info_get_error import (
    GetTraceInfoV2TraceTraceIdInfoGetErrorBody,
    get_trace_info_v2_trace_trace_id_info_get_error_mapper,
)
from ..errors.get_trace_logs_v2_trace_trace_id_logs_get_error import (
    GetTraceLogsV2TraceTraceIdLogsGetErrorBody,
    get_trace_logs_v2_trace_trace_id_logs_get_error_mapper,
)
from ..errors.get_trace_usage_v2_trace_trace_id_usage_get_error import (
    GetTraceUsageV2TraceTraceIdUsageGetErrorBody,
    get_trace_usage_v2_trace_trace_id_usage_get_error_mapper,
)
from ..errors.get_trace_v2_trace_trace_id_get_error import (
    GetTraceV2TraceTraceIdGetErrorBody,
    get_trace_v2_trace_trace_id_get_error_mapper,
)
from ..errors.list_related_traces_v2_trace_trace_id_related_get_error import (
    ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody,
    list_related_traces_v2_trace_trace_id_related_get_error_mapper,
)
from ..errors.publish_trace_v2_trace_trace_id_publish_post_error import (
    PublishTraceV2TraceTraceIdPublishPostErrorBody,
    publish_trace_v2_trace_trace_id_publish_post_error_mapper,
)
from ..errors.unpublish_trace_v2_trace_trace_id_publish_delete_error import (
    UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody,
    unpublish_trace_v2_trace_trace_id_publish_delete_error_mapper,
)
from ..errors.update_trace_v2_trace_trace_id_patch_error import (
    UpdateTraceV2TraceTraceIdPatchErrorBody,
    update_trace_v2_trace_trace_id_patch_error_mapper,
)
from ..models.enums.related_kind1 import RelatedKind1OrStr
from ..models.enums.related_order1 import RelatedOrder1OrStr
from ..models.env_logs_response import EnvLogsResponse
from ..models.publish_trace_response import PublishTraceResponse
from ..models.status_response import StatusResponse
from ..models.trace_analysis_context_response import TraceAnalysisContextResponse
from ..models.trace_analysis_prompt_response import TraceAnalysisPromptResponse
from ..models.trace_batch_validate_request import TraceBatchValidateRequest, TraceBatchValidateRequestDict
from ..models.trace_batch_validate_response import TraceBatchValidateResponse
from ..models.trace_detail_response import TraceDetailResponse
from ..models.trace_events_response import TraceEventsResponse
from ..models.trace_info_response import TraceInfoResponse
from ..models.trace_logs_response import TraceLogsResponse
from ..models.trace_thumbnail import TraceThumbnail
from ..models.trace_update_request import TraceUpdateRequest, TraceUpdateRequestDict
from ..models.trace_usage_breakdown import TraceUsageBreakdown
from ..server.server import Server


class Traces:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TracesWithRawResponse(client, server)

    def batch_validate_traces_v2_trace_batch_validate_post(
        self,
        body: TraceBatchValidateRequest | TraceBatchValidateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TraceBatchValidateResponse:
        """Mark a batch of traces as valid or invalid for leaderboard calculations.

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
            self._with_raw_response.batch_validate_traces_v2_trace_batch_validate_post(
                body, request_options=request_options
            ),
        )

    def get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
        self,
        trace_id: UUID,
        *,
        include_spans: bool | None = True,
        include_env_logs: bool | None = True,
        include_worker_logs: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TraceAnalysisContextResponse:
        """Aggregate context for analysis environments (QA agents).

        Args:
            trace_id: Value sent with the request.
            include_spans: Value sent with the request.
            include_env_logs: Value sent with the request.
            include_worker_logs: Value sent with the request.
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
            self._with_raw_response.get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
                trace_id,
                include_spans=include_spans,
                include_env_logs=include_env_logs,
                include_worker_logs=include_worker_logs,
                request_options=request_options,
            ),
        )

    def get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TraceAnalysisPromptResponse:
        """Size-bounded debugging prompt: error, task, trajectory, and log tails.

        Args:
            trace_id: Value sent with the request.
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
            self._with_raw_response.get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
                trace_id, request_options=request_options
            ),
        )

    def get_trace_env_logs_v2_trace_trace_id_env_logs_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> EnvLogsResponse:
        """Environment logs — the customer container's stdout/stderr.

        Fetched from the daemon's S3 debug bundle.

        Args:
            trace_id: Value sent with the request.
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
            self._with_raw_response.get_trace_env_logs_v2_trace_trace_id_env_logs_get(
                trace_id, request_options=request_options
            ),
        )

    def get_trace_events_v2_trace_trace_id_events_get(
        self,
        trace_id: UUID,
        *,
        since_seq: int | None = -1,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TraceEventsResponse:
        """Projected, typed view of a trace's telemetry — drives the trace viewer.

        Args:
            trace_id: Value sent with the request.
            since_seq: Return only events derived from spans with sequence > since_seq. Use -1 (default) for the first
                page, then pass the previous ``next_seq`` while ``has_more`` is true. Once caught up, use ``latest_seq``
                for incremental polling.
            limit: Maximum completed span references to project in this page.
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
            self._with_raw_response.get_trace_events_v2_trace_trace_id_events_get(
                trace_id, since_seq=since_seq, limit=limit, request_options=request_options
            ),
        )

    def get_trace_info_v2_trace_trace_id_info_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TraceInfoResponse:
        """Get a trace with its task, job, and model context for the trace viewer.

        Args:
            trace_id: Value sent with the request.
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
            self._with_raw_response.get_trace_info_v2_trace_trace_id_info_get(trace_id, request_options=request_options)
        )

    def get_trace_logs_v2_trace_trace_id_logs_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TraceLogsResponse:
        """Get a trace's captured worker logs.

        Args:
            trace_id: Value sent with the request.
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
            self._with_raw_response.get_trace_logs_v2_trace_trace_id_logs_get(trace_id, request_options=request_options)
        )

    def get_trace_usage_v2_trace_trace_id_usage_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TraceUsageBreakdown:
        """Get a trace's compute and inference cost breakdown.

        Args:
            trace_id: Value sent with the request.
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
            self._with_raw_response.get_trace_usage_v2_trace_trace_id_usage_get(
                trace_id, request_options=request_options
            ),
        )

    def get_trace_v2_trace_trace_id_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TraceDetailResponse:
        """Get a trace by id.

        Args:
            trace_id: Value sent with the request.
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
            self._with_raw_response.get_trace_v2_trace_trace_id_get(trace_id, request_options=request_options)
        )

    def list_related_traces_v2_trace_trace_id_related_get(
        self,
        trace_id: UUID,
        kind: RelatedKind1OrStr,
        *,
        limit: int | None = 50,
        scope_to_job: bool | None = False,
        status: str | None = None,
        order: RelatedOrder1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[TraceThumbnail]:
        """Trace thumbnails related to ``trace_id``.

        Args:
            trace_id: Value sent with the request.
            kind: ``job`` (same job_id), ``task`` (every version of the same task), ``recent`` (caller's own traces,
                requires auth), or ``discover`` (most-recent visible traces overall).
            limit: Value sent with the request.
            scope_to_job: Only meaningful with ``kind=task``: further restrict to the source trace's job. Used by the
                info-card sibling-run squares.
            status: Comma-separated status whitelist applied to ``Trace.status`` — e.g. ``completed`` to exclude
                live/cancelled rows.
            order: Sort by created_at.
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
            self._with_raw_response.list_related_traces_v2_trace_trace_id_related_get(
                trace_id,
                kind,
                limit=limit,
                scope_to_job=scope_to_job,
                status=status,
                order=order,
                request_options=request_options,
            ),
        )

    def publish_trace_v2_trace_trace_id_publish_post(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublishTraceResponse:
        """Set ``traces.public=true`` so anyone with the link can view the trace.

        Args:
            trace_id: Value sent with the request.
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
            self._with_raw_response.publish_trace_v2_trace_trace_id_publish_post(
                trace_id, request_options=request_options
            ),
        )

    def unpublish_trace_v2_trace_trace_id_publish_delete(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> StatusResponse:
        """Set ``traces.public=false``; the trace returns to invited-only visibility.

        Args:
            trace_id: Value sent with the request.
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
            self._with_raw_response.unpublish_trace_v2_trace_trace_id_publish_delete(
                trace_id, request_options=request_options
            ),
        )

    def update_trace_v2_trace_trace_id_patch(
        self,
        trace_id: UUID,
        body: TraceUpdateRequest | TraceUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TraceInfoResponse:
        """Update a trace's metadata fields.

        Args:
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
            self._with_raw_response.update_trace_v2_trace_trace_id_patch(
                trace_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TracesWithRawResponse:
        return self._with_raw_response


class AsyncTraces:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTracesWithRawResponse(client, server)

    async def batch_validate_traces_v2_trace_batch_validate_post(
        self,
        body: TraceBatchValidateRequest | TraceBatchValidateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TraceBatchValidateResponse:
        """Mark a batch of traces as valid or invalid for leaderboard calculations.

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
            await self._with_raw_response.batch_validate_traces_v2_trace_batch_validate_post(
                body, request_options=request_options
            ),
        )

    async def get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
        self,
        trace_id: UUID,
        *,
        include_spans: bool | None = True,
        include_env_logs: bool | None = True,
        include_worker_logs: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TraceAnalysisContextResponse:
        """Aggregate context for analysis environments (QA agents).

        Args:
            trace_id: Value sent with the request.
            include_spans: Value sent with the request.
            include_env_logs: Value sent with the request.
            include_worker_logs: Value sent with the request.
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
            await self._with_raw_response.get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
                trace_id,
                include_spans=include_spans,
                include_env_logs=include_env_logs,
                include_worker_logs=include_worker_logs,
                request_options=request_options,
            ),
        )

    async def get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TraceAnalysisPromptResponse:
        """Size-bounded debugging prompt: error, task, trajectory, and log tails.

        Args:
            trace_id: Value sent with the request.
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
            await self._with_raw_response.get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
                trace_id, request_options=request_options
            ),
        )

    async def get_trace_env_logs_v2_trace_trace_id_env_logs_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnvLogsResponse:
        """Environment logs — the customer container's stdout/stderr.

        Fetched from the daemon's S3 debug bundle.

        Args:
            trace_id: Value sent with the request.
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
            await self._with_raw_response.get_trace_env_logs_v2_trace_trace_id_env_logs_get(
                trace_id, request_options=request_options
            ),
        )

    async def get_trace_events_v2_trace_trace_id_events_get(
        self,
        trace_id: UUID,
        *,
        since_seq: int | None = -1,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TraceEventsResponse:
        """Projected, typed view of a trace's telemetry — drives the trace viewer.

        Args:
            trace_id: Value sent with the request.
            since_seq: Return only events derived from spans with sequence > since_seq. Use -1 (default) for the first
                page, then pass the previous ``next_seq`` while ``has_more`` is true. Once caught up, use ``latest_seq``
                for incremental polling.
            limit: Maximum completed span references to project in this page.
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
            await self._with_raw_response.get_trace_events_v2_trace_trace_id_events_get(
                trace_id, since_seq=since_seq, limit=limit, request_options=request_options
            ),
        )

    async def get_trace_info_v2_trace_trace_id_info_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TraceInfoResponse:
        """Get a trace with its task, job, and model context for the trace viewer.

        Args:
            trace_id: Value sent with the request.
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
            await self._with_raw_response.get_trace_info_v2_trace_trace_id_info_get(
                trace_id, request_options=request_options
            ),
        )

    async def get_trace_logs_v2_trace_trace_id_logs_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TraceLogsResponse:
        """Get a trace's captured worker logs.

        Args:
            trace_id: Value sent with the request.
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
            await self._with_raw_response.get_trace_logs_v2_trace_trace_id_logs_get(
                trace_id, request_options=request_options
            ),
        )

    async def get_trace_usage_v2_trace_trace_id_usage_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TraceUsageBreakdown:
        """Get a trace's compute and inference cost breakdown.

        Args:
            trace_id: Value sent with the request.
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
            await self._with_raw_response.get_trace_usage_v2_trace_trace_id_usage_get(
                trace_id, request_options=request_options
            ),
        )

    async def get_trace_v2_trace_trace_id_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TraceDetailResponse:
        """Get a trace by id.

        Args:
            trace_id: Value sent with the request.
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
            await self._with_raw_response.get_trace_v2_trace_trace_id_get(trace_id, request_options=request_options)
        )

    async def list_related_traces_v2_trace_trace_id_related_get(
        self,
        trace_id: UUID,
        kind: RelatedKind1OrStr,
        *,
        limit: int | None = 50,
        scope_to_job: bool | None = False,
        status: str | None = None,
        order: RelatedOrder1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[TraceThumbnail]:
        """Trace thumbnails related to ``trace_id``.

        Args:
            trace_id: Value sent with the request.
            kind: ``job`` (same job_id), ``task`` (every version of the same task), ``recent`` (caller's own traces,
                requires auth), or ``discover`` (most-recent visible traces overall).
            limit: Value sent with the request.
            scope_to_job: Only meaningful with ``kind=task``: further restrict to the source trace's job. Used by the
                info-card sibling-run squares.
            status: Comma-separated status whitelist applied to ``Trace.status`` — e.g. ``completed`` to exclude
                live/cancelled rows.
            order: Sort by created_at.
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
            await self._with_raw_response.list_related_traces_v2_trace_trace_id_related_get(
                trace_id,
                kind,
                limit=limit,
                scope_to_job=scope_to_job,
                status=status,
                order=order,
                request_options=request_options,
            ),
        )

    async def publish_trace_v2_trace_trace_id_publish_post(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublishTraceResponse:
        """Set ``traces.public=true`` so anyone with the link can view the trace.

        Args:
            trace_id: Value sent with the request.
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
            await self._with_raw_response.publish_trace_v2_trace_trace_id_publish_post(
                trace_id, request_options=request_options
            ),
        )

    async def unpublish_trace_v2_trace_trace_id_publish_delete(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StatusResponse:
        """Set ``traces.public=false``; the trace returns to invited-only visibility.

        Args:
            trace_id: Value sent with the request.
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
            await self._with_raw_response.unpublish_trace_v2_trace_trace_id_publish_delete(
                trace_id, request_options=request_options
            ),
        )

    async def update_trace_v2_trace_trace_id_patch(
        self,
        trace_id: UUID,
        body: TraceUpdateRequest | TraceUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TraceInfoResponse:
        """Update a trace's metadata fields.

        Args:
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
            await self._with_raw_response.update_trace_v2_trace_trace_id_patch(
                trace_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTracesWithRawResponse:
        return self._with_raw_response


class TracesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def batch_validate_traces_v2_trace_batch_validate_post(
        self,
        body: TraceBatchValidateRequest | TraceBatchValidateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceBatchValidateResponse, BatchValidateTracesV2TraceBatchValidatePostErrorBody]:
        """Mark a batch of traces as valid or invalid for leaderboard calculations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/trace/batch-validate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceBatchValidateRequest | TraceBatchValidateRequestDict](body),
            decoder=json_decoder[TraceBatchValidateResponse],
            error_mapper=batch_validate_traces_v2_trace_batch_validate_post_error_mapper,
            request_options=request_options,
        )

    def get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
        self,
        trace_id: UUID,
        *,
        include_spans: bool | None = True,
        include_env_logs: bool | None = True,
        include_worker_logs: bool | None = True,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceAnalysisContextResponse, GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody]:
        """Aggregate context for analysis environments (QA agents).

        Args:
            trace_id: Value sent with the request.
            include_spans: Value sent with the request.
            include_env_logs: Value sent with the request.
            include_worker_logs: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/analysis-context"),
            path_params=[param[UUID]("trace_id", trace_id)],
            query_params=[
                param[bool | None]("include_spans", include_spans),
                param[bool | None]("include_env_logs", include_env_logs),
                param[bool | None]("include_worker_logs", include_worker_logs),
            ],
            decoder=json_decoder[TraceAnalysisContextResponse],
            error_mapper=get_trace_analysis_context_v2_trace_trace_id_analysis_context_get_error_mapper,
            request_options=request_options,
        )

    def get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TraceAnalysisPromptResponse, GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody]:
        """Size-bounded debugging prompt: error, task, trajectory, and log tails.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/analysis-prompt"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=json_decoder[TraceAnalysisPromptResponse],
            error_mapper=get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get_error_mapper,
            request_options=request_options,
        )

    def get_trace_env_logs_v2_trace_trace_id_env_logs_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvLogsResponse, GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody]:
        """Environment logs — the customer container's stdout/stderr.

        Fetched from the daemon's S3 debug bundle.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/env-logs"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=json_decoder[EnvLogsResponse],
            error_mapper=get_trace_env_logs_v2_trace_trace_id_env_logs_get_error_mapper,
            request_options=request_options,
        )

    def get_trace_events_v2_trace_trace_id_events_get(
        self,
        trace_id: UUID,
        *,
        since_seq: int | None = -1,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceEventsResponse, GetTraceEventsV2TraceTraceIdEventsGetErrorBody]:
        """Projected, typed view of a trace's telemetry — drives the trace viewer.

        Args:
            trace_id: Value sent with the request.
            since_seq: Return only events derived from spans with sequence > since_seq. Use -1 (default) for the first
                page, then pass the previous ``next_seq`` while ``has_more`` is true. Once caught up, use ``latest_seq``
                for incremental polling.
            limit: Maximum completed span references to project in this page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/events"),
            path_params=[param[UUID]("trace_id", trace_id)],
            query_params=[param[int | None]("since_seq", since_seq), param[int | None]("limit", limit)],
            decoder=json_decoder[TraceEventsResponse],
            error_mapper=get_trace_events_v2_trace_trace_id_events_get_error_mapper,
            request_options=request_options,
        )

    def get_trace_info_v2_trace_trace_id_info_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TraceInfoResponse, GetTraceInfoV2TraceTraceIdInfoGetErrorBody]:
        """Get a trace with its task, job, and model context for the trace viewer.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/info"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=json_decoder[TraceInfoResponse],
            error_mapper=get_trace_info_v2_trace_trace_id_info_get_error_mapper,
            request_options=request_options,
        )

    def get_trace_logs_v2_trace_trace_id_logs_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TraceLogsResponse, GetTraceLogsV2TraceTraceIdLogsGetErrorBody]:
        """Get a trace's captured worker logs.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/logs"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=json_decoder[TraceLogsResponse],
            error_mapper=get_trace_logs_v2_trace_trace_id_logs_get_error_mapper,
            request_options=request_options,
        )

    def get_trace_usage_v2_trace_trace_id_usage_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TraceUsageBreakdown, GetTraceUsageV2TraceTraceIdUsageGetErrorBody]:
        """Get a trace's compute and inference cost breakdown.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/usage"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=json_decoder[TraceUsageBreakdown],
            error_mapper=get_trace_usage_v2_trace_trace_id_usage_get_error_mapper,
            request_options=request_options,
        )

    def get_trace_v2_trace_trace_id_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TraceDetailResponse, GetTraceV2TraceTraceIdGetErrorBody]:
        """Get a trace by id.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=json_decoder[TraceDetailResponse],
            error_mapper=get_trace_v2_trace_trace_id_get_error_mapper,
            request_options=request_options,
        )

    def list_related_traces_v2_trace_trace_id_related_get(
        self,
        trace_id: UUID,
        kind: RelatedKind1OrStr,
        *,
        limit: int | None = 50,
        scope_to_job: bool | None = False,
        status: str | None = None,
        order: RelatedOrder1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[TraceThumbnail], ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody]:
        """Trace thumbnails related to ``trace_id``.

        Args:
            trace_id: Value sent with the request.
            kind: ``job`` (same job_id), ``task`` (every version of the same task), ``recent`` (caller's own traces,
                requires auth), or ``discover`` (most-recent visible traces overall).
            limit: Value sent with the request.
            scope_to_job: Only meaningful with ``kind=task``: further restrict to the source trace's job. Used by the
                info-card sibling-run squares.
            status: Comma-separated status whitelist applied to ``Trace.status`` — e.g. ``completed`` to exclude
                live/cancelled rows.
            order: Sort by created_at.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/related"),
            path_params=[param[UUID]("trace_id", trace_id)],
            query_params=[
                param[RelatedKind1OrStr]("kind", kind),
                param[int | None]("limit", limit),
                param[bool | None]("scope_to_job", scope_to_job),
                param[str | None]("status", status),
                param[RelatedOrder1OrStr | None]("order", order),
            ],
            decoder=json_decoder[list[TraceThumbnail]],
            error_mapper=list_related_traces_v2_trace_trace_id_related_get_error_mapper,
            request_options=request_options,
        )

    def publish_trace_v2_trace_trace_id_publish_post(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublishTraceResponse, PublishTraceV2TraceTraceIdPublishPostErrorBody]:
        """Set ``traces.public=true`` so anyone with the link can view the trace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/trace/{trace_id}/publish"),
            path_params=[param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[PublishTraceResponse],
            error_mapper=publish_trace_v2_trace_trace_id_publish_post_error_mapper,
            request_options=request_options,
        )

    def unpublish_trace_v2_trace_trace_id_publish_delete(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StatusResponse, UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody]:
        """Set ``traces.public=false``; the trace returns to invited-only visibility.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/trace/{trace_id}/publish"),
            path_params=[param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[StatusResponse],
            error_mapper=unpublish_trace_v2_trace_trace_id_publish_delete_error_mapper,
            request_options=request_options,
        )

    def update_trace_v2_trace_trace_id_patch(
        self,
        trace_id: UUID,
        body: TraceUpdateRequest | TraceUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceInfoResponse, UpdateTraceV2TraceTraceIdPatchErrorBody]:
        """Update a trace's metadata fields.

        Args:
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/trace/{trace_id}"),
            path_params=[param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceUpdateRequest | TraceUpdateRequestDict](body),
            decoder=json_decoder[TraceInfoResponse],
            error_mapper=update_trace_v2_trace_trace_id_patch_error_mapper,
            request_options=request_options,
        )


class AsyncTracesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def batch_validate_traces_v2_trace_batch_validate_post(
        self,
        body: TraceBatchValidateRequest | TraceBatchValidateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceBatchValidateResponse, BatchValidateTracesV2TraceBatchValidatePostErrorBody]:
        """Mark a batch of traces as valid or invalid for leaderboard calculations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/trace/batch-validate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceBatchValidateRequest | TraceBatchValidateRequestDict](body),
            decoder=async_json_decoder[TraceBatchValidateResponse],
            error_mapper=batch_validate_traces_v2_trace_batch_validate_post_error_mapper,
            request_options=request_options,
        )

    async def get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
        self,
        trace_id: UUID,
        *,
        include_spans: bool | None = True,
        include_env_logs: bool | None = True,
        include_worker_logs: bool | None = True,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceAnalysisContextResponse, GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody]:
        """Aggregate context for analysis environments (QA agents).

        Args:
            trace_id: Value sent with the request.
            include_spans: Value sent with the request.
            include_env_logs: Value sent with the request.
            include_worker_logs: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/analysis-context"),
            path_params=[param[UUID]("trace_id", trace_id)],
            query_params=[
                param[bool | None]("include_spans", include_spans),
                param[bool | None]("include_env_logs", include_env_logs),
                param[bool | None]("include_worker_logs", include_worker_logs),
            ],
            decoder=async_json_decoder[TraceAnalysisContextResponse],
            error_mapper=get_trace_analysis_context_v2_trace_trace_id_analysis_context_get_error_mapper,
            request_options=request_options,
        )

    async def get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TraceAnalysisPromptResponse, GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody]:
        """Size-bounded debugging prompt: error, task, trajectory, and log tails.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/analysis-prompt"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=async_json_decoder[TraceAnalysisPromptResponse],
            error_mapper=get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get_error_mapper,
            request_options=request_options,
        )

    async def get_trace_env_logs_v2_trace_trace_id_env_logs_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnvLogsResponse, GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody]:
        """Environment logs — the customer container's stdout/stderr.

        Fetched from the daemon's S3 debug bundle.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/env-logs"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=async_json_decoder[EnvLogsResponse],
            error_mapper=get_trace_env_logs_v2_trace_trace_id_env_logs_get_error_mapper,
            request_options=request_options,
        )

    async def get_trace_events_v2_trace_trace_id_events_get(
        self,
        trace_id: UUID,
        *,
        since_seq: int | None = -1,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceEventsResponse, GetTraceEventsV2TraceTraceIdEventsGetErrorBody]:
        """Projected, typed view of a trace's telemetry — drives the trace viewer.

        Args:
            trace_id: Value sent with the request.
            since_seq: Return only events derived from spans with sequence > since_seq. Use -1 (default) for the first
                page, then pass the previous ``next_seq`` while ``has_more`` is true. Once caught up, use ``latest_seq``
                for incremental polling.
            limit: Maximum completed span references to project in this page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/events"),
            path_params=[param[UUID]("trace_id", trace_id)],
            query_params=[param[int | None]("since_seq", since_seq), param[int | None]("limit", limit)],
            decoder=async_json_decoder[TraceEventsResponse],
            error_mapper=get_trace_events_v2_trace_trace_id_events_get_error_mapper,
            request_options=request_options,
        )

    async def get_trace_info_v2_trace_trace_id_info_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TraceInfoResponse, GetTraceInfoV2TraceTraceIdInfoGetErrorBody]:
        """Get a trace with its task, job, and model context for the trace viewer.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/info"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=async_json_decoder[TraceInfoResponse],
            error_mapper=get_trace_info_v2_trace_trace_id_info_get_error_mapper,
            request_options=request_options,
        )

    async def get_trace_logs_v2_trace_trace_id_logs_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TraceLogsResponse, GetTraceLogsV2TraceTraceIdLogsGetErrorBody]:
        """Get a trace's captured worker logs.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/logs"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=async_json_decoder[TraceLogsResponse],
            error_mapper=get_trace_logs_v2_trace_trace_id_logs_get_error_mapper,
            request_options=request_options,
        )

    async def get_trace_usage_v2_trace_trace_id_usage_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TraceUsageBreakdown, GetTraceUsageV2TraceTraceIdUsageGetErrorBody]:
        """Get a trace's compute and inference cost breakdown.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/usage"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=async_json_decoder[TraceUsageBreakdown],
            error_mapper=get_trace_usage_v2_trace_trace_id_usage_get_error_mapper,
            request_options=request_options,
        )

    async def get_trace_v2_trace_trace_id_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TraceDetailResponse, GetTraceV2TraceTraceIdGetErrorBody]:
        """Get a trace by id.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=async_json_decoder[TraceDetailResponse],
            error_mapper=get_trace_v2_trace_trace_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_related_traces_v2_trace_trace_id_related_get(
        self,
        trace_id: UUID,
        kind: RelatedKind1OrStr,
        *,
        limit: int | None = 50,
        scope_to_job: bool | None = False,
        status: str | None = None,
        order: RelatedOrder1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[TraceThumbnail], ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody]:
        """Trace thumbnails related to ``trace_id``.

        Args:
            trace_id: Value sent with the request.
            kind: ``job`` (same job_id), ``task`` (every version of the same task), ``recent`` (caller's own traces,
                requires auth), or ``discover`` (most-recent visible traces overall).
            limit: Value sent with the request.
            scope_to_job: Only meaningful with ``kind=task``: further restrict to the source trace's job. Used by the
                info-card sibling-run squares.
            status: Comma-separated status whitelist applied to ``Trace.status`` — e.g. ``completed`` to exclude
                live/cancelled rows.
            order: Sort by created_at.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trace/{trace_id}/related"),
            path_params=[param[UUID]("trace_id", trace_id)],
            query_params=[
                param[RelatedKind1OrStr]("kind", kind),
                param[int | None]("limit", limit),
                param[bool | None]("scope_to_job", scope_to_job),
                param[str | None]("status", status),
                param[RelatedOrder1OrStr | None]("order", order),
            ],
            decoder=async_json_decoder[list[TraceThumbnail]],
            error_mapper=list_related_traces_v2_trace_trace_id_related_get_error_mapper,
            request_options=request_options,
        )

    async def publish_trace_v2_trace_trace_id_publish_post(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublishTraceResponse, PublishTraceV2TraceTraceIdPublishPostErrorBody]:
        """Set ``traces.public=true`` so anyone with the link can view the trace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/trace/{trace_id}/publish"),
            path_params=[param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[PublishTraceResponse],
            error_mapper=publish_trace_v2_trace_trace_id_publish_post_error_mapper,
            request_options=request_options,
        )

    async def unpublish_trace_v2_trace_trace_id_publish_delete(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StatusResponse, UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody]:
        """Set ``traces.public=false``; the trace returns to invited-only visibility.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/trace/{trace_id}/publish"),
            path_params=[param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[StatusResponse],
            error_mapper=unpublish_trace_v2_trace_trace_id_publish_delete_error_mapper,
            request_options=request_options,
        )

    async def update_trace_v2_trace_trace_id_patch(
        self,
        trace_id: UUID,
        body: TraceUpdateRequest | TraceUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceInfoResponse, UpdateTraceV2TraceTraceIdPatchErrorBody]:
        """Update a trace's metadata fields.

        Args:
            trace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/trace/{trace_id}"),
            path_params=[param[UUID]("trace_id", trace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceUpdateRequest | TraceUpdateRequestDict](body),
            decoder=async_json_decoder[TraceInfoResponse],
            error_mapper=update_trace_v2_trace_trace_id_patch_error_mapper,
            request_options=request_options,
        )
