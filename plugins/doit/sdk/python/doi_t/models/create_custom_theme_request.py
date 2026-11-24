from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .theme_colors import ThemeColors, ThemeColorsDict


class CreateCustomThemeRequest(SdkBaseModel):
    """Request body for creating a custom theme."""

    name: str
    """The display name of the custom theme."""

    primary_color: str = Field(alias="primaryColor")
    """A color in hex notation. Accepts ``#RGB``, ``#RRGGBB``, or ``#RRGGBBAA``."""

    colors: ThemeColors
    """Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex colors."""


class CreateCustomThemeRequestDict(TypedDict):
    name: str
    primary_color: str
    colors: ThemeColorsDict
