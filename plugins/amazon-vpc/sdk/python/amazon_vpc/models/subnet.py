from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state_amazon_vpc_subnets_api import StateAmazonVpcSubnetsApiOrStr
from .tag_model import TagModel, TagModelDict


class Subnet(SdkBaseModel):
    """Describes a subnet"""

    subnet_id: Optional[str] = Field(default=UNSET, alias="subnetId")
    """The ID of the subnet"""

    subnet_arn: Optional[str] = Field(default=UNSET, alias="subnetArn")
    """The Amazon Resource Name (ARN) of the subnet"""

    vpc_id: Optional[str] = Field(default=UNSET, alias="vpcId")
    """The ID of the VPC the subnet is in"""

    state: Optional[StateAmazonVpcSubnetsApiOrStr] = UNSET
    """The current state of the subnet"""

    cidr_block: Optional[str] = Field(default=UNSET, alias="cidrBlock")
    """The IPv4 CIDR block assigned to the subnet"""

    availability_zone: Optional[str] = Field(default=UNSET, alias="availabilityZone")
    """The Availability Zone of the subnet"""

    availability_zone_id: Optional[str] = Field(default=UNSET, alias="availabilityZoneId")
    """The AZ ID of the subnet"""

    available_ip_address_count: Optional[int] = Field(default=UNSET, alias="availableIpAddressCount")
    """The number of unused private IPv4 addresses in the subnet"""

    default_for_az: Optional[bool] = Field(default=UNSET, alias="defaultForAz")
    """Indicates whether this is the default subnet for the Availability Zone"""

    map_public_ip_on_launch: Optional[bool] = Field(default=UNSET, alias="mapPublicIpOnLaunch")
    """Indicates whether instances launched in this subnet receive a public IPv4 address"""

    owner_id: Optional[str] = Field(default=UNSET, alias="ownerId")
    """The ID of the AWS account that owns the subnet"""

    tags: Optional[list[TagModel]] = UNSET
    """Any tags assigned to the subnet"""


class SubnetDict(TypedDict):
    subnet_id: NotRequired[str]
    subnet_arn: NotRequired[str]
    vpc_id: NotRequired[str]
    state: NotRequired[StateAmazonVpcSubnetsApiOrStr]
    cidr_block: NotRequired[str]
    availability_zone: NotRequired[str]
    availability_zone_id: NotRequired[str]
    available_ip_address_count: NotRequired[int]
    default_for_az: NotRequired[bool]
    map_public_ip_on_launch: NotRequired[bool]
    owner_id: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
