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
from ..errors.get_radar_snapshot_error import GetRadarSnapshotErrorBody, get_radar_snapshot_error_mapper
from ..models.enums.market import Market, MarketOrStr
from ..models.enums.order import Order, OrderOrStr
from ..models.enums.scope import Scope, ScopeOrStr
from ..models.enums.sentiment_alph_ai_rest_radar_api import (
    SentimentAlphAiRestRadarApi,
    SentimentAlphAiRestRadarApiOrStr,
)
from ..models.enums.sort_alph_ai_rest_radar_api import SortAlphAiRestRadarApi, SortAlphAiRestRadarApiOrStr
from ..models.enums.window import Window, WindowOrStr
from ..models.snapshot_preview_dto import SnapshotPreviewDto
from ..server.server import Server


class Radar:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RadarWithRawResponse(client, server, auth)

    def get_radar_snapshot(
        self,
        *,
        window: WindowOrStr | None = Window._24H,
        scope: ScopeOrStr | None = Scope.MARKET,
        market: MarketOrStr | None = Market.ALL,
        ticker: str | None = "",
        tickers: str | None = "",
        search: str | None = "",
        sort: SortAlphAiRestRadarApiOrStr | None = SortAlphAiRestRadarApi.SCORE,
        order: OrderOrStr | None = Order.DESC,
        sentiment: SentimentAlphAiRestRadarApiOrStr | None = SentimentAlphAiRestRadarApi.ALL,
        min_z: float | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        cursor: str | None = "",
        request_options: RequestOptionsOrDict | None = None,
    ) -> SnapshotPreviewDto:
        """Descriptive news-activity ranking. Free delay 3600 seconds; Basic 900 seconds; Pro no added delay. Tier and
        watchlist owner come from authentication, never query parameters. The public API requires a Bearer API key and
        uses the normal request quotas. The whole snapshot, including supporting headlines and company names, is
        selected at or before wall-clock time minus the tier delay. Snapshots refresh every minute and are retained for
        three hours. Collection and enrichment add processing time. preview_reference_at is null in live mode; a frozen
        development preview uses that historical clock instead and explicitly reports freshness.mode=historical_preview.
        as_of is the actual selected cutoff. Only tickers with current-window news appear. snapshot_id identifies
        immutable content including public evidence metadata. freshness states the effective delay, generation time,
        source check time and latest enrichment observed. Missing history or a producer more than four minutes behind
        returns 503, never newer data in place of a delayed snapshot. watchlist_coverage separates known quiet names
        from names absent from the snapshot; absent does not mean an invalid symbol. Summary is scoped before
        search/ticker/sentiment/min_z filters and pagination; universe describes the entire stored snapshot. Null
        metrics stay null. Collection coverage is unverified; these calculations are not point-in-time backtests or
        confirmed alerts. Historical corrections can affect the model baseline. All responses: private, no-store.
        event_context reports separate SEC/insider availability, cutoff, generation time, age_seconds at the numeric
        cutoff (not HTTP time), and lookback windows. results[].event_context contains only that row's issuer-CIK
        context: up to 3 recent 8-K/6-K filings over 7 days by filed_at and up to 3 open-market insider clusters over 30
        days by known_at (the latest SEC filing time). Counts cover all eligible records; arrays contain the newest
        records. Each cluster includes up to 5 SEC evidence links, filings_count and evidence_truncated. 6-K coverage is
        selected ingested earnings releases only. Filings also carry news_uid, news_title, news_published and
        has_article for AlphAI article links. has_article means enrichment existed before the context cutoff; older
        snapshots default to false with null title/publication metadata. SEC URLs remain available as sec_url. Share
        classes with the same CIK share context, without changing news counts, scores, filters, ranking or row
        eligibility. No USD totals are reported. Context and its evidence follow the same tier delay and cursor; later
        corrections appear only in new snapshots. Context older than max_age_seconds=300 at the numeric cutoff is
        unavailable. Missing, disabled, stale or failed context does not fail news readings. Unavailable context has
        null row context; a row also has null context when it is absent from the context snapshot. Unsupported or
        unidentified issuers have explicit row status/reason and null counts. Supported issuers with no eligible stored
        records have zero counts. Available does not certify complete SEC coverage. Unknown or repeated query parameters
        are rejected.

        Args:
            window: Window ending at as_of, not at wall-clock now.
            scope: market scans all tickers without a tier ticker cap. watchlist requires authentication and reads only
                the caller's existing saved symbols, matched exactly. An empty list returns no results. Existing
                watchlist entitlements apply (default Free 10, Basic/Pro unlimited); no separate Radar allowance.
            market: Filter within the selected scope; international includes all intl:* markets.
            ticker: One exact ticker, case-insensitive. No alias expansion. Mutually exclusive with tickers.
            tickers: Comma-separated exact symbols, case-insensitive. No tier ticker cap; request text is bounded to
                16384 characters. Applied within scope, so it never bypasses watchlist ownership.
            search: Case-insensitive ticker substring for interactive search. Separate from exact ticker selection.
            sort: score, stories (total), model_stories, sentiment or sentiment_change (current minus prior window).
                Missing values last; ties use total story count then ticker.
            order: asc or desc (default). Missing metrics always remain last.
            sentiment: all, positive (>0.15), negative (<-0.15), mixed (inclusive -0.15 through 0.15). Null metrics
                match only all.
            min_z: Minimum descriptive activity score, not a confirmed candidate filter.
            limit: Page size only, never a tier ticker cap. Follow next_cursor with the same filters and page size.
            offset: Legacy zero-based pagination without snapshot pinning. Prefer cursor; cannot combine a nonzero
                offset with cursor.
            cursor: Opaque signed next_cursor or previous_cursor. Pins the complete snapshot, filters, tier and
                watchlist membership/owner. A changed context, removed snapshot or replaced content returns 409; restart
                without cursor. Never edit the token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Eligible snapshot and effective access rules

        Raises:
            ApiError: Invalid, unknown or repeated parameter Invalid authentication or watchlist requested without
                authentication Radar is disabled Cursor context changed or pinned snapshot expired; restart without
                cursor No valid eligible snapshot; never substitutes newer data Account burst or daily request quota
                reached; respect Retry-After ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_radar_snapshot(
                window=window,
                scope=scope,
                market=market,
                ticker=ticker,
                tickers=tickers,
                search=search,
                sort=sort,
                order=order,
                sentiment=sentiment,
                min_z=min_z,
                limit=limit,
                offset=offset,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> RadarWithRawResponse:
        return self._with_raw_response


class AsyncRadar:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRadarWithRawResponse(client, server, auth)

    async def get_radar_snapshot(
        self,
        *,
        window: WindowOrStr | None = Window._24H,
        scope: ScopeOrStr | None = Scope.MARKET,
        market: MarketOrStr | None = Market.ALL,
        ticker: str | None = "",
        tickers: str | None = "",
        search: str | None = "",
        sort: SortAlphAiRestRadarApiOrStr | None = SortAlphAiRestRadarApi.SCORE,
        order: OrderOrStr | None = Order.DESC,
        sentiment: SentimentAlphAiRestRadarApiOrStr | None = SentimentAlphAiRestRadarApi.ALL,
        min_z: float | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        cursor: str | None = "",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SnapshotPreviewDto:
        """Descriptive news-activity ranking. Free delay 3600 seconds; Basic 900 seconds; Pro no added delay. Tier and
        watchlist owner come from authentication, never query parameters. The public API requires a Bearer API key and
        uses the normal request quotas. The whole snapshot, including supporting headlines and company names, is
        selected at or before wall-clock time minus the tier delay. Snapshots refresh every minute and are retained for
        three hours. Collection and enrichment add processing time. preview_reference_at is null in live mode; a frozen
        development preview uses that historical clock instead and explicitly reports freshness.mode=historical_preview.
        as_of is the actual selected cutoff. Only tickers with current-window news appear. snapshot_id identifies
        immutable content including public evidence metadata. freshness states the effective delay, generation time,
        source check time and latest enrichment observed. Missing history or a producer more than four minutes behind
        returns 503, never newer data in place of a delayed snapshot. watchlist_coverage separates known quiet names
        from names absent from the snapshot; absent does not mean an invalid symbol. Summary is scoped before
        search/ticker/sentiment/min_z filters and pagination; universe describes the entire stored snapshot. Null
        metrics stay null. Collection coverage is unverified; these calculations are not point-in-time backtests or
        confirmed alerts. Historical corrections can affect the model baseline. All responses: private, no-store.
        event_context reports separate SEC/insider availability, cutoff, generation time, age_seconds at the numeric
        cutoff (not HTTP time), and lookback windows. results[].event_context contains only that row's issuer-CIK
        context: up to 3 recent 8-K/6-K filings over 7 days by filed_at and up to 3 open-market insider clusters over 30
        days by known_at (the latest SEC filing time). Counts cover all eligible records; arrays contain the newest
        records. Each cluster includes up to 5 SEC evidence links, filings_count and evidence_truncated. 6-K coverage is
        selected ingested earnings releases only. Filings also carry news_uid, news_title, news_published and
        has_article for AlphAI article links. has_article means enrichment existed before the context cutoff; older
        snapshots default to false with null title/publication metadata. SEC URLs remain available as sec_url. Share
        classes with the same CIK share context, without changing news counts, scores, filters, ranking or row
        eligibility. No USD totals are reported. Context and its evidence follow the same tier delay and cursor; later
        corrections appear only in new snapshots. Context older than max_age_seconds=300 at the numeric cutoff is
        unavailable. Missing, disabled, stale or failed context does not fail news readings. Unavailable context has
        null row context; a row also has null context when it is absent from the context snapshot. Unsupported or
        unidentified issuers have explicit row status/reason and null counts. Supported issuers with no eligible stored
        records have zero counts. Available does not certify complete SEC coverage. Unknown or repeated query parameters
        are rejected.

        Args:
            window: Window ending at as_of, not at wall-clock now.
            scope: market scans all tickers without a tier ticker cap. watchlist requires authentication and reads only
                the caller's existing saved symbols, matched exactly. An empty list returns no results. Existing
                watchlist entitlements apply (default Free 10, Basic/Pro unlimited); no separate Radar allowance.
            market: Filter within the selected scope; international includes all intl:* markets.
            ticker: One exact ticker, case-insensitive. No alias expansion. Mutually exclusive with tickers.
            tickers: Comma-separated exact symbols, case-insensitive. No tier ticker cap; request text is bounded to
                16384 characters. Applied within scope, so it never bypasses watchlist ownership.
            search: Case-insensitive ticker substring for interactive search. Separate from exact ticker selection.
            sort: score, stories (total), model_stories, sentiment or sentiment_change (current minus prior window).
                Missing values last; ties use total story count then ticker.
            order: asc or desc (default). Missing metrics always remain last.
            sentiment: all, positive (>0.15), negative (<-0.15), mixed (inclusive -0.15 through 0.15). Null metrics
                match only all.
            min_z: Minimum descriptive activity score, not a confirmed candidate filter.
            limit: Page size only, never a tier ticker cap. Follow next_cursor with the same filters and page size.
            offset: Legacy zero-based pagination without snapshot pinning. Prefer cursor; cannot combine a nonzero
                offset with cursor.
            cursor: Opaque signed next_cursor or previous_cursor. Pins the complete snapshot, filters, tier and
                watchlist membership/owner. A changed context, removed snapshot or replaced content returns 409; restart
                without cursor. Never edit the token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Eligible snapshot and effective access rules

        Raises:
            ApiError: Invalid, unknown or repeated parameter Invalid authentication or watchlist requested without
                authentication Radar is disabled Cursor context changed or pinned snapshot expired; restart without
                cursor No valid eligible snapshot; never substitutes newer data Account burst or daily request quota
                reached; respect Retry-After ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_radar_snapshot(
                window=window,
                scope=scope,
                market=market,
                ticker=ticker,
                tickers=tickers,
                search=search,
                sort=sort,
                order=order,
                sentiment=sentiment,
                min_z=min_z,
                limit=limit,
                offset=offset,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRadarWithRawResponse:
        return self._with_raw_response


class RadarWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_radar_snapshot(
        self,
        *,
        window: WindowOrStr | None = Window._24H,
        scope: ScopeOrStr | None = Scope.MARKET,
        market: MarketOrStr | None = Market.ALL,
        ticker: str | None = "",
        tickers: str | None = "",
        search: str | None = "",
        sort: SortAlphAiRestRadarApiOrStr | None = SortAlphAiRestRadarApi.SCORE,
        order: OrderOrStr | None = Order.DESC,
        sentiment: SentimentAlphAiRestRadarApiOrStr | None = SentimentAlphAiRestRadarApi.ALL,
        min_z: float | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        cursor: str | None = "",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SnapshotPreviewDto, GetRadarSnapshotErrorBody]:
        """Descriptive news-activity ranking. Free delay 3600 seconds; Basic 900 seconds; Pro no added delay. Tier and
        watchlist owner come from authentication, never query parameters. The public API requires a Bearer API key and
        uses the normal request quotas. The whole snapshot, including supporting headlines and company names, is
        selected at or before wall-clock time minus the tier delay. Snapshots refresh every minute and are retained for
        three hours. Collection and enrichment add processing time. preview_reference_at is null in live mode; a frozen
        development preview uses that historical clock instead and explicitly reports freshness.mode=historical_preview.
        as_of is the actual selected cutoff. Only tickers with current-window news appear. snapshot_id identifies
        immutable content including public evidence metadata. freshness states the effective delay, generation time,
        source check time and latest enrichment observed. Missing history or a producer more than four minutes behind
        returns 503, never newer data in place of a delayed snapshot. watchlist_coverage separates known quiet names
        from names absent from the snapshot; absent does not mean an invalid symbol. Summary is scoped before
        search/ticker/sentiment/min_z filters and pagination; universe describes the entire stored snapshot. Null
        metrics stay null. Collection coverage is unverified; these calculations are not point-in-time backtests or
        confirmed alerts. Historical corrections can affect the model baseline. All responses: private, no-store.
        event_context reports separate SEC/insider availability, cutoff, generation time, age_seconds at the numeric
        cutoff (not HTTP time), and lookback windows. results[].event_context contains only that row's issuer-CIK
        context: up to 3 recent 8-K/6-K filings over 7 days by filed_at and up to 3 open-market insider clusters over 30
        days by known_at (the latest SEC filing time). Counts cover all eligible records; arrays contain the newest
        records. Each cluster includes up to 5 SEC evidence links, filings_count and evidence_truncated. 6-K coverage is
        selected ingested earnings releases only. Filings also carry news_uid, news_title, news_published and
        has_article for AlphAI article links. has_article means enrichment existed before the context cutoff; older
        snapshots default to false with null title/publication metadata. SEC URLs remain available as sec_url. Share
        classes with the same CIK share context, without changing news counts, scores, filters, ranking or row
        eligibility. No USD totals are reported. Context and its evidence follow the same tier delay and cursor; later
        corrections appear only in new snapshots. Context older than max_age_seconds=300 at the numeric cutoff is
        unavailable. Missing, disabled, stale or failed context does not fail news readings. Unavailable context has
        null row context; a row also has null context when it is absent from the context snapshot. Unsupported or
        unidentified issuers have explicit row status/reason and null counts. Supported issuers with no eligible stored
        records have zero counts. Available does not certify complete SEC coverage. Unknown or repeated query parameters
        are rejected.

        Args:
            window: Window ending at as_of, not at wall-clock now.
            scope: market scans all tickers without a tier ticker cap. watchlist requires authentication and reads only
                the caller's existing saved symbols, matched exactly. An empty list returns no results. Existing
                watchlist entitlements apply (default Free 10, Basic/Pro unlimited); no separate Radar allowance.
            market: Filter within the selected scope; international includes all intl:* markets.
            ticker: One exact ticker, case-insensitive. No alias expansion. Mutually exclusive with tickers.
            tickers: Comma-separated exact symbols, case-insensitive. No tier ticker cap; request text is bounded to
                16384 characters. Applied within scope, so it never bypasses watchlist ownership.
            search: Case-insensitive ticker substring for interactive search. Separate from exact ticker selection.
            sort: score, stories (total), model_stories, sentiment or sentiment_change (current minus prior window).
                Missing values last; ties use total story count then ticker.
            order: asc or desc (default). Missing metrics always remain last.
            sentiment: all, positive (>0.15), negative (<-0.15), mixed (inclusive -0.15 through 0.15). Null metrics
                match only all.
            min_z: Minimum descriptive activity score, not a confirmed candidate filter.
            limit: Page size only, never a tier ticker cap. Follow next_cursor with the same filters and page size.
            offset: Legacy zero-based pagination without snapshot pinning. Prefer cursor; cannot combine a nonzero
                offset with cursor.
            cursor: Opaque signed next_cursor or previous_cursor. Pins the complete snapshot, filters, tier and
                watchlist membership/owner. A changed context, removed snapshot or replaced content returns 409; restart
                without cursor. Never edit the token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/signals/snapshot/"),
            query_params=[
                param[WindowOrStr | None]("window", window),
                param[ScopeOrStr | None]("scope", scope),
                param[MarketOrStr | None]("market", market),
                param[str | None]("ticker", ticker),
                param[str | None]("tickers", tickers),
                param[str | None]("search", search),
                param[SortAlphAiRestRadarApiOrStr | None]("sort", sort),
                param[OrderOrStr | None]("order", order),
                param[SentimentAlphAiRestRadarApiOrStr | None]("sentiment", sentiment),
                param[float | None]("min_z", min_z),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[SnapshotPreviewDto],
            error_mapper=get_radar_snapshot_error_mapper,
            request_options=request_options,
        )


class AsyncRadarWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_radar_snapshot(
        self,
        *,
        window: WindowOrStr | None = Window._24H,
        scope: ScopeOrStr | None = Scope.MARKET,
        market: MarketOrStr | None = Market.ALL,
        ticker: str | None = "",
        tickers: str | None = "",
        search: str | None = "",
        sort: SortAlphAiRestRadarApiOrStr | None = SortAlphAiRestRadarApi.SCORE,
        order: OrderOrStr | None = Order.DESC,
        sentiment: SentimentAlphAiRestRadarApiOrStr | None = SentimentAlphAiRestRadarApi.ALL,
        min_z: float | None = None,
        limit: int | None = 50,
        offset: int | None = 0,
        cursor: str | None = "",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SnapshotPreviewDto, GetRadarSnapshotErrorBody]:
        """Descriptive news-activity ranking. Free delay 3600 seconds; Basic 900 seconds; Pro no added delay. Tier and
        watchlist owner come from authentication, never query parameters. The public API requires a Bearer API key and
        uses the normal request quotas. The whole snapshot, including supporting headlines and company names, is
        selected at or before wall-clock time minus the tier delay. Snapshots refresh every minute and are retained for
        three hours. Collection and enrichment add processing time. preview_reference_at is null in live mode; a frozen
        development preview uses that historical clock instead and explicitly reports freshness.mode=historical_preview.
        as_of is the actual selected cutoff. Only tickers with current-window news appear. snapshot_id identifies
        immutable content including public evidence metadata. freshness states the effective delay, generation time,
        source check time and latest enrichment observed. Missing history or a producer more than four minutes behind
        returns 503, never newer data in place of a delayed snapshot. watchlist_coverage separates known quiet names
        from names absent from the snapshot; absent does not mean an invalid symbol. Summary is scoped before
        search/ticker/sentiment/min_z filters and pagination; universe describes the entire stored snapshot. Null
        metrics stay null. Collection coverage is unverified; these calculations are not point-in-time backtests or
        confirmed alerts. Historical corrections can affect the model baseline. All responses: private, no-store.
        event_context reports separate SEC/insider availability, cutoff, generation time, age_seconds at the numeric
        cutoff (not HTTP time), and lookback windows. results[].event_context contains only that row's issuer-CIK
        context: up to 3 recent 8-K/6-K filings over 7 days by filed_at and up to 3 open-market insider clusters over 30
        days by known_at (the latest SEC filing time). Counts cover all eligible records; arrays contain the newest
        records. Each cluster includes up to 5 SEC evidence links, filings_count and evidence_truncated. 6-K coverage is
        selected ingested earnings releases only. Filings also carry news_uid, news_title, news_published and
        has_article for AlphAI article links. has_article means enrichment existed before the context cutoff; older
        snapshots default to false with null title/publication metadata. SEC URLs remain available as sec_url. Share
        classes with the same CIK share context, without changing news counts, scores, filters, ranking or row
        eligibility. No USD totals are reported. Context and its evidence follow the same tier delay and cursor; later
        corrections appear only in new snapshots. Context older than max_age_seconds=300 at the numeric cutoff is
        unavailable. Missing, disabled, stale or failed context does not fail news readings. Unavailable context has
        null row context; a row also has null context when it is absent from the context snapshot. Unsupported or
        unidentified issuers have explicit row status/reason and null counts. Supported issuers with no eligible stored
        records have zero counts. Available does not certify complete SEC coverage. Unknown or repeated query parameters
        are rejected.

        Args:
            window: Window ending at as_of, not at wall-clock now.
            scope: market scans all tickers without a tier ticker cap. watchlist requires authentication and reads only
                the caller's existing saved symbols, matched exactly. An empty list returns no results. Existing
                watchlist entitlements apply (default Free 10, Basic/Pro unlimited); no separate Radar allowance.
            market: Filter within the selected scope; international includes all intl:* markets.
            ticker: One exact ticker, case-insensitive. No alias expansion. Mutually exclusive with tickers.
            tickers: Comma-separated exact symbols, case-insensitive. No tier ticker cap; request text is bounded to
                16384 characters. Applied within scope, so it never bypasses watchlist ownership.
            search: Case-insensitive ticker substring for interactive search. Separate from exact ticker selection.
            sort: score, stories (total), model_stories, sentiment or sentiment_change (current minus prior window).
                Missing values last; ties use total story count then ticker.
            order: asc or desc (default). Missing metrics always remain last.
            sentiment: all, positive (>0.15), negative (<-0.15), mixed (inclusive -0.15 through 0.15). Null metrics
                match only all.
            min_z: Minimum descriptive activity score, not a confirmed candidate filter.
            limit: Page size only, never a tier ticker cap. Follow next_cursor with the same filters and page size.
            offset: Legacy zero-based pagination without snapshot pinning. Prefer cursor; cannot combine a nonzero
                offset with cursor.
            cursor: Opaque signed next_cursor or previous_cursor. Pins the complete snapshot, filters, tier and
                watchlist membership/owner. A changed context, removed snapshot or replaced content returns 409; restart
                without cursor. Never edit the token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/signals/snapshot/"),
            query_params=[
                param[WindowOrStr | None]("window", window),
                param[ScopeOrStr | None]("scope", scope),
                param[MarketOrStr | None]("market", market),
                param[str | None]("ticker", ticker),
                param[str | None]("tickers", tickers),
                param[str | None]("search", search),
                param[SortAlphAiRestRadarApiOrStr | None]("sort", sort),
                param[OrderOrStr | None]("order", order),
                param[SentimentAlphAiRestRadarApiOrStr | None]("sentiment", sentiment),
                param[float | None]("min_z", min_z),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[SnapshotPreviewDto],
            error_mapper=get_radar_snapshot_error_mapper,
            request_options=request_options,
        )
