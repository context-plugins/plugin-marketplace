from __future__ import annotations

from typing import Any

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.get_companies_krs_by_krs_news_error import (
    GetCompaniesKrsByKrsNewsErrorBody,
    get_companies_krs_by_krs_news_error_mapper,
)
from ..errors.get_news_error import GetNewsErrorBody, get_news_error_mapper
from ..models.enums.locale import LocaleOrStr
from ..server.server import Server


class News:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NewsWithRawResponse(client, server, auth)

    def get_companies_krs_by_krs_news(
        self, krs: str, *, locale: str | None = "en", request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Published news articles and optional claimed description / logo from company UGC. Coverage is uneven (only
        companies with portal/UGC content).

        Args:
            krs: Value sent with the request.
            locale: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            News and optional UGC fields (empty arrays/nulls when none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_news(krs, locale=locale, request_options=request_options)
        )

    def get_news(
        self,
        *,
        since: str | None = None,
        pkd: str | None = None,
        city: str | None = None,
        locale: LocaleOrStr | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Latest news published by Polish companies on their own websites, newest first, with the company (KRS)
        attached.

        Args:
            since: Only news published on or after this date (YYYY-MM-DD).
            pkd: 2–5 digit prefix of the company main PKD code (e.g. ``62`` for IT).
            city: Company seat city.
            locale: Language of the returned titles.
            limit: Page size, 1–100 (default 50).
            offset: Zero-based offset (max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page of news articles.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_news(
                since=since,
                pkd=pkd,
                city=city,
                locale=locale,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> NewsWithRawResponse:
        return self._with_raw_response


class AsyncNews:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNewsWithRawResponse(client, server, auth)

    async def get_companies_krs_by_krs_news(
        self, krs: str, *, locale: str | None = "en", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Published news articles and optional claimed description / logo from company UGC. Coverage is uneven (only
        companies with portal/UGC content).

        Args:
            krs: Value sent with the request.
            locale: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            News and optional UGC fields (empty arrays/nulls when none).

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_news(
                krs, locale=locale, request_options=request_options
            ),
        )

    async def get_news(
        self,
        *,
        since: str | None = None,
        pkd: str | None = None,
        city: str | None = None,
        locale: LocaleOrStr | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Latest news published by Polish companies on their own websites, newest first, with the company (KRS)
        attached.

        Args:
            since: Only news published on or after this date (YYYY-MM-DD).
            pkd: 2–5 digit prefix of the company main PKD code (e.g. ``62`` for IT).
            city: Company seat city.
            locale: Language of the returned titles.
            limit: Page size, 1–100 (default 50).
            offset: Zero-based offset (max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page of news articles.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_news(
                since=since,
                pkd=pkd,
                city=city,
                locale=locale,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNewsWithRawResponse:
        return self._with_raw_response


class NewsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_companies_krs_by_krs_news(
        self, krs: str, *, locale: str | None = "en", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsNewsErrorBody]:
        """Published news articles and optional claimed description / logo from company UGC. Coverage is uneven (only
        companies with portal/UGC content).

        Args:
            krs: Value sent with the request.
            locale: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/news"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[str | None]("locale", locale)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_news_error_mapper,
            request_options=request_options,
        )

    def get_news(
        self,
        *,
        since: str | None = None,
        pkd: str | None = None,
        city: str | None = None,
        locale: LocaleOrStr | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetNewsErrorBody]:
        """Latest news published by Polish companies on their own websites, newest first, with the company (KRS)
        attached.

        Args:
            since: Only news published on or after this date (YYYY-MM-DD).
            pkd: 2–5 digit prefix of the company main PKD code (e.g. ``62`` for IT).
            city: Company seat city.
            locale: Language of the returned titles.
            limit: Page size, 1–100 (default 50).
            offset: Zero-based offset (max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/news"),
            query_params=[
                param[str | None]("since", since),
                param[str | None]("pkd", pkd),
                param[str | None]("city", city),
                param[LocaleOrStr | None]("locale", locale),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_news_error_mapper,
            request_options=request_options,
        )


class AsyncNewsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_companies_krs_by_krs_news(
        self, krs: str, *, locale: str | None = "en", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsNewsErrorBody]:
        """Published news articles and optional claimed description / logo from company UGC. Coverage is uneven (only
        companies with portal/UGC content).

        Args:
            krs: Value sent with the request.
            locale: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/news"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[str | None]("locale", locale)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_news_error_mapper,
            request_options=request_options,
        )

    async def get_news(
        self,
        *,
        since: str | None = None,
        pkd: str | None = None,
        city: str | None = None,
        locale: LocaleOrStr | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetNewsErrorBody]:
        """Latest news published by Polish companies on their own websites, newest first, with the company (KRS)
        attached.

        Args:
            since: Only news published on or after this date (YYYY-MM-DD).
            pkd: 2–5 digit prefix of the company main PKD code (e.g. ``62`` for IT).
            city: Company seat city.
            locale: Language of the returned titles.
            limit: Page size, 1–100 (default 50).
            offset: Zero-based offset (max 5000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/news"),
            query_params=[
                param[str | None]("since", since),
                param[str | None]("pkd", pkd),
                param[str | None]("city", city),
                param[LocaleOrStr | None]("locale", locale),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_news_error_mapper,
            request_options=request_options,
        )
