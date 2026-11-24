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
from ..errors.get_review_error import GetReviewErrorBody, get_review_error_mapper
from ..errors.list_reviews_error import ListReviewsErrorBody, list_reviews_error_mapper
from ..models.enums.has_reply import HasReplyOrStr
from ..models.enums.platform_id import PlatformIdOrStr
from ..models.review import Review
from ..models.review_list import ReviewList
from ..models.unions.since import Since, SinceDict
from ..server.server import Server


class Reviews:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReviewsWithRawResponse(client, server, auth)

    def get_review(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Review:
        """One review by ID.

        Args:
            id_: Review ID (``rev_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The review.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No review with that ID in this workspace
                and mode (``resource_not_found``). More requests this minute than the plan allows for this key. Not
                counted in usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and the API
                is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_review(id_, request_options=request_options))

    def list_reviews(
        self,
        *,
        location_id: str | None = None,
        platform: PlatformIdOrStr | None = None,
        since: Since | SinceDict | None = None,
        has_reply: HasReplyOrStr | None = None,
        limit: int | None = 50,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReviewList:
        """Reviews of your workspace in the mode of your key, newest first (by ``created_at``, then ``id``), in the same
        shape on every platform. Cursor paginated: pass ``next_cursor`` as ``cursor``, with the same filters, until it
        is ``null``.

        Args:
            location_id: Only reviews of this location.
            platform: Only reviews from this platform.
            since: Only reviews written at or after this time (by ``created_at``): a date (``2026-10-01``, midnight UTC)
                or an ISO 8601 timestamp with a time zone offset (``2026-10-01T00:00:00Z``,
                ``2026-10-01T02:00:00+02:00``).
            has_reply: ``true``: reviews with a reply in any status. ``false``: reviews without one.
            limit: Page size.
            cursor: The ``next_cursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of reviews.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. An unknown ``platform``, a ``since``
                that is neither a date nor a timestamp with offset, a ``limit`` out of range or a ``cursor`` that can't
                be decoded (``invalid_request``). The message names the parameter. More requests this minute than the
                plan allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is
                under maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_reviews(
                location_id=location_id,
                platform=platform,
                since=since,
                has_reply=has_reply,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ReviewsWithRawResponse:
        return self._with_raw_response


class AsyncReviews:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReviewsWithRawResponse(client, server, auth)

    async def get_review(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Review:
        """One review by ID.

        Args:
            id_: Review ID (``rev_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The review.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No review with that ID in this workspace
                and mode (``resource_not_found``). More requests this minute than the plan allows for this key. Not
                counted in usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and the API
                is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_review(id_, request_options=request_options))

    async def list_reviews(
        self,
        *,
        location_id: str | None = None,
        platform: PlatformIdOrStr | None = None,
        since: Since | SinceDict | None = None,
        has_reply: HasReplyOrStr | None = None,
        limit: int | None = 50,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReviewList:
        """Reviews of your workspace in the mode of your key, newest first (by ``created_at``, then ``id``), in the same
        shape on every platform. Cursor paginated: pass ``next_cursor`` as ``cursor``, with the same filters, until it
        is ``null``.

        Args:
            location_id: Only reviews of this location.
            platform: Only reviews from this platform.
            since: Only reviews written at or after this time (by ``created_at``): a date (``2026-10-01``, midnight UTC)
                or an ISO 8601 timestamp with a time zone offset (``2026-10-01T00:00:00Z``,
                ``2026-10-01T02:00:00+02:00``).
            has_reply: ``true``: reviews with a reply in any status. ``false``: reviews without one.
            limit: Page size.
            cursor: The ``next_cursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of reviews.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. An unknown ``platform``, a ``since``
                that is neither a date nor a timestamp with offset, a ``limit`` out of range or a ``cursor`` that can't
                be decoded (``invalid_request``). The message names the parameter. More requests this minute than the
                plan allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is
                under maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_reviews(
                location_id=location_id,
                platform=platform,
                since=since,
                has_reply=has_reply,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReviewsWithRawResponse:
        return self._with_raw_response


class ReviewsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_review(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Review, GetReviewErrorBody]:
        """One review by ID.

        Args:
            id_: Review ID (``rev_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/reviews/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Review],
            error_mapper=get_review_error_mapper,
            request_options=request_options,
        )

    def list_reviews(
        self,
        *,
        location_id: str | None = None,
        platform: PlatformIdOrStr | None = None,
        since: Since | SinceDict | None = None,
        has_reply: HasReplyOrStr | None = None,
        limit: int | None = 50,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReviewList, ListReviewsErrorBody]:
        """Reviews of your workspace in the mode of your key, newest first (by ``created_at``, then ``id``), in the same
        shape on every platform. Cursor paginated: pass ``next_cursor`` as ``cursor``, with the same filters, until it
        is ``null``.

        Args:
            location_id: Only reviews of this location.
            platform: Only reviews from this platform.
            since: Only reviews written at or after this time (by ``created_at``): a date (``2026-10-01``, midnight UTC)
                or an ISO 8601 timestamp with a time zone offset (``2026-10-01T00:00:00Z``,
                ``2026-10-01T02:00:00+02:00``).
            has_reply: ``true``: reviews with a reply in any status. ``false``: reviews without one.
            limit: Page size.
            cursor: The ``next_cursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/reviews"),
            query_params=[
                param[str | None]("location_id", location_id),
                param[PlatformIdOrStr | None]("platform", platform),
                param[Since | SinceDict | None]("since", since),
                param[HasReplyOrStr | None]("has_reply", has_reply),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[ReviewList],
            error_mapper=list_reviews_error_mapper,
            request_options=request_options,
        )


class AsyncReviewsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_review(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Review, GetReviewErrorBody]:
        """One review by ID.

        Args:
            id_: Review ID (``rev_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/reviews/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Review],
            error_mapper=get_review_error_mapper,
            request_options=request_options,
        )

    async def list_reviews(
        self,
        *,
        location_id: str | None = None,
        platform: PlatformIdOrStr | None = None,
        since: Since | SinceDict | None = None,
        has_reply: HasReplyOrStr | None = None,
        limit: int | None = 50,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReviewList, ListReviewsErrorBody]:
        """Reviews of your workspace in the mode of your key, newest first (by ``created_at``, then ``id``), in the same
        shape on every platform. Cursor paginated: pass ``next_cursor`` as ``cursor``, with the same filters, until it
        is ``null``.

        Args:
            location_id: Only reviews of this location.
            platform: Only reviews from this platform.
            since: Only reviews written at or after this time (by ``created_at``): a date (``2026-10-01``, midnight UTC)
                or an ISO 8601 timestamp with a time zone offset (``2026-10-01T00:00:00Z``,
                ``2026-10-01T02:00:00+02:00``).
            has_reply: ``true``: reviews with a reply in any status. ``false``: reviews without one.
            limit: Page size.
            cursor: The ``next_cursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/reviews"),
            query_params=[
                param[str | None]("location_id", location_id),
                param[PlatformIdOrStr | None]("platform", platform),
                param[Since | SinceDict | None]("since", since),
                param[HasReplyOrStr | None]("has_reply", has_reply),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[ReviewList],
            error_mapper=list_reviews_error_mapper,
            request_options=request_options,
        )
