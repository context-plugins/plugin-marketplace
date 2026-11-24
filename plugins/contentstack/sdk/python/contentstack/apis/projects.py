from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.delete_projects_by_project_uid_error import (
    DeleteProjectsByProjectUidErrorBody,
    delete_projects_by_project_uid_error_mapper,
)
from ..errors.get_all_projects_error import GetAllProjectsErrorBody, get_all_projects_error_mapper
from ..errors.get_project_error import GetProjectErrorBody, get_project_error_mapper
from ..errors.get_projects_by_project_uid_error import (
    GetProjectsByProjectUidErrorBody,
    get_projects_by_project_uid_error_mapper,
)
from ..errors.get_projects_error import GetProjectsErrorBody, get_projects_error_mapper
from ..errors.post_projects_error import PostProjectsErrorBody, post_projects_error_mapper
from ..errors.put_projects_by_project_uid_error import (
    PutProjectsByProjectUidErrorBody,
    put_projects_by_project_uid_error_mapper,
)
from ..errors.update_project_error import UpdateProjectErrorBody, update_project_error_mapper
from ..models.create_project_request import CreateProjectRequest, CreateProjectRequestDict
from ..models.create_project_request2 import CreateProjectRequest2, CreateProjectRequest2Dict
from ..models.project import Project
from ..models.project2 import Project2
from ..models.project_list import ProjectList
from ..models.project_list2 import ProjectList2
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def create_project(
        self,
        organization_uid: str,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Project:
        """Creates a new automation project within the specified organization. Projects serve as organizational
        containers for automations and shared configuration.

        Args:
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created project.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_project(organization_uid, body, request_options=request_options))

    def delete_project(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an automation project and all its automations, variables, and configuration. This action
        is irreversible.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_project(organization_uid, project_uid, request_options=request_options)
        )

    def delete_projects_by_project_uid(
        self, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a Launch project and all its environments and deployment history. This action is
        irreversible.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_projects_by_project_uid(project_uid, request_options=request_options)
        )

    def get_all_projects(
        self, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectList:
        """Retrieves all automation projects within the specified organization. Each project contains automations,
        variables, and external service account connections.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of automation projects in the organization.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_all_projects(organization_uid, request_options=request_options))

    def get_project(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Project:
        """Retrieves details for a specific automation project including its metadata, creation date, and current
        status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested project details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_project(organization_uid, project_uid, request_options=request_options)
        )

    def get_projects(self, *, request_options: RequestOptionsOrDict | None = None) -> ProjectList2:
        """Retrieves all Launch projects accessible to the authenticated user or organization. Returns project metadata
        including names, creation dates, and environment counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of Launch projects.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_projects(request_options=request_options))

    def get_projects_by_project_uid(
        self, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Project2:
        """Retrieves the details of a specific Launch project including its configuration, current status, and linked
        Contentstack stack.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Launch project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_projects_by_project_uid(project_uid, request_options=request_options))

    def post_projects(
        self,
        body: CreateProjectRequest2 | CreateProjectRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Project2:
        """Creates a new Launch project for deploying a web application. Projects serve as the top-level container for
        environments and deployments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created Launch project.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.post_projects(body, request_options=request_options))

    def put_projects_by_project_uid(
        self,
        project_uid: str,
        body: CreateProjectRequest2 | CreateProjectRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Project2:
        """Updates the configuration of an existing Launch project such as its name, description, or framework settings.

        Args:
            project_uid: The unique identifier of the Launch project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Launch project.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put_projects_by_project_uid(project_uid, body, request_options=request_options)
        )

    def update_project(
        self,
        organization_uid: str,
        project_uid: str,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Project:
        """Updates the name or description of an existing automation project.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated project.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_project(organization_uid, project_uid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def create_project(
        self,
        organization_uid: str,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Project:
        """Creates a new automation project within the specified organization. Projects serve as organizational
        containers for automations and shared configuration.

        Args:
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created project.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_project(organization_uid, body, request_options=request_options)
        )

    async def delete_project(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an automation project and all its automations, variables, and configuration. This action
        is irreversible.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_project(organization_uid, project_uid, request_options=request_options)
        )

    async def delete_projects_by_project_uid(
        self, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a Launch project and all its environments and deployment history. This action is
        irreversible.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Project deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_projects_by_project_uid(project_uid, request_options=request_options)
        )

    async def get_all_projects(
        self, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectList:
        """Retrieves all automation projects within the specified organization. Each project contains automations,
        variables, and external service account connections.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of automation projects in the organization.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_all_projects(organization_uid, request_options=request_options))

    async def get_project(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Project:
        """Retrieves details for a specific automation project including its metadata, creation date, and current
        status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested project details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_project(organization_uid, project_uid, request_options=request_options)
        )

    async def get_projects(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ProjectList2:
        """Retrieves all Launch projects accessible to the authenticated user or organization. Returns project metadata
        including names, creation dates, and environment counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of Launch projects.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_projects(request_options=request_options))

    async def get_projects_by_project_uid(
        self, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Project2:
        """Retrieves the details of a specific Launch project including its configuration, current status, and linked
        Contentstack stack.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested Launch project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_projects_by_project_uid(project_uid, request_options=request_options)
        )

    async def post_projects(
        self,
        body: CreateProjectRequest2 | CreateProjectRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Project2:
        """Creates a new Launch project for deploying a web application. Projects serve as the top-level container for
        environments and deployments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created Launch project.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.post_projects(body, request_options=request_options))

    async def put_projects_by_project_uid(
        self,
        project_uid: str,
        body: CreateProjectRequest2 | CreateProjectRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Project2:
        """Updates the configuration of an existing Launch project such as its name, description, or framework settings.

        Args:
            project_uid: The unique identifier of the Launch project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated Launch project.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put_projects_by_project_uid(
                project_uid, body, request_options=request_options
            ),
        )

    async def update_project(
        self,
        organization_uid: str,
        project_uid: str,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Project:
        """Updates the name or description of an existing automation project.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated project.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_project(
                organization_uid, project_uid, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_project(
        self,
        organization_uid: str,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, CreateProjectErrorBody]:
        """Creates a new automation project within the specified organization. Projects serve as organizational
        containers for automations and shared configuration.

        Args:
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest | CreateProjectRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Project],
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    def delete_project(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProjectErrorBody]:
        """Permanently deletes an automation project and all its automations, variables, and configuration. This action
        is irreversible.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=empty_response,
            error_mapper=delete_project_error_mapper,
            request_options=request_options,
        )

    def delete_projects_by_project_uid(
        self, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProjectsByProjectUidErrorBody]:
        """Permanently deletes a Launch project and all its environments and deployment history. This action is
        irreversible.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_projects_api("/projects/{project_uid}"),
            path_params=[param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=empty_response,
            error_mapper=delete_projects_by_project_uid_error_mapper,
            request_options=request_options,
        )

    def get_all_projects(
        self, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectList, GetAllProjectsErrorBody]:
        """Retrieves all automation projects within the specified organization. Each project contains automations,
        variables, and external service account connections.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[ProjectList],
            error_mapper=get_all_projects_error_mapper,
            request_options=request_options,
        )

    def get_project(
        self, organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Project, GetProjectErrorBody]:
        """Retrieves details for a specific automation project including its metadata, creation date, and current
        status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Project],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    def get_projects(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectList2, GetProjectsErrorBody]:
        """Retrieves all Launch projects accessible to the authenticated user or organization. Returns project metadata
        including names, creation dates, and environment counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_projects_api("/projects"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[ProjectList2],
            error_mapper=get_projects_error_mapper,
            request_options=request_options,
        )

    def get_projects_by_project_uid(
        self, project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Project2, GetProjectsByProjectUidErrorBody]:
        """Retrieves the details of a specific Launch project including its configuration, current status, and linked
        Contentstack stack.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_projects_api("/projects/{project_uid}"),
            path_params=[param[str]("project_uid", project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Project2],
            error_mapper=get_projects_by_project_uid_error_mapper,
            request_options=request_options,
        )

    def post_projects(
        self,
        body: CreateProjectRequest2 | CreateProjectRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Project2, PostProjectsErrorBody]:
        """Creates a new Launch project for deploying a web application. Projects serve as the top-level container for
        environments and deployments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_projects_api("/projects"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest2 | CreateProjectRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Project2],
            error_mapper=post_projects_error_mapper,
            request_options=request_options,
        )

    def put_projects_by_project_uid(
        self,
        project_uid: str,
        body: CreateProjectRequest2 | CreateProjectRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Project2, PutProjectsByProjectUidErrorBody]:
        """Updates the configuration of an existing Launch project such as its name, description, or framework settings.

        Args:
            project_uid: The unique identifier of the Launch project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_projects_api("/projects/{project_uid}"),
            path_params=[param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest2 | CreateProjectRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Project2],
            error_mapper=put_projects_by_project_uid_error_mapper,
            request_options=request_options,
        )

    def update_project(
        self,
        organization_uid: str,
        project_uid: str,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, UpdateProjectErrorBody]:
        """Updates the name or description of an existing automation project.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest | CreateProjectRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Project],
            error_mapper=update_project_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_project(
        self,
        organization_uid: str,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, CreateProjectErrorBody]:
        """Creates a new automation project within the specified organization. Projects serve as organizational
        containers for automations and shared configuration.

        Args:
            organization_uid: The unique identifier of the organization.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest | CreateProjectRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Project],
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    async def delete_project(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProjectErrorBody]:
        """Permanently deletes an automation project and all its automations, variables, and configuration. This action
        is irreversible.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_empty_response,
            error_mapper=delete_project_error_mapper,
            request_options=request_options,
        )

    async def delete_projects_by_project_uid(
        self, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProjectsByProjectUidErrorBody]:
        """Permanently deletes a Launch project and all its environments and deployment history. This action is
        irreversible.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_projects_api("/projects/{project_uid}"),
            path_params=[param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_empty_response,
            error_mapper=delete_projects_by_project_uid_error_mapper,
            request_options=request_options,
        )

    async def get_all_projects(
        self, organization_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectList, GetAllProjectsErrorBody]:
        """Retrieves all automation projects within the specified organization. Each project contains automations,
        variables, and external service account connections.

        Args:
            organization_uid: The unique identifier of the organization.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects"
            ),
            path_params=[param[str]("organization_uid", organization_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[ProjectList],
            error_mapper=get_all_projects_error_mapper,
            request_options=request_options,
        )

    async def get_project(
        self, organization_uid: str, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Project, GetProjectErrorBody]:
        """Retrieves details for a specific automation project including its metadata, creation date, and current
        status.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Project],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    async def get_projects(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectList2, GetProjectsErrorBody]:
        """Retrieves all Launch projects accessible to the authenticated user or organization. Returns project metadata
        including names, creation dates, and environment counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_projects_api("/projects"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[ProjectList2],
            error_mapper=get_projects_error_mapper,
            request_options=request_options,
        )

    async def get_projects_by_project_uid(
        self, project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Project2, GetProjectsByProjectUidErrorBody]:
        """Retrieves the details of a specific Launch project including its configuration, current status, and linked
        Contentstack stack.

        Args:
            project_uid: The unique identifier of the Launch project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_projects_api("/projects/{project_uid}"),
            path_params=[param[str]("project_uid", project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Project2],
            error_mapper=get_projects_by_project_uid_error_mapper,
            request_options=request_options,
        )

    async def post_projects(
        self,
        body: CreateProjectRequest2 | CreateProjectRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Project2, PostProjectsErrorBody]:
        """Creates a new Launch project for deploying a web application. Projects serve as the top-level container for
        environments and deployments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_projects_api("/projects"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest2 | CreateProjectRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Project2],
            error_mapper=post_projects_error_mapper,
            request_options=request_options,
        )

    async def put_projects_by_project_uid(
        self,
        project_uid: str,
        body: CreateProjectRequest2 | CreateProjectRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Project2, PutProjectsByProjectUidErrorBody]:
        """Updates the configuration of an existing Launch project such as its name, description, or framework settings.

        Args:
            project_uid: The unique identifier of the Launch project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_projects_api("/projects/{project_uid}"),
            path_params=[param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest2 | CreateProjectRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Project2],
            error_mapper=put_projects_by_project_uid_error_mapper,
            request_options=request_options,
        )

    async def update_project(
        self,
        organization_uid: str,
        project_uid: str,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Project, UpdateProjectErrorBody]:
        """Updates the name or description of an existing automation project.

        Args:
            organization_uid: The unique identifier of the organization.
            project_uid: The unique identifier of the automation project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_projects_api(
                "/v1/organizations/{organization_uid}/projects/{project_uid}"
            ),
            path_params=[param[str]("organization_uid", organization_uid), param[str]("project_uid", project_uid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest | CreateProjectRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Project],
            error_mapper=update_project_error_mapper,
            request_options=request_options,
        )
