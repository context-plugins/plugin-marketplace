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
from ..errors.countdown_ep_countdown_get_error import (
    CountdownEpCountdownGetErrorBody,
    countdown_ep_countdown_get_error_mapper,
)
from ..server.server import Server


class Countdown:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CountdownWithRawResponse(client, server)

    def countdown_ep_countdown_get(
        self,
        *,
        event: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Time until a live event (market open/close or next rocket launch). (Key on REST; keyless on MCP.)

        Args:
            event: e.g. 'NYSE open' or 'next SpaceX launch'
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
            self._with_raw_response.countdown_ep_countdown_get(
                event=event,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CountdownWithRawResponse:
        return self._with_raw_response


class AsyncCountdown:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCountdownWithRawResponse(client, server)

    async def countdown_ep_countdown_get(
        self,
        *,
        event: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Time until a live event (market open/close or next rocket launch). (Key on REST; keyless on MCP.)

        Args:
            event: e.g. 'NYSE open' or 'next SpaceX launch'
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
            await self._with_raw_response.countdown_ep_countdown_get(
                event=event,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCountdownWithRawResponse:
        return self._with_raw_response


class CountdownWithRawResponse(BaseRawResponse[RawClient, Server]):
    def countdown_ep_countdown_get(
        self,
        *,
        event: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CountdownEpCountdownGetErrorBody]:
        """Time until a live event (market open/close or next rocket launch). (Key on REST; keyless on MCP.)

        Args:
            event: e.g. 'NYSE open' or 'next SpaceX launch'
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/countdown"),
            query_params=[param[str | None]("event", event)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=countdown_ep_countdown_get_error_mapper,
            request_options=request_options,
        )


class AsyncCountdownWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def countdown_ep_countdown_get(
        self,
        *,
        event: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CountdownEpCountdownGetErrorBody]:
        """Time until a live event (market open/close or next rocket launch). (Key on REST; keyless on MCP.)

        Args:
            event: e.g. 'NYSE open' or 'next SpaceX launch'
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/countdown"),
            query_params=[param[str | None]("event", event)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=countdown_ep_countdown_get_error_mapper,
            request_options=request_options,
        )
