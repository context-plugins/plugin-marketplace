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
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.allocate_connection_on_interconnect2_error import (
    AllocateConnectionOnInterconnect2ErrorBody,
    allocate_connection_on_interconnect2_error_mapper,
)
from ..errors.allocate_hosted_connection2_error import (
    AllocateHostedConnection2ErrorBody,
    allocate_hosted_connection2_error_mapper,
)
from ..errors.allocate_private_virtual_interface2_error import (
    AllocatePrivateVirtualInterface2ErrorBody,
    allocate_private_virtual_interface2_error_mapper,
)
from ..errors.allocate_public_virtual_interface2_error import (
    AllocatePublicVirtualInterface2ErrorBody,
    allocate_public_virtual_interface2_error_mapper,
)
from ..errors.allocate_transit_virtual_interface2_error import (
    AllocateTransitVirtualInterface2ErrorBody,
    allocate_transit_virtual_interface2_error_mapper,
)
from ..errors.associate_connections_to_resiliency_group_error import (
    AssociateConnectionsToResiliencyGroupErrorBody,
    associate_connections_to_resiliency_group_error_mapper,
)
from ..errors.confirm_connection2_error import ConfirmConnection2ErrorBody, confirm_connection2_error_mapper
from ..errors.confirm_customer_agreement2_error import (
    ConfirmCustomerAgreement2ErrorBody,
    confirm_customer_agreement2_error_mapper,
)
from ..errors.confirm_private_virtual_interface2_error import (
    ConfirmPrivateVirtualInterface2ErrorBody,
    confirm_private_virtual_interface2_error_mapper,
)
from ..errors.confirm_public_virtual_interface2_error import (
    ConfirmPublicVirtualInterface2ErrorBody,
    confirm_public_virtual_interface2_error_mapper,
)
from ..errors.confirm_transit_virtual_interface2_error import (
    ConfirmTransitVirtualInterface2ErrorBody,
    confirm_transit_virtual_interface2_error_mapper,
)
from ..errors.disassociate_connections_from_resiliency_group_error import (
    DisassociateConnectionsFromResiliencyGroupErrorBody,
    disassociate_connections_from_resiliency_group_error_mapper,
)
from ..errors.list_resiliency_group_associations_error import (
    ListResiliencyGroupAssociationsErrorBody,
    list_resiliency_group_associations_error_mapper,
)
from ..errors.list_virtual_interface_routes_error import (
    ListVirtualInterfaceRoutesErrorBody,
    list_virtual_interface_routes_error_mapper,
)
from ..errors.update_connections_billing_mode_error import (
    UpdateConnectionsBillingModeErrorBody,
    update_connections_billing_mode_error_mapper,
)
from ..models.enums.x_amz_target1_aws_direct_connect_operations_api import XAmzTarget1AwsDirectConnectOperationsApiOrStr
from ..models.enums.x_amz_target2_aws_direct_connect_operations_api import XAmzTarget2AwsDirectConnectOperationsApiOrStr
from ..models.enums.x_amz_target3_aws_direct_connect_operations_api import XAmzTarget3AwsDirectConnectOperationsApiOrStr
from ..models.enums.x_amz_target4_aws_direct_connect_operations_api import XAmzTarget4AwsDirectConnectOperationsApiOrStr
from ..models.enums.x_amz_target5_aws_direct_connect_operations_api import XAmzTarget5AwsDirectConnectOperationsApiOrStr
from ..models.enums.x_amz_target6_aws_direct_connect_operations_api import XAmzTarget6AwsDirectConnectOperationsApiOrStr
from ..models.enums.x_amz_target7_aws_direct_connect_operations_api import XAmzTarget7AwsDirectConnectOperationsApiOrStr
from ..models.enums.x_amz_target8_aws_direct_connect_operations_api import XAmzTarget8AwsDirectConnectOperationsApiOrStr
from ..models.enums.x_amz_target9_aws_direct_connect_operations_api import XAmzTarget9AwsDirectConnectOperationsApiOrStr
from ..models.enums.x_amz_target10_aws_direct_connect_operations_api import (
    XAmzTarget10AwsDirectConnectOperationsApiOrStr,
)
from ..models.enums.x_amz_target11_aws_direct_connect_operations_api import (
    XAmzTarget11AwsDirectConnectOperationsApiOrStr,
)
from ..models.enums.x_amz_target12_aws_direct_connect_operations_api import (
    XAmzTarget12AwsDirectConnectOperationsApiOrStr,
)
from ..models.enums.x_amz_target13_aws_direct_connect_operations_api import (
    XAmzTarget13AwsDirectConnectOperationsApiOrStr,
)
from ..models.enums.x_amz_target14_aws_direct_connect_operations_api import (
    XAmzTarget14AwsDirectConnectOperationsApiOrStr,
)
from ..models.enums.x_amz_target_aws_direct_connect_operations_api import XAmzTargetAwsDirectConnectOperationsApiOrStr
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def allocate_connection_on_interconnect2(
        self,
        x_amz_target: XAmzTargetAwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a
        VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.
        Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.allocate_connection_on_interconnect2(x_amz_target, request_options=request_options)
        )

    def allocate_hosted_connection2(
        self,
        x_amz_target: XAmzTarget1AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.
        Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the
        specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the
        specified capacity and the Direct Connect Partner must also police the hosted connection for the specified
        capacity. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.allocate_hosted_connection2(x_amz_target, request_options=request_options)
        )

    def allocate_private_virtual_interface2(
        self,
        x_amz_target: XAmzTarget2AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual
        interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until
        then, the virtual interface is in the Confirming state and is not available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; LimitExceededException;
                TooManyTagsException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.allocate_private_virtual_interface2(x_amz_target, request_options=request_options)
        )

    def allocate_public_virtual_interface2(
        self,
        x_amz_target: XAmzTarget3AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of
        a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web
        Services account. Virtual interfaces created using this function must be confirmed by the owner using
        ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming
        state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon
        address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses;
        you cannot specify custom IPv6 addresses.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; LimitExceededException;
                TooManyTagsException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.allocate_public_virtual_interface2(x_amz_target, request_options=request_options)
        )

    def allocate_transit_virtual_interface2(
        self,
        x_amz_target: XAmzTarget4AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this
        type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection
        provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you
        create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface.
        Until this step has been completed, the transit virtual interface is in the requested state and is not available
        to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; LimitExceededException;
                TooManyTagsException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.allocate_transit_virtual_interface2(x_amz_target, request_options=request_options)
        )

    def associate_connections_to_resiliency_group(
        self,
        x_amz_target: XAmzTarget10AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Associates one or more connections with the specified resiliency group. This operation is atomic: either all
        of the specified connections are associated, or the operation fails and no changes are made.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; LimitExceededException DirectConnectServerException ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.associate_connections_to_resiliency_group(
                x_amz_target, request_options=request_options
            ),
        )

    def confirm_connection2(
        self,
        x_amz_target: XAmzTarget5AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted
        connection is initially in the Ordering state, and remains in this state until the owner confirms creation of
        the hosted connection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.confirm_connection2(x_amz_target, request_options=request_options))

    def confirm_customer_agreement2(
        self,
        x_amz_target: XAmzTarget6AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.confirm_customer_agreement2(x_amz_target, request_options=request_options)
        )

    def confirm_private_virtual_interface2(
        self,
        x_amz_target: XAmzTarget7AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the
        virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual
        private gateway or Direct Connect gateway, and is made available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.confirm_private_virtual_interface2(x_amz_target, request_options=request_options)
        )

    def confirm_public_virtual_interface2(
        self,
        x_amz_target: XAmzTarget8AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the
        virtual interface owner makes this call, the specified virtual interface is created and made available to handle
        traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.confirm_public_virtual_interface2(x_amz_target, request_options=request_options)
        )

    def confirm_transit_virtual_interface2(
        self,
        x_amz_target: XAmzTarget9AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the
        owner of the transit virtual interface makes this call, the specified transit virtual interface is created and
        made available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.confirm_transit_virtual_interface2(x_amz_target, request_options=request_options)
        )

    def disassociate_connections_from_resiliency_group(
        self,
        x_amz_target: XAmzTarget11AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Disassociates one or more connections from the specified resiliency group. This operation is atomic: either
        all of the specified connections are disassociated, or the operation fails and no changes are made.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.disassociate_connections_from_resiliency_group(
                x_amz_target, request_options=request_options
            ),
        )

    def list_resiliency_group_associations(
        self,
        x_amz_target: XAmzTarget12AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the connection associations for the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_resiliency_group_associations(x_amz_target, request_options=request_options)
        )

    def list_virtual_interface_routes(
        self,
        x_amz_target: XAmzTarget13AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the routes for the specified virtual interface. Use the routeDirection filter to control which routes
        are returned: accepted: routes received from the customer network over the virtual interface. advertised: routes
        advertised to the customer network over the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_virtual_interface_routes(x_amz_target, request_options=request_options)
        )

    def update_connections_billing_mode(
        self,
        x_amz_target: XAmzTarget14AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the billing mode for the specified Direct Connect connections. You can update the billing mode for up
        to 200 connections in a single request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_connections_billing_mode(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def allocate_connection_on_interconnect2(
        self,
        x_amz_target: XAmzTargetAwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a
        VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.
        Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.allocate_connection_on_interconnect2(
                x_amz_target, request_options=request_options
            ),
        )

    async def allocate_hosted_connection2(
        self,
        x_amz_target: XAmzTarget1AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.
        Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the
        specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the
        specified capacity and the Direct Connect Partner must also police the hosted connection for the specified
        capacity. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.allocate_hosted_connection2(x_amz_target, request_options=request_options)
        )

    async def allocate_private_virtual_interface2(
        self,
        x_amz_target: XAmzTarget2AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual
        interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until
        then, the virtual interface is in the Confirming state and is not available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; LimitExceededException;
                TooManyTagsException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.allocate_private_virtual_interface2(
                x_amz_target, request_options=request_options
            ),
        )

    async def allocate_public_virtual_interface2(
        self,
        x_amz_target: XAmzTarget3AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of
        a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web
        Services account. Virtual interfaces created using this function must be confirmed by the owner using
        ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming
        state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon
        address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses;
        you cannot specify custom IPv6 addresses.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; LimitExceededException;
                TooManyTagsException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.allocate_public_virtual_interface2(
                x_amz_target, request_options=request_options
            ),
        )

    async def allocate_transit_virtual_interface2(
        self,
        x_amz_target: XAmzTarget4AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this
        type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection
        provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you
        create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface.
        Until this step has been completed, the transit virtual interface is in the requested state and is not available
        to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; LimitExceededException;
                TooManyTagsException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.allocate_transit_virtual_interface2(
                x_amz_target, request_options=request_options
            ),
        )

    async def associate_connections_to_resiliency_group(
        self,
        x_amz_target: XAmzTarget10AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Associates one or more connections with the specified resiliency group. This operation is atomic: either all
        of the specified connections are associated, or the operation fails and no changes are made.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; LimitExceededException DirectConnectServerException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.associate_connections_to_resiliency_group(
                x_amz_target, request_options=request_options
            ),
        )

    async def confirm_connection2(
        self,
        x_amz_target: XAmzTarget5AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted
        connection is initially in the Ordering state, and remains in this state until the owner confirms creation of
        the hosted connection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.confirm_connection2(x_amz_target, request_options=request_options))

    async def confirm_customer_agreement2(
        self,
        x_amz_target: XAmzTarget6AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.confirm_customer_agreement2(x_amz_target, request_options=request_options)
        )

    async def confirm_private_virtual_interface2(
        self,
        x_amz_target: XAmzTarget7AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the
        virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual
        private gateway or Direct Connect gateway, and is made available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.confirm_private_virtual_interface2(
                x_amz_target, request_options=request_options
            ),
        )

    async def confirm_public_virtual_interface2(
        self,
        x_amz_target: XAmzTarget8AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the
        virtual interface owner makes this call, the specified virtual interface is created and made available to handle
        traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.confirm_public_virtual_interface2(
                x_amz_target, request_options=request_options
            ),
        )

    async def confirm_transit_virtual_interface2(
        self,
        x_amz_target: XAmzTarget9AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the
        owner of the transit virtual interface makes this call, the specified transit virtual interface is created and
        made available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.confirm_transit_virtual_interface2(
                x_amz_target, request_options=request_options
            ),
        )

    async def disassociate_connections_from_resiliency_group(
        self,
        x_amz_target: XAmzTarget11AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Disassociates one or more connections from the specified resiliency group. This operation is atomic: either
        all of the specified connections are disassociated, or the operation fails and no changes are made.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.disassociate_connections_from_resiliency_group(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_resiliency_group_associations(
        self,
        x_amz_target: XAmzTarget12AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the connection associations for the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_resiliency_group_associations(
                x_amz_target, request_options=request_options
            ),
        )

    async def list_virtual_interface_routes(
        self,
        x_amz_target: XAmzTarget13AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists the routes for the specified virtual interface. Use the routeDirection filter to control which routes
        are returned: accepted: routes received from the customer network over the virtual interface. advertised: routes
        advertised to the customer network over the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_virtual_interface_routes(x_amz_target, request_options=request_options)
        )

    async def update_connections_billing_mode(
        self,
        x_amz_target: XAmzTarget14AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the billing mode for the specified Direct Connect connections. You can update the billing mode for up
        to 200 connections in a single request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_connections_billing_mode(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def allocate_connection_on_interconnect2(
        self,
        x_amz_target: XAmzTargetAwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocateConnectionOnInterconnect2ErrorBody]:
        """Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a
        VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.
        Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocateConnectionOnInterconnect"),
            headers=[
                param[XAmzTargetAwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_connection_on_interconnect2_error_mapper,
            request_options=request_options,
        )

    def allocate_hosted_connection2(
        self,
        x_amz_target: XAmzTarget1AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocateHostedConnection2ErrorBody]:
        """Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.
        Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the
        specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the
        specified capacity and the Direct Connect Partner must also police the hosted connection for the specified
        capacity. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocateHostedConnection"),
            headers=[
                param[XAmzTarget1AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_hosted_connection2_error_mapper,
            request_options=request_options,
        )

    def allocate_private_virtual_interface2(
        self,
        x_amz_target: XAmzTarget2AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocatePrivateVirtualInterface2ErrorBody]:
        """Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual
        interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until
        then, the virtual interface is in the Confirming state and is not available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocatePrivateVirtualInterface"),
            headers=[
                param[XAmzTarget2AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_private_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    def allocate_public_virtual_interface2(
        self,
        x_amz_target: XAmzTarget3AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocatePublicVirtualInterface2ErrorBody]:
        """Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of
        a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web
        Services account. Virtual interfaces created using this function must be confirmed by the owner using
        ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming
        state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon
        address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses;
        you cannot specify custom IPv6 addresses.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocatePublicVirtualInterface"),
            headers=[
                param[XAmzTarget3AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_public_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    def allocate_transit_virtual_interface2(
        self,
        x_amz_target: XAmzTarget4AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocateTransitVirtualInterface2ErrorBody]:
        """Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this
        type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection
        provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you
        create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface.
        Until this step has been completed, the transit virtual interface is in the requested state and is not available
        to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocateTransitVirtualInterface"),
            headers=[
                param[XAmzTarget4AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_transit_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    def associate_connections_to_resiliency_group(
        self,
        x_amz_target: XAmzTarget10AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssociateConnectionsToResiliencyGroupErrorBody]:
        """Associates one or more connections with the specified resiliency group. This operation is atomic: either all
        of the specified connections are associated, or the operation fails and no changes are made.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateConnectionsToResiliencyGroup"),
            headers=[
                param[XAmzTarget10AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=associate_connections_to_resiliency_group_error_mapper,
            request_options=request_options,
        )

    def confirm_connection2(
        self,
        x_amz_target: XAmzTarget5AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmConnection2ErrorBody]:
        """Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted
        connection is initially in the Ordering state, and remains in this state until the owner confirms creation of
        the hosted connection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmConnection"),
            headers=[
                param[XAmzTarget5AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_connection2_error_mapper,
            request_options=request_options,
        )

    def confirm_customer_agreement2(
        self,
        x_amz_target: XAmzTarget6AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmCustomerAgreement2ErrorBody]:
        """The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmCustomerAgreement"),
            headers=[
                param[XAmzTarget6AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_customer_agreement2_error_mapper,
            request_options=request_options,
        )

    def confirm_private_virtual_interface2(
        self,
        x_amz_target: XAmzTarget7AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmPrivateVirtualInterface2ErrorBody]:
        """Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the
        virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual
        private gateway or Direct Connect gateway, and is made available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmPrivateVirtualInterface"),
            headers=[
                param[XAmzTarget7AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_private_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    def confirm_public_virtual_interface2(
        self,
        x_amz_target: XAmzTarget8AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmPublicVirtualInterface2ErrorBody]:
        """Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the
        virtual interface owner makes this call, the specified virtual interface is created and made available to handle
        traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmPublicVirtualInterface"),
            headers=[
                param[XAmzTarget8AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_public_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    def confirm_transit_virtual_interface2(
        self,
        x_amz_target: XAmzTarget9AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmTransitVirtualInterface2ErrorBody]:
        """Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the
        owner of the transit virtual interface makes this call, the specified transit virtual interface is created and
        made available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmTransitVirtualInterface"),
            headers=[
                param[XAmzTarget9AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_transit_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    def disassociate_connections_from_resiliency_group(
        self,
        x_amz_target: XAmzTarget11AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DisassociateConnectionsFromResiliencyGroupErrorBody]:
        """Disassociates one or more connections from the specified resiliency group. This operation is atomic: either
        all of the specified connections are disassociated, or the operation fails and no changes are made.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateConnectionsFromResiliencyGroup"),
            headers=[
                param[XAmzTarget11AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=disassociate_connections_from_resiliency_group_error_mapper,
            request_options=request_options,
        )

    def list_resiliency_group_associations(
        self,
        x_amz_target: XAmzTarget12AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListResiliencyGroupAssociationsErrorBody]:
        """Lists the connection associations for the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListResiliencyGroupAssociations"),
            headers=[
                param[XAmzTarget12AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_resiliency_group_associations_error_mapper,
            request_options=request_options,
        )

    def list_virtual_interface_routes(
        self,
        x_amz_target: XAmzTarget13AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListVirtualInterfaceRoutesErrorBody]:
        """Lists the routes for the specified virtual interface. Use the routeDirection filter to control which routes
        are returned: accepted: routes received from the customer network over the virtual interface. advertised: routes
        advertised to the customer network over the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVirtualInterfaceRoutes"),
            headers=[
                param[XAmzTarget13AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_virtual_interface_routes_error_mapper,
            request_options=request_options,
        )

    def update_connections_billing_mode(
        self,
        x_amz_target: XAmzTarget14AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateConnectionsBillingModeErrorBody]:
        """Updates the billing mode for the specified Direct Connect connections. You can update the billing mode for up
        to 200 connections in a single request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateConnectionsBillingMode"),
            headers=[
                param[XAmzTarget14AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_connections_billing_mode_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def allocate_connection_on_interconnect2(
        self,
        x_amz_target: XAmzTargetAwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocateConnectionOnInterconnect2ErrorBody]:
        """Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a
        VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.
        Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocateConnectionOnInterconnect"),
            headers=[
                param[XAmzTargetAwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_connection_on_interconnect2_error_mapper,
            request_options=request_options,
        )

    async def allocate_hosted_connection2(
        self,
        x_amz_target: XAmzTarget1AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocateHostedConnection2ErrorBody]:
        """Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.
        Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the
        specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the
        specified capacity and the Direct Connect Partner must also police the hosted connection for the specified
        capacity. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocateHostedConnection"),
            headers=[
                param[XAmzTarget1AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_hosted_connection2_error_mapper,
            request_options=request_options,
        )

    async def allocate_private_virtual_interface2(
        self,
        x_amz_target: XAmzTarget2AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocatePrivateVirtualInterface2ErrorBody]:
        """Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual
        interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until
        then, the virtual interface is in the Confirming state and is not available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocatePrivateVirtualInterface"),
            headers=[
                param[XAmzTarget2AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_private_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    async def allocate_public_virtual_interface2(
        self,
        x_amz_target: XAmzTarget3AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocatePublicVirtualInterface2ErrorBody]:
        """Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of
        a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web
        Services account. Virtual interfaces created using this function must be confirmed by the owner using
        ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming
        state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon
        address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses;
        you cannot specify custom IPv6 addresses.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocatePublicVirtualInterface"),
            headers=[
                param[XAmzTarget3AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_public_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    async def allocate_transit_virtual_interface2(
        self,
        x_amz_target: XAmzTarget4AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AllocateTransitVirtualInterface2ErrorBody]:
        """Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this
        type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection
        provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you
        create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface.
        Until this step has been completed, the transit virtual interface is in the requested state and is not available
        to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AllocateTransitVirtualInterface"),
            headers=[
                param[XAmzTarget4AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_transit_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    async def associate_connections_to_resiliency_group(
        self,
        x_amz_target: XAmzTarget10AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssociateConnectionsToResiliencyGroupErrorBody]:
        """Associates one or more connections with the specified resiliency group. This operation is atomic: either all
        of the specified connections are associated, or the operation fails and no changes are made.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateConnectionsToResiliencyGroup"),
            headers=[
                param[XAmzTarget10AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=associate_connections_to_resiliency_group_error_mapper,
            request_options=request_options,
        )

    async def confirm_connection2(
        self,
        x_amz_target: XAmzTarget5AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmConnection2ErrorBody]:
        """Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted
        connection is initially in the Ordering state, and remains in this state until the owner confirms creation of
        the hosted connection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmConnection"),
            headers=[
                param[XAmzTarget5AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_connection2_error_mapper,
            request_options=request_options,
        )

    async def confirm_customer_agreement2(
        self,
        x_amz_target: XAmzTarget6AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmCustomerAgreement2ErrorBody]:
        """The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmCustomerAgreement"),
            headers=[
                param[XAmzTarget6AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_customer_agreement2_error_mapper,
            request_options=request_options,
        )

    async def confirm_private_virtual_interface2(
        self,
        x_amz_target: XAmzTarget7AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmPrivateVirtualInterface2ErrorBody]:
        """Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the
        virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual
        private gateway or Direct Connect gateway, and is made available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmPrivateVirtualInterface"),
            headers=[
                param[XAmzTarget7AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_private_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    async def confirm_public_virtual_interface2(
        self,
        x_amz_target: XAmzTarget8AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmPublicVirtualInterface2ErrorBody]:
        """Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the
        virtual interface owner makes this call, the specified virtual interface is created and made available to handle
        traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmPublicVirtualInterface"),
            headers=[
                param[XAmzTarget8AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_public_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    async def confirm_transit_virtual_interface2(
        self,
        x_amz_target: XAmzTarget9AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ConfirmTransitVirtualInterface2ErrorBody]:
        """Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the
        owner of the transit virtual interface makes this call, the specified transit virtual interface is created and
        made available to handle traffic.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ConfirmTransitVirtualInterface"),
            headers=[
                param[XAmzTarget9AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_transit_virtual_interface2_error_mapper,
            request_options=request_options,
        )

    async def disassociate_connections_from_resiliency_group(
        self,
        x_amz_target: XAmzTarget11AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DisassociateConnectionsFromResiliencyGroupErrorBody]:
        """Disassociates one or more connections from the specified resiliency group. This operation is atomic: either
        all of the specified connections are disassociated, or the operation fails and no changes are made.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateConnectionsFromResiliencyGroup"),
            headers=[
                param[XAmzTarget11AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=disassociate_connections_from_resiliency_group_error_mapper,
            request_options=request_options,
        )

    async def list_resiliency_group_associations(
        self,
        x_amz_target: XAmzTarget12AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListResiliencyGroupAssociationsErrorBody]:
        """Lists the connection associations for the specified resiliency group.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListResiliencyGroupAssociations"),
            headers=[
                param[XAmzTarget12AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_resiliency_group_associations_error_mapper,
            request_options=request_options,
        )

    async def list_virtual_interface_routes(
        self,
        x_amz_target: XAmzTarget13AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListVirtualInterfaceRoutesErrorBody]:
        """Lists the routes for the specified virtual interface. Use the routeDirection filter to control which routes
        are returned: accepted: routes received from the customer network over the virtual interface. advertised: routes
        advertised to the customer network over the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVirtualInterfaceRoutes"),
            headers=[
                param[XAmzTarget13AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_virtual_interface_routes_error_mapper,
            request_options=request_options,
        )

    async def update_connections_billing_mode(
        self,
        x_amz_target: XAmzTarget14AwsDirectConnectOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateConnectionsBillingModeErrorBody]:
        """Updates the billing mode for the specified Direct Connect connections. You can update the billing mode for up
        to 200 connections in a single request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateConnectionsBillingMode"),
            headers=[
                param[XAmzTarget14AwsDirectConnectOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_connections_billing_mode_error_mapper,
            request_options=request_options,
        )
