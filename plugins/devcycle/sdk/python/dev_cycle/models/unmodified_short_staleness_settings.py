from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UnmodifiedShortStalenessSettings(SdkBaseModel):
    enabled: bool


class UnmodifiedShortStalenessSettingsDict(TypedDict):
    enabled: bool
