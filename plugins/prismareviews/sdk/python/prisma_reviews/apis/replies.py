from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_reply_error import DeleteReplyErrorBody, delete_reply_error_mapper
from ..errors.reply_to_review_error import ReplyToReviewErrorBody, reply_to_review_error_mapper
from ..models.reply_deletion import ReplyDeletion
from ..models.review import Review
from ..models.v1_reviews_reply_request import V1ReviewsReplyRequest, V1ReviewsReplyRequestDict
from ..server.server import Server


class Replies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RepliesWithRawResponse(client, server, auth)

    def delete_reply(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ReplyDeletion:
        """Queues the removal of the review's reply from the platform. When the job is done, ``reply`` becomes ``null``.
        Only on platforms whose API can delete replies (Google Business Profile, App Store, Trustpilot).

        Args:
            id_: Review ID (``rev_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion queued.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No review with that ID in this workspace
                and mode (``resource_not_found``), or the review has no reply (``reply_not_found``). The platform is
                read only (``reply_not_supported``, with ``platform`` and ``url``) or its API can't delete replies
                (``operation_not_supported``). More requests this minute than the plan allows for this key. Not counted
                in usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and the API is
                paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_reply(id_, request_options=request_options))

    def reply_to_review(
        self,
        id_: str,
        body: V1ReviewsReplyRequest | V1ReviewsReplyRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Review:
        """Stores the reply and queues it for publishing through the platform's official API: ``202`` with the review
        and ``reply.status: "queued"``. A background job publishes it (``reply.published`` webhook), marks it ``failed``
        (``reply.failed`` webhook), or, when the platform never answered and the reply can't be read back, marks it
        ``unknown`` without retrying (``reply.unknown`` webhook). Posting again replaces the stored reply. With a test
        key the reply goes through the same steps but never reaches the platform. Read-only platforms return ``422
        reply_not_supported`` with the review's ``url``, where it can be answered.

        Args:
            id_: Review ID (``rev_…``).
            body: The request body.
            idempotency_key: A unique value per reply (a UUID works). The same key with the same request returns the
                stored response instead of replying twice; with a different request it returns ``409
                idempotency_conflict``. Scoped to the workspace; only successful responses are stored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reply queued. The body is the review with its new ``reply``.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No review with that ID in this workspace
                and mode (``resource_not_found``). The ``Idempotency-Key`` was used with a different request, or the
                connection of the review's location is not ``active`` (reconnect it, then retry). ``text`` missing or
                empty, a body that isn't valid JSON (``invalid_request``), a read-only platform
                (``reply_not_supported``, with ``platform`` and ``url``) or a text over the platform's limit
                (``reply_too_long``, with ``platform`` and ``max_length``). More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.reply_to_review(
                id_, body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RepliesWithRawResponse:
        return self._with_raw_response


class AsyncReplies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRepliesWithRawResponse(client, server, auth)

    async def delete_reply(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ReplyDeletion:
        """Queues the removal of the review's reply from the platform. When the job is done, ``reply`` becomes ``null``.
        Only on platforms whose API can delete replies (Google Business Profile, App Store, Trustpilot).

        Args:
            id_: Review ID (``rev_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion queued.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No review with that ID in this workspace
                and mode (``resource_not_found``), or the review has no reply (``reply_not_found``). The platform is
                read only (``reply_not_supported``, with ``platform`` and ``url``) or its API can't delete replies
                (``operation_not_supported``). More requests this minute than the plan allows for this key. Not counted
                in usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and the API is
                paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_reply(id_, request_options=request_options))

    async def reply_to_review(
        self,
        id_: str,
        body: V1ReviewsReplyRequest | V1ReviewsReplyRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Review:
        """Stores the reply and queues it for publishing through the platform's official API: ``202`` with the review
        and ``reply.status: "queued"``. A background job publishes it (``reply.published`` webhook), marks it ``failed``
        (``reply.failed`` webhook), or, when the platform never answered and the reply can't be read back, marks it
        ``unknown`` without retrying (``reply.unknown`` webhook). Posting again replaces the stored reply. With a test
        key the reply goes through the same steps but never reaches the platform. Read-only platforms return ``422
        reply_not_supported`` with the review's ``url``, where it can be answered.

        Args:
            id_: Review ID (``rev_…``).
            body: The request body.
            idempotency_key: A unique value per reply (a UUID works). The same key with the same request returns the
                stored response instead of replying twice; with a different request it returns ``409
                idempotency_conflict``. Scoped to the workspace; only successful responses are stored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reply queued. The body is the review with its new ``reply``.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No review with that ID in this workspace
                and mode (``resource_not_found``). The ``Idempotency-Key`` was used with a different request, or the
                connection of the review's location is not ``active`` (reconnect it, then retry). ``text`` missing or
                empty, a body that isn't valid JSON (``invalid_request``), a read-only platform
                (``reply_not_supported``, with ``platform`` and ``url``) or a text over the platform's limit
                (``reply_too_long``, with ``platform`` and ``max_length``). More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.reply_to_review(
                id_, body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRepliesWithRawResponse:
        return self._with_raw_response


class RepliesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_reply(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ReplyDeletion, DeleteReplyErrorBody]:
        """Queues the removal of the review's reply from the platform. When the job is done, ``reply`` becomes ``null``.
        Only on platforms whose API can delete replies (Google Business Profile, App Store, Trustpilot).

        Args:
            id_: Review ID (``rev_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/reviews/{id}/reply"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[ReplyDeletion],
            error_mapper=delete_reply_error_mapper,
            request_options=request_options,
        )

    def reply_to_review(
        self,
        id_: str,
        body: V1ReviewsReplyRequest | V1ReviewsReplyRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Review, ReplyToReviewErrorBody]:
        """Stores the reply and queues it for publishing through the platform's official API: ``202`` with the review
        and ``reply.status: "queued"``. A background job publishes it (``reply.published`` webhook), marks it ``failed``
        (``reply.failed`` webhook), or, when the platform never answered and the reply can't be read back, marks it
        ``unknown`` without retrying (``reply.unknown`` webhook). Posting again replaces the stored reply. With a test
        key the reply goes through the same steps but never reaches the platform. Read-only platforms return ``422
        reply_not_supported`` with the review's ``url``, where it can be answered.

        Args:
            id_: Review ID (``rev_…``).
            body: The request body.
            idempotency_key: A unique value per reply (a UUID works). The same key with the same request returns the
                stored response instead of replying twice; with a different request it returns ``409
                idempotency_conflict``. Scoped to the workspace; only successful responses are stored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/reviews/{id}/reply"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[V1ReviewsReplyRequest | V1ReviewsReplyRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Review],
            error_mapper=reply_to_review_error_mapper,
            request_options=request_options,
        )


class AsyncRepliesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_reply(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ReplyDeletion, DeleteReplyErrorBody]:
        """Queues the removal of the review's reply from the platform. When the job is done, ``reply`` becomes ``null``.
        Only on platforms whose API can delete replies (Google Business Profile, App Store, Trustpilot).

        Args:
            id_: Review ID (``rev_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/reviews/{id}/reply"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[ReplyDeletion],
            error_mapper=delete_reply_error_mapper,
            request_options=request_options,
        )

    async def reply_to_review(
        self,
        id_: str,
        body: V1ReviewsReplyRequest | V1ReviewsReplyRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Review, ReplyToReviewErrorBody]:
        """Stores the reply and queues it for publishing through the platform's official API: ``202`` with the review
        and ``reply.status: "queued"``. A background job publishes it (``reply.published`` webhook), marks it ``failed``
        (``reply.failed`` webhook), or, when the platform never answered and the reply can't be read back, marks it
        ``unknown`` without retrying (``reply.unknown`` webhook). Posting again replaces the stored reply. With a test
        key the reply goes through the same steps but never reaches the platform. Read-only platforms return ``422
        reply_not_supported`` with the review's ``url``, where it can be answered.

        Args:
            id_: Review ID (``rev_…``).
            body: The request body.
            idempotency_key: A unique value per reply (a UUID works). The same key with the same request returns the
                stored response instead of replying twice; with a different request it returns ``409
                idempotency_conflict``. Scoped to the workspace; only successful responses are stored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/reviews/{id}/reply"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[V1ReviewsReplyRequest | V1ReviewsReplyRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Review],
            error_mapper=reply_to_review_error_mapper,
            request_options=request_options,
        )
