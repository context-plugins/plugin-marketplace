from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UnusedStalenessSettings(SdkBaseModel):
    enabled: bool


class UnusedStalenessSettingsDict(TypedDict):
    enabled: bool
