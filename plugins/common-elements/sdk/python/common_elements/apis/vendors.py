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
from ..errors.vendors_detail_error import VendorsDetailErrorBody, vendors_detail_error_mapper
from ..errors.vendors_list_error import VendorsListErrorBody, vendors_list_error_mapper
from ..errors.vendors_reviews_error import VendorsReviewsErrorBody, vendors_reviews_error_mapper
from ..models.api_v1_vendors_response import ApiV1VendorsResponse
from ..models.api_v1_vendors_response1 import ApiV1VendorsResponse1
from ..models.api_v1_vendors_reviews_response import ApiV1VendorsReviewsResponse
from ..server.server import Server


class Vendors:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VendorsWithRawResponse(client, server, auth)

    def vendors_detail(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1VendorsResponse1:
        """The full public profile for one verified vendor: identity, self-reported service offerings, review summary,
        and the neutral, independently-sourced trust profile (workers' comp status, professional licenses, enforcement
        history) pulled from public records.

        - Never returns private contact data, street address lines, phone, or email. That data does not exist on this
            endpoint at all, not merely hidden.
        - Distinguish self-asserted from verified: description/services_offered/certifications/license_number are what
            the vendor states about itself; trust_profile is what public records independently confirm.

        Args:
            id_: Vendor organization id.
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
        return unwrap(self._with_raw_response.vendors_detail(id_, request_options=request_options))

    def vendors_list(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        category: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1VendorsResponse:
        """Search the public vendor directory: verified vendors only, ranked by review rating. Filter by
        name/description text, state (home or served), or service category.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - Only verified vendors are listed. Coverage grows as vendors complete verification — see the note this endpoint
            returns on an empty result for the current count.

        Args:
            q: Free-text search over name and description.
            state: Two-letter state code. Matches either the vendor's home state or a state it serves.
            category: A vendor-category slug, matched against the vendor's self-tagged service categories.
            limit: Max results per page. Free keys are capped at 50; paid tiers get a higher cap.
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
            self._with_raw_response.vendors_list(
                q=q, state=state, category=category, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def vendors_reviews(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1VendorsReviewsResponse:
        """Published reviews for a vendor, newest first. Every review is tied to a completed RFP or proposal, so each
        one is a verified-buyer review, not an open review anyone can post.

        - Reviewer identity is never included, by design — the reviewing association is withheld to keep the projection
            neutral.

        Args:
            id_: Vendor organization id.
            limit: Max results, 1 to 100 (default 25).
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
        return unwrap(
            self._with_raw_response.vendors_reviews(id_, limit=limit, offset=offset, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> VendorsWithRawResponse:
        return self._with_raw_response


class AsyncVendors:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVendorsWithRawResponse(client, server, auth)

    async def vendors_detail(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1VendorsResponse1:
        """The full public profile for one verified vendor: identity, self-reported service offerings, review summary,
        and the neutral, independently-sourced trust profile (workers' comp status, professional licenses, enforcement
        history) pulled from public records.

        - Never returns private contact data, street address lines, phone, or email. That data does not exist on this
            endpoint at all, not merely hidden.
        - Distinguish self-asserted from verified: description/services_offered/certifications/license_number are what
            the vendor states about itself; trust_profile is what public records independently confirm.

        Args:
            id_: Vendor organization id.
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
        return unwrap(await self._with_raw_response.vendors_detail(id_, request_options=request_options))

    async def vendors_list(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        category: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1VendorsResponse:
        """Search the public vendor directory: verified vendors only, ranked by review rating. Filter by
        name/description text, state (home or served), or service category.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - Only verified vendors are listed. Coverage grows as vendors complete verification — see the note this endpoint
            returns on an empty result for the current count.

        Args:
            q: Free-text search over name and description.
            state: Two-letter state code. Matches either the vendor's home state or a state it serves.
            category: A vendor-category slug, matched against the vendor's self-tagged service categories.
            limit: Max results per page. Free keys are capped at 50; paid tiers get a higher cap.
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
            await self._with_raw_response.vendors_list(
                q=q, state=state, category=category, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def vendors_reviews(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1VendorsReviewsResponse:
        """Published reviews for a vendor, newest first. Every review is tied to a completed RFP or proposal, so each
        one is a verified-buyer review, not an open review anyone can post.

        - Reviewer identity is never included, by design — the reviewing association is withheld to keep the projection
            neutral.

        Args:
            id_: Vendor organization id.
            limit: Max results, 1 to 100 (default 25).
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
        return unwrap(
            await self._with_raw_response.vendors_reviews(
                id_, limit=limit, offset=offset, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVendorsWithRawResponse:
        return self._with_raw_response


class VendorsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def vendors_detail(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1VendorsResponse1, VendorsDetailErrorBody]:
        """The full public profile for one verified vendor: identity, self-reported service offerings, review summary,
        and the neutral, independently-sourced trust profile (workers' comp status, professional licenses, enforcement
        history) pulled from public records.

        - Never returns private contact data, street address lines, phone, or email. That data does not exist on this
            endpoint at all, not merely hidden.
        - Distinguish self-asserted from verified: description/services_offered/certifications/license_number are what
            the vendor states about itself; trust_profile is what public records independently confirm.

        Args:
            id_: Vendor organization id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/vendors/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1VendorsResponse1],
            error_mapper=vendors_detail_error_mapper,
            request_options=request_options,
        )

    def vendors_list(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        category: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1VendorsResponse, VendorsListErrorBody]:
        """Search the public vendor directory: verified vendors only, ranked by review rating. Filter by
        name/description text, state (home or served), or service category.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - Only verified vendors are listed. Coverage grows as vendors complete verification — see the note this endpoint
            returns on an empty result for the current count.

        Args:
            q: Free-text search over name and description.
            state: Two-letter state code. Matches either the vendor's home state or a state it serves.
            category: A vendor-category slug, matched against the vendor's self-tagged service categories.
            limit: Max results per page. Free keys are capped at 50; paid tiers get a higher cap.
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/vendors"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("state", state),
                param[str | None]("category", category),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1VendorsResponse],
            error_mapper=vendors_list_error_mapper,
            request_options=request_options,
        )

    def vendors_reviews(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1VendorsReviewsResponse, VendorsReviewsErrorBody]:
        """Published reviews for a vendor, newest first. Every review is tied to a completed RFP or proposal, so each
        one is a verified-buyer review, not an open review anyone can post.

        - Reviewer identity is never included, by design — the reviewing association is withheld to keep the projection
            neutral.

        Args:
            id_: Vendor organization id.
            limit: Max results, 1 to 100 (default 25).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/vendors/{id}/reviews"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[float | None]("limit", limit), param[float | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1VendorsReviewsResponse],
            error_mapper=vendors_reviews_error_mapper,
            request_options=request_options,
        )


class AsyncVendorsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def vendors_detail(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1VendorsResponse1, VendorsDetailErrorBody]:
        """The full public profile for one verified vendor: identity, self-reported service offerings, review summary,
        and the neutral, independently-sourced trust profile (workers' comp status, professional licenses, enforcement
        history) pulled from public records.

        - Never returns private contact data, street address lines, phone, or email. That data does not exist on this
            endpoint at all, not merely hidden.
        - Distinguish self-asserted from verified: description/services_offered/certifications/license_number are what
            the vendor states about itself; trust_profile is what public records independently confirm.

        Args:
            id_: Vendor organization id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/vendors/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1VendorsResponse1],
            error_mapper=vendors_detail_error_mapper,
            request_options=request_options,
        )

    async def vendors_list(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        category: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1VendorsResponse, VendorsListErrorBody]:
        """Search the public vendor directory: verified vendors only, ranked by review rating. Filter by
        name/description text, state (home or served), or service category.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - Only verified vendors are listed. Coverage grows as vendors complete verification — see the note this endpoint
            returns on an empty result for the current count.

        Args:
            q: Free-text search over name and description.
            state: Two-letter state code. Matches either the vendor's home state or a state it serves.
            category: A vendor-category slug, matched against the vendor's self-tagged service categories.
            limit: Max results per page. Free keys are capped at 50; paid tiers get a higher cap.
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/vendors"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("state", state),
                param[str | None]("category", category),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1VendorsResponse],
            error_mapper=vendors_list_error_mapper,
            request_options=request_options,
        )

    async def vendors_reviews(
        self,
        id_: UUID,
        *,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1VendorsReviewsResponse, VendorsReviewsErrorBody]:
        """Published reviews for a vendor, newest first. Every review is tied to a completed RFP or proposal, so each
        one is a verified-buyer review, not an open review anyone can post.

        - Reviewer identity is never included, by design — the reviewing association is withheld to keep the projection
            neutral.

        Args:
            id_: Vendor organization id.
            limit: Max results, 1 to 100 (default 25).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/vendors/{id}/reviews"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[float | None]("limit", limit), param[float | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1VendorsReviewsResponse],
            error_mapper=vendors_reviews_error_mapper,
            request_options=request_options,
        )
