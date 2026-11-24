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
from ..errors.create_project_error import CreateProjectErrorBody, create_project_error_mapper
from ..errors.get_project_error import GetProjectErrorBody, get_project_error_mapper
from ..errors.list_projects2_error import ListProjects2ErrorBody, list_projects2_error_mapper
from ..models.create_project_request import CreateProjectRequest, CreateProjectRequestDict
from ..models.project_list_response import ProjectListResponse
from ..models.project_ui_path_test_manager_projects_api import ProjectUiPathTestManagerProjectsApi
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def create_project(
        self,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProjectUiPathTestManagerProjectsApi:
        """Creates a new test project in Test Manager. The project becomes the container for all test cases,
        requirements, and test sets associated with the testing effort. Requires the TM.Projects OAuth scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test project created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(self._with_raw_response.create_project(body, request_options=request_options))

    def get_project(
        self, project_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectUiPathTestManagerProjectsApi:
        """Retrieves a specific test project by its unique identifier. Returns project details including name,
        description, creation date, and summary statistics for test cases and requirements.

        Args:
            project_id: Unique identifier of the test project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested test project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(self._with_raw_response.get_project(project_id, request_options=request_options))

    def list_projects2(
        self, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ProjectListResponse:
        """Retrieves all test projects accessible to the authenticated user. Projects are the top-level containers for
        test cases, requirements, test sets, and execution results. Requires the TM.Projects or TM.Projects.Read OAuth
        scope.

        Args:
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of test projects

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_projects2(page=page, page_size=page_size, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def create_project(
        self,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectUiPathTestManagerProjectsApi:
        """Creates a new test project in Test Manager. The project becomes the container for all test cases,
        requirements, and test sets associated with the testing effort. Requires the TM.Projects OAuth scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test project created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(await self._with_raw_response.create_project(body, request_options=request_options))

    async def get_project(
        self, project_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectUiPathTestManagerProjectsApi:
        """Retrieves a specific test project by its unique identifier. Returns project details including name,
        description, creation date, and summary statistics for test cases and requirements.

        Args:
            project_id: Unique identifier of the test project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested test project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(await self._with_raw_response.get_project(project_id, request_options=request_options))

    async def list_projects2(
        self,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectListResponse:
        """Retrieves all test projects accessible to the authenticated user. Projects are the top-level containers for
        test cases, requirements, test sets, and execution results. Requires the TM.Projects or TM.Projects.Read OAuth
        scope.

        Args:
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of test projects

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_projects2(
                page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_project(
        self,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectUiPathTestManagerProjectsApi, CreateProjectErrorBody]:
        """Creates a new test project in Test Manager. The project becomes the container for all test cases,
        requirements, and test sets associated with the testing effort. Requires the TM.Projects OAuth scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_test_manager_projects_api("/api/v2/projects"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest | CreateProjectRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ProjectUiPathTestManagerProjectsApi],
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    def get_project(
        self, project_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectUiPathTestManagerProjectsApi, GetProjectErrorBody]:
        """Retrieves a specific test project by its unique identifier. Returns project details including name,
        description, creation date, and summary statistics for test cases and requirements.

        Args:
            project_id: Unique identifier of the test project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_test_manager_projects_api("/api/v2/projects/{projectId}"),
            path_params=[param[str]("projectId", project_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ProjectUiPathTestManagerProjectsApi],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    def list_projects2(
        self, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectListResponse, ListProjects2ErrorBody]:
        """Retrieves all test projects accessible to the authenticated user. Projects are the top-level containers for
        test cases, requirements, test sets, and execution results. Requires the TM.Projects or TM.Projects.Read OAuth
        scope.

        Args:
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_test_manager_projects_api("/api/v2/projects"),
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ProjectListResponse],
            error_mapper=list_projects2_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_project(
        self,
        body: CreateProjectRequest | CreateProjectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectUiPathTestManagerProjectsApi, CreateProjectErrorBody]:
        """Creates a new test project in Test Manager. The project becomes the container for all test cases,
        requirements, and test sets associated with the testing effort. Requires the TM.Projects OAuth scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_test_manager_projects_api("/api/v2/projects"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProjectRequest | CreateProjectRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ProjectUiPathTestManagerProjectsApi],
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    async def get_project(
        self, project_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectUiPathTestManagerProjectsApi, GetProjectErrorBody]:
        """Retrieves a specific test project by its unique identifier. Returns project details including name,
        description, creation date, and summary statistics for test cases and requirements.

        Args:
            project_id: Unique identifier of the test project
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_test_manager_projects_api("/api/v2/projects/{projectId}"),
            path_params=[param[str]("projectId", project_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ProjectUiPathTestManagerProjectsApi],
            error_mapper=get_project_error_mapper,
            request_options=request_options,
        )

    async def list_projects2(
        self,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectListResponse, ListProjects2ErrorBody]:
        """Retrieves all test projects accessible to the authenticated user. Projects are the top-level containers for
        test cases, requirements, test sets, and execution results. Requires the TM.Projects or TM.Projects.Read OAuth
        scope.

        Args:
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_test_manager_projects_api("/api/v2/projects"),
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ProjectListResponse],
            error_mapper=list_projects2_error_mapper,
            request_options=request_options,
        )
