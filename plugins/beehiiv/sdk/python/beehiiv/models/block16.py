from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.sectionable_block14 import SectionableBlock14, SectionableBlock14Dict
from .visibility_settings33 import VisibilitySettings33, VisibilitySettings33Dict
from .visual_settings32 import VisualSettings32, VisualSettings32Dict


class Block16(SdkBaseModel):
    type_: Literal["section"] = Field(default="section", alias="type")
    """Discriminator value: section"""

    blocks: list[SectionableBlock14]
    """The blocks to group inside this section. Must contain at least one block. Cannot contain ``section`` or
    ``columns`` blocks."""

    visual_settings: Optional[VisualSettings32] = UNSET
    """Optional styling applied to the section as a whole (background color, padding, borders, etc.)."""

    visibility_settings: Optional[VisibilitySettings33] = UNSET
    """Optional rules for when/where this section is shown, including dynamic content targeting via condition sets."""


class Block16Dict(TypedDict):
    type_: Literal["section"]
    blocks: list[SectionableBlock14Dict]
    visual_settings: NotRequired[VisualSettings32Dict]
    visibility_settings: NotRequired[VisibilitySettings33Dict]
