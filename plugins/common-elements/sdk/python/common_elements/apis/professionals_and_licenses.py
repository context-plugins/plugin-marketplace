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
from ..errors.licenses_verify_error import LicensesVerifyErrorBody, licenses_verify_error_mapper
from ..errors.professionals_associations_error import (
    ProfessionalsAssociationsErrorBody,
    professionals_associations_error_mapper,
)
from ..errors.professionals_detail_error import ProfessionalsDetailErrorBody, professionals_detail_error_mapper
from ..errors.professionals_search_error import ProfessionalsSearchErrorBody, professionals_search_error_mapper
from ..models.api_v1_licenses_verify_response import ApiV1LicensesVerifyResponse
from ..models.api_v1_professionals_associations_response import ApiV1ProfessionalsAssociationsResponse
from ..models.api_v1_professionals_response import ApiV1ProfessionalsResponse
from ..models.api_v1_professionals_search_response import ApiV1ProfessionalsSearchResponse
from ..server.server import Server


class ProfessionalsAndLicenses:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProfessionalsAndLicensesWithRawResponse(client, server, auth)

    def licenses_verify(
        self,
        state: str,
        *,
        license_number: str | None = None,
        name: str | None = None,
        license_type: str | None = None,
        limit: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1LicensesVerifyResponse:
        """Verify a professional license against the state board roll by license number, or by name when you do not have
        the number. Returns the raw status and expiry plus two derived flags, because a status that reads "current" can
        still be past its expiry date.

        - Branch on is_active, not on status. A board roll can carry a "Current" status on a license whose expiry date
            has already passed.

        Args:
            state: Two-letter state code.
            license_number: Exact license number. Provide this or name.
            name: Licensee name, substring match. Provide this or license_number.
            license_type: Substring filter on license type, e.g. "CAM".
            limit: Max results, 1 to 25 (default 10).
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
            self._with_raw_response.licenses_verify(
                state,
                license_number=license_number,
                name=name,
                license_type=license_type,
                limit=limit,
                request_options=request_options,
            ),
        )

    def professionals_associations(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ProfessionalsAssociationsResponse:
        """The communities a professional or firm is on record serving: the manager-to-portfolio view. Merges confirmed
        relationship edges with name-matched rows from the public management registry, de-duplicated, with the
        provenance of each row.

        - Read the source field before treating a row as confirmed. A "relationship:" row is a confirmed edge in the
            graph; a "manager_view:" row is a name match against a public registry and carries the ambiguity of name
            matching.
        - When the license has no linked organization (linked_org_id is null), only name-matched rows are returned.

        Args:
            id_: License record UUID, from the search endpoint.
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
        return unwrap(self._with_raw_response.professionals_associations(id_, request_options=request_options))

    def professionals_detail(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ProfessionalsResponse:
        """The full single-record projection for one licensed professional or firm, including the city/county/zip of
        record and the linked Common Elements organization. The street address is not returned: a licence with no firm
        and no d/b/a is an individual, and that address is overwhelmingly a home.

        - Business address of record only. No personal email or phone is returned by any Common Elements endpoint.

        Args:
            id_: License record UUID, from the search endpoint.
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
        return unwrap(self._with_raw_response.professionals_detail(id_, request_options=request_options))

    def professionals_search(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        license_type: str | None = None,
        board: str | None = None,
        status: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ProfessionalsSearchResponse:
        """Search the licensed professional graph: community association managers, contractors, engineers, and the firms
        they work under, from state licensing board rolls. Filter by name, state, license type, board, or status.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - At least one of q, state, license_type, or board is required. The roll is multi-million rows and cannot be
            paged unfiltered. Omitting all four returns a 400.

        Args:
            q: Licensee name, substring match. Minimum 2 characters.
            state: Two-letter state code.
            license_type: Exact license type, e.g. "CAM".
            board: Exact issuing board name.
            status: Exact board status.
            limit: Rows to return, 1 to 100 (default 25).
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
            self._with_raw_response.professionals_search(
                q=q,
                state=state,
                license_type=license_type,
                board=board,
                status=status,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ProfessionalsAndLicensesWithRawResponse:
        return self._with_raw_response


class AsyncProfessionalsAndLicenses:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProfessionalsAndLicensesWithRawResponse(client, server, auth)

    async def licenses_verify(
        self,
        state: str,
        *,
        license_number: str | None = None,
        name: str | None = None,
        license_type: str | None = None,
        limit: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1LicensesVerifyResponse:
        """Verify a professional license against the state board roll by license number, or by name when you do not have
        the number. Returns the raw status and expiry plus two derived flags, because a status that reads "current" can
        still be past its expiry date.

        - Branch on is_active, not on status. A board roll can carry a "Current" status on a license whose expiry date
            has already passed.

        Args:
            state: Two-letter state code.
            license_number: Exact license number. Provide this or name.
            name: Licensee name, substring match. Provide this or license_number.
            license_type: Substring filter on license type, e.g. "CAM".
            limit: Max results, 1 to 25 (default 10).
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
            await self._with_raw_response.licenses_verify(
                state,
                license_number=license_number,
                name=name,
                license_type=license_type,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def professionals_associations(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ProfessionalsAssociationsResponse:
        """The communities a professional or firm is on record serving: the manager-to-portfolio view. Merges confirmed
        relationship edges with name-matched rows from the public management registry, de-duplicated, with the
        provenance of each row.

        - Read the source field before treating a row as confirmed. A "relationship:" row is a confirmed edge in the
            graph; a "manager_view:" row is a name match against a public registry and carries the ambiguity of name
            matching.
        - When the license has no linked organization (linked_org_id is null), only name-matched rows are returned.

        Args:
            id_: License record UUID, from the search endpoint.
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
        return unwrap(await self._with_raw_response.professionals_associations(id_, request_options=request_options))

    async def professionals_detail(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ProfessionalsResponse:
        """The full single-record projection for one licensed professional or firm, including the city/county/zip of
        record and the linked Common Elements organization. The street address is not returned: a licence with no firm
        and no d/b/a is an individual, and that address is overwhelmingly a home.

        - Business address of record only. No personal email or phone is returned by any Common Elements endpoint.

        Args:
            id_: License record UUID, from the search endpoint.
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
        return unwrap(await self._with_raw_response.professionals_detail(id_, request_options=request_options))

    async def professionals_search(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        license_type: str | None = None,
        board: str | None = None,
        status: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ProfessionalsSearchResponse:
        """Search the licensed professional graph: community association managers, contractors, engineers, and the firms
        they work under, from state licensing board rolls. Filter by name, state, license type, board, or status.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - At least one of q, state, license_type, or board is required. The roll is multi-million rows and cannot be
            paged unfiltered. Omitting all four returns a 400.

        Args:
            q: Licensee name, substring match. Minimum 2 characters.
            state: Two-letter state code.
            license_type: Exact license type, e.g. "CAM".
            board: Exact issuing board name.
            status: Exact board status.
            limit: Rows to return, 1 to 100 (default 25).
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
            await self._with_raw_response.professionals_search(
                q=q,
                state=state,
                license_type=license_type,
                board=board,
                status=status,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProfessionalsAndLicensesWithRawResponse:
        return self._with_raw_response


class ProfessionalsAndLicensesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def licenses_verify(
        self,
        state: str,
        *,
        license_number: str | None = None,
        name: str | None = None,
        license_type: str | None = None,
        limit: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1LicensesVerifyResponse, LicensesVerifyErrorBody]:
        """Verify a professional license against the state board roll by license number, or by name when you do not have
        the number. Returns the raw status and expiry plus two derived flags, because a status that reads "current" can
        still be past its expiry date.

        - Branch on is_active, not on status. A board roll can carry a "Current" status on a license whose expiry date
            has already passed.

        Args:
            state: Two-letter state code.
            license_number: Exact license number. Provide this or name.
            name: Licensee name, substring match. Provide this or license_number.
            license_type: Substring filter on license type, e.g. "CAM".
            limit: Max results, 1 to 25 (default 10).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/licenses/verify"),
            query_params=[
                param[str]("state", state),
                param[str | None]("license_number", license_number),
                param[str | None]("name", name),
                param[str | None]("license_type", license_type),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1LicensesVerifyResponse],
            error_mapper=licenses_verify_error_mapper,
            request_options=request_options,
        )

    def professionals_associations(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ProfessionalsAssociationsResponse, ProfessionalsAssociationsErrorBody]:
        """The communities a professional or firm is on record serving: the manager-to-portfolio view. Merges confirmed
        relationship edges with name-matched rows from the public management registry, de-duplicated, with the
        provenance of each row.

        - Read the source field before treating a row as confirmed. A "relationship:" row is a confirmed edge in the
            graph; a "manager_view:" row is a name match against a public registry and carries the ambiguity of name
            matching.
        - When the license has no linked organization (linked_org_id is null), only name-matched rows are returned.

        Args:
            id_: License record UUID, from the search endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/professionals/{id}/associations"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ProfessionalsAssociationsResponse],
            error_mapper=professionals_associations_error_mapper,
            request_options=request_options,
        )

    def professionals_detail(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ProfessionalsResponse, ProfessionalsDetailErrorBody]:
        """The full single-record projection for one licensed professional or firm, including the city/county/zip of
        record and the linked Common Elements organization. The street address is not returned: a licence with no firm
        and no d/b/a is an individual, and that address is overwhelmingly a home.

        - Business address of record only. No personal email or phone is returned by any Common Elements endpoint.

        Args:
            id_: License record UUID, from the search endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/professionals/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ProfessionalsResponse],
            error_mapper=professionals_detail_error_mapper,
            request_options=request_options,
        )

    def professionals_search(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        license_type: str | None = None,
        board: str | None = None,
        status: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ProfessionalsSearchResponse, ProfessionalsSearchErrorBody]:
        """Search the licensed professional graph: community association managers, contractors, engineers, and the firms
        they work under, from state licensing board rolls. Filter by name, state, license type, board, or status.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - At least one of q, state, license_type, or board is required. The roll is multi-million rows and cannot be
            paged unfiltered. Omitting all four returns a 400.

        Args:
            q: Licensee name, substring match. Minimum 2 characters.
            state: Two-letter state code.
            license_type: Exact license type, e.g. "CAM".
            board: Exact issuing board name.
            status: Exact board status.
            limit: Rows to return, 1 to 100 (default 25).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/professionals/search"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("state", state),
                param[str | None]("license_type", license_type),
                param[str | None]("board", board),
                param[str | None]("status", status),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ProfessionalsSearchResponse],
            error_mapper=professionals_search_error_mapper,
            request_options=request_options,
        )


class AsyncProfessionalsAndLicensesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def licenses_verify(
        self,
        state: str,
        *,
        license_number: str | None = None,
        name: str | None = None,
        license_type: str | None = None,
        limit: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1LicensesVerifyResponse, LicensesVerifyErrorBody]:
        """Verify a professional license against the state board roll by license number, or by name when you do not have
        the number. Returns the raw status and expiry plus two derived flags, because a status that reads "current" can
        still be past its expiry date.

        - Branch on is_active, not on status. A board roll can carry a "Current" status on a license whose expiry date
            has already passed.

        Args:
            state: Two-letter state code.
            license_number: Exact license number. Provide this or name.
            name: Licensee name, substring match. Provide this or license_number.
            license_type: Substring filter on license type, e.g. "CAM".
            limit: Max results, 1 to 25 (default 10).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/licenses/verify"),
            query_params=[
                param[str]("state", state),
                param[str | None]("license_number", license_number),
                param[str | None]("name", name),
                param[str | None]("license_type", license_type),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1LicensesVerifyResponse],
            error_mapper=licenses_verify_error_mapper,
            request_options=request_options,
        )

    async def professionals_associations(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ProfessionalsAssociationsResponse, ProfessionalsAssociationsErrorBody]:
        """The communities a professional or firm is on record serving: the manager-to-portfolio view. Merges confirmed
        relationship edges with name-matched rows from the public management registry, de-duplicated, with the
        provenance of each row.

        - Read the source field before treating a row as confirmed. A "relationship:" row is a confirmed edge in the
            graph; a "manager_view:" row is a name match against a public registry and carries the ambiguity of name
            matching.
        - When the license has no linked organization (linked_org_id is null), only name-matched rows are returned.

        Args:
            id_: License record UUID, from the search endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/professionals/{id}/associations"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ProfessionalsAssociationsResponse],
            error_mapper=professionals_associations_error_mapper,
            request_options=request_options,
        )

    async def professionals_detail(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ProfessionalsResponse, ProfessionalsDetailErrorBody]:
        """The full single-record projection for one licensed professional or firm, including the city/county/zip of
        record and the linked Common Elements organization. The street address is not returned: a licence with no firm
        and no d/b/a is an individual, and that address is overwhelmingly a home.

        - Business address of record only. No personal email or phone is returned by any Common Elements endpoint.

        Args:
            id_: License record UUID, from the search endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/professionals/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ProfessionalsResponse],
            error_mapper=professionals_detail_error_mapper,
            request_options=request_options,
        )

    async def professionals_search(
        self,
        *,
        q: str | None = None,
        state: str | None = None,
        license_type: str | None = None,
        board: str | None = None,
        status: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ProfessionalsSearchResponse, ProfessionalsSearchErrorBody]:
        """Search the licensed professional graph: community association managers, contractors, engineers, and the firms
        they work under, from state licensing board rolls. Filter by name, state, license type, board, or status.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        - At least one of q, state, license_type, or board is required. The roll is multi-million rows and cannot be
            paged unfiltered. Omitting all four returns a 400.

        Args:
            q: Licensee name, substring match. Minimum 2 characters.
            state: Two-letter state code.
            license_type: Exact license type, e.g. "CAM".
            board: Exact issuing board name.
            status: Exact board status.
            limit: Rows to return, 1 to 100 (default 25).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/professionals/search"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("state", state),
                param[str | None]("license_type", license_type),
                param[str | None]("board", board),
                param[str | None]("status", status),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ProfessionalsSearchResponse],
            error_mapper=professionals_search_error_mapper,
            request_options=request_options,
        )
