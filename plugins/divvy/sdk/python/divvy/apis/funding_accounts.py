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
from ..errors.archive_bank_account_error import ArchiveBankAccountErrorBody, archive_bank_account_error_mapper
from ..errors.archive_bank_account_user_error import (
    ArchiveBankAccountUserErrorBody,
    archive_bank_account_user_error_mapper,
)
from ..errors.create_bank_account_error import CreateBankAccountErrorBody, create_bank_account_error_mapper
from ..errors.get_bank_account_error import GetBankAccountErrorBody, get_bank_account_error_mapper
from ..errors.get_card_account_error import GetCardAccountErrorBody, get_card_account_error_mapper
from ..errors.get_funding_account_permission_error import (
    GetFundingAccountPermissionErrorBody,
    get_funding_account_permission_error_mapper,
)
from ..errors.list_bank_account_users_error import ListBankAccountUsersErrorBody, list_bank_account_users_error_mapper
from ..errors.list_bank_accounts_error import ListBankAccountsErrorBody, list_bank_accounts_error_mapper
from ..errors.list_card_account_users_error import ListCardAccountUsersErrorBody, list_card_account_users_error_mapper
from ..errors.list_card_funding_purposes_error import (
    ListCardFundingPurposesErrorBody,
    list_card_funding_purposes_error_mapper,
)
from ..errors.list_payable_ap_cards_error import ListPayableApCardsErrorBody, list_payable_ap_cards_error_mapper
from ..errors.list_payable_card_accounts_error import (
    ListPayableCardAccountsErrorBody,
    list_payable_card_accounts_error_mapper,
)
from ..errors.nominate_bank_account_user_error import (
    NominateBankAccountUserErrorBody,
    nominate_bank_account_user_error_mapper,
)
from ..errors.update_bank_account_error import UpdateBankAccountErrorBody, update_bank_account_error_mapper
from ..errors.verify_bank_account_error import VerifyBankAccountErrorBody, verify_bank_account_error_mapper
from ..models.ap_card_response_dto import ApCardResponseDto
from ..models.bank_account_verify_request_dto import BankAccountVerifyRequestDto, BankAccountVerifyRequestDtoDict
from ..models.bank_account_verify_response_dto import BankAccountVerifyResponseDto
from ..models.card_account_response_dto import CardAccountResponseDto
from ..models.enums.card_user_status import CardUserStatusOrStr
from ..models.funding_account_permission_response_dto import FundingAccountPermissionResponseDto
from ..models.list_card_funding_purposes_response_dto import ListCardFundingPurposesResponseDto
from ..models.list_payable_card_accounts_response_dto import ListPayableCardAccountsResponseDto
from ..models.list_response_dto_organization_bank_account_response_dto import (
    ListResponseDtoOrganizationBankAccountResponseDto,
)
from ..models.list_response_dto_organization_bank_account_user_response_dto import (
    ListResponseDtoOrganizationBankAccountUserResponseDto,
)
from ..models.list_response_dto_organization_card_account_user_response_dto import (
    ListResponseDtoOrganizationCardAccountUserResponseDto,
)
from ..models.nominate_bank_account_user_request_dto import (
    NominateBankAccountUserRequestDto,
    NominateBankAccountUserRequestDtoDict,
)
from ..models.organization_bank_account_create_request_dto import (
    OrganizationBankAccountCreateRequestDto,
    OrganizationBankAccountCreateRequestDtoDict,
)
from ..models.organization_bank_account_response_dto import OrganizationBankAccountResponseDto
from ..models.organization_bank_account_update_request_dto import (
    OrganizationBankAccountUpdateRequestDto,
    OrganizationBankAccountUpdateRequestDtoDict,
)
from ..models.organization_bank_account_user_response_dto import OrganizationBankAccountUserResponseDto
from ..models.status_dto import StatusDto
from ..server.server import Server


class FundingAccounts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = FundingAccountsWithRawResponse(client, server)

    def archive_bank_account(
        self,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountResponseDto:
        """Archive an existing bank account. In the response, the ``archived`` field is set as ``true``.

        Archiving a bank account at BILL has a set of requirements.
        * **Bank account status**: The bank account ``status`` must be set as ``VERIFIED``. You can verify the bank
            account with ``POST /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * **Bank account user status**: The bank account user ``verificationStatus`` must be set as ``VERIFIED``. To
            begin the verification process, nominate a bank account user with ``POST /v3/funding-accounts/banks/users``.

        Args:
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_bank_account(
                bank_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def archive_bank_account_user(
        self,
        bank_account_user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountUserResponseDto:
        """Archive an existing bank account user. In the response, the ``archived`` field is set as ``true`` and the
        bank account user ``verificationStatus`` is set as ``UNVERIFIED``.

        Args:
            bank_account_user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a bank account user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_bank_account_user(
                bank_account_user_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_bank_account(
        self,
        body: OrganizationBankAccountCreateRequestDto | OrganizationBankAccountCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountResponseDto:
        """Create a new bank account. The currently signed-in user must have the ``ADMINISTRATOR`` user role in the BILL
        organization to perform this operation. BILL sends an email notification for informing you about changes to your
        funding accounts.

        When you create a bank account, BILL sends a test ACH payment to confirm whether the account details are
        accurate.

        In the response, three fields are set to their default values.
        * The bank account ``status`` is set as ``PENDING``. You can verify the bank account with ``POST
            /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * The ``payables`` and ``receivables`` values are set as ``false``. To update these values, update the bank
            account with ``PATCH /v3/funding-accounts/banks/{bankAccountId}``.

        **Note**: Creating a bank account requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_bank_account(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_bank_account(
        self,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountResponseDto:
        """Get details about an existing bank account.

        Args:
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get bank account details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_bank_account(
                bank_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_card_account(
        self,
        card_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CardAccountResponseDto:
        """Get details about an existing card account.

        Args:
            card_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get card account details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_card_account(
                card_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_funding_account_permission(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FundingAccountPermissionResponseDto:
        """Get the funding account permissions available for the current organization and current organization user.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get funding account permissions response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_funding_account_permission(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_bank_account_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        current_user: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationBankAccountUserResponseDto:
        """Get a list of bank account user objects. In the response, if the bank account user ``verificationStatus`` is
        set as ``NOMINATED``, user verification must be completed before the user can pay with the specified bank
        account.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            current_user: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of bank account users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_bank_account_users(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                current_user=current_user,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_bank_accounts(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationBankAccountResponseDto:
        """Get a list of bank account objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of bank accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_bank_accounts(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_card_account_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        current_user: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationCardAccountUserResponseDto:
        """Get a list of card account user objects. In the response, if the card account user ``verificationStatus`` is
        set as ``NOMINATED``, user verification must be completed before the user can pay with the specified card
        account.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            current_user: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of card account users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_card_account_users(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                current_user=current_user,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_card_funding_purposes(
        self,
        vendor_id: str,
        brand: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListCardFundingPurposesResponseDto:
        """Get a list of card funding purpose values based on the vendor and card brand.

        When you create a payment (``POST /v3/payments`` or ``POST /v3/payments/bulk``) with a ``CARD_ACCOUNT`` funding
        account ``type``, BILL requires a vendor industry value for compliance. When BILL cannot identify the vendor
        industry, the ``cardFundingPurpose`` field must be set in your payment request.

        Use this endpoint to get the list of card funding purpose values you can set. If you get an empty 200 response,
        BILL has information about the vendor industry and setting the ``cardFundingPurpose`` field is not required in
        your payment request.

        Args:
            vendor_id: Value sent with the request.
            brand: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get card funding purpose response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_card_funding_purposes(
                vendor_id, brand, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_payable_ap_cards(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ApCardResponseDto]:
        """Get a list of AP Card objects.

        With the AP Card, you can earn rewards simply by paying your bills. The AP Card is a payment method that enables
        you to send fast payments with no transaction fees or annual fees. You can use the AP Card with any vendor who
        accepts virtual card payments.

        See AP Card Frequently Asked Questions (FAQs) in the BILL Help to learn more about AP Card.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of AP Cards response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_payable_ap_cards(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_payable_card_accounts(
        self,
        card_user_status: CardUserStatusOrStr,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListPayableCardAccountsResponseDto:
        """Get a list of card account objects.

        Args:
            card_user_status: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of card accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_payable_card_accounts(
                card_user_status, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def nominate_bank_account_user(
        self,
        body: NominateBankAccountUserRequestDto | NominateBankAccountUserRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Nominate a bank account user.

        When you nominate a user, BILL performs a set of operations.
        * The bank account user ``verificationStatus`` is set as ``NOMINATED``.
        * BILL sends the user an email asking them to sign in to the BILL web app and complete identity verification.
            See Verify your identity in the Guides section for test verification information you can enter in the
            sandbox environment.

        After user identity verification is successful, the bank account user ``verificationStatus`` is set as
        ``VERIFIED`` and the user can pay with the specified bank account.

        **Note**: The bank account ``status`` must be set as ``VERIFIED`` before you can nominate bank account users.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Nominate a bank account user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.nominate_bank_account_user(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_bank_account(
        self,
        bank_account_id: str,
        body: OrganizationBankAccountUpdateRequestDto | OrganizationBankAccountUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountResponseDto:
        """Update details about an existing bank account.

        This operation follows a set of rules.
        * **Bank account ``status`` requirement**: The bank account ``status`` must be set as ``VERIFIED`` before you
            can update any details about the bank account. You can verify the bank account with ``POST
            /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * **Update field restrictions**: You cannot update the ``routingNumber``, ``accountNumber``, and account
            ``type`` values for a bank account. If you want to update any of these values, create a new bank account
            with ``POST /v3/funding-accounts/banks``.

        Args:
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_bank_account(
                bank_account_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def verify_bank_account(
        self,
        bank_account_id: str,
        body: BankAccountVerifyRequestDto | BankAccountVerifyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BankAccountVerifyResponseDto:
        """Verify an existing bank account.

        When you create a bank account, BILL sends a test ACH payment to the bank account to confirm whether the account
        details are accurate. Enter the test amount as the ``depositAmount`` value in your ``POST
        /v3/funding-accounts/banks/{bankAccountId}/verify`` request.

        **Note**: Bank account verification is required in the production environment before the account can be used for
        other BILL operations. In the sandbox environment, set ``depositAmount`` as ``0.50`` to complete bank account
        verification.

        The bank account ``status`` is set as ``VERIFIED`` when BILL is able to verify the ``depositAmount`` value. BILL
        sends an email notification for confirming a test transaction. When BILL cannot verify the bank account after
        three attempts, you cannot use the bank account. At this point, use another bank account or create a bank
        account with ``POST /v3/funding-accounts/banks``.

        After your bank account verification is complete, ensure that the current bank account user
        ``verificationStatus`` is set as ``VERIFIED`` before you can use the bank account. To begin the verification
        process, nominate a bank account user with ``POST /v3/funding-accounts/banks/users/nominate``.

        See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

        Args:
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Verify a bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.verify_bank_account(
                bank_account_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> FundingAccountsWithRawResponse:
        return self._with_raw_response


class AsyncFundingAccounts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncFundingAccountsWithRawResponse(client, server)

    async def archive_bank_account(
        self,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountResponseDto:
        """Archive an existing bank account. In the response, the ``archived`` field is set as ``true``.

        Archiving a bank account at BILL has a set of requirements.
        * **Bank account status**: The bank account ``status`` must be set as ``VERIFIED``. You can verify the bank
            account with ``POST /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * **Bank account user status**: The bank account user ``verificationStatus`` must be set as ``VERIFIED``. To
            begin the verification process, nominate a bank account user with ``POST /v3/funding-accounts/banks/users``.

        Args:
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_bank_account(
                bank_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def archive_bank_account_user(
        self,
        bank_account_user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountUserResponseDto:
        """Archive an existing bank account user. In the response, the ``archived`` field is set as ``true`` and the
        bank account user ``verificationStatus`` is set as ``UNVERIFIED``.

        Args:
            bank_account_user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a bank account user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_bank_account_user(
                bank_account_user_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_bank_account(
        self,
        body: OrganizationBankAccountCreateRequestDto | OrganizationBankAccountCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountResponseDto:
        """Create a new bank account. The currently signed-in user must have the ``ADMINISTRATOR`` user role in the BILL
        organization to perform this operation. BILL sends an email notification for informing you about changes to your
        funding accounts.

        When you create a bank account, BILL sends a test ACH payment to confirm whether the account details are
        accurate.

        In the response, three fields are set to their default values.
        * The bank account ``status`` is set as ``PENDING``. You can verify the bank account with ``POST
            /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * The ``payables`` and ``receivables`` values are set as ``false``. To update these values, update the bank
            account with ``PATCH /v3/funding-accounts/banks/{bankAccountId}``.

        **Note**: Creating a bank account requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bank_account(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_bank_account(
        self,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountResponseDto:
        """Get details about an existing bank account.

        Args:
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get bank account details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_bank_account(
                bank_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_card_account(
        self,
        card_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CardAccountResponseDto:
        """Get details about an existing card account.

        Args:
            card_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get card account details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_card_account(
                card_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_funding_account_permission(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FundingAccountPermissionResponseDto:
        """Get the funding account permissions available for the current organization and current organization user.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get funding account permissions response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_funding_account_permission(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_bank_account_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        current_user: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationBankAccountUserResponseDto:
        """Get a list of bank account user objects. In the response, if the bank account user ``verificationStatus`` is
        set as ``NOMINATED``, user verification must be completed before the user can pay with the specified bank
        account.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            current_user: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of bank account users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bank_account_users(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                current_user=current_user,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_bank_accounts(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationBankAccountResponseDto:
        """Get a list of bank account objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of bank accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bank_accounts(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_card_account_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        current_user: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationCardAccountUserResponseDto:
        """Get a list of card account user objects. In the response, if the card account user ``verificationStatus`` is
        set as ``NOMINATED``, user verification must be completed before the user can pay with the specified card
        account.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            current_user: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of card account users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_card_account_users(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                current_user=current_user,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_card_funding_purposes(
        self,
        vendor_id: str,
        brand: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListCardFundingPurposesResponseDto:
        """Get a list of card funding purpose values based on the vendor and card brand.

        When you create a payment (``POST /v3/payments`` or ``POST /v3/payments/bulk``) with a ``CARD_ACCOUNT`` funding
        account ``type``, BILL requires a vendor industry value for compliance. When BILL cannot identify the vendor
        industry, the ``cardFundingPurpose`` field must be set in your payment request.

        Use this endpoint to get the list of card funding purpose values you can set. If you get an empty 200 response,
        BILL has information about the vendor industry and setting the ``cardFundingPurpose`` field is not required in
        your payment request.

        Args:
            vendor_id: Value sent with the request.
            brand: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get card funding purpose response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_card_funding_purposes(
                vendor_id, brand, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_payable_ap_cards(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ApCardResponseDto]:
        """Get a list of AP Card objects.

        With the AP Card, you can earn rewards simply by paying your bills. The AP Card is a payment method that enables
        you to send fast payments with no transaction fees or annual fees. You can use the AP Card with any vendor who
        accepts virtual card payments.

        See AP Card Frequently Asked Questions (FAQs) in the BILL Help to learn more about AP Card.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of AP Cards response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_payable_ap_cards(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_payable_card_accounts(
        self,
        card_user_status: CardUserStatusOrStr,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListPayableCardAccountsResponseDto:
        """Get a list of card account objects.

        Args:
            card_user_status: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of card accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_payable_card_accounts(
                card_user_status, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def nominate_bank_account_user(
        self,
        body: NominateBankAccountUserRequestDto | NominateBankAccountUserRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Nominate a bank account user.

        When you nominate a user, BILL performs a set of operations.
        * The bank account user ``verificationStatus`` is set as ``NOMINATED``.
        * BILL sends the user an email asking them to sign in to the BILL web app and complete identity verification.
            See Verify your identity in the Guides section for test verification information you can enter in the
            sandbox environment.

        After user identity verification is successful, the bank account user ``verificationStatus`` is set as
        ``VERIFIED`` and the user can pay with the specified bank account.

        **Note**: The bank account ``status`` must be set as ``VERIFIED`` before you can nominate bank account users.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Nominate a bank account user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.nominate_bank_account_user(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_bank_account(
        self,
        bank_account_id: str,
        body: OrganizationBankAccountUpdateRequestDto | OrganizationBankAccountUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationBankAccountResponseDto:
        """Update details about an existing bank account.

        This operation follows a set of rules.
        * **Bank account ``status`` requirement**: The bank account ``status`` must be set as ``VERIFIED`` before you
            can update any details about the bank account. You can verify the bank account with ``POST
            /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * **Update field restrictions**: You cannot update the ``routingNumber``, ``accountNumber``, and account
            ``type`` values for a bank account. If you want to update any of these values, create a new bank account
            with ``POST /v3/funding-accounts/banks``.

        Args:
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_bank_account(
                bank_account_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def verify_bank_account(
        self,
        bank_account_id: str,
        body: BankAccountVerifyRequestDto | BankAccountVerifyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BankAccountVerifyResponseDto:
        """Verify an existing bank account.

        When you create a bank account, BILL sends a test ACH payment to the bank account to confirm whether the account
        details are accurate. Enter the test amount as the ``depositAmount`` value in your ``POST
        /v3/funding-accounts/banks/{bankAccountId}/verify`` request.

        **Note**: Bank account verification is required in the production environment before the account can be used for
        other BILL operations. In the sandbox environment, set ``depositAmount`` as ``0.50`` to complete bank account
        verification.

        The bank account ``status`` is set as ``VERIFIED`` when BILL is able to verify the ``depositAmount`` value. BILL
        sends an email notification for confirming a test transaction. When BILL cannot verify the bank account after
        three attempts, you cannot use the bank account. At this point, use another bank account or create a bank
        account with ``POST /v3/funding-accounts/banks``.

        After your bank account verification is complete, ensure that the current bank account user
        ``verificationStatus`` is set as ``VERIFIED`` before you can use the bank account. To begin the verification
        process, nominate a bank account user with ``POST /v3/funding-accounts/banks/users/nominate``.

        See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

        Args:
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Verify a bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.verify_bank_account(
                bank_account_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFundingAccountsWithRawResponse:
        return self._with_raw_response


class FundingAccountsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_bank_account(
        self,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountResponseDto, ArchiveBankAccountErrorBody]:
        """Archive an existing bank account. In the response, the ``archived`` field is set as ``true``.

        Archiving a bank account at BILL has a set of requirements.
        * **Bank account status**: The bank account ``status`` must be set as ``VERIFIED``. You can verify the bank
            account with ``POST /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * **Bank account user status**: The bank account user ``verificationStatus`` must be set as ``VERIFIED``. To
            begin the verification process, nominate a bank account user with ``POST /v3/funding-accounts/banks/users``.

        Args:
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/funding-accounts/banks/{bankAccountId}/archive"),
            path_params=[param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[OrganizationBankAccountResponseDto],
            error_mapper=archive_bank_account_error_mapper,
            request_options=request_options,
        )

    def archive_bank_account_user(
        self,
        bank_account_user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountUserResponseDto, ArchiveBankAccountUserErrorBody]:
        """Archive an existing bank account user. In the response, the ``archived`` field is set as ``true`` and the
        bank account user ``verificationStatus`` is set as ``UNVERIFIED``.

        Args:
            bank_account_user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/funding-accounts/banks/users/{bankAccountUserId}/archive"),
            path_params=[param[str]("bankAccountUserId", bank_account_user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[OrganizationBankAccountUserResponseDto],
            error_mapper=archive_bank_account_user_error_mapper,
            request_options=request_options,
        )

    def create_bank_account(
        self,
        body: OrganizationBankAccountCreateRequestDto | OrganizationBankAccountCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountResponseDto, CreateBankAccountErrorBody]:
        """Create a new bank account. The currently signed-in user must have the ``ADMINISTRATOR`` user role in the BILL
        organization to perform this operation. BILL sends an email notification for informing you about changes to your
        funding accounts.

        When you create a bank account, BILL sends a test ACH payment to confirm whether the account details are
        accurate.

        In the response, three fields are set to their default values.
        * The bank account ``status`` is set as ``PENDING``. You can verify the bank account with ``POST
            /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * The ``payables`` and ``receivables`` values are set as ``false``. To update these values, update the bank
            account with ``PATCH /v3/funding-accounts/banks/{bankAccountId}``.

        **Note**: Creating a bank account requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/funding-accounts/banks"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationBankAccountCreateRequestDto | OrganizationBankAccountCreateRequestDtoDict](body),
            decoder=json_decoder[OrganizationBankAccountResponseDto],
            error_mapper=create_bank_account_error_mapper,
            request_options=request_options,
        )

    def get_bank_account(
        self,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountResponseDto, GetBankAccountErrorBody]:
        """Get details about an existing bank account.

        Args:
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/banks/{bankAccountId}"),
            path_params=[param[str]("bankAccountId", bank_account_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[OrganizationBankAccountResponseDto],
            error_mapper=get_bank_account_error_mapper,
            request_options=request_options,
        )

    def get_card_account(
        self,
        card_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CardAccountResponseDto, GetCardAccountErrorBody]:
        """Get details about an existing card account.

        Args:
            card_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/cards/{cardAccountId}"),
            path_params=[param[str]("cardAccountId", card_account_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[CardAccountResponseDto],
            error_mapper=get_card_account_error_mapper,
            request_options=request_options,
        )

    def get_funding_account_permission(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FundingAccountPermissionResponseDto, GetFundingAccountPermissionErrorBody]:
        """Get the funding account permissions available for the current organization and current organization user.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/permissions"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[FundingAccountPermissionResponseDto],
            error_mapper=get_funding_account_permission_error_mapper,
            request_options=request_options,
        )

    def list_bank_account_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        current_user: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationBankAccountUserResponseDto, ListBankAccountUsersErrorBody]:
        """Get a list of bank account user objects. In the response, if the bank account user ``verificationStatus`` is
        set as ``NOMINATED``, user verification must be completed before the user can pay with the specified bank
        account.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            current_user: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/banks/users"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
                param[bool | None]("currentUser", current_user),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoOrganizationBankAccountUserResponseDto],
            error_mapper=list_bank_account_users_error_mapper,
            request_options=request_options,
        )

    def list_bank_accounts(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationBankAccountResponseDto, ListBankAccountsErrorBody]:
        """Get a list of bank account objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/banks"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoOrganizationBankAccountResponseDto],
            error_mapper=list_bank_accounts_error_mapper,
            request_options=request_options,
        )

    def list_card_account_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        current_user: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationCardAccountUserResponseDto, ListCardAccountUsersErrorBody]:
        """Get a list of card account user objects. In the response, if the card account user ``verificationStatus`` is
        set as ``NOMINATED``, user verification must be completed before the user can pay with the specified card
        account.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            current_user: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/cards/users"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
                param[bool | None]("currentUser", current_user),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoOrganizationCardAccountUserResponseDto],
            error_mapper=list_card_account_users_error_mapper,
            request_options=request_options,
        )

    def list_card_funding_purposes(
        self,
        vendor_id: str,
        brand: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListCardFundingPurposesResponseDto, ListCardFundingPurposesErrorBody]:
        """Get a list of card funding purpose values based on the vendor and card brand.

        When you create a payment (``POST /v3/payments`` or ``POST /v3/payments/bulk``) with a ``CARD_ACCOUNT`` funding
        account ``type``, BILL requires a vendor industry value for compliance. When BILL cannot identify the vendor
        industry, the ``cardFundingPurpose`` field must be set in your payment request.

        Use this endpoint to get the list of card funding purpose values you can set. If you get an empty 200 response,
        BILL has information about the vendor industry and setting the ``cardFundingPurpose`` field is not required in
        your payment request.

        Args:
            vendor_id: Value sent with the request.
            brand: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/cards/funding-purposes"),
            query_params=[param[str]("vendorId", vendor_id), param[str]("brand", brand)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListCardFundingPurposesResponseDto],
            error_mapper=list_card_funding_purposes_error_mapper,
            request_options=request_options,
        )

    def list_payable_ap_cards(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApCardResponseDto], ListPayableApCardsErrorBody]:
        """Get a list of AP Card objects.

        With the AP Card, you can earn rewards simply by paying your bills. The AP Card is a payment method that enables
        you to send fast payments with no transaction fees or annual fees. You can use the AP Card with any vendor who
        accepts virtual card payments.

        See AP Card Frequently Asked Questions (FAQs) in the BILL Help to learn more about AP Card.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/ap-cards"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[list[ApCardResponseDto]],
            error_mapper=list_payable_ap_cards_error_mapper,
            request_options=request_options,
        )

    def list_payable_card_accounts(
        self,
        card_user_status: CardUserStatusOrStr,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPayableCardAccountsResponseDto, ListPayableCardAccountsErrorBody]:
        """Get a list of card account objects.

        Args:
            card_user_status: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/cards"),
            query_params=[param[CardUserStatusOrStr]("cardUserStatus", card_user_status)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListPayableCardAccountsResponseDto],
            error_mapper=list_payable_card_accounts_error_mapper,
            request_options=request_options,
        )

    def nominate_bank_account_user(
        self,
        body: NominateBankAccountUserRequestDto | NominateBankAccountUserRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, NominateBankAccountUserErrorBody]:
        """Nominate a bank account user.

        When you nominate a user, BILL performs a set of operations.
        * The bank account user ``verificationStatus`` is set as ``NOMINATED``.
        * BILL sends the user an email asking them to sign in to the BILL web app and complete identity verification.
            See Verify your identity in the Guides section for test verification information you can enter in the
            sandbox environment.

        After user identity verification is successful, the bank account user ``verificationStatus`` is set as
        ``VERIFIED`` and the user can pay with the specified bank account.

        **Note**: The bank account ``status`` must be set as ``VERIFIED`` before you can nominate bank account users.

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
            url_template=self._server.default("/v3/funding-accounts/banks/users/nominate"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[NominateBankAccountUserRequestDto | NominateBankAccountUserRequestDtoDict](body),
            decoder=json_decoder[StatusDto],
            error_mapper=nominate_bank_account_user_error_mapper,
            request_options=request_options,
        )

    def update_bank_account(
        self,
        bank_account_id: str,
        body: OrganizationBankAccountUpdateRequestDto | OrganizationBankAccountUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountResponseDto, UpdateBankAccountErrorBody]:
        """Update details about an existing bank account.

        This operation follows a set of rules.
        * **Bank account ``status`` requirement**: The bank account ``status`` must be set as ``VERIFIED`` before you
            can update any details about the bank account. You can verify the bank account with ``POST
            /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * **Update field restrictions**: You cannot update the ``routingNumber``, ``accountNumber``, and account
            ``type`` values for a bank account. If you want to update any of these values, create a new bank account
            with ``POST /v3/funding-accounts/banks``.

        Args:
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/funding-accounts/banks/{bankAccountId}"),
            path_params=[param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationBankAccountUpdateRequestDto | OrganizationBankAccountUpdateRequestDtoDict](body),
            decoder=json_decoder[OrganizationBankAccountResponseDto],
            error_mapper=update_bank_account_error_mapper,
            request_options=request_options,
        )

    def verify_bank_account(
        self,
        bank_account_id: str,
        body: BankAccountVerifyRequestDto | BankAccountVerifyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BankAccountVerifyResponseDto, VerifyBankAccountErrorBody]:
        """Verify an existing bank account.

        When you create a bank account, BILL sends a test ACH payment to the bank account to confirm whether the account
        details are accurate. Enter the test amount as the ``depositAmount`` value in your ``POST
        /v3/funding-accounts/banks/{bankAccountId}/verify`` request.

        **Note**: Bank account verification is required in the production environment before the account can be used for
        other BILL operations. In the sandbox environment, set ``depositAmount`` as ``0.50`` to complete bank account
        verification.

        The bank account ``status`` is set as ``VERIFIED`` when BILL is able to verify the ``depositAmount`` value. BILL
        sends an email notification for confirming a test transaction. When BILL cannot verify the bank account after
        three attempts, you cannot use the bank account. At this point, use another bank account or create a bank
        account with ``POST /v3/funding-accounts/banks``.

        After your bank account verification is complete, ensure that the current bank account user
        ``verificationStatus`` is set as ``VERIFIED`` before you can use the bank account. To begin the verification
        process, nominate a bank account user with ``POST /v3/funding-accounts/banks/users/nominate``.

        See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

        Args:
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/funding-accounts/banks/{bankAccountId}/verify"),
            path_params=[param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BankAccountVerifyRequestDto | BankAccountVerifyRequestDtoDict](body),
            decoder=json_decoder[BankAccountVerifyResponseDto],
            error_mapper=verify_bank_account_error_mapper,
            request_options=request_options,
        )


class AsyncFundingAccountsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_bank_account(
        self,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountResponseDto, ArchiveBankAccountErrorBody]:
        """Archive an existing bank account. In the response, the ``archived`` field is set as ``true``.

        Archiving a bank account at BILL has a set of requirements.
        * **Bank account status**: The bank account ``status`` must be set as ``VERIFIED``. You can verify the bank
            account with ``POST /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * **Bank account user status**: The bank account user ``verificationStatus`` must be set as ``VERIFIED``. To
            begin the verification process, nominate a bank account user with ``POST /v3/funding-accounts/banks/users``.

        Args:
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/funding-accounts/banks/{bankAccountId}/archive"),
            path_params=[param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[OrganizationBankAccountResponseDto],
            error_mapper=archive_bank_account_error_mapper,
            request_options=request_options,
        )

    async def archive_bank_account_user(
        self,
        bank_account_user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountUserResponseDto, ArchiveBankAccountUserErrorBody]:
        """Archive an existing bank account user. In the response, the ``archived`` field is set as ``true`` and the
        bank account user ``verificationStatus`` is set as ``UNVERIFIED``.

        Args:
            bank_account_user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/funding-accounts/banks/users/{bankAccountUserId}/archive"),
            path_params=[param[str]("bankAccountUserId", bank_account_user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[OrganizationBankAccountUserResponseDto],
            error_mapper=archive_bank_account_user_error_mapper,
            request_options=request_options,
        )

    async def create_bank_account(
        self,
        body: OrganizationBankAccountCreateRequestDto | OrganizationBankAccountCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountResponseDto, CreateBankAccountErrorBody]:
        """Create a new bank account. The currently signed-in user must have the ``ADMINISTRATOR`` user role in the BILL
        organization to perform this operation. BILL sends an email notification for informing you about changes to your
        funding accounts.

        When you create a bank account, BILL sends a test ACH payment to confirm whether the account details are
        accurate.

        In the response, three fields are set to their default values.
        * The bank account ``status`` is set as ``PENDING``. You can verify the bank account with ``POST
            /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * The ``payables`` and ``receivables`` values are set as ``false``. To update these values, update the bank
            account with ``PATCH /v3/funding-accounts/banks/{bankAccountId}``.

        **Note**: Creating a bank account requires an MFA-trusted API session. See MFA setup for information about the
        BILL MFA process.

        See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/funding-accounts/banks"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationBankAccountCreateRequestDto | OrganizationBankAccountCreateRequestDtoDict](body),
            decoder=async_json_decoder[OrganizationBankAccountResponseDto],
            error_mapper=create_bank_account_error_mapper,
            request_options=request_options,
        )

    async def get_bank_account(
        self,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountResponseDto, GetBankAccountErrorBody]:
        """Get details about an existing bank account.

        Args:
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/banks/{bankAccountId}"),
            path_params=[param[str]("bankAccountId", bank_account_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[OrganizationBankAccountResponseDto],
            error_mapper=get_bank_account_error_mapper,
            request_options=request_options,
        )

    async def get_card_account(
        self,
        card_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CardAccountResponseDto, GetCardAccountErrorBody]:
        """Get details about an existing card account.

        Args:
            card_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/cards/{cardAccountId}"),
            path_params=[param[str]("cardAccountId", card_account_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[CardAccountResponseDto],
            error_mapper=get_card_account_error_mapper,
            request_options=request_options,
        )

    async def get_funding_account_permission(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FundingAccountPermissionResponseDto, GetFundingAccountPermissionErrorBody]:
        """Get the funding account permissions available for the current organization and current organization user.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/permissions"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[FundingAccountPermissionResponseDto],
            error_mapper=get_funding_account_permission_error_mapper,
            request_options=request_options,
        )

    async def list_bank_account_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        current_user: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationBankAccountUserResponseDto, ListBankAccountUsersErrorBody]:
        """Get a list of bank account user objects. In the response, if the bank account user ``verificationStatus`` is
        set as ``NOMINATED``, user verification must be completed before the user can pay with the specified bank
        account.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            current_user: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/banks/users"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
                param[bool | None]("currentUser", current_user),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoOrganizationBankAccountUserResponseDto],
            error_mapper=list_bank_account_users_error_mapper,
            request_options=request_options,
        )

    async def list_bank_accounts(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationBankAccountResponseDto, ListBankAccountsErrorBody]:
        """Get a list of bank account objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/banks"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoOrganizationBankAccountResponseDto],
            error_mapper=list_bank_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_card_account_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        current_user: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationCardAccountUserResponseDto, ListCardAccountUsersErrorBody]:
        """Get a list of card account user objects. In the response, if the card account user ``verificationStatus`` is
        set as ``NOMINATED``, user verification must be completed before the user can pay with the specified card
        account.

        By default, you get 20 results on one page of results. Set ``max`` in your request to get up to 100 results on
        one page.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            current_user: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/cards/users"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
                param[bool | None]("currentUser", current_user),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoOrganizationCardAccountUserResponseDto],
            error_mapper=list_card_account_users_error_mapper,
            request_options=request_options,
        )

    async def list_card_funding_purposes(
        self,
        vendor_id: str,
        brand: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListCardFundingPurposesResponseDto, ListCardFundingPurposesErrorBody]:
        """Get a list of card funding purpose values based on the vendor and card brand.

        When you create a payment (``POST /v3/payments`` or ``POST /v3/payments/bulk``) with a ``CARD_ACCOUNT`` funding
        account ``type``, BILL requires a vendor industry value for compliance. When BILL cannot identify the vendor
        industry, the ``cardFundingPurpose`` field must be set in your payment request.

        Use this endpoint to get the list of card funding purpose values you can set. If you get an empty 200 response,
        BILL has information about the vendor industry and setting the ``cardFundingPurpose`` field is not required in
        your payment request.

        Args:
            vendor_id: Value sent with the request.
            brand: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/cards/funding-purposes"),
            query_params=[param[str]("vendorId", vendor_id), param[str]("brand", brand)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListCardFundingPurposesResponseDto],
            error_mapper=list_card_funding_purposes_error_mapper,
            request_options=request_options,
        )

    async def list_payable_ap_cards(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApCardResponseDto], ListPayableApCardsErrorBody]:
        """Get a list of AP Card objects.

        With the AP Card, you can earn rewards simply by paying your bills. The AP Card is a payment method that enables
        you to send fast payments with no transaction fees or annual fees. You can use the AP Card with any vendor who
        accepts virtual card payments.

        See AP Card Frequently Asked Questions (FAQs) in the BILL Help to learn more about AP Card.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/ap-cards"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[list[ApCardResponseDto]],
            error_mapper=list_payable_ap_cards_error_mapper,
            request_options=request_options,
        )

    async def list_payable_card_accounts(
        self,
        card_user_status: CardUserStatusOrStr,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPayableCardAccountsResponseDto, ListPayableCardAccountsErrorBody]:
        """Get a list of card account objects.

        Args:
            card_user_status: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/funding-accounts/cards"),
            query_params=[param[CardUserStatusOrStr]("cardUserStatus", card_user_status)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListPayableCardAccountsResponseDto],
            error_mapper=list_payable_card_accounts_error_mapper,
            request_options=request_options,
        )

    async def nominate_bank_account_user(
        self,
        body: NominateBankAccountUserRequestDto | NominateBankAccountUserRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, NominateBankAccountUserErrorBody]:
        """Nominate a bank account user.

        When you nominate a user, BILL performs a set of operations.
        * The bank account user ``verificationStatus`` is set as ``NOMINATED``.
        * BILL sends the user an email asking them to sign in to the BILL web app and complete identity verification.
            See Verify your identity in the Guides section for test verification information you can enter in the
            sandbox environment.

        After user identity verification is successful, the bank account user ``verificationStatus`` is set as
        ``VERIFIED`` and the user can pay with the specified bank account.

        **Note**: The bank account ``status`` must be set as ``VERIFIED`` before you can nominate bank account users.

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
            url_template=self._server.default("/v3/funding-accounts/banks/users/nominate"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[NominateBankAccountUserRequestDto | NominateBankAccountUserRequestDtoDict](body),
            decoder=async_json_decoder[StatusDto],
            error_mapper=nominate_bank_account_user_error_mapper,
            request_options=request_options,
        )

    async def update_bank_account(
        self,
        bank_account_id: str,
        body: OrganizationBankAccountUpdateRequestDto | OrganizationBankAccountUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationBankAccountResponseDto, UpdateBankAccountErrorBody]:
        """Update details about an existing bank account.

        This operation follows a set of rules.
        * **Bank account ``status`` requirement**: The bank account ``status`` must be set as ``VERIFIED`` before you
            can update any details about the bank account. You can verify the bank account with ``POST
            /v3/funding-accounts/banks/{bankAccountId}/verify``.
        * **Update field restrictions**: You cannot update the ``routingNumber``, ``accountNumber``, and account
            ``type`` values for a bank account. If you want to update any of these values, create a new bank account
            with ``POST /v3/funding-accounts/banks``.

        Args:
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/funding-accounts/banks/{bankAccountId}"),
            path_params=[param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationBankAccountUpdateRequestDto | OrganizationBankAccountUpdateRequestDtoDict](body),
            decoder=async_json_decoder[OrganizationBankAccountResponseDto],
            error_mapper=update_bank_account_error_mapper,
            request_options=request_options,
        )

    async def verify_bank_account(
        self,
        bank_account_id: str,
        body: BankAccountVerifyRequestDto | BankAccountVerifyRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BankAccountVerifyResponseDto, VerifyBankAccountErrorBody]:
        """Verify an existing bank account.

        When you create a bank account, BILL sends a test ACH payment to the bank account to confirm whether the account
        details are accurate. Enter the test amount as the ``depositAmount`` value in your ``POST
        /v3/funding-accounts/banks/{bankAccountId}/verify`` request.

        **Note**: Bank account verification is required in the production environment before the account can be used for
        other BILL operations. In the sandbox environment, set ``depositAmount`` as ``0.50`` to complete bank account
        verification.

        The bank account ``status`` is set as ``VERIFIED`` when BILL is able to verify the ``depositAmount`` value. BILL
        sends an email notification for confirming a test transaction. When BILL cannot verify the bank account after
        three attempts, you cannot use the bank account. At this point, use another bank account or create a bank
        account with ``POST /v3/funding-accounts/banks``.

        After your bank account verification is complete, ensure that the current bank account user
        ``verificationStatus`` is set as ``VERIFIED`` before you can use the bank account. To begin the verification
        process, nominate a bank account user with ``POST /v3/funding-accounts/banks/users/nominate``.

        See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

        Args:
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/funding-accounts/banks/{bankAccountId}/verify"),
            path_params=[param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[BankAccountVerifyRequestDto | BankAccountVerifyRequestDtoDict](body),
            decoder=async_json_decoder[BankAccountVerifyResponseDto],
            error_mapper=verify_bank_account_error_mapper,
            request_options=request_options,
        )
