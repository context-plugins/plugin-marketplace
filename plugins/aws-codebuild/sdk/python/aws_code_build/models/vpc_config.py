from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VpcConfig(SdkBaseModel):
    vpc_id: Optional[str] = Field(default=UNSET, alias="vpcId")
    """The ID of the Amazon VPC."""

    subnets: Optional[list[str]] = UNSET
    """A list of one or more subnet IDs in your Amazon VPC."""

    security_group_ids: Optional[list[str]] = Field(default=UNSET, alias="securityGroupIds")
    """A list of one or more security groups IDs in your Amazon VPC."""


class VpcConfigDict(TypedDict):
    vpc_id: NotRequired[str]
    subnets: NotRequired[list[str]]
    security_group_ids: NotRequired[list[str]]
