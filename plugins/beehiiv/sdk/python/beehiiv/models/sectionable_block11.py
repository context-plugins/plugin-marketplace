from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.quote_variant1 import QuoteVariant1OrStr
from .enums.text_alignment14 import TextAlignment14OrStr
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class SectionableBlock11(SdkBaseModel):
    type_: Literal["quote"] = Field(default="quote", alias="type")
    """Discriminator value: quote"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    variant: Optional[QuoteVariant1OrStr] = UNSET
    """The type of quote block. Defaults to "block"."""

    quote: str
    """The text of the quote."""

    alignment: Optional[TextAlignment14OrStr] = UNSET
    """The text alignment of the quote. Defaults depend on the variant."""

    author: Optional[str] = UNSET
    """The author of the quote."""


class SectionableBlock11Dict(TypedDict):
    type_: Literal["quote"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    variant: NotRequired[QuoteVariant1OrStr]
    quote: str
    alignment: NotRequired[TextAlignment14OrStr]
    author: NotRequired[str]
