from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ObfuscationSettingsDto(SdkBaseModel):
    enabled: bool
    required: bool


class ObfuscationSettingsDtoDict(TypedDict):
    enabled: bool
    required: bool
