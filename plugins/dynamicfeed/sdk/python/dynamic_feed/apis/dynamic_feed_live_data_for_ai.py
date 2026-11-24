from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_text_decoder,
    raw_error_response,
    text_decoder,
    unwrap,
)
from ..server.server import Server


class DynamicFeedLiveDataForAi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = DynamicFeedLiveDataForAiWithRawResponse(client, server)

    def home_get(self, *, request_options: RequestOptionsOrDict | None = None) -> str:
        """Serve the marketing landing page (with live demo widget).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.home_get(request_options=request_options))

    @property
    def with_raw_response(self) -> DynamicFeedLiveDataForAiWithRawResponse:
        return self._with_raw_response


class AsyncDynamicFeedLiveDataForAi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncDynamicFeedLiveDataForAiWithRawResponse(client, server)

    async def home_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> str:
        """Serve the marketing landing page (with live demo widget).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.home_get(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDynamicFeedLiveDataForAiWithRawResponse:
        return self._with_raw_response


class DynamicFeedLiveDataForAiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def home_get(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, RawError]:
        """Serve the marketing landing page (with live demo widget).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/"),
            decoder=text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDynamicFeedLiveDataForAiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def home_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiResult[str, RawError]:
        """Serve the marketing landing page (with live demo widget).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/"),
            decoder=async_text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
