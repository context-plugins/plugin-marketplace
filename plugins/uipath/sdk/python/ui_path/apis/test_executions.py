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
from ..errors.list_test_executions_error import ListTestExecutionsErrorBody, list_test_executions_error_mapper
from ..models.test_execution_list_response import TestExecutionListResponse
from ..server.server import Server


class TestExecutions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TestExecutionsWithRawResponse(client, server, auth)

    def list_test_executions(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestExecutionListResponse:
        """Retrieves test execution results within a specific test project. Test executions represent runs of test sets
        and contain the aggregate pass/fail status across all included test cases. References to individual test case
        log objects are included for drill-down.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of test executions in the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_test_executions(
                project_id, page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TestExecutionsWithRawResponse:
        return self._with_raw_response


class AsyncTestExecutions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTestExecutionsWithRawResponse(client, server, auth)

    async def list_test_executions(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TestExecutionListResponse:
        """Retrieves test execution results within a specific test project. Test executions represent runs of test sets
        and contain the aggregate pass/fail status across all included test cases. References to individual test case
        log objects are included for drill-down.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of test executions in the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_test_executions(
                project_id, page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTestExecutionsWithRawResponse:
        return self._with_raw_response


class TestExecutionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_test_executions(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestExecutionListResponse, ListTestExecutionsErrorBody]:
        """Retrieves test execution results within a specific test project. Test executions represent runs of test sets
        and contain the aggregate pass/fail status across all included test cases. References to individual test case
        log objects are included for drill-down.

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
                "/api/v2/projects/{projectId}/testexecutions"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TestExecutionListResponse],
            error_mapper=list_test_executions_error_mapper,
            request_options=request_options,
        )


class AsyncTestExecutionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_test_executions(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TestExecutionListResponse, ListTestExecutionsErrorBody]:
        """Retrieves test execution results within a specific test project. Test executions represent runs of test sets
        and contain the aggregate pass/fail status across all included test cases. References to individual test case
        log objects are included for drill-down.

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
                "/api/v2/projects/{projectId}/testexecutions"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TestExecutionListResponse],
            error_mapper=list_test_executions_error_mapper,
            request_options=request_options,
        )
