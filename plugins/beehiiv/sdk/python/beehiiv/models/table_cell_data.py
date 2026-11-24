from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.text_alignment13 import TextAlignment13OrStr
from .paragraph_block_text_section import ParagraphBlockTextSection, ParagraphBlockTextSectionDict


class TableCellData(SdkBaseModel):
    text: Optional[str] = UNSET
    """The text content of the cell."""

    formatted_text: Optional[list[ParagraphBlockTextSection]] = Field(default=UNSET, alias="formattedText")
    """The formatted content of the cell."""

    alignment: Optional[TextAlignment13OrStr] = UNSET
    """The text alignment of the cell."""

    colspan: int = 1
    """The number of columns the cell spans."""

    rowspan: int = 1
    """The number of rows the cell spans."""


class TableCellDataDict(TypedDict):
    text: NotRequired[str]
    formatted_text: NotRequired[list[ParagraphBlockTextSectionDict]]
    alignment: NotRequired[TextAlignment13OrStr]
    colspan: NotRequired[int]
    rowspan: NotRequired[int]
