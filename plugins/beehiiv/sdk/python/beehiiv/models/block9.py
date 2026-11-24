from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .table_cell_data import TableCellData, TableCellDataDict
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class Block9(SdkBaseModel):
    type_: Literal["table"] = Field(default="table", alias="type")
    """Discriminator value: table"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    rows: list[list[TableCellData]]
    """The rows of the table."""

    header_row: bool = Field(default=True, alias="headerRow")
    """Whether the first row is a header row."""

    header_column: bool = Field(default=False, alias="headerColumn")
    """Whether the first column is a header column."""


class Block9Dict(TypedDict):
    type_: Literal["table"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    rows: list[list[TableCellDataDict]]
    header_row: NotRequired[bool]
    header_column: NotRequired[bool]
