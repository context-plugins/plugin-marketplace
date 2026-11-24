from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Timeline(SdkBaseModel):
    day: str
    count: int


class TimelineDict(TypedDict):
    day: str
    count: int
