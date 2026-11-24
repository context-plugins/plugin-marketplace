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
from ..errors.get_project_error import GetProjectErrorBody, get_project_error_mapper
from ..errors.get_projects_error import GetProjectsErrorBody, get_projects_error_mapper
from ..models.project import Project
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def get_project(self, project_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> Project:
        """Retrieve a project for the authenticated user.

        Args:
            project_slug: The slug for the project to retrieve. E.g. for ``app.codeqr.io/acme``, the projectSlug is
                ``acme``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved project

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.get_project(project_slug, request_options=request_options))

    def get_projects(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Project]:
        """Retrieve a list of projects for the authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of projects

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.get_projects(request_options=request_options))

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def get_project(
        self, project_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Project:
        """Retrieve a project for the authenticated user.

        Args:
            project_slug: The slug for the project to retrieve. E.g. for ``app.codeqr.io/acme``, the projectSlug is
                ``acme``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The retrieved project

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.get_project(project_slug, request_options=request_options))

    async def get_projects(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Project]:
        """Retrieve a list of projects for the authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of projects

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.get_projects(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_project(
        self, project_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Project, GetProjectErrorBody]:
        """Retrieve a project for the authenticated user.

        Args:
            project_slug: The slug for the project to retrieve. E.g. for ``app.codeqr.io/acme``, the projectSlug is
                ``acme``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects/{projectSlug}"),
            path_params=[param[str]("projectSlug", project_slug)],
            auth_scheme=self._auth.token,
            decoder=json_decoder[Project],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    def get_projects(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Project], GetProjectsErrorBody]:
        """Retrieve a list of projects for the authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects"),
            auth_scheme=self._auth.token,
            decoder=json_decoder[list[Project]],
            error_mapper=get_projects_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_project(
        self, project_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Project, GetProjectErrorBody]:
        """Retrieve a project for the authenticated user.

        Args:
            project_slug: The slug for the project to retrieve. E.g. for ``app.codeqr.io/acme``, the projectSlug is
                ``acme``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects/{projectSlug}"),
            path_params=[param[str]("projectSlug", project_slug)],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[Project],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    async def get_projects(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Project], GetProjectsErrorBody]:
        """Retrieve a list of projects for the authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects"),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[list[Project]],
            error_mapper=get_projects_error_mapper,
            request_options=request_options,
        )
