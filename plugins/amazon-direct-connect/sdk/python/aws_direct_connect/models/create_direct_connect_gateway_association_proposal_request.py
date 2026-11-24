from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .route_filter_prefix import RouteFilterPrefix, RouteFilterPrefixDict


class CreateDirectConnectGatewayAssociationProposalRequest(SdkBaseModel):
    direct_connect_gateway_id: str = Field(alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    direct_connect_gateway_owner_account: str = Field(alias="directConnectGatewayOwnerAccount")
    """The ID of the Amazon Web Services account that owns the Direct Connect gateway."""

    gateway_id: str = Field(alias="gatewayId")
    """The ID of the virtual private gateway or transit gateway."""

    add_allowed_prefixes_to_direct_connect_gateway: Optional[list[RouteFilterPrefix]] = Field(
        default=UNSET, alias="addAllowedPrefixesToDirectConnectGateway"
    )
    """The Amazon VPC prefixes to advertise to the Direct Connect gateway."""

    remove_allowed_prefixes_to_direct_connect_gateway: Optional[list[RouteFilterPrefix]] = Field(
        default=UNSET, alias="removeAllowedPrefixesToDirectConnectGateway"
    )
    """The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway."""


class CreateDirectConnectGatewayAssociationProposalRequestDict(TypedDict):
    direct_connect_gateway_id: str
    direct_connect_gateway_owner_account: str
    gateway_id: str
    add_allowed_prefixes_to_direct_connect_gateway: NotRequired[list[RouteFilterPrefixDict]]
    remove_allowed_prefixes_to_direct_connect_gateway: NotRequired[list[RouteFilterPrefixDict]]
