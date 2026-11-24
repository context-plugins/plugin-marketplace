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
from ..errors.get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get_error import (
    GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody,
    get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get_error_mapper,
)
from ..errors.get_qa_agent_v2_qa_agents_agent_id_get_error import (
    GetQaAgentV2QaAgentsAgentIdGetErrorBody,
    get_qa_agent_v2_qa_agents_agent_id_get_error_mapper,
)
from ..errors.list_qa_agents_v2_qa_agents_get_error import (
    ListQaAgentsV2QaAgentsGetErrorBody,
    list_qa_agents_v2_qa_agents_get_error_mapper,
)
from ..errors.list_resource_qa_agent_results_v2_qa_agents_results_resources_get_error import (
    ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody,
    list_resource_qa_agent_results_v2_qa_agents_results_resources_get_error_mapper,
)
from ..errors.run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post_error import (
    RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody,
    run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post_error_mapper,
)
from ..models.enums.check_subject_type import CheckSubjectTypeOrStr
from ..models.enums.qa_agent_subject_type import QaAgentSubjectTypeOrStr
from ..models.paginated_response_qa_agent_response import PaginatedResponseQaAgentResponse
from ..models.qa_agent_resource_result_detail import QaAgentResourceResultDetail
from ..models.qa_agent_resource_run_request import QaAgentResourceRunRequest, QaAgentResourceRunRequestDict
from ..models.qa_agent_response import QaAgentResponse
from ..models.qa_agent_result_response import QaAgentResultResponse
from ..models.trace_events_response import TraceEventsResponse
from ..server.server import Server


class QaAgents:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = QaAgentsWithRawResponse(client, server)

    def get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
        self,
        result_id: UUID,
        *,
        since_seq: int | None = -1,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TraceEventsResponse:
        """Return an output-only QA rollout without evaluator prompts or private inputs.

        Args:
            result_id: Value sent with the request.
            since_seq: Value sent with the request.
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
            self._with_raw_response.get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
                result_id, since_seq=since_seq, limit=limit, request_options=request_options
            ),
        )

    def get_qa_agent_v2_qa_agents_agent_id_get(
        self, agent_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> QaAgentResponse:
        """Get a QA agent by id.

        Args:
            agent_id: Value sent with the request.
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
            self._with_raw_response.get_qa_agent_v2_qa_agents_agent_id_get(agent_id, request_options=request_options)
        )

    def list_qa_agents_v2_qa_agents_get(
        self,
        *,
        subject_type: QaAgentSubjectTypeOrStr | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedResponseQaAgentResponse:
        """List the caller team's QA agents.

        Args:
            subject_type: Value sent with the request.
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
            self._with_raw_response.list_qa_agents_v2_qa_agents_get(
                subject_type=subject_type, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_resource_qa_agent_results_v2_qa_agents_results_resources_get(
        self,
        *,
        subject_type: CheckSubjectTypeOrStr | None = None,
        subject_ids: list[UUID] | None = None,
        result_ids: list[UUID] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[QaAgentResourceResultDetail]:
        """List resource QA results by subject or by exact result IDs.

        Args:
            subject_type: Value sent with the request.
            subject_ids: Value sent with the request.
            result_ids: Value sent with the request.
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
            self._with_raw_response.list_resource_qa_agent_results_v2_qa_agents_results_resources_get(
                subject_type=subject_type,
                subject_ids=subject_ids,
                result_ids=result_ids,
                request_options=request_options,
            ),
        )

    def run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
        self,
        agent_id: UUID,
        body: QaAgentResourceRunRequest | QaAgentResourceRunRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[QaAgentResultResponse]:
        """Select or launch one QA result for each canonical resource subject.

        Args:
            agent_id: Value sent with the request.
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
            self._with_raw_response.run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
                agent_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> QaAgentsWithRawResponse:
        return self._with_raw_response


class AsyncQaAgents:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncQaAgentsWithRawResponse(client, server)

    async def get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
        self,
        result_id: UUID,
        *,
        since_seq: int | None = -1,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TraceEventsResponse:
        """Return an output-only QA rollout without evaluator prompts or private inputs.

        Args:
            result_id: Value sent with the request.
            since_seq: Value sent with the request.
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
            await self._with_raw_response.get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
                result_id, since_seq=since_seq, limit=limit, request_options=request_options
            ),
        )

    async def get_qa_agent_v2_qa_agents_agent_id_get(
        self, agent_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> QaAgentResponse:
        """Get a QA agent by id.

        Args:
            agent_id: Value sent with the request.
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
            await self._with_raw_response.get_qa_agent_v2_qa_agents_agent_id_get(
                agent_id, request_options=request_options
            ),
        )

    async def list_qa_agents_v2_qa_agents_get(
        self,
        *,
        subject_type: QaAgentSubjectTypeOrStr | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedResponseQaAgentResponse:
        """List the caller team's QA agents.

        Args:
            subject_type: Value sent with the request.
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
            await self._with_raw_response.list_qa_agents_v2_qa_agents_get(
                subject_type=subject_type, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_resource_qa_agent_results_v2_qa_agents_results_resources_get(
        self,
        *,
        subject_type: CheckSubjectTypeOrStr | None = None,
        subject_ids: list[UUID] | None = None,
        result_ids: list[UUID] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[QaAgentResourceResultDetail]:
        """List resource QA results by subject or by exact result IDs.

        Args:
            subject_type: Value sent with the request.
            subject_ids: Value sent with the request.
            result_ids: Value sent with the request.
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
            await self._with_raw_response.list_resource_qa_agent_results_v2_qa_agents_results_resources_get(
                subject_type=subject_type,
                subject_ids=subject_ids,
                result_ids=result_ids,
                request_options=request_options,
            ),
        )

    async def run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
        self,
        agent_id: UUID,
        body: QaAgentResourceRunRequest | QaAgentResourceRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[QaAgentResultResponse]:
        """Select or launch one QA result for each canonical resource subject.

        Args:
            agent_id: Value sent with the request.
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
            await self._with_raw_response.run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
                agent_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncQaAgentsWithRawResponse:
        return self._with_raw_response


class QaAgentsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
        self,
        result_id: UUID,
        *,
        since_seq: int | None = -1,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceEventsResponse, GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody]:
        """Return an output-only QA rollout without evaluator prompts or private inputs.

        Args:
            result_id: Value sent with the request.
            since_seq: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa-agents/results/{result_id}/rollout"),
            path_params=[param[UUID]("result_id", result_id)],
            query_params=[param[int | None]("since_seq", since_seq), param[int | None]("limit", limit)],
            decoder=json_decoder[TraceEventsResponse],
            error_mapper=get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get_error_mapper,
            request_options=request_options,
        )

    def get_qa_agent_v2_qa_agents_agent_id_get(
        self, agent_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QaAgentResponse, GetQaAgentV2QaAgentsAgentIdGetErrorBody]:
        """Get a QA agent by id.

        Args:
            agent_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa-agents/{agent_id}"),
            path_params=[param[UUID]("agent_id", agent_id)],
            decoder=json_decoder[QaAgentResponse],
            error_mapper=get_qa_agent_v2_qa_agents_agent_id_get_error_mapper,
            request_options=request_options,
        )

    def list_qa_agents_v2_qa_agents_get(
        self,
        *,
        subject_type: QaAgentSubjectTypeOrStr | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseQaAgentResponse, ListQaAgentsV2QaAgentsGetErrorBody]:
        """List the caller team's QA agents.

        Args:
            subject_type: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa-agents"),
            query_params=[
                param[QaAgentSubjectTypeOrStr | None]("subject_type", subject_type),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=json_decoder[PaginatedResponseQaAgentResponse],
            error_mapper=list_qa_agents_v2_qa_agents_get_error_mapper,
            request_options=request_options,
        )

    def list_resource_qa_agent_results_v2_qa_agents_results_resources_get(
        self,
        *,
        subject_type: CheckSubjectTypeOrStr | None = None,
        subject_ids: list[UUID] | None = None,
        result_ids: list[UUID] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[QaAgentResourceResultDetail], ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody]:
        """List resource QA results by subject or by exact result IDs.

        Args:
            subject_type: Value sent with the request.
            subject_ids: Value sent with the request.
            result_ids: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa-agents/results/resources"),
            query_params=[
                param[CheckSubjectTypeOrStr | None]("subject_type", subject_type),
                param[list[UUID] | None]("subject_ids", subject_ids),
                param[list[UUID] | None]("result_ids", result_ids),
            ],
            decoder=json_decoder[list[QaAgentResourceResultDetail]],
            error_mapper=list_resource_qa_agent_results_v2_qa_agents_results_resources_get_error_mapper,
            request_options=request_options,
        )

    def run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
        self,
        agent_id: UUID,
        body: QaAgentResourceRunRequest | QaAgentResourceRunRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[QaAgentResultResponse], RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody]:
        """Select or launch one QA result for each canonical resource subject.

        Args:
            agent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/qa-agents/{agent_id}/run-resources"),
            path_params=[param[UUID]("agent_id", agent_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QaAgentResourceRunRequest | QaAgentResourceRunRequestDict](body),
            decoder=json_decoder[list[QaAgentResultResponse]],
            error_mapper=run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post_error_mapper,
            request_options=request_options,
        )


class AsyncQaAgentsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
        self,
        result_id: UUID,
        *,
        since_seq: int | None = -1,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TraceEventsResponse, GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody]:
        """Return an output-only QA rollout without evaluator prompts or private inputs.

        Args:
            result_id: Value sent with the request.
            since_seq: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa-agents/results/{result_id}/rollout"),
            path_params=[param[UUID]("result_id", result_id)],
            query_params=[param[int | None]("since_seq", since_seq), param[int | None]("limit", limit)],
            decoder=async_json_decoder[TraceEventsResponse],
            error_mapper=get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get_error_mapper,
            request_options=request_options,
        )

    async def get_qa_agent_v2_qa_agents_agent_id_get(
        self, agent_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QaAgentResponse, GetQaAgentV2QaAgentsAgentIdGetErrorBody]:
        """Get a QA agent by id.

        Args:
            agent_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa-agents/{agent_id}"),
            path_params=[param[UUID]("agent_id", agent_id)],
            decoder=async_json_decoder[QaAgentResponse],
            error_mapper=get_qa_agent_v2_qa_agents_agent_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_qa_agents_v2_qa_agents_get(
        self,
        *,
        subject_type: QaAgentSubjectTypeOrStr | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseQaAgentResponse, ListQaAgentsV2QaAgentsGetErrorBody]:
        """List the caller team's QA agents.

        Args:
            subject_type: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa-agents"),
            query_params=[
                param[QaAgentSubjectTypeOrStr | None]("subject_type", subject_type),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            decoder=async_json_decoder[PaginatedResponseQaAgentResponse],
            error_mapper=list_qa_agents_v2_qa_agents_get_error_mapper,
            request_options=request_options,
        )

    async def list_resource_qa_agent_results_v2_qa_agents_results_resources_get(
        self,
        *,
        subject_type: CheckSubjectTypeOrStr | None = None,
        subject_ids: list[UUID] | None = None,
        result_ids: list[UUID] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[QaAgentResourceResultDetail], ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody]:
        """List resource QA results by subject or by exact result IDs.

        Args:
            subject_type: Value sent with the request.
            subject_ids: Value sent with the request.
            result_ids: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa-agents/results/resources"),
            query_params=[
                param[CheckSubjectTypeOrStr | None]("subject_type", subject_type),
                param[list[UUID] | None]("subject_ids", subject_ids),
                param[list[UUID] | None]("result_ids", result_ids),
            ],
            decoder=async_json_decoder[list[QaAgentResourceResultDetail]],
            error_mapper=list_resource_qa_agent_results_v2_qa_agents_results_resources_get_error_mapper,
            request_options=request_options,
        )

    async def run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
        self,
        agent_id: UUID,
        body: QaAgentResourceRunRequest | QaAgentResourceRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[QaAgentResultResponse], RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody]:
        """Select or launch one QA result for each canonical resource subject.

        Args:
            agent_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/qa-agents/{agent_id}/run-resources"),
            path_params=[param[UUID]("agent_id", agent_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QaAgentResourceRunRequest | QaAgentResourceRunRequestDict](body),
            decoder=async_json_decoder[list[QaAgentResultResponse]],
            error_mapper=run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post_error_mapper,
            request_options=request_options,
        )
