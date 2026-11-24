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
from ..errors.analytics_force_post_analytics_error import (
    AnalyticsForcePostAnalyticsErrorBody,
    analytics_force_post_analytics_error_mapper,
)
from ..errors.analytics_force_social_account_analytics_error import (
    AnalyticsForceSocialAccountAnalyticsErrorBody,
    analytics_force_social_account_analytics_error_mapper,
)
from ..errors.analytics_get_bulk_post_analytics_error import (
    AnalyticsGetBulkPostAnalyticsErrorBody,
    analytics_get_bulk_post_analytics_error_mapper,
)
from ..errors.analytics_get_post_analytics_error import (
    AnalyticsGetPostAnalyticsErrorBody,
    analytics_get_post_analytics_error_mapper,
)
from ..errors.analytics_get_post_analytics_raw_error import (
    AnalyticsGetPostAnalyticsRawErrorBody,
    analytics_get_post_analytics_raw_error_mapper,
)
from ..errors.analytics_get_social_account_analytics_error import (
    AnalyticsGetSocialAccountAnalyticsErrorBody,
    analytics_get_social_account_analytics_error_mapper,
)
from ..errors.analytics_get_social_account_analytics_raw_error import (
    AnalyticsGetSocialAccountAnalyticsRawErrorBody,
    analytics_get_social_account_analytics_raw_error_mapper,
)
from ..models.api_v1_analytics_post_bulk_response import ApiV1AnalyticsPostBulkResponse
from ..models.api_v1_analytics_post_force_request import (
    ApiV1AnalyticsPostForceRequest,
    ApiV1AnalyticsPostForceRequestDict,
)
from ..models.api_v1_analytics_post_force_response import ApiV1AnalyticsPostForceResponse
from ..models.api_v1_analytics_post_raw_response import ApiV1AnalyticsPostRawResponse
from ..models.api_v1_analytics_post_response import ApiV1AnalyticsPostResponse
from ..models.api_v1_analytics_social_account_force_request import (
    ApiV1AnalyticsSocialAccountForceRequest,
    ApiV1AnalyticsSocialAccountForceRequestDict,
)
from ..models.api_v1_analytics_social_account_force_response import ApiV1AnalyticsSocialAccountForceResponse
from ..models.api_v1_analytics_social_account_raw_response import ApiV1AnalyticsSocialAccountRawResponse
from ..models.api_v1_analytics_social_account_response import ApiV1AnalyticsSocialAccountResponse
from ..models.enums.platform_type import PlatformTypeOrStr
from ..server.server import Server


class Analytics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnalyticsWithRawResponse(client, server, auth)

    def analytics_force_post_analytics(
        self,
        *,
        body: ApiV1AnalyticsPostForceRequest | ApiV1AnalyticsPostForceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsPostForceResponse:
        """Trigger an immediate fetch of fresh analytics for a single post instead of waiting for the scheduled refresh.
        Use sparingly, as it consumes platform rate limits.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsPostForce400Error1 |
                ApiV1AnalyticsPostForce401Error1 | ApiV1AnalyticsPostForce403Error1 | ApiV1AnalyticsPostForce404Error1 |
                ApiV1AnalyticsPostForce429Error1 | ApiV1AnalyticsPostForce500Error1 | ApiV1AnalyticsPostForce502Error1 |
                ApiV1AnalyticsPostForce503Error1 | ApiV1AnalyticsPostForce504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.analytics_force_post_analytics(body=body, request_options=request_options)
        )

    def analytics_force_social_account_analytics(
        self,
        *,
        body: ApiV1AnalyticsSocialAccountForceRequest | ApiV1AnalyticsSocialAccountForceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsSocialAccountForceResponse:
        """Trigger an immediate fetch of fresh social account analytics from the platform instead of waiting for the
        scheduled refresh. Use sparingly, as it consumes platform rate limits.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsSocialAccountForce400Error1 |
                ApiV1AnalyticsSocialAccountForce401Error1 | ApiV1AnalyticsSocialAccountForce403Error1 |
                ApiV1AnalyticsSocialAccountForce404Error1 | ApiV1AnalyticsSocialAccountForce429Error1 |
                ApiV1AnalyticsSocialAccountForce500Error1 | ApiV1AnalyticsSocialAccountForce502Error1 |
                ApiV1AnalyticsSocialAccountForce503Error1 | ApiV1AnalyticsSocialAccountForce504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.analytics_force_social_account_analytics(body=body, request_options=request_options)
        )

    def analytics_get_bulk_post_analytics(
        self,
        post_ids: list[str],
        platform_type: PlatformTypeOrStr,
        *,
        page: float | None = 1.0,
        limit: float | None = 20.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsPostBulkResponse:
        """Retrieve analytics for multiple posts in a single request. Maximum 60 posts per request, paginated with 20
        per page.

        Args:
            post_ids: Value sent with the request.
            platform_type: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsPostBulk400Error1 |
                ApiV1AnalyticsPostBulk401Error1 | ApiV1AnalyticsPostBulk403Error1 | ApiV1AnalyticsPostBulk404Error1 |
                ApiV1AnalyticsPostBulk429Error1 | ApiV1AnalyticsPostBulk500Error1 | ApiV1AnalyticsPostBulk502Error1 |
                ApiV1AnalyticsPostBulk503Error1 | ApiV1AnalyticsPostBulk504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.analytics_get_bulk_post_analytics(
                post_ids, platform_type, page=page, limit=limit, request_options=request_options
            ),
        )

    def analytics_get_post_analytics(
        self,
        *,
        post_id: str | None = None,
        platform_type: PlatformTypeOrStr | None = None,
        imported_post_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsPostResponse:
        """Retrieve normalized engagement metrics such as likes, comments, shares, and views for a single published
        post. Metric names are unified across platforms for easier reporting.

        Args:
            post_id: Value sent with the request.
            platform_type: Value sent with the request.
            imported_post_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsPost400Error1 |
                ApiV1AnalyticsPost401Error1 | ApiV1AnalyticsPost403Error1 | ApiV1AnalyticsPost404Error1 |
                ApiV1AnalyticsPost429Error1 | ApiV1AnalyticsPost500Error1 | ApiV1AnalyticsPost502Error1 |
                ApiV1AnalyticsPost503Error1 | ApiV1AnalyticsPost504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.analytics_get_post_analytics(
                post_id=post_id,
                platform_type=platform_type,
                imported_post_id=imported_post_id,
                request_options=request_options,
            ),
        )

    def analytics_get_post_analytics_raw(
        self,
        *,
        post_id: str | None = None,
        platform_type: PlatformTypeOrStr | None = None,
        imported_post_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsPostRawResponse:
        """Retrieve post analytics exactly as returned by the social platform, without bundle.social's normalization.
        Use this when you need a platform-specific metric that the normalized response does not expose.

        Args:
            post_id: Value sent with the request.
            platform_type: Value sent with the request.
            imported_post_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsPostRaw400Error1 |
                ApiV1AnalyticsPostRaw401Error1 | ApiV1AnalyticsPostRaw403Error1 | ApiV1AnalyticsPostRaw404Error1 |
                ApiV1AnalyticsPostRaw429Error1 | ApiV1AnalyticsPostRaw500Error1 | ApiV1AnalyticsPostRaw502Error1 |
                ApiV1AnalyticsPostRaw503Error1 | ApiV1AnalyticsPostRaw504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.analytics_get_post_analytics_raw(
                post_id=post_id,
                platform_type=platform_type,
                imported_post_id=imported_post_id,
                request_options=request_options,
            ),
        )

    def analytics_get_social_account_analytics(
        self, team_id: str, platform_type: PlatformTypeOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AnalyticsSocialAccountResponse:
        """Retrieve normalized profile-level metrics such as followers, reach, and impressions for a connected social
        account over a date range. Metric names are unified across platforms so you can chart accounts side by side.

        Args:
            team_id: Value sent with the request.
            platform_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsSocialAccount400Error1 |
                ApiV1AnalyticsSocialAccount401Error1 | ApiV1AnalyticsSocialAccount403Error1 |
                ApiV1AnalyticsSocialAccount404Error1 | ApiV1AnalyticsSocialAccount429Error1 |
                ApiV1AnalyticsSocialAccount500Error1 | ApiV1AnalyticsSocialAccount502Error1 |
                ApiV1AnalyticsSocialAccount503Error1 | ApiV1AnalyticsSocialAccount504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.analytics_get_social_account_analytics(
                team_id, platform_type, request_options=request_options
            ),
        )

    def analytics_get_social_account_analytics_raw(
        self, team_id: str, platform_type: PlatformTypeOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AnalyticsSocialAccountRawResponse:
        """Retrieve social account analytics exactly as returned by the social platform, without bundle.social's
        normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

        Args:
            team_id: Value sent with the request.
            platform_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsSocialAccountRaw400Error1 |
                ApiV1AnalyticsSocialAccountRaw401Error1 | ApiV1AnalyticsSocialAccountRaw403Error1 |
                ApiV1AnalyticsSocialAccountRaw404Error1 | ApiV1AnalyticsSocialAccountRaw429Error1 |
                ApiV1AnalyticsSocialAccountRaw500Error1 | ApiV1AnalyticsSocialAccountRaw502Error1 |
                ApiV1AnalyticsSocialAccountRaw503Error1 | ApiV1AnalyticsSocialAccountRaw504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.analytics_get_social_account_analytics_raw(
                team_id, platform_type, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AnalyticsWithRawResponse:
        return self._with_raw_response


class AsyncAnalytics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnalyticsWithRawResponse(client, server, auth)

    async def analytics_force_post_analytics(
        self,
        *,
        body: ApiV1AnalyticsPostForceRequest | ApiV1AnalyticsPostForceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsPostForceResponse:
        """Trigger an immediate fetch of fresh analytics for a single post instead of waiting for the scheduled refresh.
        Use sparingly, as it consumes platform rate limits.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsPostForce400Error1 |
                ApiV1AnalyticsPostForce401Error1 | ApiV1AnalyticsPostForce403Error1 | ApiV1AnalyticsPostForce404Error1 |
                ApiV1AnalyticsPostForce429Error1 | ApiV1AnalyticsPostForce500Error1 | ApiV1AnalyticsPostForce502Error1 |
                ApiV1AnalyticsPostForce503Error1 | ApiV1AnalyticsPostForce504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.analytics_force_post_analytics(body=body, request_options=request_options)
        )

    async def analytics_force_social_account_analytics(
        self,
        *,
        body: ApiV1AnalyticsSocialAccountForceRequest | ApiV1AnalyticsSocialAccountForceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsSocialAccountForceResponse:
        """Trigger an immediate fetch of fresh social account analytics from the platform instead of waiting for the
        scheduled refresh. Use sparingly, as it consumes platform rate limits.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsSocialAccountForce400Error1 |
                ApiV1AnalyticsSocialAccountForce401Error1 | ApiV1AnalyticsSocialAccountForce403Error1 |
                ApiV1AnalyticsSocialAccountForce404Error1 | ApiV1AnalyticsSocialAccountForce429Error1 |
                ApiV1AnalyticsSocialAccountForce500Error1 | ApiV1AnalyticsSocialAccountForce502Error1 |
                ApiV1AnalyticsSocialAccountForce503Error1 | ApiV1AnalyticsSocialAccountForce504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.analytics_force_social_account_analytics(
                body=body, request_options=request_options
            ),
        )

    async def analytics_get_bulk_post_analytics(
        self,
        post_ids: list[str],
        platform_type: PlatformTypeOrStr,
        *,
        page: float | None = 1.0,
        limit: float | None = 20.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsPostBulkResponse:
        """Retrieve analytics for multiple posts in a single request. Maximum 60 posts per request, paginated with 20
        per page.

        Args:
            post_ids: Value sent with the request.
            platform_type: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsPostBulk400Error1 |
                ApiV1AnalyticsPostBulk401Error1 | ApiV1AnalyticsPostBulk403Error1 | ApiV1AnalyticsPostBulk404Error1 |
                ApiV1AnalyticsPostBulk429Error1 | ApiV1AnalyticsPostBulk500Error1 | ApiV1AnalyticsPostBulk502Error1 |
                ApiV1AnalyticsPostBulk503Error1 | ApiV1AnalyticsPostBulk504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.analytics_get_bulk_post_analytics(
                post_ids, platform_type, page=page, limit=limit, request_options=request_options
            ),
        )

    async def analytics_get_post_analytics(
        self,
        *,
        post_id: str | None = None,
        platform_type: PlatformTypeOrStr | None = None,
        imported_post_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsPostResponse:
        """Retrieve normalized engagement metrics such as likes, comments, shares, and views for a single published
        post. Metric names are unified across platforms for easier reporting.

        Args:
            post_id: Value sent with the request.
            platform_type: Value sent with the request.
            imported_post_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsPost400Error1 |
                ApiV1AnalyticsPost401Error1 | ApiV1AnalyticsPost403Error1 | ApiV1AnalyticsPost404Error1 |
                ApiV1AnalyticsPost429Error1 | ApiV1AnalyticsPost500Error1 | ApiV1AnalyticsPost502Error1 |
                ApiV1AnalyticsPost503Error1 | ApiV1AnalyticsPost504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.analytics_get_post_analytics(
                post_id=post_id,
                platform_type=platform_type,
                imported_post_id=imported_post_id,
                request_options=request_options,
            ),
        )

    async def analytics_get_post_analytics_raw(
        self,
        *,
        post_id: str | None = None,
        platform_type: PlatformTypeOrStr | None = None,
        imported_post_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsPostRawResponse:
        """Retrieve post analytics exactly as returned by the social platform, without bundle.social's normalization.
        Use this when you need a platform-specific metric that the normalized response does not expose.

        Args:
            post_id: Value sent with the request.
            platform_type: Value sent with the request.
            imported_post_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsPostRaw400Error1 |
                ApiV1AnalyticsPostRaw401Error1 | ApiV1AnalyticsPostRaw403Error1 | ApiV1AnalyticsPostRaw404Error1 |
                ApiV1AnalyticsPostRaw429Error1 | ApiV1AnalyticsPostRaw500Error1 | ApiV1AnalyticsPostRaw502Error1 |
                ApiV1AnalyticsPostRaw503Error1 | ApiV1AnalyticsPostRaw504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.analytics_get_post_analytics_raw(
                post_id=post_id,
                platform_type=platform_type,
                imported_post_id=imported_post_id,
                request_options=request_options,
            ),
        )

    async def analytics_get_social_account_analytics(
        self,
        team_id: str,
        platform_type: PlatformTypeOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsSocialAccountResponse:
        """Retrieve normalized profile-level metrics such as followers, reach, and impressions for a connected social
        account over a date range. Metric names are unified across platforms so you can chart accounts side by side.

        Args:
            team_id: Value sent with the request.
            platform_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsSocialAccount400Error1 |
                ApiV1AnalyticsSocialAccount401Error1 | ApiV1AnalyticsSocialAccount403Error1 |
                ApiV1AnalyticsSocialAccount404Error1 | ApiV1AnalyticsSocialAccount429Error1 |
                ApiV1AnalyticsSocialAccount500Error1 | ApiV1AnalyticsSocialAccount502Error1 |
                ApiV1AnalyticsSocialAccount503Error1 | ApiV1AnalyticsSocialAccount504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.analytics_get_social_account_analytics(
                team_id, platform_type, request_options=request_options
            ),
        )

    async def analytics_get_social_account_analytics_raw(
        self,
        team_id: str,
        platform_type: PlatformTypeOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsSocialAccountRawResponse:
        """Retrieve social account analytics exactly as returned by the social platform, without bundle.social's
        normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

        Args:
            team_id: Value sent with the request.
            platform_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AnalyticsSocialAccountRaw400Error1 |
                ApiV1AnalyticsSocialAccountRaw401Error1 | ApiV1AnalyticsSocialAccountRaw403Error1 |
                ApiV1AnalyticsSocialAccountRaw404Error1 | ApiV1AnalyticsSocialAccountRaw429Error1 |
                ApiV1AnalyticsSocialAccountRaw500Error1 | ApiV1AnalyticsSocialAccountRaw502Error1 |
                ApiV1AnalyticsSocialAccountRaw503Error1 | ApiV1AnalyticsSocialAccountRaw504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.analytics_get_social_account_analytics_raw(
                team_id, platform_type, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAnalyticsWithRawResponse:
        return self._with_raw_response


class AnalyticsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def analytics_force_post_analytics(
        self,
        *,
        body: ApiV1AnalyticsPostForceRequest | ApiV1AnalyticsPostForceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsPostForceResponse, AnalyticsForcePostAnalyticsErrorBody]:
        """Trigger an immediate fetch of fresh analytics for a single post instead of waiting for the scheduled refresh.
        Use sparingly, as it consumes platform rate limits.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/analytics/post/force"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AnalyticsPostForceRequest | ApiV1AnalyticsPostForceRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AnalyticsPostForceResponse],
            error_mapper=analytics_force_post_analytics_error_mapper,
            request_options=request_options,
        )

    def analytics_force_social_account_analytics(
        self,
        *,
        body: ApiV1AnalyticsSocialAccountForceRequest | ApiV1AnalyticsSocialAccountForceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsSocialAccountForceResponse, AnalyticsForceSocialAccountAnalyticsErrorBody]:
        """Trigger an immediate fetch of fresh social account analytics from the platform instead of waiting for the
        scheduled refresh. Use sparingly, as it consumes platform rate limits.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/analytics/social-account/force"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1AnalyticsSocialAccountForceRequest | ApiV1AnalyticsSocialAccountForceRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AnalyticsSocialAccountForceResponse],
            error_mapper=analytics_force_social_account_analytics_error_mapper,
            request_options=request_options,
        )

    def analytics_get_bulk_post_analytics(
        self,
        post_ids: list[str],
        platform_type: PlatformTypeOrStr,
        *,
        page: float | None = 1.0,
        limit: float | None = 20.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsPostBulkResponse, AnalyticsGetBulkPostAnalyticsErrorBody]:
        """Retrieve analytics for multiple posts in a single request. Maximum 60 posts per request, paginated with 20
        per page.

        Args:
            post_ids: Value sent with the request.
            platform_type: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/post/bulk"),
            query_params=[
                param[list[str]]("postIds", post_ids),
                param[PlatformTypeOrStr]("platformType", platform_type),
                param[float | None]("page", page),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AnalyticsPostBulkResponse],
            error_mapper=analytics_get_bulk_post_analytics_error_mapper,
            request_options=request_options,
        )

    def analytics_get_post_analytics(
        self,
        *,
        post_id: str | None = None,
        platform_type: PlatformTypeOrStr | None = None,
        imported_post_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsPostResponse, AnalyticsGetPostAnalyticsErrorBody]:
        """Retrieve normalized engagement metrics such as likes, comments, shares, and views for a single published
        post. Metric names are unified across platforms for easier reporting.

        Args:
            post_id: Value sent with the request.
            platform_type: Value sent with the request.
            imported_post_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/post"),
            query_params=[
                param[str | None]("postId", post_id),
                param[PlatformTypeOrStr | None]("platformType", platform_type),
                param[str | None]("importedPostId", imported_post_id),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AnalyticsPostResponse],
            error_mapper=analytics_get_post_analytics_error_mapper,
            request_options=request_options,
        )

    def analytics_get_post_analytics_raw(
        self,
        *,
        post_id: str | None = None,
        platform_type: PlatformTypeOrStr | None = None,
        imported_post_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsPostRawResponse, AnalyticsGetPostAnalyticsRawErrorBody]:
        """Retrieve post analytics exactly as returned by the social platform, without bundle.social's normalization.
        Use this when you need a platform-specific metric that the normalized response does not expose.

        Args:
            post_id: Value sent with the request.
            platform_type: Value sent with the request.
            imported_post_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/post/raw"),
            query_params=[
                param[str | None]("postId", post_id),
                param[PlatformTypeOrStr | None]("platformType", platform_type),
                param[str | None]("importedPostId", imported_post_id),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AnalyticsPostRawResponse],
            error_mapper=analytics_get_post_analytics_raw_error_mapper,
            request_options=request_options,
        )

    def analytics_get_social_account_analytics(
        self, team_id: str, platform_type: PlatformTypeOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AnalyticsSocialAccountResponse, AnalyticsGetSocialAccountAnalyticsErrorBody]:
        """Retrieve normalized profile-level metrics such as followers, reach, and impressions for a connected social
        account over a date range. Metric names are unified across platforms so you can chart accounts side by side.

        Args:
            team_id: Value sent with the request.
            platform_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/social-account"),
            query_params=[param[str]("teamId", team_id), param[PlatformTypeOrStr]("platformType", platform_type)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AnalyticsSocialAccountResponse],
            error_mapper=analytics_get_social_account_analytics_error_mapper,
            request_options=request_options,
        )

    def analytics_get_social_account_analytics_raw(
        self, team_id: str, platform_type: PlatformTypeOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AnalyticsSocialAccountRawResponse, AnalyticsGetSocialAccountAnalyticsRawErrorBody]:
        """Retrieve social account analytics exactly as returned by the social platform, without bundle.social's
        normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

        Args:
            team_id: Value sent with the request.
            platform_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/social-account/raw"),
            query_params=[param[str]("teamId", team_id), param[PlatformTypeOrStr]("platformType", platform_type)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AnalyticsSocialAccountRawResponse],
            error_mapper=analytics_get_social_account_analytics_raw_error_mapper,
            request_options=request_options,
        )


class AsyncAnalyticsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def analytics_force_post_analytics(
        self,
        *,
        body: ApiV1AnalyticsPostForceRequest | ApiV1AnalyticsPostForceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsPostForceResponse, AnalyticsForcePostAnalyticsErrorBody]:
        """Trigger an immediate fetch of fresh analytics for a single post instead of waiting for the scheduled refresh.
        Use sparingly, as it consumes platform rate limits.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/analytics/post/force"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AnalyticsPostForceRequest | ApiV1AnalyticsPostForceRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AnalyticsPostForceResponse],
            error_mapper=analytics_force_post_analytics_error_mapper,
            request_options=request_options,
        )

    async def analytics_force_social_account_analytics(
        self,
        *,
        body: ApiV1AnalyticsSocialAccountForceRequest | ApiV1AnalyticsSocialAccountForceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsSocialAccountForceResponse, AnalyticsForceSocialAccountAnalyticsErrorBody]:
        """Trigger an immediate fetch of fresh social account analytics from the platform instead of waiting for the
        scheduled refresh. Use sparingly, as it consumes platform rate limits.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/analytics/social-account/force"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1AnalyticsSocialAccountForceRequest | ApiV1AnalyticsSocialAccountForceRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AnalyticsSocialAccountForceResponse],
            error_mapper=analytics_force_social_account_analytics_error_mapper,
            request_options=request_options,
        )

    async def analytics_get_bulk_post_analytics(
        self,
        post_ids: list[str],
        platform_type: PlatformTypeOrStr,
        *,
        page: float | None = 1.0,
        limit: float | None = 20.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsPostBulkResponse, AnalyticsGetBulkPostAnalyticsErrorBody]:
        """Retrieve analytics for multiple posts in a single request. Maximum 60 posts per request, paginated with 20
        per page.

        Args:
            post_ids: Value sent with the request.
            platform_type: Value sent with the request.
            page: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/post/bulk"),
            query_params=[
                param[list[str]]("postIds", post_ids),
                param[PlatformTypeOrStr]("platformType", platform_type),
                param[float | None]("page", page),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AnalyticsPostBulkResponse],
            error_mapper=analytics_get_bulk_post_analytics_error_mapper,
            request_options=request_options,
        )

    async def analytics_get_post_analytics(
        self,
        *,
        post_id: str | None = None,
        platform_type: PlatformTypeOrStr | None = None,
        imported_post_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsPostResponse, AnalyticsGetPostAnalyticsErrorBody]:
        """Retrieve normalized engagement metrics such as likes, comments, shares, and views for a single published
        post. Metric names are unified across platforms for easier reporting.

        Args:
            post_id: Value sent with the request.
            platform_type: Value sent with the request.
            imported_post_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/post"),
            query_params=[
                param[str | None]("postId", post_id),
                param[PlatformTypeOrStr | None]("platformType", platform_type),
                param[str | None]("importedPostId", imported_post_id),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AnalyticsPostResponse],
            error_mapper=analytics_get_post_analytics_error_mapper,
            request_options=request_options,
        )

    async def analytics_get_post_analytics_raw(
        self,
        *,
        post_id: str | None = None,
        platform_type: PlatformTypeOrStr | None = None,
        imported_post_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsPostRawResponse, AnalyticsGetPostAnalyticsRawErrorBody]:
        """Retrieve post analytics exactly as returned by the social platform, without bundle.social's normalization.
        Use this when you need a platform-specific metric that the normalized response does not expose.

        Args:
            post_id: Value sent with the request.
            platform_type: Value sent with the request.
            imported_post_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/post/raw"),
            query_params=[
                param[str | None]("postId", post_id),
                param[PlatformTypeOrStr | None]("platformType", platform_type),
                param[str | None]("importedPostId", imported_post_id),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AnalyticsPostRawResponse],
            error_mapper=analytics_get_post_analytics_raw_error_mapper,
            request_options=request_options,
        )

    async def analytics_get_social_account_analytics(
        self,
        team_id: str,
        platform_type: PlatformTypeOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsSocialAccountResponse, AnalyticsGetSocialAccountAnalyticsErrorBody]:
        """Retrieve normalized profile-level metrics such as followers, reach, and impressions for a connected social
        account over a date range. Metric names are unified across platforms so you can chart accounts side by side.

        Args:
            team_id: Value sent with the request.
            platform_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/social-account"),
            query_params=[param[str]("teamId", team_id), param[PlatformTypeOrStr]("platformType", platform_type)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AnalyticsSocialAccountResponse],
            error_mapper=analytics_get_social_account_analytics_error_mapper,
            request_options=request_options,
        )

    async def analytics_get_social_account_analytics_raw(
        self,
        team_id: str,
        platform_type: PlatformTypeOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsSocialAccountRawResponse, AnalyticsGetSocialAccountAnalyticsRawErrorBody]:
        """Retrieve social account analytics exactly as returned by the social platform, without bundle.social's
        normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

        Args:
            team_id: Value sent with the request.
            platform_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics/social-account/raw"),
            query_params=[param[str]("teamId", team_id), param[PlatformTypeOrStr]("platformType", platform_type)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AnalyticsSocialAccountRawResponse],
            error_mapper=analytics_get_social_account_analytics_raw_error_mapper,
            request_options=request_options,
        )
