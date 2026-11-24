from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.origin import OriginOrStr
from .enums.state_amazon_vpc_route_tables_api import StateAmazonVpcRouteTablesApiOrStr


class Route(SdkBaseModel):
    destination_cidr_block: Optional[str] = Field(default=UNSET, alias="destinationCidrBlock")
    """The IPv4 CIDR block used for the destination match"""

    destination_ipv6_cidr_block: Optional[str] = Field(default=UNSET, alias="destinationIpv6CidrBlock")
    """The IPv6 CIDR block used for the destination match"""

    gateway_id: Optional[str] = Field(default=UNSET, alias="gatewayId")
    """The ID of the gateway attached to your VPC"""

    nat_gateway_id: Optional[str] = Field(default=UNSET, alias="natGatewayId")
    """The ID of a NAT gateway"""

    network_interface_id: Optional[str] = Field(default=UNSET, alias="networkInterfaceId")
    """The ID of the network interface"""

    state: Optional[StateAmazonVpcRouteTablesApiOrStr] = UNSET
    """The state of the route"""

    origin: Optional[OriginOrStr] = UNSET
    """Describes how the route was created"""


class RouteDict(TypedDict):
    destination_cidr_block: NotRequired[str]
    destination_ipv6_cidr_block: NotRequired[str]
    gateway_id: NotRequired[str]
    nat_gateway_id: NotRequired[str]
    network_interface_id: NotRequired[str]
    state: NotRequired[StateAmazonVpcRouteTablesApiOrStr]
    origin: NotRequired[OriginOrStr]
