from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.enums.period import PeriodOrStr
from ..models.insights_response import InsightsResponse
from ..server.server import Server


class Insights:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = InsightsWithRawResponse(client, server)

    def get_media_insights(
        self, media_id: str, metric: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> InsightsResponse:
        """Get social interaction metrics for a media object.

        Args:
            media_id: Value sent with the request.
            metric: Comma-separated list of metrics.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Media insights data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_media_insights(media_id, metric, access_token, request_options=request_options)
        )

    def get_user_insights(
        self,
        user_id: str,
        metric: str,
        period: PeriodOrStr,
        access_token: str,
        *,
        since: int | None = None,
        until: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InsightsResponse:
        """Get social interaction metrics for the account.

        Args:
            user_id: Value sent with the request.
            metric: Comma-separated list of metrics.
            period: Time period for aggregation.
            access_token: Value sent with the request.
            since: Unix timestamp for start of range.
            until: Unix timestamp for end of range.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account insights data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_user_insights(
                user_id, metric, period, access_token, since=since, until=until, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> InsightsWithRawResponse:
        return self._with_raw_response


class AsyncInsights:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncInsightsWithRawResponse(client, server)

    async def get_media_insights(
        self, media_id: str, metric: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> InsightsResponse:
        """Get social interaction metrics for a media object.

        Args:
            media_id: Value sent with the request.
            metric: Comma-separated list of metrics.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Media insights data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_media_insights(
                media_id, metric, access_token, request_options=request_options
            ),
        )

    async def get_user_insights(
        self,
        user_id: str,
        metric: str,
        period: PeriodOrStr,
        access_token: str,
        *,
        since: int | None = None,
        until: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InsightsResponse:
        """Get social interaction metrics for the account.

        Args:
            user_id: Value sent with the request.
            metric: Comma-separated list of metrics.
            period: Time period for aggregation.
            access_token: Value sent with the request.
            since: Unix timestamp for start of range.
            until: Unix timestamp for end of range.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account insights data.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_user_insights(
                user_id, metric, period, access_token, since=since, until=until, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInsightsWithRawResponse:
        return self._with_raw_response


class InsightsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_media_insights(
        self, media_id: str, metric: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[InsightsResponse, RawError]:
        """Get social interaction metrics for a media object.

        Args:
            media_id: Value sent with the request.
            metric: Comma-separated list of metrics.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{media_id}/insights"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("metric", metric), param[str]("access_token", access_token)],
            decoder=json_decoder[InsightsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_user_insights(
        self,
        user_id: str,
        metric: str,
        period: PeriodOrStr,
        access_token: str,
        *,
        since: int | None = None,
        until: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsResponse, RawError]:
        """Get social interaction metrics for the account.

        Args:
            user_id: Value sent with the request.
            metric: Comma-separated list of metrics.
            period: Time period for aggregation.
            access_token: Value sent with the request.
            since: Unix timestamp for start of range.
            until: Unix timestamp for end of range.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/insights"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[
                param[str]("metric", metric),
                param[PeriodOrStr]("period", period),
                param[str]("access_token", access_token),
                param[int | None]("since", since),
                param[int | None]("until", until),
            ],
            decoder=json_decoder[InsightsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncInsightsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_media_insights(
        self, media_id: str, metric: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[InsightsResponse, RawError]:
        """Get social interaction metrics for a media object.

        Args:
            media_id: Value sent with the request.
            metric: Comma-separated list of metrics.
            access_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{media_id}/insights"),
            path_params=[param[str]("media_id", media_id)],
            query_params=[param[str]("metric", metric), param[str]("access_token", access_token)],
            decoder=async_json_decoder[InsightsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_user_insights(
        self,
        user_id: str,
        metric: str,
        period: PeriodOrStr,
        access_token: str,
        *,
        since: int | None = None,
        until: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InsightsResponse, RawError]:
        """Get social interaction metrics for the account.

        Args:
            user_id: Value sent with the request.
            metric: Comma-separated list of metrics.
            period: Time period for aggregation.
            access_token: Value sent with the request.
            since: Unix timestamp for start of range.
            until: Unix timestamp for end of range.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{user_id}/insights"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[
                param[str]("metric", metric),
                param[PeriodOrStr]("period", period),
                param[str]("access_token", access_token),
                param[int | None]("since", since),
                param[int | None]("until", until),
            ],
            decoder=async_json_decoder[InsightsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
