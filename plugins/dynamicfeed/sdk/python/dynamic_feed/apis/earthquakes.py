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
from ..errors.earthquakes_earthquakes_get_error import (
    EarthquakesEarthquakesGetErrorBody,
    earthquakes_earthquakes_get_error_mapper,
)
from ..server.server import Server


class Earthquakes:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EarthquakesWithRawResponse(client, server)

    def earthquakes_earthquakes_get(
        self,
        *,
        min_magnitude: float | None = 2.5,
        period: str | None = "day",
        tsunami_only: bool | None = False,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Recent earthquakes worldwide (USGS) — magnitude, depth, location, PAGER impact alert, tsunami flag, felt
        reports and significance. Sorted by impact then magnitude. (Requires API key.)

        Args:
            min_magnitude: minimum magnitude
            period: hour | day | week | month
            tsunami_only: only quakes flagged with tsunami potential
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
            self._with_raw_response.earthquakes_earthquakes_get(
                min_magnitude=min_magnitude,
                period=period,
                tsunami_only=tsunami_only,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EarthquakesWithRawResponse:
        return self._with_raw_response


class AsyncEarthquakes:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEarthquakesWithRawResponse(client, server)

    async def earthquakes_earthquakes_get(
        self,
        *,
        min_magnitude: float | None = 2.5,
        period: str | None = "day",
        tsunami_only: bool | None = False,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Recent earthquakes worldwide (USGS) — magnitude, depth, location, PAGER impact alert, tsunami flag, felt
        reports and significance. Sorted by impact then magnitude. (Requires API key.)

        Args:
            min_magnitude: minimum magnitude
            period: hour | day | week | month
            tsunami_only: only quakes flagged with tsunami potential
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
            await self._with_raw_response.earthquakes_earthquakes_get(
                min_magnitude=min_magnitude,
                period=period,
                tsunami_only=tsunami_only,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEarthquakesWithRawResponse:
        return self._with_raw_response


class EarthquakesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def earthquakes_earthquakes_get(
        self,
        *,
        min_magnitude: float | None = 2.5,
        period: str | None = "day",
        tsunami_only: bool | None = False,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, EarthquakesEarthquakesGetErrorBody]:
        """Recent earthquakes worldwide (USGS) — magnitude, depth, location, PAGER impact alert, tsunami flag, felt
        reports and significance. Sorted by impact then magnitude. (Requires API key.)

        Args:
            min_magnitude: minimum magnitude
            period: hour | day | week | month
            tsunami_only: only quakes flagged with tsunami potential
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
            url_template=self._server.default("/earthquakes"),
            query_params=[
                param[float | None]("min_magnitude", min_magnitude),
                param[str | None]("period", period),
                param[bool | None]("tsunami_only", tsunami_only),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=earthquakes_earthquakes_get_error_mapper,
            request_options=request_options,
        )


class AsyncEarthquakesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def earthquakes_earthquakes_get(
        self,
        *,
        min_magnitude: float | None = 2.5,
        period: str | None = "day",
        tsunami_only: bool | None = False,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, EarthquakesEarthquakesGetErrorBody]:
        """Recent earthquakes worldwide (USGS) — magnitude, depth, location, PAGER impact alert, tsunami flag, felt
        reports and significance. Sorted by impact then magnitude. (Requires API key.)

        Args:
            min_magnitude: minimum magnitude
            period: hour | day | week | month
            tsunami_only: only quakes flagged with tsunami potential
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
            url_template=self._server.default("/earthquakes"),
            query_params=[
                param[float | None]("min_magnitude", min_magnitude),
                param[str | None]("period", period),
                param[bool | None]("tsunami_only", tsunami_only),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=earthquakes_earthquakes_get_error_mapper,
            request_options=request_options,
        )
