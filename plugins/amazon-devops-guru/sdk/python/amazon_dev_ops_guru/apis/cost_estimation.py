from __future__ import annotations

from typing import Any
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
from ..errors.get_cost_estimation_error import GetCostEstimationErrorBody, get_cost_estimation_error_mapper
from ..errors.start_cost_estimation_error import StartCostEstimationErrorBody, start_cost_estimation_error_mapper
from ..models.cost_estimation_request import CostEstimationRequest, CostEstimationRequestDict
from ..models.get_cost_estimation_response import GetCostEstimationResponse
from ..server.server import Server


class CostEstimation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CostEstimationWithRawResponse(client, server, auth)

    def get_cost_estimation(
        self, *, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GetCostEstimationResponse:
        """Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For
        more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.

        Args:
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.get_cost_estimation(next_token=next_token, request_options=request_options)
        )

    def start_cost_estimation(
        self,
        *,
        body: CostEstimationRequest | CostEstimationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ConflictException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.start_cost_estimation(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CostEstimationWithRawResponse:
        return self._with_raw_response


class AsyncCostEstimation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCostEstimationWithRawResponse(client, server, auth)

    async def get_cost_estimation(
        self, *, next_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetCostEstimationResponse:
        """Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For
        more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.

        Args:
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cost_estimation(next_token=next_token, request_options=request_options)
        )

    async def start_cost_estimation(
        self,
        *,
        body: CostEstimationRequest | CostEstimationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ConflictException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(await self._with_raw_response.start_cost_estimation(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCostEstimationWithRawResponse:
        return self._with_raw_response


class CostEstimationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_cost_estimation(
        self, *, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetCostEstimationResponse, GetCostEstimationErrorBody]:
        """Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For
        more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.

        Args:
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cost-estimation"),
            query_params=[param[str | None]("NextToken", next_token)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetCostEstimationResponse],
            error_mapper=get_cost_estimation_error_mapper,
            request_options=request_options,
        )

    def start_cost_estimation(
        self,
        *,
        body: CostEstimationRequest | CostEstimationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, StartCostEstimationErrorBody]:
        """Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/cost-estimation"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CostEstimationRequest | CostEstimationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=start_cost_estimation_error_mapper,
            request_options=request_options,
        )


class AsyncCostEstimationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_cost_estimation(
        self, *, next_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetCostEstimationResponse, GetCostEstimationErrorBody]:
        """Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For
        more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.

        Args:
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cost-estimation"),
            query_params=[param[str | None]("NextToken", next_token)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetCostEstimationResponse],
            error_mapper=get_cost_estimation_error_mapper,
            request_options=request_options,
        )

    async def start_cost_estimation(
        self,
        *,
        body: CostEstimationRequest | CostEstimationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, StartCostEstimationErrorBody]:
        """Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/cost-estimation"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CostEstimationRequest | CostEstimationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=start_cost_estimation_error_mapper,
            request_options=request_options,
        )
