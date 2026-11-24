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
from ..errors.post_import_create_error import PostImportCreateErrorBody, post_import_create_error_mapper
from ..errors.post_import_delete_imported_posts_error import (
    PostImportDeleteImportedPostsErrorBody,
    post_import_delete_imported_posts_error_mapper,
)
from ..errors.post_import_get_by_id_error import PostImportGetByIdErrorBody, post_import_get_by_id_error_mapper
from ..errors.post_import_get_imported_posts_error import (
    PostImportGetImportedPostsErrorBody,
    post_import_get_imported_posts_error_mapper,
)
from ..errors.post_import_get_status_error import PostImportGetStatusErrorBody, post_import_get_status_error_mapper
from ..errors.post_import_retry_import_error import (
    PostImportRetryImportErrorBody,
    post_import_retry_import_error_mapper,
)
from ..models.api_v1_post_history_import_posts_request import (
    ApiV1PostHistoryImportPostsRequest,
    ApiV1PostHistoryImportPostsRequestDict,
)
from ..models.api_v1_post_history_import_posts_response import ApiV1PostHistoryImportPostsResponse
from ..models.api_v1_post_history_import_posts_response1 import ApiV1PostHistoryImportPostsResponse1
from ..models.api_v1_post_history_import_request import ApiV1PostHistoryImportRequest, ApiV1PostHistoryImportRequestDict
from ..models.api_v1_post_history_import_response import ApiV1PostHistoryImportResponse
from ..models.api_v1_post_history_import_response1 import ApiV1PostHistoryImportResponse1
from ..models.api_v1_post_history_import_retry_request import (
    ApiV1PostHistoryImportRetryRequest,
    ApiV1PostHistoryImportRetryRequestDict,
)
from ..models.api_v1_post_history_import_retry_response import ApiV1PostHistoryImportRetryResponse
from ..models.enums.social_account_type_bundle_social_post_import_api import (
    SocialAccountTypeBundleSocialPostImportApiOrStr,
)
from ..server.server import Server


class PostImport:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PostImportWithRawResponse(client, server, auth)

    def post_import_create(
        self,
        *,
        body: ApiV1PostHistoryImportRequest | ApiV1PostHistoryImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportResponse:
        """Kick off an asynchronous import that backfills posts a social account published before it was connected to
        bundle.social, together with their analytics. Use it to get historical reporting from day one.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImport400Error1 |
                ApiV1PostHistoryImport401Error1 | ApiV1PostHistoryImport403Error1 | ApiV1PostHistoryImport404Error1 |
                ApiV1PostHistoryImport409Error1 | ApiV1PostHistoryImport429Error1 | ApiV1PostHistoryImport500Error1 |
                ApiV1PostHistoryImport502Error1 | ApiV1PostHistoryImport503Error1 | ApiV1PostHistoryImport504Error1 |
                RawError``."""
        return unwrap(self._with_raw_response.post_import_create(body=body, request_options=request_options))

    def post_import_delete_imported_posts(
        self,
        *,
        body: ApiV1PostHistoryImportPostsRequest | ApiV1PostHistoryImportPostsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportPostsResponse1:
        """Permanently delete up to 100 imported historical posts and their analytics in one request, freeing import
        capacity.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImportPosts400Error1 |
                ApiV1PostHistoryImportPosts401Error1 | ApiV1PostHistoryImportPosts403Error1 |
                ApiV1PostHistoryImportPosts404Error1 | ApiV1PostHistoryImportPosts429Error1 |
                ApiV1PostHistoryImportPosts500Error1 | ApiV1PostHistoryImportPosts502Error1 |
                ApiV1PostHistoryImportPosts503Error1 | ApiV1PostHistoryImportPosts504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_import_delete_imported_posts(body=body, request_options=request_options)
        )

    def post_import_get_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1PostHistoryImportResponse:
        """Check the status, progress, and result of a single post history import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImport400Error1 |
                ApiV1PostHistoryImport401Error1 | ApiV1PostHistoryImport403Error1 | ApiV1PostHistoryImport404Error1 |
                ApiV1PostHistoryImport429Error1 | ApiV1PostHistoryImport500Error1 | ApiV1PostHistoryImport502Error1 |
                ApiV1PostHistoryImport503Error1 | ApiV1PostHistoryImport504Error1 | RawError``."""
        return unwrap(self._with_raw_response.post_import_get_by_id(import_id, request_options=request_options))

    def post_import_get_imported_posts(
        self,
        team_id: str,
        social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportPostsResponse:
        """List the historical posts pulled in by an import, with their analytics and your remaining import capacity.
        Use it to report on performance from before the account was connected.

        Args:
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImportPosts400Error1 |
                ApiV1PostHistoryImportPosts401Error1 | ApiV1PostHistoryImportPosts403Error1 |
                ApiV1PostHistoryImportPosts404Error1 | ApiV1PostHistoryImportPosts429Error1 |
                ApiV1PostHistoryImportPosts500Error1 | ApiV1PostHistoryImportPosts502Error1 |
                ApiV1PostHistoryImportPosts503Error1 | ApiV1PostHistoryImportPosts504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_import_get_imported_posts(
                team_id, social_account_type, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def post_import_get_status(
        self,
        team_id: str,
        *,
        social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportResponse1:
        """List post history import jobs for a team so you can monitor which backfills are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImport400Error1 |
                ApiV1PostHistoryImport401Error1 | ApiV1PostHistoryImport403Error1 | ApiV1PostHistoryImport404Error1 |
                ApiV1PostHistoryImport429Error1 | ApiV1PostHistoryImport500Error1 | ApiV1PostHistoryImport502Error1 |
                ApiV1PostHistoryImport503Error1 | ApiV1PostHistoryImport504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_import_get_status(
                team_id, social_account_type=social_account_type, request_options=request_options
            ),
        )

    def post_import_retry_import(
        self,
        import_id: str,
        *,
        body: ApiV1PostHistoryImportRetryRequest | ApiV1PostHistoryImportRetryRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportRetryResponse:
        """Re-run a post history import that failed, for example after a token expired or the platform rate-limited the
        request.

        Args:
            import_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImportRetry400Error1 |
                ApiV1PostHistoryImportRetry401Error1 | ApiV1PostHistoryImportRetry403Error1 |
                ApiV1PostHistoryImportRetry404Error1 | ApiV1PostHistoryImportRetry429Error1 |
                ApiV1PostHistoryImportRetry500Error1 | ApiV1PostHistoryImportRetry502Error1 |
                ApiV1PostHistoryImportRetry503Error1 | ApiV1PostHistoryImportRetry504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_import_retry_import(import_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> PostImportWithRawResponse:
        return self._with_raw_response


class AsyncPostImport:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPostImportWithRawResponse(client, server, auth)

    async def post_import_create(
        self,
        *,
        body: ApiV1PostHistoryImportRequest | ApiV1PostHistoryImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportResponse:
        """Kick off an asynchronous import that backfills posts a social account published before it was connected to
        bundle.social, together with their analytics. Use it to get historical reporting from day one.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImport400Error1 |
                ApiV1PostHistoryImport401Error1 | ApiV1PostHistoryImport403Error1 | ApiV1PostHistoryImport404Error1 |
                ApiV1PostHistoryImport409Error1 | ApiV1PostHistoryImport429Error1 | ApiV1PostHistoryImport500Error1 |
                ApiV1PostHistoryImport502Error1 | ApiV1PostHistoryImport503Error1 | ApiV1PostHistoryImport504Error1 |
                RawError``."""
        return unwrap(await self._with_raw_response.post_import_create(body=body, request_options=request_options))

    async def post_import_delete_imported_posts(
        self,
        *,
        body: ApiV1PostHistoryImportPostsRequest | ApiV1PostHistoryImportPostsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportPostsResponse1:
        """Permanently delete up to 100 imported historical posts and their analytics in one request, freeing import
        capacity.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImportPosts400Error1 |
                ApiV1PostHistoryImportPosts401Error1 | ApiV1PostHistoryImportPosts403Error1 |
                ApiV1PostHistoryImportPosts404Error1 | ApiV1PostHistoryImportPosts429Error1 |
                ApiV1PostHistoryImportPosts500Error1 | ApiV1PostHistoryImportPosts502Error1 |
                ApiV1PostHistoryImportPosts503Error1 | ApiV1PostHistoryImportPosts504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_import_delete_imported_posts(body=body, request_options=request_options)
        )

    async def post_import_get_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PostHistoryImportResponse:
        """Check the status, progress, and result of a single post history import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImport400Error1 |
                ApiV1PostHistoryImport401Error1 | ApiV1PostHistoryImport403Error1 | ApiV1PostHistoryImport404Error1 |
                ApiV1PostHistoryImport429Error1 | ApiV1PostHistoryImport500Error1 | ApiV1PostHistoryImport502Error1 |
                ApiV1PostHistoryImport503Error1 | ApiV1PostHistoryImport504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.post_import_get_by_id(import_id, request_options=request_options))

    async def post_import_get_imported_posts(
        self,
        team_id: str,
        social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportPostsResponse:
        """List the historical posts pulled in by an import, with their analytics and your remaining import capacity.
        Use it to report on performance from before the account was connected.

        Args:
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImportPosts400Error1 |
                ApiV1PostHistoryImportPosts401Error1 | ApiV1PostHistoryImportPosts403Error1 |
                ApiV1PostHistoryImportPosts404Error1 | ApiV1PostHistoryImportPosts429Error1 |
                ApiV1PostHistoryImportPosts500Error1 | ApiV1PostHistoryImportPosts502Error1 |
                ApiV1PostHistoryImportPosts503Error1 | ApiV1PostHistoryImportPosts504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_import_get_imported_posts(
                team_id, social_account_type, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def post_import_get_status(
        self,
        team_id: str,
        *,
        social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportResponse1:
        """List post history import jobs for a team so you can monitor which backfills are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImport400Error1 |
                ApiV1PostHistoryImport401Error1 | ApiV1PostHistoryImport403Error1 | ApiV1PostHistoryImport404Error1 |
                ApiV1PostHistoryImport429Error1 | ApiV1PostHistoryImport500Error1 | ApiV1PostHistoryImport502Error1 |
                ApiV1PostHistoryImport503Error1 | ApiV1PostHistoryImport504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_import_get_status(
                team_id, social_account_type=social_account_type, request_options=request_options
            ),
        )

    async def post_import_retry_import(
        self,
        import_id: str,
        *,
        body: ApiV1PostHistoryImportRetryRequest | ApiV1PostHistoryImportRetryRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PostHistoryImportRetryResponse:
        """Re-run a post history import that failed, for example after a token expired or the platform rate-limited the
        request.

        Args:
            import_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1PostHistoryImportRetry400Error1 |
                ApiV1PostHistoryImportRetry401Error1 | ApiV1PostHistoryImportRetry403Error1 |
                ApiV1PostHistoryImportRetry404Error1 | ApiV1PostHistoryImportRetry429Error1 |
                ApiV1PostHistoryImportRetry500Error1 | ApiV1PostHistoryImportRetry502Error1 |
                ApiV1PostHistoryImportRetry503Error1 | ApiV1PostHistoryImportRetry504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_import_retry_import(
                import_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPostImportWithRawResponse:
        return self._with_raw_response


class PostImportWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_import_create(
        self,
        *,
        body: ApiV1PostHistoryImportRequest | ApiV1PostHistoryImportRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportResponse, PostImportCreateErrorBody]:
        """Kick off an asynchronous import that backfills posts a social account published before it was connected to
        bundle.social, together with their analytics. Use it to get historical reporting from day one.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post-history-import/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostHistoryImportRequest | ApiV1PostHistoryImportRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostHistoryImportResponse],
            error_mapper=post_import_create_error_mapper,
            request_options=request_options,
        )

    def post_import_delete_imported_posts(
        self,
        *,
        body: ApiV1PostHistoryImportPostsRequest | ApiV1PostHistoryImportPostsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportPostsResponse1, PostImportDeleteImportedPostsErrorBody]:
        """Permanently delete up to 100 imported historical posts and their analytics in one request, freeing import
        capacity.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/post-history-import/posts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostHistoryImportPostsRequest | ApiV1PostHistoryImportPostsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostHistoryImportPostsResponse1],
            error_mapper=post_import_delete_imported_posts_error_mapper,
            request_options=request_options,
        )

    def post_import_get_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostHistoryImportResponse, PostImportGetByIdErrorBody]:
        """Check the status, progress, and result of a single post history import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-history-import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostHistoryImportResponse],
            error_mapper=post_import_get_by_id_error_mapper,
            request_options=request_options,
        )

    def post_import_get_imported_posts(
        self,
        team_id: str,
        social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportPostsResponse, PostImportGetImportedPostsErrorBody]:
        """List the historical posts pulled in by an import, with their analytics and your remaining import capacity.
        Use it to report on performance from before the account was connected.

        Args:
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-history-import/posts"),
            query_params=[
                param[str]("teamId", team_id),
                param[SocialAccountTypeBundleSocialPostImportApiOrStr]("socialAccountType", social_account_type),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostHistoryImportPostsResponse],
            error_mapper=post_import_get_imported_posts_error_mapper,
            request_options=request_options,
        )

    def post_import_get_status(
        self,
        team_id: str,
        *,
        social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportResponse1, PostImportGetStatusErrorBody]:
        """List post history import jobs for a team so you can monitor which backfills are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-history-import/"),
            query_params=[
                param[str]("teamId", team_id),
                param[SocialAccountTypeBundleSocialPostImportApiOrStr | None]("socialAccountType", social_account_type),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostHistoryImportResponse1],
            error_mapper=post_import_get_status_error_mapper,
            request_options=request_options,
        )

    def post_import_retry_import(
        self,
        import_id: str,
        *,
        body: ApiV1PostHistoryImportRetryRequest | ApiV1PostHistoryImportRetryRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportRetryResponse, PostImportRetryImportErrorBody]:
        """Re-run a post history import that failed, for example after a token expired or the platform rate-limited the
        request.

        Args:
            import_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post-history-import/{importId}/retry"),
            path_params=[param[str]("importId", import_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostHistoryImportRetryRequest | ApiV1PostHistoryImportRetryRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1PostHistoryImportRetryResponse],
            error_mapper=post_import_retry_import_error_mapper,
            request_options=request_options,
        )


class AsyncPostImportWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_import_create(
        self,
        *,
        body: ApiV1PostHistoryImportRequest | ApiV1PostHistoryImportRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportResponse, PostImportCreateErrorBody]:
        """Kick off an asynchronous import that backfills posts a social account published before it was connected to
        bundle.social, together with their analytics. Use it to get historical reporting from day one.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post-history-import/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostHistoryImportRequest | ApiV1PostHistoryImportRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostHistoryImportResponse],
            error_mapper=post_import_create_error_mapper,
            request_options=request_options,
        )

    async def post_import_delete_imported_posts(
        self,
        *,
        body: ApiV1PostHistoryImportPostsRequest | ApiV1PostHistoryImportPostsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportPostsResponse1, PostImportDeleteImportedPostsErrorBody]:
        """Permanently delete up to 100 imported historical posts and their analytics in one request, freeing import
        capacity.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/post-history-import/posts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostHistoryImportPostsRequest | ApiV1PostHistoryImportPostsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostHistoryImportPostsResponse1],
            error_mapper=post_import_delete_imported_posts_error_mapper,
            request_options=request_options,
        )

    async def post_import_get_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PostHistoryImportResponse, PostImportGetByIdErrorBody]:
        """Check the status, progress, and result of a single post history import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-history-import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostHistoryImportResponse],
            error_mapper=post_import_get_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_import_get_imported_posts(
        self,
        team_id: str,
        social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportPostsResponse, PostImportGetImportedPostsErrorBody]:
        """List the historical posts pulled in by an import, with their analytics and your remaining import capacity.
        Use it to report on performance from before the account was connected.

        Args:
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-history-import/posts"),
            query_params=[
                param[str]("teamId", team_id),
                param[SocialAccountTypeBundleSocialPostImportApiOrStr]("socialAccountType", social_account_type),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostHistoryImportPostsResponse],
            error_mapper=post_import_get_imported_posts_error_mapper,
            request_options=request_options,
        )

    async def post_import_get_status(
        self,
        team_id: str,
        *,
        social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportResponse1, PostImportGetStatusErrorBody]:
        """List post history import jobs for a team so you can monitor which backfills are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/post-history-import/"),
            query_params=[
                param[str]("teamId", team_id),
                param[SocialAccountTypeBundleSocialPostImportApiOrStr | None]("socialAccountType", social_account_type),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostHistoryImportResponse1],
            error_mapper=post_import_get_status_error_mapper,
            request_options=request_options,
        )

    async def post_import_retry_import(
        self,
        import_id: str,
        *,
        body: ApiV1PostHistoryImportRetryRequest | ApiV1PostHistoryImportRetryRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PostHistoryImportRetryResponse, PostImportRetryImportErrorBody]:
        """Re-run a post history import that failed, for example after a token expired or the platform rate-limited the
        request.

        Args:
            import_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/post-history-import/{importId}/retry"),
            path_params=[param[str]("importId", import_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PostHistoryImportRetryRequest | ApiV1PostHistoryImportRetryRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1PostHistoryImportRetryResponse],
            error_mapper=post_import_retry_import_error_mapper,
            request_options=request_options,
        )
