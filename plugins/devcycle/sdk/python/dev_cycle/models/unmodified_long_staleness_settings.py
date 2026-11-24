from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UnmodifiedLongStalenessSettings(SdkBaseModel):
    enabled: bool


class UnmodifiedLongStalenessSettingsDict(TypedDict):
    enabled: bool
