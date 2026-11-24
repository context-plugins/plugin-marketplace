from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subnet import Subnet, SubnetDict


class DescribeSubnetsResponse(SdkBaseModel):
    """Response from the DescribeSubnets action"""

    subnet_set: Optional[list[Subnet]] = Field(default=UNSET, alias="subnetSet")
    """Information about the subnets"""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """Token for the next page of results"""


class DescribeSubnetsResponseDict(TypedDict):
    subnet_set: NotRequired[list[SubnetDict]]
    next_token: NotRequired[str]
