from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SlotPlacement(SdkBaseModel):
    """Percent-based placement of a showcase slot within its container"""

    left_percent: Optional[float] = Field(default=UNSET, alias="leftPercent")
    top_percent: Optional[float] = Field(default=UNSET, alias="topPercent")
    width_percent: Optional[float] = Field(default=UNSET, alias="widthPercent")
    height_percent: Optional[float] = Field(default=UNSET, alias="heightPercent")


class SlotPlacementDict(TypedDict):
    left_percent: NotRequired[float]
    top_percent: NotRequired[float]
    width_percent: NotRequired[float]
    height_percent: NotRequired[float]
