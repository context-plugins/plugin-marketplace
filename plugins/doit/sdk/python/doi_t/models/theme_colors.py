from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ThemeColors(SdkBaseModel):
    """Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex colors."""

    light: list[str]
    """Colors used when the report is displayed in light mode."""

    dark: list[str]
    """Colors used when the report is displayed in dark mode."""


class ThemeColorsDict(TypedDict):
    light: list[str]
    dark: list[str]
