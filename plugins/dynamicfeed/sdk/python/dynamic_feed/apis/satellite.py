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
from ..errors.satellite_satellite_get_error import SatelliteSatelliteGetErrorBody, satellite_satellite_get_error_mapper
from ..server.server import Server


class Satellite:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SatelliteWithRawResponse(client, server)

    def satellite_satellite_get(
        self,
        norad_id: int,
        *,
        track_minutes: int | None = 0,
        step_seconds: int | None = 60,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Real-time position of ANY satellite by NORAD id — true SGP4 propagation of the latest live CelesTrak TLE to
        the current instant: exact lat/lon, altitude, velocity, ground-footprint radius, the speed-of-light latency
        floor, and the TLE's age. Optionally a forward ground-track. (Requires API key.)

        Args:
            norad_id: NORAD catalog number, e.g. 25544 (ISS), 20580 (Hubble), 44714 (a Starlink)
            track_minutes: also return a predicted ground-track this many minutes ahead (0 = none)
            step_seconds: ground-track sampling step in seconds
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
            self._with_raw_response.satellite_satellite_get(
                norad_id,
                track_minutes=track_minutes,
                step_seconds=step_seconds,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SatelliteWithRawResponse:
        return self._with_raw_response


class AsyncSatellite:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSatelliteWithRawResponse(client, server)

    async def satellite_satellite_get(
        self,
        norad_id: int,
        *,
        track_minutes: int | None = 0,
        step_seconds: int | None = 60,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Real-time position of ANY satellite by NORAD id — true SGP4 propagation of the latest live CelesTrak TLE to
        the current instant: exact lat/lon, altitude, velocity, ground-footprint radius, the speed-of-light latency
        floor, and the TLE's age. Optionally a forward ground-track. (Requires API key.)

        Args:
            norad_id: NORAD catalog number, e.g. 25544 (ISS), 20580 (Hubble), 44714 (a Starlink)
            track_minutes: also return a predicted ground-track this many minutes ahead (0 = none)
            step_seconds: ground-track sampling step in seconds
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
            await self._with_raw_response.satellite_satellite_get(
                norad_id,
                track_minutes=track_minutes,
                step_seconds=step_seconds,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSatelliteWithRawResponse:
        return self._with_raw_response


class SatelliteWithRawResponse(BaseRawResponse[RawClient, Server]):
    def satellite_satellite_get(
        self,
        norad_id: int,
        *,
        track_minutes: int | None = 0,
        step_seconds: int | None = 60,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SatelliteSatelliteGetErrorBody]:
        """Real-time position of ANY satellite by NORAD id — true SGP4 propagation of the latest live CelesTrak TLE to
        the current instant: exact lat/lon, altitude, velocity, ground-footprint radius, the speed-of-light latency
        floor, and the TLE's age. Optionally a forward ground-track. (Requires API key.)

        Args:
            norad_id: NORAD catalog number, e.g. 25544 (ISS), 20580 (Hubble), 44714 (a Starlink)
            track_minutes: also return a predicted ground-track this many minutes ahead (0 = none)
            step_seconds: ground-track sampling step in seconds
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/satellite"),
            query_params=[
                param[int]("norad_id", norad_id),
                param[int | None]("track_minutes", track_minutes),
                param[int | None]("step_seconds", step_seconds),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=satellite_satellite_get_error_mapper,
            request_options=request_options,
        )


class AsyncSatelliteWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def satellite_satellite_get(
        self,
        norad_id: int,
        *,
        track_minutes: int | None = 0,
        step_seconds: int | None = 60,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SatelliteSatelliteGetErrorBody]:
        """Real-time position of ANY satellite by NORAD id — true SGP4 propagation of the latest live CelesTrak TLE to
        the current instant: exact lat/lon, altitude, velocity, ground-footprint radius, the speed-of-light latency
        floor, and the TLE's age. Optionally a forward ground-track. (Requires API key.)

        Args:
            norad_id: NORAD catalog number, e.g. 25544 (ISS), 20580 (Hubble), 44714 (a Starlink)
            track_minutes: also return a predicted ground-track this many minutes ahead (0 = none)
            step_seconds: ground-track sampling step in seconds
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/satellite"),
            query_params=[
                param[int]("norad_id", norad_id),
                param[int | None]("track_minutes", track_minutes),
                param[int | None]("step_seconds", step_seconds),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=satellite_satellite_get_error_mapper,
            request_options=request_options,
        )
