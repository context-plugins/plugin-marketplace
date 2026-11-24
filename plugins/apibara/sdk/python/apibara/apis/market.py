from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.market_sold_price_stats_error import MarketSoldPriceStatsErrorBody, market_sold_price_stats_error_mapper
from ..models.enums.auction import AuctionOrStr
from ..models.market_sold_price_stats_response import MarketSoldPriceStatsResponse
from ..server.server import Server


class Market:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MarketWithRawResponse(client, server, auth)

    def market_sold_price_stats(
        self,
        make: str,
        *,
        model: str | None = None,
        year: int | None = None,
        damage: str | None = None,
        auction: AuctionOrStr | None = None,
        sale_date_from: Date | None = None,
        sale_date_to: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MarketSoldPriceStatsResponse:
        """Aggregate retained positive sold-history prices by make and optional model/year/damage/source/date period.
        Responses are cached briefly.

        Args:
            make: Value sent with the request.
            model: Value sent with the request.
            year: Value sent with the request.
            damage: Value sent with the request.
            auction: Value sent with the request.
            sale_date_from: Value sent with the request.
            sale_date_to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold-price statistics

        Raises:
            ApiError: Missing/invalid API key Invalid parameters ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.market_sold_price_stats(
                make,
                model=model,
                year=year,
                damage=damage,
                auction=auction,
                sale_date_from=sale_date_from,
                sale_date_to=sale_date_to,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> MarketWithRawResponse:
        return self._with_raw_response


class AsyncMarket:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMarketWithRawResponse(client, server, auth)

    async def market_sold_price_stats(
        self,
        make: str,
        *,
        model: str | None = None,
        year: int | None = None,
        damage: str | None = None,
        auction: AuctionOrStr | None = None,
        sale_date_from: Date | None = None,
        sale_date_to: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MarketSoldPriceStatsResponse:
        """Aggregate retained positive sold-history prices by make and optional model/year/damage/source/date period.
        Responses are cached briefly.

        Args:
            make: Value sent with the request.
            model: Value sent with the request.
            year: Value sent with the request.
            damage: Value sent with the request.
            auction: Value sent with the request.
            sale_date_from: Value sent with the request.
            sale_date_to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold-price statistics

        Raises:
            ApiError: Missing/invalid API key Invalid parameters ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.market_sold_price_stats(
                make,
                model=model,
                year=year,
                damage=damage,
                auction=auction,
                sale_date_from=sale_date_from,
                sale_date_to=sale_date_to,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMarketWithRawResponse:
        return self._with_raw_response


class MarketWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def market_sold_price_stats(
        self,
        make: str,
        *,
        model: str | None = None,
        year: int | None = None,
        damage: str | None = None,
        auction: AuctionOrStr | None = None,
        sale_date_from: Date | None = None,
        sale_date_to: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MarketSoldPriceStatsResponse, MarketSoldPriceStatsErrorBody]:
        """Aggregate retained positive sold-history prices by make and optional model/year/damage/source/date period.
        Responses are cached briefly.

        Args:
            make: Value sent with the request.
            model: Value sent with the request.
            year: Value sent with the request.
            damage: Value sent with the request.
            auction: Value sent with the request.
            sale_date_from: Value sent with the request.
            sale_date_to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/market/sold-prices"),
            query_params=[
                param[str]("make", make),
                param[str | None]("model", model),
                param[int | None]("year", year),
                param[str | None]("damage", damage),
                param[AuctionOrStr | None]("auction", auction),
                param[Date | None]("sale_date_from", sale_date_from),
                param[Date | None]("sale_date_to", sale_date_to),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[MarketSoldPriceStatsResponse],
            error_mapper=market_sold_price_stats_error_mapper,
            request_options=request_options,
        )


class AsyncMarketWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def market_sold_price_stats(
        self,
        make: str,
        *,
        model: str | None = None,
        year: int | None = None,
        damage: str | None = None,
        auction: AuctionOrStr | None = None,
        sale_date_from: Date | None = None,
        sale_date_to: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MarketSoldPriceStatsResponse, MarketSoldPriceStatsErrorBody]:
        """Aggregate retained positive sold-history prices by make and optional model/year/damage/source/date period.
        Responses are cached briefly.

        Args:
            make: Value sent with the request.
            model: Value sent with the request.
            year: Value sent with the request.
            damage: Value sent with the request.
            auction: Value sent with the request.
            sale_date_from: Value sent with the request.
            sale_date_to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/market/sold-prices"),
            query_params=[
                param[str]("make", make),
                param[str | None]("model", model),
                param[int | None]("year", year),
                param[str | None]("damage", damage),
                param[AuctionOrStr | None]("auction", auction),
                param[Date | None]("sale_date_from", sale_date_from),
                param[Date | None]("sale_date_to", sale_date_to),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[MarketSoldPriceStatsResponse],
            error_mapper=market_sold_price_stats_error_mapper,
            request_options=request_options,
        )
