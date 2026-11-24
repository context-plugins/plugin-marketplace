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
from ..errors.time_ep_time_get_error import TimeEpTimeGetErrorBody, time_ep_time_get_error_mapper
from ..server.server import Server


class Time:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TimeWithRawResponse(client, server)

    def time_ep_time_get(
        self,
        *,
        tz: str | None = "UTC",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Current date/time anywhere — an LLM has no clock. (Requires API key; keyless over MCP.)

        Args:
            tz: IANA timezone, e.g. America/New_York (default UTC)
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
            self._with_raw_response.time_ep_time_get(
                tz=tz,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> TimeWithRawResponse:
        return self._with_raw_response


class AsyncTime:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTimeWithRawResponse(client, server)

    async def time_ep_time_get(
        self,
        *,
        tz: str | None = "UTC",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Current date/time anywhere — an LLM has no clock. (Requires API key; keyless over MCP.)

        Args:
            tz: IANA timezone, e.g. America/New_York (default UTC)
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
            await self._with_raw_response.time_ep_time_get(
                tz=tz,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTimeWithRawResponse:
        return self._with_raw_response


class TimeWithRawResponse(BaseRawResponse[RawClient, Server]):
    def time_ep_time_get(
        self,
        *,
        tz: str | None = "UTC",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TimeEpTimeGetErrorBody]:
        """Current date/time anywhere — an LLM has no clock. (Requires API key; keyless over MCP.)

        Args:
            tz: IANA timezone, e.g. America/New_York (default UTC)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/time"),
            query_params=[param[str | None]("tz", tz)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=time_ep_time_get_error_mapper,
            request_options=request_options,
        )


class AsyncTimeWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def time_ep_time_get(
        self,
        *,
        tz: str | None = "UTC",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TimeEpTimeGetErrorBody]:
        """Current date/time anywhere — an LLM has no clock. (Requires API key; keyless over MCP.)

        Args:
            tz: IANA timezone, e.g. America/New_York (default UTC)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/time"),
            query_params=[param[str | None]("tz", tz)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=time_ep_time_get_error_mapper,
            request_options=request_options,
        )
