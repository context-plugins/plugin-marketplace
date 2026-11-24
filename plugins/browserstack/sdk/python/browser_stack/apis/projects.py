from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    async_text_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    text_decoder,
    unwrap,
)
from ..models.automate_projects_json_request import AutomateProjectsJsonRequest, AutomateProjectsJsonRequestDict
from ..models.project import Project
from ..models.project_detail import ProjectDetail
from ..models.status_message import StatusMessage
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def delete_project(self, project_id: int, *, request_options: RequestOptionsOrDict | None = None) -> StatusMessage:
        """Deletes an Automate project. The project must be empty of builds and sessions.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion confirmation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_project(project_id, request_options=request_options))

    def get_project(self, project_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ProjectDetail:
        """Send a ``GET`` request.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project with associated builds

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_project(project_id, request_options=request_options))

    def get_project_badge_key(self, project_id: int, *, request_options: RequestOptionsOrDict | None = None) -> str:
        """Send a ``GET`` request.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Badge key string

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_project_badge_key(project_id, request_options=request_options))

    def list_projects(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Project]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of project objects

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_projects(request_options=request_options))

    def update_project(
        self,
        project_id: int,
        body: AutomateProjectsJsonRequest | AutomateProjectsJsonRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Project:
        """Send a ``PUT`` request.

        Args:
            project_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated project

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_project(project_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def delete_project(
        self, project_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StatusMessage:
        """Deletes an Automate project. The project must be empty of builds and sessions.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion confirmation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_project(project_id, request_options=request_options))

    async def get_project(
        self, project_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectDetail:
        """Send a ``GET`` request.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project with associated builds

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_project(project_id, request_options=request_options))

    async def get_project_badge_key(
        self, project_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """Send a ``GET`` request.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Badge key string

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_project_badge_key(project_id, request_options=request_options))

    async def list_projects(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Project]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of project objects

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_projects(request_options=request_options))

    async def update_project(
        self,
        project_id: int,
        body: AutomateProjectsJsonRequest | AutomateProjectsJsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Project:
        """Send a ``PUT`` request.

        Args:
            project_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated project

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_project(project_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_project(
        self, project_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StatusMessage, RawError]:
        """Deletes an Automate project. The project must be empty of builds and sessions.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/automate/projects/{projectId}.json"),
            path_params=[param[int]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[StatusMessage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_project(
        self, project_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectDetail, RawError]:
        """Send a ``GET`` request.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/projects/{projectId}.json"),
            path_params=[param[int]("projectId", project_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[ProjectDetail],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_project_badge_key(
        self, project_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, RawError]:
        """Send a ``GET`` request.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/projects/{projectId}/badge_key"),
            path_params=[param[int]("projectId", project_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_projects(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Project], RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/projects.json"),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[list[Project]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_project(
        self,
        project_id: int,
        body: AutomateProjectsJsonRequest | AutomateProjectsJsonRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, RawError]:
        """Send a ``PUT`` request.

        Args:
            project_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/automate/projects/{projectId}.json"),
            path_params=[param[int]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomateProjectsJsonRequest | AutomateProjectsJsonRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Project],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_project(
        self, project_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StatusMessage, RawError]:
        """Deletes an Automate project. The project must be empty of builds and sessions.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/automate/projects/{projectId}.json"),
            path_params=[param[int]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[StatusMessage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_project(
        self, project_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectDetail, RawError]:
        """Send a ``GET`` request.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/projects/{projectId}.json"),
            path_params=[param[int]("projectId", project_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[ProjectDetail],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_project_badge_key(
        self, project_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, RawError]:
        """Send a ``GET`` request.

        Args:
            project_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/projects/{projectId}/badge_key"),
            path_params=[param[int]("projectId", project_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_projects(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Project], RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/projects.json"),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[list[Project]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_project(
        self,
        project_id: int,
        body: AutomateProjectsJsonRequest | AutomateProjectsJsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, RawError]:
        """Send a ``PUT`` request.

        Args:
            project_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/automate/projects/{projectId}.json"),
            path_params=[param[int]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomateProjectsJsonRequest | AutomateProjectsJsonRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Project],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
