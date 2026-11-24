from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayChart(SdkBaseModel):
    position: int
    collection: str
    category: str


class PlayChartDict(TypedDict):
    position: int
    collection: str
    category: str
