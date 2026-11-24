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
from ..errors.create_test_set_discrepancy_report2_error import (
    CreateTestSetDiscrepancyReport2ErrorBody,
    create_test_set_discrepancy_report2_error_mapper,
)
from ..errors.delete_test_set_error import DeleteTestSetErrorBody, delete_test_set_error_mapper
from ..errors.describe_test_set_error import DescribeTestSetErrorBody, describe_test_set_error_mapper
from ..errors.list_test_set_records_error import ListTestSetRecordsErrorBody, list_test_set_records_error_mapper
from ..errors.list_test_sets_error import ListTestSetsErrorBody, list_test_sets_error_mapper
from ..errors.start_test_execution2_error import StartTestExecution2ErrorBody, start_test_execution2_error_mapper
from ..errors.update_test_set_error import UpdateTestSetErrorBody, update_test_set_error_mapper
from ..models.create_test_set_discrepancy_report_request import (
    CreateTestSetDiscrepancyReportRequest,
    CreateTestSetDiscrepancyReportRequestDict,
)
from ..models.create_test_set_discrepancy_report_response import CreateTestSetDiscrepancyReportResponse
from ..models.delete_test_set_request import DeleteTestSetRequest, DeleteTestSetRequestDict
from ..models.describe_test_set_response import DescribeTestSetResponse
from ..models.list_test_set_records_request import ListTestSetRecordsRequest, ListTestSetRecordsRequestDict
from ..models.list_test_set_records_response import ListTestSetRecordsResponse
from ..models.list_test_sets_request import ListTestSetsRequest, ListTestSetsRequestDict
from ..models.list_test_sets_response import ListTestSetsResponse
from ..models.start_test_execution_request_amazon_lex_model_building_v2_testsets_api import (
    StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi,
    StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict,
)
from ..models.start_test_execution_response_amazon_lex_model_building_v2_testsets_api import (
    StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi,
)
from ..models.update_test_set_request import UpdateTestSetRequest, UpdateTestSetRequestDict
from ..models.update_test_set_response import UpdateTestSetResponse
from ..server.server import Server


class Testsets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TestsetsWithRawResponse(client, server, auth)

    def create_test_set_discrepancy_report2(
        self,
        test_set_id: str,
        *,
        body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateTestSetDiscrepancyReportResponse:
        """Create a report that describes the differences between the bot and the test set.

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
            self._with_raw_response.create_test_set_discrepancy_report2(
                test_set_id, body=body, request_options=request_options
            ),
        )

    def delete_test_set(
        self,
        test_set_id: str,
        *,
        body: DeleteTestSetRequest | DeleteTestSetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """The action to delete the selected test set.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.delete_test_set(test_set_id, body=body, request_options=request_options))

    def describe_test_set(
        self, test_set_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeTestSetResponse:
        """Gets metadata information about the test set.

        Args:
            test_set_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.describe_test_set(test_set_id, request_options=request_options))

    def list_test_set_records(
        self,
        test_set_id: str,
        *,
        body: ListTestSetRecordsRequest | ListTestSetRecordsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTestSetRecordsResponse:
        """The list of test set records.

        Args:
            test_set_id: Value sent with the request.
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
            self._with_raw_response.list_test_set_records(test_set_id, body=body, request_options=request_options)
        )

    def list_test_sets(
        self,
        *,
        body: ListTestSetsRequest | ListTestSetsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTestSetsResponse:
        """The list of the test sets

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
        return unwrap(self._with_raw_response.list_test_sets(body=body, request_options=request_options))

    def start_test_execution2(
        self,
        test_set_id: str,
        *,
        body: (
            StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi
            | StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi:
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
            self._with_raw_response.start_test_execution2(test_set_id, body=body, request_options=request_options)
        )

    def update_test_set(
        self,
        test_set_id: str,
        *,
        body: UpdateTestSetRequest | UpdateTestSetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateTestSetResponse:
        """The action to update the test set.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.update_test_set(test_set_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TestsetsWithRawResponse:
        return self._with_raw_response


class AsyncTestsets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTestsetsWithRawResponse(client, server, auth)

    async def create_test_set_discrepancy_report2(
        self,
        test_set_id: str,
        *,
        body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateTestSetDiscrepancyReportResponse:
        """Create a report that describes the differences between the bot and the test set.

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
            await self._with_raw_response.create_test_set_discrepancy_report2(
                test_set_id, body=body, request_options=request_options
            ),
        )

    async def delete_test_set(
        self,
        test_set_id: str,
        *,
        body: DeleteTestSetRequest | DeleteTestSetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """The action to delete the selected test set.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_test_set(test_set_id, body=body, request_options=request_options)
        )

    async def describe_test_set(
        self, test_set_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeTestSetResponse:
        """Gets metadata information about the test set.

        Args:
            test_set_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ServiceQuotaExceededException
                ThrottlingException ValidationException ``error`` is ``ValidationException |
                ServiceQuotaExceededException | ResourceNotFoundException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.describe_test_set(test_set_id, request_options=request_options))

    async def list_test_set_records(
        self,
        test_set_id: str,
        *,
        body: ListTestSetRecordsRequest | ListTestSetRecordsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTestSetRecordsResponse:
        """The list of test set records.

        Args:
            test_set_id: Value sent with the request.
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
            await self._with_raw_response.list_test_set_records(test_set_id, body=body, request_options=request_options)
        )

    async def list_test_sets(
        self,
        *,
        body: ListTestSetsRequest | ListTestSetsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTestSetsResponse:
        """The list of the test sets

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
        return unwrap(await self._with_raw_response.list_test_sets(body=body, request_options=request_options))

    async def start_test_execution2(
        self,
        test_set_id: str,
        *,
        body: (
            StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi
            | StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi:
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
            await self._with_raw_response.start_test_execution2(test_set_id, body=body, request_options=request_options)
        )

    async def update_test_set(
        self,
        test_set_id: str,
        *,
        body: UpdateTestSetRequest | UpdateTestSetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateTestSetResponse:
        """The action to update the test set.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ConflictException | PreconditionFailedException | ThrottlingException
                | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_test_set(test_set_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTestsetsWithRawResponse:
        return self._with_raw_response


class TestsetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_test_set_discrepancy_report2(
        self,
        test_set_id: str,
        *,
        body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateTestSetDiscrepancyReportResponse, CreateTestSetDiscrepancyReport2ErrorBody]:
        """Create a report that describes the differences between the bot and the test set.

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
                "/testsets/{testSetId}/testsetdiscrepancy"
            ),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateTestSetDiscrepancyReportResponse],
            error_mapper=create_test_set_discrepancy_report2_error_mapper,
            request_options=request_options,
        )

    def delete_test_set(
        self,
        test_set_id: str,
        *,
        body: DeleteTestSetRequest | DeleteTestSetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteTestSetErrorBody]:
        """The action to delete the selected test set.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets/{testSetId}"),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteTestSetRequest | DeleteTestSetRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_test_set_error_mapper,
            request_options=request_options,
        )

    def describe_test_set(
        self, test_set_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeTestSetResponse, DescribeTestSetErrorBody]:
        """Gets metadata information about the test set.

        Args:
            test_set_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets/{testSetId}"),
            path_params=[param[str]("testSetId", test_set_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeTestSetResponse],
            error_mapper=describe_test_set_error_mapper,
            request_options=request_options,
        )

    def list_test_set_records(
        self,
        test_set_id: str,
        *,
        body: ListTestSetRecordsRequest | ListTestSetRecordsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTestSetRecordsResponse, ListTestSetRecordsErrorBody]:
        """The list of test set records.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets/{testSetId}/records"),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTestSetRecordsRequest | ListTestSetRecordsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListTestSetRecordsResponse],
            error_mapper=list_test_set_records_error_mapper,
            request_options=request_options,
        )

    def list_test_sets(
        self,
        *,
        body: ListTestSetsRequest | ListTestSetsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTestSetsResponse, ListTestSetsErrorBody]:
        """The list of the test sets

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTestSetsRequest | ListTestSetsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListTestSetsResponse],
            error_mapper=list_test_sets_error_mapper,
            request_options=request_options,
        )

    def start_test_execution2(
        self,
        test_set_id: str,
        *,
        body: (
            StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi
            | StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi, StartTestExecution2ErrorBody]:
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
            body=json_body[
                (
                    StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi
                    | StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi],
            error_mapper=start_test_execution2_error_mapper,
            request_options=request_options,
        )

    def update_test_set(
        self,
        test_set_id: str,
        *,
        body: UpdateTestSetRequest | UpdateTestSetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateTestSetResponse, UpdateTestSetErrorBody]:
        """The action to update the test set.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets/{testSetId}"),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTestSetRequest | UpdateTestSetRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateTestSetResponse],
            error_mapper=update_test_set_error_mapper,
            request_options=request_options,
        )


class AsyncTestsetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_test_set_discrepancy_report2(
        self,
        test_set_id: str,
        *,
        body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateTestSetDiscrepancyReportResponse, CreateTestSetDiscrepancyReport2ErrorBody]:
        """Create a report that describes the differences between the bot and the test set.

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
                "/testsets/{testSetId}/testsetdiscrepancy"
            ),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateTestSetDiscrepancyReportResponse],
            error_mapper=create_test_set_discrepancy_report2_error_mapper,
            request_options=request_options,
        )

    async def delete_test_set(
        self,
        test_set_id: str,
        *,
        body: DeleteTestSetRequest | DeleteTestSetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteTestSetErrorBody]:
        """The action to delete the selected test set.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets/{testSetId}"),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteTestSetRequest | DeleteTestSetRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_test_set_error_mapper,
            request_options=request_options,
        )

    async def describe_test_set(
        self, test_set_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeTestSetResponse, DescribeTestSetErrorBody]:
        """Gets metadata information about the test set.

        Args:
            test_set_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets/{testSetId}"),
            path_params=[param[str]("testSetId", test_set_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeTestSetResponse],
            error_mapper=describe_test_set_error_mapper,
            request_options=request_options,
        )

    async def list_test_set_records(
        self,
        test_set_id: str,
        *,
        body: ListTestSetRecordsRequest | ListTestSetRecordsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTestSetRecordsResponse, ListTestSetRecordsErrorBody]:
        """The list of test set records.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets/{testSetId}/records"),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTestSetRecordsRequest | ListTestSetRecordsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListTestSetRecordsResponse],
            error_mapper=list_test_set_records_error_mapper,
            request_options=request_options,
        )

    async def list_test_sets(
        self,
        *,
        body: ListTestSetsRequest | ListTestSetsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTestSetsResponse, ListTestSetsErrorBody]:
        """The list of the test sets

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListTestSetsRequest | ListTestSetsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListTestSetsResponse],
            error_mapper=list_test_sets_error_mapper,
            request_options=request_options,
        )

    async def start_test_execution2(
        self,
        test_set_id: str,
        *,
        body: (
            StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi
            | StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi, StartTestExecution2ErrorBody]:
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
            body=json_body[
                (
                    StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi
                    | StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi],
            error_mapper=start_test_execution2_error_mapper,
            request_options=request_options,
        )

    async def update_test_set(
        self,
        test_set_id: str,
        *,
        body: UpdateTestSetRequest | UpdateTestSetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateTestSetResponse, UpdateTestSetErrorBody]:
        """The action to update the test set.

        Args:
            test_set_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsets/{testSetId}"),
            path_params=[param[str]("testSetId", test_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTestSetRequest | UpdateTestSetRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateTestSetResponse],
            error_mapper=update_test_set_error_mapper,
            request_options=request_options,
        )
