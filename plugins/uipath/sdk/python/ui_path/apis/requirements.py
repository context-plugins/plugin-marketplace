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
from ..errors.create_requirement_error import CreateRequirementErrorBody, create_requirement_error_mapper
from ..errors.list_requirements_error import ListRequirementsErrorBody, list_requirements_error_mapper
from ..models.create_requirement_request import CreateRequirementRequest, CreateRequirementRequestDict
from ..models.requirement import Requirement
from ..models.requirement_list_response import RequirementListResponse
from ..server.server import Server


class Requirements:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RequirementsWithRawResponse(client, server, auth)

    def create_requirement(
        self,
        project_id: str,
        body: CreateRequirementRequest | CreateRequirementRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Requirement:
        """Creates a new requirement within a test project. Requirements can be linked to test cases to establish
        traceability coverage. Requires the TM.Requirements OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Requirement created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(self._with_raw_response.create_requirement(project_id, body, request_options=request_options))

    def list_requirements(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RequirementListResponse:
        """Retrieves all requirements defined within a specific test project. Requirements represent business or
        technical specifications that test cases are mapped to for traceability. Supports pagination. Requires the
        TM.Requirements or TM.Requirements.Read OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of requirements in the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_requirements(
                project_id, page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RequirementsWithRawResponse:
        return self._with_raw_response


class AsyncRequirements:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRequirementsWithRawResponse(client, server, auth)

    async def create_requirement(
        self,
        project_id: str,
        body: CreateRequirementRequest | CreateRequirementRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Requirement:
        """Creates a new requirement within a test project. Requirements can be linked to test cases to establish
        traceability coverage. Requires the TM.Requirements OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Requirement created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.create_requirement(project_id, body, request_options=request_options)
        )

    async def list_requirements(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RequirementListResponse:
        """Retrieves all requirements defined within a specific test project. Requirements represent business or
        technical specifications that test cases are mapped to for traceability. Supports pagination. Requires the
        TM.Requirements or TM.Requirements.Read OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of requirements in the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_requirements(
                project_id, page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRequirementsWithRawResponse:
        return self._with_raw_response


class RequirementsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_requirement(
        self,
        project_id: str,
        body: CreateRequirementRequest | CreateRequirementRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Requirement, CreateRequirementErrorBody]:
        """Creates a new requirement within a test project. Requirements can be linked to test cases to establish
        traceability coverage. Requires the TM.Requirements OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_test_manager_projects_api(
                "/api/v2/projects/{projectId}/requirements"
            ),
            path_params=[param[str]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateRequirementRequest | CreateRequirementRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Requirement],
            error_mapper=create_requirement_error_mapper,
            request_options=request_options,
        )

    def list_requirements(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RequirementListResponse, ListRequirementsErrorBody]:
        """Retrieves all requirements defined within a specific test project. Requirements represent business or
        technical specifications that test cases are mapped to for traceability. Supports pagination. Requires the
        TM.Requirements or TM.Requirements.Read OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_test_manager_projects_api(
                "/api/v2/projects/{projectId}/requirements"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[RequirementListResponse],
            error_mapper=list_requirements_error_mapper,
            request_options=request_options,
        )


class AsyncRequirementsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_requirement(
        self,
        project_id: str,
        body: CreateRequirementRequest | CreateRequirementRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Requirement, CreateRequirementErrorBody]:
        """Creates a new requirement within a test project. Requirements can be linked to test cases to establish
        traceability coverage. Requires the TM.Requirements OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_test_manager_projects_api(
                "/api/v2/projects/{projectId}/requirements"
            ),
            path_params=[param[str]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateRequirementRequest | CreateRequirementRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Requirement],
            error_mapper=create_requirement_error_mapper,
            request_options=request_options,
        )

    async def list_requirements(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RequirementListResponse, ListRequirementsErrorBody]:
        """Retrieves all requirements defined within a specific test project. Requirements represent business or
        technical specifications that test cases are mapped to for traceability. Supports pagination. Requires the
        TM.Requirements or TM.Requirements.Read OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_test_manager_projects_api(
                "/api/v2/projects/{projectId}/requirements"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[RequirementListResponse],
            error_mapper=list_requirements_error_mapper,
            request_options=request_options,
        )
