from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bootstrap_send_otp_error import BootstrapSendOtpErrorBody, bootstrap_send_otp_error_mapper
from ..errors.bootstrap_verify_otp_error import BootstrapVerifyOtpErrorBody, bootstrap_verify_otp_error_mapper
from ..models.bootstrap_send_otp_request import BootstrapSendOtpRequest, BootstrapSendOtpRequestDict
from ..models.bootstrap_send_otp_response import BootstrapSendOtpResponse
from ..models.bootstrap_verify_otp_request import BootstrapVerifyOtpRequest, BootstrapVerifyOtpRequestDict
from ..models.bootstrap_verify_otp_response import BootstrapVerifyOtpResponse
from ..server.server import Server


class Bootstrap:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BootstrapWithRawResponse(client, server)

    def bootstrap_send_otp(
        self,
        body: BootstrapSendOtpRequest | BootstrapSendOtpRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BootstrapSendOtpResponse:
        """Sends a 6-digit code to the address, valid for a short window and usable once. Takes no credential — this is
        the entry point for a client that has none. Rate limited per email (2/minute), per IP (5/hour) and per IP across
        the whole bootstrap branch (20/hour). The response is identical whether or not the address already has an
        account, so it cannot be used to test for one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The code was sent.

        Raises:
            ApiError: ``invalid_request`` — a valid email is required. ``email_undeliverable`` — the address can never
                receive mail (a reserved domain such as example.com, or a non-ASCII mailbox no provider accepts), so no
                code is generated and nothing is sent. ``domain_not_allowed`` — the address sits in a zone we do not
                serve. ``write_disabled`` — the write surface is off (``API_WRITE_ENABLED=false``). 404 rather than 403
                so a disabled surface is not advertised. Hourly account (default 2000/h) or per-key (default 600/h)
                limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report
                the window that tripped (account on an account limit). Unexpected server error (``internal``). Report it
                with the ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be
                found, and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.bootstrap_send_otp(body, request_options=request_options))

    def bootstrap_verify_otp(
        self,
        body: BootstrapVerifyOtpRequest | BootstrapVerifyOtpRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BootstrapVerifyOtpResponse:
        """Verifies the code, creates the account if the address is new, records the terms acceptance, and returns a
        freshly minted key — the raw token EXACTLY ONCE. ``accept_terms`` must be true. Requested ``scopes`` must be
        within ``API_BOOTSTRAP_SCOPES`` (default ``read,sites:write``); omitting them yields that whole set, and
        ``billing:write`` is never obtainable here. Everything that can be rejected without the code is validated first,
        so a bad field does not burn a valid code. The key is always all-sites and always expires (90 days by default,
        365 max).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The account and its first key, including the one-time token.

        Raises:
            ApiError: ``terms_not_accepted`` (accept_terms was not true — no account is created), ``invalid_request``,
                ``invalid_scope`` (outside the bootstrap allowlist), ``invalid_expiry``, or ``key_limit_reached`` (an
                existing account already holds 10 active keys). ``otp_invalid`` — the code is wrong, expired, or already
                used. ``write_disabled`` — the write surface is off (``API_WRITE_ENABLED=false``). 404 rather than 403
                so a disabled surface is not advertised. Hourly account (default 2000/h) or per-key (default 600/h)
                limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report
                the window that tripped (account on an account limit). Unexpected server error (``internal``). Report it
                with the ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be
                found, and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.bootstrap_verify_otp(body, request_options=request_options))

    @property
    def with_raw_response(self) -> BootstrapWithRawResponse:
        return self._with_raw_response


class AsyncBootstrap:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBootstrapWithRawResponse(client, server)

    async def bootstrap_send_otp(
        self,
        body: BootstrapSendOtpRequest | BootstrapSendOtpRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BootstrapSendOtpResponse:
        """Sends a 6-digit code to the address, valid for a short window and usable once. Takes no credential — this is
        the entry point for a client that has none. Rate limited per email (2/minute), per IP (5/hour) and per IP across
        the whole bootstrap branch (20/hour). The response is identical whether or not the address already has an
        account, so it cannot be used to test for one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The code was sent.

        Raises:
            ApiError: ``invalid_request`` — a valid email is required. ``email_undeliverable`` — the address can never
                receive mail (a reserved domain such as example.com, or a non-ASCII mailbox no provider accepts), so no
                code is generated and nothing is sent. ``domain_not_allowed`` — the address sits in a zone we do not
                serve. ``write_disabled`` — the write surface is off (``API_WRITE_ENABLED=false``). 404 rather than 403
                so a disabled surface is not advertised. Hourly account (default 2000/h) or per-key (default 600/h)
                limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report
                the window that tripped (account on an account limit). Unexpected server error (``internal``). Report it
                with the ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be
                found, and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.bootstrap_send_otp(body, request_options=request_options))

    async def bootstrap_verify_otp(
        self,
        body: BootstrapVerifyOtpRequest | BootstrapVerifyOtpRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BootstrapVerifyOtpResponse:
        """Verifies the code, creates the account if the address is new, records the terms acceptance, and returns a
        freshly minted key — the raw token EXACTLY ONCE. ``accept_terms`` must be true. Requested ``scopes`` must be
        within ``API_BOOTSTRAP_SCOPES`` (default ``read,sites:write``); omitting them yields that whole set, and
        ``billing:write`` is never obtainable here. Everything that can be rejected without the code is validated first,
        so a bad field does not burn a valid code. The key is always all-sites and always expires (90 days by default,
        365 max).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The account and its first key, including the one-time token.

        Raises:
            ApiError: ``terms_not_accepted`` (accept_terms was not true — no account is created), ``invalid_request``,
                ``invalid_scope`` (outside the bootstrap allowlist), ``invalid_expiry``, or ``key_limit_reached`` (an
                existing account already holds 10 active keys). ``otp_invalid`` — the code is wrong, expired, or already
                used. ``write_disabled`` — the write surface is off (``API_WRITE_ENABLED=false``). 404 rather than 403
                so a disabled surface is not advertised. Hourly account (default 2000/h) or per-key (default 600/h)
                limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report
                the window that tripped (account on an account limit). Unexpected server error (``internal``). Report it
                with the ``request_id`` from the body or the X-Request-ID header: it is what lets the exact log entry be
                found, and without it a 500 can only be matched by guessing at a time window. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.bootstrap_verify_otp(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBootstrapWithRawResponse:
        return self._with_raw_response


class BootstrapWithRawResponse(BaseRawResponse[RawClient, Server]):
    def bootstrap_send_otp(
        self,
        body: BootstrapSendOtpRequest | BootstrapSendOtpRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BootstrapSendOtpResponse, BootstrapSendOtpErrorBody]:
        """Sends a 6-digit code to the address, valid for a short window and usable once. Takes no credential — this is
        the entry point for a client that has none. Rate limited per email (2/minute), per IP (5/hour) and per IP across
        the whole bootstrap branch (20/hour). The response is identical whether or not the address already has an
        account, so it cannot be used to test for one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/auth/send-otp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BootstrapSendOtpRequest | BootstrapSendOtpRequestDict](body),
            decoder=json_decoder[BootstrapSendOtpResponse],
            error_mapper=bootstrap_send_otp_error_mapper,
            request_options=request_options,
        )

    def bootstrap_verify_otp(
        self,
        body: BootstrapVerifyOtpRequest | BootstrapVerifyOtpRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BootstrapVerifyOtpResponse, BootstrapVerifyOtpErrorBody]:
        """Verifies the code, creates the account if the address is new, records the terms acceptance, and returns a
        freshly minted key — the raw token EXACTLY ONCE. ``accept_terms`` must be true. Requested ``scopes`` must be
        within ``API_BOOTSTRAP_SCOPES`` (default ``read,sites:write``); omitting them yields that whole set, and
        ``billing:write`` is never obtainable here. Everything that can be rejected without the code is validated first,
        so a bad field does not burn a valid code. The key is always all-sites and always expires (90 days by default,
        365 max).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/auth/verify-otp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BootstrapVerifyOtpRequest | BootstrapVerifyOtpRequestDict](body),
            decoder=json_decoder[BootstrapVerifyOtpResponse],
            error_mapper=bootstrap_verify_otp_error_mapper,
            request_options=request_options,
        )


class AsyncBootstrapWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def bootstrap_send_otp(
        self,
        body: BootstrapSendOtpRequest | BootstrapSendOtpRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BootstrapSendOtpResponse, BootstrapSendOtpErrorBody]:
        """Sends a 6-digit code to the address, valid for a short window and usable once. Takes no credential — this is
        the entry point for a client that has none. Rate limited per email (2/minute), per IP (5/hour) and per IP across
        the whole bootstrap branch (20/hour). The response is identical whether or not the address already has an
        account, so it cannot be used to test for one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/auth/send-otp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BootstrapSendOtpRequest | BootstrapSendOtpRequestDict](body),
            decoder=async_json_decoder[BootstrapSendOtpResponse],
            error_mapper=bootstrap_send_otp_error_mapper,
            request_options=request_options,
        )

    async def bootstrap_verify_otp(
        self,
        body: BootstrapVerifyOtpRequest | BootstrapVerifyOtpRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BootstrapVerifyOtpResponse, BootstrapVerifyOtpErrorBody]:
        """Verifies the code, creates the account if the address is new, records the terms acceptance, and returns a
        freshly minted key — the raw token EXACTLY ONCE. ``accept_terms`` must be true. Requested ``scopes`` must be
        within ``API_BOOTSTRAP_SCOPES`` (default ``read,sites:write``); omitting them yields that whole set, and
        ``billing:write`` is never obtainable here. Everything that can be rejected without the code is validated first,
        so a bad field does not burn a valid code. The key is always all-sites and always expires (90 days by default,
        365 max).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/auth/verify-otp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BootstrapVerifyOtpRequest | BootstrapVerifyOtpRequestDict](body),
            decoder=async_json_decoder[BootstrapVerifyOtpResponse],
            error_mapper=bootstrap_verify_otp_error_mapper,
            request_options=request_options,
        )
