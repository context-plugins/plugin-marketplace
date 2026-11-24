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
from ..errors.changes_error import ChangesErrorBody, changes_error_mapper
from ..errors.changes_summary_error import ChangesSummaryErrorBody, changes_summary_error_mapper
from ..models.api_v1_changes_response import ApiV1ChangesResponse
from ..models.api_v1_changes_summary_response import ApiV1ChangesSummaryResponse
from ..server.server import Server


class ChangeFeed:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChangeFeedWithRawResponse(client, server, auth)

    def changes(
        self,
        *,
        kind: str | None = None,
        state: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        since: str | None = None,
        until: str | None = None,
        min_units: float | None = None,
        max_units: float | None = None,
        min_magnitude: float | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ChangesResponse:
        """The trigger-event feed: board turnover, president changes, management-company moves, self-managed
        transitions, registration status and name changes, and license events across the association graph. This is the
        programmatic form of the change feed on data.commonelements.com, and the endpoint to poll when you want to act
        on a community the week something changed rather than re-download a static list.

        **Plan:** Your plan sets the row cap, and a maximum lookback window (table below). Free keys: up to 50 rows per
        request; paid tiers raise the cap.

        - No officer names, ever. The feed reads a person-stripped view by construction: officer changes come back as
            counts and canonical titles, and management changes (none detected yet) as firm names. There is no parameter
            that widens this.
        - "total" in the pagination block is the count of matching rows inside your plan window, not the count in the
            whole dataset.
        - With no kind named, the feed returns association events only. Contractor license events (license_added,
            license_lapsed) are a separate stream: name the kind to get them. The first time a board is observed is not
            a change and is never returned.
        - Two caps stack and the tighter one wins: the per-request free-plan row cap of 50, and your plan row cap in the
            table above. A free key therefore receives up to 50 rows per request within a 30-day window. When a response
            was shortened by the free cap it also carries a "row_cap" field in the envelope.

        Args:
            kind: Comma-separated list of change kinds to include. Any of: board_turnover, board_president_changed,
                officer_added, officer_removed, officer_title_changed, management_company_changed,
                management_company_added, management_company_removed, self_managed_transition, entity_status_changed,
                entity_name_changed, license_added, license_lapsed. Omit for all kinds.
            state: Comma-separated two-letter state codes, e.g. "FL" or "FL,GA,TX". Case-insensitive.
            county: Single county name, matched exactly as stored (e.g. "Miami-Dade").
            subtype: One of "hoa", "condo", "coop".
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not
                widen it. Available change history varies by source. Observation dates may differ from when changes took
                effect, and your plan's lookback window does not guarantee that much history.
            until: Latest observation date, YYYY-MM-DD.
            min_units: Only associations with at least this many units.
            max_units: Only associations with at most this many units.
            min_magnitude: Minimum change magnitude, 0 to 1. Higher means a larger share of the board or record changed
                at once.
            limit: Rows to return, 1 to 1000 (default 100). Clamped to your plan row cap.
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.changes(
                kind=kind,
                state=state,
                county=county,
                subtype=subtype,
                since=since,
                until=until,
                min_units=min_units,
                max_units=max_units,
                min_magnitude=min_magnitude,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    def changes_summary(
        self, *, since: str | None = None, state: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ChangesSummaryResponse:
        """Counts by change kind over your window: how many events, across how many distinct associations, in how many
        states. The cheap call for a dashboard tile or a scheduled digest, and the one to run first when you are sizing
        the dataset before committing to a plan.

        **Plan:** Available on every plan, uncapped: this returns one aggregate row per change kind, not a row listing.
        The lookback window is set by your plan, the same window /api/v1/changes uses.

        Args:
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window. Available change history
                varies by source. Observation dates may differ from when changes took effect, and your plan's lookback
                window does not guarantee that much history.
            state: Comma-separated two-letter state codes. Omit for all states.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.changes_summary(since=since, state=state, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ChangeFeedWithRawResponse:
        return self._with_raw_response


class AsyncChangeFeed:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChangeFeedWithRawResponse(client, server, auth)

    async def changes(
        self,
        *,
        kind: str | None = None,
        state: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        since: str | None = None,
        until: str | None = None,
        min_units: float | None = None,
        max_units: float | None = None,
        min_magnitude: float | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ChangesResponse:
        """The trigger-event feed: board turnover, president changes, management-company moves, self-managed
        transitions, registration status and name changes, and license events across the association graph. This is the
        programmatic form of the change feed on data.commonelements.com, and the endpoint to poll when you want to act
        on a community the week something changed rather than re-download a static list.

        **Plan:** Your plan sets the row cap, and a maximum lookback window (table below). Free keys: up to 50 rows per
        request; paid tiers raise the cap.

        - No officer names, ever. The feed reads a person-stripped view by construction: officer changes come back as
            counts and canonical titles, and management changes (none detected yet) as firm names. There is no parameter
            that widens this.
        - "total" in the pagination block is the count of matching rows inside your plan window, not the count in the
            whole dataset.
        - With no kind named, the feed returns association events only. Contractor license events (license_added,
            license_lapsed) are a separate stream: name the kind to get them. The first time a board is observed is not
            a change and is never returned.
        - Two caps stack and the tighter one wins: the per-request free-plan row cap of 50, and your plan row cap in the
            table above. A free key therefore receives up to 50 rows per request within a 30-day window. When a response
            was shortened by the free cap it also carries a "row_cap" field in the envelope.

        Args:
            kind: Comma-separated list of change kinds to include. Any of: board_turnover, board_president_changed,
                officer_added, officer_removed, officer_title_changed, management_company_changed,
                management_company_added, management_company_removed, self_managed_transition, entity_status_changed,
                entity_name_changed, license_added, license_lapsed. Omit for all kinds.
            state: Comma-separated two-letter state codes, e.g. "FL" or "FL,GA,TX". Case-insensitive.
            county: Single county name, matched exactly as stored (e.g. "Miami-Dade").
            subtype: One of "hoa", "condo", "coop".
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not
                widen it. Available change history varies by source. Observation dates may differ from when changes took
                effect, and your plan's lookback window does not guarantee that much history.
            until: Latest observation date, YYYY-MM-DD.
            min_units: Only associations with at least this many units.
            max_units: Only associations with at most this many units.
            min_magnitude: Minimum change magnitude, 0 to 1. Higher means a larger share of the board or record changed
                at once.
            limit: Rows to return, 1 to 1000 (default 100). Clamped to your plan row cap.
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.changes(
                kind=kind,
                state=state,
                county=county,
                subtype=subtype,
                since=since,
                until=until,
                min_units=min_units,
                max_units=max_units,
                min_magnitude=min_magnitude,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def changes_summary(
        self,
        *,
        since: str | None = None,
        state: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ChangesSummaryResponse:
        """Counts by change kind over your window: how many events, across how many distinct associations, in how many
        states. The cheap call for a dashboard tile or a scheduled digest, and the one to run first when you are sizing
        the dataset before committing to a plan.

        **Plan:** Available on every plan, uncapped: this returns one aggregate row per change kind, not a row listing.
        The lookback window is set by your plan, the same window /api/v1/changes uses.

        Args:
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window. Available change history
                varies by source. Observation dates may differ from when changes took effect, and your plan's lookback
                window does not guarantee that much history.
            state: Comma-separated two-letter state codes. Omit for all states.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.changes_summary(since=since, state=state, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncChangeFeedWithRawResponse:
        return self._with_raw_response


class ChangeFeedWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def changes(
        self,
        *,
        kind: str | None = None,
        state: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        since: str | None = None,
        until: str | None = None,
        min_units: float | None = None,
        max_units: float | None = None,
        min_magnitude: float | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ChangesResponse, ChangesErrorBody]:
        """The trigger-event feed: board turnover, president changes, management-company moves, self-managed
        transitions, registration status and name changes, and license events across the association graph. This is the
        programmatic form of the change feed on data.commonelements.com, and the endpoint to poll when you want to act
        on a community the week something changed rather than re-download a static list.

        **Plan:** Your plan sets the row cap, and a maximum lookback window (table below). Free keys: up to 50 rows per
        request; paid tiers raise the cap.

        - No officer names, ever. The feed reads a person-stripped view by construction: officer changes come back as
            counts and canonical titles, and management changes (none detected yet) as firm names. There is no parameter
            that widens this.
        - "total" in the pagination block is the count of matching rows inside your plan window, not the count in the
            whole dataset.
        - With no kind named, the feed returns association events only. Contractor license events (license_added,
            license_lapsed) are a separate stream: name the kind to get them. The first time a board is observed is not
            a change and is never returned.
        - Two caps stack and the tighter one wins: the per-request free-plan row cap of 50, and your plan row cap in the
            table above. A free key therefore receives up to 50 rows per request within a 30-day window. When a response
            was shortened by the free cap it also carries a "row_cap" field in the envelope.

        Args:
            kind: Comma-separated list of change kinds to include. Any of: board_turnover, board_president_changed,
                officer_added, officer_removed, officer_title_changed, management_company_changed,
                management_company_added, management_company_removed, self_managed_transition, entity_status_changed,
                entity_name_changed, license_added, license_lapsed. Omit for all kinds.
            state: Comma-separated two-letter state codes, e.g. "FL" or "FL,GA,TX". Case-insensitive.
            county: Single county name, matched exactly as stored (e.g. "Miami-Dade").
            subtype: One of "hoa", "condo", "coop".
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not
                widen it. Available change history varies by source. Observation dates may differ from when changes took
                effect, and your plan's lookback window does not guarantee that much history.
            until: Latest observation date, YYYY-MM-DD.
            min_units: Only associations with at least this many units.
            max_units: Only associations with at most this many units.
            min_magnitude: Minimum change magnitude, 0 to 1. Higher means a larger share of the board or record changed
                at once.
            limit: Rows to return, 1 to 1000 (default 100). Clamped to your plan row cap.
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/changes"),
            query_params=[
                param[str | None]("kind", kind),
                param[str | None]("state", state),
                param[str | None]("county", county),
                param[str | None]("subtype", subtype),
                param[str | None]("since", since),
                param[str | None]("until", until),
                param[float | None]("min_units", min_units),
                param[float | None]("max_units", max_units),
                param[float | None]("min_magnitude", min_magnitude),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ChangesResponse],
            error_mapper=changes_error_mapper,
            request_options=request_options,
        )

    def changes_summary(
        self, *, since: str | None = None, state: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ChangesSummaryResponse, ChangesSummaryErrorBody]:
        """Counts by change kind over your window: how many events, across how many distinct associations, in how many
        states. The cheap call for a dashboard tile or a scheduled digest, and the one to run first when you are sizing
        the dataset before committing to a plan.

        **Plan:** Available on every plan, uncapped: this returns one aggregate row per change kind, not a row listing.
        The lookback window is set by your plan, the same window /api/v1/changes uses.

        Args:
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window. Available change history
                varies by source. Observation dates may differ from when changes took effect, and your plan's lookback
                window does not guarantee that much history.
            state: Comma-separated two-letter state codes. Omit for all states.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/changes/summary"),
            query_params=[param[str | None]("since", since), param[str | None]("state", state)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ChangesSummaryResponse],
            error_mapper=changes_summary_error_mapper,
            request_options=request_options,
        )


class AsyncChangeFeedWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def changes(
        self,
        *,
        kind: str | None = None,
        state: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        since: str | None = None,
        until: str | None = None,
        min_units: float | None = None,
        max_units: float | None = None,
        min_magnitude: float | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ChangesResponse, ChangesErrorBody]:
        """The trigger-event feed: board turnover, president changes, management-company moves, self-managed
        transitions, registration status and name changes, and license events across the association graph. This is the
        programmatic form of the change feed on data.commonelements.com, and the endpoint to poll when you want to act
        on a community the week something changed rather than re-download a static list.

        **Plan:** Your plan sets the row cap, and a maximum lookback window (table below). Free keys: up to 50 rows per
        request; paid tiers raise the cap.

        - No officer names, ever. The feed reads a person-stripped view by construction: officer changes come back as
            counts and canonical titles, and management changes (none detected yet) as firm names. There is no parameter
            that widens this.
        - "total" in the pagination block is the count of matching rows inside your plan window, not the count in the
            whole dataset.
        - With no kind named, the feed returns association events only. Contractor license events (license_added,
            license_lapsed) are a separate stream: name the kind to get them. The first time a board is observed is not
            a change and is never returned.
        - Two caps stack and the tighter one wins: the per-request free-plan row cap of 50, and your plan row cap in the
            table above. A free key therefore receives up to 50 rows per request within a 30-day window. When a response
            was shortened by the free cap it also carries a "row_cap" field in the envelope.

        Args:
            kind: Comma-separated list of change kinds to include. Any of: board_turnover, board_president_changed,
                officer_added, officer_removed, officer_title_changed, management_company_changed,
                management_company_added, management_company_removed, self_managed_transition, entity_status_changed,
                entity_name_changed, license_added, license_lapsed. Omit for all kinds.
            state: Comma-separated two-letter state codes, e.g. "FL" or "FL,GA,TX". Case-insensitive.
            county: Single county name, matched exactly as stored (e.g. "Miami-Dade").
            subtype: One of "hoa", "condo", "coop".
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not
                widen it. Available change history varies by source. Observation dates may differ from when changes took
                effect, and your plan's lookback window does not guarantee that much history.
            until: Latest observation date, YYYY-MM-DD.
            min_units: Only associations with at least this many units.
            max_units: Only associations with at most this many units.
            min_magnitude: Minimum change magnitude, 0 to 1. Higher means a larger share of the board or record changed
                at once.
            limit: Rows to return, 1 to 1000 (default 100). Clamped to your plan row cap.
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/changes"),
            query_params=[
                param[str | None]("kind", kind),
                param[str | None]("state", state),
                param[str | None]("county", county),
                param[str | None]("subtype", subtype),
                param[str | None]("since", since),
                param[str | None]("until", until),
                param[float | None]("min_units", min_units),
                param[float | None]("max_units", max_units),
                param[float | None]("min_magnitude", min_magnitude),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ChangesResponse],
            error_mapper=changes_error_mapper,
            request_options=request_options,
        )

    async def changes_summary(
        self,
        *,
        since: str | None = None,
        state: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ChangesSummaryResponse, ChangesSummaryErrorBody]:
        """Counts by change kind over your window: how many events, across how many distinct associations, in how many
        states. The cheap call for a dashboard tile or a scheduled digest, and the one to run first when you are sizing
        the dataset before committing to a plan.

        **Plan:** Available on every plan, uncapped: this returns one aggregate row per change kind, not a row listing.
        The lookback window is set by your plan, the same window /api/v1/changes uses.

        Args:
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window. Available change history
                varies by source. Observation dates may differ from when changes took effect, and your plan's lookback
                window does not guarantee that much history.
            state: Comma-separated two-letter state codes. Omit for all states.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/changes/summary"),
            query_params=[param[str | None]("since", since), param[str | None]("state", state)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ChangesSummaryResponse],
            error_mapper=changes_summary_error_mapper,
            request_options=request_options,
        )
