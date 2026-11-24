from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_scan_error import GetScanErrorBody, get_scan_error_mapper
from ..errors.list_scans_error import ListScansErrorBody, list_scans_error_mapper
from ..errors.start_scan_error import StartScanErrorBody, start_scan_error_mapper
from ..errors.x402_scan_challenge_error import X402ScanChallengeErrorBody, x402_scan_challenge_error_mapper
from ..errors.x402_scan_error import X402ScanErrorBody, x402_scan_error_mapper
from ..models.api_x402_scan_request import ApiX402ScanRequest, ApiX402ScanRequestDict
from ..models.paid_scan_response import PaidScanResponse
from ..models.scan import Scan
from ..models.scan_list_response import ScanListResponse
from ..models.start_scan_request import StartScanRequest, StartScanRequestDict
from ..models.start_scan_response import StartScanResponse
from ..server.server import Server


class Scans:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScansWithRawResponse(client, server, auth)

    def get_scan(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Scan:
        """Returns the full scan including per-check results. Returns 404 if the scan does not exist or is not owned by
        the API key's user.

        Args:
            id_: Scan id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scan.

        Raises:
            ApiError: Missing or invalid API key. Subscription required. Scan not found. Polling too frequently.
                Response carries ``Retry-After`` (seconds) plus ``X-RateLimit-Limit`` and ``X-RateLimit-Remaining``.
                Internal server error. Service temporarily unavailable. Retry with backoff. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_scan(id_, request_options=request_options))

    def list_scans(
        self,
        *,
        limit: int | None = None,
        cursor: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScanListResponse:
        """Returns scans owned by the API key's user, newest first. Cursor-paginate by passing the ``nextCursor`` value
        from a previous response as the ``cursor`` query parameter on the next request; ``nextCursor`` is only returned
        when the page filled exactly to ``limit``.

        Args:
            limit: Value sent with the request.
            cursor: Opaque pagination cursor (ISO 8601 datetime returned as ``nextCursor`` by a previous response).
                Returns scans strictly older than the cursor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scan list.

        Raises:
            ApiError: Missing or invalid API key. Subscription required. Internal server error. Service temporarily
                unavailable. Retry with backoff. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_scans(limit=limit, cursor=cursor, request_options=request_options))

    def start_scan(
        self,
        body: StartScanRequest | StartScanRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartScanResponse:
        """Queues an asynchronous scan and returns a 202 with the scan id. Poll GET /api/v1/scans/{id} until status is
        'completed' or 'failed'.

        Supply an optional ``Idempotency-Key`` header to make retries safe: the first request runs the scan and any
        retry carrying the same key replays the original 202 (with ``Idempotency-Replayed: true``) instead of starting a
        duplicate. Reusing a key with a different request body returns 422; a retry that arrives while the first is
        still in flight returns 409. Keys are retained for 24 hours.

        Args:
            body: The request body.
            idempotency_key: Optional client-generated key (1-255 chars, [A-Za-z0-9_-]) that makes this POST safe to
                retry. The same key replays the original response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scan queued. The ``Location`` response header carries the polling URL (per RFC 7231 §6.3.3); the same URL is
            also returned as ``pollUrl`` in the body.

        Raises:
            ApiError: Invalid request body, URL, or Idempotency-Key. Missing or invalid API key. Subscription required.
                A request with the same ``Idempotency-Key`` is still in progress. The ``Idempotency-Key`` was already
                used with a different request body. Rate limit exceeded. Response carries ``Retry-After`` (seconds) plus
                ``X-RateLimit-Limit`` and ``X-RateLimit-Remaining``. Back off using exponential delay with jitter — see
                the Rate limits & retry section in the docs. Internal server error. Service temporarily unavailable.
                Retry with backoff. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.start_scan(body, idempotency_key=idempotency_key, request_options=request_options)
        )

    def x402_scan(
        self,
        body: ApiX402ScanRequest | ApiX402ScanRequestDict,
        *,
        x_payment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaidScanResponse:
        """Runs an agent-readability scan paid via x402 v2 (no account or subscription). Without a valid ``X-PAYMENT``
        header this returns a v2 402 challenge; sign the EIP-3009 USDC authorization for one of the advertised tiers and
        resend the v2 payment payload in the ``X-PAYMENT`` header to run the scan. Settlement is on Base mainnet (CAIP-2
        eip155:8453; the facilitator pays gas); the response carries an ``X-PAYMENT-RESPONSE`` header. Tiers: $0.02 (25
        pages), $0.25 (250 pages).

        Args:
            body: The request body.
            x_payment: Base64-encoded signed x402 payment authorization. Omit it to receive the 402 challenge.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment verified and the scan completed. The ``X-PAYMENT-RESPONSE`` header carries the settlement.

        Raises:
            ApiError: Invalid JSON body, URL, or a blocked address. Payment required or verification failed. The
                ``PAYMENT-REQUIRED`` header (and JSON body) carry the x402 v2 challenge ({ x402Version, resource,
                accepts, error }). The scan failed after payment. Retry. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.x402_scan(body, x_payment=x_payment, request_options=request_options))

    def x402_scan_challenge(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Returns an HTTP 402 payment-requirements challenge for the paid scan resource (x402 v2). This is the
        discovery/probe surface: it always 402s with the v2 PaymentRequired delivered in the base64 ``PAYMENT-REQUIRED``
        response header (and mirrored in the JSON body) — x402Version 2 + resource + accepts[] + Bazaar discovery
        extensions. To run a scan, POST to this path with a signed PAYMENT-SIGNATURE (x402 v2) or X-PAYMENT (v1) header.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Payment required. The ``PAYMENT-REQUIRED`` header (and JSON body) carry an x402 v2 PaymentRequired
                object: { x402Version: 2, resource, accepts: [...] }. Each ``accepts`` entry uses ``amount`` (atomic
                units) and a CAIP-2 ``network`` (eip155:8453 = Base mainnet). Two tiers — $0.02 USDC (25 pages), $0.25
                (250 pages). ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.x402_scan_challenge(request_options=request_options))

    @property
    def with_raw_response(self) -> ScansWithRawResponse:
        return self._with_raw_response


class AsyncScans:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScansWithRawResponse(client, server, auth)

    async def get_scan(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Scan:
        """Returns the full scan including per-check results. Returns 404 if the scan does not exist or is not owned by
        the API key's user.

        Args:
            id_: Scan id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scan.

        Raises:
            ApiError: Missing or invalid API key. Subscription required. Scan not found. Polling too frequently.
                Response carries ``Retry-After`` (seconds) plus ``X-RateLimit-Limit`` and ``X-RateLimit-Remaining``.
                Internal server error. Service temporarily unavailable. Retry with backoff. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_scan(id_, request_options=request_options))

    async def list_scans(
        self,
        *,
        limit: int | None = None,
        cursor: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScanListResponse:
        """Returns scans owned by the API key's user, newest first. Cursor-paginate by passing the ``nextCursor`` value
        from a previous response as the ``cursor`` query parameter on the next request; ``nextCursor`` is only returned
        when the page filled exactly to ``limit``.

        Args:
            limit: Value sent with the request.
            cursor: Opaque pagination cursor (ISO 8601 datetime returned as ``nextCursor`` by a previous response).
                Returns scans strictly older than the cursor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scan list.

        Raises:
            ApiError: Missing or invalid API key. Subscription required. Internal server error. Service temporarily
                unavailable. Retry with backoff. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_scans(limit=limit, cursor=cursor, request_options=request_options)
        )

    async def start_scan(
        self,
        body: StartScanRequest | StartScanRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartScanResponse:
        """Queues an asynchronous scan and returns a 202 with the scan id. Poll GET /api/v1/scans/{id} until status is
        'completed' or 'failed'.

        Supply an optional ``Idempotency-Key`` header to make retries safe: the first request runs the scan and any
        retry carrying the same key replays the original 202 (with ``Idempotency-Replayed: true``) instead of starting a
        duplicate. Reusing a key with a different request body returns 422; a retry that arrives while the first is
        still in flight returns 409. Keys are retained for 24 hours.

        Args:
            body: The request body.
            idempotency_key: Optional client-generated key (1-255 chars, [A-Za-z0-9_-]) that makes this POST safe to
                retry. The same key replays the original response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Scan queued. The ``Location`` response header carries the polling URL (per RFC 7231 §6.3.3); the same URL is
            also returned as ``pollUrl`` in the body.

        Raises:
            ApiError: Invalid request body, URL, or Idempotency-Key. Missing or invalid API key. Subscription required.
                A request with the same ``Idempotency-Key`` is still in progress. The ``Idempotency-Key`` was already
                used with a different request body. Rate limit exceeded. Response carries ``Retry-After`` (seconds) plus
                ``X-RateLimit-Limit`` and ``X-RateLimit-Remaining``. Back off using exponential delay with jitter — see
                the Rate limits & retry section in the docs. Internal server error. Service temporarily unavailable.
                Retry with backoff. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.start_scan(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def x402_scan(
        self,
        body: ApiX402ScanRequest | ApiX402ScanRequestDict,
        *,
        x_payment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaidScanResponse:
        """Runs an agent-readability scan paid via x402 v2 (no account or subscription). Without a valid ``X-PAYMENT``
        header this returns a v2 402 challenge; sign the EIP-3009 USDC authorization for one of the advertised tiers and
        resend the v2 payment payload in the ``X-PAYMENT`` header to run the scan. Settlement is on Base mainnet (CAIP-2
        eip155:8453; the facilitator pays gas); the response carries an ``X-PAYMENT-RESPONSE`` header. Tiers: $0.02 (25
        pages), $0.25 (250 pages).

        Args:
            body: The request body.
            x_payment: Base64-encoded signed x402 payment authorization. Omit it to receive the 402 challenge.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment verified and the scan completed. The ``X-PAYMENT-RESPONSE`` header carries the settlement.

        Raises:
            ApiError: Invalid JSON body, URL, or a blocked address. Payment required or verification failed. The
                ``PAYMENT-REQUIRED`` header (and JSON body) carry the x402 v2 challenge ({ x402Version, resource,
                accepts, error }). The scan failed after payment. Retry. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.x402_scan(body, x_payment=x_payment, request_options=request_options)
        )

    async def x402_scan_challenge(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Returns an HTTP 402 payment-requirements challenge for the paid scan resource (x402 v2). This is the
        discovery/probe surface: it always 402s with the v2 PaymentRequired delivered in the base64 ``PAYMENT-REQUIRED``
        response header (and mirrored in the JSON body) — x402Version 2 + resource + accepts[] + Bazaar discovery
        extensions. To run a scan, POST to this path with a signed PAYMENT-SIGNATURE (x402 v2) or X-PAYMENT (v1) header.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Payment required. The ``PAYMENT-REQUIRED`` header (and JSON body) carry an x402 v2 PaymentRequired
                object: { x402Version: 2, resource, accepts: [...] }. Each ``accepts`` entry uses ``amount`` (atomic
                units) and a CAIP-2 ``network`` (eip155:8453 = Base mainnet). Two tiers — $0.02 USDC (25 pages), $0.25
                (250 pages). ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.x402_scan_challenge(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncScansWithRawResponse:
        return self._with_raw_response


class ScansWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_scan(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Scan, GetScanErrorBody]:
        """Returns the full scan including per-check results. Returns 404 if the scan does not exist or is not owned by
        the API key's user.

        Args:
            id_: Scan id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/scans/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Scan],
            error_mapper=get_scan_error_mapper,
            request_options=request_options,
        )

    def list_scans(
        self,
        *,
        limit: int | None = None,
        cursor: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScanListResponse, ListScansErrorBody]:
        """Returns scans owned by the API key's user, newest first. Cursor-paginate by passing the ``nextCursor`` value
        from a previous response as the ``cursor`` query parameter on the next request; ``nextCursor`` is only returned
        when the page filled exactly to ``limit``.

        Args:
            limit: Value sent with the request.
            cursor: Opaque pagination cursor (ISO 8601 datetime returned as ``nextCursor`` by a previous response).
                Returns scans strictly older than the cursor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/scans"),
            query_params=[param[int | None]("limit", limit), param[RFC3339DateTime | None]("cursor", cursor)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[ScanListResponse],
            error_mapper=list_scans_error_mapper,
            request_options=request_options,
        )

    def start_scan(
        self,
        body: StartScanRequest | StartScanRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartScanResponse, StartScanErrorBody]:
        """Queues an asynchronous scan and returns a 202 with the scan id. Poll GET /api/v1/scans/{id} until status is
        'completed' or 'failed'.

        Supply an optional ``Idempotency-Key`` header to make retries safe: the first request runs the scan and any
        retry carrying the same key replays the original 202 (with ``Idempotency-Replayed: true``) instead of starting a
        duplicate. Reusing a key with a different request body returns 422; a retry that arrives while the first is
        still in flight returns 409. Keys are retained for 24 hours.

        Args:
            body: The request body.
            idempotency_key: Optional client-generated key (1-255 chars, [A-Za-z0-9_-]) that makes this POST safe to
                retry. The same key replays the original response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/scans"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[StartScanRequest | StartScanRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[StartScanResponse],
            error_mapper=start_scan_error_mapper,
            request_options=request_options,
        )

    def x402_scan(
        self,
        body: ApiX402ScanRequest | ApiX402ScanRequestDict,
        *,
        x_payment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaidScanResponse, X402ScanErrorBody]:
        """Runs an agent-readability scan paid via x402 v2 (no account or subscription). Without a valid ``X-PAYMENT``
        header this returns a v2 402 challenge; sign the EIP-3009 USDC authorization for one of the advertised tiers and
        resend the v2 payment payload in the ``X-PAYMENT`` header to run the scan. Settlement is on Base mainnet (CAIP-2
        eip155:8453; the facilitator pays gas); the response carries an ``X-PAYMENT-RESPONSE`` header. Tiers: $0.02 (25
        pages), $0.25 (250 pages).

        Args:
            body: The request body.
            x_payment: Base64-encoded signed x402 payment authorization. Omit it to receive the 402 challenge.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/x402/scan"),
            headers=[param[str | None]("X-PAYMENT", x_payment), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiX402ScanRequest | ApiX402ScanRequestDict](body),
            decoder=json_decoder[PaidScanResponse],
            error_mapper=x402_scan_error_mapper,
            request_options=request_options,
        )

    def x402_scan_challenge(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, X402ScanChallengeErrorBody]:
        """Returns an HTTP 402 payment-requirements challenge for the paid scan resource (x402 v2). This is the
        discovery/probe surface: it always 402s with the v2 PaymentRequired delivered in the base64 ``PAYMENT-REQUIRED``
        response header (and mirrored in the JSON body) — x402Version 2 + resource + accepts[] + Bazaar discovery
        extensions. To run a scan, POST to this path with a signed PAYMENT-SIGNATURE (x402 v2) or X-PAYMENT (v1) header.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/x402/scan"),
            decoder=empty_response,
            error_mapper=x402_scan_challenge_error_mapper,
            request_options=request_options,
        )


class AsyncScansWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_scan(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Scan, GetScanErrorBody]:
        """Returns the full scan including per-check results. Returns 404 if the scan does not exist or is not owned by
        the API key's user.

        Args:
            id_: Scan id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/scans/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Scan],
            error_mapper=get_scan_error_mapper,
            request_options=request_options,
        )

    async def list_scans(
        self,
        *,
        limit: int | None = None,
        cursor: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScanListResponse, ListScansErrorBody]:
        """Returns scans owned by the API key's user, newest first. Cursor-paginate by passing the ``nextCursor`` value
        from a previous response as the ``cursor`` query parameter on the next request; ``nextCursor`` is only returned
        when the page filled exactly to ``limit``.

        Args:
            limit: Value sent with the request.
            cursor: Opaque pagination cursor (ISO 8601 datetime returned as ``nextCursor`` by a previous response).
                Returns scans strictly older than the cursor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/scans"),
            query_params=[param[int | None]("limit", limit), param[RFC3339DateTime | None]("cursor", cursor)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[ScanListResponse],
            error_mapper=list_scans_error_mapper,
            request_options=request_options,
        )

    async def start_scan(
        self,
        body: StartScanRequest | StartScanRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartScanResponse, StartScanErrorBody]:
        """Queues an asynchronous scan and returns a 202 with the scan id. Poll GET /api/v1/scans/{id} until status is
        'completed' or 'failed'.

        Supply an optional ``Idempotency-Key`` header to make retries safe: the first request runs the scan and any
        retry carrying the same key replays the original 202 (with ``Idempotency-Replayed: true``) instead of starting a
        duplicate. Reusing a key with a different request body returns 422; a retry that arrives while the first is
        still in flight returns 409. Keys are retained for 24 hours.

        Args:
            body: The request body.
            idempotency_key: Optional client-generated key (1-255 chars, [A-Za-z0-9_-]) that makes this POST safe to
                retry. The same key replays the original response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/scans"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[StartScanRequest | StartScanRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[StartScanResponse],
            error_mapper=start_scan_error_mapper,
            request_options=request_options,
        )

    async def x402_scan(
        self,
        body: ApiX402ScanRequest | ApiX402ScanRequestDict,
        *,
        x_payment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaidScanResponse, X402ScanErrorBody]:
        """Runs an agent-readability scan paid via x402 v2 (no account or subscription). Without a valid ``X-PAYMENT``
        header this returns a v2 402 challenge; sign the EIP-3009 USDC authorization for one of the advertised tiers and
        resend the v2 payment payload in the ``X-PAYMENT`` header to run the scan. Settlement is on Base mainnet (CAIP-2
        eip155:8453; the facilitator pays gas); the response carries an ``X-PAYMENT-RESPONSE`` header. Tiers: $0.02 (25
        pages), $0.25 (250 pages).

        Args:
            body: The request body.
            x_payment: Base64-encoded signed x402 payment authorization. Omit it to receive the 402 challenge.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/x402/scan"),
            headers=[param[str | None]("X-PAYMENT", x_payment), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiX402ScanRequest | ApiX402ScanRequestDict](body),
            decoder=async_json_decoder[PaidScanResponse],
            error_mapper=x402_scan_error_mapper,
            request_options=request_options,
        )

    async def x402_scan_challenge(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, X402ScanChallengeErrorBody]:
        """Returns an HTTP 402 payment-requirements challenge for the paid scan resource (x402 v2). This is the
        discovery/probe surface: it always 402s with the v2 PaymentRequired delivered in the base64 ``PAYMENT-REQUIRED``
        response header (and mirrored in the JSON body) — x402Version 2 + resource + accepts[] + Bazaar discovery
        extensions. To run a scan, POST to this path with a signed PAYMENT-SIGNATURE (x402 v2) or X-PAYMENT (v1) header.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/x402/scan"),
            decoder=async_empty_response,
            error_mapper=x402_scan_challenge_error_mapper,
            request_options=request_options,
        )
