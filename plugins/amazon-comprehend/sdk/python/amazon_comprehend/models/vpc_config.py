from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class VpcConfig(SdkBaseModel):
    security_group_ids: list[str] = Field(alias="SecurityGroupIds")
    """The ID number for a security group on an instance of your private VPC. Security groups on your VPC function serve
    as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be
    accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more
    information, see Security Groups for your VPC."""

    subnets: list[str] = Field(alias="Subnets")
    """The ID for each subnet being used in your private VPC. This subnet is a subset of the a range of IPv4 addresses
    used by the VPC and is specific to a given availability zone in the VPC’s Region. This ID number is preceded by
    "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see VPCs and Subnets."""


class VpcConfigDict(TypedDict):
    security_group_ids: list[str]
    subnets: list[str]
