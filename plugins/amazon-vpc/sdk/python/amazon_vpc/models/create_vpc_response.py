from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vpc import Vpc, VpcDict


class CreateVpcResponse(SdkBaseModel):
    """Response from the CreateVpc action"""

    vpc: Optional[Vpc] = UNSET
    """Describes a VPC"""


class CreateVpcResponseDict(TypedDict):
    vpc: NotRequired[VpcDict]
