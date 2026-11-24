from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .associated_core_network import AssociatedCoreNetwork, AssociatedCoreNetworkDict
from .associated_gateway import AssociatedGateway, AssociatedGatewayDict
from .enums.association_state import AssociationStateOrStr
from .route_filter_prefix import RouteFilterPrefix, RouteFilterPrefixDict


class DirectConnectGatewayAssociation(SdkBaseModel):
    direct_connect_gateway_id: Optional[str] = Field(default=UNSET, alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    direct_connect_gateway_owner_account: Optional[str] = Field(default=UNSET, alias="directConnectGatewayOwnerAccount")
    """The ID of the Amazon Web Services account that owns the associated gateway."""

    association_state: Optional[AssociationStateOrStr] = Field(default=UNSET, alias="associationState")
    """The state of the association. The following are the possible values: associating: The initial state after calling
    CreateDirectConnectGatewayAssociation. associated: The Direct Connect gateway and virtual private gateway or transit
    gateway are successfully associated and ready to pass traffic. disassociating: The initial state after calling
    DeleteDirectConnectGatewayAssociation. disassociated: The virtual private gateway or transit gateway is
    disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private
    gateway or transit gateway is stopped."""

    state_change_error: Optional[str] = Field(default=UNSET, alias="stateChangeError")
    """The error message if the state of an object failed to advance."""

    associated_gateway: Optional[AssociatedGateway] = Field(default=UNSET, alias="associatedGateway")
    association_id: Optional[str] = Field(default=UNSET, alias="associationId")
    """The ID of the Direct Connect gateway association."""

    allowed_prefixes_to_direct_connect_gateway: Optional[list[RouteFilterPrefix]] = Field(
        default=UNSET, alias="allowedPrefixesToDirectConnectGateway"
    )
    """The Amazon VPC prefixes to advertise to the Direct Connect gateway."""

    associated_core_network: Optional[AssociatedCoreNetwork] = Field(default=UNSET, alias="associatedCoreNetwork")
    virtual_gateway_id: Optional[str] = Field(default=UNSET, alias="virtualGatewayId")
    """The ID of the virtual private gateway. Applies only to private virtual interfaces."""

    virtual_gateway_region: Optional[str] = Field(default=UNSET, alias="virtualGatewayRegion")
    """The Amazon Web Services Region where the virtual private gateway is located."""

    virtual_gateway_owner_account: Optional[str] = Field(default=UNSET, alias="virtualGatewayOwnerAccount")
    """The ID of the Amazon Web Services account that owns the virtual private gateway."""


class DirectConnectGatewayAssociationDict(TypedDict):
    direct_connect_gateway_id: NotRequired[str]
    direct_connect_gateway_owner_account: NotRequired[str]
    association_state: NotRequired[AssociationStateOrStr]
    state_change_error: NotRequired[str]
    associated_gateway: NotRequired[AssociatedGatewayDict]
    association_id: NotRequired[str]
    allowed_prefixes_to_direct_connect_gateway: NotRequired[list[RouteFilterPrefixDict]]
    associated_core_network: NotRequired[AssociatedCoreNetworkDict]
    virtual_gateway_id: NotRequired[str]
    virtual_gateway_region: NotRequired[str]
    virtual_gateway_owner_account: NotRequired[str]
