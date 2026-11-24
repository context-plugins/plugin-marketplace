from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.convert_ep_convert_get_error import ConvertEpConvertGetErrorBody, convert_ep_convert_get_error_mapper
from ..server.server import Server


class Convert:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ConvertWithRawResponse(client, server)

    def convert_ep_convert_get(
        self,
        *,
        amount: float | None = 1.0,
        from_currency: str | None = "USD",
        to_currency: str | None = "USD",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Convert money between fiat currencies at the LIVE ECB reference rate. Crypto & precious-metal conversion is
        coming in a future release. (Requires API key; keyless over MCP.)

        Args:
            amount: amount to convert
            from_currency: e.g. EUR, GBP, JPY
            to_currency: e.g. USD, AUD, CHF
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.convert_ep_convert_get(
                amount=amount,
                from_currency=from_currency,
                to_currency=to_currency,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ConvertWithRawResponse:
        return self._with_raw_response


class AsyncConvert:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncConvertWithRawResponse(client, server)

    async def convert_ep_convert_get(
        self,
        *,
        amount: float | None = 1.0,
        from_currency: str | None = "USD",
        to_currency: str | None = "USD",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Convert money between fiat currencies at the LIVE ECB reference rate. Crypto & precious-metal conversion is
        coming in a future release. (Requires API key; keyless over MCP.)

        Args:
            amount: amount to convert
            from_currency: e.g. EUR, GBP, JPY
            to_currency: e.g. USD, AUD, CHF
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.convert_ep_convert_get(
                amount=amount,
                from_currency=from_currency,
                to_currency=to_currency,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncConvertWithRawResponse:
        return self._with_raw_response


class ConvertWithRawResponse(BaseRawResponse[RawClient, Server]):
    def convert_ep_convert_get(
        self,
        *,
        amount: float | None = 1.0,
        from_currency: str | None = "USD",
        to_currency: str | None = "USD",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ConvertEpConvertGetErrorBody]:
        """Convert money between fiat currencies at the LIVE ECB reference rate. Crypto & precious-metal conversion is
        coming in a future release. (Requires API key; keyless over MCP.)

        Args:
            amount: amount to convert
            from_currency: e.g. EUR, GBP, JPY
            to_currency: e.g. USD, AUD, CHF
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/convert"),
            query_params=[
                param[float | None]("amount", amount),
                param[str | None]("from_currency", from_currency),
                param[str | None]("to_currency", to_currency),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=convert_ep_convert_get_error_mapper,
            request_options=request_options,
        )


class AsyncConvertWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def convert_ep_convert_get(
        self,
        *,
        amount: float | None = 1.0,
        from_currency: str | None = "USD",
        to_currency: str | None = "USD",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ConvertEpConvertGetErrorBody]:
        """Convert money between fiat currencies at the LIVE ECB reference rate. Crypto & precious-metal conversion is
        coming in a future release. (Requires API key; keyless over MCP.)

        Args:
            amount: amount to convert
            from_currency: e.g. EUR, GBP, JPY
            to_currency: e.g. USD, AUD, CHF
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/convert"),
            query_params=[
                param[float | None]("amount", amount),
                param[str | None]("from_currency", from_currency),
                param[str | None]("to_currency", to_currency),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=convert_ep_convert_get_error_mapper,
            request_options=request_options,
        )
