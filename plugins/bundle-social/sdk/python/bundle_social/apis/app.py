from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.app_get_health_error import AppGetHealthErrorBody, app_get_health_error_mapper
from ..models.api_v1_response import ApiV1Response
from ..server.server import Server


class App:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AppWithRawResponse(client, server, auth)

    def app_get_health(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1Response:
        """Check whether the bundle.social API is reachable and see the current operational status of every supported
        social platform. Use this endpoint for uptime monitoring and to detect platform-side outages before publishing.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1400Error1 | ApiV1401Error1 |
                ApiV1403Error1 | ApiV1404Error1 | ApiV1429Error1 | ApiV1500Error1 | ApiV1502Error1 | ApiV1503Error1 |
                ApiV1504Error1 | RawError``."""
        return unwrap(self._with_raw_response.app_get_health(request_options=request_options))

    @property
    def with_raw_response(self) -> AppWithRawResponse:
        return self._with_raw_response


class AsyncApp:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAppWithRawResponse(client, server, auth)

    async def app_get_health(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiV1Response:
        """Check whether the bundle.social API is reachable and see the current operational status of every supported
        social platform. Use this endpoint for uptime monitoring and to detect platform-side outages before publishing.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1400Error1 | ApiV1401Error1 |
                ApiV1403Error1 | ApiV1404Error1 | ApiV1429Error1 | ApiV1500Error1 | ApiV1502Error1 | ApiV1503Error1 |
                ApiV1504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.app_get_health(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAppWithRawResponse:
        return self._with_raw_response


class AppWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def app_get_health(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1Response, AppGetHealthErrorBody]:
        """Check whether the bundle.social API is reachable and see the current operational status of every supported
        social platform. Use this endpoint for uptime monitoring and to detect platform-side outages before publishing.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1Response],
            error_mapper=app_get_health_error_mapper,
            request_options=request_options,
        )


class AsyncAppWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def app_get_health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1Response, AppGetHealthErrorBody]:
        """Check whether the bundle.social API is reachable and see the current operational status of every supported
        social platform. Use this endpoint for uptime monitoring and to detect platform-side outages before publishing.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1Response],
            error_mapper=app_get_health_error_mapper,
            request_options=request_options,
        )
