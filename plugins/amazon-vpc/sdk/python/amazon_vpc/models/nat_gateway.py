from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.connectivity_type import ConnectivityTypeOrStr
from .enums.state_amazon_vpc_nat_gateways_api import StateAmazonVpcNatGatewaysApiOrStr
from .nat_gateway_address import NatGatewayAddress, NatGatewayAddressDict
from .tag_model import TagModel, TagModelDict


class NatGateway(SdkBaseModel):
    """Describes a NAT gateway"""

    nat_gateway_id: Optional[str] = Field(default=UNSET, alias="natGatewayId")
    """The ID of the NAT gateway"""

    subnet_id: Optional[str] = Field(default=UNSET, alias="subnetId")
    """The ID of the subnet in which the NAT gateway is located"""

    vpc_id: Optional[str] = Field(default=UNSET, alias="vpcId")
    """The ID of the VPC in which the NAT gateway is located"""

    state: Optional[StateAmazonVpcNatGatewaysApiOrStr] = UNSET
    """The state of the NAT gateway"""

    connectivity_type: Optional[ConnectivityTypeOrStr] = Field(default=UNSET, alias="connectivityType")
    """Indicates whether the NAT gateway supports public or private connectivity"""

    nat_gateway_addresses: Optional[list[NatGatewayAddress]] = Field(default=UNSET, alias="natGatewayAddresses")
    """Information about the IP addresses and network interface associated with the NAT gateway"""

    create_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createTime")
    """The date and time the NAT gateway was created"""

    tags: Optional[list[TagModel]] = UNSET
    """Any tags assigned to the NAT gateway"""


class NatGatewayDict(TypedDict):
    nat_gateway_id: NotRequired[str]
    subnet_id: NotRequired[str]
    vpc_id: NotRequired[str]
    state: NotRequired[StateAmazonVpcNatGatewaysApiOrStr]
    connectivity_type: NotRequired[ConnectivityTypeOrStr]
    nat_gateway_addresses: NotRequired[list[NatGatewayAddressDict]]
    create_time: NotRequired[RFC3339DateTime]
    tags: NotRequired[list[TagModelDict]]
