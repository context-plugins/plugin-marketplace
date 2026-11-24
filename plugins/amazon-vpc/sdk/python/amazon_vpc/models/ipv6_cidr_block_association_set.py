from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ipv6_cidr_block_state import Ipv6CidrBlockState, Ipv6CidrBlockStateDict


class Ipv6CidrBlockAssociationSet(SdkBaseModel):
    ipv6_cidr_block: Optional[str] = Field(default=UNSET, alias="ipv6CidrBlock")
    association_id: Optional[str] = Field(default=UNSET, alias="associationId")
    ipv6_cidr_block_state: Optional[Ipv6CidrBlockState] = Field(default=UNSET, alias="ipv6CidrBlockState")


class Ipv6CidrBlockAssociationSetDict(TypedDict):
    ipv6_cidr_block: NotRequired[str]
    association_id: NotRequired[str]
    ipv6_cidr_block_state: NotRequired[Ipv6CidrBlockStateDict]
