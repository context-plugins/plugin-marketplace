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
from ..errors.get_api_v1_stories_by_id_error import GetApiV1StoriesByIdErrorBody, get_api_v1_stories_by_id_error_mapper
from ..errors.get_api_v1_stories_error import GetApiV1StoriesErrorBody, get_api_v1_stories_error_mapper
from ..models.api_v1_stories_response import ApiV1StoriesResponse
from ..models.api_v1_stories_response1 import ApiV1StoriesResponse1
from ..models.enums.mode import ModeOrStr
from ..models.enums.sort import SortOrStr
from ..server.server import Server


class StoriesApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StoriesApiWithRawResponse(client, server, auth)

    def get_api_v1_stories(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        mode: ModeOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1StoriesResponse:
        """Returns a paginated list of published stories ordered by publication date (newest first). Each story
        synthesizes coverage of a single developing event from multiple source articles into one narrative.

        ## Filtering Supports filtering by country, category, source, and company ticker. Use ``GET /api/v1/sources`` to
        discover source IDs for the ``sources`` filter.

        ## Search Use ``q`` for full-text search: relevance-ranked by default, newest-first with ``sort=latest``, or
        matched by meaning with ``mode=semantic``.

        ## Polling for updates Use ``updated_after`` for incremental syncing.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, and when a story's visible article set changes, so a changed ``ETag`` does not
        necessarily mean a record was updated.

        Args:
            limit: Number of stories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q`` unless ``sort=latest`` is also given.
            updated_after: ISO 8601 datetime. Returns only stories updated after this timestamp. Use this for
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
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword. The match runs over each story's
                title, summary and key entities. The narrative body is not part of the match, so it answers thematic
                questions a keyword match cannot ("defense contract wins", "battery cell capacity expansion"). Requires
                ``q``, is mutually exclusive with ``sort``, ``cursor`` and ``updated_after``, and returns a single
                ranked page capped by ``limit``; every other filter (``country``, ``category``, ``sources``, ``ticker``,
                ``company``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, ``watchlist``,
                ``published_after``/``published_before``) remains a hard filter applied before the match, not after.
                Each story gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp). Compare it only within
                one response, never across responses: the scale is model-dependent. Ranking also blends in a small
                recency bonus that ``distance`` does not reflect. A server-side relevance floor drops weak matches, so a
                page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does not recover floored
                rows. On restricted plans, the story age window narrows the candidate set and the story count cap
                applies as a clamp on this page, so a capped plan receives its closest matches rather than its newest
                stories; either restriction sets ``plan_limited: true``. The response ``pagination`` object carries
                ``count`` only. There is no ``next_cursor``, since a distance ranking cannot be cursor-paginated, and
                the response is uncacheable (``Cache-Control: no-cache, no-store``, no ``ETag``). If the query cannot be
                embedded the request returns ``503`` rather than silently falling back to keyword matching.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Returns stories with at least one article
                from a listed source.
            ticker: Filter by company stock ticker symbol, comma-separated for several (e.g. ``VOLV-B`` or
                ``VOLV-B,ERIC-B``; matches any of them). Accepts full tickers with exchange suffix (e.g. ``VOLV-B.ST``).
                Returns stories mentioning the company. Former tickers resolve too: a company that renamed or moved
                venues is still reachable by an old ticker; the returned company ``former_tickers`` lists any such
                historical tickers. Matching is case-insensitive. Every value must resolve to a company, or the request
                is rejected with ``400`` naming the unknown values. Combined with ``company``, the two filters
                intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Every value must resolve, or the request is rejected with ``400`` naming the unknown ids. Combined with
                ``ticker``, the two filters intersect.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs). Returns stories about companies actively listed there. Case-insensitive.
            market: Filter to stories about companies with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal domicile).
                Includes foreign-domiciled but locally-listed issuers.
            domicile: Filter to stories about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns
                stories about companies in that index. Case-insensitive for symbols.
            sector: Filter by company sector. Case-sensitive; must exactly match one of: ``Communication Services``,
                ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``, ``Financials``, ``Health Care``,
                ``Industrials``, ``Information Technology``, ``Materials``, ``Real Estate``, ``Utilities``.
            listed: When ``true``, only return stories linked to at least one company with an active listing on any
                exchange. A company whose listings are all delisted does not count. Hidden and unverified companies do
                not count.
            watchlist: Restricts to stories mentioning companies in a single watchlist, identified by its ``id`` (from
                the List Watchlists endpoint). An unknown id returns no stories. Requires ``read:watchlist`` scope.
            published_after: ISO 8601 datetime. Returns stories published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns stories published before this timestamp.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``title``,
                ``summary``, ``published_at``, ``updated_at``, ``article_count``, ``article_ids``, ``country``,
                ``category``, ``company_ids``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stories retrieved

        Raises:
            ApiError: Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_stories(
                limit=limit,
                cursor=cursor,
                updated_after=updated_after,
                q=q,
                sort=sort,
                mode=mode,
                country=country,
                category=category,
                sources=sources,
                ticker=ticker,
                company=company,
                exchange=exchange,
                market=market,
                domicile=domicile,
                index=index,
                sector=sector,
                listed=listed,
                watchlist=watchlist,
                published_after=published_after,
                published_before=published_before,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_stories_by_id(
        self, id_: str, *, if_none_match: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1StoriesResponse1:
        """Returns the full details of a single story, including content in Markdown format, associated articles, and
        companies. Supports conditional requests via ``If-None-Match`` for efficient caching.

        Args:
            id_: Story ID (e.g. ``sty_abc123def``).
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the story has not
                changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Story found

        Raises:
            ApiError: Story not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_stories_by_id(
                id_, if_none_match=if_none_match, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> StoriesApiWithRawResponse:
        return self._with_raw_response


class AsyncStoriesApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStoriesApiWithRawResponse(client, server, auth)

    async def get_api_v1_stories(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        mode: ModeOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1StoriesResponse:
        """Returns a paginated list of published stories ordered by publication date (newest first). Each story
        synthesizes coverage of a single developing event from multiple source articles into one narrative.

        ## Filtering Supports filtering by country, category, source, and company ticker. Use ``GET /api/v1/sources`` to
        discover source IDs for the ``sources`` filter.

        ## Search Use ``q`` for full-text search: relevance-ranked by default, newest-first with ``sort=latest``, or
        matched by meaning with ``mode=semantic``.

        ## Polling for updates Use ``updated_after`` for incremental syncing.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, and when a story's visible article set changes, so a changed ``ETag`` does not
        necessarily mean a record was updated.

        Args:
            limit: Number of stories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q`` unless ``sort=latest`` is also given.
            updated_after: ISO 8601 datetime. Returns only stories updated after this timestamp. Use this for
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
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword. The match runs over each story's
                title, summary and key entities. The narrative body is not part of the match, so it answers thematic
                questions a keyword match cannot ("defense contract wins", "battery cell capacity expansion"). Requires
                ``q``, is mutually exclusive with ``sort``, ``cursor`` and ``updated_after``, and returns a single
                ranked page capped by ``limit``; every other filter (``country``, ``category``, ``sources``, ``ticker``,
                ``company``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, ``watchlist``,
                ``published_after``/``published_before``) remains a hard filter applied before the match, not after.
                Each story gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp). Compare it only within
                one response, never across responses: the scale is model-dependent. Ranking also blends in a small
                recency bonus that ``distance`` does not reflect. A server-side relevance floor drops weak matches, so a
                page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does not recover floored
                rows. On restricted plans, the story age window narrows the candidate set and the story count cap
                applies as a clamp on this page, so a capped plan receives its closest matches rather than its newest
                stories; either restriction sets ``plan_limited: true``. The response ``pagination`` object carries
                ``count`` only. There is no ``next_cursor``, since a distance ranking cannot be cursor-paginated, and
                the response is uncacheable (``Cache-Control: no-cache, no-store``, no ``ETag``). If the query cannot be
                embedded the request returns ``503`` rather than silently falling back to keyword matching.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Returns stories with at least one article
                from a listed source.
            ticker: Filter by company stock ticker symbol, comma-separated for several (e.g. ``VOLV-B`` or
                ``VOLV-B,ERIC-B``; matches any of them). Accepts full tickers with exchange suffix (e.g. ``VOLV-B.ST``).
                Returns stories mentioning the company. Former tickers resolve too: a company that renamed or moved
                venues is still reachable by an old ticker; the returned company ``former_tickers`` lists any such
                historical tickers. Matching is case-insensitive. Every value must resolve to a company, or the request
                is rejected with ``400`` naming the unknown values. Combined with ``company``, the two filters
                intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Every value must resolve, or the request is rejected with ``400`` naming the unknown ids. Combined with
                ``ticker``, the two filters intersect.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs). Returns stories about companies actively listed there. Case-insensitive.
            market: Filter to stories about companies with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal domicile).
                Includes foreign-domiciled but locally-listed issuers.
            domicile: Filter to stories about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns
                stories about companies in that index. Case-insensitive for symbols.
            sector: Filter by company sector. Case-sensitive; must exactly match one of: ``Communication Services``,
                ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``, ``Financials``, ``Health Care``,
                ``Industrials``, ``Information Technology``, ``Materials``, ``Real Estate``, ``Utilities``.
            listed: When ``true``, only return stories linked to at least one company with an active listing on any
                exchange. A company whose listings are all delisted does not count. Hidden and unverified companies do
                not count.
            watchlist: Restricts to stories mentioning companies in a single watchlist, identified by its ``id`` (from
                the List Watchlists endpoint). An unknown id returns no stories. Requires ``read:watchlist`` scope.
            published_after: ISO 8601 datetime. Returns stories published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns stories published before this timestamp.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``title``,
                ``summary``, ``published_at``, ``updated_at``, ``article_count``, ``article_ids``, ``country``,
                ``category``, ``company_ids``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stories retrieved

        Raises:
            ApiError: Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_stories(
                limit=limit,
                cursor=cursor,
                updated_after=updated_after,
                q=q,
                sort=sort,
                mode=mode,
                country=country,
                category=category,
                sources=sources,
                ticker=ticker,
                company=company,
                exchange=exchange,
                market=market,
                domicile=domicile,
                index=index,
                sector=sector,
                listed=listed,
                watchlist=watchlist,
                published_after=published_after,
                published_before=published_before,
                fields=fields,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_stories_by_id(
        self, id_: str, *, if_none_match: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1StoriesResponse1:
        """Returns the full details of a single story, including content in Markdown format, associated articles, and
        companies. Supports conditional requests via ``If-None-Match`` for efficient caching.

        Args:
            id_: Story ID (e.g. ``sty_abc123def``).
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the story has not
                changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Story found

        Raises:
            ApiError: Story not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_stories_by_id(
                id_, if_none_match=if_none_match, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncStoriesApiWithRawResponse:
        return self._with_raw_response


class StoriesApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_stories(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        mode: ModeOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StoriesResponse, GetApiV1StoriesErrorBody]:
        """Returns a paginated list of published stories ordered by publication date (newest first). Each story
        synthesizes coverage of a single developing event from multiple source articles into one narrative.

        ## Filtering Supports filtering by country, category, source, and company ticker. Use ``GET /api/v1/sources`` to
        discover source IDs for the ``sources`` filter.

        ## Search Use ``q`` for full-text search: relevance-ranked by default, newest-first with ``sort=latest``, or
        matched by meaning with ``mode=semantic``.

        ## Polling for updates Use ``updated_after`` for incremental syncing.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, and when a story's visible article set changes, so a changed ``ETag`` does not
        necessarily mean a record was updated.

        Args:
            limit: Number of stories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q`` unless ``sort=latest`` is also given.
            updated_after: ISO 8601 datetime. Returns only stories updated after this timestamp. Use this for
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
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword. The match runs over each story's
                title, summary and key entities. The narrative body is not part of the match, so it answers thematic
                questions a keyword match cannot ("defense contract wins", "battery cell capacity expansion"). Requires
                ``q``, is mutually exclusive with ``sort``, ``cursor`` and ``updated_after``, and returns a single
                ranked page capped by ``limit``; every other filter (``country``, ``category``, ``sources``, ``ticker``,
                ``company``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, ``watchlist``,
                ``published_after``/``published_before``) remains a hard filter applied before the match, not after.
                Each story gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp). Compare it only within
                one response, never across responses: the scale is model-dependent. Ranking also blends in a small
                recency bonus that ``distance`` does not reflect. A server-side relevance floor drops weak matches, so a
                page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does not recover floored
                rows. On restricted plans, the story age window narrows the candidate set and the story count cap
                applies as a clamp on this page, so a capped plan receives its closest matches rather than its newest
                stories; either restriction sets ``plan_limited: true``. The response ``pagination`` object carries
                ``count`` only. There is no ``next_cursor``, since a distance ranking cannot be cursor-paginated, and
                the response is uncacheable (``Cache-Control: no-cache, no-store``, no ``ETag``). If the query cannot be
                embedded the request returns ``503`` rather than silently falling back to keyword matching.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Returns stories with at least one article
                from a listed source.
            ticker: Filter by company stock ticker symbol, comma-separated for several (e.g. ``VOLV-B`` or
                ``VOLV-B,ERIC-B``; matches any of them). Accepts full tickers with exchange suffix (e.g. ``VOLV-B.ST``).
                Returns stories mentioning the company. Former tickers resolve too: a company that renamed or moved
                venues is still reachable by an old ticker; the returned company ``former_tickers`` lists any such
                historical tickers. Matching is case-insensitive. Every value must resolve to a company, or the request
                is rejected with ``400`` naming the unknown values. Combined with ``company``, the two filters
                intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Every value must resolve, or the request is rejected with ``400`` naming the unknown ids. Combined with
                ``ticker``, the two filters intersect.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs). Returns stories about companies actively listed there. Case-insensitive.
            market: Filter to stories about companies with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal domicile).
                Includes foreign-domiciled but locally-listed issuers.
            domicile: Filter to stories about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns
                stories about companies in that index. Case-insensitive for symbols.
            sector: Filter by company sector. Case-sensitive; must exactly match one of: ``Communication Services``,
                ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``, ``Financials``, ``Health Care``,
                ``Industrials``, ``Information Technology``, ``Materials``, ``Real Estate``, ``Utilities``.
            listed: When ``true``, only return stories linked to at least one company with an active listing on any
                exchange. A company whose listings are all delisted does not count. Hidden and unverified companies do
                not count.
            watchlist: Restricts to stories mentioning companies in a single watchlist, identified by its ``id`` (from
                the List Watchlists endpoint). An unknown id returns no stories. Requires ``read:watchlist`` scope.
            published_after: ISO 8601 datetime. Returns stories published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns stories published before this timestamp.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``title``,
                ``summary``, ``published_at``, ``updated_at``, ``article_count``, ``article_ids``, ``country``,
                ``category``, ``company_ids``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/stories"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[SortOrStr | None]("sort", sort),
                param[ModeOrStr | None]("mode", mode),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("ticker", ticker),
                param[str | None]("company", company),
                param[str | None]("exchange", exchange),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("index", index),
                param[str | None]("sector", sector),
                param[str | None]("listed", listed),
                param[str | None]("watchlist", watchlist),
                param[str | None]("published_after", published_after),
                param[str | None]("published_before", published_before),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1StoriesResponse],
            error_mapper=get_api_v1_stories_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_stories_by_id(
        self, id_: str, *, if_none_match: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1StoriesResponse1, GetApiV1StoriesByIdErrorBody]:
        """Returns the full details of a single story, including content in Markdown format, associated articles, and
        companies. Supports conditional requests via ``If-None-Match`` for efficient caching.

        Args:
            id_: Story ID (e.g. ``sty_abc123def``).
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the story has not
                changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/stories/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-None-Match", if_none_match)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1StoriesResponse1],
            error_mapper=get_api_v1_stories_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncStoriesApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_stories(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        mode: ModeOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        fields: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StoriesResponse, GetApiV1StoriesErrorBody]:
        """Returns a paginated list of published stories ordered by publication date (newest first). Each story
        synthesizes coverage of a single developing event from multiple source articles into one narrative.

        ## Filtering Supports filtering by country, category, source, and company ticker. Use ``GET /api/v1/sources`` to
        discover source IDs for the ``sources`` filter.

        ## Search Use ``q`` for full-text search: relevance-ranked by default, newest-first with ``sort=latest``, or
        matched by meaning with ``mode=semantic``.

        ## Polling for updates Use ``updated_after`` for incremental syncing.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, and when a story's visible article set changes, so a changed ``ETag`` does not
        necessarily mean a record was updated.

        Args:
            limit: Number of stories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q`` unless ``sort=latest`` is also given.
            updated_after: ISO 8601 datetime. Returns only stories updated after this timestamp. Use this for
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
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword. The match runs over each story's
                title, summary and key entities. The narrative body is not part of the match, so it answers thematic
                questions a keyword match cannot ("defense contract wins", "battery cell capacity expansion"). Requires
                ``q``, is mutually exclusive with ``sort``, ``cursor`` and ``updated_after``, and returns a single
                ranked page capped by ``limit``; every other filter (``country``, ``category``, ``sources``, ``ticker``,
                ``company``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, ``watchlist``,
                ``published_after``/``published_before``) remains a hard filter applied before the match, not after.
                Each story gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp). Compare it only within
                one response, never across responses: the scale is model-dependent. Ranking also blends in a small
                recency bonus that ``distance`` does not reflect. A server-side relevance floor drops weak matches, so a
                page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does not recover floored
                rows. On restricted plans, the story age window narrows the candidate set and the story count cap
                applies as a clamp on this page, so a capped plan receives its closest matches rather than its newest
                stories; either restriction sets ``plan_limited: true``. The response ``pagination`` object carries
                ``count`` only. There is no ``next_cursor``, since a distance ranking cannot be cursor-paginated, and
                the response is uncacheable (``Cache-Control: no-cache, no-store``, no ``ETag``). If the query cannot be
                embedded the request returns ``503`` rather than silently falling back to keyword matching.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Returns stories with at least one article
                from a listed source.
            ticker: Filter by company stock ticker symbol, comma-separated for several (e.g. ``VOLV-B`` or
                ``VOLV-B,ERIC-B``; matches any of them). Accepts full tickers with exchange suffix (e.g. ``VOLV-B.ST``).
                Returns stories mentioning the company. Former tickers resolve too: a company that renamed or moved
                venues is still reachable by an old ticker; the returned company ``former_tickers`` lists any such
                historical tickers. Matching is case-insensitive. Every value must resolve to a company, or the request
                is rejected with ``400`` naming the unknown values. Combined with ``company``, the two filters
                intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Every value must resolve, or the request is rejected with ``400`` naming the unknown ids. Combined with
                ``ticker``, the two filters intersect.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs). Returns stories about companies actively listed there. Case-insensitive.
            market: Filter to stories about companies with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal domicile).
                Includes foreign-domiciled but locally-listed issuers.
            domicile: Filter to stories about companies legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns
                stories about companies in that index. Case-insensitive for symbols.
            sector: Filter by company sector. Case-sensitive; must exactly match one of: ``Communication Services``,
                ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``, ``Financials``, ``Health Care``,
                ``Industrials``, ``Information Technology``, ``Materials``, ``Real Estate``, ``Utilities``.
            listed: When ``true``, only return stories linked to at least one company with an active listing on any
                exchange. A company whose listings are all delisted does not count. Hidden and unverified companies do
                not count.
            watchlist: Restricts to stories mentioning companies in a single watchlist, identified by its ``id`` (from
                the List Watchlists endpoint). An unknown id returns no stories. Requires ``read:watchlist`` scope.
            published_after: ISO 8601 datetime. Returns stories published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns stories published before this timestamp.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``title``,
                ``summary``, ``published_at``, ``updated_at``, ``article_count``, ``article_ids``, ``country``,
                ``category``, ``company_ids``.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/stories"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[SortOrStr | None]("sort", sort),
                param[ModeOrStr | None]("mode", mode),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("ticker", ticker),
                param[str | None]("company", company),
                param[str | None]("exchange", exchange),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("index", index),
                param[str | None]("sector", sector),
                param[str | None]("listed", listed),
                param[str | None]("watchlist", watchlist),
                param[str | None]("published_after", published_after),
                param[str | None]("published_before", published_before),
                param[str | None]("fields", fields),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1StoriesResponse],
            error_mapper=get_api_v1_stories_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_stories_by_id(
        self, id_: str, *, if_none_match: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1StoriesResponse1, GetApiV1StoriesByIdErrorBody]:
        """Returns the full details of a single story, including content in Markdown format, associated articles, and
        companies. Supports conditional requests via ``If-None-Match`` for efficient caching.

        Args:
            id_: Story ID (e.g. ``sty_abc123def``).
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the story has not
                changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/stories/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-None-Match", if_none_match)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1StoriesResponse1],
            error_mapper=get_api_v1_stories_by_id_error_mapper,
            request_options=request_options,
        )
