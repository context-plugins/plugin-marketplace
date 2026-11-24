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
    param,
    unwrap,
)
from ..errors.news_error import NewsErrorBody, news_error_mapper
from ..models.v1_news_response import V1NewsResponse
from ..server.server import Server


class News:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NewsWithRawResponse(client, server, auth)

    def news(
        self, category: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1NewsResponse:
        """Get the latest news based on a category

        Args:
            category: The news category for which you want to get the news. Allowed values: business, entertainment,
                world, health, science, sports, technology
            limit: Maximum number of articles to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.news(category, limit=limit, request_options=request_options))

    @property
    def with_raw_response(self) -> NewsWithRawResponse:
        return self._with_raw_response


class AsyncNews:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNewsWithRawResponse(client, server, auth)

    async def news(
        self, category: str, *, limit: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1NewsResponse:
        """Get the latest news based on a category

        Args:
            category: The news category for which you want to get the news. Allowed values: business, entertainment,
                world, health, science, sports, technology
            limit: Maximum number of articles to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.news(category, limit=limit, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncNewsWithRawResponse:
        return self._with_raw_response


class NewsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def news(
        self, category: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1NewsResponse, NewsErrorBody]:
        """Get the latest news based on a category

        Args:
            category: The news category for which you want to get the news. Allowed values: business, entertainment,
                world, health, science, sports, technology
            limit: Maximum number of articles to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/news"),
            query_params=[param[str]("category", category), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1NewsResponse],
            error_mapper=news_error_mapper,
            request_options=request_options,
        )


class AsyncNewsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def news(
        self, category: str, *, limit: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1NewsResponse, NewsErrorBody]:
        """Get the latest news based on a category

        Args:
            category: The news category for which you want to get the news. Allowed values: business, entertainment,
                world, health, science, sports, technology
            limit: Maximum number of articles to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/news"),
            query_params=[param[str]("category", category), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1NewsResponse],
            error_mapper=news_error_mapper,
            request_options=request_options,
        )
