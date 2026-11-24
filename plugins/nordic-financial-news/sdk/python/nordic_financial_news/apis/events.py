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
from ..errors.get_api_v1_events_by_id_error import GetApiV1EventsByIdErrorBody, get_api_v1_events_by_id_error_mapper
from ..errors.get_api_v1_events_error import GetApiV1EventsErrorBody, get_api_v1_events_error_mapper
from ..models.api_v1_events_response import ApiV1EventsResponse
from ..models.api_v1_events_response1 import ApiV1EventsResponse1
from ..models.enums.mode import ModeOrStr
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server, auth)

    def get_api_v1_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        mode: ModeOrStr | None = None,
        event_type: str | None = None,
        significance: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        first_reported_after: str | None = None,
        first_reported_before: str | None = None,
        last_article_after: str | None = None,
        last_article_before: str | None = None,
        window: str | None = None,
        sort: str | None = None,
        related_to: str | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1EventsResponse:
        """Returns a paginated list of Events. An event groups the articles reporting a single real-world development
        (an earnings report, an M&A announcement, a dividend, an executive change, and so on). Sorted by when the event
        was first reported, most recent first. An event is only returned if at least one of its live member articles
        survives your plan's age and source restrictions. This is the same visibility rule the event feed on the website
        uses. If none survive, the event does not appear at all. ``GET /api/v1/events/:id`` distinguishes that case from
        an event your plan can see but whose full coverage it cannot (see below). ## Merges and removals Events
        sometimes merge (two events turn out to describe the same development) or are removed (no live articles remain,
        or the event was found to be incorrect). Both are terminal. The event never reappears in a normal list, and
        ``GET /api/v1/events/:id`` on one returns a **minimal tombstone**: ``id``, ``status``, ``merged_into`` (the
        surviving event's ``id``, when merged), and ``updated_at`` only. A tombstone carries no title, summary, counts
        or id arrays. Poll with ``updated_after`` to learn about merges and removals. Tombstones for events that changed
        since your watermark are included in that sync walk (uncapped, on every plan), which is otherwise the only way
        to learn that an event you previously fetched is gone. They are never returned by the default list. A tombstone
        still respects your event-grain filters: ``company``, ``ticker``, ``exchange``, ``index``, ``sector``,
        ``listed``, ``event_type``, ``significance``, ``watchlist``, ``first_reported_after``/``before``, and
        ``last_article_after``/``before``. A merged event that involved the company you filtered by still surfaces its
        tombstone. Those filters are checked against the tombstone's companies as they are now. With ``listed``, a
        tombstone whose only listed company was delisted or stopped appearing in the API's company data before the merge
        or removal no longer matches, so it is not returned. Poll without ``listed`` for full-fidelity tombstone
        coverage. On ``exchange``, ``market``, ``domicile``, ``index``, ``sector`` and ``listed``, a merged or removed
        commentary event's tombstone is returned when any matching company is on it, in any role, so a filtered sync can
        include a tombstone for an event it never returned. A filtered sync returns events that match the filters now:
        an event that stops matching (for example, when its articles are no longer about a matching company) is not
        returned by it. Poll without those filters to see every change. A tombstone does not respect ``country``,
        ``category``, ``sources``, ``source_type`` or ``content_type``, which are article-grain filters. It has no live
        articles left to filter by, so poll without them for full-fidelity tombstone coverage. A merged event's
        ``last_article_at`` freezes at merge time, so ``last_article_after``/``before`` filter a tombstone against that
        frozen value rather than against when the merge happened. ``window`` cannot be used for sync polling at all (see
        below). ## Polling for updates Use ``updated_after`` with the timestamp of your last completed sync to fetch
        only events that have changed since. Results are then ordered by ``updated_at`` ascending and cursor-paginated:
        follow ``pagination.next_cursor``, resending the same ``updated_after``, until it is null. Advance your stored
        timestamp only once every page is drained. A merge takes the earlier of the two ``first_reported_at`` values, so
        it only ever moves the surviving event earlier in the default sort. Under the default (non-sync) ordering a
        cursor walk can therefore re-emit a row you have already seen, but it can never skip one. Treat the walk as
        at-least-once and dedupe by ``id``. ``company_ids``/``story_ids`` membership can drift out from under
        ``updated_after`` without bumping ``updated_at``: a company merge, a company leaving or rejoining the API's
        company data, or a story being withdrawn from an event you already hold. A change to a story itself is tracked,
        and bumps the parent event.

        Args:
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Works with
                ``q`` too; ``q`` is a filter, not a separate search mode. Not accepted with ``mode=semantic``. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included.
            updated_after: ISO 8601 datetime. Returns only events updated after this timestamp, including merge/removal
                tombstones. Use for incremental sync.
            q: Full-text filter over the event's own title and summary as well as its live member articles' indexed
                content (title, summary, key points, plus tagged company names and key facts), so an event can match on
                a company its coverage only tags. Matches stay in the default feed order (most recently reported first)
                and are cursor-paginated like any other request; combine with ``window``/``last_article_after`` for
                "latest on X". This differs deliberately from ``q`` on ``GET /api/v1/articles`` and ``GET
                /api/v1/stories``, which returns a relevance-ranked single page unless ``sort=latest`` is given. Here
                ``q`` is a filter over the ordinary feed order, so it composes with ``window`` and the cursor.
                ``mode=semantic`` replaces this with a ranked match (see ``mode``).
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword, for thematic questions a keyword
                match cannot answer ("defense contract wins", "battery cell capacity expansion"). The match runs over
                the translated title and summary of each event's live member articles, not over the event's own title or
                summary, and not over the key points, tagged company names or key facts that plain ``q`` also reaches.
                It is therefore not a strict recall improvement over plain ``q``: an event whose title is on-topic while
                its member articles are oblique can match ``q`` and not ``mode=semantic``. Results are ranked by
                distance blended with a small recency bonus, not in feed order. Requires ``q``, is mutually exclusive
                with ``sort``, ``cursor`` and ``updated_after``, and returns a single ranked page capped by ``limit``.
                Every other filter remains a hard filter applied before the match, not after. ``window`` and
                ``last_article_after``/``last_article_before`` still bound the event's activity, not the date of the
                matched article, so the member article behind a match can be considerably older than the event's last
                activity. Each event gains a ``distance`` (raw cosine, lower is closer): the distance of its
                best-matching member article that your plan can access, so the same event can carry different distances
                on different plans. Compare it only within one response, never across responses: the scale is
                model-dependent. Ranking uses the mean of an event's two closest member articles and a recency bonus,
                neither of which ``distance`` reflects. A server-side relevance floor drops weak matches, so a page is
                frequently shorter than ``limit`` and can be empty. The plan cap on recent events does not apply in this
                mode: the match runs over every event with member articles inside your plan's age and source
                restrictions, and ``plan_limited: true`` reports only that those restrictions are in force. ``truncated:
                true`` means the article-match horizon was exhausted, so further matching events exist that this
                response cannot reach, and no cursor can page to them. The response ``pagination`` object carries
                ``count`` only. There is no ``next_cursor``, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to keyword matching.
            event_type: Filter by event type slug, comma-separated (e.g. ``earnings-report,acquisition-announced``).
                These are Events taxonomy slugs (hyphenated) from ``GET /api/v1/event_types`` and are the only values
                accepted here. The underscored calendar ``event_type`` values used by ``GET /api/v1/calendar_events``
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things. An unrecognized slug returns 400 naming the bad slug(s).
            significance: Editorial importance, the feed's materiality threshold, comma-separated (e.g.
                ``notable,routine``). Valid values: ``notable`` (material, front-page-worthy events), ``routine``
                (ledger records: routine filings, scheduled disclosures), ``commentary`` (opinion/analysis pieces). Use
                ``significance=notable`` to restrict the feed to material events. An unrecognized value returns 400
                naming the bad value(s).
            ticker: Filter to events involving the company with this stock ticker (e.g. ``VOLV-B``), comma-separated for
                several (matches any of them). Accepts the exchange-suffixed form; former tickers resolve. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. Combined with ``company``, the two filters intersect. Matches active-involvement
                roles only unless ``include_peripheral=true``.
            company: Filter to events involving a company by its ``id``, comma-separated for several (matches any of
                them). Complements ``ticker``; reaches companies without a stock listing. Every value must resolve, or
                the request is rejected with ``400`` naming the unknown ids. Combined with ``ticker``, the two filters
                intersect. Matches active-involvement roles only unless ``include_peripheral=true``.
            country: Filter to events with a live member article from this country (ISO 3166-1 alpha-2, comma-separated
                for multiple). Applied at the article grain, so sync tombstones do not respect it.
            category: Filter to events with a live member article in any of these categories, by their ``id``
                (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not
                respect it.
            sources: Filter to events with a live member article from these sources, by their ``id`` (comma-separated,
                max 25). Applied at the article grain, so sync tombstones do not respect it.
            source_type: Filter to events with a live member article from this source type, comma-separated. Valid
                values: ``news_publication``, ``wire_service``, ``press_release``, ``government``,
                ``trade_publication``, ``blog``, ``stock_exchange``, ``research``. Articles from disabled sources are
                excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value
                returns 400 naming the bad value(s).
            content_type: Filter to events with a live member article of this content type, comma-separated. Valid
                values: ``news``, ``analysis``, ``press_release``, ``market_commentary``, ``market_news``,
                ``trading_halt``, ``trading_event``, ``other``. Applied at the article grain, so sync tombstones do not
                respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned
                label per article. To find events with a member article from a primary disclosure source, filter on
                ``source_type`` (``wire_service``, ``stock_exchange``, ``press_release``, ``government``) instead.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XSTO,XCSE``).
            market: Filter to events involving a company with an active equity listing in these countries' exchanges
                (ISO 3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North,
                Spotlight and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal
                domicile). Includes foreign-domiciled but locally-listed issuers. Note: a just-listed company's listing
                record can lag its IPO event.
            domicile: Filter to events involving a company legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            index: Filter to events for companies in this stock index, by ``id`` or symbol.
            sector: Filter by company sector. Must exactly match a standard sector name.
            listed: When ``true``, only return events involving at least one company with an active listing on any
                exchange, matched by the same rule as ``exchange``/``market``/``domicile``/``index``/``sector``. On a
                factual event, the company must have an active-involvement role (subject, acquirer, target, investor,
                issuer, partner); an advisor, speaker or passing mention does not qualify. On a commentary event, any
                role counts when a live article in the event is about that company rather than only mentioning it.
                ``include_peripheral`` does not change this. A company whose listings are all delisted does not count.
                Hidden and unverified companies do not count.
            watchlist: Restrict to events for companies in a single watchlist, by its ``id``. Requires the
                ``read:watchlist`` scope. Matches active-involvement roles only unless ``include_peripheral=true``.
            first_reported_after: ISO 8601 datetime. Only events first reported at or after this time.
            first_reported_before: ISO 8601 datetime. Only events first reported before this time.
            last_article_after: ISO 8601 datetime. Only events whose most recent activity (``last_article_at``, or
                ``first_reported_at`` when that is null) is at or after this time. This matches when the event was last
                active, not when it broke. Mutually exclusive with ``window``.
            last_article_before: ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually
                exclusive with ``window``.
            window: Relative shorthand for ``last_article_after``, e.g. ``8h``, ``24h``, ``7d`` (hours or days only, max
                365d equivalent). Evaluated per request against the server clock. Compute ``last_article_after``
                yourself for a stable multi-page snapshot. Mutually exclusive with ``last_article_after``,
                ``last_article_before``, and ``updated_after``.
            sort: Sort order. ``latest`` (default) sorts most recently reported first, the unfiltered feed order.
                ``significance`` groups events into 3 coarse editorial tiers (``notable``, then ``routine``, then
                ``commentary``), most recently reported first within each tier; expect large ties within a tier. A
                mid-walk ``routine``→``notable`` escalation may be skipped, since the ordering is a best-effort
                snapshot. For a broad importance filter, prefer ``significance=notable`` with the default sort; page 1
                is identical. Mutually exclusive with ``updated_after`` (an unrecognized value, or either sort value
                combined with ``updated_after``, returns 400).
            related_to: Filter to commentary events that comment on or react to the factual event with this ``id`` (see
                ``related_to`` on the response). Unresolvable ``id`` returns an empty result set, not an error.
            include_peripheral: When ``true``, widen ``company``/``ticker``/``watchlist`` matching, and the
                ``company_ids`` returned on each event, to companies with a peripheral role (advisor, speaker, or a
                passing mention) as well. Default ``false`` restricts matching and ``company_ids`` to companies with an
                active-involvement role (subject, acquirer, target, investor, issuer, partner). Does not widen
                ``exchange``, ``market``, ``domicile``, ``index``, ``sector`` or ``listed``: on a factual event those
                match an active-involvement role; on a commentary event, any role, when a live article in the event is
                about that company rather than only mentioning it.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Events retrieved successfully

        Raises:
            ApiError: Invalid parameter Missing or invalid API key ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_events(
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                q=q,
                mode=mode,
                event_type=event_type,
                significance=significance,
                ticker=ticker,
                company=company,
                country=country,
                category=category,
                sources=sources,
                source_type=source_type,
                content_type=content_type,
                exchange=exchange,
                market=market,
                domicile=domicile,
                index=index,
                sector=sector,
                listed=listed,
                watchlist=watchlist,
                first_reported_after=first_reported_after,
                first_reported_before=first_reported_before,
                last_article_after=last_article_after,
                last_article_before=last_article_before,
                window=window,
                sort=sort,
                related_to=related_to,
                include_peripheral=include_peripheral,
                if_none_match=if_none_match,
                request_options=request_options,
            ),
        )

    def get_api_v1_events_by_id(
        self,
        id_: str,
        *,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1EventsResponse1:
        """Fetches a single event by ID.

        A merged or removed event returns 200 with the minimal tombstone shape (see the list endpoint's description)
        rather than 404. The id still resolves; it carries no content. An event with no live member articles at all
        returns 404. An event whose live members exist but are all outside your plan's age/source restrictions returns
        403 with an upgrade problem, distinct from the plain 404.

        Responses are cached with ``ETag`` and ``Cache-Control: private, max-age=300``; send ``If-None-Match`` to
        receive a ``304 Not Modified``. There is no ``Last-Modified`` here, for the same reason as ``GET
        /api/v1/events``.

        Args:
            id_: The event ID, as returned in the ``id`` field of list responses.
            include_peripheral: When ``true``, ``company_ids`` and ``companies[]`` also include companies with a
                peripheral role (advisor, speaker, or a passing mention). Default ``false`` lists companies with an
                active-involvement role only (subject, acquirer, target, investor, issuer, partner).
                ``association_tier`` is present on every ``companies[]`` entry regardless.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the event has not
                changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Event retrieved

        Raises:
            ApiError: Missing or invalid API key Event not found Event is outside this plan's access window ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_events_by_id(
                id_, include_peripheral=include_peripheral, if_none_match=if_none_match, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server, auth)

    async def get_api_v1_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        mode: ModeOrStr | None = None,
        event_type: str | None = None,
        significance: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        first_reported_after: str | None = None,
        first_reported_before: str | None = None,
        last_article_after: str | None = None,
        last_article_before: str | None = None,
        window: str | None = None,
        sort: str | None = None,
        related_to: str | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1EventsResponse:
        """Returns a paginated list of Events. An event groups the articles reporting a single real-world development
        (an earnings report, an M&A announcement, a dividend, an executive change, and so on). Sorted by when the event
        was first reported, most recent first. An event is only returned if at least one of its live member articles
        survives your plan's age and source restrictions. This is the same visibility rule the event feed on the website
        uses. If none survive, the event does not appear at all. ``GET /api/v1/events/:id`` distinguishes that case from
        an event your plan can see but whose full coverage it cannot (see below). ## Merges and removals Events
        sometimes merge (two events turn out to describe the same development) or are removed (no live articles remain,
        or the event was found to be incorrect). Both are terminal. The event never reappears in a normal list, and
        ``GET /api/v1/events/:id`` on one returns a **minimal tombstone**: ``id``, ``status``, ``merged_into`` (the
        surviving event's ``id``, when merged), and ``updated_at`` only. A tombstone carries no title, summary, counts
        or id arrays. Poll with ``updated_after`` to learn about merges and removals. Tombstones for events that changed
        since your watermark are included in that sync walk (uncapped, on every plan), which is otherwise the only way
        to learn that an event you previously fetched is gone. They are never returned by the default list. A tombstone
        still respects your event-grain filters: ``company``, ``ticker``, ``exchange``, ``index``, ``sector``,
        ``listed``, ``event_type``, ``significance``, ``watchlist``, ``first_reported_after``/``before``, and
        ``last_article_after``/``before``. A merged event that involved the company you filtered by still surfaces its
        tombstone. Those filters are checked against the tombstone's companies as they are now. With ``listed``, a
        tombstone whose only listed company was delisted or stopped appearing in the API's company data before the merge
        or removal no longer matches, so it is not returned. Poll without ``listed`` for full-fidelity tombstone
        coverage. On ``exchange``, ``market``, ``domicile``, ``index``, ``sector`` and ``listed``, a merged or removed
        commentary event's tombstone is returned when any matching company is on it, in any role, so a filtered sync can
        include a tombstone for an event it never returned. A filtered sync returns events that match the filters now:
        an event that stops matching (for example, when its articles are no longer about a matching company) is not
        returned by it. Poll without those filters to see every change. A tombstone does not respect ``country``,
        ``category``, ``sources``, ``source_type`` or ``content_type``, which are article-grain filters. It has no live
        articles left to filter by, so poll without them for full-fidelity tombstone coverage. A merged event's
        ``last_article_at`` freezes at merge time, so ``last_article_after``/``before`` filter a tombstone against that
        frozen value rather than against when the merge happened. ``window`` cannot be used for sync polling at all (see
        below). ## Polling for updates Use ``updated_after`` with the timestamp of your last completed sync to fetch
        only events that have changed since. Results are then ordered by ``updated_at`` ascending and cursor-paginated:
        follow ``pagination.next_cursor``, resending the same ``updated_after``, until it is null. Advance your stored
        timestamp only once every page is drained. A merge takes the earlier of the two ``first_reported_at`` values, so
        it only ever moves the surviving event earlier in the default sort. Under the default (non-sync) ordering a
        cursor walk can therefore re-emit a row you have already seen, but it can never skip one. Treat the walk as
        at-least-once and dedupe by ``id``. ``company_ids``/``story_ids`` membership can drift out from under
        ``updated_after`` without bumping ``updated_at``: a company merge, a company leaving or rejoining the API's
        company data, or a story being withdrawn from an event you already hold. A change to a story itself is tracked,
        and bumps the parent event.

        Args:
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Works with
                ``q`` too; ``q`` is a filter, not a separate search mode. Not accepted with ``mode=semantic``. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included.
            updated_after: ISO 8601 datetime. Returns only events updated after this timestamp, including merge/removal
                tombstones. Use for incremental sync.
            q: Full-text filter over the event's own title and summary as well as its live member articles' indexed
                content (title, summary, key points, plus tagged company names and key facts), so an event can match on
                a company its coverage only tags. Matches stay in the default feed order (most recently reported first)
                and are cursor-paginated like any other request; combine with ``window``/``last_article_after`` for
                "latest on X". This differs deliberately from ``q`` on ``GET /api/v1/articles`` and ``GET
                /api/v1/stories``, which returns a relevance-ranked single page unless ``sort=latest`` is given. Here
                ``q`` is a filter over the ordinary feed order, so it composes with ``window`` and the cursor.
                ``mode=semantic`` replaces this with a ranked match (see ``mode``).
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword, for thematic questions a keyword
                match cannot answer ("defense contract wins", "battery cell capacity expansion"). The match runs over
                the translated title and summary of each event's live member articles, not over the event's own title or
                summary, and not over the key points, tagged company names or key facts that plain ``q`` also reaches.
                It is therefore not a strict recall improvement over plain ``q``: an event whose title is on-topic while
                its member articles are oblique can match ``q`` and not ``mode=semantic``. Results are ranked by
                distance blended with a small recency bonus, not in feed order. Requires ``q``, is mutually exclusive
                with ``sort``, ``cursor`` and ``updated_after``, and returns a single ranked page capped by ``limit``.
                Every other filter remains a hard filter applied before the match, not after. ``window`` and
                ``last_article_after``/``last_article_before`` still bound the event's activity, not the date of the
                matched article, so the member article behind a match can be considerably older than the event's last
                activity. Each event gains a ``distance`` (raw cosine, lower is closer): the distance of its
                best-matching member article that your plan can access, so the same event can carry different distances
                on different plans. Compare it only within one response, never across responses: the scale is
                model-dependent. Ranking uses the mean of an event's two closest member articles and a recency bonus,
                neither of which ``distance`` reflects. A server-side relevance floor drops weak matches, so a page is
                frequently shorter than ``limit`` and can be empty. The plan cap on recent events does not apply in this
                mode: the match runs over every event with member articles inside your plan's age and source
                restrictions, and ``plan_limited: true`` reports only that those restrictions are in force. ``truncated:
                true`` means the article-match horizon was exhausted, so further matching events exist that this
                response cannot reach, and no cursor can page to them. The response ``pagination`` object carries
                ``count`` only. There is no ``next_cursor``, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to keyword matching.
            event_type: Filter by event type slug, comma-separated (e.g. ``earnings-report,acquisition-announced``).
                These are Events taxonomy slugs (hyphenated) from ``GET /api/v1/event_types`` and are the only values
                accepted here. The underscored calendar ``event_type`` values used by ``GET /api/v1/calendar_events``
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things. An unrecognized slug returns 400 naming the bad slug(s).
            significance: Editorial importance, the feed's materiality threshold, comma-separated (e.g.
                ``notable,routine``). Valid values: ``notable`` (material, front-page-worthy events), ``routine``
                (ledger records: routine filings, scheduled disclosures), ``commentary`` (opinion/analysis pieces). Use
                ``significance=notable`` to restrict the feed to material events. An unrecognized value returns 400
                naming the bad value(s).
            ticker: Filter to events involving the company with this stock ticker (e.g. ``VOLV-B``), comma-separated for
                several (matches any of them). Accepts the exchange-suffixed form; former tickers resolve. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. Combined with ``company``, the two filters intersect. Matches active-involvement
                roles only unless ``include_peripheral=true``.
            company: Filter to events involving a company by its ``id``, comma-separated for several (matches any of
                them). Complements ``ticker``; reaches companies without a stock listing. Every value must resolve, or
                the request is rejected with ``400`` naming the unknown ids. Combined with ``ticker``, the two filters
                intersect. Matches active-involvement roles only unless ``include_peripheral=true``.
            country: Filter to events with a live member article from this country (ISO 3166-1 alpha-2, comma-separated
                for multiple). Applied at the article grain, so sync tombstones do not respect it.
            category: Filter to events with a live member article in any of these categories, by their ``id``
                (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not
                respect it.
            sources: Filter to events with a live member article from these sources, by their ``id`` (comma-separated,
                max 25). Applied at the article grain, so sync tombstones do not respect it.
            source_type: Filter to events with a live member article from this source type, comma-separated. Valid
                values: ``news_publication``, ``wire_service``, ``press_release``, ``government``,
                ``trade_publication``, ``blog``, ``stock_exchange``, ``research``. Articles from disabled sources are
                excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value
                returns 400 naming the bad value(s).
            content_type: Filter to events with a live member article of this content type, comma-separated. Valid
                values: ``news``, ``analysis``, ``press_release``, ``market_commentary``, ``market_news``,
                ``trading_halt``, ``trading_event``, ``other``. Applied at the article grain, so sync tombstones do not
                respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned
                label per article. To find events with a member article from a primary disclosure source, filter on
                ``source_type`` (``wire_service``, ``stock_exchange``, ``press_release``, ``government``) instead.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XSTO,XCSE``).
            market: Filter to events involving a company with an active equity listing in these countries' exchanges
                (ISO 3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North,
                Spotlight and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal
                domicile). Includes foreign-domiciled but locally-listed issuers. Note: a just-listed company's listing
                record can lag its IPO event.
            domicile: Filter to events involving a company legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            index: Filter to events for companies in this stock index, by ``id`` or symbol.
            sector: Filter by company sector. Must exactly match a standard sector name.
            listed: When ``true``, only return events involving at least one company with an active listing on any
                exchange, matched by the same rule as ``exchange``/``market``/``domicile``/``index``/``sector``. On a
                factual event, the company must have an active-involvement role (subject, acquirer, target, investor,
                issuer, partner); an advisor, speaker or passing mention does not qualify. On a commentary event, any
                role counts when a live article in the event is about that company rather than only mentioning it.
                ``include_peripheral`` does not change this. A company whose listings are all delisted does not count.
                Hidden and unverified companies do not count.
            watchlist: Restrict to events for companies in a single watchlist, by its ``id``. Requires the
                ``read:watchlist`` scope. Matches active-involvement roles only unless ``include_peripheral=true``.
            first_reported_after: ISO 8601 datetime. Only events first reported at or after this time.
            first_reported_before: ISO 8601 datetime. Only events first reported before this time.
            last_article_after: ISO 8601 datetime. Only events whose most recent activity (``last_article_at``, or
                ``first_reported_at`` when that is null) is at or after this time. This matches when the event was last
                active, not when it broke. Mutually exclusive with ``window``.
            last_article_before: ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually
                exclusive with ``window``.
            window: Relative shorthand for ``last_article_after``, e.g. ``8h``, ``24h``, ``7d`` (hours or days only, max
                365d equivalent). Evaluated per request against the server clock. Compute ``last_article_after``
                yourself for a stable multi-page snapshot. Mutually exclusive with ``last_article_after``,
                ``last_article_before``, and ``updated_after``.
            sort: Sort order. ``latest`` (default) sorts most recently reported first, the unfiltered feed order.
                ``significance`` groups events into 3 coarse editorial tiers (``notable``, then ``routine``, then
                ``commentary``), most recently reported first within each tier; expect large ties within a tier. A
                mid-walk ``routine``→``notable`` escalation may be skipped, since the ordering is a best-effort
                snapshot. For a broad importance filter, prefer ``significance=notable`` with the default sort; page 1
                is identical. Mutually exclusive with ``updated_after`` (an unrecognized value, or either sort value
                combined with ``updated_after``, returns 400).
            related_to: Filter to commentary events that comment on or react to the factual event with this ``id`` (see
                ``related_to`` on the response). Unresolvable ``id`` returns an empty result set, not an error.
            include_peripheral: When ``true``, widen ``company``/``ticker``/``watchlist`` matching, and the
                ``company_ids`` returned on each event, to companies with a peripheral role (advisor, speaker, or a
                passing mention) as well. Default ``false`` restricts matching and ``company_ids`` to companies with an
                active-involvement role (subject, acquirer, target, investor, issuer, partner). Does not widen
                ``exchange``, ``market``, ``domicile``, ``index``, ``sector`` or ``listed``: on a factual event those
                match an active-involvement role; on a commentary event, any role, when a live article in the event is
                about that company rather than only mentioning it.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Events retrieved successfully

        Raises:
            ApiError: Invalid parameter Missing or invalid API key ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_events(
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                q=q,
                mode=mode,
                event_type=event_type,
                significance=significance,
                ticker=ticker,
                company=company,
                country=country,
                category=category,
                sources=sources,
                source_type=source_type,
                content_type=content_type,
                exchange=exchange,
                market=market,
                domicile=domicile,
                index=index,
                sector=sector,
                listed=listed,
                watchlist=watchlist,
                first_reported_after=first_reported_after,
                first_reported_before=first_reported_before,
                last_article_after=last_article_after,
                last_article_before=last_article_before,
                window=window,
                sort=sort,
                related_to=related_to,
                include_peripheral=include_peripheral,
                if_none_match=if_none_match,
                request_options=request_options,
            ),
        )

    async def get_api_v1_events_by_id(
        self,
        id_: str,
        *,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1EventsResponse1:
        """Fetches a single event by ID.

        A merged or removed event returns 200 with the minimal tombstone shape (see the list endpoint's description)
        rather than 404. The id still resolves; it carries no content. An event with no live member articles at all
        returns 404. An event whose live members exist but are all outside your plan's age/source restrictions returns
        403 with an upgrade problem, distinct from the plain 404.

        Responses are cached with ``ETag`` and ``Cache-Control: private, max-age=300``; send ``If-None-Match`` to
        receive a ``304 Not Modified``. There is no ``Last-Modified`` here, for the same reason as ``GET
        /api/v1/events``.

        Args:
            id_: The event ID, as returned in the ``id`` field of list responses.
            include_peripheral: When ``true``, ``company_ids`` and ``companies[]`` also include companies with a
                peripheral role (advisor, speaker, or a passing mention). Default ``false`` lists companies with an
                active-involvement role only (subject, acquirer, target, investor, issuer, partner).
                ``association_tier`` is present on every ``companies[]`` entry regardless.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the event has not
                changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Event retrieved

        Raises:
            ApiError: Missing or invalid API key Event not found Event is outside this plan's access window ``error`` is
                ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_events_by_id(
                id_, include_peripheral=include_peripheral, if_none_match=if_none_match, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        mode: ModeOrStr | None = None,
        event_type: str | None = None,
        significance: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        first_reported_after: str | None = None,
        first_reported_before: str | None = None,
        last_article_after: str | None = None,
        last_article_before: str | None = None,
        window: str | None = None,
        sort: str | None = None,
        related_to: str | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EventsResponse, GetApiV1EventsErrorBody]:
        """Returns a paginated list of Events. An event groups the articles reporting a single real-world development
        (an earnings report, an M&A announcement, a dividend, an executive change, and so on). Sorted by when the event
        was first reported, most recent first. An event is only returned if at least one of its live member articles
        survives your plan's age and source restrictions. This is the same visibility rule the event feed on the website
        uses. If none survive, the event does not appear at all. ``GET /api/v1/events/:id`` distinguishes that case from
        an event your plan can see but whose full coverage it cannot (see below). ## Merges and removals Events
        sometimes merge (two events turn out to describe the same development) or are removed (no live articles remain,
        or the event was found to be incorrect). Both are terminal. The event never reappears in a normal list, and
        ``GET /api/v1/events/:id`` on one returns a **minimal tombstone**: ``id``, ``status``, ``merged_into`` (the
        surviving event's ``id``, when merged), and ``updated_at`` only. A tombstone carries no title, summary, counts
        or id arrays. Poll with ``updated_after`` to learn about merges and removals. Tombstones for events that changed
        since your watermark are included in that sync walk (uncapped, on every plan), which is otherwise the only way
        to learn that an event you previously fetched is gone. They are never returned by the default list. A tombstone
        still respects your event-grain filters: ``company``, ``ticker``, ``exchange``, ``index``, ``sector``,
        ``listed``, ``event_type``, ``significance``, ``watchlist``, ``first_reported_after``/``before``, and
        ``last_article_after``/``before``. A merged event that involved the company you filtered by still surfaces its
        tombstone. Those filters are checked against the tombstone's companies as they are now. With ``listed``, a
        tombstone whose only listed company was delisted or stopped appearing in the API's company data before the merge
        or removal no longer matches, so it is not returned. Poll without ``listed`` for full-fidelity tombstone
        coverage. On ``exchange``, ``market``, ``domicile``, ``index``, ``sector`` and ``listed``, a merged or removed
        commentary event's tombstone is returned when any matching company is on it, in any role, so a filtered sync can
        include a tombstone for an event it never returned. A filtered sync returns events that match the filters now:
        an event that stops matching (for example, when its articles are no longer about a matching company) is not
        returned by it. Poll without those filters to see every change. A tombstone does not respect ``country``,
        ``category``, ``sources``, ``source_type`` or ``content_type``, which are article-grain filters. It has no live
        articles left to filter by, so poll without them for full-fidelity tombstone coverage. A merged event's
        ``last_article_at`` freezes at merge time, so ``last_article_after``/``before`` filter a tombstone against that
        frozen value rather than against when the merge happened. ``window`` cannot be used for sync polling at all (see
        below). ## Polling for updates Use ``updated_after`` with the timestamp of your last completed sync to fetch
        only events that have changed since. Results are then ordered by ``updated_at`` ascending and cursor-paginated:
        follow ``pagination.next_cursor``, resending the same ``updated_after``, until it is null. Advance your stored
        timestamp only once every page is drained. A merge takes the earlier of the two ``first_reported_at`` values, so
        it only ever moves the surviving event earlier in the default sort. Under the default (non-sync) ordering a
        cursor walk can therefore re-emit a row you have already seen, but it can never skip one. Treat the walk as
        at-least-once and dedupe by ``id``. ``company_ids``/``story_ids`` membership can drift out from under
        ``updated_after`` without bumping ``updated_at``: a company merge, a company leaving or rejoining the API's
        company data, or a story being withdrawn from an event you already hold. A change to a story itself is tracked,
        and bumps the parent event.

        Args:
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Works with
                ``q`` too; ``q`` is a filter, not a separate search mode. Not accepted with ``mode=semantic``. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included.
            updated_after: ISO 8601 datetime. Returns only events updated after this timestamp, including merge/removal
                tombstones. Use for incremental sync.
            q: Full-text filter over the event's own title and summary as well as its live member articles' indexed
                content (title, summary, key points, plus tagged company names and key facts), so an event can match on
                a company its coverage only tags. Matches stay in the default feed order (most recently reported first)
                and are cursor-paginated like any other request; combine with ``window``/``last_article_after`` for
                "latest on X". This differs deliberately from ``q`` on ``GET /api/v1/articles`` and ``GET
                /api/v1/stories``, which returns a relevance-ranked single page unless ``sort=latest`` is given. Here
                ``q`` is a filter over the ordinary feed order, so it composes with ``window`` and the cursor.
                ``mode=semantic`` replaces this with a ranked match (see ``mode``).
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword, for thematic questions a keyword
                match cannot answer ("defense contract wins", "battery cell capacity expansion"). The match runs over
                the translated title and summary of each event's live member articles, not over the event's own title or
                summary, and not over the key points, tagged company names or key facts that plain ``q`` also reaches.
                It is therefore not a strict recall improvement over plain ``q``: an event whose title is on-topic while
                its member articles are oblique can match ``q`` and not ``mode=semantic``. Results are ranked by
                distance blended with a small recency bonus, not in feed order. Requires ``q``, is mutually exclusive
                with ``sort``, ``cursor`` and ``updated_after``, and returns a single ranked page capped by ``limit``.
                Every other filter remains a hard filter applied before the match, not after. ``window`` and
                ``last_article_after``/``last_article_before`` still bound the event's activity, not the date of the
                matched article, so the member article behind a match can be considerably older than the event's last
                activity. Each event gains a ``distance`` (raw cosine, lower is closer): the distance of its
                best-matching member article that your plan can access, so the same event can carry different distances
                on different plans. Compare it only within one response, never across responses: the scale is
                model-dependent. Ranking uses the mean of an event's two closest member articles and a recency bonus,
                neither of which ``distance`` reflects. A server-side relevance floor drops weak matches, so a page is
                frequently shorter than ``limit`` and can be empty. The plan cap on recent events does not apply in this
                mode: the match runs over every event with member articles inside your plan's age and source
                restrictions, and ``plan_limited: true`` reports only that those restrictions are in force. ``truncated:
                true`` means the article-match horizon was exhausted, so further matching events exist that this
                response cannot reach, and no cursor can page to them. The response ``pagination`` object carries
                ``count`` only. There is no ``next_cursor``, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to keyword matching.
            event_type: Filter by event type slug, comma-separated (e.g. ``earnings-report,acquisition-announced``).
                These are Events taxonomy slugs (hyphenated) from ``GET /api/v1/event_types`` and are the only values
                accepted here. The underscored calendar ``event_type`` values used by ``GET /api/v1/calendar_events``
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things. An unrecognized slug returns 400 naming the bad slug(s).
            significance: Editorial importance, the feed's materiality threshold, comma-separated (e.g.
                ``notable,routine``). Valid values: ``notable`` (material, front-page-worthy events), ``routine``
                (ledger records: routine filings, scheduled disclosures), ``commentary`` (opinion/analysis pieces). Use
                ``significance=notable`` to restrict the feed to material events. An unrecognized value returns 400
                naming the bad value(s).
            ticker: Filter to events involving the company with this stock ticker (e.g. ``VOLV-B``), comma-separated for
                several (matches any of them). Accepts the exchange-suffixed form; former tickers resolve. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. Combined with ``company``, the two filters intersect. Matches active-involvement
                roles only unless ``include_peripheral=true``.
            company: Filter to events involving a company by its ``id``, comma-separated for several (matches any of
                them). Complements ``ticker``; reaches companies without a stock listing. Every value must resolve, or
                the request is rejected with ``400`` naming the unknown ids. Combined with ``ticker``, the two filters
                intersect. Matches active-involvement roles only unless ``include_peripheral=true``.
            country: Filter to events with a live member article from this country (ISO 3166-1 alpha-2, comma-separated
                for multiple). Applied at the article grain, so sync tombstones do not respect it.
            category: Filter to events with a live member article in any of these categories, by their ``id``
                (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not
                respect it.
            sources: Filter to events with a live member article from these sources, by their ``id`` (comma-separated,
                max 25). Applied at the article grain, so sync tombstones do not respect it.
            source_type: Filter to events with a live member article from this source type, comma-separated. Valid
                values: ``news_publication``, ``wire_service``, ``press_release``, ``government``,
                ``trade_publication``, ``blog``, ``stock_exchange``, ``research``. Articles from disabled sources are
                excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value
                returns 400 naming the bad value(s).
            content_type: Filter to events with a live member article of this content type, comma-separated. Valid
                values: ``news``, ``analysis``, ``press_release``, ``market_commentary``, ``market_news``,
                ``trading_halt``, ``trading_event``, ``other``. Applied at the article grain, so sync tombstones do not
                respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned
                label per article. To find events with a member article from a primary disclosure source, filter on
                ``source_type`` (``wire_service``, ``stock_exchange``, ``press_release``, ``government``) instead.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XSTO,XCSE``).
            market: Filter to events involving a company with an active equity listing in these countries' exchanges
                (ISO 3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North,
                Spotlight and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal
                domicile). Includes foreign-domiciled but locally-listed issuers. Note: a just-listed company's listing
                record can lag its IPO event.
            domicile: Filter to events involving a company legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            index: Filter to events for companies in this stock index, by ``id`` or symbol.
            sector: Filter by company sector. Must exactly match a standard sector name.
            listed: When ``true``, only return events involving at least one company with an active listing on any
                exchange, matched by the same rule as ``exchange``/``market``/``domicile``/``index``/``sector``. On a
                factual event, the company must have an active-involvement role (subject, acquirer, target, investor,
                issuer, partner); an advisor, speaker or passing mention does not qualify. On a commentary event, any
                role counts when a live article in the event is about that company rather than only mentioning it.
                ``include_peripheral`` does not change this. A company whose listings are all delisted does not count.
                Hidden and unverified companies do not count.
            watchlist: Restrict to events for companies in a single watchlist, by its ``id``. Requires the
                ``read:watchlist`` scope. Matches active-involvement roles only unless ``include_peripheral=true``.
            first_reported_after: ISO 8601 datetime. Only events first reported at or after this time.
            first_reported_before: ISO 8601 datetime. Only events first reported before this time.
            last_article_after: ISO 8601 datetime. Only events whose most recent activity (``last_article_at``, or
                ``first_reported_at`` when that is null) is at or after this time. This matches when the event was last
                active, not when it broke. Mutually exclusive with ``window``.
            last_article_before: ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually
                exclusive with ``window``.
            window: Relative shorthand for ``last_article_after``, e.g. ``8h``, ``24h``, ``7d`` (hours or days only, max
                365d equivalent). Evaluated per request against the server clock. Compute ``last_article_after``
                yourself for a stable multi-page snapshot. Mutually exclusive with ``last_article_after``,
                ``last_article_before``, and ``updated_after``.
            sort: Sort order. ``latest`` (default) sorts most recently reported first, the unfiltered feed order.
                ``significance`` groups events into 3 coarse editorial tiers (``notable``, then ``routine``, then
                ``commentary``), most recently reported first within each tier; expect large ties within a tier. A
                mid-walk ``routine``→``notable`` escalation may be skipped, since the ordering is a best-effort
                snapshot. For a broad importance filter, prefer ``significance=notable`` with the default sort; page 1
                is identical. Mutually exclusive with ``updated_after`` (an unrecognized value, or either sort value
                combined with ``updated_after``, returns 400).
            related_to: Filter to commentary events that comment on or react to the factual event with this ``id`` (see
                ``related_to`` on the response). Unresolvable ``id`` returns an empty result set, not an error.
            include_peripheral: When ``true``, widen ``company``/``ticker``/``watchlist`` matching, and the
                ``company_ids`` returned on each event, to companies with a peripheral role (advisor, speaker, or a
                passing mention) as well. Default ``false`` restricts matching and ``company_ids`` to companies with an
                active-involvement role (subject, acquirer, target, investor, issuer, partner). Does not widen
                ``exchange``, ``market``, ``domicile``, ``index``, ``sector`` or ``listed``: on a factual event those
                match an active-involvement role; on a commentary event, any role, when a live article in the event is
                about that company rather than only mentioning it.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/events"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[ModeOrStr | None]("mode", mode),
                param[str | None]("event_type", event_type),
                param[str | None]("significance", significance),
                param[str | None]("ticker", ticker),
                param[str | None]("company", company),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("source_type", source_type),
                param[str | None]("content_type", content_type),
                param[str | None]("exchange", exchange),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("index", index),
                param[str | None]("sector", sector),
                param[str | None]("listed", listed),
                param[str | None]("watchlist", watchlist),
                param[str | None]("first_reported_after", first_reported_after),
                param[str | None]("first_reported_before", first_reported_before),
                param[str | None]("last_article_after", last_article_after),
                param[str | None]("last_article_before", last_article_before),
                param[str | None]("window", window),
                param[str | None]("sort", sort),
                param[str | None]("related_to", related_to),
                param[bool | None]("include_peripheral", include_peripheral),
            ],
            headers=[param[str | None]("If-None-Match", if_none_match)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1EventsResponse],
            error_mapper=get_api_v1_events_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_events_by_id(
        self,
        id_: str,
        *,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EventsResponse1, GetApiV1EventsByIdErrorBody]:
        """Fetches a single event by ID.

        A merged or removed event returns 200 with the minimal tombstone shape (see the list endpoint's description)
        rather than 404. The id still resolves; it carries no content. An event with no live member articles at all
        returns 404. An event whose live members exist but are all outside your plan's age/source restrictions returns
        403 with an upgrade problem, distinct from the plain 404.

        Responses are cached with ``ETag`` and ``Cache-Control: private, max-age=300``; send ``If-None-Match`` to
        receive a ``304 Not Modified``. There is no ``Last-Modified`` here, for the same reason as ``GET
        /api/v1/events``.

        Args:
            id_: The event ID, as returned in the ``id`` field of list responses.
            include_peripheral: When ``true``, ``company_ids`` and ``companies[]`` also include companies with a
                peripheral role (advisor, speaker, or a passing mention). Default ``false`` lists companies with an
                active-involvement role only (subject, acquirer, target, investor, issuer, partner).
                ``association_tier`` is present on every ``companies[]`` entry regardless.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the event has not
                changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/events/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("include_peripheral", include_peripheral)],
            headers=[param[str | None]("If-None-Match", if_none_match)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1EventsResponse1],
            error_mapper=get_api_v1_events_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        mode: ModeOrStr | None = None,
        event_type: str | None = None,
        significance: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        exchange: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        first_reported_after: str | None = None,
        first_reported_before: str | None = None,
        last_article_after: str | None = None,
        last_article_before: str | None = None,
        window: str | None = None,
        sort: str | None = None,
        related_to: str | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EventsResponse, GetApiV1EventsErrorBody]:
        """Returns a paginated list of Events. An event groups the articles reporting a single real-world development
        (an earnings report, an M&A announcement, a dividend, an executive change, and so on). Sorted by when the event
        was first reported, most recent first. An event is only returned if at least one of its live member articles
        survives your plan's age and source restrictions. This is the same visibility rule the event feed on the website
        uses. If none survive, the event does not appear at all. ``GET /api/v1/events/:id`` distinguishes that case from
        an event your plan can see but whose full coverage it cannot (see below). ## Merges and removals Events
        sometimes merge (two events turn out to describe the same development) or are removed (no live articles remain,
        or the event was found to be incorrect). Both are terminal. The event never reappears in a normal list, and
        ``GET /api/v1/events/:id`` on one returns a **minimal tombstone**: ``id``, ``status``, ``merged_into`` (the
        surviving event's ``id``, when merged), and ``updated_at`` only. A tombstone carries no title, summary, counts
        or id arrays. Poll with ``updated_after`` to learn about merges and removals. Tombstones for events that changed
        since your watermark are included in that sync walk (uncapped, on every plan), which is otherwise the only way
        to learn that an event you previously fetched is gone. They are never returned by the default list. A tombstone
        still respects your event-grain filters: ``company``, ``ticker``, ``exchange``, ``index``, ``sector``,
        ``listed``, ``event_type``, ``significance``, ``watchlist``, ``first_reported_after``/``before``, and
        ``last_article_after``/``before``. A merged event that involved the company you filtered by still surfaces its
        tombstone. Those filters are checked against the tombstone's companies as they are now. With ``listed``, a
        tombstone whose only listed company was delisted or stopped appearing in the API's company data before the merge
        or removal no longer matches, so it is not returned. Poll without ``listed`` for full-fidelity tombstone
        coverage. On ``exchange``, ``market``, ``domicile``, ``index``, ``sector`` and ``listed``, a merged or removed
        commentary event's tombstone is returned when any matching company is on it, in any role, so a filtered sync can
        include a tombstone for an event it never returned. A filtered sync returns events that match the filters now:
        an event that stops matching (for example, when its articles are no longer about a matching company) is not
        returned by it. Poll without those filters to see every change. A tombstone does not respect ``country``,
        ``category``, ``sources``, ``source_type`` or ``content_type``, which are article-grain filters. It has no live
        articles left to filter by, so poll without them for full-fidelity tombstone coverage. A merged event's
        ``last_article_at`` freezes at merge time, so ``last_article_after``/``before`` filter a tombstone against that
        frozen value rather than against when the merge happened. ``window`` cannot be used for sync polling at all (see
        below). ## Polling for updates Use ``updated_after`` with the timestamp of your last completed sync to fetch
        only events that have changed since. Results are then ordered by ``updated_at`` ascending and cursor-paginated:
        follow ``pagination.next_cursor``, resending the same ``updated_after``, until it is null. Advance your stored
        timestamp only once every page is drained. A merge takes the earlier of the two ``first_reported_at`` values, so
        it only ever moves the surviving event earlier in the default sort. Under the default (non-sync) ordering a
        cursor walk can therefore re-emit a row you have already seen, but it can never skip one. Treat the walk as
        at-least-once and dedupe by ``id``. ``company_ids``/``story_ids`` membership can drift out from under
        ``updated_after`` without bumping ``updated_at``: a company merge, a company leaving or rejoining the API's
        company data, or a story being withdrawn from an event you already hold. A change to a story itself is tracked,
        and bumps the parent event.

        Args:
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Works with
                ``q`` too; ``q`` is a filter, not a separate search mode. Not accepted with ``mode=semantic``. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included.
            updated_after: ISO 8601 datetime. Returns only events updated after this timestamp, including merge/removal
                tombstones. Use for incremental sync.
            q: Full-text filter over the event's own title and summary as well as its live member articles' indexed
                content (title, summary, key points, plus tagged company names and key facts), so an event can match on
                a company its coverage only tags. Matches stay in the default feed order (most recently reported first)
                and are cursor-paginated like any other request; combine with ``window``/``last_article_after`` for
                "latest on X". This differs deliberately from ``q`` on ``GET /api/v1/articles`` and ``GET
                /api/v1/stories``, which returns a relevance-ranked single page unless ``sort=latest`` is given. Here
                ``q`` is a filter over the ordinary feed order, so it composes with ``window`` and the cursor.
                ``mode=semantic`` replaces this with a ranked match (see ``mode``).
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by keyword, for thematic questions a keyword
                match cannot answer ("defense contract wins", "battery cell capacity expansion"). The match runs over
                the translated title and summary of each event's live member articles, not over the event's own title or
                summary, and not over the key points, tagged company names or key facts that plain ``q`` also reaches.
                It is therefore not a strict recall improvement over plain ``q``: an event whose title is on-topic while
                its member articles are oblique can match ``q`` and not ``mode=semantic``. Results are ranked by
                distance blended with a small recency bonus, not in feed order. Requires ``q``, is mutually exclusive
                with ``sort``, ``cursor`` and ``updated_after``, and returns a single ranked page capped by ``limit``.
                Every other filter remains a hard filter applied before the match, not after. ``window`` and
                ``last_article_after``/``last_article_before`` still bound the event's activity, not the date of the
                matched article, so the member article behind a match can be considerably older than the event's last
                activity. Each event gains a ``distance`` (raw cosine, lower is closer): the distance of its
                best-matching member article that your plan can access, so the same event can carry different distances
                on different plans. Compare it only within one response, never across responses: the scale is
                model-dependent. Ranking uses the mean of an event's two closest member articles and a recency bonus,
                neither of which ``distance`` reflects. A server-side relevance floor drops weak matches, so a page is
                frequently shorter than ``limit`` and can be empty. The plan cap on recent events does not apply in this
                mode: the match runs over every event with member articles inside your plan's age and source
                restrictions, and ``plan_limited: true`` reports only that those restrictions are in force. ``truncated:
                true`` means the article-match horizon was exhausted, so further matching events exist that this
                response cannot reach, and no cursor can page to them. The response ``pagination`` object carries
                ``count`` only. There is no ``next_cursor``, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to keyword matching.
            event_type: Filter by event type slug, comma-separated (e.g. ``earnings-report,acquisition-announced``).
                These are Events taxonomy slugs (hyphenated) from ``GET /api/v1/event_types`` and are the only values
                accepted here. The underscored calendar ``event_type`` values used by ``GET /api/v1/calendar_events``
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things. An unrecognized slug returns 400 naming the bad slug(s).
            significance: Editorial importance, the feed's materiality threshold, comma-separated (e.g.
                ``notable,routine``). Valid values: ``notable`` (material, front-page-worthy events), ``routine``
                (ledger records: routine filings, scheduled disclosures), ``commentary`` (opinion/analysis pieces). Use
                ``significance=notable`` to restrict the feed to material events. An unrecognized value returns 400
                naming the bad value(s).
            ticker: Filter to events involving the company with this stock ticker (e.g. ``VOLV-B``), comma-separated for
                several (matches any of them). Accepts the exchange-suffixed form; former tickers resolve. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. Combined with ``company``, the two filters intersect. Matches active-involvement
                roles only unless ``include_peripheral=true``.
            company: Filter to events involving a company by its ``id``, comma-separated for several (matches any of
                them). Complements ``ticker``; reaches companies without a stock listing. Every value must resolve, or
                the request is rejected with ``400`` naming the unknown ids. Combined with ``ticker``, the two filters
                intersect. Matches active-involvement roles only unless ``include_peripheral=true``.
            country: Filter to events with a live member article from this country (ISO 3166-1 alpha-2, comma-separated
                for multiple). Applied at the article grain, so sync tombstones do not respect it.
            category: Filter to events with a live member article in any of these categories, by their ``id``
                (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not
                respect it.
            sources: Filter to events with a live member article from these sources, by their ``id`` (comma-separated,
                max 25). Applied at the article grain, so sync tombstones do not respect it.
            source_type: Filter to events with a live member article from this source type, comma-separated. Valid
                values: ``news_publication``, ``wire_service``, ``press_release``, ``government``,
                ``trade_publication``, ``blog``, ``stock_exchange``, ``research``. Articles from disabled sources are
                excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value
                returns 400 naming the bad value(s).
            content_type: Filter to events with a live member article of this content type, comma-separated. Valid
                values: ``news``, ``analysis``, ``press_release``, ``market_commentary``, ``market_news``,
                ``trading_halt``, ``trading_event``, ``other``. Applied at the article grain, so sync tombstones do not
                respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned
                label per article. To find events with a member article from a primary disclosure source, filter on
                ``source_type`` (``wire_service``, ``stock_exchange``, ``press_release``, ``government``) instead.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XSTO,XCSE``).
            market: Filter to events involving a company with an active equity listing in these countries' exchanges
                (ISO 3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North,
                Spotlight and NGM. Distinct from ``country`` (the source that reported it) and ``domicile`` (legal
                domicile). Includes foreign-domiciled but locally-listed issuers. Note: a just-listed company's listing
                record can lag its IPO event.
            domicile: Filter to events involving a company legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            index: Filter to events for companies in this stock index, by ``id`` or symbol.
            sector: Filter by company sector. Must exactly match a standard sector name.
            listed: When ``true``, only return events involving at least one company with an active listing on any
                exchange, matched by the same rule as ``exchange``/``market``/``domicile``/``index``/``sector``. On a
                factual event, the company must have an active-involvement role (subject, acquirer, target, investor,
                issuer, partner); an advisor, speaker or passing mention does not qualify. On a commentary event, any
                role counts when a live article in the event is about that company rather than only mentioning it.
                ``include_peripheral`` does not change this. A company whose listings are all delisted does not count.
                Hidden and unverified companies do not count.
            watchlist: Restrict to events for companies in a single watchlist, by its ``id``. Requires the
                ``read:watchlist`` scope. Matches active-involvement roles only unless ``include_peripheral=true``.
            first_reported_after: ISO 8601 datetime. Only events first reported at or after this time.
            first_reported_before: ISO 8601 datetime. Only events first reported before this time.
            last_article_after: ISO 8601 datetime. Only events whose most recent activity (``last_article_at``, or
                ``first_reported_at`` when that is null) is at or after this time. This matches when the event was last
                active, not when it broke. Mutually exclusive with ``window``.
            last_article_before: ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually
                exclusive with ``window``.
            window: Relative shorthand for ``last_article_after``, e.g. ``8h``, ``24h``, ``7d`` (hours or days only, max
                365d equivalent). Evaluated per request against the server clock. Compute ``last_article_after``
                yourself for a stable multi-page snapshot. Mutually exclusive with ``last_article_after``,
                ``last_article_before``, and ``updated_after``.
            sort: Sort order. ``latest`` (default) sorts most recently reported first, the unfiltered feed order.
                ``significance`` groups events into 3 coarse editorial tiers (``notable``, then ``routine``, then
                ``commentary``), most recently reported first within each tier; expect large ties within a tier. A
                mid-walk ``routine``→``notable`` escalation may be skipped, since the ordering is a best-effort
                snapshot. For a broad importance filter, prefer ``significance=notable`` with the default sort; page 1
                is identical. Mutually exclusive with ``updated_after`` (an unrecognized value, or either sort value
                combined with ``updated_after``, returns 400).
            related_to: Filter to commentary events that comment on or react to the factual event with this ``id`` (see
                ``related_to`` on the response). Unresolvable ``id`` returns an empty result set, not an error.
            include_peripheral: When ``true``, widen ``company``/``ticker``/``watchlist`` matching, and the
                ``company_ids`` returned on each event, to companies with a peripheral role (advisor, speaker, or a
                passing mention) as well. Default ``false`` restricts matching and ``company_ids`` to companies with an
                active-involvement role (subject, acquirer, target, investor, issuer, partner). Does not widen
                ``exchange``, ``market``, ``domicile``, ``index``, ``sector`` or ``listed``: on a factual event those
                match an active-involvement role; on a commentary event, any role, when a live article in the event is
                about that company rather than only mentioning it.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/events"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[ModeOrStr | None]("mode", mode),
                param[str | None]("event_type", event_type),
                param[str | None]("significance", significance),
                param[str | None]("ticker", ticker),
                param[str | None]("company", company),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("source_type", source_type),
                param[str | None]("content_type", content_type),
                param[str | None]("exchange", exchange),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("index", index),
                param[str | None]("sector", sector),
                param[str | None]("listed", listed),
                param[str | None]("watchlist", watchlist),
                param[str | None]("first_reported_after", first_reported_after),
                param[str | None]("first_reported_before", first_reported_before),
                param[str | None]("last_article_after", last_article_after),
                param[str | None]("last_article_before", last_article_before),
                param[str | None]("window", window),
                param[str | None]("sort", sort),
                param[str | None]("related_to", related_to),
                param[bool | None]("include_peripheral", include_peripheral),
            ],
            headers=[param[str | None]("If-None-Match", if_none_match)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1EventsResponse],
            error_mapper=get_api_v1_events_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_events_by_id(
        self,
        id_: str,
        *,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EventsResponse1, GetApiV1EventsByIdErrorBody]:
        """Fetches a single event by ID.

        A merged or removed event returns 200 with the minimal tombstone shape (see the list endpoint's description)
        rather than 404. The id still resolves; it carries no content. An event with no live member articles at all
        returns 404. An event whose live members exist but are all outside your plan's age/source restrictions returns
        403 with an upgrade problem, distinct from the plain 404.

        Responses are cached with ``ETag`` and ``Cache-Control: private, max-age=300``; send ``If-None-Match`` to
        receive a ``304 Not Modified``. There is no ``Last-Modified`` here, for the same reason as ``GET
        /api/v1/events``.

        Args:
            id_: The event ID, as returned in the ``id`` field of list responses.
            include_peripheral: When ``true``, ``company_ids`` and ``companies[]`` also include companies with a
                peripheral role (advisor, speaker, or a passing mention). Default ``false`` lists companies with an
                active-involvement role only (subject, acquirer, target, investor, issuer, partner).
                ``association_tier`` is present on every ``companies[]`` entry regardless.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the event has not
                changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/events/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[bool | None]("include_peripheral", include_peripheral)],
            headers=[param[str | None]("If-None-Match", if_none_match)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1EventsResponse1],
            error_mapper=get_api_v1_events_by_id_error_mapper,
            request_options=request_options,
        )
