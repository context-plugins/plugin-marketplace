from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.text_alignment1 import TextAlignment1OrStr
from .enums.text_alignment2 import TextAlignment2OrStr
from .paragraph_block_text_section import ParagraphBlockTextSection, ParagraphBlockTextSectionDict
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class EmbeddableBlocks(SdkBaseModel):
    type_: Literal["paragraph"] = Field(default="paragraph", alias="type")
    """Discriminator value: paragraph"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    plaintext: Optional[str] = UNSET
    """The plaintext content of the paragraph."""

    formatted_text: Optional[list[ParagraphBlockTextSection]] = Field(default=UNSET, alias="formattedText")
    """The formatted content of the paragraph."""

    text_alignment: Optional[TextAlignment1OrStr] = Field(default=UNSET, alias="textAlignment")
    """The text alignment of the paragraph (e.g., left, center, right)."""

    text_align: Optional[TextAlignment2OrStr] = Field(default=UNSET, alias="textAlign")
    """Legacy paragraph alignment field. Use ``textAlignment`` for new integrations."""


class EmbeddableBlocksDict(TypedDict):
    type_: Literal["paragraph"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    plaintext: NotRequired[str]
    formatted_text: NotRequired[list[ParagraphBlockTextSectionDict]]
    text_alignment: NotRequired[TextAlignment1OrStr]
    text_align: NotRequired[TextAlignment2OrStr]
