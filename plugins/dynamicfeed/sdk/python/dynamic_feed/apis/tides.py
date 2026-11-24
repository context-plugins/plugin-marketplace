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
from ..errors.tides_ep_tides_get_error import TidesEpTidesGetErrorBody, tides_ep_tides_get_error_mapper
from ..server.server import Server


class Tides:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TidesWithRawResponse(client, server)

    def tides_ep_tides_get(
        self,
        *,
        station: str | None = "",
        location: str | None = "",
        units: str | None = "english",
        limit: int | None = 6,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Current water level + next high/low tides for a US coastal station (NOAA CO-OPS, public domain). SCOPE: US
        stations only. Not for navigation — confirm against official NOAA tide tables. (Requires API key.)

        Args:
            station: NOAA station id, e.g. 9414290
            location: or a preset: san francisco, new york, boston, seattle, honolulu, …
            units: english (feet) | metric
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
            self._with_raw_response.tides_ep_tides_get(
                station=station,
                location=location,
                units=units,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> TidesWithRawResponse:
        return self._with_raw_response


class AsyncTides:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTidesWithRawResponse(client, server)

    async def tides_ep_tides_get(
        self,
        *,
        station: str | None = "",
        location: str | None = "",
        units: str | None = "english",
        limit: int | None = 6,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Current water level + next high/low tides for a US coastal station (NOAA CO-OPS, public domain). SCOPE: US
        stations only. Not for navigation — confirm against official NOAA tide tables. (Requires API key.)

        Args:
            station: NOAA station id, e.g. 9414290
            location: or a preset: san francisco, new york, boston, seattle, honolulu, …
            units: english (feet) | metric
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
            await self._with_raw_response.tides_ep_tides_get(
                station=station,
                location=location,
                units=units,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTidesWithRawResponse:
        return self._with_raw_response


class TidesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def tides_ep_tides_get(
        self,
        *,
        station: str | None = "",
        location: str | None = "",
        units: str | None = "english",
        limit: int | None = 6,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TidesEpTidesGetErrorBody]:
        """Current water level + next high/low tides for a US coastal station (NOAA CO-OPS, public domain). SCOPE: US
        stations only. Not for navigation — confirm against official NOAA tide tables. (Requires API key.)

        Args:
            station: NOAA station id, e.g. 9414290
            location: or a preset: san francisco, new york, boston, seattle, honolulu, …
            units: english (feet) | metric
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
            url_template=self._server.default("/tides"),
            query_params=[
                param[str | None]("station", station),
                param[str | None]("location", location),
                param[str | None]("units", units),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=tides_ep_tides_get_error_mapper,
            request_options=request_options,
        )


class AsyncTidesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def tides_ep_tides_get(
        self,
        *,
        station: str | None = "",
        location: str | None = "",
        units: str | None = "english",
        limit: int | None = 6,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TidesEpTidesGetErrorBody]:
        """Current water level + next high/low tides for a US coastal station (NOAA CO-OPS, public domain). SCOPE: US
        stations only. Not for navigation — confirm against official NOAA tide tables. (Requires API key.)

        Args:
            station: NOAA station id, e.g. 9414290
            location: or a preset: san francisco, new york, boston, seattle, honolulu, …
            units: english (feet) | metric
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
            url_template=self._server.default("/tides"),
            query_params=[
                param[str | None]("station", station),
                param[str | None]("location", location),
                param[str | None]("units", units),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=tides_ep_tides_get_error_mapper,
            request_options=request_options,
        )
