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
from ..errors.get_post_comments_error import GetPostCommentsErrorBody, get_post_comments_error_mapper
from ..models.comment_list import CommentList
from ..models.comments_request import CommentsRequest, CommentsRequestDict
from ..models.create_response import CreateResponse
from ..models.enums.filter import FilterOrStr
from ..models.enums.order import OrderOrStr
from ..models.success_response_facebook_business_manager_facebook_pages_comments_api import (
    SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi,
)
from ..server.server import Server


class CommentsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CommentsApiWithRawResponse(client, server, auth)

    def create_comment(
        self,
        post_id: str,
        body: CommentsRequest | CommentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Posts a comment on a Page post as the Page. Requires a page access token with pages_manage_engagement
        permission.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_comment(post_id, body, request_options=request_options))

    def delete_comment(
        self, comment_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi:
        """Deletes a comment from a Page post. The Page must own the comment or the post the comment is on.

        Args:
            comment_id: The ID of the comment to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment deleted successfully

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_comment(comment_id, request_options=request_options))

    def get_post_comments(
        self,
        post_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        filter_: FilterOrStr | None = None,
        order: OrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CommentList:
        """Retrieves comments on a specific post. Supports pagination and filtering by order.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            fields: Comma-separated list of fields to include in the response
            limit: Maximum number of objects to return per page
            after: Cursor for forward pagination
            filter_: Filter for comment type
            order: Order of comments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved comments

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_post_comments(
                post_id,
                fields=fields,
                limit=limit,
                after=after,
                filter_=filter_,
                order=order,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CommentsApiWithRawResponse:
        return self._with_raw_response


class AsyncCommentsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCommentsApiWithRawResponse(client, server, auth)

    async def create_comment(
        self,
        post_id: str,
        body: CommentsRequest | CommentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Posts a comment on a Page post as the Page. Requires a page access token with pages_manage_engagement
        permission.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_comment(post_id, body, request_options=request_options))

    async def delete_comment(
        self, comment_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi:
        """Deletes a comment from a Page post. The Page must own the comment or the post the comment is on.

        Args:
            comment_id: The ID of the comment to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment deleted successfully

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_comment(comment_id, request_options=request_options))

    async def get_post_comments(
        self,
        post_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        filter_: FilterOrStr | None = None,
        order: OrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommentList:
        """Retrieves comments on a specific post. Supports pagination and filtering by order.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            fields: Comma-separated list of fields to include in the response
            limit: Maximum number of objects to return per page
            after: Cursor for forward pagination
            filter_: Filter for comment type
            order: Order of comments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved comments

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_post_comments(
                post_id,
                fields=fields,
                limit=limit,
                after=after,
                filter_=filter_,
                order=order,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCommentsApiWithRawResponse:
        return self._with_raw_response


class CommentsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_comment(
        self,
        post_id: str,
        body: CommentsRequest | CommentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateCommentErrorBody]:
        """Posts a comment on a Page post as the Page. Requires a page access token with pages_manage_engagement
        permission.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{post_id}/comments"),
            path_params=[param[str]("post_id", post_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CommentsRequest | CommentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateResponse],
            error_mapper=create_comment_error_mapper,
            request_options=request_options,
        )

    def delete_comment(
        self, comment_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, DeleteCommentErrorBody]:
        """Deletes a comment from a Page post. The Page must own the comment or the post the comment is on.

        Args:
            comment_id: The ID of the comment to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{comment_id}"),
            path_params=[param[str]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi],
            error_mapper=delete_comment_error_mapper,
            request_options=request_options,
        )

    def get_post_comments(
        self,
        post_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        filter_: FilterOrStr | None = None,
        order: OrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentList, GetPostCommentsErrorBody]:
        """Retrieves comments on a specific post. Supports pagination and filtering by order.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            fields: Comma-separated list of fields to include in the response
            limit: Maximum number of objects to return per page
            after: Cursor for forward pagination
            filter_: Filter for comment type
            order: Order of comments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{post_id}/comments"),
            path_params=[param[str]("post_id", post_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
                param[FilterOrStr | None]("filter", filter_),
                param[OrderOrStr | None]("order", order),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CommentList],
            error_mapper=get_post_comments_error_mapper,
            request_options=request_options,
        )


class AsyncCommentsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_comment(
        self,
        post_id: str,
        body: CommentsRequest | CommentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateCommentErrorBody]:
        """Posts a comment on a Page post as the Page. Requires a page access token with pages_manage_engagement
        permission.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{post_id}/comments"),
            path_params=[param[str]("post_id", post_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CommentsRequest | CommentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateResponse],
            error_mapper=create_comment_error_mapper,
            request_options=request_options,
        )

    async def delete_comment(
        self, comment_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, DeleteCommentErrorBody]:
        """Deletes a comment from a Page post. The Page must own the comment or the post the comment is on.

        Args:
            comment_id: The ID of the comment to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{comment_id}"),
            path_params=[param[str]("comment_id", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi],
            error_mapper=delete_comment_error_mapper,
            request_options=request_options,
        )

    async def get_post_comments(
        self,
        post_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        filter_: FilterOrStr | None = None,
        order: OrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CommentList, GetPostCommentsErrorBody]:
        """Retrieves comments on a specific post. Supports pagination and filtering by order.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            fields: Comma-separated list of fields to include in the response
            limit: Maximum number of objects to return per page
            after: Cursor for forward pagination
            filter_: Filter for comment type
            order: Order of comments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{post_id}/comments"),
            path_params=[param[str]("post_id", post_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
                param[FilterOrStr | None]("filter", filter_),
                param[OrderOrStr | None]("order", order),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CommentList],
            error_mapper=get_post_comments_error_mapper,
            request_options=request_options,
        )
