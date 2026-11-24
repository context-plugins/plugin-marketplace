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
from ..errors.internet_outages_internet_outages_get_error import (
    InternetOutagesInternetOutagesGetErrorBody,
    internet_outages_internet_outages_get_error_mapper,
)
from ..server.server import Server


class InternetOutages:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = InternetOutagesWithRawResponse(client, server)

    def internet_outages_internet_outages_get(
        self,
        *,
        resource: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Live BGP routing health for a network resource from RIPEstat (RIPE NCC). Global visibility + outage signal
        (healthy/degraded/outage) — a sharp visibility drop = the network is losing global reachability. The clean,
        redistributable RIPEstat replacement for CAIDA. (Requires API key.)

        Args:
            resource: an ASN (AS3215), an IP (8.8.8.8), or a prefix (193.0.0.0/22)
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
            self._with_raw_response.internet_outages_internet_outages_get(
                resource=resource,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> InternetOutagesWithRawResponse:
        return self._with_raw_response


class AsyncInternetOutages:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncInternetOutagesWithRawResponse(client, server)

    async def internet_outages_internet_outages_get(
        self,
        *,
        resource: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Live BGP routing health for a network resource from RIPEstat (RIPE NCC). Global visibility + outage signal
        (healthy/degraded/outage) — a sharp visibility drop = the network is losing global reachability. The clean,
        redistributable RIPEstat replacement for CAIDA. (Requires API key.)

        Args:
            resource: an ASN (AS3215), an IP (8.8.8.8), or a prefix (193.0.0.0/22)
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
            await self._with_raw_response.internet_outages_internet_outages_get(
                resource=resource,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInternetOutagesWithRawResponse:
        return self._with_raw_response


class InternetOutagesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def internet_outages_internet_outages_get(
        self,
        *,
        resource: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, InternetOutagesInternetOutagesGetErrorBody]:
        """Live BGP routing health for a network resource from RIPEstat (RIPE NCC). Global visibility + outage signal
        (healthy/degraded/outage) — a sharp visibility drop = the network is losing global reachability. The clean,
        redistributable RIPEstat replacement for CAIDA. (Requires API key.)

        Args:
            resource: an ASN (AS3215), an IP (8.8.8.8), or a prefix (193.0.0.0/22)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/internet-outages"),
            query_params=[param[str | None]("resource", resource)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=internet_outages_internet_outages_get_error_mapper,
            request_options=request_options,
        )


class AsyncInternetOutagesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def internet_outages_internet_outages_get(
        self,
        *,
        resource: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, InternetOutagesInternetOutagesGetErrorBody]:
        """Live BGP routing health for a network resource from RIPEstat (RIPE NCC). Global visibility + outage signal
        (healthy/degraded/outage) — a sharp visibility drop = the network is losing global reachability. The clean,
        redistributable RIPEstat replacement for CAIDA. (Requires API key.)

        Args:
            resource: an ASN (AS3215), an IP (8.8.8.8), or a prefix (193.0.0.0/22)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/internet-outages"),
            query_params=[param[str | None]("resource", resource)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=internet_outages_internet_outages_get_error_mapper,
            request_options=request_options,
        )
