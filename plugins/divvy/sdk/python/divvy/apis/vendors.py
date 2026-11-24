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
from ..errors.archive_vendor_error import ArchiveVendorErrorBody, archive_vendor_error_mapper
from ..errors.create_bulk_vendor_error import CreateBulkVendorErrorBody, create_bulk_vendor_error_mapper
from ..errors.create_vendor_bank_account_error import (
    CreateVendorBankAccountErrorBody,
    create_vendor_bank_account_error_mapper,
)
from ..errors.create_vendor_error import CreateVendorErrorBody, create_vendor_error_mapper
from ..errors.delete_vendor_bank_account_error import (
    DeleteVendorBankAccountErrorBody,
    delete_vendor_bank_account_error_mapper,
)
from ..errors.get_configuration_by_vendor_id_error import (
    GetConfigurationByVendorIdErrorBody,
    get_configuration_by_vendor_id_error_mapper,
)
from ..errors.get_intl_config_error import GetIntlConfigErrorBody, get_intl_config_error_mapper
from ..errors.get_vendor_bank_account_error import GetVendorBankAccountErrorBody, get_vendor_bank_account_error_mapper
from ..errors.get_vendor_error import GetVendorErrorBody, get_vendor_error_mapper
from ..errors.list_vendors_error import ListVendorsErrorBody, list_vendors_error_mapper
from ..errors.restore_vendor_error import RestoreVendorErrorBody, restore_vendor_error_mapper
from ..errors.update_vendor_error import UpdateVendorErrorBody, update_vendor_error_mapper
from ..models.bulk_vendor_response_dto import BulkVendorResponseDto
from ..models.enums.account_type_request import AccountTypeRequestOrStr
from ..models.enums.country_code import CountryCodeOrStr
from ..models.enums.currency_code import CurrencyCodeOrStr
from ..models.intl_pmts_configuration_response_dto import IntlPmtsConfigurationResponseDto
from ..models.list_vendor_response_dto import ListVendorResponseDto
from ..models.vendor_bank_account_request_dto import VendorBankAccountRequestDto, VendorBankAccountRequestDtoDict
from ..models.vendor_bank_account_response_dto import VendorBankAccountResponseDto
from ..models.vendor_configuration_response_dto import VendorConfigurationResponseDto
from ..models.vendor_request_dto import VendorRequestDto, VendorRequestDtoDict
from ..models.vendor_response_dto import VendorResponseDto
from ..models.vendor_update_request_dto import VendorUpdateRequestDto, VendorUpdateRequestDtoDict
from ..server.server import Server


class Vendors:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = VendorsWithRawResponse(client, server)

    def archive_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Archive an existing vendor. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived vendor with ``POST /v3/vendors/{vendorId}/restore``. There is no change when you
        archive an archived vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_vendor(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_bulk_vendor(
        self,
        body: list[VendorRequestDto | VendorRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkVendorResponseDto:
        """Create multiple vendors with one API request. You can create up to 20 vendors with one ``POST
        /v3/vendors/bulk`` request.

        In your bulk vendor creation request, all your vendors must be successfully created for a successful response.
        If any vendor creation is not successful, the entire request fails and none of the vendors in the request are
        created.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL
        network. See Virtual card FAQ in the BILL Help Center for more information.

        ### Requirements for enabling electronic payments to vendors

        Vendor bank account details are required for paying a vendor with electronic payment methods.

        ``paymentInformation`` details about bank accounts are required for adding a vendor bank account.
        * ``payeeName``
        * ``bankCountry`` (for international vendors)
        * ``paymentCurrency`` (for international vendors)
        * ``nameOnAccount``
        * ``accountNumber``
        * ``routingNumber`` (empty for an IBAN ``accountNumber``)
        * ``type`` (for international vendors)

        ``regulatoryFields`` and ``paymentPurpose`` are additional required fields for enabling electronic payments to
        international vendors (not United States) in specific countries.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        See Vendors in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple vendors response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_bulk_vendor(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_vendor(
        self,
        body: VendorRequestDto | VendorRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Create a new vendor.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL
        network. See Virtual card FAQ in the BILL Help Center for more information.

        ### Requirements for enabling electronic payments to vendors

        Vendor bank account details are required for paying a vendor with electronic payment methods.

        ``paymentInformation`` details about bank accounts are required for adding a vendor bank account.
        * ``payeeName``
        * ``bankCountry`` (for international vendors)
        * ``paymentCurrency`` (for international vendors)
        * ``nameOnAccount``
        * ``accountNumber``
        * ``routingNumber`` (empty for an IBAN ``accountNumber``)
        * ``type`` (for international vendors)

        ``regulatoryFields`` and ``paymentPurpose`` are additional required fields for enabling electronic payments to
        international vendors (not United States) in specific countries.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        See Vendors in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_vendor(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_vendor_bank_account(
        self,
        vendor_id: str,
        body: VendorBankAccountRequestDto | VendorBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorBankAccountResponseDto:
        """Create a vendor bank account for an existing vendor.

        To update vendor bank account information, you must first delete the existing vendor bank account (with ``DELETE
        /v3/vendors/{vendorId}/bank-account``), and then create a new vendor bank account (with ``POST
        /v3/vendors/{vendorId}/bank-account``) with the updated information.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a vendor bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_vendor_bank_account(
                vendor_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def delete_vendor_bank_account(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete the existing vendor bank account for a vendor.

        To update vendor bank account information, you must first delete the existing vendor bank account (with ``DELETE
        /v3/vendors/{vendorId}/bank-account``), and then create a new vendor bank account (with ``POST
        /v3/vendors/{vendorId}/bank-account``) with the updated information.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a vendor bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_vendor_bank_account(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_configuration_by_vendor_id(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorConfigurationResponseDto:
        """Get international payments (not USD) configuration after vendor creation. This configuration is required for
        compliance with international payment rules of a vendor country and vendor bank account.

        In the response, the required ``paymentPurpose`` and ``regulatoryFields`` information is retrieved for the
        vendor.

        **Note**: If you are adding ``paymentPurpose`` and ``regulatoryFields`` information during international vendor
        creation, use ``GET /v3/vendors/configuration/international-payments`` to get the required configuration before
        vendor creation.

        See Create an international vendor for more information on how to set ``paymentPurpose`` and
        ``regulatoryFields``.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor configuration response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_configuration_by_vendor_id(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_intl_config(
        self,
        country: CountryCodeOrStr,
        bill_currency: CurrencyCodeOrStr,
        account_type: AccountTypeRequestOrStr,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IntlPmtsConfigurationResponseDto:
        """Get international payments (not USD) configuration that is required for compliance with international payment
        rules of a vendor country and vendor bank account.

        This information is based on vendor country, bill currency, and vendor account type. Use this endpoint for
        getting information before creating an international vendor. In the response, the required ``paymentPurpose``
        and ``regulatoryFields`` information is retrieved for the vendor.

        **Note**: If you are adding ``paymentPurpose`` and ``regulatoryFields`` information after creating an
        international vendor, use ``GET /v3/vendors/{vendorId}/configuration`` to get the required configuration for
        your created vendor.

        See Create an international vendor for more information on how to set ``paymentPurpose`` and
        ``regulatoryFields``.

        Args:
            country: Value sent with the request.
            bill_currency: Value sent with the request.
            account_type: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get international payments configuration response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_intl_config(
                country,
                bill_currency,
                account_type,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def get_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Get details about an existing vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_vendor(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_vendor_bank_account(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorBankAccountResponseDto:
        """Get details about an existing vendor bank account.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor bank account details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_vendor_bank_account(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_vendors(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListVendorResponseDto:
        """Get a list of vendor objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            Get list of vendors response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_vendors(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def restore_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Restore an archived vendor. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored vendors. There is no change when you restore a restored
        vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_vendor(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_vendor(
        self,
        vendor_id: str,
        body: VendorUpdateRequestDto | VendorUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Update details about an existing vendor.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: You cannot add or update vendor bank account information with this endpoint. You can add and manage
        vendor bank account information with a dedicated set of endpoints.
        * **Create a vendor bank account**: ``POST /v3/vendors/{vendorId}/bank-account``
        * **Get vendor bank account details**: ``GET /v3/vendors/{vendorId}/bank-account``
        * **Delete a vendor bank account**: ``DELETE /v3/vendors/{vendorId}/bank-account``

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_vendor(
                vendor_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> VendorsWithRawResponse:
        return self._with_raw_response


class AsyncVendors:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncVendorsWithRawResponse(client, server)

    async def archive_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Archive an existing vendor. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived vendor with ``POST /v3/vendors/{vendorId}/restore``. There is no change when you
        archive an archived vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_vendor(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_bulk_vendor(
        self,
        body: list[VendorRequestDto | VendorRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkVendorResponseDto:
        """Create multiple vendors with one API request. You can create up to 20 vendors with one ``POST
        /v3/vendors/bulk`` request.

        In your bulk vendor creation request, all your vendors must be successfully created for a successful response.
        If any vendor creation is not successful, the entire request fails and none of the vendors in the request are
        created.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL
        network. See Virtual card FAQ in the BILL Help Center for more information.

        ### Requirements for enabling electronic payments to vendors

        Vendor bank account details are required for paying a vendor with electronic payment methods.

        ``paymentInformation`` details about bank accounts are required for adding a vendor bank account.
        * ``payeeName``
        * ``bankCountry`` (for international vendors)
        * ``paymentCurrency`` (for international vendors)
        * ``nameOnAccount``
        * ``accountNumber``
        * ``routingNumber`` (empty for an IBAN ``accountNumber``)
        * ``type`` (for international vendors)

        ``regulatoryFields`` and ``paymentPurpose`` are additional required fields for enabling electronic payments to
        international vendors (not United States) in specific countries.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        See Vendors in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple vendors response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bulk_vendor(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_vendor(
        self,
        body: VendorRequestDto | VendorRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Create a new vendor.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL
        network. See Virtual card FAQ in the BILL Help Center for more information.

        ### Requirements for enabling electronic payments to vendors

        Vendor bank account details are required for paying a vendor with electronic payment methods.

        ``paymentInformation`` details about bank accounts are required for adding a vendor bank account.
        * ``payeeName``
        * ``bankCountry`` (for international vendors)
        * ``paymentCurrency`` (for international vendors)
        * ``nameOnAccount``
        * ``accountNumber``
        * ``routingNumber`` (empty for an IBAN ``accountNumber``)
        * ``type`` (for international vendors)

        ``regulatoryFields`` and ``paymentPurpose`` are additional required fields for enabling electronic payments to
        international vendors (not United States) in specific countries.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        See Vendors in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_vendor(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_vendor_bank_account(
        self,
        vendor_id: str,
        body: VendorBankAccountRequestDto | VendorBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorBankAccountResponseDto:
        """Create a vendor bank account for an existing vendor.

        To update vendor bank account information, you must first delete the existing vendor bank account (with ``DELETE
        /v3/vendors/{vendorId}/bank-account``), and then create a new vendor bank account (with ``POST
        /v3/vendors/{vendorId}/bank-account``) with the updated information.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a vendor bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_vendor_bank_account(
                vendor_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def delete_vendor_bank_account(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete the existing vendor bank account for a vendor.

        To update vendor bank account information, you must first delete the existing vendor bank account (with ``DELETE
        /v3/vendors/{vendorId}/bank-account``), and then create a new vendor bank account (with ``POST
        /v3/vendors/{vendorId}/bank-account``) with the updated information.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a vendor bank account response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_vendor_bank_account(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_configuration_by_vendor_id(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorConfigurationResponseDto:
        """Get international payments (not USD) configuration after vendor creation. This configuration is required for
        compliance with international payment rules of a vendor country and vendor bank account.

        In the response, the required ``paymentPurpose`` and ``regulatoryFields`` information is retrieved for the
        vendor.

        **Note**: If you are adding ``paymentPurpose`` and ``regulatoryFields`` information during international vendor
        creation, use ``GET /v3/vendors/configuration/international-payments`` to get the required configuration before
        vendor creation.

        See Create an international vendor for more information on how to set ``paymentPurpose`` and
        ``regulatoryFields``.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor configuration response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_configuration_by_vendor_id(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_intl_config(
        self,
        country: CountryCodeOrStr,
        bill_currency: CurrencyCodeOrStr,
        account_type: AccountTypeRequestOrStr,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IntlPmtsConfigurationResponseDto:
        """Get international payments (not USD) configuration that is required for compliance with international payment
        rules of a vendor country and vendor bank account.

        This information is based on vendor country, bill currency, and vendor account type. Use this endpoint for
        getting information before creating an international vendor. In the response, the required ``paymentPurpose``
        and ``regulatoryFields`` information is retrieved for the vendor.

        **Note**: If you are adding ``paymentPurpose`` and ``regulatoryFields`` information after creating an
        international vendor, use ``GET /v3/vendors/{vendorId}/configuration`` to get the required configuration for
        your created vendor.

        See Create an international vendor for more information on how to set ``paymentPurpose`` and
        ``regulatoryFields``.

        Args:
            country: Value sent with the request.
            bill_currency: Value sent with the request.
            account_type: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get international payments configuration response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_intl_config(
                country,
                bill_currency,
                account_type,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def get_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Get details about an existing vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vendor(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_vendor_bank_account(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorBankAccountResponseDto:
        """Get details about an existing vendor bank account.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor bank account details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vendor_bank_account(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_vendors(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListVendorResponseDto:
        """Get a list of vendor objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            Get list of vendors response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_vendors(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def restore_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Restore an archived vendor. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored vendors. There is no change when you restore a restored
        vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_vendor(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_vendor(
        self,
        vendor_id: str,
        body: VendorUpdateRequestDto | VendorUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorResponseDto:
        """Update details about an existing vendor.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: You cannot add or update vendor bank account information with this endpoint. You can add and manage
        vendor bank account information with a dedicated set of endpoints.
        * **Create a vendor bank account**: ``POST /v3/vendors/{vendorId}/bank-account``
        * **Get vendor bank account details**: ``GET /v3/vendors/{vendorId}/bank-account``
        * **Delete a vendor bank account**: ``DELETE /v3/vendors/{vendorId}/bank-account``

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_vendor(
                vendor_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVendorsWithRawResponse:
        return self._with_raw_response


class VendorsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, ArchiveVendorErrorBody]:
        """Archive an existing vendor. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived vendor with ``POST /v3/vendors/{vendorId}/restore``. There is no change when you
        archive an archived vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendors/{vendorId}/archive"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[VendorResponseDto],
            error_mapper=archive_vendor_error_mapper,
            request_options=request_options,
        )

    def create_bulk_vendor(
        self,
        body: list[VendorRequestDto | VendorRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkVendorResponseDto, CreateBulkVendorErrorBody]:
        """Create multiple vendors with one API request. You can create up to 20 vendors with one ``POST
        /v3/vendors/bulk`` request.

        In your bulk vendor creation request, all your vendors must be successfully created for a successful response.
        If any vendor creation is not successful, the entire request fails and none of the vendors in the request are
        created.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL
        network. See Virtual card FAQ in the BILL Help Center for more information.

        ### Requirements for enabling electronic payments to vendors

        Vendor bank account details are required for paying a vendor with electronic payment methods.

        ``paymentInformation`` details about bank accounts are required for adding a vendor bank account.
        * ``payeeName``
        * ``bankCountry`` (for international vendors)
        * ``paymentCurrency`` (for international vendors)
        * ``nameOnAccount``
        * ``accountNumber``
        * ``routingNumber`` (empty for an IBAN ``accountNumber``)
        * ``type`` (for international vendors)

        ``regulatoryFields`` and ``paymentPurpose`` are additional required fields for enabling electronic payments to
        international vendors (not United States) in specific countries.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        See Vendors in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/vendors/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[VendorRequestDto | VendorRequestDtoDict]](body),
            decoder=json_decoder[BulkVendorResponseDto],
            error_mapper=create_bulk_vendor_error_mapper,
            request_options=request_options,
        )

    def create_vendor(
        self,
        body: VendorRequestDto | VendorRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, CreateVendorErrorBody]:
        """Create a new vendor.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL
        network. See Virtual card FAQ in the BILL Help Center for more information.

        ### Requirements for enabling electronic payments to vendors

        Vendor bank account details are required for paying a vendor with electronic payment methods.

        ``paymentInformation`` details about bank accounts are required for adding a vendor bank account.
        * ``payeeName``
        * ``bankCountry`` (for international vendors)
        * ``paymentCurrency`` (for international vendors)
        * ``nameOnAccount``
        * ``accountNumber``
        * ``routingNumber`` (empty for an IBAN ``accountNumber``)
        * ``type`` (for international vendors)

        ``regulatoryFields`` and ``paymentPurpose`` are additional required fields for enabling electronic payments to
        international vendors (not United States) in specific countries.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        See Vendors in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/vendors"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[VendorRequestDto | VendorRequestDtoDict](body),
            decoder=json_decoder[VendorResponseDto],
            error_mapper=create_vendor_error_mapper,
            request_options=request_options,
        )

    def create_vendor_bank_account(
        self,
        vendor_id: str,
        body: VendorBankAccountRequestDto | VendorBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorBankAccountResponseDto, CreateVendorBankAccountErrorBody]:
        """Create a vendor bank account for an existing vendor.

        To update vendor bank account information, you must first delete the existing vendor bank account (with ``DELETE
        /v3/vendors/{vendorId}/bank-account``), and then create a new vendor bank account (with ``POST
        /v3/vendors/{vendorId}/bank-account``) with the updated information.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendors/{vendorId}/bank-account"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[VendorBankAccountRequestDto | VendorBankAccountRequestDtoDict](body),
            decoder=json_decoder[VendorBankAccountResponseDto],
            error_mapper=create_vendor_bank_account_error_mapper,
            request_options=request_options,
        )

    def delete_vendor_bank_account(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVendorBankAccountErrorBody]:
        """Delete the existing vendor bank account for a vendor.

        To update vendor bank account information, you must first delete the existing vendor bank account (with ``DELETE
        /v3/vendors/{vendorId}/bank-account``), and then create a new vendor bank account (with ``POST
        /v3/vendors/{vendorId}/bank-account``) with the updated information.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/vendors/{vendorId}/bank-account"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=empty_response,
            error_mapper=delete_vendor_bank_account_error_mapper,
            request_options=request_options,
        )

    def get_configuration_by_vendor_id(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorConfigurationResponseDto, GetConfigurationByVendorIdErrorBody]:
        """Get international payments (not USD) configuration after vendor creation. This configuration is required for
        compliance with international payment rules of a vendor country and vendor bank account.

        In the response, the required ``paymentPurpose`` and ``regulatoryFields`` information is retrieved for the
        vendor.

        **Note**: If you are adding ``paymentPurpose`` and ``regulatoryFields`` information during international vendor
        creation, use ``GET /v3/vendors/configuration/international-payments`` to get the required configuration before
        vendor creation.

        See Create an international vendor for more information on how to set ``paymentPurpose`` and
        ``regulatoryFields``.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendors/{vendorId}/configuration"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[VendorConfigurationResponseDto],
            error_mapper=get_configuration_by_vendor_id_error_mapper,
            request_options=request_options,
        )

    def get_intl_config(
        self,
        country: CountryCodeOrStr,
        bill_currency: CurrencyCodeOrStr,
        account_type: AccountTypeRequestOrStr,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IntlPmtsConfigurationResponseDto, GetIntlConfigErrorBody]:
        """Get international payments (not USD) configuration that is required for compliance with international payment
        rules of a vendor country and vendor bank account.

        This information is based on vendor country, bill currency, and vendor account type. Use this endpoint for
        getting information before creating an international vendor. In the response, the required ``paymentPurpose``
        and ``regulatoryFields`` information is retrieved for the vendor.

        **Note**: If you are adding ``paymentPurpose`` and ``regulatoryFields`` information after creating an
        international vendor, use ``GET /v3/vendors/{vendorId}/configuration`` to get the required configuration for
        your created vendor.

        See Create an international vendor for more information on how to set ``paymentPurpose`` and
        ``regulatoryFields``.

        Args:
            country: Value sent with the request.
            bill_currency: Value sent with the request.
            account_type: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendors/configuration/international-payments"),
            query_params=[
                param[CountryCodeOrStr]("country", country),
                param[CurrencyCodeOrStr]("billCurrency", bill_currency),
                param[AccountTypeRequestOrStr]("accountType", account_type),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[IntlPmtsConfigurationResponseDto],
            error_mapper=get_intl_config_error_mapper,
            request_options=request_options,
        )

    def get_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, GetVendorErrorBody]:
        """Get details about an existing vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendors/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[VendorResponseDto],
            error_mapper=get_vendor_error_mapper,
            request_options=request_options,
        )

    def get_vendor_bank_account(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorBankAccountResponseDto, GetVendorBankAccountErrorBody]:
        """Get details about an existing vendor bank account.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendors/{vendorId}/bank-account"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[VendorBankAccountResponseDto],
            error_mapper=get_vendor_bank_account_error_mapper,
            request_options=request_options,
        )

    def list_vendors(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListVendorResponseDto, ListVendorsErrorBody]:
        """Get a list of vendor objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            url_template=self._server.default("/v3/vendors"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListVendorResponseDto],
            error_mapper=list_vendors_error_mapper,
            request_options=request_options,
        )

    def restore_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, RestoreVendorErrorBody]:
        """Restore an archived vendor. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored vendors. There is no change when you restore a restored
        vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendors/{vendorId}/restore"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[VendorResponseDto],
            error_mapper=restore_vendor_error_mapper,
            request_options=request_options,
        )

    def update_vendor(
        self,
        vendor_id: str,
        body: VendorUpdateRequestDto | VendorUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, UpdateVendorErrorBody]:
        """Update details about an existing vendor.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: You cannot add or update vendor bank account information with this endpoint. You can add and manage
        vendor bank account information with a dedicated set of endpoints.
        * **Create a vendor bank account**: ``POST /v3/vendors/{vendorId}/bank-account``
        * **Get vendor bank account details**: ``GET /v3/vendors/{vendorId}/bank-account``
        * **Delete a vendor bank account**: ``DELETE /v3/vendors/{vendorId}/bank-account``

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/vendors/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[VendorUpdateRequestDto | VendorUpdateRequestDtoDict](body),
            decoder=json_decoder[VendorResponseDto],
            error_mapper=update_vendor_error_mapper,
            request_options=request_options,
        )


class AsyncVendorsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, ArchiveVendorErrorBody]:
        """Archive an existing vendor. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived vendor with ``POST /v3/vendors/{vendorId}/restore``. There is no change when you
        archive an archived vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendors/{vendorId}/archive"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[VendorResponseDto],
            error_mapper=archive_vendor_error_mapper,
            request_options=request_options,
        )

    async def create_bulk_vendor(
        self,
        body: list[VendorRequestDto | VendorRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkVendorResponseDto, CreateBulkVendorErrorBody]:
        """Create multiple vendors with one API request. You can create up to 20 vendors with one ``POST
        /v3/vendors/bulk`` request.

        In your bulk vendor creation request, all your vendors must be successfully created for a successful response.
        If any vendor creation is not successful, the entire request fails and none of the vendors in the request are
        created.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL
        network. See Virtual card FAQ in the BILL Help Center for more information.

        ### Requirements for enabling electronic payments to vendors

        Vendor bank account details are required for paying a vendor with electronic payment methods.

        ``paymentInformation`` details about bank accounts are required for adding a vendor bank account.
        * ``payeeName``
        * ``bankCountry`` (for international vendors)
        * ``paymentCurrency`` (for international vendors)
        * ``nameOnAccount``
        * ``accountNumber``
        * ``routingNumber`` (empty for an IBAN ``accountNumber``)
        * ``type`` (for international vendors)

        ``regulatoryFields`` and ``paymentPurpose`` are additional required fields for enabling electronic payments to
        international vendors (not United States) in specific countries.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        See Vendors in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/vendors/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[VendorRequestDto | VendorRequestDtoDict]](body),
            decoder=async_json_decoder[BulkVendorResponseDto],
            error_mapper=create_bulk_vendor_error_mapper,
            request_options=request_options,
        )

    async def create_vendor(
        self,
        body: VendorRequestDto | VendorRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, CreateVendorErrorBody]:
        """Create a new vendor.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL
        network. See Virtual card FAQ in the BILL Help Center for more information.

        ### Requirements for enabling electronic payments to vendors

        Vendor bank account details are required for paying a vendor with electronic payment methods.

        ``paymentInformation`` details about bank accounts are required for adding a vendor bank account.
        * ``payeeName``
        * ``bankCountry`` (for international vendors)
        * ``paymentCurrency`` (for international vendors)
        * ``nameOnAccount``
        * ``accountNumber``
        * ``routingNumber`` (empty for an IBAN ``accountNumber``)
        * ``type`` (for international vendors)

        ``regulatoryFields`` and ``paymentPurpose`` are additional required fields for enabling electronic payments to
        international vendors (not United States) in specific countries.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        See Vendors in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/vendors"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[VendorRequestDto | VendorRequestDtoDict](body),
            decoder=async_json_decoder[VendorResponseDto],
            error_mapper=create_vendor_error_mapper,
            request_options=request_options,
        )

    async def create_vendor_bank_account(
        self,
        vendor_id: str,
        body: VendorBankAccountRequestDto | VendorBankAccountRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorBankAccountResponseDto, CreateVendorBankAccountErrorBody]:
        """Create a vendor bank account for an existing vendor.

        To update vendor bank account information, you must first delete the existing vendor bank account (with ``DELETE
        /v3/vendors/{vendorId}/bank-account``), and then create a new vendor bank account (with ``POST
        /v3/vendors/{vendorId}/bank-account``) with the updated information.

        **Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to
        complete a one-time verification of the bank account. To pay such a vendor, you must set a ``processDate`` that
        is 2 business days from the current date.

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendors/{vendorId}/bank-account"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[VendorBankAccountRequestDto | VendorBankAccountRequestDtoDict](body),
            decoder=async_json_decoder[VendorBankAccountResponseDto],
            error_mapper=create_vendor_bank_account_error_mapper,
            request_options=request_options,
        )

    async def delete_vendor_bank_account(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVendorBankAccountErrorBody]:
        """Delete the existing vendor bank account for a vendor.

        To update vendor bank account information, you must first delete the existing vendor bank account (with ``DELETE
        /v3/vendors/{vendorId}/bank-account``), and then create a new vendor bank account (with ``POST
        /v3/vendors/{vendorId}/bank-account``) with the updated information.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/vendors/{vendorId}/bank-account"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_empty_response,
            error_mapper=delete_vendor_bank_account_error_mapper,
            request_options=request_options,
        )

    async def get_configuration_by_vendor_id(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorConfigurationResponseDto, GetConfigurationByVendorIdErrorBody]:
        """Get international payments (not USD) configuration after vendor creation. This configuration is required for
        compliance with international payment rules of a vendor country and vendor bank account.

        In the response, the required ``paymentPurpose`` and ``regulatoryFields`` information is retrieved for the
        vendor.

        **Note**: If you are adding ``paymentPurpose`` and ``regulatoryFields`` information during international vendor
        creation, use ``GET /v3/vendors/configuration/international-payments`` to get the required configuration before
        vendor creation.

        See Create an international vendor for more information on how to set ``paymentPurpose`` and
        ``regulatoryFields``.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendors/{vendorId}/configuration"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[VendorConfigurationResponseDto],
            error_mapper=get_configuration_by_vendor_id_error_mapper,
            request_options=request_options,
        )

    async def get_intl_config(
        self,
        country: CountryCodeOrStr,
        bill_currency: CurrencyCodeOrStr,
        account_type: AccountTypeRequestOrStr,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IntlPmtsConfigurationResponseDto, GetIntlConfigErrorBody]:
        """Get international payments (not USD) configuration that is required for compliance with international payment
        rules of a vendor country and vendor bank account.

        This information is based on vendor country, bill currency, and vendor account type. Use this endpoint for
        getting information before creating an international vendor. In the response, the required ``paymentPurpose``
        and ``regulatoryFields`` information is retrieved for the vendor.

        **Note**: If you are adding ``paymentPurpose`` and ``regulatoryFields`` information after creating an
        international vendor, use ``GET /v3/vendors/{vendorId}/configuration`` to get the required configuration for
        your created vendor.

        See Create an international vendor for more information on how to set ``paymentPurpose`` and
        ``regulatoryFields``.

        Args:
            country: Value sent with the request.
            bill_currency: Value sent with the request.
            account_type: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendors/configuration/international-payments"),
            query_params=[
                param[CountryCodeOrStr]("country", country),
                param[CurrencyCodeOrStr]("billCurrency", bill_currency),
                param[AccountTypeRequestOrStr]("accountType", account_type),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[IntlPmtsConfigurationResponseDto],
            error_mapper=get_intl_config_error_mapper,
            request_options=request_options,
        )

    async def get_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, GetVendorErrorBody]:
        """Get details about an existing vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendors/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[VendorResponseDto],
            error_mapper=get_vendor_error_mapper,
            request_options=request_options,
        )

    async def get_vendor_bank_account(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorBankAccountResponseDto, GetVendorBankAccountErrorBody]:
        """Get details about an existing vendor bank account.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendors/{vendorId}/bank-account"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[VendorBankAccountResponseDto],
            error_mapper=get_vendor_bank_account_error_mapper,
            request_options=request_options,
        )

    async def list_vendors(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListVendorResponseDto, ListVendorsErrorBody]:
        """Get a list of vendor objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            url_template=self._server.default("/v3/vendors"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListVendorResponseDto],
            error_mapper=list_vendors_error_mapper,
            request_options=request_options,
        )

    async def restore_vendor(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, RestoreVendorErrorBody]:
        """Restore an archived vendor. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored vendors. There is no change when you restore a restored
        vendor.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendors/{vendorId}/restore"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[VendorResponseDto],
            error_mapper=restore_vendor_error_mapper,
            request_options=request_options,
        )

    async def update_vendor(
        self,
        vendor_id: str,
        body: VendorUpdateRequestDto | VendorUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorResponseDto, UpdateVendorErrorBody]:
        """Update details about an existing vendor.

        ### Requirements for enabling vendor payments

        Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL
        network.
        * ``line1``
        * ``city``
        * ``zipOrPostalCode``
        * ``country``
        * ``payeeName``

        **Note**: You cannot add or update vendor bank account information with this endpoint. You can add and manage
        vendor bank account information with a dedicated set of endpoints.
        * **Create a vendor bank account**: ``POST /v3/vendors/{vendorId}/bank-account``
        * **Get vendor bank account details**: ``GET /v3/vendors/{vendorId}/bank-account``
        * **Delete a vendor bank account**: ``DELETE /v3/vendors/{vendorId}/bank-account``

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/vendors/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[VendorUpdateRequestDto | VendorUpdateRequestDtoDict](body),
            decoder=async_json_decoder[VendorResponseDto],
            error_mapper=update_vendor_error_mapper,
            request_options=request_options,
        )
