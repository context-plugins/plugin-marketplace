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
from ..errors.accept_direct_connect_gateway_association_proposal_error import (
    AcceptDirectConnectGatewayAssociationProposalErrorBody,
    accept_direct_connect_gateway_association_proposal_error_mapper,
)
from ..errors.allocate_connection_on_interconnect_error import (
    AllocateConnectionOnInterconnectErrorBody,
    allocate_connection_on_interconnect_error_mapper,
)
from ..errors.allocate_hosted_connection_error import (
    AllocateHostedConnectionErrorBody,
    allocate_hosted_connection_error_mapper,
)
from ..errors.allocate_private_virtual_interface_error import (
    AllocatePrivateVirtualInterfaceErrorBody,
    allocate_private_virtual_interface_error_mapper,
)
from ..errors.allocate_public_virtual_interface_error import (
    AllocatePublicVirtualInterfaceErrorBody,
    allocate_public_virtual_interface_error_mapper,
)
from ..errors.allocate_transit_virtual_interface_error import (
    AllocateTransitVirtualInterfaceErrorBody,
    allocate_transit_virtual_interface_error_mapper,
)
from ..errors.associate_connection_with_lag_error import (
    AssociateConnectionWithLagErrorBody,
    associate_connection_with_lag_error_mapper,
)
from ..errors.associate_hosted_connection_error import (
    AssociateHostedConnectionErrorBody,
    associate_hosted_connection_error_mapper,
)
from ..errors.associate_mac_sec_key_error import AssociateMacSecKeyErrorBody, associate_mac_sec_key_error_mapper
from ..errors.associate_virtual_interface_error import (
    AssociateVirtualInterfaceErrorBody,
    associate_virtual_interface_error_mapper,
)
from ..errors.confirm_connection_error import ConfirmConnectionErrorBody, confirm_connection_error_mapper
from ..errors.confirm_customer_agreement_error import (
    ConfirmCustomerAgreementErrorBody,
    confirm_customer_agreement_error_mapper,
)
from ..errors.confirm_private_virtual_interface_error import (
    ConfirmPrivateVirtualInterfaceErrorBody,
    confirm_private_virtual_interface_error_mapper,
)
from ..errors.confirm_public_virtual_interface_error import (
    ConfirmPublicVirtualInterfaceErrorBody,
    confirm_public_virtual_interface_error_mapper,
)
from ..errors.confirm_transit_virtual_interface_error import (
    ConfirmTransitVirtualInterfaceErrorBody,
    confirm_transit_virtual_interface_error_mapper,
)
from ..errors.create_bgp_peer_error import CreateBgpPeerErrorBody, create_bgp_peer_error_mapper
from ..errors.create_connection_error import CreateConnectionErrorBody, create_connection_error_mapper
from ..errors.create_direct_connect_gateway_association_error import (
    CreateDirectConnectGatewayAssociationErrorBody,
    create_direct_connect_gateway_association_error_mapper,
)
from ..errors.create_direct_connect_gateway_association_proposal_error import (
    CreateDirectConnectGatewayAssociationProposalErrorBody,
    create_direct_connect_gateway_association_proposal_error_mapper,
)
from ..errors.create_direct_connect_gateway_error import (
    CreateDirectConnectGatewayErrorBody,
    create_direct_connect_gateway_error_mapper,
)
from ..errors.create_interconnect_error import CreateInterconnectErrorBody, create_interconnect_error_mapper
from ..errors.create_lag_error import CreateLagErrorBody, create_lag_error_mapper
from ..errors.create_private_virtual_interface_error import (
    CreatePrivateVirtualInterfaceErrorBody,
    create_private_virtual_interface_error_mapper,
)
from ..errors.create_public_virtual_interface_error import (
    CreatePublicVirtualInterfaceErrorBody,
    create_public_virtual_interface_error_mapper,
)
from ..errors.create_transit_virtual_interface_error import (
    CreateTransitVirtualInterfaceErrorBody,
    create_transit_virtual_interface_error_mapper,
)
from ..errors.delete_bgp_peer_error import DeleteBgpPeerErrorBody, delete_bgp_peer_error_mapper
from ..errors.delete_connection_error import DeleteConnectionErrorBody, delete_connection_error_mapper
from ..errors.delete_direct_connect_gateway_association_error import (
    DeleteDirectConnectGatewayAssociationErrorBody,
    delete_direct_connect_gateway_association_error_mapper,
)
from ..errors.delete_direct_connect_gateway_association_proposal_error import (
    DeleteDirectConnectGatewayAssociationProposalErrorBody,
    delete_direct_connect_gateway_association_proposal_error_mapper,
)
from ..errors.delete_direct_connect_gateway_error import (
    DeleteDirectConnectGatewayErrorBody,
    delete_direct_connect_gateway_error_mapper,
)
from ..errors.delete_interconnect_error import DeleteInterconnectErrorBody, delete_interconnect_error_mapper
from ..errors.delete_lag_error import DeleteLagErrorBody, delete_lag_error_mapper
from ..errors.delete_virtual_interface_error import (
    DeleteVirtualInterfaceErrorBody,
    delete_virtual_interface_error_mapper,
)
from ..errors.describe_connection_loa_error import DescribeConnectionLoaErrorBody, describe_connection_loa_error_mapper
from ..errors.describe_connections_error import DescribeConnectionsErrorBody, describe_connections_error_mapper
from ..errors.describe_connections_on_interconnect_error import (
    DescribeConnectionsOnInterconnectErrorBody,
    describe_connections_on_interconnect_error_mapper,
)
from ..errors.describe_customer_metadata_error import (
    DescribeCustomerMetadataErrorBody,
    describe_customer_metadata_error_mapper,
)
from ..errors.describe_direct_connect_gateway_association_proposals_error import (
    DescribeDirectConnectGatewayAssociationProposalsErrorBody,
    describe_direct_connect_gateway_association_proposals_error_mapper,
)
from ..errors.describe_direct_connect_gateway_associations_error import (
    DescribeDirectConnectGatewayAssociationsErrorBody,
    describe_direct_connect_gateway_associations_error_mapper,
)
from ..errors.describe_direct_connect_gateway_attachments_error import (
    DescribeDirectConnectGatewayAttachmentsErrorBody,
    describe_direct_connect_gateway_attachments_error_mapper,
)
from ..errors.describe_direct_connect_gateways_error import (
    DescribeDirectConnectGatewaysErrorBody,
    describe_direct_connect_gateways_error_mapper,
)
from ..errors.describe_hosted_connections_error import (
    DescribeHostedConnectionsErrorBody,
    describe_hosted_connections_error_mapper,
)
from ..errors.describe_interconnect_loa_error import (
    DescribeInterconnectLoaErrorBody,
    describe_interconnect_loa_error_mapper,
)
from ..errors.describe_interconnects_error import DescribeInterconnectsErrorBody, describe_interconnects_error_mapper
from ..errors.describe_lags_error import DescribeLagsErrorBody, describe_lags_error_mapper
from ..errors.describe_loa_error import DescribeLoaErrorBody, describe_loa_error_mapper
from ..errors.describe_locations_error import DescribeLocationsErrorBody, describe_locations_error_mapper
from ..errors.describe_router_configuration_error import (
    DescribeRouterConfigurationErrorBody,
    describe_router_configuration_error_mapper,
)
from ..errors.describe_tags_error import DescribeTagsErrorBody, describe_tags_error_mapper
from ..errors.describe_virtual_gateways_error import (
    DescribeVirtualGatewaysErrorBody,
    describe_virtual_gateways_error_mapper,
)
from ..errors.describe_virtual_interfaces_error import (
    DescribeVirtualInterfacesErrorBody,
    describe_virtual_interfaces_error_mapper,
)
from ..errors.disassociate_connection_from_lag_error import (
    DisassociateConnectionFromLagErrorBody,
    disassociate_connection_from_lag_error_mapper,
)
from ..errors.disassociate_mac_sec_key_error import (
    DisassociateMacSecKeyErrorBody,
    disassociate_mac_sec_key_error_mapper,
)
from ..errors.list_virtual_interface_test_history_error import (
    ListVirtualInterfaceTestHistoryErrorBody,
    list_virtual_interface_test_history_error_mapper,
)
from ..errors.start_bgp_failover_test_error import StartBgpFailoverTestErrorBody, start_bgp_failover_test_error_mapper
from ..errors.stop_bgp_failover_test_error import StopBgpFailoverTestErrorBody, stop_bgp_failover_test_error_mapper
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..errors.update_connection_error import UpdateConnectionErrorBody, update_connection_error_mapper
from ..errors.update_direct_connect_gateway_association_error import (
    UpdateDirectConnectGatewayAssociationErrorBody,
    update_direct_connect_gateway_association_error_mapper,
)
from ..errors.update_direct_connect_gateway_error import (
    UpdateDirectConnectGatewayErrorBody,
    update_direct_connect_gateway_error_mapper,
)
from ..errors.update_lag_error import UpdateLagErrorBody, update_lag_error_mapper
from ..errors.update_virtual_interface_attributes_error import (
    UpdateVirtualInterfaceAttributesErrorBody,
    update_virtual_interface_attributes_error_mapper,
)
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..models.enums.x_amz_target5 import XAmzTarget5OrStr
from ..models.enums.x_amz_target6 import XAmzTarget6OrStr
from ..models.enums.x_amz_target7 import XAmzTarget7OrStr
from ..models.enums.x_amz_target8 import XAmzTarget8OrStr
from ..models.enums.x_amz_target9 import XAmzTarget9OrStr
from ..models.enums.x_amz_target10 import XAmzTarget10OrStr
from ..models.enums.x_amz_target11 import XAmzTarget11OrStr
from ..models.enums.x_amz_target12 import XAmzTarget12OrStr
from ..models.enums.x_amz_target13 import XAmzTarget13OrStr
from ..models.enums.x_amz_target14 import XAmzTarget14OrStr
from ..models.enums.x_amz_target15 import XAmzTarget15OrStr
from ..models.enums.x_amz_target16 import XAmzTarget16OrStr
from ..models.enums.x_amz_target17 import XAmzTarget17OrStr
from ..models.enums.x_amz_target18 import XAmzTarget18OrStr
from ..models.enums.x_amz_target19 import XAmzTarget19OrStr
from ..models.enums.x_amz_target20 import XAmzTarget20OrStr
from ..models.enums.x_amz_target21 import XAmzTarget21OrStr
from ..models.enums.x_amz_target22 import XAmzTarget22OrStr
from ..models.enums.x_amz_target23 import XAmzTarget23OrStr
from ..models.enums.x_amz_target24 import XAmzTarget24OrStr
from ..models.enums.x_amz_target25 import XAmzTarget25OrStr
from ..models.enums.x_amz_target26 import XAmzTarget26OrStr
from ..models.enums.x_amz_target27 import XAmzTarget27OrStr
from ..models.enums.x_amz_target28 import XAmzTarget28OrStr
from ..models.enums.x_amz_target29 import XAmzTarget29OrStr
from ..models.enums.x_amz_target30 import XAmzTarget30OrStr
from ..models.enums.x_amz_target31 import XAmzTarget31OrStr
from ..models.enums.x_amz_target32 import XAmzTarget32OrStr
from ..models.enums.x_amz_target33 import XAmzTarget33OrStr
from ..models.enums.x_amz_target34 import XAmzTarget34OrStr
from ..models.enums.x_amz_target35 import XAmzTarget35OrStr
from ..models.enums.x_amz_target36 import XAmzTarget36OrStr
from ..models.enums.x_amz_target37 import XAmzTarget37OrStr
from ..models.enums.x_amz_target38 import XAmzTarget38OrStr
from ..models.enums.x_amz_target39 import XAmzTarget39OrStr
from ..models.enums.x_amz_target40 import XAmzTarget40OrStr
from ..models.enums.x_amz_target41 import XAmzTarget41OrStr
from ..models.enums.x_amz_target42 import XAmzTarget42OrStr
from ..models.enums.x_amz_target43 import XAmzTarget43OrStr
from ..models.enums.x_amz_target44 import XAmzTarget44OrStr
from ..models.enums.x_amz_target45 import XAmzTarget45OrStr
from ..models.enums.x_amz_target46 import XAmzTarget46OrStr
from ..models.enums.x_amz_target47 import XAmzTarget47OrStr
from ..models.enums.x_amz_target48 import XAmzTarget48OrStr
from ..models.enums.x_amz_target49 import XAmzTarget49OrStr
from ..models.enums.x_amz_target50 import XAmzTarget50OrStr
from ..models.enums.x_amz_target51 import XAmzTarget51OrStr
from ..models.enums.x_amz_target52 import XAmzTarget52OrStr
from ..models.enums.x_amz_target53 import XAmzTarget53OrStr
from ..models.enums.x_amz_target54 import XAmzTarget54OrStr
from ..models.enums.x_amz_target55 import XAmzTarget55OrStr
from ..models.enums.x_amz_target56 import XAmzTarget56OrStr
from ..models.enums.x_amz_target57 import XAmzTarget57OrStr
from ..models.enums.x_amz_target58 import XAmzTarget58OrStr
from ..models.enums.x_amz_target59 import XAmzTarget59OrStr
from ..models.enums.x_amz_target60 import XAmzTarget60OrStr
from ..models.enums.x_amz_target61 import XAmzTarget61OrStr
from ..models.enums.x_amz_target62 import XAmzTarget62OrStr
from ..server.server import Server


class AwsDirectConnect:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsDirectConnectWithRawResponse(client, server, auth)

    def accept_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect
        gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.accept_direct_connect_gateway_association_proposal(
                x_amz_target, request_options=request_options
            ),
        )

    def allocate_connection_on_interconnect(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
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
            self._with_raw_response.allocate_connection_on_interconnect(x_amz_target, request_options=request_options)
        )

    def allocate_hosted_connection(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.allocate_hosted_connection(x_amz_target, request_options=request_options))

    def allocate_private_virtual_interface(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
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
            self._with_raw_response.allocate_private_virtual_interface(x_amz_target, request_options=request_options)
        )

    def allocate_public_virtual_interface(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
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
            self._with_raw_response.allocate_public_virtual_interface(x_amz_target, request_options=request_options)
        )

    def allocate_transit_virtual_interface(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
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
            self._with_raw_response.allocate_transit_virtual_interface(x_amz_target, request_options=request_options)
        )

    def associate_connection_with_lag(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and
        re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must
        be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the
        LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing
        the connection would cause the original LAG to fall below its setting for minimum number of operational
        connections, the request fails. Any virtual interfaces that are directly associated with the connection are
        automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the
        virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are
        automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG,
        the hosted connections remain associated with the original LAG.

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
            self._with_raw_response.associate_connection_with_lag(x_amz_target, request_options=request_options)
        )

    def associate_hosted_connection(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or
        interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number
        or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to
        Amazon Web Services as it is being migrated. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.associate_hosted_connection(x_amz_target, request_options=request_options)
        )

    def associate_mac_sec_key(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a
        Direct Connect connection. You must supply either the secretARN, or the CKN/CAK (ckn and cak) pair in the
        request. For information about MAC Security (MACsec) key considerations, see MACsec pre-shared CKN/CAK key
        considerations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.associate_mac_sec_key(x_amz_target, request_options=request_options))

    def associate_virtual_interface(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to
        Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target
        connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP
        address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a
        LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To
        reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface
        itself or the connection to which the virtual interface is currently associated. Additionally, the requester
        must own the connection or LAG for the association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.associate_virtual_interface(x_amz_target, request_options=request_options)
        )

    def confirm_connection(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.confirm_connection(x_amz_target, request_options=request_options))

    def confirm_customer_agreement(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self._with_raw_response.confirm_customer_agreement(x_amz_target, request_options=request_options))

    def confirm_private_virtual_interface(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
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
            self._with_raw_response.confirm_private_virtual_interface(x_amz_target, request_options=request_options)
        )

    def confirm_public_virtual_interface(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
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
            self._with_raw_response.confirm_public_virtual_interface(x_amz_target, request_options=request_options)
        )

    def confirm_transit_virtual_interface(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
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
            self._with_raw_response.confirm_transit_virtual_interface(x_amz_target, request_options=request_options)
        )

    def create_bgp_peer(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a BGP peer on the specified virtual interface. You must create a BGP peer for the corresponding
        address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.
        If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the
        same address family as an existing BGP peer on the virtual interface. When creating a IPv6 BGP peer, omit the
        Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6
        addresses; you cannot specify custom IPv6 addresses. If you let Amazon Web Services auto-assign IPv4 addresses,
        a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you
        intend to use the customer router peer IP address as the source and destination for traffic. Instead you should
        use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see
        Address Allocation for Private Internets. For a public virtual interface, the Autonomous System Number (ASN)
        must be private or already on the allow list for the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_bgp_peer(x_amz_target, request_options=request_options))

    def create_connection(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a connection between a customer network and a specific Direct Connect location. A connection links
        your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the
        cable is connected to your router, the other to an Direct Connect router. To find the locations for your Region,
        use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by
        specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect
        endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no
        connection is created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_connection(x_amz_target, request_options=request_options))

    def create_direct_connect_gateway(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of
        virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon
        Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected
        through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to
        a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic
        between them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_direct_connect_gateway(x_amz_target, request_options=request_options)
        )

    def create_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private
        gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_direct_connect_gateway_association(
                x_amz_target, request_options=request_options
            ),
        )

    def create_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified
        Direct Connect gateway. You can associate a Direct Connect gateway and virtual private gateway or transit
        gateway that is owned by any Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_direct_connect_gateway_association_proposal(
                x_amz_target, request_options=request_options
            ),
        )

    def create_interconnect(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.
        An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use
        an interconnect to provide Direct Connect hosted connections to customers through their own network services.
        Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a
        standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct
        Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a
        LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint
        that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no
        interconnect is created. For each end customer, the Direct Connect Partner provisions a connection on their
        interconnect by calling AllocateHostedConnection. The end customer can then connect to Amazon Web Services
        resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Co

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_interconnect(x_amz_target, request_options=request_options))

    def create_lag(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections
        between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the
        Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a
        single interface. All connections in a LAG must use the same bandwidth (either 1Gbps, 10Gbps, 100Gbps, or
        400Gbps) and must terminate at the same Direct Connect endpoint. You can have up to 10 dedicated connections per
        location. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate
        on a single endpoint, no LAG is created.. You can specify an existing physical dedicated connection or
        interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts
        the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be
        created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces
        associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_lag(x_amz_target, request_options=request_options))

    def create_private_virtual_interface(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic.
        A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway
        (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for
        connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private
        virtual interface to a VGW only provides access to a single VPC within the same Region. Setting the MTU of a
        virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't
        updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual
        interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo
        frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call
        DescribeVirtualInterfaces.

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
            self._with_raw_response.create_private_virtual_interface(x_amz_target, request_options=request_options)
        )

    def create_public_virtual_interface(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A
        public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.
        When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address
        fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.

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
            self._with_raw_response.create_public_virtual_interface(x_amz_target, request_options=request_options)
        )

    def create_transit_virtual_interface(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit
        gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple
        VPCs attached to a transit gateway to a Direct Connect gateway. If you associate your transit gateway with one
        or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct
        Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit
        gateway and Direct Connect gateway, the association request fails. A jumbo MTU value must be either 1500 or
        8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause
        an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the
        connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30
        seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your
        virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

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
            self._with_raw_response.create_transit_virtual_interface(x_amz_target, request_options=request_options)
        )

    def delete_bgp_peer(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified BGP peer on the specified virtual interface with the specified customer address and
        ASN. You cannot delete the last BGP peer from a virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_bgp_peer(x_amz_target, request_options=request_options))

    def delete_connection(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified connection. Deleting a connection only stops the Direct Connect port hour and data
        transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you
        must cancel your service with them separately.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_connection(x_amz_target, request_options=request_options))

    def delete_direct_connect_gateway(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached
        to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect
        gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_direct_connect_gateway(x_amz_target, request_options=request_options)
        )

    def delete_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the association between the specified Direct Connect gateway and virtual private gateway. We
        recommend that you specify the associationID to delete the association. Alternatively, if you own virtual
        gateway and a Direct Connect gateway association, you can specify the virtualGatewayId and
        directConnectGatewayId to delete an association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_direct_connect_gateway_association(
                x_amz_target, request_options=request_options
            ),
        )

    def delete_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the association proposal request between the specified Direct Connect gateway and virtual private
        gateway or transit gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_direct_connect_gateway_association_proposal(
                x_amz_target, request_options=request_options
            ),
        )

    def delete_interconnect(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified interconnect. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_interconnect(x_amz_target, request_options=request_options))

    def delete_lag(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual
        interfaces or hosted connections.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_lag(x_amz_target, request_options=request_options))

    def delete_virtual_interface(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_virtual_interface(x_amz_target, request_options=request_options))

    def describe_connection_loa(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for a connection. The Letter of Authorization -
        Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when
        establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see
        Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_connection_loa(x_amz_target, request_options=request_options))

    def describe_connections(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Displays the specified connection or all connections in this Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_connections(x_amz_target, request_options=request_options))

    def describe_connections_on_interconnect(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the
        specified interconnect. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_connections_on_interconnect(x_amz_target, request_options=request_options)
        )

    def describe_customer_metadata(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Get and view a list of customer agreements, along with their signed status and whether the customer is an
        NNIPartner, NNIPartnerV2, or a nonPartner.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_customer_metadata(x_amz_target, request_options=request_options))

    def describe_direct_connect_gateway_association_proposals(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Describes one or more association proposals for connection between a virtual private gateway or transit
        gateway and a Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_direct_connect_gateway_association_proposals(
                x_amz_target, request_options=request_options
            ),
        )

    def describe_direct_connect_gateway_associations(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the associations between your Direct Connect gateways and virtual private gateways and transit
        gateways. You must specify one of the following: A Direct Connect gateway The response contains all virtual
        private gateways and transit gateways associated with the Direct Connect gateway. A virtual private gateway The
        response contains the Direct Connect gateway. A transit gateway The response contains the Direct Connect
        gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between
        the Direct Connect gateway and virtual private gateway. A Direct Connect gateway and a transit gateway The
        response contains the association between the Direct Connect gateway and transit gateway. A Direct Connect
        gateway and a virtual private gateway The response contains the association between the Direct Connect gateway
        and virtual private gateway. A Direct Connect gateway association to a Cloud WAN core network The response
        contains the Cloud WAN core network ID that the Direct Connect gateway is associated to.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_direct_connect_gateway_associations(
                x_amz_target, request_options=request_options
            ),
        )

    def describe_direct_connect_gateway_attachments(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct
        Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
        all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response
        contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response
        contains the attachment between the Direct Connect gateway and the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_direct_connect_gateway_attachments(
                x_amz_target, request_options=request_options
            ),
        )

    def describe_direct_connect_gateways(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect
        gateways are not returned.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_direct_connect_gateways(x_amz_target, request_options=request_options)
        )

    def describe_hosted_connections(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation
        group (LAG). Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_hosted_connections(x_amz_target, request_options=request_options)
        )

    def describe_interconnect_loa(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for the specified interconnect. The Letter of
        Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross
        connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects
        at Direct Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_interconnect_loa(x_amz_target, request_options=request_options))

    def describe_interconnects(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_interconnects(x_amz_target, request_options=request_options))

    def describe_lags(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Describes all your link aggregation groups (LAG) or the specified LAG.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_lags(x_amz_target, request_options=request_options))

    def describe_loa(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization
        - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to
        Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct
        Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_loa(x_amz_target, request_options=request_options))

    def describe_locations(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that
        can be selected when calling CreateConnection or CreateInterconnect.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_locations(x_amz_target, request_options=request_options))

    def describe_router_configuration(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Details about the router.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_router_configuration(x_amz_target, request_options=request_options)
        )

    def describe_tags(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Describes the tags associated with the specified Direct Connect resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_tags(x_amz_target, request_options=request_options))

    def describe_virtual_gateways(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deprecated. Use DescribeVpnGateways instead. See DescribeVPNGateways in the Amazon Elastic Compute Cloud API
        Reference. Lists the virtual private gateways owned by the Amazon Web Services account. You can create one or
        more Direct Connect private virtual interfaces linked to a virtual private gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_virtual_gateways(x_amz_target, request_options=request_options))

    def describe_virtual_interfaces(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15
        minutes before you make the request are also returned. If you specify a connection ID, only the virtual
        interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a
        single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the Direct
        Connect location and the customer network. If you're using an asn, the response includes the ASN value in both
        the asn and asnLong fields. If you're using asnLong, the response returns a value of 0 (zero) for the asn
        attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_virtual_interfaces(x_amz_target, request_options=request_options)
        )

    def disassociate_connection_from_lag(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and
        re-established as a standalone connection (the connection is not deleted; to delete the connection, use the
        DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain
        associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically
        converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for
        minimum number of operational connections, the request fails, except when it's the last member of the LAG. If
        all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.disassociate_connection_from_lag(x_amz_target, request_options=request_options)
        )

    def disassociate_mac_sec_key(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.disassociate_mac_sec_key(x_amz_target, request_options=request_options))

    def list_virtual_interface_test_history(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the virtual interface failover test history.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_virtual_interface_test_history(x_amz_target, request_options=request_options)
        )

    def start_bgp_failover_test(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts the virtual interface failover test that verifies your configuration meets your resiliency
        requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that
        there are no outages. You can run the test on public, private, transit, and hosted virtual interfaces. You can
        use ListVirtualInterfaceTestHistory to view the virtual interface test history. If you need to stop the test
        before the test interval completes, use StopBgpFailoverTest.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_bgp_failover_test(x_amz_target, request_options=request_options))

    def stop_bgp_failover_test(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Stops the virtual interface failover test.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.stop_bgp_failover_test(x_amz_target, request_options=request_options))

    def tag_resource(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50
        tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with
        the resource, this action updates its value.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    def untag_resource(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Removes one or more tags from the specified Direct Connect resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    def update_connection(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the Direct Connect connection configuration. You can update the following parameters for a
        connection: The connection name The connection's MAC Security (MACsec) encryption mode.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_connection(x_amz_target, request_options=request_options))

    def update_direct_connect_gateway(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the name of a current Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_direct_connect_gateway(x_amz_target, request_options=request_options)
        )

    def update_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the specified attributes of the Direct Connect gateway association. Add or remove prefixes from the
        association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_direct_connect_gateway_association(
                x_amz_target, request_options=request_options
            ),
        )

    def update_lag(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the attributes of the specified link aggregation group (LAG). You can update the following LAG
        attributes: The name of the LAG. The value for the minimum number of connections that must be operational for
        the LAG itself to be operational. The LAG's MACsec encryption mode. Amazon Web Services assigns this value to
        each connection which is part of the LAG. The tags If you adjust the threshold value for the minimum number of
        operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become
        non-operational.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_lag(x_amz_target, request_options=request_options))

    def update_virtual_interface_attributes(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual
        interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated
        to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces
        associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames,
        call DescribeConnections. To check whether your virtual interface supports jumbo frames, call
        DescribeVirtualInterfaces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_virtual_interface_attributes(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AwsDirectConnectWithRawResponse:
        return self._with_raw_response


class AsyncAwsDirectConnect:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsDirectConnectWithRawResponse(client, server, auth)

    async def accept_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect
        gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.accept_direct_connect_gateway_association_proposal(
                x_amz_target, request_options=request_options
            ),
        )

    async def allocate_connection_on_interconnect(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.allocate_connection_on_interconnect(
                x_amz_target, request_options=request_options
            ),
        )

    async def allocate_hosted_connection(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.allocate_hosted_connection(x_amz_target, request_options=request_options)
        )

    async def allocate_private_virtual_interface(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.allocate_private_virtual_interface(
                x_amz_target, request_options=request_options
            ),
        )

    async def allocate_public_virtual_interface(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.allocate_public_virtual_interface(
                x_amz_target, request_options=request_options
            ),
        )

    async def allocate_transit_virtual_interface(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.allocate_transit_virtual_interface(
                x_amz_target, request_options=request_options
            ),
        )

    async def associate_connection_with_lag(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and
        re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must
        be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the
        LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing
        the connection would cause the original LAG to fall below its setting for minimum number of operational
        connections, the request fails. Any virtual interfaces that are directly associated with the connection are
        automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the
        virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are
        automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG,
        the hosted connections remain associated with the original LAG.

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
            await self._with_raw_response.associate_connection_with_lag(x_amz_target, request_options=request_options)
        )

    async def associate_hosted_connection(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or
        interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number
        or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to
        Amazon Web Services as it is being migrated. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.associate_hosted_connection(x_amz_target, request_options=request_options)
        )

    async def associate_mac_sec_key(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a
        Direct Connect connection. You must supply either the secretARN, or the CKN/CAK (ckn and cak) pair in the
        request. For information about MAC Security (MACsec) key considerations, see MACsec pre-shared CKN/CAK key
        considerations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.associate_mac_sec_key(x_amz_target, request_options=request_options)
        )

    async def associate_virtual_interface(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to
        Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target
        connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP
        address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a
        LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To
        reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface
        itself or the connection to which the virtual interface is currently associated. Additionally, the requester
        must own the connection or LAG for the association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.associate_virtual_interface(x_amz_target, request_options=request_options)
        )

    async def confirm_connection(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
        return unwrap(await self._with_raw_response.confirm_connection(x_amz_target, request_options=request_options))

    async def confirm_customer_agreement(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.confirm_customer_agreement(x_amz_target, request_options=request_options)
        )

    async def confirm_private_virtual_interface(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.confirm_private_virtual_interface(
                x_amz_target, request_options=request_options
            ),
        )

    async def confirm_public_virtual_interface(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.confirm_public_virtual_interface(
                x_amz_target, request_options=request_options
            ),
        )

    async def confirm_transit_virtual_interface(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.confirm_transit_virtual_interface(
                x_amz_target, request_options=request_options
            ),
        )

    async def create_bgp_peer(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a BGP peer on the specified virtual interface. You must create a BGP peer for the corresponding
        address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.
        If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the
        same address family as an existing BGP peer on the virtual interface. When creating a IPv6 BGP peer, omit the
        Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6
        addresses; you cannot specify custom IPv6 addresses. If you let Amazon Web Services auto-assign IPv4 addresses,
        a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you
        intend to use the customer router peer IP address as the source and destination for traffic. Instead you should
        use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see
        Address Allocation for Private Internets. For a public virtual interface, the Autonomous System Number (ASN)
        must be private or already on the allow list for the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_bgp_peer(x_amz_target, request_options=request_options))

    async def create_connection(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a connection between a customer network and a specific Direct Connect location. A connection links
        your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the
        cable is connected to your router, the other to an Direct Connect router. To find the locations for your Region,
        use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by
        specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect
        endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no
        connection is created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_connection(x_amz_target, request_options=request_options))

    async def create_direct_connect_gateway(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of
        virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon
        Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected
        through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to
        a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic
        between them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_direct_connect_gateway(x_amz_target, request_options=request_options)
        )

    async def create_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private
        gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_direct_connect_gateway_association(
                x_amz_target, request_options=request_options
            ),
        )

    async def create_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified
        Direct Connect gateway. You can associate a Direct Connect gateway and virtual private gateway or transit
        gateway that is owned by any Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_direct_connect_gateway_association_proposal(
                x_amz_target, request_options=request_options
            ),
        )

    async def create_interconnect(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.
        An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use
        an interconnect to provide Direct Connect hosted connections to customers through their own network services.
        Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a
        standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct
        Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a
        LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint
        that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no
        interconnect is created. For each end customer, the Direct Connect Partner provisions a connection on their
        interconnect by calling AllocateHostedConnection. The end customer can then connect to Amazon Web Services
        resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Co

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_interconnect(x_amz_target, request_options=request_options))

    async def create_lag(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections
        between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the
        Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a
        single interface. All connections in a LAG must use the same bandwidth (either 1Gbps, 10Gbps, 100Gbps, or
        400Gbps) and must terminate at the same Direct Connect endpoint. You can have up to 10 dedicated connections per
        location. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate
        on a single endpoint, no LAG is created.. You can specify an existing physical dedicated connection or
        interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts
        the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be
        created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces
        associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_lag(x_amz_target, request_options=request_options))

    async def create_private_virtual_interface(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic.
        A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway
        (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for
        connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private
        virtual interface to a VGW only provides access to a single VPC within the same Region. Setting the MTU of a
        virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't
        updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual
        interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo
        frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call
        DescribeVirtualInterfaces.

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
            await self._with_raw_response.create_private_virtual_interface(
                x_amz_target, request_options=request_options
            ),
        )

    async def create_public_virtual_interface(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A
        public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.
        When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address
        fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.

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
            await self._with_raw_response.create_public_virtual_interface(x_amz_target, request_options=request_options)
        )

    async def create_transit_virtual_interface(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit
        gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple
        VPCs attached to a transit gateway to a Direct Connect gateway. If you associate your transit gateway with one
        or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct
        Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit
        gateway and Direct Connect gateway, the association request fails. A jumbo MTU value must be either 1500 or
        8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause
        an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the
        connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30
        seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your
        virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

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
            await self._with_raw_response.create_transit_virtual_interface(
                x_amz_target, request_options=request_options
            ),
        )

    async def delete_bgp_peer(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified BGP peer on the specified virtual interface with the specified customer address and
        ASN. You cannot delete the last BGP peer from a virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_bgp_peer(x_amz_target, request_options=request_options))

    async def delete_connection(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified connection. Deleting a connection only stops the Direct Connect port hour and data
        transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you
        must cancel your service with them separately.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_connection(x_amz_target, request_options=request_options))

    async def delete_direct_connect_gateway(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached
        to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect
        gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_direct_connect_gateway(x_amz_target, request_options=request_options)
        )

    async def delete_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the association between the specified Direct Connect gateway and virtual private gateway. We
        recommend that you specify the associationID to delete the association. Alternatively, if you own virtual
        gateway and a Direct Connect gateway association, you can specify the virtualGatewayId and
        directConnectGatewayId to delete an association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_direct_connect_gateway_association(
                x_amz_target, request_options=request_options
            ),
        )

    async def delete_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the association proposal request between the specified Direct Connect gateway and virtual private
        gateway or transit gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_direct_connect_gateway_association_proposal(
                x_amz_target, request_options=request_options
            ),
        )

    async def delete_interconnect(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified interconnect. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_interconnect(x_amz_target, request_options=request_options))

    async def delete_lag(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual
        interfaces or hosted connections.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_lag(x_amz_target, request_options=request_options))

    async def delete_virtual_interface(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_virtual_interface(x_amz_target, request_options=request_options)
        )

    async def describe_connection_loa(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for a connection. The Letter of Authorization -
        Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when
        establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see
        Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_connection_loa(x_amz_target, request_options=request_options)
        )

    async def describe_connections(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Displays the specified connection or all connections in this Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_connections(x_amz_target, request_options=request_options))

    async def describe_connections_on_interconnect(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the
        specified interconnect. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_connections_on_interconnect(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_customer_metadata(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Get and view a list of customer agreements, along with their signed status and whether the customer is an
        NNIPartner, NNIPartnerV2, or a nonPartner.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_customer_metadata(x_amz_target, request_options=request_options)
        )

    async def describe_direct_connect_gateway_association_proposals(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Describes one or more association proposals for connection between a virtual private gateway or transit
        gateway and a Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_direct_connect_gateway_association_proposals(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_direct_connect_gateway_associations(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the associations between your Direct Connect gateways and virtual private gateways and transit
        gateways. You must specify one of the following: A Direct Connect gateway The response contains all virtual
        private gateways and transit gateways associated with the Direct Connect gateway. A virtual private gateway The
        response contains the Direct Connect gateway. A transit gateway The response contains the Direct Connect
        gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between
        the Direct Connect gateway and virtual private gateway. A Direct Connect gateway and a transit gateway The
        response contains the association between the Direct Connect gateway and transit gateway. A Direct Connect
        gateway and a virtual private gateway The response contains the association between the Direct Connect gateway
        and virtual private gateway. A Direct Connect gateway association to a Cloud WAN core network The response
        contains the Cloud WAN core network ID that the Direct Connect gateway is associated to.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_direct_connect_gateway_associations(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_direct_connect_gateway_attachments(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct
        Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
        all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response
        contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response
        contains the attachment between the Direct Connect gateway and the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_direct_connect_gateway_attachments(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_direct_connect_gateways(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect
        gateways are not returned.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_direct_connect_gateways(
                x_amz_target, request_options=request_options
            ),
        )

    async def describe_hosted_connections(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation
        group (LAG). Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_hosted_connections(x_amz_target, request_options=request_options)
        )

    async def describe_interconnect_loa(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for the specified interconnect. The Letter of
        Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross
        connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects
        at Direct Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_interconnect_loa(x_amz_target, request_options=request_options)
        )

    async def describe_interconnects(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_interconnects(x_amz_target, request_options=request_options)
        )

    async def describe_lags(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Describes all your link aggregation groups (LAG) or the specified LAG.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_lags(x_amz_target, request_options=request_options))

    async def describe_loa(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization
        - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to
        Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct
        Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_loa(x_amz_target, request_options=request_options))

    async def describe_locations(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that
        can be selected when calling CreateConnection or CreateInterconnect.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_locations(x_amz_target, request_options=request_options))

    async def describe_router_configuration(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Details about the router.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_router_configuration(x_amz_target, request_options=request_options)
        )

    async def describe_tags(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Describes the tags associated with the specified Direct Connect resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_tags(x_amz_target, request_options=request_options))

    async def describe_virtual_gateways(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deprecated. Use DescribeVpnGateways instead. See DescribeVPNGateways in the Amazon Elastic Compute Cloud API
        Reference. Lists the virtual private gateways owned by the Amazon Web Services account. You can create one or
        more Direct Connect private virtual interfaces linked to a virtual private gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_virtual_gateways(x_amz_target, request_options=request_options)
        )

    async def describe_virtual_interfaces(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15
        minutes before you make the request are also returned. If you specify a connection ID, only the virtual
        interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a
        single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the Direct
        Connect location and the customer network. If you're using an asn, the response includes the ASN value in both
        the asn and asnLong fields. If you're using asnLong, the response returns a value of 0 (zero) for the asn
        attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_virtual_interfaces(x_amz_target, request_options=request_options)
        )

    async def disassociate_connection_from_lag(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and
        re-established as a standalone connection (the connection is not deleted; to delete the connection, use the
        DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain
        associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically
        converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for
        minimum number of operational connections, the request fails, except when it's the last member of the LAG. If
        all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.disassociate_connection_from_lag(
                x_amz_target, request_options=request_options
            ),
        )

    async def disassociate_mac_sec_key(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.disassociate_mac_sec_key(x_amz_target, request_options=request_options)
        )

    async def list_virtual_interface_test_history(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the virtual interface failover test history.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_virtual_interface_test_history(
                x_amz_target, request_options=request_options
            ),
        )

    async def start_bgp_failover_test(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts the virtual interface failover test that verifies your configuration meets your resiliency
        requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that
        there are no outages. You can run the test on public, private, transit, and hosted virtual interfaces. You can
        use ListVirtualInterfaceTestHistory to view the virtual interface test history. If you need to stop the test
        before the test interval completes, use StopBgpFailoverTest.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_bgp_failover_test(x_amz_target, request_options=request_options)
        )

    async def stop_bgp_failover_test(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Stops the virtual interface failover test.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.stop_bgp_failover_test(x_amz_target, request_options=request_options)
        )

    async def tag_resource(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50
        tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with
        the resource, this action updates its value.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException; DuplicateTagKeysException; TooManyTagsException
                DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    async def untag_resource(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes one or more tags from the specified Direct Connect resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    async def update_connection(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the Direct Connect connection configuration. You can update the following parameters for a
        connection: The connection name The connection's MAC Security (MACsec) encryption mode.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_connection(x_amz_target, request_options=request_options))

    async def update_direct_connect_gateway(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the name of a current Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_direct_connect_gateway(x_amz_target, request_options=request_options)
        )

    async def update_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the specified attributes of the Direct Connect gateway association. Add or remove prefixes from the
        association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_direct_connect_gateway_association(
                x_amz_target, request_options=request_options
            ),
        )

    async def update_lag(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the attributes of the specified link aggregation group (LAG). You can update the following LAG
        attributes: The name of the LAG. The value for the minimum number of connections that must be operational for
        the LAG itself to be operational. The LAG's MACsec encryption mode. Amazon Web Services assigns this value to
        each connection which is part of the LAG. The tags If you adjust the threshold value for the minimum number of
        operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become
        non-operational.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_lag(x_amz_target, request_options=request_options))

    async def update_virtual_interface_attributes(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual
        interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated
        to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces
        associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames,
        call DescribeConnections. To check whether your virtual interface supports jumbo frames, call
        DescribeVirtualInterfaces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: DirectConnectClientException DirectConnectServerException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_virtual_interface_attributes(
                x_amz_target, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAwsDirectConnectWithRawResponse:
        return self._with_raw_response


class AwsDirectConnectWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def accept_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AcceptDirectConnectGatewayAssociationProposalErrorBody]:
        """Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect
        gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AcceptDirectConnectGatewayAssociationProposal"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=accept_direct_connect_gateway_association_proposal_error_mapper,
            request_options=request_options,
        )

    def allocate_connection_on_interconnect(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocateConnectionOnInterconnectErrorBody]:
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
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_connection_on_interconnect_error_mapper,
            request_options=request_options,
        )

    def allocate_hosted_connection(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocateHostedConnectionErrorBody]:
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
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_hosted_connection_error_mapper,
            request_options=request_options,
        )

    def allocate_private_virtual_interface(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocatePrivateVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_private_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def allocate_public_virtual_interface(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocatePublicVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_public_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def allocate_transit_virtual_interface(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocateTransitVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=allocate_transit_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def associate_connection_with_lag(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateConnectionWithLagErrorBody]:
        """Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and
        re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must
        be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the
        LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing
        the connection would cause the original LAG to fall below its setting for minimum number of operational
        connections, the request fails. Any virtual interfaces that are directly associated with the connection are
        automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the
        virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are
        automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG,
        the hosted connections remain associated with the original LAG.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateConnectionWithLag"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=associate_connection_with_lag_error_mapper,
            request_options=request_options,
        )

    def associate_hosted_connection(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateHostedConnectionErrorBody]:
        """Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or
        interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number
        or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to
        Amazon Web Services as it is being migrated. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateHostedConnection"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=associate_hosted_connection_error_mapper,
            request_options=request_options,
        )

    def associate_mac_sec_key(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateMacSecKeyErrorBody]:
        """Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a
        Direct Connect connection. You must supply either the secretARN, or the CKN/CAK (ckn and cak) pair in the
        request. For information about MAC Security (MACsec) key considerations, see MACsec pre-shared CKN/CAK key
        considerations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateMacSecKey"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=associate_mac_sec_key_error_mapper,
            request_options=request_options,
        )

    def associate_virtual_interface(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateVirtualInterfaceErrorBody]:
        """Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to
        Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target
        connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP
        address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a
        LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To
        reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface
        itself or the connection to which the virtual interface is currently associated. Additionally, the requester
        must own the connection or LAG for the association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateVirtualInterface"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=associate_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def confirm_connection(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmConnectionErrorBody]:
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
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_connection_error_mapper,
            request_options=request_options,
        )

    def confirm_customer_agreement(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmCustomerAgreementErrorBody]:
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
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_customer_agreement_error_mapper,
            request_options=request_options,
        )

    def confirm_private_virtual_interface(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmPrivateVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_private_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def confirm_public_virtual_interface(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmPublicVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_public_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def confirm_transit_virtual_interface(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmTransitVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=confirm_transit_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def create_bgp_peer(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateBgpPeerErrorBody]:
        """Creates a BGP peer on the specified virtual interface. You must create a BGP peer for the corresponding
        address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.
        If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the
        same address family as an existing BGP peer on the virtual interface. When creating a IPv6 BGP peer, omit the
        Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6
        addresses; you cannot specify custom IPv6 addresses. If you let Amazon Web Services auto-assign IPv4 addresses,
        a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you
        intend to use the customer router peer IP address as the source and destination for traffic. Instead you should
        use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see
        Address Allocation for Private Internets. For a public virtual interface, the Autonomous System Number (ASN)
        must be private or already on the allow list for the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateBGPPeer"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_bgp_peer_error_mapper,
            request_options=request_options,
        )

    def create_connection(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateConnectionErrorBody]:
        """Creates a connection between a customer network and a specific Direct Connect location. A connection links
        your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the
        cable is connected to your router, the other to an Direct Connect router. To find the locations for your Region,
        use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by
        specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect
        endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no
        connection is created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateConnection"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_connection_error_mapper,
            request_options=request_options,
        )

    def create_direct_connect_gateway(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDirectConnectGatewayErrorBody]:
        """Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of
        virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon
        Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected
        through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to
        a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic
        between them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDirectConnectGateway"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_direct_connect_gateway_error_mapper,
            request_options=request_options,
        )

    def create_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDirectConnectGatewayAssociationErrorBody]:
        """Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private
        gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDirectConnectGatewayAssociation"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_direct_connect_gateway_association_error_mapper,
            request_options=request_options,
        )

    def create_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDirectConnectGatewayAssociationProposalErrorBody]:
        """Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified
        Direct Connect gateway. You can associate a Direct Connect gateway and virtual private gateway or transit
        gateway that is owned by any Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDirectConnectGatewayAssociationProposal"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_direct_connect_gateway_association_proposal_error_mapper,
            request_options=request_options,
        )

    def create_interconnect(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateInterconnectErrorBody]:
        """Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.
        An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use
        an interconnect to provide Direct Connect hosted connections to customers through their own network services.
        Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a
        standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct
        Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a
        LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint
        that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no
        interconnect is created. For each end customer, the Direct Connect Partner provisions a connection on their
        interconnect by calling AllocateHostedConnection. The end customer can then connect to Amazon Web Services
        resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Co

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateInterconnect"),
            headers=[param[XAmzTarget38OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_interconnect_error_mapper,
            request_options=request_options,
        )

    def create_lag(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateLagErrorBody]:
        """Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections
        between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the
        Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a
        single interface. All connections in a LAG must use the same bandwidth (either 1Gbps, 10Gbps, 100Gbps, or
        400Gbps) and must terminate at the same Direct Connect endpoint. You can have up to 10 dedicated connections per
        location. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate
        on a single endpoint, no LAG is created.. You can specify an existing physical dedicated connection or
        interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts
        the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be
        created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces
        associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateLag"),
            headers=[param[XAmzTarget41OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_lag_error_mapper,
            request_options=request_options,
        )

    def create_private_virtual_interface(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreatePrivateVirtualInterfaceErrorBody]:
        """Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic.
        A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway
        (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for
        connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private
        virtual interface to a VGW only provides access to a single VPC within the same Region. Setting the MTU of a
        virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't
        updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual
        interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo
        frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call
        DescribeVirtualInterfaces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreatePrivateVirtualInterface"),
            headers=[param[XAmzTarget45OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_private_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def create_public_virtual_interface(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreatePublicVirtualInterfaceErrorBody]:
        """Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A
        public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.
        When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address
        fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreatePublicVirtualInterface"),
            headers=[param[XAmzTarget46OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_public_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def create_transit_virtual_interface(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateTransitVirtualInterfaceErrorBody]:
        """Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit
        gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple
        VPCs attached to a transit gateway to a Direct Connect gateway. If you associate your transit gateway with one
        or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct
        Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit
        gateway and Direct Connect gateway, the association request fails. A jumbo MTU value must be either 1500 or
        8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause
        an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the
        connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30
        seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your
        virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateTransitVirtualInterface"),
            headers=[param[XAmzTarget47OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_transit_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def delete_bgp_peer(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBgpPeerErrorBody]:
        """Deletes the specified BGP peer on the specified virtual interface with the specified customer address and
        ASN. You cannot delete the last BGP peer from a virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteBGPPeer"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_bgp_peer_error_mapper,
            request_options=request_options,
        )

    def delete_connection(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteConnectionErrorBody]:
        """Deletes the specified connection. Deleting a connection only stops the Direct Connect port hour and data
        transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you
        must cancel your service with them separately.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteConnection"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_connection_error_mapper,
            request_options=request_options,
        )

    def delete_direct_connect_gateway(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDirectConnectGatewayErrorBody]:
        """Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached
        to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect
        gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDirectConnectGateway"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_direct_connect_gateway_error_mapper,
            request_options=request_options,
        )

    def delete_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDirectConnectGatewayAssociationErrorBody]:
        """Deletes the association between the specified Direct Connect gateway and virtual private gateway. We
        recommend that you specify the associationID to delete the association. Alternatively, if you own virtual
        gateway and a Direct Connect gateway association, you can specify the virtualGatewayId and
        directConnectGatewayId to delete an association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDirectConnectGatewayAssociation"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_direct_connect_gateway_association_error_mapper,
            request_options=request_options,
        )

    def delete_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDirectConnectGatewayAssociationProposalErrorBody]:
        """Deletes the association proposal request between the specified Direct Connect gateway and virtual private
        gateway or transit gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDirectConnectGatewayAssociationProposal"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_direct_connect_gateway_association_proposal_error_mapper,
            request_options=request_options,
        )

    def delete_interconnect(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteInterconnectErrorBody]:
        """Deletes the specified interconnect. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteInterconnect"),
            headers=[param[XAmzTarget39OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_interconnect_error_mapper,
            request_options=request_options,
        )

    def delete_lag(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteLagErrorBody]:
        """Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual
        interfaces or hosted connections.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteLag"),
            headers=[param[XAmzTarget42OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_lag_error_mapper,
            request_options=request_options,
        )

    def delete_virtual_interface(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteVirtualInterfaceErrorBody]:
        """Deletes a virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteVirtualInterface"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_virtual_interface_error_mapper,
            request_options=request_options,
        )

    def describe_connection_loa(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeConnectionLoaErrorBody]:
        """Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for a connection. The Letter of Authorization -
        Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when
        establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see
        Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeConnectionLoa"),
            headers=[param[XAmzTarget48OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_connection_loa_error_mapper,
            request_options=request_options,
        )

    def describe_connections(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeConnectionsErrorBody]:
        """Displays the specified connection or all connections in this Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeConnections"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_connections_error_mapper,
            request_options=request_options,
        )

    def describe_connections_on_interconnect(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeConnectionsOnInterconnectErrorBody]:
        """Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the
        specified interconnect. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeConnectionsOnInterconnect"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_connections_on_interconnect_error_mapper,
            request_options=request_options,
        )

    def describe_customer_metadata(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCustomerMetadataErrorBody]:
        """Get and view a list of customer agreements, along with their signed status and whether the customer is an
        NNIPartner, NNIPartnerV2, or a nonPartner.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCustomerMetadata"),
            headers=[param[XAmzTarget49OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_customer_metadata_error_mapper,
            request_options=request_options,
        )

    def describe_direct_connect_gateway_association_proposals(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDirectConnectGatewayAssociationProposalsErrorBody]:
        """Describes one or more association proposals for connection between a virtual private gateway or transit
        gateway and a Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDirectConnectGatewayAssociationProposals"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_direct_connect_gateway_association_proposals_error_mapper,
            request_options=request_options,
        )

    def describe_direct_connect_gateway_associations(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDirectConnectGatewayAssociationsErrorBody]:
        """Lists the associations between your Direct Connect gateways and virtual private gateways and transit
        gateways. You must specify one of the following: A Direct Connect gateway The response contains all virtual
        private gateways and transit gateways associated with the Direct Connect gateway. A virtual private gateway The
        response contains the Direct Connect gateway. A transit gateway The response contains the Direct Connect
        gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between
        the Direct Connect gateway and virtual private gateway. A Direct Connect gateway and a transit gateway The
        response contains the association between the Direct Connect gateway and transit gateway. A Direct Connect
        gateway and a virtual private gateway The response contains the association between the Direct Connect gateway
        and virtual private gateway. A Direct Connect gateway association to a Cloud WAN core network The response
        contains the Cloud WAN core network ID that the Direct Connect gateway is associated to.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDirectConnectGatewayAssociations"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_direct_connect_gateway_associations_error_mapper,
            request_options=request_options,
        )

    def describe_direct_connect_gateway_attachments(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDirectConnectGatewayAttachmentsErrorBody]:
        """Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct
        Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
        all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response
        contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response
        contains the attachment between the Direct Connect gateway and the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDirectConnectGatewayAttachments"),
            headers=[param[XAmzTarget50OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_direct_connect_gateway_attachments_error_mapper,
            request_options=request_options,
        )

    def describe_direct_connect_gateways(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDirectConnectGatewaysErrorBody]:
        """Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect
        gateways are not returned.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDirectConnectGateways"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_direct_connect_gateways_error_mapper,
            request_options=request_options,
        )

    def describe_hosted_connections(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeHostedConnectionsErrorBody]:
        """Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation
        group (LAG). Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeHostedConnections"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_hosted_connections_error_mapper,
            request_options=request_options,
        )

    def describe_interconnect_loa(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeInterconnectLoaErrorBody]:
        """Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for the specified interconnect. The Letter of
        Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross
        connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects
        at Direct Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeInterconnectLoa"),
            headers=[param[XAmzTarget51OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_interconnect_loa_error_mapper,
            request_options=request_options,
        )

    def describe_interconnects(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeInterconnectsErrorBody]:
        """Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeInterconnects"),
            headers=[param[XAmzTarget40OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_interconnects_error_mapper,
            request_options=request_options,
        )

    def describe_lags(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeLagsErrorBody]:
        """Describes all your link aggregation groups (LAG) or the specified LAG.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeLags"),
            headers=[param[XAmzTarget43OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_lags_error_mapper,
            request_options=request_options,
        )

    def describe_loa(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeLoaErrorBody]:
        """Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization
        - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to
        Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct
        Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeLoa"),
            headers=[param[XAmzTarget52OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_loa_error_mapper,
            request_options=request_options,
        )

    def describe_locations(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeLocationsErrorBody]:
        """Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that
        can be selected when calling CreateConnection or CreateInterconnect.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeLocations"),
            headers=[param[XAmzTarget53OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_locations_error_mapper,
            request_options=request_options,
        )

    def describe_router_configuration(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeRouterConfigurationErrorBody]:
        """Details about the router.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeRouterConfiguration"),
            headers=[param[XAmzTarget54OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_router_configuration_error_mapper,
            request_options=request_options,
        )

    def describe_tags(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTagsErrorBody]:
        """Describes the tags associated with the specified Direct Connect resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTags"),
            headers=[param[XAmzTarget55OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_tags_error_mapper,
            request_options=request_options,
        )

    def describe_virtual_gateways(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeVirtualGatewaysErrorBody]:
        """Deprecated. Use DescribeVpnGateways instead. See DescribeVPNGateways in the Amazon Elastic Compute Cloud API
        Reference. Lists the virtual private gateways owned by the Amazon Web Services account. You can create one or
        more Direct Connect private virtual interfaces linked to a virtual private gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeVirtualGateways"),
            headers=[param[XAmzTarget56OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_virtual_gateways_error_mapper,
            request_options=request_options,
        )

    def describe_virtual_interfaces(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeVirtualInterfacesErrorBody]:
        """Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15
        minutes before you make the request are also returned. If you specify a connection ID, only the virtual
        interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a
        single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the Direct
        Connect location and the customer network. If you're using an asn, the response includes the ASN value in both
        the asn and asnLong fields. If you're using asnLong, the response returns a value of 0 (zero) for the asn
        attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeVirtualInterfaces"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_virtual_interfaces_error_mapper,
            request_options=request_options,
        )

    def disassociate_connection_from_lag(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisassociateConnectionFromLagErrorBody]:
        """Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and
        re-established as a standalone connection (the connection is not deleted; to delete the connection, use the
        DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain
        associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically
        converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for
        minimum number of operational connections, the request fails, except when it's the last member of the LAG. If
        all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateConnectionFromLag"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=disassociate_connection_from_lag_error_mapper,
            request_options=request_options,
        )

    def disassociate_mac_sec_key(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisassociateMacSecKeyErrorBody]:
        """Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateMacSecKey"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=disassociate_mac_sec_key_error_mapper,
            request_options=request_options,
        )

    def list_virtual_interface_test_history(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVirtualInterfaceTestHistoryErrorBody]:
        """Lists the virtual interface failover test history.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVirtualInterfaceTestHistory"),
            headers=[param[XAmzTarget57OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_virtual_interface_test_history_error_mapper,
            request_options=request_options,
        )

    def start_bgp_failover_test(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartBgpFailoverTestErrorBody]:
        """Starts the virtual interface failover test that verifies your configuration meets your resiliency
        requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that
        there are no outages. You can run the test on public, private, transit, and hosted virtual interfaces. You can
        use ListVirtualInterfaceTestHistory to view the virtual interface test history. If you need to stop the test
        before the test interval completes, use StopBgpFailoverTest.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartBgpFailoverTest"),
            headers=[param[XAmzTarget58OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_bgp_failover_test_error_mapper,
            request_options=request_options,
        )

    def stop_bgp_failover_test(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopBgpFailoverTestErrorBody]:
        """Stops the virtual interface failover test.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopBgpFailoverTest"),
            headers=[param[XAmzTarget59OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_bgp_failover_test_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50
        tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with
        the resource, this action updates its value.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget60OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes one or more tags from the specified Direct Connect resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget61OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    def update_connection(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateConnectionErrorBody]:
        """Updates the Direct Connect connection configuration. You can update the following parameters for a
        connection: The connection name The connection's MAC Security (MACsec) encryption mode.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateConnection"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_connection_error_mapper,
            request_options=request_options,
        )

    def update_direct_connect_gateway(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateDirectConnectGatewayErrorBody]:
        """Updates the name of a current Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateDirectConnectGateway"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_direct_connect_gateway_error_mapper,
            request_options=request_options,
        )

    def update_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateDirectConnectGatewayAssociationErrorBody]:
        """Updates the specified attributes of the Direct Connect gateway association. Add or remove prefixes from the
        association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateDirectConnectGatewayAssociation"),
            headers=[param[XAmzTarget37OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_direct_connect_gateway_association_error_mapper,
            request_options=request_options,
        )

    def update_lag(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateLagErrorBody]:
        """Updates the attributes of the specified link aggregation group (LAG). You can update the following LAG
        attributes: The name of the LAG. The value for the minimum number of connections that must be operational for
        the LAG itself to be operational. The LAG's MACsec encryption mode. Amazon Web Services assigns this value to
        each connection which is part of the LAG. The tags If you adjust the threshold value for the minimum number of
        operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become
        non-operational.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateLag"),
            headers=[param[XAmzTarget44OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_lag_error_mapper,
            request_options=request_options,
        )

    def update_virtual_interface_attributes(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateVirtualInterfaceAttributesErrorBody]:
        """Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual
        interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated
        to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces
        associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames,
        call DescribeConnections. To check whether your virtual interface supports jumbo frames, call
        DescribeVirtualInterfaces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateVirtualInterfaceAttributes"),
            headers=[param[XAmzTarget62OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_virtual_interface_attributes_error_mapper,
            request_options=request_options,
        )


class AsyncAwsDirectConnectWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def accept_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AcceptDirectConnectGatewayAssociationProposalErrorBody]:
        """Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect
        gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AcceptDirectConnectGatewayAssociationProposal"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=accept_direct_connect_gateway_association_proposal_error_mapper,
            request_options=request_options,
        )

    async def allocate_connection_on_interconnect(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocateConnectionOnInterconnectErrorBody]:
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
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_connection_on_interconnect_error_mapper,
            request_options=request_options,
        )

    async def allocate_hosted_connection(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocateHostedConnectionErrorBody]:
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
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_hosted_connection_error_mapper,
            request_options=request_options,
        )

    async def allocate_private_virtual_interface(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocatePrivateVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_private_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def allocate_public_virtual_interface(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocatePublicVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_public_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def allocate_transit_virtual_interface(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AllocateTransitVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=allocate_transit_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def associate_connection_with_lag(
        self, x_amz_target: XAmzTarget14OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateConnectionWithLagErrorBody]:
        """Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and
        re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must
        be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the
        LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing
        the connection would cause the original LAG to fall below its setting for minimum number of operational
        connections, the request fails. Any virtual interfaces that are directly associated with the connection are
        automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the
        virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are
        automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG,
        the hosted connections remain associated with the original LAG.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateConnectionWithLag"),
            headers=[param[XAmzTarget14OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=associate_connection_with_lag_error_mapper,
            request_options=request_options,
        )

    async def associate_hosted_connection(
        self, x_amz_target: XAmzTarget21OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateHostedConnectionErrorBody]:
        """Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or
        interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number
        or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to
        Amazon Web Services as it is being migrated. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateHostedConnection"),
            headers=[param[XAmzTarget21OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=associate_hosted_connection_error_mapper,
            request_options=request_options,
        )

    async def associate_mac_sec_key(
        self, x_amz_target: XAmzTarget23OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateMacSecKeyErrorBody]:
        """Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a
        Direct Connect connection. You must supply either the secretARN, or the CKN/CAK (ckn and cak) pair in the
        request. For information about MAC Security (MACsec) key considerations, see MACsec pre-shared CKN/CAK key
        considerations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateMacSecKey"),
            headers=[param[XAmzTarget23OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=associate_mac_sec_key_error_mapper,
            request_options=request_options,
        )

    async def associate_virtual_interface(
        self, x_amz_target: XAmzTarget25OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AssociateVirtualInterfaceErrorBody]:
        """Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to
        Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target
        connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP
        address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a
        LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To
        reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface
        itself or the connection to which the virtual interface is currently associated. Additionally, the requester
        must own the connection or LAG for the association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssociateVirtualInterface"),
            headers=[param[XAmzTarget25OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=associate_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def confirm_connection(
        self, x_amz_target: XAmzTarget9OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmConnectionErrorBody]:
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
            headers=[param[XAmzTarget9OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_connection_error_mapper,
            request_options=request_options,
        )

    async def confirm_customer_agreement(
        self, x_amz_target: XAmzTarget10OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmCustomerAgreementErrorBody]:
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
            headers=[param[XAmzTarget10OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_customer_agreement_error_mapper,
            request_options=request_options,
        )

    async def confirm_private_virtual_interface(
        self, x_amz_target: XAmzTarget11OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmPrivateVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget11OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_private_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def confirm_public_virtual_interface(
        self, x_amz_target: XAmzTarget12OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmPublicVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget12OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_public_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def confirm_transit_virtual_interface(
        self, x_amz_target: XAmzTarget13OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ConfirmTransitVirtualInterfaceErrorBody]:
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
            headers=[param[XAmzTarget13OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=confirm_transit_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def create_bgp_peer(
        self, x_amz_target: XAmzTarget28OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateBgpPeerErrorBody]:
        """Creates a BGP peer on the specified virtual interface. You must create a BGP peer for the corresponding
        address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.
        If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the
        same address family as an existing BGP peer on the virtual interface. When creating a IPv6 BGP peer, omit the
        Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6
        addresses; you cannot specify custom IPv6 addresses. If you let Amazon Web Services auto-assign IPv4 addresses,
        a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you
        intend to use the customer router peer IP address as the source and destination for traffic. Instead you should
        use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see
        Address Allocation for Private Internets. For a public virtual interface, the Autonomous System Number (ASN)
        must be private or already on the allow list for the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateBGPPeer"),
            headers=[param[XAmzTarget28OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_bgp_peer_error_mapper,
            request_options=request_options,
        )

    async def create_connection(
        self, x_amz_target: XAmzTarget15OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateConnectionErrorBody]:
        """Creates a connection between a customer network and a specific Direct Connect location. A connection links
        your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the
        cable is connected to your router, the other to an Direct Connect router. To find the locations for your Region,
        use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by
        specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect
        endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no
        connection is created.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateConnection"),
            headers=[param[XAmzTarget15OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_connection_error_mapper,
            request_options=request_options,
        )

    async def create_direct_connect_gateway(
        self, x_amz_target: XAmzTarget30OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDirectConnectGatewayErrorBody]:
        """Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of
        virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon
        Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected
        through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to
        a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic
        between them.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDirectConnectGateway"),
            headers=[param[XAmzTarget30OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_direct_connect_gateway_error_mapper,
            request_options=request_options,
        )

    async def create_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget34OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDirectConnectGatewayAssociationErrorBody]:
        """Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private
        gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDirectConnectGatewayAssociation"),
            headers=[param[XAmzTarget34OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_direct_connect_gateway_association_error_mapper,
            request_options=request_options,
        )

    async def create_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateDirectConnectGatewayAssociationProposalErrorBody]:
        """Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified
        Direct Connect gateway. You can associate a Direct Connect gateway and virtual private gateway or transit
        gateway that is owned by any Amazon Web Services account.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateDirectConnectGatewayAssociationProposal"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_direct_connect_gateway_association_proposal_error_mapper,
            request_options=request_options,
        )

    async def create_interconnect(
        self, x_amz_target: XAmzTarget38OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateInterconnectErrorBody]:
        """Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.
        An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use
        an interconnect to provide Direct Connect hosted connections to customers through their own network services.
        Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a
        standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct
        Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a
        LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint
        that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no
        interconnect is created. For each end customer, the Direct Connect Partner provisions a connection on their
        interconnect by calling AllocateHostedConnection. The end customer can then connect to Amazon Web Services
        resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Co

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateInterconnect"),
            headers=[param[XAmzTarget38OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_interconnect_error_mapper,
            request_options=request_options,
        )

    async def create_lag(
        self, x_amz_target: XAmzTarget41OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateLagErrorBody]:
        """Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections
        between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the
        Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a
        single interface. All connections in a LAG must use the same bandwidth (either 1Gbps, 10Gbps, 100Gbps, or
        400Gbps) and must terminate at the same Direct Connect endpoint. You can have up to 10 dedicated connections per
        location. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate
        on a single endpoint, no LAG is created.. You can specify an existing physical dedicated connection or
        interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts
        the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be
        created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces
        associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateLag"),
            headers=[param[XAmzTarget41OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_lag_error_mapper,
            request_options=request_options,
        )

    async def create_private_virtual_interface(
        self, x_amz_target: XAmzTarget45OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreatePrivateVirtualInterfaceErrorBody]:
        """Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic.
        A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway
        (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for
        connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private
        virtual interface to a VGW only provides access to a single VPC within the same Region. Setting the MTU of a
        virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't
        updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual
        interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo
        frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call
        DescribeVirtualInterfaces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreatePrivateVirtualInterface"),
            headers=[param[XAmzTarget45OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_private_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def create_public_virtual_interface(
        self, x_amz_target: XAmzTarget46OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreatePublicVirtualInterfaceErrorBody]:
        """Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A
        public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.
        When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address
        fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreatePublicVirtualInterface"),
            headers=[param[XAmzTarget46OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_public_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def create_transit_virtual_interface(
        self, x_amz_target: XAmzTarget47OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateTransitVirtualInterfaceErrorBody]:
        """Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit
        gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple
        VPCs attached to a transit gateway to a Direct Connect gateway. If you associate your transit gateway with one
        or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct
        Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit
        gateway and Direct Connect gateway, the association request fails. A jumbo MTU value must be either 1500 or
        8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause
        an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the
        connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30
        seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your
        virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateTransitVirtualInterface"),
            headers=[param[XAmzTarget47OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_transit_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def delete_bgp_peer(
        self, x_amz_target: XAmzTarget29OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBgpPeerErrorBody]:
        """Deletes the specified BGP peer on the specified virtual interface with the specified customer address and
        ASN. You cannot delete the last BGP peer from a virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteBGPPeer"),
            headers=[param[XAmzTarget29OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_bgp_peer_error_mapper,
            request_options=request_options,
        )

    async def delete_connection(
        self, x_amz_target: XAmzTarget16OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteConnectionErrorBody]:
        """Deletes the specified connection. Deleting a connection only stops the Direct Connect port hour and data
        transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you
        must cancel your service with them separately.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteConnection"),
            headers=[param[XAmzTarget16OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_connection_error_mapper,
            request_options=request_options,
        )

    async def delete_direct_connect_gateway(
        self, x_amz_target: XAmzTarget31OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDirectConnectGatewayErrorBody]:
        """Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached
        to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect
        gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDirectConnectGateway"),
            headers=[param[XAmzTarget31OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_direct_connect_gateway_error_mapper,
            request_options=request_options,
        )

    async def delete_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget35OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDirectConnectGatewayAssociationErrorBody]:
        """Deletes the association between the specified Direct Connect gateway and virtual private gateway. We
        recommend that you specify the associationID to delete the association. Alternatively, if you own virtual
        gateway and a Direct Connect gateway association, you can specify the virtualGatewayId and
        directConnectGatewayId to delete an association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDirectConnectGatewayAssociation"),
            headers=[param[XAmzTarget35OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_direct_connect_gateway_association_error_mapper,
            request_options=request_options,
        )

    async def delete_direct_connect_gateway_association_proposal(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDirectConnectGatewayAssociationProposalErrorBody]:
        """Deletes the association proposal request between the specified Direct Connect gateway and virtual private
        gateway or transit gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteDirectConnectGatewayAssociationProposal"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_direct_connect_gateway_association_proposal_error_mapper,
            request_options=request_options,
        )

    async def delete_interconnect(
        self, x_amz_target: XAmzTarget39OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteInterconnectErrorBody]:
        """Deletes the specified interconnect. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteInterconnect"),
            headers=[param[XAmzTarget39OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_interconnect_error_mapper,
            request_options=request_options,
        )

    async def delete_lag(
        self, x_amz_target: XAmzTarget42OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteLagErrorBody]:
        """Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual
        interfaces or hosted connections.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteLag"),
            headers=[param[XAmzTarget42OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_lag_error_mapper,
            request_options=request_options,
        )

    async def delete_virtual_interface(
        self, x_amz_target: XAmzTarget26OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteVirtualInterfaceErrorBody]:
        """Deletes a virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteVirtualInterface"),
            headers=[param[XAmzTarget26OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_virtual_interface_error_mapper,
            request_options=request_options,
        )

    async def describe_connection_loa(
        self, x_amz_target: XAmzTarget48OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeConnectionLoaErrorBody]:
        """Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for a connection. The Letter of Authorization -
        Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when
        establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see
        Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeConnectionLoa"),
            headers=[param[XAmzTarget48OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_connection_loa_error_mapper,
            request_options=request_options,
        )

    async def describe_connections(
        self, x_amz_target: XAmzTarget17OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeConnectionsErrorBody]:
        """Displays the specified connection or all connections in this Region.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeConnections"),
            headers=[param[XAmzTarget17OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_connections_error_mapper,
            request_options=request_options,
        )

    async def describe_connections_on_interconnect(
        self, x_amz_target: XAmzTarget18OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeConnectionsOnInterconnectErrorBody]:
        """Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the
        specified interconnect. Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeConnectionsOnInterconnect"),
            headers=[param[XAmzTarget18OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_connections_on_interconnect_error_mapper,
            request_options=request_options,
        )

    async def describe_customer_metadata(
        self, x_amz_target: XAmzTarget49OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeCustomerMetadataErrorBody]:
        """Get and view a list of customer agreements, along with their signed status and whether the customer is an
        NNIPartner, NNIPartnerV2, or a nonPartner.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCustomerMetadata"),
            headers=[param[XAmzTarget49OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_customer_metadata_error_mapper,
            request_options=request_options,
        )

    async def describe_direct_connect_gateway_association_proposals(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDirectConnectGatewayAssociationProposalsErrorBody]:
        """Describes one or more association proposals for connection between a virtual private gateway or transit
        gateway and a Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDirectConnectGatewayAssociationProposals"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_direct_connect_gateway_association_proposals_error_mapper,
            request_options=request_options,
        )

    async def describe_direct_connect_gateway_associations(
        self, x_amz_target: XAmzTarget36OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDirectConnectGatewayAssociationsErrorBody]:
        """Lists the associations between your Direct Connect gateways and virtual private gateways and transit
        gateways. You must specify one of the following: A Direct Connect gateway The response contains all virtual
        private gateways and transit gateways associated with the Direct Connect gateway. A virtual private gateway The
        response contains the Direct Connect gateway. A transit gateway The response contains the Direct Connect
        gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between
        the Direct Connect gateway and virtual private gateway. A Direct Connect gateway and a transit gateway The
        response contains the association between the Direct Connect gateway and transit gateway. A Direct Connect
        gateway and a virtual private gateway The response contains the association between the Direct Connect gateway
        and virtual private gateway. A Direct Connect gateway association to a Cloud WAN core network The response
        contains the Cloud WAN core network ID that the Direct Connect gateway is associated to.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDirectConnectGatewayAssociations"),
            headers=[param[XAmzTarget36OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_direct_connect_gateway_associations_error_mapper,
            request_options=request_options,
        )

    async def describe_direct_connect_gateway_attachments(
        self, x_amz_target: XAmzTarget50OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDirectConnectGatewayAttachmentsErrorBody]:
        """Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct
        Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
        all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response
        contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response
        contains the attachment between the Direct Connect gateway and the virtual interface.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDirectConnectGatewayAttachments"),
            headers=[param[XAmzTarget50OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_direct_connect_gateway_attachments_error_mapper,
            request_options=request_options,
        )

    async def describe_direct_connect_gateways(
        self, x_amz_target: XAmzTarget32OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeDirectConnectGatewaysErrorBody]:
        """Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect
        gateways are not returned.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeDirectConnectGateways"),
            headers=[param[XAmzTarget32OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_direct_connect_gateways_error_mapper,
            request_options=request_options,
        )

    async def describe_hosted_connections(
        self, x_amz_target: XAmzTarget22OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeHostedConnectionsErrorBody]:
        """Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation
        group (LAG). Intended for use by Direct Connect Partners only.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeHostedConnections"),
            headers=[param[XAmzTarget22OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_hosted_connections_error_mapper,
            request_options=request_options,
        )

    async def describe_interconnect_loa(
        self, x_amz_target: XAmzTarget51OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeInterconnectLoaErrorBody]:
        """Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for the specified interconnect. The Letter of
        Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross
        connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects
        at Direct Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeInterconnectLoa"),
            headers=[param[XAmzTarget51OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_interconnect_loa_error_mapper,
            request_options=request_options,
        )

    async def describe_interconnects(
        self, x_amz_target: XAmzTarget40OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeInterconnectsErrorBody]:
        """Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeInterconnects"),
            headers=[param[XAmzTarget40OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_interconnects_error_mapper,
            request_options=request_options,
        )

    async def describe_lags(
        self, x_amz_target: XAmzTarget43OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeLagsErrorBody]:
        """Describes all your link aggregation groups (LAG) or the specified LAG.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeLags"),
            headers=[param[XAmzTarget43OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_lags_error_mapper,
            request_options=request_options,
        )

    async def describe_loa(
        self, x_amz_target: XAmzTarget52OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeLoaErrorBody]:
        """Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization
        - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to
        Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct
        Connect Locations in the Direct Connect User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeLoa"),
            headers=[param[XAmzTarget52OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_loa_error_mapper,
            request_options=request_options,
        )

    async def describe_locations(
        self, x_amz_target: XAmzTarget53OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeLocationsErrorBody]:
        """Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that
        can be selected when calling CreateConnection or CreateInterconnect.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeLocations"),
            headers=[param[XAmzTarget53OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_locations_error_mapper,
            request_options=request_options,
        )

    async def describe_router_configuration(
        self, x_amz_target: XAmzTarget54OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeRouterConfigurationErrorBody]:
        """Details about the router.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeRouterConfiguration"),
            headers=[param[XAmzTarget54OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_router_configuration_error_mapper,
            request_options=request_options,
        )

    async def describe_tags(
        self, x_amz_target: XAmzTarget55OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeTagsErrorBody]:
        """Describes the tags associated with the specified Direct Connect resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeTags"),
            headers=[param[XAmzTarget55OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_tags_error_mapper,
            request_options=request_options,
        )

    async def describe_virtual_gateways(
        self, x_amz_target: XAmzTarget56OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeVirtualGatewaysErrorBody]:
        """Deprecated. Use DescribeVpnGateways instead. See DescribeVPNGateways in the Amazon Elastic Compute Cloud API
        Reference. Lists the virtual private gateways owned by the Amazon Web Services account. You can create one or
        more Direct Connect private virtual interfaces linked to a virtual private gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeVirtualGateways"),
            headers=[param[XAmzTarget56OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_virtual_gateways_error_mapper,
            request_options=request_options,
        )

    async def describe_virtual_interfaces(
        self, x_amz_target: XAmzTarget27OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeVirtualInterfacesErrorBody]:
        """Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15
        minutes before you make the request are also returned. If you specify a connection ID, only the virtual
        interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a
        single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the Direct
        Connect location and the customer network. If you're using an asn, the response includes the ASN value in both
        the asn and asnLong fields. If you're using asnLong, the response returns a value of 0 (zero) for the asn
        attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeVirtualInterfaces"),
            headers=[param[XAmzTarget27OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_virtual_interfaces_error_mapper,
            request_options=request_options,
        )

    async def disassociate_connection_from_lag(
        self, x_amz_target: XAmzTarget19OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisassociateConnectionFromLagErrorBody]:
        """Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and
        re-established as a standalone connection (the connection is not deleted; to delete the connection, use the
        DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain
        associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically
        converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for
        minimum number of operational connections, the request fails, except when it's the last member of the LAG. If
        all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateConnectionFromLag"),
            headers=[param[XAmzTarget19OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=disassociate_connection_from_lag_error_mapper,
            request_options=request_options,
        )

    async def disassociate_mac_sec_key(
        self, x_amz_target: XAmzTarget24OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisassociateMacSecKeyErrorBody]:
        """Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DisassociateMacSecKey"),
            headers=[param[XAmzTarget24OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=disassociate_mac_sec_key_error_mapper,
            request_options=request_options,
        )

    async def list_virtual_interface_test_history(
        self, x_amz_target: XAmzTarget57OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVirtualInterfaceTestHistoryErrorBody]:
        """Lists the virtual interface failover test history.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVirtualInterfaceTestHistory"),
            headers=[param[XAmzTarget57OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_virtual_interface_test_history_error_mapper,
            request_options=request_options,
        )

    async def start_bgp_failover_test(
        self, x_amz_target: XAmzTarget58OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartBgpFailoverTestErrorBody]:
        """Starts the virtual interface failover test that verifies your configuration meets your resiliency
        requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that
        there are no outages. You can run the test on public, private, transit, and hosted virtual interfaces. You can
        use ListVirtualInterfaceTestHistory to view the virtual interface test history. If you need to stop the test
        before the test interval completes, use StopBgpFailoverTest.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartBgpFailoverTest"),
            headers=[param[XAmzTarget58OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_bgp_failover_test_error_mapper,
            request_options=request_options,
        )

    async def stop_bgp_failover_test(
        self, x_amz_target: XAmzTarget59OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StopBgpFailoverTestErrorBody]:
        """Stops the virtual interface failover test.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopBgpFailoverTest"),
            headers=[param[XAmzTarget59OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_bgp_failover_test_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self, x_amz_target: XAmzTarget60OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50
        tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with
        the resource, this action updates its value.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagResource"),
            headers=[param[XAmzTarget60OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self, x_amz_target: XAmzTarget61OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes one or more tags from the specified Direct Connect resource.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagResource"),
            headers=[param[XAmzTarget61OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )

    async def update_connection(
        self, x_amz_target: XAmzTarget20OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateConnectionErrorBody]:
        """Updates the Direct Connect connection configuration. You can update the following parameters for a
        connection: The connection name The connection's MAC Security (MACsec) encryption mode.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateConnection"),
            headers=[param[XAmzTarget20OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_connection_error_mapper,
            request_options=request_options,
        )

    async def update_direct_connect_gateway(
        self, x_amz_target: XAmzTarget33OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateDirectConnectGatewayErrorBody]:
        """Updates the name of a current Direct Connect gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateDirectConnectGateway"),
            headers=[param[XAmzTarget33OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_direct_connect_gateway_error_mapper,
            request_options=request_options,
        )

    async def update_direct_connect_gateway_association(
        self, x_amz_target: XAmzTarget37OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateDirectConnectGatewayAssociationErrorBody]:
        """Updates the specified attributes of the Direct Connect gateway association. Add or remove prefixes from the
        association.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateDirectConnectGatewayAssociation"),
            headers=[param[XAmzTarget37OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_direct_connect_gateway_association_error_mapper,
            request_options=request_options,
        )

    async def update_lag(
        self, x_amz_target: XAmzTarget44OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateLagErrorBody]:
        """Updates the attributes of the specified link aggregation group (LAG). You can update the following LAG
        attributes: The name of the LAG. The value for the minimum number of connections that must be operational for
        the LAG itself to be operational. The LAG's MACsec encryption mode. Amazon Web Services assigns this value to
        each connection which is part of the LAG. The tags If you adjust the threshold value for the minimum number of
        operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become
        non-operational.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateLag"),
            headers=[param[XAmzTarget44OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_lag_error_mapper,
            request_options=request_options,
        )

    async def update_virtual_interface_attributes(
        self, x_amz_target: XAmzTarget62OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateVirtualInterfaceAttributesErrorBody]:
        """Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual
        interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated
        to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces
        associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames,
        call DescribeConnections. To check whether your virtual interface supports jumbo frames, call
        DescribeVirtualInterfaces.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateVirtualInterfaceAttributes"),
            headers=[param[XAmzTarget62OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_virtual_interface_attributes_error_mapper,
            request_options=request_options,
        )
