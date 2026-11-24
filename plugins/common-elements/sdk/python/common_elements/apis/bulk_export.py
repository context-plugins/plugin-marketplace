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
from ..errors.export_changes_error import ExportChangesErrorBody, export_changes_error_mapper
from ..errors.export_error import ExportErrorBody, export_error_mapper
from ..models.api_v1_export_changes_response import ApiV1ExportChangesResponse
from ..models.api_v1_export_response import ApiV1ExportResponse
from ..server.server import Server


class BulkExport:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BulkExportWithRawResponse(client, server, auth)

    def export(
        self,
        resource: str,
        *,
        format_: str | None = None,
        columns: str | None = None,
        state: str | None = None,
        q: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        category: str | None = None,
        unit_min_unit_max: float | None = None,
        year_min_year_max: float | None = None,
        is_claimed: bool | None = None,
        mgmt: str | None = None,
        chapter_topic: str | None = None,
        sirs_on_file_elevator_delinquent: bool | None = None,
        milestone_status_pool_last_result: str | None = None,
        has_sirs_has_elevator_cert: bool | None = None,
        fha_status: str | None = None,
        min_risk_max_risk: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ExportResponse:
        """Stream a full dataset as CSV or JSON, one request against your monthly quota regardless of row count.
        ``resource`` is one of associations, vendors, statutes, building-safety, or report-card. Each resource has its
        own filter parameters (narrow the export the same way you would narrow the matching list endpoint) and a
        public-safe column allowlist. report-card streams the per-association public-record signal set behind the
        Explorer — FEMA NRI county risk, SIRS on file, HUD FHA status, elevator certificates, latest pool inspection,
        24-month building permits, and IRS Form 990 revenue — keyed by organization id, name, state, and county.

        **Plan:** Growth plan or higher. Free and Builder keys receive 403 tier_not_allowed — the per-row endpoints
        above are included in every plan, but streaming a full dataset is a Growth+ capability. Per-tier row cap on a
        single export: Growth 50,000 · Scale 250,000 · Enterprise 1,000,000.

        - One export = one request against your monthly quota, whatever the row count, up to your plan's row cap.
        - The scope required depends on the resource, not the export capability itself — a key needs both the resource's
            read scope AND a Growth+ tier.
        - A source guard enforces the same public-record exclusions as every other v1 endpoint; a "columns" value that
            would expose an excluded field 400s rather than silently dropping it.
        - The first page is validated before the response starts streaming, so a bad filter or column name returns a
            clean JSON error. A failure mid-stream truncates the file — check row counts on large exports.

        Args:
            resource: One of: associations, vendors, statutes, building-safety, report-card.
            format_: "csv" (default) or "json".
            columns: Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid
                set for that resource.
            state: Two-letter state code. Every resource supports this filter.
            q: Free-text filter, meaning varies by resource (name for associations/vendors, statute text for statutes).
            county: County filter. Supported by associations, vendors, and building-safety.
            subtype: "hoa", "condo", or "coop". Supported by associations and building-safety.
            category: Vendor category slug. Vendors only.
            unit_min_unit_max: Unit count range. Associations only.
            year_min_year_max: Year-built range. Associations only.
            is_claimed: "true" or "false". Associations only.
            mgmt: Management firm name filter. Associations only.
            chapter_topic: Statutes only, same meaning as on /v1/statutes/by-state.
            sirs_on_file_elevator_delinquent: "true" or "false". Building-safety only.
            milestone_status_pool_last_result: Free-text, matches the source county/agency's own vocabulary.
                Building-safety only.
            has_sirs_has_elevator_cert: "true" or "false". Report-card only.
            fha_status: Normalized HUD decision: approved, rejected, withdrawn, expired, or other. Report-card only.
            min_risk_max_risk: FEMA NRI county risk score range. Report-card only.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``tier_not_allowed`` — The key is valid and correctly
                scoped, but the endpoint is gated to a higher plan. Bulk export is the current case: it is Growth and
                above. Next: Check your plan and the endpoint's minimum at /api/v1/meta/usage, then upgrade from
                /settings/api-keys. Per-row endpoints remain available on your current plan. ``not_found`` — The
                identifier is well-formed but matches nothing this key may see. Records excluded from the public
                directory read as absent rather than forbidden, deliberately — a 403 would confirm the row exists. Next:
                Confirm the identifier against a list or search endpoint before fetching it by id. A record that appears
                in the product but not here is outside the licensed dataset. ``quota_exceeded`` — The key has spent
                every request included in the current calendar month. There is no overage charge and no automatic
                top-up. Next: Call /api/v1/meta/usage to see the reset date and how the quota was spent, then either
                wait for the reset at the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does
                not itself consume quota. ``internal_error`` — The request was accepted and failed on our side. Next:
                Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.export(
                resource,
                format_=format_,
                columns=columns,
                state=state,
                q=q,
                county=county,
                subtype=subtype,
                category=category,
                unit_min_unit_max=unit_min_unit_max,
                year_min_year_max=year_min_year_max,
                is_claimed=is_claimed,
                mgmt=mgmt,
                chapter_topic=chapter_topic,
                sirs_on_file_elevator_delinquent=sirs_on_file_elevator_delinquent,
                milestone_status_pool_last_result=milestone_status_pool_last_result,
                has_sirs_has_elevator_cert=has_sirs_has_elevator_cert,
                fha_status=fha_status,
                min_risk_max_risk=min_risk_max_risk,
                request_options=request_options,
            ),
        )

    def export_changes(
        self,
        *,
        format_: str | None = None,
        columns: str | None = None,
        kind: str | None = None,
        state: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        since: str | None = None,
        until: str | None = None,
        min_magnitude: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ExportChangesResponse:
        """Stream the change feed as CSV or JSON: one row per observed event, with the event date, the association it
        happened to (id, name, state, county), the event type, the changed field, and person-free old/new value
        summaries. The bulk form of /api/v1/changes for loading trigger events into a warehouse or CRM instead of
        polling pages.

        **Plan:** Growth plan or higher, same as every bulk export, with the same per-tier row caps (Growth 50,000 ·
        Scale 250,000 · Enterprise 1,000,000). Your plan lookback window from the change feed still applies: the
        exported date range is clamped exactly as /api/v1/changes clamps it.

        - No officer names, ever. The export reads the same person-stripped view as /api/v1/changes: officer changes
            come back as seat counts and canonical titles, and management changes (none detected yet) as firm names.
            There is no parameter that widens this.
        - The lookback window is your plan's change-feed window, applied server-side. The row cap is the bulk-export cap
            for your tier, not the per-request /api/v1/changes cap.
        - One export = one request against your monthly quota, whatever the row count.

        Args:
            format_: "csv" (default) or "json".
            columns: Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid
                set.
            kind: Comma-separated change kinds, same vocabulary as /api/v1/changes. Omit for all kinds.
            state: Comma-separated two-letter state codes.
            county: Single county name, case-insensitive exact match.
            subtype: One of "hoa", "condo", "coop".
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not
                widen it.
            until: Latest observation date, YYYY-MM-DD.
            min_magnitude: Minimum change magnitude, 0 to 1.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``tier_not_allowed`` — The key is valid and correctly
                scoped, but the endpoint is gated to a higher plan. Bulk export is the current case: it is Growth and
                above. Next: Check your plan and the endpoint's minimum at /api/v1/meta/usage, then upgrade from
                /settings/api-keys. Per-row endpoints remain available on your current plan. ``quota_exceeded`` — The
                key has spent every request included in the current calendar month. There is no overage charge and no
                automatic top-up. Next: Call /api/v1/meta/usage to see the reset date and how the quota was spent, then
                either wait for the reset at the start of the next calendar month or upgrade the plan.
                /api/v1/meta/usage does not itself consume quota. ``internal_error`` — The request was accepted and
                failed on our side. Next: Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists
                past a few minutes, check /api/v1/meta/status and contact support with the time of the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.export_changes(
                format_=format_,
                columns=columns,
                kind=kind,
                state=state,
                county=county,
                subtype=subtype,
                since=since,
                until=until,
                min_magnitude=min_magnitude,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> BulkExportWithRawResponse:
        return self._with_raw_response


class AsyncBulkExport:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBulkExportWithRawResponse(client, server, auth)

    async def export(
        self,
        resource: str,
        *,
        format_: str | None = None,
        columns: str | None = None,
        state: str | None = None,
        q: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        category: str | None = None,
        unit_min_unit_max: float | None = None,
        year_min_year_max: float | None = None,
        is_claimed: bool | None = None,
        mgmt: str | None = None,
        chapter_topic: str | None = None,
        sirs_on_file_elevator_delinquent: bool | None = None,
        milestone_status_pool_last_result: str | None = None,
        has_sirs_has_elevator_cert: bool | None = None,
        fha_status: str | None = None,
        min_risk_max_risk: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ExportResponse:
        """Stream a full dataset as CSV or JSON, one request against your monthly quota regardless of row count.
        ``resource`` is one of associations, vendors, statutes, building-safety, or report-card. Each resource has its
        own filter parameters (narrow the export the same way you would narrow the matching list endpoint) and a
        public-safe column allowlist. report-card streams the per-association public-record signal set behind the
        Explorer — FEMA NRI county risk, SIRS on file, HUD FHA status, elevator certificates, latest pool inspection,
        24-month building permits, and IRS Form 990 revenue — keyed by organization id, name, state, and county.

        **Plan:** Growth plan or higher. Free and Builder keys receive 403 tier_not_allowed — the per-row endpoints
        above are included in every plan, but streaming a full dataset is a Growth+ capability. Per-tier row cap on a
        single export: Growth 50,000 · Scale 250,000 · Enterprise 1,000,000.

        - One export = one request against your monthly quota, whatever the row count, up to your plan's row cap.
        - The scope required depends on the resource, not the export capability itself — a key needs both the resource's
            read scope AND a Growth+ tier.
        - A source guard enforces the same public-record exclusions as every other v1 endpoint; a "columns" value that
            would expose an excluded field 400s rather than silently dropping it.
        - The first page is validated before the response starts streaming, so a bad filter or column name returns a
            clean JSON error. A failure mid-stream truncates the file — check row counts on large exports.

        Args:
            resource: One of: associations, vendors, statutes, building-safety, report-card.
            format_: "csv" (default) or "json".
            columns: Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid
                set for that resource.
            state: Two-letter state code. Every resource supports this filter.
            q: Free-text filter, meaning varies by resource (name for associations/vendors, statute text for statutes).
            county: County filter. Supported by associations, vendors, and building-safety.
            subtype: "hoa", "condo", or "coop". Supported by associations and building-safety.
            category: Vendor category slug. Vendors only.
            unit_min_unit_max: Unit count range. Associations only.
            year_min_year_max: Year-built range. Associations only.
            is_claimed: "true" or "false". Associations only.
            mgmt: Management firm name filter. Associations only.
            chapter_topic: Statutes only, same meaning as on /v1/statutes/by-state.
            sirs_on_file_elevator_delinquent: "true" or "false". Building-safety only.
            milestone_status_pool_last_result: Free-text, matches the source county/agency's own vocabulary.
                Building-safety only.
            has_sirs_has_elevator_cert: "true" or "false". Report-card only.
            fha_status: Normalized HUD decision: approved, rejected, withdrawn, expired, or other. Report-card only.
            min_risk_max_risk: FEMA NRI county risk score range. Report-card only.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``tier_not_allowed`` — The key is valid and correctly
                scoped, but the endpoint is gated to a higher plan. Bulk export is the current case: it is Growth and
                above. Next: Check your plan and the endpoint's minimum at /api/v1/meta/usage, then upgrade from
                /settings/api-keys. Per-row endpoints remain available on your current plan. ``not_found`` — The
                identifier is well-formed but matches nothing this key may see. Records excluded from the public
                directory read as absent rather than forbidden, deliberately — a 403 would confirm the row exists. Next:
                Confirm the identifier against a list or search endpoint before fetching it by id. A record that appears
                in the product but not here is outside the licensed dataset. ``quota_exceeded`` — The key has spent
                every request included in the current calendar month. There is no overage charge and no automatic
                top-up. Next: Call /api/v1/meta/usage to see the reset date and how the quota was spent, then either
                wait for the reset at the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does
                not itself consume quota. ``internal_error`` — The request was accepted and failed on our side. Next:
                Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.export(
                resource,
                format_=format_,
                columns=columns,
                state=state,
                q=q,
                county=county,
                subtype=subtype,
                category=category,
                unit_min_unit_max=unit_min_unit_max,
                year_min_year_max=year_min_year_max,
                is_claimed=is_claimed,
                mgmt=mgmt,
                chapter_topic=chapter_topic,
                sirs_on_file_elevator_delinquent=sirs_on_file_elevator_delinquent,
                milestone_status_pool_last_result=milestone_status_pool_last_result,
                has_sirs_has_elevator_cert=has_sirs_has_elevator_cert,
                fha_status=fha_status,
                min_risk_max_risk=min_risk_max_risk,
                request_options=request_options,
            ),
        )

    async def export_changes(
        self,
        *,
        format_: str | None = None,
        columns: str | None = None,
        kind: str | None = None,
        state: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        since: str | None = None,
        until: str | None = None,
        min_magnitude: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ExportChangesResponse:
        """Stream the change feed as CSV or JSON: one row per observed event, with the event date, the association it
        happened to (id, name, state, county), the event type, the changed field, and person-free old/new value
        summaries. The bulk form of /api/v1/changes for loading trigger events into a warehouse or CRM instead of
        polling pages.

        **Plan:** Growth plan or higher, same as every bulk export, with the same per-tier row caps (Growth 50,000 ·
        Scale 250,000 · Enterprise 1,000,000). Your plan lookback window from the change feed still applies: the
        exported date range is clamped exactly as /api/v1/changes clamps it.

        - No officer names, ever. The export reads the same person-stripped view as /api/v1/changes: officer changes
            come back as seat counts and canonical titles, and management changes (none detected yet) as firm names.
            There is no parameter that widens this.
        - The lookback window is your plan's change-feed window, applied server-side. The row cap is the bulk-export cap
            for your tier, not the per-request /api/v1/changes cap.
        - One export = one request against your monthly quota, whatever the row count.

        Args:
            format_: "csv" (default) or "json".
            columns: Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid
                set.
            kind: Comma-separated change kinds, same vocabulary as /api/v1/changes. Omit for all kinds.
            state: Comma-separated two-letter state codes.
            county: Single county name, case-insensitive exact match.
            subtype: One of "hoa", "condo", "coop".
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not
                widen it.
            until: Latest observation date, YYYY-MM-DD.
            min_magnitude: Minimum change magnitude, 0 to 1.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``tier_not_allowed`` — The key is valid and correctly
                scoped, but the endpoint is gated to a higher plan. Bulk export is the current case: it is Growth and
                above. Next: Check your plan and the endpoint's minimum at /api/v1/meta/usage, then upgrade from
                /settings/api-keys. Per-row endpoints remain available on your current plan. ``quota_exceeded`` — The
                key has spent every request included in the current calendar month. There is no overage charge and no
                automatic top-up. Next: Call /api/v1/meta/usage to see the reset date and how the quota was spent, then
                either wait for the reset at the start of the next calendar month or upgrade the plan.
                /api/v1/meta/usage does not itself consume quota. ``internal_error`` — The request was accepted and
                failed on our side. Next: Retry with exponential backoff (1s, 2s, 4s, up to about 30s). If it persists
                past a few minutes, check /api/v1/meta/status and contact support with the time of the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.export_changes(
                format_=format_,
                columns=columns,
                kind=kind,
                state=state,
                county=county,
                subtype=subtype,
                since=since,
                until=until,
                min_magnitude=min_magnitude,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBulkExportWithRawResponse:
        return self._with_raw_response


class BulkExportWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def export(
        self,
        resource: str,
        *,
        format_: str | None = None,
        columns: str | None = None,
        state: str | None = None,
        q: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        category: str | None = None,
        unit_min_unit_max: float | None = None,
        year_min_year_max: float | None = None,
        is_claimed: bool | None = None,
        mgmt: str | None = None,
        chapter_topic: str | None = None,
        sirs_on_file_elevator_delinquent: bool | None = None,
        milestone_status_pool_last_result: str | None = None,
        has_sirs_has_elevator_cert: bool | None = None,
        fha_status: str | None = None,
        min_risk_max_risk: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExportResponse, ExportErrorBody]:
        """Stream a full dataset as CSV or JSON, one request against your monthly quota regardless of row count.
        ``resource`` is one of associations, vendors, statutes, building-safety, or report-card. Each resource has its
        own filter parameters (narrow the export the same way you would narrow the matching list endpoint) and a
        public-safe column allowlist. report-card streams the per-association public-record signal set behind the
        Explorer — FEMA NRI county risk, SIRS on file, HUD FHA status, elevator certificates, latest pool inspection,
        24-month building permits, and IRS Form 990 revenue — keyed by organization id, name, state, and county.

        **Plan:** Growth plan or higher. Free and Builder keys receive 403 tier_not_allowed — the per-row endpoints
        above are included in every plan, but streaming a full dataset is a Growth+ capability. Per-tier row cap on a
        single export: Growth 50,000 · Scale 250,000 · Enterprise 1,000,000.

        - One export = one request against your monthly quota, whatever the row count, up to your plan's row cap.
        - The scope required depends on the resource, not the export capability itself — a key needs both the resource's
            read scope AND a Growth+ tier.
        - A source guard enforces the same public-record exclusions as every other v1 endpoint; a "columns" value that
            would expose an excluded field 400s rather than silently dropping it.
        - The first page is validated before the response starts streaming, so a bad filter or column name returns a
            clean JSON error. A failure mid-stream truncates the file — check row counts on large exports.

        Args:
            resource: One of: associations, vendors, statutes, building-safety, report-card.
            format_: "csv" (default) or "json".
            columns: Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid
                set for that resource.
            state: Two-letter state code. Every resource supports this filter.
            q: Free-text filter, meaning varies by resource (name for associations/vendors, statute text for statutes).
            county: County filter. Supported by associations, vendors, and building-safety.
            subtype: "hoa", "condo", or "coop". Supported by associations and building-safety.
            category: Vendor category slug. Vendors only.
            unit_min_unit_max: Unit count range. Associations only.
            year_min_year_max: Year-built range. Associations only.
            is_claimed: "true" or "false". Associations only.
            mgmt: Management firm name filter. Associations only.
            chapter_topic: Statutes only, same meaning as on /v1/statutes/by-state.
            sirs_on_file_elevator_delinquent: "true" or "false". Building-safety only.
            milestone_status_pool_last_result: Free-text, matches the source county/agency's own vocabulary.
                Building-safety only.
            has_sirs_has_elevator_cert: "true" or "false". Report-card only.
            fha_status: Normalized HUD decision: approved, rejected, withdrawn, expired, or other. Report-card only.
            min_risk_max_risk: FEMA NRI county risk score range. Report-card only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/export/{resource}"),
            path_params=[param[str]("resource", resource)],
            query_params=[
                param[str | None]("format", format_),
                param[str | None]("columns", columns),
                param[str | None]("state", state),
                param[str | None]("q", q),
                param[str | None]("county", county),
                param[str | None]("subtype", subtype),
                param[str | None]("category", category),
                param[float | None]("unit_min / unit_max", unit_min_unit_max),
                param[float | None]("year_min / year_max", year_min_year_max),
                param[bool | None]("is_claimed", is_claimed),
                param[str | None]("mgmt", mgmt),
                param[str | None]("chapter / topic", chapter_topic),
                param[bool | None]("sirs_on_file / elevator_delinquent", sirs_on_file_elevator_delinquent),
                param[str | None]("milestone_status / pool_last_result", milestone_status_pool_last_result),
                param[bool | None]("has_sirs / has_elevator_cert", has_sirs_has_elevator_cert),
                param[str | None]("fha_status", fha_status),
                param[float | None]("min_risk / max_risk", min_risk_max_risk),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ExportResponse],
            error_mapper=export_error_mapper,
            request_options=request_options,
        )

    def export_changes(
        self,
        *,
        format_: str | None = None,
        columns: str | None = None,
        kind: str | None = None,
        state: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        since: str | None = None,
        until: str | None = None,
        min_magnitude: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExportChangesResponse, ExportChangesErrorBody]:
        """Stream the change feed as CSV or JSON: one row per observed event, with the event date, the association it
        happened to (id, name, state, county), the event type, the changed field, and person-free old/new value
        summaries. The bulk form of /api/v1/changes for loading trigger events into a warehouse or CRM instead of
        polling pages.

        **Plan:** Growth plan or higher, same as every bulk export, with the same per-tier row caps (Growth 50,000 ·
        Scale 250,000 · Enterprise 1,000,000). Your plan lookback window from the change feed still applies: the
        exported date range is clamped exactly as /api/v1/changes clamps it.

        - No officer names, ever. The export reads the same person-stripped view as /api/v1/changes: officer changes
            come back as seat counts and canonical titles, and management changes (none detected yet) as firm names.
            There is no parameter that widens this.
        - The lookback window is your plan's change-feed window, applied server-side. The row cap is the bulk-export cap
            for your tier, not the per-request /api/v1/changes cap.
        - One export = one request against your monthly quota, whatever the row count.

        Args:
            format_: "csv" (default) or "json".
            columns: Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid
                set.
            kind: Comma-separated change kinds, same vocabulary as /api/v1/changes. Omit for all kinds.
            state: Comma-separated two-letter state codes.
            county: Single county name, case-insensitive exact match.
            subtype: One of "hoa", "condo", "coop".
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not
                widen it.
            until: Latest observation date, YYYY-MM-DD.
            min_magnitude: Minimum change magnitude, 0 to 1.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/export/changes"),
            query_params=[
                param[str | None]("format", format_),
                param[str | None]("columns", columns),
                param[str | None]("kind", kind),
                param[str | None]("state", state),
                param[str | None]("county", county),
                param[str | None]("subtype", subtype),
                param[str | None]("since", since),
                param[str | None]("until", until),
                param[float | None]("min_magnitude", min_magnitude),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ExportChangesResponse],
            error_mapper=export_changes_error_mapper,
            request_options=request_options,
        )


class AsyncBulkExportWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def export(
        self,
        resource: str,
        *,
        format_: str | None = None,
        columns: str | None = None,
        state: str | None = None,
        q: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        category: str | None = None,
        unit_min_unit_max: float | None = None,
        year_min_year_max: float | None = None,
        is_claimed: bool | None = None,
        mgmt: str | None = None,
        chapter_topic: str | None = None,
        sirs_on_file_elevator_delinquent: bool | None = None,
        milestone_status_pool_last_result: str | None = None,
        has_sirs_has_elevator_cert: bool | None = None,
        fha_status: str | None = None,
        min_risk_max_risk: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExportResponse, ExportErrorBody]:
        """Stream a full dataset as CSV or JSON, one request against your monthly quota regardless of row count.
        ``resource`` is one of associations, vendors, statutes, building-safety, or report-card. Each resource has its
        own filter parameters (narrow the export the same way you would narrow the matching list endpoint) and a
        public-safe column allowlist. report-card streams the per-association public-record signal set behind the
        Explorer — FEMA NRI county risk, SIRS on file, HUD FHA status, elevator certificates, latest pool inspection,
        24-month building permits, and IRS Form 990 revenue — keyed by organization id, name, state, and county.

        **Plan:** Growth plan or higher. Free and Builder keys receive 403 tier_not_allowed — the per-row endpoints
        above are included in every plan, but streaming a full dataset is a Growth+ capability. Per-tier row cap on a
        single export: Growth 50,000 · Scale 250,000 · Enterprise 1,000,000.

        - One export = one request against your monthly quota, whatever the row count, up to your plan's row cap.
        - The scope required depends on the resource, not the export capability itself — a key needs both the resource's
            read scope AND a Growth+ tier.
        - A source guard enforces the same public-record exclusions as every other v1 endpoint; a "columns" value that
            would expose an excluded field 400s rather than silently dropping it.
        - The first page is validated before the response starts streaming, so a bad filter or column name returns a
            clean JSON error. A failure mid-stream truncates the file — check row counts on large exports.

        Args:
            resource: One of: associations, vendors, statutes, building-safety, report-card.
            format_: "csv" (default) or "json".
            columns: Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid
                set for that resource.
            state: Two-letter state code. Every resource supports this filter.
            q: Free-text filter, meaning varies by resource (name for associations/vendors, statute text for statutes).
            county: County filter. Supported by associations, vendors, and building-safety.
            subtype: "hoa", "condo", or "coop". Supported by associations and building-safety.
            category: Vendor category slug. Vendors only.
            unit_min_unit_max: Unit count range. Associations only.
            year_min_year_max: Year-built range. Associations only.
            is_claimed: "true" or "false". Associations only.
            mgmt: Management firm name filter. Associations only.
            chapter_topic: Statutes only, same meaning as on /v1/statutes/by-state.
            sirs_on_file_elevator_delinquent: "true" or "false". Building-safety only.
            milestone_status_pool_last_result: Free-text, matches the source county/agency's own vocabulary.
                Building-safety only.
            has_sirs_has_elevator_cert: "true" or "false". Report-card only.
            fha_status: Normalized HUD decision: approved, rejected, withdrawn, expired, or other. Report-card only.
            min_risk_max_risk: FEMA NRI county risk score range. Report-card only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/export/{resource}"),
            path_params=[param[str]("resource", resource)],
            query_params=[
                param[str | None]("format", format_),
                param[str | None]("columns", columns),
                param[str | None]("state", state),
                param[str | None]("q", q),
                param[str | None]("county", county),
                param[str | None]("subtype", subtype),
                param[str | None]("category", category),
                param[float | None]("unit_min / unit_max", unit_min_unit_max),
                param[float | None]("year_min / year_max", year_min_year_max),
                param[bool | None]("is_claimed", is_claimed),
                param[str | None]("mgmt", mgmt),
                param[str | None]("chapter / topic", chapter_topic),
                param[bool | None]("sirs_on_file / elevator_delinquent", sirs_on_file_elevator_delinquent),
                param[str | None]("milestone_status / pool_last_result", milestone_status_pool_last_result),
                param[bool | None]("has_sirs / has_elevator_cert", has_sirs_has_elevator_cert),
                param[str | None]("fha_status", fha_status),
                param[float | None]("min_risk / max_risk", min_risk_max_risk),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ExportResponse],
            error_mapper=export_error_mapper,
            request_options=request_options,
        )

    async def export_changes(
        self,
        *,
        format_: str | None = None,
        columns: str | None = None,
        kind: str | None = None,
        state: str | None = None,
        county: str | None = None,
        subtype: str | None = None,
        since: str | None = None,
        until: str | None = None,
        min_magnitude: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ExportChangesResponse, ExportChangesErrorBody]:
        """Stream the change feed as CSV or JSON: one row per observed event, with the event date, the association it
        happened to (id, name, state, county), the event type, the changed field, and person-free old/new value
        summaries. The bulk form of /api/v1/changes for loading trigger events into a warehouse or CRM instead of
        polling pages.

        **Plan:** Growth plan or higher, same as every bulk export, with the same per-tier row caps (Growth 50,000 ·
        Scale 250,000 · Enterprise 1,000,000). Your plan lookback window from the change feed still applies: the
        exported date range is clamped exactly as /api/v1/changes clamps it.

        - No officer names, ever. The export reads the same person-stripped view as /api/v1/changes: officer changes
            come back as seat counts and canonical titles, and management changes (none detected yet) as firm names.
            There is no parameter that widens this.
        - The lookback window is your plan's change-feed window, applied server-side. The row cap is the bulk-export cap
            for your tier, not the per-request /api/v1/changes cap.
        - One export = one request against your monthly quota, whatever the row count.

        Args:
            format_: "csv" (default) or "json".
            columns: Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid
                set.
            kind: Comma-separated change kinds, same vocabulary as /api/v1/changes. Omit for all kinds.
            state: Comma-separated two-letter state codes.
            county: Single county name, case-insensitive exact match.
            subtype: One of "hoa", "condo", "coop".
            since: Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not
                widen it.
            until: Latest observation date, YYYY-MM-DD.
            min_magnitude: Minimum change magnitude, 0 to 1.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/export/changes"),
            query_params=[
                param[str | None]("format", format_),
                param[str | None]("columns", columns),
                param[str | None]("kind", kind),
                param[str | None]("state", state),
                param[str | None]("county", county),
                param[str | None]("subtype", subtype),
                param[str | None]("since", since),
                param[str | None]("until", until),
                param[float | None]("min_magnitude", min_magnitude),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ExportChangesResponse],
            error_mapper=export_changes_error_mapper,
            request_options=request_options,
        )
