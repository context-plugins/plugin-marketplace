from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_pull_request_analytics_error import (
    ListPullRequestAnalyticsErrorBody,
    list_pull_request_analytics_error_mapper,
)
from ..models.analytics_pr_page import AnalyticsPrPage
from ..server.server import Server


class Analytics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnalyticsWithRawResponse(client, server, auth)

    def list_pull_request_analytics(
        self,
        org: str,
        *,
        repo: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        per_page: int | None = 100,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsPrPage:
        """Export metrics for merged pull requests reviewed by cubic.

        Args:
            org: GitHub organization or owner whose pull request analytics you want to fetch. Surrounding whitespace is
                trimmed before validation.
            repo: Filter to one repository under the selected owner. Surrounding whitespace is trimmed before
                validation; blank values are ignored.
            start_date: Start of the review date window. Accepts ISO 8601 timestamps or UTC date-only values such as
                2026-04-01. Surrounding whitespace is trimmed before validation; blank values are ignored. If neither
                date bound is set, cubic uses the last 30 days, 7 days, or 24 hours based on the installation's
                available history.
            end_date: End of the review date window. A UTC date-only value includes the full day through 23:59:59.999Z.
                Surrounding whitespace is trimmed before validation; blank values are ignored.
            per_page: Number of results per page, from 1 to 100. Values outside this range return 400.
            cursor: Copy nextCursor unchanged from the preceding response. Keep the same organization, filters, and date
                window across pages. Surrounding whitespace is trimmed before validation; blank values are ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of pull request analytics. nextCursor is null on the last page. Recent updates may take a short time
            to appear due to read-replica lag.

        Raises:
            ApiError: Missing org, invalid query parameters or cursor, or an invalid date range. Missing bearer token,
                invalid or expired API key, or blocked key owner or organization. The key cannot access the
                organization, the installation is blocked, or the organization is not on Pro or Max. An organization key
                reads only its own organization. The organization cannot be resolved to a cubic installation. The rate
                limit is exhausted. Retry after the Retry-After header. Personal and organization keys count toward the
                same limits as the Members API. API key verification, access checks, or analytics processing failed.
                cubic could not verify the key or check the rate limit. Retry shortly. ``error`` is ``AnalyticsError |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_pull_request_analytics(
                org,
                repo=repo,
                start_date=start_date,
                end_date=end_date,
                per_page=per_page,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AnalyticsWithRawResponse:
        return self._with_raw_response


class AsyncAnalytics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnalyticsWithRawResponse(client, server, auth)

    async def list_pull_request_analytics(
        self,
        org: str,
        *,
        repo: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        per_page: int | None = 100,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsPrPage:
        """Export metrics for merged pull requests reviewed by cubic.

        Args:
            org: GitHub organization or owner whose pull request analytics you want to fetch. Surrounding whitespace is
                trimmed before validation.
            repo: Filter to one repository under the selected owner. Surrounding whitespace is trimmed before
                validation; blank values are ignored.
            start_date: Start of the review date window. Accepts ISO 8601 timestamps or UTC date-only values such as
                2026-04-01. Surrounding whitespace is trimmed before validation; blank values are ignored. If neither
                date bound is set, cubic uses the last 30 days, 7 days, or 24 hours based on the installation's
                available history.
            end_date: End of the review date window. A UTC date-only value includes the full day through 23:59:59.999Z.
                Surrounding whitespace is trimmed before validation; blank values are ignored.
            per_page: Number of results per page, from 1 to 100. Values outside this range return 400.
            cursor: Copy nextCursor unchanged from the preceding response. Keep the same organization, filters, and date
                window across pages. Surrounding whitespace is trimmed before validation; blank values are ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of pull request analytics. nextCursor is null on the last page. Recent updates may take a short time
            to appear due to read-replica lag.

        Raises:
            ApiError: Missing org, invalid query parameters or cursor, or an invalid date range. Missing bearer token,
                invalid or expired API key, or blocked key owner or organization. The key cannot access the
                organization, the installation is blocked, or the organization is not on Pro or Max. An organization key
                reads only its own organization. The organization cannot be resolved to a cubic installation. The rate
                limit is exhausted. Retry after the Retry-After header. Personal and organization keys count toward the
                same limits as the Members API. API key verification, access checks, or analytics processing failed.
                cubic could not verify the key or check the rate limit. Retry shortly. ``error`` is ``AnalyticsError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_pull_request_analytics(
                org,
                repo=repo,
                start_date=start_date,
                end_date=end_date,
                per_page=per_page,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAnalyticsWithRawResponse:
        return self._with_raw_response


class AnalyticsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_pull_request_analytics(
        self,
        org: str,
        *,
        repo: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        per_page: int | None = 100,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsPrPage, ListPullRequestAnalyticsErrorBody]:
        """Export metrics for merged pull requests reviewed by cubic.

        Args:
            org: GitHub organization or owner whose pull request analytics you want to fetch. Surrounding whitespace is
                trimmed before validation.
            repo: Filter to one repository under the selected owner. Surrounding whitespace is trimmed before
                validation; blank values are ignored.
            start_date: Start of the review date window. Accepts ISO 8601 timestamps or UTC date-only values such as
                2026-04-01. Surrounding whitespace is trimmed before validation; blank values are ignored. If neither
                date bound is set, cubic uses the last 30 days, 7 days, or 24 hours based on the installation's
                available history.
            end_date: End of the review date window. A UTC date-only value includes the full day through 23:59:59.999Z.
                Surrounding whitespace is trimmed before validation; blank values are ignored.
            per_page: Number of results per page, from 1 to 100. Values outside this range return 400.
            cursor: Copy nextCursor unchanged from the preceding response. Keep the same organization, filters, and date
                window across pages. Surrounding whitespace is trimmed before validation; blank values are ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/analytics/v1/prs"),
            query_params=[
                param[str]("org", org),
                param[str | None]("repo", repo),
                param[str | None]("startDate", start_date),
                param[str | None]("endDate", end_date),
                param[int | None]("perPage", per_page),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.analytics_api_key,
            decoder=json_decoder[AnalyticsPrPage],
            error_mapper=list_pull_request_analytics_error_mapper,
            request_options=request_options,
        )


class AsyncAnalyticsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_pull_request_analytics(
        self,
        org: str,
        *,
        repo: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        per_page: int | None = 100,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsPrPage, ListPullRequestAnalyticsErrorBody]:
        """Export metrics for merged pull requests reviewed by cubic.

        Args:
            org: GitHub organization or owner whose pull request analytics you want to fetch. Surrounding whitespace is
                trimmed before validation.
            repo: Filter to one repository under the selected owner. Surrounding whitespace is trimmed before
                validation; blank values are ignored.
            start_date: Start of the review date window. Accepts ISO 8601 timestamps or UTC date-only values such as
                2026-04-01. Surrounding whitespace is trimmed before validation; blank values are ignored. If neither
                date bound is set, cubic uses the last 30 days, 7 days, or 24 hours based on the installation's
                available history.
            end_date: End of the review date window. A UTC date-only value includes the full day through 23:59:59.999Z.
                Surrounding whitespace is trimmed before validation; blank values are ignored.
            per_page: Number of results per page, from 1 to 100. Values outside this range return 400.
            cursor: Copy nextCursor unchanged from the preceding response. Keep the same organization, filters, and date
                window across pages. Surrounding whitespace is trimmed before validation; blank values are ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/analytics/v1/prs"),
            query_params=[
                param[str]("org", org),
                param[str | None]("repo", repo),
                param[str | None]("startDate", start_date),
                param[str | None]("endDate", end_date),
                param[int | None]("perPage", per_page),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.analytics_api_key,
            decoder=async_json_decoder[AnalyticsPrPage],
            error_mapper=list_pull_request_analytics_error_mapper,
            request_options=request_options,
        )
