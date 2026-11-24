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
from ..errors.forecast_forecast_get_error import ForecastForecastGetErrorBody, forecast_forecast_get_error_mapper
from ..server.server import Server


class Forecast:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ForecastWithRawResponse(client, server)

    def forecast_forecast_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        days: int | None = 7,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Multi-day weather forecast (up to 16 days) by city or lat/lon. (Requires API key.)

        Args:
            city: city name
            lat: Value sent with the request.
            lon: Value sent with the request.
            days: Value sent with the request.
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
            self._with_raw_response.forecast_forecast_get(
                city=city,
                lat=lat,
                lon=lon,
                days=days,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ForecastWithRawResponse:
        return self._with_raw_response


class AsyncForecast:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncForecastWithRawResponse(client, server)

    async def forecast_forecast_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        days: int | None = 7,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Multi-day weather forecast (up to 16 days) by city or lat/lon. (Requires API key.)

        Args:
            city: city name
            lat: Value sent with the request.
            lon: Value sent with the request.
            days: Value sent with the request.
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
            await self._with_raw_response.forecast_forecast_get(
                city=city,
                lat=lat,
                lon=lon,
                days=days,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncForecastWithRawResponse:
        return self._with_raw_response


class ForecastWithRawResponse(BaseRawResponse[RawClient, Server]):
    def forecast_forecast_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        days: int | None = 7,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ForecastForecastGetErrorBody]:
        """Multi-day weather forecast (up to 16 days) by city or lat/lon. (Requires API key.)

        Args:
            city: city name
            lat: Value sent with the request.
            lon: Value sent with the request.
            days: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/forecast"),
            query_params=[
                param[str | None]("city", city),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[int | None]("days", days),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=forecast_forecast_get_error_mapper,
            request_options=request_options,
        )


class AsyncForecastWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def forecast_forecast_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        days: int | None = 7,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ForecastForecastGetErrorBody]:
        """Multi-day weather forecast (up to 16 days) by city or lat/lon. (Requires API key.)

        Args:
            city: city name
            lat: Value sent with the request.
            lon: Value sent with the request.
            days: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/forecast"),
            query_params=[
                param[str | None]("city", city),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[int | None]("days", days),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=forecast_forecast_get_error_mapper,
            request_options=request_options,
        )
