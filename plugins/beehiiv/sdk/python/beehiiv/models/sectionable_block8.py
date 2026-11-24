from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class SectionableBlock8(SdkBaseModel):
    type_: Literal["html"] = Field(default="html", alias="type")
    """Discriminator value: html"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    html: str
    """The raw HTML content. Note that ``<style>`` and ``<link>`` tags are removed during sanitization — use inline
    styles for all visual styling."""


class SectionableBlock8Dict(TypedDict):
    type_: Literal["html"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    html: str
