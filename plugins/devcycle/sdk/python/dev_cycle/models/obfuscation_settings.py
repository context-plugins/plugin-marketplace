from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ObfuscationSettings(SdkBaseModel):
    enabled: bool
    required: bool


class ObfuscationSettingsDict(TypedDict):
    enabled: bool
    required: bool
