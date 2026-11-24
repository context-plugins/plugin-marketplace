from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .usage_stats import UsageStats, UsageStatsDict


class AccountUsageStatsResponse(SdkBaseModel):
    usage: dict[str, UsageStats]


class AccountUsageStatsResponseDict(TypedDict):
    usage: dict[str, UsageStatsDict]
