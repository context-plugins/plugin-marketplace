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
from ..errors.create_test_case_error import CreateTestCaseErrorBody, create_test_case_error_mapper
from ..errors.get_test_case_error import GetTestCaseErrorBody, get_test_case_error_mapper
from ..errors.list_test_cases_error import ListTestCasesErrorBody, list_test_cases_error_mapper
from ..models.create_test_case_request import CreateTestCaseRequest, CreateTestCaseRequestDict
from ..models.test_case import TestCase
from ..models.test_case_list_response import TestCaseListResponse
from ..server.server import Server


class TestCases:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TestCasesWithRawResponse(client, server, auth)

    def create_test_case(
        self,
        project_id: str,
        body: CreateTestCaseRequest | CreateTestCaseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestCase:
        """Creates a new test case within a test project. The test case can be linked to automation packages deployed in
        Orchestrator to enable automated test execution via test sets. Requires the TM.TestCases OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test case created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(self._with_raw_response.create_test_case(project_id, body, request_options=request_options))

    def get_test_case(
        self, project_id: str, test_case_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TestCase:
        """Retrieves a specific test case by its unique identifier within a project. Returns full test case details
        including steps, labels, custom fields, automation linkage, and preconditions.

        Args:
            project_id: Unique identifier of the test project
            test_case_id: Unique identifier of the test case
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested test case

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(self._with_raw_response.get_test_case(project_id, test_case_id, request_options=request_options))

    def list_test_cases(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestCaseListResponse:
        """Retrieves all test cases defined within a specific test project. Each test case represents a single test
        scenario with preconditions, steps, and expected results. Supports pagination and filtering. Requires the
        TM.TestCases or TM.TestCases.Read OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of test cases in the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_test_cases(
                project_id, page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TestCasesWithRawResponse:
        return self._with_raw_response


class AsyncTestCases:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTestCasesWithRawResponse(client, server, auth)

    async def create_test_case(
        self,
        project_id: str,
        body: CreateTestCaseRequest | CreateTestCaseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TestCase:
        """Creates a new test case within a test project. The test case can be linked to automation packages deployed in
        Orchestrator to enable automated test execution via test sets. Requires the TM.TestCases OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test case created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(await self._with_raw_response.create_test_case(project_id, body, request_options=request_options))

    async def get_test_case(
        self, project_id: str, test_case_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TestCase:
        """Retrieves a specific test case by its unique identifier within a project. Returns full test case details
        including steps, labels, custom fields, automation linkage, and preconditions.

        Args:
            project_id: Unique identifier of the test project
            test_case_id: Unique identifier of the test case
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested test case

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_test_case(project_id, test_case_id, request_options=request_options)
        )

    async def list_test_cases(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TestCaseListResponse:
        """Retrieves all test cases defined within a specific test project. Each test case represents a single test
        scenario with preconditions, steps, and expected results. Supports pagination and filtering. Requires the
        TM.TestCases or TM.TestCases.Read OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of test cases in the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_test_cases(
                project_id, page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTestCasesWithRawResponse:
        return self._with_raw_response


class TestCasesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_test_case(
        self,
        project_id: str,
        body: CreateTestCaseRequest | CreateTestCaseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestCase, CreateTestCaseErrorBody]:
        """Creates a new test case within a test project. The test case can be linked to automation packages deployed in
        Orchestrator to enable automated test execution via test sets. Requires the TM.TestCases OAuth scope.

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
                "/api/v2/projects/{projectId}/testcases"
            ),
            path_params=[param[str]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTestCaseRequest | CreateTestCaseRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TestCase],
            error_mapper=create_test_case_error_mapper,
            request_options=request_options,
        )

    def get_test_case(
        self, project_id: str, test_case_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TestCase, GetTestCaseErrorBody]:
        """Retrieves a specific test case by its unique identifier within a project. Returns full test case details
        including steps, labels, custom fields, automation linkage, and preconditions.

        Args:
            project_id: Unique identifier of the test project
            test_case_id: Unique identifier of the test case
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_test_manager_projects_api(
                "/api/v2/projects/{projectId}/testcases/{testCaseId}"
            ),
            path_params=[param[str]("projectId", project_id), param[str]("testCaseId", test_case_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TestCase],
            error_mapper=get_test_case_error_mapper,
            request_options=request_options,
        )

    def list_test_cases(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestCaseListResponse, ListTestCasesErrorBody]:
        """Retrieves all test cases defined within a specific test project. Each test case represents a single test
        scenario with preconditions, steps, and expected results. Supports pagination and filtering. Requires the
        TM.TestCases or TM.TestCases.Read OAuth scope.

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
                "/api/v2/projects/{projectId}/testcases"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TestCaseListResponse],
            error_mapper=list_test_cases_error_mapper,
            request_options=request_options,
        )


class AsyncTestCasesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_test_case(
        self,
        project_id: str,
        body: CreateTestCaseRequest | CreateTestCaseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TestCase, CreateTestCaseErrorBody]:
        """Creates a new test case within a test project. The test case can be linked to automation packages deployed in
        Orchestrator to enable automated test execution via test sets. Requires the TM.TestCases OAuth scope.

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
                "/api/v2/projects/{projectId}/testcases"
            ),
            path_params=[param[str]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTestCaseRequest | CreateTestCaseRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TestCase],
            error_mapper=create_test_case_error_mapper,
            request_options=request_options,
        )

    async def get_test_case(
        self, project_id: str, test_case_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TestCase, GetTestCaseErrorBody]:
        """Retrieves a specific test case by its unique identifier within a project. Returns full test case details
        including steps, labels, custom fields, automation linkage, and preconditions.

        Args:
            project_id: Unique identifier of the test project
            test_case_id: Unique identifier of the test case
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_test_manager_projects_api(
                "/api/v2/projects/{projectId}/testcases/{testCaseId}"
            ),
            path_params=[param[str]("projectId", project_id), param[str]("testCaseId", test_case_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TestCase],
            error_mapper=get_test_case_error_mapper,
            request_options=request_options,
        )

    async def list_test_cases(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TestCaseListResponse, ListTestCasesErrorBody]:
        """Retrieves all test cases defined within a specific test project. Each test case represents a single test
        scenario with preconditions, steps, and expected results. Supports pagination and filtering. Requires the
        TM.TestCases or TM.TestCases.Read OAuth scope.

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
                "/api/v2/projects/{projectId}/testcases"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TestCaseListResponse],
            error_mapper=list_test_cases_error_mapper,
            request_options=request_options,
        )
