from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.get_api_v1_proxies_user_requests_bandwidth_response import GetApiV1ProxiesUserRequestsBandwidthResponse
from ..server.server import Server


class Proxies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProxiesWithRawResponse(client, server, auth)

    def get_api_v1_proxies_user_requests_bandwidth(
        self,
        *,
        end_date: str | None = None,
        start_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetApiV1ProxiesUserRequestsBandwidthResponse:
        """Send a ``GET`` request.

        Args:
            end_date: Value sent with the request.
            start_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success (shape read from the example response on the page)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_proxies_user_requests_bandwidth(
                end_date=end_date, start_date=start_date, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ProxiesWithRawResponse:
        return self._with_raw_response


class AsyncProxies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProxiesWithRawResponse(client, server, auth)

    async def get_api_v1_proxies_user_requests_bandwidth(
        self,
        *,
        end_date: str | None = None,
        start_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetApiV1ProxiesUserRequestsBandwidthResponse:
        """Send a ``GET`` request.

        Args:
            end_date: Value sent with the request.
            start_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success (shape read from the example response on the page)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_proxies_user_requests_bandwidth(
                end_date=end_date, start_date=start_date, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProxiesWithRawResponse:
        return self._with_raw_response


class ProxiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_proxies_user_requests_bandwidth(
        self,
        *,
        end_date: str | None = None,
        start_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetApiV1ProxiesUserRequestsBandwidthResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            end_date: Value sent with the request.
            start_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/proxies/user/requests-bandwidth"),
            query_params=[param[str | None]("endDate", end_date), param[str | None]("startDate", start_date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[GetApiV1ProxiesUserRequestsBandwidthResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncProxiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_proxies_user_requests_bandwidth(
        self,
        *,
        end_date: str | None = None,
        start_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetApiV1ProxiesUserRequestsBandwidthResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            end_date: Value sent with the request.
            start_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/proxies/user/requests-bandwidth"),
            query_params=[param[str | None]("endDate", end_date), param[str | None]("startDate", start_date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[GetApiV1ProxiesUserRequestsBandwidthResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
