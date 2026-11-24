from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.comment import Comment
from ..models.comment_list import CommentList
from ..models.comments_request import CommentsRequest, CommentsRequestDict
from ..models.comments_response import CommentsResponse
from ..models.replies_request import RepliesRequest, RepliesRequestDict
from ..models.replies_response import RepliesResponse
from ..models.request import Request, RequestDict
from ..models.success_response import SuccessResponse
from ..server.server import Server


class Comments:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CommentsWithRawResponse(client, server)

    def create_comment(
        self,
        media_id: str,
        body: CommentsRequest | CommentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CommentsResponse:
        """Create a comment on an Instagram media object.

        Args:
            media_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment created.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_comment(media_id, body, request_options=request_options))

    def create_comment_reply(
        self,
        comment_id: str,
        body: RepliesRequest | RepliesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RepliesResponse:
        """Reply to a comment.

        Args:
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reply created.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_comment_reply(comment_id, body, request_options=request_options))

    def delete_comment(
        self, comment_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessResponse:
        """Delete a comment on your media.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment deleted.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_comment(comment_id, access_token, request_options=request_options))

    def get_comment(
        self,
        comment_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Comment:
        """Get fields on an Instagram comment.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_comment(
                comment_id, access_token, fields=fields, request_options=request_options
            ),
        )

    def get_comment_replies(
        self,
        comment_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CommentList:
        """Get replies to a comment.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of reply comments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_comment_replies(
                comment_id, access_token, fields=fields, request_options=request_options
            ),
        )

    def get_media_comments(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CommentList:
        """Get comments on an Instagram media object.

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of comments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_media_comments(
                media_id, access_token, fields=fields, request_options=request_options
            ),
        )

    def hide_comment(
        self,
        comment_id: str,
        *,
        body: Request | RequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Hide or unhide a comment on your media.

        Args:
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.hide_comment(comment_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CommentsWithRawResponse:
        return self._with_raw_response


class AsyncComments:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCommentsWithRawResponse(client, server)

    async def create_comment(
        self,
        media_id: str,
        body: CommentsRequest | CommentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommentsResponse:
        """Create a comment on an Instagram media object.

        Args:
            media_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment created.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_comment(media_id, body, request_options=request_options))

    async def create_comment_reply(
        self,
        comment_id: str,
        body: RepliesRequest | RepliesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RepliesResponse:
        """Reply to a comment.

        Args:
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reply created.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_comment_reply(comment_id, body, request_options=request_options)
        )

    async def delete_comment(
        self, comment_id: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessResponse:
        """Delete a comment on your media.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment deleted.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_comment(comment_id, access_token, request_options=request_options)
        )

    async def get_comment(
        self,
        comment_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Comment:
        """Get fields on an Instagram comment.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_comment(
                comment_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def get_comment_replies(
        self,
        comment_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommentList:
        """Get replies to a comment.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of reply comments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_comment_replies(
                comment_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def get_media_comments(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommentList:
        """Get comments on an Instagram media object.

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of comments.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_media_comments(
                media_id, access_token, fields=fields, request_options=request_options
            ),
        )

    async def hide_comment(
        self,
        comment_id: str,
        *,
        body: Request | RequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Hide or unhide a comment on your media.

        Args:
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.hide_comment(comment_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCommentsWithRawResponse:
        return self._with_raw_response


class CommentsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_comment(
        self,
        media_id: str,
        body: CommentsRequest | CommentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentsResponse, RawError]:
        """Create a comment on an Instagram media object.

        Args:
            media_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{media_id}/comments"),
            path_params=[param[str]("media_id", media_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CommentsRequest | CommentsRequestDict](body),
            decoder=json_decoder[CommentsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def create_comment_reply(
        self,
        comment_id: str,
        body: RepliesRequest | RepliesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RepliesResponse, RawError]:
        """Reply to a comment.

        Args:
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{comment_id}/replies"),
            path_params=[param[str]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepliesRequest | RepliesRequestDict](body),
            decoder=json_decoder[RepliesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_comment(
        self, comment_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponse, RawError]:
        """Delete a comment on your media.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{comment_id}"),
            path_params=[param[str]("comment_id", comment_id)],
            query_params=[param[str]("access_token", access_token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[SuccessResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_comment(
        self,
        comment_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Comment, RawError]:
        """Get fields on an Instagram comment.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{comment_id}"),
            path_params=[param[str]("comment_id", comment_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[Comment],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_comment_replies(
        self,
        comment_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentList, RawError]:
        """Get replies to a comment.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{comment_id}/replies"),
            path_params=[param[str]("comment_id", comment_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[CommentList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_media_comments(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentList, RawError]:
        """Get comments on an Instagram media object.

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{media_id}/comments"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=json_decoder[CommentList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def hide_comment(
        self,
        comment_id: str,
        *,
        body: Request | RequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, RawError]:
        """Hide or unhide a comment on your media.

        Args:
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{comment_id}"),
            path_params=[param[str]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Request | RequestDict | None](body),
            decoder=json_decoder[SuccessResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncCommentsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_comment(
        self,
        media_id: str,
        body: CommentsRequest | CommentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentsResponse, RawError]:
        """Create a comment on an Instagram media object.

        Args:
            media_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{media_id}/comments"),
            path_params=[param[str]("media_id", media_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CommentsRequest | CommentsRequestDict](body),
            decoder=async_json_decoder[CommentsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def create_comment_reply(
        self,
        comment_id: str,
        body: RepliesRequest | RepliesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RepliesResponse, RawError]:
        """Reply to a comment.

        Args:
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{comment_id}/replies"),
            path_params=[param[str]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RepliesRequest | RepliesRequestDict](body),
            decoder=async_json_decoder[RepliesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_comment(
        self, comment_id: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponse, RawError]:
        """Delete a comment on your media.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{comment_id}"),
            path_params=[param[str]("comment_id", comment_id)],
            query_params=[param[str]("access_token", access_token)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[SuccessResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_comment(
        self,
        comment_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Comment, RawError]:
        """Get fields on an Instagram comment.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{comment_id}"),
            path_params=[param[str]("comment_id", comment_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[Comment],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_comment_replies(
        self,
        comment_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentList, RawError]:
        """Get replies to a comment.

        Args:
            comment_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{comment_id}/replies"),
            path_params=[param[str]("comment_id", comment_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[CommentList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_media_comments(
        self,
        media_id: str,
        access_token: str,
        *,
        fields: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentList, RawError]:
        """Get comments on an Instagram media object.

        Args:
            media_id: Value sent with the request.
            access_token: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{media_id}/comments"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("access_token", access_token), param[str | None]("fields", fields)],
            decoder=async_json_decoder[CommentList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def hide_comment(
        self,
        comment_id: str,
        *,
        body: Request | RequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, RawError]:
        """Hide or unhide a comment on your media.

        Args:
            comment_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{comment_id}"),
            path_params=[param[str]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Request | RequestDict | None](body),
            decoder=async_json_decoder[SuccessResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
