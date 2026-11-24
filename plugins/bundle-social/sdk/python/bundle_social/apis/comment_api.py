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
from ..errors.comment_create_error import CommentCreateErrorBody, comment_create_error_mapper
from ..errors.comment_delete_error import CommentDeleteErrorBody, comment_delete_error_mapper
from ..errors.comment_get_error import CommentGetErrorBody, comment_get_error_mapper
from ..errors.comment_get_list_error import CommentGetListErrorBody, comment_get_list_error_mapper
from ..errors.comment_import_action_fetched_comment_error import (
    CommentImportActionFetchedCommentErrorBody,
    comment_import_action_fetched_comment_error_mapper,
)
from ..errors.comment_import_create_error import CommentImportCreateErrorBody, comment_import_create_error_mapper
from ..errors.comment_import_get_by_id_error import CommentImportGetByIdErrorBody, comment_import_get_by_id_error_mapper
from ..errors.comment_import_get_fetched_comments_error import (
    CommentImportGetFetchedCommentsErrorBody,
    comment_import_get_fetched_comments_error_mapper,
)
from ..errors.comment_import_get_list_error import CommentImportGetListErrorBody, comment_import_get_list_error_mapper
from ..errors.comment_retry_error import CommentRetryErrorBody, comment_retry_error_mapper
from ..errors.comment_update_error import CommentUpdateErrorBody, comment_update_error_mapper
from ..models.api_v1_comment_import_comments_action_request import (
    ApiV1CommentImportCommentsActionRequest,
    ApiV1CommentImportCommentsActionRequestDict,
)
from ..models.api_v1_comment_import_comments_action_response import ApiV1CommentImportCommentsActionResponse
from ..models.api_v1_comment_import_comments_response import ApiV1CommentImportCommentsResponse
from ..models.api_v1_comment_import_request import ApiV1CommentImportRequest, ApiV1CommentImportRequestDict
from ..models.api_v1_comment_import_response import ApiV1CommentImportResponse
from ..models.api_v1_comment_import_response1 import ApiV1CommentImportResponse1
from ..models.api_v1_comment_request import ApiV1CommentRequest, ApiV1CommentRequestDict
from ..models.api_v1_comment_request1 import ApiV1CommentRequest1, ApiV1CommentRequest1Dict
from ..models.api_v1_comment_response import ApiV1CommentResponse
from ..models.api_v1_comment_response3 import ApiV1CommentResponse3
from ..models.api_v1_comment_retry_response import ApiV1CommentRetryResponse
from ..models.enums.order import OrderOrStr
from ..models.enums.order_by import OrderByOrStr
from ..models.enums.platform6 import Platform6OrStr
from ..models.enums.platform_bundle_social_comment_api import PlatformBundleSocialCommentApiOrStr
from ..models.enums.status4 import Status4OrStr
from ..models.enums.status_bundle_social_comment_api import StatusBundleSocialCommentApiOrStr
from ..server.server import Server


class CommentApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CommentApiWithRawResponse(client, server, auth)

    def comment_create(
        self,
        *,
        body: ApiV1CommentRequest1 | ApiV1CommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CommentResponse:
        """Publish a comment or a reply on one of your published posts. Use it to schedule the first comment on
        Instagram or LinkedIn, or to respond to your audience programmatically.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.comment_create(body=body, request_options=request_options))

    def comment_delete(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentResponse:
        """Permanently delete a comment from bundle.social. Deleting a scheduled comment cancels it before it publishes.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.comment_delete(id_, request_options=request_options))

    def comment_get(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CommentResponse:
        """Retrieve a single comment you created through bundle.social, including its publishing status and any error
        details.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.comment_get(id_, request_options=request_options))

    def comment_get_list(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        status: Status4OrStr | None = None,
        order_by: OrderByOrStr | None = None,
        order: OrderOrStr | None = None,
        q: str | None = None,
        platforms: list[Platform6OrStr] | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CommentResponse3:
        """List and filter the comments your organization has created, with pagination. Use it to track which scheduled
        comments published successfully.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            status: Value sent with the request.
            order_by: Value sent with the request.
            order: Value sent with the request.
            q: Value sent with the request.
            platforms: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.comment_get_list(
                team_id,
                post_id=post_id,
                imported_post_id=imported_post_id,
                status=status,
                order_by=order_by,
                order=order,
                q=q,
                platforms=platforms,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    def comment_import_action_fetched_comment(
        self,
        comment_id: str,
        *,
        body: ApiV1CommentImportCommentsActionRequest | ApiV1CommentImportCommentsActionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CommentImportCommentsActionResponse:
        """Reply to, hide, like, or delete an imported comment directly on the social platform. Use this to moderate and
        engage without leaving your own app.

        Args:
            comment_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentImportCommentsAction400Error1 |
                ApiV1CommentImportCommentsAction401Error1 | ApiV1CommentImportCommentsAction403Error1 |
                ApiV1CommentImportCommentsAction404Error1 | ApiV1CommentImportCommentsAction429Error1 |
                ApiV1CommentImportCommentsAction500Error1 | ApiV1CommentImportCommentsAction502Error1 |
                ApiV1CommentImportCommentsAction503Error1 | ApiV1CommentImportCommentsAction504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.comment_import_action_fetched_comment(
                comment_id, body=body, request_options=request_options
            ),
        )

    def comment_import_create(
        self,
        *,
        body: ApiV1CommentImportRequest | ApiV1CommentImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CommentImportResponse:
        """Kick off an asynchronous import that pulls existing comments from a published post on the social platform
        into bundle.social so you can read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is ``ApiV1CommentImport400Error1 |
                ApiV1CommentImport401Error1 | ApiV1CommentImport403Error1 | ApiV1CommentImport404Error1 |
                ApiV1CommentImport409Error1 | ApiV1CommentImport429Error1 | ApiV1CommentImport500Error1 |
                ApiV1CommentImport502Error1 | ApiV1CommentImport503Error1 | ApiV1CommentImport504Error1 | RawError``."""
        return unwrap(self._with_raw_response.comment_import_create(body=body, request_options=request_options))

    def comment_import_get_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1CommentImportResponse:
        """Check the status, progress, and result of a single comment import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentImport400Error1 |
                ApiV1CommentImport401Error1 | ApiV1CommentImport403Error1 | ApiV1CommentImport404Error1 |
                ApiV1CommentImport429Error1 | ApiV1CommentImport500Error1 | ApiV1CommentImport502Error1 |
                ApiV1CommentImport503Error1 | ApiV1CommentImport504Error1 | RawError``."""
        return unwrap(self._with_raw_response.comment_import_get_by_id(import_id, request_options=request_options))

    def comment_import_get_fetched_comments(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        platform: PlatformBundleSocialCommentApiOrStr | None = None,
        social_account_id: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CommentImportCommentsResponse:
        """List the comments pulled in by a comment import, with pagination. Use this to read audience replies and
        decide which ones need a response.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentImportComments400Error1 |
                ApiV1CommentImportComments401Error1 | ApiV1CommentImportComments403Error1 |
                ApiV1CommentImportComments404Error1 | ApiV1CommentImportComments429Error1 |
                ApiV1CommentImportComments500Error1 | ApiV1CommentImportComments502Error1 |
                ApiV1CommentImportComments503Error1 | ApiV1CommentImportComments504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.comment_import_get_fetched_comments(
                team_id,
                post_id=post_id,
                imported_post_id=imported_post_id,
                platform=platform,
                social_account_id=social_account_id,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    def comment_import_get_list(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        status: StatusBundleSocialCommentApiOrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CommentImportResponse1:
        """List comment import jobs for a team so you can monitor which imports are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentImport400Error1 |
                ApiV1CommentImport401Error1 | ApiV1CommentImport403Error1 | ApiV1CommentImport404Error1 |
                ApiV1CommentImport429Error1 | ApiV1CommentImport500Error1 | ApiV1CommentImport502Error1 |
                ApiV1CommentImport503Error1 | ApiV1CommentImport504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.comment_import_get_list(
                team_id,
                post_id=post_id,
                imported_post_id=imported_post_id,
                status=status,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    def comment_retry(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1CommentRetryResponse:
        """Re-attempt publishing a comment that failed, for example after a token expired or a platform outage.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentRetry400Error1 |
                ApiV1CommentRetry401Error1 | ApiV1CommentRetry403Error1 | ApiV1CommentRetry404Error1 |
                ApiV1CommentRetry429Error1 | ApiV1CommentRetry500Error1 | ApiV1CommentRetry502Error1 |
                ApiV1CommentRetry503Error1 | ApiV1CommentRetry504Error1 | RawError``."""
        return unwrap(self._with_raw_response.comment_retry(id_, request_options=request_options))

    def comment_update(
        self,
        id_: str,
        *,
        body: ApiV1CommentRequest | ApiV1CommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CommentResponse:
        """Change the content or scheduled time of a comment that has not published yet.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.comment_update(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CommentApiWithRawResponse:
        return self._with_raw_response


class AsyncCommentApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCommentApiWithRawResponse(client, server, auth)

    async def comment_create(
        self,
        *,
        body: ApiV1CommentRequest1 | ApiV1CommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CommentResponse:
        """Publish a comment or a reply on one of your published posts. Use it to schedule the first comment on
        Instagram or LinkedIn, or to respond to your audience programmatically.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.comment_create(body=body, request_options=request_options))

    async def comment_delete(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CommentResponse:
        """Permanently delete a comment from bundle.social. Deleting a scheduled comment cancels it before it publishes.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.comment_delete(id_, request_options=request_options))

    async def comment_get(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CommentResponse:
        """Retrieve a single comment you created through bundle.social, including its publishing status and any error
        details.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.comment_get(id_, request_options=request_options))

    async def comment_get_list(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        status: Status4OrStr | None = None,
        order_by: OrderByOrStr | None = None,
        order: OrderOrStr | None = None,
        q: str | None = None,
        platforms: list[Platform6OrStr] | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CommentResponse3:
        """List and filter the comments your organization has created, with pagination. Use it to track which scheduled
        comments published successfully.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            status: Value sent with the request.
            order_by: Value sent with the request.
            order: Value sent with the request.
            q: Value sent with the request.
            platforms: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.comment_get_list(
                team_id,
                post_id=post_id,
                imported_post_id=imported_post_id,
                status=status,
                order_by=order_by,
                order=order,
                q=q,
                platforms=platforms,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def comment_import_action_fetched_comment(
        self,
        comment_id: str,
        *,
        body: ApiV1CommentImportCommentsActionRequest | ApiV1CommentImportCommentsActionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CommentImportCommentsActionResponse:
        """Reply to, hide, like, or delete an imported comment directly on the social platform. Use this to moderate and
        engage without leaving your own app.

        Args:
            comment_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentImportCommentsAction400Error1 |
                ApiV1CommentImportCommentsAction401Error1 | ApiV1CommentImportCommentsAction403Error1 |
                ApiV1CommentImportCommentsAction404Error1 | ApiV1CommentImportCommentsAction429Error1 |
                ApiV1CommentImportCommentsAction500Error1 | ApiV1CommentImportCommentsAction502Error1 |
                ApiV1CommentImportCommentsAction503Error1 | ApiV1CommentImportCommentsAction504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.comment_import_action_fetched_comment(
                comment_id, body=body, request_options=request_options
            ),
        )

    async def comment_import_create(
        self,
        *,
        body: ApiV1CommentImportRequest | ApiV1CommentImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CommentImportResponse:
        """Kick off an asynchronous import that pulls existing comments from a published post on the social platform
        into bundle.social so you can read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is ``ApiV1CommentImport400Error1 |
                ApiV1CommentImport401Error1 | ApiV1CommentImport403Error1 | ApiV1CommentImport404Error1 |
                ApiV1CommentImport409Error1 | ApiV1CommentImport429Error1 | ApiV1CommentImport500Error1 |
                ApiV1CommentImport502Error1 | ApiV1CommentImport503Error1 | ApiV1CommentImport504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.comment_import_create(body=body, request_options=request_options))

    async def comment_import_get_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CommentImportResponse:
        """Check the status, progress, and result of a single comment import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentImport400Error1 |
                ApiV1CommentImport401Error1 | ApiV1CommentImport403Error1 | ApiV1CommentImport404Error1 |
                ApiV1CommentImport429Error1 | ApiV1CommentImport500Error1 | ApiV1CommentImport502Error1 |
                ApiV1CommentImport503Error1 | ApiV1CommentImport504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.comment_import_get_by_id(import_id, request_options=request_options)
        )

    async def comment_import_get_fetched_comments(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        platform: PlatformBundleSocialCommentApiOrStr | None = None,
        social_account_id: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CommentImportCommentsResponse:
        """List the comments pulled in by a comment import, with pagination. Use this to read audience replies and
        decide which ones need a response.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentImportComments400Error1 |
                ApiV1CommentImportComments401Error1 | ApiV1CommentImportComments403Error1 |
                ApiV1CommentImportComments404Error1 | ApiV1CommentImportComments429Error1 |
                ApiV1CommentImportComments500Error1 | ApiV1CommentImportComments502Error1 |
                ApiV1CommentImportComments503Error1 | ApiV1CommentImportComments504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.comment_import_get_fetched_comments(
                team_id,
                post_id=post_id,
                imported_post_id=imported_post_id,
                platform=platform,
                social_account_id=social_account_id,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def comment_import_get_list(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        status: StatusBundleSocialCommentApiOrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CommentImportResponse1:
        """List comment import jobs for a team so you can monitor which imports are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentImport400Error1 |
                ApiV1CommentImport401Error1 | ApiV1CommentImport403Error1 | ApiV1CommentImport404Error1 |
                ApiV1CommentImport429Error1 | ApiV1CommentImport500Error1 | ApiV1CommentImport502Error1 |
                ApiV1CommentImport503Error1 | ApiV1CommentImport504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.comment_import_get_list(
                team_id,
                post_id=post_id,
                imported_post_id=imported_post_id,
                status=status,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def comment_retry(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CommentRetryResponse:
        """Re-attempt publishing a comment that failed, for example after a token expired or a platform outage.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1CommentRetry400Error1 |
                ApiV1CommentRetry401Error1 | ApiV1CommentRetry403Error1 | ApiV1CommentRetry404Error1 |
                ApiV1CommentRetry429Error1 | ApiV1CommentRetry500Error1 | ApiV1CommentRetry502Error1 |
                ApiV1CommentRetry503Error1 | ApiV1CommentRetry504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.comment_retry(id_, request_options=request_options))

    async def comment_update(
        self,
        id_: str,
        *,
        body: ApiV1CommentRequest | ApiV1CommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CommentResponse:
        """Change the content or scheduled time of a comment that has not published yet.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Comment400Error1 | ApiV1Comment401Error1 |
                ApiV1Comment403Error1 | ApiV1Comment404Error1 | ApiV1Comment429Error1 | ApiV1Comment500Error1 |
                ApiV1Comment502Error1 | ApiV1Comment503Error1 | ApiV1Comment504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.comment_update(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCommentApiWithRawResponse:
        return self._with_raw_response


class CommentApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def comment_create(
        self,
        *,
        body: ApiV1CommentRequest1 | ApiV1CommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentResponse, CommentCreateErrorBody]:
        """Publish a comment or a reply on one of your published posts. Use it to schedule the first comment on
        Instagram or LinkedIn, or to respond to your audience programmatically.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comment/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CommentRequest1 | ApiV1CommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentResponse],
            error_mapper=comment_create_error_mapper,
            request_options=request_options,
        )

    def comment_delete(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CommentResponse, CommentDeleteErrorBody]:
        """Permanently delete a comment from bundle.social. Deleting a scheduled comment cancels it before it publishes.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/comment/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentResponse],
            error_mapper=comment_delete_error_mapper,
            request_options=request_options,
        )

    def comment_get(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CommentResponse, CommentGetErrorBody]:
        """Retrieve a single comment you created through bundle.social, including its publishing status and any error
        details.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentResponse],
            error_mapper=comment_get_error_mapper,
            request_options=request_options,
        )

    def comment_get_list(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        status: Status4OrStr | None = None,
        order_by: OrderByOrStr | None = None,
        order: OrderOrStr | None = None,
        q: str | None = None,
        platforms: list[Platform6OrStr] | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentResponse3, CommentGetListErrorBody]:
        """List and filter the comments your organization has created, with pagination. Use it to track which scheduled
        comments published successfully.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            status: Value sent with the request.
            order_by: Value sent with the request.
            order: Value sent with the request.
            q: Value sent with the request.
            platforms: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("postId", post_id),
                param[str | None]("importedPostId", imported_post_id),
                param[Status4OrStr | None]("status", status),
                param[OrderByOrStr | None]("orderBy", order_by),
                param[OrderOrStr | None]("order", order),
                param[str | None]("q", q),
                param[list[Platform6OrStr] | None]("platforms", platforms),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentResponse3],
            error_mapper=comment_get_list_error_mapper,
            request_options=request_options,
        )

    def comment_import_action_fetched_comment(
        self,
        comment_id: str,
        *,
        body: ApiV1CommentImportCommentsActionRequest | ApiV1CommentImportCommentsActionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentImportCommentsActionResponse, CommentImportActionFetchedCommentErrorBody]:
        """Reply to, hide, like, or delete an imported comment directly on the social platform. Use this to moderate and
        engage without leaving your own app.

        Args:
            comment_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comment/import/comments/{commentId}/action"),
            path_params=[param[str]("commentId", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1CommentImportCommentsActionRequest | ApiV1CommentImportCommentsActionRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentImportCommentsActionResponse],
            error_mapper=comment_import_action_fetched_comment_error_mapper,
            request_options=request_options,
        )

    def comment_import_create(
        self,
        *,
        body: ApiV1CommentImportRequest | ApiV1CommentImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentImportResponse, CommentImportCreateErrorBody]:
        """Kick off an asynchronous import that pulls existing comments from a published post on the social platform
        into bundle.social so you can read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comment/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CommentImportRequest | ApiV1CommentImportRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentImportResponse],
            error_mapper=comment_import_create_error_mapper,
            request_options=request_options,
        )

    def comment_import_get_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CommentImportResponse, CommentImportGetByIdErrorBody]:
        """Check the status, progress, and result of a single comment import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentImportResponse],
            error_mapper=comment_import_get_by_id_error_mapper,
            request_options=request_options,
        )

    def comment_import_get_fetched_comments(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        platform: PlatformBundleSocialCommentApiOrStr | None = None,
        social_account_id: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentImportCommentsResponse, CommentImportGetFetchedCommentsErrorBody]:
        """List the comments pulled in by a comment import, with pagination. Use this to read audience replies and
        decide which ones need a response.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/import/comments"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("postId", post_id),
                param[str | None]("importedPostId", imported_post_id),
                param[PlatformBundleSocialCommentApiOrStr | None]("platform", platform),
                param[str | None]("socialAccountId", social_account_id),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentImportCommentsResponse],
            error_mapper=comment_import_get_fetched_comments_error_mapper,
            request_options=request_options,
        )

    def comment_import_get_list(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        status: StatusBundleSocialCommentApiOrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentImportResponse1, CommentImportGetListErrorBody]:
        """List comment import jobs for a team so you can monitor which imports are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/import"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("postId", post_id),
                param[str | None]("importedPostId", imported_post_id),
                param[StatusBundleSocialCommentApiOrStr | None]("status", status),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentImportResponse1],
            error_mapper=comment_import_get_list_error_mapper,
            request_options=request_options,
        )

    def comment_retry(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CommentRetryResponse, CommentRetryErrorBody]:
        """Re-attempt publishing a comment that failed, for example after a token expired or a platform outage.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comment/{id}/retry"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentRetryResponse],
            error_mapper=comment_retry_error_mapper,
            request_options=request_options,
        )

    def comment_update(
        self,
        id_: str,
        *,
        body: ApiV1CommentRequest | ApiV1CommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentResponse, CommentUpdateErrorBody]:
        """Change the content or scheduled time of a comment that has not published yet.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/comment/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CommentRequest | ApiV1CommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1CommentResponse],
            error_mapper=comment_update_error_mapper,
            request_options=request_options,
        )


class AsyncCommentApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def comment_create(
        self,
        *,
        body: ApiV1CommentRequest1 | ApiV1CommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentResponse, CommentCreateErrorBody]:
        """Publish a comment or a reply on one of your published posts. Use it to schedule the first comment on
        Instagram or LinkedIn, or to respond to your audience programmatically.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comment/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CommentRequest1 | ApiV1CommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentResponse],
            error_mapper=comment_create_error_mapper,
            request_options=request_options,
        )

    async def comment_delete(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CommentResponse, CommentDeleteErrorBody]:
        """Permanently delete a comment from bundle.social. Deleting a scheduled comment cancels it before it publishes.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/comment/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentResponse],
            error_mapper=comment_delete_error_mapper,
            request_options=request_options,
        )

    async def comment_get(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CommentResponse, CommentGetErrorBody]:
        """Retrieve a single comment you created through bundle.social, including its publishing status and any error
        details.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentResponse],
            error_mapper=comment_get_error_mapper,
            request_options=request_options,
        )

    async def comment_get_list(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        status: Status4OrStr | None = None,
        order_by: OrderByOrStr | None = None,
        order: OrderOrStr | None = None,
        q: str | None = None,
        platforms: list[Platform6OrStr] | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentResponse3, CommentGetListErrorBody]:
        """List and filter the comments your organization has created, with pagination. Use it to track which scheduled
        comments published successfully.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            status: Value sent with the request.
            order_by: Value sent with the request.
            order: Value sent with the request.
            q: Value sent with the request.
            platforms: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("postId", post_id),
                param[str | None]("importedPostId", imported_post_id),
                param[Status4OrStr | None]("status", status),
                param[OrderByOrStr | None]("orderBy", order_by),
                param[OrderOrStr | None]("order", order),
                param[str | None]("q", q),
                param[list[Platform6OrStr] | None]("platforms", platforms),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentResponse3],
            error_mapper=comment_get_list_error_mapper,
            request_options=request_options,
        )

    async def comment_import_action_fetched_comment(
        self,
        comment_id: str,
        *,
        body: ApiV1CommentImportCommentsActionRequest | ApiV1CommentImportCommentsActionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentImportCommentsActionResponse, CommentImportActionFetchedCommentErrorBody]:
        """Reply to, hide, like, or delete an imported comment directly on the social platform. Use this to moderate and
        engage without leaving your own app.

        Args:
            comment_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comment/import/comments/{commentId}/action"),
            path_params=[param[str]("commentId", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1CommentImportCommentsActionRequest | ApiV1CommentImportCommentsActionRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentImportCommentsActionResponse],
            error_mapper=comment_import_action_fetched_comment_error_mapper,
            request_options=request_options,
        )

    async def comment_import_create(
        self,
        *,
        body: ApiV1CommentImportRequest | ApiV1CommentImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentImportResponse, CommentImportCreateErrorBody]:
        """Kick off an asynchronous import that pulls existing comments from a published post on the social platform
        into bundle.social so you can read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comment/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CommentImportRequest | ApiV1CommentImportRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentImportResponse],
            error_mapper=comment_import_create_error_mapper,
            request_options=request_options,
        )

    async def comment_import_get_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CommentImportResponse, CommentImportGetByIdErrorBody]:
        """Check the status, progress, and result of a single comment import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentImportResponse],
            error_mapper=comment_import_get_by_id_error_mapper,
            request_options=request_options,
        )

    async def comment_import_get_fetched_comments(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        platform: PlatformBundleSocialCommentApiOrStr | None = None,
        social_account_id: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentImportCommentsResponse, CommentImportGetFetchedCommentsErrorBody]:
        """List the comments pulled in by a comment import, with pagination. Use this to read audience replies and
        decide which ones need a response.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/import/comments"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("postId", post_id),
                param[str | None]("importedPostId", imported_post_id),
                param[PlatformBundleSocialCommentApiOrStr | None]("platform", platform),
                param[str | None]("socialAccountId", social_account_id),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentImportCommentsResponse],
            error_mapper=comment_import_get_fetched_comments_error_mapper,
            request_options=request_options,
        )

    async def comment_import_get_list(
        self,
        team_id: str,
        *,
        post_id: str | None = None,
        imported_post_id: str | None = None,
        status: StatusBundleSocialCommentApiOrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentImportResponse1, CommentImportGetListErrorBody]:
        """List comment import jobs for a team so you can monitor which imports are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            post_id: Value sent with the request.
            imported_post_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/comment/import"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("postId", post_id),
                param[str | None]("importedPostId", imported_post_id),
                param[StatusBundleSocialCommentApiOrStr | None]("status", status),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentImportResponse1],
            error_mapper=comment_import_get_list_error_mapper,
            request_options=request_options,
        )

    async def comment_retry(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CommentRetryResponse, CommentRetryErrorBody]:
        """Re-attempt publishing a comment that failed, for example after a token expired or a platform outage.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/comment/{id}/retry"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentRetryResponse],
            error_mapper=comment_retry_error_mapper,
            request_options=request_options,
        )

    async def comment_update(
        self,
        id_: str,
        *,
        body: ApiV1CommentRequest | ApiV1CommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CommentResponse, CommentUpdateErrorBody]:
        """Change the content or scheduled time of a comment that has not published yet.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/comment/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CommentRequest | ApiV1CommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1CommentResponse],
            error_mapper=comment_update_error_mapper,
            request_options=request_options,
        )
