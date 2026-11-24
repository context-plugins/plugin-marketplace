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
    raw_error_response,
    unwrap,
)
from ..models.browser import Browser
from ..server.server import Server


class Browsers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BrowsersWithRawResponse(client, server, auth)

    def get_browsers(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Browser]:
        """Returns the list of operating systems, browsers, and real mobile devices supported by Automate.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of supported browser and device configurations

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_browsers(request_options=request_options))

    @property
    def with_raw_response(self) -> BrowsersWithRawResponse:
        return self._with_raw_response


class AsyncBrowsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBrowsersWithRawResponse(client, server, auth)

    async def get_browsers(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Browser]:
        """Returns the list of operating systems, browsers, and real mobile devices supported by Automate.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of supported browser and device configurations

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_browsers(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBrowsersWithRawResponse:
        return self._with_raw_response


class BrowsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_browsers(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Browser], RawError]:
        """Returns the list of operating systems, browsers, and real mobile devices supported by Automate.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/browsers.json"),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[list[Browser]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBrowsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_browsers(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Browser], RawError]:
        """Returns the list of operating systems, browsers, and real mobile devices supported by Automate.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/browsers.json"),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[list[Browser]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
