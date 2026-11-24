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
from ..errors.get_entity_error import GetEntityErrorBody, get_entity_error_mapper
from ..errors.get_real_trending_error import GetRealTrendingErrorBody, get_real_trending_error_mapper
from ..errors.search_entities_error import SearchEntitiesErrorBody, search_entities_error_mapper
from ..models.entity_detail import EntityDetail
from ..models.entity_search_response import EntitySearchResponse
from ..models.trending_response import TrendingResponse
from ..server.server import Server


class KnowledgeGraph:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = KnowledgeGraphWithRawResponse(client, server, auth)

    def get_entity(
        self, entity_slug: str, *, dataset_id: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> EntityDetail:
        """Returns an entity (person, organisation, place, etc.) plus the episodes where it's most mentioned. Useful for
        building topic-specific feeds: pin to an entity, watch which episodes mention it.

        Args:
            entity_slug: URL slug from entity search results
            dataset_id: Only count/list episodes from this dataset. The dataset must be in your visible scope; otherwise
                404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entity + most-mentioning episodes

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Entity not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            self._with_raw_response.get_entity(entity_slug, dataset_id=dataset_id, request_options=request_options)
        )

    def get_real_trending(self, *, request_options: RequestOptionsOrDict | None = None) -> TrendingResponse:
        """Returns what's trending across Audioscrape in the last 7 days — most-searched queries and most-mentioned
        entities. Computed from anonymised search logs and live entity-mention counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Top searches + top entities for the last 7 days

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_real_trending(request_options=request_options))

    def search_entities(
        self,
        *,
        q: str | None = None,
        type_: str | None = None,
        limit: int | None = None,
        dataset_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntitySearchResponse:
        """Searches the knowledge-graph index for entities (people, organisations, places, topics, products) extracted
        from podcast content. Results are sorted by total mention count across the corpus.

        Args:
            q: Name prefix to search for
            type_: Filter by entity type (e.g. ``person``, ``organization``, ``place``)
            limit: Max results (default 20, max 50)
            dataset_id: Only entities mentioned in this dataset. The dataset must be in your visible scope (public, or
                in a workspace you belong to); otherwise 404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching entities sorted by mention count

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            self._with_raw_response.search_entities(
                q=q, type_=type_, limit=limit, dataset_id=dataset_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> KnowledgeGraphWithRawResponse:
        return self._with_raw_response


class AsyncKnowledgeGraph:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncKnowledgeGraphWithRawResponse(client, server, auth)

    async def get_entity(
        self,
        entity_slug: str,
        *,
        dataset_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntityDetail:
        """Returns an entity (person, organisation, place, etc.) plus the episodes where it's most mentioned. Useful for
        building topic-specific feeds: pin to an entity, watch which episodes mention it.

        Args:
            entity_slug: URL slug from entity search results
            dataset_id: Only count/list episodes from this dataset. The dataset must be in your visible scope; otherwise
                404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entity + most-mentioning episodes

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Entity not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.get_entity(
                entity_slug, dataset_id=dataset_id, request_options=request_options
            ),
        )

    async def get_real_trending(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> TrendingResponse:
        """Returns what's trending across Audioscrape in the last 7 days — most-searched queries and most-mentioned
        entities. Computed from anonymised search logs and live entity-mention counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Top searches + top entities for the last 7 days

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_real_trending(request_options=request_options))

    async def search_entities(
        self,
        *,
        q: str | None = None,
        type_: str | None = None,
        limit: int | None = None,
        dataset_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntitySearchResponse:
        """Searches the knowledge-graph index for entities (people, organisations, places, topics, products) extracted
        from podcast content. Results are sorted by total mention count across the corpus.

        Args:
            q: Name prefix to search for
            type_: Filter by entity type (e.g. ``person``, ``organization``, ``place``)
            limit: Max results (default 20, max 50)
            dataset_id: Only entities mentioned in this dataset. The dataset must be in your visible scope (public, or
                in a workspace you belong to); otherwise 404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching entities sorted by mention count

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.search_entities(
                q=q, type_=type_, limit=limit, dataset_id=dataset_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncKnowledgeGraphWithRawResponse:
        return self._with_raw_response


class KnowledgeGraphWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_entity(
        self, entity_slug: str, *, dataset_id: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EntityDetail, GetEntityErrorBody]:
        """Returns an entity (person, organisation, place, etc.) plus the episodes where it's most mentioned. Useful for
        building topic-specific feeds: pin to an entity, watch which episodes mention it.

        Args:
            entity_slug: URL slug from entity search results
            dataset_id: Only count/list episodes from this dataset. The dataset must be in your visible scope; otherwise
                404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/entities/{entity_slug}"),
            path_params=[param[str]("entity_slug", entity_slug)],
            query_params=[param[int | None]("dataset_id", dataset_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EntityDetail],
            error_mapper=get_entity_error_mapper,
            request_options=request_options,
        )

    def get_real_trending(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TrendingResponse, GetRealTrendingErrorBody]:
        """Returns what's trending across Audioscrape in the last 7 days — most-searched queries and most-mentioned
        entities. Computed from anonymised search logs and live entity-mention counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/trending"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TrendingResponse],
            error_mapper=get_real_trending_error_mapper,
            request_options=request_options,
        )

    def search_entities(
        self,
        *,
        q: str | None = None,
        type_: str | None = None,
        limit: int | None = None,
        dataset_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitySearchResponse, SearchEntitiesErrorBody]:
        """Searches the knowledge-graph index for entities (people, organisations, places, topics, products) extracted
        from podcast content. Results are sorted by total mention count across the corpus.

        Args:
            q: Name prefix to search for
            type_: Filter by entity type (e.g. ``person``, ``organization``, ``place``)
            limit: Max results (default 20, max 50)
            dataset_id: Only entities mentioned in this dataset. The dataset must be in your visible scope (public, or
                in a workspace you belong to); otherwise 404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/entities"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("type", type_),
                param[int | None]("limit", limit),
                param[int | None]("dataset_id", dataset_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EntitySearchResponse],
            error_mapper=search_entities_error_mapper,
            request_options=request_options,
        )


class AsyncKnowledgeGraphWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_entity(
        self,
        entity_slug: str,
        *,
        dataset_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityDetail, GetEntityErrorBody]:
        """Returns an entity (person, organisation, place, etc.) plus the episodes where it's most mentioned. Useful for
        building topic-specific feeds: pin to an entity, watch which episodes mention it.

        Args:
            entity_slug: URL slug from entity search results
            dataset_id: Only count/list episodes from this dataset. The dataset must be in your visible scope; otherwise
                404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/entities/{entity_slug}"),
            path_params=[param[str]("entity_slug", entity_slug)],
            query_params=[param[int | None]("dataset_id", dataset_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EntityDetail],
            error_mapper=get_entity_error_mapper,
            request_options=request_options,
        )

    async def get_real_trending(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TrendingResponse, GetRealTrendingErrorBody]:
        """Returns what's trending across Audioscrape in the last 7 days — most-searched queries and most-mentioned
        entities. Computed from anonymised search logs and live entity-mention counts.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/trending"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TrendingResponse],
            error_mapper=get_real_trending_error_mapper,
            request_options=request_options,
        )

    async def search_entities(
        self,
        *,
        q: str | None = None,
        type_: str | None = None,
        limit: int | None = None,
        dataset_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitySearchResponse, SearchEntitiesErrorBody]:
        """Searches the knowledge-graph index for entities (people, organisations, places, topics, products) extracted
        from podcast content. Results are sorted by total mention count across the corpus.

        Args:
            q: Name prefix to search for
            type_: Filter by entity type (e.g. ``person``, ``organization``, ``place``)
            limit: Max results (default 20, max 50)
            dataset_id: Only entities mentioned in this dataset. The dataset must be in your visible scope (public, or
                in a workspace you belong to); otherwise 404.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/entities"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("type", type_),
                param[int | None]("limit", limit),
                param[int | None]("dataset_id", dataset_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EntitySearchResponse],
            error_mapper=search_entities_error_mapper,
            request_options=request_options,
        )
