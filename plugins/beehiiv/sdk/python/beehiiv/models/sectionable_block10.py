from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class SectionableBlock10(SdkBaseModel):
    type_: Literal["poll"] = Field(default="poll", alias="type")
    """Discriminator value: poll"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    poll_id: str
    """The ID of the poll you wish to include."""

    show_options_initially: Optional[bool] = UNSET
    """Whether to show the poll options initially. Defaults to false."""


class SectionableBlock10Dict(TypedDict):
    type_: Literal["poll"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    poll_id: str
    show_options_initially: NotRequired[bool]
