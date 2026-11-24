from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SettingsCount(SdkBaseModel):
    site_id: int
    count: int
    """Entries stored after the replace."""


class SettingsCountDict(TypedDict):
    site_id: int
    count: int
