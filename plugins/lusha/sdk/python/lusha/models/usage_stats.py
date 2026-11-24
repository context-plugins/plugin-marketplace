from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UsageStats(SdkBaseModel):
    used: float
    total: float
    remaining: float


class UsageStatsDict(TypedDict):
    used: float
    total: float
    remaining: float
