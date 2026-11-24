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
from ..errors.gps_interference_gps_interference_get_error import (
    GpsInterferenceGpsInterferenceGetErrorBody,
    gps_interference_gps_interference_get_error_mapper,
)
from ..server.server import Server


class GpsInterference:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = GpsInterferenceWithRawResponse(client, server)

    def gps_interference_gps_interference_get(
        self,
        *,
        region: str | None = "",
        lat: float | None = None,
        lon: float | None = None,
        radius_km: int | None = 300,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Probable GPS/GNSS interference (jamming/spoofing) over an area, MEASURED from live ADS-B navigation integrity
        (the GPSJam method) — a Dynamic Feed-derived signal (from adsb.lol, CC0). Pass a region preset or lat+lon.
        (Requires API key.)

        Args:
            region: preset: london, blacksea, baltic, easternmed, persiangulf, korea, finland, caucasus, northsea
            lat: latitude (use with lon instead of a preset)
            lon: longitude
            radius_km: radius around lat/lon in km
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
            self._with_raw_response.gps_interference_gps_interference_get(
                region=region,
                lat=lat,
                lon=lon,
                radius_km=radius_km,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> GpsInterferenceWithRawResponse:
        return self._with_raw_response


class AsyncGpsInterference:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncGpsInterferenceWithRawResponse(client, server)

    async def gps_interference_gps_interference_get(
        self,
        *,
        region: str | None = "",
        lat: float | None = None,
        lon: float | None = None,
        radius_km: int | None = 300,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Probable GPS/GNSS interference (jamming/spoofing) over an area, MEASURED from live ADS-B navigation integrity
        (the GPSJam method) — a Dynamic Feed-derived signal (from adsb.lol, CC0). Pass a region preset or lat+lon.
        (Requires API key.)

        Args:
            region: preset: london, blacksea, baltic, easternmed, persiangulf, korea, finland, caucasus, northsea
            lat: latitude (use with lon instead of a preset)
            lon: longitude
            radius_km: radius around lat/lon in km
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
            await self._with_raw_response.gps_interference_gps_interference_get(
                region=region,
                lat=lat,
                lon=lon,
                radius_km=radius_km,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGpsInterferenceWithRawResponse:
        return self._with_raw_response


class GpsInterferenceWithRawResponse(BaseRawResponse[RawClient, Server]):
    def gps_interference_gps_interference_get(
        self,
        *,
        region: str | None = "",
        lat: float | None = None,
        lon: float | None = None,
        radius_km: int | None = 300,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GpsInterferenceGpsInterferenceGetErrorBody]:
        """Probable GPS/GNSS interference (jamming/spoofing) over an area, MEASURED from live ADS-B navigation integrity
        (the GPSJam method) — a Dynamic Feed-derived signal (from adsb.lol, CC0). Pass a region preset or lat+lon.
        (Requires API key.)

        Args:
            region: preset: london, blacksea, baltic, easternmed, persiangulf, korea, finland, caucasus, northsea
            lat: latitude (use with lon instead of a preset)
            lon: longitude
            radius_km: radius around lat/lon in km
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/gps-interference"),
            query_params=[
                param[str | None]("region", region),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[int | None]("radius_km", radius_km),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=gps_interference_gps_interference_get_error_mapper,
            request_options=request_options,
        )


class AsyncGpsInterferenceWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def gps_interference_gps_interference_get(
        self,
        *,
        region: str | None = "",
        lat: float | None = None,
        lon: float | None = None,
        radius_km: int | None = 300,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GpsInterferenceGpsInterferenceGetErrorBody]:
        """Probable GPS/GNSS interference (jamming/spoofing) over an area, MEASURED from live ADS-B navigation integrity
        (the GPSJam method) — a Dynamic Feed-derived signal (from adsb.lol, CC0). Pass a region preset or lat+lon.
        (Requires API key.)

        Args:
            region: preset: london, blacksea, baltic, easternmed, persiangulf, korea, finland, caucasus, northsea
            lat: latitude (use with lon instead of a preset)
            lon: longitude
            radius_km: radius around lat/lon in km
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/gps-interference"),
            query_params=[
                param[str | None]("region", region),
                param[float | None]("lat", lat),
                param[float | None]("lon", lon),
                param[int | None]("radius_km", radius_km),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=gps_interference_gps_interference_get_error_mapper,
            request_options=request_options,
        )
