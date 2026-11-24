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
from ..errors.get_api_v1_analytics_error import GetApiV1AnalyticsErrorBody, get_api_v1_analytics_error_mapper
from ..models.api_v1_analytics_response import ApiV1AnalyticsResponse
from ..server.server import Server


class Analytics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnalyticsWithRawResponse(client, server, auth)

    def get_api_v1_analytics(
        self, *, days: int | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AnalyticsResponse:
        """``GET /reports/{idOrSlug}/analytics`` needs to be told which report, so "what is getting read" meant walking
        the list and adding up. The half that cannot be reconstructed that way is ``inactiveReports`` — a report nobody
        has opened does not appear in anything you would think to ask about. Part of analytics, so Team and above; the
        per-report call returns a total view count on every plan.

        Args:
            days: The window to count over. 30 by default.
            limit: How many reports in each list. 10 by default.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Readership across the organisation

        Raises:
            ApiError: ``plan_required`` — analytics is on Team and above. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_analytics(days=days, limit=limit, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AnalyticsWithRawResponse:
        return self._with_raw_response


class AsyncAnalytics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnalyticsWithRawResponse(client, server, auth)

    async def get_api_v1_analytics(
        self,
        *,
        days: int | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AnalyticsResponse:
        """``GET /reports/{idOrSlug}/analytics`` needs to be told which report, so "what is getting read" meant walking
        the list and adding up. The half that cannot be reconstructed that way is ``inactiveReports`` — a report nobody
        has opened does not appear in anything you would think to ask about. Part of analytics, so Team and above; the
        per-report call returns a total view count on every plan.

        Args:
            days: The window to count over. 30 by default.
            limit: How many reports in each list. 10 by default.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Readership across the organisation

        Raises:
            ApiError: ``plan_required`` — analytics is on Team and above. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_analytics(days=days, limit=limit, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAnalyticsWithRawResponse:
        return self._with_raw_response


class AnalyticsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_analytics(
        self, *, days: int | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AnalyticsResponse, GetApiV1AnalyticsErrorBody]:
        """``GET /reports/{idOrSlug}/analytics`` needs to be told which report, so "what is getting read" meant walking
        the list and adding up. The half that cannot be reconstructed that way is ``inactiveReports`` — a report nobody
        has opened does not appear in anything you would think to ask about. Part of analytics, so Team and above; the
        per-report call returns a total view count on every plan.

        Args:
            days: The window to count over. 30 by default.
            limit: How many reports in each list. 10 by default.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics"),
            query_params=[param[int | None]("days", days), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AnalyticsResponse],
            error_mapper=get_api_v1_analytics_error_mapper,
            request_options=request_options,
        )


class AsyncAnalyticsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_analytics(
        self,
        *,
        days: int | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AnalyticsResponse, GetApiV1AnalyticsErrorBody]:
        """``GET /reports/{idOrSlug}/analytics`` needs to be told which report, so "what is getting read" meant walking
        the list and adding up. The half that cannot be reconstructed that way is ``inactiveReports`` — a report nobody
        has opened does not appear in anything you would think to ask about. Part of analytics, so Team and above; the
        per-report call returns a total view count on every plan.

        Args:
            days: The window to count over. 30 by default.
            limit: How many reports in each list. 10 by default.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/analytics"),
            query_params=[param[int | None]("days", days), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AnalyticsResponse],
            error_mapper=get_api_v1_analytics_error_mapper,
            request_options=request_options,
        )
