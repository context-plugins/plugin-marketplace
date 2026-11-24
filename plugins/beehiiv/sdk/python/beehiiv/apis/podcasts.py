from __future__ import annotations

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
from ..errors.get_episode_error import GetEpisodeErrorBody, get_episode_error_mapper
from ..errors.get_podcast_error import GetPodcastErrorBody, get_podcast_error_mapper
from ..errors.list_episodes_error import ListEpisodesErrorBody, list_episodes_error_mapper
from ..errors.list_podcasts_error import ListPodcastsErrorBody, list_podcasts_error_mapper
from ..models.enums.podcast_episode_order_by import PodcastEpisodeOrderBy, PodcastEpisodeOrderByOrStr
from ..models.enums.podcast_episode_status import PodcastEpisodeStatusOrStr
from ..models.enums.podcast_show_status import PodcastShowStatusOrStr
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.podcast_episode_get_response import PodcastEpisodeGetResponse
from ..models.podcast_episodes_list_response import PodcastEpisodesListResponse
from ..models.podcast_show_get_response import PodcastShowGetResponse
from ..models.podcast_shows_list_response import PodcastShowsListResponse
from ..server.server import Server


class Podcasts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PodcastsWithRawResponse(client, server)

    def get_episode(
        self,
        publication_id: str,
        podcast_show_id: str,
        podcast_episode_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PodcastEpisodeGetResponse:
        """Retrieve a single episode belonging to a specific podcast.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            podcast_episode_id: The prefixed ID of the episode
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_episode(
                publication_id, podcast_show_id, podcast_episode_id, authorization, request_options=request_options
            ),
        )

    def get_podcast(
        self,
        publication_id: str,
        podcast_show_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PodcastShowGetResponse:
        """Retrieve a single podcast belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_podcast(
                publication_id, podcast_show_id, authorization, request_options=request_options
            ),
        )

    def list_episodes(
        self,
        publication_id: str,
        podcast_show_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: PodcastEpisodeStatusOrStr | None = None,
        order_by: PodcastEpisodeOrderByOrStr | None = PodcastEpisodeOrderBy.DISPLAYED_DATE,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PodcastEpisodesListResponse:
        """Retrieve all episodes belonging to a specific podcast.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            status: Optionally filter the results by the status of the episode.<br>``draft`` - Not yet
                published.<br>``scheduled`` - Scheduled for future publication.<br>``published`` - Available via web and
                RSS.<br>``archived`` - No longer available via web or RSS.
            order_by: The field that the results are sorted by. Defaults to ``displayed_date``<br>``created`` - The time
                in which the episode was first created.<br>``updated`` - The time the episode was last
                updated.<br>``publish_date`` - The exact time the system published the episode (when it went live), not
                the scheduled time the user set.<br>``displayed_date`` - The time displayed in place of the
                ``publish_date``. Uses a custom display date if set, otherwise the scheduled time the user set for
                publication, otherwise the ``publish_date``, otherwise the creation date. For imported episodes, the
                original feed's ``pubDate`` is stored as the custom display date. This is the same field used to order
                episodes in the podcast's RSS feed.
            direction: The direction that the results are sorted in. Defaults to desc<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_episodes(
                publication_id,
                podcast_show_id,
                authorization,
                limit=limit,
                cursor=cursor,
                status=status,
                order_by=order_by,
                direction=direction,
                request_options=request_options,
            ),
        )

    def list_podcasts(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: PodcastShowStatusOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PodcastShowsListResponse:
        """Retrieve all podcasts belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            status: Optionally filter the results by the status of the podcast.<br>``draft`` - No episodes have been
                published.<br>``live`` - Published and active.<br>``archived`` - The podcast is no longer active.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_podcasts(
                publication_id,
                authorization,
                limit=limit,
                cursor=cursor,
                status=status,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> PodcastsWithRawResponse:
        return self._with_raw_response


class AsyncPodcasts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPodcastsWithRawResponse(client, server)

    async def get_episode(
        self,
        publication_id: str,
        podcast_show_id: str,
        podcast_episode_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PodcastEpisodeGetResponse:
        """Retrieve a single episode belonging to a specific podcast.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            podcast_episode_id: The prefixed ID of the episode
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_episode(
                publication_id, podcast_show_id, podcast_episode_id, authorization, request_options=request_options
            ),
        )

    async def get_podcast(
        self,
        publication_id: str,
        podcast_show_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PodcastShowGetResponse:
        """Retrieve a single podcast belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_podcast(
                publication_id, podcast_show_id, authorization, request_options=request_options
            ),
        )

    async def list_episodes(
        self,
        publication_id: str,
        podcast_show_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: PodcastEpisodeStatusOrStr | None = None,
        order_by: PodcastEpisodeOrderByOrStr | None = PodcastEpisodeOrderBy.DISPLAYED_DATE,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PodcastEpisodesListResponse:
        """Retrieve all episodes belonging to a specific podcast.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            status: Optionally filter the results by the status of the episode.<br>``draft`` - Not yet
                published.<br>``scheduled`` - Scheduled for future publication.<br>``published`` - Available via web and
                RSS.<br>``archived`` - No longer available via web or RSS.
            order_by: The field that the results are sorted by. Defaults to ``displayed_date``<br>``created`` - The time
                in which the episode was first created.<br>``updated`` - The time the episode was last
                updated.<br>``publish_date`` - The exact time the system published the episode (when it went live), not
                the scheduled time the user set.<br>``displayed_date`` - The time displayed in place of the
                ``publish_date``. Uses a custom display date if set, otherwise the scheduled time the user set for
                publication, otherwise the ``publish_date``, otherwise the creation date. For imported episodes, the
                original feed's ``pubDate`` is stored as the custom display date. This is the same field used to order
                episodes in the podcast's RSS feed.
            direction: The direction that the results are sorted in. Defaults to desc<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_episodes(
                publication_id,
                podcast_show_id,
                authorization,
                limit=limit,
                cursor=cursor,
                status=status,
                order_by=order_by,
                direction=direction,
                request_options=request_options,
            ),
        )

    async def list_podcasts(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: PodcastShowStatusOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PodcastShowsListResponse:
        """Retrieve all podcasts belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            status: Optionally filter the results by the status of the podcast.<br>``draft`` - No episodes have been
                published.<br>``live`` - Published and active.<br>``archived`` - The podcast is no longer active.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_podcasts(
                publication_id,
                authorization,
                limit=limit,
                cursor=cursor,
                status=status,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPodcastsWithRawResponse:
        return self._with_raw_response


class PodcastsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_episode(
        self,
        publication_id: str,
        podcast_show_id: str,
        podcast_episode_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastEpisodeGetResponse, GetEpisodeErrorBody]:
        """Retrieve a single episode belonging to a specific podcast.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            podcast_episode_id: The prefixed ID of the episode
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/podcasts/{podcastShowId}/episodes/{podcastEpisodeId}"
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("podcastShowId", podcast_show_id),
                param[str]("podcastEpisodeId", podcast_episode_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PodcastEpisodeGetResponse],
            error_mapper=get_episode_error_mapper,
            request_options=request_options,
        )

    def get_podcast(
        self,
        publication_id: str,
        podcast_show_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastShowGetResponse, GetPodcastErrorBody]:
        """Retrieve a single podcast belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/podcasts/{podcastShowId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("podcastShowId", podcast_show_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PodcastShowGetResponse],
            error_mapper=get_podcast_error_mapper,
            request_options=request_options,
        )

    def list_episodes(
        self,
        publication_id: str,
        podcast_show_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: PodcastEpisodeStatusOrStr | None = None,
        order_by: PodcastEpisodeOrderByOrStr | None = PodcastEpisodeOrderBy.DISPLAYED_DATE,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastEpisodesListResponse, ListEpisodesErrorBody]:
        """Retrieve all episodes belonging to a specific podcast.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            status: Optionally filter the results by the status of the episode.<br>``draft`` - Not yet
                published.<br>``scheduled`` - Scheduled for future publication.<br>``published`` - Available via web and
                RSS.<br>``archived`` - No longer available via web or RSS.
            order_by: The field that the results are sorted by. Defaults to ``displayed_date``<br>``created`` - The time
                in which the episode was first created.<br>``updated`` - The time the episode was last
                updated.<br>``publish_date`` - The exact time the system published the episode (when it went live), not
                the scheduled time the user set.<br>``displayed_date`` - The time displayed in place of the
                ``publish_date``. Uses a custom display date if set, otherwise the scheduled time the user set for
                publication, otherwise the ``publish_date``, otherwise the creation date. For imported episodes, the
                original feed's ``pubDate`` is stored as the custom display date. This is the same field used to order
                episodes in the podcast's RSS feed.
            direction: The direction that the results are sorted in. Defaults to desc<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/podcasts/{podcastShowId}/episodes"),
            path_params=[param[str]("publicationId", publication_id), param[str]("podcastShowId", podcast_show_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[PodcastEpisodeStatusOrStr | None]("status", status),
                param[PodcastEpisodeOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PodcastEpisodesListResponse],
            error_mapper=list_episodes_error_mapper,
            request_options=request_options,
        )

    def list_podcasts(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: PodcastShowStatusOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastShowsListResponse, ListPodcastsErrorBody]:
        """Retrieve all podcasts belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            status: Optionally filter the results by the status of the podcast.<br>``draft`` - No episodes have been
                published.<br>``live`` - Published and active.<br>``archived`` - The podcast is no longer active.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/podcasts"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[PodcastShowStatusOrStr | None]("status", status),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PodcastShowsListResponse],
            error_mapper=list_podcasts_error_mapper,
            request_options=request_options,
        )


class AsyncPodcastsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_episode(
        self,
        publication_id: str,
        podcast_show_id: str,
        podcast_episode_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastEpisodeGetResponse, GetEpisodeErrorBody]:
        """Retrieve a single episode belonging to a specific podcast.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            podcast_episode_id: The prefixed ID of the episode
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/podcasts/{podcastShowId}/episodes/{podcastEpisodeId}"
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("podcastShowId", podcast_show_id),
                param[str]("podcastEpisodeId", podcast_episode_id),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PodcastEpisodeGetResponse],
            error_mapper=get_episode_error_mapper,
            request_options=request_options,
        )

    async def get_podcast(
        self,
        publication_id: str,
        podcast_show_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastShowGetResponse, GetPodcastErrorBody]:
        """Retrieve a single podcast belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/podcasts/{podcastShowId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("podcastShowId", podcast_show_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PodcastShowGetResponse],
            error_mapper=get_podcast_error_mapper,
            request_options=request_options,
        )

    async def list_episodes(
        self,
        publication_id: str,
        podcast_show_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: PodcastEpisodeStatusOrStr | None = None,
        order_by: PodcastEpisodeOrderByOrStr | None = PodcastEpisodeOrderBy.DISPLAYED_DATE,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastEpisodesListResponse, ListEpisodesErrorBody]:
        """Retrieve all episodes belonging to a specific podcast.

        Args:
            publication_id: The prefixed ID of the publication object
            podcast_show_id: The prefixed ID of the podcast
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            status: Optionally filter the results by the status of the episode.<br>``draft`` - Not yet
                published.<br>``scheduled`` - Scheduled for future publication.<br>``published`` - Available via web and
                RSS.<br>``archived`` - No longer available via web or RSS.
            order_by: The field that the results are sorted by. Defaults to ``displayed_date``<br>``created`` - The time
                in which the episode was first created.<br>``updated`` - The time the episode was last
                updated.<br>``publish_date`` - The exact time the system published the episode (when it went live), not
                the scheduled time the user set.<br>``displayed_date`` - The time displayed in place of the
                ``publish_date``. Uses a custom display date if set, otherwise the scheduled time the user set for
                publication, otherwise the ``publish_date``, otherwise the creation date. For imported episodes, the
                original feed's ``pubDate`` is stored as the custom display date. This is the same field used to order
                episodes in the podcast's RSS feed.
            direction: The direction that the results are sorted in. Defaults to desc<br> ``asc`` - Ascending, sorts
                from smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/podcasts/{podcastShowId}/episodes"),
            path_params=[param[str]("publicationId", publication_id), param[str]("podcastShowId", podcast_show_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[PodcastEpisodeStatusOrStr | None]("status", status),
                param[PodcastEpisodeOrderByOrStr | None]("order_by", order_by),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PodcastEpisodesListResponse],
            error_mapper=list_episodes_error_mapper,
            request_options=request_options,
        )

    async def list_podcasts(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: PodcastShowStatusOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PodcastShowsListResponse, ListPodcastsErrorBody]:
        """Retrieve all podcasts belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            status: Optionally filter the results by the status of the podcast.<br>``draft`` - No episodes have been
                published.<br>``live`` - Published and active.<br>``archived`` - The podcast is no longer active.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/podcasts"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[PodcastShowStatusOrStr | None]("status", status),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PodcastShowsListResponse],
            error_mapper=list_podcasts_error_mapper,
            request_options=request_options,
        )
