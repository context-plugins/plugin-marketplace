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
from ..errors.airport_delays_airport_delays_get_error import (
    AirportDelaysAirportDelaysGetErrorBody,
    airport_delays_airport_delays_get_error_mapper,
)
from ..server.server import Server


class AirportDelays:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AirportDelaysWithRawResponse(client, server)

    def airport_delays_airport_delays_get(
        self,
        *,
        airport: str | None = "",
        limit: int | None = 60,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Live FAA airport delays, ground stops, closures & ground-delay programs (US National Airspace System —
        keyless source). Empty/short list = airspace running normally. (Requires API key.)

        Args:
            airport: 3-letter airport code, e.g. LGA, LAX (optional)
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
            self._with_raw_response.airport_delays_airport_delays_get(
                airport=airport,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AirportDelaysWithRawResponse:
        return self._with_raw_response


class AsyncAirportDelays:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAirportDelaysWithRawResponse(client, server)

    async def airport_delays_airport_delays_get(
        self,
        *,
        airport: str | None = "",
        limit: int | None = 60,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Live FAA airport delays, ground stops, closures & ground-delay programs (US National Airspace System —
        keyless source). Empty/short list = airspace running normally. (Requires API key.)

        Args:
            airport: 3-letter airport code, e.g. LGA, LAX (optional)
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
            await self._with_raw_response.airport_delays_airport_delays_get(
                airport=airport,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAirportDelaysWithRawResponse:
        return self._with_raw_response


class AirportDelaysWithRawResponse(BaseRawResponse[RawClient, Server]):
    def airport_delays_airport_delays_get(
        self,
        *,
        airport: str | None = "",
        limit: int | None = 60,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AirportDelaysAirportDelaysGetErrorBody]:
        """Live FAA airport delays, ground stops, closures & ground-delay programs (US National Airspace System —
        keyless source). Empty/short list = airspace running normally. (Requires API key.)

        Args:
            airport: 3-letter airport code, e.g. LGA, LAX (optional)
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
            url_template=self._server.default("/airport-delays"),
            query_params=[param[str | None]("airport", airport), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=airport_delays_airport_delays_get_error_mapper,
            request_options=request_options,
        )


class AsyncAirportDelaysWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def airport_delays_airport_delays_get(
        self,
        *,
        airport: str | None = "",
        limit: int | None = 60,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AirportDelaysAirportDelaysGetErrorBody]:
        """Live FAA airport delays, ground stops, closures & ground-delay programs (US National Airspace System —
        keyless source). Empty/short list = airspace running normally. (Requires API key.)

        Args:
            airport: 3-letter airport code, e.g. LGA, LAX (optional)
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
            url_template=self._server.default("/airport-delays"),
            query_params=[param[str | None]("airport", airport), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=airport_delays_airport_delays_get_error_mapper,
            request_options=request_options,
        )
