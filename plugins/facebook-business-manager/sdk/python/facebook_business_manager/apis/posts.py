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
from ..errors.create_page_post_error import CreatePagePostErrorBody, create_page_post_error_mapper
from ..errors.delete_post_error import DeletePostErrorBody, delete_post_error_mapper
from ..errors.get_page_feed_error import GetPageFeedErrorBody, get_page_feed_error_mapper
from ..errors.get_post_error import GetPostErrorBody, get_post_error_mapper
from ..errors.update_post_error import UpdatePostErrorBody, update_post_error_mapper
from ..models.create_response import CreateResponse
from ..models.post import Post
from ..models.post_create import PostCreate, PostCreateDict
from ..models.post_list import PostList
from ..models.request import Request, RequestDict
from ..models.success_response_facebook_business_manager_facebook_pages_comments_api import (
    SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi,
)
from ..server.server import Server


class Posts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PostsWithRawResponse(client, server, auth)

    def create_page_post(
        self, page_id: str, body: PostCreate | PostCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> CreateResponse:
        """Publishes a new post to the Facebook Page feed. Supports text posts, link shares, and scheduled posts.
        Requires a page access token with pages_manage_posts permission.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Post created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_page_post(page_id, body, request_options=request_options))

    def delete_post(
        self, post_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi:
        """Deletes a post from the Facebook Page. This action cannot be undone.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Post deleted successfully

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_post(post_id, request_options=request_options))

    def get_page_feed(
        self,
        page_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostList:
        """Retrieves the feed of posts on a Facebook Page. Includes posts published by the page and posts by visitors if
        allowed.

        Args:
            page_id: The ID of the Facebook Page
            fields: Comma-separated list of fields to include in the response
            limit: Maximum number of objects to return per page
            after: Cursor for forward pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved page feed

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_page_feed(
                page_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    def get_post(
        self, post_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Post:
        """Retrieves the details of a specific post including message, attachments, reactions, and engagement counts.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            fields: Comma-separated list of fields to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved post details

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_post(post_id, fields=fields, request_options=request_options))

    def update_post(
        self, post_id: str, body: Request | RequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi:
        """Updates an existing post on the Page. Only the message field can be updated after publishing.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Post updated successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_post(post_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PostsWithRawResponse:
        return self._with_raw_response


class AsyncPosts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPostsWithRawResponse(client, server, auth)

    async def create_page_post(
        self,
        page_id: str,
        body: PostCreate | PostCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Publishes a new post to the Facebook Page feed. Supports text posts, link shares, and scheduled posts.
        Requires a page access token with pages_manage_posts permission.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Post created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_page_post(page_id, body, request_options=request_options))

    async def delete_post(
        self, post_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi:
        """Deletes a post from the Facebook Page. This action cannot be undone.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Post deleted successfully

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_post(post_id, request_options=request_options))

    async def get_page_feed(
        self,
        page_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostList:
        """Retrieves the feed of posts on a Facebook Page. Includes posts published by the page and posts by visitors if
        allowed.

        Args:
            page_id: The ID of the Facebook Page
            fields: Comma-separated list of fields to include in the response
            limit: Maximum number of objects to return per page
            after: Cursor for forward pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved page feed

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_page_feed(
                page_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    async def get_post(
        self, post_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Post:
        """Retrieves the details of a specific post including message, attachments, reactions, and engagement counts.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            fields: Comma-separated list of fields to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved post details

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_post(post_id, fields=fields, request_options=request_options))

    async def update_post(
        self, post_id: str, body: Request | RequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi:
        """Updates an existing post on the Page. Only the message field can be updated after publishing.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Post updated successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_post(post_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPostsWithRawResponse:
        return self._with_raw_response


class PostsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_page_post(
        self, page_id: str, body: PostCreate | PostCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreateResponse, CreatePagePostErrorBody]:
        """Publishes a new post to the Facebook Page feed. Supports text posts, link shares, and scheduled posts.
        Requires a page access token with pages_manage_posts permission.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{page_id}/feed"),
            path_params=[param[str]("page_id", page_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PostCreate | PostCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateResponse],
            error_mapper=create_page_post_error_mapper,
            request_options=request_options,
        )

    def delete_post(
        self, post_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, DeletePostErrorBody]:
        """Deletes a post from the Facebook Page. This action cannot be undone.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{post_id}"),
            path_params=[param[str]("post_id", post_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi],
            error_mapper=delete_post_error_mapper,
            request_options=request_options,
        )

    def get_page_feed(
        self,
        page_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostList, GetPageFeedErrorBody]:
        """Retrieves the feed of posts on a Facebook Page. Includes posts published by the page and posts by visitors if
        allowed.

        Args:
            page_id: The ID of the Facebook Page
            fields: Comma-separated list of fields to include in the response
            limit: Maximum number of objects to return per page
            after: Cursor for forward pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{page_id}/feed"),
            path_params=[param[str]("page_id", page_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PostList],
            error_mapper=get_page_feed_error_mapper,
            request_options=request_options,
        )

    def get_post(
        self, post_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Post, GetPostErrorBody]:
        """Retrieves the details of a specific post including message, attachments, reactions, and engagement counts.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            fields: Comma-separated list of fields to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{post_id}"),
            path_params=[param[str]("post_id", post_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Post],
            error_mapper=get_post_error_mapper,
            request_options=request_options,
        )

    def update_post(
        self, post_id: str, body: Request | RequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, UpdatePostErrorBody]:
        """Updates an existing post on the Page. Only the message field can be updated after publishing.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{post_id}"),
            path_params=[param[str]("post_id", post_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Request | RequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi],
            error_mapper=update_post_error_mapper,
            request_options=request_options,
        )


class AsyncPostsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_page_post(
        self,
        page_id: str,
        body: PostCreate | PostCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreatePagePostErrorBody]:
        """Publishes a new post to the Facebook Page feed. Supports text posts, link shares, and scheduled posts.
        Requires a page access token with pages_manage_posts permission.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{page_id}/feed"),
            path_params=[param[str]("page_id", page_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PostCreate | PostCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateResponse],
            error_mapper=create_page_post_error_mapper,
            request_options=request_options,
        )

    async def delete_post(
        self, post_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, DeletePostErrorBody]:
        """Deletes a post from the Facebook Page. This action cannot be undone.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{post_id}"),
            path_params=[param[str]("post_id", post_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi],
            error_mapper=delete_post_error_mapper,
            request_options=request_options,
        )

    async def get_page_feed(
        self,
        page_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostList, GetPageFeedErrorBody]:
        """Retrieves the feed of posts on a Facebook Page. Includes posts published by the page and posts by visitors if
        allowed.

        Args:
            page_id: The ID of the Facebook Page
            fields: Comma-separated list of fields to include in the response
            limit: Maximum number of objects to return per page
            after: Cursor for forward pagination
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{page_id}/feed"),
            path_params=[param[str]("page_id", page_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PostList],
            error_mapper=get_page_feed_error_mapper,
            request_options=request_options,
        )

    async def get_post(
        self, post_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Post, GetPostErrorBody]:
        """Retrieves the details of a specific post including message, attachments, reactions, and engagement counts.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            fields: Comma-separated list of fields to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{post_id}"),
            path_params=[param[str]("post_id", post_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Post],
            error_mapper=get_post_error_mapper,
            request_options=request_options,
        )

    async def update_post(
        self, post_id: str, body: Request | RequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, UpdatePostErrorBody]:
        """Updates an existing post on the Page. Only the message field can be updated after publishing.

        Args:
            post_id: The ID of the post (format PAGE_ID_POST_ID)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{post_id}"),
            path_params=[param[str]("post_id", post_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Request | RequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi],
            error_mapper=update_post_error_mapper,
            request_options=request_options,
        )
