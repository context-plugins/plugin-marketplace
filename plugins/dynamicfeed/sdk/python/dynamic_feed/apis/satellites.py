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
from ..errors.satellites_satellites_get_error import (
    SatellitesSatellitesGetErrorBody,
    satellites_satellites_get_error_mapper,
)
from ..server.server import Server


class Satellites:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SatellitesWithRawResponse(client, server)

    def satellites_satellites_get(
        self,
        *,
        group: str | None = "starlink",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Satellite/constellation catalog (Starlink, GPS, stations…) with altitude, orbital period, and a derived
        light-speed round-trip latency to ground — the physics floor for orbital networks. (Requires API key.)

        Args:
            group: starlink, stations, gps-ops, oneweb, galileo, weather, active, geo
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
            self._with_raw_response.satellites_satellites_get(
                group=group,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SatellitesWithRawResponse:
        return self._with_raw_response


class AsyncSatellites:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSatellitesWithRawResponse(client, server)

    async def satellites_satellites_get(
        self,
        *,
        group: str | None = "starlink",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Satellite/constellation catalog (Starlink, GPS, stations…) with altitude, orbital period, and a derived
        light-speed round-trip latency to ground — the physics floor for orbital networks. (Requires API key.)

        Args:
            group: starlink, stations, gps-ops, oneweb, galileo, weather, active, geo
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
            await self._with_raw_response.satellites_satellites_get(
                group=group,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSatellitesWithRawResponse:
        return self._with_raw_response


class SatellitesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def satellites_satellites_get(
        self,
        *,
        group: str | None = "starlink",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SatellitesSatellitesGetErrorBody]:
        """Satellite/constellation catalog (Starlink, GPS, stations…) with altitude, orbital period, and a derived
        light-speed round-trip latency to ground — the physics floor for orbital networks. (Requires API key.)

        Args:
            group: starlink, stations, gps-ops, oneweb, galileo, weather, active, geo
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
            url_template=self._server.default("/satellites"),
            query_params=[param[str | None]("group", group), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=satellites_satellites_get_error_mapper,
            request_options=request_options,
        )


class AsyncSatellitesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def satellites_satellites_get(
        self,
        *,
        group: str | None = "starlink",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SatellitesSatellitesGetErrorBody]:
        """Satellite/constellation catalog (Starlink, GPS, stations…) with altitude, orbital period, and a derived
        light-speed round-trip latency to ground — the physics floor for orbital networks. (Requires API key.)

        Args:
            group: starlink, stations, gps-ops, oneweb, galileo, weather, active, geo
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
            url_template=self._server.default("/satellites"),
            query_params=[param[str | None]("group", group), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=satellites_satellites_get_error_mapper,
            request_options=request_options,
        )
