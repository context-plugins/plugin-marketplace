from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class EmbeddableBlocks5(SdkBaseModel):
    type_: Literal["advertisement"] = Field(default="advertisement", alias="type")
    """Discriminator value: advertisement"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    opportunity_id: str
    """The ID of the Advertisement opportunity."""


class EmbeddableBlocks5Dict(TypedDict):
    type_: Literal["advertisement"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    opportunity_id: str
