from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .route_filter_prefix import RouteFilterPrefix, RouteFilterPrefixDict


class CreateDirectConnectGatewayAssociationRequest(SdkBaseModel):
    direct_connect_gateway_id: str = Field(alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    gateway_id: Optional[str] = Field(default=UNSET, alias="gatewayId")
    """The ID of the virtual private gateway or transit gateway."""

    add_allowed_prefixes_to_direct_connect_gateway: Optional[list[RouteFilterPrefix]] = Field(
        default=UNSET, alias="addAllowedPrefixesToDirectConnectGateway"
    )
    """The Amazon VPC prefixes to advertise to the Direct Connect gateway This parameter is required when you create an
    association to a transit gateway. For information about how to set the prefixes, see Allowed Prefixes in the Direct
    Connect User Guide."""

    virtual_gateway_id: Optional[str] = Field(default=UNSET, alias="virtualGatewayId")
    """The ID of the virtual private gateway."""


class CreateDirectConnectGatewayAssociationRequestDict(TypedDict):
    direct_connect_gateway_id: str
    gateway_id: NotRequired[str]
    add_allowed_prefixes_to_direct_connect_gateway: NotRequired[list[RouteFilterPrefixDict]]
    virtual_gateway_id: NotRequired[str]
