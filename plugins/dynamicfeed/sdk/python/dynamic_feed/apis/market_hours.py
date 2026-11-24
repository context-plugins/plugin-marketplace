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
from ..errors.market_hours_market_hours_get_error import (
    MarketHoursMarketHoursGetErrorBody,
    market_hours_market_hours_get_error_mapper,
)
from ..server.server import Server


class MarketHours:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MarketHoursWithRawResponse(client, server)

    def market_hours_market_hours_get(
        self,
        *,
        market: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Is the market open right now? Live open/closed + next open/close for major exchanges (plus crypto 24/7 and
        forex 24/5). Tells an AI whether a price is live or a closed-market last-print. (Requires API key.)

        Args:
            market: NYSE, NASDAQ, LSE, XETRA, TSE, HKEX, ASX, Crypto, Forex
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
            self._with_raw_response.market_hours_market_hours_get(
                market=market,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> MarketHoursWithRawResponse:
        return self._with_raw_response


class AsyncMarketHours:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMarketHoursWithRawResponse(client, server)

    async def market_hours_market_hours_get(
        self,
        *,
        market: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Is the market open right now? Live open/closed + next open/close for major exchanges (plus crypto 24/7 and
        forex 24/5). Tells an AI whether a price is live or a closed-market last-print. (Requires API key.)

        Args:
            market: NYSE, NASDAQ, LSE, XETRA, TSE, HKEX, ASX, Crypto, Forex
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
            await self._with_raw_response.market_hours_market_hours_get(
                market=market,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMarketHoursWithRawResponse:
        return self._with_raw_response


class MarketHoursWithRawResponse(BaseRawResponse[RawClient, Server]):
    def market_hours_market_hours_get(
        self,
        *,
        market: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, MarketHoursMarketHoursGetErrorBody]:
        """Is the market open right now? Live open/closed + next open/close for major exchanges (plus crypto 24/7 and
        forex 24/5). Tells an AI whether a price is live or a closed-market last-print. (Requires API key.)

        Args:
            market: NYSE, NASDAQ, LSE, XETRA, TSE, HKEX, ASX, Crypto, Forex
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/market-hours"),
            query_params=[param[str | None]("market", market)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=market_hours_market_hours_get_error_mapper,
            request_options=request_options,
        )


class AsyncMarketHoursWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def market_hours_market_hours_get(
        self,
        *,
        market: str | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, MarketHoursMarketHoursGetErrorBody]:
        """Is the market open right now? Live open/closed + next open/close for major exchanges (plus crypto 24/7 and
        forex 24/5). Tells an AI whether a price is live or a closed-market last-print. (Requires API key.)

        Args:
            market: NYSE, NASDAQ, LSE, XETRA, TSE, HKEX, ASX, Crypto, Forex
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/market-hours"),
            query_params=[param[str | None]("market", market)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=market_hours_market_hours_get_error_mapper,
            request_options=request_options,
        )
