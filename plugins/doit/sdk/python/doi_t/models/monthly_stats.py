from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_monthly_stats_entry import AwsMonthlyStatsEntry, AwsMonthlyStatsEntryDict


class MonthlyStats(SdkBaseModel):
    """Trailing 6 calendar months of stats, grouped by SP type."""

    compute: Optional[list[AwsMonthlyStatsEntry]] = UNSET
    database: Optional[list[AwsMonthlyStatsEntry]] = UNSET


class MonthlyStatsDict(TypedDict):
    compute: NotRequired[list[AwsMonthlyStatsEntryDict]]
    database: NotRequired[list[AwsMonthlyStatsEntryDict]]
