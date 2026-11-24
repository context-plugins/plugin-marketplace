from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.paragraph_block_text_style import ParagraphBlockTextStyleOrStr
from .link2 import Link2, Link2Dict


class ParagraphBlockTextSection(SdkBaseModel):
    text: str
    """The text content of the paragraph."""

    styling: Optional[list[ParagraphBlockTextStyleOrStr]] = UNSET
    """The inline styles for the text."""

    text_color: Optional[str] = UNSET
    """The CSS color value for the text."""

    highlight_color: Optional[str] = UNSET
    """The CSS color value for the text highlight."""

    link: Optional[Link2] = UNSET
    """The link of the text."""


class ParagraphBlockTextSectionDict(TypedDict):
    text: str
    styling: NotRequired[list[ParagraphBlockTextStyleOrStr]]
    text_color: NotRequired[str]
    highlight_color: NotRequired[str]
    link: NotRequired[Link2Dict]
