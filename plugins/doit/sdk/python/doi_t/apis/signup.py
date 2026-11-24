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
from ..errors.create_signup_request_error import CreateSignupRequestErrorBody, create_signup_request_error_mapper
from ..errors.create_signup_session_error import CreateSignupSessionErrorBody, create_signup_session_error_mapper
from ..errors.get_signup_request_error import GetSignupRequestErrorBody, get_signup_request_error_mapper
from ..errors.resend_signup_verification_error import (
    ResendSignupVerificationErrorBody,
    resend_signup_verification_error_mapper,
)
from ..errors.verify_signup_request_error import VerifySignupRequestErrorBody, verify_signup_request_error_mapper
from ..models.signup_request import SignupRequest
from ..models.signup_request_create import SignupRequestCreate, SignupRequestCreateDict
from ..models.signup_session import SignupSession
from ..models.signup_session_request import SignupSessionRequest, SignupSessionRequestDict
from ..models.signup_verification_code import SignupVerificationCode, SignupVerificationCodeDict
from ..server.server import Server


class Signup:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SignupWithRawResponse(client, server)

    def create_signup_request(
        self,
        idempotency_key: str,
        body: SignupRequestCreate | SignupRequestCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignupRequest:
        """Starts a Cloud Intelligence trial signup for the organization owning the email domain. Idempotent per
        Idempotency-Key: a retried create returns the same request. Nothing is provisioned until the admin verifies the
        request. Human channels (console, web) additionally require a Cloudflare Turnstile token and an accepted Terms
        of Service version; the emailed 6-digit verification code is then the consent act. Agents should present
        consentUrl to the organization's admin and poll getSignupRequest.

        Args:
            idempotency_key: Caller-chosen key (1-256 characters) that makes retries safe; the same key returns the same
                request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - the signup request awaits the admin's verification.

        Raises:
            ApiError: Invalid request. code is one of invalid_request, idempotency_key_required,
                corporate_email_required, bot_check_failed, terms_consent_required, terms_version_outdated. Forbidden.
                code is trial_invites_disabled (new trial invitations are only available in production) or
                signup_blocked (suspected Terms of Use violation; carries appealUrl, the page where the person can
                appeal). Conflict. code is one of email_already_registered, domain_already_registered (both carry
                signInUrl), partner_domain_not_allowed, signup_already_pending (carries signupRequestId),
                trial_already_used. Rate limited; retry after the Retry-After header. Signup temporarily unavailable
                (signup_disabled, validation_unavailable, verification_unavailable); retryable. ``error`` is
                ``SignupProblem | RawError``."""
        return unwrap(
            self._with_raw_response.create_signup_request(idempotency_key, body, request_options=request_options)
        )

    def create_signup_session(
        self,
        signup_request_id: str,
        body: SignupSessionRequest | SignupSessionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignupSession:
        """Exchanges the one-time activationToken returned by verifySignupRequest for a Firebase custom token once the
        request is completed, so the browser that entered the code lands in the new tenant without a second email. The
        token is bound to the request, single-use and valid for 10 minutes. Sign in with signInWithCustomToken against
        tenantId, then open consoleUrl.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - a session for the tenant admin.

        Raises:
            ApiError: code is one of invalid_request, activation_token_invalid. No signup request exists with this id.
                activation_not_ready (provisioning still running, retry) or activation_token_used.
                activation_token_expired - use the sign-in link from the completion page instead. ``error`` is
                ``SignupProblem | RawError``."""
        return unwrap(
            self._with_raw_response.create_signup_session(signup_request_id, body, request_options=request_options)
        )

    def get_signup_request(
        self, signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SignupRequest:
        """Returns the current state of a signup request. Poll at the returned pollAfterSeconds cadence; once status is
        completed the response carries customerId, consoleUrl and signInUrl. The response never includes the requester's
        email or the verification code.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: No signup request exists with this id. Rate limited; retry after the Retry-After header. ``error``
                is ``SignupProblem | RawError``."""
        return unwrap(self._with_raw_response.get_signup_request(signup_request_id, request_options=request_options))

    def resend_signup_verification(
        self, signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SignupRequest:
        """Emails a fresh 6-digit code to the requester. At most three codes per request, at least 60 seconds apart.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - a new code was sent; verification.sendsRemaining tells how many resends are left.

        Raises:
            ApiError: No signup request exists with this id. The request is not awaiting verification
                (consent_conflict). Sent too recently (verification_resend_too_soon, retryable) or send limit reached
                (verification_locked). ``error`` is ``SignupProblem | RawError``."""
        return unwrap(
            self._with_raw_response.resend_signup_verification(signup_request_id, request_options=request_options)
        )

    def verify_signup_request(
        self,
        signup_request_id: str,
        body: SignupVerificationCode | SignupVerificationCodeDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignupRequest:
        """Confirms ownership of the admin email by entering the 6-digit code that was emailed when the request was
        created (or resent). Success records consent and starts provisioning; the request moves to consented and then
        completed. Five wrong codes lock the current code; request a new one with resendSignupVerification.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - the request is consented (or already past that point).

        Raises:
            ApiError: code is one of invalid_request, verification_code_invalid, verification_code_expired. No signup
                request exists with this id. The request is not awaiting verification (consent_conflict). Too many
                attempts (verification_locked) or rate limited. ``error`` is ``SignupProblem | RawError``."""
        return unwrap(
            self._with_raw_response.verify_signup_request(signup_request_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SignupWithRawResponse:
        return self._with_raw_response


class AsyncSignup:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSignupWithRawResponse(client, server)

    async def create_signup_request(
        self,
        idempotency_key: str,
        body: SignupRequestCreate | SignupRequestCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignupRequest:
        """Starts a Cloud Intelligence trial signup for the organization owning the email domain. Idempotent per
        Idempotency-Key: a retried create returns the same request. Nothing is provisioned until the admin verifies the
        request. Human channels (console, web) additionally require a Cloudflare Turnstile token and an accepted Terms
        of Service version; the emailed 6-digit verification code is then the consent act. Agents should present
        consentUrl to the organization's admin and poll getSignupRequest.

        Args:
            idempotency_key: Caller-chosen key (1-256 characters) that makes retries safe; the same key returns the same
                request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - the signup request awaits the admin's verification.

        Raises:
            ApiError: Invalid request. code is one of invalid_request, idempotency_key_required,
                corporate_email_required, bot_check_failed, terms_consent_required, terms_version_outdated. Forbidden.
                code is trial_invites_disabled (new trial invitations are only available in production) or
                signup_blocked (suspected Terms of Use violation; carries appealUrl, the page where the person can
                appeal). Conflict. code is one of email_already_registered, domain_already_registered (both carry
                signInUrl), partner_domain_not_allowed, signup_already_pending (carries signupRequestId),
                trial_already_used. Rate limited; retry after the Retry-After header. Signup temporarily unavailable
                (signup_disabled, validation_unavailable, verification_unavailable); retryable. ``error`` is
                ``SignupProblem | RawError``."""
        return unwrap(
            await self._with_raw_response.create_signup_request(idempotency_key, body, request_options=request_options)
        )

    async def create_signup_session(
        self,
        signup_request_id: str,
        body: SignupSessionRequest | SignupSessionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignupSession:
        """Exchanges the one-time activationToken returned by verifySignupRequest for a Firebase custom token once the
        request is completed, so the browser that entered the code lands in the new tenant without a second email. The
        token is bound to the request, single-use and valid for 10 minutes. Sign in with signInWithCustomToken against
        tenantId, then open consoleUrl.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - a session for the tenant admin.

        Raises:
            ApiError: code is one of invalid_request, activation_token_invalid. No signup request exists with this id.
                activation_not_ready (provisioning still running, retry) or activation_token_used.
                activation_token_expired - use the sign-in link from the completion page instead. ``error`` is
                ``SignupProblem | RawError``."""
        return unwrap(
            await self._with_raw_response.create_signup_session(
                signup_request_id, body, request_options=request_options
            ),
        )

    async def get_signup_request(
        self, signup_request_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SignupRequest:
        """Returns the current state of a signup request. Poll at the returned pollAfterSeconds cadence; once status is
        completed the response carries customerId, consoleUrl and signInUrl. The response never includes the requester's
        email or the verification code.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: No signup request exists with this id. Rate limited; retry after the Retry-After header. ``error``
                is ``SignupProblem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_signup_request(signup_request_id, request_options=request_options)
        )

    async def resend_signup_verification(
        self, signup_request_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SignupRequest:
        """Emails a fresh 6-digit code to the requester. At most three codes per request, at least 60 seconds apart.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - a new code was sent; verification.sendsRemaining tells how many resends are left.

        Raises:
            ApiError: No signup request exists with this id. The request is not awaiting verification
                (consent_conflict). Sent too recently (verification_resend_too_soon, retryable) or send limit reached
                (verification_locked). ``error`` is ``SignupProblem | RawError``."""
        return unwrap(
            await self._with_raw_response.resend_signup_verification(signup_request_id, request_options=request_options)
        )

    async def verify_signup_request(
        self,
        signup_request_id: str,
        body: SignupVerificationCode | SignupVerificationCodeDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignupRequest:
        """Confirms ownership of the admin email by entering the 6-digit code that was emailed when the request was
        created (or resent). Success records consent and starts provisioning; the request moves to consented and then
        completed. Five wrong codes lock the current code; request a new one with resendSignupVerification.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - the request is consented (or already past that point).

        Raises:
            ApiError: code is one of invalid_request, verification_code_invalid, verification_code_expired. No signup
                request exists with this id. The request is not awaiting verification (consent_conflict). Too many
                attempts (verification_locked) or rate limited. ``error`` is ``SignupProblem | RawError``."""
        return unwrap(
            await self._with_raw_response.verify_signup_request(
                signup_request_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSignupWithRawResponse:
        return self._with_raw_response


class SignupWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_signup_request(
        self,
        idempotency_key: str,
        body: SignupRequestCreate | SignupRequestCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignupRequest, CreateSignupRequestErrorBody]:
        """Starts a Cloud Intelligence trial signup for the organization owning the email domain. Idempotent per
        Idempotency-Key: a retried create returns the same request. Nothing is provisioned until the admin verifies the
        request. Human channels (console, web) additionally require a Cloudflare Turnstile token and an accepted Terms
        of Service version; the emailed 6-digit verification code is then the consent act. Agents should present
        consentUrl to the organization's admin and poll getSignupRequest.

        Args:
            idempotency_key: Caller-chosen key (1-256 characters) that makes retries safe; the same key returns the same
                request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup/v1/requests"),
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[SignupRequestCreate | SignupRequestCreateDict](body),
            decoder=json_decoder[SignupRequest],
            error_mapper=create_signup_request_error_mapper,
            request_options=request_options,
        )

    def create_signup_session(
        self,
        signup_request_id: str,
        body: SignupSessionRequest | SignupSessionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignupSession, CreateSignupSessionErrorBody]:
        """Exchanges the one-time activationToken returned by verifySignupRequest for a Firebase custom token once the
        request is completed, so the browser that entered the code lands in the new tenant without a second email. The
        token is bound to the request, single-use and valid for 10 minutes. Sign in with signInWithCustomToken against
        tenantId, then open consoleUrl.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup/v1/requests/{signupRequestId}/session"),
            path_params=[param[str]("signupRequestId", signup_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignupSessionRequest | SignupSessionRequestDict](body),
            decoder=json_decoder[SignupSession],
            error_mapper=create_signup_session_error_mapper,
            request_options=request_options,
        )

    def get_signup_request(
        self, signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SignupRequest, GetSignupRequestErrorBody]:
        """Returns the current state of a signup request. Poll at the returned pollAfterSeconds cadence; once status is
        completed the response carries customerId, consoleUrl and signInUrl. The response never includes the requester's
        email or the verification code.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/signup/v1/requests/{signupRequestId}"),
            path_params=[param[str]("signupRequestId", signup_request_id)],
            decoder=json_decoder[SignupRequest],
            error_mapper=get_signup_request_error_mapper,
            request_options=request_options,
        )

    def resend_signup_verification(
        self, signup_request_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SignupRequest, ResendSignupVerificationErrorBody]:
        """Emails a fresh 6-digit code to the requester. At most three codes per request, at least 60 seconds apart.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup/v1/requests/{signupRequestId}/verification"),
            path_params=[param[str]("signupRequestId", signup_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[SignupRequest],
            error_mapper=resend_signup_verification_error_mapper,
            request_options=request_options,
        )

    def verify_signup_request(
        self,
        signup_request_id: str,
        body: SignupVerificationCode | SignupVerificationCodeDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignupRequest, VerifySignupRequestErrorBody]:
        """Confirms ownership of the admin email by entering the 6-digit code that was emailed when the request was
        created (or resent). Success records consent and starts provisioning; the request moves to consented and then
        completed. Five wrong codes lock the current code; request a new one with resendSignupVerification.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup/v1/requests/{signupRequestId}/verify"),
            path_params=[param[str]("signupRequestId", signup_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignupVerificationCode | SignupVerificationCodeDict](body),
            decoder=json_decoder[SignupRequest],
            error_mapper=verify_signup_request_error_mapper,
            request_options=request_options,
        )


class AsyncSignupWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_signup_request(
        self,
        idempotency_key: str,
        body: SignupRequestCreate | SignupRequestCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignupRequest, CreateSignupRequestErrorBody]:
        """Starts a Cloud Intelligence trial signup for the organization owning the email domain. Idempotent per
        Idempotency-Key: a retried create returns the same request. Nothing is provisioned until the admin verifies the
        request. Human channels (console, web) additionally require a Cloudflare Turnstile token and an accepted Terms
        of Service version; the emailed 6-digit verification code is then the consent act. Agents should present
        consentUrl to the organization's admin and poll getSignupRequest.

        Args:
            idempotency_key: Caller-chosen key (1-256 characters) that makes retries safe; the same key returns the same
                request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup/v1/requests"),
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[SignupRequestCreate | SignupRequestCreateDict](body),
            decoder=async_json_decoder[SignupRequest],
            error_mapper=create_signup_request_error_mapper,
            request_options=request_options,
        )

    async def create_signup_session(
        self,
        signup_request_id: str,
        body: SignupSessionRequest | SignupSessionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignupSession, CreateSignupSessionErrorBody]:
        """Exchanges the one-time activationToken returned by verifySignupRequest for a Firebase custom token once the
        request is completed, so the browser that entered the code lands in the new tenant without a second email. The
        token is bound to the request, single-use and valid for 10 minutes. Sign in with signInWithCustomToken against
        tenantId, then open consoleUrl.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup/v1/requests/{signupRequestId}/session"),
            path_params=[param[str]("signupRequestId", signup_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignupSessionRequest | SignupSessionRequestDict](body),
            decoder=async_json_decoder[SignupSession],
            error_mapper=create_signup_session_error_mapper,
            request_options=request_options,
        )

    async def get_signup_request(
        self, signup_request_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SignupRequest, GetSignupRequestErrorBody]:
        """Returns the current state of a signup request. Poll at the returned pollAfterSeconds cadence; once status is
        completed the response carries customerId, consoleUrl and signInUrl. The response never includes the requester's
        email or the verification code.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/signup/v1/requests/{signupRequestId}"),
            path_params=[param[str]("signupRequestId", signup_request_id)],
            decoder=async_json_decoder[SignupRequest],
            error_mapper=get_signup_request_error_mapper,
            request_options=request_options,
        )

    async def resend_signup_verification(
        self, signup_request_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SignupRequest, ResendSignupVerificationErrorBody]:
        """Emails a fresh 6-digit code to the requester. At most three codes per request, at least 60 seconds apart.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup/v1/requests/{signupRequestId}/verification"),
            path_params=[param[str]("signupRequestId", signup_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[SignupRequest],
            error_mapper=resend_signup_verification_error_mapper,
            request_options=request_options,
        )

    async def verify_signup_request(
        self,
        signup_request_id: str,
        body: SignupVerificationCode | SignupVerificationCodeDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignupRequest, VerifySignupRequestErrorBody]:
        """Confirms ownership of the admin email by entering the 6-digit code that was emailed when the request was
        created (or resent). Success records consent and starts provisioning; the request moves to consented and then
        completed. Five wrong codes lock the current code; request a new one with resendSignupVerification.

        Args:
            signup_request_id: Public signup request id (sr_ prefix).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signup/v1/requests/{signupRequestId}/verify"),
            path_params=[param[str]("signupRequestId", signup_request_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignupVerificationCode | SignupVerificationCodeDict](body),
            decoder=async_json_decoder[SignupRequest],
            error_mapper=verify_signup_request_error_mapper,
            request_options=request_options,
        )
