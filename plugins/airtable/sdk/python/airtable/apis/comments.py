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
from ..errors.create_comment_error import CreateCommentErrorBody, create_comment_error_mapper
from ..errors.delete_comment_error import DeleteCommentErrorBody, delete_comment_error_mapper
from ..errors.list_comments_error import ListCommentsErrorBody, list_comments_error_mapper
from ..errors.update_comment_error import UpdateCommentErrorBody, update_comment_error_mapper
from ..models.comment import Comment
from ..models.comment_list import CommentList
from ..models.record_id_comments_comment_id_request import (
    RecordIdCommentsCommentIdRequest,
    RecordIdCommentsCommentIdRequestDict,
)
from ..models.record_id_comments_comment_id_response import RecordIdCommentsCommentIdResponse
from ..models.record_id_comments_request import RecordIdCommentsRequest, RecordIdCommentsRequestDict
from ..server.server import Server


class Comments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CommentsWithRawResponse(client, server, auth)

    def create_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdCommentsRequest | RecordIdCommentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Comment:
        """Creates a new comment on the specified record. Comments can include user mentions using the @[usrXXXXXXXX]
        syntax. Requires OAuth authentication with the comment:write scope.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created comment.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.create_comment(
                base_id, table_id_or_name, record_id, body, request_options=request_options
            ),
        )

    def delete_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        comment_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecordIdCommentsCommentIdResponse:
        """Deletes a comment from a record. Only the author of the comment can delete it.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            comment_id: The unique identifier of the comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Confirmation that the comment was deleted.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_comment(
                base_id, table_id_or_name, record_id, comment_id, request_options=request_options
            ),
        )

    def list_comments(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        offset: str | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CommentList:
        """Returns a paginated list of comments on the specified record. Comments are returned in reverse chronological
        order.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            offset: Pagination cursor from a previous response to fetch the next page.
            page_size: The number of comments to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of comments.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_comments(
                base_id,
                table_id_or_name,
                record_id,
                offset=offset,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    def update_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        comment_id: str,
        body: RecordIdCommentsCommentIdRequest | RecordIdCommentsCommentIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Comment:
        """Updates the text of an existing comment on a record. Only the author of the comment can update it.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            comment_id: The unique identifier of the comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated comment.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_comment(
                base_id, table_id_or_name, record_id, comment_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CommentsWithRawResponse:
        return self._with_raw_response


class AsyncComments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCommentsWithRawResponse(client, server, auth)

    async def create_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdCommentsRequest | RecordIdCommentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Comment:
        """Creates a new comment on the specified record. Comments can include user mentions using the @[usrXXXXXXXX]
        syntax. Requires OAuth authentication with the comment:write scope.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created comment.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_comment(
                base_id, table_id_or_name, record_id, body, request_options=request_options
            ),
        )

    async def delete_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        comment_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecordIdCommentsCommentIdResponse:
        """Deletes a comment from a record. Only the author of the comment can delete it.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            comment_id: The unique identifier of the comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Confirmation that the comment was deleted.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_comment(
                base_id, table_id_or_name, record_id, comment_id, request_options=request_options
            ),
        )

    async def list_comments(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        offset: str | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommentList:
        """Returns a paginated list of comments on the specified record. Comments are returned in reverse chronological
        order.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            offset: Pagination cursor from a previous response to fetch the next page.
            page_size: The number of comments to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of comments.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_comments(
                base_id,
                table_id_or_name,
                record_id,
                offset=offset,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    async def update_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        comment_id: str,
        body: RecordIdCommentsCommentIdRequest | RecordIdCommentsCommentIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Comment:
        """Updates the text of an existing comment on a record. Only the author of the comment can update it.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            comment_id: The unique identifier of the comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated comment.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_comment(
                base_id, table_id_or_name, record_id, comment_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCommentsWithRawResponse:
        return self._with_raw_response


class CommentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdCommentsRequest | RecordIdCommentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Comment, CreateCommentErrorBody]:
        """Creates a new comment on the specified record. Comments can include user mentions using the @[usrXXXXXXXX]
        syntax. Requires OAuth authentication with the comment:write scope.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}/comments"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordIdCommentsRequest | RecordIdCommentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Comment],
            error_mapper=create_comment_error_mapper,
            request_options=request_options,
        )

    def delete_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        comment_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordIdCommentsCommentIdResponse, DeleteCommentErrorBody]:
        """Deletes a comment from a record. Only the author of the comment can delete it.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            comment_id: The unique identifier of the comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
                param[str]("commentId", comment_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[RecordIdCommentsCommentIdResponse],
            error_mapper=delete_comment_error_mapper,
            request_options=request_options,
        )

    def list_comments(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        offset: str | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentList, ListCommentsErrorBody]:
        """Returns a paginated list of comments on the specified record. Comments are returned in reverse chronological
        order.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            offset: Pagination cursor from a previous response to fetch the next page.
            page_size: The number of comments to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}/comments"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            query_params=[param[str | None]("offset", offset), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CommentList],
            error_mapper=list_comments_error_mapper,
            request_options=request_options,
        )

    def update_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        comment_id: str,
        body: RecordIdCommentsCommentIdRequest | RecordIdCommentsCommentIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Comment, UpdateCommentErrorBody]:
        """Updates the text of an existing comment on a record. Only the author of the comment can update it.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            comment_id: The unique identifier of the comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
                param[str]("commentId", comment_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordIdCommentsCommentIdRequest | RecordIdCommentsCommentIdRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Comment],
            error_mapper=update_comment_error_mapper,
            request_options=request_options,
        )


class AsyncCommentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdCommentsRequest | RecordIdCommentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Comment, CreateCommentErrorBody]:
        """Creates a new comment on the specified record. Comments can include user mentions using the @[usrXXXXXXXX]
        syntax. Requires OAuth authentication with the comment:write scope.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}/comments"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordIdCommentsRequest | RecordIdCommentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Comment],
            error_mapper=create_comment_error_mapper,
            request_options=request_options,
        )

    async def delete_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        comment_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordIdCommentsCommentIdResponse, DeleteCommentErrorBody]:
        """Deletes a comment from a record. Only the author of the comment can delete it.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            comment_id: The unique identifier of the comment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
                param[str]("commentId", comment_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[RecordIdCommentsCommentIdResponse],
            error_mapper=delete_comment_error_mapper,
            request_options=request_options,
        )

    async def list_comments(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        offset: str | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentList, ListCommentsErrorBody]:
        """Returns a paginated list of comments on the specified record. Comments are returned in reverse chronological
        order.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            offset: Pagination cursor from a previous response to fetch the next page.
            page_size: The number of comments to return per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}/comments"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            query_params=[param[str | None]("offset", offset), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CommentList],
            error_mapper=list_comments_error_mapper,
            request_options=request_options,
        )

    async def update_comment(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        comment_id: str,
        body: RecordIdCommentsCommentIdRequest | RecordIdCommentsCommentIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Comment, UpdateCommentErrorBody]:
        """Updates the text of an existing comment on a record. Only the author of the comment can update it.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            comment_id: The unique identifier of the comment.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
                param[str]("commentId", comment_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordIdCommentsCommentIdRequest | RecordIdCommentsCommentIdRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Comment],
            error_mapper=update_comment_error_mapper,
            request_options=request_options,
        )
