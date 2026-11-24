from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecapBulletPoint(SdkBaseModel):
    timestamp: int
    text: str


class RecapBulletPointDict(TypedDict):
    timestamp: int
    text: str
