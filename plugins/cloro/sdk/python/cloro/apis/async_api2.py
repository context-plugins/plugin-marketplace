from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.clear_async_queue_error import ClearAsyncQueueErrorBody, clear_async_queue_error_mapper
from ..errors.create_async_task_error import CreateAsyncTaskErrorBody, create_async_task_error_mapper
from ..errors.create_batch_async_tasks_error import (
    CreateBatchAsyncTasksErrorBody,
    create_batch_async_tasks_error_mapper,
)
from ..errors.get_async_status_error import GetAsyncStatusErrorBody, get_async_status_error_mapper
from ..errors.get_task_status_error import GetTaskStatusErrorBody, get_task_status_error_mapper
from ..models.async_status_response import AsyncStatusResponse
from ..models.async_task_create_response import AsyncTaskCreateResponse
from ..models.batch_task_request import BatchTaskRequest, BatchTaskRequestDict
from ..models.batch_task_response import BatchTaskResponse
from ..models.clear_queue_response import ClearQueueResponse
from ..models.task_status_response import TaskStatusResponse
from ..server.server import Server


class AsyncApi2:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AsyncApi2WithRawResponse(client, server, auth)

    def clear_async_queue(self, *, request_options: RequestOptionsOrDict | None = None) -> ClearQueueResponse:
        """Deletes every task still in the ``QUEUED`` state for the authenticated organization, letting you drain a
        pending backlog in one call instead of opening a support request. Tasks that are already ``PROCESSING`` are
        in-flight on a worker and are left untouched, as are ``COMPLETED`` and ``FAILED`` tasks. Queued tasks have not
        been charged, so clearing them does not affect your credit balance. The call is safe to repeat — if the queue is
        already empty it simply returns ``cleared: 0``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Queue cleared. Returns the number of queued tasks that were removed.

        Raises:
            ApiError: Unauthorized - Authentication error Too Many Requests - API key rate limit exceeded Internal
                Server Error ``error`` is ``AuthenticationError | RateLimitError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.clear_async_queue(request_options=request_options))

    def create_async_task(
        self, body: BatchTaskRequest | BatchTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> AsyncTaskCreateResponse:
        """Submit an asynchronous task for background processing. Returns a task ID that you can use to poll for results
        or receive via webhook.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task created successfully. Returns task ID and initial status.

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - The credit balance
                does not cover this task's cost Conflict - Task with this idempotencyKey already exists Queue Limit
                Exceeded - Organization has reached maximum queued tasks Internal Server Error ``error`` is
                ``ValidationError | AuthenticationError | ForbiddenError | IdempotencyConflictError | QueueLimitError |
                InternalError | RawError``."""
        return unwrap(self._with_raw_response.create_async_task(body, request_options=request_options))

    def create_batch_async_tasks(
        self,
        body: list[BatchTaskRequest | BatchTaskRequestDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchTaskResponse:
        """Submit up to 500 async tasks in one request. Each task is validated independently, so one invalid task does
        not block the rest. Returns per-task results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch processed. Check the summary and individual results for per-task success or failure.

        Raises:
            ApiError: Bad Request - The body is not an array of 1-500 task objects Unauthorized - Authentication error
                Queue Limit Exceeded - The entire batch is rejected because it would exceed your organization's queue
                capacity Internal Server Error ``error`` is ``ValidationError | AuthenticationError | QueueLimitError |
                InternalError | RawError``."""
        return unwrap(self._with_raw_response.create_batch_async_tasks(body, request_options=request_options))

    def get_async_status(self, *, request_options: RequestOptionsOrDict | None = None) -> AsyncStatusResponse:
        """Get organization-wide async queue metrics including queued and processing task counts, and concurrency usage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with queue metrics.

        Raises:
            ApiError: Unauthorized - Authentication error Too Many Requests - API key rate limit exceeded Internal
                Server Error ``error`` is ``AuthenticationError | RateLimitError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.get_async_status(request_options=request_options))

    def get_task_status(
        self, task_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TaskStatusResponse:
        """Poll the status and result of an asynchronous task by ID. Returns the task state and, once complete, the full
        structured result payload.

        Args:
            task_id: The ID of the task to fetch.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with the task status and result if completed.

        Raises:
            ApiError: Unauthorized - Authentication error Not Found - Task not found Too Many Requests - API key rate
                limit exceeded Internal Server Error ``error`` is ``AuthenticationError | NotFoundError | RateLimitError
                | InternalError | RawError``."""
        return unwrap(self._with_raw_response.get_task_status(task_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncApi2WithRawResponse:
        return self._with_raw_response


class AsyncAsyncApi2:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAsyncApi2WithRawResponse(client, server, auth)

    async def clear_async_queue(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ClearQueueResponse:
        """Deletes every task still in the ``QUEUED`` state for the authenticated organization, letting you drain a
        pending backlog in one call instead of opening a support request. Tasks that are already ``PROCESSING`` are
        in-flight on a worker and are left untouched, as are ``COMPLETED`` and ``FAILED`` tasks. Queued tasks have not
        been charged, so clearing them does not affect your credit balance. The call is safe to repeat — if the queue is
        already empty it simply returns ``cleared: 0``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Queue cleared. Returns the number of queued tasks that were removed.

        Raises:
            ApiError: Unauthorized - Authentication error Too Many Requests - API key rate limit exceeded Internal
                Server Error ``error`` is ``AuthenticationError | RateLimitError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.clear_async_queue(request_options=request_options))

    async def create_async_task(
        self, body: BatchTaskRequest | BatchTaskRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncTaskCreateResponse:
        """Submit an asynchronous task for background processing. Returns a task ID that you can use to poll for results
        or receive via webhook.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task created successfully. Returns task ID and initial status.

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - The credit balance
                does not cover this task's cost Conflict - Task with this idempotencyKey already exists Queue Limit
                Exceeded - Organization has reached maximum queued tasks Internal Server Error ``error`` is
                ``ValidationError | AuthenticationError | ForbiddenError | IdempotencyConflictError | QueueLimitError |
                InternalError | RawError``."""
        return unwrap(await self._with_raw_response.create_async_task(body, request_options=request_options))

    async def create_batch_async_tasks(
        self,
        body: list[BatchTaskRequest | BatchTaskRequestDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchTaskResponse:
        """Submit up to 500 async tasks in one request. Each task is validated independently, so one invalid task does
        not block the rest. Returns per-task results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch processed. Check the summary and individual results for per-task success or failure.

        Raises:
            ApiError: Bad Request - The body is not an array of 1-500 task objects Unauthorized - Authentication error
                Queue Limit Exceeded - The entire batch is rejected because it would exceed your organization's queue
                capacity Internal Server Error ``error`` is ``ValidationError | AuthenticationError | QueueLimitError |
                InternalError | RawError``."""
        return unwrap(await self._with_raw_response.create_batch_async_tasks(body, request_options=request_options))

    async def get_async_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncStatusResponse:
        """Get organization-wide async queue metrics including queued and processing task counts, and concurrency usage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with queue metrics.

        Raises:
            ApiError: Unauthorized - Authentication error Too Many Requests - API key rate limit exceeded Internal
                Server Error ``error`` is ``AuthenticationError | RateLimitError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.get_async_status(request_options=request_options))

    async def get_task_status(
        self, task_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TaskStatusResponse:
        """Poll the status and result of an asynchronous task by ID. Returns the task state and, once complete, the full
        structured result payload.

        Args:
            task_id: The ID of the task to fetch.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with the task status and result if completed.

        Raises:
            ApiError: Unauthorized - Authentication error Not Found - Task not found Too Many Requests - API key rate
                limit exceeded Internal Server Error ``error`` is ``AuthenticationError | NotFoundError | RateLimitError
                | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.get_task_status(task_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAsyncApi2WithRawResponse:
        return self._with_raw_response


class AsyncApi2WithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def clear_async_queue(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ClearQueueResponse, ClearAsyncQueueErrorBody]:
        """Deletes every task still in the ``QUEUED`` state for the authenticated organization, letting you drain a
        pending backlog in one call instead of opening a support request. Tasks that are already ``PROCESSING`` are
        in-flight on a worker and are left untouched, as are ``COMPLETED`` and ``FAILED`` tasks. Queued tasks have not
        been charged, so clearing them does not affect your credit balance. The call is safe to repeat — if the queue is
        already empty it simply returns ``cleared: 0``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/async/queue"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ClearQueueResponse],
            error_mapper=clear_async_queue_error_mapper,
            request_options=request_options,
        )

    def create_async_task(
        self, body: BatchTaskRequest | BatchTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncTaskCreateResponse, CreateAsyncTaskErrorBody]:
        """Submit an asynchronous task for background processing. Returns a task ID that you can use to poll for results
        or receive via webhook.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/async/task"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchTaskRequest | BatchTaskRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AsyncTaskCreateResponse],
            error_mapper=create_async_task_error_mapper,
            request_options=request_options,
        )

    def create_batch_async_tasks(
        self,
        body: list[BatchTaskRequest | BatchTaskRequestDict],
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchTaskResponse, CreateBatchAsyncTasksErrorBody]:
        """Submit up to 500 async tasks in one request. Each task is validated independently, so one invalid task does
        not block the rest. Returns per-task results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/async/task/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[BatchTaskRequest | BatchTaskRequestDict]](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BatchTaskResponse],
            error_mapper=create_batch_async_tasks_error_mapper,
            request_options=request_options,
        )

    def get_async_status(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncStatusResponse, GetAsyncStatusErrorBody]:
        """Get organization-wide async queue metrics including queued and processing task counts, and concurrency usage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/async/status"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AsyncStatusResponse],
            error_mapper=get_async_status_error_mapper,
            request_options=request_options,
        )

    def get_task_status(
        self, task_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TaskStatusResponse, GetTaskStatusErrorBody]:
        """Poll the status and result of an asynchronous task by ID. Returns the task state and, once complete, the full
        structured result payload.

        Args:
            task_id: The ID of the task to fetch.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/async/task/{taskId}"),
            path_params=[param[UUID]("taskId", task_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TaskStatusResponse],
            error_mapper=get_task_status_error_mapper,
            request_options=request_options,
        )


class AsyncAsyncApi2WithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def clear_async_queue(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ClearQueueResponse, ClearAsyncQueueErrorBody]:
        """Deletes every task still in the ``QUEUED`` state for the authenticated organization, letting you drain a
        pending backlog in one call instead of opening a support request. Tasks that are already ``PROCESSING`` are
        in-flight on a worker and are left untouched, as are ``COMPLETED`` and ``FAILED`` tasks. Queued tasks have not
        been charged, so clearing them does not affect your credit balance. The call is safe to repeat — if the queue is
        already empty it simply returns ``cleared: 0``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/async/queue"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ClearQueueResponse],
            error_mapper=clear_async_queue_error_mapper,
            request_options=request_options,
        )

    async def create_async_task(
        self, body: BatchTaskRequest | BatchTaskRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncTaskCreateResponse, CreateAsyncTaskErrorBody]:
        """Submit an asynchronous task for background processing. Returns a task ID that you can use to poll for results
        or receive via webhook.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/async/task"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchTaskRequest | BatchTaskRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AsyncTaskCreateResponse],
            error_mapper=create_async_task_error_mapper,
            request_options=request_options,
        )

    async def create_batch_async_tasks(
        self,
        body: list[BatchTaskRequest | BatchTaskRequestDict],
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchTaskResponse, CreateBatchAsyncTasksErrorBody]:
        """Submit up to 500 async tasks in one request. Each task is validated independently, so one invalid task does
        not block the rest. Returns per-task results.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/async/task/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[BatchTaskRequest | BatchTaskRequestDict]](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BatchTaskResponse],
            error_mapper=create_batch_async_tasks_error_mapper,
            request_options=request_options,
        )

    async def get_async_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncStatusResponse, GetAsyncStatusErrorBody]:
        """Get organization-wide async queue metrics including queued and processing task counts, and concurrency usage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/async/status"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AsyncStatusResponse],
            error_mapper=get_async_status_error_mapper,
            request_options=request_options,
        )

    async def get_task_status(
        self, task_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TaskStatusResponse, GetTaskStatusErrorBody]:
        """Poll the status and result of an asynchronous task by ID. Returns the task state and, once complete, the full
        structured result payload.

        Args:
            task_id: The ID of the task to fetch.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/async/task/{taskId}"),
            path_params=[param[UUID]("taskId", task_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TaskStatusResponse],
            error_mapper=get_task_status_error_mapper,
            request_options=request_options,
        )
