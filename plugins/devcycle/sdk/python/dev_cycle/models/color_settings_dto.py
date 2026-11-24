from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ColorSettingsDto(SdkBaseModel):
    primary: str
    secondary: str


class ColorSettingsDtoDict(TypedDict):
    primary: str
    secondary: str
