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
from ..errors.news_news_get_error import NewsNewsGetErrorBody, news_news_get_error_mapper
from ..server.server import Server


class News:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = NewsWithRawResponse(client, server)

    def news_news_get(
        self,
        *,
        q: str | None = None,
        source: str | None = None,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Latest AI news & releases across providers. Newest first. (Requires API key.)

        Args:
            q: match title/summary
            source: OpenAI, Google AI, Hugging Face, ...
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
            self._with_raw_response.news_news_get(
                q=q,
                source=source,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> NewsWithRawResponse:
        return self._with_raw_response


class AsyncNews:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncNewsWithRawResponse(client, server)

    async def news_news_get(
        self,
        *,
        q: str | None = None,
        source: str | None = None,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Latest AI news & releases across providers. Newest first. (Requires API key.)

        Args:
            q: match title/summary
            source: OpenAI, Google AI, Hugging Face, ...
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
            await self._with_raw_response.news_news_get(
                q=q,
                source=source,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNewsWithRawResponse:
        return self._with_raw_response


class NewsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def news_news_get(
        self,
        *,
        q: str | None = None,
        source: str | None = None,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, NewsNewsGetErrorBody]:
        """Latest AI news & releases across providers. Newest first. (Requires API key.)

        Args:
            q: match title/summary
            source: OpenAI, Google AI, Hugging Face, ...
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
            url_template=self._server.default("/news"),
            query_params=[
                param[str | None]("q", q), param[str | None]("source", source), param[int | None]("limit", limit)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=news_news_get_error_mapper,
            request_options=request_options,
        )


class AsyncNewsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def news_news_get(
        self,
        *,
        q: str | None = None,
        source: str | None = None,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, NewsNewsGetErrorBody]:
        """Latest AI news & releases across providers. Newest first. (Requires API key.)

        Args:
            q: match title/summary
            source: OpenAI, Google AI, Hugging Face, ...
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
            url_template=self._server.default("/news"),
            query_params=[
                param[str | None]("q", q), param[str | None]("source", source), param[int | None]("limit", limit)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=news_news_get_error_mapper,
            request_options=request_options,
        )
