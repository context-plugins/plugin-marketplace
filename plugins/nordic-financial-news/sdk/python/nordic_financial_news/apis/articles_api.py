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
from ..errors.get_api_v1_articles_by_id_error import (
    GetApiV1ArticlesByIdErrorBody,
    get_api_v1_articles_by_id_error_mapper,
)
from ..errors.get_api_v1_articles_error import GetApiV1ArticlesErrorBody, get_api_v1_articles_error_mapper
from ..models.api_v1_articles_response import ApiV1ArticlesResponse
from ..models.api_v1_articles_response1 import ApiV1ArticlesResponse1
from ..models.enums.mode import ModeOrStr
from ..models.enums.sort import SortOrStr
from ..server.server import Server


class ArticlesApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ArticlesApiWithRawResponse(client, server, auth)

    def get_api_v1_articles(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        mode: ModeOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        content_type: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        primary_only: bool | None = None,
        include_peripheral: bool | None = None,
        ids: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ArticlesResponse1:
        """Returns a paginated list of live articles ordered by publication date (newest first). Each article includes
        an English headline, a short summary, and key points, with ``article_url`` linking to the full original-language
        article at the source.

        ## Filtering Supports filtering by country, category, source, company ticker, and content type. Use ``GET
        /api/v1/sources`` to discover source IDs for the ``sources`` filter. Use ``ids`` for batch lookup of specific
        articles.

        ## Search Use ``q`` for full-text search: relevance-ranked by default, newest-first with ``sort=latest``, or
        matched by meaning with ``mode=semantic``.

        ## Polling for updates Use ``updated_after`` for incremental syncing.

        ## Pagination Responses include cursor-based pagination and support field projection to minimize payload size.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            limit: Number of articles to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q`` unless ``sort=latest`` is also given.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. Available fields:
                ``id``, ``title``, ``article_url``, ``published_at``, ``updated_at``, ``content_type``, ``source``,
                ``company_ids``, ``country``, ``category``.
            updated_after: ISO 8601 datetime. Returns only articles updated after this timestamp. Use this for
                incremental sync: store the timestamp of your last completed sync, then request only newer results on
                each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page (see the Real-Time Updates guide at
                https://docs.nordicfinancialnews.com). Mutually exclusive with ``sort=latest`` (with or without ``q``).
                An ``updated_after`` walk is always ordered by ``updated_at``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword. The match runs over each
                article's translated title and summary, so it answers thematic questions a keyword match cannot
                ("defense contract wins", "battery cell capacity expansion"). Requires ``q``, is mutually exclusive with
                ``sort``, ``cursor``, ``updated_after`` and ``ids``, and returns a single ranked page capped by
                ``limit``; every other filter (``country``, ``category``, ``sources``, ``source_type``, ``ticker``,
                ``company``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, ``watchlist``,
                ``content_type``, ``published_after``/``published_before``) remains a hard filter applied before the
                match, not after. Each article gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp).
                Compare it only within one response, never across responses: the scale is model-dependent. Ranking also
                blends in a small recency bonus that ``distance`` does not reflect. A server-side relevance floor drops
                weak matches, so a page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does
                not recover floored rows. On plans with restricted article access the response carries ``plan_limited:
                true``; the plan article count cap does not apply in this mode, only the source and age restrictions.
                The response ``pagination`` object carries ``count`` only. There is no ``next_cursor``, since a distance
                ranking cannot be cursor-paginated, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to keyword matching.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Disabled sources resolve to empty results.
            source_type: Filter by source type, comma-separated. Valid values: ``news_publication``, ``wire_service``,
                ``press_release``, ``government``, ``trade_publication``, ``blog``, ``stock_exchange``, ``research``.
                Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).
            ticker: Filter by company stock ticker symbol, comma-separated for several (e.g. ``VOLV-B`` or
                ``VOLV-B,ERIC-B``; matches any of them). Accepts full tickers with exchange suffix (e.g. ``VOLV-B.ST``).
                Returns articles where the company is a principal association (subject, partner, investor, or
                competitor) — a company named only as the article's source, an advisor, or a passing mention does not
                match. Former tickers resolve too: a company that renamed or moved venues is still reachable by an old
                ticker; the returned company ``former_tickers`` lists any such historical tickers. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. Combined with ``company``, the two filters intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Matches only the company's principal associations (subject, partner, investor, or competitor); a passing
                mention does not match. Every value must resolve, or the request is rejected with ``400`` naming the
                unknown ids. Combined with ``ticker``, the two filters intersect.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs). Returns articles about companies actively listed there. A company counts only through a
                principal association (subject, partner, investor, or competitor); a passing mention does not qualify.
                Case-insensitive.
            market: Filter to articles about companies with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal domicile).
                Includes foreign-domiciled but locally-listed issuers. A company counts only through a principal
                association (subject, partner, investor, or competitor); a passing mention does not qualify.
            domicile: Filter to articles about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions. A company counts only through a principal association
                (subject, partner, investor, or competitor); a passing mention does not qualify.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns
                articles about companies in that index. A company counts only through a principal association (subject,
                partner, investor, or competitor); a passing mention does not qualify. Case-insensitive for symbols.
            sector: Filter by company sector. A company counts only through a principal association (subject, partner,
                investor, or competitor); a passing mention does not qualify. Case-sensitive; must exactly match one of:
                ``Communication Services``, ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``,
                ``Financials``, ``Health Care``, ``Industrials``, ``Information Technology``, ``Materials``, ``Real
                Estate``, ``Utilities``.
            content_type: Filter by article content type, comma-separated. Valid values: ``news``, ``analysis``,
                ``press_release``, ``market_commentary``, ``market_news``, ``trading_halt``, ``trading_event``,
                ``other``. ``GET /api/v1/meta`` lists them as ``content_types``. An unrecognized value returns 400
                naming the bad value(s).
            published_after: ISO 8601 datetime. Returns articles published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns articles published before this timestamp.
            listed: When ``true``, only return articles about at least one company with an active listing on any
                exchange, through a principal association (subject, partner, investor, or competitor). A passing mention
                does not qualify, and ``include_peripheral`` does not change this. A company whose listings are all
                delisted does not count. Hidden and unverified companies do not count.
            watchlist: Restricts to articles about companies in a single watchlist, identified by its ``id`` (from the
                List Watchlists endpoint), through a principal association (subject, partner, investor, or competitor) —
                a passing mention does not qualify. An unknown id returns no articles. Requires ``read:watchlist``
                scope.
            primary_only: When ``true``, narrows further within the already-principal match, to only articles where the
                matched company (``ticker``, ``company``, or ``watchlist``) is the primary subject. Requires ``ticker``,
                ``company``, or ``watchlist``, and returns 400 without one.
            include_peripheral: When ``true``, widen the ``ticker``, ``company`` and ``watchlist`` filters — and each
                article's ``company_ids`` — back to peripheral associations (a company named only as the article's
                source, an advisor, or a passing mention), which are otherwise excluded. Default ``false``
                (principal-only: subject, partner, investor, competitor). ``primary_only`` still wins where it applies:
                the primary-subject restriction is kept even when peripheral is requested. Not honored on ``GET
                /api/v1/search``.
            ids: Comma-separated list of article IDs for batch lookup (max 100). Cannot be combined with ``cursor``,
                ``updated_after``, or ``sort``. Returns a single page: ``pagination`` carries ``count`` only, with no
                ``next_cursor``. IDs that don't resolve, or that your plan can't access, are omitted rather than
                rejected, so ``count`` can be less than the number of IDs sent. Key off each row's ``id``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Articles retrieved successfully

        Raises:
            ApiError: unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_articles(
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                q=q,
                sort=sort,
                mode=mode,
                country=country,
                category=category,
                sources=sources,
                source_type=source_type,
                ticker=ticker,
                company=company,
                exchange=exchange,
                market=market,
                domicile=domicile,
                index=index,
                sector=sector,
                content_type=content_type,
                published_after=published_after,
                published_before=published_before,
                listed=listed,
                watchlist=watchlist,
                primary_only=primary_only,
                include_peripheral=include_peripheral,
                ids=ids,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_articles_by_id(
        self,
        id_: str,
        *,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ArticlesResponse:
        """Returns the details of a single article: an English headline, a short summary, key points, and associated
        companies, along with ``article_url`` pointing to the full original-language article at the source. Supports
        conditional requests via ``If-None-Match`` for efficient caching.

        Args:
            id_: Article ID (e.g. ``art_abc123def``).
            include_peripheral: When ``true``, widen ``companies`` and ``company_ids`` back to peripheral associations
                (a company named only as the article's source, an advisor, or a passing mention), which are otherwise
                excluded. Default ``false`` (principal-only). Each ``companies[]`` entry always carries
                ``association_tier`` regardless of this parameter.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the article has not
                changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Article found

        Raises:
            ApiError: Article not found Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_articles_by_id(
                id_,
                include_peripheral=include_peripheral,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ArticlesApiWithRawResponse:
        return self._with_raw_response


class AsyncArticlesApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncArticlesApiWithRawResponse(client, server, auth)

    async def get_api_v1_articles(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        mode: ModeOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        content_type: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        primary_only: bool | None = None,
        include_peripheral: bool | None = None,
        ids: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ArticlesResponse1:
        """Returns a paginated list of live articles ordered by publication date (newest first). Each article includes
        an English headline, a short summary, and key points, with ``article_url`` linking to the full original-language
        article at the source.

        ## Filtering Supports filtering by country, category, source, company ticker, and content type. Use ``GET
        /api/v1/sources`` to discover source IDs for the ``sources`` filter. Use ``ids`` for batch lookup of specific
        articles.

        ## Search Use ``q`` for full-text search: relevance-ranked by default, newest-first with ``sort=latest``, or
        matched by meaning with ``mode=semantic``.

        ## Polling for updates Use ``updated_after`` for incremental syncing.

        ## Pagination Responses include cursor-based pagination and support field projection to minimize payload size.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            limit: Number of articles to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q`` unless ``sort=latest`` is also given.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. Available fields:
                ``id``, ``title``, ``article_url``, ``published_at``, ``updated_at``, ``content_type``, ``source``,
                ``company_ids``, ``country``, ``category``.
            updated_after: ISO 8601 datetime. Returns only articles updated after this timestamp. Use this for
                incremental sync: store the timestamp of your last completed sync, then request only newer results on
                each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page (see the Real-Time Updates guide at
                https://docs.nordicfinancialnews.com). Mutually exclusive with ``sort=latest`` (with or without ``q``).
                An ``updated_after`` walk is always ordered by ``updated_at``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword. The match runs over each
                article's translated title and summary, so it answers thematic questions a keyword match cannot
                ("defense contract wins", "battery cell capacity expansion"). Requires ``q``, is mutually exclusive with
                ``sort``, ``cursor``, ``updated_after`` and ``ids``, and returns a single ranked page capped by
                ``limit``; every other filter (``country``, ``category``, ``sources``, ``source_type``, ``ticker``,
                ``company``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, ``watchlist``,
                ``content_type``, ``published_after``/``published_before``) remains a hard filter applied before the
                match, not after. Each article gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp).
                Compare it only within one response, never across responses: the scale is model-dependent. Ranking also
                blends in a small recency bonus that ``distance`` does not reflect. A server-side relevance floor drops
                weak matches, so a page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does
                not recover floored rows. On plans with restricted article access the response carries ``plan_limited:
                true``; the plan article count cap does not apply in this mode, only the source and age restrictions.
                The response ``pagination`` object carries ``count`` only. There is no ``next_cursor``, since a distance
                ranking cannot be cursor-paginated, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to keyword matching.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Disabled sources resolve to empty results.
            source_type: Filter by source type, comma-separated. Valid values: ``news_publication``, ``wire_service``,
                ``press_release``, ``government``, ``trade_publication``, ``blog``, ``stock_exchange``, ``research``.
                Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).
            ticker: Filter by company stock ticker symbol, comma-separated for several (e.g. ``VOLV-B`` or
                ``VOLV-B,ERIC-B``; matches any of them). Accepts full tickers with exchange suffix (e.g. ``VOLV-B.ST``).
                Returns articles where the company is a principal association (subject, partner, investor, or
                competitor) — a company named only as the article's source, an advisor, or a passing mention does not
                match. Former tickers resolve too: a company that renamed or moved venues is still reachable by an old
                ticker; the returned company ``former_tickers`` lists any such historical tickers. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. Combined with ``company``, the two filters intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Matches only the company's principal associations (subject, partner, investor, or competitor); a passing
                mention does not match. Every value must resolve, or the request is rejected with ``400`` naming the
                unknown ids. Combined with ``ticker``, the two filters intersect.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs). Returns articles about companies actively listed there. A company counts only through a
                principal association (subject, partner, investor, or competitor); a passing mention does not qualify.
                Case-insensitive.
            market: Filter to articles about companies with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal domicile).
                Includes foreign-domiciled but locally-listed issuers. A company counts only through a principal
                association (subject, partner, investor, or competitor); a passing mention does not qualify.
            domicile: Filter to articles about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions. A company counts only through a principal association
                (subject, partner, investor, or competitor); a passing mention does not qualify.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns
                articles about companies in that index. A company counts only through a principal association (subject,
                partner, investor, or competitor); a passing mention does not qualify. Case-insensitive for symbols.
            sector: Filter by company sector. A company counts only through a principal association (subject, partner,
                investor, or competitor); a passing mention does not qualify. Case-sensitive; must exactly match one of:
                ``Communication Services``, ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``,
                ``Financials``, ``Health Care``, ``Industrials``, ``Information Technology``, ``Materials``, ``Real
                Estate``, ``Utilities``.
            content_type: Filter by article content type, comma-separated. Valid values: ``news``, ``analysis``,
                ``press_release``, ``market_commentary``, ``market_news``, ``trading_halt``, ``trading_event``,
                ``other``. ``GET /api/v1/meta`` lists them as ``content_types``. An unrecognized value returns 400
                naming the bad value(s).
            published_after: ISO 8601 datetime. Returns articles published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns articles published before this timestamp.
            listed: When ``true``, only return articles about at least one company with an active listing on any
                exchange, through a principal association (subject, partner, investor, or competitor). A passing mention
                does not qualify, and ``include_peripheral`` does not change this. A company whose listings are all
                delisted does not count. Hidden and unverified companies do not count.
            watchlist: Restricts to articles about companies in a single watchlist, identified by its ``id`` (from the
                List Watchlists endpoint), through a principal association (subject, partner, investor, or competitor) —
                a passing mention does not qualify. An unknown id returns no articles. Requires ``read:watchlist``
                scope.
            primary_only: When ``true``, narrows further within the already-principal match, to only articles where the
                matched company (``ticker``, ``company``, or ``watchlist``) is the primary subject. Requires ``ticker``,
                ``company``, or ``watchlist``, and returns 400 without one.
            include_peripheral: When ``true``, widen the ``ticker``, ``company`` and ``watchlist`` filters — and each
                article's ``company_ids`` — back to peripheral associations (a company named only as the article's
                source, an advisor, or a passing mention), which are otherwise excluded. Default ``false``
                (principal-only: subject, partner, investor, competitor). ``primary_only`` still wins where it applies:
                the primary-subject restriction is kept even when peripheral is requested. Not honored on ``GET
                /api/v1/search``.
            ids: Comma-separated list of article IDs for batch lookup (max 100). Cannot be combined with ``cursor``,
                ``updated_after``, or ``sort``. Returns a single page: ``pagination`` carries ``count`` only, with no
                ``next_cursor``. IDs that don't resolve, or that your plan can't access, are omitted rather than
                rejected, so ``count`` can be less than the number of IDs sent. Key off each row's ``id``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Articles retrieved successfully

        Raises:
            ApiError: unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_articles(
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                q=q,
                sort=sort,
                mode=mode,
                country=country,
                category=category,
                sources=sources,
                source_type=source_type,
                ticker=ticker,
                company=company,
                exchange=exchange,
                market=market,
                domicile=domicile,
                index=index,
                sector=sector,
                content_type=content_type,
                published_after=published_after,
                published_before=published_before,
                listed=listed,
                watchlist=watchlist,
                primary_only=primary_only,
                include_peripheral=include_peripheral,
                ids=ids,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_articles_by_id(
        self,
        id_: str,
        *,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ArticlesResponse:
        """Returns the details of a single article: an English headline, a short summary, key points, and associated
        companies, along with ``article_url`` pointing to the full original-language article at the source. Supports
        conditional requests via ``If-None-Match`` for efficient caching.

        Args:
            id_: Article ID (e.g. ``art_abc123def``).
            include_peripheral: When ``true``, widen ``companies`` and ``company_ids`` back to peripheral associations
                (a company named only as the article's source, an advisor, or a passing mention), which are otherwise
                excluded. Default ``false`` (principal-only). Each ``companies[]`` entry always carries
                ``association_tier`` regardless of this parameter.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the article has not
                changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Article found

        Raises:
            ApiError: Article not found Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_articles_by_id(
                id_,
                include_peripheral=include_peripheral,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncArticlesApiWithRawResponse:
        return self._with_raw_response


class ArticlesApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_articles(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        mode: ModeOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        content_type: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        primary_only: bool | None = None,
        include_peripheral: bool | None = None,
        ids: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ArticlesResponse1, GetApiV1ArticlesErrorBody]:
        """Returns a paginated list of live articles ordered by publication date (newest first). Each article includes
        an English headline, a short summary, and key points, with ``article_url`` linking to the full original-language
        article at the source.

        ## Filtering Supports filtering by country, category, source, company ticker, and content type. Use ``GET
        /api/v1/sources`` to discover source IDs for the ``sources`` filter. Use ``ids`` for batch lookup of specific
        articles.

        ## Search Use ``q`` for full-text search: relevance-ranked by default, newest-first with ``sort=latest``, or
        matched by meaning with ``mode=semantic``.

        ## Polling for updates Use ``updated_after`` for incremental syncing.

        ## Pagination Responses include cursor-based pagination and support field projection to minimize payload size.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            limit: Number of articles to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q`` unless ``sort=latest`` is also given.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. Available fields:
                ``id``, ``title``, ``article_url``, ``published_at``, ``updated_at``, ``content_type``, ``source``,
                ``company_ids``, ``country``, ``category``.
            updated_after: ISO 8601 datetime. Returns only articles updated after this timestamp. Use this for
                incremental sync: store the timestamp of your last completed sync, then request only newer results on
                each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page (see the Real-Time Updates guide at
                https://docs.nordicfinancialnews.com). Mutually exclusive with ``sort=latest`` (with or without ``q``).
                An ``updated_after`` walk is always ordered by ``updated_at``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword. The match runs over each
                article's translated title and summary, so it answers thematic questions a keyword match cannot
                ("defense contract wins", "battery cell capacity expansion"). Requires ``q``, is mutually exclusive with
                ``sort``, ``cursor``, ``updated_after`` and ``ids``, and returns a single ranked page capped by
                ``limit``; every other filter (``country``, ``category``, ``sources``, ``source_type``, ``ticker``,
                ``company``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, ``watchlist``,
                ``content_type``, ``published_after``/``published_before``) remains a hard filter applied before the
                match, not after. Each article gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp).
                Compare it only within one response, never across responses: the scale is model-dependent. Ranking also
                blends in a small recency bonus that ``distance`` does not reflect. A server-side relevance floor drops
                weak matches, so a page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does
                not recover floored rows. On plans with restricted article access the response carries ``plan_limited:
                true``; the plan article count cap does not apply in this mode, only the source and age restrictions.
                The response ``pagination`` object carries ``count`` only. There is no ``next_cursor``, since a distance
                ranking cannot be cursor-paginated, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to keyword matching.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Disabled sources resolve to empty results.
            source_type: Filter by source type, comma-separated. Valid values: ``news_publication``, ``wire_service``,
                ``press_release``, ``government``, ``trade_publication``, ``blog``, ``stock_exchange``, ``research``.
                Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).
            ticker: Filter by company stock ticker symbol, comma-separated for several (e.g. ``VOLV-B`` or
                ``VOLV-B,ERIC-B``; matches any of them). Accepts full tickers with exchange suffix (e.g. ``VOLV-B.ST``).
                Returns articles where the company is a principal association (subject, partner, investor, or
                competitor) — a company named only as the article's source, an advisor, or a passing mention does not
                match. Former tickers resolve too: a company that renamed or moved venues is still reachable by an old
                ticker; the returned company ``former_tickers`` lists any such historical tickers. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. Combined with ``company``, the two filters intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Matches only the company's principal associations (subject, partner, investor, or competitor); a passing
                mention does not match. Every value must resolve, or the request is rejected with ``400`` naming the
                unknown ids. Combined with ``ticker``, the two filters intersect.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs). Returns articles about companies actively listed there. A company counts only through a
                principal association (subject, partner, investor, or competitor); a passing mention does not qualify.
                Case-insensitive.
            market: Filter to articles about companies with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal domicile).
                Includes foreign-domiciled but locally-listed issuers. A company counts only through a principal
                association (subject, partner, investor, or competitor); a passing mention does not qualify.
            domicile: Filter to articles about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions. A company counts only through a principal association
                (subject, partner, investor, or competitor); a passing mention does not qualify.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns
                articles about companies in that index. A company counts only through a principal association (subject,
                partner, investor, or competitor); a passing mention does not qualify. Case-insensitive for symbols.
            sector: Filter by company sector. A company counts only through a principal association (subject, partner,
                investor, or competitor); a passing mention does not qualify. Case-sensitive; must exactly match one of:
                ``Communication Services``, ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``,
                ``Financials``, ``Health Care``, ``Industrials``, ``Information Technology``, ``Materials``, ``Real
                Estate``, ``Utilities``.
            content_type: Filter by article content type, comma-separated. Valid values: ``news``, ``analysis``,
                ``press_release``, ``market_commentary``, ``market_news``, ``trading_halt``, ``trading_event``,
                ``other``. ``GET /api/v1/meta`` lists them as ``content_types``. An unrecognized value returns 400
                naming the bad value(s).
            published_after: ISO 8601 datetime. Returns articles published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns articles published before this timestamp.
            listed: When ``true``, only return articles about at least one company with an active listing on any
                exchange, through a principal association (subject, partner, investor, or competitor). A passing mention
                does not qualify, and ``include_peripheral`` does not change this. A company whose listings are all
                delisted does not count. Hidden and unverified companies do not count.
            watchlist: Restricts to articles about companies in a single watchlist, identified by its ``id`` (from the
                List Watchlists endpoint), through a principal association (subject, partner, investor, or competitor) —
                a passing mention does not qualify. An unknown id returns no articles. Requires ``read:watchlist``
                scope.
            primary_only: When ``true``, narrows further within the already-principal match, to only articles where the
                matched company (``ticker``, ``company``, or ``watchlist``) is the primary subject. Requires ``ticker``,
                ``company``, or ``watchlist``, and returns 400 without one.
            include_peripheral: When ``true``, widen the ``ticker``, ``company`` and ``watchlist`` filters — and each
                article's ``company_ids`` — back to peripheral associations (a company named only as the article's
                source, an advisor, or a passing mention), which are otherwise excluded. Default ``false``
                (principal-only: subject, partner, investor, competitor). ``primary_only`` still wins where it applies:
                the primary-subject restriction is kept even when peripheral is requested. Not honored on ``GET
                /api/v1/search``.
            ids: Comma-separated list of article IDs for batch lookup (max 100). Cannot be combined with ``cursor``,
                ``updated_after``, or ``sort``. Returns a single page: ``pagination`` carries ``count`` only, with no
                ``next_cursor``. IDs that don't resolve, or that your plan can't access, are omitted rather than
                rejected, so ``count`` can be less than the number of IDs sent. Key off each row's ``id``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/articles"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[SortOrStr | None]("sort", sort),
                param[ModeOrStr | None]("mode", mode),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("source_type", source_type),
                param[str | None]("ticker", ticker),
                param[str | None]("company", company),
                param[str | None]("exchange", exchange),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("index", index),
                param[str | None]("sector", sector),
                param[str | None]("content_type", content_type),
                param[str | None]("published_after", published_after),
                param[str | None]("published_before", published_before),
                param[str | None]("listed", listed),
                param[str | None]("watchlist", watchlist),
                param[bool | None]("primary_only", primary_only),
                param[bool | None]("include_peripheral", include_peripheral),
                param[str | None]("ids", ids),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ArticlesResponse1],
            error_mapper=get_api_v1_articles_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_articles_by_id(
        self,
        id_: str,
        *,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ArticlesResponse, GetApiV1ArticlesByIdErrorBody]:
        """Returns the details of a single article: an English headline, a short summary, key points, and associated
        companies, along with ``article_url`` pointing to the full original-language article at the source. Supports
        conditional requests via ``If-None-Match`` for efficient caching.

        Args:
            id_: Article ID (e.g. ``art_abc123def``).
            include_peripheral: When ``true``, widen ``companies`` and ``company_ids`` back to peripheral associations
                (a company named only as the article's source, an advisor, or a passing mention), which are otherwise
                excluded. Default ``false`` (principal-only). Each ``companies[]`` entry always carries
                ``association_tier`` regardless of this parameter.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the article has not
                changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/articles/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("include_peripheral", include_peripheral)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ArticlesResponse],
            error_mapper=get_api_v1_articles_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncArticlesApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_articles(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        mode: ModeOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        content_type: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        primary_only: bool | None = None,
        include_peripheral: bool | None = None,
        ids: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ArticlesResponse1, GetApiV1ArticlesErrorBody]:
        """Returns a paginated list of live articles ordered by publication date (newest first). Each article includes
        an English headline, a short summary, and key points, with ``article_url`` linking to the full original-language
        article at the source.

        ## Filtering Supports filtering by country, category, source, company ticker, and content type. Use ``GET
        /api/v1/sources`` to discover source IDs for the ``sources`` filter. Use ``ids`` for batch lookup of specific
        articles.

        ## Search Use ``q`` for full-text search: relevance-ranked by default, newest-first with ``sort=latest``, or
        matched by meaning with ``mode=semantic``.

        ## Polling for updates Use ``updated_after`` for incremental syncing.

        ## Pagination Responses include cursor-based pagination and support field projection to minimize payload size.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            limit: Number of articles to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q`` unless ``sort=latest`` is also given.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. Available fields:
                ``id``, ``title``, ``article_url``, ``published_at``, ``updated_at``, ``content_type``, ``source``,
                ``company_ids``, ``country``, ``category``.
            updated_after: ISO 8601 datetime. Returns only articles updated after this timestamp. Use this for
                incremental sync: store the timestamp of your last completed sync, then request only newer results on
                each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page (see the Real-Time Updates guide at
                https://docs.nordicfinancialnews.com). Mutually exclusive with ``sort=latest`` (with or without ``q``).
                An ``updated_after`` walk is always ordered by ``updated_at``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword. The match runs over each
                article's translated title and summary, so it answers thematic questions a keyword match cannot
                ("defense contract wins", "battery cell capacity expansion"). Requires ``q``, is mutually exclusive with
                ``sort``, ``cursor``, ``updated_after`` and ``ids``, and returns a single ranked page capped by
                ``limit``; every other filter (``country``, ``category``, ``sources``, ``source_type``, ``ticker``,
                ``company``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, ``watchlist``,
                ``content_type``, ``published_after``/``published_before``) remains a hard filter applied before the
                match, not after. Each article gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp).
                Compare it only within one response, never across responses: the scale is model-dependent. Ranking also
                blends in a small recency bonus that ``distance`` does not reflect. A server-side relevance floor drops
                weak matches, so a page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does
                not recover floored rows. On plans with restricted article access the response carries ``plan_limited:
                true``; the plan article count cap does not apply in this mode, only the source and age restrictions.
                The response ``pagination`` object carries ``count`` only. There is no ``next_cursor``, since a distance
                ranking cannot be cursor-paginated, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to keyword matching.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Disabled sources resolve to empty results.
            source_type: Filter by source type, comma-separated. Valid values: ``news_publication``, ``wire_service``,
                ``press_release``, ``government``, ``trade_publication``, ``blog``, ``stock_exchange``, ``research``.
                Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).
            ticker: Filter by company stock ticker symbol, comma-separated for several (e.g. ``VOLV-B`` or
                ``VOLV-B,ERIC-B``; matches any of them). Accepts full tickers with exchange suffix (e.g. ``VOLV-B.ST``).
                Returns articles where the company is a principal association (subject, partner, investor, or
                competitor) — a company named only as the article's source, an advisor, or a passing mention does not
                match. Former tickers resolve too: a company that renamed or moved venues is still reachable by an old
                ticker; the returned company ``former_tickers`` lists any such historical tickers. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. Combined with ``company``, the two filters intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Matches only the company's principal associations (subject, partner, investor, or competitor); a passing
                mention does not match. Every value must resolve, or the request is rejected with ``400`` naming the
                unknown ids. Combined with ``ticker``, the two filters intersect.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs). Returns articles about companies actively listed there. A company counts only through a
                principal association (subject, partner, investor, or competitor); a passing mention does not qualify.
                Case-insensitive.
            market: Filter to articles about companies with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal domicile).
                Includes foreign-domiciled but locally-listed issuers. A company counts only through a principal
                association (subject, partner, investor, or competitor); a passing mention does not qualify.
            domicile: Filter to articles about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions. A company counts only through a principal association
                (subject, partner, investor, or competitor); a passing mention does not qualify.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns
                articles about companies in that index. A company counts only through a principal association (subject,
                partner, investor, or competitor); a passing mention does not qualify. Case-insensitive for symbols.
            sector: Filter by company sector. A company counts only through a principal association (subject, partner,
                investor, or competitor); a passing mention does not qualify. Case-sensitive; must exactly match one of:
                ``Communication Services``, ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``,
                ``Financials``, ``Health Care``, ``Industrials``, ``Information Technology``, ``Materials``, ``Real
                Estate``, ``Utilities``.
            content_type: Filter by article content type, comma-separated. Valid values: ``news``, ``analysis``,
                ``press_release``, ``market_commentary``, ``market_news``, ``trading_halt``, ``trading_event``,
                ``other``. ``GET /api/v1/meta`` lists them as ``content_types``. An unrecognized value returns 400
                naming the bad value(s).
            published_after: ISO 8601 datetime. Returns articles published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns articles published before this timestamp.
            listed: When ``true``, only return articles about at least one company with an active listing on any
                exchange, through a principal association (subject, partner, investor, or competitor). A passing mention
                does not qualify, and ``include_peripheral`` does not change this. A company whose listings are all
                delisted does not count. Hidden and unverified companies do not count.
            watchlist: Restricts to articles about companies in a single watchlist, identified by its ``id`` (from the
                List Watchlists endpoint), through a principal association (subject, partner, investor, or competitor) —
                a passing mention does not qualify. An unknown id returns no articles. Requires ``read:watchlist``
                scope.
            primary_only: When ``true``, narrows further within the already-principal match, to only articles where the
                matched company (``ticker``, ``company``, or ``watchlist``) is the primary subject. Requires ``ticker``,
                ``company``, or ``watchlist``, and returns 400 without one.
            include_peripheral: When ``true``, widen the ``ticker``, ``company`` and ``watchlist`` filters — and each
                article's ``company_ids`` — back to peripheral associations (a company named only as the article's
                source, an advisor, or a passing mention), which are otherwise excluded. Default ``false``
                (principal-only: subject, partner, investor, competitor). ``primary_only`` still wins where it applies:
                the primary-subject restriction is kept even when peripheral is requested. Not honored on ``GET
                /api/v1/search``.
            ids: Comma-separated list of article IDs for batch lookup (max 100). Cannot be combined with ``cursor``,
                ``updated_after``, or ``sort``. Returns a single page: ``pagination`` carries ``count`` only, with no
                ``next_cursor``. IDs that don't resolve, or that your plan can't access, are omitted rather than
                rejected, so ``count`` can be less than the number of IDs sent. Key off each row's ``id``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/articles"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[SortOrStr | None]("sort", sort),
                param[ModeOrStr | None]("mode", mode),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("source_type", source_type),
                param[str | None]("ticker", ticker),
                param[str | None]("company", company),
                param[str | None]("exchange", exchange),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("index", index),
                param[str | None]("sector", sector),
                param[str | None]("content_type", content_type),
                param[str | None]("published_after", published_after),
                param[str | None]("published_before", published_before),
                param[str | None]("listed", listed),
                param[str | None]("watchlist", watchlist),
                param[bool | None]("primary_only", primary_only),
                param[bool | None]("include_peripheral", include_peripheral),
                param[str | None]("ids", ids),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ArticlesResponse1],
            error_mapper=get_api_v1_articles_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_articles_by_id(
        self,
        id_: str,
        *,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ArticlesResponse, GetApiV1ArticlesByIdErrorBody]:
        """Returns the details of a single article: an English headline, a short summary, key points, and associated
        companies, along with ``article_url`` pointing to the full original-language article at the source. Supports
        conditional requests via ``If-None-Match`` for efficient caching.

        Args:
            id_: Article ID (e.g. ``art_abc123def``).
            include_peripheral: When ``true``, widen ``companies`` and ``company_ids`` back to peripheral associations
                (a company named only as the article's source, an advisor, or a passing mention), which are otherwise
                excluded. Default ``false`` (principal-only). Each ``companies[]`` entry always carries
                ``association_tier`` regardless of this parameter.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the article has not
                changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/articles/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("include_peripheral", include_peripheral)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ArticlesResponse],
            error_mapper=get_api_v1_articles_by_id_error_mapper,
            request_options=request_options,
        )
