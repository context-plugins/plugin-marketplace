from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ColorSettings(SdkBaseModel):
    primary: str
    secondary: str


class ColorSettingsDict(TypedDict):
    primary: str
    secondary: str
