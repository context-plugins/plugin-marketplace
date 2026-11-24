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
from ..errors.compliance_scan_error import ComplianceScanErrorBody, compliance_scan_error_mapper
from ..errors.geo_state_summary_error import GeoStateSummaryErrorBody, geo_state_summary_error_mapper
from ..models.api_v1_compliance_scan_request import ApiV1ComplianceScanRequest, ApiV1ComplianceScanRequestDict
from ..models.api_v1_compliance_scan_response import ApiV1ComplianceScanResponse
from ..models.api_v1_geo_state_summary_response import ApiV1GeoStateSummaryResponse
from ..server.server import Server


class AggregatesAndCompliance:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AggregatesAndComplianceWithRawResponse(client, server, auth)

    def compliance_scan(
        self,
        body: ApiV1ComplianceScanRequest | ApiV1ComplianceScanRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ComplianceScanResponse:
        """Submit a community association document for automated compliance analysis. Returns a structured assessment
        against Florida and multi-state statutory requirements, plus best-practice governance rules.

        Args:
            body: The request body.
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
        return unwrap(self._with_raw_response.compliance_scan(body, request_options=request_options))

    def geo_state_summary(
        self, *, state: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1GeoStateSummaryResponse:
        """Per-state rollup of the dataset: association counts broken out by subtype, plus insurance licensee counts.
        The market-sizing call: how much of a state the data covers before you build against it.

        **Plan:** Available on every plan, uncapped: this returns one row per state, not a row listing.

        - Aggregate counts only. No per-association rows, no personal data. Counts move as ingestion runs, so treat them
            as current rather than fixed.

        Args:
            state: Two-letter state code. Omit for every state, ranked by association count.
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
        return unwrap(self._with_raw_response.geo_state_summary(state=state, request_options=request_options))

    @property
    def with_raw_response(self) -> AggregatesAndComplianceWithRawResponse:
        return self._with_raw_response


class AsyncAggregatesAndCompliance:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAggregatesAndComplianceWithRawResponse(client, server, auth)

    async def compliance_scan(
        self,
        body: ApiV1ComplianceScanRequest | ApiV1ComplianceScanRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ComplianceScanResponse:
        """Submit a community association document for automated compliance analysis. Returns a structured assessment
        against Florida and multi-state statutory requirements, plus best-practice governance rules.

        Args:
            body: The request body.
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
        return unwrap(await self._with_raw_response.compliance_scan(body, request_options=request_options))

    async def geo_state_summary(
        self, *, state: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1GeoStateSummaryResponse:
        """Per-state rollup of the dataset: association counts broken out by subtype, plus insurance licensee counts.
        The market-sizing call: how much of a state the data covers before you build against it.

        **Plan:** Available on every plan, uncapped: this returns one row per state, not a row listing.

        - Aggregate counts only. No per-association rows, no personal data. Counts move as ingestion runs, so treat them
            as current rather than fixed.

        Args:
            state: Two-letter state code. Omit for every state, ranked by association count.
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
        return unwrap(await self._with_raw_response.geo_state_summary(state=state, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAggregatesAndComplianceWithRawResponse:
        return self._with_raw_response


class AggregatesAndComplianceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def compliance_scan(
        self,
        body: ApiV1ComplianceScanRequest | ApiV1ComplianceScanRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ComplianceScanResponse, ComplianceScanErrorBody]:
        """Submit a community association document for automated compliance analysis. Returns a structured assessment
        against Florida and multi-state statutory requirements, plus best-practice governance rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/compliance/scan"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ComplianceScanRequest | ApiV1ComplianceScanRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ComplianceScanResponse],
            error_mapper=compliance_scan_error_mapper,
            request_options=request_options,
        )

    def geo_state_summary(
        self, *, state: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1GeoStateSummaryResponse, GeoStateSummaryErrorBody]:
        """Per-state rollup of the dataset: association counts broken out by subtype, plus insurance licensee counts.
        The market-sizing call: how much of a state the data covers before you build against it.

        **Plan:** Available on every plan, uncapped: this returns one row per state, not a row listing.

        - Aggregate counts only. No per-association rows, no personal data. Counts move as ingestion runs, so treat them
            as current rather than fixed.

        Args:
            state: Two-letter state code. Omit for every state, ranked by association count.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/geo/state-summary"),
            query_params=[param[str | None]("state", state)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1GeoStateSummaryResponse],
            error_mapper=geo_state_summary_error_mapper,
            request_options=request_options,
        )


class AsyncAggregatesAndComplianceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def compliance_scan(
        self,
        body: ApiV1ComplianceScanRequest | ApiV1ComplianceScanRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ComplianceScanResponse, ComplianceScanErrorBody]:
        """Submit a community association document for automated compliance analysis. Returns a structured assessment
        against Florida and multi-state statutory requirements, plus best-practice governance rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/compliance/scan"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ComplianceScanRequest | ApiV1ComplianceScanRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ComplianceScanResponse],
            error_mapper=compliance_scan_error_mapper,
            request_options=request_options,
        )

    async def geo_state_summary(
        self, *, state: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1GeoStateSummaryResponse, GeoStateSummaryErrorBody]:
        """Per-state rollup of the dataset: association counts broken out by subtype, plus insurance licensee counts.
        The market-sizing call: how much of a state the data covers before you build against it.

        **Plan:** Available on every plan, uncapped: this returns one row per state, not a row listing.

        - Aggregate counts only. No per-association rows, no personal data. Counts move as ingestion runs, so treat them
            as current rather than fixed.

        Args:
            state: Two-letter state code. Omit for every state, ranked by association count.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/geo/state-summary"),
            query_params=[param[str | None]("state", state)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1GeoStateSummaryResponse],
            error_mapper=geo_state_summary_error_mapper,
            request_options=request_options,
        )
