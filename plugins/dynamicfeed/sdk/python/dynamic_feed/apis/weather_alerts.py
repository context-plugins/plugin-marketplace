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
from ..errors.weather_alerts_weather_alerts_get_error import (
    WeatherAlertsWeatherAlertsGetErrorBody,
    weather_alerts_weather_alerts_get_error_mapper,
)
from ..server.server import Server


class WeatherAlerts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = WeatherAlertsWithRawResponse(client, server)

    def weather_alerts_weather_alerts_get(
        self,
        *,
        area: str | None = "",
        event: str | None = "",
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Active US NWS weather alerts/warnings — life-safety watches/warnings/advisories. (Requires API key.)

        Args:
            area: 2-letter US state (CA, TX...) or marine zone; blank = nationwide Severe/Extreme
            event: filter by event type, e.g. Flood, Tornado, Heat
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
            self._with_raw_response.weather_alerts_weather_alerts_get(
                area=area,
                event=event,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> WeatherAlertsWithRawResponse:
        return self._with_raw_response


class AsyncWeatherAlerts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncWeatherAlertsWithRawResponse(client, server)

    async def weather_alerts_weather_alerts_get(
        self,
        *,
        area: str | None = "",
        event: str | None = "",
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Active US NWS weather alerts/warnings — life-safety watches/warnings/advisories. (Requires API key.)

        Args:
            area: 2-letter US state (CA, TX...) or marine zone; blank = nationwide Severe/Extreme
            event: filter by event type, e.g. Flood, Tornado, Heat
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
            await self._with_raw_response.weather_alerts_weather_alerts_get(
                area=area,
                event=event,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWeatherAlertsWithRawResponse:
        return self._with_raw_response


class WeatherAlertsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def weather_alerts_weather_alerts_get(
        self,
        *,
        area: str | None = "",
        event: str | None = "",
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, WeatherAlertsWeatherAlertsGetErrorBody]:
        """Active US NWS weather alerts/warnings — life-safety watches/warnings/advisories. (Requires API key.)

        Args:
            area: 2-letter US state (CA, TX...) or marine zone; blank = nationwide Severe/Extreme
            event: filter by event type, e.g. Flood, Tornado, Heat
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
            url_template=self._server.default("/weather-alerts"),
            query_params=[
                param[str | None]("area", area), param[str | None]("event", event), param[int | None]("limit", limit)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=weather_alerts_weather_alerts_get_error_mapper,
            request_options=request_options,
        )


class AsyncWeatherAlertsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def weather_alerts_weather_alerts_get(
        self,
        *,
        area: str | None = "",
        event: str | None = "",
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, WeatherAlertsWeatherAlertsGetErrorBody]:
        """Active US NWS weather alerts/warnings — life-safety watches/warnings/advisories. (Requires API key.)

        Args:
            area: 2-letter US state (CA, TX...) or marine zone; blank = nationwide Severe/Extreme
            event: filter by event type, e.g. Flood, Tornado, Heat
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
            url_template=self._server.default("/weather-alerts"),
            query_params=[
                param[str | None]("area", area), param[str | None]("event", event), param[int | None]("limit", limit)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=weather_alerts_weather_alerts_get_error_mapper,
            request_options=request_options,
        )
