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
from ..errors.convert_positions_error import ConvertPositionsErrorBody, convert_positions_error_mapper
from ..errors.get_holdings_error import GetHoldingsErrorBody, get_holdings_error_mapper
from ..errors.get_mtf_positions_error import GetMtfPositionsErrorBody, get_mtf_positions_error_mapper
from ..errors.get_positions_error import GetPositionsErrorBody, get_positions_error_mapper
from ..models.convert_position_request import ConvertPositionRequest, ConvertPositionRequestDict
from ..models.convert_position_response import ConvertPositionResponse
from ..models.get_holdings_response import GetHoldingsResponse
from ..models.get_position_response import GetPositionResponse
from ..server.server import Server


class Portfolio:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PortfolioWithRawResponse(client, server, auth)

    def convert_positions(
        self,
        body: ConvertPositionRequest | ConvertPositionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ConvertPositionResponse:
        """Convert the margin product of an open position

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.convert_positions(body, request_options=request_options))

    def get_holdings(self, *, request_options: RequestOptionsOrDict | None = None) -> GetHoldingsResponse:
        """Fetches the holdings which the user has bought/sold in previous trading sessions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_holdings(request_options=request_options))

    def get_mtf_positions(self, *, request_options: RequestOptionsOrDict | None = None) -> GetPositionResponse:
        """This API allows you to get MTF positions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_mtf_positions(request_options=request_options))

    def get_positions(self, *, request_options: RequestOptionsOrDict | None = None) -> GetPositionResponse:
        """Fetches the current positions for the user for the current day.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_positions(request_options=request_options))

    @property
    def with_raw_response(self) -> PortfolioWithRawResponse:
        return self._with_raw_response


class AsyncPortfolio:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPortfolioWithRawResponse(client, server, auth)

    async def convert_positions(
        self,
        body: ConvertPositionRequest | ConvertPositionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ConvertPositionResponse:
        """Convert the margin product of an open position

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.convert_positions(body, request_options=request_options))

    async def get_holdings(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetHoldingsResponse:
        """Fetches the holdings which the user has bought/sold in previous trading sessions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_holdings(request_options=request_options))

    async def get_mtf_positions(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetPositionResponse:
        """This API allows you to get MTF positions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_mtf_positions(request_options=request_options))

    async def get_positions(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetPositionResponse:
        """Fetches the current positions for the user for the current day.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_positions(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPortfolioWithRawResponse:
        return self._with_raw_response


class PortfolioWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def convert_positions(
        self,
        body: ConvertPositionRequest | ConvertPositionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ConvertPositionResponse, ConvertPositionsErrorBody]:
        """Convert the margin product of an open position

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/portfolio/convert-position"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConvertPositionRequest | ConvertPositionRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[ConvertPositionResponse],
            error_mapper=convert_positions_error_mapper,
            request_options=request_options,
        )

    def get_holdings(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetHoldingsResponse, GetHoldingsErrorBody]:
        """Fetches the holdings which the user has bought/sold in previous trading sessions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/portfolio/long-term-holdings"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetHoldingsResponse],
            error_mapper=get_holdings_error_mapper,
            request_options=request_options,
        )

    def get_mtf_positions(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetPositionResponse, GetMtfPositionsErrorBody]:
        """This API allows you to get MTF positions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/portfolio/mtf-positions"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetPositionResponse],
            error_mapper=get_mtf_positions_error_mapper,
            request_options=request_options,
        )

    def get_positions(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetPositionResponse, GetPositionsErrorBody]:
        """Fetches the current positions for the user for the current day.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/portfolio/short-term-positions"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetPositionResponse],
            error_mapper=get_positions_error_mapper,
            request_options=request_options,
        )


class AsyncPortfolioWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def convert_positions(
        self,
        body: ConvertPositionRequest | ConvertPositionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ConvertPositionResponse, ConvertPositionsErrorBody]:
        """Convert the margin product of an open position

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/portfolio/convert-position"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConvertPositionRequest | ConvertPositionRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[ConvertPositionResponse],
            error_mapper=convert_positions_error_mapper,
            request_options=request_options,
        )

    async def get_holdings(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetHoldingsResponse, GetHoldingsErrorBody]:
        """Fetches the holdings which the user has bought/sold in previous trading sessions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/portfolio/long-term-holdings"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetHoldingsResponse],
            error_mapper=get_holdings_error_mapper,
            request_options=request_options,
        )

    async def get_mtf_positions(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetPositionResponse, GetMtfPositionsErrorBody]:
        """This API allows you to get MTF positions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/portfolio/mtf-positions"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetPositionResponse],
            error_mapper=get_mtf_positions_error_mapper,
            request_options=request_options,
        )

    async def get_positions(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetPositionResponse, GetPositionsErrorBody]:
        """Fetches the current positions for the user for the current day.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/portfolio/short-term-positions"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetPositionResponse],
            error_mapper=get_positions_error_mapper,
            request_options=request_options,
        )
