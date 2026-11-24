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
from ..errors.list_qa_checks_v2_qa_checks_get_error import (
    ListQaChecksV2QaChecksGetErrorBody,
    list_qa_checks_v2_qa_checks_get_error_mapper,
)
from ..errors.list_qa_results_v2_qa_results_get_error import (
    ListQaResultsV2QaResultsGetErrorBody,
    list_qa_results_v2_qa_results_get_error_mapper,
)
from ..errors.run_qa_checks_v2_qa_runs_post_error import (
    RunQaChecksV2QaRunsPostErrorBody,
    run_qa_checks_v2_qa_runs_post_error_mapper,
)
from ..models.qa_check_list_response import QaCheckListResponse
from ..models.qa_result_list_response import QaResultListResponse
from ..models.qa_run_create_request import QaRunCreateRequest, QaRunCreateRequestDict
from ..server.server import Server


class Qa:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = QaWithRawResponse(client, server)

    def list_qa_checks_v2_qa_checks_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> QaCheckListResponse:
        """List the QA checks available to run, each with the subject type it judges.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.list_qa_checks_v2_qa_checks_get(request_options=request_options))

    def list_qa_results_v2_qa_results_get(
        self,
        *,
        trace_ids: list[UUID] | None = None,
        task_ids: list[UUID] | None = None,
        include_history: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QaResultListResponse:
        """List the result in effect for every QA check on the given evaluation traces or tasks.

        A task's results in effect are those on its current version. With ``include_history``, list every result
        instead, newest first, across a task's versions.

        Args:
            trace_ids: Value sent with the request.
            task_ids: Value sent with the request.
            include_history: Value sent with the request.
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
            self._with_raw_response.list_qa_results_v2_qa_results_get(
                trace_ids=trace_ids, task_ids=task_ids, include_history=include_history, request_options=request_options
            ),
        )

    def run_qa_checks_v2_qa_runs_post(
        self, body: QaRunCreateRequest | QaRunCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> QaResultListResponse:
        """Run QA checks against completed evaluation traces or tasks as one run; returns each subject's result of each
        check.

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
        return unwrap(self._with_raw_response.run_qa_checks_v2_qa_runs_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> QaWithRawResponse:
        return self._with_raw_response


class AsyncQa:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncQaWithRawResponse(client, server)

    async def list_qa_checks_v2_qa_checks_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> QaCheckListResponse:
        """List the QA checks available to run, each with the subject type it judges.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.list_qa_checks_v2_qa_checks_get(request_options=request_options))

    async def list_qa_results_v2_qa_results_get(
        self,
        *,
        trace_ids: list[UUID] | None = None,
        task_ids: list[UUID] | None = None,
        include_history: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QaResultListResponse:
        """List the result in effect for every QA check on the given evaluation traces or tasks.

        A task's results in effect are those on its current version. With ``include_history``, list every result
        instead, newest first, across a task's versions.

        Args:
            trace_ids: Value sent with the request.
            task_ids: Value sent with the request.
            include_history: Value sent with the request.
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
            await self._with_raw_response.list_qa_results_v2_qa_results_get(
                trace_ids=trace_ids, task_ids=task_ids, include_history=include_history, request_options=request_options
            ),
        )

    async def run_qa_checks_v2_qa_runs_post(
        self,
        body: QaRunCreateRequest | QaRunCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QaResultListResponse:
        """Run QA checks against completed evaluation traces or tasks as one run; returns each subject's result of each
        check.

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
            await self._with_raw_response.run_qa_checks_v2_qa_runs_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncQaWithRawResponse:
        return self._with_raw_response


class QaWithRawResponse(BaseRawResponse[RawClient, Server]):
    def list_qa_checks_v2_qa_checks_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QaCheckListResponse, ListQaChecksV2QaChecksGetErrorBody]:
        """List the QA checks available to run, each with the subject type it judges.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa/checks"),
            decoder=json_decoder[QaCheckListResponse],
            error_mapper=list_qa_checks_v2_qa_checks_get_error_mapper,
            request_options=request_options,
        )

    def list_qa_results_v2_qa_results_get(
        self,
        *,
        trace_ids: list[UUID] | None = None,
        task_ids: list[UUID] | None = None,
        include_history: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QaResultListResponse, ListQaResultsV2QaResultsGetErrorBody]:
        """List the result in effect for every QA check on the given evaluation traces or tasks.

        A task's results in effect are those on its current version. With ``include_history``, list every result
        instead, newest first, across a task's versions.

        Args:
            trace_ids: Value sent with the request.
            task_ids: Value sent with the request.
            include_history: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa/results"),
            query_params=[
                param[list[UUID] | None]("trace_ids", trace_ids),
                param[list[UUID] | None]("task_ids", task_ids),
                param[bool | None]("include_history", include_history),
            ],
            decoder=json_decoder[QaResultListResponse],
            error_mapper=list_qa_results_v2_qa_results_get_error_mapper,
            request_options=request_options,
        )

    def run_qa_checks_v2_qa_runs_post(
        self, body: QaRunCreateRequest | QaRunCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QaResultListResponse, RunQaChecksV2QaRunsPostErrorBody]:
        """Run QA checks against completed evaluation traces or tasks as one run; returns each subject's result of each
        check.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/qa/runs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QaRunCreateRequest | QaRunCreateRequestDict](body),
            decoder=json_decoder[QaResultListResponse],
            error_mapper=run_qa_checks_v2_qa_runs_post_error_mapper,
            request_options=request_options,
        )


class AsyncQaWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def list_qa_checks_v2_qa_checks_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QaCheckListResponse, ListQaChecksV2QaChecksGetErrorBody]:
        """List the QA checks available to run, each with the subject type it judges.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa/checks"),
            decoder=async_json_decoder[QaCheckListResponse],
            error_mapper=list_qa_checks_v2_qa_checks_get_error_mapper,
            request_options=request_options,
        )

    async def list_qa_results_v2_qa_results_get(
        self,
        *,
        trace_ids: list[UUID] | None = None,
        task_ids: list[UUID] | None = None,
        include_history: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QaResultListResponse, ListQaResultsV2QaResultsGetErrorBody]:
        """List the result in effect for every QA check on the given evaluation traces or tasks.

        A task's results in effect are those on its current version. With ``include_history``, list every result
        instead, newest first, across a task's versions.

        Args:
            trace_ids: Value sent with the request.
            task_ids: Value sent with the request.
            include_history: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/qa/results"),
            query_params=[
                param[list[UUID] | None]("trace_ids", trace_ids),
                param[list[UUID] | None]("task_ids", task_ids),
                param[bool | None]("include_history", include_history),
            ],
            decoder=async_json_decoder[QaResultListResponse],
            error_mapper=list_qa_results_v2_qa_results_get_error_mapper,
            request_options=request_options,
        )

    async def run_qa_checks_v2_qa_runs_post(
        self,
        body: QaRunCreateRequest | QaRunCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QaResultListResponse, RunQaChecksV2QaRunsPostErrorBody]:
        """Run QA checks against completed evaluation traces or tasks as one run; returns each subject's result of each
        check.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/qa/runs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QaRunCreateRequest | QaRunCreateRequestDict](body),
            decoder=async_json_decoder[QaResultListResponse],
            error_mapper=run_qa_checks_v2_qa_runs_post_error_mapper,
            request_options=request_options,
        )
