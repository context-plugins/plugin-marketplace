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
from ..errors.describe_test_execution_error import DescribeTestExecutionErrorBody, describe_test_execution_error_mapper
from ..errors.get_test_execution_artifacts_url_error import (
    GetTestExecutionArtifactsUrlErrorBody,
    get_test_execution_artifacts_url_error_mapper,
)
from ..errors.list_test_execution_result_items_error import (
    ListTestExecutionResultItemsErrorBody,
    list_test_execution_result_items_error_mapper,
)
from ..errors.list_test_executions_error import ListTestExecutionsErrorBody, list_test_executions_error_mapper
from ..errors.start_test_execution_error import StartTestExecutionErrorBody, start_test_execution_error_mapper
from ..models.describe_test_execution_response import DescribeTestExecutionResponse
from ..models.get_test_execution_artifacts_url_response import GetTestExecutionArtifactsUrlResponse
from ..models.list_test_execution_result_items_request import (
    ListTestExecutionResultItemsRequest,
    ListTestExecutionResultItemsRequestDict,
)
from ..models.list_test_execution_result_items_response import ListTestExecutionResultItemsResponse
from ..models.list_test_executions_request import ListTestExecutionsRequest, ListTestExecutionsRequestDict
from ..models.list_test_executions_response import ListTestExecutionsResponse
from ..models.start_test_execution_request import StartTestExecutionRequest, StartTestExecutionRequestDict
from ..models.start_test_execution_response import StartTestExecutionResponse
from ..server.server import Server


class Testexecutions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TestexecutionsWithRawResponse(client, server, auth)

    def describe_test_execution(
        self, test_execution_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeTestExecutionResponse:
        """Gets metadata information about the test execution.

        Args:
            test_execution_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.describe_test_execution(test_execution_id, request_options=request_options)
        )

    def get_test_execution_artifacts_url(
        self, test_execution_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetTestExecutionArtifactsUrlResponse:
        """The pre-signed Amazon S3 URL to download the test execution result artifacts.

        Args:
            test_execution_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.get_test_execution_artifacts_url(test_execution_id, request_options=request_options)
        )

    def list_test_execution_result_items(
        self,
        test_execution_id: str,
        *,
        body: ListTestExecutionResultItemsRequest | ListTestExecutionResultItemsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTestExecutionResultItemsResponse:
        """Gets a list of test execution result items.

        Args:
            test_execution_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_test_execution_result_items(
                test_execution_id, body=body, request_options=request_options
            ),
        )

    def list_test_executions(
        self,
        *,
        body: ListTestExecutionsRequest | ListTestExecutionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTestExecutionsResponse:
        """The list of test set executions.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.list_test_executions(body=body, request_options=request_options))

    def start_test_execution(
        self,
        test_set_id: str,
        *,
        body: StartTestExecutionRequest | StartTestExecutionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartTestExecutionResponse:
        """The action to start test set execution.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ConflictException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.start_test_execution(test_set_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> TestexecutionsWithRawResponse:
        return self._with_raw_response


class AsyncTestexecutions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTestexecutionsWithRawResponse(client, server, auth)

    async def describe_test_execution(
        self, test_execution_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeTestExecutionResponse:
        """Gets metadata information about the test execution.

        Args:
            test_execution_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_test_execution(test_execution_id, request_options=request_options)
        )

    async def get_test_execution_artifacts_url(
        self, test_execution_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetTestExecutionArtifactsUrlResponse:
        """The pre-signed Amazon S3 URL to download the test execution result artifacts.

        Args:
            test_execution_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_test_execution_artifacts_url(
                test_execution_id, request_options=request_options
            ),
        )

    async def list_test_execution_result_items(
        self,
        test_execution_id: str,
        *,
        body: ListTestExecutionResultItemsRequest | ListTestExecutionResultItemsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTestExecutionResultItemsResponse:
        """Gets a list of test execution result items.

        Args:
            test_execution_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_test_execution_result_items(
                test_execution_id, body=body, request_options=request_options
            ),
        )

    async def list_test_executions(
        self,
        *,
        body: ListTestExecutionsRequest | ListTestExecutionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTestExecutionsResponse:
        """The list of test set executions.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.list_test_executions(body=body, request_options=request_options))

    async def start_test_execution(
        self,
        test_set_id: str,
        *,
        body: StartTestExecutionRequest | StartTestExecutionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartTestExecutionResponse:
        """The action to start test set execution.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ConflictException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.start_test_execution(test_set_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTestexecutionsWithRawResponse:
        return self._with_raw_response


class TestexecutionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def describe_test_execution(
        self, test_execution_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeTestExecutionResponse, DescribeTestExecutionErrorBody]:
        """Gets metadata information about the test execution.

        Args:
            test_execution_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testexecutions/{testExecutionId}"
            ),
            path_params=[param[str]("testExecutionId", test_execution_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeTestExecutionResponse],
            error_mapper=describe_test_execution_error_mapper,
            request_options=request_options,
        )

    def get_test_execution_artifacts_url(
        self, test_execution_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetTestExecutionArtifactsUrlResponse, GetTestExecutionArtifactsUrlErrorBody]:
        """The pre-signed Amazon S3 URL to download the test execution result artifacts.

        Args:
            test_execution_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testexecutions/{testExecutionId}/artifacturl"
            ),
            path_params=[param[str]("testExecutionId", test_execution_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetTestExecutionArtifactsUrlResponse],
            error_mapper=get_test_execution_artifacts_url_error_mapper,
            request_options=request_options,
        )

    def list_test_execution_result_items(
        self,
        test_execution_id: str,
        *,
        body: ListTestExecutionResultItemsRequest | ListTestExecutionResultItemsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTestExecutionResultItemsResponse, ListTestExecutionResultItemsErrorBody]:
        """Gets a list of test execution result items.

        Args:
            test_execution_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testexecutions/{testExecutionId}/results"
            ),
            path_params=[param[str]("testExecutionId", test_execution_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTestExecutionResultItemsRequest | ListTestExecutionResultItemsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListTestExecutionResultItemsResponse],
            error_mapper=list_test_execution_result_items_error_mapper,
            request_options=request_options,
        )

    def list_test_executions(
        self,
        *,
        body: ListTestExecutionsRequest | ListTestExecutionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTestExecutionsResponse, ListTestExecutionsErrorBody]:
        """The list of test set executions.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testexecutions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTestExecutionsRequest | ListTestExecutionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListTestExecutionsResponse],
            error_mapper=list_test_executions_error_mapper,
            request_options=request_options,
        )

    def start_test_execution(
        self,
        test_set_id: str,
        *,
        body: StartTestExecutionRequest | StartTestExecutionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartTestExecutionResponse, StartTestExecutionErrorBody]:
        """The action to start test set execution.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testsets/{testSetId}/testexecutions"
            ),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartTestExecutionRequest | StartTestExecutionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartTestExecutionResponse],
            error_mapper=start_test_execution_error_mapper,
            request_options=request_options,
        )


class AsyncTestexecutionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def describe_test_execution(
        self, test_execution_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeTestExecutionResponse, DescribeTestExecutionErrorBody]:
        """Gets metadata information about the test execution.

        Args:
            test_execution_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testexecutions/{testExecutionId}"
            ),
            path_params=[param[str]("testExecutionId", test_execution_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeTestExecutionResponse],
            error_mapper=describe_test_execution_error_mapper,
            request_options=request_options,
        )

    async def get_test_execution_artifacts_url(
        self, test_execution_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetTestExecutionArtifactsUrlResponse, GetTestExecutionArtifactsUrlErrorBody]:
        """The pre-signed Amazon S3 URL to download the test execution result artifacts.

        Args:
            test_execution_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testexecutions/{testExecutionId}/artifacturl"
            ),
            path_params=[param[str]("testExecutionId", test_execution_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetTestExecutionArtifactsUrlResponse],
            error_mapper=get_test_execution_artifacts_url_error_mapper,
            request_options=request_options,
        )

    async def list_test_execution_result_items(
        self,
        test_execution_id: str,
        *,
        body: ListTestExecutionResultItemsRequest | ListTestExecutionResultItemsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTestExecutionResultItemsResponse, ListTestExecutionResultItemsErrorBody]:
        """Gets a list of test execution result items.

        Args:
            test_execution_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testexecutions/{testExecutionId}/results"
            ),
            path_params=[param[str]("testExecutionId", test_execution_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTestExecutionResultItemsRequest | ListTestExecutionResultItemsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListTestExecutionResultItemsResponse],
            error_mapper=list_test_execution_result_items_error_mapper,
            request_options=request_options,
        )

    async def list_test_executions(
        self,
        *,
        body: ListTestExecutionsRequest | ListTestExecutionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTestExecutionsResponse, ListTestExecutionsErrorBody]:
        """The list of test set executions.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testexecutions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTestExecutionsRequest | ListTestExecutionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListTestExecutionsResponse],
            error_mapper=list_test_executions_error_mapper,
            request_options=request_options,
        )

    async def start_test_execution(
        self,
        test_set_id: str,
        *,
        body: StartTestExecutionRequest | StartTestExecutionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartTestExecutionResponse, StartTestExecutionErrorBody]:
        """The action to start test set execution.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testsets/{testSetId}/testexecutions"
            ),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartTestExecutionRequest | StartTestExecutionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartTestExecutionResponse],
            error_mapper=start_test_execution_error_mapper,
            request_options=request_options,
        )
