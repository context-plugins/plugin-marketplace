from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecapKeyMoment(SdkBaseModel):
    timestamp: int
    text: str


class RecapKeyMomentDict(TypedDict):
    timestamp: int
    text: str
