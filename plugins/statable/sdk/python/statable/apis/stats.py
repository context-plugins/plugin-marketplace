from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.current_visitors_error import CurrentVisitorsErrorBody, current_visitors_error_mapper
from ..errors.get_subscription_error import GetSubscriptionErrorBody, get_subscription_error_mapper
from ..errors.list_funnels_error import ListFunnelsErrorBody, list_funnels_error_mapper
from ..errors.list_prop_keys_error import ListPropKeysErrorBody, list_prop_keys_error_mapper
from ..errors.list_sites_error import ListSitesErrorBody, list_sites_error_mapper
from ..errors.query_error import QueryErrorBody, query_error_mapper
from ..errors.run_funnel_report_error import RunFunnelReportErrorBody, run_funnel_report_error_mapper
from ..models.current_visitors_response import CurrentVisitorsResponse
from ..models.funnel_report_request import FunnelReportRequest, FunnelReportRequestDict
from ..models.funnel_report_response import FunnelReportResponse
from ..models.funnels_response import FunnelsResponse
from ..models.props_response import PropsResponse
from ..models.query_request import QueryRequest, QueryRequestDict
from ..models.query_response import QueryResponse
from ..models.sites_response import SitesResponse
from ..models.subscription_response import SubscriptionResponse
from ..server.server import Server


class Stats:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StatsWithRawResponse(client, server, auth)

    def current_visitors(
        self, *, site_id: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CurrentVisitorsResponse:
        """Send a ``GET`` request.

        Args:
            site_id: Numeric site id. Optional for a single-site key; required for an all-sites key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Realtime unique-visitor count.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.current_visitors(site_id=site_id, request_options=request_options))

    def get_subscription(self, *, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponse:
        """The subscription of the key's owner, in one line's worth of fields: enough to say "Trial — N days left", not
        a billing page. Hobby-only accounts have no subscription and answer ``status: "none"`` with ``only_hobby:
        true``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current subscription state.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks the ``read`` scope every endpoint here requires), ``key_not_scoped`` (single-site key
                asked for a different site) or ``tracking_inactive`` (the site's tracking has stopped). Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_subscription(request_options=request_options))

    def list_funnels(
        self, *, site_id: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FunnelsResponse:
        """Returns the site's saved funnel definitions (managed in the dashboard). Use a funnel ``id`` with POST
        /funnels/{id}/report. Funnels are read-only over the API — this endpoint does not create or edit them.

        Args:
            site_id: Numeric site id. Optional for a single-site key (defaults to its site); required for an all-sites
                key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The site's funnel definitions.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_funnels(site_id=site_id, request_options=request_options))

    def list_prop_keys(
        self,
        *,
        site_id: int | None = None,
        date_range: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PropsResponse:
        """The custom-property keys a site has recorded (each paired with the event it was sent with) — discovery for
        the event:props: breakdown. Returns the full set (no pagination) for the window.

        Args:
            site_id: Numeric site id. Optional for a single-site key; required for an all-sites key.
            date_range: Same forms as /query (default 30d): a preset ``7d``/``30d``/``month``, or a URL-encoded custom
                pair ``["YYYY-MM-DD","YYYY-MM-DD"]``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The site's custom-property keys.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_prop_keys(
                site_id=site_id, date_range=date_range, request_options=request_options
            ),
        )

    def list_sites(
        self, *, date_range: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> SitesResponse:
        """Returns the sites the authenticating key may read — useful for discovering ``site_id`` values and token
        introspection. An all-sites key returns every accessible site (sorted by name); a single-site key returns just
        its one site (or an empty list if access was removed).

        Args:
            date_range: A preset (``7d``/``30d``/``month``/``realtime``) or ``Nd`` = last N full days, N in 1–90 (e.g.
                ``7d``, ``14d``) — the same scalar forms POST /query accepts (custom ``[from,to]`` pairs are
                /query-only). When present, each site gains a ``stats`` block with basic aggregate metrics for the
                window. Omit to keep the list lean (no analytics read). These batch stats are NOT per-site-timezone —
                use POST /query for TZ-exact numbers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The accessible sites.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). Hourly account (default
                2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the ``Retry-After``
                seconds. The X-RateLimit-* headers report the window that tripped (account on an account limit).
                Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_sites(date_range=date_range, request_options=request_options))

    def query(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> QueryResponse:
        """One query returns a list of result rows. With no ``dimensions`` it is an aggregate (one row); with one time
        dimension (``time[:hour|day|week|month]``) it is a time series; with one breakdown dimension it is a top-N list
        plus a ``meta`` pagination block. The response always echoes the resolved request in ``query`` (most usefully
        ``date_range`` normalized to concrete ``[from,to]`` dates). At most one dimension per query.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query result.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.query(body, request_options=request_options))

    def run_funnel_report(
        self,
        id_: int,
        body: FunnelReportRequest | FunnelReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FunnelReportResponse:
        """Runs a saved funnel over a date range (+ optional segment filters) and returns an ORDERED per-step result
        with top-level scalars — a bespoke, non-tabular shape (funnel output is not rows). ``steps`` must not be sorted;
        ``conversion_rate`` is cumulative versus the first step (``entering``), not step-to-step. The intra-conversion
        window is a fixed 1 day, independent of ``date_range`` (which only bounds the sessions scanned).

        Args:
            id_: Funnel id (from GET /funnels).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The funnel result.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.run_funnel_report(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> StatsWithRawResponse:
        return self._with_raw_response


class AsyncStats:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStatsWithRawResponse(client, server, auth)

    async def current_visitors(
        self, *, site_id: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CurrentVisitorsResponse:
        """Send a ``GET`` request.

        Args:
            site_id: Numeric site id. Optional for a single-site key; required for an all-sites key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Realtime unique-visitor count.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.current_visitors(site_id=site_id, request_options=request_options))

    async def get_subscription(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SubscriptionResponse:
        """The subscription of the key's owner, in one line's worth of fields: enough to say "Trial — N days left", not
        a billing page. Hobby-only accounts have no subscription and answer ``status: "none"`` with ``only_hobby:
        true``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current subscription state.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks the ``read`` scope every endpoint here requires), ``key_not_scoped`` (single-site key
                asked for a different site) or ``tracking_inactive`` (the site's tracking has stopped). Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_subscription(request_options=request_options))

    async def list_funnels(
        self, *, site_id: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FunnelsResponse:
        """Returns the site's saved funnel definitions (managed in the dashboard). Use a funnel ``id`` with POST
        /funnels/{id}/report. Funnels are read-only over the API — this endpoint does not create or edit them.

        Args:
            site_id: Numeric site id. Optional for a single-site key (defaults to its site); required for an all-sites
                key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The site's funnel definitions.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_funnels(site_id=site_id, request_options=request_options))

    async def list_prop_keys(
        self,
        *,
        site_id: int | None = None,
        date_range: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PropsResponse:
        """The custom-property keys a site has recorded (each paired with the event it was sent with) — discovery for
        the event:props: breakdown. Returns the full set (no pagination) for the window.

        Args:
            site_id: Numeric site id. Optional for a single-site key; required for an all-sites key.
            date_range: Same forms as /query (default 30d): a preset ``7d``/``30d``/``month``, or a URL-encoded custom
                pair ``["YYYY-MM-DD","YYYY-MM-DD"]``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The site's custom-property keys.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_prop_keys(
                site_id=site_id, date_range=date_range, request_options=request_options
            ),
        )

    async def list_sites(
        self, *, date_range: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SitesResponse:
        """Returns the sites the authenticating key may read — useful for discovering ``site_id`` values and token
        introspection. An all-sites key returns every accessible site (sorted by name); a single-site key returns just
        its one site (or an empty list if access was removed).

        Args:
            date_range: A preset (``7d``/``30d``/``month``/``realtime``) or ``Nd`` = last N full days, N in 1–90 (e.g.
                ``7d``, ``14d``) — the same scalar forms POST /query accepts (custom ``[from,to]`` pairs are
                /query-only). When present, each site gains a ``stats`` block with basic aggregate metrics for the
                window. Omit to keep the list lean (no analytics read). These batch stats are NOT per-site-timezone —
                use POST /query for TZ-exact numbers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The accessible sites.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). Hourly account (default
                2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the ``Retry-After``
                seconds. The X-RateLimit-* headers report the window that tripped (account on an account limit).
                Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_sites(date_range=date_range, request_options=request_options))

    async def query(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> QueryResponse:
        """One query returns a list of result rows. With no ``dimensions`` it is an aggregate (one row); with one time
        dimension (``time[:hour|day|week|month]``) it is a time series; with one breakdown dimension it is a top-N list
        plus a ``meta`` pagination block. The response always echoes the resolved request in ``query`` (most usefully
        ``date_range`` normalized to concrete ``[from,to]`` dates). At most one dimension per query.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query result.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.query(body, request_options=request_options))

    async def run_funnel_report(
        self,
        id_: int,
        body: FunnelReportRequest | FunnelReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FunnelReportResponse:
        """Runs a saved funnel over a date range (+ optional segment filters) and returns an ORDERED per-step result
        with top-level scalars — a bespoke, non-tabular shape (funnel output is not rows). ``steps`` must not be sorted;
        ``conversion_rate`` is cumulative versus the first step (``entering``), not step-to-step. The intra-conversion
        window is a fixed 1 day, independent of ``date_range`` (which only bounds the sessions scanned).

        Args:
            id_: Funnel id (from GET /funnels).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The funnel result.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request, metrics_required, unknown_metric,
                too_many_dimensions, unknown_dimension, invalid_date_range, invalid_interval, metric_not_available,
                invalid_filter, event_filter_required, invalid_compare, compare_length_mismatch, site_id_required,
                limit_offset_misuse. Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``).
                ``insufficient_scope`` (the key lacks the ``read`` scope every endpoint here requires),
                ``key_not_scoped`` (single-site key asked for a different site) or ``tracking_inactive`` (the site's
                tracking has stopped). ``unknown_site`` — the ``site_id`` does not exist OR the key's owner has no
                access. Deliberately indistinguishable (same status AND code) so a key cannot enumerate which site_ids
                exist. ``unknown_funnel`` (funnel endpoints only) — the funnel id is not found for the resolved site.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.run_funnel_report(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStatsWithRawResponse:
        return self._with_raw_response


class StatsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def current_visitors(
        self, *, site_id: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CurrentVisitorsResponse, CurrentVisitorsErrorBody]:
        """Send a ``GET`` request.

        Args:
            site_id: Numeric site id. Optional for a single-site key; required for an all-sites key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/current-visitors"),
            query_params=[param[int | None]("site_id", site_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CurrentVisitorsResponse],
            error_mapper=current_visitors_error_mapper,
            request_options=request_options,
        )

    def get_subscription(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SubscriptionResponse, GetSubscriptionErrorBody]:
        """The subscription of the key's owner, in one line's worth of fields: enough to say "Trial — N days left", not
        a billing page. Hobby-only accounts have no subscription and answer ``status: "none"`` with ``only_hobby:
        true``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/subscription"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SubscriptionResponse],
            error_mapper=get_subscription_error_mapper,
            request_options=request_options,
        )

    def list_funnels(
        self, *, site_id: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FunnelsResponse, ListFunnelsErrorBody]:
        """Returns the site's saved funnel definitions (managed in the dashboard). Use a funnel ``id`` with POST
        /funnels/{id}/report. Funnels are read-only over the API — this endpoint does not create or edit them.

        Args:
            site_id: Numeric site id. Optional for a single-site key (defaults to its site); required for an all-sites
                key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/funnels"),
            query_params=[param[int | None]("site_id", site_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FunnelsResponse],
            error_mapper=list_funnels_error_mapper,
            request_options=request_options,
        )

    def list_prop_keys(
        self,
        *,
        site_id: int | None = None,
        date_range: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PropsResponse, ListPropKeysErrorBody]:
        """The custom-property keys a site has recorded (each paired with the event it was sent with) — discovery for
        the event:props: breakdown. Returns the full set (no pagination) for the window.

        Args:
            site_id: Numeric site id. Optional for a single-site key; required for an all-sites key.
            date_range: Same forms as /query (default 30d): a preset ``7d``/``30d``/``month``, or a URL-encoded custom
                pair ``["YYYY-MM-DD","YYYY-MM-DD"]``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/props"),
            query_params=[param[int | None]("site_id", site_id), param[str | None]("date_range", date_range)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PropsResponse],
            error_mapper=list_prop_keys_error_mapper,
            request_options=request_options,
        )

    def list_sites(
        self, *, date_range: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SitesResponse, ListSitesErrorBody]:
        """Returns the sites the authenticating key may read — useful for discovering ``site_id`` values and token
        introspection. An all-sites key returns every accessible site (sorted by name); a single-site key returns just
        its one site (or an empty list if access was removed).

        Args:
            date_range: A preset (``7d``/``30d``/``month``/``realtime``) or ``Nd`` = last N full days, N in 1–90 (e.g.
                ``7d``, ``14d``) — the same scalar forms POST /query accepts (custom ``[from,to]`` pairs are
                /query-only). When present, each site gains a ``stats`` block with basic aggregate metrics for the
                window. Omit to keep the list lean (no analytics read). These batch stats are NOT per-site-timezone —
                use POST /query for TZ-exact numbers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites"),
            query_params=[param[str | None]("date_range", date_range)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SitesResponse],
            error_mapper=list_sites_error_mapper,
            request_options=request_options,
        )

    def query(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QueryResponse, QueryErrorBody]:
        """One query returns a list of result rows. With no ``dimensions`` it is an aggregate (one row); with one time
        dimension (``time[:hour|day|week|month]``) it is a time series; with one breakdown dimension it is a top-N list
        plus a ``meta`` pagination block. The response always echoes the resolved request in ``query`` (most usefully
        ``date_range`` normalized to concrete ``[from,to]`` dates). At most one dimension per query.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[QueryResponse],
            error_mapper=query_error_mapper,
            request_options=request_options,
        )

    def run_funnel_report(
        self,
        id_: int,
        body: FunnelReportRequest | FunnelReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FunnelReportResponse, RunFunnelReportErrorBody]:
        """Runs a saved funnel over a date range (+ optional segment filters) and returns an ORDERED per-step result
        with top-level scalars — a bespoke, non-tabular shape (funnel output is not rows). ``steps`` must not be sorted;
        ``conversion_rate`` is cumulative versus the first step (``entering``), not step-to-step. The intra-conversion
        window is a fixed 1 day, independent of ``date_range`` (which only bounds the sessions scanned).

        Args:
            id_: Funnel id (from GET /funnels).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/funnels/{id}/report"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FunnelReportRequest | FunnelReportRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FunnelReportResponse],
            error_mapper=run_funnel_report_error_mapper,
            request_options=request_options,
        )


class AsyncStatsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def current_visitors(
        self, *, site_id: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CurrentVisitorsResponse, CurrentVisitorsErrorBody]:
        """Send a ``GET`` request.

        Args:
            site_id: Numeric site id. Optional for a single-site key; required for an all-sites key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/current-visitors"),
            query_params=[param[int | None]("site_id", site_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CurrentVisitorsResponse],
            error_mapper=current_visitors_error_mapper,
            request_options=request_options,
        )

    async def get_subscription(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SubscriptionResponse, GetSubscriptionErrorBody]:
        """The subscription of the key's owner, in one line's worth of fields: enough to say "Trial — N days left", not
        a billing page. Hobby-only accounts have no subscription and answer ``status: "none"`` with ``only_hobby:
        true``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/subscription"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SubscriptionResponse],
            error_mapper=get_subscription_error_mapper,
            request_options=request_options,
        )

    async def list_funnels(
        self, *, site_id: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FunnelsResponse, ListFunnelsErrorBody]:
        """Returns the site's saved funnel definitions (managed in the dashboard). Use a funnel ``id`` with POST
        /funnels/{id}/report. Funnels are read-only over the API — this endpoint does not create or edit them.

        Args:
            site_id: Numeric site id. Optional for a single-site key (defaults to its site); required for an all-sites
                key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/funnels"),
            query_params=[param[int | None]("site_id", site_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FunnelsResponse],
            error_mapper=list_funnels_error_mapper,
            request_options=request_options,
        )

    async def list_prop_keys(
        self,
        *,
        site_id: int | None = None,
        date_range: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PropsResponse, ListPropKeysErrorBody]:
        """The custom-property keys a site has recorded (each paired with the event it was sent with) — discovery for
        the event:props: breakdown. Returns the full set (no pagination) for the window.

        Args:
            site_id: Numeric site id. Optional for a single-site key; required for an all-sites key.
            date_range: Same forms as /query (default 30d): a preset ``7d``/``30d``/``month``, or a URL-encoded custom
                pair ``["YYYY-MM-DD","YYYY-MM-DD"]``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/props"),
            query_params=[param[int | None]("site_id", site_id), param[str | None]("date_range", date_range)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PropsResponse],
            error_mapper=list_prop_keys_error_mapper,
            request_options=request_options,
        )

    async def list_sites(
        self, *, date_range: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SitesResponse, ListSitesErrorBody]:
        """Returns the sites the authenticating key may read — useful for discovering ``site_id`` values and token
        introspection. An all-sites key returns every accessible site (sorted by name); a single-site key returns just
        its one site (or an empty list if access was removed).

        Args:
            date_range: A preset (``7d``/``30d``/``month``/``realtime``) or ``Nd`` = last N full days, N in 1–90 (e.g.
                ``7d``, ``14d``) — the same scalar forms POST /query accepts (custom ``[from,to]`` pairs are
                /query-only). When present, each site gains a ``stats`` block with basic aggregate metrics for the
                window. Omit to keep the list lean (no analytics read). These batch stats are NOT per-site-timezone —
                use POST /query for TZ-exact numbers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites"),
            query_params=[param[str | None]("date_range", date_range)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SitesResponse],
            error_mapper=list_sites_error_mapper,
            request_options=request_options,
        )

    async def query(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QueryResponse, QueryErrorBody]:
        """One query returns a list of result rows. With no ``dimensions`` it is an aggregate (one row); with one time
        dimension (``time[:hour|day|week|month]``) it is a time series; with one breakdown dimension it is a top-N list
        plus a ``meta`` pagination block. The response always echoes the resolved request in ``query`` (most usefully
        ``date_range`` normalized to concrete ``[from,to]`` dates). At most one dimension per query.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[QueryResponse],
            error_mapper=query_error_mapper,
            request_options=request_options,
        )

    async def run_funnel_report(
        self,
        id_: int,
        body: FunnelReportRequest | FunnelReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FunnelReportResponse, RunFunnelReportErrorBody]:
        """Runs a saved funnel over a date range (+ optional segment filters) and returns an ORDERED per-step result
        with top-level scalars — a bespoke, non-tabular shape (funnel output is not rows). ``steps`` must not be sorted;
        ``conversion_rate`` is cumulative versus the first step (``entering``), not step-to-step. The intra-conversion
        window is a fixed 1 day, independent of ``date_range`` (which only bounds the sessions scanned).

        Args:
            id_: Funnel id (from GET /funnels).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/funnels/{id}/report"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FunnelReportRequest | FunnelReportRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FunnelReportResponse],
            error_mapper=run_funnel_report_error_mapper,
            request_options=request_options,
        )
