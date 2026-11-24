from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.post_create_error import PostCreateErrorBody, post_create_error_mapper
from ..errors.post_delete_error import PostDeleteErrorBody, post_delete_error_mapper
from ..errors.post_get_by_reference_key_error import (
    PostGetByReferenceKeyErrorBody,
    post_get_by_reference_key_error_mapper,
)
from ..errors.post_get_error import PostGetErrorBody, post_get_error_mapper
from ..errors.post_get_list_error import PostGetListErrorBody, post_get_list_error_mapper
from ..errors.post_get_reconnect_social_account_candidates_error import (
    PostGetReconnectSocialAccountCandidatesErrorBody,
    post_get_reconnect_social_account_candidates_error_mapper,
)
from ..errors.post_reconnect_social_account_error import (
    PostReconnectSocialAccountErrorBody,
    post_reconnect_social_account_error_mapper,
)
from ..errors.post_retry_error import PostRetryErrorBody, post_retry_error_mapper
from ..errors.post_update_error import PostUpdateErrorBody, post_update_error_mapper
from ..models.api_v1_post_reconnect_social_account_candidates_response import (
    ApiV1PostReconnectSocialAccountCandidatesResponse,
)
from ..models.api_v1_post_reconnect_social_account_request import (
    ApiV1PostReconnectSocialAccountRequest,
    ApiV1PostReconnectSocialAccountRequestDict,
)
from ..models.api_v1_post_reconnect_social_account_response import ApiV1PostReconnectSocialAccountResponse
from ..models.api_v1_post_reference_key_response import ApiV1PostReferenceKeyResponse
from ..models.api_v1_post_request import ApiV1PostRequest, ApiV1PostRequestDict
from ..models.api_v1_post_request1 import ApiV1PostRequest1, ApiV1PostRequest1Dict
from ..models.api_v1_post_response import ApiV1PostResponse
from ..models.api_v1_post_response1 import ApiV1PostResponse1
from ..models.api_v1_post_response2 import ApiV1PostResponse2
from ..models.api_v1_post_response3 import ApiV1PostResponse3
from ..models.api_v1_post_retry_response import ApiV1PostRetryResponse
from ..models.enums.order import OrderOrStr
from ..models.enums.order_by_bundle_social_post_api import OrderByBundleSocialPostApiOrStr
from ..models.enums.platform_bundle_social_post_api import PlatformBundleSocialPostApiOrStr
from ..models.enums.status import StatusOrStr
from ..models.enums.type import TypeOrStr
from ..server.server import Server


class PostApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PostApiWithRawResponse(client, server, auth)

    def post_create(
        self,
        *,
        body: ApiV1PostRequest1 | ApiV1PostRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostResponse1:
        """Schedule or immediately publish a post to one or more connected social accounts in a single request. Supply
        shared content plus optional per-platform overrides for captions, media, and platform-specific options.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post409Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 |
                ApiV1Post502Error1 | ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_create(body=body, request_options=request_options))

    def post_delete(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostResponse2:
        """Permanently delete a post from bundle.social. Deleting a scheduled post cancels it; deleting an
        already-published post does not remove it from the social platform.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 | ApiV1Post502Error1 |
                ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_delete(id_, request_options=request_options))

    def post_get(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostResponse:
        """Retrieve a single post by ID, including its per-platform status, scheduled time, media, and any publishing
        errors.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 | ApiV1Post502Error1 |
                ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_get(id_, request_options=request_options))

    def post_get_by_reference_key(
        self, reference_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1PostReferenceKeyResponse:
        """Retrieve a single post using your own reference key instead of the bundle.social post ID. Useful when you
        store your own identifier on create and want to look the post up later without keeping a mapping table.

        Args:
            reference_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostReferenceKey400Error1 |
                ApiV1PostReferenceKey401Error1 | ApiV1PostReferenceKey403Error1 | ApiV1PostReferenceKey404Error1 |
                ApiV1PostReferenceKey429Error1 | ApiV1PostReferenceKey500Error1 | ApiV1PostReferenceKey502Error1 |
                ApiV1PostReferenceKey503Error1 | ApiV1PostReferenceKey504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_get_by_reference_key(reference_key, request_options=request_options))

    def post_get_list(
        self,
        team_id: str,
        *,
        status: StatusOrStr | None = None,
        order_by: OrderByBundleSocialPostApiOrStr | None = None,
        order: OrderOrStr | None = None,
        q: str | None = None,
        platforms: list[PlatformBundleSocialPostApiOrStr] | None = None,
        post_date_from: RFC3339DateTime | None = None,
        post_date_to: RFC3339DateTime | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostResponse3:
        """List and filter posts across a team by status, platform, or date range with pagination. Use this to build a
        content calendar or reconcile your own database with bundle.social.

        Args:
            team_id: Value sent with the request.
            status: Value sent with the request.
            order_by: Value sent with the request.
            order: Value sent with the request.
            q: Value sent with the request.
            platforms: Value sent with the request.
            post_date_from: Value sent with the request.
            post_date_to: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 | ApiV1Post502Error1 |
                ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_get_list(
                team_id,
                status=status,
                order_by=order_by,
                order=order,
                q=q,
                platforms=platforms,
                post_date_from=post_date_from,
                post_date_to=post_date_to,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    def post_get_reconnect_social_account_candidates(
        self,
        team_id: str,
        type_: TypeOrStr,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostReconnectSocialAccountCandidatesResponse:
        """List posts that lost their link to a social account after a disconnect, and that can be reattached to a newly
        connected account of the same platform.

        Args:
            team_id: Value sent with the request.
            type_: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1PostReconnectSocialAccountCandidates400Error1 |
                ApiV1PostReconnectSocialAccountCandidates401Error1 | ApiV1PostReconnectSocialAccountCandidates403Error1
                | ApiV1PostReconnectSocialAccountCandidates404Error1 |
                ApiV1PostReconnectSocialAccountCandidates429Error1 | ApiV1PostReconnectSocialAccountCandidates500Error1
                | ApiV1PostReconnectSocialAccountCandidates502Error1 |
                ApiV1PostReconnectSocialAccountCandidates503Error1 | ApiV1PostReconnectSocialAccountCandidates504Error1
                | RawError``."""
        return unwrap(
            self._with_raw_response.post_get_reconnect_social_account_candidates(
                team_id, type_, offset=offset, limit=limit, request_options=request_options
            ),
        )

    def post_reconnect_social_account(
        self,
        *,
        body: ApiV1PostReconnectSocialAccountRequest | ApiV1PostReconnectSocialAccountRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostReconnectSocialAccountResponse:
        """Reattach a newly connected social account to posts that were orphaned when the previous account was
        disconnected, so scheduled posts publish instead of failing.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostReconnectSocialAccount400Error1 |
                ApiV1PostReconnectSocialAccount401Error1 | ApiV1PostReconnectSocialAccount403Error1 |
                ApiV1PostReconnectSocialAccount404Error1 | ApiV1PostReconnectSocialAccount429Error1 |
                ApiV1PostReconnectSocialAccount500Error1 | ApiV1PostReconnectSocialAccount502Error1 |
                ApiV1PostReconnectSocialAccount503Error1 | ApiV1PostReconnectSocialAccount504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_reconnect_social_account(body=body, request_options=request_options))

    def post_retry(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1PostRetryResponse:
        """Re-attempt publishing a post that failed, for example after a token expired or a platform outage. Fix the
        underlying cause first, then retry.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostRetry400Error1 |
                ApiV1PostRetry401Error1 | ApiV1PostRetry403Error1 | ApiV1PostRetry404Error1 | ApiV1PostRetry429Error1 |
                ApiV1PostRetry500Error1 | ApiV1PostRetry502Error1 | ApiV1PostRetry503Error1 | ApiV1PostRetry504Error1 |
                RawError``."""
        return unwrap(self._with_raw_response.post_retry(id_, request_options=request_options))

    def post_update(
        self,
        id_: str,
        *,
        body: ApiV1PostRequest | ApiV1PostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostResponse1:
        """Change the content, media, scheduled time, or target platforms of a post that has not published yet. Only the
        fields you send are modified.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post409Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 |
                ApiV1Post502Error1 | ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_update(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> PostApiWithRawResponse:
        return self._with_raw_response


class AsyncPostApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPostApiWithRawResponse(client, server, auth)

    async def post_create(
        self,
        *,
        body: ApiV1PostRequest1 | ApiV1PostRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostResponse1:
        """Schedule or immediately publish a post to one or more connected social accounts in a single request. Supply
        shared content plus optional per-platform overrides for captions, media, and platform-specific options.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post409Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 |
                ApiV1Post502Error1 | ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_create(body=body, request_options=request_options))

    async def post_delete(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PostResponse2:
        """Permanently delete a post from bundle.social. Deleting a scheduled post cancels it; deleting an
        already-published post does not remove it from the social platform.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 | ApiV1Post502Error1 |
                ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_delete(id_, request_options=request_options))

    async def post_get(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PostResponse:
        """Retrieve a single post by ID, including its per-platform status, scheduled time, media, and any publishing
        errors.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 | ApiV1Post502Error1 |
                ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_get(id_, request_options=request_options))

    async def post_get_by_reference_key(
        self, reference_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PostReferenceKeyResponse:
        """Retrieve a single post using your own reference key instead of the bundle.social post ID. Useful when you
        store your own identifier on create and want to look the post up later without keeping a mapping table.

        Args:
            reference_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostReferenceKey400Error1 |
                ApiV1PostReferenceKey401Error1 | ApiV1PostReferenceKey403Error1 | ApiV1PostReferenceKey404Error1 |
                ApiV1PostReferenceKey429Error1 | ApiV1PostReferenceKey500Error1 | ApiV1PostReferenceKey502Error1 |
                ApiV1PostReferenceKey503Error1 | ApiV1PostReferenceKey504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_get_by_reference_key(reference_key, request_options=request_options)
        )

    async def post_get_list(
        self,
        team_id: str,
        *,
        status: StatusOrStr | None = None,
        order_by: OrderByBundleSocialPostApiOrStr | None = None,
        order: OrderOrStr | None = None,
        q: str | None = None,
        platforms: list[PlatformBundleSocialPostApiOrStr] | None = None,
        post_date_from: RFC3339DateTime | None = None,
        post_date_to: RFC3339DateTime | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostResponse3:
        """List and filter posts across a team by status, platform, or date range with pagination. Use this to build a
        content calendar or reconcile your own database with bundle.social.

        Args:
            team_id: Value sent with the request.
            status: Value sent with the request.
            order_by: Value sent with the request.
            order: Value sent with the request.
            q: Value sent with the request.
            platforms: Value sent with the request.
            post_date_from: Value sent with the request.
            post_date_to: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 | ApiV1Post502Error1 |
                ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_get_list(
                team_id,
                status=status,
                order_by=order_by,
                order=order,
                q=q,
                platforms=platforms,
                post_date_from=post_date_from,
                post_date_to=post_date_to,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def post_get_reconnect_social_account_candidates(
        self,
        team_id: str,
        type_: TypeOrStr,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostReconnectSocialAccountCandidatesResponse:
        """List posts that lost their link to a social account after a disconnect, and that can be reattached to a newly
        connected account of the same platform.

        Args:
            team_id: Value sent with the request.
            type_: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1PostReconnectSocialAccountCandidates400Error1 |
                ApiV1PostReconnectSocialAccountCandidates401Error1 | ApiV1PostReconnectSocialAccountCandidates403Error1
                | ApiV1PostReconnectSocialAccountCandidates404Error1 |
                ApiV1PostReconnectSocialAccountCandidates429Error1 | ApiV1PostReconnectSocialAccountCandidates500Error1
                | ApiV1PostReconnectSocialAccountCandidates502Error1 |
                ApiV1PostReconnectSocialAccountCandidates503Error1 | ApiV1PostReconnectSocialAccountCandidates504Error1
                | RawError``."""
        return unwrap(
            await self._with_raw_response.post_get_reconnect_social_account_candidates(
                team_id, type_, offset=offset, limit=limit, request_options=request_options
            ),
        )

    async def post_reconnect_social_account(
        self,
        *,
        body: ApiV1PostReconnectSocialAccountRequest | ApiV1PostReconnectSocialAccountRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostReconnectSocialAccountResponse:
        """Reattach a newly connected social account to posts that were orphaned when the previous account was
        disconnected, so scheduled posts publish instead of failing.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostReconnectSocialAccount400Error1 |
                ApiV1PostReconnectSocialAccount401Error1 | ApiV1PostReconnectSocialAccount403Error1 |
                ApiV1PostReconnectSocialAccount404Error1 | ApiV1PostReconnectSocialAccount429Error1 |
                ApiV1PostReconnectSocialAccount500Error1 | ApiV1PostReconnectSocialAccount502Error1 |
                ApiV1PostReconnectSocialAccount503Error1 | ApiV1PostReconnectSocialAccount504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_reconnect_social_account(body=body, request_options=request_options)
        )

    async def post_retry(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PostRetryResponse:
        """Re-attempt publishing a post that failed, for example after a token expired or a platform outage. Fix the
        underlying cause first, then retry.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostRetry400Error1 |
                ApiV1PostRetry401Error1 | ApiV1PostRetry403Error1 | ApiV1PostRetry404Error1 | ApiV1PostRetry429Error1 |
                ApiV1PostRetry500Error1 | ApiV1PostRetry502Error1 | ApiV1PostRetry503Error1 | ApiV1PostRetry504Error1 |
                RawError``."""
        return unwrap(await self._with_raw_response.post_retry(id_, request_options=request_options))

    async def post_update(
        self,
        id_: str,
        *,
        body: ApiV1PostRequest | ApiV1PostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostResponse1:
        """Change the content, media, scheduled time, or target platforms of a post that has not published yet. Only the
        fields you send are modified.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is ``ApiV1Post400Error1 | ApiV1Post401Error1 |
                ApiV1Post403Error1 | ApiV1Post404Error1 | ApiV1Post409Error1 | ApiV1Post429Error1 | ApiV1Post500Error1 |
                ApiV1Post502Error1 | ApiV1Post503Error1 | ApiV1Post504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_update(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPostApiWithRawResponse:
        return self._with_raw_response


class PostApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_create(
        self,
        *,
        body: ApiV1PostRequest1 | ApiV1PostRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostResponse1, PostCreateErrorBody]:
        """Schedule or immediately publish a post to one or more connected social accounts in a single request. Supply
        shared content plus optional per-platform overrides for captions, media, and platform-specific options.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostRequest1 | ApiV1PostRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostResponse1],
            error_mapper=post_create_error_mapper,
            request_options=request_options,
        )

    def post_delete(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostResponse2, PostDeleteErrorBody]:
        """Permanently delete a post from bundle.social. Deleting a scheduled post cancels it; deleting an
        already-published post does not remove it from the social platform.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/post/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostResponse2],
            error_mapper=post_delete_error_mapper,
            request_options=request_options,
        )

    def post_get(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostResponse, PostGetErrorBody]:
        """Retrieve a single post by ID, including its per-platform status, scheduled time, media, and any publishing
        errors.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostResponse],
            error_mapper=post_get_error_mapper,
            request_options=request_options,
        )

    def post_get_by_reference_key(
        self, reference_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostReferenceKeyResponse, PostGetByReferenceKeyErrorBody]:
        """Retrieve a single post using your own reference key instead of the bundle.social post ID. Useful when you
        store your own identifier on create and want to look the post up later without keeping a mapping table.

        Args:
            reference_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post/reference-key/{referenceKey}"),
            path_params=[param[str]("referenceKey", reference_key)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostReferenceKeyResponse],
            error_mapper=post_get_by_reference_key_error_mapper,
            request_options=request_options,
        )

    def post_get_list(
        self,
        team_id: str,
        *,
        status: StatusOrStr | None = None,
        order_by: OrderByBundleSocialPostApiOrStr | None = None,
        order: OrderOrStr | None = None,
        q: str | None = None,
        platforms: list[PlatformBundleSocialPostApiOrStr] | None = None,
        post_date_from: RFC3339DateTime | None = None,
        post_date_to: RFC3339DateTime | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostResponse3, PostGetListErrorBody]:
        """List and filter posts across a team by status, platform, or date range with pagination. Use this to build a
        content calendar or reconcile your own database with bundle.social.

        Args:
            team_id: Value sent with the request.
            status: Value sent with the request.
            order_by: Value sent with the request.
            order: Value sent with the request.
            q: Value sent with the request.
            platforms: Value sent with the request.
            post_date_from: Value sent with the request.
            post_date_to: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post/"),
            query_params=[
                param[str]("teamId", team_id),
                param[StatusOrStr | None]("status", status),
                param[OrderByBundleSocialPostApiOrStr | None]("orderBy", order_by),
                param[OrderOrStr | None]("order", order),
                param[str | None]("q", q),
                param[list[PlatformBundleSocialPostApiOrStr] | None]("platforms", platforms),
                param[RFC3339DateTime | None]("postDateFrom", post_date_from),
                param[RFC3339DateTime | None]("postDateTo", post_date_to),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostResponse3],
            error_mapper=post_get_list_error_mapper,
            request_options=request_options,
        )

    def post_get_reconnect_social_account_candidates(
        self,
        team_id: str,
        type_: TypeOrStr,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostReconnectSocialAccountCandidatesResponse, PostGetReconnectSocialAccountCandidatesErrorBody]:
        """List posts that lost their link to a social account after a disconnect, and that can be reattached to a newly
        connected account of the same platform.

        Args:
            team_id: Value sent with the request.
            type_: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post/reconnect-social-account/candidates"),
            query_params=[
                param[str]("teamId", team_id),
                param[TypeOrStr]("type", type_),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostReconnectSocialAccountCandidatesResponse],
            error_mapper=post_get_reconnect_social_account_candidates_error_mapper,
            request_options=request_options,
        )

    def post_reconnect_social_account(
        self,
        *,
        body: ApiV1PostReconnectSocialAccountRequest | ApiV1PostReconnectSocialAccountRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostReconnectSocialAccountResponse, PostReconnectSocialAccountErrorBody]:
        """Reattach a newly connected social account to posts that were orphaned when the previous account was
        disconnected, so scheduled posts publish instead of failing.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post/reconnect-social-account"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostReconnectSocialAccountRequest | ApiV1PostReconnectSocialAccountRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostReconnectSocialAccountResponse],
            error_mapper=post_reconnect_social_account_error_mapper,
            request_options=request_options,
        )

    def post_retry(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostRetryResponse, PostRetryErrorBody]:
        """Re-attempt publishing a post that failed, for example after a token expired or a platform outage. Fix the
        underlying cause first, then retry.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post/{id}/retry"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostRetryResponse],
            error_mapper=post_retry_error_mapper,
            request_options=request_options,
        )

    def post_update(
        self,
        id_: str,
        *,
        body: ApiV1PostRequest | ApiV1PostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostResponse1, PostUpdateErrorBody]:
        """Change the content, media, scheduled time, or target platforms of a post that has not published yet. Only the
        fields you send are modified.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/post/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostRequest | ApiV1PostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostResponse1],
            error_mapper=post_update_error_mapper,
            request_options=request_options,
        )


class AsyncPostApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_create(
        self,
        *,
        body: ApiV1PostRequest1 | ApiV1PostRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostResponse1, PostCreateErrorBody]:
        """Schedule or immediately publish a post to one or more connected social accounts in a single request. Supply
        shared content plus optional per-platform overrides for captions, media, and platform-specific options.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostRequest1 | ApiV1PostRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostResponse1],
            error_mapper=post_create_error_mapper,
            request_options=request_options,
        )

    async def post_delete(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostResponse2, PostDeleteErrorBody]:
        """Permanently delete a post from bundle.social. Deleting a scheduled post cancels it; deleting an
        already-published post does not remove it from the social platform.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/post/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostResponse2],
            error_mapper=post_delete_error_mapper,
            request_options=request_options,
        )

    async def post_get(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostResponse, PostGetErrorBody]:
        """Retrieve a single post by ID, including its per-platform status, scheduled time, media, and any publishing
        errors.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostResponse],
            error_mapper=post_get_error_mapper,
            request_options=request_options,
        )

    async def post_get_by_reference_key(
        self, reference_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostReferenceKeyResponse, PostGetByReferenceKeyErrorBody]:
        """Retrieve a single post using your own reference key instead of the bundle.social post ID. Useful when you
        store your own identifier on create and want to look the post up later without keeping a mapping table.

        Args:
            reference_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post/reference-key/{referenceKey}"),
            path_params=[param[str]("referenceKey", reference_key)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostReferenceKeyResponse],
            error_mapper=post_get_by_reference_key_error_mapper,
            request_options=request_options,
        )

    async def post_get_list(
        self,
        team_id: str,
        *,
        status: StatusOrStr | None = None,
        order_by: OrderByBundleSocialPostApiOrStr | None = None,
        order: OrderOrStr | None = None,
        q: str | None = None,
        platforms: list[PlatformBundleSocialPostApiOrStr] | None = None,
        post_date_from: RFC3339DateTime | None = None,
        post_date_to: RFC3339DateTime | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostResponse3, PostGetListErrorBody]:
        """List and filter posts across a team by status, platform, or date range with pagination. Use this to build a
        content calendar or reconcile your own database with bundle.social.

        Args:
            team_id: Value sent with the request.
            status: Value sent with the request.
            order_by: Value sent with the request.
            order: Value sent with the request.
            q: Value sent with the request.
            platforms: Value sent with the request.
            post_date_from: Value sent with the request.
            post_date_to: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post/"),
            query_params=[
                param[str]("teamId", team_id),
                param[StatusOrStr | None]("status", status),
                param[OrderByBundleSocialPostApiOrStr | None]("orderBy", order_by),
                param[OrderOrStr | None]("order", order),
                param[str | None]("q", q),
                param[list[PlatformBundleSocialPostApiOrStr] | None]("platforms", platforms),
                param[RFC3339DateTime | None]("postDateFrom", post_date_from),
                param[RFC3339DateTime | None]("postDateTo", post_date_to),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostResponse3],
            error_mapper=post_get_list_error_mapper,
            request_options=request_options,
        )

    async def post_get_reconnect_social_account_candidates(
        self,
        team_id: str,
        type_: TypeOrStr,
        *,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostReconnectSocialAccountCandidatesResponse, PostGetReconnectSocialAccountCandidatesErrorBody]:
        """List posts that lost their link to a social account after a disconnect, and that can be reattached to a newly
        connected account of the same platform.

        Args:
            team_id: Value sent with the request.
            type_: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post/reconnect-social-account/candidates"),
            query_params=[
                param[str]("teamId", team_id),
                param[TypeOrStr]("type", type_),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostReconnectSocialAccountCandidatesResponse],
            error_mapper=post_get_reconnect_social_account_candidates_error_mapper,
            request_options=request_options,
        )

    async def post_reconnect_social_account(
        self,
        *,
        body: ApiV1PostReconnectSocialAccountRequest | ApiV1PostReconnectSocialAccountRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostReconnectSocialAccountResponse, PostReconnectSocialAccountErrorBody]:
        """Reattach a newly connected social account to posts that were orphaned when the previous account was
        disconnected, so scheduled posts publish instead of failing.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post/reconnect-social-account"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostReconnectSocialAccountRequest | ApiV1PostReconnectSocialAccountRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostReconnectSocialAccountResponse],
            error_mapper=post_reconnect_social_account_error_mapper,
            request_options=request_options,
        )

    async def post_retry(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostRetryResponse, PostRetryErrorBody]:
        """Re-attempt publishing a post that failed, for example after a token expired or a platform outage. Fix the
        underlying cause first, then retry.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post/{id}/retry"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostRetryResponse],
            error_mapper=post_retry_error_mapper,
            request_options=request_options,
        )

    async def post_update(
        self,
        id_: str,
        *,
        body: ApiV1PostRequest | ApiV1PostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostResponse1, PostUpdateErrorBody]:
        """Change the content, media, scheduled time, or target platforms of a post that has not published yet. Only the
        fields you send are modified.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/post/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostRequest | ApiV1PostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostResponse1],
            error_mapper=post_update_error_mapper,
            request_options=request_options,
        )
