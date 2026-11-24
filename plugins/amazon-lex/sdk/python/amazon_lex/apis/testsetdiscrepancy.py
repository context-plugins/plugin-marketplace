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
from ..errors.create_test_set_discrepancy_report_error import (
    CreateTestSetDiscrepancyReportErrorBody,
    create_test_set_discrepancy_report_error_mapper,
)
from ..errors.describe_test_set_discrepancy_report_error import (
    DescribeTestSetDiscrepancyReportErrorBody,
    describe_test_set_discrepancy_report_error_mapper,
)
from ..models.create_test_set_discrepancy_report_request import (
    CreateTestSetDiscrepancyReportRequest,
    CreateTestSetDiscrepancyReportRequestDict,
)
from ..models.create_test_set_discrepancy_report_response import CreateTestSetDiscrepancyReportResponse
from ..models.describe_test_set_discrepancy_report_response import DescribeTestSetDiscrepancyReportResponse
from ..server.server import Server


class Testsetdiscrepancy:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TestsetdiscrepancyWithRawResponse(client, server, auth)

    def create_test_set_discrepancy_report(
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
            self._with_raw_response.create_test_set_discrepancy_report(
                test_set_id, body=body, request_options=request_options
            ),
        )

    def describe_test_set_discrepancy_report(
        self, test_set_discrepancy_report_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeTestSetDiscrepancyReportResponse:
        """Gets metadata information about the test set discrepancy report.

        Args:
            test_set_discrepancy_report_id: Value sent with the request.
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
            self._with_raw_response.describe_test_set_discrepancy_report(
                test_set_discrepancy_report_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TestsetdiscrepancyWithRawResponse:
        return self._with_raw_response


class AsyncTestsetdiscrepancy:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTestsetdiscrepancyWithRawResponse(client, server, auth)

    async def create_test_set_discrepancy_report(
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
            await self._with_raw_response.create_test_set_discrepancy_report(
                test_set_id, body=body, request_options=request_options
            ),
        )

    async def describe_test_set_discrepancy_report(
        self, test_set_discrepancy_report_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeTestSetDiscrepancyReportResponse:
        """Gets metadata information about the test set discrepancy report.

        Args:
            test_set_discrepancy_report_id: Value sent with the request.
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
            await self._with_raw_response.describe_test_set_discrepancy_report(
                test_set_discrepancy_report_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTestsetdiscrepancyWithRawResponse:
        return self._with_raw_response


class TestsetdiscrepancyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_test_set_discrepancy_report(
        self,
        test_set_id: str,
        *,
        body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateTestSetDiscrepancyReportResponse, CreateTestSetDiscrepancyReportErrorBody]:
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
            error_mapper=create_test_set_discrepancy_report_error_mapper,
            request_options=request_options,
        )

    def describe_test_set_discrepancy_report(
        self, test_set_discrepancy_report_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeTestSetDiscrepancyReportResponse, DescribeTestSetDiscrepancyReportErrorBody]:
        """Gets metadata information about the test set discrepancy report.

        Args:
            test_set_discrepancy_report_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testsetdiscrepancy/{testSetDiscrepancyReportId}"
            ),
            path_params=[param[str]("testSetDiscrepancyReportId", test_set_discrepancy_report_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeTestSetDiscrepancyReportResponse],
            error_mapper=describe_test_set_discrepancy_report_error_mapper,
            request_options=request_options,
        )


class AsyncTestsetdiscrepancyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_test_set_discrepancy_report(
        self,
        test_set_id: str,
        *,
        body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateTestSetDiscrepancyReportResponse, CreateTestSetDiscrepancyReportErrorBody]:
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
            error_mapper=create_test_set_discrepancy_report_error_mapper,
            request_options=request_options,
        )

    async def describe_test_set_discrepancy_report(
        self, test_set_discrepancy_report_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeTestSetDiscrepancyReportResponse, DescribeTestSetDiscrepancyReportErrorBody]:
        """Gets metadata information about the test set discrepancy report.

        Args:
            test_set_discrepancy_report_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testsetdiscrepancy/{testSetDiscrepancyReportId}"
            ),
            path_params=[param[str]("testSetDiscrepancyReportId", test_set_discrepancy_report_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeTestSetDiscrepancyReportResponse],
            error_mapper=describe_test_set_discrepancy_report_error_mapper,
            request_options=request_options,
        )
