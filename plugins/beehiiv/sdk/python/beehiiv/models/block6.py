from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.automated_advertisement_kind2 import AutomatedAdvertisementKind2OrStr
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class Block6(SdkBaseModel):
    type_: Literal["automated_advertisement_placement"] = Field(
        default="automated_advertisement_placement", alias="type"
    )
    """Discriminator value: automated_advertisement_placement"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    advertisement_kind: AutomatedAdvertisementKind2OrStr
    """The automated advertisement kind to fill at publish time."""


class Block6Dict(TypedDict):
    type_: Literal["automated_advertisement_placement"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    advertisement_kind: AutomatedAdvertisementKind2OrStr
