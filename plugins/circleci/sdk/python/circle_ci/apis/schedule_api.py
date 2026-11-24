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
from ..errors.create_schedule_error import CreateScheduleErrorBody, create_schedule_error_mapper
from ..errors.delete_schedule_error import DeleteScheduleErrorBody, delete_schedule_error_mapper
from ..errors.get_schedule_error import GetScheduleErrorBody, get_schedule_error_mapper
from ..errors.list_schedules_error import ListSchedulesErrorBody, list_schedules_error_mapper
from ..errors.update_schedule_error import UpdateScheduleErrorBody, update_schedule_error_mapper
from ..models.create_schedule_request import CreateScheduleRequest, CreateScheduleRequestDict
from ..models.message_response import MessageResponse
from ..models.schedule import Schedule
from ..models.schedule_list import ScheduleList
from ..models.update_schedule_request import UpdateScheduleRequest, UpdateScheduleRequestDict
from ..server.server import Server


class ScheduleApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScheduleApiWithRawResponse(client, server, auth)

    def create_schedule(
        self,
        project_slug: str,
        body: CreateScheduleRequest | CreateScheduleRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Schedule:
        """Creates a scheduled pipeline trigger for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schedule created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_schedule(project_slug, body, request_options=request_options))

    def delete_schedule(
        self, schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes a schedule by its unique identifier.

        Args:
            schedule_id: The unique identifier of the schedule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schedule deleted successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_schedule(schedule_id, request_options=request_options))

    def get_schedule(self, schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Schedule:
        """Returns a schedule by its unique identifier.

        Args:
            schedule_id: The unique identifier of the schedule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved schedule

        Raises:
            ApiError: Unauthorized Schedule not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_schedule(schedule_id, request_options=request_options))

    def list_schedules(
        self, project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ScheduleList:
        """Returns a list of scheduled pipeline triggers for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved schedules

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_schedules(project_slug, page_token=page_token, request_options=request_options)
        )

    def update_schedule(
        self,
        schedule_id: UUID,
        body: UpdateScheduleRequest | UpdateScheduleRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Schedule:
        """Updates an existing schedule with the provided parameters.

        Args:
            schedule_id: The unique identifier of the schedule
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schedule updated successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_schedule(schedule_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ScheduleApiWithRawResponse:
        return self._with_raw_response


class AsyncScheduleApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScheduleApiWithRawResponse(client, server, auth)

    async def create_schedule(
        self,
        project_slug: str,
        body: CreateScheduleRequest | CreateScheduleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Schedule:
        """Creates a scheduled pipeline trigger for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schedule created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_schedule(project_slug, body, request_options=request_options)
        )

    async def delete_schedule(
        self, schedule_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes a schedule by its unique identifier.

        Args:
            schedule_id: The unique identifier of the schedule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schedule deleted successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_schedule(schedule_id, request_options=request_options))

    async def get_schedule(
        self, schedule_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Schedule:
        """Returns a schedule by its unique identifier.

        Args:
            schedule_id: The unique identifier of the schedule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved schedule

        Raises:
            ApiError: Unauthorized Schedule not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_schedule(schedule_id, request_options=request_options))

    async def list_schedules(
        self,
        project_slug: str,
        *,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScheduleList:
        """Returns a list of scheduled pipeline triggers for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved schedules

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_schedules(
                project_slug, page_token=page_token, request_options=request_options
            ),
        )

    async def update_schedule(
        self,
        schedule_id: UUID,
        body: UpdateScheduleRequest | UpdateScheduleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Schedule:
        """Updates an existing schedule with the provided parameters.

        Args:
            schedule_id: The unique identifier of the schedule
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schedule updated successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_schedule(schedule_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncScheduleApiWithRawResponse:
        return self._with_raw_response


class ScheduleApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_schedule(
        self,
        project_slug: str,
        body: CreateScheduleRequest | CreateScheduleRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Schedule, CreateScheduleErrorBody]:
        """Creates a scheduled pipeline trigger for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/project/{project-slug}/schedule"),
            path_params=[param[str]("project-slug", project_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateScheduleRequest | CreateScheduleRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Schedule],
            error_mapper=create_schedule_error_mapper,
            request_options=request_options,
        )

    def delete_schedule(
        self, schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteScheduleErrorBody]:
        """Deletes a schedule by its unique identifier.

        Args:
            schedule_id: The unique identifier of the schedule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/schedule/{schedule-id}"),
            path_params=[param[UUID]("schedule-id", schedule_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_schedule_error_mapper,
            request_options=request_options,
        )

    def get_schedule(
        self, schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Schedule, GetScheduleErrorBody]:
        """Returns a schedule by its unique identifier.

        Args:
            schedule_id: The unique identifier of the schedule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/schedule/{schedule-id}"),
            path_params=[param[UUID]("schedule-id", schedule_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Schedule],
            error_mapper=get_schedule_error_mapper,
            request_options=request_options,
        )

    def list_schedules(
        self, project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScheduleList, ListSchedulesErrorBody]:
        """Returns a list of scheduled pipeline triggers for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/project/{project-slug}/schedule"),
            path_params=[param[str]("project-slug", project_slug)],
            query_params=[param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ScheduleList],
            error_mapper=list_schedules_error_mapper,
            request_options=request_options,
        )

    def update_schedule(
        self,
        schedule_id: UUID,
        body: UpdateScheduleRequest | UpdateScheduleRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Schedule, UpdateScheduleErrorBody]:
        """Updates an existing schedule with the provided parameters.

        Args:
            schedule_id: The unique identifier of the schedule
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/schedule/{schedule-id}"),
            path_params=[param[UUID]("schedule-id", schedule_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateScheduleRequest | UpdateScheduleRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Schedule],
            error_mapper=update_schedule_error_mapper,
            request_options=request_options,
        )


class AsyncScheduleApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_schedule(
        self,
        project_slug: str,
        body: CreateScheduleRequest | CreateScheduleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Schedule, CreateScheduleErrorBody]:
        """Creates a scheduled pipeline trigger for the specified project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/project/{project-slug}/schedule"),
            path_params=[param[str]("project-slug", project_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateScheduleRequest | CreateScheduleRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Schedule],
            error_mapper=create_schedule_error_mapper,
            request_options=request_options,
        )

    async def delete_schedule(
        self, schedule_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteScheduleErrorBody]:
        """Deletes a schedule by its unique identifier.

        Args:
            schedule_id: The unique identifier of the schedule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/schedule/{schedule-id}"),
            path_params=[param[UUID]("schedule-id", schedule_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_schedule_error_mapper,
            request_options=request_options,
        )

    async def get_schedule(
        self, schedule_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Schedule, GetScheduleErrorBody]:
        """Returns a schedule by its unique identifier.

        Args:
            schedule_id: The unique identifier of the schedule
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/schedule/{schedule-id}"),
            path_params=[param[UUID]("schedule-id", schedule_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Schedule],
            error_mapper=get_schedule_error_mapper,
            request_options=request_options,
        )

    async def list_schedules(
        self,
        project_slug: str,
        *,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScheduleList, ListSchedulesErrorBody]:
        """Returns a list of scheduled pipeline triggers for a given project.

        Args:
            project_slug: The project slug in the form vcs-slug/org-name/repo-name (e.g.,
                gh/CircleCI-Public/api-preview-docs)
            page_token: Token for retrieving the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/project/{project-slug}/schedule"),
            path_params=[param[str]("project-slug", project_slug)],
            query_params=[param[str | None]("page-token", page_token)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ScheduleList],
            error_mapper=list_schedules_error_mapper,
            request_options=request_options,
        )

    async def update_schedule(
        self,
        schedule_id: UUID,
        body: UpdateScheduleRequest | UpdateScheduleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Schedule, UpdateScheduleErrorBody]:
        """Updates an existing schedule with the provided parameters.

        Args:
            schedule_id: The unique identifier of the schedule
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/schedule/{schedule-id}"),
            path_params=[param[UUID]("schedule-id", schedule_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateScheduleRequest | UpdateScheduleRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Schedule],
            error_mapper=update_schedule_error_mapper,
            request_options=request_options,
        )
