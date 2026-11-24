from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class EnvironmentUsageSummary(SdkBaseModel):
    total_hours: float = 0.0
    total_cost: float = 0.0
    active_count: int = 0
    total_count: int = 0


class EnvironmentUsageSummaryDict(TypedDict):
    total_hours: NotRequired[float]
    total_cost: NotRequired[float]
    active_count: NotRequired[int]
    total_count: NotRequired[int]
