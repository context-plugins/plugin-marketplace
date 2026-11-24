from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .theme_colors import ThemeColors, ThemeColorsDict


class CustomTheme(SdkBaseModel):
    """A custom color theme applied to Cloud Analytics reports."""

    id: str
    """The unique identifier of the custom theme."""

    name: str
    """The display name of the custom theme."""

    primary_color: str = Field(alias="primaryColor")
    """A color in hex notation. Accepts ``#RGB``, ``#RRGGBB``, or ``#RRGGBBAA``."""

    colors: ThemeColors
    """Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex colors."""

    create_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createTime")
    """The creation time of the custom theme."""

    update_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updateTime")
    """The time when the custom theme was last updated."""


class CustomThemeDict(TypedDict):
    id: str
    name: str
    primary_color: str
    colors: ThemeColorsDict
    create_time: NotRequired[RFC3339DateTime]
    update_time: NotRequired[RFC3339DateTime]
