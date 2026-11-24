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
from ..errors.space_weather_space_weather_get_error import (
    SpaceWeatherSpaceWeatherGetErrorBody,
    space_weather_space_weather_get_error_mapper,
)
from ..server.server import Server


class SpaceWeather:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SpaceWeatherWithRawResponse(client, server)

    def space_weather_space_weather_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Full space-weather now-cast — NOAA R/S/G storm scales, geomagnetic Kp, solar wind (speed/ density/Bz, the
        storm driver) and the latest solar X-ray flux/flare. Affects satellite comms & drag, GPS, HF radio, power grids
        and orbital-compute radiation/power. (Requires API key.)

        Args:
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
            self._with_raw_response.space_weather_space_weather_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SpaceWeatherWithRawResponse:
        return self._with_raw_response


class AsyncSpaceWeather:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSpaceWeatherWithRawResponse(client, server)

    async def space_weather_space_weather_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Full space-weather now-cast — NOAA R/S/G storm scales, geomagnetic Kp, solar wind (speed/ density/Bz, the
        storm driver) and the latest solar X-ray flux/flare. Affects satellite comms & drag, GPS, HF radio, power grids
        and orbital-compute radiation/power. (Requires API key.)

        Args:
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
            await self._with_raw_response.space_weather_space_weather_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSpaceWeatherWithRawResponse:
        return self._with_raw_response


class SpaceWeatherWithRawResponse(BaseRawResponse[RawClient, Server]):
    def space_weather_space_weather_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SpaceWeatherSpaceWeatherGetErrorBody]:
        """Full space-weather now-cast — NOAA R/S/G storm scales, geomagnetic Kp, solar wind (speed/ density/Bz, the
        storm driver) and the latest solar X-ray flux/flare. Affects satellite comms & drag, GPS, HF radio, power grids
        and orbital-compute radiation/power. (Requires API key.)

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/space-weather"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=space_weather_space_weather_get_error_mapper,
            request_options=request_options,
        )


class AsyncSpaceWeatherWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def space_weather_space_weather_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SpaceWeatherSpaceWeatherGetErrorBody]:
        """Full space-weather now-cast — NOAA R/S/G storm scales, geomagnetic Kp, solar wind (speed/ density/Bz, the
        storm driver) and the latest solar X-ray flux/flare. Affects satellite comms & drag, GPS, HF radio, power grids
        and orbital-compute radiation/power. (Requires API key.)

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/space-weather"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=space_weather_space_weather_get_error_mapper,
            request_options=request_options,
        )
