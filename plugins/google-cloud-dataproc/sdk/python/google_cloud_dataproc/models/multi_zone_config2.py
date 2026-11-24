from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.target_shape import TargetShapeOrStr


class MultiZoneConfig2(SdkBaseModel):
    """Optional. Controls how instances within this Cluster are allowed to exist in multiple Zones within the Region.
    Only one of zone_uri or multi_zone_config must be set."""

    target_shape: Optional[TargetShapeOrStr] = Field(default=UNSET, alias="targetShape")
    """Optional. The distribution shape of the nodes in the multi-zonal cluster."""


class MultiZoneConfig2Dict(TypedDict):
    target_shape: NotRequired[TargetShapeOrStr]
