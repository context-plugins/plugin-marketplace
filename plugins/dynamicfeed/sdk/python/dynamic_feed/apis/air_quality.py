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
from ..errors.air_quality_air_quality_get_error import (
    AirQualityAirQualityGetErrorBody,
    air_quality_air_quality_get_error_mapper,
)
from ..server.server import Server


class AirQuality:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AirQualityWithRawResponse(client, server)

    def air_quality_air_quality_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Current air quality (PM2.5/PM10, US & European AQI) by city or lat/lon. (Requires API key.)

        Args:
            city: city name
            lat: Value sent with the request.
            lon: Value sent with the request.
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
            self._with_raw_response.air_quality_air_quality_get(
                city=city,
                lat=lat,
                lon=lon,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AirQualityWithRawResponse:
        return self._with_raw_response


class AsyncAirQuality:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAirQualityWithRawResponse(client, server)

    async def air_quality_air_quality_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Current air quality (PM2.5/PM10, US & European AQI) by city or lat/lon. (Requires API key.)

        Args:
            city: city name
            lat: Value sent with the request.
            lon: Value sent with the request.
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
            await self._with_raw_response.air_quality_air_quality_get(
                city=city,
                lat=lat,
                lon=lon,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAirQualityWithRawResponse:
        return self._with_raw_response


class AirQualityWithRawResponse(BaseRawResponse[RawClient, Server]):
    def air_quality_air_quality_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AirQualityAirQualityGetErrorBody]:
        """Current air quality (PM2.5/PM10, US & European AQI) by city or lat/lon. (Requires API key.)

        Args:
            city: city name
            lat: Value sent with the request.
            lon: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/air-quality"),
            query_params=[
                param[str | None]("city", city), param[float | None]("lat", lat), param[float | None]("lon", lon)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=air_quality_air_quality_get_error_mapper,
            request_options=request_options,
        )


class AsyncAirQualityWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def air_quality_air_quality_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AirQualityAirQualityGetErrorBody]:
        """Current air quality (PM2.5/PM10, US & European AQI) by city or lat/lon. (Requires API key.)

        Args:
            city: city name
            lat: Value sent with the request.
            lon: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/air-quality"),
            query_params=[
                param[str | None]("city", city), param[float | None]("lat", lat), param[float | None]("lon", lon)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=air_quality_air_quality_get_error_mapper,
            request_options=request_options,
        )
