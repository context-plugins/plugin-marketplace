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
from ..errors.orbital_datacenters_orbital_datacenters_get_error import (
    OrbitalDatacentersOrbitalDatacentersGetErrorBody,
    orbital_datacenters_orbital_datacenters_get_error_mapper,
)
from ..server.server import Server


class OrbitalDatacenters:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = OrbitalDatacentersWithRawResponse(client, server)

    def orbital_datacenters_orbital_datacenters_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """DATA CENTERS IN SPACE — a curated registry of compute/AI spacecraft in orbit (Starcloud's NVIDIA H100, ESA
        Φsat-2 AI edge, D-Orbit in-orbit cloud), each enriched with live orbital data and the speed-of-light latency
        floor for ground links. Data nowhere else. (Requires API key.)

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
            self._with_raw_response.orbital_datacenters_orbital_datacenters_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> OrbitalDatacentersWithRawResponse:
        return self._with_raw_response


class AsyncOrbitalDatacenters:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncOrbitalDatacentersWithRawResponse(client, server)

    async def orbital_datacenters_orbital_datacenters_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """DATA CENTERS IN SPACE — a curated registry of compute/AI spacecraft in orbit (Starcloud's NVIDIA H100, ESA
        Φsat-2 AI edge, D-Orbit in-orbit cloud), each enriched with live orbital data and the speed-of-light latency
        floor for ground links. Data nowhere else. (Requires API key.)

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
            await self._with_raw_response.orbital_datacenters_orbital_datacenters_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOrbitalDatacentersWithRawResponse:
        return self._with_raw_response


class OrbitalDatacentersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def orbital_datacenters_orbital_datacenters_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, OrbitalDatacentersOrbitalDatacentersGetErrorBody]:
        """DATA CENTERS IN SPACE — a curated registry of compute/AI spacecraft in orbit (Starcloud's NVIDIA H100, ESA
        Φsat-2 AI edge, D-Orbit in-orbit cloud), each enriched with live orbital data and the speed-of-light latency
        floor for ground links. Data nowhere else. (Requires API key.)

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
            url_template=self._server.default("/orbital-datacenters"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=orbital_datacenters_orbital_datacenters_get_error_mapper,
            request_options=request_options,
        )


class AsyncOrbitalDatacentersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def orbital_datacenters_orbital_datacenters_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, OrbitalDatacentersOrbitalDatacentersGetErrorBody]:
        """DATA CENTERS IN SPACE — a curated registry of compute/AI spacecraft in orbit (Starcloud's NVIDIA H100, ESA
        Φsat-2 AI edge, D-Orbit in-orbit cloud), each enriched with live orbital data and the speed-of-light latency
        floor for ground links. Data nowhere else. (Requires API key.)

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
            url_template=self._server.default("/orbital-datacenters"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=orbital_datacenters_orbital_datacenters_get_error_mapper,
            request_options=request_options,
        )
