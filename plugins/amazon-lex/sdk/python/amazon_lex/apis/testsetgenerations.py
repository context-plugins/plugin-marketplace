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
from ..errors.describe_test_set_generation_error import (
    DescribeTestSetGenerationErrorBody,
    describe_test_set_generation_error_mapper,
)
from ..errors.start_test_set_generation_error import (
    StartTestSetGenerationErrorBody,
    start_test_set_generation_error_mapper,
)
from ..models.describe_test_set_generation_response import DescribeTestSetGenerationResponse
from ..models.start_test_set_generation_request import StartTestSetGenerationRequest, StartTestSetGenerationRequestDict
from ..models.start_test_set_generation_response import StartTestSetGenerationResponse
from ..server.server import Server


class Testsetgenerations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TestsetgenerationsWithRawResponse(client, server, auth)

    def describe_test_set_generation(
        self, test_set_generation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeTestSetGenerationResponse:
        """Gets metadata information about the test set generation.

        Args:
            test_set_generation_id: Value sent with the request.
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
            self._with_raw_response.describe_test_set_generation(
                test_set_generation_id, request_options=request_options
            ),
        )

    def start_test_set_generation(
        self,
        *,
        body: StartTestSetGenerationRequest | StartTestSetGenerationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartTestSetGenerationResponse:
        """The action to start the generation of test set.

        Args:
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
        return unwrap(self._with_raw_response.start_test_set_generation(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TestsetgenerationsWithRawResponse:
        return self._with_raw_response


class AsyncTestsetgenerations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTestsetgenerationsWithRawResponse(client, server, auth)

    async def describe_test_set_generation(
        self, test_set_generation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeTestSetGenerationResponse:
        """Gets metadata information about the test set generation.

        Args:
            test_set_generation_id: Value sent with the request.
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
            await self._with_raw_response.describe_test_set_generation(
                test_set_generation_id, request_options=request_options
            ),
        )

    async def start_test_set_generation(
        self,
        *,
        body: StartTestSetGenerationRequest | StartTestSetGenerationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartTestSetGenerationResponse:
        """The action to start the generation of test set.

        Args:
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
            await self._with_raw_response.start_test_set_generation(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTestsetgenerationsWithRawResponse:
        return self._with_raw_response


class TestsetgenerationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def describe_test_set_generation(
        self, test_set_generation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeTestSetGenerationResponse, DescribeTestSetGenerationErrorBody]:
        """Gets metadata information about the test set generation.

        Args:
            test_set_generation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testsetgenerations/{testSetGenerationId}"
            ),
            path_params=[param[str]("testSetGenerationId", test_set_generation_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeTestSetGenerationResponse],
            error_mapper=describe_test_set_generation_error_mapper,
            request_options=request_options,
        )

    def start_test_set_generation(
        self,
        *,
        body: StartTestSetGenerationRequest | StartTestSetGenerationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartTestSetGenerationResponse, StartTestSetGenerationErrorBody]:
        """The action to start the generation of test set.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsetgenerations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartTestSetGenerationRequest | StartTestSetGenerationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartTestSetGenerationResponse],
            error_mapper=start_test_set_generation_error_mapper,
            request_options=request_options,
        )


class AsyncTestsetgenerationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def describe_test_set_generation(
        self, test_set_generation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeTestSetGenerationResponse, DescribeTestSetGenerationErrorBody]:
        """Gets metadata information about the test set generation.

        Args:
            test_set_generation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/testsetgenerations/{testSetGenerationId}"
            ),
            path_params=[param[str]("testSetGenerationId", test_set_generation_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeTestSetGenerationResponse],
            error_mapper=describe_test_set_generation_error_mapper,
            request_options=request_options,
        )

    async def start_test_set_generation(
        self,
        *,
        body: StartTestSetGenerationRequest | StartTestSetGenerationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartTestSetGenerationResponse, StartTestSetGenerationErrorBody]:
        """The action to start the generation of test set.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/testsetgenerations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartTestSetGenerationRequest | StartTestSetGenerationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartTestSetGenerationResponse],
            error_mapper=start_test_set_generation_error_mapper,
            request_options=request_options,
        )
