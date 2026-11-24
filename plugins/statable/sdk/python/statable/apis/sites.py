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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_funnel_error import CreateFunnelErrorBody, create_funnel_error_mapper
from ..errors.create_goal_error import CreateGoalErrorBody, create_goal_error_mapper
from ..errors.create_site_error import CreateSiteErrorBody, create_site_error_mapper
from ..errors.delete_funnel_error import DeleteFunnelErrorBody, delete_funnel_error_mapper
from ..errors.delete_goal_error import DeleteGoalErrorBody, delete_goal_error_mapper
from ..errors.delete_site_error import DeleteSiteErrorBody, delete_site_error_mapper
from ..errors.get_blocked_ips_error import GetBlockedIPsErrorBody, get_blocked_ips_error_mapper
from ..errors.get_country_settings_error import GetCountrySettingsErrorBody, get_country_settings_error_mapper
from ..errors.get_hostname_settings_error import GetHostnameSettingsErrorBody, get_hostname_settings_error_mapper
from ..errors.get_public_dashboard_error import GetPublicDashboardErrorBody, get_public_dashboard_error_mapper
from ..errors.get_site_snippet_error import GetSiteSnippetErrorBody, get_site_snippet_error_mapper
from ..errors.get_tracking_settings_error import GetTrackingSettingsErrorBody, get_tracking_settings_error_mapper
from ..errors.list_site_goals_error import ListSiteGoalsErrorBody, list_site_goals_error_mapper
from ..errors.set_blocked_ips_error import SetBlockedIPsErrorBody, set_blocked_ips_error_mapper
from ..errors.set_country_settings_error import SetCountrySettingsErrorBody, set_country_settings_error_mapper
from ..errors.set_hostname_settings_error import SetHostnameSettingsErrorBody, set_hostname_settings_error_mapper
from ..errors.set_public_dashboard_error import SetPublicDashboardErrorBody, set_public_dashboard_error_mapper
from ..errors.set_tracking_settings_error import SetTrackingSettingsErrorBody, set_tracking_settings_error_mapper
from ..errors.update_funnel_error import UpdateFunnelErrorBody, update_funnel_error_mapper
from ..errors.update_goal_error import UpdateGoalErrorBody, update_goal_error_mapper
from ..errors.update_site_error import UpdateSiteErrorBody, update_site_error_mapper
from ..models.country_list import CountryList
from ..models.country_list_request import CountryListRequest, CountryListRequestDict
from ..models.create_site_request import CreateSiteRequest, CreateSiteRequestDict
from ..models.enums.type import TypeOrStr
from ..models.funnel_definition import FunnelDefinition
from ..models.funnel_request import FunnelRequest, FunnelRequestDict
from ..models.goal import Goal
from ..models.goal_request import GoalRequest, GoalRequestDict
from ..models.hostname_list import HostnameList
from ..models.hostname_list_request import HostnameListRequest, HostnameListRequestDict
from ..models.public_dashboard import PublicDashboard, PublicDashboardDict
from ..models.settings_count import SettingsCount
from ..models.site_detail import SiteDetail
from ..models.site_snippet import SiteSnippet
from ..models.sites_goals_response import SitesGoalsResponse
from ..models.sites_settings_blocked_ips_response import SitesSettingsBlockedIpsResponse
from ..models.tracking_settings import TrackingSettings
from ..models.tracking_settings_request import TrackingSettingsRequest, TrackingSettingsRequestDict
from ..models.update_site_request import UpdateSiteRequest, UpdateSiteRequestDict
from ..server.server import Server


class Sites:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SitesWithRawResponse(client, server, auth)

    def create_funnel(
        self, id_: int, body: FunnelRequest | FunnelRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> FunnelDefinition:
        """Owner or admin only. A step pointing at a goal this site does not have is 400, naming the step. A duplicate
        name is 409 ``funnel_exists``. Listing and running funnels lives on the read surface (GET /funnels, POST
        /funnels/{id}/report).

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created funnel.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. ``funnel_exists``.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_funnel(id_, body, request_options=request_options))

    def create_goal(
        self, id_: int, body: GoalRequest | GoalRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Goal:
        """Owner or admin only. A duplicate name is 409 ``goal_exists``.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created goal.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. ``goal_exists``.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_goal(id_, body, request_options=request_options))

    def create_site(
        self,
        body: CreateSiteRequest | CreateSiteRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SiteDetail:
        """Creates a site and returns everything needed to install tracking, so provisioning is one round-trip. Requires
        an ALL-SITES key: a single-site key gets 403 ``key_not_scoped``, since the new site would be outside its own
        scope. A duplicate url is 409 ``site_exists`` — unlike the dashboard, which permits it: for an agent a duplicate
        is nearly always a retry that lost its response. The first non-hobby site starts the trial subscription exactly
        as the dashboard does. Send an ``Idempotency-Key`` to make retries safe.

        Args:
            body: The request body.
            idempotency_key: Replays the stored response for 24 hours instead of creating a second site. Reuse with a
                different body is 409 ``idempotency_conflict``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created site, with its script URL and snippet.

        Raises:
            ApiError: ``invalid_request`` — missing url, bad timezone, or a domain not eligible for hobby.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope`` or
                ``key_not_scoped`` (a single-site key). ``write_disabled`` — the write surface is off
                (``API_WRITE_ENABLED=false``). 404 rather than 403 so a disabled surface is not advertised.
                ``site_exists`` or ``idempotency_conflict``. Hourly account (default 2000/h) or per-key (default 600/h)
                limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report
                the window that tripped (account on an account limit). Unexpected server error (``internal``). Report it
                with the ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be
                found, and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.create_site(body, idempotency_key=idempotency_key, request_options=request_options)
        )

    def delete_funnel(self, id_: int, funnel_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            funnel_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled``, ``unknown_site``, or ``unknown_funnel``.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_funnel(id_, funnel_id, request_options=request_options))

    def delete_goal(self, id_: int, goal_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            goal_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled``, ``unknown_site``, or ``goal_not_found``.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_goal(id_, goal_id, request_options=request_options))

    def delete_site(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Owner only — an admin may edit the site but not delete it — and it really deletes: the site plus its goals,
        hostnames, blocklists and import jobs, with its ClickHouse data removed asynchronously. An admin or a member
        gets 403 ``not_site_owner`` — there is no API equivalent of the dashboard's "remove my access".

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_site(id_, request_options=request_options))

    def get_blocked_ips(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> SitesSettingsBlockedIpsResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current setting.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_blocked_ips(id_, request_options=request_options))

    def get_country_settings(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> CountryList:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current setting.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_country_settings(id_, request_options=request_options))

    def get_hostname_settings(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> HostnameList:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current setting.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_hostname_settings(id_, request_options=request_options))

    def get_public_dashboard(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> PublicDashboard:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current setting.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_public_dashboard(id_, request_options=request_options))

    def get_site_snippet(
        self, id_: str, *, type_: TypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> SiteSnippet:
        """Returns the script URL and the ready-to-paste tag. Scope ``read``, not ``sites:write``: the snippet is public
        information (it ends up in the page source), and shared users may install tracking too. ``type`` selects a
        widget instead of the tracker: a hobby site gets the bundled ``/t/`` build, which counts as well as draws, a
        paid site the widget-only build — its counting is the tracker tag it installs separately.

        Args:
            id_: Value sent with the request.
            type_: Omit for the tracking script.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The install URL and snippet.

        Raises:
            ApiError: ``invalid_request`` — unknown snippet type. Missing/malformed/invalid/expired/revoked bearer token
                (``unauthorized``). ``insufficient_scope`` or ``key_not_scoped``. ``write_disabled`` or
                ``unknown_site``. Hourly account (default 2000/h) or per-key (default 600/h) limit hit
                (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window
                that tripped (account on an account limit). Unexpected server error (``internal``). Report it with the
                ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be found,
                and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_site_snippet(id_, type_=type_, request_options=request_options))

    def get_tracking_settings(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> TrackingSettings:
        """Returns the site's effective feature selection plus the full catalogue — each entry's state, its dependencies
        and its marginal brotli cost — so a caller can trade capability against script weight without a second call.
        Owner or admin only.

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The site's tracking settings.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_tracking_settings(id_, request_options=request_options))

    def list_site_goals(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> SitesGoalsResponse:
        """Goal definitions with their ids, for the write calls below.

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The site's goals.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_site_goals(id_, request_options=request_options))

    def set_blocked_ips(
        self, id_: int, body: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> SettingsCount:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applied.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_blocked_ips(id_, body, request_options=request_options))

    def set_country_settings(
        self,
        id_: int,
        body: CountryListRequest | CountryListRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SettingsCount:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applied.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_country_settings(id_, body, request_options=request_options))

    def set_hostname_settings(
        self,
        id_: int,
        body: HostnameListRequest | HostnameListRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SettingsCount:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applied.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_hostname_settings(id_, body, request_options=request_options))

    def set_public_dashboard(
        self,
        id_: int,
        body: PublicDashboard | PublicDashboardDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicDashboard:
        """Owner or admin only. ``enabled`` must be sent explicitly — this is the one setting that changes who can SEE
        the data, so an absent field must not read as "turn it off".

        A hobby site on a free account is always public and answers ``409 hobby_always_public`` to ``enabled: false``.
        Its stats are the widget it ships, and the hash that addresses them is already in the page's markup; ``enabled:
        true`` on one succeeds as a no-op. An owner with a paid subscription (``active``, or ``past_due`` during a
        retried renewal) may turn it off.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applied.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``.
                ``hobby_always_public`` — the site is hobby and its owner has no paid subscription, so it cannot be made
                private. Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry
                after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on
                an account limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the
                body or the X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can
                only be matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_public_dashboard(id_, body, request_options=request_options))

    def set_tracking_settings(
        self,
        id_: int,
        body: TrackingSettingsRequest | TrackingSettingsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TrackingSettings:
        """Replaces the selection wholesale. ``features`` is REQUIRED — an omitted key would be indistinguishable from
        ``[]``, which disables everything optional. Locked features stay enabled whether or not they are sent, and a
        feature whose ``requires`` are unmet is rejected. Applying repoints the served bundle, then stores the
        selection, then purges the CDN — the same order the dashboard uses. Owner or admin only.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The settings after the change.

        Raises:
            ApiError: ``invalid_request`` — features omitted, unknown, or a dependency unmet.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_tracking_settings(id_, body, request_options=request_options))

    def update_funnel(
        self,
        id_: int,
        funnel_id: int,
        body: FunnelRequest | FunnelRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FunnelDefinition:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            funnel_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated funnel.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled``, ``unknown_site``, or ``unknown_funnel``.
                ``funnel_exists``. Hourly account (default 2000/h) or per-key (default 600/h) limit hit
                (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window
                that tripped (account on an account limit). Unexpected server error (``internal``). Report it with the
                ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be found,
                and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.update_funnel(id_, funnel_id, body, request_options=request_options))

    def update_goal(
        self,
        id_: int,
        goal_id: int,
        body: GoalRequest | GoalRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Goal:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            goal_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated goal.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled``, ``unknown_site``, or ``goal_not_found``.
                ``goal_exists``. Hourly account (default 2000/h) or per-key (default 600/h) limit hit
                (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window
                that tripped (account on an account limit). Unexpected server error (``internal``). Report it with the
                ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be found,
                and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.update_goal(id_, goal_id, body, request_options=request_options))

    def update_site(
        self,
        id_: int,
        body: UpdateSiteRequest | UpdateSiteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SiteDetail:
        """Owner or admin only — a member gets 403 ``not_site_owner``. Omitted fields are left alone. Unlike the read
        surface there is no tracking-active gate: a lapsed account must still be able to fix and clean up its sites.
        Another account's id answers 404 ``unknown_site``, exactly as a nonexistent one.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated site.

        Raises:
            ApiError: ``invalid_request`` — bad url, timezone or week_start. Missing/malformed/invalid/expired/revoked
                bearer token (``unauthorized``). ``insufficient_scope``, ``key_not_scoped``, or ``not_site_owner``.
                ``write_disabled`` or ``unknown_site``. ``site_exists`` — the account already uses that url. Hourly
                account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_site(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SitesWithRawResponse:
        return self._with_raw_response


class AsyncSites:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSitesWithRawResponse(client, server, auth)

    async def create_funnel(
        self,
        id_: int,
        body: FunnelRequest | FunnelRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FunnelDefinition:
        """Owner or admin only. A step pointing at a goal this site does not have is 400, naming the step. A duplicate
        name is 409 ``funnel_exists``. Listing and running funnels lives on the read surface (GET /funnels, POST
        /funnels/{id}/report).

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created funnel.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. ``funnel_exists``.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_funnel(id_, body, request_options=request_options))

    async def create_goal(
        self, id_: int, body: GoalRequest | GoalRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Goal:
        """Owner or admin only. A duplicate name is 409 ``goal_exists``.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created goal.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. ``goal_exists``.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_goal(id_, body, request_options=request_options))

    async def create_site(
        self,
        body: CreateSiteRequest | CreateSiteRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SiteDetail:
        """Creates a site and returns everything needed to install tracking, so provisioning is one round-trip. Requires
        an ALL-SITES key: a single-site key gets 403 ``key_not_scoped``, since the new site would be outside its own
        scope. A duplicate url is 409 ``site_exists`` — unlike the dashboard, which permits it: for an agent a duplicate
        is nearly always a retry that lost its response. The first non-hobby site starts the trial subscription exactly
        as the dashboard does. Send an ``Idempotency-Key`` to make retries safe.

        Args:
            body: The request body.
            idempotency_key: Replays the stored response for 24 hours instead of creating a second site. Reuse with a
                different body is 409 ``idempotency_conflict``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created site, with its script URL and snippet.

        Raises:
            ApiError: ``invalid_request`` — missing url, bad timezone, or a domain not eligible for hobby.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope`` or
                ``key_not_scoped`` (a single-site key). ``write_disabled`` — the write surface is off
                (``API_WRITE_ENABLED=false``). 404 rather than 403 so a disabled surface is not advertised.
                ``site_exists`` or ``idempotency_conflict``. Hourly account (default 2000/h) or per-key (default 600/h)
                limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report
                the window that tripped (account on an account limit). Unexpected server error (``internal``). Report it
                with the ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be
                found, and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_site(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def delete_funnel(
        self, id_: int, funnel_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            funnel_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled``, ``unknown_site``, or ``unknown_funnel``.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_funnel(id_, funnel_id, request_options=request_options))

    async def delete_goal(
        self, id_: int, goal_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            goal_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled``, ``unknown_site``, or ``goal_not_found``.
                Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_goal(id_, goal_id, request_options=request_options))

    async def delete_site(self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Owner only — an admin may edit the site but not delete it — and it really deletes: the site plus its goals,
        hostnames, blocklists and import jobs, with its ClickHouse data removed asynchronously. An admin or a member
        gets 403 ``not_site_owner`` — there is no API equivalent of the dashboard's "remove my access".

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_site(id_, request_options=request_options))

    async def get_blocked_ips(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SitesSettingsBlockedIpsResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current setting.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_blocked_ips(id_, request_options=request_options))

    async def get_country_settings(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CountryList:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current setting.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_country_settings(id_, request_options=request_options))

    async def get_hostname_settings(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> HostnameList:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current setting.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_hostname_settings(id_, request_options=request_options))

    async def get_public_dashboard(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicDashboard:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current setting.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_public_dashboard(id_, request_options=request_options))

    async def get_site_snippet(
        self, id_: str, *, type_: TypeOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SiteSnippet:
        """Returns the script URL and the ready-to-paste tag. Scope ``read``, not ``sites:write``: the snippet is public
        information (it ends up in the page source), and shared users may install tracking too. ``type`` selects a
        widget instead of the tracker: a hobby site gets the bundled ``/t/`` build, which counts as well as draws, a
        paid site the widget-only build — its counting is the tracker tag it installs separately.

        Args:
            id_: Value sent with the request.
            type_: Omit for the tracking script.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The install URL and snippet.

        Raises:
            ApiError: ``invalid_request`` — unknown snippet type. Missing/malformed/invalid/expired/revoked bearer token
                (``unauthorized``). ``insufficient_scope`` or ``key_not_scoped``. ``write_disabled`` or
                ``unknown_site``. Hourly account (default 2000/h) or per-key (default 600/h) limit hit
                (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window
                that tripped (account on an account limit). Unexpected server error (``internal``). Report it with the
                ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be found,
                and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_site_snippet(id_, type_=type_, request_options=request_options))

    async def get_tracking_settings(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TrackingSettings:
        """Returns the site's effective feature selection plus the full catalogue — each entry's state, its dependencies
        and its marginal brotli cost — so a caller can trade capability against script weight without a second call.
        Owner or admin only.

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The site's tracking settings.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_tracking_settings(id_, request_options=request_options))

    async def list_site_goals(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SitesGoalsResponse:
        """Goal definitions with their ids, for the write calls below.

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The site's goals.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_site_goals(id_, request_options=request_options))

    async def set_blocked_ips(
        self, id_: int, body: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SettingsCount:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applied.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_blocked_ips(id_, body, request_options=request_options))

    async def set_country_settings(
        self,
        id_: int,
        body: CountryListRequest | CountryListRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SettingsCount:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applied.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_country_settings(id_, body, request_options=request_options))

    async def set_hostname_settings(
        self,
        id_: int,
        body: HostnameListRequest | HostnameListRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SettingsCount:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applied.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_hostname_settings(id_, body, request_options=request_options))

    async def set_public_dashboard(
        self,
        id_: int,
        body: PublicDashboard | PublicDashboardDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicDashboard:
        """Owner or admin only. ``enabled`` must be sent explicitly — this is the one setting that changes who can SEE
        the data, so an absent field must not read as "turn it off".

        A hobby site on a free account is always public and answers ``409 hobby_always_public`` to ``enabled: false``.
        Its stats are the widget it ships, and the hash that addresses them is already in the page's markup; ``enabled:
        true`` on one succeeds as a no-op. An owner with a paid subscription (``active``, or ``past_due`` during a
        retried renewal) may turn it off.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applied.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``.
                ``hobby_always_public`` — the site is hobby and its owner has no paid subscription, so it cannot be made
                private. Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry
                after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on
                an account limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the
                body or the X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can
                only be matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_public_dashboard(id_, body, request_options=request_options))

    async def set_tracking_settings(
        self,
        id_: int,
        body: TrackingSettingsRequest | TrackingSettingsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TrackingSettings:
        """Replaces the selection wholesale. ``features`` is REQUIRED — an omitted key would be indistinguishable from
        ``[]``, which disables everything optional. Locked features stay enabled whether or not they are sent, and a
        feature whose ``requires`` are unmet is rejected. Applying repoints the served bundle, then stores the
        selection, then purges the CDN — the same order the dashboard uses. Owner or admin only.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The settings after the change.

        Raises:
            ApiError: ``invalid_request`` — features omitted, unknown, or a dependency unmet.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled`` or ``unknown_site``. Hourly account
                (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_tracking_settings(id_, body, request_options=request_options))

    async def update_funnel(
        self,
        id_: int,
        funnel_id: int,
        body: FunnelRequest | FunnelRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FunnelDefinition:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            funnel_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated funnel.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled``, ``unknown_site``, or ``unknown_funnel``.
                ``funnel_exists``. Hourly account (default 2000/h) or per-key (default 600/h) limit hit
                (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window
                that tripped (account on an account limit). Unexpected server error (``internal``). Report it with the
                ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be found,
                and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_funnel(id_, funnel_id, body, request_options=request_options)
        )

    async def update_goal(
        self,
        id_: int,
        goal_id: int,
        body: GoalRequest | GoalRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Goal:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            goal_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated goal.

        Raises:
            ApiError: ``invalid_request`` — the body or a field is not acceptable.
                Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``,
                ``key_not_scoped``, or ``not_site_owner``. ``write_disabled``, ``unknown_site``, or ``goal_not_found``.
                ``goal_exists``. Hourly account (default 2000/h) or per-key (default 600/h) limit hit
                (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window
                that tripped (account on an account limit). Unexpected server error (``internal``). Report it with the
                ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be found,
                and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.update_goal(id_, goal_id, body, request_options=request_options))

    async def update_site(
        self,
        id_: int,
        body: UpdateSiteRequest | UpdateSiteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SiteDetail:
        """Owner or admin only — a member gets 403 ``not_site_owner``. Omitted fields are left alone. Unlike the read
        surface there is no tracking-active gate: a lapsed account must still be able to fix and clean up its sites.
        Another account's id answers 404 ``unknown_site``, exactly as a nonexistent one.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated site.

        Raises:
            ApiError: ``invalid_request`` — bad url, timezone or week_start. Missing/malformed/invalid/expired/revoked
                bearer token (``unauthorized``). ``insufficient_scope``, ``key_not_scoped``, or ``not_site_owner``.
                ``write_disabled`` or ``unknown_site``. ``site_exists`` — the account already uses that url. Hourly
                account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_site(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSitesWithRawResponse:
        return self._with_raw_response


class SitesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_funnel(
        self, id_: int, body: FunnelRequest | FunnelRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FunnelDefinition, CreateFunnelErrorBody]:
        """Owner or admin only. A step pointing at a goal this site does not have is 400, naming the step. A duplicate
        name is 409 ``funnel_exists``. Listing and running funnels lives on the read surface (GET /funnels, POST
        /funnels/{id}/report).

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sites/{id}/funnels"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FunnelRequest | FunnelRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FunnelDefinition],
            error_mapper=create_funnel_error_mapper,
            request_options=request_options,
        )

    def create_goal(
        self, id_: int, body: GoalRequest | GoalRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Goal, CreateGoalErrorBody]:
        """Owner or admin only. A duplicate name is 409 ``goal_exists``.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sites/{id}/goals"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoalRequest | GoalRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Goal],
            error_mapper=create_goal_error_mapper,
            request_options=request_options,
        )

    def create_site(
        self,
        body: CreateSiteRequest | CreateSiteRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SiteDetail, CreateSiteErrorBody]:
        """Creates a site and returns everything needed to install tracking, so provisioning is one round-trip. Requires
        an ALL-SITES key: a single-site key gets 403 ``key_not_scoped``, since the new site would be outside its own
        scope. A duplicate url is 409 ``site_exists`` — unlike the dashboard, which permits it: for an agent a duplicate
        is nearly always a retry that lost its response. The first non-hobby site starts the trial subscription exactly
        as the dashboard does. Send an ``Idempotency-Key`` to make retries safe.

        Args:
            body: The request body.
            idempotency_key: Replays the stored response for 24 hours instead of creating a second site. Reuse with a
                different body is 409 ``idempotency_conflict``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sites"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateSiteRequest | CreateSiteRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SiteDetail],
            error_mapper=create_site_error_mapper,
            request_options=request_options,
        )

    def delete_funnel(
        self, id_: int, funnel_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFunnelErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            funnel_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sites/{id}/funnels/{funnelId}"),
            path_params=[param[int]("id", id_), param[int]("funnelId", funnel_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_funnel_error_mapper,
            request_options=request_options,
        )

    def delete_goal(
        self, id_: int, goal_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteGoalErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            goal_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sites/{id}/goals/{goalId}"),
            path_params=[param[int]("id", id_), param[int]("goalId", goal_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_goal_error_mapper,
            request_options=request_options,
        )

    def delete_site(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSiteErrorBody]:
        """Owner only — an admin may edit the site but not delete it — and it really deletes: the site plus its goals,
        hostnames, blocklists and import jobs, with its ClickHouse data removed asynchronously. An admin or a member
        gets 403 ``not_site_owner`` — there is no API equivalent of the dashboard's "remove my access".

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sites/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_site_error_mapper,
            request_options=request_options,
        )

    def get_blocked_ips(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SitesSettingsBlockedIpsResponse, GetBlockedIPsErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/blocked-ips"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SitesSettingsBlockedIpsResponse],
            error_mapper=get_blocked_ips_error_mapper,
            request_options=request_options,
        )

    def get_country_settings(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CountryList, GetCountrySettingsErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/countries"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CountryList],
            error_mapper=get_country_settings_error_mapper,
            request_options=request_options,
        )

    def get_hostname_settings(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[HostnameList, GetHostnameSettingsErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/hostnames"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[HostnameList],
            error_mapper=get_hostname_settings_error_mapper,
            request_options=request_options,
        )

    def get_public_dashboard(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicDashboard, GetPublicDashboardErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/public-dashboard"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicDashboard],
            error_mapper=get_public_dashboard_error_mapper,
            request_options=request_options,
        )

    def get_site_snippet(
        self, id_: str, *, type_: TypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SiteSnippet, GetSiteSnippetErrorBody]:
        """Returns the script URL and the ready-to-paste tag. Scope ``read``, not ``sites:write``: the snippet is public
        information (it ends up in the page source), and shared users may install tracking too. ``type`` selects a
        widget instead of the tracker: a hobby site gets the bundled ``/t/`` build, which counts as well as draws, a
        paid site the widget-only build — its counting is the tracker tag it installs separately.

        Args:
            id_: Value sent with the request.
            type_: Omit for the tracking script.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/snippet"),
            path_params=[param[str]("id", id_)],
            query_params=[param[TypeOrStr | None]("type", type_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SiteSnippet],
            error_mapper=get_site_snippet_error_mapper,
            request_options=request_options,
        )

    def get_tracking_settings(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TrackingSettings, GetTrackingSettingsErrorBody]:
        """Returns the site's effective feature selection plus the full catalogue — each entry's state, its dependencies
        and its marginal brotli cost — so a caller can trade capability against script weight without a second call.
        Owner or admin only.

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/tracking"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TrackingSettings],
            error_mapper=get_tracking_settings_error_mapper,
            request_options=request_options,
        )

    def list_site_goals(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SitesGoalsResponse, ListSiteGoalsErrorBody]:
        """Goal definitions with their ids, for the write calls below.

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/goals"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SitesGoalsResponse],
            error_mapper=list_site_goals_error_mapper,
            request_options=request_options,
        )

    def set_blocked_ips(
        self, id_: int, body: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SettingsCount, SetBlockedIPsErrorBody]:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/blocked-ips"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[str]](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SettingsCount],
            error_mapper=set_blocked_ips_error_mapper,
            request_options=request_options,
        )

    def set_country_settings(
        self,
        id_: int,
        body: CountryListRequest | CountryListRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SettingsCount, SetCountrySettingsErrorBody]:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/countries"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CountryListRequest | CountryListRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SettingsCount],
            error_mapper=set_country_settings_error_mapper,
            request_options=request_options,
        )

    def set_hostname_settings(
        self,
        id_: int,
        body: HostnameListRequest | HostnameListRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SettingsCount, SetHostnameSettingsErrorBody]:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/hostnames"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HostnameListRequest | HostnameListRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SettingsCount],
            error_mapper=set_hostname_settings_error_mapper,
            request_options=request_options,
        )

    def set_public_dashboard(
        self,
        id_: int,
        body: PublicDashboard | PublicDashboardDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicDashboard, SetPublicDashboardErrorBody]:
        """Owner or admin only. ``enabled`` must be sent explicitly — this is the one setting that changes who can SEE
        the data, so an absent field must not read as "turn it off".

        A hobby site on a free account is always public and answers ``409 hobby_always_public`` to ``enabled: false``.
        Its stats are the widget it ships, and the hash that addresses them is already in the page's markup; ``enabled:
        true`` on one succeeds as a no-op. An owner with a paid subscription (``active``, or ``past_due`` during a
        retried renewal) may turn it off.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/public-dashboard"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicDashboard | PublicDashboardDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublicDashboard],
            error_mapper=set_public_dashboard_error_mapper,
            request_options=request_options,
        )

    def set_tracking_settings(
        self,
        id_: int,
        body: TrackingSettingsRequest | TrackingSettingsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TrackingSettings, SetTrackingSettingsErrorBody]:
        """Replaces the selection wholesale. ``features`` is REQUIRED — an omitted key would be indistinguishable from
        ``[]``, which disables everything optional. Locked features stay enabled whether or not they are sent, and a
        feature whose ``requires`` are unmet is rejected. Applying repoints the served bundle, then stores the
        selection, then purges the CDN — the same order the dashboard uses. Owner or admin only.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/tracking"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TrackingSettingsRequest | TrackingSettingsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TrackingSettings],
            error_mapper=set_tracking_settings_error_mapper,
            request_options=request_options,
        )

    def update_funnel(
        self,
        id_: int,
        funnel_id: int,
        body: FunnelRequest | FunnelRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FunnelDefinition, UpdateFunnelErrorBody]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            funnel_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/funnels/{funnelId}"),
            path_params=[param[int]("id", id_), param[int]("funnelId", funnel_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FunnelRequest | FunnelRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FunnelDefinition],
            error_mapper=update_funnel_error_mapper,
            request_options=request_options,
        )

    def update_goal(
        self,
        id_: int,
        goal_id: int,
        body: GoalRequest | GoalRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Goal, UpdateGoalErrorBody]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            goal_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/goals/{goalId}"),
            path_params=[param[int]("id", id_), param[int]("goalId", goal_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoalRequest | GoalRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Goal],
            error_mapper=update_goal_error_mapper,
            request_options=request_options,
        )

    def update_site(
        self,
        id_: int,
        body: UpdateSiteRequest | UpdateSiteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SiteDetail, UpdateSiteErrorBody]:
        """Owner or admin only — a member gets 403 ``not_site_owner``. Omitted fields are left alone. Unlike the read
        surface there is no tracking-active gate: a lapsed account must still be able to fix and clean up its sites.
        Another account's id answers 404 ``unknown_site``, exactly as a nonexistent one.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sites/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSiteRequest | UpdateSiteRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SiteDetail],
            error_mapper=update_site_error_mapper,
            request_options=request_options,
        )


class AsyncSitesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_funnel(
        self,
        id_: int,
        body: FunnelRequest | FunnelRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FunnelDefinition, CreateFunnelErrorBody]:
        """Owner or admin only. A step pointing at a goal this site does not have is 400, naming the step. A duplicate
        name is 409 ``funnel_exists``. Listing and running funnels lives on the read surface (GET /funnels, POST
        /funnels/{id}/report).

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sites/{id}/funnels"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FunnelRequest | FunnelRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FunnelDefinition],
            error_mapper=create_funnel_error_mapper,
            request_options=request_options,
        )

    async def create_goal(
        self, id_: int, body: GoalRequest | GoalRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Goal, CreateGoalErrorBody]:
        """Owner or admin only. A duplicate name is 409 ``goal_exists``.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sites/{id}/goals"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoalRequest | GoalRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Goal],
            error_mapper=create_goal_error_mapper,
            request_options=request_options,
        )

    async def create_site(
        self,
        body: CreateSiteRequest | CreateSiteRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SiteDetail, CreateSiteErrorBody]:
        """Creates a site and returns everything needed to install tracking, so provisioning is one round-trip. Requires
        an ALL-SITES key: a single-site key gets 403 ``key_not_scoped``, since the new site would be outside its own
        scope. A duplicate url is 409 ``site_exists`` — unlike the dashboard, which permits it: for an agent a duplicate
        is nearly always a retry that lost its response. The first non-hobby site starts the trial subscription exactly
        as the dashboard does. Send an ``Idempotency-Key`` to make retries safe.

        Args:
            body: The request body.
            idempotency_key: Replays the stored response for 24 hours instead of creating a second site. Reuse with a
                different body is 409 ``idempotency_conflict``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sites"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateSiteRequest | CreateSiteRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SiteDetail],
            error_mapper=create_site_error_mapper,
            request_options=request_options,
        )

    async def delete_funnel(
        self, id_: int, funnel_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFunnelErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            funnel_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sites/{id}/funnels/{funnelId}"),
            path_params=[param[int]("id", id_), param[int]("funnelId", funnel_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_funnel_error_mapper,
            request_options=request_options,
        )

    async def delete_goal(
        self, id_: int, goal_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteGoalErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            goal_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sites/{id}/goals/{goalId}"),
            path_params=[param[int]("id", id_), param[int]("goalId", goal_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_goal_error_mapper,
            request_options=request_options,
        )

    async def delete_site(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSiteErrorBody]:
        """Owner only — an admin may edit the site but not delete it — and it really deletes: the site plus its goals,
        hostnames, blocklists and import jobs, with its ClickHouse data removed asynchronously. An admin or a member
        gets 403 ``not_site_owner`` — there is no API equivalent of the dashboard's "remove my access".

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/sites/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_site_error_mapper,
            request_options=request_options,
        )

    async def get_blocked_ips(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SitesSettingsBlockedIpsResponse, GetBlockedIPsErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/blocked-ips"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SitesSettingsBlockedIpsResponse],
            error_mapper=get_blocked_ips_error_mapper,
            request_options=request_options,
        )

    async def get_country_settings(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CountryList, GetCountrySettingsErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/countries"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CountryList],
            error_mapper=get_country_settings_error_mapper,
            request_options=request_options,
        )

    async def get_hostname_settings(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[HostnameList, GetHostnameSettingsErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/hostnames"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[HostnameList],
            error_mapper=get_hostname_settings_error_mapper,
            request_options=request_options,
        )

    async def get_public_dashboard(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicDashboard, GetPublicDashboardErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/public-dashboard"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicDashboard],
            error_mapper=get_public_dashboard_error_mapper,
            request_options=request_options,
        )

    async def get_site_snippet(
        self, id_: str, *, type_: TypeOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SiteSnippet, GetSiteSnippetErrorBody]:
        """Returns the script URL and the ready-to-paste tag. Scope ``read``, not ``sites:write``: the snippet is public
        information (it ends up in the page source), and shared users may install tracking too. ``type`` selects a
        widget instead of the tracker: a hobby site gets the bundled ``/t/`` build, which counts as well as draws, a
        paid site the widget-only build — its counting is the tracker tag it installs separately.

        Args:
            id_: Value sent with the request.
            type_: Omit for the tracking script.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/snippet"),
            path_params=[param[str]("id", id_)],
            query_params=[param[TypeOrStr | None]("type", type_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SiteSnippet],
            error_mapper=get_site_snippet_error_mapper,
            request_options=request_options,
        )

    async def get_tracking_settings(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TrackingSettings, GetTrackingSettingsErrorBody]:
        """Returns the site's effective feature selection plus the full catalogue — each entry's state, its dependencies
        and its marginal brotli cost — so a caller can trade capability against script weight without a second call.
        Owner or admin only.

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/settings/tracking"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TrackingSettings],
            error_mapper=get_tracking_settings_error_mapper,
            request_options=request_options,
        )

    async def list_site_goals(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SitesGoalsResponse, ListSiteGoalsErrorBody]:
        """Goal definitions with their ids, for the write calls below.

        Args:
            id_: Numeric site id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sites/{id}/goals"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SitesGoalsResponse],
            error_mapper=list_site_goals_error_mapper,
            request_options=request_options,
        )

    async def set_blocked_ips(
        self, id_: int, body: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SettingsCount, SetBlockedIPsErrorBody]:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/blocked-ips"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[str]](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SettingsCount],
            error_mapper=set_blocked_ips_error_mapper,
            request_options=request_options,
        )

    async def set_country_settings(
        self,
        id_: int,
        body: CountryListRequest | CountryListRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SettingsCount, SetCountrySettingsErrorBody]:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/countries"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CountryListRequest | CountryListRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SettingsCount],
            error_mapper=set_country_settings_error_mapper,
            request_options=request_options,
        )

    async def set_hostname_settings(
        self,
        id_: int,
        body: HostnameListRequest | HostnameListRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SettingsCount, SetHostnameSettingsErrorBody]:
        """Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad
        body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as
        done.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/hostnames"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HostnameListRequest | HostnameListRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SettingsCount],
            error_mapper=set_hostname_settings_error_mapper,
            request_options=request_options,
        )

    async def set_public_dashboard(
        self,
        id_: int,
        body: PublicDashboard | PublicDashboardDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicDashboard, SetPublicDashboardErrorBody]:
        """Owner or admin only. ``enabled`` must be sent explicitly — this is the one setting that changes who can SEE
        the data, so an absent field must not read as "turn it off".

        A hobby site on a free account is always public and answers ``409 hobby_always_public`` to ``enabled: false``.
        Its stats are the widget it ships, and the hash that addresses them is already in the page's markup; ``enabled:
        true`` on one succeeds as a no-op. An owner with a paid subscription (``active``, or ``past_due`` during a
        retried renewal) may turn it off.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/public-dashboard"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicDashboard | PublicDashboardDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublicDashboard],
            error_mapper=set_public_dashboard_error_mapper,
            request_options=request_options,
        )

    async def set_tracking_settings(
        self,
        id_: int,
        body: TrackingSettingsRequest | TrackingSettingsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TrackingSettings, SetTrackingSettingsErrorBody]:
        """Replaces the selection wholesale. ``features`` is REQUIRED — an omitted key would be indistinguishable from
        ``[]``, which disables everything optional. Locked features stay enabled whether or not they are sent, and a
        feature whose ``requires`` are unmet is rejected. Applying repoints the served bundle, then stores the
        selection, then purges the CDN — the same order the dashboard uses. Owner or admin only.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/settings/tracking"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TrackingSettingsRequest | TrackingSettingsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TrackingSettings],
            error_mapper=set_tracking_settings_error_mapper,
            request_options=request_options,
        )

    async def update_funnel(
        self,
        id_: int,
        funnel_id: int,
        body: FunnelRequest | FunnelRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FunnelDefinition, UpdateFunnelErrorBody]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            funnel_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/funnels/{funnelId}"),
            path_params=[param[int]("id", id_), param[int]("funnelId", funnel_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FunnelRequest | FunnelRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FunnelDefinition],
            error_mapper=update_funnel_error_mapper,
            request_options=request_options,
        )

    async def update_goal(
        self,
        id_: int,
        goal_id: int,
        body: GoalRequest | GoalRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Goal, UpdateGoalErrorBody]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            goal_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/sites/{id}/goals/{goalId}"),
            path_params=[param[int]("id", id_), param[int]("goalId", goal_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoalRequest | GoalRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Goal],
            error_mapper=update_goal_error_mapper,
            request_options=request_options,
        )

    async def update_site(
        self,
        id_: int,
        body: UpdateSiteRequest | UpdateSiteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SiteDetail, UpdateSiteErrorBody]:
        """Owner or admin only — a member gets 403 ``not_site_owner``. Omitted fields are left alone. Unlike the read
        surface there is no tracking-active gate: a lapsed account must still be able to fix and clean up its sites.
        Another account's id answers 404 ``unknown_site``, exactly as a nonexistent one.

        Args:
            id_: Numeric site id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sites/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSiteRequest | UpdateSiteRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SiteDetail],
            error_mapper=update_site_error_mapper,
            request_options=request_options,
        )
