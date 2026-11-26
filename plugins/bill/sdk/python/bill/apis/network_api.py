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
from ..errors.accept_invitation_error import AcceptInvitationErrorBody, accept_invitation_error_mapper
from ..errors.create_customer_invitation_error import (
    CreateCustomerInvitationErrorBody,
    create_customer_invitation_error_mapper,
)
from ..errors.create_vendor_invitation_error import (
    CreateVendorInvitationErrorBody,
    create_vendor_invitation_error_mapper,
)
from ..errors.delete_customer_invitation_error import (
    DeleteCustomerInvitationErrorBody,
    delete_customer_invitation_error_mapper,
)
from ..errors.delete_vendor_invitation_error import (
    DeleteVendorInvitationErrorBody,
    delete_vendor_invitation_error_mapper,
)
from ..errors.get_customer_invitation_error import GetCustomerInvitationErrorBody, get_customer_invitation_error_mapper
from ..errors.get_vendor_invitation_error import GetVendorInvitationErrorBody, get_vendor_invitation_error_mapper
from ..errors.invite_vendor_not_in_bill_network_error import (
    InviteVendorNotInBillNetworkErrorBody,
    invite_vendor_not_in_bill_network_error_mapper,
)
from ..errors.search_error import SearchErrorBody, search_error_mapper
from ..models.accept_invitation_request_dto import AcceptInvitationRequestDto, AcceptInvitationRequestDtoDict
from ..models.create_invitation_request_dto import CreateInvitationRequestDto, CreateInvitationRequestDtoDict
from ..models.enums.scope_type import ScopeTypeOrStr
from ..models.get_invitation_response_dto import GetInvitationResponseDto
from ..models.invite_vendor_not_in_bill_network_request_dto import (
    InviteVendorNotInBillNetworkRequestDto,
    InviteVendorNotInBillNetworkRequestDtoDict,
)
from ..models.network_search_response_dto import NetworkSearchResponseDto
from ..server.server import Server


class NetworkApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = NetworkApiWithRawResponse(client, server)

    def accept_invitation(
        self,
        body: AcceptInvitationRequestDto | AcceptInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Accept a connection request sent by a vendor or customer.

        The organization receiving the connection request must have auto-connections disabled. If auto-connections are
        not disabled, BILL automatically connects the organizations in the BILL Network.

        When the invitation is accepted, BILL connects the two organizations in the BILL Network.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accept connection request response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.accept_invitation(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_customer_invitation(
        self,
        customer_id: str,
        body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a connection request to a customer organization in the BILL Network. BILL automatically connects the
        customer organization with the customer record in your BILL organization.

        If the customer organization has auto-connections disabled, BILL sends an invitation email to the customer email
        address. When the customer accepts the invitation, BILL connects the customer organization with the customer
        record in your BILL organization.

        If the customer does not respond, you can delete the connection request (with ``DELETE
        /v3/network/invitation/customer/{customerId}``) before sending a new connection request.

        **Note**: If the customer does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Send connection request to a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_invitation(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_vendor_invitation(
        self,
        vendor_id: str,
        body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a connection request to a vendor organization in the BILL Network. BILL automatically connects the
        vendor organization with the vendor record in your BILL organization.

        If the vendor organization has auto-connections disabled, BILL sends an invitation email to the vendor email
        address. When the vendor accepts the invitation, BILL connects the vendor organization with the vendor record in
        your BILL organization.

        If the vendor does not respond, you can delete the connection request (with ``DELETE
        /v3/network/invitation/vendor/{vendorId}``) before sending a new connection request.

        **Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Send connection request to a vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_vendor_invitation(
                vendor_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def delete_customer_invitation(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing Network connection with a customer organization. Delete customer connection follows a set
        of rules.
        * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled
            before you can disconnect.
        * **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear
            before you can disconnect.

        You can use this endpoint to cancel a pending connection request sent to a customer that has auto-connections
        disabled. You can send a new connection request after an existing connection or connection request is canceled.

        **Note**: If the customer does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete customer connection response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_customer_invitation(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def delete_vendor_invitation(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing Network connection with a vendor organization. Delete vendor connection follows a set of
        rules.
        * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled
            before you can disconnect.
        * **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear
            before you can disconnect.

        You can use this endpoint to cancel a pending connection request sent to a vendor that has auto-connections
        disabled. You can send a new connection request after an existing connection or connection request is canceled.

        **Note**: If the vendor does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete vendor connection response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_vendor_invitation(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_customer_invitation(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetInvitationResponseDto:
        """Get the status of an existing connection request sent with ``POST
        /v3/network/invitation/customer/{customerId}``.

        When you send a connection request to a customer organization that has auto-connections enabled, BILL
        automatically connects you with the organization. If the organization has auto-connections disabled, the
        connection request status changes when the customer accepts the request.

        **Note**: If the customer does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get customer connection request status response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_customer_invitation(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_vendor_invitation(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetInvitationResponseDto:
        """Get the status of an existing connection request sent with ``POST /v3/network/invitation/vendor/{vendorId}``.

        When you send a connection request to a vendor organization that has auto-connections enabled, BILL
        automatically connects you with the organization. If the organization has auto-connections disabled, the
        connection request status changes when the vendor accepts the request.

        **Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor connection request status response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_vendor_invitation(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def invite_vendor_not_in_bill_network(
        self,
        vendor_id: str,
        body: InviteVendorNotInBillNetworkRequestDto | InviteVendorNotInBillNetworkRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a connection request to a vendor not in the BILL Network.

        BILL sends an invitation email to the provided vendor email address. When the vendor accepts the invitation and
        sets up a BILL account, BILL connects the vendor organization with the vendor record in your BILL organization.

        **Note**:
        * The vendor organization must exist before BILL can send an invitation email.
        * If the vendor does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Send connection request to a vendor not in the BILL Network response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.invite_vendor_not_in_bill_network(
                vendor_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def search(
        self,
        name: str,
        *,
        scope: ScopeTypeOrStr | None = None,
        zip_or_postal_code: str | None = None,
        account_number: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NetworkSearchResponseDto:
        """Search for a customer, vendor, or verified national vendor organization. You can search in the BILL Network
        and verified national vendor (``RPPS``) network.

        When you search in the BILL Network, there are two ``name`` requirements for getting search results.
        * Your search term must have a minimum of three characters.
        * Your search term must be a complete word. You will not get search results when your search term is a partial
            word.

        When you search in the verified national vendor (``RPPS``) network, search results are based on both a complete
        and partial match on ``name`` and ``zipOrPostalCode``. You can further filter your search by the billing
        statement ``accountNumber`` with the vendor. For example, your Verizon internet bill account number.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            name: Value sent with the request.
            scope: Value sent with the request.
            zip_or_postal_code: Value sent with the request.
            account_number: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search for an organization in the BILL Network response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.search(
                name,
                scope=scope,
                zip_or_postal_code=zip_or_postal_code,
                account_number=account_number,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> NetworkApiWithRawResponse:
        return self._with_raw_response


class AsyncNetworkApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncNetworkApiWithRawResponse(client, server)

    async def accept_invitation(
        self,
        body: AcceptInvitationRequestDto | AcceptInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Accept a connection request sent by a vendor or customer.

        The organization receiving the connection request must have auto-connections disabled. If auto-connections are
        not disabled, BILL automatically connects the organizations in the BILL Network.

        When the invitation is accepted, BILL connects the two organizations in the BILL Network.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accept connection request response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.accept_invitation(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_customer_invitation(
        self,
        customer_id: str,
        body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a connection request to a customer organization in the BILL Network. BILL automatically connects the
        customer organization with the customer record in your BILL organization.

        If the customer organization has auto-connections disabled, BILL sends an invitation email to the customer email
        address. When the customer accepts the invitation, BILL connects the customer organization with the customer
        record in your BILL organization.

        If the customer does not respond, you can delete the connection request (with ``DELETE
        /v3/network/invitation/customer/{customerId}``) before sending a new connection request.

        **Note**: If the customer does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Send connection request to a customer response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_invitation(
                customer_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_vendor_invitation(
        self,
        vendor_id: str,
        body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a connection request to a vendor organization in the BILL Network. BILL automatically connects the
        vendor organization with the vendor record in your BILL organization.

        If the vendor organization has auto-connections disabled, BILL sends an invitation email to the vendor email
        address. When the vendor accepts the invitation, BILL connects the vendor organization with the vendor record in
        your BILL organization.

        If the vendor does not respond, you can delete the connection request (with ``DELETE
        /v3/network/invitation/vendor/{vendorId}``) before sending a new connection request.

        **Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Send connection request to a vendor response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_vendor_invitation(
                vendor_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def delete_customer_invitation(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing Network connection with a customer organization. Delete customer connection follows a set
        of rules.
        * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled
            before you can disconnect.
        * **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear
            before you can disconnect.

        You can use this endpoint to cancel a pending connection request sent to a customer that has auto-connections
        disabled. You can send a new connection request after an existing connection or connection request is canceled.

        **Note**: If the customer does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete customer connection response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_customer_invitation(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def delete_vendor_invitation(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing Network connection with a vendor organization. Delete vendor connection follows a set of
        rules.
        * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled
            before you can disconnect.
        * **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear
            before you can disconnect.

        You can use this endpoint to cancel a pending connection request sent to a vendor that has auto-connections
        disabled. You can send a new connection request after an existing connection or connection request is canceled.

        **Note**: If the vendor does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete vendor connection response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_vendor_invitation(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_customer_invitation(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetInvitationResponseDto:
        """Get the status of an existing connection request sent with ``POST
        /v3/network/invitation/customer/{customerId}``.

        When you send a connection request to a customer organization that has auto-connections enabled, BILL
        automatically connects you with the organization. If the organization has auto-connections disabled, the
        connection request status changes when the customer accepts the request.

        **Note**: If the customer does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get customer connection request status response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_invitation(
                customer_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_vendor_invitation(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetInvitationResponseDto:
        """Get the status of an existing connection request sent with ``POST /v3/network/invitation/vendor/{vendorId}``.

        When you send a connection request to a vendor organization that has auto-connections enabled, BILL
        automatically connects you with the organization. If the organization has auto-connections disabled, the
        connection request status changes when the vendor accepts the request.

        **Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor connection request status response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vendor_invitation(
                vendor_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def invite_vendor_not_in_bill_network(
        self,
        vendor_id: str,
        body: InviteVendorNotInBillNetworkRequestDto | InviteVendorNotInBillNetworkRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a connection request to a vendor not in the BILL Network.

        BILL sends an invitation email to the provided vendor email address. When the vendor accepts the invitation and
        sets up a BILL account, BILL connects the vendor organization with the vendor record in your BILL organization.

        **Note**:
        * The vendor organization must exist before BILL can send an invitation email.
        * If the vendor does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Send connection request to a vendor not in the BILL Network response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.invite_vendor_not_in_bill_network(
                vendor_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def search(
        self,
        name: str,
        *,
        scope: ScopeTypeOrStr | None = None,
        zip_or_postal_code: str | None = None,
        account_number: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NetworkSearchResponseDto:
        """Search for a customer, vendor, or verified national vendor organization. You can search in the BILL Network
        and verified national vendor (``RPPS``) network.

        When you search in the BILL Network, there are two ``name`` requirements for getting search results.
        * Your search term must have a minimum of three characters.
        * Your search term must be a complete word. You will not get search results when your search term is a partial
            word.

        When you search in the verified national vendor (``RPPS``) network, search results are based on both a complete
        and partial match on ``name`` and ``zipOrPostalCode``. You can further filter your search by the billing
        statement ``accountNumber`` with the vendor. For example, your Verizon internet bill account number.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            name: Value sent with the request.
            scope: Value sent with the request.
            zip_or_postal_code: Value sent with the request.
            account_number: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search for an organization in the BILL Network response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.search(
                name,
                scope=scope,
                zip_or_postal_code=zip_or_postal_code,
                account_number=account_number,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNetworkApiWithRawResponse:
        return self._with_raw_response


class NetworkApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def accept_invitation(
        self,
        body: AcceptInvitationRequestDto | AcceptInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AcceptInvitationErrorBody]:
        """Accept a connection request sent by a vendor or customer.

        The organization receiving the connection request must have auto-connections disabled. If auto-connections are
        not disabled, BILL automatically connects the organizations in the BILL Network.

        When the invitation is accepted, BILL connects the two organizations in the BILL Network.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/accept"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AcceptInvitationRequestDto | AcceptInvitationRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=accept_invitation_error_mapper,
            request_options=request_options,
        )

    def create_customer_invitation(
        self,
        customer_id: str,
        body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateCustomerInvitationErrorBody]:
        """Send a connection request to a customer organization in the BILL Network. BILL automatically connects the
        customer organization with the customer record in your BILL organization.

        If the customer organization has auto-connections disabled, BILL sends an invitation email to the customer email
        address. When the customer accepts the invitation, BILL connects the customer organization with the customer
        record in your BILL organization.

        If the customer does not respond, you can delete the connection request (with ``DELETE
        /v3/network/invitation/customer/{customerId}``) before sending a new connection request.

        **Note**: If the customer does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/customer/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateInvitationRequestDto | CreateInvitationRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=create_customer_invitation_error_mapper,
            request_options=request_options,
        )

    def create_vendor_invitation(
        self,
        vendor_id: str,
        body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateVendorInvitationErrorBody]:
        """Send a connection request to a vendor organization in the BILL Network. BILL automatically connects the
        vendor organization with the vendor record in your BILL organization.

        If the vendor organization has auto-connections disabled, BILL sends an invitation email to the vendor email
        address. When the vendor accepts the invitation, BILL connects the vendor organization with the vendor record in
        your BILL organization.

        If the vendor does not respond, you can delete the connection request (with ``DELETE
        /v3/network/invitation/vendor/{vendorId}``) before sending a new connection request.

        **Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/vendor/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateInvitationRequestDto | CreateInvitationRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=create_vendor_invitation_error_mapper,
            request_options=request_options,
        )

    def delete_customer_invitation(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCustomerInvitationErrorBody]:
        """Delete an existing Network connection with a customer organization. Delete customer connection follows a set
        of rules.
        * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled
            before you can disconnect.
        * **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear
            before you can disconnect.

        You can use this endpoint to cancel a pending connection request sent to a customer that has auto-connections
        disabled. You can send a new connection request after an existing connection or connection request is canceled.

        **Note**: If the customer does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/network/invitation/customer/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=empty_response,
            error_mapper=delete_customer_invitation_error_mapper,
            request_options=request_options,
        )

    def delete_vendor_invitation(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVendorInvitationErrorBody]:
        """Delete an existing Network connection with a vendor organization. Delete vendor connection follows a set of
        rules.
        * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled
            before you can disconnect.
        * **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear
            before you can disconnect.

        You can use this endpoint to cancel a pending connection request sent to a vendor that has auto-connections
        disabled. You can send a new connection request after an existing connection or connection request is canceled.

        **Note**: If the vendor does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/vendor/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=empty_response,
            error_mapper=delete_vendor_invitation_error_mapper,
            request_options=request_options,
        )

    def get_customer_invitation(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInvitationResponseDto, GetCustomerInvitationErrorBody]:
        """Get the status of an existing connection request sent with ``POST
        /v3/network/invitation/customer/{customerId}``.

        When you send a connection request to a customer organization that has auto-connections enabled, BILL
        automatically connects you with the organization. If the organization has auto-connections disabled, the
        connection request status changes when the customer accepts the request.

        **Note**: If the customer does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/customer/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[GetInvitationResponseDto],
            error_mapper=get_customer_invitation_error_mapper,
            request_options=request_options,
        )

    def get_vendor_invitation(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInvitationResponseDto, GetVendorInvitationErrorBody]:
        """Get the status of an existing connection request sent with ``POST /v3/network/invitation/vendor/{vendorId}``.

        When you send a connection request to a vendor organization that has auto-connections enabled, BILL
        automatically connects you with the organization. If the organization has auto-connections disabled, the
        connection request status changes when the vendor accepts the request.

        **Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/vendor/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[GetInvitationResponseDto],
            error_mapper=get_vendor_invitation_error_mapper,
            request_options=request_options,
        )

    def invite_vendor_not_in_bill_network(
        self,
        vendor_id: str,
        body: InviteVendorNotInBillNetworkRequestDto | InviteVendorNotInBillNetworkRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, InviteVendorNotInBillNetworkErrorBody]:
        """Send a connection request to a vendor not in the BILL Network.

        BILL sends an invitation email to the provided vendor email address. When the vendor accepts the invitation and
        sets up a BILL account, BILL connects the vendor organization with the vendor record in your BILL organization.

        **Note**:
        * The vendor organization must exist before BILL can send an invitation email.
        * If the vendor does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/vendor/{vendorId}/email"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InviteVendorNotInBillNetworkRequestDto | InviteVendorNotInBillNetworkRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=invite_vendor_not_in_bill_network_error_mapper,
            request_options=request_options,
        )

    def search(
        self,
        name: str,
        *,
        scope: ScopeTypeOrStr | None = None,
        zip_or_postal_code: str | None = None,
        account_number: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NetworkSearchResponseDto, SearchErrorBody]:
        """Search for a customer, vendor, or verified national vendor organization. You can search in the BILL Network
        and verified national vendor (``RPPS``) network.

        When you search in the BILL Network, there are two ``name`` requirements for getting search results.
        * Your search term must have a minimum of three characters.
        * Your search term must be a complete word. You will not get search results when your search term is a partial
            word.

        When you search in the verified national vendor (``RPPS``) network, search results are based on both a complete
        and partial match on ``name`` and ``zipOrPostalCode``. You can further filter your search by the billing
        statement ``accountNumber`` with the vendor. For example, your Verizon internet bill account number.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            name: Value sent with the request.
            scope: Value sent with the request.
            zip_or_postal_code: Value sent with the request.
            account_number: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/network"),
            query_params=[
                param[str]("name", name),
                param[ScopeTypeOrStr | None]("scope", scope),
                param[str | None]("zipOrPostalCode", zip_or_postal_code),
                param[str | None]("accountNumber", account_number),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[NetworkSearchResponseDto],
            error_mapper=search_error_mapper,
            request_options=request_options,
        )


class AsyncNetworkApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def accept_invitation(
        self,
        body: AcceptInvitationRequestDto | AcceptInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AcceptInvitationErrorBody]:
        """Accept a connection request sent by a vendor or customer.

        The organization receiving the connection request must have auto-connections disabled. If auto-connections are
        not disabled, BILL automatically connects the organizations in the BILL Network.

        When the invitation is accepted, BILL connects the two organizations in the BILL Network.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/accept"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AcceptInvitationRequestDto | AcceptInvitationRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=accept_invitation_error_mapper,
            request_options=request_options,
        )

    async def create_customer_invitation(
        self,
        customer_id: str,
        body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateCustomerInvitationErrorBody]:
        """Send a connection request to a customer organization in the BILL Network. BILL automatically connects the
        customer organization with the customer record in your BILL organization.

        If the customer organization has auto-connections disabled, BILL sends an invitation email to the customer email
        address. When the customer accepts the invitation, BILL connects the customer organization with the customer
        record in your BILL organization.

        If the customer does not respond, you can delete the connection request (with ``DELETE
        /v3/network/invitation/customer/{customerId}``) before sending a new connection request.

        **Note**: If the customer does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/customer/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateInvitationRequestDto | CreateInvitationRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=create_customer_invitation_error_mapper,
            request_options=request_options,
        )

    async def create_vendor_invitation(
        self,
        vendor_id: str,
        body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateVendorInvitationErrorBody]:
        """Send a connection request to a vendor organization in the BILL Network. BILL automatically connects the
        vendor organization with the vendor record in your BILL organization.

        If the vendor organization has auto-connections disabled, BILL sends an invitation email to the vendor email
        address. When the vendor accepts the invitation, BILL connects the vendor organization with the vendor record in
        your BILL organization.

        If the vendor does not respond, you can delete the connection request (with ``DELETE
        /v3/network/invitation/vendor/{vendorId}``) before sending a new connection request.

        **Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/vendor/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateInvitationRequestDto | CreateInvitationRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=create_vendor_invitation_error_mapper,
            request_options=request_options,
        )

    async def delete_customer_invitation(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCustomerInvitationErrorBody]:
        """Delete an existing Network connection with a customer organization. Delete customer connection follows a set
        of rules.
        * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled
            before you can disconnect.
        * **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear
            before you can disconnect.

        You can use this endpoint to cancel a pending connection request sent to a customer that has auto-connections
        disabled. You can send a new connection request after an existing connection or connection request is canceled.

        **Note**: If the customer does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/network/invitation/customer/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_empty_response,
            error_mapper=delete_customer_invitation_error_mapper,
            request_options=request_options,
        )

    async def delete_vendor_invitation(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteVendorInvitationErrorBody]:
        """Delete an existing Network connection with a vendor organization. Delete vendor connection follows a set of
        rules.
        * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled
            before you can disconnect.
        * **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear
            before you can disconnect.

        You can use this endpoint to cancel a pending connection request sent to a vendor that has auto-connections
        disabled. You can send a new connection request after an existing connection or connection request is canceled.

        **Note**: If the vendor does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/vendor/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_empty_response,
            error_mapper=delete_vendor_invitation_error_mapper,
            request_options=request_options,
        )

    async def get_customer_invitation(
        self,
        customer_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInvitationResponseDto, GetCustomerInvitationErrorBody]:
        """Get the status of an existing connection request sent with ``POST
        /v3/network/invitation/customer/{customerId}``.

        When you send a connection request to a customer organization that has auto-connections enabled, BILL
        automatically connects you with the organization. If the organization has auto-connections disabled, the
        connection request status changes when the customer accepts the request.

        **Note**: If the customer does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/customer/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[GetInvitationResponseDto],
            error_mapper=get_customer_invitation_error_mapper,
            request_options=request_options,
        )

    async def get_vendor_invitation(
        self,
        vendor_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInvitationResponseDto, GetVendorInvitationErrorBody]:
        """Get the status of an existing connection request sent with ``POST /v3/network/invitation/vendor/{vendorId}``.

        When you send a connection request to a vendor organization that has auto-connections enabled, BILL
        automatically connects you with the organization. If the organization has auto-connections disabled, the
        connection request status changes when the vendor accepts the request.

        **Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/vendor/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[GetInvitationResponseDto],
            error_mapper=get_vendor_invitation_error_mapper,
            request_options=request_options,
        )

    async def invite_vendor_not_in_bill_network(
        self,
        vendor_id: str,
        body: InviteVendorNotInBillNetworkRequestDto | InviteVendorNotInBillNetworkRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, InviteVendorNotInBillNetworkErrorBody]:
        """Send a connection request to a vendor not in the BILL Network.

        BILL sends an invitation email to the provided vendor email address. When the vendor accepts the invitation and
        sets up a BILL account, BILL connects the vendor organization with the vendor record in your BILL organization.

        **Note**:
        * The vendor organization must exist before BILL can send an invitation email.
        * If the vendor does not respond to a connection request for 60 days, the request expires.

        See BILL Network in the Guides section for more information, sample requests, and responses.

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
            url_template=self._server.default("/v3/network/invitation/vendor/{vendorId}/email"),
            path_params=[param[str]("vendorId", vendor_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InviteVendorNotInBillNetworkRequestDto | InviteVendorNotInBillNetworkRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=invite_vendor_not_in_bill_network_error_mapper,
            request_options=request_options,
        )

    async def search(
        self,
        name: str,
        *,
        scope: ScopeTypeOrStr | None = None,
        zip_or_postal_code: str | None = None,
        account_number: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NetworkSearchResponseDto, SearchErrorBody]:
        """Search for a customer, vendor, or verified national vendor organization. You can search in the BILL Network
        and verified national vendor (``RPPS``) network.

        When you search in the BILL Network, there are two ``name`` requirements for getting search results.
        * Your search term must have a minimum of three characters.
        * Your search term must be a complete word. You will not get search results when your search term is a partial
            word.

        When you search in the verified national vendor (``RPPS``) network, search results are based on both a complete
        and partial match on ``name`` and ``zipOrPostalCode``. You can further filter your search by the billing
        statement ``accountNumber`` with the vendor. For example, your Verizon internet bill account number.

        See BILL Network in the Guides section for more information, sample requests, and responses.

        Args:
            name: Value sent with the request.
            scope: Value sent with the request.
            zip_or_postal_code: Value sent with the request.
            account_number: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/network"),
            query_params=[
                param[str]("name", name),
                param[ScopeTypeOrStr | None]("scope", scope),
                param[str | None]("zipOrPostalCode", zip_or_postal_code),
                param[str | None]("accountNumber", account_number),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[NetworkSearchResponseDto],
            error_mapper=search_error_mapper,
            request_options=request_options,
        )
