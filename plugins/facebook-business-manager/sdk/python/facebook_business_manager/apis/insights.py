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
from ..errors.get_ad_account_insights_error import GetAdAccountInsightsErrorBody, get_ad_account_insights_error_mapper
from ..errors.get_campaign_insights_error import GetCampaignInsightsErrorBody, get_campaign_insights_error_mapper
from ..models.enums.level import LevelOrStr
from ..models.insights_response import InsightsResponse
from ..server.server import Server


class Insights:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsightsWithRawResponse(client, server, auth)

    def get_ad_account_insights(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        time_range: str | None = None,
        breakdowns: str | None = None,
        level: LevelOrStr | None = None,
        time_increment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InsightsResponse:
        """Retrieves performance insights and analytics for the specified ad account. Supports date range filtering,
        breakdowns, and action breakdowns.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            time_range: JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
            breakdowns: Comma-separated list of breakdown dimensions such as age, gender, country, or placement.
            level: Level of aggregation for results. Options include account, campaign, adset, or ad.
            time_increment: Number of days for each increment in the time range, or use monthly or all_days.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved insights data

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_ad_account_insights(
                ad_account_id,
                fields=fields,
                time_range=time_range,
                breakdowns=breakdowns,
                level=level,
                time_increment=time_increment,
                request_options=request_options,
            ),
        )

    def get_campaign_insights(
        self,
        campaign_id: str,
        *,
        fields: str | None = None,
        time_range: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InsightsResponse:
        """Retrieves performance insights for a specific campaign including impressions, clicks, spend, and conversion
        metrics.

        Args:
            campaign_id: The ID of the campaign
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            time_range: JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved campaign insights

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_campaign_insights(
                campaign_id, fields=fields, time_range=time_range, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> InsightsWithRawResponse:
        return self._with_raw_response


class AsyncInsights:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsightsWithRawResponse(client, server, auth)

    async def get_ad_account_insights(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        time_range: str | None = None,
        breakdowns: str | None = None,
        level: LevelOrStr | None = None,
        time_increment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InsightsResponse:
        """Retrieves performance insights and analytics for the specified ad account. Supports date range filtering,
        breakdowns, and action breakdowns.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            time_range: JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
            breakdowns: Comma-separated list of breakdown dimensions such as age, gender, country, or placement.
            level: Level of aggregation for results. Options include account, campaign, adset, or ad.
            time_increment: Number of days for each increment in the time range, or use monthly or all_days.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved insights data

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_ad_account_insights(
                ad_account_id,
                fields=fields,
                time_range=time_range,
                breakdowns=breakdowns,
                level=level,
                time_increment=time_increment,
                request_options=request_options,
            ),
        )

    async def get_campaign_insights(
        self,
        campaign_id: str,
        *,
        fields: str | None = None,
        time_range: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InsightsResponse:
        """Retrieves performance insights for a specific campaign including impressions, clicks, spend, and conversion
        metrics.

        Args:
            campaign_id: The ID of the campaign
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            time_range: JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved campaign insights

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_campaign_insights(
                campaign_id, fields=fields, time_range=time_range, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInsightsWithRawResponse:
        return self._with_raw_response


class InsightsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_ad_account_insights(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        time_range: str | None = None,
        breakdowns: str | None = None,
        level: LevelOrStr | None = None,
        time_increment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsResponse, GetAdAccountInsightsErrorBody]:
        """Retrieves performance insights and analytics for the specified ad account. Supports date range filtering,
        breakdowns, and action breakdowns.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            time_range: JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
            breakdowns: Comma-separated list of breakdown dimensions such as age, gender, country, or placement.
            level: Level of aggregation for results. Options include account, campaign, adset, or ad.
            time_increment: Number of days for each increment in the time range, or use monthly or all_days.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/act_{ad_account_id}/insights"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[str | None]("time_range", time_range),
                param[str | None]("breakdowns", breakdowns),
                param[LevelOrStr | None]("level", level),
                param[str | None]("time_increment", time_increment),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[InsightsResponse],
            error_mapper=get_ad_account_insights_error_mapper,
            request_options=request_options,
        )

    def get_campaign_insights(
        self,
        campaign_id: str,
        *,
        fields: str | None = None,
        time_range: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsResponse, GetCampaignInsightsErrorBody]:
        """Retrieves performance insights for a specific campaign including impressions, clicks, spend, and conversion
        metrics.

        Args:
            campaign_id: The ID of the campaign
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            time_range: JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{campaign_id}/insights"),
            path_params=[param[str]("campaign_id", campaign_id)],
            query_params=[param[str | None]("fields", fields), param[str | None]("time_range", time_range)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[InsightsResponse],
            error_mapper=get_campaign_insights_error_mapper,
            request_options=request_options,
        )


class AsyncInsightsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_ad_account_insights(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        time_range: str | None = None,
        breakdowns: str | None = None,
        level: LevelOrStr | None = None,
        time_increment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsResponse, GetAdAccountInsightsErrorBody]:
        """Retrieves performance insights and analytics for the specified ad account. Supports date range filtering,
        breakdowns, and action breakdowns.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            time_range: JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
            breakdowns: Comma-separated list of breakdown dimensions such as age, gender, country, or placement.
            level: Level of aggregation for results. Options include account, campaign, adset, or ad.
            time_increment: Number of days for each increment in the time range, or use monthly or all_days.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/act_{ad_account_id}/insights"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[str | None]("time_range", time_range),
                param[str | None]("breakdowns", breakdowns),
                param[LevelOrStr | None]("level", level),
                param[str | None]("time_increment", time_increment),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[InsightsResponse],
            error_mapper=get_ad_account_insights_error_mapper,
            request_options=request_options,
        )

    async def get_campaign_insights(
        self,
        campaign_id: str,
        *,
        fields: str | None = None,
        time_range: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsResponse, GetCampaignInsightsErrorBody]:
        """Retrieves performance insights for a specific campaign including impressions, clicks, spend, and conversion
        metrics.

        Args:
            campaign_id: The ID of the campaign
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            time_range: JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{campaign_id}/insights"),
            path_params=[param[str]("campaign_id", campaign_id)],
            query_params=[param[str | None]("fields", fields), param[str | None]("time_range", time_range)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[InsightsResponse],
            error_mapper=get_campaign_insights_error_mapper,
            request_options=request_options,
        )
