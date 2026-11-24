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
from ..errors.get_episode_transcript_error import GetEpisodeTranscriptErrorBody, get_episode_transcript_error_mapper
from ..errors.get_public_episode_error import GetPublicEpisodeErrorBody, get_public_episode_error_mapper
from ..errors.list_recent_episodes_v1_error import ListRecentEpisodesV1ErrorBody, list_recent_episodes_v1_error_mapper
from ..models.episode_detail import EpisodeDetail
from ..models.episode_list import EpisodeList
from ..models.transcript import Transcript
from ..server.server import Server


class Episodes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EpisodesWithRawResponse(client, server, auth)

    def get_episode_transcript(
        self, episode_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Transcript:
        """Returns the transcript on its own (segments + speaker list). Equivalent to the ``transcript`` field on ``GET
        /api/episodes/{id}?include=transcript``. Use this endpoint when you don't need the metadata envelope.

        Args:
            episode_id: Numeric episode ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transcript segments + speaker list

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Episode not found or has no transcript Monthly quota exhausted
                (response includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_episode_transcript(episode_id, request_options=request_options))

    def get_public_episode(
        self, episode_id: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> EpisodeDetail:
        """Returns the episode + its parent podcast. Heavy fields are opt-in via ``?include=`` — pass ``transcript``,
        ``entities``, or both to load them in the same response. Useful when you want details without paying the cost of
        fetching a 500KB+ transcript by default.

        Args:
            episode_id: Numeric episode ID
            include: Comma-separated optional fields: ``transcript``, ``entities``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Episode + podcast, plus any requested optional fields

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Episode not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            self._with_raw_response.get_public_episode(episode_id, include=include, request_options=request_options)
        )

    def list_recent_episodes_v1(
        self,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EpisodeList:
        """Returns the most recently published episodes across all podcasts. Convenience alias for items where
        ``source_type = 'podcast_episode'`` — for multi-format integrations, prefer ``/api/items``.

        Args:
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Episodes ordered by publish date descending

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            self._with_raw_response.list_recent_episodes_v1(limit=limit, offset=offset, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> EpisodesWithRawResponse:
        return self._with_raw_response


class AsyncEpisodes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEpisodesWithRawResponse(client, server, auth)

    async def get_episode_transcript(
        self, episode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Transcript:
        """Returns the transcript on its own (segments + speaker list). Equivalent to the ``transcript`` field on ``GET
        /api/episodes/{id}?include=transcript``. Use this endpoint when you don't need the metadata envelope.

        Args:
            episode_id: Numeric episode ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transcript segments + speaker list

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Episode not found or has no transcript Monthly quota exhausted
                (response includes ``usage: { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_episode_transcript(episode_id, request_options=request_options))

    async def get_public_episode(
        self, episode_id: str, *, include: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EpisodeDetail:
        """Returns the episode + its parent podcast. Heavy fields are opt-in via ``?include=`` — pass ``transcript``,
        ``entities``, or both to load them in the same response. Useful when you want details without paying the cost of
        fetching a 500KB+ transcript by default.

        Args:
            episode_id: Numeric episode ID
            include: Comma-separated optional fields: ``transcript``, ``entities``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Episode + podcast, plus any requested optional fields

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Episode not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.get_public_episode(
                episode_id, include=include, request_options=request_options
            ),
        )

    async def list_recent_episodes_v1(
        self,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EpisodeList:
        """Returns the most recently published episodes across all podcasts. Convenience alias for items where
        ``source_type = 'podcast_episode'`` — for multi-format integrations, prefer ``/api/items``.

        Args:
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Episodes ordered by publish date descending

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.list_recent_episodes_v1(
                limit=limit, offset=offset, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEpisodesWithRawResponse:
        return self._with_raw_response


class EpisodesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_episode_transcript(
        self, episode_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Transcript, GetEpisodeTranscriptErrorBody]:
        """Returns the transcript on its own (segments + speaker list). Equivalent to the ``transcript`` field on ``GET
        /api/episodes/{id}?include=transcript``. Use this endpoint when you don't need the metadata envelope.

        Args:
            episode_id: Numeric episode ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/episodes/{episode_id}/transcript"),
            path_params=[param[str]("episode_id", episode_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Transcript],
            error_mapper=get_episode_transcript_error_mapper,
            request_options=request_options,
        )

    def get_public_episode(
        self, episode_id: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EpisodeDetail, GetPublicEpisodeErrorBody]:
        """Returns the episode + its parent podcast. Heavy fields are opt-in via ``?include=`` — pass ``transcript``,
        ``entities``, or both to load them in the same response. Useful when you want details without paying the cost of
        fetching a 500KB+ transcript by default.

        Args:
            episode_id: Numeric episode ID
            include: Comma-separated optional fields: ``transcript``, ``entities``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/episodes/{episode_id}"),
            path_params=[param[str]("episode_id", episode_id)],
            query_params=[param[str | None]("include", include)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EpisodeDetail],
            error_mapper=get_public_episode_error_mapper,
            request_options=request_options,
        )

    def list_recent_episodes_v1(
        self,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EpisodeList, ListRecentEpisodesV1ErrorBody]:
        """Returns the most recently published episodes across all podcasts. Convenience alias for items where
        ``source_type = 'podcast_episode'`` — for multi-format integrations, prefer ``/api/items``.

        Args:
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/episodes"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EpisodeList],
            error_mapper=list_recent_episodes_v1_error_mapper,
            request_options=request_options,
        )


class AsyncEpisodesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_episode_transcript(
        self, episode_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Transcript, GetEpisodeTranscriptErrorBody]:
        """Returns the transcript on its own (segments + speaker list). Equivalent to the ``transcript`` field on ``GET
        /api/episodes/{id}?include=transcript``. Use this endpoint when you don't need the metadata envelope.

        Args:
            episode_id: Numeric episode ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/episodes/{episode_id}/transcript"),
            path_params=[param[str]("episode_id", episode_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Transcript],
            error_mapper=get_episode_transcript_error_mapper,
            request_options=request_options,
        )

    async def get_public_episode(
        self, episode_id: str, *, include: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EpisodeDetail, GetPublicEpisodeErrorBody]:
        """Returns the episode + its parent podcast. Heavy fields are opt-in via ``?include=`` — pass ``transcript``,
        ``entities``, or both to load them in the same response. Useful when you want details without paying the cost of
        fetching a 500KB+ transcript by default.

        Args:
            episode_id: Numeric episode ID
            include: Comma-separated optional fields: ``transcript``, ``entities``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/episodes/{episode_id}"),
            path_params=[param[str]("episode_id", episode_id)],
            query_params=[param[str | None]("include", include)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EpisodeDetail],
            error_mapper=get_public_episode_error_mapper,
            request_options=request_options,
        )

    async def list_recent_episodes_v1(
        self,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EpisodeList, ListRecentEpisodesV1ErrorBody]:
        """Returns the most recently published episodes across all podcasts. Convenience alias for items where
        ``source_type = 'podcast_episode'`` — for multi-format integrations, prefer ``/api/items``.

        Args:
            limit: Max results (default 20, max 100)
            offset: Result offset for pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/episodes"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EpisodeList],
            error_mapper=list_recent_episodes_v1_error_mapper,
            request_options=request_options,
        )
