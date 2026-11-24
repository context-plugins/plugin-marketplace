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
from ..errors.status_status_get_error import StatusStatusGetErrorBody, status_status_get_error_mapper
from ..server.server import Server


class Status:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = StatusWithRawResponse(client, server)

    def status_status_get(
        self,
        *,
        category: str | None = None,
        only_issues: bool | None = None,
        limit: int | None = 100,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Live up/down/degraded status for major AI & dev services. Issues first. (Requires API key.)

        Args:
            category: ai | dev | infra | platform
            only_issues: only services currently degraded/down
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
            self._with_raw_response.status_status_get(
                category=category,
                only_issues=only_issues,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> StatusWithRawResponse:
        return self._with_raw_response


class AsyncStatus:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncStatusWithRawResponse(client, server)

    async def status_status_get(
        self,
        *,
        category: str | None = None,
        only_issues: bool | None = None,
        limit: int | None = 100,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Live up/down/degraded status for major AI & dev services. Issues first. (Requires API key.)

        Args:
            category: ai | dev | infra | platform
            only_issues: only services currently degraded/down
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
            await self._with_raw_response.status_status_get(
                category=category,
                only_issues=only_issues,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncStatusWithRawResponse:
        return self._with_raw_response


class StatusWithRawResponse(BaseRawResponse[RawClient, Server]):
    def status_status_get(
        self,
        *,
        category: str | None = None,
        only_issues: bool | None = None,
        limit: int | None = 100,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, StatusStatusGetErrorBody]:
        """Live up/down/degraded status for major AI & dev services. Issues first. (Requires API key.)

        Args:
            category: ai | dev | infra | platform
            only_issues: only services currently degraded/down
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
            url_template=self._server.default("/status"),
            query_params=[
                param[str | None]("category", category),
                param[bool | None]("only_issues", only_issues),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=status_status_get_error_mapper,
            request_options=request_options,
        )


class AsyncStatusWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def status_status_get(
        self,
        *,
        category: str | None = None,
        only_issues: bool | None = None,
        limit: int | None = 100,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, StatusStatusGetErrorBody]:
        """Live up/down/degraded status for major AI & dev services. Issues first. (Requires API key.)

        Args:
            category: ai | dev | infra | platform
            only_issues: only services currently degraded/down
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
            url_template=self._server.default("/status"),
            query_params=[
                param[str | None]("category", category),
                param[bool | None]("only_issues", only_issues),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=status_status_get_error_mapper,
            request_options=request_options,
        )
