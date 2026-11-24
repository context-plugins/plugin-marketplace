from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.api_v1_comments_resolve_request import ApiV1CommentsResolveRequest, ApiV1CommentsResolveRequestDict
from ..models.api_v1_comments_response import ApiV1CommentsResponse
from ..server.server import Server


class Comments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CommentsWithRawResponse(client, server, auth)

    def get_api_v1_comments(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CommentsResponse:
        """"Is anything waiting on me?", without naming a report first. ``GET /reports/{idOrSlug}/comments`` answers it
        one report at a time, which means walking every report to find the two with feedback on them.

        Newest activity first, with the quoted passage and who wrote it — fetch the thread itself from the report's own
        endpoint once you know where to look. Threads on archived reports are left out: the URL does not serve, so
        nothing can be done about them until it is unarchived.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Open threads, newest activity first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_comments(limit=limit, cursor=cursor, request_options=request_options)
        )

    def post_api_v1_comments_by_thread_id_resolve(
        self,
        thread_id: UUID,
        *,
        body: ApiV1CommentsResolveRequest | ApiV1CommentsResolveRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Marks a thread resolved, or reopens it with ``reopen``. The note is for the reader who raised it, so say what
        changed rather than that it was handled — resolving without a new version is allowed and is worth explaining
        when you do it.

        Args:
            thread_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Thread status after the change

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_comments_by_thread_id_resolve(
                thread_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CommentsWithRawResponse:
        return self._with_raw_response


class AsyncComments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCommentsWithRawResponse(client, server, auth)

    async def get_api_v1_comments(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CommentsResponse:
        """"Is anything waiting on me?", without naming a report first. ``GET /reports/{idOrSlug}/comments`` answers it
        one report at a time, which means walking every report to find the two with feedback on them.

        Newest activity first, with the quoted passage and who wrote it — fetch the thread itself from the report's own
        endpoint once you know where to look. Threads on archived reports are left out: the URL does not serve, so
        nothing can be done about them until it is unarchived.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Open threads, newest activity first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_comments(
                limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def post_api_v1_comments_by_thread_id_resolve(
        self,
        thread_id: UUID,
        *,
        body: ApiV1CommentsResolveRequest | ApiV1CommentsResolveRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Marks a thread resolved, or reopens it with ``reopen``. The note is for the reader who raised it, so say what
        changed rather than that it was handled — resolving without a new version is allowed and is worth explaining
        when you do it.

        Args:
            thread_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Thread status after the change

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_comments_by_thread_id_resolve(
                thread_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCommentsWithRawResponse:
        return self._with_raw_response


class CommentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_comments(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentsResponse, RawError]:
        """"Is anything waiting on me?", without naming a report first. ``GET /reports/{idOrSlug}/comments`` answers it
        one report at a time, which means walking every report to find the two with feedback on them.

        Newest activity first, with the quoted passage and who wrote it — fetch the thread itself from the report's own
        endpoint once you know where to look. Threads on archived reports are left out: the URL does not serve, so
        nothing can be done about them until it is unarchived.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comments"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CommentsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_comments_by_thread_id_resolve(
        self,
        thread_id: UUID,
        *,
        body: ApiV1CommentsResolveRequest | ApiV1CommentsResolveRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Marks a thread resolved, or reopens it with ``reopen``. The note is for the reader who raised it, so say what
        changed rather than that it was handled — resolving without a new version is allowed and is worth explaining
        when you do it.

        Args:
            thread_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comments/{threadId}/resolve"),
            path_params=[param[UUID]("threadId", thread_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CommentsResolveRequest | ApiV1CommentsResolveRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncCommentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_comments(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentsResponse, RawError]:
        """"Is anything waiting on me?", without naming a report first. ``GET /reports/{idOrSlug}/comments`` answers it
        one report at a time, which means walking every report to find the two with feedback on them.

        Newest activity first, with the quoted passage and who wrote it — fetch the thread itself from the report's own
        endpoint once you know where to look. Threads on archived reports are left out: the URL does not serve, so
        nothing can be done about them until it is unarchived.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comments"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CommentsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_comments_by_thread_id_resolve(
        self,
        thread_id: UUID,
        *,
        body: ApiV1CommentsResolveRequest | ApiV1CommentsResolveRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Marks a thread resolved, or reopens it with ``reopen``. The note is for the reader who raised it, so say what
        changed rather than that it was handled — resolving without a new version is allowed and is worth explaining
        when you do it.

        Args:
            thread_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comments/{threadId}/resolve"),
            path_params=[param[UUID]("threadId", thread_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CommentsResolveRequest | ApiV1CommentsResolveRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
