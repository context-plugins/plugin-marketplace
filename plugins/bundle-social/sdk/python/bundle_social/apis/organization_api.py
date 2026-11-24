from __future__ import annotations

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.organization_get_comments_usage_error import (
    OrganizationGetCommentsUsageErrorBody,
    organization_get_comments_usage_error_mapper,
)
from ..errors.organization_get_daily_limits_usage_error import (
    OrganizationGetDailyLimitsUsageErrorBody,
    organization_get_daily_limits_usage_error_mapper,
)
from ..errors.organization_get_imports_usage_error import (
    OrganizationGetImportsUsageErrorBody,
    organization_get_imports_usage_error_mapper,
)
from ..errors.organization_get_messages_usage_error import (
    OrganizationGetMessagesUsageErrorBody,
    organization_get_messages_usage_error_mapper,
)
from ..errors.organization_get_organization_error import (
    OrganizationGetOrganizationErrorBody,
    organization_get_organization_error_mapper,
)
from ..errors.organization_get_posts_usage_error import (
    OrganizationGetPostsUsageErrorBody,
    organization_get_posts_usage_error_mapper,
)
from ..errors.organization_get_uploads_usage_error import (
    OrganizationGetUploadsUsageErrorBody,
    organization_get_uploads_usage_error_mapper,
)
from ..models.api_v1_organization_response import ApiV1OrganizationResponse
from ..models.api_v1_organization_usage_comments_response import ApiV1OrganizationUsageCommentsResponse
from ..models.api_v1_organization_usage_daily_limits_response import ApiV1OrganizationUsageDailyLimitsResponse
from ..models.api_v1_organization_usage_imports_response import ApiV1OrganizationUsageImportsResponse
from ..models.api_v1_organization_usage_messages_response import ApiV1OrganizationUsageMessagesResponse
from ..models.api_v1_organization_usage_posts_response import ApiV1OrganizationUsagePostsResponse
from ..models.api_v1_organization_usage_uploads_response import ApiV1OrganizationUsageUploadsResponse
from ..models.enums.social_account_type1_bundle_social_organization_api import (
    SocialAccountType1BundleSocialOrganizationApiOrStr,
)
from ..models.enums.social_account_type_bundle_social_organization_api import (
    SocialAccountTypeBundleSocialOrganizationApiOrStr,
)
from ..server.server import Server


class OrganizationApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrganizationApiWithRawResponse(client, server, auth)

    def organization_get_comments_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1OrganizationUsageCommentsResponse:
        """See how many comments your organization has consumed against its plan limit for the current billing period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageComments400Error1 |
                ApiV1OrganizationUsageComments401Error1 | ApiV1OrganizationUsageComments403Error1 |
                ApiV1OrganizationUsageComments404Error1 | ApiV1OrganizationUsageComments429Error1 |
                ApiV1OrganizationUsageComments500Error1 | ApiV1OrganizationUsageComments502Error1 |
                ApiV1OrganizationUsageComments503Error1 | ApiV1OrganizationUsageComments504Error1 | RawError``."""
        return unwrap(self._with_raw_response.organization_get_comments_usage(request_options=request_options))

    def organization_get_daily_limits_usage(
        self,
        social_account_id: str,
        *,
        date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1OrganizationUsageDailyLimitsResponse:
        """Check how many posts a single social account has already published on a specific day versus the platform's
        own daily cap. Use this to avoid hitting platform-side publishing limits.

        Args:
            social_account_id: Value sent with the request.
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageDailyLimits400Error1 |
                ApiV1OrganizationUsageDailyLimits401Error1 | ApiV1OrganizationUsageDailyLimits403Error1 |
                ApiV1OrganizationUsageDailyLimits404Error1 | ApiV1OrganizationUsageDailyLimits429Error1 |
                ApiV1OrganizationUsageDailyLimits500Error1 | ApiV1OrganizationUsageDailyLimits502Error1 |
                ApiV1OrganizationUsageDailyLimits503Error1 | ApiV1OrganizationUsageDailyLimits504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.organization_get_daily_limits_usage(
                social_account_id, date=date, request_options=request_options
            ),
        )

    def organization_get_imports_usage(
        self,
        *,
        page: float | None = 1.0,
        page_size: float | None = 20.0,
        team_id: str | None = None,
        social_account_type: SocialAccountTypeBundleSocialOrganizationApiOrStr | None = None,
        social_account_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1OrganizationUsageImportsResponse:
        """See how much import capacity each social account has consumed, paginated and filterable by team or platform.
        Use it to track post history and review import quota.

        Args:
            page: Value sent with the request.
            page_size: Value sent with the request.
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            social_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageImports400Error1 |
                ApiV1OrganizationUsageImports401Error1 | ApiV1OrganizationUsageImports403Error1 |
                ApiV1OrganizationUsageImports404Error1 | ApiV1OrganizationUsageImports429Error1 |
                ApiV1OrganizationUsageImports500Error1 | ApiV1OrganizationUsageImports502Error1 |
                ApiV1OrganizationUsageImports503Error1 | ApiV1OrganizationUsageImports504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.organization_get_imports_usage(
                page=page,
                page_size=page_size,
                team_id=team_id,
                social_account_type=social_account_type,
                social_account_id=social_account_id,
                request_options=request_options,
            ),
        )

    def organization_get_messages_usage(
        self,
        *,
        offset: int | None = 0,
        limit: int | None = 10,
        team_id: str | None = None,
        social_account_type: SocialAccountType1BundleSocialOrganizationApiOrStr | None = None,
        social_account_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1OrganizationUsageMessagesResponse:
        """See how many direct messages and automation runs each Facebook, Instagram and TikTok account has used this
        UTC calendar month against its monthly limits, paginated with ``offset``/``limit`` and filterable by team,
        platform or account. Messages counted: every message you sent, including private replies to comments. Not
        counted: reactions, marking a conversation as read, and inbound messages. Automation runs counted: every run
        that was allowed to start, including manual test runs; skipped and canceled runs are not counted. Limits reflect
        per-account and organization overrides on top of the plan default.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            social_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageMessages400Error1 |
                ApiV1OrganizationUsageMessages401Error1 | ApiV1OrganizationUsageMessages403Error1 |
                ApiV1OrganizationUsageMessages404Error1 | ApiV1OrganizationUsageMessages429Error1 |
                ApiV1OrganizationUsageMessages500Error1 | ApiV1OrganizationUsageMessages502Error1 |
                ApiV1OrganizationUsageMessages503Error1 | ApiV1OrganizationUsageMessages504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.organization_get_messages_usage(
                offset=offset,
                limit=limit,
                team_id=team_id,
                social_account_type=social_account_type,
                social_account_id=social_account_id,
                request_options=request_options,
            ),
        )

    def organization_get_organization(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1OrganizationResponse:
        """Retrieve your organization's details and plan. The ``teams`` field is deprecated and will be removed on
        2026-11-15: to discover team IDs, use the paginated GET /api/v1/team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Organization400Error1 |
                ApiV1Organization401Error1 | ApiV1Organization403Error1 | ApiV1Organization404Error1 |
                ApiV1Organization429Error1 | ApiV1Organization500Error1 | ApiV1Organization502Error1 |
                ApiV1Organization503Error1 | ApiV1Organization504Error1 | RawError``."""
        return unwrap(self._with_raw_response.organization_get_organization(request_options=request_options))

    def organization_get_posts_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1OrganizationUsagePostsResponse:
        """See how many posts your organization has consumed against its plan limit for the current billing period. Use
        it to monitor quota before scheduling large batches.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsagePosts400Error1 |
                ApiV1OrganizationUsagePosts401Error1 | ApiV1OrganizationUsagePosts403Error1 |
                ApiV1OrganizationUsagePosts404Error1 | ApiV1OrganizationUsagePosts429Error1 |
                ApiV1OrganizationUsagePosts500Error1 | ApiV1OrganizationUsagePosts502Error1 |
                ApiV1OrganizationUsagePosts503Error1 | ApiV1OrganizationUsagePosts504Error1 | RawError``."""
        return unwrap(self._with_raw_response.organization_get_posts_usage(request_options=request_options))

    def organization_get_uploads_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1OrganizationUsageUploadsResponse:
        """See how much upload capacity your organization has consumed against its plan limit for the current billing
        period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageUploads400Error1 |
                ApiV1OrganizationUsageUploads401Error1 | ApiV1OrganizationUsageUploads403Error1 |
                ApiV1OrganizationUsageUploads404Error1 | ApiV1OrganizationUsageUploads429Error1 |
                ApiV1OrganizationUsageUploads500Error1 | ApiV1OrganizationUsageUploads502Error1 |
                ApiV1OrganizationUsageUploads503Error1 | ApiV1OrganizationUsageUploads504Error1 | RawError``."""
        return unwrap(self._with_raw_response.organization_get_uploads_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> OrganizationApiWithRawResponse:
        return self._with_raw_response


class AsyncOrganizationApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrganizationApiWithRawResponse(client, server, auth)

    async def organization_get_comments_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1OrganizationUsageCommentsResponse:
        """See how many comments your organization has consumed against its plan limit for the current billing period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageComments400Error1 |
                ApiV1OrganizationUsageComments401Error1 | ApiV1OrganizationUsageComments403Error1 |
                ApiV1OrganizationUsageComments404Error1 | ApiV1OrganizationUsageComments429Error1 |
                ApiV1OrganizationUsageComments500Error1 | ApiV1OrganizationUsageComments502Error1 |
                ApiV1OrganizationUsageComments503Error1 | ApiV1OrganizationUsageComments504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.organization_get_comments_usage(request_options=request_options))

    async def organization_get_daily_limits_usage(
        self,
        social_account_id: str,
        *,
        date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1OrganizationUsageDailyLimitsResponse:
        """Check how many posts a single social account has already published on a specific day versus the platform's
        own daily cap. Use this to avoid hitting platform-side publishing limits.

        Args:
            social_account_id: Value sent with the request.
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageDailyLimits400Error1 |
                ApiV1OrganizationUsageDailyLimits401Error1 | ApiV1OrganizationUsageDailyLimits403Error1 |
                ApiV1OrganizationUsageDailyLimits404Error1 | ApiV1OrganizationUsageDailyLimits429Error1 |
                ApiV1OrganizationUsageDailyLimits500Error1 | ApiV1OrganizationUsageDailyLimits502Error1 |
                ApiV1OrganizationUsageDailyLimits503Error1 | ApiV1OrganizationUsageDailyLimits504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.organization_get_daily_limits_usage(
                social_account_id, date=date, request_options=request_options
            ),
        )

    async def organization_get_imports_usage(
        self,
        *,
        page: float | None = 1.0,
        page_size: float | None = 20.0,
        team_id: str | None = None,
        social_account_type: SocialAccountTypeBundleSocialOrganizationApiOrStr | None = None,
        social_account_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1OrganizationUsageImportsResponse:
        """See how much import capacity each social account has consumed, paginated and filterable by team or platform.
        Use it to track post history and review import quota.

        Args:
            page: Value sent with the request.
            page_size: Value sent with the request.
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            social_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageImports400Error1 |
                ApiV1OrganizationUsageImports401Error1 | ApiV1OrganizationUsageImports403Error1 |
                ApiV1OrganizationUsageImports404Error1 | ApiV1OrganizationUsageImports429Error1 |
                ApiV1OrganizationUsageImports500Error1 | ApiV1OrganizationUsageImports502Error1 |
                ApiV1OrganizationUsageImports503Error1 | ApiV1OrganizationUsageImports504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.organization_get_imports_usage(
                page=page,
                page_size=page_size,
                team_id=team_id,
                social_account_type=social_account_type,
                social_account_id=social_account_id,
                request_options=request_options,
            ),
        )

    async def organization_get_messages_usage(
        self,
        *,
        offset: int | None = 0,
        limit: int | None = 10,
        team_id: str | None = None,
        social_account_type: SocialAccountType1BundleSocialOrganizationApiOrStr | None = None,
        social_account_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1OrganizationUsageMessagesResponse:
        """See how many direct messages and automation runs each Facebook, Instagram and TikTok account has used this
        UTC calendar month against its monthly limits, paginated with ``offset``/``limit`` and filterable by team,
        platform or account. Messages counted: every message you sent, including private replies to comments. Not
        counted: reactions, marking a conversation as read, and inbound messages. Automation runs counted: every run
        that was allowed to start, including manual test runs; skipped and canceled runs are not counted. Limits reflect
        per-account and organization overrides on top of the plan default.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            social_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageMessages400Error1 |
                ApiV1OrganizationUsageMessages401Error1 | ApiV1OrganizationUsageMessages403Error1 |
                ApiV1OrganizationUsageMessages404Error1 | ApiV1OrganizationUsageMessages429Error1 |
                ApiV1OrganizationUsageMessages500Error1 | ApiV1OrganizationUsageMessages502Error1 |
                ApiV1OrganizationUsageMessages503Error1 | ApiV1OrganizationUsageMessages504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.organization_get_messages_usage(
                offset=offset,
                limit=limit,
                team_id=team_id,
                social_account_type=social_account_type,
                social_account_id=social_account_id,
                request_options=request_options,
            ),
        )

    async def organization_get_organization(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1OrganizationResponse:
        """Retrieve your organization's details and plan. The ``teams`` field is deprecated and will be removed on
        2026-11-15: to discover team IDs, use the paginated GET /api/v1/team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Organization400Error1 |
                ApiV1Organization401Error1 | ApiV1Organization403Error1 | ApiV1Organization404Error1 |
                ApiV1Organization429Error1 | ApiV1Organization500Error1 | ApiV1Organization502Error1 |
                ApiV1Organization503Error1 | ApiV1Organization504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.organization_get_organization(request_options=request_options))

    async def organization_get_posts_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1OrganizationUsagePostsResponse:
        """See how many posts your organization has consumed against its plan limit for the current billing period. Use
        it to monitor quota before scheduling large batches.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsagePosts400Error1 |
                ApiV1OrganizationUsagePosts401Error1 | ApiV1OrganizationUsagePosts403Error1 |
                ApiV1OrganizationUsagePosts404Error1 | ApiV1OrganizationUsagePosts429Error1 |
                ApiV1OrganizationUsagePosts500Error1 | ApiV1OrganizationUsagePosts502Error1 |
                ApiV1OrganizationUsagePosts503Error1 | ApiV1OrganizationUsagePosts504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.organization_get_posts_usage(request_options=request_options))

    async def organization_get_uploads_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1OrganizationUsageUploadsResponse:
        """See how much upload capacity your organization has consumed against its plan limit for the current billing
        period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1OrganizationUsageUploads400Error1 |
                ApiV1OrganizationUsageUploads401Error1 | ApiV1OrganizationUsageUploads403Error1 |
                ApiV1OrganizationUsageUploads404Error1 | ApiV1OrganizationUsageUploads429Error1 |
                ApiV1OrganizationUsageUploads500Error1 | ApiV1OrganizationUsageUploads502Error1 |
                ApiV1OrganizationUsageUploads503Error1 | ApiV1OrganizationUsageUploads504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.organization_get_uploads_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOrganizationApiWithRawResponse:
        return self._with_raw_response


class OrganizationApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def organization_get_comments_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OrganizationUsageCommentsResponse, OrganizationGetCommentsUsageErrorBody]:
        """See how many comments your organization has consumed against its plan limit for the current billing period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/comments"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1OrganizationUsageCommentsResponse],
            error_mapper=organization_get_comments_usage_error_mapper,
            request_options=request_options,
        )

    def organization_get_daily_limits_usage(
        self,
        social_account_id: str,
        *,
        date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1OrganizationUsageDailyLimitsResponse, OrganizationGetDailyLimitsUsageErrorBody]:
        """Check how many posts a single social account has already published on a specific day versus the platform's
        own daily cap. Use this to avoid hitting platform-side publishing limits.

        Args:
            social_account_id: Value sent with the request.
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/daily-limits"),
            query_params=[
                param[str]("socialAccountId", social_account_id), param[RFC3339DateTime | None]("date", date)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1OrganizationUsageDailyLimitsResponse],
            error_mapper=organization_get_daily_limits_usage_error_mapper,
            request_options=request_options,
        )

    def organization_get_imports_usage(
        self,
        *,
        page: float | None = 1.0,
        page_size: float | None = 20.0,
        team_id: str | None = None,
        social_account_type: SocialAccountTypeBundleSocialOrganizationApiOrStr | None = None,
        social_account_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1OrganizationUsageImportsResponse, OrganizationGetImportsUsageErrorBody]:
        """See how much import capacity each social account has consumed, paginated and filterable by team or platform.
        Use it to track post history and review import quota.

        Args:
            page: Value sent with the request.
            page_size: Value sent with the request.
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            social_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/imports"),
            query_params=[
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
                param[str | None]("teamId", team_id),
                param[SocialAccountTypeBundleSocialOrganizationApiOrStr | None](
                    "socialAccountType", social_account_type
                ),
                param[str | None]("socialAccountId", social_account_id),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1OrganizationUsageImportsResponse],
            error_mapper=organization_get_imports_usage_error_mapper,
            request_options=request_options,
        )

    def organization_get_messages_usage(
        self,
        *,
        offset: int | None = 0,
        limit: int | None = 10,
        team_id: str | None = None,
        social_account_type: SocialAccountType1BundleSocialOrganizationApiOrStr | None = None,
        social_account_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1OrganizationUsageMessagesResponse, OrganizationGetMessagesUsageErrorBody]:
        """See how many direct messages and automation runs each Facebook, Instagram and TikTok account has used this
        UTC calendar month against its monthly limits, paginated with ``offset``/``limit`` and filterable by team,
        platform or account. Messages counted: every message you sent, including private replies to comments. Not
        counted: reactions, marking a conversation as read, and inbound messages. Automation runs counted: every run
        that was allowed to start, including manual test runs; skipped and canceled runs are not counted. Limits reflect
        per-account and organization overrides on top of the plan default.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            social_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/messages"),
            query_params=[
                param[int | None]("offset", offset),
                param[int | None]("limit", limit),
                param[str | None]("teamId", team_id),
                param[SocialAccountType1BundleSocialOrganizationApiOrStr | None](
                    "socialAccountType", social_account_type
                ),
                param[str | None]("socialAccountId", social_account_id),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1OrganizationUsageMessagesResponse],
            error_mapper=organization_get_messages_usage_error_mapper,
            request_options=request_options,
        )

    def organization_get_organization(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OrganizationResponse, OrganizationGetOrganizationErrorBody]:
        """Retrieve your organization's details and plan. The ``teams`` field is deprecated and will be removed on
        2026-11-15: to discover team IDs, use the paginated GET /api/v1/team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1OrganizationResponse],
            error_mapper=organization_get_organization_error_mapper,
            request_options=request_options,
        )

    def organization_get_posts_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OrganizationUsagePostsResponse, OrganizationGetPostsUsageErrorBody]:
        """See how many posts your organization has consumed against its plan limit for the current billing period. Use
        it to monitor quota before scheduling large batches.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/posts"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1OrganizationUsagePostsResponse],
            error_mapper=organization_get_posts_usage_error_mapper,
            request_options=request_options,
        )

    def organization_get_uploads_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OrganizationUsageUploadsResponse, OrganizationGetUploadsUsageErrorBody]:
        """See how much upload capacity your organization has consumed against its plan limit for the current billing
        period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/uploads"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1OrganizationUsageUploadsResponse],
            error_mapper=organization_get_uploads_usage_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def organization_get_comments_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OrganizationUsageCommentsResponse, OrganizationGetCommentsUsageErrorBody]:
        """See how many comments your organization has consumed against its plan limit for the current billing period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/comments"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1OrganizationUsageCommentsResponse],
            error_mapper=organization_get_comments_usage_error_mapper,
            request_options=request_options,
        )

    async def organization_get_daily_limits_usage(
        self,
        social_account_id: str,
        *,
        date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1OrganizationUsageDailyLimitsResponse, OrganizationGetDailyLimitsUsageErrorBody]:
        """Check how many posts a single social account has already published on a specific day versus the platform's
        own daily cap. Use this to avoid hitting platform-side publishing limits.

        Args:
            social_account_id: Value sent with the request.
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/daily-limits"),
            query_params=[
                param[str]("socialAccountId", social_account_id), param[RFC3339DateTime | None]("date", date)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1OrganizationUsageDailyLimitsResponse],
            error_mapper=organization_get_daily_limits_usage_error_mapper,
            request_options=request_options,
        )

    async def organization_get_imports_usage(
        self,
        *,
        page: float | None = 1.0,
        page_size: float | None = 20.0,
        team_id: str | None = None,
        social_account_type: SocialAccountTypeBundleSocialOrganizationApiOrStr | None = None,
        social_account_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1OrganizationUsageImportsResponse, OrganizationGetImportsUsageErrorBody]:
        """See how much import capacity each social account has consumed, paginated and filterable by team or platform.
        Use it to track post history and review import quota.

        Args:
            page: Value sent with the request.
            page_size: Value sent with the request.
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            social_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/imports"),
            query_params=[
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
                param[str | None]("teamId", team_id),
                param[SocialAccountTypeBundleSocialOrganizationApiOrStr | None](
                    "socialAccountType", social_account_type
                ),
                param[str | None]("socialAccountId", social_account_id),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1OrganizationUsageImportsResponse],
            error_mapper=organization_get_imports_usage_error_mapper,
            request_options=request_options,
        )

    async def organization_get_messages_usage(
        self,
        *,
        offset: int | None = 0,
        limit: int | None = 10,
        team_id: str | None = None,
        social_account_type: SocialAccountType1BundleSocialOrganizationApiOrStr | None = None,
        social_account_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1OrganizationUsageMessagesResponse, OrganizationGetMessagesUsageErrorBody]:
        """See how many direct messages and automation runs each Facebook, Instagram and TikTok account has used this
        UTC calendar month against its monthly limits, paginated with ``offset``/``limit`` and filterable by team,
        platform or account. Messages counted: every message you sent, including private replies to comments. Not
        counted: reactions, marking a conversation as read, and inbound messages. Automation runs counted: every run
        that was allowed to start, including manual test runs; skipped and canceled runs are not counted. Limits reflect
        per-account and organization overrides on top of the plan default.

        Args:
            offset: Value sent with the request.
            limit: Value sent with the request.
            team_id: Value sent with the request.
            social_account_type: Value sent with the request.
            social_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/messages"),
            query_params=[
                param[int | None]("offset", offset),
                param[int | None]("limit", limit),
                param[str | None]("teamId", team_id),
                param[SocialAccountType1BundleSocialOrganizationApiOrStr | None](
                    "socialAccountType", social_account_type
                ),
                param[str | None]("socialAccountId", social_account_id),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1OrganizationUsageMessagesResponse],
            error_mapper=organization_get_messages_usage_error_mapper,
            request_options=request_options,
        )

    async def organization_get_organization(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OrganizationResponse, OrganizationGetOrganizationErrorBody]:
        """Retrieve your organization's details and plan. The ``teams`` field is deprecated and will be removed on
        2026-11-15: to discover team IDs, use the paginated GET /api/v1/team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1OrganizationResponse],
            error_mapper=organization_get_organization_error_mapper,
            request_options=request_options,
        )

    async def organization_get_posts_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OrganizationUsagePostsResponse, OrganizationGetPostsUsageErrorBody]:
        """See how many posts your organization has consumed against its plan limit for the current billing period. Use
        it to monitor quota before scheduling large batches.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/posts"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1OrganizationUsagePostsResponse],
            error_mapper=organization_get_posts_usage_error_mapper,
            request_options=request_options,
        )

    async def organization_get_uploads_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1OrganizationUsageUploadsResponse, OrganizationGetUploadsUsageErrorBody]:
        """See how much upload capacity your organization has consumed against its plan limit for the current billing
        period.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/organization/usage/uploads"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1OrganizationUsageUploadsResponse],
            error_mapper=organization_get_uploads_usage_error_mapper,
            request_options=request_options,
        )
