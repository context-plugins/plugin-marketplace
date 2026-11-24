from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.resource_collection_complaints_error import (
    ResourceCollectionComplaintsErrorBody,
    resource_collection_complaints_error_mapper,
)
from ..errors.resource_collection_insurance_carriers_error import (
    ResourceCollectionInsuranceCarriersErrorBody,
    resource_collection_insurance_carriers_error_mapper,
)
from ..errors.resource_collection_legal_cases_error import (
    ResourceCollectionLegalCasesErrorBody,
    resource_collection_legal_cases_error_mapper,
)
from ..errors.resource_collection_rate_filings_error import (
    ResourceCollectionRateFilingsErrorBody,
    resource_collection_rate_filings_error_mapper,
)
from ..errors.resource_collection_storm_events_error import (
    ResourceCollectionStormEventsErrorBody,
    resource_collection_storm_events_error_mapper,
)
from ..models.api_v1_complaints_response import ApiV1ComplaintsResponse
from ..models.api_v1_insurance_carriers_response import ApiV1InsuranceCarriersResponse
from ..models.api_v1_insurance_rate_filings_response import ApiV1InsuranceRateFilingsResponse
from ..models.api_v1_legal_cases_response import ApiV1LegalCasesResponse
from ..models.api_v1_storm_events_response import ApiV1StormEventsResponse
from ..server.server import Server


class CrossAssociationCollections:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CrossAssociationCollectionsWithRawResponse(client, server, auth)

    def resource_collection_complaints(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ComplaintsResponse:
        """CFPB consumer complaints against mortgage servicers, banks and debt collectors, as market context for an
        association's counterparties. Not a record about the association. Live description, provenance and coverage
        caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            self._with_raw_response.resource_collection_complaints(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    def resource_collection_insurance_carriers(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1InsuranceCarriersResponse:
        """Carriers writing in the association market, by state, with their filings and market presence. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            self._with_raw_response.resource_collection_insurance_carriers(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    def resource_collection_legal_cases(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1LegalCasesResponse:
        """Litigation involving community associations across the corpus, filterable by state and date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            self._with_raw_response.resource_collection_legal_cases(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    def resource_collection_rate_filings(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1InsuranceRateFilingsResponse:
        """Insurance rate filings by carrier and state: what carriers asked for, and when. Live description, provenance
        and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            self._with_raw_response.resource_collection_rate_filings(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    def resource_collection_storm_events(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1StormEventsResponse:
        """NOAA storm events by county and date. The hazard history behind an association's exposure, queryable across
        the whole corpus. Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            self._with_raw_response.resource_collection_storm_events(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CrossAssociationCollectionsWithRawResponse:
        return self._with_raw_response


class AsyncCrossAssociationCollections:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCrossAssociationCollectionsWithRawResponse(client, server, auth)

    async def resource_collection_complaints(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ComplaintsResponse:
        """CFPB consumer complaints against mortgage servicers, banks and debt collectors, as market context for an
        association's counterparties. Not a record about the association. Live description, provenance and coverage
        caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            await self._with_raw_response.resource_collection_complaints(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    async def resource_collection_insurance_carriers(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1InsuranceCarriersResponse:
        """Carriers writing in the association market, by state, with their filings and market presence. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            await self._with_raw_response.resource_collection_insurance_carriers(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    async def resource_collection_legal_cases(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1LegalCasesResponse:
        """Litigation involving community associations across the corpus, filterable by state and date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            await self._with_raw_response.resource_collection_legal_cases(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    async def resource_collection_rate_filings(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1InsuranceRateFilingsResponse:
        """Insurance rate filings by carrier and state: what carriers asked for, and when. Live description, provenance
        and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            await self._with_raw_response.resource_collection_rate_filings(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    async def resource_collection_storm_events(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1StormEventsResponse:
        """NOAA storm events by county and date. The hazard history behind an association's exposure, queryable across
        the whole corpus. Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
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
            await self._with_raw_response.resource_collection_storm_events(
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                state=state,
                county_fips=county_fips,
                jurisdiction=jurisdiction,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCrossAssociationCollectionsWithRawResponse:
        return self._with_raw_response


class CrossAssociationCollectionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def resource_collection_complaints(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ComplaintsResponse, ResourceCollectionComplaintsErrorBody]:
        """CFPB consumer complaints against mortgage servicers, banks and debt collectors, as market context for an
        association's counterparties. Not a record about the association. Live description, provenance and coverage
        caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/complaints"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ComplaintsResponse],
            error_mapper=resource_collection_complaints_error_mapper,
            request_options=request_options,
        )

    def resource_collection_insurance_carriers(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1InsuranceCarriersResponse, ResourceCollectionInsuranceCarriersErrorBody]:
        """Carriers writing in the association market, by state, with their filings and market presence. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/insurance/carriers"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1InsuranceCarriersResponse],
            error_mapper=resource_collection_insurance_carriers_error_mapper,
            request_options=request_options,
        )

    def resource_collection_legal_cases(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1LegalCasesResponse, ResourceCollectionLegalCasesErrorBody]:
        """Litigation involving community associations across the corpus, filterable by state and date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/legal/cases"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1LegalCasesResponse],
            error_mapper=resource_collection_legal_cases_error_mapper,
            request_options=request_options,
        )

    def resource_collection_rate_filings(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1InsuranceRateFilingsResponse, ResourceCollectionRateFilingsErrorBody]:
        """Insurance rate filings by carrier and state: what carriers asked for, and when. Live description, provenance
        and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/insurance/rate-filings"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1InsuranceRateFilingsResponse],
            error_mapper=resource_collection_rate_filings_error_mapper,
            request_options=request_options,
        )

    def resource_collection_storm_events(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StormEventsResponse, ResourceCollectionStormEventsErrorBody]:
        """NOAA storm events by county and date. The hazard history behind an association's exposure, queryable across
        the whole corpus. Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/storm-events"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1StormEventsResponse],
            error_mapper=resource_collection_storm_events_error_mapper,
            request_options=request_options,
        )


class AsyncCrossAssociationCollectionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def resource_collection_complaints(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ComplaintsResponse, ResourceCollectionComplaintsErrorBody]:
        """CFPB consumer complaints against mortgage servicers, banks and debt collectors, as market context for an
        association's counterparties. Not a record about the association. Live description, provenance and coverage
        caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/complaints"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ComplaintsResponse],
            error_mapper=resource_collection_complaints_error_mapper,
            request_options=request_options,
        )

    async def resource_collection_insurance_carriers(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1InsuranceCarriersResponse, ResourceCollectionInsuranceCarriersErrorBody]:
        """Carriers writing in the association market, by state, with their filings and market presence. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/insurance/carriers"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1InsuranceCarriersResponse],
            error_mapper=resource_collection_insurance_carriers_error_mapper,
            request_options=request_options,
        )

    async def resource_collection_legal_cases(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1LegalCasesResponse, ResourceCollectionLegalCasesErrorBody]:
        """Litigation involving community associations across the corpus, filterable by state and date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/legal/cases"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1LegalCasesResponse],
            error_mapper=resource_collection_legal_cases_error_mapper,
            request_options=request_options,
        )

    async def resource_collection_rate_filings(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1InsuranceRateFilingsResponse, ResourceCollectionRateFilingsErrorBody]:
        """Insurance rate filings by carrier and state: what carriers asked for, and when. Live description, provenance
        and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/insurance/rate-filings"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1InsuranceRateFilingsResponse],
            error_mapper=resource_collection_rate_filings_error_mapper,
            request_options=request_options,
        )

    async def resource_collection_storm_events(
        self,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        state: str | None = None,
        county_fips: str | None = None,
        jurisdiction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StormEventsResponse, ResourceCollectionStormEventsErrorBody]:
        """NOAA storm events by county and date. The hazard history behind an association's exposure, queryable across
        the whole corpus. Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.

        - A cross-association collection requires at least one indexed filter. Without one the request is refused with a
            400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.
        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            state: Two-letter state code.
            county_fips: Five-digit county FIPS code.
            jurisdiction: Jurisdiction name as published by the source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/storm-events"),
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
                param[str | None]("state", state),
                param[str | None]("county_fips", county_fips),
                param[str | None]("jurisdiction", jurisdiction),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1StormEventsResponse],
            error_mapper=resource_collection_storm_events_error_mapper,
            request_options=request_options,
        )
