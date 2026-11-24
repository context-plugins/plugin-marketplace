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
from ..errors.get_page_insights_error import GetPageInsightsErrorBody, get_page_insights_error_mapper
from ..models.enums.period import PeriodOrStr
from ..models.page_insights_response import PageInsightsResponse
from ..server.server import Server


class PageInsights:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PageInsightsWithRawResponse(client, server, auth)

    def get_page_insights(
        self,
        page_id: str,
        metric: str,
        *,
        period: PeriodOrStr | None = None,
        since: str | None = None,
        until: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PageInsightsResponse:
        """Retrieves analytics metrics for the Facebook Page including reach, impressions, engagement, and audience
        demographics.

        Args:
            page_id: The ID of the Facebook Page
            metric: Comma-separated list of metrics to retrieve such as page_impressions, page_engaged_users, page_fans.
            period: Aggregation period for the metrics
            since: Start of the date range in Unix timestamp or YYYY-MM-DD format
            until: End of the date range in Unix timestamp or YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved page insights

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_page_insights(
                page_id, metric, period=period, since=since, until=until, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PageInsightsWithRawResponse:
        return self._with_raw_response


class AsyncPageInsights:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPageInsightsWithRawResponse(client, server, auth)

    async def get_page_insights(
        self,
        page_id: str,
        metric: str,
        *,
        period: PeriodOrStr | None = None,
        since: str | None = None,
        until: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PageInsightsResponse:
        """Retrieves analytics metrics for the Facebook Page including reach, impressions, engagement, and audience
        demographics.

        Args:
            page_id: The ID of the Facebook Page
            metric: Comma-separated list of metrics to retrieve such as page_impressions, page_engaged_users, page_fans.
            period: Aggregation period for the metrics
            since: Start of the date range in Unix timestamp or YYYY-MM-DD format
            until: End of the date range in Unix timestamp or YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved page insights

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_page_insights(
                page_id, metric, period=period, since=since, until=until, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPageInsightsWithRawResponse:
        return self._with_raw_response


class PageInsightsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_page_insights(
        self,
        page_id: str,
        metric: str,
        *,
        period: PeriodOrStr | None = None,
        since: str | None = None,
        until: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PageInsightsResponse, GetPageInsightsErrorBody]:
        """Retrieves analytics metrics for the Facebook Page including reach, impressions, engagement, and audience
        demographics.

        Args:
            page_id: The ID of the Facebook Page
            metric: Comma-separated list of metrics to retrieve such as page_impressions, page_engaged_users, page_fans.
            period: Aggregation period for the metrics
            since: Start of the date range in Unix timestamp or YYYY-MM-DD format
            until: End of the date range in Unix timestamp or YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{page_id}/insights"),
            path_params=[param[str]("page_id", page_id)],
            query_params=[
                param[str]("metric", metric),
                param[PeriodOrStr | None]("period", period),
                param[str | None]("since", since),
                param[str | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PageInsightsResponse],
            error_mapper=get_page_insights_error_mapper,
            request_options=request_options,
        )


class AsyncPageInsightsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_page_insights(
        self,
        page_id: str,
        metric: str,
        *,
        period: PeriodOrStr | None = None,
        since: str | None = None,
        until: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PageInsightsResponse, GetPageInsightsErrorBody]:
        """Retrieves analytics metrics for the Facebook Page including reach, impressions, engagement, and audience
        demographics.

        Args:
            page_id: The ID of the Facebook Page
            metric: Comma-separated list of metrics to retrieve such as page_impressions, page_engaged_users, page_fans.
            period: Aggregation period for the metrics
            since: Start of the date range in Unix timestamp or YYYY-MM-DD format
            until: End of the date range in Unix timestamp or YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{page_id}/insights"),
            path_params=[param[str]("page_id", page_id)],
            query_params=[
                param[str]("metric", metric),
                param[PeriodOrStr | None]("period", period),
                param[str | None]("since", since),
                param[str | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PageInsightsResponse],
            error_mapper=get_page_insights_error_mapper,
            request_options=request_options,
        )
