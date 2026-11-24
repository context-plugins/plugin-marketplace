from __future__ import annotations

from uuid import UUID

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
from ..errors.associations_building_safety_error import (
    AssociationsBuildingSafetyErrorBody,
    associations_building_safety_error_mapper,
)
from ..errors.associations_buildings_error import AssociationsBuildingsErrorBody, associations_buildings_error_mapper
from ..errors.associations_by_address_error import AssociationsByAddressErrorBody, associations_by_address_error_mapper
from ..errors.associations_detail_error import AssociationsDetailErrorBody, associations_detail_error_mapper
from ..errors.associations_lookup_error import AssociationsLookupErrorBody, associations_lookup_error_mapper
from ..errors.associations_management_error import AssociationsManagementErrorBody, associations_management_error_mapper
from ..errors.associations_match_error import AssociationsMatchErrorBody, associations_match_error_mapper
from ..errors.associations_nearby_error import AssociationsNearbyErrorBody, associations_nearby_error_mapper
from ..errors.associations_officers_error import AssociationsOfficersErrorBody, associations_officers_error_mapper
from ..errors.associations_risk_error import AssociationsRiskErrorBody, associations_risk_error_mapper
from ..errors.associations_vendors_error import AssociationsVendorsErrorBody, associations_vendors_error_mapper
from ..models.api_v1_associations_building_safety_response import ApiV1AssociationsBuildingSafetyResponse
from ..models.api_v1_associations_buildings_response import ApiV1AssociationsBuildingsResponse
from ..models.api_v1_associations_by_address_response import ApiV1AssociationsByAddressResponse
from ..models.api_v1_associations_lookup_response import ApiV1AssociationsLookupResponse
from ..models.api_v1_associations_management_response import ApiV1AssociationsManagementResponse
from ..models.api_v1_associations_match_response import ApiV1AssociationsMatchResponse
from ..models.api_v1_associations_nearby_response import ApiV1AssociationsNearbyResponse
from ..models.api_v1_associations_officers_response import ApiV1AssociationsOfficersResponse
from ..models.api_v1_associations_response import ApiV1AssociationsResponse
from ..models.api_v1_associations_risk_response import ApiV1AssociationsRiskResponse
from ..models.api_v1_associations_vendors_response import ApiV1AssociationsVendorsResponse
from ..server.server import Server


class Associations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AssociationsWithRawResponse(client, server, auth)

    def associations_building_safety(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsBuildingSafetyResponse:
        """Everything on public record about an association’s physical buildings, joined into one call: Florida SIRS
        filings, county milestone/recertification rolls, elevator certificates, pool inspections, parcel building
        characteristics, and HUD FHA condo approval. The structural sibling of the risk endpoint, which reports
        county-level FEMA hazard instead.

        - Coverage is uneven by design: county recertification rolls are Miami-Dade and Broward only, SIRS is Florida
            condo, HUD FHA is national. Branch on has_data and layer_counts. An absent record means nothing was filed
            with a source we ingest, not that the association is compliant.
        - Arrays are truncated at 500 rows per layer. The example above shows the arrays empty for brevity; live
            responses carry the rows.
        - Reference data only, not a structural determination. Confirm anything load-bearing with a licensed engineer.

        Args:
            id_: Association UUID.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.associations_building_safety(id_, request_options=request_options))

    def associations_buildings(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsBuildingsResponse:
        """Building footprint, roof/facade area estimates, floor count, and recorded structural facts (measured stories,
        year built, FL Ch. 553 milestone relevance) for an association, derived from mapped building outlines and county
        parcel rolls.

        - Requires the "valuations" scope, not "associations" — the one endpoint in this group that does.
        - Footprint coverage is uneven outside FL/NC/MA/NY/WI; a low building_count can mean sparse mapping, not a small
            property. Recorded structural facts (stories, year_built, milestone_inspection_relevant) are Florida-only
            today.
        - Reference data only. Confirm anything load-bearing with a licensed engineer.

        Args:
            id_: Association id.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.associations_buildings(id_, request_options=request_options))

    def associations_by_address(
        self,
        address: str,
        zip_: str,
        *,
        limit: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsByAddressResponse:
        """Resolve a property address to the association that governs it. Dedicated parcel-backed contract for a book of
        property addresses. /associations/match and /lookup also route a street-shaped q through this same resolve path
        so an address is never scored as a name.

        - Coverage is real but not complete everywhere: this only returns a hit where a parcel has already been
            deterministically linked to an association. An empty result includes a hint pointing at /associations/match
            as a name-based fallback. It does not mean the property has no association, only that we do not have the
            link yet.
        - Nothing here is a guess made at request time. A result is always a parcel a matcher already linked to an
            organization, never a fuzzy score computed on the fly — which is what makes /match the wrong tool for this
            and this the wrong tool for a bare name.

        Args:
            address: Street address, minimum 3 characters. Unit numbers are fine — see match_confidence below.
            zip_: 5-digit ZIP or ZIP+4. A 4-digit ZIP (leading zero dropped by Excel) is padded. Matching is scoped to
                the ZIP.
            limit: Max candidates to return, 1 to 5 (default 3).
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
            self._with_raw_response.associations_by_address(address, zip_, limit=limit, request_options=request_options)
        )

    def associations_detail(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsResponse:
        """The core record for one association: identity, location, registration status, and management-firm-of-record,
        in one call. The starting point once you have an id from lookup, match, or nearby.

        Args:
            id_: Association id.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.associations_detail(id_, request_options=request_options))

    def associations_lookup(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        subtype: str | None = None,
        county: str | None = None,
        registration_number: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsLookupResponse:
        """Browse and filter community associations by state, county, subtype or registration number. For a name, ``q``
        is a literal SUBSTRING filter: it matches only when your text appears verbatim in the filed corporate name, so
        "SUNSET RIDGE CONDO ASSN" will not find "Sunset Ridge Condominium Association, Inc.". If you are reconciling
        names from your own system, use /api/v1/associations/match instead. If ``q`` is a street address, the request is
        resolved against linked parcels (same path as /associations/by-address) rather than as a name substring. Use
        lookup when you hold an exact key: a registration number, or a real substring of the filed name.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            q: Exact substring of the filed corporate name, case-insensitive. Not fuzzy; for messy names use
                /associations/match. A street address (with ZIP) is resolved as an address, not as a name.
            state: Two-letter state filter, e.g. "FL".
            subtype: One of "hoa", "condo", "coop".
            county: County filter, case-insensitive, e.g. "Broward" or "Pima".
            registration_number: Exact state registry corp/document number (Sunbiz document number, ACC entity id, ...),
                case-insensitive. Returned as external_document_number.
            limit: Max results to return (default 20, max 100; free tier is clamped lower).
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
            self._with_raw_response.associations_lookup(
                q=q,
                state=state,
                subtype=subtype,
                county=county,
                registration_number=registration_number,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    def associations_management(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsManagementResponse:
        """Who manages this association. ``best`` is the strongest management company on file and ``sources`` is every
        public-record source that names one (state condo and HOA filings, management certificates, CAM licensing
        records, registered agents), best first. The public association page and data.commonelements.com read the same
        rows. Any management relationship confirmed on the platform itself comes back separately.

        - Coverage is by state: Florida, Texas, Nevada, Utah, Virginia and Arizona. About a quarter of Florida
            associations and about a tenth nationally have a management company on file. Outside those states an empty
            result says nothing about whether the association is managed.
        - Treat ``inferred: true`` as likely, not as fact. Those rows come from a match we made (a licensed firm's
            office address or email domain), not from a filing that names the firm.
        - The public-record rows and confirmed_relationships can disagree, and that is meaningful: sources reflect the
            filings, confirmed_relationships reflects what the platform's own users have confirmed. Treat ``best`` as
            the source of record when they differ.
        - Both empty means no manager is on record at all, which for a professionally-managed association usually means
            self-managed or an unfiled change.

        Args:
            id_: Association id.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.associations_management(id_, request_options=request_options))

    def associations_match(
        self,
        q: str,
        state: str,
        *,
        county: str | None = None,
        min_similarity: float | None = None,
        limit: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsMatchResponse:
        """Fuzzy name matching for entity resolution: given a messy association name from your own system, get back the
        best-matching Common Elements records with a similarity score. Use this to reconcile a book of business against
        the directory, where an exact-string lookup would miss "Pelican Bay Comm. Assn." against "PELICAN BAY COMMUNITY
        ASSOCIATION, INC.". If ``q`` is a street address (house number, city, state, ZIP), the request is resolved
        against linked parcels instead of names, the same path as /associations/by-address. Name-scoring an address
        attaches the wrong community.

        - Similarity is trigram-based, so word order matters less than shared character runs. A score above roughly 0.45
            is usually a confident match; between 0.25 and 0.45, review before merging.
        - If q looks like a street address, the response includes resolved_via: "address" and match_confidence of exact
            or building. Those rows are parcel links, not name guesses. An empty list means we do not have that address
            linked yet. Address-shaped q never falls through to name matching.

        Args:
            q: The name to match, minimum 3 characters. A street address (with ZIP) is resolved as an address, not as a
                name.
            state: Two-letter state code. Required; matching is scoped per state.
            county: Optional county filter, case-insensitive.
            min_similarity: Trigram similarity floor, 0.1 to 0.99 (default 0.25). Raise it for stricter matches.
            limit: Max candidates to return, 1 to 10 (default 5).
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
            self._with_raw_response.associations_match(
                q, state, county=county, min_similarity=min_similarity, limit=limit, request_options=request_options
            ),
        )

    def associations_nearby(
        self,
        lat: float,
        lng: float,
        *,
        radius_km: float | None = None,
        subtype: str | None = None,
        limit: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsNearbyResponse:
        """Find associations within a radius of a coordinate, sorted nearest first. Built for "what communities are
        around this property" workflows: territory planning, route density for a service vendor, or comparable-community
        selection.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - Only associations with recorded coordinates are searchable here. Coverage of geocoded records varies by state,
            so an empty result is not proof no association exists at that location.

        Args:
            lat: Latitude, -90 to 90.
            lng: Longitude, -180 to 180.
            radius_km: Search radius in kilometres, 0.1 to 50 (default 2).
            subtype: One of "hoa", "condo", "coop".
            limit: Max results, 1 to 50 (default 20).
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
            self._with_raw_response.associations_nearby(
                lat, lng, radius_km=radius_km, subtype=subtype, limit=limit, request_options=request_options
            ),
        )

    def associations_officers(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsOfficersResponse:
        """The current board/officer roster on file for an association, from state officer filings. Coverage is
        strongest in the eight states with published officer rolls. Board-turnover events on the change feed come from
        diffing successive snapshots of this roster, so they currently exist only for the states that have had more than
        one snapshot.

        - This is the current roster only. For board history over time (who served when, and each turnover as an event),
            use data.commonelements.com or the change feed's board_turnover / officer_* events.
        - An empty array means no officer filing is on record for this association, not necessarily that the board has
            vacancies.

        Args:
            id_: Association id.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.associations_officers(id_, request_options=request_options))

    def associations_risk(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsRiskResponse:
        """Retrieve flood zone, reserve-study health, and geographic risk signals for a specific association. Useful for
        underwriting, due diligence, and loan origination workflows.

        Args:
            id_: Association ID from the lookup endpoint.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.associations_risk(id_, request_options=request_options))

    def associations_vendors(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsVendorsResponse:
        """The vendors and service providers an association is on record working with, from confirmed relationship edges
        in the Common Elements graph. Answers "who already services this community" before you bid against them or refer
        into them.

        - Only confirmed, active relationships appear. An empty array means no vendor edge is recorded, not that the
            association self-performs the work.

        Args:
            id_: Association UUID.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.associations_vendors(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AssociationsWithRawResponse:
        return self._with_raw_response


class AsyncAssociations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAssociationsWithRawResponse(client, server, auth)

    async def associations_building_safety(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsBuildingSafetyResponse:
        """Everything on public record about an association’s physical buildings, joined into one call: Florida SIRS
        filings, county milestone/recertification rolls, elevator certificates, pool inspections, parcel building
        characteristics, and HUD FHA condo approval. The structural sibling of the risk endpoint, which reports
        county-level FEMA hazard instead.

        - Coverage is uneven by design: county recertification rolls are Miami-Dade and Broward only, SIRS is Florida
            condo, HUD FHA is national. Branch on has_data and layer_counts. An absent record means nothing was filed
            with a source we ingest, not that the association is compliant.
        - Arrays are truncated at 500 rows per layer. The example above shows the arrays empty for brevity; live
            responses carry the rows.
        - Reference data only, not a structural determination. Confirm anything load-bearing with a licensed engineer.

        Args:
            id_: Association UUID.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.associations_building_safety(id_, request_options=request_options))

    async def associations_buildings(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsBuildingsResponse:
        """Building footprint, roof/facade area estimates, floor count, and recorded structural facts (measured stories,
        year built, FL Ch. 553 milestone relevance) for an association, derived from mapped building outlines and county
        parcel rolls.

        - Requires the "valuations" scope, not "associations" — the one endpoint in this group that does.
        - Footprint coverage is uneven outside FL/NC/MA/NY/WI; a low building_count can mean sparse mapping, not a small
            property. Recorded structural facts (stories, year_built, milestone_inspection_relevant) are Florida-only
            today.
        - Reference data only. Confirm anything load-bearing with a licensed engineer.

        Args:
            id_: Association id.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.associations_buildings(id_, request_options=request_options))

    async def associations_by_address(
        self,
        address: str,
        zip_: str,
        *,
        limit: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsByAddressResponse:
        """Resolve a property address to the association that governs it. Dedicated parcel-backed contract for a book of
        property addresses. /associations/match and /lookup also route a street-shaped q through this same resolve path
        so an address is never scored as a name.

        - Coverage is real but not complete everywhere: this only returns a hit where a parcel has already been
            deterministically linked to an association. An empty result includes a hint pointing at /associations/match
            as a name-based fallback. It does not mean the property has no association, only that we do not have the
            link yet.
        - Nothing here is a guess made at request time. A result is always a parcel a matcher already linked to an
            organization, never a fuzzy score computed on the fly — which is what makes /match the wrong tool for this
            and this the wrong tool for a bare name.

        Args:
            address: Street address, minimum 3 characters. Unit numbers are fine — see match_confidence below.
            zip_: 5-digit ZIP or ZIP+4. A 4-digit ZIP (leading zero dropped by Excel) is padded. Matching is scoped to
                the ZIP.
            limit: Max candidates to return, 1 to 5 (default 3).
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
            await self._with_raw_response.associations_by_address(
                address, zip_, limit=limit, request_options=request_options
            ),
        )

    async def associations_detail(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsResponse:
        """The core record for one association: identity, location, registration status, and management-firm-of-record,
        in one call. The starting point once you have an id from lookup, match, or nearby.

        Args:
            id_: Association id.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.associations_detail(id_, request_options=request_options))

    async def associations_lookup(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        subtype: str | None = None,
        county: str | None = None,
        registration_number: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsLookupResponse:
        """Browse and filter community associations by state, county, subtype or registration number. For a name, ``q``
        is a literal SUBSTRING filter: it matches only when your text appears verbatim in the filed corporate name, so
        "SUNSET RIDGE CONDO ASSN" will not find "Sunset Ridge Condominium Association, Inc.". If you are reconciling
        names from your own system, use /api/v1/associations/match instead. If ``q`` is a street address, the request is
        resolved against linked parcels (same path as /associations/by-address) rather than as a name substring. Use
        lookup when you hold an exact key: a registration number, or a real substring of the filed name.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            q: Exact substring of the filed corporate name, case-insensitive. Not fuzzy; for messy names use
                /associations/match. A street address (with ZIP) is resolved as an address, not as a name.
            state: Two-letter state filter, e.g. "FL".
            subtype: One of "hoa", "condo", "coop".
            county: County filter, case-insensitive, e.g. "Broward" or "Pima".
            registration_number: Exact state registry corp/document number (Sunbiz document number, ACC entity id, ...),
                case-insensitive. Returned as external_document_number.
            limit: Max results to return (default 20, max 100; free tier is clamped lower).
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
            await self._with_raw_response.associations_lookup(
                q=q,
                state=state,
                subtype=subtype,
                county=county,
                registration_number=registration_number,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def associations_management(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsManagementResponse:
        """Who manages this association. ``best`` is the strongest management company on file and ``sources`` is every
        public-record source that names one (state condo and HOA filings, management certificates, CAM licensing
        records, registered agents), best first. The public association page and data.commonelements.com read the same
        rows. Any management relationship confirmed on the platform itself comes back separately.

        - Coverage is by state: Florida, Texas, Nevada, Utah, Virginia and Arizona. About a quarter of Florida
            associations and about a tenth nationally have a management company on file. Outside those states an empty
            result says nothing about whether the association is managed.
        - Treat ``inferred: true`` as likely, not as fact. Those rows come from a match we made (a licensed firm's
            office address or email domain), not from a filing that names the firm.
        - The public-record rows and confirmed_relationships can disagree, and that is meaningful: sources reflect the
            filings, confirmed_relationships reflects what the platform's own users have confirmed. Treat ``best`` as
            the source of record when they differ.
        - Both empty means no manager is on record at all, which for a professionally-managed association usually means
            self-managed or an unfiled change.

        Args:
            id_: Association id.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.associations_management(id_, request_options=request_options))

    async def associations_match(
        self,
        q: str,
        state: str,
        *,
        county: str | None = None,
        min_similarity: float | None = None,
        limit: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsMatchResponse:
        """Fuzzy name matching for entity resolution: given a messy association name from your own system, get back the
        best-matching Common Elements records with a similarity score. Use this to reconcile a book of business against
        the directory, where an exact-string lookup would miss "Pelican Bay Comm. Assn." against "PELICAN BAY COMMUNITY
        ASSOCIATION, INC.". If ``q`` is a street address (house number, city, state, ZIP), the request is resolved
        against linked parcels instead of names, the same path as /associations/by-address. Name-scoring an address
        attaches the wrong community.

        - Similarity is trigram-based, so word order matters less than shared character runs. A score above roughly 0.45
            is usually a confident match; between 0.25 and 0.45, review before merging.
        - If q looks like a street address, the response includes resolved_via: "address" and match_confidence of exact
            or building. Those rows are parcel links, not name guesses. An empty list means we do not have that address
            linked yet. Address-shaped q never falls through to name matching.

        Args:
            q: The name to match, minimum 3 characters. A street address (with ZIP) is resolved as an address, not as a
                name.
            state: Two-letter state code. Required; matching is scoped per state.
            county: Optional county filter, case-insensitive.
            min_similarity: Trigram similarity floor, 0.1 to 0.99 (default 0.25). Raise it for stricter matches.
            limit: Max candidates to return, 1 to 10 (default 5).
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
            await self._with_raw_response.associations_match(
                q, state, county=county, min_similarity=min_similarity, limit=limit, request_options=request_options
            ),
        )

    async def associations_nearby(
        self,
        lat: float,
        lng: float,
        *,
        radius_km: float | None = None,
        subtype: str | None = None,
        limit: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AssociationsNearbyResponse:
        """Find associations within a radius of a coordinate, sorted nearest first. Built for "what communities are
        around this property" workflows: territory planning, route density for a service vendor, or comparable-community
        selection.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - Only associations with recorded coordinates are searchable here. Coverage of geocoded records varies by state,
            so an empty result is not proof no association exists at that location.

        Args:
            lat: Latitude, -90 to 90.
            lng: Longitude, -180 to 180.
            radius_km: Search radius in kilometres, 0.1 to 50 (default 2).
            subtype: One of "hoa", "condo", "coop".
            limit: Max results, 1 to 50 (default 20).
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
            await self._with_raw_response.associations_nearby(
                lat, lng, radius_km=radius_km, subtype=subtype, limit=limit, request_options=request_options
            ),
        )

    async def associations_officers(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsOfficersResponse:
        """The current board/officer roster on file for an association, from state officer filings. Coverage is
        strongest in the eight states with published officer rolls. Board-turnover events on the change feed come from
        diffing successive snapshots of this roster, so they currently exist only for the states that have had more than
        one snapshot.

        - This is the current roster only. For board history over time (who served when, and each turnover as an event),
            use data.commonelements.com or the change feed's board_turnover / officer_* events.
        - An empty array means no officer filing is on record for this association, not necessarily that the board has
            vacancies.

        Args:
            id_: Association id.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.associations_officers(id_, request_options=request_options))

    async def associations_risk(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsRiskResponse:
        """Retrieve flood zone, reserve-study health, and geographic risk signals for a specific association. Useful for
        underwriting, due diligence, and loan origination workflows.

        Args:
            id_: Association ID from the lookup endpoint.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.associations_risk(id_, request_options=request_options))

    async def associations_vendors(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsVendorsResponse:
        """The vendors and service providers an association is on record working with, from confirmed relationship edges
        in the Common Elements graph. Answers "who already services this community" before you bid against them or refer
        into them.

        - Only confirmed, active relationships appear. An empty array means no vendor edge is recorded, not that the
            association self-performs the work.

        Args:
            id_: Association UUID.
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
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.associations_vendors(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAssociationsWithRawResponse:
        return self._with_raw_response


class AssociationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def associations_building_safety(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsBuildingSafetyResponse, AssociationsBuildingSafetyErrorBody]:
        """Everything on public record about an association’s physical buildings, joined into one call: Florida SIRS
        filings, county milestone/recertification rolls, elevator certificates, pool inspections, parcel building
        characteristics, and HUD FHA condo approval. The structural sibling of the risk endpoint, which reports
        county-level FEMA hazard instead.

        - Coverage is uneven by design: county recertification rolls are Miami-Dade and Broward only, SIRS is Florida
            condo, HUD FHA is national. Branch on has_data and layer_counts. An absent record means nothing was filed
            with a source we ingest, not that the association is compliant.
        - Arrays are truncated at 500 rows per layer. The example above shows the arrays empty for brevity; live
            responses carry the rows.
        - Reference data only, not a structural determination. Confirm anything load-bearing with a licensed engineer.

        Args:
            id_: Association UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/building-safety"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsBuildingSafetyResponse],
            error_mapper=associations_building_safety_error_mapper,
            request_options=request_options,
        )

    def associations_buildings(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsBuildingsResponse, AssociationsBuildingsErrorBody]:
        """Building footprint, roof/facade area estimates, floor count, and recorded structural facts (measured stories,
        year built, FL Ch. 553 milestone relevance) for an association, derived from mapped building outlines and county
        parcel rolls.

        - Requires the "valuations" scope, not "associations" — the one endpoint in this group that does.
        - Footprint coverage is uneven outside FL/NC/MA/NY/WI; a low building_count can mean sparse mapping, not a small
            property. Recorded structural facts (stories, year_built, milestone_inspection_relevant) are Florida-only
            today.
        - Reference data only. Confirm anything load-bearing with a licensed engineer.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/buildings"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsBuildingsResponse],
            error_mapper=associations_buildings_error_mapper,
            request_options=request_options,
        )

    def associations_by_address(
        self,
        address: str,
        zip_: str,
        *,
        limit: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsByAddressResponse, AssociationsByAddressErrorBody]:
        """Resolve a property address to the association that governs it. Dedicated parcel-backed contract for a book of
        property addresses. /associations/match and /lookup also route a street-shaped q through this same resolve path
        so an address is never scored as a name.

        - Coverage is real but not complete everywhere: this only returns a hit where a parcel has already been
            deterministically linked to an association. An empty result includes a hint pointing at /associations/match
            as a name-based fallback. It does not mean the property has no association, only that we do not have the
            link yet.
        - Nothing here is a guess made at request time. A result is always a parcel a matcher already linked to an
            organization, never a fuzzy score computed on the fly — which is what makes /match the wrong tool for this
            and this the wrong tool for a bare name.

        Args:
            address: Street address, minimum 3 characters. Unit numbers are fine — see match_confidence below.
            zip_: 5-digit ZIP or ZIP+4. A 4-digit ZIP (leading zero dropped by Excel) is padded. Matching is scoped to
                the ZIP.
            limit: Max candidates to return, 1 to 5 (default 3).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/by-address"),
            query_params=[param[str]("address", address), param[str]("zip", zip_), param[float | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsByAddressResponse],
            error_mapper=associations_by_address_error_mapper,
            request_options=request_options,
        )

    def associations_detail(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsResponse, AssociationsDetailErrorBody]:
        """The core record for one association: identity, location, registration status, and management-firm-of-record,
        in one call. The starting point once you have an id from lookup, match, or nearby.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsResponse],
            error_mapper=associations_detail_error_mapper,
            request_options=request_options,
        )

    def associations_lookup(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        subtype: str | None = None,
        county: str | None = None,
        registration_number: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsLookupResponse, AssociationsLookupErrorBody]:
        """Browse and filter community associations by state, county, subtype or registration number. For a name, ``q``
        is a literal SUBSTRING filter: it matches only when your text appears verbatim in the filed corporate name, so
        "SUNSET RIDGE CONDO ASSN" will not find "Sunset Ridge Condominium Association, Inc.". If you are reconciling
        names from your own system, use /api/v1/associations/match instead. If ``q`` is a street address, the request is
        resolved against linked parcels (same path as /associations/by-address) rather than as a name substring. Use
        lookup when you hold an exact key: a registration number, or a real substring of the filed name.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            q: Exact substring of the filed corporate name, case-insensitive. Not fuzzy; for messy names use
                /associations/match. A street address (with ZIP) is resolved as an address, not as a name.
            state: Two-letter state filter, e.g. "FL".
            subtype: One of "hoa", "condo", "coop".
            county: County filter, case-insensitive, e.g. "Broward" or "Pima".
            registration_number: Exact state registry corp/document number (Sunbiz document number, ACC entity id, ...),
                case-insensitive. Returned as external_document_number.
            limit: Max results to return (default 20, max 100; free tier is clamped lower).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/lookup"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("state", state),
                param[str | None]("subtype", subtype),
                param[str | None]("county", county),
                param[str | None]("registration_number", registration_number),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsLookupResponse],
            error_mapper=associations_lookup_error_mapper,
            request_options=request_options,
        )

    def associations_management(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsManagementResponse, AssociationsManagementErrorBody]:
        """Who manages this association. ``best`` is the strongest management company on file and ``sources`` is every
        public-record source that names one (state condo and HOA filings, management certificates, CAM licensing
        records, registered agents), best first. The public association page and data.commonelements.com read the same
        rows. Any management relationship confirmed on the platform itself comes back separately.

        - Coverage is by state: Florida, Texas, Nevada, Utah, Virginia and Arizona. About a quarter of Florida
            associations and about a tenth nationally have a management company on file. Outside those states an empty
            result says nothing about whether the association is managed.
        - Treat ``inferred: true`` as likely, not as fact. Those rows come from a match we made (a licensed firm's
            office address or email domain), not from a filing that names the firm.
        - The public-record rows and confirmed_relationships can disagree, and that is meaningful: sources reflect the
            filings, confirmed_relationships reflects what the platform's own users have confirmed. Treat ``best`` as
            the source of record when they differ.
        - Both empty means no manager is on record at all, which for a professionally-managed association usually means
            self-managed or an unfiled change.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/management"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsManagementResponse],
            error_mapper=associations_management_error_mapper,
            request_options=request_options,
        )

    def associations_match(
        self,
        q: str,
        state: str,
        *,
        county: str | None = None,
        min_similarity: float | None = None,
        limit: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsMatchResponse, AssociationsMatchErrorBody]:
        """Fuzzy name matching for entity resolution: given a messy association name from your own system, get back the
        best-matching Common Elements records with a similarity score. Use this to reconcile a book of business against
        the directory, where an exact-string lookup would miss "Pelican Bay Comm. Assn." against "PELICAN BAY COMMUNITY
        ASSOCIATION, INC.". If ``q`` is a street address (house number, city, state, ZIP), the request is resolved
        against linked parcels instead of names, the same path as /associations/by-address. Name-scoring an address
        attaches the wrong community.

        - Similarity is trigram-based, so word order matters less than shared character runs. A score above roughly 0.45
            is usually a confident match; between 0.25 and 0.45, review before merging.
        - If q looks like a street address, the response includes resolved_via: "address" and match_confidence of exact
            or building. Those rows are parcel links, not name guesses. An empty list means we do not have that address
            linked yet. Address-shaped q never falls through to name matching.

        Args:
            q: The name to match, minimum 3 characters. A street address (with ZIP) is resolved as an address, not as a
                name.
            state: Two-letter state code. Required; matching is scoped per state.
            county: Optional county filter, case-insensitive.
            min_similarity: Trigram similarity floor, 0.1 to 0.99 (default 0.25). Raise it for stricter matches.
            limit: Max candidates to return, 1 to 10 (default 5).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/match"),
            query_params=[
                param[str]("q", q),
                param[str]("state", state),
                param[str | None]("county", county),
                param[float | None]("min_similarity", min_similarity),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsMatchResponse],
            error_mapper=associations_match_error_mapper,
            request_options=request_options,
        )

    def associations_nearby(
        self,
        lat: float,
        lng: float,
        *,
        radius_km: float | None = None,
        subtype: str | None = None,
        limit: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsNearbyResponse, AssociationsNearbyErrorBody]:
        """Find associations within a radius of a coordinate, sorted nearest first. Built for "what communities are
        around this property" workflows: territory planning, route density for a service vendor, or comparable-community
        selection.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - Only associations with recorded coordinates are searchable here. Coverage of geocoded records varies by state,
            so an empty result is not proof no association exists at that location.

        Args:
            lat: Latitude, -90 to 90.
            lng: Longitude, -180 to 180.
            radius_km: Search radius in kilometres, 0.1 to 50 (default 2).
            subtype: One of "hoa", "condo", "coop".
            limit: Max results, 1 to 50 (default 20).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/nearby"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lng", lng),
                param[float | None]("radius_km", radius_km),
                param[str | None]("subtype", subtype),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsNearbyResponse],
            error_mapper=associations_nearby_error_mapper,
            request_options=request_options,
        )

    def associations_officers(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsOfficersResponse, AssociationsOfficersErrorBody]:
        """The current board/officer roster on file for an association, from state officer filings. Coverage is
        strongest in the eight states with published officer rolls. Board-turnover events on the change feed come from
        diffing successive snapshots of this roster, so they currently exist only for the states that have had more than
        one snapshot.

        - This is the current roster only. For board history over time (who served when, and each turnover as an event),
            use data.commonelements.com or the change feed's board_turnover / officer_* events.
        - An empty array means no officer filing is on record for this association, not necessarily that the board has
            vacancies.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/officers"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsOfficersResponse],
            error_mapper=associations_officers_error_mapper,
            request_options=request_options,
        )

    def associations_risk(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsRiskResponse, AssociationsRiskErrorBody]:
        """Retrieve flood zone, reserve-study health, and geographic risk signals for a specific association. Useful for
        underwriting, due diligence, and loan origination workflows.

        Args:
            id_: Association ID from the lookup endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/risk"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsRiskResponse],
            error_mapper=associations_risk_error_mapper,
            request_options=request_options,
        )

    def associations_vendors(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsVendorsResponse, AssociationsVendorsErrorBody]:
        """The vendors and service providers an association is on record working with, from confirmed relationship edges
        in the Common Elements graph. Answers "who already services this community" before you bid against them or refer
        into them.

        - Only confirmed, active relationships appear. An empty array means no vendor edge is recorded, not that the
            association self-performs the work.

        Args:
            id_: Association UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/vendors"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsVendorsResponse],
            error_mapper=associations_vendors_error_mapper,
            request_options=request_options,
        )


class AsyncAssociationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def associations_building_safety(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsBuildingSafetyResponse, AssociationsBuildingSafetyErrorBody]:
        """Everything on public record about an association’s physical buildings, joined into one call: Florida SIRS
        filings, county milestone/recertification rolls, elevator certificates, pool inspections, parcel building
        characteristics, and HUD FHA condo approval. The structural sibling of the risk endpoint, which reports
        county-level FEMA hazard instead.

        - Coverage is uneven by design: county recertification rolls are Miami-Dade and Broward only, SIRS is Florida
            condo, HUD FHA is national. Branch on has_data and layer_counts. An absent record means nothing was filed
            with a source we ingest, not that the association is compliant.
        - Arrays are truncated at 500 rows per layer. The example above shows the arrays empty for brevity; live
            responses carry the rows.
        - Reference data only, not a structural determination. Confirm anything load-bearing with a licensed engineer.

        Args:
            id_: Association UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/building-safety"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsBuildingSafetyResponse],
            error_mapper=associations_building_safety_error_mapper,
            request_options=request_options,
        )

    async def associations_buildings(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsBuildingsResponse, AssociationsBuildingsErrorBody]:
        """Building footprint, roof/facade area estimates, floor count, and recorded structural facts (measured stories,
        year built, FL Ch. 553 milestone relevance) for an association, derived from mapped building outlines and county
        parcel rolls.

        - Requires the "valuations" scope, not "associations" — the one endpoint in this group that does.
        - Footprint coverage is uneven outside FL/NC/MA/NY/WI; a low building_count can mean sparse mapping, not a small
            property. Recorded structural facts (stories, year_built, milestone_inspection_relevant) are Florida-only
            today.
        - Reference data only. Confirm anything load-bearing with a licensed engineer.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/buildings"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsBuildingsResponse],
            error_mapper=associations_buildings_error_mapper,
            request_options=request_options,
        )

    async def associations_by_address(
        self,
        address: str,
        zip_: str,
        *,
        limit: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsByAddressResponse, AssociationsByAddressErrorBody]:
        """Resolve a property address to the association that governs it. Dedicated parcel-backed contract for a book of
        property addresses. /associations/match and /lookup also route a street-shaped q through this same resolve path
        so an address is never scored as a name.

        - Coverage is real but not complete everywhere: this only returns a hit where a parcel has already been
            deterministically linked to an association. An empty result includes a hint pointing at /associations/match
            as a name-based fallback. It does not mean the property has no association, only that we do not have the
            link yet.
        - Nothing here is a guess made at request time. A result is always a parcel a matcher already linked to an
            organization, never a fuzzy score computed on the fly — which is what makes /match the wrong tool for this
            and this the wrong tool for a bare name.

        Args:
            address: Street address, minimum 3 characters. Unit numbers are fine — see match_confidence below.
            zip_: 5-digit ZIP or ZIP+4. A 4-digit ZIP (leading zero dropped by Excel) is padded. Matching is scoped to
                the ZIP.
            limit: Max candidates to return, 1 to 5 (default 3).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/by-address"),
            query_params=[param[str]("address", address), param[str]("zip", zip_), param[float | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsByAddressResponse],
            error_mapper=associations_by_address_error_mapper,
            request_options=request_options,
        )

    async def associations_detail(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsResponse, AssociationsDetailErrorBody]:
        """The core record for one association: identity, location, registration status, and management-firm-of-record,
        in one call. The starting point once you have an id from lookup, match, or nearby.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsResponse],
            error_mapper=associations_detail_error_mapper,
            request_options=request_options,
        )

    async def associations_lookup(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        subtype: str | None = None,
        county: str | None = None,
        registration_number: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsLookupResponse, AssociationsLookupErrorBody]:
        """Browse and filter community associations by state, county, subtype or registration number. For a name, ``q``
        is a literal SUBSTRING filter: it matches only when your text appears verbatim in the filed corporate name, so
        "SUNSET RIDGE CONDO ASSN" will not find "Sunset Ridge Condominium Association, Inc.". If you are reconciling
        names from your own system, use /api/v1/associations/match instead. If ``q`` is a street address, the request is
        resolved against linked parcels (same path as /associations/by-address) rather than as a name substring. Use
        lookup when you hold an exact key: a registration number, or a real substring of the filed name.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            q: Exact substring of the filed corporate name, case-insensitive. Not fuzzy; for messy names use
                /associations/match. A street address (with ZIP) is resolved as an address, not as a name.
            state: Two-letter state filter, e.g. "FL".
            subtype: One of "hoa", "condo", "coop".
            county: County filter, case-insensitive, e.g. "Broward" or "Pima".
            registration_number: Exact state registry corp/document number (Sunbiz document number, ACC entity id, ...),
                case-insensitive. Returned as external_document_number.
            limit: Max results to return (default 20, max 100; free tier is clamped lower).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/lookup"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("state", state),
                param[str | None]("subtype", subtype),
                param[str | None]("county", county),
                param[str | None]("registration_number", registration_number),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsLookupResponse],
            error_mapper=associations_lookup_error_mapper,
            request_options=request_options,
        )

    async def associations_management(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsManagementResponse, AssociationsManagementErrorBody]:
        """Who manages this association. ``best`` is the strongest management company on file and ``sources`` is every
        public-record source that names one (state condo and HOA filings, management certificates, CAM licensing
        records, registered agents), best first. The public association page and data.commonelements.com read the same
        rows. Any management relationship confirmed on the platform itself comes back separately.

        - Coverage is by state: Florida, Texas, Nevada, Utah, Virginia and Arizona. About a quarter of Florida
            associations and about a tenth nationally have a management company on file. Outside those states an empty
            result says nothing about whether the association is managed.
        - Treat ``inferred: true`` as likely, not as fact. Those rows come from a match we made (a licensed firm's
            office address or email domain), not from a filing that names the firm.
        - The public-record rows and confirmed_relationships can disagree, and that is meaningful: sources reflect the
            filings, confirmed_relationships reflects what the platform's own users have confirmed. Treat ``best`` as
            the source of record when they differ.
        - Both empty means no manager is on record at all, which for a professionally-managed association usually means
            self-managed or an unfiled change.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/management"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsManagementResponse],
            error_mapper=associations_management_error_mapper,
            request_options=request_options,
        )

    async def associations_match(
        self,
        q: str,
        state: str,
        *,
        county: str | None = None,
        min_similarity: float | None = None,
        limit: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsMatchResponse, AssociationsMatchErrorBody]:
        """Fuzzy name matching for entity resolution: given a messy association name from your own system, get back the
        best-matching Common Elements records with a similarity score. Use this to reconcile a book of business against
        the directory, where an exact-string lookup would miss "Pelican Bay Comm. Assn." against "PELICAN BAY COMMUNITY
        ASSOCIATION, INC.". If ``q`` is a street address (house number, city, state, ZIP), the request is resolved
        against linked parcels instead of names, the same path as /associations/by-address. Name-scoring an address
        attaches the wrong community.

        - Similarity is trigram-based, so word order matters less than shared character runs. A score above roughly 0.45
            is usually a confident match; between 0.25 and 0.45, review before merging.
        - If q looks like a street address, the response includes resolved_via: "address" and match_confidence of exact
            or building. Those rows are parcel links, not name guesses. An empty list means we do not have that address
            linked yet. Address-shaped q never falls through to name matching.

        Args:
            q: The name to match, minimum 3 characters. A street address (with ZIP) is resolved as an address, not as a
                name.
            state: Two-letter state code. Required; matching is scoped per state.
            county: Optional county filter, case-insensitive.
            min_similarity: Trigram similarity floor, 0.1 to 0.99 (default 0.25). Raise it for stricter matches.
            limit: Max candidates to return, 1 to 10 (default 5).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/match"),
            query_params=[
                param[str]("q", q),
                param[str]("state", state),
                param[str | None]("county", county),
                param[float | None]("min_similarity", min_similarity),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsMatchResponse],
            error_mapper=associations_match_error_mapper,
            request_options=request_options,
        )

    async def associations_nearby(
        self,
        lat: float,
        lng: float,
        *,
        radius_km: float | None = None,
        subtype: str | None = None,
        limit: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AssociationsNearbyResponse, AssociationsNearbyErrorBody]:
        """Find associations within a radius of a coordinate, sorted nearest first. Built for "what communities are
        around this property" workflows: territory planning, route density for a service vendor, or comparable-community
        selection.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - Only associations with recorded coordinates are searchable here. Coverage of geocoded records varies by state,
            so an empty result is not proof no association exists at that location.

        Args:
            lat: Latitude, -90 to 90.
            lng: Longitude, -180 to 180.
            radius_km: Search radius in kilometres, 0.1 to 50 (default 2).
            subtype: One of "hoa", "condo", "coop".
            limit: Max results, 1 to 50 (default 20).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/nearby"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lng", lng),
                param[float | None]("radius_km", radius_km),
                param[str | None]("subtype", subtype),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsNearbyResponse],
            error_mapper=associations_nearby_error_mapper,
            request_options=request_options,
        )

    async def associations_officers(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsOfficersResponse, AssociationsOfficersErrorBody]:
        """The current board/officer roster on file for an association, from state officer filings. Coverage is
        strongest in the eight states with published officer rolls. Board-turnover events on the change feed come from
        diffing successive snapshots of this roster, so they currently exist only for the states that have had more than
        one snapshot.

        - This is the current roster only. For board history over time (who served when, and each turnover as an event),
            use data.commonelements.com or the change feed's board_turnover / officer_* events.
        - An empty array means no officer filing is on record for this association, not necessarily that the board has
            vacancies.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/officers"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsOfficersResponse],
            error_mapper=associations_officers_error_mapper,
            request_options=request_options,
        )

    async def associations_risk(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsRiskResponse, AssociationsRiskErrorBody]:
        """Retrieve flood zone, reserve-study health, and geographic risk signals for a specific association. Useful for
        underwriting, due diligence, and loan origination workflows.

        Args:
            id_: Association ID from the lookup endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/risk"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsRiskResponse],
            error_mapper=associations_risk_error_mapper,
            request_options=request_options,
        )

    async def associations_vendors(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsVendorsResponse, AssociationsVendorsErrorBody]:
        """The vendors and service providers an association is on record working with, from confirmed relationship edges
        in the Common Elements graph. Answers "who already services this community" before you bid against them or refer
        into them.

        - Only confirmed, active relationships appear. An empty array means no vendor edge is recorded, not that the
            association self-performs the work.

        Args:
            id_: Association UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/vendors"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsVendorsResponse],
            error_mapper=associations_vendors_error_mapper,
            request_options=request_options,
        )
