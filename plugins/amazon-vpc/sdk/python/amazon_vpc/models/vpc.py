from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cidr_block_association_set import CidrBlockAssociationSet, CidrBlockAssociationSetDict
from .enums.instance_tenancy import InstanceTenancyOrStr
from .enums.state_amazon_vpc_vp_cs_api import StateAmazonVpcVpCsApiOrStr
from .ipv6_cidr_block_association_set import Ipv6CidrBlockAssociationSet, Ipv6CidrBlockAssociationSetDict
from .tag_model import TagModel, TagModelDict


class Vpc(SdkBaseModel):
    """Describes a VPC"""

    vpc_id: Optional[str] = Field(default=UNSET, alias="vpcId")
    """The ID of the VPC"""

    state: Optional[StateAmazonVpcVpCsApiOrStr] = UNSET
    """The current state of the VPC"""

    cidr_block: Optional[str] = Field(default=UNSET, alias="cidrBlock")
    """The primary IPv4 CIDR block for the VPC"""

    cidr_block_association_set: Optional[list[CidrBlockAssociationSet]] = Field(
        default=UNSET, alias="cidrBlockAssociationSet"
    )
    """Information about the IPv4 CIDR blocks associated with the VPC"""

    ipv6_cidr_block_association_set: Optional[list[Ipv6CidrBlockAssociationSet]] = Field(
        default=UNSET, alias="ipv6CidrBlockAssociationSet"
    )
    """Information about the IPv6 CIDR blocks associated with the VPC"""

    dhcp_options_id: Optional[str] = Field(default=UNSET, alias="dhcpOptionsId")
    """The ID of the set of DHCP options associated with the VPC"""

    instance_tenancy: Optional[InstanceTenancyOrStr] = Field(default=UNSET, alias="instanceTenancy")
    """The allowed tenancy of instances launched into the VPC"""

    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    """Indicates whether the VPC is the default VPC"""

    owner_id: Optional[str] = Field(default=UNSET, alias="ownerId")
    """The ID of the AWS account that owns the VPC"""

    tags: Optional[list[TagModel]] = UNSET
    """Any tags assigned to the VPC"""


class VpcDict(TypedDict):
    vpc_id: NotRequired[str]
    state: NotRequired[StateAmazonVpcVpCsApiOrStr]
    cidr_block: NotRequired[str]
    cidr_block_association_set: NotRequired[list[CidrBlockAssociationSetDict]]
    ipv6_cidr_block_association_set: NotRequired[list[Ipv6CidrBlockAssociationSetDict]]
    dhcp_options_id: NotRequired[str]
    instance_tenancy: NotRequired[InstanceTenancyOrStr]
    is_default: NotRequired[bool]
    owner_id: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
