from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_risk_verification_phone_error import (
    CreateRiskVerificationPhoneErrorBody,
    create_risk_verification_phone_error_mapper,
)
from ..errors.get_risk_verification_phone_error import (
    GetRiskVerificationPhoneErrorBody,
    get_risk_verification_phone_error_mapper,
)
from ..errors.get_risk_verifications_error import GetRiskVerificationsErrorBody, get_risk_verifications_error_mapper
from ..errors.initiate_risk_verifications_error import (
    InitiateRiskVerificationsErrorBody,
    initiate_risk_verifications_error_mapper,
)
from ..models.get_phone_status_response_dto import GetPhoneStatusResponseDto
from ..models.phone_verification_request_dto import PhoneVerificationRequestDto, PhoneVerificationRequestDtoDict
from ..models.verification_response_dto import VerificationResponseDto
from ..server.server import Server


class RiskVerifications:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = RiskVerificationsWithRawResponse(client, server)

    def create_risk_verification_phone(
        self,
        body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Add a phone number for the currently signed-in user. BILL requires the signed-in user to have a linked phone
        number for initiating risk verification for the organization.

        You can check whether a phone number has been added for the user with ``GET /v3/risk-verifications/phone``.

        After you add a phone number with this endpoint, you can initiate risk verification for the organization with
        ``POST /v3/risk-verifications``.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add phone for risk verification response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_risk_verification_phone(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_risk_verification_phone(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetPhoneStatusResponseDto:
        """Check whether a phone number has been added for the currently signed-in user. BILL requires the signed-in
        user to have a linked phone number for initiating risk verification for the organization.

        In the response, if ``hasPhone`` is ``false``, you can add a phone number for the user with ``POST
        /v3/risk-verifications/phone``.

        After you add a phone number, you can initiate risk verification for the organization with ``POST
        /v3/risk-verifications``.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get phone status for risk verification response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_risk_verification_phone(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_risk_verifications(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VerificationResponseDto:
        """Get risk verification details for an existing organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get risk verification details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_risk_verifications(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def initiate_risk_verifications(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VerificationResponseDto:
        """Initiate risk verification for an organization. The currently signed-in user must have the ``ADMINISTRATOR``
        user role in the BILL organization to perform this operation.

        **Note**: You must add a phone number for the signed-in user (with ``POST /v3/risk-verifications/phone``) before
        you can initiate risk verification. BILL partners must add a phone number for a created user with ``POST
        /v3/partner/risk-verifications/{userId}/phone``.

        As a BILL partner, when you create an organization and then create a user for that organization, it is important
        that you initiate risk verification with ``POST /v3/risk-verifications``.

        BILL performs a KYC/KYB (Know You Customer/Know Your Business) check based on the provided organization
        information. BILL sends an email notification for risk verification. When the check is complete, BILL approves
        the organization for BILL AP and AR operations.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Initiate risk verification for an organization response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.initiate_risk_verifications(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RiskVerificationsWithRawResponse:
        return self._with_raw_response


class AsyncRiskVerifications:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncRiskVerificationsWithRawResponse(client, server)

    async def create_risk_verification_phone(
        self,
        body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Add a phone number for the currently signed-in user. BILL requires the signed-in user to have a linked phone
        number for initiating risk verification for the organization.

        You can check whether a phone number has been added for the user with ``GET /v3/risk-verifications/phone``.

        After you add a phone number with this endpoint, you can initiate risk verification for the organization with
        ``POST /v3/risk-verifications``.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add phone for risk verification response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_risk_verification_phone(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_risk_verification_phone(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetPhoneStatusResponseDto:
        """Check whether a phone number has been added for the currently signed-in user. BILL requires the signed-in
        user to have a linked phone number for initiating risk verification for the organization.

        In the response, if ``hasPhone`` is ``false``, you can add a phone number for the user with ``POST
        /v3/risk-verifications/phone``.

        After you add a phone number, you can initiate risk verification for the organization with ``POST
        /v3/risk-verifications``.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get phone status for risk verification response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_risk_verification_phone(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_risk_verifications(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VerificationResponseDto:
        """Get risk verification details for an existing organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get risk verification details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_risk_verifications(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def initiate_risk_verifications(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VerificationResponseDto:
        """Initiate risk verification for an organization. The currently signed-in user must have the ``ADMINISTRATOR``
        user role in the BILL organization to perform this operation.

        **Note**: You must add a phone number for the signed-in user (with ``POST /v3/risk-verifications/phone``) before
        you can initiate risk verification. BILL partners must add a phone number for a created user with ``POST
        /v3/partner/risk-verifications/{userId}/phone``.

        As a BILL partner, when you create an organization and then create a user for that organization, it is important
        that you initiate risk verification with ``POST /v3/risk-verifications``.

        BILL performs a KYC/KYB (Know You Customer/Know Your Business) check based on the provided organization
        information. BILL sends an email notification for risk verification. When the check is complete, BILL approves
        the organization for BILL AP and AR operations.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Initiate risk verification for an organization response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.initiate_risk_verifications(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRiskVerificationsWithRawResponse:
        return self._with_raw_response


class RiskVerificationsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_risk_verification_phone(
        self,
        body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateRiskVerificationPhoneErrorBody]:
        """Add a phone number for the currently signed-in user. BILL requires the signed-in user to have a linked phone
        number for initiating risk verification for the organization.

        You can check whether a phone number has been added for the user with ``GET /v3/risk-verifications/phone``.

        After you add a phone number with this endpoint, you can initiate risk verification for the organization with
        ``POST /v3/risk-verifications``.

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
            url_template=self._server.default("/v3/risk-verifications/phone"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=create_risk_verification_phone_error_mapper,
            request_options=request_options,
        )

    def get_risk_verification_phone(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetPhoneStatusResponseDto, GetRiskVerificationPhoneErrorBody]:
        """Check whether a phone number has been added for the currently signed-in user. BILL requires the signed-in
        user to have a linked phone number for initiating risk verification for the organization.

        In the response, if ``hasPhone`` is ``false``, you can add a phone number for the user with ``POST
        /v3/risk-verifications/phone``.

        After you add a phone number, you can initiate risk verification for the organization with ``POST
        /v3/risk-verifications``.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/risk-verifications/phone"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[GetPhoneStatusResponseDto],
            error_mapper=get_risk_verification_phone_error_mapper,
            request_options=request_options,
        )

    def get_risk_verifications(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VerificationResponseDto, GetRiskVerificationsErrorBody]:
        """Get risk verification details for an existing organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/risk-verifications"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[VerificationResponseDto],
            error_mapper=get_risk_verifications_error_mapper,
            request_options=request_options,
        )

    def initiate_risk_verifications(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VerificationResponseDto, InitiateRiskVerificationsErrorBody]:
        """Initiate risk verification for an organization. The currently signed-in user must have the ``ADMINISTRATOR``
        user role in the BILL organization to perform this operation.

        **Note**: You must add a phone number for the signed-in user (with ``POST /v3/risk-verifications/phone``) before
        you can initiate risk verification. BILL partners must add a phone number for a created user with ``POST
        /v3/partner/risk-verifications/{userId}/phone``.

        As a BILL partner, when you create an organization and then create a user for that organization, it is important
        that you initiate risk verification with ``POST /v3/risk-verifications``.

        BILL performs a KYC/KYB (Know You Customer/Know Your Business) check based on the provided organization
        information. BILL sends an email notification for risk verification. When the check is complete, BILL approves
        the organization for BILL AP and AR operations.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/risk-verifications"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[VerificationResponseDto],
            error_mapper=initiate_risk_verifications_error_mapper,
            request_options=request_options,
        )


class AsyncRiskVerificationsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_risk_verification_phone(
        self,
        body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateRiskVerificationPhoneErrorBody]:
        """Add a phone number for the currently signed-in user. BILL requires the signed-in user to have a linked phone
        number for initiating risk verification for the organization.

        You can check whether a phone number has been added for the user with ``GET /v3/risk-verifications/phone``.

        After you add a phone number with this endpoint, you can initiate risk verification for the organization with
        ``POST /v3/risk-verifications``.

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
            url_template=self._server.default("/v3/risk-verifications/phone"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=create_risk_verification_phone_error_mapper,
            request_options=request_options,
        )

    async def get_risk_verification_phone(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetPhoneStatusResponseDto, GetRiskVerificationPhoneErrorBody]:
        """Check whether a phone number has been added for the currently signed-in user. BILL requires the signed-in
        user to have a linked phone number for initiating risk verification for the organization.

        In the response, if ``hasPhone`` is ``false``, you can add a phone number for the user with ``POST
        /v3/risk-verifications/phone``.

        After you add a phone number, you can initiate risk verification for the organization with ``POST
        /v3/risk-verifications``.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/risk-verifications/phone"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[GetPhoneStatusResponseDto],
            error_mapper=get_risk_verification_phone_error_mapper,
            request_options=request_options,
        )

    async def get_risk_verifications(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VerificationResponseDto, GetRiskVerificationsErrorBody]:
        """Get risk verification details for an existing organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/risk-verifications"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[VerificationResponseDto],
            error_mapper=get_risk_verifications_error_mapper,
            request_options=request_options,
        )

    async def initiate_risk_verifications(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VerificationResponseDto, InitiateRiskVerificationsErrorBody]:
        """Initiate risk verification for an organization. The currently signed-in user must have the ``ADMINISTRATOR``
        user role in the BILL organization to perform this operation.

        **Note**: You must add a phone number for the signed-in user (with ``POST /v3/risk-verifications/phone``) before
        you can initiate risk verification. BILL partners must add a phone number for a created user with ``POST
        /v3/partner/risk-verifications/{userId}/phone``.

        As a BILL partner, when you create an organization and then create a user for that organization, it is important
        that you initiate risk verification with ``POST /v3/risk-verifications``.

        BILL performs a KYC/KYB (Know You Customer/Know Your Business) check based on the provided organization
        information. BILL sends an email notification for risk verification. When the check is complete, BILL approves
        the organization for BILL AP and AR operations.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/risk-verifications"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[VerificationResponseDto],
            error_mapper=initiate_risk_verifications_error_mapper,
            request_options=request_options,
        )
