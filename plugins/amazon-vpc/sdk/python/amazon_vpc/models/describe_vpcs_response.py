from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vpc import Vpc, VpcDict


class DescribeVpcsResponse(SdkBaseModel):
    """Response from the DescribeVpcs action"""

    vpc_set: Optional[list[Vpc]] = Field(default=UNSET, alias="vpcSet")
    """Information about the VPCs"""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """Token for the next page of results"""


class DescribeVpcsResponseDict(TypedDict):
    vpc_set: NotRequired[list[VpcDict]]
    next_token: NotRequired[str]
