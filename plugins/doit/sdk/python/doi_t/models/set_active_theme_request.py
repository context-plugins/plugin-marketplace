from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SetActiveThemeRequest(SdkBaseModel):
    """Request body for setting the active custom or preset theme for the authenticated user."""

    theme_id: str = Field(default="default", alias="themeId")
    """Identifier of the theme to activate. Send the reserved sentinel ``"default"`` to clear the active theme and fall
    back to the built-in default."""


class SetActiveThemeRequestDict(TypedDict):
    theme_id: str
