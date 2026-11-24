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
from ..errors.archive_customer_bank_account_error import (
    ArchiveCustomerBankAccountErrorBody,
    archive_customer_bank_account_error_mapper,
)
from ..errors.archive_customer_contact_error import (
    ArchiveCustomerContactErrorBody,
    archive_customer_contact_error_mapper,
)
from ..errors.archive_customer_error import ArchiveCustomerErrorBody, archive_customer_error_mapper
from ..errors.authorize_to_charge_customer_error import (
    AuthorizeToChargeCustomerErrorBody,
    authorize_to_charge_customer_error_mapper,
)
from ..errors.create_customer_bank_account_error import (
    CreateCustomerBankAccountErrorBody,
    create_customer_bank_account_error_mapper,
)
from ..errors.create_customer_contact_error import CreateCustomerContactErrorBody, create_customer_contact_error_mapper
from ..errors.create_customer_error import CreateCustomerErrorBody, create_customer_error_mapper
from ..errors.get_customer_bank_account_error import (
    GetCustomerBankAccountErrorBody,
    get_customer_bank_account_error_mapper,
)
from ..errors.get_customer_contact_error import GetCustomerContactErrorBody, get_customer_contact_error_mapper
from ..errors.get_customer_error import GetCustomerErrorBody, get_customer_error_mapper
from ..errors.list_customer_bank_accounts_error import (
    ListCustomerBankAccountsErrorBody,
    list_customer_bank_accounts_error_mapper,
)
from ..errors.list_customer_contacts_error import ListCustomerContactsErrorBody, list_customer_contacts_error_mapper
from ..errors.list_customers_error import ListCustomersErrorBody, list_customers_error_mapper
from ..errors.restore_customer_contact_error import (
    RestoreCustomerContactErrorBody,
    restore_customer_contact_error_mapper,
)
from ..errors.restore_customer_error import RestoreCustomerErrorBody, restore_customer_error_mapper
from ..errors.update_customer_bank_account_error import (
    UpdateCustomerBankAccountErrorBody,
    update_customer_bank_account_error_mapper,
)
from ..errors.update_customer_contact_error import UpdateCustomerContactErrorBody, update_customer_contact_error_mapper
from ..errors.update_customer_error import UpdateCustomerErrorBody, update_customer_error_mapper
from ..models.charge_authorization_request_dto import ChargeAuthorizationRequestDto, ChargeAuthorizationRequestDtoDict
from ..models.charge_authorization_response_dto import ChargeAuthorizationResponseDto
from ..models.create_customer_bank_account_request_dto import (
    CreateCustomerBankAccountRequestDto,
    CreateCustomerBankAccountRequestDtoDict,
)
from ..models.create_customer_contact_request_dto import (
    CreateCustomerContactRequestDto,
    CreateCustomerContactRequestDtoDict,
)
from ..models.customer_bank_account_response_dto import CustomerBankAccountResponseDto
from ..models.customer_contact_response_dto import CustomerContactResponseDto
from ..models.customer_create_request_dto import CustomerCreateRequestDto, CustomerCreateRequestDtoDict
from ..models.customer_response_dto import CustomerResponseDto
from ..models.customer_update_request_dto import CustomerUpdateRequestDto, CustomerUpdateRequestDtoDict
from ..models.list_response_dto_customer_bank_account_response_dto import ListResponseDtoCustomerBankAccountResponseDto
from ..models.list_response_dto_customer_contact_response_dto import ListResponseDtoCustomerContactResponseDto
from ..models.list_response_dto_customer_response_dto import ListResponseDtoCustomerResponseDto
from ..models.update_customer_bank_account_request_dto import (
    UpdateCustomerBankAccountRequestDto,
    UpdateCustomerBankAccountRequestDtoDict,
)
from ..models.update_customer_contact_request_dto import (
    UpdateCustomerContactRequestDto,
    UpdateCustomerContactRequestDtoDict,
)
from ..server.server import Server


class Customers:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CustomersWithRawResponse(client, server)

    def archive_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Archive an existing customer. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived customer with ``POST /v3/customers/{customerId}/restore``. There is no change when
        you archive an archived customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_customer(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def archive_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerBankAccountResponseDto:
        """Archive an existing customer bank account. In the response, the ``archived`` field is set as ``true``. An
        archived customer bank account cannot be restored.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a customer bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_customer_bank_account(
                customer_id, bank_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def archive_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Archive an existing customer contact. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived customer with ``POST /v3/customers/{customerId}/contacts/{contactId}/restore``.
        There is no change when you archive an archived customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a customer contact response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_customer_contact(
                customer_id, contact_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def authorize_to_charge_customer(
        self,
        customer_id: str,
        body: ChargeAuthorizationRequestDto | ChargeAuthorizationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ChargeAuthorizationResponseDto:
        """Authorize your organization to charge a customer for invoices.

        By default, your organization is not authorized to charge a customer. The customer ``authorizedToCharge`` field
        must be set as ``true`` for you to charge the customer for invoices.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Set charge customer authorization response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.authorize_to_charge_customer(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_customer(
        self,
        body: CustomerCreateRequestDto | CustomerCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Create a new customer.

        See Customers in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_customer_bank_account(
        self,
        customer_id: str,
        body: CreateCustomerBankAccountRequestDto | CreateCustomerBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerBankAccountResponseDto:
        """Create a new customer bank account. When you add customer bank account information, you can charge the
        customer for invoices.

        Creating a customer bank account follows a set of rules.
        * **Customer billing address**: The customer ``billingAddress`` information is required before you can create a
            customer bank account.
        * **Customer bank account verification**: If the customer bank account requires verification, BILL requires up
            to 2 business days to complete a one-time verification of the bank account.

        **Note**: When you add a customer bank account in the production environment, BILL validates the customer
        routing number before you can charge the customer. You will get an error message if the customer routing number
        is invalid in production.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a customer bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_bank_account(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_customer_contact(
        self,
        customer_id: str,
        body: CreateCustomerContactRequestDto | CreateCustomerContactRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Create a new customer contact.

        When you create a customer contact, BILL enables the customer to sign in to the BILL web app with the ``email``
        value and a random password. The signed-in customer can view invoices, make payments, and manage their account.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a customer contact response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_contact(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Get details about an existing customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get customer details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_customer(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerBankAccountResponseDto:
        """Get details about an existing customer bank account.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get customer bank account details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_customer_bank_account(
                customer_id, bank_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Get details about an existing customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get customer contact details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_customer_contact(
                customer_id, contact_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_customer_bank_accounts(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoCustomerBankAccountResponseDto:
        """Get a list of customer bank account objects. By default, you get 20 results on one page of results. Set
        ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            customer_id: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of customer bank accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_customer_bank_accounts(
                customer_id,
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_customer_contacts(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoCustomerContactResponseDto:
        """Get a list of customer contact objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            customer_id: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of customer contacts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_customer_contacts(
                customer_id,
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_customers(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoCustomerResponseDto:
        """Get a list of customer objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

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
            Get list of customers response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_customers(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def restore_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Restore an archived customer. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored customers. There is no change when you restore a restored
        customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_customer(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Restore an archived customer contact. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored customer contacts. There is no change when you restore a
        restored customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a customer contact response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_customer_contact(
                customer_id, contact_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_customer(
        self,
        customer_id: str,
        body: CustomerUpdateRequestDto | CustomerUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Update details about an existing customer.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_customer(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        body: UpdateCustomerBankAccountRequestDto | UpdateCustomerBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerBankAccountResponseDto:
        """Update details about an existing customer bank account.

        You can update only the ``nickname`` and ``ownerType`` fields for a customer bank account. If you want to update
        any of the other fields, create a new customer bank account with ``POST
        /v3/customers/{customerId}/bank-accounts``.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a customer bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_customer_bank_account(
                customer_id,
                bank_account_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def update_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        body: UpdateCustomerContactRequestDto | UpdateCustomerContactRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Update details about an existing customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a customer contact response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_customer_contact(
                customer_id, contact_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomersWithRawResponse:
        return self._with_raw_response


class AsyncCustomers:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCustomersWithRawResponse(client, server)

    async def archive_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Archive an existing customer. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived customer with ``POST /v3/customers/{customerId}/restore``. There is no change when
        you archive an archived customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_customer(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def archive_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerBankAccountResponseDto:
        """Archive an existing customer bank account. In the response, the ``archived`` field is set as ``true``. An
        archived customer bank account cannot be restored.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a customer bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_customer_bank_account(
                customer_id, bank_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def archive_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Archive an existing customer contact. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived customer with ``POST /v3/customers/{customerId}/contacts/{contactId}/restore``.
        There is no change when you archive an archived customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a customer contact response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_customer_contact(
                customer_id, contact_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def authorize_to_charge_customer(
        self,
        customer_id: str,
        body: ChargeAuthorizationRequestDto | ChargeAuthorizationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ChargeAuthorizationResponseDto:
        """Authorize your organization to charge a customer for invoices.

        By default, your organization is not authorized to charge a customer. The customer ``authorizedToCharge`` field
        must be set as ``true`` for you to charge the customer for invoices.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Set charge customer authorization response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.authorize_to_charge_customer(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_customer(
        self,
        body: CustomerCreateRequestDto | CustomerCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Create a new customer.

        See Customers in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_customer_bank_account(
        self,
        customer_id: str,
        body: CreateCustomerBankAccountRequestDto | CreateCustomerBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerBankAccountResponseDto:
        """Create a new customer bank account. When you add customer bank account information, you can charge the
        customer for invoices.

        Creating a customer bank account follows a set of rules.
        * **Customer billing address**: The customer ``billingAddress`` information is required before you can create a
            customer bank account.
        * **Customer bank account verification**: If the customer bank account requires verification, BILL requires up
            to 2 business days to complete a one-time verification of the bank account.

        **Note**: When you add a customer bank account in the production environment, BILL validates the customer
        routing number before you can charge the customer. You will get an error message if the customer routing number
        is invalid in production.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a customer bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_bank_account(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_customer_contact(
        self,
        customer_id: str,
        body: CreateCustomerContactRequestDto | CreateCustomerContactRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Create a new customer contact.

        When you create a customer contact, BILL enables the customer to sign in to the BILL web app with the ``email``
        value and a random password. The signed-in customer can view invoices, make payments, and manage their account.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a customer contact response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_contact(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Get details about an existing customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get customer details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerBankAccountResponseDto:
        """Get details about an existing customer bank account.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get customer bank account details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_bank_account(
                customer_id, bank_account_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Get details about an existing customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get customer contact details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_contact(
                customer_id, contact_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_customer_bank_accounts(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoCustomerBankAccountResponseDto:
        """Get a list of customer bank account objects. By default, you get 20 results on one page of results. Set
        ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            customer_id: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of customer bank accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customer_bank_accounts(
                customer_id,
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_customer_contacts(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoCustomerContactResponseDto:
        """Get a list of customer contact objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            customer_id: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of customer contacts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customer_contacts(
                customer_id,
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_customers(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoCustomerResponseDto:
        """Get a list of customer objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

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
            Get list of customers response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customers(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def restore_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Restore an archived customer. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored customers. There is no change when you restore a restored
        customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_customer(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Restore an archived customer contact. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored customer contacts. There is no change when you restore a
        restored customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a customer contact response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_customer_contact(
                customer_id, contact_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_customer(
        self,
        customer_id: str,
        body: CustomerUpdateRequestDto | CustomerUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerResponseDto:
        """Update details about an existing customer.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_customer(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        body: UpdateCustomerBankAccountRequestDto | UpdateCustomerBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerBankAccountResponseDto:
        """Update details about an existing customer bank account.

        You can update only the ``nickname`` and ``ownerType`` fields for a customer bank account. If you want to update
        any of the other fields, create a new customer bank account with ``POST
        /v3/customers/{customerId}/bank-accounts``.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a customer bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_customer_bank_account(
                customer_id,
                bank_account_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def update_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        body: UpdateCustomerContactRequestDto | UpdateCustomerContactRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerContactResponseDto:
        """Update details about an existing customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a customer contact response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_customer_contact(
                customer_id, contact_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomersWithRawResponse:
        return self._with_raw_response


class CustomersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, ArchiveCustomerErrorBody]:
        """Archive an existing customer. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived customer with ``POST /v3/customers/{customerId}/restore``. There is no change when
        you archive an archived customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/archive"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[CustomerResponseDto],
            error_mapper=archive_customer_error_mapper,
            request_options=request_options,
        )

    def archive_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerBankAccountResponseDto, ArchiveCustomerBankAccountErrorBody]:
        """Archive an existing customer bank account. In the response, the ``archived`` field is set as ``true``. An
        archived customer bank account cannot be restored.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}/archive"),
            path_params=[param[str]("customerId", customer_id), param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[CustomerBankAccountResponseDto],
            error_mapper=archive_customer_bank_account_error_mapper,
            request_options=request_options,
        )

    def archive_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, ArchiveCustomerContactErrorBody]:
        """Archive an existing customer contact. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived customer with ``POST /v3/customers/{customerId}/contacts/{contactId}/restore``.
        There is no change when you archive an archived customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/contacts/{contactId}/archive"),
            path_params=[param[str]("customerId", customer_id), param[str]("contactId", contact_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[CustomerContactResponseDto],
            error_mapper=archive_customer_contact_error_mapper,
            request_options=request_options,
        )

    def authorize_to_charge_customer(
        self,
        customer_id: str,
        body: ChargeAuthorizationRequestDto | ChargeAuthorizationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ChargeAuthorizationResponseDto, AuthorizeToChargeCustomerErrorBody]:
        """Authorize your organization to charge a customer for invoices.

        By default, your organization is not authorized to charge a customer. The customer ``authorizedToCharge`` field
        must be set as ``true`` for you to charge the customer for invoices.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/charge-authorization"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ChargeAuthorizationRequestDto | ChargeAuthorizationRequestDtoDict](body),
            decoder=json_decoder[ChargeAuthorizationResponseDto],
            error_mapper=authorize_to_charge_customer_error_mapper,
            request_options=request_options,
        )

    def create_customer(
        self,
        body: CustomerCreateRequestDto | CustomerCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, CreateCustomerErrorBody]:
        """Create a new customer.

        See Customers in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/customers"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CustomerCreateRequestDto | CustomerCreateRequestDtoDict](body),
            decoder=json_decoder[CustomerResponseDto],
            error_mapper=create_customer_error_mapper,
            request_options=request_options,
        )

    def create_customer_bank_account(
        self,
        customer_id: str,
        body: CreateCustomerBankAccountRequestDto | CreateCustomerBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerBankAccountResponseDto, CreateCustomerBankAccountErrorBody]:
        """Create a new customer bank account. When you add customer bank account information, you can charge the
        customer for invoices.

        Creating a customer bank account follows a set of rules.
        * **Customer billing address**: The customer ``billingAddress`` information is required before you can create a
            customer bank account.
        * **Customer bank account verification**: If the customer bank account requires verification, BILL requires up
            to 2 business days to complete a one-time verification of the bank account.

        **Note**: When you add a customer bank account in the production environment, BILL validates the customer
        routing number before you can charge the customer. You will get an error message if the customer routing number
        is invalid in production.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateCustomerBankAccountRequestDto | CreateCustomerBankAccountRequestDtoDict](body),
            decoder=json_decoder[CustomerBankAccountResponseDto],
            error_mapper=create_customer_bank_account_error_mapper,
            request_options=request_options,
        )

    def create_customer_contact(
        self,
        customer_id: str,
        body: CreateCustomerContactRequestDto | CreateCustomerContactRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, CreateCustomerContactErrorBody]:
        """Create a new customer contact.

        When you create a customer contact, BILL enables the customer to sign in to the BILL web app with the ``email``
        value and a random password. The signed-in customer can view invoices, make payments, and manage their account.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/contacts"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateCustomerContactRequestDto | CreateCustomerContactRequestDtoDict](body),
            decoder=json_decoder[CustomerContactResponseDto],
            error_mapper=create_customer_contact_error_mapper,
            request_options=request_options,
        )

    def get_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, GetCustomerErrorBody]:
        """Get details about an existing customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[CustomerResponseDto],
            error_mapper=get_customer_error_mapper,
            request_options=request_options,
        )

    def get_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerBankAccountResponseDto, GetCustomerBankAccountErrorBody]:
        """Get details about an existing customer bank account.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("bankAccountId", bank_account_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[CustomerBankAccountResponseDto],
            error_mapper=get_customer_bank_account_error_mapper,
            request_options=request_options,
        )

    def get_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, GetCustomerContactErrorBody]:
        """Get details about an existing customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/customers/{customerId}/contacts/{contactId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("contactId", contact_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[CustomerContactResponseDto],
            error_mapper=get_customer_contact_error_mapper,
            request_options=request_options,
        )

    def list_customer_bank_accounts(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoCustomerBankAccountResponseDto, ListCustomerBankAccountsErrorBody]:
        """Get a list of customer bank account objects. By default, you get 20 results on one page of results. Set
        ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            customer_id: Value sent with the request.
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
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoCustomerBankAccountResponseDto],
            error_mapper=list_customer_bank_accounts_error_mapper,
            request_options=request_options,
        )

    def list_customer_contacts(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoCustomerContactResponseDto, ListCustomerContactsErrorBody]:
        """Get a list of customer contact objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            customer_id: Value sent with the request.
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
            url_template=self._server.default("/v3/customers/{customerId}/contacts"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoCustomerContactResponseDto],
            error_mapper=list_customer_contacts_error_mapper,
            request_options=request_options,
        )

    def list_customers(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoCustomerResponseDto, ListCustomersErrorBody]:
        """Get a list of customer objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

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
            url_template=self._server.default("/v3/customers"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoCustomerResponseDto],
            error_mapper=list_customers_error_mapper,
            request_options=request_options,
        )

    def restore_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, RestoreCustomerErrorBody]:
        """Restore an archived customer. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored customers. There is no change when you restore a restored
        customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/restore"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[CustomerResponseDto],
            error_mapper=restore_customer_error_mapper,
            request_options=request_options,
        )

    def restore_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, RestoreCustomerContactErrorBody]:
        """Restore an archived customer contact. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored customer contacts. There is no change when you restore a
        restored customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/contacts/{contactId}/restore"),
            path_params=[param[str]("customerId", customer_id), param[str]("contactId", contact_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[CustomerContactResponseDto],
            error_mapper=restore_customer_contact_error_mapper,
            request_options=request_options,
        )

    def update_customer(
        self,
        customer_id: str,
        body: CustomerUpdateRequestDto | CustomerUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, UpdateCustomerErrorBody]:
        """Update details about an existing customer.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CustomerUpdateRequestDto | CustomerUpdateRequestDtoDict](body),
            decoder=json_decoder[CustomerResponseDto],
            error_mapper=update_customer_error_mapper,
            request_options=request_options,
        )

    def update_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        body: UpdateCustomerBankAccountRequestDto | UpdateCustomerBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerBankAccountResponseDto, UpdateCustomerBankAccountErrorBody]:
        """Update details about an existing customer bank account.

        You can update only the ``nickname`` and ``ownerType`` fields for a customer bank account. If you want to update
        any of the other fields, create a new customer bank account with ``POST
        /v3/customers/{customerId}/bank-accounts``.

        Args:
            customer_id: Value sent with the request.
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
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateCustomerBankAccountRequestDto | UpdateCustomerBankAccountRequestDtoDict](body),
            decoder=json_decoder[CustomerBankAccountResponseDto],
            error_mapper=update_customer_bank_account_error_mapper,
            request_options=request_options,
        )

    def update_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        body: UpdateCustomerContactRequestDto | UpdateCustomerContactRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, UpdateCustomerContactErrorBody]:
        """Update details about an existing customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/customers/{customerId}/contacts/{contactId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("contactId", contact_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateCustomerContactRequestDto | UpdateCustomerContactRequestDtoDict](body),
            decoder=json_decoder[CustomerContactResponseDto],
            error_mapper=update_customer_contact_error_mapper,
            request_options=request_options,
        )


class AsyncCustomersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, ArchiveCustomerErrorBody]:
        """Archive an existing customer. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived customer with ``POST /v3/customers/{customerId}/restore``. There is no change when
        you archive an archived customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/archive"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[CustomerResponseDto],
            error_mapper=archive_customer_error_mapper,
            request_options=request_options,
        )

    async def archive_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerBankAccountResponseDto, ArchiveCustomerBankAccountErrorBody]:
        """Archive an existing customer bank account. In the response, the ``archived`` field is set as ``true``. An
        archived customer bank account cannot be restored.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}/archive"),
            path_params=[param[str]("customerId", customer_id), param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[CustomerBankAccountResponseDto],
            error_mapper=archive_customer_bank_account_error_mapper,
            request_options=request_options,
        )

    async def archive_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, ArchiveCustomerContactErrorBody]:
        """Archive an existing customer contact. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived customer with ``POST /v3/customers/{customerId}/contacts/{contactId}/restore``.
        There is no change when you archive an archived customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/contacts/{contactId}/archive"),
            path_params=[param[str]("customerId", customer_id), param[str]("contactId", contact_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[CustomerContactResponseDto],
            error_mapper=archive_customer_contact_error_mapper,
            request_options=request_options,
        )

    async def authorize_to_charge_customer(
        self,
        customer_id: str,
        body: ChargeAuthorizationRequestDto | ChargeAuthorizationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ChargeAuthorizationResponseDto, AuthorizeToChargeCustomerErrorBody]:
        """Authorize your organization to charge a customer for invoices.

        By default, your organization is not authorized to charge a customer. The customer ``authorizedToCharge`` field
        must be set as ``true`` for you to charge the customer for invoices.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/charge-authorization"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ChargeAuthorizationRequestDto | ChargeAuthorizationRequestDtoDict](body),
            decoder=async_json_decoder[ChargeAuthorizationResponseDto],
            error_mapper=authorize_to_charge_customer_error_mapper,
            request_options=request_options,
        )

    async def create_customer(
        self,
        body: CustomerCreateRequestDto | CustomerCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, CreateCustomerErrorBody]:
        """Create a new customer.

        See Customers in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/customers"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CustomerCreateRequestDto | CustomerCreateRequestDtoDict](body),
            decoder=async_json_decoder[CustomerResponseDto],
            error_mapper=create_customer_error_mapper,
            request_options=request_options,
        )

    async def create_customer_bank_account(
        self,
        customer_id: str,
        body: CreateCustomerBankAccountRequestDto | CreateCustomerBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerBankAccountResponseDto, CreateCustomerBankAccountErrorBody]:
        """Create a new customer bank account. When you add customer bank account information, you can charge the
        customer for invoices.

        Creating a customer bank account follows a set of rules.
        * **Customer billing address**: The customer ``billingAddress`` information is required before you can create a
            customer bank account.
        * **Customer bank account verification**: If the customer bank account requires verification, BILL requires up
            to 2 business days to complete a one-time verification of the bank account.

        **Note**: When you add a customer bank account in the production environment, BILL validates the customer
        routing number before you can charge the customer. You will get an error message if the customer routing number
        is invalid in production.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateCustomerBankAccountRequestDto | CreateCustomerBankAccountRequestDtoDict](body),
            decoder=async_json_decoder[CustomerBankAccountResponseDto],
            error_mapper=create_customer_bank_account_error_mapper,
            request_options=request_options,
        )

    async def create_customer_contact(
        self,
        customer_id: str,
        body: CreateCustomerContactRequestDto | CreateCustomerContactRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, CreateCustomerContactErrorBody]:
        """Create a new customer contact.

        When you create a customer contact, BILL enables the customer to sign in to the BILL web app with the ``email``
        value and a random password. The signed-in customer can view invoices, make payments, and manage their account.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/contacts"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateCustomerContactRequestDto | CreateCustomerContactRequestDtoDict](body),
            decoder=async_json_decoder[CustomerContactResponseDto],
            error_mapper=create_customer_contact_error_mapper,
            request_options=request_options,
        )

    async def get_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, GetCustomerErrorBody]:
        """Get details about an existing customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[CustomerResponseDto],
            error_mapper=get_customer_error_mapper,
            request_options=request_options,
        )

    async def get_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerBankAccountResponseDto, GetCustomerBankAccountErrorBody]:
        """Get details about an existing customer bank account.

        Args:
            customer_id: Value sent with the request.
            bank_account_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("bankAccountId", bank_account_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[CustomerBankAccountResponseDto],
            error_mapper=get_customer_bank_account_error_mapper,
            request_options=request_options,
        )

    async def get_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, GetCustomerContactErrorBody]:
        """Get details about an existing customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/customers/{customerId}/contacts/{contactId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("contactId", contact_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[CustomerContactResponseDto],
            error_mapper=get_customer_contact_error_mapper,
            request_options=request_options,
        )

    async def list_customer_bank_accounts(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoCustomerBankAccountResponseDto, ListCustomerBankAccountsErrorBody]:
        """Get a list of customer bank account objects. By default, you get 20 results on one page of results. Set
        ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            customer_id: Value sent with the request.
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
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoCustomerBankAccountResponseDto],
            error_mapper=list_customer_bank_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_customer_contacts(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoCustomerContactResponseDto, ListCustomerContactsErrorBody]:
        """Get a list of customer contact objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            customer_id: Value sent with the request.
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
            url_template=self._server.default("/v3/customers/{customerId}/contacts"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoCustomerContactResponseDto],
            error_mapper=list_customer_contacts_error_mapper,
            request_options=request_options,
        )

    async def list_customers(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoCustomerResponseDto, ListCustomersErrorBody]:
        """Get a list of customer objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

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
            url_template=self._server.default("/v3/customers"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoCustomerResponseDto],
            error_mapper=list_customers_error_mapper,
            request_options=request_options,
        )

    async def restore_customer(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, RestoreCustomerErrorBody]:
        """Restore an archived customer. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored customers. There is no change when you restore a restored
        customer.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/restore"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[CustomerResponseDto],
            error_mapper=restore_customer_error_mapper,
            request_options=request_options,
        )

    async def restore_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, RestoreCustomerContactErrorBody]:
        """Restore an archived customer contact. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored customer contacts. There is no change when you restore a
        restored customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/customers/{customerId}/contacts/{contactId}/restore"),
            path_params=[param[str]("customerId", customer_id), param[str]("contactId", contact_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[CustomerContactResponseDto],
            error_mapper=restore_customer_contact_error_mapper,
            request_options=request_options,
        )

    async def update_customer(
        self,
        customer_id: str,
        body: CustomerUpdateRequestDto | CustomerUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerResponseDto, UpdateCustomerErrorBody]:
        """Update details about an existing customer.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CustomerUpdateRequestDto | CustomerUpdateRequestDtoDict](body),
            decoder=async_json_decoder[CustomerResponseDto],
            error_mapper=update_customer_error_mapper,
            request_options=request_options,
        )

    async def update_customer_bank_account(
        self,
        customer_id: str,
        bank_account_id: str,
        body: UpdateCustomerBankAccountRequestDto | UpdateCustomerBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerBankAccountResponseDto, UpdateCustomerBankAccountErrorBody]:
        """Update details about an existing customer bank account.

        You can update only the ``nickname`` and ``ownerType`` fields for a customer bank account. If you want to update
        any of the other fields, create a new customer bank account with ``POST
        /v3/customers/{customerId}/bank-accounts``.

        Args:
            customer_id: Value sent with the request.
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
            url_template=self._server.default("/v3/customers/{customerId}/bank-accounts/{bankAccountId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("bankAccountId", bank_account_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateCustomerBankAccountRequestDto | UpdateCustomerBankAccountRequestDtoDict](body),
            decoder=async_json_decoder[CustomerBankAccountResponseDto],
            error_mapper=update_customer_bank_account_error_mapper,
            request_options=request_options,
        )

    async def update_customer_contact(
        self,
        customer_id: str,
        contact_id: str,
        body: UpdateCustomerContactRequestDto | UpdateCustomerContactRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerContactResponseDto, UpdateCustomerContactErrorBody]:
        """Update details about an existing customer contact.

        Args:
            customer_id: Value sent with the request.
            contact_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/customers/{customerId}/contacts/{contactId}"),
            path_params=[param[str]("customerId", customer_id), param[str]("contactId", contact_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateCustomerContactRequestDto | UpdateCustomerContactRequestDtoDict](body),
            decoder=async_json_decoder[CustomerContactResponseDto],
            error_mapper=update_customer_contact_error_mapper,
            request_options=request_options,
        )
