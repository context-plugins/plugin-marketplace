from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.generate_challenge_error import GenerateChallengeErrorBody, generate_challenge_error_mapper
from ..errors.setup_error import SetupErrorBody, setup_error_mapper
from ..errors.validate_challenge_error import ValidateChallengeErrorBody, validate_challenge_error_mapper
from ..errors.validate_error import ValidateErrorBody, validate_error_mapper
from ..models.list_mfa_phone_response_dto import ListMfaPhoneResponseDto
from ..models.mfa_challenge_request_dto import MfaChallengeRequestDto, MfaChallengeRequestDtoDict
from ..models.mfa_challenge_response_dto import MfaChallengeResponseDto
from ..models.mfa_challenge_validate_request_dto import (
    MfaChallengeValidateRequestDto,
    MfaChallengeValidateRequestDtoDict,
)
from ..models.mfa_challenge_validate_response_dto import MfaChallengeValidateResponseDto
from ..models.mfa_setup_request_dto import MfaSetupRequestDto, MfaSetupRequestDtoDict
from ..models.mfa_setup_response_dto import MfaSetupResponseDto
from ..models.mfa_setup_validate_request_dto import MfaSetupValidateRequestDto, MfaSetupValidateRequestDtoDict
from ..models.mfa_step_up_request_dto import MfaStepUpRequestDto, MfaStepUpRequestDtoDict
from ..models.mfa_step_up_response_dto import MfaStepUpResponseDto
from ..models.status_dto import StatusDto
from ..server.server import Server


class Mfa:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MfaWithRawResponse(client, server)

    def generate_challenge(
        self,
        body: MfaChallengeRequestDto | MfaChallengeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MfaChallengeResponseDto:
        """Generate an MFA challenge ID for creating an MFA-trusted API sign in session.

        In the response, a ``challengeId`` is generated and a six-digit ``token`` is sent to the phone number that was
        registered with MFA setup.

        After you generate a challenge ID (with ``POST /v3/mfa/challenge``), complete your MFA sign in by validating the
        MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session is MFA trusted.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Generate MFA challenge response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.generate_challenge(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_mfa_phones(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListMfaPhoneResponseDto:
        """Get a list of phone numbers that have been added for setting up MFA in the current organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of MFA phone numbers response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_mfa_phones(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def setup(
        self,
        body: MfaSetupRequestDto | MfaSetupRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MfaSetupResponseDto:
        """Add a valid phone number for setting up MFA in the current organization.

        In the response, a ``setupId`` is generated and a six-digit ``token`` is sent to the phone number. After you add
        a phone number (with ``POST /v3/mfa/setup``), complete the MFA setup by validating the entered phone number
        (with ``POST /v3/mfa/validate``). At this point, the phone number is registered for the MFA sign in operation.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add phone for MFA setup response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.setup(body, session_id=session_id, dev_key=dev_key, request_options=request_options)
        )

    def step_up_session(
        self,
        body: MfaStepUpRequestDto | MfaStepUpRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MfaStepUpResponseDto:
        """Set your current API session as MFA trusted.

        Ideally, when you sign in with ``POST /v3/login``, set ``rememberMeId`` and ``device`` in your request to
        generate an MFA-trusted API session.

        In case you sign in without ``rememberMeId`` and ``device`` in your request, you can use this ``POST
        /v3/mfa/step-up`` endpoint to mark the current API session as MFA trusted.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            MFA step-up for API session response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.step_up_session(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def validate(
        self,
        body: MfaSetupValidateRequestDto | MfaSetupValidateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Validate the phone number for setting up MFA in the current organization. This validation requires the
        ``setupId`` and ``token`` from ``POST /v3/mfa/setup``.

        After the validation is complete, the phone number is registered for the MFA sign in operation.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validate phone for MFA setup response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.validate(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def validate_challenge(
        self,
        body: MfaChallengeValidateRequestDto | MfaChallengeValidateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MfaChallengeValidateResponseDto:
        """Validate the MFA challenge for creating an MFA-trusted API sign in session. This validation requires the
        ``challengeId`` and ``token`` from ``POST /v3/mfa/challenge``.

        After the validation is complete, your API session is MFA trusted.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account for a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validate MFA challenge response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.validate_challenge(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MfaWithRawResponse:
        return self._with_raw_response


class AsyncMfa:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMfaWithRawResponse(client, server)

    async def generate_challenge(
        self,
        body: MfaChallengeRequestDto | MfaChallengeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MfaChallengeResponseDto:
        """Generate an MFA challenge ID for creating an MFA-trusted API sign in session.

        In the response, a ``challengeId`` is generated and a six-digit ``token`` is sent to the phone number that was
        registered with MFA setup.

        After you generate a challenge ID (with ``POST /v3/mfa/challenge``), complete your MFA sign in by validating the
        MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session is MFA trusted.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Generate MFA challenge response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.generate_challenge(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_mfa_phones(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListMfaPhoneResponseDto:
        """Get a list of phone numbers that have been added for setting up MFA in the current organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of MFA phone numbers response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_mfa_phones(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def setup(
        self,
        body: MfaSetupRequestDto | MfaSetupRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MfaSetupResponseDto:
        """Add a valid phone number for setting up MFA in the current organization.

        In the response, a ``setupId`` is generated and a six-digit ``token`` is sent to the phone number. After you add
        a phone number (with ``POST /v3/mfa/setup``), complete the MFA setup by validating the entered phone number
        (with ``POST /v3/mfa/validate``). At this point, the phone number is registered for the MFA sign in operation.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add phone for MFA setup response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.setup(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def step_up_session(
        self,
        body: MfaStepUpRequestDto | MfaStepUpRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MfaStepUpResponseDto:
        """Set your current API session as MFA trusted.

        Ideally, when you sign in with ``POST /v3/login``, set ``rememberMeId`` and ``device`` in your request to
        generate an MFA-trusted API session.

        In case you sign in without ``rememberMeId`` and ``device`` in your request, you can use this ``POST
        /v3/mfa/step-up`` endpoint to mark the current API session as MFA trusted.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            MFA step-up for API session response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.step_up_session(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def validate(
        self,
        body: MfaSetupValidateRequestDto | MfaSetupValidateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Validate the phone number for setting up MFA in the current organization. This validation requires the
        ``setupId`` and ``token`` from ``POST /v3/mfa/setup``.

        After the validation is complete, the phone number is registered for the MFA sign in operation.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validate phone for MFA setup response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.validate(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def validate_challenge(
        self,
        body: MfaChallengeValidateRequestDto | MfaChallengeValidateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MfaChallengeValidateResponseDto:
        """Validate the MFA challenge for creating an MFA-trusted API sign in session. This validation requires the
        ``challengeId`` and ``token`` from ``POST /v3/mfa/challenge``.

        After the validation is complete, your API session is MFA trusted.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account for a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validate MFA challenge response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.validate_challenge(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMfaWithRawResponse:
        return self._with_raw_response


class MfaWithRawResponse(BaseRawResponse[RawClient, Server]):
    def generate_challenge(
        self,
        body: MfaChallengeRequestDto | MfaChallengeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MfaChallengeResponseDto, GenerateChallengeErrorBody]:
        """Generate an MFA challenge ID for creating an MFA-trusted API sign in session.

        In the response, a ``challengeId`` is generated and a six-digit ``token`` is sent to the phone number that was
        registered with MFA setup.

        After you generate a challenge ID (with ``POST /v3/mfa/challenge``), complete your MFA sign in by validating the
        MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session is MFA trusted.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/challenge"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaChallengeRequestDto | MfaChallengeRequestDtoDict](body),
            decoder=json_decoder[MfaChallengeResponseDto],
            error_mapper=generate_challenge_error_mapper,
            request_options=request_options,
        )

    def list_mfa_phones(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListMfaPhoneResponseDto, RawError]:
        """Get a list of phone numbers that have been added for setting up MFA in the current organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/mfa/phones"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListMfaPhoneResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def setup(
        self,
        body: MfaSetupRequestDto | MfaSetupRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MfaSetupResponseDto, SetupErrorBody]:
        """Add a valid phone number for setting up MFA in the current organization.

        In the response, a ``setupId`` is generated and a six-digit ``token`` is sent to the phone number. After you add
        a phone number (with ``POST /v3/mfa/setup``), complete the MFA setup by validating the entered phone number
        (with ``POST /v3/mfa/validate``). At this point, the phone number is registered for the MFA sign in operation.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/setup"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaSetupRequestDto | MfaSetupRequestDtoDict](body),
            decoder=json_decoder[MfaSetupResponseDto],
            error_mapper=setup_error_mapper,
            request_options=request_options,
        )

    def step_up_session(
        self,
        body: MfaStepUpRequestDto | MfaStepUpRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MfaStepUpResponseDto, RawError]:
        """Set your current API session as MFA trusted.

        Ideally, when you sign in with ``POST /v3/login``, set ``rememberMeId`` and ``device`` in your request to
        generate an MFA-trusted API session.

        In case you sign in without ``rememberMeId`` and ``device`` in your request, you can use this ``POST
        /v3/mfa/step-up`` endpoint to mark the current API session as MFA trusted.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/step-up"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaStepUpRequestDto | MfaStepUpRequestDtoDict](body),
            decoder=json_decoder[MfaStepUpResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def validate(
        self,
        body: MfaSetupValidateRequestDto | MfaSetupValidateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, ValidateErrorBody]:
        """Validate the phone number for setting up MFA in the current organization. This validation requires the
        ``setupId`` and ``token`` from ``POST /v3/mfa/setup``.

        After the validation is complete, the phone number is registered for the MFA sign in operation.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/setup/validate"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaSetupValidateRequestDto | MfaSetupValidateRequestDtoDict](body),
            decoder=json_decoder[StatusDto],
            error_mapper=validate_error_mapper,
            request_options=request_options,
        )

    def validate_challenge(
        self,
        body: MfaChallengeValidateRequestDto | MfaChallengeValidateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MfaChallengeValidateResponseDto, ValidateChallengeErrorBody]:
        """Validate the MFA challenge for creating an MFA-trusted API sign in session. This validation requires the
        ``challengeId`` and ``token`` from ``POST /v3/mfa/challenge``.

        After the validation is complete, your API session is MFA trusted.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account for a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/challenge/validate"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaChallengeValidateRequestDto | MfaChallengeValidateRequestDtoDict](body),
            decoder=json_decoder[MfaChallengeValidateResponseDto],
            error_mapper=validate_challenge_error_mapper,
            request_options=request_options,
        )


class AsyncMfaWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def generate_challenge(
        self,
        body: MfaChallengeRequestDto | MfaChallengeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MfaChallengeResponseDto, GenerateChallengeErrorBody]:
        """Generate an MFA challenge ID for creating an MFA-trusted API sign in session.

        In the response, a ``challengeId`` is generated and a six-digit ``token`` is sent to the phone number that was
        registered with MFA setup.

        After you generate a challenge ID (with ``POST /v3/mfa/challenge``), complete your MFA sign in by validating the
        MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session is MFA trusted.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/challenge"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaChallengeRequestDto | MfaChallengeRequestDtoDict](body),
            decoder=async_json_decoder[MfaChallengeResponseDto],
            error_mapper=generate_challenge_error_mapper,
            request_options=request_options,
        )

    async def list_mfa_phones(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListMfaPhoneResponseDto, RawError]:
        """Get a list of phone numbers that have been added for setting up MFA in the current organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/mfa/phones"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListMfaPhoneResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def setup(
        self,
        body: MfaSetupRequestDto | MfaSetupRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MfaSetupResponseDto, SetupErrorBody]:
        """Add a valid phone number for setting up MFA in the current organization.

        In the response, a ``setupId`` is generated and a six-digit ``token`` is sent to the phone number. After you add
        a phone number (with ``POST /v3/mfa/setup``), complete the MFA setup by validating the entered phone number
        (with ``POST /v3/mfa/validate``). At this point, the phone number is registered for the MFA sign in operation.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/setup"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaSetupRequestDto | MfaSetupRequestDtoDict](body),
            decoder=async_json_decoder[MfaSetupResponseDto],
            error_mapper=setup_error_mapper,
            request_options=request_options,
        )

    async def step_up_session(
        self,
        body: MfaStepUpRequestDto | MfaStepUpRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MfaStepUpResponseDto, RawError]:
        """Set your current API session as MFA trusted.

        Ideally, when you sign in with ``POST /v3/login``, set ``rememberMeId`` and ``device`` in your request to
        generate an MFA-trusted API session.

        In case you sign in without ``rememberMeId`` and ``device`` in your request, you can use this ``POST
        /v3/mfa/step-up`` endpoint to mark the current API session as MFA trusted.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/step-up"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaStepUpRequestDto | MfaStepUpRequestDtoDict](body),
            decoder=async_json_decoder[MfaStepUpResponseDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def validate(
        self,
        body: MfaSetupValidateRequestDto | MfaSetupValidateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, ValidateErrorBody]:
        """Validate the phone number for setting up MFA in the current organization. This validation requires the
        ``setupId`` and ``token`` from ``POST /v3/mfa/setup``.

        After the validation is complete, the phone number is registered for the MFA sign in operation.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account in a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/setup/validate"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaSetupValidateRequestDto | MfaSetupValidateRequestDtoDict](body),
            decoder=async_json_decoder[StatusDto],
            error_mapper=validate_error_mapper,
            request_options=request_options,
        )

    async def validate_challenge(
        self,
        body: MfaChallengeValidateRequestDto | MfaChallengeValidateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MfaChallengeValidateResponseDto, ValidateChallengeErrorBody]:
        """Validate the MFA challenge for creating an MFA-trusted API sign in session. This validation requires the
        ``challengeId`` and ``token`` from ``POST /v3/mfa/challenge``.

        After the validation is complete, your API session is MFA trusted.

        There are two stages in the BILL MFA process.
        1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with ``POST /v3/mfa/setup``),
            and then complete the setup by validating the entered phone number (with ``POST /v3/mfa/validate``). At this
            point, the phone number is registered for the MFA sign in operation.
        2. **MFA sign in**: Generate an MFA challenge (with ``POST /v3/mfa/challenge``), and then complete MFA sign in
            by validating the MFA challenge (with ``POST /v3/mfa/challenge/validate``). At this point, your API session
            is MFA trusted.

        **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
        * Enable vendor ``autoPay``
        * Enable recurring bill ``autoPayment``
        * Create a payment or bulk payment
        * Create a bank account for a BILL organization
        * Reset MFA (Complete MFA setup and MFA sign-in again)

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/mfa/challenge/validate"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MfaChallengeValidateRequestDto | MfaChallengeValidateRequestDtoDict](body),
            decoder=async_json_decoder[MfaChallengeValidateResponseDto],
            error_mapper=validate_challenge_error_mapper,
            request_options=request_options,
        )
