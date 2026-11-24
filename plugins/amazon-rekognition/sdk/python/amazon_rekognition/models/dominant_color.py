from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DominantColor(SdkBaseModel):
    red: Optional[int] = Field(default=UNSET, alias="Red")
    """The Red RGB value for a dominant color."""

    blue: Optional[int] = Field(default=UNSET, alias="Blue")
    """The Blue RGB value for a dominant color."""

    green: Optional[int] = Field(default=UNSET, alias="Green")
    """The Green RGB value for a dominant color."""

    hex_code: Optional[str] = Field(default=UNSET, alias="HexCode")
    """The Hex code equivalent of the RGB values for a dominant color."""

    css_color: Optional[str] = Field(default=UNSET, alias="CSSColor")
    """The CSS color name of a dominant color."""

    simplified_color: Optional[str] = Field(default=UNSET, alias="SimplifiedColor")
    """One of 12 simplified color names applied to a dominant color."""

    pixel_percent: Optional[float] = Field(default=UNSET, alias="PixelPercent")
    """The percentage of image pixels that have a given dominant color."""


class DominantColorDict(TypedDict):
    red: NotRequired[int]
    blue: NotRequired[int]
    green: NotRequired[int]
    hex_code: NotRequired[str]
    css_color: NotRequired[str]
    simplified_color: NotRequired[str]
    pixel_percent: NotRequired[float]
