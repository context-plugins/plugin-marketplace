from __future__ import annotations

from uuid import UUID

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
from ..errors.resource_association_documents_error import (
    ResourceAssociationDocumentsErrorBody,
    resource_association_documents_error_mapper,
)
from ..errors.resource_association_financials_error import (
    ResourceAssociationFinancialsErrorBody,
    resource_association_financials_error_mapper,
)
from ..errors.resource_association_governance_error import (
    ResourceAssociationGovernanceErrorBody,
    resource_association_governance_error_mapper,
)
from ..errors.resource_association_hazards_error import (
    ResourceAssociationHazardsErrorBody,
    resource_association_hazards_error_mapper,
)
from ..errors.resource_association_insurance_error import (
    ResourceAssociationInsuranceErrorBody,
    resource_association_insurance_error_mapper,
)
from ..errors.resource_association_legal_error import (
    ResourceAssociationLegalErrorBody,
    resource_association_legal_error_mapper,
)
from ..errors.resource_association_parcels_error import (
    ResourceAssociationParcelsErrorBody,
    resource_association_parcels_error_mapper,
)
from ..errors.resource_association_permits_error import (
    ResourceAssociationPermitsErrorBody,
    resource_association_permits_error_mapper,
)
from ..errors.resource_association_structures_error import (
    ResourceAssociationStructuresErrorBody,
    resource_association_structures_error_mapper,
)
from ..errors.resource_association_violations_error import (
    ResourceAssociationViolationsErrorBody,
    resource_association_violations_error_mapper,
)
from ..models.api_v1_associations_documents_response import ApiV1AssociationsDocumentsResponse
from ..models.api_v1_associations_financials_response import ApiV1AssociationsFinancialsResponse
from ..models.api_v1_associations_governance_response import ApiV1AssociationsGovernanceResponse
from ..models.api_v1_associations_hazards_response import ApiV1AssociationsHazardsResponse
from ..models.api_v1_associations_insurance_response import ApiV1AssociationsInsuranceResponse
from ..models.api_v1_associations_legal_response import ApiV1AssociationsLegalResponse
from ..models.api_v1_associations_parcels_response import ApiV1AssociationsParcelsResponse
from ..models.api_v1_associations_permits_response import ApiV1AssociationsPermitsResponse
from ..models.api_v1_associations_structures_response import ApiV1AssociationsStructuresResponse
from ..models.api_v1_associations_violations_response import ApiV1AssociationsViolationsResponse
from ..server.server import Server


class AssociationResources:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AssociationResourcesWithRawResponse(client, server, auth)

    def resource_association_documents(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsDocumentsResponse:
        """Governing and recorded documents held for the association, with their source and recording date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_documents(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    def resource_association_financials(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsFinancialsResponse:
        """Financial public record for the association, including IRS Form 990 filings where it files one. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_financials(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    def resource_association_governance(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsGovernanceResponse:
        """Governance record for the association: filings, officers over time, and registered agent history. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_governance(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    def resource_association_hazards(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsHazardsResponse:
        """Natural-hazard exposure for the association's location: recorded storm events and county-level risk. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_hazards(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    def resource_association_insurance(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsInsuranceResponse:
        """Insurance-side public record touching the association, including coverage and carrier filings where
        published. Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_insurance(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    def resource_association_legal(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsLegalResponse:
        """Litigation and legal history recorded against the association, and the counsel of record where published.
        Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_legal(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    def resource_association_parcels(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsParcelsResponse:
        """County parcel records matched to the association: the physical footprint behind the corporate record. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_parcels(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    def resource_association_permits(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsPermitsResponse:
        """Municipal building permits recorded against the association, with work type, value and date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_permits(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    def resource_association_structures(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsStructuresResponse:
        """Building footprints and recorded structural characteristics for the association's buildings. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_structures(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    def resource_association_violations(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsViolationsResponse:
        """Code enforcement cases recorded against the association by the local jurisdiction. Live description,
        provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            self._with_raw_response.resource_association_violations(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AssociationResourcesWithRawResponse:
        return self._with_raw_response


class AsyncAssociationResources:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAssociationResourcesWithRawResponse(client, server, auth)

    async def resource_association_documents(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsDocumentsResponse:
        """Governing and recorded documents held for the association, with their source and recording date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_documents(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    async def resource_association_financials(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsFinancialsResponse:
        """Financial public record for the association, including IRS Form 990 filings where it files one. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_financials(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    async def resource_association_governance(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsGovernanceResponse:
        """Governance record for the association: filings, officers over time, and registered agent history. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_governance(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    async def resource_association_hazards(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsHazardsResponse:
        """Natural-hazard exposure for the association's location: recorded storm events and county-level risk. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_hazards(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    async def resource_association_insurance(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsInsuranceResponse:
        """Insurance-side public record touching the association, including coverage and carrier filings where
        published. Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_insurance(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    async def resource_association_legal(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsLegalResponse:
        """Litigation and legal history recorded against the association, and the counsel of record where published.
        Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_legal(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    async def resource_association_parcels(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsParcelsResponse:
        """County parcel records matched to the association: the physical footprint behind the corporate record. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_parcels(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    async def resource_association_permits(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsPermitsResponse:
        """Municipal building permits recorded against the association, with work type, value and date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_permits(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    async def resource_association_structures(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsStructuresResponse:
        """Building footprints and recorded structural characteristics for the association's buildings. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_structures(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    async def resource_association_violations(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsViolationsResponse:
        """Code enforcement cases recorded against the association by the local jurisdiction. Live description,
        provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
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
            await self._with_raw_response.resource_association_violations(
                id_,
                limit=limit,
                offset=offset,
                source=source,
                since=since,
                until=until,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAssociationResourcesWithRawResponse:
        return self._with_raw_response


class AssociationResourcesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def resource_association_documents(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsDocumentsResponse, ResourceAssociationDocumentsErrorBody]:
        """Governing and recorded documents held for the association, with their source and recording date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/documents"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsDocumentsResponse],
            error_mapper=resource_association_documents_error_mapper,
            request_options=request_options,
        )

    def resource_association_financials(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsFinancialsResponse, ResourceAssociationFinancialsErrorBody]:
        """Financial public record for the association, including IRS Form 990 filings where it files one. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/financials"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsFinancialsResponse],
            error_mapper=resource_association_financials_error_mapper,
            request_options=request_options,
        )

    def resource_association_governance(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsGovernanceResponse, ResourceAssociationGovernanceErrorBody]:
        """Governance record for the association: filings, officers over time, and registered agent history. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/governance"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsGovernanceResponse],
            error_mapper=resource_association_governance_error_mapper,
            request_options=request_options,
        )

    def resource_association_hazards(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsHazardsResponse, ResourceAssociationHazardsErrorBody]:
        """Natural-hazard exposure for the association's location: recorded storm events and county-level risk. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/hazards"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsHazardsResponse],
            error_mapper=resource_association_hazards_error_mapper,
            request_options=request_options,
        )

    def resource_association_insurance(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsInsuranceResponse, ResourceAssociationInsuranceErrorBody]:
        """Insurance-side public record touching the association, including coverage and carrier filings where
        published. Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/insurance"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsInsuranceResponse],
            error_mapper=resource_association_insurance_error_mapper,
            request_options=request_options,
        )

    def resource_association_legal(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsLegalResponse, ResourceAssociationLegalErrorBody]:
        """Litigation and legal history recorded against the association, and the counsel of record where published.
        Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/legal"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsLegalResponse],
            error_mapper=resource_association_legal_error_mapper,
            request_options=request_options,
        )

    def resource_association_parcels(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsParcelsResponse, ResourceAssociationParcelsErrorBody]:
        """County parcel records matched to the association: the physical footprint behind the corporate record. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/parcels"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsParcelsResponse],
            error_mapper=resource_association_parcels_error_mapper,
            request_options=request_options,
        )

    def resource_association_permits(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsPermitsResponse, ResourceAssociationPermitsErrorBody]:
        """Municipal building permits recorded against the association, with work type, value and date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/permits"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsPermitsResponse],
            error_mapper=resource_association_permits_error_mapper,
            request_options=request_options,
        )

    def resource_association_structures(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsStructuresResponse, ResourceAssociationStructuresErrorBody]:
        """Building footprints and recorded structural characteristics for the association's buildings. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/structures"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsStructuresResponse],
            error_mapper=resource_association_structures_error_mapper,
            request_options=request_options,
        )

    def resource_association_violations(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsViolationsResponse, ResourceAssociationViolationsErrorBody]:
        """Code enforcement cases recorded against the association by the local jurisdiction. Live description,
        provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/violations"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsViolationsResponse],
            error_mapper=resource_association_violations_error_mapper,
            request_options=request_options,
        )


class AsyncAssociationResourcesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def resource_association_documents(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsDocumentsResponse, ResourceAssociationDocumentsErrorBody]:
        """Governing and recorded documents held for the association, with their source and recording date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/documents"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsDocumentsResponse],
            error_mapper=resource_association_documents_error_mapper,
            request_options=request_options,
        )

    async def resource_association_financials(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsFinancialsResponse, ResourceAssociationFinancialsErrorBody]:
        """Financial public record for the association, including IRS Form 990 filings where it files one. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/financials"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsFinancialsResponse],
            error_mapper=resource_association_financials_error_mapper,
            request_options=request_options,
        )

    async def resource_association_governance(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsGovernanceResponse, ResourceAssociationGovernanceErrorBody]:
        """Governance record for the association: filings, officers over time, and registered agent history. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/governance"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsGovernanceResponse],
            error_mapper=resource_association_governance_error_mapper,
            request_options=request_options,
        )

    async def resource_association_hazards(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsHazardsResponse, ResourceAssociationHazardsErrorBody]:
        """Natural-hazard exposure for the association's location: recorded storm events and county-level risk. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/hazards"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsHazardsResponse],
            error_mapper=resource_association_hazards_error_mapper,
            request_options=request_options,
        )

    async def resource_association_insurance(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsInsuranceResponse, ResourceAssociationInsuranceErrorBody]:
        """Insurance-side public record touching the association, including coverage and carrier filings where
        published. Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/insurance"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsInsuranceResponse],
            error_mapper=resource_association_insurance_error_mapper,
            request_options=request_options,
        )

    async def resource_association_legal(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsLegalResponse, ResourceAssociationLegalErrorBody]:
        """Litigation and legal history recorded against the association, and the counsel of record where published.
        Live description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/legal"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsLegalResponse],
            error_mapper=resource_association_legal_error_mapper,
            request_options=request_options,
        )

    async def resource_association_parcels(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsParcelsResponse, ResourceAssociationParcelsErrorBody]:
        """County parcel records matched to the association: the physical footprint behind the corporate record. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/parcels"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsParcelsResponse],
            error_mapper=resource_association_parcels_error_mapper,
            request_options=request_options,
        )

    async def resource_association_permits(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsPermitsResponse, ResourceAssociationPermitsErrorBody]:
        """Municipal building permits recorded against the association, with work type, value and date. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/permits"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsPermitsResponse],
            error_mapper=resource_association_permits_error_mapper,
            request_options=request_options,
        )

    async def resource_association_structures(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsStructuresResponse, ResourceAssociationStructuresErrorBody]:
        """Building footprints and recorded structural characteristics for the association's buildings. Live
        description, provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/structures"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsStructuresResponse],
            error_mapper=resource_association_structures_error_mapper,
            request_options=request_options,
        )

    async def resource_association_violations(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        source: str | None = None,
        since: Date | None = None,
        until: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsViolationsResponse, ResourceAssociationViolationsErrorBody]:
        """Code enforcement cases recorded against the association by the local jurisdiction. Live description,
        provenance and coverage caveat come from /api/v1/datasets.

        **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan so the size of
        what is behind the gate is visible.

        - Read ``meta.coverage`` before treating an empty result as an absence. A resource can return zero rows because
            nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The
            coverage caveat says which.

        Args:
            id_: Association id.
            limit: Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only
                lower this; the response's ``meta`` block reports what was actually applied.
            offset: Pagination offset, 0-100000 (default 0).
            source: Narrow the read to one physical source behind the resource, e.g. ``parcels.fl``. Source keys are
                listed by /api/v1/datasets.
            since: Only records on or after this ISO date (YYYY-MM-DD).
            until: Only records on or before this ISO date (YYYY-MM-DD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/violations"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
                param[str | None]("source", source),
                param[Date | None]("since", since),
                param[Date | None]("until", until),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsViolationsResponse],
            error_mapper=resource_association_violations_error_mapper,
            request_options=request_options,
        )
