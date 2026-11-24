from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .column_block import ColumnBlock, ColumnBlockDict
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class Block7(SdkBaseModel):
    type_: Literal["columns"] = Field(default="columns", alias="type")
    """Discriminator value: columns"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    stack_on_mobile: bool = Field(default=True, alias="stackOnMobile")
    """Whether columns should stack vertically on mobile devices."""

    columns: list[ColumnBlock]
    """The blocks that make up the columns."""


class Block7Dict(TypedDict):
    type_: Literal["columns"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    stack_on_mobile: NotRequired[bool]
    columns: list[ColumnBlockDict]
