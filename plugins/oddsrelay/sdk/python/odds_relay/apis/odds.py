from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.get_matched_board_error import GetMatchedBoardErrorBody, get_matched_board_error_mapper
from ..errors.get_raw_board_error import GetRawBoardErrorBody, get_raw_board_error_mapper
from ..errors.get_raw_event_error import GetRawEventErrorBody, get_raw_event_error_mapper
from ..models.enums.date_format import DateFormat, DateFormatOrStr
from ..models.enums.exchanges_only import ExchangesOnlyOrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.enums.include_links import IncludeLinks, IncludeLinksOrStr
from ..models.enums.include_liquidity import IncludeLiquidity, IncludeLiquidityOrStr
from ..models.enums.odds_format import OddsFormat, OddsFormatOrStr
from ..models.enums.type1 import Type1OrStr
from ..models.unions.v2_odds_event_response import V2OddsEventResponse
from ..models.unions.v2_odds_raw_response import V2OddsRawResponse
from ..models.unions.v2_odds_response import V2OddsResponse
from ..server.server import Server


class Odds:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OddsWithRawResponse(client, server, auth)

    def get_matched_board(
        self,
        type_: Type1OrStr,
        accept_encoding: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        quote: str | None = None,
        sports: str | None = None,
        bookmakers: str | None = None,
        exchanges: str | None = None,
        markets: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V2OddsResponse:
        """The six matched boards: each event's bookmaker back prices beside the exchanges' lay prices (``dutching``:
        back legs that cover every outcome, grouped by ``dutch_id``; ``each-way`` and ``extra-place``: each-way terms
        against win and place lays).

        **Checks, in this order** (each refusal is free): the per-address shield, the key, the account's flood cap, a
        suspended account, a browser key's website, the API version; then ``type`` (404 ``unknown_type``), ``region``,
        the region in the key (403 ``region_not_in_scope``), the product in the key (403 ``not_in_key_scope``), the
        product in the region (403 ``product_not_in_region``: a region with no exchange serves only dutching and raw);
        then the parameters: each one this route reads, once; ``format``, ``oddsFormat`` and ``dateFormat`` values; on
        ``standard`` and ``dutching`` decimal ISO only and gzip accepted (400 ``add Accept-Encoding: gzip; with curl use
        --compressed``); then the filters (400 unknown values, 403 ``bookmaker_not_in_region``, then your account's
        scope: 403 ``sport_not_in_plan``, ``market_not_in_plan``, ``bookmaker_not_in_plan``, ``exchange_not_in_plan``;
        and your plan's bookmaker list), then ``quote=true``, the price (402), and the board (503 while it is not
        ready).

        **Filters** cut the whole board's events in order: sport and kick-off, then markets, then back offers by
        bookmaker and lay offers by exchange; an outcome left with no back or no lay goes, then empty markets and
        events. ``dutching`` keeps a dutch only when every leg is a named venue. A filtered reply is priced on its
        filters (``/v2/pricing``); the kick-off window is never priced.

        **Freshness**: ``meta.processed_at`` and ``X-Processed-At`` are the board time; ``meta.last_seen`` is each venue
        and sport's last read. The API drops no row for age; a venue not read within its own window (at most two
        minutes) is off the board until its next read.

        **Conditional requests**: send the ``ETag`` back as ``If-None-Match``; an unchanged body is a 304 with no body,
        free. A reply with no events is free.

        Args:
            type_: A matched board: ``standard``, ``2up``, ``dutching``, ``each-way``, ``extra-place`` or ``bog``. The
                aliases ``two-up``, ``each_way`` and ``extra_place`` are accepted and served as their canonical slug.
                Anything else is 404 ``unknown_type``.
            accept_encoding: Send ``gzip``; with curl, ``--compressed`` sends it and decompresses the reply.
                ``standard`` and ``dutching`` answer a request that refuses gzip (``identity`` alone, as Python's
                ``urllib`` sends by default, or ``gzip;q=0`` or ``*;q=0``) with 400 ``bad_request``, message ``add
                Accept-Encoding: gzip; with curl use --compressed``; the other four boards answer it plain.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            sports: Comma-separated, at most 20: a sport key or a prefix of one as ``/v2/sports`` lists them
                (``soccer``, ``soccer_epl``), lowercased. Unknown is 400 ``unknown_sport`` with ``valid`` (the sport key
                bases). A known value with nothing on the board is an empty 200, free. A value is inside your account's
                scope when it starts with a scope sport (``soccer_epl`` under ``soccer``); outside, 403
                ``sport_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            bookmakers: Comma-separated, at most 40: bookmaker keys as ``/v2/bookmakers`` lists them (a listed name is
                accepted too). Unknown is 400 ``unknown_bookmaker`` with ``valid``; an exchange here is that 400 naming
                ``exchanges`` (on ``dutching`` both lists take venues of either kind); a venue outside the region is 403
                ``bookmaker_not_in_region``; one outside your plan's bookmaker list or your account's scope is 403
                ``bookmaker_not_in_plan`` with ``valid`` (on ``dutching``, an exchange outside the scope is 403
                ``exchange_not_in_plan``). A plan with a bookmaker list, or an account scope, trims a call naming none
                to that list.
            exchanges: Comma-separated, at most 4: exchange keys as ``/v2/bookmakers`` lists them. Unknown is 400
                ``unknown_exchange`` with ``valid``; a bookmaker here is that 400 naming ``bookmakers``. Outside your
                account's scope for this product: 403 ``exchange_not_in_plan`` with ``valid``; left out, trimmed to the
                scope.
            markets: Comma-separated, at most 20: market keys (``h2h``, ``totals``, …; ``/v2/sports`` rows list the keys
                seen under each competition). Each product's keys: keyless ``/v2/coverage``'s ``markets``. Unknown is
                400 ``unknown_market`` with ``valid`` (this product's keys) and, when another product carries it,
                ``products``; another product's key may instead be accepted and match nothing. Outside your account's
                scope for this product: 403 ``market_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The board (envelope, or the ``data`` array under ``format=bare``), or under ``quote=true`` the price. Gzip
            unless refused.

        Raises:
            ApiError: Unknown or repeated parameter; a bad ``format``, ``oddsFormat`` or ``dateFormat`` value; on
                standard and dutching american odds, unix dates or gzip refused; a filter over its cap; a bad instant or
                window; a region list, repeat or uppercase code; ``region_required``; ``unknown_sport``,
                ``unknown_market``, ``unknown_bookmaker``, ``unknown_exchange`` (with ``valid``). ``missing_api_key``,
                ``invalid_api_key`` (also a closed account), ``revoked_api_key``, ``expired_api_key``,
                ``paused_api_key``. ``insufficient_tokens``, before anything is built (a raw page's price is known after
                its page is cut), or after it when a concurrent spend emptied the balance: the body is not sent.
                ``account_suspended``, ``origin_not_allowed``, ``schema_not_in_scope``, ``region_not_in_scope``,
                ``not_in_key_scope``, ``product_not_in_region``, ``bookmaker_not_in_region``, ``bookmaker_not_in_plan``,
                ``sport_not_in_plan``, ``market_not_in_plan``, ``exchange_not_in_plan``. ``unknown_type``,
                ``unknown_region``. ``too_many_from_address``, then after authentication ``too_many_requests``; the
                front door's own caps answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400OddsRelayDiscoveryApi | Error401OddsRelayDiscoveryApi | Error402 |
                Error403OddsRelayDiscoveryApi | Error404 | Error429OddsRelayDiscoveryApi | Error500OddsRelayDiscoveryApi
                | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_matched_board(
                type_,
                accept_encoding,
                region=region,
                format_=format_,
                odds_format=odds_format,
                date_format=date_format,
                quote=quote,
                sports=sports,
                bookmakers=bookmakers,
                exchanges=exchanges,
                markets=markets,
                commence_time_from=commence_time_from,
                commence_time_to=commence_time_to,
                request_options=request_options,
            ),
        )

    def get_raw_board(
        self,
        accept_encoding: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        sports: str | None = None,
        sport: str | None = None,
        leagues: str | None = None,
        bookmakers: str | None = None,
        require_bookmakers: str | None = None,
        markets: str | None = None,
        event_ids: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        updated_since: str | None = None,
        exchanges_only: ExchangesOnlyOrStr | None = None,
        include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE,
        include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE,
        cursor: str | None = None,
        limit: int | None = None,
        quote: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V2OddsRawResponse:
        """Every venue's prices per event, one page at a time: bookmakers as ``{name, price}``, exchanges quoting a lay
        side as ``{name, back_price, lay_price, available}``. Served gzip only: a request refusing gzip is 400 ``add
        Accept-Encoding: gzip; with curl use --compressed``.

        **Checks, in this order**: the per-address shield, the key, the flood cap, a suspended account, a browser key's
        website, the API version; ``region``, the region and ``raw`` in the key; the parameters (each one this route
        reads, once) and their values; the filters (400 unknown values, 403 ``bookmaker_not_in_region``, 403
        ``bookmaker_not_in_plan``, then your account's scope: 403 ``sport_not_in_plan``, ``market_not_in_plan``,
        ``bookmaker_not_in_plan``); ``includeLinks`` and ``includeLiquidity``; ``limit``; ``cursor``; gzip; the raw
        board (503 ``raw_not_enabled``); the page (503 while it cannot be cut); ``quote=true``; the price (402).

        **Paging**: pages are ordered by (kick-off, event id) and a cursor resumes strictly after the last event it saw,
        so an event that leaves the board between pages never restarts the walk. The accepted limit: an event whose
        kick-off moves across the cursor during a walk can appear twice or be missed. Dedupe by event ``id``, and take a
        missed event on the next walk. A cursor expires 300 s after it was issued.

        **Following changes**: walk with ``updatedSince`` set to the start of your previous walk; ``last_update`` is
        when a venue's market last moved (see the schema for what it is not).

        **Price**: a page pays its share of the query's price (its prices over all the query's events' prices, at least
        1; ``eventIds`` and ``requireBookmakers`` narrow the page, never the query), so a whole walk pays the query's
        price (narrowed by ``eventIds`` or ``requireBookmakers``, only its kept events' share of it); a recent
        ``updatedSince`` pays a reduced share. ``quote=true`` prices this page.

        Args:
            accept_encoding: Send ``gzip``; with curl, ``--compressed`` sends it and decompresses the reply. The raw
                board answers a request that refuses gzip (``identity`` alone, as Python's ``urllib`` sends by default,
                or ``gzip;q=0`` or ``*;q=0``) with 400 ``bad_request``, message ``add Accept-Encoding: gzip; with curl
                use --compressed``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            sports: Comma-separated, at most 20: a sport key, a prefix of one, or a sport name raw serves, lowercased.
                Unknown is 400 ``unknown_sport`` with ``valid``. Inside your account's raw scope: a key or prefix
                starting with a scope sport, a sport name only when it equals one (send ``soccer``, not ``football``);
                outside, 403 ``sport_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            sport: The same as ``sports`` (what ``/v2/events`` takes); ignored when ``sports`` is sent.
            leagues: Comma-separated, at most 40: competition names (an event's league or ``sport_title``), lowercased.
                Not checked against a catalogue.
            bookmakers: Comma-separated, at most 40: venue keys of either kind, bookmakers and exchanges, as
                ``/v2/bookmakers`` lists them. Unknown is 400 ``unknown_bookmaker`` with ``valid``; outside the region
                403 ``bookmaker_not_in_region``; outside your plan's bookmaker list or your account's raw scope 403
                ``bookmaker_not_in_plan`` with ``valid``. An account scope's raw list is the whole venue list, exchanges
                included: left out, trimmed to it (so ``exchangesOnly=true`` keeps only the exchanges it names).
            require_bookmakers: Comma-separated, at most 40 venue keys, checked as ``bookmakers`` is (the same 400 and
                403 codes). Keeps only the events where EVERY named venue quotes the call's ``markets`` (with several,
                at least one of them each), under ``exchangesOnly`` if set; a venue that lists the event but not the
                market does not count. ``bookmakers`` does not narrow this test and ``updatedSince`` is not part of it:
                with ``updatedSince``, an event carrying every named venue is kept when any venue shown changed, and the
                page shows only the venues that changed. It narrows events, never venues: every venue the other filters
                keep is still shown, named or not. ``meta.total`` and ``X-Count`` count the events kept. Price: like
                ``eventIds``, it narrows the page and not the query, so a page pays its share of the same call without
                ``requireBookmakers``, and an empty page is free.
            markets: Comma-separated, at most 20: market keys raw serves. Raw's keys: keyless ``/v2/coverage``'s
                ``markets.raw``. Unknown is 400 ``unknown_market`` with ``valid`` (raw's keys) and, when another product
                carries it, ``products``. Keeps venues quoting one of them, and only those markets. Outside your
                account's scope for this product: 403 ``market_not_in_plan`` with ``valid``; left out, trimmed to the
                scope.
            event_ids: Comma-separated, at most 50 event ids. Narrows the page, not the query: a page pays its share of
                the same call without ``eventIds``.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            updated_since: Exactly ``YYYY-MM-DDTHH:MM:SSZ`` (any other form is 400). Keeps venues whose ``last_update``
                is at or after it, and the events holding one. The bulk way to follow raw: a recent ``updatedSince``
                pays a reduced share (``/v2/pricing`` ``recent``).
            exchanges_only: ``true``: exchanges only. ``true`` or ``false``, else 400.
            include_links: ``true``: each venue's ``link`` (its primary event page; left out when it has none). Default
                ``false``. ``true`` or ``false``, else 400.
            include_liquidity: ``false``: leave out ``available`` beside an exchange's ``lay_price``. Default ``true``.
                ``true`` or ``false``, else 400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            limit: Events per page, 1-250 (default and maximum 250). Anything else is 400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One page (envelope, or the ``data`` array under ``format=bare``), or under ``quote=true`` its price. Gzip.

        Raises:
            ApiError: Unknown or repeated parameter; a bad format, instant, ``updatedSince``, boolean, ``limit`` or
                ``cursor``; a filter over its cap; gzip refused; a region list, repeat or uppercase code;
                ``region_required``; ``unknown_sport``, ``unknown_market``, ``unknown_bookmaker`` (with ``valid``).
                ``missing_api_key``, ``invalid_api_key`` (also a closed account), ``revoked_api_key``,
                ``expired_api_key``, ``paused_api_key``. ``insufficient_tokens``, before anything is built (a raw page's
                price is known after its page is cut), or after it when a concurrent spend emptied the balance: the body
                is not sent. ``account_suspended``, ``origin_not_allowed``, ``schema_not_in_scope``,
                ``region_not_in_scope``, ``not_in_key_scope``, ``bookmaker_not_in_region``, ``bookmaker_not_in_plan`` (a
                venue of either kind outside your plan or your account's raw scope), ``sport_not_in_plan``,
                ``market_not_in_plan``. ``unknown_region``. ``too_many_from_address``, then after authentication
                ``too_many_requests``; the front door's own caps answer an empty-bodied 429. ``internal_error``.
                ``raw_not_enabled``, ``temporarily_unavailable``. 502 from the front door when the API behind it does
                not answer: an empty body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayDiscoveryApi
                | Error401OddsRelayDiscoveryApi | Error402 | Error403OddsRelayDiscoveryApi | Error404 |
                Error429OddsRelayDiscoveryApi | Error500OddsRelayDiscoveryApi | Error503OddsRelayDiscoveryApi |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_raw_board(
                accept_encoding,
                region=region,
                format_=format_,
                odds_format=odds_format,
                date_format=date_format,
                sports=sports,
                sport=sport,
                leagues=leagues,
                bookmakers=bookmakers,
                require_bookmakers=require_bookmakers,
                markets=markets,
                event_ids=event_ids,
                commence_time_from=commence_time_from,
                commence_time_to=commence_time_to,
                updated_since=updated_since,
                exchanges_only=exchanges_only,
                include_links=include_links,
                include_liquidity=include_liquidity,
                cursor=cursor,
                limit=limit,
                quote=quote,
                request_options=request_options,
            ),
        )

    def get_raw_event(
        self,
        id_: str,
        *,
        region: str | None = None,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE,
        include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE,
        quote: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V2OddsEventResponse:
        """One raw event by id, every venue (a plan with a bookmaker list sees those venues and the region's exchanges;
        an account scope sees its raw venue list and markets only, no exchange added). Checks: the key and scope as raw,
        the parameters and their values, the raw board (503 ``raw_not_enabled``), the id (404 ``unknown_event``), the
        event's sport in your account's raw scope (403 ``sport_not_in_plan``), ``quote=true``, the price (402). The
        price is the whole event's, whatever the scope cuts. Priced by the event's share of the region's raw prices.
        Gzip unless refused (over 1 kB).

        Args:
            id_: An event id (``or_evt_…``) from raw, a matched board or ``/v2/events``. Not on the raw board now is 404
                ``unknown_event``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            include_links: ``true``: each venue's ``link`` (its primary event page; left out when it has none). Default
                ``false``. ``true`` or ``false``, else 400.
            include_liquidity: ``false``: leave out ``available`` beside an exchange's ``lay_price``. Default ``true``.
                ``true`` or ``false``, else 400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The event, or under ``quote=true`` its price.

        Raises:
            ApiError: Unknown or repeated parameter; a bad ``oddsFormat``, ``dateFormat`` or boolean; a region list,
                repeat or uppercase code; ``region_required``. ``missing_api_key``, ``invalid_api_key`` (also a closed
                account), ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``insufficient_tokens``, before
                anything is built (a raw page's price is known after its page is cut), or after it when a concurrent
                spend emptied the balance: the body is not sent. ``account_suspended``, ``origin_not_allowed``,
                ``schema_not_in_scope``, ``region_not_in_scope``, ``not_in_key_scope``, ``sport_not_in_plan`` (the
                event's sport is outside your account's raw scope). ``unknown_event``, ``unknown_region``.
                ``too_many_from_address``, then after authentication ``too_many_requests``; the front door's own caps
                answer an empty-bodied 429. ``internal_error``. ``raw_not_enabled``, ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400OddsRelayDiscoveryApi | Error401OddsRelayDiscoveryApi | Error402 |
                Error403OddsRelayDiscoveryApi | Error404 | Error429OddsRelayDiscoveryApi | Error500OddsRelayDiscoveryApi
                | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_raw_event(
                id_,
                region=region,
                odds_format=odds_format,
                date_format=date_format,
                include_links=include_links,
                include_liquidity=include_liquidity,
                quote=quote,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> OddsWithRawResponse:
        return self._with_raw_response


class AsyncOdds:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOddsWithRawResponse(client, server, auth)

    async def get_matched_board(
        self,
        type_: Type1OrStr,
        accept_encoding: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        quote: str | None = None,
        sports: str | None = None,
        bookmakers: str | None = None,
        exchanges: str | None = None,
        markets: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V2OddsResponse:
        """The six matched boards: each event's bookmaker back prices beside the exchanges' lay prices (``dutching``:
        back legs that cover every outcome, grouped by ``dutch_id``; ``each-way`` and ``extra-place``: each-way terms
        against win and place lays).

        **Checks, in this order** (each refusal is free): the per-address shield, the key, the account's flood cap, a
        suspended account, a browser key's website, the API version; then ``type`` (404 ``unknown_type``), ``region``,
        the region in the key (403 ``region_not_in_scope``), the product in the key (403 ``not_in_key_scope``), the
        product in the region (403 ``product_not_in_region``: a region with no exchange serves only dutching and raw);
        then the parameters: each one this route reads, once; ``format``, ``oddsFormat`` and ``dateFormat`` values; on
        ``standard`` and ``dutching`` decimal ISO only and gzip accepted (400 ``add Accept-Encoding: gzip; with curl use
        --compressed``); then the filters (400 unknown values, 403 ``bookmaker_not_in_region``, then your account's
        scope: 403 ``sport_not_in_plan``, ``market_not_in_plan``, ``bookmaker_not_in_plan``, ``exchange_not_in_plan``;
        and your plan's bookmaker list), then ``quote=true``, the price (402), and the board (503 while it is not
        ready).

        **Filters** cut the whole board's events in order: sport and kick-off, then markets, then back offers by
        bookmaker and lay offers by exchange; an outcome left with no back or no lay goes, then empty markets and
        events. ``dutching`` keeps a dutch only when every leg is a named venue. A filtered reply is priced on its
        filters (``/v2/pricing``); the kick-off window is never priced.

        **Freshness**: ``meta.processed_at`` and ``X-Processed-At`` are the board time; ``meta.last_seen`` is each venue
        and sport's last read. The API drops no row for age; a venue not read within its own window (at most two
        minutes) is off the board until its next read.

        **Conditional requests**: send the ``ETag`` back as ``If-None-Match``; an unchanged body is a 304 with no body,
        free. A reply with no events is free.

        Args:
            type_: A matched board: ``standard``, ``2up``, ``dutching``, ``each-way``, ``extra-place`` or ``bog``. The
                aliases ``two-up``, ``each_way`` and ``extra_place`` are accepted and served as their canonical slug.
                Anything else is 404 ``unknown_type``.
            accept_encoding: Send ``gzip``; with curl, ``--compressed`` sends it and decompresses the reply.
                ``standard`` and ``dutching`` answer a request that refuses gzip (``identity`` alone, as Python's
                ``urllib`` sends by default, or ``gzip;q=0`` or ``*;q=0``) with 400 ``bad_request``, message ``add
                Accept-Encoding: gzip; with curl use --compressed``; the other four boards answer it plain.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            sports: Comma-separated, at most 20: a sport key or a prefix of one as ``/v2/sports`` lists them
                (``soccer``, ``soccer_epl``), lowercased. Unknown is 400 ``unknown_sport`` with ``valid`` (the sport key
                bases). A known value with nothing on the board is an empty 200, free. A value is inside your account's
                scope when it starts with a scope sport (``soccer_epl`` under ``soccer``); outside, 403
                ``sport_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            bookmakers: Comma-separated, at most 40: bookmaker keys as ``/v2/bookmakers`` lists them (a listed name is
                accepted too). Unknown is 400 ``unknown_bookmaker`` with ``valid``; an exchange here is that 400 naming
                ``exchanges`` (on ``dutching`` both lists take venues of either kind); a venue outside the region is 403
                ``bookmaker_not_in_region``; one outside your plan's bookmaker list or your account's scope is 403
                ``bookmaker_not_in_plan`` with ``valid`` (on ``dutching``, an exchange outside the scope is 403
                ``exchange_not_in_plan``). A plan with a bookmaker list, or an account scope, trims a call naming none
                to that list.
            exchanges: Comma-separated, at most 4: exchange keys as ``/v2/bookmakers`` lists them. Unknown is 400
                ``unknown_exchange`` with ``valid``; a bookmaker here is that 400 naming ``bookmakers``. Outside your
                account's scope for this product: 403 ``exchange_not_in_plan`` with ``valid``; left out, trimmed to the
                scope.
            markets: Comma-separated, at most 20: market keys (``h2h``, ``totals``, …; ``/v2/sports`` rows list the keys
                seen under each competition). Each product's keys: keyless ``/v2/coverage``'s ``markets``. Unknown is
                400 ``unknown_market`` with ``valid`` (this product's keys) and, when another product carries it,
                ``products``; another product's key may instead be accepted and match nothing. Outside your account's
                scope for this product: 403 ``market_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The board (envelope, or the ``data`` array under ``format=bare``), or under ``quote=true`` the price. Gzip
            unless refused.

        Raises:
            ApiError: Unknown or repeated parameter; a bad ``format``, ``oddsFormat`` or ``dateFormat`` value; on
                standard and dutching american odds, unix dates or gzip refused; a filter over its cap; a bad instant or
                window; a region list, repeat or uppercase code; ``region_required``; ``unknown_sport``,
                ``unknown_market``, ``unknown_bookmaker``, ``unknown_exchange`` (with ``valid``). ``missing_api_key``,
                ``invalid_api_key`` (also a closed account), ``revoked_api_key``, ``expired_api_key``,
                ``paused_api_key``. ``insufficient_tokens``, before anything is built (a raw page's price is known after
                its page is cut), or after it when a concurrent spend emptied the balance: the body is not sent.
                ``account_suspended``, ``origin_not_allowed``, ``schema_not_in_scope``, ``region_not_in_scope``,
                ``not_in_key_scope``, ``product_not_in_region``, ``bookmaker_not_in_region``, ``bookmaker_not_in_plan``,
                ``sport_not_in_plan``, ``market_not_in_plan``, ``exchange_not_in_plan``. ``unknown_type``,
                ``unknown_region``. ``too_many_from_address``, then after authentication ``too_many_requests``; the
                front door's own caps answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400OddsRelayDiscoveryApi | Error401OddsRelayDiscoveryApi | Error402 |
                Error403OddsRelayDiscoveryApi | Error404 | Error429OddsRelayDiscoveryApi | Error500OddsRelayDiscoveryApi
                | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_matched_board(
                type_,
                accept_encoding,
                region=region,
                format_=format_,
                odds_format=odds_format,
                date_format=date_format,
                quote=quote,
                sports=sports,
                bookmakers=bookmakers,
                exchanges=exchanges,
                markets=markets,
                commence_time_from=commence_time_from,
                commence_time_to=commence_time_to,
                request_options=request_options,
            ),
        )

    async def get_raw_board(
        self,
        accept_encoding: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        sports: str | None = None,
        sport: str | None = None,
        leagues: str | None = None,
        bookmakers: str | None = None,
        require_bookmakers: str | None = None,
        markets: str | None = None,
        event_ids: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        updated_since: str | None = None,
        exchanges_only: ExchangesOnlyOrStr | None = None,
        include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE,
        include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE,
        cursor: str | None = None,
        limit: int | None = None,
        quote: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V2OddsRawResponse:
        """Every venue's prices per event, one page at a time: bookmakers as ``{name, price}``, exchanges quoting a lay
        side as ``{name, back_price, lay_price, available}``. Served gzip only: a request refusing gzip is 400 ``add
        Accept-Encoding: gzip; with curl use --compressed``.

        **Checks, in this order**: the per-address shield, the key, the flood cap, a suspended account, a browser key's
        website, the API version; ``region``, the region and ``raw`` in the key; the parameters (each one this route
        reads, once) and their values; the filters (400 unknown values, 403 ``bookmaker_not_in_region``, 403
        ``bookmaker_not_in_plan``, then your account's scope: 403 ``sport_not_in_plan``, ``market_not_in_plan``,
        ``bookmaker_not_in_plan``); ``includeLinks`` and ``includeLiquidity``; ``limit``; ``cursor``; gzip; the raw
        board (503 ``raw_not_enabled``); the page (503 while it cannot be cut); ``quote=true``; the price (402).

        **Paging**: pages are ordered by (kick-off, event id) and a cursor resumes strictly after the last event it saw,
        so an event that leaves the board between pages never restarts the walk. The accepted limit: an event whose
        kick-off moves across the cursor during a walk can appear twice or be missed. Dedupe by event ``id``, and take a
        missed event on the next walk. A cursor expires 300 s after it was issued.

        **Following changes**: walk with ``updatedSince`` set to the start of your previous walk; ``last_update`` is
        when a venue's market last moved (see the schema for what it is not).

        **Price**: a page pays its share of the query's price (its prices over all the query's events' prices, at least
        1; ``eventIds`` and ``requireBookmakers`` narrow the page, never the query), so a whole walk pays the query's
        price (narrowed by ``eventIds`` or ``requireBookmakers``, only its kept events' share of it); a recent
        ``updatedSince`` pays a reduced share. ``quote=true`` prices this page.

        Args:
            accept_encoding: Send ``gzip``; with curl, ``--compressed`` sends it and decompresses the reply. The raw
                board answers a request that refuses gzip (``identity`` alone, as Python's ``urllib`` sends by default,
                or ``gzip;q=0`` or ``*;q=0``) with 400 ``bad_request``, message ``add Accept-Encoding: gzip; with curl
                use --compressed``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            sports: Comma-separated, at most 20: a sport key, a prefix of one, or a sport name raw serves, lowercased.
                Unknown is 400 ``unknown_sport`` with ``valid``. Inside your account's raw scope: a key or prefix
                starting with a scope sport, a sport name only when it equals one (send ``soccer``, not ``football``);
                outside, 403 ``sport_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            sport: The same as ``sports`` (what ``/v2/events`` takes); ignored when ``sports`` is sent.
            leagues: Comma-separated, at most 40: competition names (an event's league or ``sport_title``), lowercased.
                Not checked against a catalogue.
            bookmakers: Comma-separated, at most 40: venue keys of either kind, bookmakers and exchanges, as
                ``/v2/bookmakers`` lists them. Unknown is 400 ``unknown_bookmaker`` with ``valid``; outside the region
                403 ``bookmaker_not_in_region``; outside your plan's bookmaker list or your account's raw scope 403
                ``bookmaker_not_in_plan`` with ``valid``. An account scope's raw list is the whole venue list, exchanges
                included: left out, trimmed to it (so ``exchangesOnly=true`` keeps only the exchanges it names).
            require_bookmakers: Comma-separated, at most 40 venue keys, checked as ``bookmakers`` is (the same 400 and
                403 codes). Keeps only the events where EVERY named venue quotes the call's ``markets`` (with several,
                at least one of them each), under ``exchangesOnly`` if set; a venue that lists the event but not the
                market does not count. ``bookmakers`` does not narrow this test and ``updatedSince`` is not part of it:
                with ``updatedSince``, an event carrying every named venue is kept when any venue shown changed, and the
                page shows only the venues that changed. It narrows events, never venues: every venue the other filters
                keep is still shown, named or not. ``meta.total`` and ``X-Count`` count the events kept. Price: like
                ``eventIds``, it narrows the page and not the query, so a page pays its share of the same call without
                ``requireBookmakers``, and an empty page is free.
            markets: Comma-separated, at most 20: market keys raw serves. Raw's keys: keyless ``/v2/coverage``'s
                ``markets.raw``. Unknown is 400 ``unknown_market`` with ``valid`` (raw's keys) and, when another product
                carries it, ``products``. Keeps venues quoting one of them, and only those markets. Outside your
                account's scope for this product: 403 ``market_not_in_plan`` with ``valid``; left out, trimmed to the
                scope.
            event_ids: Comma-separated, at most 50 event ids. Narrows the page, not the query: a page pays its share of
                the same call without ``eventIds``.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            updated_since: Exactly ``YYYY-MM-DDTHH:MM:SSZ`` (any other form is 400). Keeps venues whose ``last_update``
                is at or after it, and the events holding one. The bulk way to follow raw: a recent ``updatedSince``
                pays a reduced share (``/v2/pricing`` ``recent``).
            exchanges_only: ``true``: exchanges only. ``true`` or ``false``, else 400.
            include_links: ``true``: each venue's ``link`` (its primary event page; left out when it has none). Default
                ``false``. ``true`` or ``false``, else 400.
            include_liquidity: ``false``: leave out ``available`` beside an exchange's ``lay_price``. Default ``true``.
                ``true`` or ``false``, else 400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            limit: Events per page, 1-250 (default and maximum 250). Anything else is 400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One page (envelope, or the ``data`` array under ``format=bare``), or under ``quote=true`` its price. Gzip.

        Raises:
            ApiError: Unknown or repeated parameter; a bad format, instant, ``updatedSince``, boolean, ``limit`` or
                ``cursor``; a filter over its cap; gzip refused; a region list, repeat or uppercase code;
                ``region_required``; ``unknown_sport``, ``unknown_market``, ``unknown_bookmaker`` (with ``valid``).
                ``missing_api_key``, ``invalid_api_key`` (also a closed account), ``revoked_api_key``,
                ``expired_api_key``, ``paused_api_key``. ``insufficient_tokens``, before anything is built (a raw page's
                price is known after its page is cut), or after it when a concurrent spend emptied the balance: the body
                is not sent. ``account_suspended``, ``origin_not_allowed``, ``schema_not_in_scope``,
                ``region_not_in_scope``, ``not_in_key_scope``, ``bookmaker_not_in_region``, ``bookmaker_not_in_plan`` (a
                venue of either kind outside your plan or your account's raw scope), ``sport_not_in_plan``,
                ``market_not_in_plan``. ``unknown_region``. ``too_many_from_address``, then after authentication
                ``too_many_requests``; the front door's own caps answer an empty-bodied 429. ``internal_error``.
                ``raw_not_enabled``, ``temporarily_unavailable``. 502 from the front door when the API behind it does
                not answer: an empty body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayDiscoveryApi
                | Error401OddsRelayDiscoveryApi | Error402 | Error403OddsRelayDiscoveryApi | Error404 |
                Error429OddsRelayDiscoveryApi | Error500OddsRelayDiscoveryApi | Error503OddsRelayDiscoveryApi |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_raw_board(
                accept_encoding,
                region=region,
                format_=format_,
                odds_format=odds_format,
                date_format=date_format,
                sports=sports,
                sport=sport,
                leagues=leagues,
                bookmakers=bookmakers,
                require_bookmakers=require_bookmakers,
                markets=markets,
                event_ids=event_ids,
                commence_time_from=commence_time_from,
                commence_time_to=commence_time_to,
                updated_since=updated_since,
                exchanges_only=exchanges_only,
                include_links=include_links,
                include_liquidity=include_liquidity,
                cursor=cursor,
                limit=limit,
                quote=quote,
                request_options=request_options,
            ),
        )

    async def get_raw_event(
        self,
        id_: str,
        *,
        region: str | None = None,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE,
        include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE,
        quote: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V2OddsEventResponse:
        """One raw event by id, every venue (a plan with a bookmaker list sees those venues and the region's exchanges;
        an account scope sees its raw venue list and markets only, no exchange added). Checks: the key and scope as raw,
        the parameters and their values, the raw board (503 ``raw_not_enabled``), the id (404 ``unknown_event``), the
        event's sport in your account's raw scope (403 ``sport_not_in_plan``), ``quote=true``, the price (402). The
        price is the whole event's, whatever the scope cuts. Priced by the event's share of the region's raw prices.
        Gzip unless refused (over 1 kB).

        Args:
            id_: An event id (``or_evt_…``) from raw, a matched board or ``/v2/events``. Not on the raw board now is 404
                ``unknown_event``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            include_links: ``true``: each venue's ``link`` (its primary event page; left out when it has none). Default
                ``false``. ``true`` or ``false``, else 400.
            include_liquidity: ``false``: leave out ``available`` beside an exchange's ``lay_price``. Default ``true``.
                ``true`` or ``false``, else 400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The event, or under ``quote=true`` its price.

        Raises:
            ApiError: Unknown or repeated parameter; a bad ``oddsFormat``, ``dateFormat`` or boolean; a region list,
                repeat or uppercase code; ``region_required``. ``missing_api_key``, ``invalid_api_key`` (also a closed
                account), ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``insufficient_tokens``, before
                anything is built (a raw page's price is known after its page is cut), or after it when a concurrent
                spend emptied the balance: the body is not sent. ``account_suspended``, ``origin_not_allowed``,
                ``schema_not_in_scope``, ``region_not_in_scope``, ``not_in_key_scope``, ``sport_not_in_plan`` (the
                event's sport is outside your account's raw scope). ``unknown_event``, ``unknown_region``.
                ``too_many_from_address``, then after authentication ``too_many_requests``; the front door's own caps
                answer an empty-bodied 429. ``internal_error``. ``raw_not_enabled``, ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400OddsRelayDiscoveryApi | Error401OddsRelayDiscoveryApi | Error402 |
                Error403OddsRelayDiscoveryApi | Error404 | Error429OddsRelayDiscoveryApi | Error500OddsRelayDiscoveryApi
                | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_raw_event(
                id_,
                region=region,
                odds_format=odds_format,
                date_format=date_format,
                include_links=include_links,
                include_liquidity=include_liquidity,
                quote=quote,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOddsWithRawResponse:
        return self._with_raw_response


class OddsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_matched_board(
        self,
        type_: Type1OrStr,
        accept_encoding: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        quote: str | None = None,
        sports: str | None = None,
        bookmakers: str | None = None,
        exchanges: str | None = None,
        markets: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V2OddsResponse, GetMatchedBoardErrorBody]:
        """The six matched boards: each event's bookmaker back prices beside the exchanges' lay prices (``dutching``:
        back legs that cover every outcome, grouped by ``dutch_id``; ``each-way`` and ``extra-place``: each-way terms
        against win and place lays).

        **Checks, in this order** (each refusal is free): the per-address shield, the key, the account's flood cap, a
        suspended account, a browser key's website, the API version; then ``type`` (404 ``unknown_type``), ``region``,
        the region in the key (403 ``region_not_in_scope``), the product in the key (403 ``not_in_key_scope``), the
        product in the region (403 ``product_not_in_region``: a region with no exchange serves only dutching and raw);
        then the parameters: each one this route reads, once; ``format``, ``oddsFormat`` and ``dateFormat`` values; on
        ``standard`` and ``dutching`` decimal ISO only and gzip accepted (400 ``add Accept-Encoding: gzip; with curl use
        --compressed``); then the filters (400 unknown values, 403 ``bookmaker_not_in_region``, then your account's
        scope: 403 ``sport_not_in_plan``, ``market_not_in_plan``, ``bookmaker_not_in_plan``, ``exchange_not_in_plan``;
        and your plan's bookmaker list), then ``quote=true``, the price (402), and the board (503 while it is not
        ready).

        **Filters** cut the whole board's events in order: sport and kick-off, then markets, then back offers by
        bookmaker and lay offers by exchange; an outcome left with no back or no lay goes, then empty markets and
        events. ``dutching`` keeps a dutch only when every leg is a named venue. A filtered reply is priced on its
        filters (``/v2/pricing``); the kick-off window is never priced.

        **Freshness**: ``meta.processed_at`` and ``X-Processed-At`` are the board time; ``meta.last_seen`` is each venue
        and sport's last read. The API drops no row for age; a venue not read within its own window (at most two
        minutes) is off the board until its next read.

        **Conditional requests**: send the ``ETag`` back as ``If-None-Match``; an unchanged body is a 304 with no body,
        free. A reply with no events is free.

        Args:
            type_: A matched board: ``standard``, ``2up``, ``dutching``, ``each-way``, ``extra-place`` or ``bog``. The
                aliases ``two-up``, ``each_way`` and ``extra_place`` are accepted and served as their canonical slug.
                Anything else is 404 ``unknown_type``.
            accept_encoding: Send ``gzip``; with curl, ``--compressed`` sends it and decompresses the reply.
                ``standard`` and ``dutching`` answer a request that refuses gzip (``identity`` alone, as Python's
                ``urllib`` sends by default, or ``gzip;q=0`` or ``*;q=0``) with 400 ``bad_request``, message ``add
                Accept-Encoding: gzip; with curl use --compressed``; the other four boards answer it plain.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            sports: Comma-separated, at most 20: a sport key or a prefix of one as ``/v2/sports`` lists them
                (``soccer``, ``soccer_epl``), lowercased. Unknown is 400 ``unknown_sport`` with ``valid`` (the sport key
                bases). A known value with nothing on the board is an empty 200, free. A value is inside your account's
                scope when it starts with a scope sport (``soccer_epl`` under ``soccer``); outside, 403
                ``sport_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            bookmakers: Comma-separated, at most 40: bookmaker keys as ``/v2/bookmakers`` lists them (a listed name is
                accepted too). Unknown is 400 ``unknown_bookmaker`` with ``valid``; an exchange here is that 400 naming
                ``exchanges`` (on ``dutching`` both lists take venues of either kind); a venue outside the region is 403
                ``bookmaker_not_in_region``; one outside your plan's bookmaker list or your account's scope is 403
                ``bookmaker_not_in_plan`` with ``valid`` (on ``dutching``, an exchange outside the scope is 403
                ``exchange_not_in_plan``). A plan with a bookmaker list, or an account scope, trims a call naming none
                to that list.
            exchanges: Comma-separated, at most 4: exchange keys as ``/v2/bookmakers`` lists them. Unknown is 400
                ``unknown_exchange`` with ``valid``; a bookmaker here is that 400 naming ``bookmakers``. Outside your
                account's scope for this product: 403 ``exchange_not_in_plan`` with ``valid``; left out, trimmed to the
                scope.
            markets: Comma-separated, at most 20: market keys (``h2h``, ``totals``, …; ``/v2/sports`` rows list the keys
                seen under each competition). Each product's keys: keyless ``/v2/coverage``'s ``markets``. Unknown is
                400 ``unknown_market`` with ``valid`` (this product's keys) and, when another product carries it,
                ``products``; another product's key may instead be accepted and match nothing. Outside your account's
                scope for this product: 403 ``market_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/odds/{type}"),
            path_params=[param[Type1OrStr]("type", type_)],
            query_params=[
                param[str | None]("region", region),
                param[FormatOrStr | None]("format", format_),
                param[OddsFormatOrStr | None]("oddsFormat", odds_format),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[str | None]("quote", quote),
                param[str | None]("sports", sports),
                param[str | None]("bookmakers", bookmakers),
                param[str | None]("exchanges", exchanges),
                param[str | None]("markets", markets),
                param[str | None]("commenceTimeFrom", commence_time_from),
                param[str | None]("commenceTimeTo", commence_time_to),
            ],
            headers=[param[str]("Accept-Encoding", accept_encoding)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[V2OddsResponse],
            error_mapper=get_matched_board_error_mapper,
            request_options=request_options,
        )

    def get_raw_board(
        self,
        accept_encoding: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        sports: str | None = None,
        sport: str | None = None,
        leagues: str | None = None,
        bookmakers: str | None = None,
        require_bookmakers: str | None = None,
        markets: str | None = None,
        event_ids: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        updated_since: str | None = None,
        exchanges_only: ExchangesOnlyOrStr | None = None,
        include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE,
        include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE,
        cursor: str | None = None,
        limit: int | None = None,
        quote: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V2OddsRawResponse, GetRawBoardErrorBody]:
        """Every venue's prices per event, one page at a time: bookmakers as ``{name, price}``, exchanges quoting a lay
        side as ``{name, back_price, lay_price, available}``. Served gzip only: a request refusing gzip is 400 ``add
        Accept-Encoding: gzip; with curl use --compressed``.

        **Checks, in this order**: the per-address shield, the key, the flood cap, a suspended account, a browser key's
        website, the API version; ``region``, the region and ``raw`` in the key; the parameters (each one this route
        reads, once) and their values; the filters (400 unknown values, 403 ``bookmaker_not_in_region``, 403
        ``bookmaker_not_in_plan``, then your account's scope: 403 ``sport_not_in_plan``, ``market_not_in_plan``,
        ``bookmaker_not_in_plan``); ``includeLinks`` and ``includeLiquidity``; ``limit``; ``cursor``; gzip; the raw
        board (503 ``raw_not_enabled``); the page (503 while it cannot be cut); ``quote=true``; the price (402).

        **Paging**: pages are ordered by (kick-off, event id) and a cursor resumes strictly after the last event it saw,
        so an event that leaves the board between pages never restarts the walk. The accepted limit: an event whose
        kick-off moves across the cursor during a walk can appear twice or be missed. Dedupe by event ``id``, and take a
        missed event on the next walk. A cursor expires 300 s after it was issued.

        **Following changes**: walk with ``updatedSince`` set to the start of your previous walk; ``last_update`` is
        when a venue's market last moved (see the schema for what it is not).

        **Price**: a page pays its share of the query's price (its prices over all the query's events' prices, at least
        1; ``eventIds`` and ``requireBookmakers`` narrow the page, never the query), so a whole walk pays the query's
        price (narrowed by ``eventIds`` or ``requireBookmakers``, only its kept events' share of it); a recent
        ``updatedSince`` pays a reduced share. ``quote=true`` prices this page.

        Args:
            accept_encoding: Send ``gzip``; with curl, ``--compressed`` sends it and decompresses the reply. The raw
                board answers a request that refuses gzip (``identity`` alone, as Python's ``urllib`` sends by default,
                or ``gzip;q=0`` or ``*;q=0``) with 400 ``bad_request``, message ``add Accept-Encoding: gzip; with curl
                use --compressed``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            sports: Comma-separated, at most 20: a sport key, a prefix of one, or a sport name raw serves, lowercased.
                Unknown is 400 ``unknown_sport`` with ``valid``. Inside your account's raw scope: a key or prefix
                starting with a scope sport, a sport name only when it equals one (send ``soccer``, not ``football``);
                outside, 403 ``sport_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            sport: The same as ``sports`` (what ``/v2/events`` takes); ignored when ``sports`` is sent.
            leagues: Comma-separated, at most 40: competition names (an event's league or ``sport_title``), lowercased.
                Not checked against a catalogue.
            bookmakers: Comma-separated, at most 40: venue keys of either kind, bookmakers and exchanges, as
                ``/v2/bookmakers`` lists them. Unknown is 400 ``unknown_bookmaker`` with ``valid``; outside the region
                403 ``bookmaker_not_in_region``; outside your plan's bookmaker list or your account's raw scope 403
                ``bookmaker_not_in_plan`` with ``valid``. An account scope's raw list is the whole venue list, exchanges
                included: left out, trimmed to it (so ``exchangesOnly=true`` keeps only the exchanges it names).
            require_bookmakers: Comma-separated, at most 40 venue keys, checked as ``bookmakers`` is (the same 400 and
                403 codes). Keeps only the events where EVERY named venue quotes the call's ``markets`` (with several,
                at least one of them each), under ``exchangesOnly`` if set; a venue that lists the event but not the
                market does not count. ``bookmakers`` does not narrow this test and ``updatedSince`` is not part of it:
                with ``updatedSince``, an event carrying every named venue is kept when any venue shown changed, and the
                page shows only the venues that changed. It narrows events, never venues: every venue the other filters
                keep is still shown, named or not. ``meta.total`` and ``X-Count`` count the events kept. Price: like
                ``eventIds``, it narrows the page and not the query, so a page pays its share of the same call without
                ``requireBookmakers``, and an empty page is free.
            markets: Comma-separated, at most 20: market keys raw serves. Raw's keys: keyless ``/v2/coverage``'s
                ``markets.raw``. Unknown is 400 ``unknown_market`` with ``valid`` (raw's keys) and, when another product
                carries it, ``products``. Keeps venues quoting one of them, and only those markets. Outside your
                account's scope for this product: 403 ``market_not_in_plan`` with ``valid``; left out, trimmed to the
                scope.
            event_ids: Comma-separated, at most 50 event ids. Narrows the page, not the query: a page pays its share of
                the same call without ``eventIds``.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            updated_since: Exactly ``YYYY-MM-DDTHH:MM:SSZ`` (any other form is 400). Keeps venues whose ``last_update``
                is at or after it, and the events holding one. The bulk way to follow raw: a recent ``updatedSince``
                pays a reduced share (``/v2/pricing`` ``recent``).
            exchanges_only: ``true``: exchanges only. ``true`` or ``false``, else 400.
            include_links: ``true``: each venue's ``link`` (its primary event page; left out when it has none). Default
                ``false``. ``true`` or ``false``, else 400.
            include_liquidity: ``false``: leave out ``available`` beside an exchange's ``lay_price``. Default ``true``.
                ``true`` or ``false``, else 400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            limit: Events per page, 1-250 (default and maximum 250). Anything else is 400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/odds/raw"),
            query_params=[
                param[str | None]("region", region),
                param[FormatOrStr | None]("format", format_),
                param[OddsFormatOrStr | None]("oddsFormat", odds_format),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[str | None]("sports", sports),
                param[str | None]("sport", sport),
                param[str | None]("leagues", leagues),
                param[str | None]("bookmakers", bookmakers),
                param[str | None]("requireBookmakers", require_bookmakers),
                param[str | None]("markets", markets),
                param[str | None]("eventIds", event_ids),
                param[str | None]("commenceTimeFrom", commence_time_from),
                param[str | None]("commenceTimeTo", commence_time_to),
                param[str | None]("updatedSince", updated_since),
                param[ExchangesOnlyOrStr | None]("exchangesOnly", exchanges_only),
                param[IncludeLinksOrStr | None]("includeLinks", include_links),
                param[IncludeLiquidityOrStr | None]("includeLiquidity", include_liquidity),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
                param[str | None]("quote", quote),
            ],
            headers=[param[str]("Accept-Encoding", accept_encoding)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[V2OddsRawResponse],
            error_mapper=get_raw_board_error_mapper,
            request_options=request_options,
        )

    def get_raw_event(
        self,
        id_: str,
        *,
        region: str | None = None,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE,
        include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE,
        quote: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V2OddsEventResponse, GetRawEventErrorBody]:
        """One raw event by id, every venue (a plan with a bookmaker list sees those venues and the region's exchanges;
        an account scope sees its raw venue list and markets only, no exchange added). Checks: the key and scope as raw,
        the parameters and their values, the raw board (503 ``raw_not_enabled``), the id (404 ``unknown_event``), the
        event's sport in your account's raw scope (403 ``sport_not_in_plan``), ``quote=true``, the price (402). The
        price is the whole event's, whatever the scope cuts. Priced by the event's share of the region's raw prices.
        Gzip unless refused (over 1 kB).

        Args:
            id_: An event id (``or_evt_…``) from raw, a matched board or ``/v2/events``. Not on the raw board now is 404
                ``unknown_event``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            include_links: ``true``: each venue's ``link`` (its primary event page; left out when it has none). Default
                ``false``. ``true`` or ``false``, else 400.
            include_liquidity: ``false``: leave out ``available`` beside an exchange's ``lay_price``. Default ``true``.
                ``true`` or ``false``, else 400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/odds/event/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str | None]("region", region),
                param[OddsFormatOrStr | None]("oddsFormat", odds_format),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[IncludeLinksOrStr | None]("includeLinks", include_links),
                param[IncludeLiquidityOrStr | None]("includeLiquidity", include_liquidity),
                param[str | None]("quote", quote),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[V2OddsEventResponse],
            error_mapper=get_raw_event_error_mapper,
            request_options=request_options,
        )


class AsyncOddsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_matched_board(
        self,
        type_: Type1OrStr,
        accept_encoding: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        quote: str | None = None,
        sports: str | None = None,
        bookmakers: str | None = None,
        exchanges: str | None = None,
        markets: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V2OddsResponse, GetMatchedBoardErrorBody]:
        """The six matched boards: each event's bookmaker back prices beside the exchanges' lay prices (``dutching``:
        back legs that cover every outcome, grouped by ``dutch_id``; ``each-way`` and ``extra-place``: each-way terms
        against win and place lays).

        **Checks, in this order** (each refusal is free): the per-address shield, the key, the account's flood cap, a
        suspended account, a browser key's website, the API version; then ``type`` (404 ``unknown_type``), ``region``,
        the region in the key (403 ``region_not_in_scope``), the product in the key (403 ``not_in_key_scope``), the
        product in the region (403 ``product_not_in_region``: a region with no exchange serves only dutching and raw);
        then the parameters: each one this route reads, once; ``format``, ``oddsFormat`` and ``dateFormat`` values; on
        ``standard`` and ``dutching`` decimal ISO only and gzip accepted (400 ``add Accept-Encoding: gzip; with curl use
        --compressed``); then the filters (400 unknown values, 403 ``bookmaker_not_in_region``, then your account's
        scope: 403 ``sport_not_in_plan``, ``market_not_in_plan``, ``bookmaker_not_in_plan``, ``exchange_not_in_plan``;
        and your plan's bookmaker list), then ``quote=true``, the price (402), and the board (503 while it is not
        ready).

        **Filters** cut the whole board's events in order: sport and kick-off, then markets, then back offers by
        bookmaker and lay offers by exchange; an outcome left with no back or no lay goes, then empty markets and
        events. ``dutching`` keeps a dutch only when every leg is a named venue. A filtered reply is priced on its
        filters (``/v2/pricing``); the kick-off window is never priced.

        **Freshness**: ``meta.processed_at`` and ``X-Processed-At`` are the board time; ``meta.last_seen`` is each venue
        and sport's last read. The API drops no row for age; a venue not read within its own window (at most two
        minutes) is off the board until its next read.

        **Conditional requests**: send the ``ETag`` back as ``If-None-Match``; an unchanged body is a 304 with no body,
        free. A reply with no events is free.

        Args:
            type_: A matched board: ``standard``, ``2up``, ``dutching``, ``each-way``, ``extra-place`` or ``bog``. The
                aliases ``two-up``, ``each_way`` and ``extra_place`` are accepted and served as their canonical slug.
                Anything else is 404 ``unknown_type``.
            accept_encoding: Send ``gzip``; with curl, ``--compressed`` sends it and decompresses the reply.
                ``standard`` and ``dutching`` answer a request that refuses gzip (``identity`` alone, as Python's
                ``urllib`` sends by default, or ``gzip;q=0`` or ``*;q=0``) with 400 ``bad_request``, message ``add
                Accept-Encoding: gzip; with curl use --compressed``; the other four boards answer it plain.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            sports: Comma-separated, at most 20: a sport key or a prefix of one as ``/v2/sports`` lists them
                (``soccer``, ``soccer_epl``), lowercased. Unknown is 400 ``unknown_sport`` with ``valid`` (the sport key
                bases). A known value with nothing on the board is an empty 200, free. A value is inside your account's
                scope when it starts with a scope sport (``soccer_epl`` under ``soccer``); outside, 403
                ``sport_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            bookmakers: Comma-separated, at most 40: bookmaker keys as ``/v2/bookmakers`` lists them (a listed name is
                accepted too). Unknown is 400 ``unknown_bookmaker`` with ``valid``; an exchange here is that 400 naming
                ``exchanges`` (on ``dutching`` both lists take venues of either kind); a venue outside the region is 403
                ``bookmaker_not_in_region``; one outside your plan's bookmaker list or your account's scope is 403
                ``bookmaker_not_in_plan`` with ``valid`` (on ``dutching``, an exchange outside the scope is 403
                ``exchange_not_in_plan``). A plan with a bookmaker list, or an account scope, trims a call naming none
                to that list.
            exchanges: Comma-separated, at most 4: exchange keys as ``/v2/bookmakers`` lists them. Unknown is 400
                ``unknown_exchange`` with ``valid``; a bookmaker here is that 400 naming ``bookmakers``. Outside your
                account's scope for this product: 403 ``exchange_not_in_plan`` with ``valid``; left out, trimmed to the
                scope.
            markets: Comma-separated, at most 20: market keys (``h2h``, ``totals``, …; ``/v2/sports`` rows list the keys
                seen under each competition). Each product's keys: keyless ``/v2/coverage``'s ``markets``. Unknown is
                400 ``unknown_market`` with ``valid`` (this product's keys) and, when another product carries it,
                ``products``; another product's key may instead be accepted and match nothing. Outside your account's
                scope for this product: 403 ``market_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/odds/{type}"),
            path_params=[param[Type1OrStr]("type", type_)],
            query_params=[
                param[str | None]("region", region),
                param[FormatOrStr | None]("format", format_),
                param[OddsFormatOrStr | None]("oddsFormat", odds_format),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[str | None]("quote", quote),
                param[str | None]("sports", sports),
                param[str | None]("bookmakers", bookmakers),
                param[str | None]("exchanges", exchanges),
                param[str | None]("markets", markets),
                param[str | None]("commenceTimeFrom", commence_time_from),
                param[str | None]("commenceTimeTo", commence_time_to),
            ],
            headers=[param[str]("Accept-Encoding", accept_encoding)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[V2OddsResponse],
            error_mapper=get_matched_board_error_mapper,
            request_options=request_options,
        )

    async def get_raw_board(
        self,
        accept_encoding: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        sports: str | None = None,
        sport: str | None = None,
        leagues: str | None = None,
        bookmakers: str | None = None,
        require_bookmakers: str | None = None,
        markets: str | None = None,
        event_ids: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        updated_since: str | None = None,
        exchanges_only: ExchangesOnlyOrStr | None = None,
        include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE,
        include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE,
        cursor: str | None = None,
        limit: int | None = None,
        quote: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V2OddsRawResponse, GetRawBoardErrorBody]:
        """Every venue's prices per event, one page at a time: bookmakers as ``{name, price}``, exchanges quoting a lay
        side as ``{name, back_price, lay_price, available}``. Served gzip only: a request refusing gzip is 400 ``add
        Accept-Encoding: gzip; with curl use --compressed``.

        **Checks, in this order**: the per-address shield, the key, the flood cap, a suspended account, a browser key's
        website, the API version; ``region``, the region and ``raw`` in the key; the parameters (each one this route
        reads, once) and their values; the filters (400 unknown values, 403 ``bookmaker_not_in_region``, 403
        ``bookmaker_not_in_plan``, then your account's scope: 403 ``sport_not_in_plan``, ``market_not_in_plan``,
        ``bookmaker_not_in_plan``); ``includeLinks`` and ``includeLiquidity``; ``limit``; ``cursor``; gzip; the raw
        board (503 ``raw_not_enabled``); the page (503 while it cannot be cut); ``quote=true``; the price (402).

        **Paging**: pages are ordered by (kick-off, event id) and a cursor resumes strictly after the last event it saw,
        so an event that leaves the board between pages never restarts the walk. The accepted limit: an event whose
        kick-off moves across the cursor during a walk can appear twice or be missed. Dedupe by event ``id``, and take a
        missed event on the next walk. A cursor expires 300 s after it was issued.

        **Following changes**: walk with ``updatedSince`` set to the start of your previous walk; ``last_update`` is
        when a venue's market last moved (see the schema for what it is not).

        **Price**: a page pays its share of the query's price (its prices over all the query's events' prices, at least
        1; ``eventIds`` and ``requireBookmakers`` narrow the page, never the query), so a whole walk pays the query's
        price (narrowed by ``eventIds`` or ``requireBookmakers``, only its kept events' share of it); a recent
        ``updatedSince`` pays a reduced share. ``quote=true`` prices this page.

        Args:
            accept_encoding: Send ``gzip``; with curl, ``--compressed`` sends it and decompresses the reply. The raw
                board answers a request that refuses gzip (``identity`` alone, as Python's ``urllib`` sends by default,
                or ``gzip;q=0`` or ``*;q=0``) with 400 ``bad_request``, message ``add Accept-Encoding: gzip; with curl
                use --compressed``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            sports: Comma-separated, at most 20: a sport key, a prefix of one, or a sport name raw serves, lowercased.
                Unknown is 400 ``unknown_sport`` with ``valid``. Inside your account's raw scope: a key or prefix
                starting with a scope sport, a sport name only when it equals one (send ``soccer``, not ``football``);
                outside, 403 ``sport_not_in_plan`` with ``valid``; left out, trimmed to the scope.
            sport: The same as ``sports`` (what ``/v2/events`` takes); ignored when ``sports`` is sent.
            leagues: Comma-separated, at most 40: competition names (an event's league or ``sport_title``), lowercased.
                Not checked against a catalogue.
            bookmakers: Comma-separated, at most 40: venue keys of either kind, bookmakers and exchanges, as
                ``/v2/bookmakers`` lists them. Unknown is 400 ``unknown_bookmaker`` with ``valid``; outside the region
                403 ``bookmaker_not_in_region``; outside your plan's bookmaker list or your account's raw scope 403
                ``bookmaker_not_in_plan`` with ``valid``. An account scope's raw list is the whole venue list, exchanges
                included: left out, trimmed to it (so ``exchangesOnly=true`` keeps only the exchanges it names).
            require_bookmakers: Comma-separated, at most 40 venue keys, checked as ``bookmakers`` is (the same 400 and
                403 codes). Keeps only the events where EVERY named venue quotes the call's ``markets`` (with several,
                at least one of them each), under ``exchangesOnly`` if set; a venue that lists the event but not the
                market does not count. ``bookmakers`` does not narrow this test and ``updatedSince`` is not part of it:
                with ``updatedSince``, an event carrying every named venue is kept when any venue shown changed, and the
                page shows only the venues that changed. It narrows events, never venues: every venue the other filters
                keep is still shown, named or not. ``meta.total`` and ``X-Count`` count the events kept. Price: like
                ``eventIds``, it narrows the page and not the query, so a page pays its share of the same call without
                ``requireBookmakers``, and an empty page is free.
            markets: Comma-separated, at most 20: market keys raw serves. Raw's keys: keyless ``/v2/coverage``'s
                ``markets.raw``. Unknown is 400 ``unknown_market`` with ``valid`` (raw's keys) and, when another product
                carries it, ``products``. Keeps venues quoting one of them, and only those markets. Outside your
                account's scope for this product: 403 ``market_not_in_plan`` with ``valid``; left out, trimmed to the
                scope.
            event_ids: Comma-separated, at most 50 event ids. Narrows the page, not the query: a page pays its share of
                the same call without ``eventIds``.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            updated_since: Exactly ``YYYY-MM-DDTHH:MM:SSZ`` (any other form is 400). Keeps venues whose ``last_update``
                is at or after it, and the events holding one. The bulk way to follow raw: a recent ``updatedSince``
                pays a reduced share (``/v2/pricing`` ``recent``).
            exchanges_only: ``true``: exchanges only. ``true`` or ``false``, else 400.
            include_links: ``true``: each venue's ``link`` (its primary event page; left out when it has none). Default
                ``false``. ``true`` or ``false``, else 400.
            include_liquidity: ``false``: leave out ``available`` beside an exchange's ``lay_price``. Default ``true``.
                ``true`` or ``false``, else 400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            limit: Events per page, 1-250 (default and maximum 250). Anything else is 400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/odds/raw"),
            query_params=[
                param[str | None]("region", region),
                param[FormatOrStr | None]("format", format_),
                param[OddsFormatOrStr | None]("oddsFormat", odds_format),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[str | None]("sports", sports),
                param[str | None]("sport", sport),
                param[str | None]("leagues", leagues),
                param[str | None]("bookmakers", bookmakers),
                param[str | None]("requireBookmakers", require_bookmakers),
                param[str | None]("markets", markets),
                param[str | None]("eventIds", event_ids),
                param[str | None]("commenceTimeFrom", commence_time_from),
                param[str | None]("commenceTimeTo", commence_time_to),
                param[str | None]("updatedSince", updated_since),
                param[ExchangesOnlyOrStr | None]("exchangesOnly", exchanges_only),
                param[IncludeLinksOrStr | None]("includeLinks", include_links),
                param[IncludeLiquidityOrStr | None]("includeLiquidity", include_liquidity),
                param[str | None]("cursor", cursor),
                param[int | None]("limit", limit),
                param[str | None]("quote", quote),
            ],
            headers=[param[str]("Accept-Encoding", accept_encoding)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[V2OddsRawResponse],
            error_mapper=get_raw_board_error_mapper,
            request_options=request_options,
        )

    async def get_raw_event(
        self,
        id_: str,
        *,
        region: str | None = None,
        odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE,
        include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE,
        quote: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V2OddsEventResponse, GetRawEventErrorBody]:
        """One raw event by id, every venue (a plan with a bookmaker list sees those venues and the region's exchanges;
        an account scope sees its raw venue list and markets only, no exchange added). Checks: the key and scope as raw,
        the parameters and their values, the raw board (503 ``raw_not_enabled``), the id (404 ``unknown_event``), the
        event's sport in your account's raw scope (403 ``sport_not_in_plan``), ``quote=true``, the price (402). The
        price is the whole event's, whatever the scope cuts. Priced by the event's share of the region's raw prices.
        Gzip unless refused (over 1 kB).

        Args:
            id_: An event id (``or_evt_…``) from raw, a matched board or ``/v2/events``. Not on the raw board now is 404
                ``unknown_event``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            odds_format: ``decimal`` (default) or ``american`` (a signed integer; null for a price at or below 1.0).
                ``standard`` and ``dutching`` serve decimal only: anything else is 400.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            include_links: ``true``: each venue's ``link`` (its primary event page; left out when it has none). Default
                ``false``. ``true`` or ``false``, else 400.
            include_liquidity: ``false``: leave out ``available`` beside an exchange's ``lay_price``. Default ``true``.
                ``true`` or ``false``, else 400.
            quote: ``true`` (also ``1``, ``yes``, ``on``): price this exact request instead of serving it. 200 ``{cost,
                remaining, rate_card}``, free, every check before the price still applies; any other value is an
                ordinary request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/odds/event/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str | None]("region", region),
                param[OddsFormatOrStr | None]("oddsFormat", odds_format),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[IncludeLinksOrStr | None]("includeLinks", include_links),
                param[IncludeLiquidityOrStr | None]("includeLiquidity", include_liquidity),
                param[str | None]("quote", quote),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[V2OddsEventResponse],
            error_mapper=get_raw_event_error_mapper,
            request_options=request_options,
        )
