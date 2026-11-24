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
from ..errors.get_podcast_ranking_history_error import (
    GetPodcastRankingHistoryErrorBody,
    get_podcast_ranking_history_error_mapper,
)
from ..errors.get_public_podcast_error import GetPublicPodcastErrorBody, get_public_podcast_error_mapper
from ..errors.list_podcast_episodes_v1_error import (
    ListPodcastEpisodesV1ErrorBody,
    list_podcast_episodes_v1_error_mapper,
)
from ..errors.search_podcasts_v1_error import SearchPodcastsV1ErrorBody, search_podcasts_v1_error_mapper
from ..models.episode_list import EpisodeList
from ..models.podcast_detail import PodcastDetail
from ..models.podcast_list import PodcastList
from ..models.podcast_ranking_history_entry import PodcastRankingHistoryEntry
from ..server.server import Server


class Podcasts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PodcastsWithRawResponse(client, server, auth)

    def get_podcast_ranking_history(
        self, podcast_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[PodcastRankingHistoryEntry]:
        """Returns the historical chart positions for a single podcast across countries and platforms, most recent
        first. Useful for tracking a show's performance trajectory over time.

        Args:
            podcast_id: Numeric podcast ID OR URL slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ranking history (capped at the last few months)

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Podcast not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_podcast_ranking_history(podcast_id, request_options=request_options))

    def get_public_podcast(
        self, podcast_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PodcastDetail:
        """Returns podcast metadata + up to 20 most recent episodes. The path parameter accepts either a numeric ID or a
        URL slug, so links you share by slug also work for API calls.

        Args:
            podcast_id: Numeric podcast ID OR URL slug (e.g. ``1234`` or ``supply-chain-today``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Podcast + recent episodes

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Podcast not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_public_podcast(podcast_id, request_options=request_options))

    def list_podcast_episodes_v1(
        self,
        podcast_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EpisodeList:
        """Returns episodes belonging to a single podcast, newest first. Path parameter accepts either a numeric ID or a
        URL slug.

        Args:
            podcast_id: Numeric podcast ID OR URL slug
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Episodes ordered by publish date descending

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Podcast not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            self._with_raw_response.list_podcast_episodes_v1(
                podcast_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def search_podcasts_v1(
        self,
        *,
        q: str | None = None,
        language: str | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PodcastList:
        """Lists podcasts, optionally filtered by title substring or language. Results are ordered by episode count
        (most prolific first), then alphabetically. Convenience alias for items where ``source_type =
        'podcast_episode'`` — for multi-format integrations, prefer ``/api/items``.

        Args:
            q: Title substring (case-insensitive)
            language: ISO 639-1 language filter (e.g. ``en``, ``de``)
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Podcasts

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            self._with_raw_response.search_podcasts_v1(
                q=q, language=language, limit=limit, offset=offset, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PodcastsWithRawResponse:
        return self._with_raw_response


class AsyncPodcasts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPodcastsWithRawResponse(client, server, auth)

    async def get_podcast_ranking_history(
        self, podcast_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[PodcastRankingHistoryEntry]:
        """Returns the historical chart positions for a single podcast across countries and platforms, most recent
        first. Useful for tracking a show's performance trajectory over time.

        Args:
            podcast_id: Numeric podcast ID OR URL slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ranking history (capped at the last few months)

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Podcast not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.get_podcast_ranking_history(podcast_id, request_options=request_options)
        )

    async def get_public_podcast(
        self, podcast_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PodcastDetail:
        """Returns podcast metadata + up to 20 most recent episodes. The path parameter accepts either a numeric ID or a
        URL slug, so links you share by slug also work for API calls.

        Args:
            podcast_id: Numeric podcast ID OR URL slug (e.g. ``1234`` or ``supply-chain-today``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Podcast + recent episodes

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Podcast not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_public_podcast(podcast_id, request_options=request_options))

    async def list_podcast_episodes_v1(
        self,
        podcast_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EpisodeList:
        """Returns episodes belonging to a single podcast, newest first. Path parameter accepts either a numeric ID or a
        URL slug.

        Args:
            podcast_id: Numeric podcast ID OR URL slug
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Episodes ordered by publish date descending

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Podcast not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.list_podcast_episodes_v1(
                podcast_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def search_podcasts_v1(
        self,
        *,
        q: str | None = None,
        language: str | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PodcastList:
        """Lists podcasts, optionally filtered by title substring or language. Results are ordered by episode count
        (most prolific first), then alphabetically. Convenience alias for items where ``source_type =
        'podcast_episode'`` — for multi-format integrations, prefer ``/api/items``.

        Args:
            q: Title substring (case-insensitive)
            language: ISO 639-1 language filter (e.g. ``en``, ``de``)
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Podcasts

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.search_podcasts_v1(
                q=q, language=language, limit=limit, offset=offset, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPodcastsWithRawResponse:
        return self._with_raw_response


class PodcastsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_podcast_ranking_history(
        self, podcast_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[PodcastRankingHistoryEntry], GetPodcastRankingHistoryErrorBody]:
        """Returns the historical chart positions for a single podcast across countries and platforms, most recent
        first. Useful for tracking a show's performance trajectory over time.

        Args:
            podcast_id: Numeric podcast ID OR URL slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/podcasts/{podcast_id}/rankings"),
            path_params=[param[str]("podcast_id", podcast_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[list[PodcastRankingHistoryEntry]],
            error_mapper=get_podcast_ranking_history_error_mapper,
            request_options=request_options,
        )

    def get_public_podcast(
        self, podcast_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PodcastDetail, GetPublicPodcastErrorBody]:
        """Returns podcast metadata + up to 20 most recent episodes. The path parameter accepts either a numeric ID or a
        URL slug, so links you share by slug also work for API calls.

        Args:
            podcast_id: Numeric podcast ID OR URL slug (e.g. ``1234`` or ``supply-chain-today``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/podcasts/{podcast_id}"),
            path_params=[param[str]("podcast_id", podcast_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PodcastDetail],
            error_mapper=get_public_podcast_error_mapper,
            request_options=request_options,
        )

    def list_podcast_episodes_v1(
        self,
        podcast_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EpisodeList, ListPodcastEpisodesV1ErrorBody]:
        """Returns episodes belonging to a single podcast, newest first. Path parameter accepts either a numeric ID or a
        URL slug.

        Args:
            podcast_id: Numeric podcast ID OR URL slug
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/podcasts/{podcast_id}/episodes"),
            path_params=[param[str]("podcast_id", podcast_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EpisodeList],
            error_mapper=list_podcast_episodes_v1_error_mapper,
            request_options=request_options,
        )

    def search_podcasts_v1(
        self,
        *,
        q: str | None = None,
        language: str | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastList, SearchPodcastsV1ErrorBody]:
        """Lists podcasts, optionally filtered by title substring or language. Results are ordered by episode count
        (most prolific first), then alphabetically. Convenience alias for items where ``source_type =
        'podcast_episode'`` — for multi-format integrations, prefer ``/api/items``.

        Args:
            q: Title substring (case-insensitive)
            language: ISO 639-1 language filter (e.g. ``en``, ``de``)
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/podcasts"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("language", language),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PodcastList],
            error_mapper=search_podcasts_v1_error_mapper,
            request_options=request_options,
        )


class AsyncPodcastsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_podcast_ranking_history(
        self, podcast_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[PodcastRankingHistoryEntry], GetPodcastRankingHistoryErrorBody]:
        """Returns the historical chart positions for a single podcast across countries and platforms, most recent
        first. Useful for tracking a show's performance trajectory over time.

        Args:
            podcast_id: Numeric podcast ID OR URL slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/podcasts/{podcast_id}/rankings"),
            path_params=[param[str]("podcast_id", podcast_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[list[PodcastRankingHistoryEntry]],
            error_mapper=get_podcast_ranking_history_error_mapper,
            request_options=request_options,
        )

    async def get_public_podcast(
        self, podcast_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PodcastDetail, GetPublicPodcastErrorBody]:
        """Returns podcast metadata + up to 20 most recent episodes. The path parameter accepts either a numeric ID or a
        URL slug, so links you share by slug also work for API calls.

        Args:
            podcast_id: Numeric podcast ID OR URL slug (e.g. ``1234`` or ``supply-chain-today``)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/podcasts/{podcast_id}"),
            path_params=[param[str]("podcast_id", podcast_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PodcastDetail],
            error_mapper=get_public_podcast_error_mapper,
            request_options=request_options,
        )

    async def list_podcast_episodes_v1(
        self,
        podcast_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EpisodeList, ListPodcastEpisodesV1ErrorBody]:
        """Returns episodes belonging to a single podcast, newest first. Path parameter accepts either a numeric ID or a
        URL slug.

        Args:
            podcast_id: Numeric podcast ID OR URL slug
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/podcasts/{podcast_id}/episodes"),
            path_params=[param[str]("podcast_id", podcast_id)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EpisodeList],
            error_mapper=list_podcast_episodes_v1_error_mapper,
            request_options=request_options,
        )

    async def search_podcasts_v1(
        self,
        *,
        q: str | None = None,
        language: str | None = None,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastList, SearchPodcastsV1ErrorBody]:
        """Lists podcasts, optionally filtered by title substring or language. Results are ordered by episode count
        (most prolific first), then alphabetically. Convenience alias for items where ``source_type =
        'podcast_episode'`` — for multi-format integrations, prefer ``/api/items``.

        Args:
            q: Title substring (case-insensitive)
            language: ISO 639-1 language filter (e.g. ``en``, ``de``)
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/podcasts"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("language", language),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PodcastList],
            error_mapper=search_podcasts_v1_error_mapper,
            request_options=request_options,
        )
