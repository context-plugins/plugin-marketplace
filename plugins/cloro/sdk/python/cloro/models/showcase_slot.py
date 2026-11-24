from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .image_position import ImagePosition, ImagePositionDict
from .slot_placement import SlotPlacement, SlotPlacementDict


class ShowcaseSlot(SdkBaseModel):
    """Single visual slot inside a product showcase"""

    fit: Optional[str] = UNSET
    position: Optional[ImagePosition] = UNSET
    """Pixel offset for image positioning within a slot"""

    zoom: Optional[float] = UNSET
    placement: Optional[SlotPlacement] = UNSET
    """Percent-based placement of a showcase slot within its container"""

    image_blend_mode: Optional[str] = Field(default=UNSET, alias="imageBlendMode")


class ShowcaseSlotDict(TypedDict):
    fit: NotRequired[str]
    position: NotRequired[ImagePositionDict]
    zoom: NotRequired[float]
    placement: NotRequired[SlotPlacementDict]
    image_blend_mode: NotRequired[str]
