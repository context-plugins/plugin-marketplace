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
from ..errors.flights_flights_get_error import FlightsFlightsGetErrorBody, flights_flights_get_error_mapper
from ..server.server import Server


class Flights:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = FlightsWithRawResponse(client, server)

    def flights_flights_get(
        self,
        *,
        region: str | None = None,
        callsign: str | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Live aircraft right now — real-time positions from adsb.lol community ADS-B (CC0). Filter by region preset
        and/or callsign. Airborne flights first. (Requires API key.)

        Args:
            region: region preset: morocco, spain, london, newyork, paris, tokyo, dubai, europe, usa, asia, ...
            callsign: filter by flight callsign, e.g. BAW123
            limit: Value sent with the request.
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
            self._with_raw_response.flights_flights_get(
                region=region,
                callsign=callsign,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> FlightsWithRawResponse:
        return self._with_raw_response


class AsyncFlights:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncFlightsWithRawResponse(client, server)

    async def flights_flights_get(
        self,
        *,
        region: str | None = None,
        callsign: str | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Live aircraft right now — real-time positions from adsb.lol community ADS-B (CC0). Filter by region preset
        and/or callsign. Airborne flights first. (Requires API key.)

        Args:
            region: region preset: morocco, spain, london, newyork, paris, tokyo, dubai, europe, usa, asia, ...
            callsign: filter by flight callsign, e.g. BAW123
            limit: Value sent with the request.
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
            await self._with_raw_response.flights_flights_get(
                region=region,
                callsign=callsign,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFlightsWithRawResponse:
        return self._with_raw_response


class FlightsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def flights_flights_get(
        self,
        *,
        region: str | None = None,
        callsign: str | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, FlightsFlightsGetErrorBody]:
        """Live aircraft right now — real-time positions from adsb.lol community ADS-B (CC0). Filter by region preset
        and/or callsign. Airborne flights first. (Requires API key.)

        Args:
            region: region preset: morocco, spain, london, newyork, paris, tokyo, dubai, europe, usa, asia, ...
            callsign: filter by flight callsign, e.g. BAW123
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/flights"),
            query_params=[
                param[str | None]("region", region),
                param[str | None]("callsign", callsign),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=flights_flights_get_error_mapper,
            request_options=request_options,
        )


class AsyncFlightsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def flights_flights_get(
        self,
        *,
        region: str | None = None,
        callsign: str | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, FlightsFlightsGetErrorBody]:
        """Live aircraft right now — real-time positions from adsb.lol community ADS-B (CC0). Filter by region preset
        and/or callsign. Airborne flights first. (Requires API key.)

        Args:
            region: region preset: morocco, spain, london, newyork, paris, tokyo, dubai, europe, usa, asia, ...
            callsign: filter by flight callsign, e.g. BAW123
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/flights"),
            query_params=[
                param[str | None]("region", region),
                param[str | None]("callsign", callsign),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=flights_flights_get_error_mapper,
            request_options=request_options,
        )
