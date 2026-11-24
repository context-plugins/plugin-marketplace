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
from ..errors.get_news_error import GetNewsErrorBody, get_news_error_mapper
from ..models.get_news_response import GetNewsResponse
from ..server.server import Server


class News:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NewsWithRawResponse(client, server, auth)

    def get_news(
        self,
        category: str,
        *,
        instrument_keys: str | None = None,
        page_number: int | None = 1,
        page_size: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetNewsResponse:
        """Fetches news articles for the given instrument keys, or the user's current positions or holdings.

        Args:
            category: Category of news to fetch. Allowed values: instrument_keys, positions, holdings
            instrument_keys: Comma-separated list of instrument keys. Required when category is instrument_keys.
            page_number: Page number for pagination
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1189 - Invalid category. Allowed values: instrument_keys, positions,
                holdings.<br>UDAPI1190 - instrument_keys is required when category is instrument_keys.<br>UDAPI1193 -
                News can be fetched for a maximum of 30 instrument keys per request. Internal Server Error Forbidden
                Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_news(
                category,
                instrument_keys=instrument_keys,
                page_number=page_number,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> NewsWithRawResponse:
        return self._with_raw_response


class AsyncNews:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNewsWithRawResponse(client, server, auth)

    async def get_news(
        self,
        category: str,
        *,
        instrument_keys: str | None = None,
        page_number: int | None = 1,
        page_size: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetNewsResponse:
        """Fetches news articles for the given instrument keys, or the user's current positions or holdings.

        Args:
            category: Category of news to fetch. Allowed values: instrument_keys, positions, holdings
            instrument_keys: Comma-separated list of instrument keys. Required when category is instrument_keys.
            page_number: Page number for pagination
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1189 - Invalid category. Allowed values: instrument_keys, positions,
                holdings.<br>UDAPI1190 - instrument_keys is required when category is instrument_keys.<br>UDAPI1193 -
                News can be fetched for a maximum of 30 instrument keys per request. Internal Server Error Forbidden
                Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_news(
                category,
                instrument_keys=instrument_keys,
                page_number=page_number,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNewsWithRawResponse:
        return self._with_raw_response


class NewsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_news(
        self,
        category: str,
        *,
        instrument_keys: str | None = None,
        page_number: int | None = 1,
        page_size: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetNewsResponse, GetNewsErrorBody]:
        """Fetches news articles for the given instrument keys, or the user's current positions or holdings.

        Args:
            category: Category of news to fetch. Allowed values: instrument_keys, positions, holdings
            instrument_keys: Comma-separated list of instrument keys. Required when category is instrument_keys.
            page_number: Page number for pagination
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/news"),
            query_params=[
                param[str]("category", category),
                param[str | None]("instrument_keys", instrument_keys),
                param[int | None]("page_number", page_number),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetNewsResponse],
            error_mapper=get_news_error_mapper,
            request_options=request_options,
        )


class AsyncNewsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_news(
        self,
        category: str,
        *,
        instrument_keys: str | None = None,
        page_number: int | None = 1,
        page_size: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetNewsResponse, GetNewsErrorBody]:
        """Fetches news articles for the given instrument keys, or the user's current positions or holdings.

        Args:
            category: Category of news to fetch. Allowed values: instrument_keys, positions, holdings
            instrument_keys: Comma-separated list of instrument keys. Required when category is instrument_keys.
            page_number: Page number for pagination
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/news"),
            query_params=[
                param[str]("category", category),
                param[str | None]("instrument_keys", instrument_keys),
                param[int | None]("page_number", page_number),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetNewsResponse],
            error_mapper=get_news_error_mapper,
            request_options=request_options,
        )
