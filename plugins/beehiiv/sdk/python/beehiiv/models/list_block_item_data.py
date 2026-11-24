from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .paragraph_block_text_section import ParagraphBlockTextSection, ParagraphBlockTextSectionDict


class ListBlockItemData(SdkBaseModel):
    text: Optional[str] = UNSET
    """The plain text content of the list item."""

    formatted_text: Optional[list[ParagraphBlockTextSection]] = Field(default=UNSET, alias="formattedText")
    """The formatted content of the list item."""


class ListBlockItemDataDict(TypedDict):
    text: NotRequired[str]
    formatted_text: NotRequired[list[ParagraphBlockTextSectionDict]]
