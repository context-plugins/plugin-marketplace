from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subnet import Subnet, SubnetDict


class CreateSubnetResponse(SdkBaseModel):
    """Response from the CreateSubnet action"""

    subnet: Optional[Subnet] = UNSET
    """Describes a subnet"""


class CreateSubnetResponseDict(TypedDict):
    subnet: NotRequired[SubnetDict]
