from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_monthly_stats_entry import AwsMonthlyStatsEntry, AwsMonthlyStatsEntryDict


class MonthlyStats1(SdkBaseModel):
    """Trailing 6 calendar months of AWS organization stats, grouped by SP type."""

    compute: Optional[list[AwsMonthlyStatsEntry]] = UNSET
    database: Optional[list[AwsMonthlyStatsEntry]] = UNSET


class MonthlyStats1Dict(TypedDict):
    compute: NotRequired[list[AwsMonthlyStatsEntryDict]]
    database: NotRequired[list[AwsMonthlyStatsEntryDict]]
