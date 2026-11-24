from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.list_type import ListTypeOrStr
from .unions.list_block_item import ListBlockItem, ListBlockItemDict
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class SectionableBlock6(SdkBaseModel):
    type_: Literal["list"] = Field(default="list", alias="type")
    """Discriminator value: list"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    items: list[ListBlockItem]
    """The items in the list."""

    list_type: Optional[ListTypeOrStr] = Field(default=UNSET, alias="listType")
    """The type of list (e.g., ordered, unordered)."""

    start_number: Optional[int] = Field(default=UNSET, alias="startNumber")
    """The number to start the list at. Only applicable if listType is ordered."""


class SectionableBlock6Dict(TypedDict):
    type_: Literal["list"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    items: list[ListBlockItemDict]
    list_type: NotRequired[ListTypeOrStr]
    start_number: NotRequired[int]
