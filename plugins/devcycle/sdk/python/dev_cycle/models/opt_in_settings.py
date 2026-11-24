from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .color_settings import ColorSettings, ColorSettingsDict


class OptInSettings(SdkBaseModel):
    enabled: bool
    title: str
    description: str
    image_url: str = Field(alias="imageURL")
    colors: ColorSettings
    powered_by_alignment: Any = Field(alias="poweredByAlignment")


class OptInSettingsDict(TypedDict):
    enabled: bool
    title: str
    description: str
    image_url: str
    colors: ColorSettingsDict
    powered_by_alignment: Any
