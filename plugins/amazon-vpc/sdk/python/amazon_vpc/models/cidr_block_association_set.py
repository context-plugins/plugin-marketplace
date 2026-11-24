from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cidr_block_state import CidrBlockState, CidrBlockStateDict


class CidrBlockAssociationSet(SdkBaseModel):
    cidr_block: Optional[str] = Field(default=UNSET, alias="cidrBlock")
    association_id: Optional[str] = Field(default=UNSET, alias="associationId")
    cidr_block_state: Optional[CidrBlockState] = Field(default=UNSET, alias="cidrBlockState")


class CidrBlockAssociationSetDict(TypedDict):
    cidr_block: NotRequired[str]
    association_id: NotRequired[str]
    cidr_block_state: NotRequired[CidrBlockStateDict]
