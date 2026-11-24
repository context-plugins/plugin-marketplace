from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ActiveTheme(SdkBaseModel):
    """The theme currently active for the authenticated user."""

    theme_id: str = Field(default="default", alias="themeId")
    """Identifier of the active theme. The reserved sentinel ``"default"`` is returned when the user is using the
    built-in default (no custom or preset theme stored)."""


class ActiveThemeDict(TypedDict):
    theme_id: str
