from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.text_alignment3 import TextAlignment3OrStr
from .enums.text_alignment4 import TextAlignment4OrStr
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class SectionableBlock1(SdkBaseModel):
    type_: Literal["image"] = Field(default="image", alias="type")
    """Discriminator value: image"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    image_url: str = Field(alias="imageUrl")
    """The URL of the image."""

    url: Optional[str] = UNSET
    """The URL that the image should link to."""

    title: Optional[str] = UNSET
    """The title of the image."""

    alt_text: Optional[str] = UNSET
    """Alternative text for the image."""

    caption: Optional[str] = UNSET
    """A caption for the image."""

    image_alignment: Optional[TextAlignment3OrStr] = Field(default=UNSET, alias="imageAlignment")
    """The text alignment of the image."""

    caption_alignment: Optional[TextAlignment4OrStr] = Field(default=UNSET, alias="captionAlignment")
    """The text alignment of the caption."""

    width: Optional[int] = UNSET
    """The width of the image. Should be between 1 and 100."""


class SectionableBlock1Dict(TypedDict):
    type_: Literal["image"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    image_url: str
    url: NotRequired[str]
    title: NotRequired[str]
    alt_text: NotRequired[str]
    caption: NotRequired[str]
    image_alignment: NotRequired[TextAlignment3OrStr]
    caption_alignment: NotRequired[TextAlignment4OrStr]
    width: NotRequired[int]
