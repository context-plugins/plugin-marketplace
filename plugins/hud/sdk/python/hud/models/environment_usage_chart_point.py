from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class EnvironmentUsageChartPoint(SdkBaseModel):
    date: str
    hours: float = 0.0
    cost: float = 0.0
    count: int = 0


class EnvironmentUsageChartPointDict(TypedDict):
    date: str
    hours: NotRequired[float]
    cost: NotRequired[float]
    count: NotRequired[int]
