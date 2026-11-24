from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.heading_level1 import HeadingLevel1OrStr
from .enums.text_alignment6 import TextAlignment6OrStr
from .paragraph_block_text_section import ParagraphBlockTextSection, ParagraphBlockTextSectionDict
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class Block3(SdkBaseModel):
    type_: Literal["heading"] = Field(default="heading", alias="type")
    """Discriminator value: heading"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    level: HeadingLevel1OrStr
    """The level of the header (e.g., 1, 2, 3, etc.)."""

    text_alignment: Optional[TextAlignment6OrStr] = Field(default=UNSET, alias="textAlignment")
    """The text alignment of the header (e.g., left, center, right)."""

    text: Optional[str] = UNSET
    """The text content of the header. Ignored if ``formattedText`` is provided."""

    formatted_text: Optional[list[ParagraphBlockTextSection]] = Field(default=UNSET, alias="formattedText")
    """The formatted content of the header, supporting links and inline styling."""

    anchor_header: bool = Field(default=True, alias="anchorHeader")
    """Whether the header should be an anchor header."""

    anchor_include_in_toc: bool = Field(default=True, alias="anchorIncludeInToc")
    """Whether the header should be included in the table of contents."""


class Block3Dict(TypedDict):
    type_: Literal["heading"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    level: HeadingLevel1OrStr
    text_alignment: NotRequired[TextAlignment6OrStr]
    text: NotRequired[str]
    formatted_text: NotRequired[list[ParagraphBlockTextSectionDict]]
    anchor_header: NotRequired[bool]
    anchor_include_in_toc: NotRequired[bool]
