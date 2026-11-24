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
from ..errors.launches_launches_get_error import LaunchesLaunchesGetErrorBody, launches_launches_get_error_mapper
from ..server.server import Server


class Launches:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = LaunchesWithRawResponse(client, server)

    def launches_launches_get(
        self,
        *,
        provider: str | None = None,
        limit: int | None = 8,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Upcoming rocket launches worldwide — name, provider, rocket, time, site. (Requires API key.)

        Args:
            provider: filter by provider, e.g. SpaceX
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
            self._with_raw_response.launches_launches_get(
                provider=provider,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> LaunchesWithRawResponse:
        return self._with_raw_response


class AsyncLaunches:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncLaunchesWithRawResponse(client, server)

    async def launches_launches_get(
        self,
        *,
        provider: str | None = None,
        limit: int | None = 8,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Upcoming rocket launches worldwide — name, provider, rocket, time, site. (Requires API key.)

        Args:
            provider: filter by provider, e.g. SpaceX
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
            await self._with_raw_response.launches_launches_get(
                provider=provider,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLaunchesWithRawResponse:
        return self._with_raw_response


class LaunchesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def launches_launches_get(
        self,
        *,
        provider: str | None = None,
        limit: int | None = 8,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, LaunchesLaunchesGetErrorBody]:
        """Upcoming rocket launches worldwide — name, provider, rocket, time, site. (Requires API key.)

        Args:
            provider: filter by provider, e.g. SpaceX
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
            url_template=self._server.default("/launches"),
            query_params=[param[str | None]("provider", provider), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=launches_launches_get_error_mapper,
            request_options=request_options,
        )


class AsyncLaunchesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def launches_launches_get(
        self,
        *,
        provider: str | None = None,
        limit: int | None = 8,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, LaunchesLaunchesGetErrorBody]:
        """Upcoming rocket launches worldwide — name, provider, rocket, time, site. (Requires API key.)

        Args:
            provider: filter by provider, e.g. SpaceX
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
            url_template=self._server.default("/launches"),
            query_params=[param[str | None]("provider", provider), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=launches_launches_get_error_mapper,
            request_options=request_options,
        )
