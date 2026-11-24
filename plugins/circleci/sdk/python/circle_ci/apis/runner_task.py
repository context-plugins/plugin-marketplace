from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_running_task_count_error import GetRunningTaskCountErrorBody, get_running_task_count_error_mapper
from ..errors.get_unclaimed_task_count_error import (
    GetUnclaimedTaskCountErrorBody,
    get_unclaimed_task_count_error_mapper,
)
from ..models.runner_tasks_response import RunnerTasksResponse
from ..models.runner_tasks_running_response import RunnerTasksRunningResponse
from ..server.server import Server


class RunnerTask:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RunnerTaskWithRawResponse(client, server, auth)

    def get_running_task_count(
        self, resource_class: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RunnerTasksRunningResponse:
        """Returns the number of running tasks for a given resource class. This endpoint is scoped to a single resource
        class, so it must be called per resource class to get totals across all classes.

        Args:
            resource_class: The resource class to query running tasks for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved running task count

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_running_task_count(resource_class, request_options=request_options))

    def get_unclaimed_task_count(
        self, resource_class: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RunnerTasksResponse:
        """Returns the number of unclaimed tasks for a given resource class. This endpoint is scoped to a single
        resource class, so it must be called per resource class to get totals across all classes.

        Args:
            resource_class: The resource class to query unclaimed tasks for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved unclaimed task count

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_unclaimed_task_count(resource_class, request_options=request_options))

    @property
    def with_raw_response(self) -> RunnerTaskWithRawResponse:
        return self._with_raw_response


class AsyncRunnerTask:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRunnerTaskWithRawResponse(client, server, auth)

    async def get_running_task_count(
        self, resource_class: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RunnerTasksRunningResponse:
        """Returns the number of running tasks for a given resource class. This endpoint is scoped to a single resource
        class, so it must be called per resource class to get totals across all classes.

        Args:
            resource_class: The resource class to query running tasks for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved running task count

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_running_task_count(resource_class, request_options=request_options)
        )

    async def get_unclaimed_task_count(
        self, resource_class: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RunnerTasksResponse:
        """Returns the number of unclaimed tasks for a given resource class. This endpoint is scoped to a single
        resource class, so it must be called per resource class to get totals across all classes.

        Args:
            resource_class: The resource class to query unclaimed tasks for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved unclaimed task count

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_unclaimed_task_count(resource_class, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncRunnerTaskWithRawResponse:
        return self._with_raw_response


class RunnerTaskWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_running_task_count(
        self, resource_class: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RunnerTasksRunningResponse, GetRunningTaskCountErrorBody]:
        """Returns the number of running tasks for a given resource class. This endpoint is scoped to a single resource
        class, so it must be called per resource class to get totals across all classes.

        Args:
            resource_class: The resource class to query running tasks for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner/tasks/running"),
            query_params=[param[str]("resource-class", resource_class)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[RunnerTasksRunningResponse],
            error_mapper=get_running_task_count_error_mapper,
            request_options=request_options,
        )

    def get_unclaimed_task_count(
        self, resource_class: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RunnerTasksResponse, GetUnclaimedTaskCountErrorBody]:
        """Returns the number of unclaimed tasks for a given resource class. This endpoint is scoped to a single
        resource class, so it must be called per resource class to get totals across all classes.

        Args:
            resource_class: The resource class to query unclaimed tasks for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner/tasks"),
            query_params=[param[str]("resource-class", resource_class)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[RunnerTasksResponse],
            error_mapper=get_unclaimed_task_count_error_mapper,
            request_options=request_options,
        )


class AsyncRunnerTaskWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_running_task_count(
        self, resource_class: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RunnerTasksRunningResponse, GetRunningTaskCountErrorBody]:
        """Returns the number of running tasks for a given resource class. This endpoint is scoped to a single resource
        class, so it must be called per resource class to get totals across all classes.

        Args:
            resource_class: The resource class to query running tasks for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner/tasks/running"),
            query_params=[param[str]("resource-class", resource_class)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[RunnerTasksRunningResponse],
            error_mapper=get_running_task_count_error_mapper,
            request_options=request_options,
        )

    async def get_unclaimed_task_count(
        self, resource_class: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RunnerTasksResponse, GetUnclaimedTaskCountErrorBody]:
        """Returns the number of unclaimed tasks for a given resource class. This endpoint is scoped to a single
        resource class, so it must be called per resource class to get totals across all classes.

        Args:
            resource_class: The resource class to query unclaimed tasks for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner/tasks"),
            query_params=[param[str]("resource-class", resource_class)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[RunnerTasksResponse],
            error_mapper=get_unclaimed_task_count_error_mapper,
            request_options=request_options,
        )
