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
from ..errors.get_api_v1_search_error import GetApiV1SearchErrorBody, get_api_v1_search_error_mapper
from ..models.search_result import SearchResult
from ..server.server import Server


class SearchApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchApiWithRawResponse(client, server, auth)

    def get_api_v1_search(
        self,
        q: str,
        *,
        type_: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchResult:
        """Search across articles, stories, companies, countries, exchanges, and indices. Results are grouped by
        resource type and ranked by relevance. Use ``type`` to limit which resource types are searched.

        Args:
            q: Full-text search query (2-200 characters).
            type_: Comma-separated list of resource types to search. Defaults to all types. Valid values: ``articles``,
                ``stories``, ``companies``, ``countries``, ``exchanges``, ``indices``.
            limit: Maximum number of results per resource type (default 5, max 25).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results

        Raises:
            ApiError: Invalid search query Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_search(q, type_=type_, limit=limit, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SearchApiWithRawResponse:
        return self._with_raw_response


class AsyncSearchApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchApiWithRawResponse(client, server, auth)

    async def get_api_v1_search(
        self,
        q: str,
        *,
        type_: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchResult:
        """Search across articles, stories, companies, countries, exchanges, and indices. Results are grouped by
        resource type and ranked by relevance. Use ``type`` to limit which resource types are searched.

        Args:
            q: Full-text search query (2-200 characters).
            type_: Comma-separated list of resource types to search. Defaults to all types. Valid values: ``articles``,
                ``stories``, ``companies``, ``countries``, ``exchanges``, ``indices``.
            limit: Maximum number of results per resource type (default 5, max 25).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results

        Raises:
            ApiError: Invalid search query Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_search(
                q, type_=type_, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSearchApiWithRawResponse:
        return self._with_raw_response


class SearchApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_search(
        self,
        q: str,
        *,
        type_: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResult, GetApiV1SearchErrorBody]:
        """Search across articles, stories, companies, countries, exchanges, and indices. Results are grouped by
        resource type and ranked by relevance. Use ``type`` to limit which resource types are searched.

        Args:
            q: Full-text search query (2-200 characters).
            type_: Comma-separated list of resource types to search. Defaults to all types. Valid values: ``articles``,
                ``stories``, ``companies``, ``countries``, ``exchanges``, ``indices``.
            limit: Maximum number of results per resource type (default 5, max 25).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/search"),
            query_params=[param[str]("q", q), param[str | None]("type", type_), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResult],
            error_mapper=get_api_v1_search_error_mapper,
            request_options=request_options,
        )


class AsyncSearchApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_search(
        self,
        q: str,
        *,
        type_: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResult, GetApiV1SearchErrorBody]:
        """Search across articles, stories, companies, countries, exchanges, and indices. Results are grouped by
        resource type and ranked by relevance. Use ``type`` to limit which resource types are searched.

        Args:
            q: Full-text search query (2-200 characters).
            type_: Comma-separated list of resource types to search. Defaults to all types. Valid values: ``articles``,
                ``stories``, ``companies``, ``countries``, ``exchanges``, ``indices``.
            limit: Maximum number of results per resource type (default 5, max 25).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/search"),
            query_params=[param[str]("q", q), param[str | None]("type", type_), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResult],
            error_mapper=get_api_v1_search_error_mapper,
            request_options=request_options,
        )
