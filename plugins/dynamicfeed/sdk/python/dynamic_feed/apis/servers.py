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
from ..errors.servers_servers_get_error import ServersServersGetErrorBody, servers_servers_get_error_mapper
from ..server.server import Server


class Servers:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ServersWithRawResponse(client, server)

    def servers_servers_get(
        self,
        *,
        q: str | None = None,
        has_remote: bool | None = None,
        min_stars: int | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Search the MCP server registry — find AI agent tools. Most-starred first. (Requires API key.)

        Args:
            q: match server name/description
            has_remote: only servers with a hosted/remote endpoint
            min_stars: minimum GitHub stars
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
            self._with_raw_response.servers_servers_get(
                q=q,
                has_remote=has_remote,
                min_stars=min_stars,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ServersWithRawResponse:
        return self._with_raw_response


class AsyncServers:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncServersWithRawResponse(client, server)

    async def servers_servers_get(
        self,
        *,
        q: str | None = None,
        has_remote: bool | None = None,
        min_stars: int | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Search the MCP server registry — find AI agent tools. Most-starred first. (Requires API key.)

        Args:
            q: match server name/description
            has_remote: only servers with a hosted/remote endpoint
            min_stars: minimum GitHub stars
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
            await self._with_raw_response.servers_servers_get(
                q=q,
                has_remote=has_remote,
                min_stars=min_stars,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncServersWithRawResponse:
        return self._with_raw_response


class ServersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def servers_servers_get(
        self,
        *,
        q: str | None = None,
        has_remote: bool | None = None,
        min_stars: int | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ServersServersGetErrorBody]:
        """Search the MCP server registry — find AI agent tools. Most-starred first. (Requires API key.)

        Args:
            q: match server name/description
            has_remote: only servers with a hosted/remote endpoint
            min_stars: minimum GitHub stars
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
            url_template=self._server.default("/servers"),
            query_params=[
                param[str | None]("q", q),
                param[bool | None]("has_remote", has_remote),
                param[int | None]("min_stars", min_stars),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=servers_servers_get_error_mapper,
            request_options=request_options,
        )


class AsyncServersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def servers_servers_get(
        self,
        *,
        q: str | None = None,
        has_remote: bool | None = None,
        min_stars: int | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ServersServersGetErrorBody]:
        """Search the MCP server registry — find AI agent tools. Most-starred first. (Requires API key.)

        Args:
            q: match server name/description
            has_remote: only servers with a hosted/remote endpoint
            min_stars: minimum GitHub stars
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
            url_template=self._server.default("/servers"),
            query_params=[
                param[str | None]("q", q),
                param[bool | None]("has_remote", has_remote),
                param[int | None]("min_stars", min_stars),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=servers_servers_get_error_mapper,
            request_options=request_options,
        )
