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
from ..errors.create_test_set_error import CreateTestSetErrorBody, create_test_set_error_mapper
from ..errors.list_test_sets_error import ListTestSetsErrorBody, list_test_sets_error_mapper
from ..models.create_test_set_request import CreateTestSetRequest, CreateTestSetRequestDict
from ..models.test_set import TestSet
from ..models.test_set_list_response import TestSetListResponse
from ..server.server import Server


class TestSets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TestSetsWithRawResponse(client, server, auth)

    def create_test_set(
        self,
        project_id: str,
        body: CreateTestSetRequest | CreateTestSetRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestSet:
        """Creates a new test set within a project. The test set can include test cases and be configured to execute
        against specific Orchestrator environments. Requires the TM.TestSets OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test set created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(self._with_raw_response.create_test_set(project_id, body, request_options=request_options))

    def list_test_sets(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestSetListResponse:
        """Retrieves all test sets within a specific test project. Test sets group test cases for coordinated execution
        runs and can be linked to Orchestrator processes to trigger automated execution.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of test sets in the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_test_sets(
                project_id, page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TestSetsWithRawResponse:
        return self._with_raw_response


class AsyncTestSets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTestSetsWithRawResponse(client, server, auth)

    async def create_test_set(
        self,
        project_id: str,
        body: CreateTestSetRequest | CreateTestSetRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TestSet:
        """Creates a new test set within a project. The test set can include test cases and be configured to execute
        against specific Orchestrator environments. Requires the TM.TestSets OAuth scope.

        Args:
            project_id: Unique identifier of the test project
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Test set created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(await self._with_raw_response.create_test_set(project_id, body, request_options=request_options))

    async def list_test_sets(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TestSetListResponse:
        """Retrieves all test sets within a specific test project. Test sets group test cases for coordinated execution
        runs and can be linked to Orchestrator processes to trigger automated execution.

        Args:
            project_id: Unique identifier of the test project
            page: Page number for pagination (0-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of test sets in the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathTestManagerProjectsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_test_sets(
                project_id, page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTestSetsWithRawResponse:
        return self._with_raw_response


class TestSetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_test_set(
        self,
        project_id: str,
        body: CreateTestSetRequest | CreateTestSetRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestSet, CreateTestSetErrorBody]:
        """Creates a new test set within a project. The test set can include test cases and be configured to execute
        against specific Orchestrator environments. Requires the TM.TestSets OAuth scope.

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
                "/api/v2/projects/{projectId}/testsets"
            ),
            path_params=[param[str]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTestSetRequest | CreateTestSetRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TestSet],
            error_mapper=create_test_set_error_mapper,
            request_options=request_options,
        )

    def list_test_sets(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestSetListResponse, ListTestSetsErrorBody]:
        """Retrieves all test sets within a specific test project. Test sets group test cases for coordinated execution
        runs and can be linked to Orchestrator processes to trigger automated execution.

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
                "/api/v2/projects/{projectId}/testsets"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TestSetListResponse],
            error_mapper=list_test_sets_error_mapper,
            request_options=request_options,
        )


class AsyncTestSetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_test_set(
        self,
        project_id: str,
        body: CreateTestSetRequest | CreateTestSetRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TestSet, CreateTestSetErrorBody]:
        """Creates a new test set within a project. The test set can include test cases and be configured to execute
        against specific Orchestrator environments. Requires the TM.TestSets OAuth scope.

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
                "/api/v2/projects/{projectId}/testsets"
            ),
            path_params=[param[str]("projectId", project_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTestSetRequest | CreateTestSetRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TestSet],
            error_mapper=create_test_set_error_mapper,
            request_options=request_options,
        )

    async def list_test_sets(
        self,
        project_id: str,
        *,
        page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TestSetListResponse, ListTestSetsErrorBody]:
        """Retrieves all test sets within a specific test project. Test sets group test cases for coordinated execution
        runs and can be linked to Orchestrator processes to trigger automated execution.

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
                "/api/v2/projects/{projectId}/testsets"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TestSetListResponse],
            error_mapper=list_test_sets_error_mapper,
            request_options=request_options,
        )
