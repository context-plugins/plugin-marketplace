from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EdgeDbSettings(SdkBaseModel):
    enabled: bool


class EdgeDbSettingsDict(TypedDict):
    enabled: bool
