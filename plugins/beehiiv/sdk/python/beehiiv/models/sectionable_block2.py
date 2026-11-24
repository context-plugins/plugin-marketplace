from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sizes1 import Sizes1OrStr
from .enums.text_alignment5 import TextAlignment5OrStr
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class SectionableBlock2(SdkBaseModel):
    type_: Literal["button"] = Field(default="button", alias="type")
    """Discriminator value: button"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    href: str
    """The URL the button should use."""

    text: str
    """The text content of the button."""

    target: Optional[str] = UNSET
    """The target of the button (e.g., _blank)."""

    alignment: Optional[TextAlignment5OrStr] = UNSET
    """The text alignment of the button."""

    size: Optional[Sizes1OrStr] = UNSET
    """The size of the button (e.g., small, normal, large)."""


class SectionableBlock2Dict(TypedDict):
    type_: Literal["button"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    href: str
    text: str
    target: NotRequired[str]
    alignment: NotRequired[TextAlignment5OrStr]
    size: NotRequired[Sizes1OrStr]
