from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosChart(SdkBaseModel):
    position: int
    collection: str
    category: str
    platform: str


class IosChartDict(TypedDict):
    position: int
    collection: str
    category: str
    platform: str
