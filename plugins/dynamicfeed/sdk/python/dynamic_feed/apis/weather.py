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
from ..errors.v1_openweather_current_v1_openweather_current_get_error import (
    V1OpenweatherCurrentV1OpenweatherCurrentGetErrorBody,
    v1_openweather_current_v1_openweather_current_get_error_mapper,
)
from ..errors.v1_openweather_forecast_v1_openweather_forecast_get_error import (
    V1OpenweatherForecastV1OpenweatherForecastGetErrorBody,
    v1_openweather_forecast_v1_openweather_forecast_get_error_mapper,
)
from ..errors.weather_weather_get_error import WeatherWeatherGetErrorBody, weather_weather_get_error_mapper
from ..server.server import Server


class Weather:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = WeatherWithRawResponse(client, server)

    def v1_openweather_current_v1_openweather_current_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """LEGACY ALIAS — provider is Open-Meteo. Returns the canonical current_weather envelope (app/open_meteo.py:
        CC-BY 4.0, attribution, freshness, cross-source concordance) plus a provider-identity notice. Prefer the
        current_weather tool via POST /v1/batch or MCP.

        Args:
            city: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_openweather_current_v1_openweather_current_get(
                city=city, lat=lat, lon=lon, request_options=request_options
            ),
        )

    def v1_openweather_forecast_v1_openweather_forecast_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        days: int | None = 5,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """LEGACY ALIAS — provider is Open-Meteo. Returns the canonical multi-model forecast envelope
        (app/open_meteo.py) plus a provider-identity notice. Prefer weather_forecast via POST /v1/batch or MCP.

        Args:
            city: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_openweather_forecast_v1_openweather_forecast_get(
                city=city, lat=lat, lon=lon, days=days, request_options=request_options
            ),
        )

    def weather_weather_get(
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
        """Current weather anywhere — by city name (geocoded) or lat/lon. Temperature, feels-like, wind, humidity,
        precipitation & conditions, live from Open-Meteo. (Requires API key.)

        Args:
            city: city name, e.g. London, Tokyo, New York
            lat: latitude (alternative to city)
            lon: longitude (alternative to city)
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
            self._with_raw_response.weather_weather_get(
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
    def with_raw_response(self) -> WeatherWithRawResponse:
        return self._with_raw_response


class AsyncWeather:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncWeatherWithRawResponse(client, server)

    async def v1_openweather_current_v1_openweather_current_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """LEGACY ALIAS — provider is Open-Meteo. Returns the canonical current_weather envelope (app/open_meteo.py:
        CC-BY 4.0, attribution, freshness, cross-source concordance) plus a provider-identity notice. Prefer the
        current_weather tool via POST /v1/batch or MCP.

        Args:
            city: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_openweather_current_v1_openweather_current_get(
                city=city, lat=lat, lon=lon, request_options=request_options
            ),
        )

    async def v1_openweather_forecast_v1_openweather_forecast_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        days: int | None = 5,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """LEGACY ALIAS — provider is Open-Meteo. Returns the canonical multi-model forecast envelope
        (app/open_meteo.py) plus a provider-identity notice. Prefer weather_forecast via POST /v1/batch or MCP.

        Args:
            city: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_openweather_forecast_v1_openweather_forecast_get(
                city=city, lat=lat, lon=lon, days=days, request_options=request_options
            ),
        )

    async def weather_weather_get(
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
        """Current weather anywhere — by city name (geocoded) or lat/lon. Temperature, feels-like, wind, humidity,
        precipitation & conditions, live from Open-Meteo. (Requires API key.)

        Args:
            city: city name, e.g. London, Tokyo, New York
            lat: latitude (alternative to city)
            lon: longitude (alternative to city)
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
            await self._with_raw_response.weather_weather_get(
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
    def with_raw_response(self) -> AsyncWeatherWithRawResponse:
        return self._with_raw_response


class WeatherWithRawResponse(BaseRawResponse[RawClient, Server]):
    def v1_openweather_current_v1_openweather_current_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1OpenweatherCurrentV1OpenweatherCurrentGetErrorBody]:
        """LEGACY ALIAS — provider is Open-Meteo. Returns the canonical current_weather envelope (app/open_meteo.py:
        CC-BY 4.0, attribution, freshness, cross-source concordance) plus a provider-identity notice. Prefer the
        current_weather tool via POST /v1/batch or MCP.

        Args:
            city: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/openweather/current"),
            query_params=[
                param[str | None]("city", city), param[float | None]("lat", lat), param[float | None]("lon", lon)
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_openweather_current_v1_openweather_current_get_error_mapper,
            request_options=request_options,
        )

    def v1_openweather_forecast_v1_openweather_forecast_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        days: int | None = 5,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1OpenweatherForecastV1OpenweatherForecastGetErrorBody]:
        """LEGACY ALIAS — provider is Open-Meteo. Returns the canonical multi-model forecast envelope
        (app/open_meteo.py) plus a provider-identity notice. Prefer weather_forecast via POST /v1/batch or MCP.

        Args:
            city: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/openweather/forecast"),
            query_params=[
                param[str | None]("city", city),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[int | None]("days", days),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_openweather_forecast_v1_openweather_forecast_get_error_mapper,
            request_options=request_options,
        )

    def weather_weather_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, WeatherWeatherGetErrorBody]:
        """Current weather anywhere — by city name (geocoded) or lat/lon. Temperature, feels-like, wind, humidity,
        precipitation & conditions, live from Open-Meteo. (Requires API key.)

        Args:
            city: city name, e.g. London, Tokyo, New York
            lat: latitude (alternative to city)
            lon: longitude (alternative to city)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/weather"),
            query_params=[
                param[str | None]("city", city), param[float | None]("lat", lat), param[float | None]("lon", lon)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=weather_weather_get_error_mapper,
            request_options=request_options,
        )


class AsyncWeatherWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def v1_openweather_current_v1_openweather_current_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1OpenweatherCurrentV1OpenweatherCurrentGetErrorBody]:
        """LEGACY ALIAS — provider is Open-Meteo. Returns the canonical current_weather envelope (app/open_meteo.py:
        CC-BY 4.0, attribution, freshness, cross-source concordance) plus a provider-identity notice. Prefer the
        current_weather tool via POST /v1/batch or MCP.

        Args:
            city: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/openweather/current"),
            query_params=[
                param[str | None]("city", city), param[float | None]("lat", lat), param[float | None]("lon", lon)
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_openweather_current_v1_openweather_current_get_error_mapper,
            request_options=request_options,
        )

    async def v1_openweather_forecast_v1_openweather_forecast_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        days: int | None = 5,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1OpenweatherForecastV1OpenweatherForecastGetErrorBody]:
        """LEGACY ALIAS — provider is Open-Meteo. Returns the canonical multi-model forecast envelope
        (app/open_meteo.py) plus a provider-identity notice. Prefer weather_forecast via POST /v1/batch or MCP.

        Args:
            city: Value sent with the request.
            lat: Value sent with the request.
            lon: Value sent with the request.
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/openweather/forecast"),
            query_params=[
                param[str | None]("city", city),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[int | None]("days", days),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_openweather_forecast_v1_openweather_forecast_get_error_mapper,
            request_options=request_options,
        )

    async def weather_weather_get(
        self,
        *,
        city: str | None = None,
        lat: float | None = None,
        lon: float | None = None,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, WeatherWeatherGetErrorBody]:
        """Current weather anywhere — by city name (geocoded) or lat/lon. Temperature, feels-like, wind, humidity,
        precipitation & conditions, live from Open-Meteo. (Requires API key.)

        Args:
            city: city name, e.g. London, Tokyo, New York
            lat: latitude (alternative to city)
            lon: longitude (alternative to city)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/weather"),
            query_params=[
                param[str | None]("city", city), param[float | None]("lat", lat), param[float | None]("lon", lon)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=weather_weather_get_error_mapper,
            request_options=request_options,
        )
