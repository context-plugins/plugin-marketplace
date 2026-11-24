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
from ..errors.get_chart_podcasts_error import GetChartPodcastsErrorBody, get_chart_podcasts_error_mapper
from ..models.chart_podcast_entry import ChartPodcastEntry
from ..server.server import Server


class Charts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChartsWithRawResponse(client, server, auth)

    def get_chart_podcasts(
        self,
        *,
        country: str | None = None,
        platform: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ChartPodcastEntry]:
        """Returns the latest Apple Podcasts / Spotify podcast chart for the given country. If ``platform`` is omitted,
        results from both platforms are interleaved. Audioscrape ingests new chart snapshots daily.

        Args:
            country: ISO 3166-1 alpha-2 country code (default ``us``)
            platform: ``apple`` or ``spotify`` (default: both)
            limit: Max results (default 50, max 200)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Podcast rankings

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            self._with_raw_response.get_chart_podcasts(
                country=country, platform=platform, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ChartsWithRawResponse:
        return self._with_raw_response


class AsyncCharts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChartsWithRawResponse(client, server, auth)

    async def get_chart_podcasts(
        self,
        *,
        country: str | None = None,
        platform: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ChartPodcastEntry]:
        """Returns the latest Apple Podcasts / Spotify podcast chart for the given country. If ``platform`` is omitted,
        results from both platforms are interleaved. Audioscrape ingests new chart snapshots daily.

        Args:
            country: ISO 3166-1 alpha-2 country code (default ``us``)
            platform: ``apple`` or ``spotify`` (default: both)
            limit: Max results (default 50, max 200)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Podcast rankings

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.get_chart_podcasts(
                country=country, platform=platform, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncChartsWithRawResponse:
        return self._with_raw_response


class ChartsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_chart_podcasts(
        self,
        *,
        country: str | None = None,
        platform: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ChartPodcastEntry], GetChartPodcastsErrorBody]:
        """Returns the latest Apple Podcasts / Spotify podcast chart for the given country. If ``platform`` is omitted,
        results from both platforms are interleaved. Audioscrape ingests new chart snapshots daily.

        Args:
            country: ISO 3166-1 alpha-2 country code (default ``us``)
            platform: ``apple`` or ``spotify`` (default: both)
            limit: Max results (default 50, max 200)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/charts/podcasts"),
            query_params=[
                param[str | None]("country", country),
                param[str | None]("platform", platform),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[list[ChartPodcastEntry]],
            error_mapper=get_chart_podcasts_error_mapper,
            request_options=request_options,
        )


class AsyncChartsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_chart_podcasts(
        self,
        *,
        country: str | None = None,
        platform: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ChartPodcastEntry], GetChartPodcastsErrorBody]:
        """Returns the latest Apple Podcasts / Spotify podcast chart for the given country. If ``platform`` is omitted,
        results from both platforms are interleaved. Audioscrape ingests new chart snapshots daily.

        Args:
            country: ISO 3166-1 alpha-2 country code (default ``us``)
            platform: ``apple`` or ``spotify`` (default: both)
            limit: Max results (default 50, max 200)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/charts/podcasts"),
            query_params=[
                param[str | None]("country", country),
                param[str | None]("platform", platform),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[list[ChartPodcastEntry]],
            error_mapper=get_chart_podcasts_error_mapper,
            request_options=request_options,
        )
