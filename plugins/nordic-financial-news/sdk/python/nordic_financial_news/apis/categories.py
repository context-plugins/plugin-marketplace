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
from ..errors.get_api_v1_categories_error import GetApiV1CategoriesErrorBody, get_api_v1_categories_error_mapper
from ..models.api_v1_categories_response import ApiV1CategoriesResponse
from ..server.server import Server


class Categories:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CategoriesWithRawResponse(client, server, auth)

    def get_api_v1_categories(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CategoriesResponse:
        """Returns all enabled article categories, ordered alphabetically by name. Categories are used to classify
        articles and stories (e.g. Earnings, M&A, IPO). Use category IDs to filter articles and stories by topic.

        Args:
            limit: Number of categories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Categories retrieved successfully

        Raises:
            ApiError: unauthorized forbidden - missing scope ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_categories(
                limit=limit,
                cursor=cursor,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CategoriesWithRawResponse:
        return self._with_raw_response


class AsyncCategories:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCategoriesWithRawResponse(client, server, auth)

    async def get_api_v1_categories(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CategoriesResponse:
        """Returns all enabled article categories, ordered alphabetically by name. Categories are used to classify
        articles and stories (e.g. Earnings, M&A, IPO). Use category IDs to filter articles and stories by topic.

        Args:
            limit: Number of categories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Categories retrieved successfully

        Raises:
            ApiError: unauthorized forbidden - missing scope ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_categories(
                limit=limit,
                cursor=cursor,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCategoriesWithRawResponse:
        return self._with_raw_response


class CategoriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_categories(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CategoriesResponse, GetApiV1CategoriesErrorBody]:
        """Returns all enabled article categories, ordered alphabetically by name. Categories are used to classify
        articles and stories (e.g. Earnings, M&A, IPO). Use category IDs to filter articles and stories by topic.

        Args:
            limit: Number of categories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/categories"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CategoriesResponse],
            error_mapper=get_api_v1_categories_error_mapper,
            request_options=request_options,
        )


class AsyncCategoriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_categories(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CategoriesResponse, GetApiV1CategoriesErrorBody]:
        """Returns all enabled article categories, ordered alphabetically by name. Categories are used to classify
        articles and stories (e.g. Earnings, M&A, IPO). Use category IDs to filter articles and stories by topic.

        Args:
            limit: Number of categories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response.
            fields: Comma-separated list of fields to include. Available fields: ``id``, ``name``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/categories"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CategoriesResponse],
            error_mapper=get_api_v1_categories_error_mapper,
            request_options=request_options,
        )
