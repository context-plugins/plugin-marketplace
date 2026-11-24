from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.column_position1 import ColumnPosition1OrStr
from .enums.column_vertical_alignment2 import ColumnVerticalAlignment2OrStr
from .unions.embeddable_blocks6 import EmbeddableBlocks6, EmbeddableBlocks6Dict


class ColumnBlock(SdkBaseModel):
    position: Optional[ColumnPosition1OrStr] = UNSET
    """The column position. This field is deprecated but supported for existing column layouts."""

    width: Optional[int] = UNSET
    """The column width percentage. When omitted, width is calculated automatically."""

    vertical_align: Optional[ColumnVerticalAlignment2OrStr] = Field(default=UNSET, alias="verticalAlign")
    """The vertical alignment of the column content."""

    blocks: list[EmbeddableBlocks6]
    """The blocks that make up the column."""


class ColumnBlockDict(TypedDict):
    position: NotRequired[ColumnPosition1OrStr]
    width: NotRequired[int]
    vertical_align: NotRequired[ColumnVerticalAlignment2OrStr]
    blocks: list[EmbeddableBlocks6Dict]
