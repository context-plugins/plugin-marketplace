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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_project_error import CreateProjectErrorBody, create_project_error_mapper
from ..errors.delete_project_error import DeleteProjectErrorBody, delete_project_error_mapper
from ..errors.get_project_error import GetProjectErrorBody, get_project_error_mapper
from ..errors.list_projects_error import ListProjectsErrorBody, list_projects_error_mapper
from ..errors.list_stories_error import ListStoriesErrorBody, list_stories_error_mapper
from ..errors.update_project_error import UpdateProjectErrorBody, update_project_error_mapper
from ..models.create_project import CreateProject, CreateProjectDict
from ..models.project import Project
from ..models.story_slim import StorySlim
from ..models.update_project import UpdateProject, UpdateProjectDict
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def create_project(
        self, body: CreateProject | CreateProjectDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Project:
        """Create Project is used to create a new Shortcut Project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_project(body, request_options=request_options))

    def delete_project(self, project_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are
        moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.

        Args:
            project_public_id: The unique ID of the Project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_project(project_public_id, request_options=request_options))

    def get_project(self, project_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Project:
        """Get Project returns information about the selected Project.

        Args:
            project_public_id: The unique ID of the Project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_project(project_public_id, request_options=request_options))

    def list_projects(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Project]:
        """List Projects returns a list of all Projects and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_projects(request_options=request_options))

    def list_stories(
        self,
        project_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """List Stories returns a list of all Stories in a selected Project and their attributes.

        Args:
            project_public_id: The unique ID of the Project.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_stories(
                project_public_id, includes_description=includes_description, request_options=request_options
            ),
        )

    def update_project(
        self,
        project_public_id: int,
        body: UpdateProject | UpdateProjectDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Project:
        """Update Project can be used to change properties of a Project.

        Args:
            project_public_id: The unique ID of the Project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_project(project_public_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def create_project(
        self, body: CreateProject | CreateProjectDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Project:
        """Create Project is used to create a new Shortcut Project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_project(body, request_options=request_options))

    async def delete_project(
        self, project_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are
        moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.

        Args:
            project_public_id: The unique ID of the Project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_project(project_public_id, request_options=request_options))

    async def get_project(
        self, project_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Project:
        """Get Project returns information about the selected Project.

        Args:
            project_public_id: The unique ID of the Project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_project(project_public_id, request_options=request_options))

    async def list_projects(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Project]:
        """List Projects returns a list of all Projects and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_projects(request_options=request_options))

    async def list_stories(
        self,
        project_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """List Stories returns a list of all Stories in a selected Project and their attributes.

        Args:
            project_public_id: The unique ID of the Project.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_stories(
                project_public_id, includes_description=includes_description, request_options=request_options
            ),
        )

    async def update_project(
        self,
        project_public_id: int,
        body: UpdateProject | UpdateProjectDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Project:
        """Update Project can be used to change properties of a Project.

        Args:
            project_public_id: The unique ID of the Project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_project(project_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_project(
        self, body: CreateProject | CreateProjectDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Project, CreateProjectErrorBody]:
        """Create Project is used to create a new Shortcut Project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/projects"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProject | CreateProjectDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Project],
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    def delete_project(
        self, project_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProjectErrorBody]:
        """Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are
        moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.

        Args:
            project_public_id: The unique ID of the Project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/projects/{project-public-id}"),
            path_params=[param[int]("project-public-id", project_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_project_error_mapper,
            request_options=request_options,
        )

    def get_project(
        self, project_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Project, GetProjectErrorBody]:
        """Get Project returns information about the selected Project.

        Args:
            project_public_id: The unique ID of the Project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/projects/{project-public-id}"),
            path_params=[param[int]("project-public-id", project_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Project],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    def list_projects(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Project], ListProjectsErrorBody]:
        """List Projects returns a list of all Projects and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/projects"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Project]],
            error_mapper=list_projects_error_mapper,
            request_options=request_options,
        )

    def list_stories(
        self,
        project_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListStoriesErrorBody]:
        """List Stories returns a list of all Stories in a selected Project and their attributes.

        Args:
            project_public_id: The unique ID of the Project.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/projects/{project-public-id}/stories"),
            path_params=[param[int]("project-public-id", project_public_id)],
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=list_stories_error_mapper,
            request_options=request_options,
        )

    def update_project(
        self,
        project_public_id: int,
        body: UpdateProject | UpdateProjectDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, UpdateProjectErrorBody]:
        """Update Project can be used to change properties of a Project.

        Args:
            project_public_id: The unique ID of the Project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/projects/{project-public-id}"),
            path_params=[param[int]("project-public-id", project_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProject | UpdateProjectDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Project],
            error_mapper=update_project_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_project(
        self, body: CreateProject | CreateProjectDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Project, CreateProjectErrorBody]:
        """Create Project is used to create a new Shortcut Project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/projects"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProject | CreateProjectDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Project],
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    async def delete_project(
        self, project_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProjectErrorBody]:
        """Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are
        moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.

        Args:
            project_public_id: The unique ID of the Project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/projects/{project-public-id}"),
            path_params=[param[int]("project-public-id", project_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_project_error_mapper,
            request_options=request_options,
        )

    async def get_project(
        self, project_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Project, GetProjectErrorBody]:
        """Get Project returns information about the selected Project.

        Args:
            project_public_id: The unique ID of the Project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/projects/{project-public-id}"),
            path_params=[param[int]("project-public-id", project_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Project],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    async def list_projects(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Project], ListProjectsErrorBody]:
        """List Projects returns a list of all Projects and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/projects"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Project]],
            error_mapper=list_projects_error_mapper,
            request_options=request_options,
        )

    async def list_stories(
        self,
        project_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListStoriesErrorBody]:
        """List Stories returns a list of all Stories in a selected Project and their attributes.

        Args:
            project_public_id: The unique ID of the Project.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/projects/{project-public-id}/stories"),
            path_params=[param[int]("project-public-id", project_public_id)],
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=list_stories_error_mapper,
            request_options=request_options,
        )

    async def update_project(
        self,
        project_public_id: int,
        body: UpdateProject | UpdateProjectDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, UpdateProjectErrorBody]:
        """Update Project can be used to change properties of a Project.

        Args:
            project_public_id: The unique ID of the Project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/projects/{project-public-id}"),
            path_params=[param[int]("project-public-id", project_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProject | UpdateProjectDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Project],
            error_mapper=update_project_error_mapper,
            request_options=request_options,
        )
