from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.target_shape import TargetShapeOrStr


class MultiZoneConfig(SdkBaseModel):
    """Configuration for multi-zonal clusters that can create instances across multiple Zones within the Region."""

    target_shape: Optional[TargetShapeOrStr] = Field(default=UNSET, alias="targetShape")
    """Optional. The distribution shape of the nodes in the multi-zonal cluster."""


class MultiZoneConfigDict(TypedDict):
    target_shape: NotRequired[TargetShapeOrStr]
