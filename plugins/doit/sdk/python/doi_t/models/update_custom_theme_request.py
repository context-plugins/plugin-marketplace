from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .theme_colors import ThemeColors, ThemeColorsDict


class UpdateCustomThemeRequest(SdkBaseModel):
    """Request body for updating a custom theme. Only provided fields are modified."""

    name: OptionalNullable[str] = UNSET
    """The display name of the custom theme."""

    primary_color: Optional[str] = Field(default=UNSET, alias="primaryColor")
    """A color in hex notation. Accepts ``#RGB``, ``#RRGGBB``, or ``#RRGGBBAA``."""

    colors: Optional[ThemeColors] = UNSET
    """Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex colors."""


class UpdateCustomThemeRequestDict(TypedDict):
    name: NotRequired[str | None]
    primary_color: NotRequired[str]
    colors: NotRequired[ThemeColorsDict]
